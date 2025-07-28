#!/bin/bash
set -euo pipefail
IFS=$'\n\t'

# それぞれのプロジェクトの絶対or相対パスを記入（下は相対パス例）
SCRIPT_DIR="$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
ASTRO_DIR="${SCRIPT_DIR}/../portfolioAstro"
SANITY_DIR="${SCRIPT_DIR}/../portfolioSanity"
SANITY_DIR="./portfolioSanity"

# Astro devサーバ起動（バックグラウンド実行）
pushd "$ASTRO_DIR" > /dev/null
npm run dev &
popd > /dev/null

# Sanity devサーバ起動（バックグラウンド実行）
pushd "$SANITY_DIR" > /dev/null
npm run dev &
popd > /dev/null

# 任意で両方の停止までシェルを維持したい場合
trap 'echo "Stopping dev servers…"; kill $(jobs -p); wait' INT TERM
wait
