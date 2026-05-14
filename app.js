const imageFiles = [
  "Africa do Sul.png",
  "Alemanha.png",
  "Arabia Saudita.png",
  "Argelia.png",
  "Argentina.png",
  "Australia.png",
  "Austria.png",
  "Belgica.png",
  "Bosnia Herzegovina.png",
  "Brasil.png",
  "Cabo Verde.png",
  "Canada.png",
  "Catar.png",
  "Colombia.png",
  "Coreia do Sul.png",
  "Costa do Marfim.png",
  "Croácia.png",
  "Curacau.png",
  "Egito.png",
  "Equador.png",
  "Escocia.png",
  "Espanha.png",
  "Estados Unidos.png",
  "França.png",
  "Gana.png",
  "Haiti.png",
  "Holanda.png",
  "Inglaterra.png",
  "Irã.png",
  "Iraque.png",
  "Japão.png",
  "Jordânia.png",
  "Marrocos.png",
  "Mexico.png",
  "Noruega.png",
  "Nova Zelandia.png",
  "Panama.png",
  "Paraguai.png",
  "Portugal.png",
  "Republica do Congo.png",
  "Senegal.png",
  "Suécia.png",
  "Suiça.png",
  "Tchéquia.png",
  "Tunisia.png",
  "Turquia.png",
  "Uruguai.png",
  "Uzbequistão.png",
];

const flagCodes = {
  "Africa do Sul": "za",
  Alemanha: "de",
  "Arabia Saudita": "sa",
  Argelia: "dz",
  Argentina: "ar",
  Australia: "au",
  Austria: "at",
  Belgica: "be",
  "Bosnia Herzegovina": "ba",
  Brasil: "br",
  "Cabo Verde": "cv",
  Canada: "ca",
  Catar: "qa",
  Colombia: "co",
  "Coreia do Sul": "kr",
  "Costa do Marfim": "ci",
  "Croácia": "hr",
  Curacau: "cw",
  Egito: "eg",
  Equador: "ec",
  Escocia: "gb-sct",
  Espanha: "es",
  "Estados Unidos": "us",
  "França": "fr",
  Gana: "gh",
  Haiti: "ht",
  Holanda: "nl",
  Inglaterra: "gb-eng",
  Iraque: "iq",
  "Irã": "ir",
  "Japão": "jp",
  "Jordânia": "jo",
  Marrocos: "ma",
  Mexico: "mx",
  Noruega: "no",
  "Nova Zelandia": "nz",
  Panama: "pa",
  Paraguai: "py",
  Portugal: "pt",
  "Republica do Congo": "cd",
  Senegal: "sn",
  "Suiça": "ch",
  "Suécia": "se",
  "Tchéquia": "cz",
  Tunisia: "tn",
  Turquia: "tr",
  Uruguai: "uy",
  "Uzbequistão": "uz",
};

const worldCupGroups = [
  {
    name: "Grupo A",
    teams: ["Mexico", "Africa do Sul", "Coreia do Sul", "Tchéquia"],
  },
  {
    name: "Grupo B",
    teams: ["Canada", "Bosnia Herzegovina", "Catar", "Suiça"],
  },
  {
    name: "Grupo C",
    teams: ["Brasil", "Marrocos", "Haiti", "Escocia"],
  },
  {
    name: "Grupo D",
    teams: ["Estados Unidos", "Paraguai", "Australia", "Turquia"],
  },
  {
    name: "Grupo E",
    teams: ["Alemanha", "Curacau", "Costa do Marfim", "Equador"],
  },
  {
    name: "Grupo F",
    teams: ["Holanda", "Japão", "Suécia", "Tunisia"],
  },
  {
    name: "Grupo G",
    teams: ["Belgica", "Egito", "Irã", "Nova Zelandia"],
  },
  {
    name: "Grupo H",
    teams: ["Espanha", "Cabo Verde", "Arabia Saudita", "Uruguai"],
  },
  {
    name: "Grupo I",
    teams: ["França", "Senegal", "Iraque", "Noruega"],
  },
  {
    name: "Grupo J",
    teams: ["Argentina", "Argelia", "Austria", "Jordânia"],
  },
  {
    name: "Grupo K",
    teams: ["Portugal", "Republica do Congo", "Uzbequistão", "Colombia"],
  },
  {
    name: "Grupo L",
    teams: ["Inglaterra", "Croácia", "Gana", "Panama"],
  },
];

const worldCupStadiums = [
  { name: "Toronto Stadium", city: "Toronto", country: "Canada", wikiTitle: "BMO Field" },
  { name: "BC Place Vancouver", city: "Vancouver", country: "Canada", wikiTitle: "BC Place" },
  { name: "Mexico City Stadium", city: "Cidade do Mexico", country: "Mexico", wikiTitle: "Estadio Azteca" },
  { name: "Guadalajara Stadium", city: "Guadalajara", country: "Mexico", wikiTitle: "Estadio Akron" },
  { name: "Monterrey Stadium", city: "Monterrey", country: "Mexico", wikiTitle: "Estadio BBVA" },
  { name: "New York New Jersey Stadium", city: "East Rutherford", country: "Estados Unidos", wikiTitle: "MetLife Stadium" },
  { name: "Dallas Stadium", city: "Arlington", country: "Estados Unidos", wikiTitle: "AT&T Stadium" },
  { name: "Atlanta Stadium", city: "Atlanta", country: "Estados Unidos", wikiTitle: "Mercedes-Benz Stadium" },
  { name: "Boston Stadium", city: "Foxborough", country: "Estados Unidos", wikiTitle: "Gillette Stadium" },
  { name: "Philadelphia Stadium", city: "Philadelphia", country: "Estados Unidos", wikiTitle: "Lincoln Financial Field" },
  { name: "Kansas City Stadium", city: "Kansas City", country: "Estados Unidos", wikiTitle: "Arrowhead Stadium" },
  { name: "Houston Stadium", city: "Houston", country: "Estados Unidos", wikiTitle: "NRG Stadium" },
  { name: "Seattle Stadium", city: "Seattle", country: "Estados Unidos", wikiTitle: "Lumen Field" },
  { name: "San Francisco Bay Area Stadium", city: "Santa Clara", country: "Estados Unidos", wikiTitle: "Levi's Stadium" },
  { name: "Los Angeles Stadium", city: "Inglewood", country: "Estados Unidos", wikiTitle: "SoFi Stadium" },
  { name: "Miami Stadium", city: "Miami Gardens", country: "Estados Unidos", wikiTitle: "Hard Rock Stadium" },
];

const tournamentRoadmap = [
  {
    label: "Fase de grupos",
    dates: "11-27 jun",
    detail: "12 grupos · 72 jogos",
    note: "Avancam os 2 primeiros de cada grupo e os 8 melhores terceiros",
  },
  {
    label: "Rodada de 32",
    dates: "28 jun-3 jul",
    detail: "16 confrontos",
    note: "Inicio do mata-mata",
  },
  {
    label: "Oitavas de final",
    dates: "4-7 jul",
    detail: "8 confrontos",
    note: "Vencedores seguem para as quartas",
  },
  {
    label: "Quartas de final",
    dates: "9-11 jul",
    detail: "4 confrontos",
    note: "O caminho para as semifinais",
  },
  {
    label: "Semifinais",
    dates: "14-15 jul",
    detail: "2 confrontos",
    note: "Define os finalistas",
  },
  {
    label: "Disputa de 3o lugar",
    dates: "18 jul",
    detail: "Miami Stadium",
    note: "Perdedores das semifinais",
  },
  {
    label: "Final",
    dates: "19 jul",
    detail: "New York New Jersey Stadium",
    note: "Jogo 104 · Campeao mundial",
  },
];

const groupMatchPairings = [
  [0, 1],
  [2, 3],
  [0, 2],
  [1, 3],
  [3, 0],
  [1, 2],
];

const bookElement = document.querySelector("#book");
const coverView = document.querySelector("#coverView");
const statusElement = document.querySelector("#pageStatus");
const previousButton = document.querySelector("#prevPage");
const nextButton = document.querySelector("#nextPage");
const stickerModal = document.querySelector("#stickerModal");
const stickerModalImage = document.querySelector("#stickerModalImage");
const stickerModalPlaceholder = document.querySelector("#stickerModalPlaceholder");
const stickerModalClose = document.querySelector(".sticker-modal-close");
const stickerModalBackdrop = document.querySelector(".sticker-modal-backdrop");
const pasteStickerButton = document.querySelector("#pasteStickerButton");
const sellStickerButton = document.querySelector("#sellStickerButton");
const openShopButton = document.querySelector("#openShop");
const shopPanel = document.querySelector("#shopPanel");
const shopCloseButton = document.querySelector(".shop-close");
const shopBackdrop = document.querySelector(".shop-backdrop");
const creditBalanceElement = document.querySelector("#creditBalance");
const shopMessage = document.querySelector("#shopMessage");
const checkoutModal = document.querySelector("#checkoutModal");
const checkoutBackdrop = document.querySelector(".checkout-backdrop");
const checkoutCloseButton = document.querySelector(".checkout-close");
const checkoutProduct = document.querySelector("#checkoutProduct");
const checkoutPrice = document.querySelector("#checkoutPrice");
const confirmCheckoutButton = document.querySelector("#confirmCheckout");
const openPacksButton = document.querySelector("#openPacks");
const packsModal = document.querySelector("#packsModal");
const packsBackdrop = document.querySelector(".packs-backdrop");
const packsCloseButton = document.querySelector(".packs-close");
const packsCreditBalanceElement = document.querySelector("#packsCreditBalance");
const packQuantityInput = document.querySelector("#packQuantity");
const decreasePackQtyButton = document.querySelector("#decreasePackQty");
const increasePackQtyButton = document.querySelector("#increasePackQty");
const packsTotalElement = document.querySelector("#packsTotal");
const packsStickerTotalElement = document.querySelector("#packsStickerTotal");
const confirmPackPurchaseButton = document.querySelector("#confirmPackPurchase");
const packsMessage = document.querySelector("#packsMessage");
const openInventoryButton = document.querySelector("#openInventory");
const inventoryModal = document.querySelector("#inventoryModal");
const inventoryBackdrop = document.querySelector(".inventory-backdrop");
const inventoryCloseButton = document.querySelector(".inventory-close");
const inventoryTotalElement = document.querySelector("#inventoryTotal");
const standardPackCountElement = document.querySelector("#standardPackCount");
const premiumPackCountElement = document.querySelector("#premiumPackCount");
const openedPackResult = document.querySelector("#openedPackResult");
const inventoryMessage = document.querySelector("#inventoryMessage");
const openCollectionButton = document.querySelector("#openCollection");
const collectionModal = document.querySelector("#collectionModal");
const collectionBackdrop = document.querySelector(".collection-backdrop");
const collectionCloseButton = document.querySelector(".collection-close");
const collectionGrid = document.querySelector("#collectionGrid");
const collectionUniqueTotal = document.querySelector("#collectionUniqueTotal");
const collectionMessage = document.querySelector("#collectionMessage");
const openMarketButton = document.querySelector("#openMarket");
const marketModal = document.querySelector("#marketModal");
const marketBackdrop = document.querySelector(".market-backdrop");
const marketCloseButton = document.querySelector(".market-close");
const marketStatus = document.querySelector("#marketStatus");
const marketSearch = document.querySelector("#marketSearch");
const marketTeamFilter = document.querySelector("#marketTeamFilter");
const marketRarityFilter = document.querySelector("#marketRarityFilter");
const marketCompareCount = document.querySelector("#marketCompareCount");
const marketCompareMin = document.querySelector("#marketCompareMin");
const marketCompareAvg = document.querySelector("#marketCompareAvg");
const marketCompareMax = document.querySelector("#marketCompareMax");
const marketListings = document.querySelector("#marketListings");
const marketDuplicateTotal = document.querySelector("#marketDuplicateTotal");
const marketTree = document.querySelector("#marketTree");
const marketSelectedPanel = document.querySelector("#marketSelectedPanel");
const marketActionPanel = document.querySelector("#marketActionPanel");
const marketTabs = document.querySelectorAll(".market-tab");
const sellModal = document.querySelector("#sellModal");
const sellBackdrop = document.querySelector(".sell-backdrop");
const sellCloseButton = document.querySelector(".sell-close");
const sellStickerSummary = document.querySelector("#sellStickerSummary");
const sellPriceInput = document.querySelector("#sellPriceInput");
const confirmSellListingButton = document.querySelector("#confirmSellListing");
const sellMessage = document.querySelector("#sellMessage");
const openProfileButton = document.querySelector("#openProfile");
const profileModal = document.querySelector("#profileModal");
const profileBackdrop = document.querySelector(".profile-backdrop");
const profileCloseButton = document.querySelector(".profile-close");
const profileUserStatus = document.querySelector("#profileUserStatus");
const profileLogoutButton = document.querySelector("#profileLogout");
const profileSigninTab = document.querySelector("#profileSigninTab");
const profileSignupTab = document.querySelector("#profileSignupTab");
const profileForm = document.querySelector("#profileForm");
const profileNameField = document.querySelector("#profileNameField");
const profileNameInput = document.querySelector("#profileName");
const profileEmailInput = document.querySelector("#profileEmail");
const profilePasswordInput = document.querySelector("#profilePassword");
const profileSubmitButton = document.querySelector("#profileSubmit");
const profileMessage = document.querySelector("#profileMessage");

