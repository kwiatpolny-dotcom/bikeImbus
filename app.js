// ── DOM Elements ──────────────────────────────────────────────────────────────
const searchInput      = document.getElementById('searchInput');
const searchBtn        = document.getElementById('searchBtn');
const mobileSearchBtn  = document.getElementById('mobileSearchBtn');
const toggleViewBtn    = document.getElementById('toggleViewBtn');
const addItemBtn       = document.getElementById('addItemBtn');
const repairsSection   = document.querySelector('.repairs-section');
const bikesSection     = document.querySelector('.vehicles-section');
const repairsList      = document.getElementById('repairsList');
const bikesList        = document.getElementById('vehiclesList');
const loader           = document.getElementById('loader');
const noResults        = document.getElementById('noResults');
const noVehicles       = document.getElementById('noVehicles');
const bikeModal        = document.getElementById('addBikeModal');
const repairModal      = document.getElementById('addRepairModal');
const settingsModal    = document.getElementById('settingsModal');
const addBikeForm      = document.getElementById('addBikeForm');
const addRepairForm    = document.getElementById('addRepairForm');
const settingsForm     = document.getElementById('settingsForm');

// ── Logo domyślne ─────────────────────────────────────────────────────────────
const DEFAULT_LOGO = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgOTYwLjczIDE2OC4yOCI+CiAgPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDMwLjUuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDIuMS40IEJ1aWxkIDMpICAtLT4KICA8ZGVmcz4KICAgIDxzdHlsZT4KICAgICAgLnN0MCB7CiAgICAgICAgZmlsbDogdXJsKCNsaW5lYXItZ3JhZGllbnQpOwogICAgICB9CgogICAgICAuc3QxIHsKICAgICAgICBmaWxsOiAjMmU2MGIyOwogICAgICB9CgogICAgICAuc3QyIHsKICAgICAgICBmaWxsOiAjMDhkM2ZhOwogICAgICB9CiAgICA8L3N0eWxlPgogICAgPGxpbmVhckdyYWRpZW50IGlkPSJsaW5lYXItZ3JhZGllbnQiIHgxPSIyNy42MyIgeTE9IjMyLjY5IiB4Mj0iMTM0LjkiIHkyPSIxNDMuMTkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIuMzIiIHN0b3AtY29sb3I9IiMxNDM4N2YiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMDhkM2ZhIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8Zz4KICAgIDxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0xOTIuNjYsNDIuNzFoMzQuOTNjMTguODcsMCwyOC4zLDguNCwyOC4zLDIyLjU1LDAsMTAuMTctNC40MiwxNy4zOS0xMy4xMiwyMC42M3YuM2MxMS45NCwyLjY1LDE3LjY5LDkuNzMsMTcuNjksMjEuMDgsMCwxMy40MS04LjcsMjMuODgtMjguODksMjMuODhoLTM4LjkxVjQyLjcxWk0yMDMuMjgsNTIuMTV2MzAuMjFoMjMuODhjMTAuNzYsMCwxOC4xMy00LjI3LDE4LjEzLTE1LjYyLDAtOS4xNC01LjQ1LTE0LjU5LTE3LjI0LTE0LjU5aC0yNC43NlpNMjAzLjI4LDkxLjA2djMwLjY2aDI3Ljg2YzEyLjk3LDAsMTguNTctNi45MywxOC41Ny0xNS4zMywwLTkuMTQtNi4wNC0xNS4zMy0xOS4zMS0xNS4zM2gtMjcuMTJaIi8+CiAgICA8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMjY5LjMxLDEzMS4xNVY0Mi43MWgxMC42MXY4OC40M2gtMTAuNjFaIi8+CiAgICA8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMzA1LjQxLDkzLjcxaC0xLjAzdjM3LjQ0aC0xMC42MVY0Mi43MWgxMC42MXY0MS44NmgxLjAzbDQ0LjUxLTQxLjg2aDEzLjEydi4zbC00OS4zNyw0NS41NCw1MS44OCw0Mi4zdi4yOWgtMTRsLTQ2LjEzLTM3LjQ0WiIvPgogICAgPHBhdGggY2xhc3M9InN0MiIgZD0iTTM2OS45Nyw0Mi43MWg1OS4yNXYxMC4xN2gtNDguNjR2MjguMTVoNDMuNjN2MTAuMDJoLTQzLjYzdjI5LjkyaDQ4Ljc4djEwLjE3aC01OS40VjQyLjcxWiIvPgogIDwvZz4KICA8Zz4KICAgIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik00NDMuNzcsMTMxLjE1VjQyLjcxaDI2LjQ1djg4LjQzaC0yNi40NVoiLz4KICAgIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik01OTcuODEsMTMxLjE1di00Ny42NGMwLTEzLjg2LTQuNDYtMTguOTYtMTMuNTQtMTguOTYtMTAuMDQsMC0xNC42Niw2LjA2LTE0LjY2LDE3LjY5djQ4LjkyaC0yNi40NXYtNDguNzZjMC0xMS40Ny00LjE0LTE3Ljg1LTEzLjIzLTE3Ljg1LTEwLjM2LDAtMTQuOTgsNi42OS0xNC45OCwxOC45NnY0Ny42NGgtMjYuNDVWNDIuNzFoMjQuN3Y5LjRoLjMyYzQuNjItOC4yOSwxMy4wNy0xMi40MywyNC4zOC0xMi40M3MxOS45Miw1Ljc0LDI1LjQ5LDE1Ljc3YzYuMzctMTAuMDQsMTUuOTMtMTUuNzcsMjguMDQtMTUuNzcsMTkuNzYsMCwzMi44MiwxMi4xMSwzMi44MiwzNi44MXY1NC42NWgtMjYuNDVaIi8+CiAgICA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNjQwLjM3LDEzMS4xNVYxMy4yNGgyNi40NXYzNi40OWM3LjAxLTcuNDksMTUuOTMtMTAuMDQsMjUuMTctMTAuMDQsMjIuOTQsMCw0My45OCwxNy4yMSw0My45OCw0Ni42OSwwLDI3LjI1LTE3LjM3LDQ3LjgtNDQuNjEsNDcuOC0xMC42OCwwLTIxLjM1LTQuOTQtMjUuMzMtMTIuNDNoLS4zMnY5LjRoLTI1LjMzWk03MDkuNTMsODYuODVjMC0xMS43OS05LjA4LTIyLjQ3LTIxLjgzLTIyLjQ3cy0yMS44MywxMC4wNC0yMS44MywyMi4zMWMwLDEzLjA3LDkuMjQsMjIuNzksMjEuNTEsMjIuNzlzMjIuMTUtOS44OCwyMi4xNS0yMi42M1oiLz4KICAgIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik04MDQuMzEsMTMxLjE1di05LjRoLS4zMmMtMy44Miw4LjEzLTEwLjgzLDEyLjI3LTIyLjc5LDEyLjI3LTE4LjY0LDAtMzQuMS0xMS4xNS0zNC4xLTM2LjMzdi01NC45N2gyNi40NXY0OS41NWMwLDExLjYzLDQuMTQsMTcuMDUsMTQuMTgsMTcuMDVzMTUuMTQtNi42OSwxNS4xNC0xNy41M3YtNDkuMDhoMjYuNDV2ODguNDNoLTI1LjAyWiIvPgogICAgPHBhdGggY2xhc3M9InN0MSIgZD0iTTg4Ni4wNSw2Ny41N2MtLjE2LTUuMS0zLjgyLTYuNjktOC4xMy02LjY5cy03LjY1LDIuNTUtNy42NSw1LjljMCw0Ljc4LDQuMyw3LjE3LDE2LjU3LDEwLjM2LDIxLjAzLDUuNTgsMjcuODgsMTQuMDIsMjcuODgsMjYuOTMsMCwxOC40OC0xNS45MywzMC4xMi0zNi4wMSwzMC4xMnMtMzQuMS0xMS4zMS0zNi4wMS0yOS4zMmgyNi4yOWMuOCw1LjU4LDQuNzgsOC4xMywxMC4wNCw4LjEzLDQuNjIsMCw5LjI0LTIuNzEsOS4yNC02Ljg1LDAtNC45NC0zLjAzLTcuNDktMTYuMjUtMTEuNjMtMjIuMzEtNi44NS0yOC4yLTE1LjYyLTI4LjItMjUuOTcsMC0xNy41MywxNi40MS0yOC44NCwzNC4yNi0yOC44NCwxOS4xMiwwLDMyLjY2LDEwLjUyLDMzLjk0LDI3Ljg4aC0yNS45N1oiLz4KICA8L2c+CiAgPHBhdGggY2xhc3M9InN0MSIgZD0iTTk1Ny40OCwxMDMuNzVsLTEwLjU1LTYuMDljLTIuMDEtMS4xNi00LjQ5LTEuMTYtNi41MSwwbC0xMC41NSw2LjA5Yy0yLjAxLDEuMTYtMy4yNSwzLjMxLTMuMjUsNS42NHYxMi4xOGMwLDIuMzMsMS4yNCw0LjQ3LDMuMjUsNS42NGwxMC41NSw2LjA5YzIuMDEsMS4xNiw0LjQ5LDEuMTYsNi41MSwwbDEwLjU1LTYuMDljMi4wMS0xLjE2LDMuMjUtMy4zMSwzLjI1LTUuNjR2LTEyLjE4YzAtMi4zMy0xLjI0LTQuNDctMy4yNS01LjY0WiIvPgogIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xMzcuNTgsMjkuMjFMOTUuMTUsNC43MWMtMTAuODctNi4yOC0yNC4yNy02LjI4LTM1LjE0LDBMMTcuNTcsMjkuMjFDNi43LDM1LjQ4LDAsNDcuMDksMCw1OS42NHY0OWMwLDEyLjU2LDYuNywyNC4xNiwxNy41NywzMC40NGw0Mi40MywyNC41YzEwLjg3LDYuMjgsMjQuMjcsNi4yOCwzNS4xNCwwbDQyLjQzLTI0LjVjMTAuODctNi4yOCwxNy41Ny0xNy44OCwxNy41Ny0zMC40NHYtNDljMC0xMi41Ni02LjctMjQuMTYtMTcuNTctMzAuNDRaTTc4LjMxLDE0MC4wMmMtMzAuMTYsMC01NC42MS0yNC40NS01NC42MS01NC42MXMyNC40NS01NC42MSw1NC42MS01NC42MSw1NC42MSwyNC40NSw1NC42MSw1NC42MS0yNC40NSw1NC42MS01NC42MSw1NC42MVoiLz4KPC9zdmc+';

