function getRapeChar(location, num = null) {
    let retVar = [
        {
            num: 0,
            name: "!rape0",
            displayName: "",
            location: ["street"],
            img: "rapeman0/icon.png",
            openingLine: ["You look like you ", "need a cock in you."],
            openingImg: null,
            fight: g.rand(8, 15),
            energy: 100,
            arousal: 0,
            options: ["oral", "oral", "anal"],
            slap: true,
            color: "w",
            gender: "m",
            cocksize: 4,
            kick: "rapeman0/kick.png",
            phase0: function () { return { default: true, complete: null }; },
            phase1: function () { return { default: true, complete: null }; },
            phase2: function () { return { default: true, complete: null }; },
            phase3: function () {
                if (rape.phases[3].c === 0) {
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
                nav.button({
                    "type": "img",
                    "name": "r1004bg",
                    "left": 0,
                    "top": 0,
                    "width": 1920,
                    "height": 1080,
                    "image": "1004_rape/rapeman0/rape1.png"
                }, 1004);
                return true;
            },
            phase4: function(){
                return { default: true, complete: null };
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
                            "left": 400,
                            "top": 80,
                            "width": 1415,
                            "height": 357,
                            "image": "1004_rape/anal_xray.gif"
                        }, 1004);
                    }
                    else {
                        zcl.bj(250, 400, .6, "open", true);
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
            phase6: function () {
                if (rape.phases[6].c === 0) {
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
            phase7: function () {
                return { default: true };
            }
        },
        {
            num: 1,
            name: "!missx",
            displayName: "Mistress Anaru",
            location: ["street"],
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
            phase0: function () { return { default: true, complete: true }; },
            phase1: function () { return { default: true, complete: true }; },
            phase2: function () { return { default: true, complete: null }; },
            phase3: function () {
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
                    return true;
            },
            phase4: function () {
                if (rape.rapeType === "cunnilugus") {
                    if (rape.phases[4].c === 0) {
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
                    else if (rape.phaseChange === "phase3sub" || rape.phaseChange === "limp" || rape.phaseChange === "struggle") {
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
                return { default: false, complete: true };
            },
            phase5: function () {
                if (rape.phases[5].c === 0) {
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
            phase6: function () {
                if (rape.phases[6].c === 0) {
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
            phase7: function () {
                if (rape.phases[7].c === 0) {
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
            location: ["street", "forest"],
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
            phase0: function () { return { default: true, complete: true }; },
            phase1: function () { return { default: true, complete: true }; },
            phase2: function () { return { default: true, complete: null }; },
            phase3: function () {
                if (rape.phases[3].c === 0) {
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
                nav.button({
                    "type": "img",
                    "name": "r1004bg",
                    "left": 476,
                    "top": 56,
                    "width": 969,
                    "height": 969,
                    "image": "1004_rape/futa0/phase2_1.png"
                }, 1004);
                return true;
            },
            phase4: function () {
                if (rape.rapeType === "cunnilugus") {
                    if (rape.phases[4].c === 0) {
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
            phase6: function () {
                if (rape.phases[6].c === 0) {
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
            phase7: function () {
                return { default: true };
            }
        },
        {
            num: 3,
            name: "!plant",
            displayName: "",
            location: ["forest"],
            img: "plant/icon.png",
            openingLine: ["I'm glad I found", "you. I need a place", "to put my cock!"],
            openingImg: null,
            fight: g.rand(10, 15),
            energy: 100,
            arousal: 0,
            options: ["anal"],
            slap: true,
            color: "w",
            gender: "f",
            cocksize: 6,
            kick: null,
            phase0: function () {
                if (rape.phase === 0) {
                    nav.button({
                        "type": "img",
                        "name": "r1004bg",
                        "left": 0,
                        "top": 0,
                        "width": 1920,
                        "height": 1080,
                        "image": "1004_rape/plant/p0_b.png"
                    }, 1004);
                    zcl.displayMain(-1200, 400, .3, "clothes", false);
                    nav.button({
                        "type": "img",
                        "name": "r1004bg",
                        "left": 0,
                        "top": 0,
                        "width": 1920,
                        "height": 1080,
                        "image": "1004_rape/plant/p0_f.png"
                    }, 1004);
                    return { default: false, complete: false };
                }
                else return { default: false, complete: true };
            },
            phase1: function () {
                zcl.kill();
                if (rape.phases[1].c === 0) {
                    let img = "b_";
                    if (cl.c.panties !== null)
                        img += "p_";
                    else if (cl.c.chastity !== null)
                        img += "c_";
                    else
                        img += "n_";
                    img += (cl.c.chest > 2 ? "f" : "m") + ".png";
                    nav.button({
                        "type": "img",
                        "name": "r1004bg",
                        "left": 0,
                        "top": 0,
                        "width": 1920,
                        "height": 1080,
                        "image": "1004_rape/plant/phase1_b.png"
                    }, 1004);
                    nav.button({
                        "type": "img",
                        "name": "r1004bg",
                        "left": 511,
                        "top": 0,
                        "width": 943,
                        "height": 1080,
                        "image": "1004_rape/plant/" + img
                    }, 1004);
                    nav.button({
                        "type": "img",
                        "name": "r1004bg",
                        "left": 0,
                        "top": 0,
                        "width": 1920,
                        "height": 1080,
                        "image": "1004_rape/plant/phase1_f.png"
                    }, 1004);
                    return { default: false, complete: false };
                }
                else
                    return { default: false, complete: true };
            },
            phase2: function () {
                if (rape.phases[2].c === 0) {
                    nav.button({
                        "type": "img",
                        "name": "r1004bg",
                        "left": 0,
                        "top": 0,
                        "width": 1920,
                        "height": 1080,
                        "image": "1004_rape/plant/phase2_panties.png"
                    }, 1004);
                    return { default: false, complete: false };
                }
                return { default: false, complete: true };
            },
            phase3: function () {
                zcl.kill();
                let img = "b_";
                if (cl.c.panties !== null)
                    img += "p_";
                else if (cl.c.chastity !== null)
                    img += "c_";
                else
                    img += "n_";
                img += (cl.c.chest > 2 ? "f" : "m") + ".png";

                if (rape.phases[3].c === 0) {
                    nav.button({
                        "type": "img",
                        "name": "r1004bg",
                        "left": 511,
                        "top": 0,
                        "width": 943,
                        "height": 1080,
                        "image": "1004_rape/plant/" + img
                    }, 1004);
                    nav.button({
                        "type": "img",
                        "name": "r1004bg",
                        "left": 0,
                        "top": 0,
                        "width": 1920,
                        "height": 1080,
                        "image": "1004_rape/plant/phase3_0.png"
                    }, 1004);
                    return false;
                }
                else if (rape.phases[3].c === 1) {
                    nav.button({
                        "type": "img",
                        "name": "r1004bg",
                        "left": 0,
                        "top": 0,
                        "width": 1920,
                        "height": 1080,
                        "image": "1004_rape/plant/phase3_1_" + gender.pronoun("f") + ".png"
                    }, 1004);
                    return false;
                }
                else if (rape.phases[3].c > 1 && rape.phases[3].c < 7) {
                    nav.button({
                        "type": "img",
                        "name": "r1004bg",
                        "left": 0,
                        "top": 0,
                        "width": 1920,
                        "height": 1080,
                        "image": "1004_rape/plant/phase3_" + (rape.phases[3].c) + ".png"
                    }, 1004);
                    if (cl.c.chastity !== null)
                        nav.button({
                            "type": "img",
                            "name": "r1004bg",
                            "left": 915,
                            "top": 470,
                            "width": 189,
                            "height": 238,
                            "image": "1004_rape/plant/phase3_2_chastity.png"
                        }, 1004);
                    if (rape.phases[3].c === 6)
                        return true;
                    return false;
                }
                else {
                    return true;
                }
            },
            phase4: function () {
                return { default: false, complete: true };
            },
            phase5: function () {
                if (rape.phases[5].c === 0) {
                    let img = "b_";
                    let chest = (cl.c.chest > 2 ? "f" : "m") + ".png";
                    if (cl.c.chastity !== null)
                        img += "c_";
                    else
                        img += "n_";
                    img += chest
                    nav.button({
                        "type": "img",
                        "name": "r1004bg",
                        "left": 511,
                        "top": 0,
                        "width": 943,
                        "height": 1080,
                        "image": "1004_rape/plant/" + img
                    }, 1004);
                    nav.button({
                        "type": "img",
                        "name": "r1004bg",
                        "left": 0,
                        "top": 0,
                        "width": 1920,
                        "height": 1080,
                        "image": "1004_rape/plant/phase4_" + chest
                    }, 1004);
                    nav.button({
                        "type": "img",
                        "name": "r1004bg",
                        "left": 400,
                        "top": 600,
                        "width": 350,
                        "height": 350,
                        "image": "1004_rape/plant/phase4.gif"
                    }, 1004);
                    return false;
                }
                return true;
            },
            phase6: function () {
                if (rape.phases[6].c === 0) {
                    nav.button({
                        "type": "img",
                        "name": "r1004bg",
                        "left": 0,
                        "top": 0,
                        "width": 1920,
                        "height": 1080,
                        "image": "1004_rape/plant/phase5.png"
                    }, 1004);
                    return false;
                }
                return true;
            },
            phase7: function () {
                if (rape.phases[7].c === 0) {
                    levels.anal(6, false, "m", true, "plant");
                    levels.oralGive(5, true, false, "m");
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
            num: 4,
            name: "!wolf",
            displayName: "",
            location: ["forest"],
            img: "wolf2/icon.png",
            openingLine: ["Grrrrr"],
            openingImg: null,
            fight: g.rand(10, 15),
            energy: 100,
            arousal: 0,
            options: ["anal"],
            slap: true,
            color: "w",
            gender: "m",
            cocksize: 4,
            kick: null,
            phase0: function () {
                if (rape.phase === 0) {
                    nav.button({
                        "type": "img",
                        "name": "r1004bg",
                        "left": 299,
                        "top": 556,
                        "width": 1458,
                        "height": 524,
                        "image": "1004_rape/wolf2/phase0.png"
                    }, 1004);
                    zcl.displayMain(250, 800, .12, "clothes", true);
                    return { default: false, complete: false };
                }
                else return { default: false, complete: true };
            },
            phase1: function () {
                let wearing = cl.wearing().crossdressing ? "f" : "m";
                zcl.kill();
                cl.c.shirt = cl.c.pants = cl.c.pj = cl.c.swimsuit = cl.c.dress = null;
                    zcl.displayMain(250, 800, .12, "clothes", true);
                    nav.button({
                        "type": "img",
                        "name": "r1004bg",
                        "left": 0,
                        "top": 526,
                        "width": 1868,
                        "height": 554,
                        "image": "1004_rape/wolf2/phase1_" + wearing + ".png"
                    }, 1004);
                return { default: false, complete: false };
            },
            phase2: function () {
                zcl.assup(650, 600, .6, "", true);
                nav.button({
                    "type": "img",
                    "name": "r1004bg",
                    "left": 729,
                    "top": 385,
                    "width": 935,
                    "height": 677,
                    "image": "1004_rape/wolf2/phase2_" + cl.pantiesTxt() + ".png"
                }, 1004);
                return { default: false, complete: false };
            },
            phase3: function () {
                zcl.kill();
                let img = "m";
                if (cl.c.hairLength > 2)
                    img = "f";

                nav.button({
                    "type": "img",
                    "name": "r1004bg",
                    "left": 175,
                    "top": 406,
                    "width": 1522,
                    "height": 674,
                    "image": "1004_rape/wolf2/phase3_" + img + ".png"
                }, 1004);
                return { default: false, complete: true };
            },
            phase4: function () {
                let img = "m";
                if (cl.c.hairLength > 2)
                    img = "f";
                if (rape.phases[4].c === 0) {
                    nav.button({
                        "type": "img",
                        "name": "r1004bg",
                        "left": 0,
                        "top": 0,
                        "width": 1920,
                        "height": 1080,
                        "image": "1004_rape/wolf2/phase2_0_" + img + ".png"
                    }, 1004);
                    return { default: false, complete: false };
                }
                else if (rape.phases[4].c === 1) {
                    nav.button({
                        "type": "img",
                        "name": "r1004bg",
                        "left": 0,
                        "top": 0,
                        "width": 1920,
                        "height": 1080,
                        "image": "1004_rape/wolf2/phase2_1_" + img + ".png"
                    }, 1004);
                    return { default: false, complete: false };
                }
                return { default: false, complete: true };
            },
            phase5: function () {

                if (rape.phases[5].c === 0) {
                    nav.button({
                        "type": "img",
                        "name": "r1004bg",
                        "left": 0,
                        "top": 0,
                        "width": 1920,
                        "height": 1080,
                        "image": "1004_rape/wolf2/phase5_u.png"
                    }, 1004);
                    zcl.double(370, 600, .5, "open", false)
                    nav.button({
                        "type": "img",
                        "name": "r1004bg",
                        "left": 0,
                        "top": 0,
                        "width": 1920,
                        "height": 1080,
                        "image": "1004_rape/wolf2/phase5_t.png"
                    }, 1004);
                    return false;
                }
                return true;
            },
            phase6: function () {
                if (rape.phases[6].c === 0) {
                    levels.anal(5, false, "m", true, "dog");
                    levels.oralGive(4, true, false, "m");
                    zcl.double(250, 700, 1, "", false);

                    nav.button({
                        "type": "img",
                        "name": "r1004bg",
                        "left": 0,
                        "top": 0,
                        "width": 1920,
                        "height": 1080,
                        "image": "1004_rape/wolf2/phase6_0.png"
                    }, 1004);
                    return false;
                }
                else if (rape.phases[6].c === 1) {
                    zcl.double(-100, -200, 1, "", false);
                    nav.button({
                        "type": "img",
                        "name": "r1004bg",
                        "left": 0,
                        "top": 0,
                        "width": 1920,
                        "height": 1080,
                        "image": "1004_rape/wolf2/phase6_1.png"
                    }, 1004);
                    return false;
                }
                return true;
            },
            phase7: function () {
                return { default: true };
            }
        },
        {
            num: 5,
            name: "!wolf",
            displayName: "",
            location: ["forest"],
            img: "wolf2/icon.png",
            openingLine: ["Grrrrr"],
            openingImg: null,
            fight: g.rand(7, 12),
            energy: 100,
            arousal: 0,
            options: ["oral", "anal", "anal"],
            slap: true,
            color: "d",
            gender: "m",
            cocksize: 4,
            kick: null,
            phase0: function () {
                if (rape.phases[0].c === 0) {
                    switch (g.rand(0, 3)) {
                        case 0: rape.modifier = "w"; break;
                        case 1: rape.modifier = "b"; break;
                        case 2: rape.modifier = "r"; break;
                    }
                    
                    nav.button({
                        "type": "img",
                        "name": "r1004bg",
                        "left": 883,
                        "top": 440,
                        "width": 464,
                        "height": 570,
                        "image": "1004_rape/wolf2/single_phase0_" + rape.modifier + ".png"
                    }, 1004);
                    zcl.displayMain(250, 500, .12, "clothes", true);
                    return { default: false, complete: false };
                }
                else return { default: false, complete: true };
            },
            phase1: function () {
                let wearing = cl.wearing().crossdressing ? "f" : "m";
                zcl.kill();
                cl.c.shirt = cl.c.pants = cl.c.pj = cl.c.swimsuit = cl.c.dress = null;
                zcl.displayMain(250, 500, .12, "clothes", true);
                nav.button({
                    "type": "img",
                    "name": "r1004bg",
                    "left": 339,
                    "top": 414,
                    "width": 1150,
                    "height": 666,
                    "image": "1004_rape/wolf2/single_phase1_" + rape.modifier + ".png"
                }, 1004);
                nav.button({
                    "type": "img",
                    "name": "r1004bg",
                    "left": 339,
                    "top": 414,
                    "width": 1150,
                    "height": 666,
                    "image": "1004_rape/wolf2/single_phase1_" + wearing + ".png"
                }, 1004);
                return { default: false, complete: false };
            },
            phase2: function () {
                zcl.assup(650, 600, .6, "", true);
                nav.button({
                    "type": "img",
                    "name": "r1004bg",
                    "left": 1064,
                    "top": 507,
                    "width": 600,
                    "height": 554,
                    "image": "1004_rape/wolf2/single_phase2_" + rape.modifier + ".png"
                }, 1004);
                return { default: false, complete: false };
            },
            phase3: function () {
                zcl.kill();
                let hairlength = cl.c.hairLength > 2 ? "f" : "m";
                nav.button({
                    "type": "img",
                    "name": "r1004bg",
                    "left": 347,
                    "top": 363,
                    "width": 936,
                    "height": 717,
                    "image": "1004_rape/wolf2/single_phase3_" + hairlength + ".png"
                }, 1004);
                nav.button({
                    "type": "img",
                    "name": "r1004bg",
                    "left": 347,
                    "top": 363,
                    "width": 936,
                    "height": 717,
                    "image": "1004_rape/wolf2/single_phase3_" + rape.modifier + ".png"
                }, 1004);
                return { default: false, complete: true };
            },
            phase4: function () {
                return { default: true, complete: null };
            },
            phase5: function () {
                if (rape.phases[5].c === 0) {
                    if (rape.rapeType === "oral") {
                        zcl.double(370, 600, .5, "open", false);
                        nav.button({
                            "type": "img",
                            "name": "r1004bg",
                            "left": 0,
                            "top": 0,
                            "width": 1920,
                            "height": 1080,
                            "image": "1004_rape/wolf2/single_phase5_oral_" + rape.modifier + ".png"
                        }, 1004);
                    }
                    else {
                        zcl.assup(550, 300, .8, true);
                        nav.button({
                            "type": "img",
                            "name": "r1004bg",
                            "left": 0,
                            "top": 0,
                            "width": 1920,
                            "height": 1080,
                            "image": "1004_rape/wolf2/single_phase5_anal_" + rape.modifier + ".png"
                        }, 1004);
                    }

                    return false;
                }
                return true;
            },
            phase6: function () {
                if (rape.phases[6].c === 0) {
                    if (rape.rapeType === "oral") {
                        levels.oralGive(4, true, false, "m");
                        zcl.double(250, 700, 1, "", false);
                        nav.button({
                            "type": "img",
                            "name": "r1004bg",
                            "left": 0,
                            "top": 0,
                            "width": 1920,
                            "height": 1080,
                            "image": "1004_rape/wolf2/single_phase6_oral_" + rape.modifier + ".png"
                        }, 1004);
                    }
                    else {
                        levels.anal(5, false, "m", true, "dog");
                        zcl.double(-100, -200, 1, "", false);
                        nav.button({
                            "type": "img",
                            "name": "r1004bg",
                            "left": 0,
                            "top": 0,
                            "width": 1920,
                            "height": 1080,
                            "image": "1004_rape/wolf2/phase6_1.png"
                        }, 1004);
                    }
                    return false;
                }
                return true;
            },
            phase7: function () {
                return { default: true };
            }
        },
        {
            num: 6,
            name: "cult",
            displayName: "",
            location: ["street","forest","cave"],
            img: "cult/icon.png",
            openingLine: ["I shall free your ass"],
            openingImg: null,
            fight: g.rand(8, 15),
            energy: 100,
            arousal: 0,
            options: ["oral", "anal"],
            slap: true,
            color: "w",
            gender: "m",
            cocksize: 3,
            kick: "rapeman0/kick.png",
            phase0: function () {
                rape.modifier = 0;
                return { default: true, complete: null };
            },
            phase1: function () { return { default: true, complete: null }; },
            phase2: function () { return { default: true, complete: null }; },
            phase3: function () {
                if (rape.phases[3].c === 0) {
                    nav.button({
                        "type": "img",
                        "name": "r1004bg",
                        "left": 496,
                        "top": 0,
                        "width": 875,
                        "height": 1080,
                        "image": "1004_rape/cult/phase_3_" + rape.modifier + ".png"
                    }, 1004);
                    zcl.displayMain(400, 500, .3, "clothes", true);
                    return true;
                }
            },
            phase4: function () {
                return { default: true, complete: null };
            },
            phase5: function () {
                if (rape.phases[5].c === 0) {
                    if (rape.rapeType === "anal") {
                        zcl.assup(650, 500, .7, "");
                        nav.button({
                            "type": "img",
                            "name": "r1004bg",
                            "left": 628,
                            "top": 332,
                            "width": 991,
                            "height": 736,
                            "image": "1004_rape/cult/phase5_anal_" + rape.modifier + ".png"
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
                        nav.button({
                            "type": "img",
                            "name": "r1004bg",
                            "left": 535,
                            "top": 0,
                            "width": 648,
                            "height": 1080,
                            "image": "1004_rape/cult/phase5_oral_0_b_0.png"
                        }, 1004);
                        zcl.bj(0, 200, .7, "open", true);
                        nav.button({
                            "type": "img",
                            "name": "r1004bg",
                            "left": 535,
                            "top": 0,
                            "width": 648,
                            "height": 1080,
                            "image": "1004_rape/cult/phase5_oral_0_f_" + rape.modifier + ".png"
                        }, 1004);
                    }
                    return false;
                }
                return true;
            },
            phase6: function () {
                if (rape.phases[6].c === 0) {
                    if (rape.rapeType === "anal") {
                        zcl.assup(650, 500, .7, "");
                        nav.button({
                            "type": "img",
                            "name": "r1004bg",
                            "left": 628,
                            "top": 332,
                            "width": 991,
                            "height": 736,
                            "image": "1004_rape/cult/phase6_anal_" + rape.modifier + ".png"
                        }, 1004);
                        if(rape.modifier === 2)
                            levels.anal(4, false, "m", true);
                        else
                            levels.anal(3, false, "m", true);
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
            phase7: function () {
                return { default: true };
            }
        },
        {
            num: 7,
            name: "cult",
            displayName: "",
            location: ["street", "forest", "cave"],
            img: "cult/icon.png",
            openingLine: ["I shall free your ass"],
            openingImg: null,
            fight: g.rand(8, 15),
            energy: 100,
            arousal: 0,
            options: ["oral", "anal"],
            slap: true,
            color: "w",
            gender: "m",
            cocksize: 3,
            kick: "rapeman0/kick.png",
            phase0: function () {
                rape.modifier = 1;
                return { default: true, complete: null };
            },
            phase1: function () { return { default: true, complete: null }; },
            phase2: function () { return { default: true, complete: null }; },
            phase3: function () {
                if (rape.phases[3].c === 0) {
                    nav.button({
                        "type": "img",
                        "name": "r1004bg",
                        "left": 496,
                        "top": 0,
                        "width": 875,
                        "height": 1080,
                        "image": "1004_rape/cult/phase_3_" + rape.modifier + ".png"
                    }, 1004);
                    zcl.displayMain(400, 500, .3, "clothes", true);
                    return true;
                }
            },
            phase4: function () {
                return { default: true, complete: null };
            },
            phase5: function () {
                if (rape.phases[5].c === 0) {
                    if (rape.rapeType === "anal") {
                        zcl.assup(650, 500, .7, "");
                        nav.button({
                            "type": "img",
                            "name": "r1004bg",
                            "left": 628,
                            "top": 332,
                            "width": 991,
                            "height": 736,
                            "image": "1004_rape/cult/phase5_anal_" + rape.modifier + ".png"
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
                        nav.button({
                            "type": "img",
                            "name": "r1004bg",
                            "left": 535,
                            "top": 0,
                            "width": 648,
                            "height": 1080,
                            "image": "1004_rape/cult/phase5_oral_0_b_0.png"
                        }, 1004);
                        zcl.bj(0, 200, .7, "open", true);
                        nav.button({
                            "type": "img",
                            "name": "r1004bg",
                            "left": 535,
                            "top": 0,
                            "width": 648,
                            "height": 1080,
                            "image": "1004_rape/cult/phase5_oral_0_f_" + rape.modifier + ".png"
                        }, 1004);
                    }
                    return false;
                }
                return true;
            },
            phase6: function () {
                if (rape.phases[6].c === 0) {
                    if (rape.rapeType === "anal") {
                        zcl.assup(650, 500, .7, "");
                        nav.button({
                            "type": "img",
                            "name": "r1004bg",
                            "left": 628,
                            "top": 332,
                            "width": 991,
                            "height": 736,
                            "image": "1004_rape/cult/phase6_anal_" + rape.modifier + ".png"
                        }, 1004);
                        if (rape.modifier === 2)
                            levels.anal(4, false, "m", true);
                        else
                            levels.anal(3, false, "m", true);
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
            phase7: function () {
                return { default: true };
            }
        },
        {
            num: 8,
            name: "cult",
            displayName: "",
            location: ["street", "forest", "cave"],
            img: "cult/icon.png",
            openingLine: ["I shall free your ass"],
            openingImg: null,
            fight: g.rand(8, 15),
            energy: 100,
            arousal: 0,
            options: ["oral", "anal"],
            slap: true,
            color: "b",
            gender: "m",
            cocksize: 4,
            kick: "rapeman0/kick.png",
            phase0: function () {
                rape.modifier = 2;
                return { default: true, complete: null };
            },
            phase1: function () { return { default: true, complete: null }; },
            phase2: function () { return { default: true, complete: null }; },
            phase3: function () {
                if (rape.phases[3].c === 0) {
                    nav.button({
                        "type": "img",
                        "name": "r1004bg",
                        "left": 496,
                        "top": 0,
                        "width": 875,
                        "height": 1080,
                        "image": "1004_rape/cult/phase_3_" + rape.modifier + ".png"
                    }, 1004);
                    zcl.displayMain(400, 500, .3, "clothes", true);
                    return true;
                }
            },
            phase4: function () {
                return { default: true, complete: null };
            },
            phase5: function () {
                if (rape.phases[5].c === 0) {
                    if (rape.rapeType === "anal") {
                        zcl.assup(650, 500, .7, "");
                        nav.button({
                            "type": "img",
                            "name": "r1004bg",
                            "left": 628,
                            "top": 332,
                            "width": 991,
                            "height": 736,
                            "image": "1004_rape/cult/phase5_anal_" + rape.modifier + ".png"
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
                        nav.button({
                            "type": "img",
                            "name": "r1004bg",
                            "left": 535,
                            "top": 0,
                            "width": 648,
                            "height": 1080,
                            "image": "1004_rape/cult/phase5_oral_0_b_0.png"
                        }, 1004);
                        zcl.bj(0, 200, .7, "open", true);
                        nav.button({
                            "type": "img",
                            "name": "r1004bg",
                            "left": 535,
                            "top": 0,
                            "width": 648,
                            "height": 1080,
                            "image": "1004_rape/cult/phase5_oral_0_f_" + rape.modifier + ".png"
                        }, 1004);
                    }
                    return false;
                }
                return true;
            },
            phase6: function () {
                if (rape.phases[6].c === 0) {
                    if (rape.rapeType === "anal") {
                        zcl.assup(650, 500, .7, "");
                        nav.button({
                            "type": "img",
                            "name": "r1004bg",
                            "left": 628,
                            "top": 332,
                            "width": 991,
                            "height": 736,
                            "image": "1004_rape/cult/phase6_anal_" + rape.modifier + ".png"
                        }, 1004);
                        if (rape.modifier === 2)
                            levels.anal(4, false, "m", true);
                        else
                            levels.anal(3, false, "m", true);
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
            phase7: function () {
                return { default: true };
            }
        },
        {
            num: 9,
            name: "!futa1",
            displayName: "",
            location: ["street", "forest"],
            img: "futa1/icon.png",
            openingLine: ["You look like you ", "need a cock in you."],
            openingImg: null,
            fight: g.rand(8, 15),
            energy: 100,
            arousal: 0,
            options: ["oral", "oral", "anal"],
            slap: true,
            color: "w",
            gender: "m",
            cocksize: 4,
            kick: "futa1/kick.png",
            phase0: function () { return { default: true, complete: null }; },
            phase1: function () { return { default: true, complete: null }; },
            phase2: function () { return { default: true, complete: null }; },
            phase3: function () {
                if (rape.phases[3].c === 0) {
                    rape.charMessage = { n: "futa1", m: "My my my. What do we have here? "};
                    nav.button({
                        "type": "img",
                        "name": "r1004bg",
                        "left": 681,
                        "top": 21,
                        "width": 583,
                        "height": 1059,
                        "image": "1004_rape/futa1/phase3_0.png"
                    }, 1004);
                    return false;
                }
                else if (rape.phases[3].c === 1) {
                    rape.charMessage = { n: "futa1", m: "Oh no! You made my cock fell out!"};
                    nav.button({
                        "type": "img",
                        "name": "r1004bg",
                        "left": 681,
                        "top": 21,
                        "width": 583,
                        "height": 1059,
                        "image": "1004_rape/futa1/phase3_1.png"
                    }, 1004);
                    return false;
                }
                rape.charMessage = { n: "futa1", m: "I guess I'll have ot punish you for that"};
                nav.button({
                    "type": "img",
                    "name": "r1004bg",
                    "left": 681,
                    "top": 21,
                    "width": 583,
                    "height": 1059,
                    "image": "1004_rape/futa1/phase3_2.png"
                }, 1004);
                return true;
            },
            phase4: function () {
                return { default: true, complete: null };
            },
            phase5: function () {
                if (rape.phases[5].c === 0) {
                    if (rape.rapeType === "anal") {
                        nav.button({
                            "type": "img",
                            "name": "r1004bg",
                            "left": 619,
                            "top": 440,
                            "width": 985,
                            "height": 594,
                            "image": "1004_rape/futa1/phase5_anal_b.png"
                        }, 1004);
                        zcl.assup(650, 500, .7, "");
                        nav.button({
                            "type": "img",
                            "name": "r1004bg",
                            "left": 619,
                            "top": 440,
                            "width": 985,
                            "height": 594,
                            "image": "1004_rape/futa1/phase5_anal_f.png"
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
                        zcl.bj(250, 400, .6, "open", true);
                        nav.button({
                            "type": "img",
                            "name": "r1004bg",
                            "left": 544,
                            "top": 0,
                            "width": 699,
                            "height": 1080,
                            "image": "1004_rape/futa1/phase6_oral.png"
                        }, 1004);
                    }
                    return false;
                }
                return true;
            },
            phase6: function () {
                if (rape.phases[6].c === 0) {
                    if (rape.rapeType === "anal") {
                        nav.button({
                            "type": "img",
                            "name": "r1004bg",
                            "left": 619,
                            "top": 440,
                            "width": 985,
                            "height": 594,
                            "image": "1004_rape/futa1/phase5_anal_b.png"
                        }, 1004);
                        zcl.assup(650, 500, .7, "");
                        nav.button({
                            "type": "img",
                            "name": "r1004bg",
                            "left": 619,
                            "top": 440,
                            "width": 985,
                            "height": 594,
                            "image": "1004_rape/futa1/phase6_anal_f.png"
                        }, 1004);
                        levels.anal(5, false, "m", true);
                    }
                    else {
                        zcl.bj(0, 200, 1, "w", true);
                        nav.button({
                            "type": "img",
                            "name": "r1004bg",
                            "left": 522,
                            "top": 0,
                            "width": 1171,
                            "height": 1080,
                            "image": "1004_rape/futa1/phase7_oral.png"
                        }, 1004);
                        levels.oralGive(4, true, false, "m");
                    }
                    return false;
                }
                return true;
            },
            phase7: function () {
                return { default: true };
            }
        },
        {
            num: 10,
            name: "!girl2",
            displayName: "",
            location: ["street"],
            img: "girl2/icon.png",
            openingLine: ["You look like you ", "need a cock in you."],
            openingImg: null,
            fight: g.rand(8, 15),
            energy: 100,
            arousal: 0,
            options: ["cunnilugus", "cock", "cock"],
            slap: true,
            color: "w",
            gender: "f",
            cocksize: 3,
            kick: "rapeman0/kick.png",
            phase0: function () { return { default: true, complete: null }; },
            phase1: function () { return { default: true, complete: null }; },
            phase2: function () { return { default: true, complete: null }; },
            phase3: function () {
                if (rape.phases[3].c === 0) {
                    if (!gender.canUseCock()) {
                        nav.button({
                            "type": "img",
                            "name": "r1004bg",
                            "left": 0,
                            "top": 0,
                            "width": 1920,
                            "height": 1080,
                            "image": "1004_rape/girl2/phase3_small.png"
                        }, 1004);
                    }
                    else {
                        nav.button({
                            "type": "img",
                            "name": "r1004bg",
                            "left": 744,
                            "top": 86,
                            "width": 465,
                            "height": 994,
                            "image": "1004_rape/girl2/phase3.png"
                        }, 1004);
                    }
                    return true;
                }
            },
            phase4: function () {
                return { default: true, complete: false };
            },
            phase5: function () {
                
                if (rape.phases[5].c === 0) {
                    if (rape.rapeType === "cock") {
                        nav.button({
                            "type": "img",
                            "name": "r1004bg",
                            "left": 486,
                            "top": 86,
                            "width": 954,
                            "height": 963,
                            "image": "1004_rape/girl2/phase5_b.png"
                        }, 1004);
                        zcl.amazon(350, 500, .6, "", false);
                        nav.button({
                            "type": "img",
                            "name": "r1004bg",
                            "left": 486,
                            "top": 86,
                            "width": 954,
                            "height": 963,
                            "image": "1004_rape/girl2/phase5_f.png"
                        }, 1004);
                    }
                    else {
                        zcl.bj(200, 200, .8, "open", true);
                        nav.button({
                            "type": "img",
                            "name": "r1004bg",
                            "left": 411,
                            "top": 0,
                            "width": 1067,
                            "height": 1080,
                            "image": "1004_rape/girl2/phase5_oral.png"
                        }, 1004);
                    }
                    return false;
                }
                return true;
            },
            phase6: function () {
                if (rape.phases[6].c === 0) {
                    if (rape.rapeType === "cock") {
                        nav.button({
                            "type": "img",
                            "name": "r1004bg",
                            "left": 486,
                            "top": 86,
                            "width": 954,
                            "height": 963,
                            "image": "1004_rape/girl2/phase6_b.png"
                        }, 1004);
                        zcl.amazon(350, 500, .6, "", false);
                        nav.button({
                            "type": "img",
                            "name": "r1004bg",
                            "left": 486,
                            "top": 86,
                            "width": 954,
                            "height": 963,
                            "image": "1004_rape/girl2/phase6_f.png"
                        }, 1004);
                        levels.fuckpussy("!girl2");
                    }
                    else {
                        zcl.bj(200, 200, .8, "open", true);
                        nav.button({
                            "type": "img",
                            "name": "r1004bg",
                            "left": 549,
                            "top": 0,
                            "width": 1064,
                            "height": 1080,
                            "image": "1004_rape/girl2/phase6_oral.png"
                        }, 1004);
                    }
                    return false;
                }
                return true;
            },
            phase7: function () {
                return { default: true };
            }
        },
        {
            num: 11,
            name: "!girl3",
            displayName: "",
            location: ["forest"],
            img: "girl3/icon.png",
            openingLine: ["You look like you ", "need a cock in you."],
            openingImg: null,
            fight: g.rand(8, 15),
            energy: 100,
            arousal: 0,
            options: ["anal", "cock", "cock"],
            slap: true,
            color: "w",
            gender: "f",
            cocksize: 5,
            kick: "rapeman0/kick.png",
            phase0: function () { return { default: true, complete: null }; },
            phase1: function () { return { default: true, complete: null }; },
            phase2: function () { return { default: true, complete: null }; },
            phase3: function () {
                if (!gender.canUseCock()) {
                    nav.button({
                        "type": "img",
                        "name": "r1004bg",
                        "left": 0,
                        "top": 0,
                        "width": 1920,
                        "height": 1080,
                        "image": "1004_rape/girl3/introhaha.png"
                    }, 1004);
                }
                else {
                    nav.button({
                        "type": "img",
                        "name": "r1004bg",
                        "left": 430,
                        "top": 0,
                        "width": 1148,
                        "height": 1080,
                        "image": "1004_rape/girl3/intro.png"
                    }, 1004);
                }
                return true;
            },
            phase4: function () {
                if (rape.rapeType === "cock") {
                    nav.button({
                        "type": "img",
                        "name": "r1004bg",
                        "left": 0,
                        "top": 0,
                        "width": 920,
                        "height": 1080,
                        "image": "1004_rape/girl3/phase4_dick.png"
                    }, 1004);
                }
                else {
                    if (rape.phases[4].c === 0) {
                        nav.button({
                            "type": "img",
                            "name": "r1004bg",
                            "left": 0,
                            "top": 0,
                            "width": 1920,
                            "height": 1080,
                            "image": "1004_rape/girl3/phase4_anal.png"
                        }, 1004);
                        return { default: false, complete: false };
                    }
                    else
                        return { default: false, complete: true };
                }

                return { default: true, complete: false };
            },
            phase5: function () {
                //zcl.double(200, 100, .7, "open", false);
                if (rape.phases[5].c === 0) {
                    if (rape.rapeType === "anal") {
                        zcl.double(360, 240, .6, "open", false)
                        nav.button({
                            "type": "img",
                            "name": "r1004bg",
                            "left": 400,
                            "top": 0,
                            "width": 867,
                            "height": 459,
                            "image": "1004_rape/girl3/phase5_fist.gif"
                        }, 1004);
                        nav.button({
                            "type": "img",
                            "name": "r1004bg",
                            "left": 0,
                            "top": 0,
                            "width": 1920,
                            "height": 1080,
                            "image": "1004_rape/girl3/phase5_fist.png"
                        }, 1004);
                        
                    }
                    else {
                        zcl.bj(200, 200, .8, "open", true);
                        nav.button({
                            "type": "img",
                            "name": "r1004bg",
                            "left": 0,
                            "top": 0,
                            "width": 1920,
                            "height": 1080,
                            "image": "1004_rape/girl3/phase5_dick.png"
                        }, 1004);
                        nav.button({
                            "type": "img",
                            "name": "r1004bg",
                            "left": 1020,
                            "top": 0,
                            "width": 300,
                            "height": 300,
                            "image": "1004_rape/girl3/gif_fourholes.gif"
                        }, 1004);
                    }
                    return false;
                }
                return true;
            },
            phase6: function () {
                if (rape.phases[6].c === 0) {
                    if (rape.rapeType === "cock") {
                        nav.button({
                            "type": "img",
                            "name": "r1004bg",
                            "left": 0,
                            "top": 0,
                            "width": 1920,
                            "height": 1080,
                            "image": "1004_rape/girl3/phase6_dick.png"
                        }, 1004);
                        levels.fuckpussy("!girl3");
                        levels.fuckpussy("!girl3");
                        levels.fuckass("!girl3", "f");
                        levels.fuckass("!girl3", "f");
                    }
                    else {
                        nav.button({
                            "type": "img",
                            "name": "r1004bg",
                            "left": 0,
                            "top": 0,
                            "width": 1920,
                            "height": 1080,
                            "image": "1004_rape/girl3/phase6_anal.png"
                        }, 1004);
                        zcl.asshole(261, 200, 1.4, "", false);
                        levels.anal(5, false, "f", false);
                    }
                    return false;
                }
                return true;
            },
            phase7: function () {
                return { default: true };
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