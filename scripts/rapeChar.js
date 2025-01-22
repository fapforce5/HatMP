function getRapeChar(location, num = null) {
    var retVar, i;
    num = 0;
    i = -1;
    if (location === "street") {
        retVar = [
            {
                num: 0,
                name: "!rape0",
                displayName: "",
                img: "rapeman0/icon.png",
                openingLine: ["You look like you ", "need a cock in you."],
                openingImg: null,
                fight: g.rand(13, 30),
                energy: 100,
                arousal: 0,
                options: ["oral", "oral", "anal"],
                slap: true,
                color: "w",
                gender: "m",
                cocksize: 4,
                phase2: function () {
                    if (rape.phases[2].c === 0) {
                        nav.button({
                            "type": "img",
                            "name": "r1004bg",
                            "left": 0,
                            "top": 0,
                            "width": 1920,
                            "height": 1080,
                            "image": "1004_rape/rapeman0/rape0.png"
                        }, 1004);
                        nav.button({
                            "type": "img",
                            "name": "r1004bg",
                            "left": 0,
                            "top": 0,
                            "width": 1920,
                            "height": 1080,
                            "image": "1004_rape/o_4_" + gender.pronoun("f") + ".png"
                        }, 1004);
                        return false;
                    }
                    else if (rape.phases[2].c === 1) {
                        nav.button({
                            "type": "img",
                            "name": "r1004bg",
                            "left": 0,
                            "top": 0,
                            "width": 1920,
                            "height": 1080,
                            "image": "1004_rape/rapeman0/rape1.png"
                        }, 1004);
                        return false;
                    }
                    else return true;
                },
                phase3: function () {
                    return { default: true, complete: true };
                },
                phase4: function () {
                    if (rape.phases[4].c === 0) {
                        if (rape.rapeType === "anal") {
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
                        }
                        else {
                            zcl.bj(0, 200, .7, "open", true);
                            nav.button({
                                "type": "img",
                                "name": "r1004bg",
                                "left": 423,
                                "top": 0,
                                "width": 711,
                                "height": 1080,
                                "image": "1004_rape/rapeman0/bj0.png"
                            }, 1004);
                        }
                        return false;
                    }
                    return true;
                },
                phase5: function () {
                    if (rape.phases[5].c === 0) {
                        if (rape.rapeType === "anal") {
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
                                "left": 528,
                                "top": 227,
                                "width": 638,
                                "height": 622,
                                "image": "1004_rape/rapeman0/rape4.png"
                            }, 1004);
                            levels.anal(4, false, "m", true);
                        }
                        else {
                            zcl.bj(100, 400, 1, "w", true);
                            nav.button({
                                "type": "img",
                                "name": "r1004bg",
                                "left": 801,
                                "top": 462,
                                "width": 469,
                                "height": 557,
                                "image": "1004_rape/rapeman0/oralcum.png"
                            }, 1004);
                            levels.oralGive(4, true, false, "m");
                        }
                        return false;
                    }
                    return true;
                },
                phase6: function () {
                    if (rape.phases[6].c === 0) {
                        if (rape.rapeType === "anal") {
                            zcl.kill();
                            nav.button({
                                "type": "img",
                                "name": "r1004bg",
                                "left": 743,
                                "top": 725,
                                "width": 619,
                                "height": 427,
                                "image": "1004_rape/rapeman0/rape5.png"
                            }, 1004);
                        }
                        else {
                            zcl.kill();
                            nav.button({
                                "type": "img",
                                "name": "r1004bg",
                                "left": 456,
                                "top": 0,
                                "width": 1084,
                                "height": 1080,
                                "image": "1004_rape/phase6_oral_" + gender.pronoun("f") + ".png"
                            }, 1004);
                        }
                        return false;
                    }
                    return true;
                },
                kick: "rapeman0/kick.png"
            },
            {
                num: 1,
                name: "!missx",
                displayName: "Mistress Anaru",
                img: "missx/icon.png",
                chat: "rape0speaker.png",
                openingLine: "I do love breaking in sissies. ",
                openingImg: null,
                fight: g.rand(8, 25),
                energy: 100,
                color: "w",
                rip: true,
                slap: false,
                phase2: function () {
                    if (rape.phases[2].c === 0) {
                        nav.button({
                            "type": "img",
                            "name": "r1004bg",
                            "left": 0,
                            "top": 0,
                            "width": 1920,
                            "height": 1080,
                            "image": "1004_rape/o_4_" + gender.pronoun("f") + ".png"
                        }, 1004);
                        nav.button({
                            "type": "img",
                            "name": "r1004bg",
                            "left": 118,
                            "top": 0,
                            "width": 878,
                            "height": 1080,
                            "image": "1004_rape/missx/phase2.png"
                        }, 1004);
                        return false;
                    }
                    return true;
                },
                phase3: function () {
                    if (rape.phases[3].c === 0) {
                        zcl.assup(650, 500, .7, "");
                        nav.button({
                            "type": "img",
                            "name": "fameRandomEvent",
                            "left": 246,
                            "top": 75,
                            "width": 1483,
                            "height": 988,
                            "title": "Dominatrix",
                            "image": "1001_rand/rap_dom1.png"
                        }, 1004);
                        //nav.button({
                        //    "type": "img",
                        //    "name": "r1004bg",
                        //    "left": 400,
                        //    "top": 80,
                        //    "width": 1415,
                        //    "height": 357,
                        //    "image": "1004_rape/anal_xray.gif"
                        //}, 1004);
                        return false;
                    }
                    return true;
                },
                phase4: function () {
                    if (rape.phases[4].c === 0) {
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
                            "left": 528,
                            "top": 227,
                            "width": 638,
                            "height": 622,
                            "image": "1004_rape/rapeman0/rape4.png"
                        }, 1004);
                        levels.anal(4, false, "m", true);
                        return false;
                    }
                    return true;
                },
                phase5: function () {
                    if (rape.phases[5].c === 0) {
                        zcl.kill();
                        nav.button({
                            "type": "img",
                            "name": "r1004bg",
                            "left": 743,
                            "top": 725,
                            "width": 619,
                            "height": 427,
                            "image": "1004_rape/rapeman0/rape5.png"
                        }, 1004);
                        return false;
                    }
                    return true;
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