// ── Stan aplikacji ────────────────────────────────────────────────────────────
let allBikes         = [];
let allRepairs       = [];
let allTemplates     = [];
let workshopSettings = {};
let isLoading        = false;
let currentView      = 'repairs';
let currentBikeFilter = null;
let editingBikeId    = null;
let editingRepairId  = null;
let currentUserId    = null;
let selectedBikeForRepair = null;
let returnToRepairModalAfterBikeEdit = false;
let customServices   = [];
let clientCustomServices = [];
let _pendingLogo     = '';

// ── Mapowanie DB → App ────────────────────────────────────────────────────────
function dbBikeToApp(b) {
    return {
        id:          b.id,
        ownerName:   b.owner_name,
        ownerPhone:  b.owner_phone,
        ownerEmail:  b.owner_email  || '',
        brand:       b.brand        || '',
        model:       b.model        || '',
        year:        b.year         || '',
        frameNumber: b.frame_number || ''
    };
}

function dbRepairToApp(r) {
    return {
        id:          r.id,
        bikeId:      r.bike_id,
        date:        r.date,
        services:    Array.isArray(r.services) ? r.services : [],
        notes:       r.notes || '',
        orderNumber: r.order_number || null,
        status:      r.status || 'pending'
    };
}

// ── Inicjalizacja ─────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) { window.location.href = 'login.html'; return; }

    currentUserId = session.user.id;
    displayWorkshopInfo(session.user);
    await loadData();
    setupEventListeners();
});

function displayWorkshopInfo(user) {
    const subtitle = document.getElementById('workshopSubtitle');
    if (subtitle) subtitle.textContent = user.user_metadata?.workshopName || user.email;
}

async function handleLogout() {
    if (!confirm('Czy na pewno chcesz się wylogować?')) return;
    await supabase.auth.signOut();
    window.location.href = 'login.html';
}

// ── Nasłuchiwacze ─────────────────────────────────────────────────────────────
function setupEventListeners() {
    searchBtn.addEventListener('click', handleSearch);
    mobileSearchBtn.addEventListener('click', openMobileSearch);
    searchInput.addEventListener('keypress', e => { if (e.key === 'Enter') handleSearch(); });
    searchInput.addEventListener('input', debounce(handleSearch, 200));

    toggleViewBtn.addEventListener('click', () => {
        switchView(currentView === 'bikes' ? 'repairs' : 'bikes', true);
    });
    addItemBtn.addEventListener('click', () => {
        if (currentView === 'bikes') openBikeModal();
        else openRepairModal();
    });

    document.getElementById('logoutBtn').addEventListener('click', handleLogout);
    document.getElementById('settingsBtn').addEventListener('click', openSettingsModal);

    // Bike modal
    document.getElementById('closeBikeModal').addEventListener('click', closeBikeModal);
    document.getElementById('cancelBikeBtn').addEventListener('click', closeBikeModal);
    bikeModal.addEventListener('click', e => { if (e.target === bikeModal) closeBikeModal(); });
    addBikeForm.addEventListener('submit', handleBikeFormSubmit);

    // Repair modal
    document.getElementById('closeRepairModal').addEventListener('click', closeRepairModal);
    document.getElementById('cancelRepairBtn').addEventListener('click', closeRepairModal);
    repairModal.addEventListener('click', e => { if (e.target === repairModal) closeRepairModal(); });
    addRepairForm.addEventListener('submit', handleRepairFormSubmit);
    document.getElementById('addCustomServiceBtn').addEventListener('click', addCustomService);
    document.getElementById('customServiceInput').addEventListener('keypress', e => {
        if (e.key === 'Enter') { e.preventDefault(); addCustomService(); }
    });

    // Settings modal
    document.getElementById('closeSettingsModal').addEventListener('click', closeSettingsModal);
    settingsModal.addEventListener('click', e => { if (e.target === settingsModal) closeSettingsModal(); });
    settingsForm.addEventListener('submit', handleSettingsSave);
    document.getElementById('addTemplateBtn').addEventListener('click', handleAddTemplate);
    document.getElementById('newTemplateInput').addEventListener('keypress', e => {
        if (e.key === 'Enter') { e.preventDefault(); handleAddTemplate(); }
    });
    document.getElementById('exportDbBtn').addEventListener('click', handleExportDatabase);

    // Client modal
    document.getElementById('addClientBtn').addEventListener('click', openClientModal);
    document.getElementById('closeClientModal').addEventListener('click', closeClientModal);
    document.getElementById('cancelClientBtn').addEventListener('click', closeClientModal);
    document.getElementById('addClientModal').addEventListener('click', e => {
        if (e.target === document.getElementById('addClientModal')) closeClientModal();
    });
    document.getElementById('addClientForm').addEventListener('submit', handleClientFormSubmit);
    document.getElementById('addClientCustomServiceBtn').addEventListener('click', () => addCustomServiceTo('client'));
    document.getElementById('clientCustomServiceInput').addEventListener('keypress', e => {
        if (e.key === 'Enter') { e.preventDefault(); addCustomServiceTo('client'); }
    });
    document.getElementById('clientAddRepairToggle').addEventListener('change', e => {
        document.getElementById('clientRepairFields').classList.toggle('hidden', !e.target.checked);
        if (e.target.checked) {
            renderServicesChecklist([], 'clientServicesChecklist');
        }
    });

    // Logo upload
    document.getElementById('logoFileInput').addEventListener('change', e => {
        if (e.target.files[0]) handleLogoUpload(e.target.files[0]);
    });
    document.getElementById('removeLogoBtn').addEventListener('click', clearLogoPreview);

    // Delegacja kliknięć na kartach
    bikesList.addEventListener('click', handleBikeCardClick);
    repairsList.addEventListener('click', handleRepairCardClick);
    document.getElementById('templateList').addEventListener('click', handleTemplateListClick);

    // Bike selector
    setupBikeSelector();
}

// ── Ładowanie danych ──────────────────────────────────────────────────────────
async function loadData() {
    if (isLoading) return;
    isLoading = true;
    showLoader();

    try {
        const [bikesRes, repairsRes, templatesRes, settingsRes] = await Promise.all([
            supabase.from('bikes').select('*').eq('user_id', currentUserId).order('owner_name'),
            supabase.from('bike_repairs').select('*').eq('user_id', currentUserId).order('date', { ascending: false }),
            supabase.from('service_templates').select('*').eq('user_id', currentUserId).order('created_at'),
            supabase.from('workshop_settings').select('*').eq('user_id', currentUserId).maybeSingle()
        ]);

        if (bikesRes.error) throw bikesRes.error;
        if (repairsRes.error) throw repairsRes.error;

        allBikes     = bikesRes.data.map(dbBikeToApp);
        allRepairs   = repairsRes.data.map(dbRepairToApp);
        allTemplates = (templatesRes.data || []).map(t => ({ id: t.id, name: t.name }));
        workshopSettings = settingsRes.data || {};

        switchView(currentView);
    } catch (err) {
        console.error('Błąd ładowania:', err);
        showErrorMessage('Nie udało się załadować danych. Sprawdź połączenie z siecią.');
    } finally {
        isLoading = false;
        hideLoader();
    }
}

// ── Widoki ────────────────────────────────────────────────────────────────────
function switchView(view, resetFilter = false) {
    currentView = view;
    if (resetFilter) currentBikeFilter = null;

    const repairsOpt = toggleViewBtn.querySelector('[data-target="repairs"]');
    const bikesOpt   = toggleViewBtn.querySelector('[data-target="bikes"]');

    if (view === 'bikes') {
        repairsSection.classList.add('hidden');
        bikesSection.classList.remove('hidden');
        repairsOpt.classList.remove('active');
        bikesOpt.classList.add('active');
        addItemBtn.dataset.tooltip = 'Dodaj rower';
        displayBikes(allBikes);
        window.scrollTo({ top: 0, behavior: 'auto' });
    } else {
        repairsSection.classList.remove('hidden');
        bikesSection.classList.add('hidden');
        repairsOpt.classList.add('active');
        bikesOpt.classList.remove('active');
        addItemBtn.dataset.tooltip = 'Dodaj serwis';
        const repairs = currentBikeFilter
            ? allRepairs.filter(r => r.bikeId === currentBikeFilter)
            : allRepairs;
        displayRepairs(repairs);
        window.scrollTo({ top: 0, behavior: 'auto' });
    }
}

