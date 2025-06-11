interface FooterLink {
  translation: string;
  href?: string;
  sublinks?: {
    translation: string;
    href: string;
  }[];
}

export const footerLinks: FooterLink[] = [
  {
    translation: 'organization',
    sublinks: [
      {
        translation: 'introduction',
        href: '/organization',
      },
    ],
  },
  {
    translation: 'studies',
    sublinks: [
      {
        translation: 'general',
        href: '/studies',
      },
      {
        translation: 'workshops',
        href: '/studies/workshops',
      },
    ],
  },
  {
    translation: 'collaboration',
    sublinks: [
      {
        translation: 'general',
        href: '/collaboration',
      },
      {
        translation: 'companies',
        href: '/collaboration/companies',
      },
    ],
  },
  {
    translation: 'tutoring',
    sublinks: [
      {
        translation: 'general',
        href: '/tutoring',
      },
      {
        translation: 'larpake',
        href: '/tutoring/larpake',
      },
      {
        translation: 'faq',
        href: '/tutoring/faq',
      },
    ],
  },
];
