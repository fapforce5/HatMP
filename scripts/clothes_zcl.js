var zcl = {};

zcl.displayMirror = function () {
    zcl.displayMain(-50, 100, .45, "mirror", false);
};

zcl.displayface = function () {
    zcl.displayMain(-50, 100, .50, "mirror", false);
};

zcl.displayMissy = function () {
    zcl.displayMain(-60, 750, .15, "panties socks shoes shirt sanspants", false);
};

zcl.displayClothed = function () {
    zcl.displayMain(-60, 750, .15, "panties shirt pants socks shoes bra", false);
};

zcl.kill = function () {
    $('.room-img[data-name="zzz-clothing-kill"]').remove();
};

zcl.displayMain = function (top, left, ratio, spec, dback) {
    //set Chest
    var displayCock = true;
    var thisHair;

    if (spec.indexOf("pants") > -1 || spec.indexOf("shirt") > -1)
        spec += " clothes";

    if (dback)
        displayCock = false;
    else if (spec === "mirror")
        displayCock = false;
    else if (spec.indexOf("panties") > -1 || spec.indexOf("clothes") > -1) {
        if (cl.c.panties !== null || cl.c.swimsuit !== null || cl.c.pj !== null)
        displayCock = false;
    }
    if (displayCock) {
        if (spec.indexOf("clothes") > -1 || spec.indexOf("pants") > -1) {
            if (cl.c.pants !== null) {
                if (cl.c.pants === "s" || cl.c.pants === "j" || cl.c.pants === "b" || cl.c.pants === "r" || cl.c.pants === "dd" || cl.c.pants === "p" || cl.c.pants === "ps")
                    displayCock = false;

            }
        }
    }

    $('.room-img[data-name="zzz-clothing-kill"]').remove();
    if (spec === "mirror") {
        zcl.displayMainSub("mirror/top" + cl.c.chest + ".png", top, left, ratio);
    }
    else {
        //set Chest
        if (spec.indexOf("armsup") > -1)
            zcl.displayMainSub("top_" + cl.c.chest + "_up.png", top, left, ratio);
        else if (spec.indexOf("behind") > -1)
            zcl.displayMainSub("top_" + cl.c.chest + "_behind.png", top, left, ratio);
        else
            zcl.displayMainSub("top_" + cl.c.chest + (dback ? "_back" : "") + ".png", top, left, ratio);
        //set legs
        zcl.displayMainSub("leg_" + cl.c.leg + (dback ? "_back" : "") + ".png", top, left, ratio);
    }
    //set Head
    if (dback) {
        zcl.displayMainSub("body_head_back.png", top, left, ratio);
    }
    else {
        zcl.displayMainSub(cl.getmakeup().image, top, left, ratio);
    }

    if (displayCock) {
        if (cl.c.chastity === null) {
            zcl.displayMainSub("cock_" + cl.c.cock + ".png", top, left, ratio);
        }
        else {
            $.each(cl.chastity, function (i, v) {
                if (v.name === cl.c.chastity) {
                    zcl.displayMainSub(v.image, top, left, ratio);
                    return false;
                }
            });
        }
    }
    for (i = 0; i < cl.c.tattoo.length; i++) {
        for (let j = 0; j < cl.tattoo.length; j++) {
            if (cl.c.tattoo[i] === cl.tattoo[j].name) {
                console.log((dback ? cl.tattoo[j].back : cl.tattoo[j].image));
                zcl.displayMainSub((dback ? cl.tattoo[j].back : cl.tattoo[j].image), top, left, ratio);
            }
        }
    }

    if (cl.c.nipplering !== null && !dback) {
        for (i = 0; i < cl.nipplering.length; i++)
            if (cl.nipplering[i].name === cl.c.nipplering && cl.nipplering[i].chest === cl.c.chest) {
                zcl.displayMainSub(cl.nipplering[i].image, top, left, ratio);
                i = 99999;
            }
    }
    if (cl.c.earring !== null && !dback) {
        for (i = 0; i < cl.earring.length; i++)
            if (cl.earring[i].name === cl.c.earring) {
                zcl.displayMainSub(cl.earring[i].image, top, left, ratio);
                i = 99999;
            }
    }

    if (cl.c.nosering !== null && !dback) {
        for (i = 0; i < cl.nosering.length; i++)
            if (cl.nosering[i].name === cl.c.nosering) {
                zcl.displayMainSub(cl.nosering[i].image, top, left, ratio);
                i = 99999;
            }
    }

    if (cl.c.bellyring !== null && !dback) {
        for (i = 0; i < cl.bellyring.length; i++)
            if (cl.bellyring[i].name === cl.c.bellyring) {
                zcl.displayMainSub(cl.bellyring[i].image, top, left, ratio);
                i = 99999;
            }
    }
    //set bodyhair
    var hairy = cl.getBodyHair();
    if (hairy !== null && !dback)
        cl.displayMainWhere(cl.bodyhair, hairy, top, left, ratio, dback);


    //set mouth
    if (!dback) {
        zcl.displayMainSub(("lips_" + cl.c.lips + "_" + (cl.c.lipstick === null ? "nude" : cl.c.lipstick) + ".png"), top, left, ratio);
        //cl.displayMainWhere(cl.lips, cl.c.lips, top, left, ratio, dback);
        //set eyes
        if (cl.c.pissface === null) {
            zcl.displayMainSub("eyes_" + cl.c.eyes + ".png", top, left, ratio);
        }
        else {
            zcl.displayMainSub("eyeliner_" + cl.c.pissface + ".png", top, left, ratio);
            zcl.displayMainSub("eyes_" + cl.c.eyes + "_f.png", top, left, ratio);
        }

        

        //set cum
        if (cl.c.cumface && !dback)
            zcl.displayMainSub("cum_face.png", top, left, ratio);
    }

    //necklace
    if (cl.c.necklace !== null) {
        $.each(cl.necklace, function (i, v) {
            if (v.name === cl.c.necklace) {
                zcl.displayMainSub((dback ? v.back : v.image), top, left, ratio);
                return false;
            }
        });
    }

    if (spec.indexOf("panties") > -1 || spec.indexOf("clothes") > -1) {
        if (cl.c.panties !== null) {
            $.each(cl.panties, function (i, v) {
                if (v.name === cl.c.panties && v.leg === cl.c.leg) {
                    if (cl.c.cock < 5)
                        zcl.displayMainSub((dback ? v.back : v.cock), top, left, ratio);
                    else
                        zcl.displayMainSub((dback ? v.back : v.pussy), top, left, ratio);
                    return false;
                }
            });
        }
    }

    if (spec.indexOf("bra") > -1 || spec.indexOf("clothes") > -1) {
        $.each(cl.bra, function (i, v) {
            if (v.name === cl.c.bra && v.chest === cl.c.chest) {
                zcl.displayMainSub((dback ? v.back : v.image), top, left, ratio);
                return false;
            }
        });
    }
    if (spec.indexOf("socks") > -1 || spec.indexOf("clothes") > -1) {
        $.each(cl.socks, function (i, v) {
            if (v.name === cl.c.socks) {
                zcl.displayMainSub((dback ? v.back : v.image), top, left, ratio);
                return false;
            }
        });
    }
    if (spec.indexOf("shoes") > -1 || spec.indexOf("clothes") > -1) {
        if (cl.c.shoes !== null) {
            $.each(cl.shoes, function (i, v) {
                if (v.name === cl.c.shoes) {
                    zcl.displayMainSub((dback ? v.back : v.image), top, left, ratio);
                    return false;
                }
            });
        }
    }
    if (spec.indexOf("sanspants") > -1) {
        if (cl.c.shirt !== null) {
            $.each(cl.shirt, function (i, v) {
                if (v.name === cl.c.shirt && v.chest === cl.c.chest) {
                    zcl.displayMainSub((dback ? v.back : v.image), top, left, ratio);
                    return false;
                }
            });
        }
    }
    else if (spec.indexOf("clothes") > -1) {
        if (cl.c.dress !== null) {
            $.each(cl.dressBottom, function (i, v) {
                if (v.name === cl.c.dress && v.leg === cl.c.leg) {
                    zcl.displayMainSub((dback ? v.back : v.image), top, left, ratio);
                    return false;
                }
            });
            $.each(cl.dressTop, function (i, v) {
                if (v.name === cl.c.dress && v.chest === cl.c.chest) {
                    zcl.displayMainSub((dback ? v.back : v.image), top, left, ratio);
                    return false;
                }
            });
        }
        else if (cl.c.swimsuit !== null) {
            $.each(cl.swimsuitBottom, function (i, v) {
                if (v.name === cl.c.swimsuit && v.leg === cl.c.leg) {
                    zcl.displayMainSub((dback ? v.back : (cl.c.cock === 5 ?  v.pussy : v.cock)), top, left, ratio);
                    return false;
                }
            });
            $.each(cl.swimsuitTop, function (i, v) {
                if (v.name === cl.c.swimsuit && v.chest === cl.c.chest) {
                    zcl.displayMainSub((dback ? v.back : v.image), top, left, ratio);
                    return false;
                }
            });
        }
        else if (cl.c.pj !== null) {
            $.each(cl.pjBottom, function (i, v) {
                if (v.name === cl.c.pj && v.leg === cl.c.leg) {
                    zcl.displayMainSub((dback ? v.back : v.image), top, left, ratio);
                    return false;
                }
            });
            $.each(cl.pjTop, function (i, v) {
                if (v.name === cl.c.pj && v.chest === cl.c.chest) {
                    zcl.displayMainSub((dback ? v.back : v.image), top, left, ratio);
                    return false;
                }
            });
        }
        else {
            if (cl.c.pants !== null) {
                $.each(cl.pants, function (i, v) {
                    if (v.name === cl.c.pants && v.leg === cl.c.leg) {
                        zcl.displayMainSub((dback ? v.back : v.image), top, left, ratio);
                        return false;
                    }
                });
            }
            $.each(cl.shirt, function (i, v) {
                if (v.name === cl.c.shirt && v.chest === cl.c.chest) {
                    zcl.displayMainSub((dback ? v.back : v.image), top, left, ratio);
                    return false;
                }
            });
        }
    }
    if (spec.indexOf("pants") > -1 || spec.indexOf("shirt") > -1 || spec.indexOf("dress") > -1) {
        $.each(cl.dress, function (i, v) {
            if (v.name === cl.c.shirt && v.chest === cl.c.chest) {
                zcl.displayMainSub((dback ? v.back : v.image), top, left, ratio);
                return false;
            }
        });
    }
    

    //set hair
    if (!dback) {
        if (cl.c.wig !== null) {
            $.each(cl.wig, function (i, v) {
                if (v.name === cl.c.wig)
                    zcl.displayMainSub((dback ? v.back : v.image), top, left, ratio);
            });
        }
        else {
            if (cl.c.hairLength !== null) {
                if (cl.c.hairLength < 2) {
                    thisHair = "hair_" + cl.c.hairLength.toString() + "_" + cl.c.hairColor;
                    zcl.displayMainSub((dback ? thisHair + "_back.png" : thisHair + ".png"), top, left, ratio);
                }
                else if (cl.c.hairStyle === "leia" || cl.c.hairStyle === "bun") {
                    thisHair = "hair_2_" + cl.c.hairColor + "_" + cl.c.hairStyle;
                    zcl.displayMainSub(dback ? thisHair + "_back.png" : thisHair + ".png", top, left, ratio);
                }
                else {
                    thisHair = "hair_" + cl.c.hairLength.toString() + "_" + cl.c.hairColor + "_" + cl.c.hairStyle;
                    zcl.displayMainSub(dback ? thisHair + "_back.png" : thisHair + ".png", top, left, ratio);
                }
            }
        }
    }

    if (dback) {
        if (cl.c.wig !== null) {
            $.each(cl.wig, function (i, v) {
                if (v.name === cl.c.wig)
                    zcl.displayMainSub((dback ? v.back : v.image), top, left, ratio);
            });
        }
        else {
            if (cl.c.hairLength !== null) {
                if (cl.c.hairLength < 2) {
                    thisHair = "hair_" + cl.c.hairLength.toString() + "_" + cl.c.hairColor;
                    zcl.displayMainSub((dback ? thisHair + "_back.png" : thisHair + ".png"), top, left, ratio);
                }
                else if (cl.c.hairStyle === "leia" || cl.c.hairStyle === "bun") {
                    thisHair = "hair_2_" + cl.c.hairColor + "_" + cl.c.hairStyle;
                    zcl.displayMainSub(dback ? thisHair + "_back.png" : thisHair + ".png", top, left, ratio);
                }
                else {
                    thisHair = "hair_" + cl.c.hairLength.toString() + "_" + cl.c.hairColor + "_" + cl.c.hairStyle;
                    zcl.displayMainSub(dback ? thisHair + "_back.png" : thisHair + ".png", top, left, ratio);
                }
            }
        }
    }

    //set acc
    if (cl.c.accessories !== null) {
        $.each(cl.accessories, function (i, v) {
            if (v.name === cl.c.accessories) {
                zcl.displayMainSub(dback ? v.back : v.image, top, left, ratio);
                return false;
            }
        });
    }
};

