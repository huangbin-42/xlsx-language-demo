const config = {
    noFoundTest: '',
    initKey: 'Bahamas.',
    contrastLangIndex: 1,
    defaultValueIndex: 1,
    defaultFileIndex:[0], 
    fromXlsxPath: '/Users/a605/Desktop/Plug/xlsx-language-demo/public/bahamas/bahamas.xlsx',
    translate: [
        {
            targetLang: 'en',
            targetIndex: 1,
            outPath: `/Users/a605/Desktop/Next/gate-next-monorepo-1/apps/price-bahamas/public/locales/en/price.json`,
        },
        {
            targetLang: 'zh',
            targetIndex: 0,
            outPath: `/Users/a605/Desktop/Next/gate-next-monorepo-1/apps/price-bahamas/public/locales/zh/price.json`,
        },
       
    ],
}

export default config
