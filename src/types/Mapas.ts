export type ResponseAPIMapas = {
    status: number;
    data:   Mapa[];
}

export type Mapa = {
    uuid:                    string;
    displayName:             string;
    narrativeDescription:    null | string;
    tacticalDescription:     TacticalDescription | null;
    coordinates:             null | string;
    displayIcon:             null | string;
    listViewIcon:            string;
    listViewIconTall:        null | string;
    splash:                  string;
    stylizedBackgroundImage: null | string;
    premierBackgroundImage:  null | string;
    assetPath:               string;
    mapUrl:                  string;
    xMultiplier:             number;
    yMultiplier:             number;
    xScalarToAdd:            number;
    yScalarToAdd:            number;
    callouts:                Callout[] | null;
}

export type Callout = {
    regionName:      string;
    superRegionName: SuperRegionName;
    location:        Location;
}

export type Location = {
    x: number;
    y: number;
}

export type SuperRegionName = "A" | "del lado atacante" | "B" | "Mid" | "del lado defensor" | "C";

export type TacticalDescription = "A/B Sites" | "A/B/C Sites";
