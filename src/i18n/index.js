import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import PTPT from './locales/pt-pt.json'
import PTBR from './locales/pt-br.json'
import ENUS from './locales/en-us.json'
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
'pt-PT' : PTPT,
'pt-BR' : PTBR,
'en-US' : ENUS
}

i18n
.use(Backend)
.use(LanguageDetector)
.use(initReactI18next)
.init(
    {
        fallbackLng: 'en-US',
        interpolation: {
            escapeValue: false, 

        },
        lng: navigator.language,
        resources,
        
    });

export default i18n;