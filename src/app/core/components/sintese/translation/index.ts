import * as pt from './sintese-pt.translation.json';
import * as en from './sintese-en.translation.json';
import * as es from './sintese-es.translation.json';

export const sinteseTranslation = {
    // @ts-ignore
    pt: pt.default || pt,
    // @ts-ignore
    en: en.default || en,
    // @ts-ignore
    es: es.default || es
  };
