#!/usr/bin/env bash
# Rebuild user.js = upstream Betterfox (verbatim) + scripts/sielafox-overrides.js
# Usage: scripts/update-betterfox.sh [ref]   (ref = git tag/branch, default main)
set -euo pipefail
cd "$(dirname "$0")/.."
ref="${1:-main}"
url="https://raw.githubusercontent.com/yokoffing/Betterfox/${ref}/user.js"
tmp="$(mktemp)"
curl -fsSL "$url" -o "$tmp"
grep -q 'END: BETTERFOX' "$tmp" || { echo "downloaded file does not look like Betterfox user.js" >&2; exit 1; }
ver="$(grep -m1 -oE 'version: *[0-9]+' "$tmp" | grep -oE '[0-9]+')"
{ cat "$tmp"; cat scripts/sielafox-overrides.js; } > user.js
rm -f "$tmp"
echo "user.js rebuilt from Betterfox ${ver} (${ref}) + sielafox overrides"
echo "review with: git diff user.js"
