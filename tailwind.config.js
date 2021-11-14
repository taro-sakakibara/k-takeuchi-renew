module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  // darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      body: ['Noto Sans', 'sans-serif'],
      en: ['classico-urw', 'sans-serif'],
    },
    colors: {
      black: '#333333',
      transparentBlack: 'rgba(51,51,51,0.25)',
      white: '#FFFFFF',
      deepGray: '#666666',
      hoverDeepGray: '#7F7F7F',
      hoverLightGray: 'rgba(152,152,152,0.1)',
      Gray: '#F7F7F7',
      lightGray: '#989898',
    },
    textColor: {
      base: '#333333',
      white: '#FFFFFF',
    },
    borderColor: {
      transparentWhite: 'rgba(255,255,255,0.25)',
      transparentBlack: 'rgba(51,51,51,0.25)',
      transparentGray: 'rgba(112,112,112,0.5)',
    },
    fontSize: {
      //spでの参照サイズ
      h1: 'var(--h1)', //3.5rem
      h2: 'var(--h2)', //1.2rem
      h3: 'var(--h3)', //2rem
      large: 'var(--large-text)', //2.4rem
      medium: 'var(--medium-text)', //1.8rem
      baseSize: 'var(--base-text)', //1.6rem
      small: 'var(--small-text)', //1.2rem
    },
    textIndent: {
      1: 'var(--indent-base)',
    },
    padding: {
      indent1: 'var(--negative-base)',
    },
    zIndex: {
      header1: 1,
      header2: 2,
      header3: 3,
      max: 999,
    },
    screens: {
      sp: { max: '768px' },
      md: { min: '769px' },
      lg: { min: '1025px' },
      xl: { min: '1201px' },
    },
    animation: {
      downPointer:
        'downPointer 2s cubic-bezier(0.29, 0.68, 0.69, 0.31) infinite',
    },
    keyframes: {
      downPointer: {
        '0%': { opacity: '0' },
        '40%': { opacity: '1' },
        '80%': {
          bottom: '0',
          opacity: '0',
        },
        '100%': { opacity: '0' },
      },
    },
    extend: {
      backgroundImage: () => ({
        mv: "url('/mv.png')",
        mvPc: "url('/mv-pc.png')",
        hashtag: "url('/ico_sharp.svg')",
      }),
      lineHeight: {
        text: 'var(--leading-text)',
        heading: 'var(--leading-head)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-writing-mode')({
      variants: ['responsive', 'hover'],
    }),
    require('tailwindcss-typography')({
      // all these options default to the values specified here
      ellipsis: true, // whether to generate ellipsis utilities
      hyphens: true, // whether to generate hyphenation utilities
      kerning: true, // whether to generate kerning utilities
      textUnset: true, // whether to generate utilities to unset text properties
      componentPrefix: 'c-', // the prefix to use for text style classes
    }),
  ],

  mode: 'jit',
}
