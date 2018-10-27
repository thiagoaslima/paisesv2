import * as pt from './home-pt.translation.json';
import * as en from './home-en.translation.json';
import * as es from './home-es.translation.json';

export const homeModuleTranslation = {
  home: {
    // @ts-ignore
    pt: pt.default || pt,
    // @ts-ignore
    en: en.default || en,
    // @ts-ignore
    es: es.default || es
  }
};
