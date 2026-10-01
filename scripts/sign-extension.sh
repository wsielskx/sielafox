#!/usr/bin/env bash
# Sign a local WebExtension on AMO as "unlisted" (self-distributed) so stable
# Firefox installs it permanently. Needs an AMO API key:
#   https://addons.mozilla.org/developers/addon/api/key/
# Export AMO_JWT_ISSUER and AMO_JWT_SECRET (e.g. in ~/.zshrc or a .env you source).
# Usage: scripts/sign-extension.sh <extension-dir> [more dirs...]
# Output: <extension-dir>/web-ext-artifacts/*.xpi  -> drag into Firefox, done.
set -euo pipefail
: "${AMO_JWT_ISSUER:?set AMO_JWT_ISSUER}" "${AMO_JWT_SECRET:?set AMO_JWT_SECRET}"
for dir in "$@"; do
  echo "== signing $dir"
  npx --yes web-ext sign \
    --source-dir "$dir" \
    --channel unlisted \
    --api-key "$AMO_JWT_ISSUER" \
    --api-secret "$AMO_JWT_SECRET"
done
