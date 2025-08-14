//Room name
var room174 = {};
room174.main = function () {
    if (g.pass === "moveitMoveIt") {
        g.pass = null;
        nav.bg("174_oneOffCase/xdress0.jpg");
        chat(35, 174);
    }
    else if (g.pass === "privateMomFuck") {
        //
    }
    else if (g.pass === "evalolateachme") {
        g.pass = null;
        nav.bg("174_oneOffCase/teach0_0.jpg");
        zcl.displayMain(100, 800, .15, "clothes", false);
        if (sc.getMissionTask("eva", "teach", 0).notStarted) {
            sc.completeMissionTask("eva", "teach", 0);
            chat(63, 174);
            return;
        }
        if (g.gethourdecimal() > 22.0 || g.gethourdecimal() < 6) {
            chat(115, 174);
            return;
        }
        if (cl.c.shirt === "pl" && (cl.c.pants === "pl" || cl.c.pants === "pl1")) {
            cl.c.pants = "pl1";
            cl.display();
            sc.select("teach_bj", "174_oneOffCase/icon_bj.png", 0);
            sc.select("teach_twat", "174_oneOffCase/icon_twat.png", 1);
            sc.select("teach_anal", "174_oneOffCase/icon_anal.png", 2);
            sc.selectCancel("teach_end", 3);
        }
        else {
            sc.select("teach_brush", "174_oneOffCase/icon_brush.png", 0);
            sc.select("teach_makeup", "174_oneOffCase/icon_makeup.png", 1);
            sc.select("teach_kiss", "174_oneOffCase/icon_kissing.png", 2);
            sc.select("teach_practice", "174_oneOffCase/icon_practice.png", 3);
            sc.selectCancel("teach_end", 4);
        }
    }
    else if (g.pass === "case_elijah_origin") {
        g.pass = null;
        g.internal = 0;
        nav.bg("999_phone/black.jpg");
        char.newdayfake();
        char.settime(2, 0);
        chat(46, 174);
    }
    else if (missy.activecase().name === "case_goth") {
        if (g.pass === 174) {
            if (cl.c.panties === "b" && cl.c.shirt === null && cl.c.pants === null && cl.c.dress === null) {
                nav.bg("174_oneOffCase/goth6.jpg");
                chat(18, 174);
            }
            else {
                nav.bg("174_oneOffCase/goth5.jpg");
                nav.button({
                    "type": "btn",
                    "name": "wardrobe",
                    "left": 1684,
                    "top": 230,
                    "width": 236,
                    "height": 602,
                    "title": "Wardrobe",
                    "image": "10_mainchar/10_wardrobe.png"
                }, 174);
                chat(17, 174);
            }
        }
        else {
            nav.bg("174_oneOffCase/goth0.jpg");
            chat(0, 174);
        }
    }
};

room174.btnclick = function (name) {
    switch (name) {
        case "goth4":
            nav.killbutton("goth4");
            levels.oral(2, "n", "!bill", true);
            nav.bg("174_oneOffCase/goth4.jpg");
            chat(6, 174);
            break;
        case "wardrobe":
            g.pass = 174;
            char.room(8);
            break;
        case "teach_brush":
            nav.kill();
            nav.bg("174_oneOffCase/eva_brush.webp");
            if (!daily.get("teach_brushsister")) {
                daily.set("teach_brushsister")
                cl.c.lastHairCut += 10;
                levels.mod("xdress", 20);
            }
            chat(67, 174);
            break;
        case "teach_makeup":
            nav.kill();
            zcl.displayMain(100, 800, .15, "clothes", false);
            chat(69, 174);
            break;
        case "teach_kiss":
            nav.kill();
            zcl.displayMain(100, 800, .15, "clothes", false);
            chat(72, 174);
            break;
        case "teach_end":
            if (cl.c.pants === "pl1") {
                cl.c.pants = "pl";
                cl.display();
            }
            g.pass = null;
            char.room(13);
            break;
        case "teach_practice":
            if (cl.hasClothing("shirt", "pl")) {
                chat(95, 174);
            }
            else {
                nav.killbutton("teach_brush");
                nav.killbutton("teach_makeup"); 
                nav.killbutton("teach_kiss");
                nav.killbutton("teach_practice");
                nav.killbutton("teach_end");
                chat(76, 174);
            }
            break;
        case "teach_bj":
            nav.killbutton("teach_bj");
            nav.killbutton("teach_twat");
            nav.killbutton("teach_anal");
            nav.killbutton("teach_end");
            chat(86, 174);
            break;
        case "teach_twat":
            nav.kill();
            nav.bg("13_sisterRoom/rooml.jpg", "13_sisterRoom/roomNightl.jpg");
            nav.button({
                "type": "img",
                "name": "el_sex0",
                "left": 740,
                "top": 55,
                "width": 993,
                "height": 1025,
                "image": "174_oneOffCase/el_sex0.webp"
            }, 174);
            chat(96, 174);
            break;
        case "teach_anal":
            nav.kill();
            nav.bg("13_sisterRoom/rooml.jpg", "13_sisterRoom/roomNightl.jpg");
            nav.button({
                "type": "img",
                "name": "el_sex0",
                "left": 740,
                "top": 55,
                "width": 993,
                "height": 1025,
                "image": "174_oneOffCase/el_sex0.webp"
            }, 174);
            chat(104, 174);
            break;
        case "teachKissLola":
            if (!daily.get("teachKisssisters")) {
                daily.set("teachKisssisters");
                levels.mod("xdress", 20);
            }
            chat(74, 174);
            break;
        case "teachKissEva":
            if (!daily.get("teachKisssisters")) {
                daily.set("teachKisssisters");
                levels.mod("xdress", 20);
            }
            chat(75, 174);
            break;
        case "el_bj2":
            nav.killbutton("el_bj2");
            chat(90, 174);
            break;
        case "el_twat2":
            nav.kill();
            nav.bg("174_oneOffCase/el_twat2.webp");
            nav.next("el_twat3");
            break;
        case "el_twat3":
            nav.kill();
            nav.bg("174_oneOffCase/el_twat3_" + gender.pronoun("f") + ".webp");
            if (!daily.get("eatEvaTwat3")) {
                daily.set("eatEvaTwat3");
                levels.oral(3, "f", "eva", false);
                levels.piss(false, false, true, "f", "eva");
            }
            chat(101, 174);
            break;
        default:
            break;
    }
};

