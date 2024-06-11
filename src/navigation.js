import { getPermalink, getHomePermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Inicio',
      href: getHomePermalink(),
      /* links: [
        {
          text: 'SaaS',
          href: getPermalink('/homes/saas'),
        },
        {
          text: 'Startup',
          href: getPermalink('/homes/startup'),
        },
        {
          text: 'Mobile App',
          href: getPermalink('/homes/mobile-app'),
        },
        {
          text: 'Personal',
          href: getPermalink('/homes/personal'),
        },
      ], */
    },
    {
      text: 'Academia',
      href: getPermalink('/#features'),
      /* links: [
        {
          text: 'Features (Anchor Link)',
          href: getPermalink('/#features'),
        },
        {
          text: 'Services',
          href: getPermalink('/services'),
        },
        {
          text: 'Pricing',
          href: getPermalink('/pricing'),
        },
        {
          text: 'About us',
          href: getPermalink('/about'),
        },
        {
          text: 'Contact',
          href: getPermalink('/contact'),
        },
        {
          text: 'Terms',
          href: getPermalink('/terms'),
        },
        {
          text: 'Privacy policy',
          href: getPermalink('/privacy'),
        },
      ], */
    },
    {
      text: 'Método',
      href: getPermalink('/#steps'),
      /* links: [
        {
          text: 'Lead Generation',
          href: getPermalink('/landing/lead-generation'),
        },
        {
          text: 'Long-form Sales',
          href: getPermalink('/landing/sales'),
        },
        {
          text: 'Click-Through',
          href: getPermalink('/landing/click-through'),
        },
        {
          text: 'Product Details (or Services)',
          href: getPermalink('/landing/product'),
        },
        {
          text: 'Coming Soon or Pre-Launch',
          href: getPermalink('/landing/pre-launch'),
        },
        {
          text: 'Subscription',
          href: getPermalink('/landing/subscription'),
        },
      ], */
    },
    {
      text: 'Testimonios',
      href: getPermalink('/#features2'),
    },
    {
      text: 'Blog',
      href: getPermalink('/#blog'),
      /* links: [
        {
          text: 'Blog List',
          href: getBlogPermalink(),
        },
        {
          text: 'Article',
          href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
        },
        {
          text: 'Article (with MDX)',
          href: getPermalink('markdown-elements-demo-post', 'post'),
        },
        {
          text: 'Category Page',
          href: getPermalink('tutorials', 'category'),
        },
        {
          text: 'Tag Page',
          href: getPermalink('astro', 'tag'),
        },
      ], */
    },
  ],
  // actions: [{ text: 'Download', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Productos',
      links: [
        { text: 'Cursos', href: '#' },
        { text: 'Conferencias', href: '#' },
        { text: 'Mentorías', href: '#' },
        { text: 'Asesorías', href: '#' },
        { text: 'Talleres', href: '#' },
      ],
    },
    {
      title: 'Plataformas',
      links: [
        { text: 'Spotify', href: '#' },
        { text: 'YouTube', href: '#' },
        { text: 'Reuniones Online', href: '#' },
        { text: 'Congresos', href: '#' },
        { text: 'Aliados', href: '#' },
      ],
    },
    {
      title: 'Soporte',
      links: [
        { text: 'Documentación', href: '#' },
        { text: 'Foros de la Comunidad', href: '#' },
        { text: 'Servicios Profesionales', href: '#' },
        { text: 'Habilidades', href: '#' },
        { text: 'Estatus', href: '#' },
      ],
    },
    {
      title: 'Marca',
      links: [
        { text: 'Acerca', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Carreras', href: '#' },
        { text: 'Prensa', href: '#' },
        { text: 'Impacto Social', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Términos', href: getHomePermalink() },
    { text: 'Política de Privacidad', href: getHomePermalink() },
  ],
  socialLinks: [
    {
      ariaLabel: 'Instagram',
      icon: 'tabler:brand-instagram',
      href: 'https://www.instagram.com/jhonny_aponza/',
    },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/MarketingyMarcapersonal/' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/jhonnyaponza/' },
    { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: 'https://www.youtube.com/@jhonnyaponza' },
    {
      ariaLabel: 'Spotify',
      icon: 'tabler:brand-spotify',
      href: 'https://podcasters.spotify.com/pod/show/jhonny-aponza',
    },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://onwidget.com/favicon/favicon-32x32.png" alt="onWidget logo" loading="lazy"></img>
    Hecho por <a class="text-blue-600 underline dark:text-muted" href="https://onwidget.com/"> onWidget</a> | <a class="text-blue-600 underline dark:text-muted" href="https://andreszapata.me/">andreszapata.me</a> · Todos los derechos reservados.
  `,
};
