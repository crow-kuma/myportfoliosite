#!/bin/bash

# Astro & Sanity 同時開発サーバ起動スクリプト

# それぞれのプロジェクトの絶対or相対パスを記入（下は相対パス例）
ASTRO_DIR="./portfolioAstro"
SANITY_DIR="./portfolioSanity"

# Astro devサーバ起動（バックグラウンド実行）
cd "$ASTRO_DIR"
npm run dev &

# サニティ devサーバ起動（バックグラウンド実行）
cd ../"$SANITY_DIR"
npm run dev &

# 任意で両方の停止までシェルを維持したい場合
wait
