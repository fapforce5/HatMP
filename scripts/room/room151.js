//Room name
var room151 = {};
room151.main = function () {
    var onc = gv.get("oncase");
    if (onc === "clothes0") {
        if (g.pass === 151) {
            nav.bg("151_jones/changeRoomx.jpg");
            if (cl.c.lipstick === null || cl.c.makeup === null || cl.c.makeup === "n")
                chat(4, 151);
            else
                chat(5, 151);
        }
        else {
            nav.bg("151_jones/mainx.jpg");
            chat(0, 151);
        }
    }
    else if (onc === "clothes1") {
        if (g.pass === 151) {
            nav.bg("151_jones/changeRoomx.jpg");
            if (cl.c.lipstick === null || cl.c.makeup === null || cl.c.makeup === "n")
                chat(4, 151);
            else {
                nav.bg("151_jones/changeRoomx.jpg");
                chat(19, 151);
            }
        }
        else {
            nav.killall();
            nav.bg("151_jones/changeRoom.jpg");
            nav.button({
                "type": "btn",
                "name": "clothes0_2",
                "left": 1101,
                "top": 0,
                "width": 769,
                "height": 350,
                "image": "151_jones/mirror.png"
            }, 151);
            chat(18, 151);
        }
    }
    else if (onc === "clothes2") {
        if (g.pass === 151) {
            nav.bg("151_jones/changeRoomx.jpg");
            if (cl.c.lipstick === null || cl.c.makeup === null || cl.c.makeup === "n")
                chat(4, 151);
            else {
                nav.bg("151_jones/changeRoomxe.jpg");
                chat(31, 151);
            }
        }
        else {
            nav.killall();
            nav.bg("151_jones/changeRoom.jpg");
            nav.button({
                "type": "btn",
                "name": "clothes0_2",
                "left": 1101,
                "top": 0,
                "width": 769,
                "height": 350,
                "image": "151_jones/mirror.png"
            }, 151);
            chat(18, 151);
        }
    }
    else if (onc === "clothes3") {
        if (g.pass === 151) {
            nav.bg("151_jones/changeRoomx.jpg");
            if (cl.c.lipstick === null || cl.c.makeup === null || cl.c.makeup === "n")
                chat(4, 151);
            else {
                nav.bg("151_jones/changeRoomxe.jpg");
                chat(44, 151);
            }
        }
        else {
            nav.killall();
            nav.bg("151_jones/changeRoom.jpg");
            nav.button({
                "type": "btn",
                "name": "clothes0_2",
                "left": 1101,
                "top": 0,
                "width": 769,
                "height": 350,
                "image": "151_jones/mirror.png"
            }, 151);
            chat(18, 151);
        }
    }
};

room151.btnclick = function (name) {
    switch (name) {
        case "clothes0_2":
            g.pass = 151;
            char.room(27);
            break;
        case "redroom":
            nav.killall();
            nav.bg("151_jones/runway.jpg");
            zcl.displayMain(180, 760, .04, "clothes", false);
            nav.button({
                "type": "img",
                "name": "redroom",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "151_jones/runway.png"
            }, 151);
            chat(10, 151);
            break;
        default:
            break;
    }
};

