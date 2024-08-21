const config = {
    noFoundTest: '',
    initKey: '',
    contrastLangIndex: 0,
    defaultValueIndex: 2,
    defaultFileIndex:[0], 
    fromXlsxPath: '/Users/a605/Desktop/Plug/xlsx-language-demo/public/price_details_v2/详情改版V1.3.0.0.xlsx',
    translate: [
        {
            targetLang: 'en',
            targetIndex: 2,
            outPath: `/Users/a605/Desktop/Plug/smartling_website/messages/next_coin_details_v2.json`,
        },
        {
            targetLang: 'zh',
            targetIndex: 1,
            outPath: `/Users/a605/Desktop/Plug/smartling_website/translated/next_coin_details_v2/next_coin_details_v2_zh.json`
        },
       
    ],
}

export default config
