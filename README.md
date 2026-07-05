# 政治社会意見サイトの運用ガイド

## 1. GitHub Pagesへの公開手順

1. このフォルダの中身をそのままGitHubリポジトリの直下にpush
2. リポジトリの Settings → Pages → Source を「Deploy from a branch」にし、`main`ブランチ・`/(root)`を選択
3. `_config.yml`の`url`をリポジトリのGitHub Pages URLに合わせて修正
   - `https://ユーザー名.github.io`（ユーザーページ）
   - `https://ユーザー名.github.io/リポジトリ名`（プロジェクトページ。この場合`baseurl: "/リポジトリ名"`も設定）

## 2. 新しい記事を書く手順（唯一、日常的にやること）

`_posts/` に以下のファイル名ルールで新規Markdownファイルを作るだけです。

```
_posts/YYYY-MM-DD-好きなタイトル.md
```

Front Matterの書き方（コピペして使ってください）:

```yaml
---
layout: post
title: "記事タイトル"
categories: [politics]   # または [society]
tags: [タグ1, タグ2]       # 任意
featured: false           # trueにするとトップの「注目記事」に表示
intro: >
  導入文。省略可能。
asides:                   # 任意。皮肉コメント欄。複数書ける
  - "ひとこと目"
  - "ふたこと目"
references:                # 任意。参考リンク欄
  - title: "参照元のタイトル"
    url: "https://example.com"
---

ここから本文を自由に書く。
Markdownの見出し(##)・引用(>)・リストなど全部使える。
```

- `categories`は `politics` か `society` の**どちらか1つ**を想定した設計です（`[politics]`のように配列で1つだけ入れる）。
- 本文中の `>` で始まる行は自動的に引用ブロックのデザインになります。皮肉なひとことを引用形式で挟むのに便利です。

## 3. カテゴリを増やしたくなった場合

1. `_config.yml`の`categories`と`category_names`、`category_colors`に追記
2. `category/新カテゴリ名.html`を1ファイル追加（`category/politics.html`をコピーして中身を書き換えるだけ）
3. `_includes/header.html`のナビゲーションに1行追加
4. `_sass/_base.scss`に新カテゴリ用の色（`--color-新カテゴリ`など）を追加

## 4. ローカルで確認する場合

Ruby環境がある場合:

```bash
bundle install
bundle exec jekyll serve
```

`http://localhost:4000` で確認できます。
