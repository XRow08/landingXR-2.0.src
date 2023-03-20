/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        title: ['zeniq'],
        body: ['heavitas'],
      },
      colors: {
        'brand-primary-100': 'rgba(244, 3, 3, 0.5)',
        'brand-primary-200': '#f40303',
        'brand-primary-300': '#fa2a2a',
        'brand-black': '#1e1e1e',
        'feedback-success': '#00aa30',
        'feedback-warning': '#ffc737',
        'feedback-error': '#cc0000',
        'feedback-info': '#5df2fe',
      },
      backgroundImage: {
        logo: 'url(/img/logoMarca.svg)',
        logoTipo: 'url(/img/logoTipo.svg)',
        home: 'url(/img/home.svg)',
        about: 'url(/img/quem-somos-white.svg)',
        team: 'url(/img/integrantes.svg)',
        work: 'url(/img/trabalhos.svg)',
        footer: 'url(/img/footer.svg)',
        project1: 'url(/img/sam.avif)',
        project2: 'url(/img/marktplace.avif)',
        project3: 'url(/img/cliquemobilidade.avif)',
        project4: 'url(/img/dexlabs.avif)',
        project5: 'url(/img/xrmanagement.avif)',
        project6: 'url(/img/zelda.avif)',
        project7: 'url(/img/gow.avif)',
      },
    },
  },
  plugins: [],
};
