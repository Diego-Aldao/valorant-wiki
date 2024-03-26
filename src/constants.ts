export const listadoFiltro = [
  {
    id: 1,
    nombre: "Todas Las Armas",
    categoria: "all",
  },
  {
    id: 2,
    nombre: "Pistolas",
    categoria: "EEquippableCategory::Sidearm",
  },
  {
    id: 3,
    nombre: "Escopetas",
    categoria: "EEquippableCategory::Shotgun",
  },
  {
    id: 4,
    nombre: "Subfusiles",
    categoria: "EEquippableCategory::SMG",
  },
  {
    id: 5,
    nombre: "Rifles de Asalto",
    categoria: "EEquippableCategory::Rifle",
  },
  {
    id: 6,
    nombre: "Francotiradores",
    categoria: "EEquippableCategory::Sniper",
  },
  {
    id: 7,
    nombre: "Armas Pesadas",
    categoria: "EEquippableCategory::Heavy",
  },
  {
    id: 8,
    nombre: "Cuerpo a Cuerpo",
    categoria: "EEquippableCategory::Melee",
  },
];

export const listadoSlots = {
  Ability1: "q",
  Ability2: "e",
  Grenade: "c",
  Ultimate: "x",
  Passive: "pasiva",
};

export const listadoPages = [
  {
    id: 1,
    nombre: "inicio",
  },
  {
    id: 2,
    nombre: "agentes",
  },
  {
    id: 3,
    nombre: "mapas",
  },
  {
    id: 4,
    nombre: "armas",
  },
];

export const listadoArmas = [
  {
    id: 1,
    nombre: "classic",
  },
  {
    id: 2,
    nombre: "shorty",
  },
  {
    id: 3,
    nombre: "frenzy",
  },
  {
    id: 4,
    nombre: "ghost",
  },
  {
    id: 5,
    nombre: "sherifgg",
  },
  {
    id: 6,
    nombre: "bucky",
  },
  {
    id: 7,
    nombre: "marshal",
  },
  {
    id: 8,
    nombre: "stinger",
  },
  {
    id: 9,
    nombre: "ares",
  },
  {
    id: 10,
    nombre: "spectre",
  },
  {
    id: 11,
    nombre: "judge",
  },
  {
    id: 12,
    nombre: "bulldog",
  },
  {
    id: 13,
    nombre: "guardian",
  },
  {
    id: 14,
    nombre: "outlaw",
  },
  {
    id: 15,
    nombre: "vandal",
  },
  {
    id: 16,
    nombre: "phantom",
  },
  {
    id: 17,
    nombre: "odin",
  },
  {
    id: 18,
    nombre: "operator",
  },
  {
    id: 19,
    nombre: "cuerpo a cuerpo",
  },
];

export const listadoAgentes = [
  {
    id: 1,
    nombre: "gekko",
  },
  {
    id: 2,
    nombre: "fade",
  },
  {
    id: 3,
    nombre: "breach",
  },
  {
    id: 4,
    nombre: "deadlock",
  },
  {
    id: 5,
    nombre: "raze",
  },
  {
    id: 6,
    nombre: "chamber",
  },
  {
    id: 7,
    nombre: "kayo",
  },
  {
    id: 8,
    nombre: "skye",
  },
  {
    id: 9,
    nombre: "cypher",
  },
  {
    id: 10,
    nombre: "sova",
  },
  {
    id: 11,
    nombre: "killjoy",
  },
  {
    id: 12,
    nombre: "harbor",
  },
  {
    id: 13,
    nombre: "viper",
  },
  {
    id: 14,
    nombre: "phoenix",
  },
  {
    id: 15,
    nombre: "astra",
  },
  {
    id: 16,
    nombre: "brimstone",
  },
  {
    id: 17,
    nombre: "iso",
  },
  {
    id: 18,
    nombre: "neon",
  },
  {
    id: 19,
    nombre: "yoru",
  },
  {
    id: 20,
    nombre: "sage",
  },
  {
    id: 21,
    nombre: "reyna",
  },
  {
    id: 22,
    nombre: "omen",
  },
  {
    id: 23,
    nombre: "jett",
  },
];

export const listadoRedes = [
  {
    id: 1,
    nombre: "instagram",
    icono: "instagram",
  },
  {
    id: 2,
    nombre: "facebook",
    icono: "facebook",
  },
  {
    id: 3,
    nombre: "twitter",
    icono: "twitter-x",
  },
  {
    id: 4,
    nombre: "youtube",
    icono: "youtube",
  },
];

export const URL_FETCH_AGENTES =
  "https://valorant-api.com/v1/agents?isPlayableCharacter=true&language=es-MX";
export const URL_FETCH_ARMAS =
  "https://valorant-api.com/v1/weapons?language=es-ES";
export const URL_FETCH_MAPAS =
  "https://valorant-api.com/v1/maps?language=es-ES";

export const LS_AGENTES = "agentes";
export const LS_ARMAS = "armas";
export const LS_MAPAS = "mapas";
