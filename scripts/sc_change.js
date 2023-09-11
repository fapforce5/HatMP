
var scc = {};
scc.changeText = "";

scc.changes = [
    { name: "zoey", xdress: false, chest: 0, leg: 0, hairLength: 0, hairColor: "black", cock: null, love: 0 },
    { name: "eva", xdress: false, chest: 0, leg: 0, hairLength: 0, hairColor: "black", cock: null, love: 0 },
    { name: "lola", xdress: false, chest: 0, leg: 0, hairLength: 0, hairColor: "black", cock: null, love: 0 },
    { name: "landlord", xdress: false, chest: 0, leg: 0, hairLength: 0, hairColor: "black", cock: null, love: 0 },
    { name: "tiffany", xdress: false, chest: null, leg: null, hairLength: null, hairColor: null, cock: null, love: 0 },
    { name: "missy", xdress: false, chest: null, leg: null, hairLength: null, hairColor: null, cock: null, love: 0 },
    { name: "tina", xdress: false, chest: null, leg: null, hairLength: null, hairColor: null, cock: null, love: 0 },
    { name: "cecilia", xdress: false, chest: null, leg: null, hairLength: null, hairColor: null, cock: null, love: 0 },
    { name: "jones", xdress: false, chest: null, leg: null, hairLength: null, hairColor: null, cock: null, love: 0 },
    { name: "cult", xdress: false, chest: null, leg: null, hairLength: null, hairColor: null, cock: null, love: 0 },
];

scc.getSet = function (name, characterCanSeeCock) {
    var changes = {
        anyChanges: false,
        xdress: null,
        chest: null,
        leg: null,
        hair: null,
        haircolor: null,
        cock: null
    };
    for (var i = 0; i < scc.changes.length; i++) {
        if (scc.changes[i].name === name) {
            //xdress
            if (scc.changes[i].xdress === null) {
                scc.changes[i].xdress = cl.isCrossdressing();
            }
            else if (cl.isCrossdressing() && !scc.changes[i].xdress) {
                changes.xdress = scc.changesDifferntText(name, "xdress");
                scc.changes[i].xdress = true;
            }

            //chest
            if (scc.changes[i].chest === null) {
                scc.changes[i].chest = cl.c.chest;
            }
            else if (cl.c.chest !== scc.changes[i].chest) {
                changes.xdress = scc.changesDifferntText(name, "chest");
                scc.changes[i].chest = cl.c.chest;
            }

            //leg (butt)
            if (scc.changes[i].leg === null) {
                scc.changes[i].leg = cl.c.leg;
            }
            else if (cl.c.leg !== scc.changes[i].leg) {
                changes.xdress = scc.changesDifferntText(name, "leg");
                scc.changes[i].leg = cl.c.leg;
            }

            //hair length
            if (scc.changes[i].hairLength === null) {
                scc.changes[i].hairLength = cl.c.hairLength;
            }
            else if (cl.c.hairLength !== scc.changes[i].hairLength) {
                changes.hairLength = changes.xdress = scc.changesDifferntText(name, "hairLength");
                scc.changes[i].hairLength = cl.c.hairLength;
            }

            //hair color
            if (scc.changes[i].hairColor === null) {
                scc.changes[i].hairColor = cl.c.hairColor;
            }
            else if (cl.c.hairColor !== scc.changes[i].hairColor) {
                changes.hairColor = changes.xdress = scc.changesDifferntText(name, "hairColor");
                scc.changes[i].hairColor = cl.c.hairColor;
            }

            if (scc.changes[i].cock === null) {
                scc.changes[i].cock = cl.c.cock;
            }
            else if (cl.c.cock !== scc.changes[i].cock && characterCanSeeCock) {
                changes.cock = changes.xdress = scc.changesDifferntText(name, "cock");
                scc.changes[i].cock = cl.c.cock;
            }
        }
    }
    changes.anyChanges = !(changes.xdress === null && changes.chest === null && changes.leg === null && changes.hair === null && changes.cock === null);
    return changes;
};

//kill this one
scc.changesDiffernt = function (name, cock) {
    return null;
};

