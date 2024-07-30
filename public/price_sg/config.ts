const config = {
    noFoundTest: '***asset***',
    initKey: 'Next.SGPrice.',
    contrastLangIndex: 1,
    defaultValueIndex: 1,
    fromXlsxPath: '/Users/a605/Desktop/Plug/xlsx-language-demo/public/price_sg/新加坡分站文案.xlsx',
    translate: [
        {
            targetLang: 'en',
            targetIndex: 1,
            outPath: `/Users/a605/Desktop/Plug/smartling_website/messages/next_price_sg.json`,
        },
        {
            targetLang: 'zh',
            targetIndex: 0,
            outPath: `/Users/a605/Desktop/Plug/smartling_website/translated/next_price_sg/next_price_sg_zh.json`,
        },
       
    ],
}

export default config
