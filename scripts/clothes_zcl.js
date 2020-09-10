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
        if(cl.c.panties !== null)
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
        if (cl.c.makeup === null)
            cl.c.makeup = "n";
        else {
            $.each(cl.makeup, function (i, v) {
                if (v.name === cl.c.makeup)
                    zcl.displayMainSub(v.image, top, left, ratio);
            });
        }
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
    //set bodyhair
    var hairy = cl.getBodyHair();
    if (hairy !== null && !dback)
        cl.displayMainWhere(cl.bodyhair, hairy, top, left, ratio, dback);


    //set mouth
    if (!dback) {
        cl.displayMainWhere(cl.lips, cl.c.lips, top, left, ratio, dback);
        //set eyes
        zcl.displayMainSub("eyes_" + cl.c.eyes + ".png", top, left, ratio);

        //set cum
        if (cl.c.cumface && !dback)
            zcl.displayMainSub("cum_face.png", top, left, ratio);
    }
    //set hair
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
            else if (cl.c.hairStyle === "leia") {
                thisHair = "hair_2_" + cl.c.hairColor + "_leia";
                zcl.displayMainSub(dback ? thisHair + "_back.png" : thisHair + ".png", top, left, ratio);
            }
            else {
                thisHair = "hair_" + cl.c.hairLength.toString() + "_" + cl.c.hairColor + "_" + cl.c.hairStyle;
                zcl.displayMainSub(dback ? thisHair + "_back.png" : thisHair + ".png", top, left, ratio);
            }
        }
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
    var btnWidth, btnHeight;
    btnWidth = 2075 * ratio * g.ratio;
    btnWidth = 4200 * ratio * g.ratio;
    top = top * g.ratio;
    left = left * g.ratio;
    $('#room-buttons').append('<img src="./images/mainChar/' + thisImage + '" class="room-img" data-name="zzz-clothing-kill" style="width:' + btnWidth + 'px; height:' + btnHeight + 'px; top:' + top + 'px; left:' + left + 'px;" />');
};

zcl.kneel = function (top, left, ratio, mod) {
    $('.room-img[data-name="zzz-clothing-kill"]').remove();

    zcl.kneelSub("b" + (cl.c.chest === 1 ? 0 : cl.c.chest) + ".png", top, left, ratio);
    if (mod.indexOf("open") > -1)
        zcl.kneelSub("headOpen.png", top, left, ratio);
    else
        zcl.kneelSub("headClose.png", top, left, ratio);

    if (cl.c.hairLength !== null) {
        if (cl.c.hairLength < 2) {
            thisHair = "hair_" + cl.c.hairLength.toString() + "_" + cl.c.hairColor;
            zcl.kneelSub(thisHair + ".png", top, left, ratio);
        }
        else if (cl.c.hairStyle === "leia") {
            thisHair = "hair_2_" + cl.c.hairColor + "_leia";
            zcl.kneelSub(thisHair + ".png", top, left, ratio);
        }
        else {
            thisHair = "hair_" + cl.c.hairLength.toString() + "_" + cl.c.hairColor + "_" + cl.c.hairStyle;
            zcl.kneelSub(thisHair + ".png", top, left, ratio);
        }
    }
};

zcl.kneelSub = function (thisImage, top, left, ratio) {
    var btnWidth, btnHeight;
    btnWidth = 1500 * ratio * g.ratio;
    btnWidth = 1800 * ratio * g.ratio;
    top = top * g.ratio;
    left = left * g.ratio;
    $('#room-buttons').append('<img src="./images/mainChar/bj/' + thisImage + '" class="room-img" data-name="zzz-clothing-kill" style="width:' + btnWidth + 'px; height:' + btnHeight + 'px; top:' + top + 'px; left:' + left + 'px;" />');
};

zcl.assup = function (top, left, ratio, mod) {
    $('.room-img[data-name="zzz-clothing-kill"]').remove();

    var hairLength = "2_"
    if (cl.c.chest < 3)
        cl.assupSub("body_male.png", top, left, ratio);
    else
        cl.assupSub("body_female.png", top, left, ratio);

    if (cl.c.hairLength < 3)
        hairLength = "1_"

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