let pageFlip;
let resizeTimer;
let isCoverClosed = true;
let stickersByTeam = new Map();
let stickerCatalog = {
  packConfig: null,
  raritySystem: null,
  stickers: [],
  byRarity: new Map(),
};
let creditBalance = 0;
let pendingCheckout = null;
const checkoutParams = new URLSearchParams(window.location.search);
let packInventory = loadPackInventory();
let openedStickers = {};
let pastedStickers = {};
let currentPreviewSticker = null;
let supabaseClient = null;
let supabaseUser = null;
let supabaseProfile = null;
let marketListingsState = [];
let marketUserStickersState = [];
let marketTradeOffersState = [];
let selectedMarketStickerId = "";
let selectedMarketTab = "sale";
let marketConfigured = false;
let pendingSellSticker = null;
let authMode = "signin";
let authListenerBound = false;
let packPity = { withoutEpicOrBetter: 0, withoutLegendary: 0 };
let selectedPack = {
  type: "standard_pack",
  name: "Pacotinho Padrão",
  cost: 35,
  stickers: 5,
};

const packTypeConfig = {
  standard_pack: { name: "Pacotinho Padrão", stickers: 5 },
  premium_pack: { name: "Pacotinho Premium", stickers: 7 },
};

function userStoragePrefix() {
  return isRegisteredUser() ? `album:${supabaseUser.id}` : "album:anonymous";
}

function userStorageKey(key) {
  return `${userStoragePrefix()}:${key}`;
}

function readJsonStorage(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(userStorageKey(key)) || JSON.stringify(fallback));
  } catch {
    return fallback;
  }
}

function loadUserLocalState() {
  if (!isRegisteredUser()) {
    creditBalance = 0;
    packInventory = [];
    openedStickers = {};
    pastedStickers = {};
    packPity = { withoutEpicOrBetter: 0, withoutLegendary: 0 };
    updateCredits();
    return;
  }

  creditBalance = Number(localStorage.getItem(userStorageKey("albumCredits")) || 0);
  packInventory = loadPackInventory();
  openedStickers = readJsonStorage("albumOpenedStickers", {});
  pastedStickers = readJsonStorage("albumPastedStickers", {});
  packPity = readJsonStorage("albumPackPity", { withoutEpicOrBetter: 0, withoutLegendary: 0 });
  updateCredits();
}

function loadPackInventory() {
  try {
    const stored = JSON.parse(localStorage.getItem(userStorageKey("albumPackInventory")) || "[]");
    return Array.isArray(stored) ? stored : [];
  } catch {
    return [];
  }
}

function savePackPity() {
  localStorage.setItem(userStorageKey("albumPackPity"), JSON.stringify(packPity));
}

