export type RespuestaAPIAgentes = {
    status: number;
    data:   Agente[];
}

export type Agente = {
    uuid:                      string;
    displayName:               string;
    description:               string;
    developerName:             string;
    characterTags:             string[] | null;
    displayIcon:               string;
    displayIconSmall:          string;
    bustPortrait:              string;
    fullPortrait:              string;
    fullPortraitV2:            string;
    killfeedPortrait:          string;
    background:                string;
    backgroundGradientColors:  string[];
    assetPath:                 string;
    isFullPortraitRightFacing: boolean;
    isPlayableCharacter:       boolean;
    isAvailableForTest:        boolean;
    isBaseContent:             boolean;
    role:                      Role;
    recruitmentData:           RecruitmentData | null;
    abilities:                 Ability[];
    voiceLine:                 null;
}

export type Ability = {
    slot:        Slot;
    displayName: string;
    description: string;
    displayIcon: null | string;
}

export type Slot = "Ability1" | "Ability2" | "Grenade" | "Ultimate" | "Passive";

export type RecruitmentData = {
    counterId:              string;
    milestoneId:            string;
    milestoneThreshold:     number;
    useLevelVpCostOverride: boolean;
    levelVpCostOverride:    number;
    startDate:              Date;
    endDate:                Date;
}

export type Role = {
    uuid:        string;
    displayName: DisplayName;
    description: string;
    displayIcon: string;
    assetPath:   string;
}

export type DisplayName = "Iniciador" | "Centinela" | "Duelista" | "Controlador";
