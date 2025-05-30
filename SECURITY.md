# 🔒 セキュリティガイドライン

## 機密情報保護の基本原則

### ✅ やるべきこと

1. **環境変数の適切な管理**
   - `.env.local` を使用（自動的にgitignoreされる）
   - Vercel Dashboardで本番環境変数を設定
   - GitHub Secretsでデプロイ用変数を管理

2. **APIキーの安全な使用**
   - サーバーサイドでのみ使用
   - `NEXT_PUBLIC_` プレフィックスは避ける（クライアントに公開される）
   - 定期的にローテーション

3. **コードでの安全な実装**
   - 環境変数の存在チェック
   - エラーログから機密情報を除外
   - オリジン検証の実装

### ❌ やってはいけないこと

1. **絶対にコミットしない**
   - `.env` ファイル
   - APIキー、パスワード、トークン
   - データベース接続文字列
   - 証明書ファイル

2. **ログに出力しない**
   - パスワード
   - APIキー
   - 個人情報
   - セッション情報

3. **クライアントサイドで使用しない**
   - サーバー専用のAPIキー
   - データベース認証情報
   - 内部システムのURL

## セキュリティチェックツール

### 1. Gitleaks（機密情報スキャン）
```bash
# ローカルでのスキャン
npm run security:scan
```

### 2. npm audit（依存関係チェック）
```bash
# 脆弱性チェック
npm audit
npm audit fix
```

### 3. ESLint（コード品質）
```bash
# セキュリティルールを含むlint
npm run lint
```

## 緊急時の対応

### 機密情報が誤ってコミットされた場合

1. **即座に行う対応**
   ```bash
   # APIキーを無効化/再生成
   # Vercel Dashboard → Settings → Environment Variables
   
   # GitHub Secrets を更新
   # Repository → Settings → Secrets and variables → Actions
   ```

2. **Gitの履歴からの削除**
   ```bash
   # 注意: 共有リポジトリでは慎重に実行
   git filter-branch --force --index-filter \
   'git rm --cached --ignore-unmatch path/to/secret/file' \
   --prune-empty --tag-name-filter cat -- --all
   
   # 強制プッシュ（危険な操作）
   git push origin --force --all
   ```

3. **チーム通知**
   - セキュリティインシデントの報告
   - 影響範囲の確認
   - 再発防止策の検討

## 定期的なセキュリティメンテナンス

### 月次チェック
- [ ] 依存関係の脆弱性スキャン
- [ ] 未使用の環境変数の削除
- [ ] アクセスログの確認

### 四半期チェック
- [ ] APIキーのローテーション
- [ ] セキュリティ設定の見直し
- [ ] チームセキュリティトレーニング

## 環境別設定例

### 開発環境 (.env.local)
```bash
NODE_ENV=development
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=dev-secret-change-in-production
SMTP_HOST=smtp.ethereal.email  # テスト用
```

### 本番環境 (Vercel Dashboard)
```bash
NODE_ENV=production
NEXTAUTH_URL=https://clan-roan.vercel.app
NEXTAUTH_SECRET=32文字以上のランダム文字列
SMTP_HOST=実際のSMTPサーバー
SMTP_USER=実際のユーザー
SMTP_PASS=実際のパスワード
```

### GitHub Secrets (Repository Settings)
```bash
VERCEL_TOKEN=デプロイ用トークン
VERCEL_PROJECT_ID=プロジェクトID
VERCEL_ORG_ID=組織ID
```

## セキュリティベストプラクティス

### 1. 最小権限の原則
- 必要最小限の権限のみ付与
- 役割ベースのアクセス制御

### 2. 多層防御
- 複数のセキュリティ層を実装
- フロントエンド + バックエンド + インフラ

### 3. 継続的監視
- 自動セキュリティスキャン
- ログ監視とアラート

### 4. インシデント対応計画
- 緊急連絡先の整備
- 対応手順の文書化
- 復旧プロセスの確立