function teamKey(value) {
  return value
    .replace(".png", "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/gi, "")
    .toLowerCase();
}

function albumTeamKey(value) {
  const key = teamKey(value);
  const aliases = {
    bosniaeherzegovina: "bosniaherzegovina",
    congodr: "republicadocongo",
    curacao: "curacau",
    paisesbaixos: "holanda",
  };
  return aliases[key] || key;
}

async function loadStickers() {
  try {
    const response = await fetch("./figurinhas.json", { cache: "no-store" });
    if (!response.ok) return new Map();

    const files = await response.json();
    return files.reduce((teams, fileName) => {
      const match = fileName.match(/^(.+)-(\d+)\.png$/i);
      if (!match) return teams;

      const [, teamName, stickerNumber] = match;
      const key = teamKey(teamName);
      if (!teams.has(key)) teams.set(key, new Map());
      teams.get(key).set(Number(stickerNumber), fileName);
      return teams;
    }, new Map());
  } catch {
    return new Map();
  }
}

async function loadStickerCatalog() {
  try {
    const response = await fetch("./copa_2026_album_v4_48_selecoes_safe_prompt_image_player_names.json", { cache: "no-store" });
    if (!response.ok) throw new Error("Catalogo indisponivel.");

    const data = await response.json();
    const stickers = (data.teams || []).flatMap((team) =>
      (team.stickers || []).map((sticker) => normalizeCatalogSticker(sticker)),
    );
    const byRarity = stickers.reduce((rarities, sticker) => {
      if (!rarities.has(sticker.rarity)) rarities.set(sticker.rarity, []);
      rarities.get(sticker.rarity).push(sticker);
      return rarities;
    }, new Map());

    return {
      packConfig: data.pack_config || null,
      raritySystem: data.rarity_system || null,
      stickers,
      byRarity,
    };
  } catch {
    return {
      packConfig: null,
      raritySystem: null,
      stickers: [],
      byRarity: new Map(),
    };
  }
}

function normalizeCatalogSticker(sticker) {
  const number = Number(String(sticker.album_number || "").match(/(\d+)$/)?.[1] || 0);
  const stickerFile =
    stickersByTeam.get(albumTeamKey(sticker.team_name || ""))?.get(number) ||
    stickersByTeam.get(albumTeamKey(sticker.team_code || ""))?.get(number);
  const player = sticker.player || null;

  return {
    id: sticker.id,
    album_number: sticker.album_number,
    team_code: sticker.team_code,
    team_name: sticker.team_name,
    group: sticker.group,
    rarity: sticker.rarity,
    rarity_label: sticker.rarity_label,
    duplicate_value: sticker.duplicate_value,
    foil: sticker.foil,
    drop: sticker.drop || null,
    title: sticker.title,
    role: sticker.role,
    category_code: sticker.category_code,
    card_type: sticker.card_type,
    player,
    player_name: player?.known_as || player?.full_name || "",
    player_full_name: player?.full_name || "",
    position_group: player?.position_group || sticker.category_code || "",
    position_label: player?.position_label || sticker.role || "",
    current_club: player?.current_club || "",
    shirt_number: player?.shirt_number || "",
    shirt_number_status: player?.shirt_number_status || "",
    player_status: player?.player_status || "",
    source_type: player?.source_type || "",
    data_confidence: player?.data_confidence || "",
    needs_review_on_final_squad: Boolean(player?.needs_review_on_final_squad),
    image_generation: sticker.image_generation || null,
    teamName: sticker.team_name,
    number,
    src: stickerFile ? `./Paginas/Figurinhas/${encodeURIComponent(stickerFile)}` : "",
  };
}

function stickerDisplayName(sticker) {
  return sticker.player_name || sticker.player?.known_as || sticker.player?.full_name || sticker.title || sticker.role || "";
}

function stickerPositionLabel(sticker) {
  return sticker.position_label || sticker.player?.position_label || sticker.role || "";
}

function stickerPromptText(sticker) {
  const imageGeneration = sticker.image_generation || {};
  return (
    imageGeneration.safe_prompt_image?.positive_template ||
    imageGeneration.safe_prompt_image?.positive ||
    imageGeneration.symbolic_non_official?.positive ||
    imageGeneration.positive ||
    ""
  );
}

function stickerMetaRows(sticker) {
  const rows = [
    ["Nome", stickerDisplayName(sticker)],
    ["Posicao", stickerPositionLabel(sticker)],
    ["Clube", sticker.current_club || sticker.player?.current_club || ""],
    ["Camisa", sticker.shirt_number || sticker.player?.shirt_number || ""],
    ["Tipo", sticker.card_type || ""],
    ["Categoria", sticker.category_code || ""],
    ["Raridade", sticker.rarity_label || ""],
  ];

  return rows
    .filter(([, value]) => value !== null && value !== undefined && value !== "")
    .map(([label, value]) => `<span><b>${escapeHtml(label)}</b>${escapeHtml(value)}</span>`)
    .join("");
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function stickerJsonAttribute(sticker) {
  return encodeURIComponent(JSON.stringify(sticker));
}

function teamCatalogStickers(teamName) {
  return stickerCatalog.stickers
    .filter((sticker) => albumTeamKey(sticker.team_name || sticker.teamName || "") === albumTeamKey(teamName))
    .sort((a, b) => (a.number || 0) - (b.number || 0));
}

function officialStickerFor(sticker) {
  if (!sticker) return null;
  const cleanSticker = Object.fromEntries(Object.entries(sticker).filter(([, value]) => value !== undefined && value !== null));
  const byId = stickerCatalog.stickers.find((catalogSticker) => catalogSticker.id === sticker.id);
  if (byId) {
    return {
      ...byId,
      ...cleanSticker,
      src: sticker.src || byId.src,
    };
  }

  const teamName = sticker.team_name || sticker.teamName || "";
  const number = Number(sticker.number || String(sticker.album_number || "").match(/(\d+)$/)?.[1] || 0);
  const byTeamAndNumber = stickerCatalog.stickers.find(
    (catalogSticker) =>
      albumTeamKey(catalogSticker.team_name || catalogSticker.teamName || "") === albumTeamKey(teamName) &&
      Number(catalogSticker.number || 0) === number,
  );

  return byTeamAndNumber ? { ...byTeamAndNumber, ...cleanSticker, src: sticker.src || byTeamAndNumber.src } : cleanSticker;
}

function waitForPageFlip() {
  return new Promise((resolve, reject) => {
    const startedAt = Date.now();
    const timer = window.setInterval(() => {
      if (window.St?.PageFlip) {
        window.clearInterval(timer);
        resolve(window.St.PageFlip);
      }

      if (Date.now() - startedAt > 7000) {
        window.clearInterval(timer);
        reject(new Error("Nao foi possivel carregar a biblioteca PageFlip."));
      }
    }, 50);
  });
}

function pageSize() {
  const toolbarSpace = 74;
  const availableWidth = Math.max(320, window.innerWidth * 0.95);
  const availableHeight = Math.max(420, (window.innerHeight - toolbarSpace) * 0.95);
  const pageWidth = Math.floor(Math.min(availableWidth / 2, availableHeight * (2 / 3)));
  const pageHeight = Math.floor(pageWidth * 1.5);

  return {
    width: Math.max(260, pageWidth),
    height: Math.max(390, pageHeight),
  };
}

function applyPageSize(width, height) {
  document.documentElement.style.setProperty("--page-width", `${width}px`);
  document.documentElement.style.setProperty("--page-height", `${height}px`);
}

function makePage(className, html) {
  const page = document.createElement("div");
  page.className = `page ${className}`;
  page.innerHTML = html;
  return page;
}

function stickerGrid(teamName, startNumber) {
  const teamCatalog = teamCatalogStickers(teamName);
  const cells = Array.from({ length: 9 }, (_, index) => {
    const number = startNumber + index;
    const catalogSticker = teamCatalog[number - 1];

    if (!catalogSticker) {
      return `<span class="sticker-cell"><span class="sticker-number">${number}</span></span>`;
    }

    const pastedSticker = pastedStickers[catalogSticker.id] ? officialStickerFor(pastedStickers[catalogSticker.id]) : null;
    const stickerLabel = catalogSticker.album_number || String(number).padStart(3, "0");

    if (pastedSticker?.src) {
      return `<button class="sticker-cell is-filled" type="button" data-density="hard" data-sticker-json="${stickerJsonAttribute(pastedSticker)}" aria-label="Ampliar ${escapeHtml(stickerLabel)}">
        <img src="${pastedSticker.src}" alt="${escapeHtml(pastedSticker.team_name)} ${escapeHtml(stickerLabel)}" />
        <span class="sticker-number">${escapeHtml(stickerLabel)}</span>
      </button>`;
    }

    if (pastedSticker) {
      const displayName = stickerDisplayName(pastedSticker);
      const position = stickerPositionLabel(pastedSticker);
      return `<button class="sticker-cell is-filled is-placeholder-filled" type="button" data-sticker-json="${stickerJsonAttribute(pastedSticker)}" aria-label="Ampliar ${escapeHtml(stickerLabel)}">
        <span class="pasted-placeholder-number">${escapeHtml(stickerLabel)}</span>
        <small>${escapeHtml(displayName || pastedSticker.team_name)}<br>${escapeHtml(position || pastedSticker.rarity_label)}</small>
      </button>`;
    }

    return `<span class="sticker-cell"><span class="sticker-number">${escapeHtml(stickerLabel)}</span></span>`;
  }).join("");

  return `<div class="sticker-grid" aria-hidden="true">${cells}</div>`;
}

function pageBadge(pageNumber) {
  return `<span class="page-badge" aria-label="Pagina ${pageNumber}">${String(pageNumber).padStart(2, "0")}</span>`;
}

function pageSideClass(pageNumber) {
  return pageNumber % 2 === 1 ? "page-left-number" : "page-right-number";
}

function stickerProgress() {
  const total = stickerCatalog.stickers.length || imageFiles.length * 36;
  const filled = Object.keys(pastedStickers).length;
  const percent = total > 0 ? Math.round((filled / total) * 100) : 0;
  return { total, filled, percent };
}

function pagesForTeam(fileName) {
  const teamName = fileName.replace(".png", "");
  const stickerCount = teamCatalogStickers(teamName).length;
  return Math.max(4, Math.ceil((stickerCount || 36) / 9));
}

function teamFooter(fileName) {
  const teamName = fileName.replace(".png", "");
  return `<div class="team-footer">${teamName}</div>`;
}

function ownerPage(pageNumber) {
  const progress = stickerProgress();
  const today = new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(new Date());

  return makePage(
    `owner-page ${pageSideClass(pageNumber)}`,
    `<div class="owner-page-inner">
       <div class="group-page-kicker">Album Copa 2026</div>
       <h2>Este album pertence a</h2>
       <div class="owner-name">Colecionador</div>
       <div class="owner-lines">
         <span>Nome</span>
         <span>Turma</span>
       </div>
       <div class="owner-progress">
         <div>
           <strong>${progress.filled}</strong>
           <span>coladas</span>
         </div>
         <div>
           <strong>${progress.total}</strong>
           <span>total</span>
         </div>
         <div>
           <strong>${progress.percent}%</strong>
           <span>progresso</span>
         </div>
       </div>
       <div class="owner-date">Atualizado em ${today}</div>
     </div>
     ${pageBadge(pageNumber)}`,
  );
}

function flagCorner(fileName) {
  const teamName = fileName.replace(".png", "");
  const code = flagCodes[teamName];
  if (!code) return "";

  return `<img class="flag-corner" src="https://flagcdn.com/${code}.svg" alt="Bandeira ${teamName}" />`;
}

function flagUrl(teamName) {
  const code = flagCodes[teamName];
  return code ? `https://flagcdn.com/${code}.svg` : "";
}

function groupPage(groups, pageNumber, title) {
  const groupsHtml = groups
    .map((group) => {
      const teamsHtml = group.teams
        .map((team) => {
          const src = flagUrl(team);
          const flag = src ? `<img class="group-flag" src="${src}" alt="Bandeira ${team}" />` : "";
          return `<li class="group-team">${flag}<span>${team}</span></li>`;
        })
        .join("");

      return `<section class="group-card">
        <h3>${group.name}</h3>
        <ol>${teamsHtml}</ol>
      </section>`;
    })
    .join("");

  return makePage(
    `group-page ${pageSideClass(pageNumber)}`,
    `<div class="group-page-inner">
       <div class="group-page-kicker">Copa do Mundo FIFA 2026</div>
       <h2>${title}</h2>
       <div class="groups-grid">${groupsHtml}</div>
     </div>
     ${pageBadge(pageNumber)}`,
  );
}

function spreadImagePage(imagePath, pageNumber, side, alt) {
  return makePage(
    `spread-image-page spread-image-${side} ${pageSideClass(pageNumber)}`,
    `<div class="spread-fit-image" style="background-image: url('${imagePath}')"></div>
     ${pageBadge(pageNumber)}`,
  );
}

function statsPage(pageNumber) {
  const stats = [
    { value: "48", label: "Selecoes" },
    { value: "16", label: "Sedes" },
    { value: "104", label: "Jogos" },
    { value: "3", label: "Paises-sede" },
  ];

  const statsHtml = stats
    .map(
      (stat) => `<section class="stat-card">
        <strong>${stat.value}</strong>
        <span>${stat.label}</span>
      </section>`,
    )
    .join("");

  return makePage(
    `stats-page ${pageSideClass(pageNumber)}`,
    `<div class="stats-page-inner">
       <div class="group-page-kicker">Copa do Mundo FIFA 2026</div>
       <h2>Numeros da Copa</h2>
       <div class="stats-grid">${statsHtml}</div>
       <div class="stats-dates">
         <span>11 de junho</span>
         <strong>a</strong>
         <span>19 de julho de 2026</span>
       </div>
     </div>
     ${pageBadge(pageNumber)}`,
  );
}

function stadiumPage(stadiums, pageNumber, title) {
  const stadiumsHtml = stadiums
    .map((stadium) => {
      return `<article class="stadium-card">
        <div class="stadium-photo-shell">
          <img class="stadium-photo" data-wiki-title="${stadium.wikiTitle}" alt="${stadium.name}" />
        </div>
        <div class="stadium-info">
          <h3>${stadium.name}</h3>
          <p>${stadium.city} · ${stadium.country}</p>
        </div>
      </article>`;
    })
    .join("");

  return makePage(
    `stadium-page ${pageSideClass(pageNumber)}`,
    `<div class="stadium-page-inner">
       <div class="group-page-kicker">Copa do Mundo FIFA 2026</div>
       <h2>${title}</h2>
       <div class="stadiums-grid">${stadiumsHtml}</div>
     </div>
     ${pageBadge(pageNumber)}`,
  );
}

function tournamentPage(items, pageNumber, title, variant) {
  const itemsHtml = items
    .map((item, index) => {
      return `<section class="roadmap-card">
        <div class="roadmap-index">${String(index + 1).padStart(2, "0")}</div>
        <div>
          <h3>${item.label}</h3>
          <p class="roadmap-date">${item.dates}</p>
          <p class="roadmap-detail">${item.detail}</p>
          <p class="roadmap-note">${item.note}</p>
        </div>
      </section>`;
    })
    .join("");

  return makePage(
    `tournament-page tournament-page-${variant} ${pageSideClass(pageNumber)}`,
    `<div class="tournament-page-inner">
       <div class="group-page-kicker">Copa do Mundo FIFA 2026</div>
       <h2>${title}</h2>
       <div class="roadmap-list">${itemsHtml}</div>
     </div>
     ${pageBadge(pageNumber)}`,
  );
}

function groupMatches() {
  return worldCupGroups.flatMap((group) =>
    groupMatchPairings.map(([homeIndex, awayIndex]) => ({
      group: group.name,
      home: group.teams[homeIndex],
      away: group.teams[awayIndex],
    })),
  );
}

function matchRow(match) {
  const homeFlag = flagUrl(match.home);
  const awayFlag = flagUrl(match.away);

  return `<li class="match-row">
    <span class="match-team match-team-home">
      ${homeFlag ? `<img src="${homeFlag}" alt="Bandeira ${match.home}" />` : ""}
      <span>${match.home}</span>
    </span>
    <span class="match-versus">x</span>
    <span class="match-team match-team-away">
      <span>${match.away}</span>
      ${awayFlag ? `<img src="${awayFlag}" alt="Bandeira ${match.away}" />` : ""}
    </span>
  </li>`;
}

function matchesPage(matches, pageNumber, title) {
  const groups = matches.reduce((acc, match) => {
    if (!acc.has(match.group)) acc.set(match.group, []);
    acc.get(match.group).push(match);
    return acc;
  }, new Map());

  const groupsHtml = [...groups.entries()]
    .map(([group, groupMatchesList]) => {
      return `<section class="matches-group-card">
        <h3>${group}</h3>
        <ol>${groupMatchesList.map(matchRow).join("")}</ol>
      </section>`;
    })
    .join("");

  return makePage(
    `matches-page ${pageSideClass(pageNumber)}`,
    `<div class="matches-page-inner">
       <div class="group-page-kicker">Copa do Mundo FIFA 2026</div>
       <h2>${title}</h2>
       <div class="matches-grid">${groupsHtml}</div>
     </div>
     ${pageBadge(pageNumber)}`,
  );
}

async function hydrateStadiumImages() {
  const photos = [...bookElement.querySelectorAll(".stadium-photo[data-wiki-title]")];
  await Promise.all(
    photos.map(async (photo) => {
      try {
        const title = photo.dataset.wikiTitle;
        const response = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`);
        if (!response.ok) return;

        const data = await response.json();
        const source = data.thumbnail?.source || data.originalimage?.source;
        if (source) photo.src = source;
      } catch {
        photo.removeAttribute("src");
      }
    }),
  );
}

function buildPages() {
  const pages = [
    makePage(
      "cover image-cover",
      `<img src="./Paginas/Capa.png" alt="Capa do album" />`,
    ),
  ];

  pages.push(ownerPage(1));
  pages.push(statsPage(2));
  pages.push(spreadImagePage("./Paginas/Grupos.png", 3, "left", "Grupos da Copa 2026"));
  pages.push(spreadImagePage("./Paginas/Grupos.png", 4, "right", "Grupos da Copa 2026"));
  pages.push(tournamentPage(tournamentRoadmap.slice(0, 2), 5, "Tabela da Copa I", "groups"));
  pages.push(tournamentPage(tournamentRoadmap.slice(2), 6, "Tabela da Copa II", "knockout"));
  const matches = groupMatches();
  pages.push(matchesPage(matches.slice(0, 36), 7, "Confrontos I"));
  pages.push(matchesPage(matches.slice(36), 8, "Confrontos II"));
  pages.push(stadiumPage(worldCupStadiums.slice(0, 8), 9, "Estadios I"));
  pages.push(stadiumPage(worldCupStadiums.slice(8), 10, "Estadios II"));

  let imagePageNumber = 11;

  imageFiles.forEach((fileName) => {
    const teamPageCount = pagesForTeam(fileName);
    for (let pageIndex = 0; pageIndex < teamPageCount; pageIndex += 1) {
      const stickerNumber = pageIndex * 9 + 1;
      const side = pages.length % 2 === 0 ? "--right" : "";
      const imagePath = `./Paginas/${encodeURIComponent(fileName)}`;
      pages.push(
        makePage(
          `image-page ${side}`,
          `<img src="${imagePath}" alt="${fileName.replace(".png", "")}" loading="eager" />
           ${stickerGrid(fileName, stickerNumber)}
           ${pageBadge(imagePageNumber)}
           ${teamFooter(fileName)}
           ${flagCorner(fileName)}`,
        ),
      );
      imagePageNumber += 1;
    }
  });

  if (pages.length % 2 === 0) {
    pages.push(makePage("loading-page", "Fim"));
  }

  return pages;
}

function updateStatus() {
  if (isCoverClosed) {
    statusElement.textContent = "Capa";
    previousButton.disabled = true;
    nextButton.disabled = false;
    return;
  }

  if (!pageFlip) return;

  const pageIndex = pageFlip.getCurrentPageIndex();
  const totalPages = pageFlip.getPageCount();
  if (pageIndex === 0) {
    showCover();
    return;
  }

  statusElement.textContent = `${pageIndex} / ${totalPages - 1}`;
  previousButton.disabled = false;
  nextButton.disabled = pageIndex >= totalPages - 1;
}

function showCover() {
  isCoverClosed = true;
  coverView.classList.remove("is-hidden");
  bookElement.classList.add("is-hidden");
  if (pageFlip) {
    pageFlip.turnToPage(0);
  }
  updateStatus();
}

function showMagazine() {
  isCoverClosed = false;
  coverView.classList.add("is-hidden");
  bookElement.classList.remove("is-hidden");
  if (pageFlip && pageFlip.getCurrentPageIndex() === 0) {
    pageFlip.turnToPage(1);
  }
  updateStatus();
}

function savePastedStickers() {
  localStorage.setItem(userStorageKey("albumPastedStickers"), JSON.stringify(pastedStickers));
}

function updateStickerActionBar() {
  if (!currentPreviewSticker?.id) {
    pasteStickerButton.disabled = true;
    pasteStickerButton.textContent = "Colar no album";
    sellStickerButton.disabled = true;
    sellStickerButton.title = "Abra uma figurinha para vender.";
    return;
  }

  const officialSticker = officialStickerFor(currentPreviewSticker);
  const inventoryId = currentPreviewSticker.inventoryId || currentPreviewSticker.id;
  const isPasted = Boolean(pastedStickers[officialSticker.id]);
  const availableCount = openedStickers[inventoryId]?.count || openedStickers[officialSticker.id]?.count || 0;
  pasteStickerButton.disabled = isPasted || availableCount <= 0;
  pasteStickerButton.textContent = isPasted ? "Colada" : "Colar no album";

  sellStickerButton.disabled = true;
  sellStickerButton.textContent = "Vender";
  sellStickerButton.title = "Apenas duplicatas podem ser vendidas.";

  if (!marketConfigured) {
    sellStickerButton.title = "Configure o Supabase para ativar o mercado.";
    return;
  }

  if (!isRegisteredUser()) {
    sellStickerButton.title = "Entre com e-mail e senha para vender no mercado.";
    return;
  }

  if (availableCount > 1) {
    sellStickerButton.disabled = false;
    sellStickerButton.title = "Anunciar uma copia duplicada no mercado.";
  }
}

function openStickerModal(stickerElement) {
  const sticker = stickerElement.dataset.stickerJson
    ? JSON.parse(decodeURIComponent(stickerElement.dataset.stickerJson))
    : {
        src: stickerElement.dataset.stickerSrc,
        team_name: "",
        album_number: stickerElement.querySelector(".sticker-number")?.textContent || "",
      };

  if (sticker.src) {
    openPremiumSticker(sticker.src, `${sticker.team_name || ""} ${sticker.album_number || ""}`, sticker);
  } else {
    openPremiumStickerPlaceholder(sticker);
  }
}

function openPremiumSticker(src, alt, sticker = null) {
  if (!src) return;

  currentPreviewSticker = sticker ? officialStickerFor(sticker) : sticker;
  stickerModalImage.src = src;
  stickerModalImage.alt = alt || "Figurinha ampliada";
  stickerModalImage.hidden = false;
  stickerModalPlaceholder.hidden = true;
  stickerModalPlaceholder.innerHTML = "";
  stickerModalCardInfo(currentPreviewSticker);
  stickerModal.classList.remove("is-placeholder-preview");
  stickerModal.classList.add("is-premium");
  stickerModal.classList.add("is-open");
  stickerModal.setAttribute("aria-hidden", "false");
  updateStickerActionBar();
}

function openPremiumStickerPlaceholder(sticker) {
  currentPreviewSticker = officialStickerFor(sticker);
  const stickerLabel = currentPreviewSticker.album_number || String(currentPreviewSticker.number || 0).padStart(3, "0");
  const teamName = currentPreviewSticker.team_name || currentPreviewSticker.teamName || "";
  const rarityLabel = currentPreviewSticker.rarity_label || "";
  const displayName = stickerDisplayName(currentPreviewSticker) || "Figurinha oficial";
  const position = stickerPositionLabel(currentPreviewSticker);

  stickerModalImage.removeAttribute("src");
  stickerModalImage.hidden = true;
  stickerModalPlaceholder.hidden = false;
  stickerModalPlaceholder.innerHTML = `
    <span class="modal-placeholder-kicker">${escapeHtml(rarityLabel)}</span>
    <strong>${escapeHtml(stickerLabel)}</strong>
    <span class="modal-placeholder-team">${escapeHtml(teamName)}</span>
    <em>${escapeHtml(displayName)}</em>
    ${position ? `<small>${escapeHtml(position)}</small>` : ""}
  `;
  stickerModalCardInfo(currentPreviewSticker);
  stickerModal.classList.add("is-premium", "is-placeholder-preview");
  stickerModal.classList.add("is-open");
  stickerModal.setAttribute("aria-hidden", "false");
  updateStickerActionBar();
}

function stickerModalCardInfo(sticker) {
  const card = stickerModal.querySelector(".sticker-modal-card");
  let details = card.querySelector(".sticker-modal-info");

  if (!sticker) {
    details?.remove();
    return;
  }

  if (!details) {
    details = document.createElement("div");
    details.className = "sticker-modal-info";
    stickerModalPlaceholder.insertAdjacentElement("afterend", details);
  }

  const stickerLabel = sticker.album_number || "";
  const displayName = stickerDisplayName(sticker);
  const rows = stickerMetaRows(sticker);
  const review = sticker.needs_review_on_final_squad ? `<span class="modal-review-note">Elenco sujeito a revisao final.</span>` : "";

  details.innerHTML = `
    <strong>${escapeHtml(displayName || sticker.title || stickerLabel)}</strong>
    <span>${escapeHtml(sticker.team_name || "")} ${escapeHtml(stickerLabel)}</span>
    <div class="sticker-modal-meta">${rows}</div>
    ${review}
  `;
}

function renderError(message) {
  bookElement.innerHTML = `<div class="error">${message}</div>`;
  previousButton.disabled = true;
  nextButton.disabled = true;
  statusElement.textContent = "Indisponivel";
}

async function createMagazine(startPage = 0) {
  const PageFlip = await waitForPageFlip();
  stickersByTeam = await loadStickers();
  stickerCatalog = await loadStickerCatalog();
  const { width, height } = pageSize();
  const pages = buildPages();
  applyPageSize(width, height);

  bookElement.innerHTML = "";
  pages.forEach((page) => bookElement.appendChild(page));

  pageFlip = new PageFlip(bookElement, {
    width,
    height,
    size: "fixed",
    minWidth: 260,
    maxWidth: width,
    minHeight: 390,
    maxHeight: height,
    showCover: true,
    drawShadow: true,
    flippingTime: 820,
    maxShadowOpacity: 0.34,
    mobileScrollSupport: false,
    usePortrait: false,
    clickEventForward: false,
    useMouseEvents: false,
    startZIndex: 2,
    autoSize: false,
  });

  pageFlip.loadFromHTML(bookElement.querySelectorAll(".page"));
  hydrateStadiumImages();
  pageFlip.on("flip", updateStatus);
  pageFlip.on("changeState", updateStatus);

  if (startPage > 0 || !isCoverClosed) {
    pageFlip.turnToPage(Math.max(1, Math.min(startPage || 1, pageFlip.getPageCount() - 1)));
  }

  if (isCoverClosed) {
    showCover();
  } else {
    showMagazine();
  }
  updateStatus();
}

function rebuildMagazine() {
  const currentPage = pageFlip?.getCurrentPageIndex() ?? 0;
  if (pageFlip) {
    pageFlip.destroy();
  }

  createMagazine(currentPage).catch((error) => {
    renderError(`${error.message} Verifique se o arquivo vendor/page-flip.browser.min.js esta presente.`);
  });
}

previousButton.addEventListener("click", () => {
  if (!requireRegisteredUser()) return;
  if (!pageFlip) return;

  if (!isCoverClosed && pageFlip.getCurrentPageIndex() <= 1) {
    showCover();
    return;
  }

  pageFlip.flipPrev();
});

nextButton.addEventListener("click", () => {
  if (!requireRegisteredUser()) return;
  if (isCoverClosed) {
    showMagazine();
    return;
  }

  pageFlip?.flipNext();
});

coverView.addEventListener("click", () => {
  if (!requireRegisteredUser()) return;
  showMagazine();
});

bookElement.addEventListener("click", (event) => {
  if (!requireRegisteredUser()) return;
  const sticker = event.target.closest(".sticker-cell.is-filled");
  if (!sticker) return;

  event.preventDefault();
  event.stopPropagation();
  openStickerModal(sticker);
});

function closeStickerModal() {
  stickerModal.classList.remove("is-open");
  stickerModal.setAttribute("aria-hidden", "true");
  stickerModal.classList.remove("is-placeholder-preview");
  currentPreviewSticker = null;
  stickerModalImage.removeAttribute("src");
  stickerModalImage.hidden = false;
  stickerModalPlaceholder.hidden = true;
  stickerModalPlaceholder.innerHTML = "";
  updateStickerActionBar();
}

stickerModalClose.addEventListener("click", closeStickerModal);
stickerModalBackdrop.addEventListener("click", closeStickerModal);

function updateCredits(message) {
  creditBalanceElement.textContent = String(creditBalance);
  packsCreditBalanceElement.textContent = String(creditBalance);
  localStorage.setItem(userStorageKey("albumCredits"), String(creditBalance));
  if (message) shopMessage.textContent = message;
}

function marketSetStatus(message) {
  if (marketStatus) marketStatus.textContent = message;
}

function isRegisteredUser() {
  return Boolean(supabaseUser?.email && !supabaseUser?.is_anonymous);
}

function profileLabel() {
  if (isRegisteredUser()) return supabaseUser.email;
  return "Login obrigatorio";
}

function updateProfileUi(message) {
  profileUserStatus.textContent = profileLabel();
  profileLogoutButton.hidden = !isRegisteredUser();
  profileLogoutButton.disabled = !isRegisteredUser();
  profileModal.classList.toggle("is-auth-required", !isRegisteredUser());
  profileCloseButton.hidden = !isRegisteredUser();
  if (message) profileMessage.textContent = message;
  updateStickerActionBar();
  updateInventory();
  renderCollection();
  renderMarketListings();
}

async function ensureSupabaseClient() {
  if (supabaseClient) return true;

  const response = await fetch("/api/supabase-config", { cache: "no-store" });
  const config = response.ok ? await response.json() : { configured: false };
  marketConfigured = Boolean(config.configured && config.url && config.anonKey && window.supabase);

  if (!marketConfigured) {
    marketSetStatus("Mercado offline: configure SUPABASE_URL e SUPABASE_ANON_KEY na Vercel.");
    updateProfileUi("Supabase ainda nao esta configurado.");
    return false;
  }

  supabaseClient = window.supabase.createClient(config.url, config.anonKey);

  if (!authListenerBound) {
    authListenerBound = true;
    supabaseClient.auth.onAuthStateChange(async (_event, session) => {
      supabaseUser = session?.user || null;
      if (supabaseUser?.is_anonymous) {
        await supabaseClient.auth.signOut();
        supabaseUser = null;
      }
      if (!isRegisteredUser()) {
        openProfileModal("Para acessar o album, entre ou crie uma conta.");
        loadUserLocalState();
      }
      updateProfileUi();
    });
  }

  return true;
}

function marketStickerPayload(sticker) {
  const officialSticker = officialStickerFor(sticker);
  return {
    id: officialSticker.id,
    sticker_id: officialSticker.id,
    album_number: officialSticker.album_number || "",
    team_code: officialSticker.team_code || "",
    team_name: officialSticker.team_name || officialSticker.teamName || "",
    group: officialSticker.group || "",
    rarity: officialSticker.rarity || "",
    rarity_label: officialSticker.rarity_label || "",
    duplicate_value: Number(officialSticker.duplicate_value || 0),
    foil: Boolean(officialSticker.foil),
    title: officialSticker.title || "",
    role: officialSticker.role || "",
    card_type: officialSticker.card_type || "",
    category_code: officialSticker.category_code || "",
    player: officialSticker.player || null,
    player_name: stickerDisplayName(officialSticker),
    position_label: stickerPositionLabel(officialSticker),
    current_club: officialSticker.current_club || officialSticker.player?.current_club || "",
    shirt_number: officialSticker.shirt_number || officialSticker.player?.shirt_number || "",
    drop: officialSticker.drop || null,
    image_generation: officialSticker.image_generation || null,
    metadata: {
      card_type: officialSticker.card_type || "",
      category_code: officialSticker.category_code || "",
      player: officialSticker.player || null,
      drop: officialSticker.drop || null,
      image_generation: officialSticker.image_generation || null,
      prompt: stickerPromptText(officialSticker),
    },
    src: officialSticker.src || "",
  };
}

async function refreshSupabaseProfile() {
  if (!supabaseClient || !supabaseUser) return null;

  const { data, error } = await supabaseClient
    .from("profiles")
    .select("id, display_name, credits")
    .eq("id", supabaseUser.id)
    .maybeSingle();

  if (error) throw error;
  supabaseProfile = data;

  if (data && Number.isFinite(Number(data.credits))) {
    creditBalance = Number(data.credits);
    updateCredits();
  }

  return data;
}

async function ensureSupabaseProfile(displayName = "Colecionador") {
  if (!supabaseClient || !supabaseUser) return null;

  await supabaseClient.from("profiles").upsert(
    {
      id: supabaseUser.id,
      display_name: displayName || "Colecionador",
    },
    { onConflict: "id", ignoreDuplicates: true },
  );

  return refreshSupabaseProfile();
}

async function syncLocalInventoryToSupabase() {
  if (!supabaseClient || !supabaseUser) return;

  const stickerMap = new Map();

  Object.values(openedStickers)
    .filter((sticker) => sticker?.id && Number(sticker.count || 0) > 0)
    .forEach((sticker) => {
      const payload = marketStickerPayload(sticker);
      stickerMap.set(payload.id, {
        ...payload,
        count: Number(sticker.count || 0),
        pasted: false,
      });
    });

  Object.values(pastedStickers)
    .filter((sticker) => sticker?.id)
    .forEach((sticker) => {
      const payload = marketStickerPayload(sticker);
      const current = stickerMap.get(payload.id);
      stickerMap.set(payload.id, {
        ...payload,
        count: current?.count || 0,
        pasted: true,
      });
    });

  const stickers = [...stickerMap.values()];

  const { error } = await supabaseClient.rpc("sync_user_snapshot", {
    p_credits: creditBalance,
    p_stickers: stickers,
  });

  if (error) throw error;
  await refreshSupabaseProfile();
}

async function initSupabase() {
  try {
    if (!(await ensureSupabaseClient())) {
      updateStickerActionBar();
      openProfileModal("Configure o Supabase para acessar o album.");
      return false;
    }

    const sessionResult = await supabaseClient.auth.getSession();
    supabaseUser = sessionResult.data.session?.user || null;

    if (!isRegisteredUser()) {
      if (supabaseUser?.is_anonymous) {
        await supabaseClient.auth.signOut();
      }
      supabaseUser = null;
      supabaseProfile = null;
      openProfileModal("Para acessar o album, entre ou crie uma conta.");
      updateStickerActionBar();
      return false;
    }

    loadUserLocalState();
    const localCreditSnapshot = Number(localStorage.getItem(userStorageKey("albumCredits")) || creditBalance || 0);
    await ensureSupabaseProfile();
    creditBalance = Math.max(creditBalance, localCreditSnapshot);
    updateCredits();
    await syncLocalInventoryToSupabase();
    await applyCheckoutReturn();
    await loadMarketListings();
    updateProfileUi();
    closeProfileModal();
    updateStickerActionBar();
    return true;
  } catch (error) {
    if (await tryAutoSetupMarket(error)) {
      return initSupabase();
    }

    marketSetStatus(`Mercado indisponivel: ${error.message}`);
    supabaseClient = null;
    supabaseUser = null;
    marketConfigured = false;
    updateStickerActionBar();
    return false;
  }
}

async function tryAutoSetupMarket(error) {
  const message = String(error?.message || "");
  const looksLikeMissingSchema =
    message.includes("schema cache") ||
    message.includes("Could not find the table") ||
    message.includes("Could not find the function");

  if (!looksLikeMissingSchema || sessionStorage.getItem("marketSetupAttempted") === "true") {
    return false;
  }

  sessionStorage.setItem("marketSetupAttempted", "true");
  marketSetStatus("Mercado ainda nao estava preparado. Tentando configurar automaticamente...");

  try {
    const response = await fetch("/api/setup-market", {
      method: "POST",
    });
    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      throw new Error(data.error || "Setup automatico indisponivel.");
    }

    marketSetStatus("Mercado configurado. Reconectando...");
    await new Promise((resolve) => window.setTimeout(resolve, 1500));
    supabaseClient = null;
    supabaseUser = null;
    marketConfigured = false;
    return true;
  } catch (setupError) {
    marketSetStatus(`Setup automatico falhou: ${setupError.message}`);
    return false;
  }
}

function populateMarketFilters() {
  if (!marketTeamFilter || marketTeamFilter.dataset.ready === "true") return;

  const teams = [...new Set(stickerCatalog.stickers.map((sticker) => sticker.team_name).filter(Boolean))].sort((a, b) =>
    a.localeCompare(b, "pt-BR"),
  );
  const rarities = [...new Set(stickerCatalog.stickers.map((sticker) => sticker.rarity_label).filter(Boolean))].sort(
    (a, b) => a.localeCompare(b, "pt-BR"),
  );

  marketTeamFilter.innerHTML =
    '<option value="">Todas as selecoes</option>' +
    teams.map((team) => `<option value="${escapeHtml(team)}">${escapeHtml(team)}</option>`).join("");
  marketRarityFilter.innerHTML =
    '<option value="">Todas as raridades</option>' +
    rarities.map((rarity) => `<option value="${escapeHtml(rarity)}">${escapeHtml(rarity)}</option>`).join("");
  marketTeamFilter.dataset.ready = "true";
}

function marketSearchText(sticker) {
  return [
    sticker?.sticker_id,
    sticker?.id,
    sticker?.album_number,
    sticker?.team_name,
    sticker?.rarity_label,
    sticker?.title,
    sticker?.role,
    sticker?.player_name,
    sticker?.position_label,
    sticker?.metadata?.player?.full_name,
    sticker?.metadata?.player?.known_as,
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
}

function filteredMarketDuplicates() {
  const search = (marketSearch?.value || "").trim().toLowerCase();
  const team = marketTeamFilter?.value || "";
  const rarity = marketRarityFilter?.value || "";

  return marketUserStickersState
    .filter((sticker) => Number(sticker.available_count || 0) > 1)
    .filter((sticker) => !team || sticker.team_name === team)
    .filter((sticker) => !rarity || sticker.rarity_label === rarity)
    .filter((sticker) => !search || marketSearchText(sticker).includes(search))
    .sort((a, b) => {
      const teamCompare = (a.team_name || "").localeCompare(b.team_name || "", "pt-BR");
      return teamCompare || (a.album_number || "").localeCompare(b.album_number || "", "pt-BR", { numeric: true });
    });
}

function selectedMarketSticker() {
  return marketUserStickersState.find((sticker) => sticker.sticker_id === selectedMarketStickerId) || null;
}

function selectedStickerListings() {
  if (!selectedMarketStickerId) return [];
  return marketListingsState
    .filter((listing) => listing.status === "active")
    .filter((listing) => listing.sticker_id === selectedMarketStickerId)
    .sort((a, b) => Number(a.price || 0) - Number(b.price || 0));
}

function updateMarketComparison(listings) {
  const prices = listings.map((listing) => Number(listing.price)).filter((price) => Number.isFinite(price) && price > 0);
  const min = prices.length ? Math.min(...prices) : 0;
  const max = prices.length ? Math.max(...prices) : 0;
  const avg = prices.length ? Math.round(prices.reduce((sum, price) => sum + price, 0) / prices.length) : 0;

  marketCompareCount.textContent = String(listings.length);
  marketCompareMin.textContent = `${min} CR`;
  marketCompareAvg.textContent = `${avg} CR`;
  marketCompareMax.textContent = `${max} CR`;
}

function marketStickerMedia(sticker, className = "market-card-placeholder") {
  const stickerLabel = sticker.album_number || sticker.sticker_id || sticker.id || "";
  const playerName = sticker.player_name || sticker.metadata?.player?.known_as || sticker.metadata?.player?.full_name || sticker.title || "";
  return sticker.src
    ? `<img src="${sticker.src}" alt="${escapeHtml(sticker.team_name || "")} ${escapeHtml(stickerLabel)}" />`
    : `<span class="${className}">${escapeHtml(stickerLabel)}<small>${escapeHtml(playerName || sticker.team_name || "")}<br>${escapeHtml(sticker.rarity_label || "")}</small></span>`;
}

function saleButtonLabel(listing, price) {
  if (listing.seller_id === supabaseUser?.id) return "Seu anuncio";
  if (!isRegisteredUser()) return "Login necessario";
  if (!price) return "Sem venda";
  if ((supabaseProfile?.credits || 0) < price) return "Saldo insuficiente";
  return "Comprar";
}

function renderMarketListingCard(listing) {
  const stickerLabel = listing.album_number || listing.sticker_id;
  const playerName = listing.player_name || listing.metadata?.player?.known_as || listing.metadata?.player?.full_name || listing.title || "";
  const position = listing.position_label || listing.metadata?.player?.position_label || listing.role || "";
  const price = Number(listing.price || 0);
  const canBuy = Boolean(
    price > 0 && isRegisteredUser() && listing.seller_id !== supabaseUser.id && (supabaseProfile?.credits || 0) >= price,
  );
  const seller = String(listing.seller_id || "").slice(0, 8);
  const acceptsTrade = Boolean(listing.accepts_trade || listing.listing_type === "trade" || listing.listing_type === "sale_or_trade");
  const offerInventory = filteredMarketDuplicates();
  const canOffer = acceptsTrade && listing.seller_id !== supabaseUser?.id && offerInventory.length > 0;
  const offerOptions = offerInventory
    .map((sticker) => `<option value="${escapeHtml(sticker.sticker_id)}">${escapeHtml(sticker.team_name || "")} ${escapeHtml(sticker.album_number || sticker.sticker_id)}</option>`)
    .join("");

  return `<article class="market-listing-card">
    <div class="market-card-media">${marketStickerMedia(listing)}</div>
    <div class="market-card-body">
      <strong>${escapeHtml(listing.team_name || "")} ${escapeHtml(stickerLabel)}</strong>
      <span>${escapeHtml(playerName || position || listing.rarity_label || "")}</span>
      <span>${escapeHtml(listing.rarity_label || "")} · vendedor ${escapeHtml(seller)}</span>
      <span>${acceptsTrade ? "Aceita troca" : "Venda direta"}</span>
      <em>${price > 0 ? `${price} CR` : "Troca"}</em>
      <button class="market-buy-button" type="button" data-listing-id="${listing.id}" ${canBuy ? "" : "disabled"}>
        ${saleButtonLabel(listing, price)}
      </button>
      ${
        acceptsTrade && listing.seller_id !== supabaseUser?.id
          ? `<div class="market-action-row">
              <label>Oferecer
                <select data-offer-select="${listing.id}" ${canOffer ? "" : "disabled"}>${offerOptions}</select>
              </label>
              <button class="market-action-button" type="button" data-trade-listing-id="${listing.id}" ${canOffer ? "" : "disabled"}>Propor</button>
            </div>`
          : ""
      }
    </div>
  </article>`;
}

function renderMarketTree() {
  if (!marketTree) return;

  const duplicates = filteredMarketDuplicates();
  marketDuplicateTotal.textContent = String(duplicates.length);

  if (!selectedMarketStickerId || !duplicates.some((sticker) => sticker.sticker_id === selectedMarketStickerId)) {
    selectedMarketStickerId = duplicates[0]?.sticker_id || "";
  }

  if (!duplicates.length) {
    marketTree.innerHTML = `<div class="market-empty">Nenhuma duplicata disponivel. Abra pacotinhos para criar estoque de venda e troca.</div>`;
    return;
  }

  const grouped = duplicates.reduce((groups, sticker) => {
    const team = sticker.team_name || "Sem selecao";
    if (!groups.has(team)) groups.set(team, []);
    groups.get(team).push(sticker);
    return groups;
  }, new Map());

  marketTree.innerHTML = [...grouped.entries()]
    .map(([team, stickers]) => `<details class="market-tree-group" open>
      <summary>${escapeHtml(team)} <span>${stickers.length}</span></summary>
      <div class="market-tree-items">
        ${stickers
          .map((sticker) => {
            const label = `${sticker.album_number || sticker.sticker_id} ${sticker.player_name || sticker.title || ""}`.trim();
            return `<button class="market-tree-item ${sticker.sticker_id === selectedMarketStickerId ? "is-selected" : ""}" type="button" data-sticker-id="${escapeHtml(sticker.sticker_id)}">
              <strong>${escapeHtml(label)}</strong>
              <span>x${Number(sticker.available_count || 0)}</span>
            </button>`;
          })
          .join("")}
      </div>
    </details>`)
    .join("");
}

function renderSelectedMarketPanel() {
  const sticker = selectedMarketSticker();
  if (!marketSelectedPanel) return;

  if (!sticker) {
    marketSelectedPanel.innerHTML = `<div class="market-empty">Selecione uma duplicata na arvore para vender ou trocar.</div>`;
    return;
  }

  const displayName = sticker.player_name || sticker.metadata?.player?.known_as || sticker.metadata?.player?.full_name || sticker.title || "";
  const position = sticker.position_label || sticker.metadata?.player?.position_label || sticker.role || "";
  const activeOwnListings = marketListingsState.filter(
    (listing) => listing.seller_id === supabaseUser?.id && listing.sticker_id === sticker.sticker_id && listing.status === "active",
  );

  marketSelectedPanel.innerHTML = `<article class="market-selected-card">
    <div class="market-card-media">${marketStickerMedia(sticker)}</div>
    <div>
      <h3>${escapeHtml(sticker.team_name || "")} ${escapeHtml(sticker.album_number || sticker.sticker_id)}</h3>
      <p>${escapeHtml(displayName || position || sticker.rarity_label || "Figurinha da colecao")}</p>
      <div class="market-selected-meta">
        <span>${escapeHtml(sticker.rarity_label || "Raridade")}</span>
        ${position ? `<span>${escapeHtml(position)}</span>` : ""}
        <span>${activeOwnListings.length} anuncio(s) ativo(s)</span>
      </div>
    </div>
    <div class="market-selected-count">${Number(sticker.available_count || 0)}<small>disp.</small></div>
  </article>`;
}

function renderMarketSaleActions(sticker) {
  const suggestedPrice = Math.max(1, Number(sticker?.duplicate_value || 10) * 10);
  return `<div class="market-action-grid">
    <div class="market-action-box">
      <h4>Vender</h4>
      <p>Uma copia duplicada fica reservada no mercado ate vender ou cancelar.</p>
    </div>
    <div class="market-action-box">
      <div class="market-action-row">
        <label>Preco em creditos
          <input id="marketSalePrice" type="number" min="1" step="1" value="${suggestedPrice}" />
        </label>
        <button class="market-action-button" type="button" data-create-sale>Criar venda</button>
      </div>
    </div>
  </div>`;
}

function marketOfferCard(offer, mode) {
  const listing = offer.market_listings || {};
  const offeredLabel = `${offer.offered_team_name || ""} ${offer.offered_album_number || offer.offered_sticker_id || ""}`.trim();
  const requestedLabel = `${listing.team_name || ""} ${listing.album_number || listing.sticker_id || ""}`.trim();
  const status = offer.status || "pending";
  const isReceived = mode === "received";
  return `<article class="market-offer-card">
    <div>
      <h4>${isReceived ? "Proposta recebida" : "Proposta enviada"} · ${escapeHtml(status)}</h4>
      <div class="market-offer-flow">
        <b>${isReceived ? "Voce entrega" : "Voce recebe"}:</b> ${escapeHtml(requestedLabel)}<br>
        <b>${isReceived ? "Voce recebe" : "Voce entrega"}:</b> ${escapeHtml(offeredLabel)}
      </div>
    </div>
    ${
      isReceived && status === "pending"
        ? `<div class="market-offer-actions">
            <button class="market-action-button" type="button" data-accept-offer="${offer.id}">Aceitar</button>
            <button class="market-action-button" type="button" data-reject-offer="${offer.id}">Recusar</button>
          </div>`
        : `<span class="market-mode-pill">${escapeHtml(status)}</span>`
    }
  </article>`;
}

function renderMarketTradeActions(sticker) {
  const received = marketTradeOffersState.filter(
    (offer) => offer.to_user_id === supabaseUser?.id && offer.market_listings?.sticker_id === sticker.sticker_id,
  );
  const sent = marketTradeOffersState.filter((offer) => offer.from_user_id === supabaseUser?.id);
  const hasTradeListing = marketListingsState.some(
    (listing) =>
      listing.seller_id === supabaseUser?.id &&
      listing.sticker_id === sticker.sticker_id &&
      listing.status === "active" &&
      (listing.accepts_trade || listing.listing_type === "trade" || listing.listing_type === "sale_or_trade"),
  );

  return `<div class="market-action-grid">
    <div class="market-action-box">
      <h4>Trocar</h4>
      <p>Crie um anuncio que aceita propostas. A copia fica reservada enquanto o anuncio estiver ativo.</p>
      <button class="market-action-button" type="button" data-create-trade ${hasTradeListing ? "disabled" : ""}>
        ${hasTradeListing ? "Troca ativa" : "Aceitar propostas"}
      </button>
    </div>
    <div class="market-offers">
      <div class="market-action-box">
        <h4>Recebidas</h4>
        ${received.length ? received.map((offer) => marketOfferCard(offer, "received")).join("") : "<p>Nenhuma proposta recebida para esta figurinha.</p>"}
      </div>
      <div class="market-action-box">
        <h4>Enviadas</h4>
        ${sent.length ? sent.map((offer) => marketOfferCard(offer, "sent")).join("") : "<p>Nenhuma proposta enviada.</p>"}
      </div>
    </div>
  </div>`;
}

function renderMarketCompareActions(listings) {
  return listings.length
    ? `<div class="market-action-box"><h4>Comparacao</h4><p>Veja anuncios ativos desta mesma figurinha. Use Comprar para venda direta ou Propor para troca.</p></div>`
    : `<div class="market-empty">Nenhum outro usuario anunciou esta figurinha ainda.</div>`;
}

function renderMarketListings() {
  if (!marketListings) return;

  renderMarketTree();
  renderSelectedMarketPanel();
  const sticker = selectedMarketSticker();
  const listings = selectedStickerListings();
  updateMarketComparison(listings);

  marketTabs.forEach((tab) => {
    tab.classList.toggle("is-selected", tab.dataset.marketTab === selectedMarketTab);
  });

  if (!sticker) {
    marketActionPanel.innerHTML = "";
    marketListings.innerHTML = "";
  } else if (selectedMarketTab === "sale") {
    marketActionPanel.innerHTML = renderMarketSaleActions(sticker);
    const externalListings = listings.filter((listing) => listing.seller_id !== supabaseUser?.id);
    marketListings.innerHTML = externalListings.length
      ? externalListings.map(renderMarketListingCard).join("")
      : `<div class="market-empty">Nenhum anuncio de outros usuarios para comparar.</div>`;
  } else if (selectedMarketTab === "trade") {
    marketActionPanel.innerHTML = renderMarketTradeActions(sticker);
    marketListings.innerHTML = "";
  } else {
    marketActionPanel.innerHTML = renderMarketCompareActions(listings);
    marketListings.innerHTML = listings.length
      ? listings.map(renderMarketListingCard).join("")
      : `<div class="market-empty">Nenhum anuncio ativo encontrado para esta figurinha.</div>`;
  }

  if (supabaseProfile) {
    marketSetStatus(`Saldo no mercado: ${supabaseProfile.credits || 0} creditos.`);
  }
}

async function loadMarketUserStickers() {
  if (!supabaseClient || !supabaseUser) return;

  const { data, error } = await supabaseClient
    .from("user_stickers")
    .select("*")
    .eq("user_id", supabaseUser.id)
    .order("team_name", { ascending: true });

  if (error) throw error;
  marketUserStickersState = data || [];
}

async function loadMarketTradeOffers() {
  if (!supabaseClient || !supabaseUser) return;

  const { data, error } = await supabaseClient
    .from("market_trade_offers")
    .select("*, market_listings(*)")
    .or(`from_user_id.eq.${supabaseUser.id},to_user_id.eq.${supabaseUser.id}`)
    .order("created_at", { ascending: false });

  if (error) throw error;
  marketTradeOffersState = data || [];
}

async function loadMarketListings() {
  if (!supabaseClient) return;

  const { data, error } = await supabaseClient
    .from("market_listings")
    .select("*")
    .eq("status", "active")
    .order("created_at", { ascending: false });

  if (error) throw error;
  marketListingsState = data || [];
  if (supabaseUser) {
    await loadMarketUserStickers();
    await loadMarketTradeOffers();
  }
  renderMarketListings();
}

function openMarketModal() {
  if (!requireRegisteredUser("Entre para acessar o mercado.")) return;
  populateMarketFilters();
  marketModal.classList.add("is-open");
  marketModal.setAttribute("aria-hidden", "false");
  marketSetStatus("Conectando ao mercado...");
  initSupabase().then((ready) => {
    if (ready) loadMarketListings().catch((error) => marketSetStatus(error.message));
    else renderMarketListings();
  });
}

function closeMarketModal() {
  marketModal.classList.remove("is-open");
  marketModal.setAttribute("aria-hidden", "true");
}

function decrementLocalOpenedSticker(stickerId) {
  const current = openedStickers[stickerId];
  if (!current) return;

  current.count -= 1;
  if (current.count <= 0) {
    delete openedStickers[stickerId];
  } else {
    openedStickers[stickerId] = current;
  }
  saveOpenedStickers();
  renderCollection();
}

function mergeMarketStickerIntoLocal(sticker) {
  if (!sticker?.sticker_id) return;
  const availableCount = Number(sticker.available_count || 0);
  if (availableCount <= 0) {
    delete openedStickers[sticker.sticker_id];
    return;
  }

  const local = openedStickers[sticker.sticker_id] || {
    id: sticker.sticker_id,
    album_number: sticker.album_number,
    team_code: sticker.team_code,
    team_name: sticker.team_name,
    rarity: sticker.rarity,
    rarity_label: sticker.rarity_label,
    title: sticker.title,
    role: sticker.role,
    card_type: sticker.card_type || sticker.metadata?.card_type,
    category_code: sticker.category_code || sticker.metadata?.category_code,
    player: sticker.metadata?.player,
    player_name: sticker.player_name || sticker.metadata?.player?.known_as || sticker.metadata?.player?.full_name,
    position_label: sticker.position_label || sticker.metadata?.player?.position_label,
    src: sticker.src,
    count: 0,
  };
  local.count = Math.max(Number(local.count || 0), availableCount);
  openedStickers[sticker.sticker_id] = local;
}

async function refreshMarketState(message) {
  await refreshSupabaseProfile();
  await loadMarketListings();
  marketUserStickersState.forEach(mergeMarketStickerIntoLocal);
  saveOpenedStickers();
  renderCollection();
  updateStickerActionBar();
  if (message) marketSetStatus(message);
}

async function createSelectedSaleListing() {
  const sticker = selectedMarketSticker();
  if (!sticker || !supabaseClient) return;

  const input = document.querySelector("#marketSalePrice");
  const price = Number(input?.value || 0);
  if (!Number.isInteger(price) || price <= 0) {
    marketSetStatus("Informe um preco inteiro maior que zero.");
    return;
  }

  marketSetStatus("Criando anuncio de venda...");
  try {
    await syncLocalInventoryToSupabase();
    const { error } = await supabaseClient.rpc("create_market_listing", {
      p_sticker_id: sticker.sticker_id,
      p_price: price,
    });
    if (error) throw error;
    decrementLocalOpenedSticker(sticker.sticker_id);
    await refreshMarketState("Anuncio de venda criado.");
  } catch (error) {
    marketSetStatus(error.message);
  }
}

async function createSelectedTradeListing() {
  const sticker = selectedMarketSticker();
  if (!sticker || !supabaseClient) return;

  marketSetStatus("Criando anuncio de troca...");
  try {
    await syncLocalInventoryToSupabase();
    const { error } = await supabaseClient.rpc("create_trade_listing", {
      p_sticker_id: sticker.sticker_id,
    });
    if (error) throw error;
    decrementLocalOpenedSticker(sticker.sticker_id);
    await refreshMarketState("Anuncio de troca criado.");
  } catch (error) {
    marketSetStatus(error.message);
  }
}

async function createTradeOffer(listingId) {
  const select = document.querySelector(`[data-offer-select="${CSS.escape(listingId)}"]`);
  const offeredStickerId = select?.value;
  if (!listingId || !offeredStickerId || !supabaseClient) return;

  marketSetStatus("Enviando proposta de troca...");
  try {
    await syncLocalInventoryToSupabase();
    const { error } = await supabaseClient.rpc("create_trade_offer", {
      p_listing_id: listingId,
      p_offered_sticker_id: offeredStickerId,
    });
    if (error) throw error;
    decrementLocalOpenedSticker(offeredStickerId);
    await refreshMarketState("Proposta enviada.");
  } catch (error) {
    marketSetStatus(error.message);
  }
}

async function respondTradeOffer(offerId, action) {
  if (!offerId || !supabaseClient) return;
  marketSetStatus(action === "accept" ? "Aceitando troca..." : "Recusando troca...");

  try {
    const rpc = action === "accept" ? "accept_trade_offer" : "reject_trade_offer";
    const { error } = await supabaseClient.rpc(rpc, {
      p_offer_id: offerId,
    });
    if (error) throw error;
    await refreshMarketState(action === "accept" ? "Troca aceita." : "Proposta recusada.");
  } catch (error) {
    marketSetStatus(error.message);
  }
}

function setAuthMode(mode) {
  authMode = mode;
  const isSignup = mode === "signup";
  profileSigninTab.classList.toggle("is-selected", !isSignup);
  profileSignupTab.classList.toggle("is-selected", isSignup);
  profileNameField.hidden = !isSignup;
  profileSubmitButton.textContent = isSignup ? "Criar conta" : "Entrar";
  profilePasswordInput.autocomplete = isSignup ? "new-password" : "current-password";
  profileMessage.textContent = isSignup
    ? "Crie uma conta para movimentar o mercado em outros navegadores."
    : "Entre para comprar, vender e manter seu mercado em uma conta.";
}

function openProfileModal(message) {
  profileModal.classList.add("is-open");
  profileModal.setAttribute("aria-hidden", "false");
  setAuthMode(authMode);
  updateProfileUi(message);
  ensureSupabaseClient()
    .then(async (ready) => {
      if (!ready) return;
      const sessionResult = await supabaseClient.auth.getSession();
      supabaseUser = sessionResult.data.session?.user || null;
      if (supabaseUser) await refreshSupabaseProfile().catch(() => null);
      updateProfileUi(message);
    })
    .catch((error) => updateProfileUi(error.message));
}

function closeProfileModal() {
  if (!isRegisteredUser()) {
    profileModal.classList.add("is-open");
    profileModal.setAttribute("aria-hidden", "false");
    updateProfileUi("Login obrigatorio para acessar o album.");
    return;
  }

  profileModal.classList.remove("is-open");
  profileModal.setAttribute("aria-hidden", "true");
}

function requireRegisteredUser(message = "Entre para acessar o album.") {
  if (isRegisteredUser()) return true;
  openProfileModal(message);
  return false;
}

async function handleProfileSubmit(event) {
  event.preventDefault();

  profileSubmitButton.disabled = true;
  profileMessage.textContent = authMode === "signup" ? "Criando conta..." : "Entrando...";

  try {
    if (!(await ensureSupabaseClient())) throw new Error("Supabase nao configurado.");

    const email = profileEmailInput.value.trim();
    const password = profilePasswordInput.value;
    const displayName = profileNameInput.value.trim() || "Colecionador";

    let result =
      authMode === "signup"
        ? await supabaseClient.auth.signUp({
            email,
            password,
            options: {
              data: {
                display_name: displayName,
              },
            },
          })
        : await supabaseClient.auth.signInWithPassword({
            email,
            password,
          });

    if (result.error) throw result.error;

    if (authMode === "signup" && !result.data.session) {
      result = await supabaseClient.auth.signInWithPassword({
        email,
        password,
      });
    }

    if (result.error) throw result.error;

    supabaseUser = result.data.session?.user || null;
    if (!isRegisteredUser()) {
      profileMessage.textContent =
        "Conta criada, mas o Supabase pediu confirmacao por e-mail. Confirme o e-mail ou desative Confirm email no Supabase para liberar acesso imediato.";
      return;
    }

    loadUserLocalState();
    const localCreditSnapshot = Number(localStorage.getItem(userStorageKey("albumCredits")) || creditBalance || 0);
    await ensureSupabaseProfile(displayName);
    creditBalance = Math.max(creditBalance, localCreditSnapshot);
    updateCredits();
    await syncLocalInventoryToSupabase();
    await loadMarketListings();
    updateProfileUi(authMode === "signup" ? "Conta criada e conectada." : "Login realizado.");
    closeProfileModal();
  } catch (error) {
    profileMessage.textContent = error.message;
  } finally {
    profileSubmitButton.disabled = false;
  }
}

async function logoutProfile() {
  if (!supabaseClient) return;

  profileLogoutButton.disabled = true;
  profileMessage.textContent = "Saindo...";

  try {
    await supabaseClient.auth.signOut();
    supabaseUser = null;
    supabaseProfile = null;
    loadUserLocalState();
    marketListingsState = [];
    marketUserStickersState = [];
    marketTradeOffersState = [];
    selectedMarketStickerId = "";
    updateProfileUi("Voce saiu da conta. Login obrigatorio para acessar o album.");
    openProfileModal();
  } catch (error) {
    profileMessage.textContent = error.message;
  } finally {
    profileLogoutButton.disabled = false;
  }
}

function localOpenedInventoryCount(sticker) {
  if (!sticker?.id) return 0;
  const officialSticker = officialStickerFor(sticker);
  const inventoryId = sticker.inventoryId || sticker.id;
  return openedStickers[inventoryId]?.count || openedStickers[officialSticker.id]?.count || 0;
}

function openSellModal() {
  if (!currentPreviewSticker?.id) return;
  if (!isRegisteredUser()) {
    openProfileModal("Entre com e-mail e senha para anunciar duplicatas.");
    return;
  }

  pendingSellSticker = {
    ...marketStickerPayload(currentPreviewSticker),
    inventoryId: currentPreviewSticker.inventoryId || currentPreviewSticker.id,
  };

  const count = localOpenedInventoryCount(currentPreviewSticker);
  const suggestedPrice = Math.max(1, Number(pendingSellSticker.duplicate_value || 10) * 10);
  sellStickerSummary.innerHTML = `<strong>${escapeHtml(pendingSellSticker.team_name)} ${escapeHtml(pendingSellSticker.album_number)}</strong>
    <span>${escapeHtml(pendingSellSticker.rarity_label || "")} · disponiveis: ${count}</span>`;
  sellPriceInput.value = String(suggestedPrice);
  sellMessage.textContent = "Ao anunciar, uma copia duplicada fica reservada no mercado.";
  sellModal.classList.add("is-open");
  sellModal.setAttribute("aria-hidden", "false");
}

function closeSellModal() {
  sellModal.classList.remove("is-open");
  sellModal.setAttribute("aria-hidden", "true");
  pendingSellSticker = null;
}

async function createMarketListing() {
  if (!pendingSellSticker || !supabaseClient) return;
  if (!isRegisteredUser()) {
    sellMessage.textContent = "Entre com e-mail e senha para vender.";
    return;
  }

  const price = Number(sellPriceInput.value || 0);
  if (!Number.isInteger(price) || price <= 0) {
    sellMessage.textContent = "Informe um preco inteiro maior que zero.";
    return;
  }

  confirmSellListingButton.disabled = true;
  sellMessage.textContent = "Criando anuncio...";

  try {
    await syncLocalInventoryToSupabase();
    const { error } = await supabaseClient.rpc("create_market_listing", {
      p_sticker_id: pendingSellSticker.id,
      p_price: price,
    });
    if (error) throw error;

    const current = openedStickers[pendingSellSticker.inventoryId] || openedStickers[pendingSellSticker.id];
    if (current) {
      current.count -= 1;
      if (current.count <= 0) {
        delete openedStickers[pendingSellSticker.inventoryId];
        delete openedStickers[pendingSellSticker.id];
      } else {
        openedStickers[pendingSellSticker.inventoryId] = current;
      }
      saveOpenedStickers();
      renderCollection();
    }

    sellMessage.textContent = "Anuncio criado com sucesso.";
    await loadMarketListings();
    updateStickerActionBar();
    window.setTimeout(closeSellModal, 650);
  } catch (error) {
    sellMessage.textContent = error.message;
  } finally {
    confirmSellListingButton.disabled = false;
  }
}

async function buyMarketListing(listingId) {
  if (!supabaseClient) return;
  if (!isRegisteredUser()) {
    openProfileModal("Entre com e-mail e senha para comprar no mercado.");
    return;
  }

  const listing = marketListingsState.find((item) => item.id === listingId);
  marketSetStatus("Processando compra...");

  try {
    const { error } = await supabaseClient.rpc("buy_market_listing", {
      p_listing_id: listingId,
    });
    if (error) throw error;

    if (listing) {
      addOpenedSticker({
        id: listing.sticker_id,
        album_number: listing.album_number,
        team_code: listing.team_code,
        team_name: listing.team_name,
        rarity: listing.rarity,
        rarity_label: listing.rarity_label,
        title: listing.title,
        role: listing.role,
        card_type: listing.card_type || listing.metadata?.card_type,
        category_code: listing.category_code || listing.metadata?.category_code,
        player: listing.player || listing.metadata?.player,
        player_name: listing.player_name || listing.metadata?.player?.known_as || listing.metadata?.player?.full_name,
        position_label: listing.position_label || listing.metadata?.player?.position_label,
        current_club: listing.current_club || listing.metadata?.player?.current_club,
        shirt_number: listing.shirt_number || listing.metadata?.player?.shirt_number,
        drop: listing.drop || listing.metadata?.drop,
        image_generation: listing.image_generation || listing.metadata?.image_generation,
        src: listing.src,
      });
      saveOpenedStickers();
      renderCollection();
      await syncLocalInventoryToSupabase();
    }

    await refreshSupabaseProfile();
    await loadMarketListings();
    marketSetStatus("Compra realizada. Figurinha adicionada em Minhas.");
  } catch (error) {
    marketSetStatus(error.message);
  }
}

async function applyCheckoutReturn() {
  const status = checkoutParams.get("checkout");
  const credits = Number(checkoutParams.get("credits") || 0);
  const sessionId = checkoutParams.get("session_id") || "";

  if (status === "success" && credits > 0) {
    if (!isRegisteredUser()) {
      updateCredits("Entre para aplicar os creditos da compra na sua conta.");
      openProfileModal("Entre para aplicar os creditos da compra na sua conta.");
      return false;
    }

    const markerKey = userStorageKey("albumAppliedCheckoutSessions");
    const appliedSessions = readJsonStorage("albumAppliedCheckoutSessions", []);
    const legacySessionKey = "lastCheckoutCredits";
    const currentMarker = sessionId || `${status}:${credits}`;

    if (!appliedSessions.includes(currentMarker) && sessionStorage.getItem(legacySessionKey) !== currentMarker) {
      creditBalance += credits;
      localStorage.setItem(markerKey, JSON.stringify([...appliedSessions, currentMarker].slice(-30)));
      sessionStorage.setItem(legacySessionKey, currentMarker);
      updateCredits(`Pagamento aprovado pela Stripe. ${credits} creditos adicionados.`);
      if (supabaseClient) {
        await syncLocalInventoryToSupabase();
        await refreshSupabaseProfile();
      }
    }

    window.history.replaceState({}, "", window.location.pathname);
    return true;
  }

  if (status === "cancel") {
    updateCredits("Pagamento cancelado. Nenhum credito foi adicionado.");
    window.history.replaceState({}, "", window.location.pathname);
    return true;
  }

  return false;
}

function openShop() {
  if (!requireRegisteredUser()) return;
  updateCredits();
  shopPanel.classList.add("is-open");
  shopPanel.setAttribute("aria-hidden", "false");
}

function closeShop() {
  shopPanel.classList.remove("is-open");
  shopPanel.setAttribute("aria-hidden", "true");
}

openShopButton.addEventListener("click", openShop);
shopCloseButton.addEventListener("click", closeShop);
shopBackdrop.addEventListener("click", closeShop);

document.querySelectorAll(".credit-card").forEach((button) => {
  button.addEventListener("click", () => {
    if (!requireRegisteredUser()) return;
    const credits = Number(button.dataset.credits);
    const price = button.querySelector("em")?.textContent ?? "R$ 0,00";
    pendingCheckout = {
      credits,
      price,
      product: `${credits} creditos`,
    };
    checkoutProduct.textContent = pendingCheckout.product;
    checkoutPrice.textContent = pendingCheckout.price;
    checkoutModal.classList.add("is-open");
    checkoutModal.setAttribute("aria-hidden", "false");
  });
});

updateCredits();

function maxPackQuantity() {
  return Math.floor(creditBalance / selectedPack.cost);
}

function clampPackQuantity(value) {
  return Math.max(0, Math.min(Number(value) || 0, maxPackQuantity()));
}

function updatePacksSummary(message) {
  const quantity = clampPackQuantity(packQuantityInput.value);
  packQuantityInput.value = String(quantity);
  packQuantityInput.max = String(maxPackQuantity());
  packsCreditBalanceElement.textContent = String(creditBalance);
  packsTotalElement.textContent = `${quantity * selectedPack.cost} CR`;
  packsStickerTotalElement.textContent = String(quantity * selectedPack.stickers);
  confirmPackPurchaseButton.disabled = quantity === 0;
  if (message) packsMessage.textContent = message;
}

function savePackInventory() {
  localStorage.setItem(userStorageKey("albumPackInventory"), JSON.stringify(packInventory));
}

function weightedChoice(weights) {
  const entries = Object.entries(weights || {}).filter(([, weight]) => Number(weight) > 0);
  const total = entries.reduce((sum, [, weight]) => sum + Number(weight), 0);
  if (total <= 0) return null;

  let cursor = Math.random() * total;
  for (const [key, weight] of entries) {
    cursor -= Number(weight);
    if (cursor <= 0) return key;
  }

  return entries[entries.length - 1]?.[0] ?? null;
}

function randomStickerByRarity(rarity) {
  const pool = stickerCatalog.byRarity.get(rarity) || [];
  if (!pool.length) return null;
  return pool[Math.floor(Math.random() * pool.length)];
}

function drawStickerFromWeights(weights) {
  const rarity = weightedChoice(weights);
  return rarity ? randomStickerByRarity(rarity) : null;
}

function premiumSlots() {
  const weights = stickerCatalog.packConfig?.premium_pack?.suggested_rarity_weights;
  if (!weights) {
    const rarityWeights = stickerCatalog.raritySystem?.rarities || {};
    const base = {
      common: rarityWeights.common?.drop_weight || 7600,
      rare: rarityWeights.rare?.drop_weight || 1700,
      epic: rarityWeights.epic?.drop_weight || 600,
      legendary: rarityWeights.legendary?.drop_weight || 100,
    };
    return [
      base,
      base,
      base,
      { common: 5000, rare: 3600, epic: 1200, legendary: 200 },
      { common: 0, rare: 7200, epic: 2400, legendary: 400 },
      { common: 0, rare: 5600, epic: 3600, legendary: 800 },
      { common: 0, rare: 0, epic: 8500, legendary: 1500 },
    ];
  }

  return [
    ...Array.from({ length: 4 }, () => weights.base_slots),
    ...Array.from({ length: 2 }, () => weights.special_slots),
    weights.epic_plus_slot,
  ];
}

function standardSlots() {
  return (stickerCatalog.packConfig?.standard_pack?.slots || stickerCatalog.packConfig?.default_pack?.slots || []).map(
    (slot) => slot.rarity_weights,
  );
}

function generatePackId() {
  return window.crypto?.randomUUID?.() || `pack-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function hasEpicOrBetter(stickers) {
  return stickers.some((sticker) => sticker.rarity === "epic" || sticker.rarity === "legendary");
}

function hasLegendary(stickers) {
  return stickers.some((sticker) => sticker.rarity === "legendary");
}

function updatePityAfterStandardPack(stickers) {
  const pityConfig = stickerCatalog.packConfig?.default_pack?.pity_system;
  if (!pityConfig?.enabled) return;

  packPity.withoutEpicOrBetter = hasEpicOrBetter(stickers) ? 0 : (packPity.withoutEpicOrBetter || 0) + 1;
  packPity.withoutLegendary = hasLegendary(stickers) ? 0 : (packPity.withoutLegendary || 0) + 1;
  savePackPity();
}

function applyStandardPity(stickers) {
  const pityConfig = stickerCatalog.packConfig?.default_pack?.pity_system;
  if (!pityConfig?.enabled || !stickers.length) return stickers;

  const shouldForceLegendary =
    !hasLegendary(stickers) &&
    (packPity.withoutLegendary || 0) + 1 >= pityConfig.guarantee_legendary_after_packs_without_legendary;
  const shouldForceEpic =
    !shouldForceLegendary &&
    !hasEpicOrBetter(stickers) &&
    (packPity.withoutEpicOrBetter || 0) + 1 >= pityConfig.guarantee_epic_after_packs_without_epic_or_better;

  if (shouldForceLegendary) {
    stickers[stickers.length - 1] = randomStickerByRarity("legendary") || stickers[stickers.length - 1];
  } else if (shouldForceEpic) {
    stickers[stickers.length - 1] =
      drawStickerFromWeights({ epic: 9000, legendary: 1000 }) || stickers[stickers.length - 1];
  }

  return stickers;
}

function createPurchasedPack(type) {
  const slots = type === "premium_pack" ? premiumSlots() : standardSlots();
  const stickers = slots.map((weights) => drawStickerFromWeights(weights)).filter(Boolean);
  const finalStickers = type === "standard_pack" ? applyStandardPity(stickers) : stickers;

  if (type === "standard_pack") {
    updatePityAfterStandardPack(finalStickers);
  }

  return {
    packId: generatePackId(),
    type,
    name: packTypeConfig[type].name,
    purchasedAt: new Date().toISOString(),
    opened: false,
    stickers: finalStickers,
  };
}

function unopenedPacksByType(type) {
  return packInventory.filter((pack) => pack.type === type && !pack.opened);
}

function renderStickerFace(sticker) {
  const displayName = stickerDisplayName(sticker);
  const position = stickerPositionLabel(sticker);
  if (sticker.src) {
    return `<span class="opened-sticker-card is-real"><img src="${sticker.src}" alt="${sticker.team_name} ${sticker.album_number} ${displayName}" /></span>`;
  }

  return `<span class="opened-sticker-card">
    ${sticker.album_number || String(sticker.number).padStart(3, "0")}
    <small>${displayName || sticker.team_name || sticker.teamName || ""}<br>${position || sticker.rarity_label || ""}</small>
  </span>`;
}

function saveOpenedStickers() {
  localStorage.setItem(userStorageKey("albumOpenedStickers"), JSON.stringify(openedStickers));
}

function pasteCurrentSticker() {
  if (!currentPreviewSticker?.id) return;

  const officialSticker = officialStickerFor(currentPreviewSticker);
  if (!officialSticker?.id || pastedStickers[officialSticker.id]) return;

  const inventoryId = currentPreviewSticker.inventoryId || currentPreviewSticker.id;
  const current = openedStickers[inventoryId] || openedStickers[officialSticker.id];
  if (!current || current.count <= 0) return;

  pastedStickers[officialSticker.id] = {
    ...officialSticker,
    pastedAt: new Date().toISOString(),
  };

  current.count -= 1;
  if (current.count <= 0) {
    delete openedStickers[inventoryId];
    delete openedStickers[officialSticker.id];
  } else {
    openedStickers[inventoryId] = current;
  }

  currentPreviewSticker = {
    ...officialSticker,
    inventoryId,
  };

  savePastedStickers();
  saveOpenedStickers();
  if (supabaseClient) syncLocalInventoryToSupabase().catch(() => {});
  renderCollection();
  updateStickerActionBar();
  collectionMessage.textContent = "Figurinha colada no album.";
  rebuildMagazine();
}

function addOpenedSticker(sticker) {
  const current = openedStickers[sticker.id] || {
    ...sticker,
    count: 0,
  };
  current.count += 1;
  openedStickers[sticker.id] = current;
}

function updateInventory(message) {
  const total = packInventory.filter((pack) => !pack.opened).length;
  inventoryTotalElement.textContent = String(total);
  standardPackCountElement.textContent = String(unopenedPacksByType("standard_pack").length);
  premiumPackCountElement.textContent = String(unopenedPacksByType("premium_pack").length);

  document.querySelectorAll(".open-pack-button").forEach((button) => {
    button.disabled = unopenedPacksByType(button.dataset.type).length === 0;
  });

  if (message) inventoryMessage.textContent = message;
}

function openInventoryModal() {
  if (!requireRegisteredUser()) return;
  updateInventory();
  inventoryModal.classList.add("is-open");
  inventoryModal.setAttribute("aria-hidden", "false");
}

function renderCollection() {
  const stickers = Object.values(openedStickers)
    .filter((sticker) => Number(sticker.count || 0) > 0)
    .sort((a, b) => {
    const teamCompare = (a.team_name || a.teamName || "").localeCompare(b.team_name || b.teamName || "", "pt-BR");
    return teamCompare || (a.number || 0) - (b.number || 0);
    });

  collectionUniqueTotal.textContent = String(stickers.length);
  collectionGrid.innerHTML = stickers
    .map((sticker) => {
      const officialSticker = officialStickerFor(sticker);
      const duplicateCount = Math.max(0, sticker.count - 1);
      const stickerLabel = officialSticker.album_number || String(officialSticker.number || 0).padStart(3, "0");
      const teamName = officialSticker.team_name || officialSticker.teamName || "";
      const rarityLabel = officialSticker.rarity_label || "";
      const displayName = stickerDisplayName(officialSticker);
      const position = stickerPositionLabel(officialSticker);
      const displaySticker = { ...officialSticker, inventoryId: sticker.id, count: sticker.count };
      const encodedSticker = stickerJsonAttribute(displaySticker);
      const media = officialSticker.src
        ? `<button class="collection-sticker-button" type="button" data-sticker-src="${officialSticker.src}" data-sticker-alt="${teamName} ${stickerLabel} ${displayName}" data-sticker-json="${encodedSticker}"><img src="${officialSticker.src}" alt="${teamName} ${stickerLabel} ${displayName}" /></button>`
        : `<button class="collection-sticker-button" type="button" data-sticker-json="${encodedSticker}" aria-label="Ampliar ${teamName} ${stickerLabel}">
            <span class="collection-placeholder">${stickerLabel}<small>${displayName || teamName}<br>${position || rarityLabel}</small></span>
          </button>`;
      const badge = duplicateCount > 0 ? `<span class="duplicate-badge">+${duplicateCount}</span>` : "";
      return `<article class="collection-sticker">
        ${media}
        ${badge}
        <footer title="${escapeHtml(displayName || `${teamName} ${stickerLabel}`)}">${escapeHtml(displayName || `${teamName} ${stickerLabel}`)}</footer>
      </article>`;
    })
    .join("");

  collectionMessage.textContent = stickers.length
    ? "Figurinhas abertas ficam salvas neste navegador."
    : "Abra pacotinhos para ver suas figurinhas aqui.";
}

function openCollectionModal() {
  if (!requireRegisteredUser()) return;
  renderCollection();
  collectionModal.classList.add("is-open");
  collectionModal.setAttribute("aria-hidden", "false");
}

function closeCollectionModal() {
  collectionModal.classList.remove("is-open");
  collectionModal.setAttribute("aria-hidden", "true");
}

function closeInventoryModal() {
  inventoryModal.classList.remove("is-open");
  inventoryModal.setAttribute("aria-hidden", "true");
}

function openPacksModal() {
  if (!requireRegisteredUser()) return;
  updatePacksSummary();
  packsModal.classList.add("is-open");
  packsModal.setAttribute("aria-hidden", "false");
}

function closePacksModal() {
  packsModal.classList.remove("is-open");
  packsModal.setAttribute("aria-hidden", "true");
}

openPacksButton.addEventListener("click", openPacksModal);
packsCloseButton.addEventListener("click", closePacksModal);
packsBackdrop.addEventListener("click", closePacksModal);

document.querySelectorAll(".pack-type").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".pack-type").forEach((typeButton) => typeButton.classList.remove("is-selected"));
    button.classList.add("is-selected");
    selectedPack = {
      type: button.dataset.type,
      name: packTypeConfig[button.dataset.type].name,
      cost: Number(button.dataset.cost),
      stickers: Number(button.dataset.stickers),
    };
    updatePacksSummary(`Tipo selecionado: ${selectedPack.name}.`);
  });
});

decreasePackQtyButton.addEventListener("click", () => {
  packQuantityInput.value = String(clampPackQuantity(Number(packQuantityInput.value) - 1));
  updatePacksSummary();
});

increasePackQtyButton.addEventListener("click", () => {
  packQuantityInput.value = String(clampPackQuantity(Number(packQuantityInput.value) + 1));
  updatePacksSummary();
});

packQuantityInput.addEventListener("input", () => updatePacksSummary());

confirmPackPurchaseButton.addEventListener("click", () => {
  if (!requireRegisteredUser()) return;
  const quantity = clampPackQuantity(packQuantityInput.value);
  if (quantity === 0) return;
  if (!stickerCatalog.stickers.length) {
    updatePacksSummary("Catalogo oficial de figurinhas ainda nao carregou.");
    return;
  }

  const totalCost = quantity * selectedPack.cost;
  creditBalance -= totalCost;
  const purchasedPacks = Array.from({ length: quantity }, () => createPurchasedPack(selectedPack.type));
  packInventory = [...packInventory, ...purchasedPacks];
  savePackInventory();
  updateCredits();
  updatePacksSummary(`${quantity} ${selectedPack.name}(s) comprado(s) com figurinhas ja sorteadas.`);
  updateInventory();
});

openInventoryButton.addEventListener("click", openInventoryModal);
inventoryCloseButton.addEventListener("click", closeInventoryModal);
inventoryBackdrop.addEventListener("click", closeInventoryModal);

document.querySelectorAll(".open-pack-button").forEach((button) => {
  button.addEventListener("click", () => {
    if (!requireRegisteredUser()) return;
    const type = button.dataset.type;
    const packIndex = packInventory.findIndex((pack) => pack.type === type && !pack.opened);
    if (packIndex < 0) {
      updateInventory(`Voce nao possui ${packTypeConfig[type].name}.`);
      return;
    }

    const pack = packInventory[packIndex];
    packInventory[packIndex] = {
      ...pack,
      opened: true,
      openedAt: new Date().toISOString(),
    };
    savePackInventory();

    const opened = pack.stickers || [];
    opened.forEach(addOpenedSticker);
    saveOpenedStickers();
    openedPackResult.innerHTML = opened.map(renderStickerFace).join("");
    updateInventory(`${pack.name} aberto: ${opened.length} figurinha(s) revelada(s).`);
  });
});

openCollectionButton.addEventListener("click", openCollectionModal);
collectionCloseButton.addEventListener("click", closeCollectionModal);
collectionBackdrop.addEventListener("click", closeCollectionModal);

collectionGrid.addEventListener("click", (event) => {
  const button = event.target.closest(".collection-sticker-button");
  if (!button) return;
  const sticker = button.dataset.stickerJson ? JSON.parse(decodeURIComponent(button.dataset.stickerJson)) : null;

  if (button.dataset.stickerSrc) {
    openPremiumSticker(button.dataset.stickerSrc, button.dataset.stickerAlt, sticker);
    return;
  }

  if (sticker) {
    openPremiumStickerPlaceholder(sticker);
  }
});

pasteStickerButton.addEventListener("click", pasteCurrentSticker);
sellStickerButton.addEventListener("click", () => {
  initSupabase().then((ready) => {
    if (ready) openSellModal();
  });
});

openMarketButton.addEventListener("click", openMarketModal);
marketCloseButton.addEventListener("click", closeMarketModal);
marketBackdrop.addEventListener("click", closeMarketModal);
marketSearch.addEventListener("input", renderMarketListings);
marketTeamFilter.addEventListener("change", renderMarketListings);
marketRarityFilter.addEventListener("change", renderMarketListings);
marketTree.addEventListener("click", (event) => {
  const button = event.target.closest(".market-tree-item");
  if (!button) return;
  selectedMarketStickerId = button.dataset.stickerId || "";
  renderMarketListings();
});
marketTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    selectedMarketTab = tab.dataset.marketTab || "sale";
    renderMarketListings();
  });
});
marketActionPanel.addEventListener("click", (event) => {
  const saleButton = event.target.closest("[data-create-sale]");
  if (saleButton) {
    createSelectedSaleListing();
    return;
  }

  const tradeButton = event.target.closest("[data-create-trade]");
  if (tradeButton && !tradeButton.disabled) {
    createSelectedTradeListing();
    return;
  }

  const acceptButton = event.target.closest("[data-accept-offer]");
  if (acceptButton) {
    respondTradeOffer(acceptButton.dataset.acceptOffer, "accept");
    return;
  }

  const rejectButton = event.target.closest("[data-reject-offer]");
  if (rejectButton) {
    respondTradeOffer(rejectButton.dataset.rejectOffer, "reject");
  }
});
marketListings.addEventListener("click", (event) => {
  const button = event.target.closest(".market-buy-button");
  if (button && !button.disabled) {
    buyMarketListing(button.dataset.listingId);
    return;
  }

  const tradeButton = event.target.closest("[data-trade-listing-id]");
  if (tradeButton && !tradeButton.disabled) {
    createTradeOffer(tradeButton.dataset.tradeListingId);
  }
});

