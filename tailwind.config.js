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
      white: '#FFFFFF',
      deepGray: '#666666',
      lightGray: '#989898',
      beforeHover: '#F7F7F7',
      afterHover: '#989898',
    },
    textColor: {
      base: '#333333',
      white: '#FFFFFF',
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
    extend: {
      backgroundImage: () => ({
        mv: "url('/mv.png')",
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
  plugins: [],
  mode: 'jit',
}
