import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{html,js}',
    './css/**/*.css',
  ],
  theme: {
    extend: {
      colors: {
        // Complete Apple Design System Colors
        apple: {
          // Primary Apple Blues
          blue: '#007AFF',
          'blue-light': '#5AC8FA',
          'blue-dark': '#0051D5',
          
          // Apple System Grays
          gray: '#8E8E93',
          'gray-2': '#AEAEB2',
          'gray-3': '#C7C7CC',
          'gray-4': '#D1D1D6',
          'gray-5': '#E5E5EA',
          'gray-6': '#F2F2F7',
          
          // Apple System Colors
          black: '#000000',
          white: '#FFFFFF',
          red: '#FF3B30',
          orange: '#FF9500',
          yellow: '#FFCC00',
          green: '#34C759',
          indigo: '#5856D6',
          purple: '#AF52DE',
          pink: '#FF2D92',
          teal: '#5AC8FA',
        },
        
        // Semantic Color System
        primary: '#007AFF',
        'primary-hover': '#0051D5',
        secondary: '#FF3B30',
        success: '#34C759',
        warning: '#FF9500',
        danger: '#FF3B30',
        
        // Text Color System
        text: {
          primary: '#1D1D1F',
          secondary: '#86868B',
          tertiary: '#98989D',
          quaternary: '#C7C7CC',
          link: '#007AFF',
          inverse: '#FFFFFF',
        },
        
        // Background Color System
        background: {
          primary: '#FFFFFF',
          secondary: '#F2F2F7',
          tertiary: '#E5E5EA',
          elevated: '#FFFFFF',
          grouped: '#F2F2F7',
          dark: '#000000',
        },
        
        // Surface Colors (with opacity)
        surface: {
          primary: '#FFFFFF',
          secondary: 'rgba(255, 255, 255, 0.8)',
          tertiary: 'rgba(255, 255, 255, 0.6)',
        },
        
        // Border Colors
        border: {
          primary: '#D1D1D6',
          secondary: '#E5E5EA',
          tertiary: '#F2F2F7',
        },
      },      
      fontFamily: {
        // Apple Typography System
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'SF Pro Display',
          'SF Pro Text',
          'Helvetica Neue',
          'Noto Sans JP',
          'system-ui',
          'sans-serif',
        ],
        display: [
          'SF Pro Display',
          '-apple-system',
          'BlinkMacSystemFont',
          'Helvetica Neue',
          'sans-serif',
        ],
        mono: [
          'SF Mono',
          'Monaco',
          'Cascadia Code',
          'Roboto Mono',
          'Consolas',
          'Courier New',
          'monospace',
        ],
      },
      
      fontSize: {
        // Apple Typography Scale
        'caption-2': ['0.6875rem', { lineHeight: '1.2' }], // 11px
        'caption-1': ['0.75rem', { lineHeight: '1.2' }],   // 12px
        'footnote': ['0.8125rem', { lineHeight: '1.375' }], // 13px
        'subheadline': ['0.9375rem', { lineHeight: '1.375' }], // 15px
        'callout': ['1rem', { lineHeight: '1.5' }],       // 16px
        'body': ['1.0625rem', { lineHeight: '1.5' }],     // 17px
        'headline': ['1.0625rem', { lineHeight: '1.5', fontWeight: '600' }], // 17px semibold
        'title-3': ['1.25rem', { lineHeight: '1.375' }],     // 20px
        'title-2': ['1.375rem', { lineHeight: '1.375' }],    // 22px
        'title-1': ['1.75rem', { lineHeight: '1.2' }],     // 28px
        'large-title': ['2.125rem', { lineHeight: '1.2' }], // 34px
        
        // Display Sizes
        'display-small': ['2.25rem', { lineHeight: '1.2' }],  // 36px
        'display-medium': ['3rem', { lineHeight: '1.2' }],    // 48px
        'display-large': ['4rem', { lineHeight: '1.2' }],     // 64px
        'display-xl': ['5rem', { lineHeight: '1.2' }],        // 80px
        'display-hero': ['6rem', { lineHeight: '1.2' }],      // 96px
      },
      
      fontWeight: {
        ultralight: '100',
        thin: '200',
        light: '300',
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        heavy: '800',
        black: '900',
      },
      
      letterSpacing: {
        tight: '-0.025em',
        normal: '0',
        wide: '0.025em',
      },
      
      spacing: {
        // Apple 8pt Grid System
        '1': '0.125rem',  // 2px
        '2': '0.25rem',   // 4px
        '3': '0.375rem',  // 6px
        '4': '0.5rem',    // 8px
        '6': '0.75rem',   // 12px
        '8': '1rem',      // 16px
        '10': '1.25rem',  // 20px
        '12': '1.5rem',   // 24px
        '16': '2rem',     // 32px
        '20': '2.5rem',   // 40px
        '24': '3rem',     // 48px
        '32': '4rem',     // 64px
        '40': '5rem',     // 80px
        '48': '6rem',     // 96px
        '56': '7rem',     // 112px
        '64': '8rem',     // 128px
        '80': '10rem',    // 160px
        '96': '12rem',    // 192px
      },      
      borderRadius: {
        // Apple Border Radius System
        'small': '4px',
        'medium': '8px',
        'apple': '12px',
        'large': '12px',
        'xl': '16px',
        '2xl': '20px',
        '3xl': '24px',
        'full': '9999px',
      },
      
      boxShadow: {
        // Apple Shadow System
        'xs': '0 1px 2px rgba(0, 0, 0, 0.04)',
        'sm': '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
        'md': '0 4px 6px rgba(0, 0, 0, 0.05), 0 2px 4px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px rgba(0, 0, 0, 0.15)',
        'apple': '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
      
      zIndex: {
        // Z-Index Scale
        'dropdown': '1000',
        'sticky': '1020',
        'fixed': '1030',
        'modal-backdrop': '1040',
        'modal': '1050',
        'popover': '1060',
        'tooltip': '1070',
        'toast': '1080',
      },
      
      maxWidth: {
        // Container Sizes
        'xs': '20rem',    // 320px
        'sm': '24rem',    // 384px
        'md': '28rem',    // 448px
        'lg': '32rem',    // 512px
        'xl': '36rem',    // 576px
        '2xl': '42rem',   // 672px
        '3xl': '48rem',   // 768px
        '4xl': '56rem',   // 896px
        '5xl': '64rem',   // 1024px
        '6xl': '72rem',   // 1152px
        '7xl': '80rem',   // 1280px
      },      transitionTimingFunction: {
        // Apple Transitions
        'apple': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'apple-hero': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'fast': 'ease',
        'base': 'ease',
        'slow': 'ease',
      },
      
      transitionDuration: {
        'fast': '150ms',
        'base': '200ms',
        'slow': '300ms',
        'apple': '400ms',
      },      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      
      animation: {
        'fade-in-up': 'fadeInUp 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.3s forwards',
        'fade-in-scale': 'fadeInScale 1s cubic-bezier(0.4, 0, 0.2, 1) 0.6s forwards',
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-down': 'slideDown 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        'scale-in': 'scaleIn 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        'bounce-gentle': 'bounceGentle 2s infinite',
      },
      
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(60px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeInScale: {
          '0%': {
            opacity: '0',
            transform: 'scale(0.9)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        slideDown: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        scaleIn: {
          '0%': {
            opacity: '0',
            transform: 'scale(0.95)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        bounceGentle: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
      },
    },
  },
  plugins: [],
}

export default config
