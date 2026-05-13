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

let pageFlip;
let resizeTimer;
let isCoverClosed = true;
let stickersByTeam = new Map();
let stickerCatalog = {
  packConfig: null,
  stickers: [],
  byRarity: new Map(),
};
let creditBalance = Number(localStorage.getItem("albumCredits") || 0);
let pendingCheckout = null;
const checkoutParams = new URLSearchParams(window.location.search);
let packInventory = loadPackInventory();
let openedStickers = JSON.parse(localStorage.getItem("albumOpenedStickers") || "{}");
let pastedStickers = JSON.parse(localStorage.getItem("albumPastedStickers") || "{}");
let currentPreviewSticker = null;
let packPity = JSON.parse(
  localStorage.getItem("albumPackPity") || '{"withoutEpicOrBetter":0,"withoutLegendary":0}',
);
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

function loadPackInventory() {
  try {
    const stored = JSON.parse(localStorage.getItem("albumPackInventory") || "[]");
    return Array.isArray(stored) ? stored : [];
  } catch {
    return [];
  }
}

function savePackPity() {
  localStorage.setItem("albumPackPity", JSON.stringify(packPity));
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
    const response = await fetch("./copa_2026_album_figurinhas_48_selecoes_1728_cards.json", { cache: "no-store" });
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
      stickers,
      byRarity,
    };
  } catch {
    return {
      packConfig: null,
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
    title: sticker.title,
    role: sticker.role,
    category_code: sticker.category_code,
    teamName: sticker.team_name,
    number,
    src: stickerFile ? `./Paginas/Figurinhas/${encodeURIComponent(stickerFile)}` : "",
  };
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
  const byId = stickerCatalog.stickers.find((catalogSticker) => catalogSticker.id === sticker.id);
  if (byId) {
    return {
      ...byId,
      ...sticker,
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

  return byTeamAndNumber ? { ...byTeamAndNumber, ...sticker, src: sticker.src || byTeamAndNumber.src } : sticker;
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
      return `<button class="sticker-cell is-filled is-placeholder-filled" type="button" data-sticker-json="${stickerJsonAttribute(pastedSticker)}" aria-label="Ampliar ${escapeHtml(stickerLabel)}">
        <span class="pasted-placeholder-number">${escapeHtml(stickerLabel)}</span>
        <small>${escapeHtml(pastedSticker.team_name)}<br>${escapeHtml(pastedSticker.rarity_label)}</small>
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
  localStorage.setItem("albumPastedStickers", JSON.stringify(pastedStickers));
}

function updateStickerActionBar() {
  if (!currentPreviewSticker?.id) {
    pasteStickerButton.disabled = true;
    pasteStickerButton.textContent = "Colar no album";
    return;
  }

  const officialSticker = officialStickerFor(currentPreviewSticker);
  const inventoryId = currentPreviewSticker.inventoryId || currentPreviewSticker.id;
  const isPasted = Boolean(pastedStickers[officialSticker.id]);
  const availableCount = openedStickers[inventoryId]?.count || openedStickers[officialSticker.id]?.count || 0;
  pasteStickerButton.disabled = isPasted || availableCount <= 0;
  pasteStickerButton.textContent = isPasted ? "Colada" : "Colar no album";
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

  currentPreviewSticker = sticker;
  stickerModalImage.src = src;
  stickerModalImage.alt = alt || "Figurinha ampliada";
  stickerModalImage.hidden = false;
  stickerModalPlaceholder.hidden = true;
  stickerModalPlaceholder.innerHTML = "";
  stickerModal.classList.remove("is-placeholder-preview");
  stickerModal.classList.add("is-premium");
  stickerModal.classList.add("is-open");
  stickerModal.setAttribute("aria-hidden", "false");
  updateStickerActionBar();
}

function openPremiumStickerPlaceholder(sticker) {
  currentPreviewSticker = sticker;
  const stickerLabel = sticker.album_number || String(sticker.number || 0).padStart(3, "0");
  const teamName = sticker.team_name || sticker.teamName || "";
  const rarityLabel = sticker.rarity_label || "";
  const role = sticker.role || sticker.title || "Figurinha oficial";

  stickerModalImage.removeAttribute("src");
  stickerModalImage.hidden = true;
  stickerModalPlaceholder.hidden = false;
  stickerModalPlaceholder.innerHTML = `
    <span class="modal-placeholder-kicker">${escapeHtml(rarityLabel)}</span>
    <strong>${escapeHtml(stickerLabel)}</strong>
    <span class="modal-placeholder-team">${escapeHtml(teamName)}</span>
    <em>${escapeHtml(role)}</em>
  `;
  stickerModal.classList.add("is-premium", "is-placeholder-preview");
  stickerModal.classList.add("is-open");
  stickerModal.setAttribute("aria-hidden", "false");
  updateStickerActionBar();
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
  if (!pageFlip) return;

  if (!isCoverClosed && pageFlip.getCurrentPageIndex() <= 1) {
    showCover();
    return;
  }

  pageFlip.flipPrev();
});

nextButton.addEventListener("click", () => {
  if (isCoverClosed) {
    showMagazine();
    return;
  }

  pageFlip?.flipNext();
});

coverView.addEventListener("click", showMagazine);

bookElement.addEventListener("click", (event) => {
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
  localStorage.setItem("albumCredits", String(creditBalance));
  if (message) shopMessage.textContent = message;
}

function applyCheckoutReturn() {
  const status = checkoutParams.get("checkout");
  const credits = Number(checkoutParams.get("credits") || 0);

  if (status === "success" && credits > 0) {
    const lastApplied = sessionStorage.getItem("lastCheckoutCredits");
    const currentMarker = `${status}:${credits}`;

    if (lastApplied !== currentMarker) {
      creditBalance += credits;
      sessionStorage.setItem("lastCheckoutCredits", currentMarker);
      updateCredits(`Pagamento aprovado pela Stripe. ${credits} creditos adicionados.`);
    }

    window.history.replaceState({}, "", window.location.pathname);
    return;
  }

  if (status === "cancel") {
    updateCredits("Pagamento cancelado. Nenhum credito foi adicionado.");
    window.history.replaceState({}, "", window.location.pathname);
  }
}

function openShop() {
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
  localStorage.setItem("albumPackInventory", JSON.stringify(packInventory));
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
  if (!weights) return [];

  return [
    ...Array.from({ length: 4 }, () => weights.base_slots),
    ...Array.from({ length: 2 }, () => weights.special_slots),
    weights.epic_plus_slot,
  ];
}

function standardSlots() {
  return (stickerCatalog.packConfig?.default_pack?.slots || []).map((slot) => slot.rarity_weights);
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
  if (sticker.src) {
    return `<span class="opened-sticker-card is-real"><img src="${sticker.src}" alt="${sticker.team_name} ${sticker.album_number}" /></span>`;
  }

  return `<span class="opened-sticker-card">
    ${sticker.album_number || String(sticker.number).padStart(3, "0")}
    <small>${sticker.team_name || sticker.teamName || ""}<br>${sticker.rarity_label || ""}</small>
  </span>`;
}

function saveOpenedStickers() {
  localStorage.setItem("albumOpenedStickers", JSON.stringify(openedStickers));
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
  updateInventory();
  inventoryModal.classList.add("is-open");
  inventoryModal.setAttribute("aria-hidden", "false");
}

function renderCollection() {
  const stickers = Object.values(openedStickers).sort((a, b) => {
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
      const displaySticker = { ...officialSticker, inventoryId: sticker.id, count: sticker.count };
      const encodedSticker = stickerJsonAttribute(displaySticker);
      const media = officialSticker.src
        ? `<button class="collection-sticker-button" type="button" data-sticker-src="${officialSticker.src}" data-sticker-alt="${teamName} ${stickerLabel}" data-sticker-json="${encodedSticker}"><img src="${officialSticker.src}" alt="${teamName} ${stickerLabel}" /></button>`
        : `<button class="collection-sticker-button" type="button" data-sticker-json="${encodedSticker}" aria-label="Ampliar ${teamName} ${stickerLabel}">
            <span class="collection-placeholder">${stickerLabel}<small>${teamName}<br>${rarityLabel}</small></span>
          </button>`;
      const badge = duplicateCount > 0 ? `<span class="duplicate-badge">+${duplicateCount}</span>` : "";
      return `<article class="collection-sticker">
        ${media}
        ${badge}
        <footer>${teamName} ${stickerLabel}</footer>
      </article>`;
    })
    .join("");

  collectionMessage.textContent = stickers.length
    ? "Figurinhas abertas ficam salvas neste navegador."
    : "Abra pacotinhos para ver suas figurinhas aqui.";
}

function openCollectionModal() {
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

applyCheckoutReturn();

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && stickerModal.classList.contains("is-open")) {
    closeStickerModal();
    return;
  }

  if (event.key === "Escape" && collectionModal.classList.contains("is-open")) {
    closeCollectionModal();
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
    if (!isCoverClosed && pageFlip?.getCurrentPageIndex() <= 1) {
      showCover();
    } else {
      pageFlip?.flipPrev();
    }
  }

  if (event.key === "ArrowRight" || event.key === " ") {
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

createMagazine().catch((error) => {
  renderError(`${error.message} Verifique se o arquivo vendor/page-flip.browser.min.js esta presente.`);
});
