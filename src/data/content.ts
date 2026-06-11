export interface WebsiteItem {
  title: string
  author: string
  category: string
  url: string
  image: string
}

export const navLinks = [
  { label: 'Top', href: '#top' },
  { label: 'All Websites', href: '#websites' },
  { label: 'Tags', href: '#tags' },
  { label: 'About Studio.Design', href: 'https://studio.design', external: true },
] as const

export const categories = [
  { id: 'all', label: 'All', labelJa: 'All' },
  { id: 'corporate', label: 'Corporate & Service', labelJa: 'コーポレート・サービス' },
  { id: 'blog', label: 'Blog & Media', labelJa: 'ブログ・メディア' },
  { id: 'event', label: 'Event', labelJa: 'イベント' },
  { id: 'shop', label: 'Shop & Product', labelJa: '店舗・商品' },
  { id: 'portfolio', label: 'Portfolio', labelJa: 'ポートフォリオ' },
] as const

export type CategoryId = (typeof categories)[number]['id']

const IMG = 'https://storage.googleapis.com/studio-design-asset-files/projects'

export const heroColumnImages = {
  left: [
    `${IMG}/brqEN4Jra4/s-4190x2799_v-frms_webp_3b0b16eb-c3e0-4997-87f2-f49bbb0fd0a2_middle.webp`,
    `${IMG}/8dO8nNb5an/s-2400x1800_v-frms_webp_fc0b6af7-ca92-49d4-a428-f9feb0e964b2_middle.webp`,
    `${IMG}/moWvkdlJO6/s-1280x960_v-fms_webp_7cfc5862-f33b-4256-b8eb-77239fcba837_middle.webp`,
    `${IMG}/M3aAe9lYae/s-1280x960_v-fms_webp_256355cc-7761-49ac-92cb-5f06571cac2e_middle.webp`,
  ],
  right: [
    `${IMG}/Kwa53GmGOX/s-1280x960_v-fms_webp_39db4774-3657-49c6-9a2a-6249aafc128e_middle.webp`,
    `${IMG}/bXqzM6X6OD/s-1280x960_v-fms_webp_efab0666-d9da-42c5-83f1-2068591e528d_middle.webp`,
    `${IMG}/8dO89opgqn/s-1280x960_v-fms_webp_addee70c-1e83-480a-8a94-de554c4fcc65_middle.webp`,
    `${IMG}/7kadnbB1O3/s-1280x960_v-fms_webp_b7a1ba6d-385f-4ba5-baea-e95cf8597ba3_middle.webp`,
  ],
  tall: [
    `${IMG}/1pqDMrgNaj/s-1901x938_v-frms_webp_76b42e50-7c79-45ed-8235-1db91933b843_regular.webp`,
    `${IMG}/BmqM0QrrOX/s-1500x971_v-fms_webp_3f17ab78-357b-42e2-b0a0-6108cac3b7fa_middle.webp`,
    `${IMG}/1Va6wNdJW7/s-1280x960_v-fms_webp_42b47bc3-f394-456d-8200-9e74811dea05.webp`,
  ],
}