// ── Wyświetlanie serwisów ─────────────────────────────────────────────────────
function displayRepairs(repairs) {
    repairsList.innerHTML = '';
    hideNoResults();

    if (currentBikeFilter) {
        const bike = allBikes.find(b => b.id === currentBikeFilter);
        repairsList.appendChild(createFilterBanner(bike, repairs.length > 0));
    }

    if (repairs.length === 0 && !currentBikeFilter) { showNoResults(); return; }
    if (repairs.length === 0) return;

    const groups = groupByAge(repairs);
    groups.forEach(group => {
        const header = document.createElement('div');
        header.className = 'repair-group-header';
        header.innerHTML = `<span>${escapeHtml(group.label)}</span>`;
        repairsList.appendChild(header);
        // Zakończone serwisy lądują na dole grupy — sortowanie jest stabilne,
        // więc kolejność w obrębie "do naprawy" i "zakończono" się nie zmienia.
        const sorted = [...group.items].sort((a, b) => (a.status === 'done') - (b.status === 'done'));
        sorted.forEach(r => repairsList.appendChild(createRepairCard(r)));
    });
}

function createRepairCard(repair) {
    const bike = allBikes.find(b => b.id === repair.bikeId);
    const card = document.createElement('div');
    card.className = 'repair-card';

    const ownerLine  = bike ? `${escapeHtml(bike.ownerName)} · ${escapeHtml(bike.ownerPhone)}` : 'Nieznany';
    const bikeLabel  = bike ? [bike.brand, bike.model].filter(Boolean).map(escapeHtml).join(' ') : '';
    const chipsHtml  = repair.services.length
        ? repair.services.map(s => `<span class="service-chip">${escapeHtml(s)}</span>`).join('')
        : '<span class="no-services">Brak usług</span>';
    const orderBadge = repair.orderNumber
        ? `<span class="repair-order-badge">nr ${repair.orderNumber}/${repair.date.substring(0,4)}</span>`
        : '';
    const isDone = repair.status === 'done';

    card.innerHTML = `
        <div class="repair-card-header">
            <div class="repair-main-info">
                <div class="repair-date-row">
                    <span class="repair-date">📅 ${formatDate(repair.date)}</span>
                    ${orderBadge}
                </div>
                <div class="repair-bike-link" data-bike-id="${repair.bikeId}" data-tooltip="Pokaż wszystkie naprawy tego roweru">
                    <div class="repair-owner">${ownerLine}</div>
                    ${bikeLabel ? `<div class="repair-bike-model">${bikeLabel}</div>` : ''}
                </div>
            </div>
            <div class="card-actions">
                <button type="button" class="btn btn-icon repair-protocol-btn"
                    data-repair-id="${repair.id}" data-tooltip="Protokół przyjęcia" data-tooltip-pos="bottom">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/><polyline points="9 13 11 15 15 11"/></svg>
                </button>
                <button type="button" class="btn btn-icon repair-pdf-btn"
                    data-repair-id="${repair.id}" data-tooltip="Protokół odbioru" data-tooltip-pos="bottom">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
                </button>
                <button type="button" class="btn btn-icon repair-edit-btn"
                    data-repair-id="${repair.id}" data-tooltip="Edytuj">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                </button>
                <button type="button" class="btn btn-icon btn-danger repair-delete-btn"
                    data-repair-id="${repair.id}" data-tooltip="Usuń">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>
                </button>
            </div>
        </div>
        <div class="service-chips-row">${chipsHtml}</div>
        ${repair.notes ? `<div class="repair-notes">${escapeHtml(repair.notes)}</div>` : ''}
        <div class="repair-card-footer">
            <button type="button" class="btn-status-toggle ${isDone ? 'status-done' : 'status-pending'}" data-repair-id="${repair.id}">
                ${isDone
                    ? `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Zakończono`
                    : `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg> Do naprawy`
                }
            </button>
        </div>
    `;
    return card;
}

function createFilterBanner(bike, hasRepairs) {
    const banner = document.createElement('div');
    banner.className = 'repair-filter-banner';
    const label = bike
        ? escapeHtml(`${bike.ownerName} · ${[bike.brand, bike.model].filter(Boolean).join(' ')}`)
        : 'wybrany rower';

    banner.innerHTML = `
        <div>${hasRepairs ? 'Serwisy: ' : 'Brak serwisów dla: '}${label}</div>
        <div style="display:flex;gap:8px;">
            <button class="back-to-bikes-btn">Powrót</button>
            <button class="add-repair-btn btn btn-primary">Dodaj serwis</button>
        </div>
    `;
    banner.querySelector('.back-to-bikes-btn').addEventListener('click', () => switchView('bikes'));
    banner.querySelector('.add-repair-btn').addEventListener('click', () => openRepairModal(null, bike));
    return banner;
}

function groupByAge(repairs) {
    const now = new Date();
    const buckets = [];
    repairs.forEach(repair => {
        const d = new Date(repair.date);
        if (isNaN(d)) return;
        const diff = Math.floor((now - d) / 86400000);
        let label;
        if      (diff < 7)   label = 'W tym tygodniu';
        else if (diff < 14)  label = 'W zeszłym tygodniu';
        else if (diff < 21)  label = '2 tygodnie temu';
        else if (diff < 28)  label = '3 tygodnie temu';
        else if (diff < 60)  label = 'Miesiąc temu';
        else if (diff < 90)  label = '2 miesiące temu';
        else {
            const m = Math.floor(diff / 30);
            label = m >= 12 ? (m === 12 ? 'Rok temu' : `Ponad rok temu`) : `${m} miesiące temu`;
        }
        let group = buckets.find(g => g.label === label);
        if (!group) { group = { label, items: [] }; buckets.push(group); }
        group.items.push(repair);
    });
    return buckets;
}

// ── Wyświetlanie rowerów ──────────────────────────────────────────────────────
function displayBikes(bikes) {
    bikesList.innerHTML = '';
    if (bikes.length === 0) { showNoBikes(); return; }
    hideNoBikes();
    bikes.forEach(b => bikesList.appendChild(createBikeCard(b)));
}

function createBikeCard(bike) {
    const card = document.createElement('div');
    card.className = 'vehicle-card';
    card.dataset.bikeId = bike.id;

    const lastRepair = allRepairs
        .filter(r => r.bikeId === bike.id)
        .sort((a, b) => new Date(b.date) - new Date(a.date))[0];

    const lastText  = lastRepair ? `Ostatni serwis: ${formatDate(lastRepair.date)}` : 'Brak serwisów';
    const bikeLabel = [bike.brand, bike.model, bike.year ? `(${bike.year})` : ''].filter(Boolean).join(' ');

    card.innerHTML = `
        <div class="vehicle-card-header">
            <div class="vehicle-reg-and-brand">
                <div class="reg-brand-row">
                    <h3>${escapeHtml(bike.ownerName)}</h3>
                    ${bikeLabel ? `<div class="brand-model-text">${escapeHtml(bikeLabel)}</div>` : ''}
                </div>
                <div class="last-repair-text">${escapeHtml(lastText)}</div>
            </div>
            <div class="card-actions">
                <button type="button" class="btn btn-icon bike-edit-btn"
                    data-bike-id="${bike.id}" data-tooltip="Edytuj rower">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                </button>
                <button type="button" class="btn btn-icon btn-danger bike-delete-btn"
                    data-bike-id="${bike.id}" data-tooltip="Usuń rower">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>
                </button>
            </div>
        </div>
        <div class="vehicle-details">
            <div class="info-item">
                <div class="info-label">Telefon</div>
                <div class="info-value">${escapeHtml(bike.ownerPhone)}</div>
            </div>
            ${bike.ownerEmail ? `
            <div class="info-item">
                <div class="info-label">Email</div>
                <div class="info-value">${escapeHtml(bike.ownerEmail)}</div>
            </div>` : ''}
            ${bike.frameNumber ? `
            <div class="info-item">
                <div class="info-label">Nr ramy</div>
                <div class="info-value">${escapeHtml(bike.frameNumber)}</div>
            </div>` : ''}
        </div>
    `;
    return card;
}

function showNoBikes() { noVehicles.classList.remove('hidden'); bikesList.innerHTML = ''; }
function hideNoBikes() { noVehicles.classList.add('hidden'); }

// ── Kliknięcia na kartach ─────────────────────────────────────────────────────
function handleBikeCardClick(e) {
    const editBtn   = e.target.closest('.bike-edit-btn');
    const deleteBtn = e.target.closest('.bike-delete-btn');
    const card      = e.target.closest('.vehicle-card');

    if (editBtn)   { const bike = allBikes.find(b => b.id === editBtn.dataset.bikeId); if (bike) openBikeModal(bike); return; }
    if (deleteBtn) { deleteBike(deleteBtn.dataset.bikeId); return; }
    if (card?.dataset.bikeId) {
        currentBikeFilter = card.dataset.bikeId;
        switchView('repairs');
    }
}

function handleRepairCardClick(e) {
    const statusBtn   = e.target.closest('.btn-status-toggle');
    const protocolBtn = e.target.closest('.repair-protocol-btn');
    const pdfBtn      = e.target.closest('.repair-pdf-btn');
    const editBtn     = e.target.closest('.repair-edit-btn');
    const deleteBtn   = e.target.closest('.repair-delete-btn');
    const bikeLink    = e.target.closest('.repair-bike-link');

    if (statusBtn)   { toggleRepairStatus(statusBtn.dataset.repairId); return; }
    if (protocolBtn) { exportProtocolToPdf(protocolBtn.dataset.repairId); return; }
    if (pdfBtn)      { exportRepairToPdf(pdfBtn.dataset.repairId); return; }
    if (editBtn)     { const r = allRepairs.find(r => r.id === editBtn.dataset.repairId); if (r) openRepairModal(r); return; }
    if (deleteBtn)   { deleteRepair(deleteBtn.dataset.repairId); return; }
    if (bikeLink?.dataset.bikeId) { currentBikeFilter = bikeLink.dataset.bikeId; switchView('repairs'); }
}

