const DATA_URL = "/copa_2026_album_figurinhas_48_selecoes_1728_cards.json";

const rarityColors = {
  common: "#cfd5d0",
  rare: "#58a6ff",
  epic: "#c084fc",
  legendary: "#f4bd39",
};

const state = {
  data: null,
  teams: [],
  stickers: [],
  selectedTeam: "all",
  selectedGroup: "all",
  selectedRarity: "all",
  query: "",
};

const els = {
  projectDescription: document.querySelector("#projectDescription"),
  totalTeams: document.querySelector("#totalTeams"),
  totalStickers: document.querySelector("#totalStickers"),
  stickersPerTeam: document.querySelector("#stickersPerTeam"),
  generatedAt: document.querySelector("#generatedAt"),
  searchInput: document.querySelector("#searchInput"),
  teamFilter: document.querySelector("#teamFilter"),
  groupFilter: document.querySelector("#groupFilter"),
  rarityFilter: document.querySelector("#rarityFilter"),
  visibleTeamsCount: document.querySelector("#visibleTeamsCount"),
  teamList: document.querySelector("#teamList"),
  resultCount: document.querySelector("#resultCount"),
  cardsGrid: document.querySelector("#cardsGrid"),
  emptyState: document.querySelector("#emptyState"),
  clearFilters: document.querySelector("#clearFilters"),
};

function formatNumber(value) {
  return Number(value || 0).toLocaleString("pt-BR");
}

