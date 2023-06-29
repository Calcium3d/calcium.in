module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    
  ],
  theme: {
    extend: {
      colors: {
        background: '#221923',
        card: '#3A2A3C',
        text: '#F3F3F3',
        link: '#9BD7E5',
        heading1: '#F9E5D3',
        heading2: '#EAD0D5',
        navbar: '#1A131B',
        technology: '#48354B',
      },
    },
    padding: {
      'card': '31px',
      'spacing': '74px',
      'navbar': '21px',
      'about': '43px',
      'section-spacing': '130px',
    },
    fontSize: {
      'card-heading': ['28px', {
        lineHeight: '47px',
        letterSpacing: '3%',
        fontWeight: '',
      }],
      'card-body': ['20px'],
      'about': ['48px', {
        lineHeight: '',
        letterSpacing: '-1%',
        fontWeight: '',
      }],
      'section-title': ['36px', {
        lineHeight: '',
        letterSpacing: '5%',
        fontWeight: '',
      }],
    },
    fontFamily: {
      'display': ['"Work Sans"'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