zcl.head = function (top, left, ratio, mod) {
    //mods: ahegao, angryleft, shock
    dback = false;
    zcl.kill();
    zcl.displayMainSub(cl.getmakeup().image, top, left, ratio);

    if (mod !== null) {
        zcl.displayMainSub("face_" + mod + ".png", top, left, ratio);
    }
    else {
        zcl.displayMainSub(("lips_" + cl.c.lips + "_" + (cl.c.lipstick === null ? "nude" : cl.c.lipstick) + ".png"), top, left, ratio);
        //cl.displayMainWhere(cl.lips, cl.c.lips, top, left, ratio, dback);
        //set eyes
        if (cl.c.pissface === null) {
            zcl.displayMainSub("eyes_" + cl.c.eyes + ".png", top, left, ratio);
        }
        else {
            zcl.displayMainSub("eyeliner_" + cl.c.pissface + ".png", top, left, ratio);
            zcl.displayMainSub("eyes_" + cl.c.eyes + "_f.png", top, left, ratio);
        }
    }

    if (cl.c.earring !== null && !dback) {
        for (i = 0; i < cl.earring.length; i++)
            if (cl.earring[i].name === cl.c.earring) {
                zcl.displayMainSub(cl.earring[i].image, top, left, ratio);
                i = 99999;
            }
    }

    if (cl.c.nosering !== null && !dback) {
        for (i = 0; i < cl.nosering.length; i++)
            if (cl.nosering[i].name === cl.c.nosering) {
                zcl.displayMainSub(cl.nosering[i].image, top, left, ratio);
                i = 99999;
            }
    }

    if (cl.c.cumface && !dback)
        zcl.displayMainSub("cum_face.png", top, left, ratio);

    if (cl.c.wig !== null) {
        $.each(cl.wig, function (i, v) {
            if (v.name === cl.c.wig)
                zcl.displayMainSub((dback ? v.back : v.image), top, left, ratio);
        });
    }
    else {
        if (cl.c.hairLength !== null) {
            if (cl.c.hairLength < 2) {
                thisHair = "hair_" + cl.c.hairLength.toString() + "_" + cl.c.hairColor;
                zcl.displayMainSub((dback ? thisHair + "_back.png" : thisHair + ".png"), top, left, ratio);
            }
            else if (cl.c.hairStyle === "leia" || cl.c.hairStyle === "bun") {
                thisHair = "hair_2_" + cl.c.hairColor + "_" + cl.c.hairStyle;
                zcl.displayMainSub(dback ? thisHair + "_back.png" : thisHair + ".png", top, left, ratio);
            }
            else {
                thisHair = "hair_" + cl.c.hairLength.toString() + "_" + cl.c.hairColor + "_" + cl.c.hairStyle;
                zcl.displayMainSub(dback ? thisHair + "_back.png" : thisHair + ".png", top, left, ratio);
            }
        }
    }
};

