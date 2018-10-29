import * as pt from './comparar-pt.translation.json';
import * as en from './comparar-en.translation.json';
import * as es from './comparar-es.translation.json';

export const compararTranslation = {
  // @ts-ignore
  pt: pt.default || pt,
  // @ts-ignore
  en: en.default || en,
  // @ts-ignore
  es: es.default || es
};
