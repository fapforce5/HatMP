function getRapeChar(location, num = null) {
    var retVar, i;
    i = -1;
    if (location === "street") {
        retVar = [
            {
                num: 0,
                name: "*rape0",
                displayName: "Rapist",
                img: "rape0.png",
                chat: "rape0speaker.png",
                openingLine: "Prepare your butthole slut!",
                openingImg: null,
                fight: g.rand(10, 30),
                energy: 100,
                rape0: "rape0_first.png",
            },

        ];
    }

    if (num === null) {
        i = g.rand(0, retVar.length);
    }
    else {
        for (j = 0; j < retVar.length; j++) {
            if (j.num === num) {
                i = j;
                break;
            }
        }
    }

    if (i === -1)
        return null
    return retVar[i];
}