import * as pt from './home-pt.locale.json';
import * as en from './home-en.locale.json';

export const homeModuleLocales = {
    home: {
        // @ts-ignore
        pt: pt.default || pt,
        // @ts-ignore
        en: en.default || en,
        // @ts-ignore
        es: es.default || es,
    }
};
