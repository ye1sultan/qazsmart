import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './locales/en/translation.json';
import translationRU from './locales/ru/translation.json';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: translationEN,
            },
            ru: {
                translation: translationRU,
            },
        },
        lng: JSON.parse(localStorage.getItem("selectedFlag"))?.lng || 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });


export default i18n;