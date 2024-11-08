export const menu: {
  path: string;
  label: string;
  includes: string[];
}[] = [
  {
    path: '/blog',
    label: 'Blog',
    includes: ['/', '/blog'],
  },
  {
    path: '/about',
    label: 'About',
    includes: ['/about'],
  },
];
