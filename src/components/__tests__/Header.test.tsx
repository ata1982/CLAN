import { render, screen } from '@testing-library/react';
import Header from '../layout/Header';

// Next.js routerのモック
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    pathname: '/',
  }),
  usePathname: () => '/',
}));

describe('Header', () => {
  test('ヘッダーが正しく表示される', () => {
    render(<Header />);
    
    // ロゴの確認
    expect(screen.getByText('CLAN')).toBeInTheDocument();
    
    // ナビゲーションリンクの確認（更新されたナビゲーション）
    const navigation = screen.getByRole('navigation', { name: 'メインナビゲーション' });
    expect(navigation).toBeInTheDocument();
    
    // 現在のナビゲーションアイテムを確認
    expect(screen.getAllByText('ホーム').length).toBeGreaterThan(0);
    expect(screen.getAllByText('ブログ').length).toBeGreaterThan(0);
    expect(screen.getAllByText('まえゆきツール').length).toBeGreaterThan(0);
    expect(screen.getAllByText('お客様の声').length).toBeGreaterThan(0);
    expect(screen.getAllByText('お問い合わせ').length).toBeGreaterThan(0);
  });

  test('検索ボタンが表示される', () => {
    render(<Header />);
    
    const searchButton = screen.getByLabelText('検索');
    expect(searchButton).toBeInTheDocument();
  });

  test('モバイルメニューボタンが表示される', () => {
    render(<Header />);
    
    const menuButton = screen.getByLabelText('メニューを開く');
    expect(menuButton).toBeInTheDocument();
  });

  test('CTAボタンが表示される', () => {
    render(<Header />);
    
    const ctaButtons = screen.getAllByText('まずは相談する');
    expect(ctaButtons.length).toBeGreaterThan(0);
  });

  test('ナビゲーションリンクが正しいhrefを持つ', () => {
    render(<Header />);
    
    // 最初に見つかるリンクを使用（デスクトップ版）
    const homeLinks = screen.getAllByRole('link', { name: 'ホーム' });
    expect(homeLinks[0]).toHaveAttribute('href', '/');
    
    const blogLinks = screen.getAllByRole('link', { name: 'ブログ' });
    expect(blogLinks[0]).toHaveAttribute('href', '/blog');
    
    const toolsLinks = screen.getAllByRole('link', { name: 'まえゆきツール' });
    expect(toolsLinks[0]).toHaveAttribute('href', '/tools');
    
    const achievementLinks = screen.getAllByRole('link', { name: 'お客様の声' });
    expect(achievementLinks[0]).toHaveAttribute('href', '/achievement');
    
    const contactLinks = screen.getAllByRole('link', { name: 'お問い合わせ' });
    expect(contactLinks[0]).toHaveAttribute('href', '/contact');
  });

  test('アクセシビリティ属性が正しく設定される', () => {
    render(<Header />);
    
    const nav = screen.getByRole('navigation', { name: 'メインナビゲーション' });
    expect(nav).toHaveAttribute('aria-label', 'メインナビゲーション');
    
    const menuButton = screen.getByLabelText('メニューを開く');
    expect(menuButton).toHaveAttribute('aria-expanded', 'false');
  });
});