sellCloseButton.addEventListener("click", closeSellModal);
sellBackdrop.addEventListener("click", closeSellModal);
confirmSellListingButton.addEventListener("click", createMarketListing);

openProfileButton.addEventListener("click", () => openProfileModal());
profileCloseButton.addEventListener("click", closeProfileModal);
profileBackdrop.addEventListener("click", closeProfileModal);
profileSigninTab.addEventListener("click", () => setAuthMode("signin"));
profileSignupTab.addEventListener("click", () => setAuthMode("signup"));
profileForm.addEventListener("submit", handleProfileSubmit);
profileLogoutButton.addEventListener("click", logoutProfile);

function closeCheckout() {
  checkoutModal.classList.remove("is-open");
  checkoutModal.setAttribute("aria-hidden", "true");
}

checkoutCloseButton.addEventListener("click", closeCheckout);
checkoutBackdrop.addEventListener("click", closeCheckout);

document.querySelectorAll(".checkout-method").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".checkout-method").forEach((method) => method.classList.remove("is-selected"));
    button.classList.add("is-selected");
  });
});

confirmCheckoutButton.addEventListener("click", () => {
  if (!requireRegisteredUser()) return;
  if (!pendingCheckout) return;

  confirmCheckoutButton.disabled = true;
  confirmCheckoutButton.textContent = "Abrindo Stripe...";

  fetch("/api/create-checkout-session", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      credits: pendingCheckout.credits,
    }),
  })
    .then(async (response) => {
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Nao foi possivel iniciar o checkout.");
      window.location.href = data.url;
    })
    .catch((error) => {
      updateCredits(error.message);
      confirmCheckoutButton.disabled = false;
      confirmCheckoutButton.textContent = "Pagar agora";
    });
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && stickerModal.classList.contains("is-open")) {
    closeStickerModal();
    return;
  }

  if (event.key === "Escape" && collectionModal.classList.contains("is-open")) {
    closeCollectionModal();
    return;
  }

  if (event.key === "Escape" && sellModal.classList.contains("is-open")) {
    closeSellModal();
    return;
  }

  if (event.key === "Escape" && marketModal.classList.contains("is-open")) {
    closeMarketModal();
    return;
  }

  if (event.key === "Escape" && profileModal.classList.contains("is-open")) {
    if (isRegisteredUser()) closeProfileModal();
    return;
  }

  if (event.key === "Escape" && inventoryModal.classList.contains("is-open")) {
    closeInventoryModal();
    return;
  }

  if (event.key === "Escape" && packsModal.classList.contains("is-open")) {
    closePacksModal();
    return;
  }

  if (event.key === "Escape" && checkoutModal.classList.contains("is-open")) {
    closeCheckout();
    return;
  }

  if (event.key === "Escape" && shopPanel.classList.contains("is-open")) {
    closeShop();
    return;
  }

  if (event.key === "ArrowLeft") {
    if (!requireRegisteredUser()) return;
    if (!isCoverClosed && pageFlip?.getCurrentPageIndex() <= 1) {
      showCover();
    } else {
      pageFlip?.flipPrev();
    }
  }

  if (event.key === "ArrowRight" || event.key === " ") {
    if (!requireRegisteredUser()) return;
    if (isCoverClosed) {
      showMagazine();
    } else {
      pageFlip?.flipNext();
    }
  }
});

window.addEventListener("resize", () => {
  window.clearTimeout(resizeTimer);
  resizeTimer = window.setTimeout(rebuildMagazine, 180);
});

createMagazine()
  .then(() => initSupabase())
  .catch((error) => {
    renderError(`${error.message} Verifique se o arquivo vendor/page-flip.browser.min.js esta presente.`);
  });
