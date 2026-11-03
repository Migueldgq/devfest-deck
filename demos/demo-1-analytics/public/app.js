// Initialize Google Analytics 4 / Tag Manager dataLayer
window.dataLayer = window.dataLayer || [];

const form = document.getElementById('contact-form');
const roleSelect = document.getElementById('role');
const submitBtn = document.getElementById('submit-btn');
const formError = document.getElementById('form-error');
const confirmationPanel = document.getElementById('confirmation-panel');
const confirmName = document.getElementById('confirm-name');
const confirmCompany = document.getElementById('confirm-company');
const confirmLeadId = document.getElementById('confirm-lead-id');
const resetFormBtn = document.getElementById('reset-form-btn');

const telemetryDrawer = document.getElementById('telemetry-drawer');
const telemetryIndicator = document.getElementById('telemetry-indicator');
const telemetryStatusPill = document.getElementById('telemetry-status-pill');
const datalayerCount = document.getElementById('datalayer-count');
const datalayerJson = document.getElementById('datalayer-json');
const copyDatalayerBtn = document.getElementById('copy-datalayer-btn');

let formStarted = false;

function renderDataLayerInspector() {
  const entries = Array.isArray(window.dataLayer) ? window.dataLayer : [];
  if (datalayerCount) {
    datalayerCount.textContent = String(entries.length);
  }
  if (datalayerJson) {
    datalayerJson.textContent = JSON.stringify(entries, null, 2);
    datalayerJson.scrollTop = datalayerJson.scrollHeight;
  }

  const eventNames = entries.map((item) => item && item.event).filter(Boolean);
  const hasGenerateLead = eventNames.includes('generate_lead');
  const hasFormStart = eventNames.includes('form_start');

  if (hasGenerateLead) {
    telemetryIndicator?.classList.add('is-lead');
    if (telemetryStatusPill) {
      telemetryStatusPill.textContent = `✓ FUNNEL COMPLETO (${ eventNames.join(' → ') })`;
      telemetryStatusPill.className = 'pill pill-success';
    }
    if (telemetryDrawer) {
      telemetryDrawer.open = true;
    }
  } else if (hasFormStart) {
    if (telemetryStatusPill) {
      telemetryStatusPill.textContent = `En curso: ${ eventNames.join(' → ') }`;
      telemetryStatusPill.className = 'pill pill-neutral';
    }
  }
}

// Wrap window.dataLayer.push so any push (including live console or app triggers) updates the UI inspector
const originalPush = Array.prototype.push.bind(window.dataLayer);
window.dataLayer.push = function (...args) {
  const result = originalPush(...args);
  renderDataLayerInspector();
  return result;
};

// 1. Push initial GA4 page_view event on load
window.dataLayer.push({
  event: 'page_view',
  page_title: document.title,
  page_location: window.location.href,
  page_path: window.location.pathname,
  send_to: 'G-NORTHIUS26',
  timestamp: new Date().toISOString()
});

function extractEmailDomain(email) {
  const parts = String(email || '').trim().split('@');
  return parts.length === 2 && parts[1] ? parts[1].toLowerCase() : 'unknown';
}

// 2. Push GA4 Enhanced Measurement `form_start` on first user/agent interaction with the form
function triggerFormStartIfNeeded(target) {
  if (formStarted) return;
  const field = target?.closest?.('input, select, textarea');
  if (!field) return;
  formStarted = true;
  window.dataLayer.push({
    event: 'form_start',
    form_id: 'contact-form',
    form_name: 'Solicitar demo y acceso prioritario',
    form_destination: `${window.location.origin}/api/contact`,
    first_field_id: field.id || field.name || 'unknown',
    send_to: 'G-NORTHIUS26',
    timestamp: new Date().toISOString()
  });
}

form?.addEventListener('focusin', (e) => triggerFormStartIfNeeded(e.target));
form?.addEventListener('input', (e) => triggerFormStartIfNeeded(e.target));

// 3. Push GA4 Recommended Event `select_content` when selecting a professional role
roleSelect?.addEventListener('change', (e) => {
  const selectedRole = e.target.value;
  if (!selectedRole) return;
  triggerFormStartIfNeeded(e.target);
  window.dataLayer.push({
    event: 'select_content',
    content_type: 'professional_role',
    item_id: selectedRole.toLowerCase().replace(/[^a-z0-9]+/g, '_'),
    item_name: selectedRole,
    form_id: 'contact-form',
    send_to: 'G-NORTHIUS26',
    timestamp: new Date().toISOString()
  });
});

form?.addEventListener('submit', async (event) => {
  event.preventDefault();

  if (formError) {
    formError.hidden = true;
    formError.textContent = '';
  }

  const formData = new FormData(form);
  const name = String(formData.get('name') || '').trim();
  const email = String(formData.get('email') || '').trim();
  const company = String(formData.get('company') || '').trim();
  const role = String(formData.get('role') || '').trim();
  const message = String(formData.get('message') || '').trim();

  if (!name || !email || !company || !role || !message) {
    if (formError) {
      formError.textContent = 'Por favor, completa todos los campos obligatorios del formulario.';
      formError.hidden = false;
    }
    return;
  }

  triggerFormStartIfNeeded(form.querySelector('input'));

  // 4. Push GA4 Enhanced Measurement `form_submit` event when valid submission starts
  window.dataLayer.push({
    event: 'form_submit',
    form_id: 'contact-form',
    form_name: 'Solicitar demo y acceso prioritario',
    form_destination: `${window.location.origin}/api/contact`,
    form_submit_text: 'Solicitar acceso prioritario',
    send_to: 'G-NORTHIUS26',
    timestamp: new Date().toISOString()
  });

  if (submitBtn) {
    submitBtn.disabled = true;
  }

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        company,
        role,
        message
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const result = await response.json();

    // 5. Push GA4 Recommended Conversion Event `generate_lead` to window.dataLayer
    window.dataLayer.push({
      event: 'generate_lead',
      event_category: 'engagement',
      event_label: 'contact_form_submission',
      lead_source: 'devfest_santiago_2026',
      lead_id: result.leadId || 'ld_8842',
      lead_status: 'qualified',
      user_data: {
        full_name: name,
        email_domain: extractEmailDomain(email),
        company,
        role
      },
      value: 1,
      currency: 'EUR',
      send_to: 'G-NORTHIUS26',
      timestamp: new Date().toISOString()
    });

    if (confirmName) confirmName.textContent = name;
    if (confirmCompany) confirmCompany.textContent = company;
    if (confirmLeadId) confirmLeadId.textContent = result.leadId || 'ld_8842';

    form.hidden = true;
    if (confirmationPanel) {
      confirmationPanel.hidden = false;
    }
  } catch (error) {
    if (formError) {
      formError.textContent = 'No se pudo procesar la solicitud en este momento. Inténtalo de nuevo.';
      formError.hidden = false;
    }
  } finally {
    if (submitBtn) {
      submitBtn.disabled = false;
    }
  }
});

resetFormBtn?.addEventListener('click', () => {
  form?.reset();
  formStarted = false;
  if (confirmationPanel) confirmationPanel.hidden = true;
  if (form) form.hidden = false;
});

copyDatalayerBtn?.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(JSON.stringify(window.dataLayer, null, 2));
    copyDatalayerBtn.textContent = '¡Copiado!';
    setTimeout(() => {
      copyDatalayerBtn.textContent = 'Copiar JSON';
    }, 1500);
  } catch {
    // Fallback noop if clipboard permission is denied
  }
});
