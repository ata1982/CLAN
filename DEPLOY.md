# VSCode → GitHub Actions → Vercel 自動デプロイ設定

## 🚀 デプロイフロー
VSCode → git push → GitHub Actions → Vercel API → デプロイ完了

## 📋 設定済み項目
- ✅ Next.js プロジェクト (App Router)
- ✅ GitHub Actions ワークフロー (`.github/workflows/deploy.yml`)
- ✅ Next.js 最適化設定 (`next.config.ts`)
- ✅ 環境変数サンプル (`.env.example`)

## ⚙️ 必要な設定手順

### STEP 1: GitHub Secrets設定
GitHub Repository → Settings → Secrets and variables → Actions で以下を設定:

```
VERCEL_TOKEN = fps9igcLXnBXi6QjlAZLXReB
VERCEL_PROJECT_ID = prj_HNDFhhznZiYDn7OY5ItTuUYL8KTA
VERCEL_ORG_ID = team_x1yX5LGP9hQd14xqyuHkFZEj
```

### STEP 2: Vercel環境変数設定
Vercel Dashboard → Settings → Environment Variables で以下を設定:

```
NODE_ENV = production
NEXTAUTH_URL = https://clan-roan.vercel.app/
NEXTAUTH_SECRET = NbzDDIOFwsr/tD8kQehp72GnxRoh015YCpiE5J7ThZo=
```

### STEP 3: 初回デプロイ
```bash
# 変更をコミット
git add .
git commit -m "feat: GitHub Actions自動デプロイ設定"

# プッシュ（GitHub Actions起動）
git push origin main
```

## 🔄 開発フロー

### 通常の開発
```bash
# ローカル開発
npm run dev

# 変更をコミット・プッシュ
git add .
git commit -m "feat: 新機能追加"
git push origin main
# → 自動的に本番デプロイが実行されます
```

### Pull Request フロー
```bash
# フィーチャーブランチ作成
git checkout -b feature/new-feature

# 開発・コミット
git add .
git commit -m "feat: 新機能開発"
git push origin feature/new-feature

# GitHub でPull Request作成
# → プレビューデプロイが自動実行
# → コメントにプレビューURL表示

# レビュー完了後、mainにマージ
# → 本番デプロイが自動実行
```

## 📊 デプロイ確認方法

### GitHub Actions確認
1. GitHub Repository → Actions タブ
2. ワークフロー実行状況を確認
3. ログでビルド・デプロイ状況を確認

### Vercel確認
1. Vercel Dashboard → Deployments
2. デプロイ状況を確認
3. 本番URLで動作確認

## 🛠️ 実行されるチェック項目
GitHub Actionsで以下が自動実行されます:

- ✅ 依存関係インストール (`npm ci`)
- ✅ TypeScript型チェック (`npm run type-check`)
- ✅ ESLint チェック (`npm run lint`)
- ✅ Jest テスト実行 (`npm test`)
- ✅ ビルド実行 (`npm run build`)
- ✅ Vercelデプロイ

## 🆘 トラブルシューティング

### ❌ ビルドエラー
```bash
# ローカルで確認
npm run build

# エラーがあれば修正してプッシュ
git add .
git commit -m "fix: ビルドエラー修正"
git push origin main
```

### ❌ テストエラー
```bash
# ローカルでテスト実行
npm test

# テスト修正後
git add .
git commit -m "fix: テスト修正"
git push origin main
```

### ❌ Vercel API エラー
- GitHub SecretsのVERCEL_TOKENを確認
- Vercel Tokenが有効か確認
- 必要に応じてトークンを再生成

## ✅ チェックリスト

### 初回設定
- [ ] GitHub Secrets設定完了
- [ ] Vercel環境変数設定完了
- [ ] ローカルで `npm run build` が成功する
- [ ] ローカルで `npm test` が成功する

### デプロイ前
- [ ] `npm run dev` でローカル動作確認
- [ ] `npm run lint` でlintエラーなし
- [ ] `npm run type-check` でTypeScriptエラーなし
- [ ] `npm test` でテスト成功

### デプロイ後
- [ ] GitHub Actions が成功
- [ ] Vercel デプロイが成功
- [ ] 本番URLで動作確認
- [ ] モバイル表示確認

## 🎯 メリット
- 🔄 **完全自動化**: プッシュするだけで本番デプロイ
- 🔍 **品質チェック**: 型チェック・lint・テストを自動実行
- 🌐 **プレビュー機能**: PR毎にプレビューURL生成
- 🛡️ **安全性**: mainブランチのみ本番デプロイ
- ⚡ **高速**: Next.js最適化とVercelの高速CDN