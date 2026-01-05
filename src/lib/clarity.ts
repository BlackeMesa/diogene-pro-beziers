import Clarity from "@microsoft/clarity";

const CLARITY_PROJECT_ID = "tydsx49002";

// Initialiser Clarity
export const initClarity = () => {
  if (typeof window !== "undefined") {
    Clarity.init(CLARITY_PROJECT_ID);
  }
};

// Identifier un utilisateur (optionnel)
export const identifyUser = (customId: string, friendlyName?: string) => {
  Clarity.identify(customId, undefined, undefined, friendlyName);
};

// Ajouter un tag personnalisé
export const setClarityTag = (key: string, value: string) => {
  Clarity.setTag(key, value);
};

// Enregistrer un événement personnalisé
export const trackClarityEvent = (eventName: string) => {
  Clarity.event(eventName);
};

// Gérer le consentement cookies (RGPD)
export const setClarityConsent = (analyticsGranted: boolean = true) => {
  Clarity.consent(analyticsGranted);
};

// Marquer une session comme prioritaire
export const upgradeClaritySession = (reason: string) => {
  Clarity.upgrade(reason);
};