cl.displayMainWhere = function (thisArray, entry, top, left, ratio, dback) {
    $.each(thisArray, function (i, v) {
        if (v.name === entry) {
            zcl.displayMainSub((dback ? v.back : v.image), top, left, ratio);
            return false;
        }
    });
};

zcl.displayMainSub = function (thisImage, top, left, ratio) {
    if (thisImage !== null) {
        var btnWidth, btnHeight;
        btnWidth = 2075 * ratio * g.ratio;
        btnWidth = 4200 * ratio * g.ratio;
        top = top * g.ratio;
        left = left * g.ratio;
        $('#room-buttons').append('<img src="./images/mainChar/' + thisImage + '" class="room-img" data-name="zzz-clothing-kill" style="width:' + btnWidth + 'px; top:' + top + 'px; left:' + left + 'px;" />');
    }
};

zcl.kneel = function (top, left, ratio, mod, reverse) {
    zcl.kill();
    let w = 1500;
    let h = 1800;
    let f = "bj";

    zcl.subDisplay("b" + (cl.c.chest === 1 ? 0 : cl.c.chest) + ".png", top, left, ratio, reverse, w, h, f);
    if (mod.indexOf("open") > -1)
        zcl.subDisplay("headOpen.png", top, left, ratio, reverse, w, h, f);
    else
        zcl.subDisplay("headClose.png", top, left, ratio, reverse, w, h, f);

    if (cl.c.hairLength !== null) {
        if (cl.c.hairLength < 2) {
            thisHair = "hair_" + cl.c.hairLength.toString() + "_" + cl.c.hairColor;
            zcl.subDisplay(thisHair + ".png", top, left, ratio, reverse, w, h, f);
        }
        else if (cl.c.hairStyle === "leia" || cl.c.hairStyle === "bun") {
            thisHair = "hair_2_" + cl.c.hairColor + "_" + cl.c.hairStyle;
            zcl.subDisplay(thisHair + ".png", top, left, ratio, reverse, w, h, f);
        }
        else {
            thisHair = "hair_" + cl.c.hairLength.toString() + "_" + cl.c.hairColor + "_" + cl.c.hairStyle;
            zcl.subDisplay(thisHair + ".png", top, left, ratio, reverse, w, h, f);
        }
    }
};

