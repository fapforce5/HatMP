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
    if (missy.activecase().name === "case_elijah" && missy.get("activeCaseComplete") === 0) {
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
        default:
            break;
    }
};

room575.chat = function (chatID) {
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
    ]; 
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};