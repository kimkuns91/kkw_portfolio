import type { Config } from 'tailwindcss';
import animate from 'tailwindcss-animate';
import { default as flattenColorPalette } from 'tailwindcss/lib/util/flattenColorPalette';

export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '15px',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    fontFamily: {
      primary: 'var(--font-jetbrainsMono)',
    },
    extend: {
      colors: {
        primary: '#18181B', // 기존의 어두운 배경색
        secondary: '#27272A', // 약간 더 밝은 배경색으로 섹션 구분 시 사용 가능
        accent: {
          DEFAULT: '#00D9FF', // 네온 그린 - 주요 강조 색상
          hover: '#00B8E6', // 강조 색상에 마우스 오버 시
        },
        neutral: {
          light: '#f5f5f5', // 텍스트 또는 아이콘의 밝은 색상
          DEFAULT: '#d1d1d1', // 일반 텍스트 또는 비활성화된 요소
          dark: '#8a8a8a', // 보조 텍스트나 부수적인 정보에 사용
        },
        background: {
          DEFAULT: '#121212', // 페이지 전체 배경
          light: '#1e1e2e', // 카드 또는 모듈의 배경
        },
        error: {
          DEFAULT: '#ff4d4d', // 오류 메시지 또는 경고 강조
          hover: '#e43d3d', // 오류 강조 색상에 마우스 오버 시
        },
        success: {
          DEFAULT: '#4caf50', // 성공 메시지 또는 확인 버튼
          hover: '#43a047', // 성공 강조 색상에 마우스 오버 시
        },
        info: {
          DEFAULT: '#2196f3', // 정보 메시지 또는 알림
          hover: '#1976d2', // 정보 강조 색상에 마우스 오버 시
        },
      },
      // colors: {
      //   background: 'hsl(var(--background))',
      //   foreground: 'hsl(var(--foreground))',
      //   card: {
      //     DEFAULT: 'hsl(var(--card))',
      //     foreground: 'hsl(var(--card-foreground))',
      //   },
      //   popover: {
      //     DEFAULT: 'hsl(var(--popover))',
      //     foreground: 'hsl(var(--popover-foreground))',
      //   },
      //   primary: {
      //     DEFAULT: 'hsl(var(--primary))',
      //     foreground: 'hsl(var(--primary-foreground))',
      //   },
      //   secondary: {
      //     DEFAULT: 'hsl(var(--secondary))',
      //     foreground: 'hsl(var(--secondary-foreground))',
      //   },
      //   muted: {
      //     DEFAULT: 'hsl(var(--muted))',
      //     foreground: 'hsl(var(--muted-foreground))',
      //   },
      //   accent: {
      //     DEFAULT: 'hsl(var(--accent))',
      //     foreground: 'hsl(var(--accent-foreground))',
      //   },
      //   destructive: {
      //     DEFAULT: 'hsl(var(--destructive))',
      //     foreground: 'hsl(var(--destructive-foreground))',
      //   },
      //   border: 'hsl(var(--border))',
      //   input: 'hsl(var(--input))',
      //   ring: 'hsl(var(--ring))',
      //   chart: {
      //     '1': 'hsl(var(--chart-1))',
      //     '2': 'hsl(var(--chart-2))',
      //     '3': 'hsl(var(--chart-3))',
      //     '4': 'hsl(var(--chart-4))',
      //     '5': 'hsl(var(--chart-5))',
      //   },
      // },
      boxShadow: {
        derek: `0px 0px 0px 1px rgb(0 0 0 / 0.06),
        0px 1px 1px -0.5px rgb(0 0 0 / 0.06),
        0px 3px 3px -1.5px rgb(0 0 0 / 0.06), 
        0px 6px 6px -3px rgb(0 0 0 / 0.06),
        0px 12px 12px -6px rgb(0 0 0 / 0.06),
        0px 24px 24px -12px rgb(0 0 0 / 0.06)`,
        input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        aurora: {
          from: {
            backgroundPosition: '50% 50%, 50% 50%',
          },
          to: {
            backgroundPosition: '350% 50%, 350% 50%',
          },
        },
        scroll: {
          to: {
            transform: 'translate(calc(-50% - 0.5rem))',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        aurora: 'aurora 60s linear infinite',
        scroll:
          'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite',
      },
    },
  },
  plugins: [animate, addVariablesForColors],
} satisfies Config;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function addVariablesForColors({ addBase, theme }: any) {
  const allColors = flattenColorPalette(theme('colors'));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ':root': newVars,
  });
}