zcl.amazon = function (top, left, ratio, mod, reverse) {
    let w = 1600;
    let h = 1600;
    let f = "amazon";
    zcl.kill();
    if (cl.c.chest < 3)
        zcl.subDisplay("body_m.png", top, left, ratio, reverse, w, h, f);
    else
        zcl.subDisplay("body_f.png", top, left, ratio, reverse, w, h, f);

    
    if (cl.c.bra !== null) {
        if (cl.c.chest < 3)
            zcl.subDisplay("body_m_bra.png", top, left, ratio, reverse, w, h, f);
        else
            zcl.subDisplay("body_f_bra.png", top, left, ratio, reverse, w, h, f);
    }
    if (cl.c.panties !== null) {
        if (cl.c.chest < 3)
            zcl.subDisplay("body_m_panties.png", top, left, ratio, reverse, w, h, f);
        else
            zcl.subDisplay("body_f_panties.png", top, left, ratio, reverse, w, h, f);
    }
    else {
        if (mod !== "nodick") {
            if (cl.c.chastity !== null)
                zcl.subDisplay("dick_chastity.png", top, left, ratio, reverse, w, h, f);
            else if (cl.c.cock > 3)
                zcl.subDisplay("dick_1.png", top, left, ratio, reverse, w, h, f);
            else if (cl.c.cock > 1)
                zcl.subDisplay("dick_3.png", top, left, ratio, reverse, w, h, f);
            else
                zcl.subDisplay("dick_5.png", top, left, ratio, reverse, w, h, f);
        }
    }
    if (cl.c.hairLength > 1)
        zcl.subDisplay("hair_f.png", top, left, ratio, reverse, w, h, f);
    else
        zcl.subDisplay("hair_m.png", top, left, ratio, reverse, w, h, f);
};