export const websites: WebsiteItem[] = [
  {
    title: 'Sputniko!',
    author: 'Portfolio',
    category: 'portfolio',
    url: 'https://sputniko.com',
    image: `${IMG}/VGOKyMDjan/s-1080x1080_v-fs_webp_3ed68669-47d8-4e9e-b2da-681bc950722d.webp`,
  },
  {
    title: 'TANDEN KYOTO',
    author: 'Akimitsu Noda',
    category: 'corporate',
    url: 'https://tanden-kyoto.jp',
    image: `${IMG}/moWvkdlJO6/s-1280x960_v-fms_webp_7cfc5862-f33b-4256-b8eb-77239fcba837_middle.webp`,
  },
  {
    title: 'BEYOND KOCHI - Local Travel Tips & Hidden Spots in Kochi, Japan',
    author: '株式会社ONDO',
    category: 'blog',
    url: 'https://beyond-kochi.com',
    image: `${IMG}/Kwa53GmGOX/s-1280x960_v-fms_webp_39db4774-3657-49c6-9a2a-6249aafc128e_middle.webp`,
  },
  {
    title: 'PARTNERS',
    author: 'Linkers Corporation',
    category: 'corporate',
    url: 'https://linkersglobal.net',
    image: `${IMG}/8dO89opgqn/s-1280x960_v-fms_webp_addee70c-1e83-480a-8a94-de554c4fcc65_middle.webp`,
  },
  {
    title: 'Japan Adventure Travel - Tailored Tours for Travel Agents | DMC Japan',
    author: 'Coordinator Desk',
    category: 'corporate',
    url: 'https://japanadventure.travel',
    image: `${IMG}/M3aAe9lYae/s-1280x960_v-fms_webp_256355cc-7761-49ac-92cb-5f06571cac2e_middle.webp`,
  },
  {
    title: 'B2B Wellness Community',
    author: 'Anastasia Hisel',
    category: 'corporate',
    url: 'https://wellnesscollect.com',
    image: `${IMG}/7kadnbB1O3/s-1280x960_v-fms_webp_b7a1ba6d-385f-4ba5-baea-e95cf8597ba3_middle.webp`,
  },
  {
    title: 'Nomad Hub Ureshino',
    author: 'つなぐ株式会社／Junya Wada',
    category: 'shop',
    url: 'https://nomad-hub-ureshino.asia',
    image: `${IMG}/bXqzM6X6OD/s-1280x960_v-fms_webp_efab0666-d9da-42c5-83f1-2068591e528d_middle.webp`,
  },
  {
    title: 'Japanese with Hilo',
    author: 'Maki Okubo',
    category: 'blog',
    url: 'https://japanesewithhilo.studio.site',
    image: `${IMG}/1Va6wNdJW7/s-1280x960_v-fms_webp_42b47bc3-f394-456d-8200-9e74811dea05.webp`,
  },
  {
    title: 'Joel Alvarado - Fitness / Saludable',
    author: 'Joel Alvarado',
    category: 'portfolio',
    url: 'https://joelafitness.studio.site',
    image: 'https://storage.googleapis.com/studio-design-assets/projects/V5a74Ny3WR/s-1080x1080_v-fs_webp_5d097673-2cb7-425c-9c6b-f49e045b0424_small.webp',
  },
  {
    title: 'ChargeSPOT: Singapore Fastest Growing Power Bank Rental Service',
    author: 'STUDIO_THO',
    category: 'corporate',
    url: 'https://chargespot.sg',
    image: `${IMG}/BmqM0QrrOX/s-1500x971_v-fms_webp_3f17ab78-357b-42e2-b0a0-6108cac3b7fa_middle.webp`,
  },
  {
    title: 'dDDD pitti uomo',
    author: '三輪航',
    category: 'shop',
    url: 'https://ddddpittiuomo.studio.site',
    image: `${IMG}/1pqDMrgNaj/s-1901x938_v-frms_webp_76b42e50-7c79-45ed-8235-1db91933b843_regular.webp`,
  },
  {
    title: 'Fosness | Leading Digital Marketing Agency in Japan',
    author: 'Arata',
    category: 'corporate',
    url: 'https://fos-ness.com',
    image: `${IMG}/8dO8nNb5an/s-2400x1800_v-frms_webp_fc0b6af7-ca92-49d4-a428-f9feb0e964b2_middle.webp`,
  },
  {
    title: 'Nagomi Landscape Inc.',
    author: 'WINGOOD USA Inc.',
    category: 'corporate',
    url: 'https://nagomilandscape.com',
    image: `${IMG}/brqEN4Jra4/s-4190x2799_v-frms_webp_3b0b16eb-c3e0-4997-87f2-f49bbb0fd0a2_middle.webp`,
  },
]

export const footerLinks = {
  features: ['Design Editor', 'CMS', 'Hosting', 'Forms', 'SEO', 'Lottie', 'Figma to Studio'],
  resources: ['Updates', 'Help', 'Blog', 'Pricing', 'Templates', 'Terms'],
  social: [
    { icon: '𝕏', href: 'https://x.com/studio_design' },
    { icon: 'in', href: 'https://linkedin.com/company/studio-design' },
    { icon: '▶', href: 'https://youtube.com/@studio_design' },
    { icon: '◎', href: 'https://instagram.com/studio_design' },
    { icon: '◉', href: 'https://dribbble.com/studio_design' },
  ],
}