room174.chatcatch = function (callback) {
    switch (callback) {
        case "xdress1":
        case "xdress2":
        case "xdress3":
        case "xdress4":
        case "xdress5":
        case "xdress6":
        case "xdress7":
        case "xdress8":
        case "xdress10":
        case "club0":
        case "club1":
        case "club2":
        case "club3":
        case "club4":
        case "club5_a1":
        case "club5_a2":
        case "club5_a5":
        case "club6":
        case "club8":
        case "club9":
            nav.bg("174_oneOffCase/" + callback + ".jpg");
            break;
        case "goth1":
        case "goth2":
        case "goth3a":
        case "goth7":
        case "goth8":
        case "goth9":
        case "goth10":
        case "goth11":
        case "goth13":
            char.addtime(5);
            gv.mod("arousal", 3);
            nav.bg("174_oneOffCase/" + callback + ".jpg");
            break;
        case "el_bj1":
        case "el_bj3":
        case "el_bj4":
        case "el_asshole1":
        case "el_asshole6":
            nav.bg("174_oneOffCase/" + callback + ".webp");
            break;
        case "el_asshole5":
            nav.kill();
            nav.bg("174_oneOffCase/" + callback + ".webp");
            break;
        case "el_asshole2":
            if (!daily.get("evaEatAsshole2")) {
                daily.set("evaEatAsshole2");
                levels.oralass("f", "eva");
            }
            nav.bg("174_oneOffCase/" + callback + ".webp");
            break;
        case "el_bj2":
            nav.bg("174_oneOffCase/" + callback + ".webp");
            nav.next("el_bj2");
            break;
        case "goth12":
            char.addtime(5);
            nav.bg("174_oneOffCase/" + callback + ".jpg");
            cl.c.pants = "s";
            cl.c.shirt = "s";
            cl.c.socks = "b";
            cl.c.shoes = "d";
            cl.c.panties = "b";
            missy.set("activeCaseComplete", 1);
            cl.display();
            break;
        case "goth7a":
            nav.bg("10_mainchar/10_bedroom.png");
            break;
        case "goth3":
            nav.killbutton("goth3");
            char.addtime(5);
            nav.bg("174_oneOffCase/" + callback + ".jpg");
            nav.next("goth4")
            break;
        case "goth5":
            char.settime(11, 17);
            nav.bg("174_oneOffCase/" + callback + ".jpg");
            break;
        case "goth6":
            cl.add("panties", "b");
            nav.button({
                "type": "btn",
                "name": "wardrobe",
                "left": 1684,
                "top": 230,
                "width": 236,
                "height": 602,
                "title": "Wardrobe",
                "image": "7_mainCharRoomAlt/clickHere.png"
            }, 174);
            break;
        case "goth14":
            cl.c.panties = "b";
            cl.add("panties", "b");
            cl.remove("panties", "u");
            cl.remove("panties", "n");
            missy.set("reusableCaseCounter", 1);
            char.settime(17, 39);
            char.room(0);
            break;
        case "xdress9":
            nav.bg("174_oneOffCase/" + callback + ".jpg");
            cl.nude();
            cl.c.shoes = "sq";
            cl.c.socks = "sq";
            cl.c.shirt = "sq";
            cl.c.pants = "sq";
            cl.add("shoes", "sq");
            cl.add("socks", "sq");
            cl.add("shirt", "sq");
            cl.add("dress", "sq");
            cl.display();
            zcl.displayMain(300, 800, .09, "clothes", false);
            break;
        case "xdressEnd":
            char.room(210);
            break;
        case "club5_a3":
        case "club5_a4":
            var shirtGender = "m";
            if (cl.c.shirt === "b")
                shirtGender = "f";
            else
                shirtGender = gender.pronoun("m");
            nav.bg("174_oneOffCase/" + callback + shirtGender + ".jpg");
            break;
        case "club5_badEnd":
            missy.set("activeCaseComplete", 2);
            char.addtime(60);
            char.room(0);
            break;
        case "club_end":
            missy.set("activeCaseComplete", 1);
            levels.mod("pi", 75, 999);
            char.addtime(60);
            char.room(0);
            break;
        case "club7":
            char.addtime(97);
            nav.bg("174_oneOffCase/" + callback + ".jpg");
            break;
        case "evalolateachme1":
            g.pass = "evalolateachme";
            char.room(174);
            break;
        case "evalolateachme":
            char.addtime(90);
            g.pass = "evalolateachme";
            char.room(174);
            break;
        case "evalolateachmechange":
            cl.nude();
            cl.c.shirt = "pl";
            cl.c.pants = "pl1";
            g.pass = "evalolateachme";
            char.room(174);
            break;
        case "teachMakeup":
            if (!daily.get("teachMakeupsister")) {
                daily.set("teachMakeupsister");
                levels.mod("makeup", 50);
                levels.mod("xdress", 20);
            }
            nav.kill();
            nav.bg("174_oneOffCase/eva_makeup.webp");
            break;
        case "teachLolaKiss":
            nav.bg("24_spinTheBottle/013_spinBG.jpg");
            nav.button({
                "type": "kiss",
                "name": "teachKissLola",
                "left": 700,
                "top": 0,
                "width": 830,
                "height": 1080,
                "image": "24_spinTheBottle/dareKissMe_0_lola.png"
            }, 174);
            break;
        case "teachEvaKiss":
            nav.bg("24_spinTheBottle/013_spinBG.jpg");
            nav.button({
                "type": "kiss",
                "name": "teachKissEva",
                "left": 700,
                "top": 0,
                "width": 830,
                "height": 1080,
                "image": "24_spinTheBottle/dareKissMe_0_eva.png"
            }, 174);
            break;
        case "el_sex0":
            zcl.kill();
            nav.bg("13_sisterRoom/rooml.jpg", "13_sisterRoom/roomNightl.jpg");
            nav.button({
                "type": "img",
                "name": "el_sex0",
                "left": 740,
                "top": 55,
                "width": 993,
                "height": 1025,
                "image": "174_oneOffCase/el_sex0.webp"
            }, 174);
            
            break;
        case "el_sex1":
            cl.nude();
            cl.add("shirt", "pl");
            cl.add("pants", "pl");
            cl.c.shirt = "pl";
            cl.c.pants = "pl1";
            cl.display();
            zcl.displayMain(100, 930, .17, "clothes", false);
            nav.killbutton("el_sex0");
            nav.button({
                "type": "img",
                "name": "el_sex0",
                "left": 740,
                "top": 55,
                "width": 993,
                "height": 1025,
                "image": "174_oneOffCase/el_sex0.webp"
            }, 174);
            break;
        case "el_bj0":
            nav.kill();
            nav.bg("174_oneOffCase/el_bj0.webp");
            break;
        case "el_bj5":
            nav.bg("174_oneOffCase/el_bg.webp");
            zcl.bj(100, 500, 1.3, "open", false);
            nav.button({
                "type": "img",
                "name": "el_sex0",
                "left": 275,
                "top": 0,
                "width": 983,
                "height": 1080,
                "image": "174_oneOffCase/el_bj5.webp"
            }, 174);
            break;
        case "el_bj6":
            zcl.bj(100, 500, 1.3, "", false);
            nav.killbutton("el_sex0");
            nav.button({
                "type": "img",
                "name": "el_sex0",
                "left": 128,
                "top": 0,
                "width": 983,
                "height": 1080,
                "image": "174_oneOffCase/el_bj6.webp"
            }, 174);
            if (!daily.get("el_bj6")) {
                daily.set("el_bj6");
                levels.gavebj(3, "f", "eva");
            }
            break;
        case "el_twat0":
            nav.kill();
            nav.bg("174_oneOffCase/el_twat0.webp");
            break;
        case "el_twat1":
            nav.bg("174_oneOffCase/el_twat1.webp");
            zcl.double(450, 50, .45, "", true);
            nav.button({
                "type": "img",
                "name": "el_sex0",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "174_oneOffCase/el_twat1_t.webp"
            }, 174);
            nav.next("el_twat2");
            break;
        case "el_twat4":
            nav.kill();
            nav.bg("13_sisterRoom/rooml.jpg", "13_sisterRoom/roomNightl.jpg");
            nav.button({
                "type": "img",
                "name": "el_sex0",
                "left": 740,
                "top": 55,
                "width": 993,
                "height": 1025,
                "image": "174_oneOffCase/el_sex0.webp"
            }, 174);
            break;
        case "el_asshole7":
            nav.bg("13_sisterRoom/rooml.jpg", "13_sisterRoom/roomNightl.jpg");
            nav.button({
                "type": "img",
                "name": "el_sex0",
                "left": 740,
                "top": 55,
                "width": 993,
                "height": 1025,
                "image": "174_oneOffCase/el_sex0.webp"
            }, 174);
            if (!daily.get("lolaEatsAsshole7")) {
                daily.set("lolaEatsAsshole7");
                levels.gotbj("f", "lola");
                levels.sissygasm("f", "lola");
            }
            break;
        case "el_asshole0":
            nav.kill();
            nav.bg("174_oneOffCase/el_asshole0.webp");
            break;
        case "el_asshole3":
            nav.bg("174_oneOffCase/el_asshole3.webp");
            cl.c.panties = null;
            zcl.bent(220, 300, .5, "", true);
            nav.button({
                "type": "img",
                "name": "el_sex0",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "174_oneOffCase/el_asshole3_o.webp"
            }, 174);
            break;
        case "el_asshole4":
            nav.button({
                "type": "img",
                "name": "el_sex0",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "174_oneOffCase/el_asshole4.webp"
            }, 174);
            break;
        case "leave11":
            char.room(11);
            break;
        default:
            break;
    }
};

