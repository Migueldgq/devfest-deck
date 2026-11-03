import { spawn } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DEMOS = [
  {
    id: 'demo-1',
    name: 'Demo 1 · De Imagen a Código (Analytics)',
    dir: path.join(__dirname, 'demo-1-analytics'),
    script: 'server.mjs',
    port: 4001,
    url: 'http://localhost:4001',
    color: '\x1b[36m' // Cyan
  },
  {
    id: 'demo-2',
    name: 'Demo 2 · Auditoría de Accesibilidad (A11y)',
    dir: path.join(__dirname, 'demo-2-a11y'),
    script: 'server.mjs',
    port: 4002,
    url: 'http://localhost:4002',
    color: '\x1b[35m' // Magenta
  },
  {
    id: 'demo-3',
    name: 'Demo 3 · Debugging de Red (Un 500 escondido)',
    dir: path.join(__dirname, 'demo-3-network'),
    script: 'server.mjs',
    port: 4003,
    url: 'http://localhost:4003',
    color: '\x1b[33m' // Yellow
  }
];

const RESET = '\x1b[0m';
const BOLD = '\x1b[1m';
const GREEN = '\x1b[32m';
const DIM = '\x1b[2m';

function printBanner() {
  console.log('\n' + '═'.repeat(88));
  console.log(`${BOLD}🚀 DEVFEST SANTIAGO 2026 · CHROME DEVTOOLS MCP LIVE DEMOS${RESET}`);
  console.log('═'.repeat(88));
  console.log(
    `  ${BOLD}#   Demo                                          URL                      Puerto${RESET}`
  );
  console.log('  ' + '─'.repeat(82));
  for (const d of DEMOS) {
    const paddedName = d.name.padEnd(45, ' ');
    const paddedUrl = d.url.padEnd(24, ' ');
    console.log(`  ${d.color}●${RESET}   ${paddedName} ${GREEN}${paddedUrl}${RESET} :${d.port}`);
  }
  console.log('═'.repeat(88));
  console.log(`${BOLD}💬 PROMPTS PARA COPIAR Y PEGAR EN EL AGENTE:${RESET}\n`);

  console.log(
    `${ '\x1b[36m' }[Demo 1 · Imagen a Código — http://localhost:4001]${RESET}\n` +
      `  "Abre http://localhost:4001, inspecciona la aplicación actual y recrea el diseño de\n` +
      `   /Users/miguelgarcia/Documents/md/stuff/DevfestSantiago26/devfest-deck/demos/demo-1-analytics/design-reference.svg\n` +
      `   verificando en el navegador con capturas y DOM que quede idéntico."\n`
  );

  console.log(
    `${ '\x1b[35m' }[Demo 2 · Auditoría A11y — http://localhost:4002]${RESET}\n` +
      `  "Abre http://localhost:4002, audita la accesibilidad de la página usando el árbol A11y y\n` +
      `   estilos computados de Chrome DevTools MCP, corrige los problemas de contraste, labels y\n` +
      `   semántica en el código, y comprueba en vivo que queden resueltos."\n`
  );

  console.log(
    `${ '\x1b[33m' }[Demo 3 · Debugging de Red (500 escondido) — http://localhost:4003]${RESET}\n` +
      `  "Abre http://localhost:4003, haz el flujo de compra y avísame si ves algún error en las\n` +
      `   peticiones de red o en la consola."\n`
  );
  console.log('═'.repeat(88) + `\n${DIM}Presiona Ctrl+C para detener los 3 servidores.${RESET}\n`);
}

const children = [];

for (const demo of DEMOS) {
  const child = spawn(process.execPath, [demo.script], {
    cwd: demo.dir,
    env: { ...process.env, PORT: String(demo.port) },
    stdio: ['ignore', 'pipe', 'pipe']
  });

  children.push(child);

  const prefix = `${demo.color}[${demo.id}:${demo.port}]${RESET}`;

  child.stdout.on('data', (chunk) => {
    const lines = chunk.toString().trim().split('\n');
    for (const line of lines) {
      if (line.trim()) console.log(`${prefix} ${line}`);
    }
  });

  child.stderr.on('data', (chunk) => {
    const lines = chunk.toString().trim().split('\n');
    for (const line of lines) {
      if (line.trim()) console.error(`${prefix} ${line}`);
    }
  });

  child.on('exit', (code, signal) => {
    if (signal !== 'SIGTERM' && signal !== 'SIGINT') {
      console.log(`${prefix} Proceso finalizado (code=${code ?? 'null'}, signal=${signal ?? 'none'})`);
    }
  });
}

printBanner();

function shutdown() {
  console.log(`\n${DIM}Cerrando los 3 servidores de demo...${RESET}`);
  for (const child of children) {
    if (!child.killed) {
      child.kill('SIGTERM');
    }
  }
  process.exit(0);
}

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
