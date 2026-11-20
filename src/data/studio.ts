export type WorkCategory = "todos" | "sistemas" | "ia" | "sites"

export interface NavItem {
  number: string
  label: string
  href: string
  id: string
}

export interface ServiceItem {
  id: string
  code: string
  title: string
  description: string
}

export interface ProcessPhase {
  phase: string
  tag: string
  title: string
  accentPeriod?: boolean
  description: string
  deliverables: string[]
}

export interface WorkItem {
  id: string
  code: string
  title: string
  tag: string
  year: string
  category: Exclude<WorkCategory, "todos">
  ratioLabel: string
  variant: "featured" | "secondary" | "wide"
  cropMarks?: boolean
}

export const STUDIO_EMAIL = "ola@olvenlabs.com"
export const STUDIO_DOMAIN = "olvenlabs.com"

export const NAV_ITEMS: NavItem[] = [
  { number: "01", label: "Sobre", href: "#sobre", id: "sobre" },
  { number: "02", label: "Serviços", href: "#servicos", id: "servicos" },
  { number: "03", label: "Processo", href: "#processo", id: "processo" },
  { number: "04", label: "Trabalhos", href: "#trabalhos", id: "trabalhos" },
]

export const MARQUEE_ITEMS: { label: string; accent?: boolean }[] = [
  { label: "Engenharia criativa", accent: true },
  { label: "Sistemas sob medida" },
  { label: "Produtos com IA" },
  { label: "Sites e experiências web" },
  { label: "Consultoria técnica" },
]

export const SERVICES: ServiceItem[] = [
  {
    id: "sistemas",
    code: "/// 001",
    title: "Sistemas sob medida",
    description:
      "Plataformas, painéis e ferramentas internas que rodam a operação. Arquitetura sólida, pronta para escalar.",
  },
  {
    id: "ia",
    code: "/// 002",
    title: "Produtos com IA",
    description:
      "Agentes, automações e interfaces que colocam modelos de IA para trabalhar — com dados reais e resultado mensurável.",
  },
  {
    id: "sites",
    code: "/// 003",
    title: "Sites e experiências web",
    description:
      "Sites e landing pages rápidos, marcantes e feitos para gerar negócio. Performance, motion e SEO estruturados desde a base.",
  },
  {
    id: "consultoria",
    code: "/// 004",
    title: "Consultoria técnica",
    description:
      "Diagnóstico, arquitetura e direção para fundadores e times que precisam decidir rápido e construir certo.",
  },
]

export const PROCESS_PHASES: ProcessPhase[] = [
  {
    phase: "Fase 01",
    tag: "escopo",
    title: "Create",
    description:
      "Imersão no problema. Entendemos o negócio, os usuários e as restrições — e transformamos o objetivo em escopo claro.",
    deliverables: [
      "Discovery & workshop",
      "Escopo e roadmap",
      "Arquitetura inicial",
    ],
  },
  {
    phase: "Fase 02",
    tag: "protótipo",
    title: "Refine",
    description:
      "Desenhamos a experiência e validamos a arquitetura. Protótipos que funcionam, decisões técnicas documentadas.",
    deliverables: [
      "Interface e protótipo",
      "Design system",
      "Validação técnica",
    ],
  },
  {
    phase: "Fase 03",
    tag: "ciclos semanais",
    title: "Build",
    accentPeriod: true,
    description:
      "Construímos em ciclos curtos, com entregas semanais. Lançamento, métricas e evolução depois de ir ao ar.",
    deliverables: [
      "Desenvolvimento e IA",
      "Testes e lançamento",
      "Suporte e evolução",
    ],
  },
]

export const WORK_FILTERS: { value: WorkCategory; label: string }[] = [
  { value: "todos", label: "Todos" },
  { value: "sistemas", label: "Sistemas" },
  { value: "ia", label: "IA" },
  { value: "sites", label: "Sites" },
]

export const WORKS: WorkItem[] = [
  {
    id: "projeto-001",
    code: "Projeto 001",
    title: "Plataforma de operações",
    tag: "Sistema",
    year: "2026",
    category: "sistemas",
    ratioLabel: "[ imagem do projeto — 16:10 ]",
    variant: "featured",
    cropMarks: true,
  },
  {
    id: "projeto-002",
    code: "Projeto 002",
    title: "Site",
    tag: "Lançamento",
    year: "2026",
    category: "sites",
    ratioLabel: "[ 4:3 ]",
    variant: "secondary",
  },
  {
    id: "projeto-003",
    code: "Projeto 003",
    title: "Agente de atendimento",
    tag: "IA aplicada",
    year: "2025",
    category: "ia",
    ratioLabel: "[ imagem do projeto — 21:11 ]",
    variant: "wide",
  },
]

export const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Instagram", href: "https://instagram.com" },
]
