function getRapeChar(location, num = null) {
    var retVar, i;
    i = -1;
    if (location === "street") {
        retVar = [
            {
                num: 0,
                name: "*rape0",
                displayName: "Rapist",
                img: "rapeman0/icon.png",
                chat: "rape0speaker.png",
                openingLine: "Prepare your butthole slut!",
                openingImg: null,
                fight: g.rand(10, 30),
                energy: 100,
                rape0: "rapeman0/rape0.png",
                rape1: "rapeman0/rape1.png",
                rape2: "rapeman0/rape2.png",
                rape3: function () {
                    zcl.assup(650, 500, .7, "");
                    nav.button({
                        "type": "img",
                        "name": "r1004bg",
                        "left": 0,
                        "top": 0,
                        "width": 1920,
                        "height": 1080,
                        "image": "1004_rape/rapeman0/rape3.png"
                    }, 1004);
                    nav.button({
                        "type": "img",
                        "name": "r1004bg",
                        "left": 400,
                        "top": 80,
                        "width": 1415,
                        "height": 357,
                        "image": "1004_rape/anal_xray.gif"
                    }, 1004);
                },
                kick: "rapeman0/kick.png"
            },

        ];
    }

    if (num === null) {
        i = g.rand(0, retVar.length);
    }
    else {
        i = num;
    }

    if (i === -1)
        return null
    return retVar[i];
}