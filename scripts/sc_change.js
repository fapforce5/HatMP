﻿
var scc = {};
scc.changeText = "";

scc.changes = [
    { name: "zoey", xdress: false, chest: 0, leg: 0, hair: 0, cock: 0, love: 0 },
    { name: "eva", xdress: false, chest: 0, leg: 0, hair: 0, cock: 0, love: 0 },
    { name: "lola", xdress: false, chest: 0, leg: 0, hair: 0, cock: 0, love: 0 },
    { name: "landlord", xdress: false, chest: 0, leg: 0, hair: 0, cock: 0, love: 0 },
    { name: "tiffany", xdress: false, chest: 0, leg: 0, hair: 0, cock: 0, love: 0 },
    { name: "missy", xdress: false, chest: 1, leg: 0, hair: 0, cock: 0, love: 0 },
    { name: "tina", xdress: false, chest: 0, leg: 0, hair: 0, cock: 0, love: 0 },
    { name: "cecilia", xdress: false, chest: 0, leg: 0, hair: 0, cock: 0, love: 0 },
    { name: "jones", xdress: false, chest: 0, leg: 0, hair: 0, cock: 0, love: 0 },
    { name: "cult", xdress: false, chest: 0, leg: 0, hair: 0, cock: 0, love: 0 },
    { name: "bodhi", xdress: false, chest: 0, leg: 0, hair: 0, cock: 0, love: 0 },
];

scc.getSet = function (name, characterCanSeeCock) {
    var changes = {
        xdress: null,
        chest: null,
        leg: null,
        hair: null,
        cock: null
    };
    for (var i = 0; i < scc.changes.length; i++) {
        if (scc.changes[i].name === name) {
            if (cl.isCrossdressing() && !scc.changes[i].xdress) {
                changes.xdress = true;
                scc.changes[i].xdress = true;
            }
            if (cl.c.chest !== scc.changes[i].chest) {
                changes.chest = cl.c.chest;
                scc.changes[i].chest = cl.c.chest;
            }
            if (cl.c.leg !== scc.changes[i].leg) {
                changes.leg = cl.c.leg;
                scc.changes[i].leg = cl.c.leg;
            }
            if (cl.c.hair !== scc.changes[i].hair) {
                changes.hair = cl.c.hair;
                scc.changes[i].hair = cl.c.hair;
            }
            if (cl.c.cock !== scc.changes[i].cock && characterCanSeeCock) {
                changes.cock = cl.c.cock;
                scc.changes[i].cock = cl.c.cock;
            }
        }
    }
    return changes;
};

scc.changesDiffernt = function (name, cock) {
    var i, ix;
    ix = null;
    var returnString = "";
    for (i = 0; i < scc.changes.length; i++) {
        if (scc.changes[i].name === name) {
            ix = i;
            i = 99999;
        }
    }
    if (ix !== null) {
        if (cl.isCrossdressing() && !scc.changes[ix].xdress) {
            returnString += scc.changesDifferntText(name, 0);
            scc.changes[ix].xdress = true;
        }
        if (cl.c.chest !== scc.changes[ix].chest) {
            if (cl.c.chest === 1)
                returnString = "You look a lot more fit! ";
            else
                returnString += scc.changesDifferntText(name, 1);
            scc.changes[ix].chest = cl.c.chest;
        }
        if (cl.c.leg !== scc.changes[ix].leg) {
            returnString += scc.changesDifferntText(name, 2);
            scc.changes[ix].leg = cl.c.leg;
        }
        if (cl.c.hairLength > scc.changes[ix].hair) {
            returnString += scc.changesDifferntText(name, 3);
            scc.changes[ix].hair = cl.c.hairLength;
        }
        if (cl.c.hairLength < scc.changes[ix].hair) {
            returnString += scc.changesDifferntText(name, 4);
            scc.changes[ix].hair = cl.c.hairLength;
        }
        if (cl.c.cock < scc.changes[ix].cock && cock) {
            returnString += scc.changesDifferntText(name, 5);
            scc.changes[ix].cock = cl.c.cock;
        }
    }
    if (returnString.length < 3) {
        scc.changeText = "";
        return false;
    }
    scc.changeText = returnString;
    return true;
};

