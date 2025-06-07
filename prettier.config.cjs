/** @type {import('prettier').Config} */
const config = {
  singleQuote: true,
  jsxSingleQuote: false,
  tabWidth: 2,
  semi: true,
  arrowParens: 'avoid',
  bracketSameLine: false,
  plugins: [require.resolve('@trivago/prettier-plugin-sort-imports')],
  importOrder: [
    '^react(.*)',
    '^@\\/(.*)',
    '^\\w+',
    '^@app',
    '^@entities',
    '^@features',
    '^@widgets',
    '^@pages',
    '^@shared',
    '^([.]+\\/(\\b(?:(?!.*?css$|.*?scss$)\\w)+\\b)|(\\.\\.)+\\/)', // относительные пути, кроме style
    '.*\\.s?css$',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderCaseInsensitive: true,
  overrides: [
    {
      files: '**/*.scss',
      options: {
        singleQuote: false,
      },
    },
  ],
  bracketSpacing: true,
  proseWrap: 'never',
  quoteProps: 'consistent',
  endOfLine: 'lf',
};

module.exports = config;