room151.chatcatch = function (callback) {
    switch (callback) {
        case "clothes0_1":
            nav.killall();
            nav.bg("151_jones/changeRoomx.jpg");
            break;
        case "clothes0_2":
            nav.killall();
            nav.bg("151_jones/changeRoom.jpg");
            nav.button({
                "type": "btn",
                "name": "clothes0_2",
                "left": 1101,
                "top": 0,
                "width": 769,
                "height": 350,
                "image": "151_jones/mirror.png"
            }, 151);
            break;
        case "changeRoomxd":
            nav.bg("151_jones/changeRoomxd.jpg");
            break;
        case "changeRoomxd1":
            cl.c.shirt = cl.c.pants = cl.c.swimsuit = cl.c.pj = null;
            cl.c.dress = "rose";
            cl.display();
            nav.bg("151_jones/changeRoomx.jpg");
            break;
        case "changeRoomxd2":
            char.addtime(250);
            nav.bg("151_jones/redHallway.jpg");
            zcl.displayMain(100, 0, .22, "clothes", true);
            nav.button({
                "type": "btn",
                "name": "redroom",
                "left": 1147,
                "top": 406,
                "width": 88,
                "height": 503,
                "image": "151_jones/redHallwayDoor.png"
            }, 151);
            break;
        case "changeRoomxd3":
            nav.killall();
            nav.bg("151_jones/faces.jpg");
            break;
        case "changeRoomxd4a":
            nav.killall();
            nav.bg("151_jones/runway.jpg");
            zcl.displayMain(180, 850, .05, "clothes", false);
            break;
        case "changeRoomxd4":
            zcl.displayMain(200, 700, .12, "clothes", false);
            break;
        case "changeRoomxd5":
            zcl.displayMain(100, 660, .15, "clothes", true);
            break;
        case "changeRoomxd6":
            nav.killall();
            nav.bg("151_jones/redHallway1.jpg");
            break;
        case "changeRoomxd7":
            gv.set("oncase", null);
            gv.mod("money", 300);
            g.popUpNotice("You feel more comfortable wearing sexy clothes. ");
            g.sissy[31].ach = true;
            cl.add("dress", "rose");
            char.room(0);
            break;
        case "c1_1":
            cl.c.shirt = cl.c.pants = cl.c.swimsuit = cl.c.pj = null;
            cl.c.dress = "maid";
            cl.display();
            break;
        case "c1_2":
            char.addtime(250);
            nav.bg("151_jones/redHallway2.jpg");
            zcl.displayMain(200, 300, .2, "clothes", true);
            break;
        case "c1_3":
            nav.killall();
            nav.bg("151_jones/redHallway3.jpg");
            break;
        case "c1_4":
            nav.bg("151_jones/redHallway4.jpg");
            break;
        case "c1_5":
            cl.c.panties = cl.c.bra = null;
            nav.killall();
            nav.bg("151_jones/runway.jpg");
            zcl.displayMain(200, 700, .12, "clothes", false);
            if (cl.c.cock < 3)
                chat(26, 151);
            else
                chat(27, 151);
            break;
        case "c1_6":
            nav.bg("151_jones/redHallway5.jpg");
            break;
        case "c1_7":
            gv.set("oncase", null);
            gv.mod("money", 500);
            g.popUpNotice("You feel more comfortable with your body. You don't have to wear panties anymore. ");
            g.sissy[32].ach = true;
            cl.add("dress", "maid");
            char.room(0);
            break;
        case "c2_1":
            cl.nude();
            zcl.displayMain(100, 400, .23, "", true);
            break;
        case "c2_2":
            cl.c.shirt = "cor";
            cl.c.pants = "co";
            cl.display();
            zcl.displayMain(100, 400, .23, "clothes", true);
            break;
        case "c2_3":
            char.addtime(250);
            cl.c.accessories = "ballgag";
            cl.display();
            zcl.displayMain(100, 400, .23, "clothes", false);
            break;
        case "c2_4":
            nav.killall();
            nav.bg("151_jones/runway.jpg");
            zcl.displayMain(200, 700, .12, "clothes", false);
            break;
        case "c2_5":
            nav.killall();
            nav.bg("151_jones/faces.jpg");
            break;
        case "c2_6":
            nav.bg("151_jones/runway.jpg");
            zcl.displayMain(180, 850, .05, "clothes", true);
            break;
        case "c2_7":
            nav.killall();
            nav.bg("151_jones/redHallway1.jpg");
            break;
        case "c2_8":
            gv.set("oncase", null);
            gv.mod("money", 500);
            g.popUpNotice("You feel more comfortable with your body. You can buy slutty clothing now. ");
            g.sissy[33].ach = true;
            cl.add("shirt", "cor");
            cl.add("pants", "co");
            cl.c.accessories = null;
            cl.display();
            char.room(0);
            break;
        case "c3_1":
            nav.killall();
            nav.bg("151_jones/redHallway1.jpg");
            break;
        case "c3_2":
            cl.nude();
            break;
        case "c3_3":
            nav.killall();
            nav.bg("151_jones/redHallway6.jpg");
            break;
        case "c3_4":
            nav.killall();
            nav.bg("151_jones/runway.jpg");
            zcl.displayMain(200, 700, .12, "clothes", false);
            break;
        case "c3_5":
            nav.killall();
            nav.bg("151_jones/faces1.jpg");
            break;
        case "c3_6":
            nav.killall();
            nav.bg("151_jones/redHallway1.jpg");
            break;
        case "c3_7":
            nav.bg("151_jones/redHallway5.jpg");
            break;
        case "c3_8":
            gv.set("oncase", null);
            gv.mod("money", 1000);
            g.popUpNotice("You feel more comfortable with your body. You can walk around nude - be careful of the police. ");
            g.sissy[34].ach = true;
            char.room(0);
            break;
        default:
            break;
    }
};