// ── Wyszukiwanie ──────────────────────────────────────────────────────────────
function handleSearch() {
    const q = searchInput.value.trim().toLowerCase();
    if (!q) {
        if (currentView === 'bikes') displayBikes(allBikes);
        else displayRepairs(currentBikeFilter ? allRepairs.filter(r => r.bikeId === currentBikeFilter) : allRepairs);
        return;
    }
    if (currentView === 'bikes') {
        displayBikes(allBikes.filter(b =>
            b.ownerName.toLowerCase().includes(q) || b.ownerPhone.toLowerCase().includes(q)
        ));
    } else {
        const matchIds = new Set(allBikes
            .filter(b => b.ownerName.toLowerCase().includes(q) || b.ownerPhone.toLowerCase().includes(q))
            .map(b => b.id));
        displayRepairs(allRepairs.filter(r => matchIds.has(r.bikeId)));
    }
}

function openMobileSearch() {
    const term = prompt('Szukaj po nazwisku lub numerze telefonu:');
    if (!term?.trim()) return;
    searchInput.value = term.trim();
    handleSearch();
}

// ── Selektor roweru (formularz serwisu) ───────────────────────────────────────
function setupBikeSelector() {
    const input    = document.getElementById('bikeSearchInput');
    const dropdown = document.getElementById('bikeDropdown');

    input.addEventListener('input', debounce(() => {
        const q = input.value.trim().toLowerCase();
        if (!q) { dropdown.classList.add('hidden'); return; }
        const matches = allBikes.filter(b =>
            b.ownerName.toLowerCase().includes(q) || b.ownerPhone.toLowerCase().includes(q)
        );
        renderBikeDropdown(matches);
    }, 200));

    input.addEventListener('focus', () => {
        if (input.value.trim()) dropdown.classList.remove('hidden');
    });

    document.addEventListener('click', e => {
        if (!e.target.closest('.bike-selector')) dropdown.classList.add('hidden');
    });
}

function renderBikeDropdown(bikes) {
    const dropdown = document.getElementById('bikeDropdown');
    dropdown.innerHTML = '';

    bikes.forEach(bike => {
        const bikeLabel = [bike.brand, bike.model].filter(Boolean).join(' ');
        const item = document.createElement('div');
        item.className = 'bike-dropdown-item';
        item.innerHTML = `
            <div class="bike-dropdown-owner">${escapeHtml(bike.ownerName)}</div>
            <div class="bike-dropdown-detail">${escapeHtml(bike.ownerPhone)}${bikeLabel ? ' · ' + escapeHtml(bikeLabel) : ''}</div>
        `;
        item.addEventListener('click', () => selectBikeForRepair(bike));
        dropdown.appendChild(item);
    });

    const addNew = document.createElement('div');
    addNew.className = 'bike-dropdown-item bike-dropdown-add';
    addNew.innerHTML = '<span>+ Dodaj nowy rower</span>';
    addNew.addEventListener('click', () => {
        document.getElementById('bikeDropdown').classList.add('hidden');
        closeRepairModal();
        openBikeModal();
    });
    dropdown.appendChild(addNew);
    dropdown.classList.remove('hidden');
}

function selectBikeForRepair(bike) {
    selectedBikeForRepair = bike;
    document.getElementById('bikeSearchWrapper').classList.add('hidden');
    document.getElementById('bikeDropdown').classList.add('hidden');

    const bikeLabel = [bike.brand, bike.model, bike.year ? `(${bike.year})` : ''].filter(Boolean).join(' ');
    const card = document.getElementById('selectedBikeCard');
    card.innerHTML = `
        <div class="selected-bike-info">
            <div>
                <strong>${escapeHtml(bike.ownerName)}</strong> · ${escapeHtml(bike.ownerPhone)}
                ${bike.ownerEmail ? `<br><small>${escapeHtml(bike.ownerEmail)}</small>` : ''}
                ${bikeLabel ? `<br>${escapeHtml(bikeLabel)}` : ''}
                ${bike.frameNumber ? `<br><small>Nr ramy: ${escapeHtml(bike.frameNumber)}</small>` : ''}
                <br><button type="button" class="edit-selected-bike-btn" id="editSelectedBikeBtn">Edytuj dane roweru</button>
            </div>
            <button type="button" class="clear-bike-btn" id="clearBikeBtn">×</button>
        </div>
    `;
    card.classList.remove('hidden');
    document.getElementById('clearBikeBtn').addEventListener('click', clearBikeSelection);
    document.getElementById('editSelectedBikeBtn').addEventListener('click', () => editSelectedBikeFromRepairModal(bike.id));
}

// Otwiera edycję danych roweru bez tracenia w toku wypełnianego formularza
// serwisu — chowa (nie zamyka/resetuje) modal serwisu, a po zapisaniu lub
// anulowaniu edycji roweru (closeBikeModal) wraca do niego z odświeżonymi
// danymi wybranego roweru.
function editSelectedBikeFromRepairModal(bikeId) {
    const bike = allBikes.find(b => b.id === bikeId);
    if (!bike) return;
    repairModal.classList.add('hidden');
    returnToRepairModalAfterBikeEdit = true;
    openBikeModal(bike);
}

function clearBikeSelection() {
    selectedBikeForRepair = null;
    document.getElementById('bikeSearchWrapper').classList.remove('hidden');
    document.getElementById('bikeSearchInput').value = '';
    const card = document.getElementById('selectedBikeCard');
    card.classList.add('hidden');
    card.innerHTML = '';
}

// ── Usługi (formularze) ───────────────────────────────────────────────────────
function renderServicesChecklist(preselected = [], containerId = 'servicesChecklist') {
    const list = document.getElementById(containerId);
    if (!list) return;
    list.innerHTML = '';
    populateServiceSuggestions();

    if (allTemplates.length === 0) {
        list.innerHTML = '<p class="no-templates-msg">Brak usług. Wpisz poniżej lub dodaj w <strong>Ustawieniach</strong> (⚙️).</p>';
        return;
    }

    allTemplates.forEach(tpl => {
        const label = document.createElement('label');
        label.className = 'service-check-item';
        label.innerHTML = `
            <input type="checkbox" value="${escapeHtml(tpl.name)}" ${preselected.includes(tpl.name) ? 'checked' : ''}>
            <span>${escapeHtml(tpl.name)}</span>
        `;
        list.appendChild(label);
    });
}

// Podpowiedzi (natywny <datalist>) dla pola "Dodaj własną usługę" — po
// wpisaniu kilku liter przeglądarka sama pokaże pasujące, już zdefiniowane
// usługi z allTemplates.
function populateServiceSuggestions() {
    const datalist = document.getElementById('serviceSuggestions');
    if (!datalist) return;
    datalist.innerHTML = allTemplates.map(t => `<option value="${escapeHtml(t.name)}">`).join('');
}

async function addCustomServiceTo(context = 'repair') {
    const inputId = context === 'client' ? 'clientCustomServiceInput' : 'customServiceInput';
    const checklistId = context === 'client' ? 'clientServicesChecklist' : 'servicesChecklist';
    const input = document.getElementById(inputId);
    const name = input.value.trim();
    if (!name) return;

    // jeśli już istnieje w szablonach, tylko zaznacz
    const existing = allTemplates.find(t => t.name.toLowerCase() === name.toLowerCase());
    if (existing) {
        input.value = '';
        const checkbox = document.querySelector(`#${checklistId} input[value="${escapeHtml(existing.name)}"]`);
        if (checkbox) { checkbox.checked = true; checkbox.closest('label').scrollIntoView({ block: 'nearest' }); }
        input.focus();
        return;
    }

    // zapisz do bazy
    const btn = document.getElementById(context === 'client' ? 'addClientCustomServiceBtn' : 'addCustomServiceBtn');
    btn.disabled = true;
    const { data, error } = await supabase
        .from('service_templates')
        .insert({ user_id: currentUserId, name })
        .select()
        .single();
    btn.disabled = false;

    if (error || !data) { showErrorMessage('Błąd dodawania usługi.'); return; }

    allTemplates.push({ id: data.id, name: data.name });
    input.value = '';

    // przerysuj obydwa checklisty z nowym elementem zaznaczonym
    const currentChecked = getCheckedServices('servicesChecklist');
    const clientChecked  = getCheckedServices('clientServicesChecklist');
    renderServicesChecklist([...currentChecked, data.name], 'servicesChecklist');
    renderServicesChecklist([...clientChecked,  data.name], 'clientServicesChecklist');

    // uaktualnij listę w ustawieniach jeśli otwarte
    if (!document.getElementById('settingsModal').classList.contains('hidden')) renderTemplateList();

    input.focus();
}

// helper: zwraca zaznaczone usługi z podanego checklisty
function getCheckedServices(containerId) {
    const list = document.getElementById(containerId);
    if (!list) return [];
    return Array.from(list.querySelectorAll('input[type="checkbox"]:checked')).map(cb => cb.value);
}

function addCustomService() { addCustomServiceTo('repair'); }

function renderCustomServicesTags() {}   // zostawione dla kompatybilności

function getSelectedServicesFromForm() {
    return getCheckedServices('servicesChecklist');
}

