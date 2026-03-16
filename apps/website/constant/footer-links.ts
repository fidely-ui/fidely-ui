import {
  FaDiscord,
  FaGithub,
  FaLinkedin,
  FaXTwitter,
  FaYoutube,
} from 'react-icons/fa6'

export const DOCUMENTATION_LINK = [
  { href: '/docs/getting-started/installation', label: 'Get Started' },
  { href: '/docs/components/accordion', label: 'Components' },
  { href: '/docs/theming/customization', label: 'Theming' },
  // { href: '/blogs', label: 'Blog' },
]

export const RESOURCES_LINK = [
  { href: '#', label: 'Fidely UI Pro' },
  { href: '#', label: 'Templates' },
  { href: '#', label: 'Commerce' },
]

export const SOCIAL_LINK = [
  {
    name: 'Github',
    href: 'https://github.com/fidely-ui/fidely-ui',
    icon: FaGithub,
    ariaLabel: 'GitHub',
  },
  {
    name: 'Twitter',
    href: 'https://x.com/FidelyUi',
    icon: FaXTwitter,
    ariaLabel: 'Twitter',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/fidely-ui',
    icon: FaLinkedin,
    ariaLabel: 'LinkedIn',
  },
  {
    name: 'Discord',
    href: 'https://discord.com/invite/7ru3tEjkcQ',
    icon: FaDiscord,
    ariaLabel: 'Discord',
  },
  {
    name: 'Youtube',
    href: 'https://www.youtube.com/@chimobijustice',
    icon: FaYoutube,
    ariaLabel: 'YouTube',
  },
]
