import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    rules: {
      // TypeScript 규칙 강화
      '@typescript-eslint/no-explicit-any': 'warn', // any 타입 사용 경고
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],

      // 콘솔 로그 경고 (프로덕션에서 제거 권장)
      'no-console': [
        'warn',
        {
          allow: ['warn', 'error'],
        },
      ],

      // React 규칙
      'react/no-unescaped-entities': 'off', // 따옴표 등 특수문자 허용
      'react-hooks/exhaustive-deps': 'warn', // Hook 의존성 경고
    },
  },
];

export default eslintConfig;