// ── Formularz roweru ──────────────────────────────────────────────────────────
async function handleBikeFormSubmit(e) {
    e.preventDefault();

    const bikeData = {
        user_id:      currentUserId,
        owner_name:   document.getElementById('bikeOwnerName').value.trim(),
        owner_phone:  document.getElementById('bikeOwnerPhone').value.trim(),
        owner_email:  document.getElementById('bikeOwnerEmail').value.trim(),
        brand:        document.getElementById('bikeBrand').value.trim(),
        model:        document.getElementById('bikeModel').value.trim(),
        year:         document.getElementById('bikeYear').value.trim(),
        frame_number: document.getElementById('bikeFrameNumber').value.trim()
    };

    const submitBtn = addBikeForm.querySelector('button[type="submit"]');
    const orig = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '⏳ Zapisywanie...';

    try {
        const wasEditing = !!editingBikeId;
        const result = wasEditing
            ? await supabase.from('bikes').update(bikeData).eq('id', editingBikeId)
            : await supabase.from('bikes').insert(bikeData);

        if (result.error) throw result.error;

        // Wczytujemy świeże dane PRZED zamknięciem modala roweru, żeby — jeśli
        // wracamy do modala serwisu (edycja roweru wywołana stamtąd) —
        // podgląd wybranego roweru odświeżył się z aktualnymi danymi, a nie
        // z tymi sprzed edycji.
        await loadData();
        closeBikeModal();
        showSuccessMessage(wasEditing ? 'Rower zaktualizowany!' : 'Rower dodany!');
    } catch (err) {
        console.error(err);
        showErrorMessage('Wystąpił błąd podczas zapisywania roweru.');
    } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = orig;
    }
}

// ── Formularz serwisu ─────────────────────────────────────────────────────────
async function handleRepairFormSubmit(e) {
    e.preventDefault();

    if (!selectedBikeForRepair) {
        showErrorMessage('Wybierz rower przed zapisaniem serwisu.');
        return;
    }

    const services = getSelectedServicesFromForm();
    if (services.length === 0) {
        showErrorMessage('Dodaj co najmniej jedną usługę.');
        return;
    }

    const repairDate = document.getElementById('repairDate').value;
    const repairYear = new Date(repairDate).getFullYear();
    const repairData = {
        user_id:      currentUserId,
        bike_id:      selectedBikeForRepair.id,
        date:         repairDate,
        services,
        notes:        document.getElementById('repairNotes').value.trim(),
        order_number: editingRepairId ? undefined : await getNextOrderNumber(repairYear)
    };
    if (editingRepairId) delete repairData.order_number;

    const submitBtn = addRepairForm.querySelector('button[type="submit"]');
    const orig = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '⏳ Zapisywanie...';

    try {
        const result = editingRepairId
            ? await supabase.from('bike_repairs').update(repairData).eq('id', editingRepairId)
            : await supabase.from('bike_repairs').insert(repairData);

        if (result.error) throw result.error;

        const wasEditingRepair = !!editingRepairId;
        closeRepairModal();
        showSuccessMessage(wasEditingRepair ? 'Serwis zaktualizowany!' : 'Serwis zapisany!');
        await loadData();
    } catch (err) {
        console.error(err);
        showErrorMessage('Wystąpił błąd podczas zapisywania serwisu.');
    } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = orig;
    }
}