zcl.rope = function (top, left, ratio, mod, reverse) {
    let w = 900;
    let h = 1080;
    let f = "rope";
    let buttplug_s = ["fr", "fd", "fp"];

    if (buttplug_s.includes(cl.c.buttplug)) {
        zcl.subDisplay("buttplug_" + cl.c.buttplug + ".png", top, left, ratio, reverse, w, h, f);
    }

    zcl.subDisplay("body.png", top, left, ratio, reverse, w, h, f);

    if (cl.c.lipstick === null && cl.c.pissface === null && cl.c.makeup === "n")
        zcl.subDisplay("face.png", top, left, ratio, reverse, w, h, f);
    else
        zcl.subDisplay("face_makeup.png", top, left, ratio, reverse, w, h, f);

    if (cl.c.hairLength > 1)
        zcl.subDisplay("hair_1_" + cl.c.hairColor + ".png", top, left, ratio, reverse, w, h, f);
    else
        zcl.subDisplay("hair_0_" + cl.c.hairColor + ".png", top, left, ratio, reverse, w, h, f);

    let chest = cl.c.chest;
    if (chest === 0)
        chest = 1;
    zcl.subDisplay("chest_" + chest + ".png", top, left, ratio, reverse, w, h, f);

    if (cl.c.chastity !== null)
        zcl.subDisplay("cock_chastity.png", top, left, ratio, reverse, w, h, f);
    else if (cl.c.cock === 5) {
        //vagina 
    }
    else if (cl.c.cock === 4)
        zcl.subDisplay("cock_4.png", top, left, ratio, reverse, w, h, f);
    else if (cl.c.cock > 1)
        zcl.subDisplay("cock_2.png", top, left, ratio, reverse, w, h, f);
    else
        zcl.subDisplay("cock_0.png", top, left, ratio, reverse, w, h, f);
};

