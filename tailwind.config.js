/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xlmd': {'max': '1022.67px'},
        'xsm': {'min': '375px', 'max': '539px'},
        'xxsm': {'min': '540px', 'max': '767px'},
        'nifx': {'min': '1403.67px', 'max': '1530px'},
        'nifxl': {'min': '1266.67px', 'max': '1536px'},
        'xxxl': {'min': '1537px', 'max': '1920px'},
        'sxm': {'min': '540px', 'max': '640px'},
        'xrm': {'min': '390px', 'max': '420px'},
        'xxrm': {'min': '480px', 'max': '539px'},
        
      },
      backgroundImage: {
        'gradient-to-b':
          'linear-gradient(to bottom,rgba(171,35,255,0) 0,rgba(171,35,255,.45) 0,rgba(61,139,255,.35) 19%,rgba(0,0,0,1) 65%,#000 68%,#000 100%);',
      },
    },
  },
  plugins: [ 
    require('tailwind-scrollbar-hide'),
    require('tailwind-scrollbar')],
}