// ── Modal: Rower ──────────────────────────────────────────────────────────────
function openBikeModal(bike = null) {
    editingBikeId = null;
    addBikeForm.reset();
    document.getElementById('bikeModalTitle').textContent = bike ? 'Edytuj rower' : 'Dodaj nowy rower';
    populateBrandDatalist();

    if (bike) {
        editingBikeId = bike.id;
        document.getElementById('bikeOwnerName').value   = bike.ownerName;
        document.getElementById('bikeOwnerPhone').value  = bike.ownerPhone;
        document.getElementById('bikeOwnerEmail').value  = bike.ownerEmail;
        document.getElementById('bikeBrand').value       = bike.brand;
        document.getElementById('bikeModel').value       = bike.model;
        document.getElementById('bikeYear').value        = bike.year;
        document.getElementById('bikeFrameNumber').value = bike.frameNumber;
    }

    bikeModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeBikeModal() {
    bikeModal.classList.add('hidden');
    document.body.style.overflow = '';
    addBikeForm.reset();
    editingBikeId = null;

    // Rower był edytowany z poziomu okna serwisu (patrz
    // editSelectedBikeFromRepairModal) — wracamy do niego, zachowując to, co
    // użytkownik już wpisał (data, usługi, uwagi), i odświeżając podgląd
    // wybranego roweru na wypadek zmiany jego danych.
    if (returnToRepairModalAfterBikeEdit) {
        returnToRepairModalAfterBikeEdit = false;
        repairModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        if (selectedBikeForRepair) {
            const fresh = allBikes.find(b => b.id === selectedBikeForRepair.id);
            if (fresh) selectBikeForRepair(fresh);
        }
    }
}

function populateBrandDatalist() {
    const datalist = document.getElementById('bikeBrandList');
    const brands   = [...new Set(allBikes.map(b => b.brand).filter(Boolean))].sort();
    datalist.innerHTML = brands.map(b => `<option value="${escapeHtml(b)}">`).join('');
}

// ── Modal: Nowy klient + serwis ───────────────────────────────────────────────
function openClientModal() {
    document.getElementById('addClientForm').reset();
    document.getElementById('clientRepairFields').classList.add('hidden');
    document.getElementById('clientAddRepairToggle').checked = false;
    document.getElementById('clientRepairDate').value = new Date().toISOString().split('T')[0];
    populateClientBrandDatalist();
    renderServicesChecklist([], 'clientServicesChecklist');
    document.getElementById('addClientModal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeClientModal() {
    document.getElementById('addClientModal').classList.add('hidden');
    document.body.style.overflow = '';
    document.getElementById('addClientForm').reset();
    document.getElementById('clientRepairFields').classList.add('hidden');
}

function populateClientBrandDatalist() {
    const datalist = document.getElementById('clientBikeBrandList');
    const brands = [...new Set(allBikes.map(b => b.brand).filter(Boolean))].sort();
    datalist.innerHTML = brands.map(b => `<option value="${escapeHtml(b)}">`).join('');
}

async function handleClientFormSubmit(e) {
    e.preventDefault();

    const bikeData = {
        user_id:      currentUserId,
        owner_name:   document.getElementById('clientOwnerName').value.trim(),
        owner_phone:  document.getElementById('clientOwnerPhone').value.trim(),
        owner_email:  document.getElementById('clientOwnerEmail').value.trim(),
        brand:        document.getElementById('clientBikeBrand').value.trim(),
        model:        document.getElementById('clientBikeModel').value.trim(),
        year:         document.getElementById('clientBikeYear').value.trim(),
        frame_number: document.getElementById('clientBikeFrameNumber').value.trim()
    };

    const addRepair = document.getElementById('clientAddRepairToggle').checked;
    const services  = addRepair ? getCheckedServices('clientServicesChecklist') : [];

    if (addRepair && services.length === 0) {
        showErrorMessage('Dodaj co najmniej jedną usługę do serwisu.');
        return;
    }

    const submitBtn = document.getElementById('addClientForm').querySelector('button[type="submit"]');
    const orig = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '⏳ Zapisywanie...';

    try {
        const { data: bikeRow, error: bikeErr } = await supabase
            .from('bikes').insert(bikeData).select().single();
        if (bikeErr) throw bikeErr;

        if (addRepair) {
            const clientRepairDate = document.getElementById('clientRepairDate').value;
            const clientRepairYear = new Date(clientRepairDate).getFullYear();
            const repairData = {
                user_id:      currentUserId,
                bike_id:      bikeRow.id,
                date:         clientRepairDate,
                services,
                notes:        document.getElementById('clientRepairNotes').value.trim(),
                order_number: await getNextOrderNumber(clientRepairYear)
            };
            const { error: repairErr } = await supabase.from('bike_repairs').insert(repairData);
            if (repairErr) throw repairErr;
        }

        closeClientModal();
        showSuccessMessage(addRepair ? 'Klient i serwis zapisane!' : 'Klient dodany!');
        await loadData();
    } catch (err) {
        console.error(err);
        showErrorMessage('Wystąpił błąd podczas zapisywania.');
    } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = orig;
    }
}

// ── Modal: Serwis ─────────────────────────────────────────────────────────────
function openRepairModal(repair = null, preselectBike = null) {
    editingRepairId = null;
    addRepairForm.reset();
    selectedBikeForRepair = null;
    clearBikeSelection();
    document.getElementById('repairModalTitle').textContent = repair ? 'Edytuj serwis' : 'Dodaj nowy serwis';

    const today = new Date().toISOString().split('T')[0];
    document.getElementById('repairDate').value = today;

    if (repair) {
        editingRepairId = repair.id;
        document.getElementById('repairDate').value = repair.date || today;
        document.getElementById('repairNotes').value = repair.notes || '';

        const bike = allBikes.find(b => b.id === repair.bikeId);
        if (bike) selectBikeForRepair(bike);

        // usługi z naprawy które nie są jeszcze w szablonach — dodaj je lokalnie
        const templateNames = new Set(allTemplates.map(t => t.name));
        const extra = repair.services.filter(s => !templateNames.has(s));
        extra.forEach(name => allTemplates.push({ id: null, name }));
        renderServicesChecklist(repair.services);
    } else if (preselectBike) {
        selectBikeForRepair(preselectBike);
        renderServicesChecklist([]);
    } else {
        renderServicesChecklist([]);
    }

    repairModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeRepairModal() {
    repairModal.classList.add('hidden');
    document.body.style.overflow = '';
    addRepairForm.reset();
    selectedBikeForRepair = null;
    clearBikeSelection();
    editingRepairId = null;
}

// ── Modal: Ustawienia ─────────────────────────────────────────────────────────
function openSettingsModal() {
    document.getElementById('settingsName').value    = workshopSettings.ws_name    || '';
    document.getElementById('settingsAddress').value = workshopSettings.ws_address || '';
    document.getElementById('settingsPhone').value   = workshopSettings.ws_phone   || '';
    document.getElementById('settingsEmail').value   = workshopSettings.ws_email   || '';
    document.getElementById('settingsNip').value     = workshopSettings.ws_nip     || '';

    _pendingLogo = workshopSettings.logo_base64 || '';
    document.getElementById('logoFileInput').value = '';
    updateLogoPreviewUI(_pendingLogo);

    renderTemplateList();

    settingsModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function updateLogoPreviewUI(base64) {
    const preview     = document.getElementById('logoPreview');
    const placeholder = document.getElementById('logoPlaceholder');
    const removeBtn   = document.getElementById('removeLogoBtn');
    if (base64) {
        preview.src = base64;
        preview.classList.remove('hidden');
        placeholder.classList.add('hidden');
        removeBtn.classList.remove('hidden');
    } else {
        preview.src = '';
        preview.classList.add('hidden');
        placeholder.classList.remove('hidden');
        removeBtn.classList.add('hidden');
    }
}

async function handleLogoUpload(file) {
    if (!file.type.startsWith('image/')) { showErrorMessage('Wybierz plik graficzny (PNG, JPG).'); return; }
    try {
        _pendingLogo = await resizeImageToBase64(file, 600, 300);
        updateLogoPreviewUI(_pendingLogo);
    } catch {
        showErrorMessage('Nie udało się wczytać obrazu.');
    }
}

function clearLogoPreview() {
    _pendingLogo = '';
    document.getElementById('logoFileInput').value = '';
    updateLogoPreviewUI('');
}

function resizeImageToBase64(file, maxW, maxH) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = e => {
            const img = new Image();
            img.onload = () => {
                let w = img.width, h = img.height;
                if (w > maxW || h > maxH) {
                    const ratio = Math.min(maxW / w, maxH / h);
                    w = Math.round(w * ratio);
                    h = Math.round(h * ratio);
                }
                const canvas = document.createElement('canvas');
                canvas.width = w; canvas.height = h;
                canvas.getContext('2d').drawImage(img, 0, 0, w, h);
                resolve(canvas.toDataURL('image/png', 0.85));
            };
            img.onerror = reject;
            img.src = e.target.result;
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

function closeSettingsModal() {
    settingsModal.classList.add('hidden');
    document.body.style.overflow = '';
}

async function handleSettingsSave(e) {
    e.preventDefault();

    const data = {
        user_id:     currentUserId,
        ws_name:     document.getElementById('settingsName').value.trim(),
        ws_address:  document.getElementById('settingsAddress').value.trim(),
        ws_phone:    document.getElementById('settingsPhone').value.trim(),
        ws_email:    document.getElementById('settingsEmail').value.trim(),
        ws_nip:      document.getElementById('settingsNip').value.trim(),
        logo_base64: _pendingLogo
    };

    const submitBtn = settingsForm.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.innerHTML = '⏳ Zapisywanie...';

    const { error } = await supabase
        .from('workshop_settings')
        .upsert(data, { onConflict: 'user_id' });

    submitBtn.disabled = false;
    submitBtn.innerHTML = 'Zapisz ustawienia';

    if (error) { showErrorMessage('Błąd zapisu ustawień.'); return; }

    workshopSettings = data;
    showSuccessMessage('Ustawienia zapisane!');
}

// ── Szablony usług ────────────────────────────────────────────────────────────
function renderTemplateList() {
    const list = document.getElementById('templateList');
    list.innerHTML = '';
    populateServiceSuggestions();

    if (allTemplates.length === 0) {
        list.innerHTML = '<p class="no-templates-msg">Brak szablonów. Dodaj poniżej.</p>';
        return;
    }

    allTemplates.forEach(tpl => {
        const item = document.createElement('div');
        item.className = 'template-item';
        item.innerHTML = `
            <span>${escapeHtml(tpl.name)}</span>
            <button type="button" class="btn btn-icon btn-danger template-delete-btn"
                data-template-id="${tpl.id}">🗑️</button>
        `;
        list.appendChild(item);
    });
}

function handleTemplateListClick(e) {
    const btn = e.target.closest('.template-delete-btn');
    if (btn) deleteServiceTemplate(btn.dataset.templateId);
}

async function handleAddTemplate() {
    const input = document.getElementById('newTemplateInput');
    const name  = input.value.trim();
    if (!name) return;

    const btn = document.getElementById('addTemplateBtn');
    btn.disabled = true;

    const { data, error } = await supabase
        .from('service_templates')
        .insert({ user_id: currentUserId, name })
        .select()
        .single();

    btn.disabled = false;

    if (error || !data) { showErrorMessage('Błąd dodawania szablonu.'); return; }

    allTemplates.push({ id: data.id, name: data.name });
    input.value = '';
    renderTemplateList();
    showSuccessMessage(`Dodano: ${name}`);
}

async function deleteServiceTemplate(templateId) {
    if (!confirm('Usunąć ten szablon?')) return;

    const { error } = await supabase
        .from('service_templates')
        .delete()
        .eq('id', templateId)
        .eq('user_id', currentUserId);

    if (error) { showErrorMessage('Błąd usuwania szablonu.'); return; }

    allTemplates = allTemplates.filter(t => t.id !== templateId);
    renderTemplateList();
}

// ── Kopia zapasowa (pobieranie bazy danych) ───────────────────────────────────
async function handleExportDatabase() {
    const btn = document.getElementById('exportDbBtn');
    const orig = btn.textContent;
    btn.disabled = true;
    btn.textContent = 'Przygotowywanie...';

    try {
        // Pobieramy świeże dane wprost z bazy, żeby kopia była na pewno aktualna.
        const [bikesRes, repairsRes, templatesRes, settingsRes] = await Promise.all([
            supabase.from('bikes').select('*').eq('user_id', currentUserId).order('owner_name'),
            supabase.from('bike_repairs').select('*').eq('user_id', currentUserId).order('date', { ascending: false }),
            supabase.from('service_templates').select('*').eq('user_id', currentUserId).order('created_at'),
            supabase.from('workshop_settings').select('*').eq('user_id', currentUserId).maybeSingle()
        ]);
        if (bikesRes.error) throw bikesRes.error;
        if (repairsRes.error) throw repairsRes.error;

        const backup = {
            exported_at: new Date().toISOString(),
            bikes: bikesRes.data || [],
            bike_repairs: repairsRes.data || [],
            service_templates: templatesRes.data || [],
            workshop_settings: settingsRes.data || {}
        };

        const json = JSON.stringify(backup, null, 2);
        const blob = new Blob([json], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const dateStr = new Date().toISOString().slice(0, 10);

        const a = document.createElement('a');
        a.href = url;
        a.download = `bike-imbus-baza-${dateStr}.json`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        setTimeout(() => URL.revokeObjectURL(url), 30000);

        showSuccessMessage('Baza danych została pobrana.');
    } catch (err) {
        console.error(err);
        showErrorMessage('Nie udało się pobrać bazy danych.');
    } finally {
        btn.disabled = false;
        btn.textContent = orig;
    }
}

// ── Status naprawy ────────────────────────────────────────────────────────────
async function toggleRepairStatus(repairId) {
    const repair = allRepairs.find(r => r.id === repairId);
    if (!repair) return;

    const newStatus = repair.status === 'done' ? 'pending' : 'done';

    const { error } = await supabase
        .from('bike_repairs')
        .update({ status: newStatus })
        .eq('id', repairId);

    if (error) { showErrorMessage('Błąd: ' + (error.message || error.code || JSON.stringify(error))); return; }

    repair.status = newStatus;
    const repairs = currentBikeFilter
        ? allRepairs.filter(r => r.bikeId === currentBikeFilter)
        : allRepairs;
    displayRepairs(repairs);
}

// ── Numer zlecenia ────────────────────────────────────────────────────────────
async function getNextOrderNumber(year) {
    const { data } = await supabase
        .from('bike_repairs')
        .select('order_number')
        .eq('user_id', currentUserId)
        .gte('date', `${year}-01-01`)
        .lte('date', `${year}-12-31`)
        .not('order_number', 'is', null)
        .order('order_number', { ascending: false })
        .limit(1);
    return (data?.[0]?.order_number || 0) + 1;
}

// ── PDF Export ────────────────────────────────────────────────────────────────
function exportRepairToPdf(repairId) {
    const repair = allRepairs.find(r => r.id === repairId);
    if (!repair) return;
    const bike = allBikes.find(b => b.id === repair.bikeId);
    if (!bike) return;
    generatePdf(buildPrintHtml(repair, bike), `protokol-odbioru-${repair.date}.pdf`);
}

function exportProtocolToPdf(repairId) {
    const repair = allRepairs.find(r => r.id === repairId);
    if (!repair) return;
    const bike = allBikes.find(b => b.id === repair.bikeId);
    if (!bike) return;
    generatePdf(buildProtocolHtml(repair, bike), `protokol-przyjecia-${repair.date}.pdf`);
}

async function generatePdf(bodyHtml) {
    // Historia podejść (dla przyszłych zmian - nie kasować bez powodu):
    // 1. Zwykły div z position:absolute;left:-9999px — html2canvas w niektórych
    //    przeglądarkach/oknach źle liczył obszar do przechwycenia przy tak dużym
    //    ujemnym przesunięciu: przycięcia, czasem puste strony.
    // 2. Jawne windowWidth/windowHeight/scrollX:0/scrollY:0 dla html2canvas przy
    //    tym samym przesunięciu -9999px — jeszcze gorzej: kazaliśmy html2canvas
    //    patrzeć na obszar [0,0,W,H], czyli DOKŁADNIE tam, gdzie dokumentu už nie
    //    było (bo leżał na x:-9999) → zawsze pusta strona.
    // 3. Osobny <iframe> z własnym document.write() — html2canvas nie stosował
    //    w ogóle stylów CSS z takiego zagnieżdżonego dokumentu (znany, opisywany
    //    problem html2canvas z przechwytywaniem contentDocument z iframe) —
    //    dokument wyglądał jakby CSS w ogóle nie istniał (brak formatowania,
    //    logo w oryginalnym rozmiarze, tekst się przelewał na 2. stronę).
    // 4. Kontener z position:fixed — html2canvas OFICJALNIE NIE WSPIERA
    //    position:fixed (udokumentowane ograniczenie biblioteki: elementy
    //    z position:fixed są renderowane w przestrzeni współrzędnych całego
    //    dokumentu, a nie widocznego okna). Skutek zależał od tego, czy i jak
    //    bardzo strona aplikacji była przescrollowana w momencie eksportu:
    //    pusty margines nad nagłówkiem, brakujące sekcje, pusta druga strona.
    //    Dodatkowo: wysokość dokumentu do wyliczenia "spacera" (padToFullPage)
    //    była mierzona zanim obrazek logo zdążył się w pełni zdekodować —
    //    zaniżony pomiar dawał za duży spacer, a gdy logo dociążało się do
    //    pełnego rozmiaru, treść i tak przelewała się na drugą stronę.
    // Teraz: kontener ma position:absolute (jedyna wspierana przez html2canvas
    // opcja "wyjęcia z normalnego układu" bez position:static), a okno jest
    // tymczasowo przewijane do (0,0) na czas przechwytywania, więc dokument
    // renderuje się dokładnie w miejscu, gdzie html2canvas się go spodziewa —
    // niezależnie od tego, gdzie użytkownik przewinął stronę aplikacji.
    // Dodatkowo czekamy, aż logo w pełni się zdekoduje, zanim zmierzymy
    // wysokość dokumentu pod spacer.
    const savedScrollX = window.scrollX, savedScrollY = window.scrollY;
    window.scrollTo(0, 0);

    const overlay = document.createElement('div');
    overlay.style.cssText = 'position:fixed; inset:0; background:#fff; z-index:99998;';
    document.body.appendChild(overlay);

    const container = document.createElement('div');
    container.style.cssText = 'position:absolute; top:0; left:0; z-index:99999; background:#fff;';
    container.innerHTML = `<style>${getPrintStyles()}</style>${bodyHtml}`;
    document.body.appendChild(container);

    try {
        // Czekamy aż wszystkie obrazki (logo) będą w pełni zdekodowane, zanim
        // zmierzymy wysokość dokumentu pod spacer — inaczej licząc na
        // podstawie jeszcze nie w pełni wyrenderowanego logo, dostajemy za
        // duży spacer i treść przelewa się na drugą stronę.
        await Promise.all(Array.from(container.querySelectorAll('img')).map(img =>
            img.decode ? img.decode().catch(() => {}) : new Promise(res => {
                if (img.complete) res(); else img.addEventListener('load', res, { once: true });
            })
        ));
        await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));

        const target = container.querySelector('.print-doc');
        padToFullPage(container);

        const blob = await html2pdf().set({
            margin: [12, 14, 12, 14],
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2, useCORS: true, logging: false },
            jsPDF: { unit: 'mm', format: 'a5', orientation: 'portrait' }
        }).from(target).output('blob');
        const url = URL.createObjectURL(blob);
        window.open(url, '_blank');
        setTimeout(() => URL.revokeObjectURL(url), 60000);
    } finally {
        document.body.removeChild(container);
        document.body.removeChild(overlay);
        window.scrollTo(savedScrollX, savedScrollY);
    }
}

// Jeśli treść dokumentu jest krótsza niż jedna strona A5, dokładamy zwykły,
// zmierzony w pikselach element-wypełniacz tuż przed sekcją oznaczoną klasą
// "print-pin-bottom" (koszty/podpis albo zgoda RODO/podpisy) — dzięki temu
// ta sekcja wizualnie spada na sam dół strony, a "Zakres prac" ma
// maksymalnie dużo miejsca. Zabezpieczone górnym limitem, żeby błąd pomiaru
// nigdy nie mógł spowodować rozjechania dokumentu na więcej niż jedną stronę.
function padToFullPage(container) {
    const doc = container.querySelector('.print-doc');
    const pin = container.querySelector('.print-pin-bottom');
    if (!doc || !pin) return;

    // Strona A5, margines jsPDF [12,14,12,14]mm → obszar treści 186mm wysokości.
    // Celujemy trochę poniżej pełnych 186mm (bezpieczny margines), bo drobne
    // różnice zaokrągleń między pomiarem w żywym DOM a wewnętrzną matematyką
    // stron w html2canvas/jsPDF potrafią „przechylić” dokument dosłownie
    // wypełniony do samej krawędzi na dodatkową, prawie pustą drugą stronę
    // (obcinając ostatnią linijkę w połowie). Kilka mm zapasu kosztuje
    // niewiele miejsca, a całkowicie eliminuje to ryzyko.
    const ruler = document.createElement('div');
    ruler.style.cssText = 'height:180mm; width:0;';
    container.appendChild(ruler);
    const targetHeight = ruler.getBoundingClientRect().height;
    container.removeChild(ruler);

    const currentHeight = doc.getBoundingClientRect().height;
    const missing = Math.max(0, Math.min(targetHeight - currentHeight, targetHeight));
    if (missing > 0) {
        const spacer = document.createElement('div');
        spacer.style.height = missing + 'px';
        pin.parentNode.insertBefore(spacer, pin);
    }
}

function getPrintStyles() {
    return `
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: Arial, Helvetica, sans-serif; font-size: 10pt; color: #000; line-height: 1.45; }
        .print-doc { width: 120mm; background: #fff; }
        .print-header { text-align: center; padding-bottom: 8pt; border-bottom: 1.5pt solid #000; margin-bottom: 9pt; }
        .print-header-with-logo { display: flex; align-items: center; gap: 12pt; text-align: left; }
        .print-logo { max-height: 70pt; max-width: 150pt; object-fit: contain; flex-shrink: 0; }
        .print-header-text { flex: 1; }
        .print-workshop-name { font-size: 13pt; font-weight: bold; margin-bottom: 3pt; }
        .print-workshop-detail { font-size: 9pt; color: #444; }
        .print-workshop-contact { font-size: 9pt; color: #444; margin-top: 2pt; }
        .print-title-row { margin: 8pt 0 7pt; padding-bottom: 5pt; border-bottom: 1pt solid #999; }
        .print-title-text { font-size: 11pt; font-weight: bold; text-transform: uppercase; letter-spacing: .5pt; }
        .print-section { margin-bottom: 7pt; padding-bottom: 7pt; border-bottom: 0.5pt solid #ccc; }
        .print-section-label { font-size: 7.5pt; font-weight: bold; text-transform: uppercase; letter-spacing: .5pt; color: #666; margin-bottom: 3pt; }
        .print-section-value { font-size: 10pt; margin-bottom: 1.5pt; }
        .print-services-list { margin: 4pt 0 4pt 14pt; padding: 0; list-style-type: disc; }
        .print-services-list li { margin-bottom: 2.5pt; font-size: 10pt; }
        .print-notes { font-size: 9pt; color: #444; margin-top: 4pt; font-style: italic; }
        .print-costs { margin-top: 9pt; }
        .print-costs-table { width: 100%; border-collapse: collapse; }
        .print-costs-table td { padding: 5pt 2pt; font-size: 10pt; border-bottom: 0.5pt solid #bbb; vertical-align: bottom; }
        .print-cost-value { border-bottom: 1pt solid #000 !important; width: 100pt; text-align: right; }
        .print-total-row td { font-size: 11pt; border-top: 1.5pt solid #000 !important; border-bottom: 0.5pt solid #bbb; padding-top: 5pt !important; }
        .print-signature { margin-top: 18pt; font-size: 10pt; padding-top: 6pt; }
        .print-rodo { border-bottom: 0.5pt solid #ccc; }
        .print-rodo-text { font-size: 8pt; color: #333; line-height: 1.5; margin-top: 3pt; text-align: justify; }
        .print-sig-row { display: flex; gap: 20pt; margin-top: 18pt; }
        .print-sig-block { flex: 1; }
        .print-sig-line { border-bottom: 1pt solid #000; height: 24pt; margin-bottom: 4pt; }
        .print-sig-label { font-size: 7.5pt; color: #555; text-align: center; }
    `;
}

function printHeader(ws) {
    const logo = ws.logo_base64?.startsWith('data:image/') ? ws.logo_base64 : DEFAULT_LOGO;
    const hasText = ws.ws_name || ws.ws_address || ws.ws_phone || ws.ws_email || ws.ws_nip;
    return `
        <div class="print-header ${logo ? 'print-header-with-logo' : ''}">
            ${logo ? `<img class="print-logo" src="${logo}" alt="Logo">` : ''}
            ${hasText ? `<div class="print-header-text">
                ${ws.ws_name    ? `<div class="print-workshop-name">${escapeHtml(ws.ws_name)}</div>` : ''}
                ${ws.ws_address ? `<div class="print-workshop-detail">${escapeHtml(ws.ws_address)}</div>` : ''}
                ${(ws.ws_phone || ws.ws_email) ? `<div class="print-workshop-contact">
                    ${ws.ws_phone ? `Tel: ${escapeHtml(ws.ws_phone)}` : ''}
                    ${ws.ws_phone && ws.ws_email ? ' &nbsp;|&nbsp; ' : ''}
                    ${ws.ws_email ? `Email: ${escapeHtml(ws.ws_email)}` : ''}
                </div>` : ''}
                ${ws.ws_nip ? `<div class="print-workshop-contact">NIP: ${escapeHtml(ws.ws_nip)}</div>` : ''}
            </div>` : ''}
        </div>`;
}

function buildPrintHtml(repair, bike) {
    const ws = workshopSettings;
    const bikeLabel = [bike.brand, bike.model, bike.year ? `(${bike.year})` : ''].filter(Boolean).join(' ');

    return `
        <div class="print-doc">
            ${printHeader(ws)}

            <div class="print-title-row">
                <span class="print-title-text">Protokół odbioru &nbsp;·&nbsp; ${escapeHtml(formatDate(repair.date))}</span>
            </div>

            <div class="print-section">
                <div class="print-section-label">Klient</div>
                <div class="print-section-value">
                    <strong>${escapeHtml(bike.ownerName)}</strong> &nbsp;·&nbsp; Tel: ${escapeHtml(bike.ownerPhone)}${bike.ownerEmail ? ` &nbsp;·&nbsp; Email: ${escapeHtml(bike.ownerEmail)}` : ''}
                </div>
            </div>

            <div class="print-section">
                <div class="print-section-label">Rower</div>
                <div class="print-section-value">
                    ${escapeHtml(bikeLabel || '—')}${bike.frameNumber ? ` &nbsp;·&nbsp; Nr ramy: ${escapeHtml(bike.frameNumber)}` : ''}
                </div>
            </div>

            <div class="print-section">
                <div class="print-section-label">Zakres prac</div>
                <ul class="print-services-list">
                    ${repair.services.map(s => `<li>${escapeHtml(s)}</li>`).join('')}
                </ul>
                ${repair.notes ? `<div class="print-notes">Uwagi: ${escapeHtml(repair.notes)}</div>` : ''}
            </div>

            <div class="print-costs print-pin-bottom">
                <table class="print-costs-table">
                    <tr><td>Koszt części:</td><td class="print-cost-value">&nbsp;</td></tr>
                    <tr><td>Koszt robocizny:</td><td class="print-cost-value">&nbsp;</td></tr>
                    <tr class="print-total-row"><td><strong>SUMA:</strong></td><td class="print-cost-value">&nbsp;</td></tr>
                </table>
            </div>

            <div class="print-signature">
                Potwierdzam odbiór roweru: ______________________________
            </div>
        </div>
    `;
}

function buildProtocolHtml(repair, bike) {
    const ws = workshopSettings;
    const bikeLabel = [bike.brand, bike.model, bike.year ? `(${bike.year})` : ''].filter(Boolean).join(' ');
    const wsName = ws.ws_name || 'warsztat';

    return `
        <div class="print-doc">
            ${printHeader(ws)}

            <div class="print-title-row">
                <span class="print-title-text">Protokół przyjęcia roweru &nbsp;·&nbsp; ${escapeHtml(formatDate(repair.date))}</span>
            </div>

            <div class="print-section">
                <div class="print-section-label">Klient</div>
                <div class="print-section-value">
                    <strong>${escapeHtml(bike.ownerName)}</strong> &nbsp;·&nbsp; Tel: ${escapeHtml(bike.ownerPhone)}${bike.ownerEmail ? ` &nbsp;·&nbsp; Email: ${escapeHtml(bike.ownerEmail)}` : ''}
                </div>
            </div>

            <div class="print-section">
                <div class="print-section-label">Rower</div>
                <div class="print-section-value">
                    ${escapeHtml(bikeLabel || '—')}${bike.frameNumber ? ` &nbsp;·&nbsp; Nr ramy: ${escapeHtml(bike.frameNumber)}` : ''}
                </div>
            </div>

            <div class="print-section">
                <div class="print-section-label">Zakres prac</div>
                <ul class="print-services-list">
                    ${repair.services.map(s => `<li>${escapeHtml(s)}</li>`).join('')}
                </ul>
                ${repair.notes ? `<div class="print-notes">Uwagi: ${escapeHtml(repair.notes)}</div>` : ''}
            </div>

            <div class="print-section print-rodo print-pin-bottom">
                <div class="print-section-label">Zgoda na przetwarzanie danych (RODO)</div>
                <div class="print-rodo-text">Wyrażam zgodę na przetwarzanie moich danych osobowych przez <strong>${escapeHtml(wsName)}</strong> w celu realizacji usługi serwisowej roweru, zgodnie z art. 6 ust. 1 lit. b RODO (Rozporządzenie Parlamentu Europejskiego i Rady (UE) 2016/679). Dane będą przetwarzane przez okres niezbędny do realizacji usługi i nie będą udostępniane podmiotom trzecim bez mojej zgody.</div>
            </div>

            <div class="print-sig-row">
                <div class="print-sig-block">
                    <div class="print-sig-line"></div>
                    <div class="print-sig-label">Data i podpis klienta</div>
                </div>
                <div class="print-sig-block">
                    <div class="print-sig-line"></div>
                    <div class="print-sig-label">Data i podpis serwisanta</div>
                </div>
            </div>
        </div>
    `;
}

// ── Usuwanie ──────────────────────────────────────────────────────────────────
async function deleteRepair(repairId) {
    const repair = allRepairs.find(r => r.id === repairId);
    if (!repair) return;
    const bike = allBikes.find(b => b.id === repair.bikeId);
    const label = bike ? `${bike.ownerName} z dnia ${formatDate(repair.date)}` : formatDate(repair.date);

    if (!confirm(`Usunąć serwis: ${label}?`)) return;

    const { error } = await supabase.from('bike_repairs').delete().eq('id', repairId);
    if (error) { showErrorMessage('Nie udało się usunąć serwisu.'); return; }

    allRepairs = allRepairs.filter(r => r.id !== repairId);
    displayRepairs(currentBikeFilter ? allRepairs.filter(r => r.bikeId === currentBikeFilter) : allRepairs);
    showSuccessMessage('Serwis usunięty.');
}

async function deleteBike(bikeId) {
    const bike = allBikes.find(b => b.id === bikeId);
    if (!bike) return;

    const repairCount = allRepairs.filter(r => r.bikeId === bikeId).length;
    const msg = repairCount > 0
        ? `Usunąć rower "${bike.ownerName}"? Zostaną też usunięte ${repairCount} serwis(y).`
        : `Usunąć rower "${bike.ownerName}"?`;

    if (!confirm(msg)) return;

    const { error } = await supabase.from('bikes').delete().eq('id', bikeId);
    if (error) { showErrorMessage('Nie udało się usunąć roweru.'); return; }

    allBikes   = allBikes.filter(b => b.id !== bikeId);
    allRepairs = allRepairs.filter(r => r.bikeId !== bikeId);
    if (currentView === 'bikes') displayBikes(allBikes);
    showSuccessMessage('Rower usunięty.');
}

// ── UI helpers ────────────────────────────────────────────────────────────────
function showLoader()    { loader.classList.remove('hidden'); }
function hideLoader()    { loader.classList.add('hidden'); }
function showNoResults() { noResults.classList.remove('hidden'); }
function hideNoResults() { noResults.classList.add('hidden'); }

function showSuccessMessage(msg) {
    const div = document.createElement('div');
    div.style.cssText = 'position:fixed;top:20px;right:20px;background:#10b981;color:white;padding:14px 22px;border-radius:8px;box-shadow:0 10px 15px -3px rgba(0,0,0,.1);z-index:2000;animation:slideInRight .3s ease-out;font-weight:600;max-width:360px;';
    div.textContent = msg;
    document.body.appendChild(div);
    setTimeout(() => { div.style.animation = 'slideOutRight .3s ease-out'; setTimeout(() => div.remove(), 300); }, 2800);
}

function showErrorMessage(msg) {
    const div = document.createElement('div');
    div.style.cssText = 'position:fixed;top:20px;right:20px;background:#ef4444;color:white;padding:14px 22px;border-radius:8px;box-shadow:0 10px 15px -3px rgba(0,0,0,.1);z-index:2000;animation:slideInRight .3s ease-out;font-weight:600;max-width:360px;';
    div.textContent = msg;
    document.body.appendChild(div);
    setTimeout(() => { div.style.animation = 'slideOutRight .3s ease-out'; setTimeout(() => div.remove(), 300); }, 4000);
}

// ── Utils ─────────────────────────────────────────────────────────────────────
function formatDate(dateString) {
    if (!dateString) return 'Brak daty';
    try {
        return new Date(dateString).toLocaleDateString('pl-PL', { year: 'numeric', month: 'long', day: 'numeric' });
    } catch { return dateString; }
}

const _esc = document.createElement('div');
function escapeHtml(text) {
    if (!text) return '';
    _esc.textContent = String(text);
    return _esc.innerHTML;
}

function debounce(fn, ms) {
    let t;
    return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), ms); };
}