zcl.kneelRedux = function (top, left, ratio, mod, reverse) {
    let w = 1200;
    let h = 1600;
    let f = "bjRedux"
    zcl.kill();
    zcl.subDisplay(cl.c.chest > 2 ? "girl.png" : "boy.png", top, left, ratio, reverse, w, h, f);
    if (cl.c.hairLength > 1) {
        zcl.subDisplay("girlhead.png", top, left, ratio, reverse, w, h, f);
        zcl.subDisplay(cl.c.hairColor + "1.png", top, left, ratio, reverse, w, h, f);
    }
    else {
        zcl.subDisplay("boyhead.png", top, left, ratio, reverse, w, h, f);
        zcl.subDisplay(cl.c.hairColor + "0.png", top, left, ratio, reverse, w, h, f);
    }
};

zcl.asshole = function (top, left, ratio, mod, reverse) {
    let w = 1200;
    let h = 585;
    let f = "asshole";
    let img = "a6";
    zcl.kill();
    if (mod !== "cum")
        mod = "";

    switch (levels.get("anal").l) {
        case 0:
        case 1:
            img = "a0";
            break;
        case 2:
        case 3:
            img = "a1";
            break;
        case 4:
        case 5:
            img = "a2";
            break;
        case 6:
        case 7:
            img = "a3";
            break;
        case 8:
            img = "a4";
            break;
        case 9:
            img = "a5";
            break;
        default:
            img = "a6";
            break;
    }
    zcl.subDisplay(img + mod + ".png", top, left, ratio, reverse, w, h, f);
};

zcl.bj = function (top, left, ratio, mod, reverse) {
    let w = 1200;
    let h = 1900;
    let f = "bj2";
    zcl.kill();
    let chest = 0;
    if (cl.c.chest > 5)
        chest = 6;
    else if (cl.c.chest > 4)
        chest = 5;
    else if (cl.c.chest > 2)
        chest = 3;

    zcl.subDisplay("body_" + chest + ".png", top, left, ratio, reverse, w, h, f);
    switch (mod) {
        case "open":
            zcl.subDisplay("head_open.png", top, left, ratio, reverse, w, h, f);
            break;
        case "w":
            zcl.subDisplay("head_open.png", top, left, ratio, reverse, w, h, f);
            zcl.subDisplay("w.png", top, left, ratio, reverse, w, h, f);
            break;
        default:
            zcl.subDisplay("head.png", top, left, ratio, reverse, w, h, f);
            break;
    }

    if (cl.c.hairLength > 1) {
        zcl.subDisplay("hair_2_black.png", top, left, ratio, reverse, w, h, f);
    }
    else {
        zcl.subDisplay("hair_1_black.png", top, left, ratio, reverse, w, h, f);
    }
};

zcl.pucker = function (top, left, ratio, mod, reverse) {
    let w = 1500;
    let h = 2700;
    let f = "pucker";
    zcl.kill();
    let pg = gender.pronoun("f");
    zcl.subDisplay("body_" + pg + ".webp", top, left, ratio, reverse, w, h, f);
    if (cl.c.panties !== null)
        zcl.subDisplay("panties_" + pg + ".webp", top, left, ratio, reverse, w, h, f);
    if (cl.c.bra !== null)
        zcl.subDisplay("bra_" + pg + ".webp", top, left, ratio, reverse, w, h, f);

};