scc.changesDifferntText = function (who, whatNum) {
    var comment = null;
    switch (who) {
        case "example":
            comment = [
                "0 xdress",
                "1 titties",
                "2 ass",
                "3 longer hair ",
                "4 shorter hair ",
                "5 cock"
            ];
            break;
        case "zoey":
            comment = [
                "Ooooo I love your new clothes! You're so sexy! ",
                "Oh wow, your chest is getting bigger! it looks like an " + cl.cupsize() + "! ",
                "I don't know what you're doing but your butt looks so much better! ",
                "I love the longer hair! It's so pretty! ",
                "Did you get a hair cut? I think it looks prettier longer. ",
                "Is your penis getting smaller? It's so much cuter! "
            ];
            break;
        case "eva":
            comment = [
                "Are you wearing girls clothes.. I thought wearing girls panties was weird, but I guess it makes sense now. ",
                "Hahahaha you're so obsessed with boobs you're growing your own! ",
                "Your butt is bigger than mine. ",
                "You hair is getting long. It looks like I'm getting a new sister! ",
                "That's a perverted hair cut. ",
                "Is your penis getting smaller? I liked it bigger. "
            ];
            break;
        case "lola":
            comment = [
                "Oh, you're wearing different clothes, I'm suprised. ",
                "Is you chest bigger? Are you ok? ",
                "You should go swimming with me, it looks like you butt is getting bigger. ",
                "You need a haircut, it's getting pretty long. ",
                "I love your hair! ",
                "Is your penis getting smaller? I liked it bigger. "
            ];
            break;
        case "landloard":
            comment = [
                "Why are you wearing girls clothes! That's disgusting! ",
                "Your chest is disgusting, you look less like my little boy and more like a girl each day. ",
                "You need to go on a diet, you ass is getting fat. ",
                "Go get your hair cut, you look like a girl. ",
                "I like your new haircut, it's more like a boy. ",
                "Why is your dick shrinking? "
            ];
            break;
        case "tiffany":
            comment = [
                "Ooooo I love your new clothes! You're so sexy! ",
                "Oh wow, your chest is getting bigger! it looks like an " + cl.cupsize() + "! ",
                "I don't know what you're doing but your butt looks so much better! ",
                "I love the longer hair! It's so pretty! ",
                "Did you get a hair cut? I think it looks prettier longer. ",
                "Is your penis getting smaller? It's so much cuter! "
            ];
            break;
        case "missy":
            comment = [
                "",
                "I like your new " + cl.cupsize() + " cups, they look good on you. ",
                "That a nice " + cl.buttsize() + " butt. It fits your well. ",
                "You look better with longer hair. ",
                "",
                "Is your penis getting smaller? You're getting more pathetic each day. "
            ];
            break;
        case "tina":
            comment = [
                "Ooooo I love your new clothes! You're so sexy!",
                "Oh wow, your chest is getting bigger! it looks like an " + cl.cupsize() + "!",
                "I don't know what you're doing but your butt looks so much better!",
                "I love the longer hair! It's so pretty! ",
                "Did you get a hair cut? I think it looks prettier longer",
                "Is your penis getting smaller? It's so much cuter! "
            ];
            break;
        case "cecilia":
            comment = [
                "Ooooo I love your new clothes! You're so sexy!",
                "Oh wow, your chest is getting bigger! it looks like an " + cl.cupsize() + "!",
                "I don't know what you're doing but your butt looks so much better!",
                "I love the longer hair! It's so pretty! ",
                "Did you get a hair cut? I think it looks prettier longer",
                "Is your penis getting smaller? It's so much cuter! "
            ];
            break;
        case "jones":
            comment = [
                "Ooooo I love your new clothes! You're so sexy!",
                "Oh wow, your chest is getting bigger! it looks like an " + cl.cupsize() + "!",
                "I don't know what you're doing but your butt looks so much better!",
                "I love the longer hair! It's so pretty! ",
                "Did you get a hair cut? I think it looks prettier longer",
                "Is your penis getting smaller? It's so much cuter! "
            ];
            break;
    }
    return comment[whatNum];
};

