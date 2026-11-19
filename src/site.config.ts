// Edit this file to re-label the entire site. Header, Footer, the homepage
// and SEO defaults all read from here instead of hardcoding copy.
export const SITE = {
  name: 'Hayden VanderWeele',
  role: 'Computer Engineering Student',
  email: 'haydenvanderweele2029@u.northwestern.edu',
  tagline: 'Computer Engineering student at Northwestern University building hardware, embedded systems, and scalable infrastructure',
  description:
    'Portfolio of Hayden VanderWeele — mechanical design and embedded systems, with an emphasis full stack solutions and a detail-oriented mindset',
  status: 'Currently studying at Northwestern University, open to internships Summer 2027',
  social: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/hayden-vanderweele/' },
  ],
  locale: 'en',
} as const;

export const NAV_LINKS = [
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
] as const;
