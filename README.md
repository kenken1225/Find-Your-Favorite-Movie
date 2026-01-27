# Movie List React

映画が好きで、自分用のムービーリストアプリを作ってみました。
TMDB API で映画情報を取得して、検索したりトレンドを見れるようにしています。

## 機能

- 映画検索（入力中に連続で API を叩かないように debounce 入れてます）
- トレンド表示（よく検索された映画を Appwrite に保存してランキング化）
- 映画カード表示（ポスター、評価、公開年など）

## 使った技術

- React 19 + TypeScript
- Vite（ビルドツール）
- TailwindCSS（スタイリング）
- Appwrite（検索履歴の保存用）
- TMDB API（映画データ取得）

## セットアップ

```bash
# クローン
git clone https://github.com/your-username/movie-list-react.git
cd movie-list-react

# インストール
npm install

# 環境変数の設定（.env.exampleをコピーして編集）
cp .env.example .env

# 起動
npm run dev
```

http://localhost:5173 で開けます。

### 環境変数について

TMDB と Appwrite の API キーが必要です。

- TMDB: https://www.themoviedb.org/ でアカウント作って API キー取得
- Appwrite: https://appwrite.io/ でプロジェクト作成して各種 ID を取得

詳しくは `.env.example` を見てください。

## ファイル構成

```
src/
├── components/
│   ├── MovieCard.tsx   # 映画カード
│   ├── Search.tsx      # 検索バー
│   └── Spinner.tsx     # ローディング
├── App.tsx             # メイン
├── Appwrite.tsx        # Appwrite連携
├── types.ts            # 型定義
└── main.tsx            # エントリーポイント
```
