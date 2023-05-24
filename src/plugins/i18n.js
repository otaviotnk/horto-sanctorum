import { createI18n } from "vue-i18n"
import messages from '@intlify/unplugin-vue-i18n/messages'

export const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: window.navigator.language.toLowerCase() || 'it-ele',
    // locale: 'la-la',
    fallbackLocale: 'en',
    availableLocales: ['pt-br', 'en'],
    messages: messages
});
