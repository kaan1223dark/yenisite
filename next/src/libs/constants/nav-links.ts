type AuthenticationLevel = 'authenticated' | 'luuppi-hato' | 'luuppi-member';

export interface NavLink {
  translation: string;
  href?: string;
  authenticationLevel?: AuthenticationLevel;
  sublinks?: {
    translation: string;
    href: string;
  }[];
}

export const navLinksDesktop: NavLink[] = [
  {
    translation: 'home',
    href: '/',
  },
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
  {
    translation: 'events',
    href: '/events',
  },
  {
    translation: 'contact',
    sublinks: [
      {
        translation: 'contact',
        href: '/contact',
      },
      {
        translation: 'feedback',
        href: '/feedback',
      },
    ],
  },
];

// Mobile links are separated from desktop links to allow
// for different navigation structures. We wan't to prioritize
// the most important links on mobile and hide the rest under
export const navLinksMobile: NavLink[] = [
  {
    translation: 'home',
    href: '/',
  },
  {
    translation: 'profile',
    href: '/profile',
    authenticationLevel: 'authenticated',
  },
  {
    translation: 'own_events',
    href: '/own-events',
    authenticationLevel: 'authenticated',
  },
  {
    translation: 'migrate_account',
    href: '/migrate-account',
    authenticationLevel: 'authenticated',
  },
  {
    translation: 'admin',
    href: '/admin?mode=user',
    authenticationLevel: 'luuppi-hato',
  },
  {
    translation: 'sports',
    href: '/sports',
  },
  {
    translation: 'events',
    href: '/events',
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
  {
    translation: 'organization',
    sublinks: [
      {
        translation: 'introduction',
        href: '/organization',
      },
      {
        translation: 'rules',
        href: '/organization/rules',
      },
      {
        translation: 'board',
        href: '/organization/board',
      },
      {
        translation: 'office',
        href: '/organization/office',
      },
      {
        translation: 'tradition_guidelines',
        href: '/organization/tradition-guidelines',
      },
      {
        translation: 'honorary_members',
        href: '/organization/honorary-members',
      },
      {
        translation: 'member_benefits',
        href: '/organization/benefits',
      },
      {
        translation: 'songbook',
        href: '/organization/songbook',
      },
      {
        translation: 'documents',
        href: '/organization/documents',
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
    translation: 'communication',
    sublinks: [
      {
        translation: 'news',
        href: '/news',
      },
      {
        translation: 'sanomat',
        href: '/luuppi-sanomat',
      },
      {
        translation: 'gallery',
        href: 'https://luuppiry.kuvat.fi/kuvat/',
      },
    ],
  },
  {
    translation: 'contact',
    sublinks: [
      {
        translation: 'contact',
        href: '/contact',
      },
      {
        translation: 'feedback',
        href: '/feedback',
      },
    ],
  },
];