room151.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "jones",
            text: "Hi slut, are you ready to do the fashion show?",
            button: [
                { chatID: 1, text: "oh, yeah", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "jones",
            text: "Good. Head downstairs and wait. The girls will get you when it's time. ",
            button: [
                { chatID: 2, text: "Sure", callback: "clothes0_1" }
            ]
        },
        {
            chatID: 2,
            speaker: "govlady",
            text: "So we have ourselves a catwalk virgin. Go sit at the mirror and get your makup done. I'm looking for sexy slutty. " +
                "Chop chop. ",
            button: [
                { chatID: 3, text: "Don't I know you from somewhere?", callback: "" }
            ]
        },
        {
            chatID: 3,
            speaker: "govlady",
            text: "I don't have time for idle chatter. Hurry up dear. ",
            button: [
                { chatID: -1, text: "ok", callback: "clothes0_2" }
            ]
        },
        {
            chatID: 4,
            speaker: "govlady",
            text: "I don't have time to micromanage you. Put on some lipstick and makeup. ",
            button: [
                { chatID: -1, text: "oh, ok.", callback: "clothes0_2" }
            ]
        },
        {
            chatID: 5,
            speaker: "govlady",
            text: "I suppose that will work.  ",
            button: [
                { chatID: 6, text: "ok", callback: "changeRoomxd" }
            ]
        },
        {
            chatID: 6,
            speaker: "govlady",
            text: "Now put this on. ",
            button: [
                { chatID: 7, text: "[Put on dress]", callback: "changeRoomxd1" }
            ]
        },
        {
            chatID: 7,
            speaker: "govlady",
            text: "Ok. Follow me to your place. " + sc.n("p") + " told me you already had training on how to walk like a lady. " +
                "remember that training and make this dress sexy. ",
            button: [
                { chatID: 8, text: "Oh.. but...", callback: "" }
            ]
        },
        {
            chatID: 8,
            speaker: "govlady",
            text: "I told you I don't have time for your jibber-jabber. Follow me and stay sexy. ",
            button: [
                { chatID: 9, text: "[Follow her]", callback: "changeRoomxd2" }
            ]
        },
        {
            chatID: 9,
            speaker: "govlady",
            text: "Just go through that door in the middle of the hallway when you're ready. ",
            button: [
                { chatID: -1, text: "ok", callback: "" }
            ]
        },
        {
            chatID: 10,
            speaker: "thinking",
            text: "Holy shit. There's so many people out there. I'm so incredibly nervous to go out there in a dress! They're going to " +
                "judge me. I hope they don't laugh at me. I hope I don't make an ass of myself. Holy Shit.",
            button: [
                { chatID: 11, text: "...", callback: "changeRoomxd3" }
            ]
        },
        {
            chatID: 11,
            speaker: "thinking",
            text: "Holy shit. There's so many people out there. ",
            button: [
                { chatID: 12, text: "...", callback: "changeRoomxd4a" }
            ]
        },
        {
            chatID: 12,
            speaker: "thinking",
            text: "I'm so incredibly nervous to go out there in a dress! They're going to judge me. Look at them all gauking at me. " +
                "I hope they don't laugh at me. I hope I don't make an ass of myself. Holy Shit.",
            button: [
                { chatID: 13, text: "Well here goes nothing.", callback: "changeRoomxd4" }
            ]
        },
        {
            chatID: 13,
            speaker: "thinking",
            text: "Oh wow! This is such a rush. They are all staring at me. I wonder what they're thinking.",
            button: [
                { chatID: 14, text: "...", callback: "changeRoomxd5" }
            ]
        },
        {
            chatID: 14,
            speaker: "thinking",
            text: "Well, here's the turn and show everyone my backside and walk out. ",
            button: [
                { chatID: 15, text: "...", callback: "changeRoomxd6" }
            ]
        },
        {
            chatID: 15,
            speaker: "govlady",
            text: "You were sexy out there, excactly what we're looking for. ",
            button: [
                { chatID: 16, text: "...", callback: "" }
            ]
        },
        {
            chatID: 16,
            speaker: "jones",
            text: "Yes. You should come back for some more shows. I will be looking forward it. ",
            button: [
                { chatID: 17, text: "...", callback: "" }
            ]
        },
        {
            chatID: 17,
            speaker: "govlady",
            text: "Here's your $300 modeling fee. I hope to see you at our next showing. ",
            button: [
                { chatID: -1, text: "Oh thank you... Bye.", callback: "changeRoomxd7" }
            ]
        },
        {
            chatID: 18,
            speaker: "thinking",
            text: "Odd, no one's here to meet me. I guess I should put on my makeup and lipstick. ",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 19,
            speaker: "govlady",
            text: "That will do. Put this on. ",
            button: [
                { chatID: 20, text: "[Put on maid's dress]", callback: "c1_1" }
            ]
        },
        {
            chatID: 20,
            speaker: "govlady",
            text: "Sexy. Ready to go out? ",
            button: [
                { chatID: 21, text: "Yeah. ", callback: "c1_2" }
            ]
        },
        {
            chatID: 21,
            speaker: "jones",
            text: "Why do you want to make my clothing look basic and frumpy? You look like a common girl. ",
            button: [
                { chatID: 22, text: "Huh? ", callback: "" }
            ]
        },
        {
            chatID: 22,
            speaker: "jones",
            text: "This was not made to be worn with panties! If I wanted you to wear panties I would have given you panties to wear! " +
                "Bend over. ",
            button: [
                { chatID: 23, text: "Huh? ", callback: "" }
            ]
        },
        {
            chatID: 23,
            speaker: "jones",
            text: "Sluts don't question me. Bend Over!",
            button: [
                { chatID: 24, text: "Huh? ", callback: "c1_3" }
            ]
        },
        {
            chatID: 24,
            speaker: "me",
            text: "AAAaaaakkk",
            button: [
                { chatID: 25, text: "...", callback: "c1_4" }
            ]
        },
        {
            chatID: 25,
            speaker: "jones",
            text: "I said not to question me. And don't wear panties around me ever again. You'll ruin my show, slut. Now get out on " +
                "the runway. ",
            button: [
                { chatID: -1, text: "...", callback: "c1_5" }
            ]
        },
        {
            chatID: 26,
            speaker: "thinking",
            text: "Holy crap! My cock is hanging out! I can't believe I'm out here like this!",
            button: [
                { chatID: 27, text: "...", callback: "" }
            ]
        },
        {
            chatID: 27,
            speaker: "thinking",
            text: "Now for the turn. Got to go slow so I don't flash everyone my butthole. ",
            button: [
                { chatID: 28, text: "...", callback: "changeRoomxd5" }
            ]
        },
        {
            chatID: 28,
            speaker: "thinking",
            text: "Now I need to get out of here before I accidently show more than I should!",
            button: [
                { chatID: 29, text: "...", callback: "changeRoomxd6" }
            ]
        },
        {
            chatID: 29,
            speaker: "jones",
            text: "You are the dumbest fashion show coordinator ever! You almost let this slut walk on my runway with panties! Don't make that " +
                "mistake again or I'll look for a new fashion show coordinator. ",
            button: [
                { chatID: 30, text: "...", callback: "c1_6" }
            ]
        },
        {
            chatID: 30,
            speaker: "govlady",
            text: "Well then. I didn't even think about your panties. Normally our models don't wear panties. We'll have to correct " +
                "that next time. Here's your $500 modeling fee. ",
            button: [
                { chatID: -1, text: "Sorry, and thank you.", callback: "c1_7" }
            ]
        },
        {
            chatID: 31,
            speaker: "govlady",
            text: "I have a suprise for you. Strip down. ",
            button: [
                { chatID: 32, text: "oh. ok.", callback: "c2_1" }
            ]
        },
        {
            chatID: 32,
            speaker: "govlady",
            text: "Now put on this outfit. ",
            button: [
                { chatID: 33, text: "...", callback: "c2_2" }
            ]
        },
        {
            chatID: 33,
            speaker: "me",
            text: "I'm hanging out all over. I don't think I can go out in front of people like this. ",
            button: [
                { chatID: 34, text: "...", callback: "" }
            ]
        },
        {
            chatID: 34,
            speaker: "govlady",
            text: "Oh hush! You're not going to get me in trouble again you little shit. ",
            button: [
                { chatID: 35, text: "Not doing it!", callback: "" }
            ]
        },
        {
            chatID: 35,
            speaker: "govlady",
            text: "Come with me to the hallway. " + sc.n("jones") + " is there, you can tell him. ",
            button: [
                { chatID: 36, text: "I will!", callback: "changeRoomxd6" }
            ]
        },
        {
            chatID: 36,
            speaker: "jones",
            text: "So you say you don't want to wear this. I don't care. Models don't have thoughts or opinions, you are my " +
                "frame for my painting. I wouldn't ask my frame it's opinion. It's just there to present my clothing line. " +
                "Now open your mouth. ",
            button: [
                { chatID: 37, text: "Aaaaaa", callback: "c2_3" }
            ]
        },
        {
            chatID: 37,
            speaker: "jones",
            text: "Now stop your whining and get on stage slut!",
            button: [
                { chatID: 38, text: "MMmmmmm", callback: "c2_4" }
            ]
        },
        {
            chatID: 38,
            speaker: "thinking",
            text: "What am I doing here? Why do I seem to end up parading myself I'm told to. ",
            button: [
                { chatID: 39, text: "...", callback: "c2_5" }
            ]
        },
        {
            chatID: 39,
            speaker: "thinking",
            text: "They're just staring up my skirt and my bare chest. I'm just a piece of sexy meat to them. I can feel their eyes " +
                "all over me. ",
            button: [
                { chatID: 40, text: "...", callback: "" }
            ]
        },
        {
            chatID: 40,
            speaker: "thinking",
            text: "They're just staring up my skirt and my bare chest. I'm just a piece of sexy meat to them. I can feel their eyes " +
                "all over me. ",
            button: [
                { chatID: 41, text: "...", callback: "c2_6" }
            ]
        },
        {
            chatID: 41,
            speaker: "thinking",
            text: "Here's my ass for all to see.",
            button: [
                { chatID: 42, text: "...", callback: "c2_7" }
            ]
        },
        {
            chatID: 42,
            speaker: "jones",
            text: "I'm done with your antics. I know you'll be back, becuase you secretly love being humiliated in front of a crowd " +
                "and I'm going to fully humiliate you slut. ",
            button: [
                { chatID: 43, text: "...", callback: "" }
            ]
        },
        {
            chatID: 43,
            speaker: "govlady",
            text: "I'm looking forward to your next show. Here's your $500. ",
            button: [
                { chatID: -1, text: "...", callback: "c2_8" }
            ]
        },
        {
            chatID: 44,
            speaker: "govlady",
            text: "I see you have made your choice. Follow me. ",
            button: [
                { chatID: 45, text: "ok", callback: "c3_1" }
            ]
        },
        {
            chatID: 45,
            speaker: "jones",
            text: "So the slut returns. Don't worry this will be my best line of clothing you will get to display. Don't talk, " +
                "just strip and bend over. ",
            button: [
                { chatID: 46, text: "[Strip]", callback: "c3_2" }
            ]
        },
        {
            chatID: 46,
            speaker: "jones",
            text: "Now I'm going to dress you in my finest clothing line...",
            button: [
                { chatID: 47, text: "...", callback: "c3_3" }
            ]
        },
        {
            chatID: 47,
            speaker: "jones",
            text: "...my piss. A stupid slut like you looks best covered in piss. Now go out there and parade yourself like the " +
                "common whore you aspire to be. ",
            button: [
                { chatID: 48, text: "...", callback: "c3_4" }
            ]
        },
        {
            chatID: 48,
            speaker: "thinking",
            text: "I can't believe I'm out here like this, dripping in piss in front of everyone. I wonder what's going on in their minds " +
                "right now? ",
            button: [
                { chatID: 49, text: "...", callback: "c3_5" }
            ]
        },
        {
            chatID: 49,
            speaker: "random",
            text: "YOU'RE SO HOT! I WANT TO LICK YOU ASS!",
            button: [
                { chatID: 50, text: "...", callback: "" }
            ]
        },
        {
            chatID: 50,
            speaker: "random",
            text: "YOU HAVE THE SEXIEST FEET!!!",
            button: [
                { chatID: 51, text: "...", callback: "" }
            ]
        },
        {
            chatID: 51,
            speaker: "random",
            text: "YOU'RE MY FAVORITE MODEL!!! I WANT TO FUCK YOUR FACE!!!",
            button: [
                { chatID: 52, text: "...", callback: "" }
            ]
        },
        {
            chatID: 52,
            speaker: "thinking",
            text: "They like me! They really like me! I should walk around naked all the time! This is the most fun I've ever had. ",
            button: [
                { chatID: 53, text: "...", callback: "c3_6" }
            ]
        },
        {
            chatID: 53,
            speaker: "jones",
            text: "You know, I'm really starting to like you. I need a maid. You should come back sometime to really serve me. [In progress]",
            button: [
                { chatID: 54, text: "Sweet!", callback: "c3_7" }
            ]
        },
        {
            chatID: 54,
            speaker: "govlady",
            text: "Here's your modeling fee, $500. I think I'll be seeing you again. ",
            button: [
                { chatID: -1, text: "Thanks!", callback: "c3_8" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};