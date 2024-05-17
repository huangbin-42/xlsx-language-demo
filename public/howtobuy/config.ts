const config = {
    noFoundTest: '',
    initKey: 'Next.HowToBuy.',
    contrastLangIndex: 0,
    defaultValueIndex: 0,
    fromXlsxPath: '/Users/a605/Desktop/Plug/xlsx-language-demo/public/howtobuy/How to buy +prediction 多语言.xlsx',
    translate:[
        {
            targetLang: 'en',
            targetIndex: 0,
            outPath: `/Users/a605/Desktop/Plug/smartling_website/messages/next_how_to_buy.json`,
        },
        {
            targetLang: 'zh',
            targetIndex: 1,
            outPath: `/Users/a605/Desktop/Plug/smartling_website/translated/next_how_to_buy/next_how_to_buy_zh.json`,
        },
    ],
}

export default config