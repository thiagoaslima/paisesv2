import * as pt from './historico-pt.translation.json';
import * as en from './historico-en.translation.json';
import * as es from './historico-es.translation.json';

export const historicoTranslation = {
    // @ts-ignore
    pt: pt.default || pt,
    // @ts-ignore
    en: en.default || en,
    // @ts-ignore
    es: es.default || es
};
