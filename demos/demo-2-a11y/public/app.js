const DESIGN_TOKENS = [
  { name: '--lumina-primary-500', value: '#4F46E5', category: 'color' },
  { name: '--lumina-surface-card', value: '#F8FAFC', category: 'surface' },
  { name: '--lumina-warning-amber', value: '#FACC15', category: 'color' },
  { name: '--lumina-font-heading', value: 'Inter SemiBold 24px', category: 'typography' },
];

let annualBilling = false;

function renderTokens() {
  const filterInput = document.getElementById('token-filter-input');
  const categorySelect = document.getElementById('category-select');
  const listEl = document.getElementById('token-list');
  const countBadge = document.getElementById('token-count-badge');

  const query = (filterInput?.value || '').trim().toLowerCase();
  const category = categorySelect?.value || 'all';

  const filtered = DESIGN_TOKENS.filter((token) => {
    const matchesQuery =
      token.name.toLowerCase().includes(query) ||
      token.value.toLowerCase().includes(query);
    const matchesCategory = category === 'all' || token.category === category;
    return matchesQuery && matchesCategory;
  });

  if (countBadge) {
    countBadge.textContent = `${filtered.length} tokens mostrados`;
  }

  if (!listEl) return;

  listEl.innerHTML = filtered
    .map(
      (token) => `
      <div class="token-item">
        <div class="token-info">
          <span class="token-swatch" style="background: ${
            token.value.startsWith('#') ? token.value : '#e0e7ff'
          }"></span>
          <div>
            <div class="token-name">${token.name}</div>
            <div class="token-value">${token.value}</div>
          </div>
        </div>
        <span class="badge-low-contrast">${token.category.toUpperCase()}</span>
      </div>
    `
    )
    .join('');
}

function toggleBilling() {
  annualBilling = !annualBilling;
  const toggleEl = document.getElementById('billing-toggle');
  const proPriceEl = document.getElementById('price-pro');
  const entPriceEl = document.getElementById('price-enterprise');

  if (toggleEl) {
    toggleEl.classList.toggle('active', annualBilling);
  }
  if (proPriceEl) {
    proPriceEl.textContent = annualBilling ? '$23' : '$29';
  }
  if (entPriceEl) {
    entPriceEl.textContent = annualBilling ? '$79' : '$99';
  }
}

window.toggleBilling = toggleBilling;

document.addEventListener('DOMContentLoaded', () => {
  const filterInput = document.getElementById('token-filter-input');
  const categorySelect = document.getElementById('category-select');

  filterInput?.addEventListener('input', renderTokens);
  categorySelect?.addEventListener('change', renderTokens);

  renderTokens();
});