scc.save = function () {
    return $.extend(true, {}, scc.changes);
};

scc.load = function (ra) {
    var i, j;

    for (i = 0; i < scc.changes.length; i++) {
        scc.changes[i].xdress = false;
        scc.changes[i].chest = scc.changes[i].leg = scc.changes[i].hair = scc.changes[i].cock = scc.changes[i].love = 0;
        if (scc.changes[i].name === "missy")
            scc.changes[i].chest = 1;
    }
    $.each(ra, function (i, v) {
        for (j = 0; j < scc.changes.length; j++) {
            if (ra[i].name === scc.changes[j].name) {
                scc.changes[j].xdress = ra[i].xdress;
                scc.changes[j].chest = ra[i].chest;
                scc.changes[j].leg = ra[i].leg;
                scc.changes[j].hair = ra[i].hair;
                scc.changes[j].cock = ra[i].cock;
                scc.changes[j].love = ra[i].love;
                j = 99999;
            }
        }
    });
};

scc.love = function (name, amount, max) {
    var i, xi, chageOccured;
    xi = null;
    if (max == "undefined")
        max = null;
    for (i = 0; i < scc.changes.length; i++) {
        if (scc.changes[i].name === name) {
            xi = i;
            i = 99999;
        }
    }
    if (xi === null) {
        console.log("love miss - " + name);
    }
    else {
        if (max === null)
            max = 100;
        if (max > 100)
            max === 100;

        if (scc.changes[xi].love < max) {
            scc.changes[xi].love += amount;
            if (scc.changes[xi].love < -100)
                scc.changes[xi].love = -100;
            if (scc.changes[xi].love > max)
                scc.changes[xi].love = max;

             if (amount > 9)
                g.popUpNotice(sc.n(name) + " loved that ALOT ❤️❤️❤️ ");
            else if (amount > 0)
                g.popUpNotice(sc.n(name) + " loved that ❤️❤️❤️ ");
            else if(amount < -9)
                g.popUpNotice(sc.n(name) + " REALLY hated that 😡😡😡 ");
            else 
                g.popUpNotice(sc.n(name) + " hated that 😡😡😡 ");
        }
    }
};

scc.setlove = function (name, amount) {
    var i;
    for (i = 0; i < scc.changes.length; i++) {
        if (scc.changes[i].name === name) {
            scc.changes[i].love = amount;
            i = 999999;
        }
    }
};

scc.get = function (name) {
    var retVar = null;
    $.each(scc.changes, function (i, v) {
        if (v.name === name) {
            retVar = v;
            return true;
        }
    });
    return retVar;
};

scc.buildIcons = function () {
    var i;
    var top = -180;
    var left;
    for (i = 0; i < scc.changes.length; i++) {
        var tc = sc.get(scc.changes[i].name);
        if (i % 4 === 0)
            top += 300;
        left = ((i % 4) * 275) + 450;
        $('#menu_parent').append('<img src="./images/speaker/' + tc.image + '" style="position:absolute; ' + g.makeCss(150, 150, top, left + 30) + '" class="resize"  />');
        $('#menu_parent').append('<div style="background:#333; position:absolute; border-radius:50px; ' + g.makeCss(20, 200, top + 140, left) + '"</div>');
        if (scc.changes[i].love > 0)
            $('#menu_parent').append('<div style="background:#20c000; position:absolute; border-radius:0 50px 50px 0; ' + g.makeCss(20, scc.changes[i].love, top + 140, left + 100) + '"</div>');
        else if (scc.changes[i].love < 0)
            $('#menu_parent').append('<div style="background:#c02000; position:absolute; border-radius:50px 0 0 50px; ' + g.makeCss(20, Math.abs(scc.changes[i].love), top + 140, left + 100 + scc.changes[i].love ) + '"</div>');
    }
};