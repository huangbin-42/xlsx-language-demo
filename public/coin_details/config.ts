const config = {
    noFoundTest: '',
    initKey: 'Next.Price.',
    contrastLangIndex: 1,
    defaultValueIndex: 1,
    fromXlsxPath: "/Users/a605/Desktop/Plug/xlsx-language-demo/public/coin_details/行情改版、行情异动、代币详情页文案 5月16.xlsx",
    translate:[
        {
            targetLang: 'en',
            targetIndex: 1,
            outPath: `/Users/a605/Desktop/Plug/smartling_website/messages/next_coin_details.json`,
        },
        {
            targetLang: 'zh',
            targetIndex: 0,
            outPath: `/Users/a605/Desktop/Plug/smartling_website/translated/next_coin_details/next_coin_details_zh.json`,
        },
    ],
    defaultFileIndex:[1], 
}

export default config