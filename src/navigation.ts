import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Généralités',
      links: [
        {
          text: 'La société',
          href: getPermalink('/startup'),
        },
        {
          text: 'Nos compétences',
          href: getPermalink('/saas'),
        },
        {
          text: 'Equipe',
          href: getPermalink('/about'),
        },
        {
          text: 'Contact',
          href: getPermalink('/contact'),
        },
      ],
    },
    {
      text: 'Services',
      links: [
        {
          text: 'Services',
          href: getPermalink('/services'),
        },
        {
          text: 'Formation & Transfert',
          href: getPermalink('/formations'),
        },
        {
          text: 'Prix',
          href: getPermalink('/prix'),
        },
      ],
    },
    {
      text: 'R&D',
      links: [
        {
          text: 'Projet général',
          href: getPermalink('/projet'),
        },
        {
          text: 'Matériaux architecurés',
          href: getPermalink('/materiaux'),
        },
        {
          text: 'IA parcimonieuse',
          href: getPermalink('/ia'),
        },
        {
          text: 'Collaborations',
          href: getPermalink('/collaborations'),
        },
      ],
    },
    {
      text: 'Blog',
      links: [
        {
          text: 'Liste',
          href: getBlogPermalink(),
        },
        {
          text: 'Article',
          href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
        },
      ],
    },
    {
      text: 'Produits',
      href: '#',
    },
  ],
  actions: [{ text: 'Plaquette', href: 'https://www.canva.com/design/DAGXqmC9hO8/7k2Yj7dHBtgW2TvpvXpAxw/view?utm_content=DAGXqmC9hO8&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hd6ca1a149a', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Produits',
      links: [
        { text: 'A venir ...', href: '/soon' },
      ],
    },
    {
      title: 'Notre atelier',
      links: [
        { text: 'Scanners disponibles', href: '#' },
        { text: 'Fabrication Additive', href: '#' },
        { text: 'Commande Numérique', href: '#' },
      ],
    },
    {
      title: 'Nos outils',
      links: [
        { text: 'Fabrication Additive', href: '#' },
        { text: 'IA parcimonieuse', href: '#' },
        { text: 'CAO', href: '#' },
        { text: 'Simulation Numérique', href: '#' },
      ],
    },
    {
      title: 'Société',
      links: [
        { text: 'A propos', href: getPermalink('/startup'), },
        { text: 'Carrière', href: '/soon' },
        { text: 'Presse', href: '/soon' },
        { text: 'Contact', href: getPermalink('/contact'), },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Mentions légales', href: getPermalink('/terms') },
  ],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/nicolas-gardan-19ba526/'},
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('#') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: '#' },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://onwidget.com/favicon/favicon-32x32.png" alt="onWidget logo" loading="lazy"></img>
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  `,
};
