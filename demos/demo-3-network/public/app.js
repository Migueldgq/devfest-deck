// Demo 3: Debugging de Red · Un 500 escondido
// Frontend logic that fetches /api/cart and submits POST /api/checkout.
// Intentionally traps HTTP 500 errors visually (showing a green optimistic message)
// while logging the failure in console and leaving the failed HTTP 500 request in DevTools Network.

const checkoutForm = document.getElementById('checkout-form');
const checkoutFormCard = document.getElementById('checkout-form-card');
const optimisticBanner = document.getElementById('optimistic-success-banner');
const optimisticEmailDisplay = document.getElementById('optimistic-email-display');
const btnSubmit = document.getElementById('btn-checkout-submit');
const btnSubmitText = document.getElementById('btn-submit-text');
const btnSubmitSpinner = document.getElementById('btn-submit-spinner');
const btnAutofill = document.getElementById('btn-autofill');
const btnResetCheckout = document.getElementById('btn-reset-checkout');
const btnToggleBug = document.getElementById('btn-toggle-bug');
const bugToggleLabel = document.getElementById('bug-toggle-label');
const stepPayment = document.getElementById('step-indicator-payment');
const stepConfirm = document.getElementById('step-indicator-confirm');

let currentCart = null;
let simulate500Error = true;

function updateBugToggleUI(isActive) {
  simulate500Error = Boolean(isActive);
  btnToggleBug.classList.toggle('is-active', simulate500Error);
  btnToggleBug.setAttribute('aria-pressed', String(simulate500Error));
  bugToggleLabel.textContent = simulate500Error
    ? 'Simular fallo 500: ACTIVO'
    : 'Simular fallo 500: INACTIVO (200 OK)';
}

async function loadCart() {
  try {
    const res = await fetch('/api/cart', {
      headers: { Accept: 'application/json' }
    });
    const data = await res.json();
    currentCart = data;
    if (typeof data.simulate500Error === 'boolean') {
      updateBugToggleUI(data.simulate500Error);
    }
    console.info('[CheckoutService] Carrito cargado desde GET /api/cart:', {
      cartId: data.cartId,
      items: data.items?.length,
      total: `${data.total?.toFixed(2)} ${data.currency}`
    });
  } catch (err) {
    console.warn('[CheckoutService] No se pudo refrescar /api/cart:', err);
  }
}

btnToggleBug?.addEventListener('click', async () => {
  try {
    const res = await fetch('/api/toggle-bug', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ simulate500Error: !simulate500Error })
    });
    const data = await res.json();
    updateBugToggleUI(data.simulate500Error);
  } catch (err) {
    console.error('[CheckoutService] Error cambiando estado del bug 500:', err);
  }
});

btnAutofill?.addEventListener('click', () => {
  document.getElementById('customer-name').value = 'Miguel García · DevFest Demo';
  document.getElementById('customer-email').value = 'miguel.demo@devfestsantiago.es';
  document.getElementById('customer-company').value = 'GDG Santiago de Compostela';
  document.getElementById('shirt-size').value = 'L';
  document.getElementById('card-number').value = '4242 •••• •••• 4242';
  document.getElementById('card-expiry').value = '11/28';
  document.getElementById('card-cvc').value = '842';
  document.getElementById('accept-terms').checked = true;
  console.info('[CheckoutService] Datos de prueba autocompletados.');
});

btnResetCheckout?.addEventListener('click', () => {
  optimisticBanner.classList.add('hidden');
  checkoutFormCard.classList.remove('hidden');
  stepConfirm.classList.remove('active', 'completed');
  stepPayment.classList.add('active');
});

checkoutForm?.addEventListener('submit', async (event) => {
  event.preventDefault();

  const customerName = document.getElementById('customer-name')?.value?.trim() || 'Ana Souto Varela';
  const customerEmail =
    document.getElementById('customer-email')?.value?.trim() || 'ana.souto@devfestsantiago.es';
  const customerCompany =
    document.getElementById('customer-company')?.value?.trim() || 'GDG Santiago de Compostela';
  const shirtSize = document.getElementById('shirt-size')?.value || 'L';

  const payload = {
    cartId: currentCart?.cartId || 'cart_devfest_santiago_2026',
    customer: {
      name: customerName,
      email: customerEmail,
      company: customerCompany,
      shirtSize
    },
    payment: {
      method: 'card',
      last4: '4242',
      amount: 48.0,
      currency: 'EUR'
    },
    clientTimestamp: new Date().toISOString()
  };

  btnSubmit.disabled = true;
  btnSubmitText.textContent = 'Procesando pago con la pasarela...';
  btnSubmitSpinner.classList.remove('hidden');

  try {
    const response = await fetch('/api/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Client-Version': 'devfest-store-web-2.4.0'
      },
      body: JSON.stringify(payload)
    });

    const responseBody = await response.json().catch(() => ({}));

    if (!response.ok) {
      // Log detailed error to DevTools Console so Chrome DevTools MCP catches both Network + Console!
      console.error(
        `[CheckoutService] Critical HTTP ${response.status} on POST /api/checkout:`,
        responseBody
      );
      console.warn(
        '[UI Fallback] Swallowing checkout error and rendering optimistic success banner to avoid alarming the user.'
      );
    } else {
      console.info('[CheckoutService] Pedido confirmado (200 OK):', responseBody);
    }
  } catch (networkErr) {
    console.error('[CheckoutService] Network exception during POST /api/checkout:', networkErr);
  } finally {
    btnSubmit.disabled = false;
    btnSubmitText.textContent = 'Confirmar y Pagar 48,00 €';
    btnSubmitSpinner.classList.add('hidden');

    // THE KEY TWIST:
    // Regardless of whether POST /api/checkout returned 200 OK or 500 Internal Server Error,
    // the UI renders the green confirmation screen ("¡Solicitud recibida! Estamos procesando tu pedido...").
    optimisticEmailDisplay.textContent = `Correo: ${customerEmail}`;
    optimisticBanner.classList.remove('hidden');
    stepPayment.classList.remove('active');
    stepPayment.classList.add('completed');
    stepConfirm.classList.add('active');
    optimisticBanner.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
});

// Initialize cart on page load
loadCart();
