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

export const URL_FETCH_AGENTES = "https://valorant-api.com/v1/agents?isPlayableCharacter=true&language=es-MX"
export const URL_FETCH_ARMAS = "https://valorant-api.com/v1/weapons?language=es-ES"
export const URL_FETCH_MAPAS = "https://valorant-api.com/v1/maps?language=es-ES"

export const LS_AGENTES = "agentes"
export const LS_ARMAS = "armas"
export const LS_MAPAS = "mapas"