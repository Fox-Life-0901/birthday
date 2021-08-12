// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "二婶",
        "i m lengzai",
        "kokoda wish lu",
        "身体健康",
        "啊， 还有",
        "生日快乐",
        "生日快乐 ！！！",
        "喜欢的话给个五星好评呗"
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "二婶": "./imgs/1.png",
        "i m lengzai": "./imgs/2.png",
        "kokoda wish lu": "./imgs/1.png",
        "身体健康": "./imgs/1.png",
        "啊， 还有": "./imgs/1.png",
        "生日快乐": "./imgs/1.png",
        "生日快乐 ！！！": "./imgs/1.png",
        "喜欢的话给个五星好评呗": "./imgs/1.png"
        // "今天是你的生日": "./imgs/birthday.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "开始",
        play: "音乐",
        bannar_coming: "舞台",
        balloons_flying: "放气氛！",
        cake_fadein: "上蛋糕！",
        light_candle: "放火！",
        wish_message: "生日快乐！",
        story: "SURPRISE MTFK",
    }
};