zcl.armsup = function (top, left, ratio, mod, reverse) {
    let w = 2048;
    let h = 2400;
    let f = "armsup";
    zcl.kill();
    let chest = 0;
    if (cl.c.chest > 2)
        chest = cl.c.chest;

    zcl.subDisplay("body_" + chest + ".png", top, left, ratio, reverse, w, h, f);
    switch (mod) {
        case "open":
            zcl.subDisplay("head_open.png", top, left, ratio, reverse, w, h, f);
            break;
        case "openEyesOpen":
            zcl.subDisplay("head_openEyesOpen.png", top, left, ratio, reverse, w, h, f);
            break;
        case "worried":
            zcl.subDisplay("head_worried.png", top, left, ratio, reverse, w, h, f);
            break;
        case "cry":
            zcl.subDisplay("head_cry.png", top, left, ratio, reverse, w, h, f);
            break;
        default:
            zcl.subDisplay("head.png", top, left, ratio, reverse, w, h, f);
            break;
    }

    if (cl.c.hairLength > 1) {
        zcl.subDisplay("hair_2_black.png", top, left, ratio, reverse, w, h, f);
    }
    else {
        zcl.subDisplay("hair_1_black.png", top, left, ratio, reverse, w, h, f);
    }

    zcl.subDisplay("arm.png", top, left, ratio, reverse, w, h, f);
};

zcl.double = function (top, left, ratio, mod, reverse) {
    zcl.kill();
    let w = 2000;
    let h = 1500;
    let f = "double";
    if (cl.c.chest > 2) 
        zcl.subDisplay("body_f.png", top, left, ratio, reverse, w, h, f);
    else
        zcl.subDisplay("body_m.png", top, left, ratio, reverse, w, h, f);

    if (mod === "open" && cl.c.hairLength > 1)
        zcl.subDisplay("head_open_f.png", top, left, ratio, reverse, w, h, f);
    else if(mod === "open")
        zcl.subDisplay("head_open_m.png", top, left, ratio, reverse, w, h, f);
    else if (cl.c.hairLength > 1)
        zcl.subDisplay("head_f.png", top, left, ratio, reverse, w, h, f);
    else
        zcl.subDisplay("head_m.png", top, left, ratio, reverse, w, h, f);
};

//mod -> up, open, insert, suck
//color = w, b, d
zcl.face = function (top, left, ratio, mod, color, reverse) {
    zcl.kill();
    let w = 1350;
    let h = 1080;
    let f = "face";
    let head = null;
    if (mod.includes("pillory")) {
        head = "pillory";
        mod = mod.replace("pillory", "").trim();
    }

    let hairLength = cl.c.hairLength < 2 ? 0 : 1;
    let makeup = "m";
    if (color === null)
        color = "w";
    else if (color.length === 0)
        color = "w";
    if (cl.c.makeup !== "n" || cl.c.lipstick !== null || cl.c.lips > 0)
        makeup = "f";
    if (mod === null)
        mod = "open";
    else if (mod.length === 0)
        mod = "open";

    if (mod === "grit") {
        zcl.subDisplay("grit.png", top, left, ratio, reverse, w, h, f);
        zcl.subDisplay("hair_" + hairLength + "_" + cl.c.hairColor + ".png", top, left, ratio, reverse, w, h, f);
        return;
    }
    if(head === "pillory")
        zcl.subDisplay("head_pillory.png", top, left, ratio, reverse, w, h, f);
    else
        zcl.subDisplay("head.png", top, left, ratio, reverse, w, h, f);

    zcl.subDisplay("hair_" + hairLength + "_" + cl.c.hairColor + ".png", top, left, ratio, reverse, w, h, f);

    zcl.subDisplay(mod + "_" + makeup + ".png", top, left, ratio, reverse, w, h, f);

    if(mod === "insert" || mod === "suck")
        zcl.subDisplay("suck_" + makeup + "_" + color + ".png", top, left, ratio, reverse, w, h, f);
};