room174.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "me",
            text: "So we have to kill a few hours. Is there anywhere you want to go? ",
            button: [
                { chatID: 1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "!bill",
            text: "Take me to your house! I want to see how you live! ",
            button: [
                { chatID: 2, text: "I'm not taking you to my house. I don't even know you. ", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "!bill",
            text: "Fine! Take me to Toys 'n Us. I need to crank one out. ",
            button: [
                { chatID: 3, text: "Yeah. Lets go to Toys 'n Us", callback: "goth1" },
                { chatID: 10, text: "We can't go there! ", callback: "" },
            ]
        },
        {
            chatID: 3,
            speaker: "Candy",
            text: "Oh hi! I see you got yourself a little girlfriend. Are you here for some toys " +
                "or did you want to visit one of our booths? ",
            button: [
                { chatID: 4, text: "Hi, Just visiting the booths today. ", callback: "" }
            ]
        },
        {
            chatID: 4,
            speaker: "Candy",
            text: "Cool! Leave the cum on the walls. I love cleaning it up! ",
            button: [
                { chatID: 5, text: "Sure. ", callback: "goth2" }
            ]
        },
        {
            chatID: 5,
            speaker: "!bill",
            text: "So, do you want to suck it, or should I just paint the glass on my own? ",
            button: [
                { chatID: -1, text: "Oh yeah! ", callback: "goth3" },
                { chatID: 9, text: "Oh. No thanks ", callback: "goth3a" },
            ]
        },
        {
            chatID: 6,
            speaker: "!bill",
            text: "You look so pretty with my cum on your face.  ",
            button: [
                { chatID: 7, text: "...", callback: "" },
            ]
        },
        {
            chatID: 7,
            speaker: "thinking",
            text: "What the fuck am I doing? I just blew someone I just met. I'm supposed to be " +
                "working, and here I am sucking her dick at an adult porn store! Am I turning into " +
                "a real sissy? Am I a slut? ",
            button: [
                { chatID: 8, text: "...", callback: "" },
            ]
        },
        {
            chatID: 8,
            speaker: "!bill",
            text: "Hehe. Let's clean you face and go to your place. I need a place to relax. ",
            button: [
                { chatID: 10, text: "...", callback: "" },
            ]
        },
        {
            chatID: 9,
            speaker: "!bill",
            text: "That whore dancing is the best! I needed that. I clears my head. Let's head over " +
                "to your place. ",
            button: [
                { chatID: 10, text: "...", callback: "" },
            ]
        },
        {
            chatID: 10,
            speaker: "me",
            text: "I've never brought a girl over. Everyone would flip if they saw you. We should just " +
                "hang out at the mall. ",
            button: [
                { chatID: 11, text: "...", callback: "" },
            ]
        },
        {
            chatID: 11,
            speaker: "!bill",
            text: "I hate the mall. Bunch of the sunshine people there. All fake happy and empty. " +
                "I love seeing how other people live. Take me to your home or I'm leaving and you " +
                "won't find me!",
            button: [
                { chatID: 12, text: "Fine! But we're going straight to my room and you have to stay quiet and hidden.", callback: "" },
            ]
        },
        {
            chatID: 12,
            speaker: "!bill",
            text: "Deal! No one will hear or see me. Let's go! ",
            button: [
                { chatID: 13, text: "Deal.", callback: "goth5" },
            ]
        },
        {
            chatID: 13,
            speaker: "!bill",
            text: "So this is your room. It feels so incredibly... normal. No dirty plates, " +
                "no death metal posters, clothes put away. You're a normie aren't ya? ",
            button: [
                { chatID: 14, text: "What. No way. I'm not a normie. My life is so vida loca", callback: "" },
            ]
        },
        {
            chatID: 14,
            speaker: "!bill",
            text: "Prove it. I want to do a fashion show. ",
            button: [
                { chatID: 15, text: "I guess. Everyone's gone for the day. What do you want to fashion? ", callback: "" },
            ]
        },
        {
            chatID: 15,
            speaker: "!bill",
            text: "Hahaha Great! We'll try on each other's underwear. I'll model yours, and you model mine. ",
            button: [
                { chatID: 16, text: "Sure. ", callback: "" },
            ]
        },
        {
            chatID: 16,
            speaker: "!bill",
            text: "You first. Change in the closet then come out and put on a show for me.  ",
            button: [
                { chatID: -1, text: "Yes! Gimmie your panties! I'll go in the closet and change. ", callback: "goth6" },
            ]
        },
        {
            chatID: 17,
            speaker: "!bill",
            text: "Just come out in my panties. Nothing else chicken! ",
            button: [
                { chatID: -1, text: "Oh yeah. ok ", callback: "" },
            ]
        },
        {
            chatID: 18,
            speaker: "!bill",
            text: "Sexy! Now hop on that bed and show me that butt! ",
            button: [
                { chatID: 19, text: "Ok! ", callback: "goth7" },
            ]
        },
        {
            chatID: 19,
            speaker: "!bill",
            text: "You have such a great butt! I love it! I want to bury my face in it! Ok. " +
                "it's my turn to fashion show you! ",
            button: [
                { chatID: 20, text: "Yeah! ", callback: "goth7a" },
            ]
        },
        {
            chatID: 20,
            speaker: "thinking",
            text: "Ohhh. I wonder which pair she'll wear? Can't wait to see her hot body. ",
            button: [
                { chatID: 21, text: "...", callback: "goth8" },
            ]
        },
        {
            chatID: 21,
            speaker: "me",
            text: "Wow! Nice. You look hot in my underwear! ",
            button: [
                { chatID: 22, text: "...", callback: "" },
            ]
        },
        {
            chatID: 22,
            speaker: "!bill",
            text: "These are really comphy and soft. So are you ready for round two?  ",
            button: [
                { chatID: 23, text: "Round two?", callback: "" },
            ]
        },
        {
            chatID: 23,
            speaker: "!bill",
            text: "We're moving to the socks and shoes. Just the socks and shoes. You put on my " +
                "stockings and heels, and I'll wear your socks and shoes. Just your socks and shoes. ",
            button: [
                { chatID: 25, text: "Fuck yeah! I'm going to the closet to change! ", callback: "goth9" },
                { chatID: 34, text: "No. That's too far. I don't want to do that. ", callback: "" },
            ]
        },
        {
            chatID: 24,
            speaker: "!bill",
            text: "Not used ",
            button: []
        },
        {
            chatID: 25,
            speaker: "thinking",
            text: "My legs feel so silky smoothing in these stockings! I should get some. I'm going " +
                "to look so sexy for Bill. Fuck that, I'm going to look so sexy for me! ",
            button: [
                { chatID: 26, text: "...", callback: "goth10" },
            ]
        },
        {
            chatID: 26,
            speaker: "landlord",
            text: "Why is there a half naked girl in your room! And why are you naked in the closet trying " +
                "on women's stockings? ",
            button: [
                { chatID: 27, text: "I uhh...", callback: "" },
            ]
        },
        {
            chatID: 27,
            speaker: "landlord",
            text: "Don't even talk, 'cause I know you're going to lie! She's cute, but back in my day " +
                "we took off each other's clothing, not traded clothes. I'm going to have to teach " +
                "you two how to have sex properly. But right now I have to get back to work. I just " +
                "needed to grab my lunch. Be gentle and listen to what she says. Bye honey. ",
            button: [
                { chatID: 28, text: "ok", callback: "goth11" },
            ]
        },
        {
            chatID: 28,
            speaker: "me",
            text: "Sorry about that. I didn't know my " + sc.n("landlord") + " would be here. ",
            button: [
                { chatID: 29, text: "...", callback: "" },
            ]
        },
        {
            chatID: 29,
            speaker: "!bill",
            text: "I almost had a heart attack when she came in. Sorry I couldn't warn you, I totally " +
                "froze. It's a good thing I had your underwear on or she would have seen my little boner " +
                "sticking up. Hahaha",
            button: [
                { chatID: 30, text: "haha.. oh wow. That would have been a different conversation. ", callback: "" },
            ]
        },
        {
            chatID: 30,
            speaker: "!bill",
            text: "So, I think the moment's passed. You should wear my panties when we walk to " +
                "the train. I'm going to get dressed.  ",
            button: [
                { chatID: 31, text: "Yeah. I guess we should get going. ", callback: "goth12" },
            ]
        },
        {
            chatID: 31,
            speaker: "!bill",
            text: "Bye! It was nice just spending time with you. Sometimes it's nice just to " +
                "be normal. I've been on the run from the cult for so long I've forgotten what " +
                "a normal house looks like. Thank you.",
            button: [
                { chatID: 32, text: "I had fun too. ", callback: "" },
            ]
        },
        {
            chatID: 32,
            speaker: "!bill",
            text: "By the way, I know a future sissy when I " +
                "see one, so when I was in your closet I helped you out! Bye bye! ",
            button: [
                { chatID: 33, text: "Helped me out? Wait.. ", callback: "goth13" },
            ]
        },
        {
            chatID: 33,
            speaker: "thinking",
            text: "What did she mean that she helped me out when she was in my closet? ",
            button: [
                { chatID: -1, text: "Wait... ", callback: "goth14" },
            ]
        },
        {
            chatID: 34,
            speaker: "!bill",
            text: "Oh, ok. I'll go if you should wear my panties when we walk to " +
                "the train. I'm going to get dressed now lame-o.  ",
            button: [
                { chatID: 31, text: "Sure what ever gets us going. ", callback: "goth12" },
            ]
        },
        {
            chatID: 35,
            speaker: "martha",
            text: "Ah,ladies! A most delightful welcome to you all. You've diligently traversed the path " +
                "of a trainee, and now you stand proudly as full-fledged sissies.  To celebrate this momentous " +
                "occasion, it's time to bid farewell to those, shall we say, less distinguished garments. " +
                "Fear not, for I have prepared a selection of outfits far more befitting your newfound " +
                "status. I shall call each of you forward in turn, and you'll receive your new attire for " +
                "the remainder of your classes.",
            button: [
                { chatID: 36, text: "OOooo", callback: "xdress1" },
            ]
        },
        {
            chatID: 36,
            speaker: "martha",
            text: "Ah, Chris, isn't that simply delightful! Your youthful charm and slight frame are simply perfect for a darling baby doll dress. And what a simply smashing shade of pink!  I can just imagine how it will complement your complexion.  And don't forget the wig, my dear! A touch of whimsy never goes amiss.Why, I daresay you'll be the belle of the ball, turning heads and captivating hearts in such an ensemble. A true gentleman wouldn't be able to resist such a charming display!",
            button: [
                { chatID: 38, text: "...", callback: "xdress3" },//xdress2
            ]
        },
        {
            chatID: 37,
            speaker: "martha",
            text: "Jeremy, my dear! Look at you, a true diamond in the rough. Today, we shall transform that gentlemanly spirit into the radiant lady you were always meant to be.This exquisite lace top, with its delicate frills, will dance around your form, creating a most charming silhouette.And fret not a single bit about your chest, for femininity comes in all shapes and sizes.Now, this cunning little girdle here will work wonders, nipping in your waist and emphasizing those delightful hips of yours. ",
            button: [
                { chatID: 38, text: "...", callback: "xdress3" },
            ]
        },
        {
            chatID: 38,
            speaker: "martha",
            text: "Kareem, that simply divine shade of purple! It absolutely accentuates your most charming legs, wouldn't you agree? A touch of boldness is just the ticket to draw out the marvelous woman I know resides within you. Remember, darling, confidence is the most exquisite accessory one can possess. Now, go forth and blossom, my dear. I can't wait to witness the truly remarkable woman you'll become.",
            button: [
                { chatID: 39, text: "...", callback: "xdress4" },
            ]
        },
        {
            chatID: 39,
            speaker: "martha",
            text: "Oh, Martin, my dear!  You simply must be the most delightful transformation we've ever had the pleasure of witnessing.  When you first arrived, a gruff little fellow indeed, wouldn't you agree? But look at you now, a positively charming and wonderful lady!  My heart simply brims with pride for all the progress you've made. Truly, a triumph!",
            button: [
                { chatID: 40, text: "...", callback: "xdress5" },
            ]
        },
        {
            chatID: 40,
            speaker: "martha",
            text: "Ah, Philbert, there you are. My most... challenging pupil. Today, I've selected a rather unassuming ensemble for your transformation. A long dress, wouldn't you know, perfect for keeping those... exuberant tendencies nicely under wraps. Now, do try to see if we can cultivate a touch of decorum, shall we?",
            button: [
                { chatID: 45, text: "...", callback: "xdress10" },
            ]
        },
        {
            chatID: 41,
            speaker: "martha",
            text: "Ah, Sporty, this simply darling ensemble will perfectly capture your inherent femininity.It allows for the utmost comfort and mobility, ensuring you can continue your active pursuits without a moment's worry.  Imagine, gracefully gliding through your day, a vision of both elegance and practicality. Now, wouldn't that be simply splendid?",
            button: [
                { chatID: 42, text: "...", callback: "xdress7" },
            ]
        },
        {
            chatID: 42,
            speaker: "martha",
            text: "My, my, how delightful to meet Sinéad!  What a charming name, indeed. It suits her so much better, wouldn't you agree? I remember when dear Thomas first arrived, a quiet little bookworm, nose always buried in a tome. One couldn't help but wonder if she'd ever blossom. But blossom she has! Look at her now, Sinéad, radiant and beautiful. It's truly heartwarming to see such a transformation. Quite a testament to finding one's true self, wouldn't you say?",
            button: [
                { chatID: 43, text: "...", callback: "xdress8" },
            ]
        },
        {
            chatID: 43,
            speaker: "martha",
            text: "My, my, isn't Trixy a vision? Formerly Timothy, you see. Quite the transformation, wouldn't you agree? Our little scientific marvel, the transformation pill, has done wonders, wouldn't you say? A touch of science to bring out the true you, the radiant woman just waiting to blossom. Just a little pill, and your inner beauty can finally take center stage.  ",
            button: [
                { chatID: 44, text: "...", callback: "xdress9" },
            ]
        },
        {
            chatID: 44,
            speaker: "martha",
            text: "Finally our favorite pupil, " + sc.n("me") + ". Missy has personally chosen this outfit " +
                "to accentuate what she calls 'Her slutty desires to be impaled by every cock in the room.' " +
                "Her exposed midriff displays her toned figure, low cut top displays her femininity, " +
                "and short skirt signals that she is ready for breeding. Now everyone return to the waiting room. " +
                "Your next selection of classes await. I'm so excited to see you take the next step! ",
            button: [
                { chatID: -1, text: "...", callback: "xdressEnd" },
            ]
        },
        {
            chatID: 45,
            speaker: "martha",
            text: "Here's " + sc.n("ralph") + ". *sigh* ",
            button: [
                { chatID: 41, text: "...", callback: "xdress6" },
            ]
        },
        {
            chatID: 46,
            speaker: "thinking",
            text: "I'm just going to take a nap before I have to go to the club since it looks " +
                "like I'll be up all night. ",
            button: [
                { chatID: 47, text: "[Wake up and go to the club]", callback: "club0" },
            ]
        },
        {
            chatID: 47,
            speaker: "me",
            text: "Hi Mr. Rex I'm here to...",
            button: [
                { chatID: 48, text: "...", callback: "" },
            ]
        },
        {
            chatID: 48,
            speaker: "!rex",
            text: "One sec. Hey tits! Careful with those glasses. If you break another glass " +
                "tonight I'm going to have to punish you in my office. Now hurry up and finish cleaning " +
                "up. You're not getting overtime for being lazy. ",
            button: [
                { chatID: 49, text: "...", callback: "club1" },
            ]
        },
        {
            chatID: 49,
            speaker: "!rex",
            text: "Let me take you to the dance floor where that piece of shit has been doing his " +
                "thing.",
            button: [
                { chatID: 50, text: "ok", callback: "club2" },
            ]
        },
        {
            chatID: 50,
            speaker: "!rex",
            text: "I had that dumb waitress, tits, put this table here that you can hide under. " +
                "Don't fuck this up. I fucking sick of ordering the busboy to clean up shit off " +
                "my floor. Plus it's bad for business. It needs to stop tonight. ok?",
            button: [
                { chatID: 51, text: "I'll catch him tonight! ", callback: "" },
            ]
        },
        {
            chatID: 51,
            speaker: "!rex",
            text: "Good. Now get under that table and don't fuck this up. ",
            button: [
                { chatID: 52, text: "Yes sir. ", callback: "club3" },
            ]
        },
        {
            chatID: 52,
            speaker: "thinking",
            text: "It's so cramped in here. Hopefully he comes quickly so I don't have to spen " +
                "the entire night squatting under this table. Oh it's the waitress. She's so hot! " +
                "hopefully it's her so I can get done with this case. ",
            button: [
                { chatID: 53, text: "...", callback: "club4" },
            ]
        },
        {
            chatID: 53,
            speaker: "thinking",
            text: "Not that is a tight pussy! I can smell her musky scent. So hot! I want to " +
                "bury my face in that pussy. I wonder what she would do if I reached out and " +
                "touched it. That's stupid. She'll totally get pissed. But she didn't seem to get " +
                "mad when Mr. Rex called her tits. Maybe she's down. I shouldn't though. But she " +
                "does seem like a slut. ",
            button: [
                { chatID: 59, text: "Just do your job ", callback: "club6" },
                { chatID: 54, text: "Touch her pussy with your finger. ", callback: "club5_a1" }
            ]
        },
        {
            chatID: 54,
            speaker: "thinking",
            text: "It's so warm and moist. Oh. She just moaned. She's totally into it. " +
                "I wonder if she'll let me slide down her shorts and see her pussy...",
            button: [
                { chatID: 55, text: "Slide down her shorts", callback: "club5_a2" },
            ]
        },
        {
            chatID: 55,
            speaker: "thinking",
            text: "Holy shit! She let me take down her shorts and she's not wearing panties! " +
                "Fuck she's dripping wet. Fuck I have to taste her pussy.",
            button: [
                { chatID: 56, text: "[Eat her pussy]", callback: "club5_a3" },
            ]
        },
        {
            chatID: 56,
            speaker: "thinking",
            text: "Fuck yeah! I knew some girls were sluts, but I never knew I would be face " +
                "deep in one! I love this girl!",
            button: [
                { chatID: 57, text: "...", callback: "club5_a4" },
            ]
        },
        {
            chatID: 57,
            speaker: "!rex",
            text: "What the FUCK!!!",
            button: [
                { chatID: 58, text: "huh?", callback: "club5_a5" },
            ]
        },
        {
            chatID: 58,
            speaker: "!rex",
            text: "The Mad Pooper stuck again! Tits, clean this shit up. And you PI Punk! " +
                "Get the hell out of my club 'cause you're fucking fired. ",
            button: [
                { chatID: -1, text: "Aw crap. Missy's going to be pissed. ", callback: "club5_badEnd" },
            ]
        },
        {
            chatID: 59,
            speaker: "thinking",
            text: "I'm not going to grab her pussy. I'm not that kind of guy. But I can still " +
                "smell her pussy. Those shorts must be holding all the sweat and pussy juice " +
                "from working all night. I really should have tried to finger her. Oh well...",
            button: [
                { chatID: 60, text: "[Wait...]", callback: "club7" },
            ]
        },
        {
            chatID: 60,
            speaker: "thinking",
            text: "Holy crap. Someone's walking in. I just need to take a picture really quick.",
            button: [
                { chatID: 61, text: "[Take picture]", callback: "club8" },
            ]
        },
        {
            chatID: 61,
            speaker: "thinking",
            text: "Shit he moved! Crap I forgot to take off the camera sound effect. Crap crap crap!",
            button: [
                { chatID: 62, text: "[Chase after him]", callback: "club9" },
            ]
        },
        {
            chatID: 62,
            speaker: "thinking",
            text: "Damn! He's fast. Fuck. Hopefully there's enough here to figure out who he " +
                "is. I'll send this to Missy and call it a night. ",
            button: [
                { chatID: -1, text: "[Send picture to Missy and go home]", callback: "club_end" },
            ]
        },
        {
            chatID: 63,
            speaker: "me",
            text: "I uh... don't suppose you two could teach me stuff?",
            button: [
                { chatID: 64, text: "...", callback: "" },
            ]
        },
        {
            chatID: 64,
            speaker: "lola",
            text: "Stuff?",
            button: [
                { chatID: 65, text: "Yeah.. you know. I know you two like...", callback: "" },
            ]
        },
        {
            chatID: 65,
            speaker: "eva",
            text: "Oh hahahaha! I know what she wants! You want to dyke out with us don't you? " +
                "What do you think " + sc.n("lola") + ", does she want to learn how to be a girl " +
                "or get a taste of our girl dicks? ",
            button: [
                { chatID: 66, text: "oh. uhhh. yeah", callback: "" },
            ]
        },
        {
            chatID: 66,
            speaker: "lola",
            text: "Oh. huh. I guess we're all girls so it's ok. Unless you mean you just want to " +
                "talk about makeup and boys. Then that's ok too. I know being a girl is new so " +
                "we'll leave it up to you. ",
            button: [
                { chatID: -1, text: "Oh cool. Ok", callback: "evalolateachme1" },
            ]
        },
        {
            chatID: 67,
            speaker: "lola",
            text: "I totally love your hair. It's so soft and smooth. I swear new girls have the " +
                "best hair without even trying. You know brushing your hair makes it grow faster. ",
            button: [
                { chatID: 68, text: "...", callback: "" },
            ]
        },
        {
            chatID: 68,
            speaker: "eva",
            text: "Awww. I guess even perverts make pretty girls! ",
            button: [
                { chatID: -1, text: "That's why you're so hot!", callback: "evalolateachme" },
            ]
        },
        {
            chatID: 69,
            speaker: "lola",
            text: "I can't look like a clown, maybe should practice on " + sc.n("eva") + ". " +
                "Besides she owes me one for helping her pass Introduction to Nutrition 101. ",
            button: [
                { chatID: 70, text: "I'm offended", callback: "" },
            ]
        },
        {
            chatID: 70,
            speaker: "eva",
            text: "It's cool. But you're going to owe me some study time with Introduction " +
                "to Communications. Also I'm going to take my shirt off. Can't have your sloppy makeup " +
                "skills getting my shirt all dirty. Makeup can be a bitch to get out. ",
            button: [
                { chatID: 71, text: "Oh sweet! I get to practice! ", callback: "teachMakeup" },
            ]
        },
        {
            chatID: 71,
            speaker: "eva",
            text: "Ugh. I look like a clown and a stripper got in a head on crash and smashed " +
                "their faces together. ",
            button: [
                { chatID: -1, text: "...", callback: "evalolateachme" },
            ]
        },
        {
            chatID: 72,
            speaker: "eva",
            text: "I taught " + sc.n("lola") + " everything she knows about kissing! ",
            button: [
                { chatID: 73, text: "...", callback: "" },
            ]
        },
        {
            chatID: 73,
            speaker: "lola",
            text: "She did. I do love the french kissing, but only when I'm all worked up, " +
                "otherwise it's kind gross. So who do you want to practice kissing with? ",
            button: [
                { chatID: -1, text: sc.n("lola"), callback: "teachLolaKiss" },
                { chatID: -1, text: sc.n("eva"), callback: "teachEvaKiss" },
            ]
        },
        {
            chatID: 74,
            speaker: "lola",
            text: "MMmmm the pefect amout of tongue. You're really a great kisser you know.",
            button: [
                { chatID: -1, text: "MMmmmMMmm", callback: "evalolateachme" },
            ]
        },
        {
            chatID: 75,
            speaker: "eva",
            text: "Sometimes I think you're just this pervert that is trying to sneak into the " +
                "girls locker room, but sometimes I think you're a girl, like the way you kiss. " +
                "It's so feminine, like " + sc.n("lola") + ". ",
            button: [
                { chatID: -1, text: "MMmmMMmm", callback: "evalolateachme" },
            ]
        },
        {
            chatID: 76,
            speaker: "eva",
            text: "Should we tell her?",
            button: [
                { chatID: 77, text: "hmmm?", callback: "" },
            ]
        },
        {
            chatID: 77,
            speaker: "lola",
            text: "Yeah! Totally. I got her, a new costume! ",
            button: [
                { chatID: 78, text: "Got what? ", callback: "" },
            ]
        },
        {
            chatID: 78,
            speaker: "eva",
            text: "Really? You are too nice. I would have made her play in her panties, but I'm " +
                "totally excited to see what you got! ",
            button: [
                { chatID: 79, text: "What!", callback: "" },
            ]
        },
        {
            chatID: 79,
            speaker: "lola",
            text: "I couldn't let her be the only one not dressed up. It's might be a little much, " +
                "but I think she'll like it. The pink really fits her. ",
            button: [
                { chatID: 80, text: "GOT ME WHAT?!?!?!", callback: "el_sex0" },
            ]
        },
        {
            chatID: 80,
            speaker: "eva",
            text: "Our practice sex clothes dummy! Now put on the clothes " + sc.n("lola") + 
                " got for you! ",
            button: [
                { chatID: 81, text: "!", callback: "el_sex1" },
            ]
        },
        {
            chatID: 81,
            speaker: "thinking",
            text: "Holy crap! I'm so giddy like a school girl! This is the best! ",
            button: [
                { chatID: 82, text: "!", callback: "" },
            ]
        },
        {
            chatID: 82,
            speaker: "me",
            text: "So why do I have a strap on?",
            button: [
                { chatID: 83, text: "...", callback: "" },
            ]
        },
        {
            chatID: 83,
            speaker: "lola",
            text: "Oh. Becuase you're a girl. Girl's don't have penises. ",
            button: [
                { chatID: 84, text: "...", callback: "" },
            ]
        },
        {
            chatID: 84,
            speaker: "eva",
            text: "Also it's sex practice, not try and fuck us you pervert! " + sc.n("lola") +
                " and I started doing this when I lost my virginity. I was so scared and bad " +
                "at sex we promised each other we would help get better at sex and make it not " +
                "so scary. ",
            button: [
                { chatID: 85, text: "Oh.", callback: "" },
            ]
        },
        {
            chatID: 85,
            speaker: "lola",
            text: "Yeah. She was a mess. Also I just like the purple dildo. I thought it would " +
                "look super cute on you! ",
            button: [
                { chatID: -1, text: "Thanks! It does look cute on me. You're the best! ", callback: "evalolateachme" },
            ]
        },
        {
            chatID: 86,
            speaker: "eva",
            text: "Sweet! We usually take turns. I'll blow " + sc.n("lola") + " first! ",
            button: [
                { chatID: 87, text: "ok!", callback: "el_bj0" },
            ]
        },
        {
            chatID: 87,
            speaker: "eva",
            text: "She's so gentle with her dick. I wish guys were this nice when they put their " +
                "dicks in my mouth. Now " + sc.n("lola") + " it's your turn to blow " + sc.n("me") +
                ". You'll love her blow jobs. She's so caring when she sucks a dick. ",
            button: [
                { chatID: 88, text: "sweet!", callback: "el_bj1" },
            ]
        },
        {
            chatID: 88,
            speaker: "lola",
            text: "lalalala  ",
            button: [
                { chatID: 89, text: "What are you doing? ", callback: "" },
            ]
        },
        {
            chatID: 89,
            speaker: "lola",
            text: "I was told it's sexy when a girl sings to your penis and licks the bottom. ",
            button: [
                { chatID: -1, text: "Girl, just suck the penis", callback: "el_bj2" },
            ]
        },
        {
            chatID: 90,
            speaker: "lola",
            text: "Holy crap girl! You need to breathe! ",
            button: [
                { chatID: 91, text: "...", callback: "el_bj3" },
            ]
        },
        {
            chatID: 91,
            speaker: "lola",
            text: "How was that? When I swim I've been practicing holding my breathe. " +
                "Would that make you cum if you were a boy? ",
            button: [
                { chatID: 92, text: "That would scare me! You don't just go deep, you have to move your head! ", callback: "el_bj4" },
            ]
        },
        {
            chatID: 92,
            speaker: "eva",
            text: "You like my penis? I wanted a bigger one, but " + sc.n("lola") + " said " +
                "no way in hell! Go on, show " + sc.n("lola") + " how to properly suck a cock! ",
            button: [
                { chatID: 93, text: "MMmm yes!", callback: "el_bj5" },
            ]
        },
        {
            chatID: 93,
            speaker: "eva",
            text: "Take notes " + sc.n("lola") + "! That's a real cock sucker! See how she " +
                "makes love to my strap on with her mouth! Wow! You're going to make some " +
                "boy really happy someday. Hehehehe!",
            button: [
                { chatID: 94, text: "*sssllluuurrrppp*", callback: "el_bj6" },
            ]
        },
        {
            chatID: 94,
            speaker: "lola",
            text: "Hehehe. You are cute when you suck on her penis. That was so much fun! ",
            button: [
                { chatID: -1, text: "Yeahhhh ❤️❤️❤️", callback: "evalolateachme" },
            ]
        },
        {
            chatID: 95,
            speaker: "lola",
            text: "Yeah! Let's get changed! ",
            button: [
                { chatID: -1, text: "[Change]", callback: "evalolateachmechange" },
            ]
        },
        {
            chatID: 96,
            speaker: "lola",
            text: "Yeah. When it's just " + sc.n("eva") + " and I she always takes bottom " +
                "'cause she's so lazy!",
            button: [
                { chatID: 97, text: "...", callback: "" },
            ]
        },
        {
            chatID: 97,
            speaker: "eva",
            text: "No. I get bottom becuase you try to thrust your hips into me and nearly broke " +    
                "my nose! Also it like to grab and spread you butt. Hehe. ",
            button: [
                { chatID: 98, text: "...", callback: "" },
            ]
        },
        {
            chatID: 98,
            speaker: "lola",
            text: "*ugh* I know. You also like to sneak attack my butthole with your finger. I " +
                "get the couch you two get to kneel!",
            button: [
                { chatID: 99, text: "...", callback: "" },
            ]
        },
        {
            chatID: 99,
            speaker: "eva",
            text: "I get next! " + sc.n("me") + " you have to eat my pussy! ",
            button: [
                { chatID: 100, text: "oh. Sweet!", callback: "el_twat0" },
            ]
        },
        {
            chatID: 100,
            speaker: "thinking",
            text: "I love how her ass is just out waiting to let me eat it. My " + sc.n("el") +
                "are the best! ",
            button: [
                { chatID: -1, text: "Eat that pussy!", callback: "el_twat1" },
            ]
        },
        {
            chatID: 101,
            speaker: "eva",
            text: "Hahaha Oh my god! Sorry! Sometimes when I orgasm I squirt. Like really hard! ",
            button: [
                { chatID: 102, text: "bluuuffffff", callback: "el_twat4" },
            ]
        },
        {
            chatID: 102,
            speaker: "lola",
            text: "Ehhhh. Let me get a towel and wipe your face. That's another reason why I " +
                "get to be on top when it's the two of us. Gives me a chance to move my head before " +
                "being covered in her piss. ",
            button: [
                { chatID: 103, text: "...", callback: "" },
            ]
        },
        {
            chatID: 103,
            speaker: "eva",
            text: "*hrumph* I keep saying, it's not piss, it's cum! That's how I cum. I'm just a " +
                "squirter!!! dammit!",
            button: [
                { chatID: -1, text: "...", callback: "evalolateachme" },
            ]
        },
        {
            chatID: 104,
            speaker: "eva",
            text: "I'm not eating your ass! " + sc.n("lola") + " can do that. She's the one that " +
                "loves licking buttholes! You can eat my ass! ",
            button: [
                { chatID: 105, text: "...", callback: "" },
            ]
        },
        {
            chatID: 105,
            speaker: "lola",
            text: "I wouldn't say I love it, but I it is nice to see if I can make you cum just " +
                "from licking your butthole. Makes me happy. But I don't mind eating " + sc.n("me") +
                "'s butthole. I'm pretty good at it! ",
            button: [
                { chatID: 106, text: "...", callback: "el_asshole0" },
            ]
        },
        {
            chatID: 106,
            speaker: "eva",
            text: "Lick up doggy! Eat my butthole! I know you dream about this every night! ",
            button: [
                { chatID: 107, text: "nom", callback: "el_asshole1" },
            ]
        },
        {
            chatID: 107,
            speaker: "eva",
            text: "MMmmm tickle my insides with your wet slimy tounge. I want to fart your saliva. ",
            button: [
                { chatID: 108, text: "[Eat that asshole]", callback: "el_asshole2" },
            ]
        },
        {
            chatID: 108,
            speaker: "eva",
            text: "OOoooo I like that. You're a great ass eater! So how's it taste pervert?",
            button: [
                { chatID: 109, text: "Hmmm. Like licking pennies", callback: "" },
            ]
        },
        {
            chatID: 109,
            speaker: "lola",
            text: "Ok. My turn! Spread those cheeks so I can bury my face in your butthole!!",
            button: [
                { chatID: 110, text: "[Give " + sc.n("lola") + " a turn eating your ass]", callback: "el_asshole3" },
            ]
        },
        {
            chatID: 110,
            speaker: "me",
            text: "Eat up buttercup!",
            button: [
                { chatID: 111, text: "...", callback: "el_asshole4" },
            ]
        },
        {
            chatID: 111,
            speaker: "eva",
            text: "Haha! Get in there! Really show her you know how to eat ass!",
            button: [
                { chatID: 112, text: "*happy noises*", callback: "el_asshole5" },
            ]
        },
        {
            chatID: 112,
            speaker: "me",
            text: "*uuugghhhh* ...feels so good... ...push harder....  uhhhhh",
            button: [
                { chatID: 113, text: "...", callback: "el_asshole6" },
            ]
        },
        {
            chatID: 113,
            speaker: "eva",
            text: "Hahaha! You came from getting your ass eaten! You are a slut!!!",
            button: [
                { chatID: 114, text: "*content moaning*", callback: "el_asshole7" },
            ]
        },
        {
            chatID: 114,
            speaker: "lola",
            text: "I don't do anything half-assed. I whole ass everthing I do! ",
            button: [
                { chatID: -1, text: "MMmMMmmmmm", callback: "evalolateachme" },
            ]
        },
        {
            chatID: 115,
            speaker: "lola",
            text: "*yawn* It's getting late. We're going to go to bed. ",
            button: [
                { chatID: -1, text: "ok. ", callback: "leave11" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};