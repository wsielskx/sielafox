#!/usr/bin/env bash
# Sign a built WebExtension on AMO as "unlisted" (self-distributed) so stable
# Firefox installs it permanently.
#
# Credentials: AMO API key from https://addons.mozilla.org/developers/addon/api/key/
#   either export AMO_JWT_ISSUER / AMO_JWT_SECRET, or put those two lines in
#   ~/.config/amo/credentials.env (chmod 600). Never commit them.
#
# Usage: scripts/sign-extension.sh <built-extension-dir> [more dirs...]
#   WXT projects: build first (wxt build -b firefox), then pass .output/firefox-mv2
# Output: <dir>/web-ext-artifacts/*.xpi  -> open it in Firefox to install.
# Every re-sign needs a higher manifest version.
set -euo pipefail
cred="${HOME}/.config/amo/credentials.env"
if [ -z "${AMO_JWT_ISSUER:-}" ] && [ -f "$cred" ]; then
  # shellcheck disable=SC1090
  set -a; . "$cred"; set +a
fi
: "${AMO_JWT_ISSUER:?set AMO_JWT_ISSUER (or create $cred)}"
: "${AMO_JWT_SECRET:?set AMO_JWT_SECRET (or create $cred)}"
[ "$#" -gt 0 ] || { echo "usage: $0 <built-extension-dir>..." >&2; exit 1; }
for dir in "$@"; do
  [ -f "$dir/manifest.json" ] || { echo "no manifest.json in $dir" >&2; exit 1; }
  echo "== lint $dir"
  npx --yes web-ext lint --source-dir "$dir" --warnings-as-errors=false
  echo "== sign $dir"
  npx --yes web-ext sign \
    --source-dir "$dir" \
    --artifacts-dir "$dir/web-ext-artifacts" \
    --channel unlisted \
    --api-key "$AMO_JWT_ISSUER" \
    --api-secret "$AMO_JWT_SECRET"
done
