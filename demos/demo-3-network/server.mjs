import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PUBLIC_DIR = path.join(__dirname, 'public');
const PORT = Number(process.env.PORT) || 4003;

// Default to true so the hidden 500 error triggers immediately out of the box during the live demo
let simulate500Error = true;

const CART_DATA = {
  cartId: 'cart_devfest_santiago_2026',
  currency: 'EUR',
  items: [
    {
      id: 'item_ticket_general',
      sku: 'DEVFEST-VIP-2026',
      name: 'Entrada General + Acceso Workshops · DevFest Santiago 2026',
      description: 'Acceso completo a charlas, track de IA/Web, networking y comida gallega.',
      quantity: 1,
      unitPrice: 25.0,
      badge: 'Ticket Oficial'
    },
    {
      id: 'item_merch_pack',
      sku: 'GDG-MERCH-PACK-26',
      name: 'Pack Merchandising Oficial GDG Santiago',
      description: 'Sudadera bordada edición limitada + Pack de pegatinas Chrome DevTools & Gemini.',
      quantity: 1,
      unitPrice: 23.0,
      badge: 'Edición Limitada'
    }
  ],
  subtotal: 48.0,
  taxIncluded: true,
  total: 48.0
};

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.ico': 'image/x-icon'
};

function sendJson(res, statusCode, payload, extraHeaders = {}) {
  const body = JSON.stringify(payload, null, 2);
  res.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store',
    'Access-Control-Allow-Origin': '*',
    ...extraHeaders
  });
  res.end(body);
}

function readJsonBody(req) {
  return new Promise((resolve) => {
    let raw = '';
    req.on('data', (chunk) => {
      raw += chunk;
    });
    req.on('end', () => {
      if (!raw) return resolve({});
      try {
        resolve(JSON.parse(raw));
      } catch {
        resolve({ raw });
      }
    });
    req.on('error', () => resolve({}));
  });
}

function handleCheckoutFailure(res, endpointName, requestBody) {
  const errorPayload = {
    status: 500,
    error: 'Internal Server Error',
    code: 'PAYMENT_LEDGER_DEADLOCK',
    service: 'checkout-orchestrator-v2',
    endpoint: endpointName,
    message:
      "Unhandled exception in StripeWebhookCommit: database connection pool exhausted (timeout after 3000ms) while locking inventory SKU 'DEVFEST-VIP-2026'",
    traceId: 'trace_9f82a10c44b',
    details: {
      sku: 'DEVFEST-VIP-2026',
      dbPool: 'pg-primary-eu-west-1',
      activeConnections: '100/100',
      waitQueueSize: 47,
      customerEmail: requestBody?.customer?.email || 'asistente@devfestsantiago.es',
      attemptedAmount: '48.00 EUR'
    },
    timestamp: new Date().toISOString()
  };

  console.error(
    `[Demo 3 · Server] 💥 HTTP 500 emitted on ${endpointName} (traceId=${errorPayload.traceId}, code=${errorPayload.code})`
  );

  sendJson(res, 500, errorPayload, {
    'X-Trace-Id': 'df-santiago-500-err',
    'X-Service-Node': 'checkout-orchestrator-v2',
    'X-Error-Code': 'PAYMENT_LEDGER_DEADLOCK'
  });
}

const server = http.createServer(async (req, res) => {
  const parsedUrl = new URL(req.url || '/', `http://${req.headers.host || 'localhost'}`);
  const { pathname, searchParams } = parsedUrl;

  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, X-Client-Version'
    });
    return res.end();
  }

  // API: Get Cart
  if (req.method === 'GET' && pathname === '/api/cart') {
    return sendJson(res, 200, {
      ...CART_DATA,
      simulate500Error
    });
  }

  // API: Check or Toggle 500 bug status
  if (req.method === 'GET' && pathname === '/api/bug-status') {
    return sendJson(res, 200, { simulate500Error });
  }

  if (req.method === 'POST' && pathname === '/api/toggle-bug') {
    const body = await readJsonBody(req);
    if (typeof body.simulate500Error === 'boolean') {
      simulate500Error = body.simulate500Error;
    } else {
      simulate500Error = !simulate500Error;
    }
    console.log(`[Demo 3 · Server] Bug 500 simulation is now: ${simulate500Error ? 'ACTIVE (500)' : 'DISABLED (200)'}`);
    return sendJson(res, 200, { simulate500Error });
  }

  // API: Checkout / Payment Authorize
  if (req.method === 'POST' && (pathname === '/api/checkout' || pathname === '/api/payment/authorize')) {
    const body = await readJsonBody(req);
    const forceParam = searchParams.get('fail');
    const shouldFail =
      forceParam === 'true' ? true : forceParam === 'false' ? false : simulate500Error;

    // Slight realistic latency (280ms)
    await new Promise((r) => setTimeout(r, 280));

    if (shouldFail) {
      return handleCheckoutFailure(res, `POST ${pathname}`, body);
    }

    return sendJson(
      res,
      200,
      {
        status: 200,
        ok: true,
        orderId: 'DF26-88412',
        confirmationCode: 'SANTIAGO-CONFIRMED-2026',
        chargedAmount: '48.00 EUR',
        message: 'Pago completado y entradas emitidas correctamente.',
        timestamp: new Date().toISOString()
      },
      {
        'X-Trace-Id': 'df-santiago-200-ok'
      }
    );
  }

  // Serve static files from /public
  let safePath = pathname === '/' ? '/index.html' : pathname;
  safePath = path.normalize(safePath).replace(/^(\.\.[/\\])+/, '');
  const filePath = path.join(PUBLIC_DIR, safePath);

  if (!filePath.startsWith(PUBLIC_DIR)) {
    res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
    return res.end('403 Forbidden');
  }

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        return res.end('404 Not Found');
      }
      res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
      return res.end('500 Internal Server Error');
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': 'no-cache'
    });
    res.end(content);
  });
});

server.listen(PORT, () => {
  console.log(`\n🚀 [Demo 3 · Network Debugging] DevFest Store running at http://localhost:${PORT}`);
  console.log(`   ├─ GET  http://localhost:${PORT}/api/cart`);
  console.log(`   ├─ POST http://localhost:${PORT}/api/checkout  (Simular 500: ${simulate500Error ? 'ACTIVO' : 'INACTIVO'})`);
  console.log(`   └─ POST http://localhost:${PORT}/api/toggle-bug\n`);
});
