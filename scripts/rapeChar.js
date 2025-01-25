function getRapeChar(location, num = null) {
    let retVar = [
        {
            num: 0,
            name: "!rape0",
            displayName: "",
            img: "rapeman0/icon.png",
            openingLine: ["You look like you ", "need a cock in you."],
            openingImg: null,
            fight: g.rand(10, 20),
            energy: 100,
            arousal: 0,
            options: ["oral", "oral", "anal"],
            slap: true,
            color: "w",
            gender: "m",
            cocksize: 4,
            kick: "rapeman0/kick.png",
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
                        "left": 757,
                        "top": 0,
                        "width": 423,
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
            }
        },
        {
            num: 1,
            name: "!missx",
            displayName: "Mistress Anaru",
            img: "missx/icon.png",
            chat: "rape0speaker.png",
            openingLine: ["I do love breaking in", "sissies."],
            fight: g.rand(6, 12),
            energy: 100,
            arousal: 0,
            options: ["cunnilugus", "cunnilugus", "anal"],
            slap: true,
            color: "c",
            gender: "f",
            cocksize: 6,
            kick: "missx/kick.png",
            phase2: function () {
                if (rape.phases[2].c === 0) {
                    nav.button({
                        "type": "img",
                        "name": "r1004bg",
                        "left": 757,
                        "top": 0,
                        "width": 423,
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
                if (rape.rapeType === "cunnilugus") {
                    if (rape.phases[3].c === 0) {
                        nav.button({
                            "type": "img",
                            "name": "r1004bg",
                            "left": 654,
                            "top": 28,
                            "width": 565,
                            "height": 1052,
                            "image": "1004_rape/missx/phase3_oral.png"
                        }, 1004);
                        return { default: false, complete: false };
                    }
                    else if (rape.phaseChange === "phase3cover") {
                        nav.button({
                            "type": "img",
                            "name": "r1004bg",
                            "left": 0,
                            "top": 0,
                            "width": 1920,
                            "height": 1080,
                            "image": "1004_rape/missx/slap_" + gender.pronoun("f") + ".png"
                        }, 1004);
                        return { default: false, complete: false };
                    }
                    else if (rape.phaseChange === "phase3sub") {
                        nav.button({
                            "type": "img",
                            "name": "r1004bg",
                            "left": 497,
                            "top": 0,
                            "width": 1006,
                            "height": 1080,
                            "image": "1004_rape/missx/pussy.png"
                        }, 1004);
                        return { default: false, complete: false }
                    }
                }
                return { default: true, complete: true };
            },
            phase4: function () {
                if (rape.phases[4].c === 0) {
                    if (rape.rapeType === "anal") {
                        zcl.assup(650, 500, .7, "");
                        nav.button({
                            "type": "img",
                            "name": "r1004bg",
                            "left": 246,
                            "top": 75,
                            "width": 1483,
                            "height": 988,
                            "title": "Dominatrix",
                            "image": "1004_rape/missx/rap_dom1.png"
                        }, 1);
                        nav.button({
                            "type": "img",
                            "name": "r1004bg",
                            "left": 660,
                            "top": 650,
                            "width": 707,
                            "height": 178,
                            "image": "1004_rape/anal_xray.gif"
                        }, 1004);
                        return false;
                    }
                    else {
                        zcl.bj(100, 190, 1, "open", true);
                        nav.button({
                            "type": "img",
                            "name": "r1004bg",
                            "left": 509,
                            "top": 0,
                            "width": 1051,
                            "height": 1080,
                            "image": "1004_rape/missx/phase4.png"
                        }, 1004);
                        return false;
                    }
                }
                return true;
            },
            phase5: function () {
                if (rape.phases[5].c === 0) {
                    if (rape.rapeType === "anal") {
                        zcl.kill();
                        nav.button({
                            "type": "img",
                            "name": "r1004bg",
                            "left": 442,
                            "top": 0,
                            "width": 1478,
                            "height": 1080,
                            "image": "1004_rape/missx/phase5.png"
                        }, 1004);
                    }
                    else {
                        zcl.bj(100, -50, 1, "", true);
                        nav.button({
                            "type": "img",
                            "name": "r1004bg",
                            "left": 0,
                            "top": 0,
                            "width": 1920,
                            "height": 1080,
                            "image": "1004_rape/missx/phase5_oral.png"
                        }, 1004);

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
                            "left": 0,
                            "top": 0,
                            "width": 1920,
                            "height": 1080,
                            "image": "1004_rape/missx/phase6_" + gender.pronoun("f") + ".png"
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
                            "image": "1004_rape/phase6_cun_" + gender.pronoun("f") + ".png"
                        }, 1004);
                    }
                    return false;
                }
                return true;
            }
        },
        {
            num: 2,
            name: "!futa0",
            displayName: "",
            img: "futa0/icon.png",
            openingLine: ["I'm glad I found", "you. I need a place", "to put my cock!"],
            openingImg: null,
            fight: g.rand(8, 12),
            energy: 100,
            arousal: 0,
            options: ["cunnilugus", "anal", "anal"],
            slap: true,
            color: "w",
            gender: "f",
            cocksize: 3,
            kick: "rapeman0/kick.png",
            phase2: function () {
                if (rape.phases[2].c === 0) {
                    nav.button({
                        "type": "img",
                        "name": "r1004bg",
                        "left": 811,
                        "top": 0,
                        "width": 561,
                        "height": 1080,
                        "image": "1004_rape/futa0/phase2.png"
                    }, 1004);
                    nav.button({
                        "type": "img",
                        "name": "r1004bg",
                        "left": 599,
                        "top": 0,
                        "width": 423,
                        "height": 1080,
                        "image": "1004_rape/o_4_" + gender.pronoun("f") + ".png"
                    }, 1004);
                    return false;
                }
                else if (rape.phases[2].c === 1) {
                    nav.button({
                        "type": "img",
                        "name": "r1004bg",
                        "left": 476,
                        "top": 56,
                        "width": 969,
                        "height": 969,
                        "image": "1004_rape/futa0/phase2_1.png"
                    }, 1004);
                    return false;
                }
                else return true;
            },
            phase3: function () {
                if (rape.rapeType === "cunnilugus") {
                    if (rape.phases[3].c === 0) {
                        nav.button({
                            "type": "img",
                            "name": "r1004bg",
                            "left": 360,
                            "top": 0,
                            "width": 1187,
                            "height": 1080,
                            "image": "1004_rape/futa0/phase2_oral.png"
                        }, 1004);
                        return { default: false, complete: false };
                    }
                    return { default: false, complete: true };
                }
                return { default: true, complete: true };
            },
            phase4: function () {
                if (rape.phases[4].c === 0) {
                    if (rape.rapeType === "anal") {
                        nav.button({
                            "type": "img",
                            "name": "r1004bg",
                            "left": 605,
                            "top": 425,
                            "width": 1063,
                            "height": 595,
                            "image": "1004_rape/futa0/phase4_anal_bottom.png"
                        }, 1004);
                        zcl.assup(600, 500, .75, "");
                        nav.button({
                            "type": "img",
                            "name": "r1004bg",
                            "left": 605,
                            "top": 425,
                            "width": 1063,
                            "height": 595,
                            "image": "1004_rape/futa0/phase4_anal_top.png"
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
                        zcl.bj(200, 300, .5, "open", true);
                        nav.button({
                            "type": "img",
                            "name": "r1004bg",
                            "left": 652,
                            "top": 103,
                            "width": 820,
                            "height": 977,
                            "image": "1004_rape/futa0/phase4_oral.png"
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
                            "left": 605,
                            "top": 425,
                            "width": 1063,
                            "height": 595,
                            "image": "1004_rape/futa0/phase4_anal_bottom.png"
                        }, 1004);
                        zcl.assup(600, 500, .75, "");
                        nav.button({
                            "type": "img",
                            "name": "r1004bg",
                            "left": 605,
                            "top": 425,
                            "width": 1063,
                            "height": 595,
                            "image": "1004_rape/futa0/phase5_anal_top.png"
                        }, 1004);
                        levels.anal(3, false, "m", true);
                    }
                    else {
                        zcl.bj(200, 300, .5, "open", true);
                        nav.button({
                            "type": "img",
                            "name": "r1004bg",
                            "left": 652,
                            "top": 103,
                            "width": 820,
                            "height": 977,
                            "image": "1004_rape/futa0/phase5_oral.png"
                        }, 1004);
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
            }
        },
    ];
    if (num === null) {
        num = g.rand(0, retVar.length);
    }
    return retVar[num];
}

function getTrap(location, id) {
    trap = [
        {
            num: 0,
            chance: g.rand(5, 15),
            phase0: function () {
                
            }
        }
    ];
}