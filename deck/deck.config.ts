/**
 * Everything that may need changing five minutes before going on stage lives here.
 * After editing, rebuild (`npm run build` / `npm run present`).
 */
export const config = {
  title: 'Dándole "manos" a tu IA con Chrome DevTools MCP',
  subtitle: 'DevFest Santiago de Compostela',
  author: 'Miguel García',
  role: 'Full stack AI-native engineer',
  company: 'Grupo Northius',
  community: 'GDG A Coruña · Organizador',
  event: 'DevFest Santiago de Compostela',
  /** Destination of the QR on the closing screen. "TODO" = no QR (the presenter view warns). Never guess it. */
  qrUrl: 'TODO',
  /** Shown under the QR, e.g. "example.com/talk". */
  qrLabel: '',
  sources: [
    {
      num: '01',
      tag: 'ESTÁNDAR MCP',
      title: 'Model Context Protocol',
      desc: 'Especificación abierta y arquitectura cliente-servidor del protocolo.',
      url: 'modelcontextprotocol.io',
      accent: 'var(--g-yellow)',
    },
    {
      num: '02',
      tag: 'SERVIDOR OFICIAL CHROME',
      title: 'Chrome DevTools MCP',
      desc: 'Repositorio oficial del equipo de Chrome DevTools para agentes.',
      url: 'github.com/ChromeDevTools/chrome-devtools-mcp',
      accent: 'var(--g-blue)',
    },
    {
      num: '03',
      tag: 'EL SISTEMA NERVIOSO',
      title: 'Chrome DevTools Protocol (CDP)',
      desc: 'Documentación de bajo nivel: Runtime, Network, DOM y Accessibility.',
      url: 'chromedevtools.github.io/devtools-protocol',
      accent: 'var(--g-blue)',
    },
    {
      num: '04',
      tag: 'DEMO 01 · ANALÍTICA GA4',
      title: 'Eventos Recomendados GA4',
      desc: 'Estándar oficial de Google para generate_lead y window.dataLayer.',
      url: 'developers.google.com/analytics/devguides/collection/ga4/reference/events',
      accent: 'var(--g-green)',
    },
    {
      num: '05',
      tag: 'DEMO 02 · ACCESIBILIDAD',
      title: 'WCAG 2.2 & WAI-ARIA (W3C)',
      desc: 'Referencia oficial de ratios de contraste (4.5:1 AA) y roles semánticos.',
      url: 'w3.org/WAI/WCAG22/quickref',
      accent: 'var(--g-yellow)',
    },
    {
      num: '06',
      tag: 'IDE + AGENTES',
      title: 'Google Antigravity · Docs MCP',
      desc: 'Configuración de servidores MCP y automatización del navegador.',
      url: 'antigravity.google/docs/mcp',
      accent: 'var(--g-red)',
    },
  ],
} as const;
