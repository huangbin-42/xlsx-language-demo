const config = {
    noFoundTest: '',
    initKey: 'Next.PricePrediction.',
    contrastLangIndex: 0,
    defaultValueIndex: 0,
    fromXlsxPath: '/Users/a605/Desktop/Plug/xlsx-language-demo/public/price_prediction/How to buy +prediction 多语言.xlsx',
    translate:[
        {
            targetLang: 'en',
            targetIndex: 0,
            outPath: '/Users/a605/Desktop/Plug/smartling_website/messages/nex_price_prediction.json'
        },
        {
            targetLang: 'zh',
            targetIndex: 1,
            outPath: `/Users/a605/Desktop/Plug/smartling_website/translated/nex_price_prediction/nex_price_prediction_zh.json`
        },
    ],
}

export default config