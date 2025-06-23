//Room name
var room575 = {};
room575.main = function () {
    //var btnList = [
    //    {
    //        "type": "btn",
    //        "name": "name",
    //        "left": 1741,
    //        "top": 618,
    //        "width": 130,
    //        "height": 252,
    //        "image": "575_folder/hole.png"
    //    }
    //];

    //$.each(btnList, function (i, v) {
    //    nav.button(v, 575);
    //});
    if (cl.isLewd()) {
        nav.bg("575_fastfood/lewd.webp");
        chat(27, 575);
        return;
    }
    if (gv.get("sissySchoolClass") === "finalx" && sc.getMission("brayden", "date").notStarted) {
        g.internal = {
            nextTo: false,
            closer: 300
        };
        nav.button({
            "type": "btn",
            "name": "hit0",
            "left": 1143,
            "top": 485,
            "width": 452,
            "height": 254,
            "image": "575_fastfood/hit0.webp"
        }, 575);
    }
    else if (missy.activecase().name === "case_elijah" && missy.get("activeCaseComplete") === 0) {
        nav.button({
            "type": "btn",
            "name": "elijah",
            "left": 1259,
            "top": 509,
            "width": 102,
            "height": 212,
            "image": "575_fastfood/elijah.png"
        }, 575);
    }
    var navList = [0];
    nav.buildnav(navList);
};

room575.btnclick = function (name) {
    switch (name) {
        case "elijah":
            nav.killall();
            if (cl.appearance() < 2) {
                nav.bg("575_fastfood/e_angry.jpg");
                chat(1, 575);
            }
            else {
                g.internal = 0;
                nav.bg("575_fastfood/e_chat.jpg");
                chat(4, 575);
            }
            break;
        case "hit0":
            nav.killall();
            nav.bg("575_fastfood/hit1.jpg");
            chat(22, 575);
            break;
        case "hitwin":
            chat(28, 575);
            break;
        case "hitlose":
            chat(30, 575);
            break;
        default:
            break;
    }
};

room575.chatcatch = function (callback) {
    switch (callback) {
        case "e_horny3":
        case "e_horny4":
            nav.bg("575_fastfood/" + callback + ".jpg");
            break;
        case "e_footsie3":
            nav.bg("575_fastfood/" + callback + ".jpg");
            sex.mod("foot", true, "m", 1);
            levels.mod("xdress", 50, 999);
            break;
        case "e_horny2":
        case "e_horny":
        case "e_footsie":
        case "e_footsie2":
            nav.bg("575_fastfood/" + callback + ".jpg");
            g.popUpNotice("Elijah liked that");
            levels.mod("pi", 15, 999);
            break;
        
        case "e_fail":
            missy.set("activeCaseComplete", 2);
            char.room(575);
            break;
        case "e_complete":
            char.addtime(60);
            missy.set("activeCaseComplete", 1);
            char.room(575);
            break;
        case "like":
            g.popUpNotice("Elijah liked that");
            levels.mod("pi", 20, 999);
            break;
        case "hit1":
            if (cl.c.cumface)
                chat(37, 575);
            else if (cl.appearance() < 3)
                chat(23, 575);
            else
                chat(24, 575);
            break;
        case "hitNext":
            g.internal.nextTo = true;
            nav.killall();
            nav.bg("575_fastfood/hit1.jpg");
            zcl.displayMain(50, 700, .27, "clothes", false);
            nav.button({
                "type": "btn",
                "name": "hittable",
                "left": 0,
                "top": 968,
                "width": 1860,
                "height": 112,
                "image": "575_fastfood/table.webp"
            }, 575);
            break;
        case "hitAcross":
            g.internal.nextTo = false;
            break;
        case "hitCloser":
            g.internal.closer -= 100;
            nav.killall();
            nav.bg("575_fastfood/hit1.jpg");
            zcl.displayMain(50, 400 + g.internal.closer, .27, "clothes", false);
            nav.button({
                "type": "btn",
                "name": "hittable",
                "left": 0,
                "top": 968,
                "width": 1860,
                "height": 112,
                "image": "575_fastfood/table.webp"
            }, 575);
            break;
        case "hitChance":
            if (g.internal.nextTo)
                charisma.init(7, "hitwin", "hitlose", 575);
            else
                charisma.init(9, "hitwin", "hitlose", 575);
            break;
        case "hit_fail":
            sc.completeMission("brayden", "date", false);
            sc.completeMissionTask("brayden", "date", 0, false);
            char.addtime(30);
            nav.bg("575_fastfood/emptyBooth.webp");
            chat(31, 575);
            break;
        case "hit4":
            nav.killall();
            nav.bg("575_fastfood/hit4.webp");
            break;
        case "hit5":
            nav.bg("575_fastfood/hit5.webp");
            break;
        case "hit_end":
            sc.show("brayden");
            sc.startMission("brayden", "date");
            sc.completeMissionTask("brayden", "date", 0);
            gv.set("sissyfinal_brayden", true);
            nav.button({
                "type": "img",
                "name": "hittable",
                "left": 625,
                "top": 52,
                "width": 971,
                "height": 977,
                "image": "575_fastfood/hit_phone.webp"
            }, 575);
            char.addtime(30);
            break;
        case "reset":
            char.room(575);
            break;
        case "emptyBooth":
            nav.killall();
            nav.bg("575_fastfood/emptyBooth.webp");
            break;
        case "leave":
            char.room(0);
            break;
        default:
            break;
    }
};

