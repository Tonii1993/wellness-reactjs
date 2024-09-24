import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./translations/en/translation.json";
import translationAL from "./translations/al/translation.json";
import translationIT from "./translations/it/translation.json";

const resources = {
  en: {
    translation: translationEN,
  },
  it: {
    translation: translationIT,
  },
  al: {
    translation: translationAL,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