function normalize(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function flattenStickers(teams) {
  return teams.flatMap((team) =>
    team.stickers.map((sticker) => ({
      ...sticker,
      raw: sticker,
      teamName: team.name,
      teamCode: team.code,
      teamGroup: team.group,
    })),
  );
}

function setOptions(select, options, labelFn, valueFn = (item) => item) {
  options.forEach((item) => {
    const option = document.createElement("option");
    option.value = valueFn(item);
    option.textContent = labelFn(item);
    select.append(option);
  });
}

async function copyStickerJson(button, sticker) {
  const text = JSON.stringify(sticker.raw, null, 2);
  const originalLabel = button.textContent;

  try {
    await navigator.clipboard.writeText(text);
    button.textContent = "Copiado";
    button.classList.add("is-copied");
  } catch {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.append(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    button.textContent = "Copiado";
    button.classList.add("is-copied");
  }

  window.setTimeout(() => {
    button.textContent = originalLabel;
    button.classList.remove("is-copied");
  }, 1300);
}

function renderTeams() {
  const query = normalize(state.query);
  const activeTeams = state.teams.filter((team) => {
    const matchesGroup = state.selectedGroup === "all" || team.group === state.selectedGroup;
    const matchesTeam = state.selectedTeam === "all" || team.code === state.selectedTeam;
    const matchesQuery =
      !query || normalize([team.name, team.name_en, team.code, team.group].join(" ")).includes(query);
    return matchesGroup && matchesTeam && matchesQuery;
  });

  els.visibleTeamsCount.textContent = formatNumber(activeTeams.length);
  els.teamList.replaceChildren(
    ...activeTeams.map((team) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = `team-button${state.selectedTeam === team.code ? " is-active" : ""}`;
      button.innerHTML = `
        <span class="team-code">${escapeHtml(team.code)}</span>
        <span>
          <span class="team-name">${escapeHtml(team.name)}</span>
          <span class="team-sub">Grupo ${escapeHtml(team.group)} - ${formatNumber(team.stickers_count)} figurinhas</span>
        </span>
        <span class="team-total">${formatNumber(team.stickers.length)}</span>
      `;
      button.addEventListener("click", () => {
        state.selectedTeam = state.selectedTeam === team.code ? "all" : team.code;
        els.teamFilter.value = state.selectedTeam;
        applyFilters();
      });
      return button;
    }),
  );
}

function renderCards(stickers) {
  els.resultCount.textContent = formatNumber(stickers.length);
  els.emptyState.hidden = stickers.length > 0;

  const fragment = document.createDocumentFragment();
  stickers.slice(0, 240).forEach((sticker) => {
    const card = document.createElement("article");
    card.className = "sticker-card";
    card.style.setProperty("--rarity-color", rarityColors[sticker.rarity] || rarityColors.common);

    const probability = sticker.drop?.probability
      ? `${Math.round(Number(sticker.drop.probability) * 100)}%`
      : "--";
    const duplicateValue = sticker.duplicate_value ?? "--";
    const foil = sticker.foil ? "Sim" : "Nao";
    const prompt = sticker.image_generation?.positive || "Prompt nao informado.";

    card.innerHTML = `
      <header>
        <span>
          <span class="album-number">${escapeHtml(sticker.album_number)}</span>
          <span class="rarity">${escapeHtml(sticker.rarity_label)}</span>
        </span>
        <button class="copy-json-button" type="button">Copiar JSON</button>
      </header>
      <h2>${escapeHtml(sticker.title)}</h2>
      <p class="role">${escapeHtml(sticker.role)}</p>
      <div class="meta-grid">
        <span class="meta-box"><span class="meta-label">Selecao</span><span class="meta-value">${escapeHtml(sticker.team_name)}</span></span>
        <span class="meta-box"><span class="meta-label">Grupo</span><span class="meta-value">${escapeHtml(sticker.group)}</span></span>
        <span class="meta-box"><span class="meta-label">Categoria</span><span class="meta-value">${escapeHtml(sticker.category_code)}</span></span>
        <span class="meta-box"><span class="meta-label">Drop</span><span class="meta-value">${probability}</span></span>
        <span class="meta-box"><span class="meta-label">Duplicada</span><span class="meta-value">${escapeHtml(duplicateValue)} credito(s)</span></span>
        <span class="meta-box"><span class="meta-label">Foil</span><span class="meta-value">${foil}</span></span>
      </div>
      <details class="prompt-details">
        <summary>Prompt de imagem</summary>
        <p>${escapeHtml(prompt)}</p>
      </details>
    `;
    card.querySelector(".copy-json-button").addEventListener("click", (event) => {
      event.stopPropagation();
      copyStickerJson(event.currentTarget, sticker);
    });
    fragment.append(card);
  });

  els.cardsGrid.replaceChildren(fragment);

  if (stickers.length > 240) {
    const notice = document.createElement("p");
    notice.className = "empty-state";
    notice.textContent = `Mostrando 240 de ${formatNumber(stickers.length)} resultados. Use os filtros para refinar.`;
    els.cardsGrid.append(notice);
  }
}

function applyFilters() {
  const query = normalize(state.query);
  const filtered = state.stickers.filter((sticker) => {
    const matchesTeam = state.selectedTeam === "all" || sticker.teamCode === state.selectedTeam;
    const matchesGroup = state.selectedGroup === "all" || sticker.teamGroup === state.selectedGroup;
    const matchesRarity = state.selectedRarity === "all" || sticker.rarity === state.selectedRarity;
    const haystack = normalize(
      [
        sticker.id,
        sticker.album_number,
        sticker.team_name,
        sticker.team_code,
        sticker.title,
        sticker.role,
        sticker.category_code,
        sticker.rarity_label,
      ].join(" "),
    );
    return matchesTeam && matchesGroup && matchesRarity && (!query || haystack.includes(query));
  });

  renderTeams();
  renderCards(filtered);
}

function hydrateSummary(data) {
  els.projectDescription.textContent = data.project?.description || "Estrutura da colecao carregada.";
  els.totalTeams.textContent = formatNumber(data.project?.total_teams || state.teams.length);
  els.totalStickers.textContent = formatNumber(data.project?.total_stickers || state.stickers.length);
  els.stickersPerTeam.textContent = formatNumber(data.project?.stickers_per_team || 0);
  els.generatedAt.textContent = data.generated_at || "--";
}

function bindEvents() {
  els.searchInput.addEventListener("input", (event) => {
    state.query = event.target.value;
    applyFilters();
  });
  els.teamFilter.addEventListener("change", (event) => {
    state.selectedTeam = event.target.value;
    applyFilters();
  });
  els.groupFilter.addEventListener("change", (event) => {
    state.selectedGroup = event.target.value;
    applyFilters();
  });
  els.rarityFilter.addEventListener("change", (event) => {
    state.selectedRarity = event.target.value;
    applyFilters();
  });
  els.clearFilters.addEventListener("click", () => {
    state.selectedTeam = "all";
    state.selectedGroup = "all";
    state.selectedRarity = "all";
    state.query = "";
    els.searchInput.value = "";
    els.teamFilter.value = "all";
    els.groupFilter.value = "all";
    els.rarityFilter.value = "all";
    applyFilters();
  });
}

async function init() {
  try {
    const response = await fetch(DATA_URL, { cache: "no-store" });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const data = await response.json();
    state.data = data;
    state.teams = [...(data.teams || [])].sort((a, b) =>
      a.name.localeCompare(b.name, "pt-BR", { sensitivity: "base" }),
    );
    state.stickers = flattenStickers(state.teams);

    const groups = [...new Set(state.teams.map((team) => team.group))].sort((a, b) =>
      a.localeCompare(b, "pt-BR", { numeric: true }),
    );
    const rarities = Object.entries(data.rarity_system?.rarities || {}).map(([key, rarity]) => ({
      key,
      label: rarity.label || key,
    }));

    setOptions(els.teamFilter, state.teams, (team) => `${team.name} (${team.code})`, (team) => team.code);
    setOptions(els.groupFilter, groups, (group) => `Grupo ${group}`);
    setOptions(els.rarityFilter, rarities, (rarity) => rarity.label, (rarity) => rarity.key);

    hydrateSummary(data);
    bindEvents();
    applyFilters();
  } catch (error) {
    els.projectDescription.textContent = `Nao foi possivel carregar o JSON da colecao: ${error.message}`;
    els.emptyState.hidden = false;
    els.emptyState.textContent = "Verifique se o arquivo JSON esta na raiz do projeto.";
  }
}

init();
