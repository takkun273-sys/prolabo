# プロラボ モンスターズ GitHub Pages 配布構成

推奨構成:

- `/index.html` … 案内トップ
- `/test/index.html` … 全校舎テスト版 Ver.5
- `/app/index.html` … 将来の正式版

GitHub Pages が `https://<account>.github.io/<repo>/` の場合:

- 案内トップ: `https://<account>.github.io/<repo>/`
- テスト版: `https://<account>.github.io/<repo>/test/`
- 正式版（将来）: `https://<account>.github.io/<repo>/app/`

## 公開手順
1. GitHub の対象リポジトリを開く。
2. このフォルダ内の `index.html` と `test` フォルダをリポジトリ直下へ配置する。
3. Settings → Pages で Branch deployment を選び、対象ブランチ（通常 main）/ root を指定する。
4. 発行された Pages URL の末尾に `/test/` を付けてテスト版へアクセスする。
5. 他校舎には `/test/` のURLだけを共有する。

## 運用ルール
- テスト版では実在児童の氏名・個人情報を入力しない。
- 正式版を公開するまでは `/app/` を作成しない、または非公開運用にする。
- テスト版を更新するときは `/test/index.html` を差し替える。
- 正式版を公開後も、検証用 `/test/` は残す。

## 推奨リポジトリ例
`prolabo-monsters`