zcl.poseExpose = function (top, left, ratio, mod, reverse) {
    zcl.kill();
    let w = 2048;
    let h = 2200;
    let f = "poseExplore";
    if (cl.c.chest > 2) {
        zcl.subDisplay("body_3.png", top, left, ratio, reverse, w, h, f);
        if (cl.c.panties !== null)
            zcl.subDisplay("body_3_panties.png", top, left, ratio, reverse, w, h, f);
        if(cl.c.bra !== null)
            zcl.subDisplay("body_3_bra.png", top, left, ratio, reverse, w, h, f);
    }
    else {
        zcl.subDisplay("body_0.png", top, left, ratio, reverse, w, h, f);
        if (cl.c.panties !== null)
            zcl.subDisplay("body_0_panties.png", top, left, ratio, reverse, w, h, f);
        if (cl.c.bra !== null)
            zcl.subDisplay("body_0_bra.png", top, left, ratio, reverse, w, h, f);
    }

    if (cl.c.chastity !== null && cl.c.panties === null)
        zcl.subDisplay("chastity.png", top, left, ratio, reverse, w, h, f);
};

zcl.facedown = function (top, left, ratio, mod, reverse) {
    zcl.kill();
    let w = 2092;
    let h = 1129;
    let f = "facedown";
    zcl.subDisplay("body_" + gender.pronoun("f") + ".webp", top, left, ratio, reverse, w, h, f);
};

zcl.assup = function (top, left, ratio, mod) {
    $('.room-img[data-name="zzz-clothing-kill"]').remove();

    var hairLength = "2_";
    if (cl.c.chest < 3)
        cl.assupSub("body_male.png", top, left, ratio);
    else
        cl.assupSub("body_female.png", top, left, ratio);

    switch (mod) {
        case "reddress":
            cl.assupSub("reddress.png", top, left, ratio);
            break;
    }

    if (cl.c.hairLength < 3)
        hairLength = "1_";

    cl.assupSub(hairLength + cl.c.hairColor + ".png", top, left, ratio);

};

cl.assupSub = function (thisImage, top, left, ratio) {
    var btnWidth, btnHeight;
    btnWidth = 2716 * ratio * g.ratio;
    btnWidth = 1352 * ratio * g.ratio;
    top = top * g.ratio;
    left = left * g.ratio;
    $('#room-buttons').append('<img src="./images/mainChar/assup/' + thisImage + '" class="room-img" data-name="zzz-clothing-kill" style="width:' + btnWidth + 'px; height:' + btnHeight + 'px; top:' + top + 'px; left:' + left + 'px;" />');
};



zcl.bent = function (top, left, ratio, mod, reverse = false) {
    zcl.kill();
    let w = 2300;
    let h = 1699;
    let f = "bent";

    var hairLength = "head_1_";
    if (cl.c.hairLength < 3)
        hairLength = "head_0_";
    zcl.subDisplay(hairLength + cl.c.hairColor + ".png", top, left, ratio, reverse, w, h, f);

    if (cl.c.chest < 3)
        zcl.subDisplay("body_boy.png", top, left, ratio, reverse, w, h, f);
    else
        zcl.subDisplay("body_girl.png", top, left, ratio, reverse, w, h, f);

    if (cl.c.panties !== null)
        zcl.subDisplay("panties.png", top, left, ratio, reverse, w, h, f);
    else if (gender.isCockTooSmallForSex())
        zcl.subDisplay("dick_small.png", top, left, ratio, reverse, w, h, f);
    else
        zcl.subDisplay("dick_big.png", top, left, ratio, reverse, w, h, f);

    if (mod === "cum")
        zcl.subDisplay("cum.png", top, left, ratio, reverse, w, h, f);
};


zcl.subDisplay = function (thisImage, top, left, ratio, reverse, w, h, f) {
    var btnWidth, btnHeight;
    btnWidth = w * ratio * g.ratio;
    btnHeight = h * ratio * g.ratio;
    top = top * g.ratio;
    left = left * g.ratio;
    $('#room-buttons').append('<img src="./images/mainChar/' + f + '/' + thisImage + '" class="room-img" data-name="zzz-clothing-kill" style="width:' + btnWidth + 'px; height:' + btnHeight + 'px; top:' + top + 'px; left:' + left + 'px; ' + (reverse ? ' transform: scaleX(-1); ' : '') + '" />');
};