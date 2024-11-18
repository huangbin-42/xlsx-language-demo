const config = {
    noFoundTest: '',
    initKey: 'PriceTr.',
    contrastLangIndex: 1,
    defaultValueIndex: 1,
    defaultFileIndex:[0], 
    fromXlsxPath: '/Users/a605/Desktop/Plug/xlsx-language-demo/public/price_tr/土耳其分站文案翻译.xlsx',
    translate: [
        {
            targetLang: 'en',
            targetIndex: 1,
            outPath: `/Users/a605/Desktop/gate-next-monorepo/apps/price-tr/public/locales/en/price.json`,
        },
        {
            targetLang: 'tr',
            targetIndex: 2,
            outPath: `/Users/a605/Desktop/gate-next-monorepo/apps/price-tr/public/locales/tr/price.json`,
        },
       
    ],
}

export default config