room575.chat = function (chatID) {
    let buttonList;
    
    if (chatID === 999) {
        buttonList = [{ chatID: 998, text: "...", callback: "" }];

        if (g.internal.nextTo)
            buttonList.push({ chatID: 998, text: "[Move closer to him]", callback: "hitCloser" });
        return {
            chatID: 999,
            speaker: "brayden",
            text: sc.n("brayden") + ". So what's a pretty girl like you doing today?",
            button: buttonList
        };
    }
    else if (chatID === 998) {
        buttonList = [{ chatID: 997, text: "...", callback: "" }];

        if (g.internal.nextTo)
            buttonList.push({ chatID: 997, text: "[Move closer to him]", callback: "hitCloser" });
        return {
            chatID: 998,
            speaker: "me",
            text: "Just checking out handsom boys today. Saw you and had to meet you. ",
            button: buttonList
        };
    }
    else if (chatID === 997) {
        nav.bg("575_fastfood/hit2.jpg");
        buttonList = [{ chatID: 996, text: "...", callback: "" }];

        if (g.internal.nextTo)
            buttonList.push({ chatID: 996, text: "[Move closer to him]", callback: "hitCloser" });
        return {
            chatID: 997,
            speaker: "brayden",
            text: "Oh. hahaha. I don't think I've been called handsome by anyone but my " +
                "mom before. ",
            button: buttonList
        };
    }
    else if (chatID === 996) {
        if (g.internal.closer < 101) {
            return {
                chatID: 997,
                speaker: "me",
                text: "Well that's something your mom and I can agree on. I would love to get to " +
                    "know you better.",
                button: [
                    { chatID: 32, text: "Put your hand on his lap", callback: "hit4" },
                    { chatID: 26, text: "...", callback: "" },
                ]
            };
        }
        return {
            chatID: 996,
            speaker: "me",
            text: "Well that's something your mom and I can agree on. I would love to get to " +
                "know you better.",
            button: [
                { chatID: 26, text: "...", callback: "" }
            ]
        };
    }
    var cArray = [
        {
            chatID: 0,
            speaker: "me",
            text: "",
            button: [
                { chatID: 1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "!elijah",
            text: "Hey bud. There's plenty of other places to sit. ",
            button: [
                { chatID: 2, text: "Oh. Hi. I just wanted to say hi. ", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "!elijah",
            text: "Hi. Now go away. I'm trying to eat weird-o.",
            button: [
                { chatID: 3, text: "So do you...", callback: "" }
            ]
        },
        {
            chatID: 3,
            speaker: "!elijah",
            text: "Dude. Please stop. Go away I'm eating. ",
            button: [
                { chatID: -1, text: "*sigh* [You failed to use your feminine charms and failed the case]", callback: "e_fail" }
            ]
        },
        {
            chatID: 4,
            speaker: "me",
            text: "You're so cute I just had to stop by and say hi.",
            button: [
                { chatID: 5, text: "...", callback: "" }
            ]
        },
        {
            chatID: 5,
            speaker: "!elijah",
            text: "Oh! hahaha. You're cute too. ",
            button: [
                { chatID: 6, text: "So what do you like to do for fun?", callback: "" }
            ]
        },
        {
            chatID: 6,
            speaker: "!elijah",
            text: "Besides eating fast food, hahaha. I dunno. I really like building and painting " +
                "vinyl action figures. I have this one I'm working on now of Meiko Shiraki from, um,  " +
                "this one show I watch. ",
            button: [
                { chatID: 7, text: "Vinyl action figures. That sounds so sexy. ", callback: "" }
            ]
        },
        {
            chatID: 7,
            speaker: "!elijah",
            text: "Really! Yeah. I have almost 100 figures. The thing most people don't understand " +
                "is how hard it is to paint on the vinyl and get the details just right. Last year " +
                "I put together a full size batman figure. Took me almost a month to paint it just right. ",
            button: [
                { chatID: 8, text: "Oh wow! You must have a very important job. What do you do?", callback: "" }
            ]
        },
        {
            chatID: 8,
            speaker: "!elijah",
            text: "It's not too important. I'm a lock smith for my cousin. It allows me to " +
                "make some money and have flexable hours. What do you do?",
            button: [
                { chatID: 9, text: "I'm a maid for the hotel", callback: "like" },
                { chatID: 10, text: "I'm a stripper", callback: "like" }
            ]
        },
        {
            chatID: 9,
            speaker: "!elijah",
            text: "Oh that's cool. I like a girl that's clean. I could use a maid. ",
            button: [
                { chatID: 11, text: "I'm super clean. So do you like dancing?", callback: "" }
            ]
        },
        {
            chatID: 10,
            speaker: "!elijah",
            text: "Hehehe. Oh wow! That's so hot! I love strippers! Wow. You're really hot! I'll " +
                "have to go to the club and see you work. ",
            button: [
                { chatID: 11, text: "I would dance all over you baby. Do you like dancing?", callback: "" }
            ]
        },
        {
            chatID: 11,
            speaker: "!elijah",
            text: "I hate dancing. I hope that's ok. I just really hate dancing. ",
            button: [
                { chatID: 12, text: "Oh. Why? If you can't dance I could show you. ", callback: "" }
            ]
        },
        {
            chatID: 12,
            speaker: "!elijah",
            text: "It's too personal.  ",
            button: [
                { chatID: 14, text: "[Rub your foot on his leg] I like personal. ", callback: "e_footsie" },
                { chatID: 13, text: "I like personal. ", callback: "" }
            ]
        },
        {
            chatID: 13,
            speaker: "!elijah",
            text: "I said it's too personal. I don't like this. I'm going to go.  ",
            button: [
                { chatID: -1, text: "oh. [Failed case]", callback: "e_fail" },
            ]
        },
        {
            chatID: 14,
            speaker: "!elijah",
            text: "I... uh.... what. I hate it because of that club...",
            button: [
                { chatID: 16, text: "[Slip off your shoe and play with his balls] What about the club?", callback: "e_horny" },
                { chatID: 15, text: "What about the club?", callback: "" }

            ]
        },
        {
            chatID: 15,
            speaker: "!elijah",
            text: "Oh... nothing. Forget I said anything. I should go.",
            button: [
                { chatID: -1, text: "oh. [Failed case]", callback: "e_fail" }
            ]
        },
        {
            chatID: 16,
            speaker: "!elijah",
            text: "I don't usually talk about it...",
            button: [
                { chatID: 17, text: "[Stoke his cock with your foot] I just want to get to know you better. ", callback: "e_footsie2" }
            ]
        },
        {
            chatID: 17,
            speaker: "!elijah",
            text: "I uh.. hate the owner. He's such an asshole. He was terrible to my sister. ",
            button: [
                { chatID: 18, text: "[Stroke faster] Really, what did he do? ", callback: "e_horny2" }
            ]
        },
        {
            chatID: 18,
            speaker: "!elijah",
            text: "She used to work for him until he....",
            button: [
                { chatID: 19, text: "[Keep stroking] until he? ", callback: "e_footsie3" }
            ]
        },
        {
            chatID: 19,
            speaker: "!elijah",
            text: "Oh no.... ",
            button: [
                { chatID: 20, text: "Huh?", callback: "e_horny3" }
            ]
        },
        {
            chatID: 20,
            speaker: "!elijah",
            text: "I'm sorry I have to go! ",
            button: [
                { chatID: 21, text: "wait..", callback: "e_horny4" }
            ]
        },
        {
            chatID: 21,
            speaker: "thinking",
            text: "Crap. I was so close. Instead of getting a cofession I have cum all over my foot " +
                "It's going to be squishing in my shoe all day. At least I have something for Missy. " +
                "Oh well. At least I get some free fries. ",
            button: [
                { chatID: -1, text: "[Complete Case]", callback: "e_complete" }
            ]
        },
        {
            chatID: 22,
            speaker: "me",
            text: "Hello, I was wondering if I could sit with you while I eat? ",
            button: [
                { chatID: -1, text: "...", callback: "hit1" }
            ]
        },
        {
            chatID: 23,
            speaker: "brayden",
            text: "Oh.. uh. hi. No. I like to eat alone. Sorry. ",
            button: [
                { chatID: -1, text: "[You failed this task. Charisma begins with appearance]", callback: "hit_fail" }
            ]
        },
        {
            chatID: 24,
            speaker: "brayden",
            text: "Oh.. uh. hi. Sure, have a seat. ",
            button: [
                { chatID: 25, text: "[Sit next to him]", callback: "hitNext" },
                { chatID: 25, text: "[Sit across from him]", callback: "hitAcross" },
            ]
        },
        {
            chatID: 25,
            speaker: "me",
            text: "I'm " + sc.n("me") + ". What's you name? ",
            button: [
                { chatID: 999, text: "...", callback: "" },
            ]
        },
        {
            chatID: 26,
            speaker: "brayden",
            text: "Maybe. I've got to run....",
            button: [
                { chatID: -1, text: "Can I get your phone number?", callback: "hitChance" },
            ]
        },
        {
            chatID: 27,
            speaker: "me",
            text: "Oh. How dumb of me to walk into a restaurant while I'm naked.. Sorry. ",
            button: [
                { chatID: -1, text: "...", callback: "leave" },
            ]
        },
        {
            chatID: 28,
            speaker: "brayden",
            text: "Totally! I've never had a girl ask me for my phone number! Here you " +
                "go! ",
            button: [
                { chatID: 29, text: "...", callback: "hit_end" },
            ]
        },
        {
            chatID: 29,
            speaker: "me",
            text: "Thanks sweetie! Call you later",
            button: [
                { chatID: 36, text: "...", callback: "emptyBooth" },
            ]
        },
        {
            chatID: 30,
            speaker: "brayden",
            text: "*blush* oh. no. Uhh.. sorry. I have to run! It was nice to meet you.",
            button: [
                { chatID: -1, text: "...", callback: "hit_fail" },
            ]
        },
        {
            chatID: 31,
            speaker: "thinking",
            text: "Damn! He got away. I guess I don't have the charisma I thought I " +
                "had. I better do better with the other final tests!",
            button: [
                { chatID: -1, text: "...", callback: "reset" },
            ]
        },
        {
            chatID: 32,
            speaker: "brayden",
            text: "Oh. Hehe. yeah. I'm sure we can get to know each other very well.",
            button: [
                { chatID: 33, text: "...", callback: "hit5" },
            ]
        },
        {
            chatID: 33,
            speaker: "thinking",
            text: "Oh. My heart is racing. I know I've done far worse, but this seems " +
                "more real. Maybe he's genuinely interested in me, like the real me, and " +
                "not just looking for sex. I love how his hand is just resting on mine, and " +
                "not forcing me to his crotch. ",
            button: [
                { chatID: 35, text: "...", callback: "" },
            ]
        },
        {
            chatID: 34,
            speaker: "brayden",
            text: "Listen. I do have to run back to work. There's nothing I would like more than " +
                "to spend more time with you, but I'll get fired if I'm late. If I give you my phone " +
                "number will you call me? ",
            button: [
                { chatID: 35, text: "...", callback: "" },
            ]
        },
        {
            chatID: 35,
            speaker: "brayden",
            text: "Listen. I do have to run back to work. There's nothing I would like more than " +
                "to spend more time with you, but I'll get fired if I'm late. If I give you my phone " +
                "number will you call me? ",
            button: [
                { chatID: 29, text: "I totally will!", callback: "hit_end" },
            ]
        },
        {
            chatID: 36,
            speaker: "thinking",
            text: "Well it's nice to know that I can get a boy to like me. The real " +
                "me without baring my ass. I should call him. But first I'll make him " +
                "wait a few days so he doesn't think I'm desperate. I'll call him " +
                "after my final! Plus I really need to focus on my final!",
            button: [
                { chatID: -1, text: "...", callback: "reset" },
            ]
        },
        {
            chatID: 37,
            speaker: "brayden",
            text: "Oh gross. There's cum on your face. I'm trying to eat here!",
            button: [
                { chatID: -1, text: "...", callback: "hit_fail" },
            ]
        },
    ]; 
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};