scc.changesDifferntText = function (who, whichChange) {
    var comment = null;
    switch (whichChange) {
        case "xdress": num = 0; break;
        case "chest": num = 1; break;
        case "leg": num = 2; break;
        case "hairLength": num = 3; break;
        case "hairColor": num = 4; break;
        case "cock": num = 5; break;
    };
    var girlyHairColor = cl.c.hairColor === "pink" || cl.c.hairColor === "rainbow";
    switch (who) {
        case "zoey":
            comment = [
                "Ooooo I love your new clothes! You're so sexy! ",
                "Oh wow, your chest is getting bigger! it looks like an " + cl.cupsize() + "! ",
                "I don't know what you're doing but your butt looks so much better! ",
                "I love the longer hair! It's so pretty! ",
                girlyHairColor ? "That hair color is hot! Love it!" : "Your new hair looks pretty! ",
                "Is your penis getting smaller? It's so much cuter! "
            ];
            break;
        case "eva":
            comment = [
                "Are you wearing girls clothes.. I thought wearing girls panties was weird, but I guess it makes sense now. ",
                "Hahahaha you're so obsessed with boobs you're growing your own! ",
                "Your butt is bigger than mine. ",
                "You hair is getting long. It looks like I'm getting a new sister! ",
                girlyHairColor ? "Hahaha! You got your hair dyed like a girl!" : "That's a different hair color. ",
                "Is your penis getting smaller? I liked it bigger. "
            ];
            break;
        case "lola":
            comment = [
                "Oh, you're wearing different clothes, I'm suprised. ",
                "Is you chest bigger? Are you ok? ",
                "You should go swimming with me, it looks like you butt is getting bigger. ",
                "You need a haircut, it's getting pretty long. ",
                girlyHairColor ? "That's different. You should try something more masculine. " : "That's a new hair color. I like the old one better. ",
                "Is your penis getting smaller? I liked it bigger. "
            ];
            break;
        case "landloard":
            comment = [
                "Why are you wearing girls clothes! That's disgusting! ",
                "Your chest is disgusting, you look less like my little boy and more like a girl each day. ",
                "You need to go on a diet, you ass is getting fat. ",
                "Go get your hair cut, you look like a girl. ",
                girlyHairColor ? "That's a new hair color. You know every day I worry more and morea bout you." : "I liked your old hair color. ",
                "Why is your dick shrinking? "
            ];
            break;
        case "tiffany":
            comment = [
                "Ooooo I love your new clothes! You're so sexy! ",
                "Oh wow, your chest is getting bigger! it looks like an " + cl.cupsize() + "! ",
                "I don't know what you're doing but your butt looks so much better! ",
                "I love the longer hair! It's so pretty! ",
                girlyHairColor ? "Love the slutty new hair color! " : "You should dye your hair pink, to match your hole. ",
                "Is your penis getting smaller? It's so much cuter! "
            ];
            break;
        case "missy":
            comment = [
                "",
                "I like your new " + cl.cupsize() + " cups, they look good on you. ",
                "That a nice " + cl.buttsize() + " butt. It fits your well. ",
                "You look better with longer hair. ",
                girlyHairColor ? "Love the new sissy hair color! " : "You should dye your hair pink, to match your sissyness.. ",
                "Is your penis getting smaller? You're getting more pathetic each day. "
            ];
            break;
        case "tina":
            comment = [
                "Ooooo I love your new clothes! You're so sexy!",
                "Oh wow, your chest is getting bigger! it looks like an " + cl.cupsize() + "!",
                "I don't know what you're doing but your butt looks so much better!",
                "I love the longer hair! It's so pretty! ",
                girlyHairColor ? "Gross. Why did you dye your hair color like that! " : "Real men have dark hair.",
                "Is your penis getting smaller? It's so much cuter! "
            ];
            break;
        case "cecilia":
            comment = [
                "Ooooo I love your new clothes! You're so sexy!",
                "Oh wow, your chest is getting bigger! it looks like an " + cl.cupsize() + "!",
                "I don't know what you're doing but your butt looks so much better!",
                "I love the longer hair! It's so pretty! ",
                "Love the new hair color! So cute! ",
                "Is your penis getting smaller? It's so much cuter! "
            ];
            break;
        case "jones":
            comment = [
                "Ooooo I love your new clothes! You're so sexy!",
                "Oh wow, your chest is getting bigger! it looks like an " + cl.cupsize() + "!",
                "I don't know what you're doing but your butt looks so much better!",
                "I love the longer hair! It's so pretty! ",
                girlyHairColor ? "I see you've decided to dye your hair like the slut you are. " : "Your hair is too masculine. Dye it pink. ",
                "Is your penis getting smaller? It's so much cuter! "
            ];
            break;
    }
    return comment[num];
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