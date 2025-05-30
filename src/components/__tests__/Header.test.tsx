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
      // ナビゲーションリンクの確認（デスクトップ版のみ）
    const navigation = screen.getByRole('navigation', { name: 'メインナビゲーション' });
    expect(navigation).toBeInTheDocument();
    
    // 最初の「ホーム」リンクのみを確認
    const homeLinks = screen.getAllByText('ホーム');
    expect(homeLinks.length).toBeGreaterThan(0);
      expect(screen.getAllByText('会社概要').length).toBeGreaterThan(0);
    expect(screen.getAllByText('コース').length).toBeGreaterThan(0);
    expect(screen.getAllByText('セミナー').length).toBeGreaterThan(0);
    expect(screen.getAllByText('ブログ').length).toBeGreaterThan(0);
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
    render(<Header />);      const ctaButtons = screen.getAllByText('まずは相談する');
    expect(ctaButtons.length).toBeGreaterThan(0);
  });

  test('ナビゲーションリンクが正しいhrefを持つ', () => {
    render(<Header />);
    
    const homeLink = screen.getByRole('link', { name: 'ホーム' });
    expect(homeLink).toHaveAttribute('href', '/');
    
    const coursesLink = screen.getByRole('link', { name: 'コース' });
    expect(coursesLink).toHaveAttribute('href', '/courses');
    
    const seminarLink = screen.getByRole('link', { name: 'セミナー' });
    expect(seminarLink).toHaveAttribute('href', '/seminar');
    
    const blogLink = screen.getByRole('link', { name: 'ブログ' });
    expect(blogLink).toHaveAttribute('href', '/blog');
    
    const contactLink = screen.getByRole('link', { name: 'お問い合わせ' });
    expect(contactLink).toHaveAttribute('href', '/contact');
  });

  test('アクセシビリティ属性が正しく設定される', () => {
    render(<Header />);
    
    const nav = screen.getByRole('navigation');
    expect(nav).toHaveAttribute('aria-label', 'メインナビゲーション');
    
    const menuButton = screen.getByLabelText('メニューを開く');
    expect(menuButton).toHaveAttribute('aria-expanded', 'false');
  });
});
