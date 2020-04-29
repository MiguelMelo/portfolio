module.exports = {
  siteTitle: 'Carlos Miguel | Fullstack Developer',
  siteDescription:
    'Sou desenvolvedor Fullstack de Maceió, AL. Desenvolvo aplicativos da web, aplicativos móveis e back ends, tudo com muito ☕️ e ❤️.',
  siteKeywords:
    'Carlos Miguel, Carlos, Miguel, miguelmelo21, fullstack developer, front-end engineer, web developer, javascript, typescript, node, react, gatsby, portfolio',
  siteUrl: 'https://brittanychiang.com',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Carlos Miguel',
  location: 'Maceió, AL',
  email: 'miguel21.melo21@gmail.com',
  github: 'https://github.com/MiguelMelo',
  // twitterHandle: '@bchiang7',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/MiguelMelo',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/miguelmelo21',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/_miguelmelo21',
    },
  ],

  navLinks: [
    {
      name: 'Sobre',
      url: '/#about',
    },
    {
      name: 'Experiência',
      url: '/#jobs',
    },
    {
      name: 'Trabalhos',
      url: '/#projects',
    },
    {
      name: 'Contato',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
