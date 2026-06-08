//Room name
var room482 = {};
room482.main = function () {
    var btnList = [
        {
            "type": "btn",
            "name": "shower",
            "left": 963,
            "top": 457,
            "width": 259,
            "height": 517,
            "title": "Shower",
            "image": "482_bathroom/shower.webp"
        },
        {
            "type": "btn",
            "name": "toilet",
            "left": 1704,
            "top": 276,
            "width": 177,
            "height": 300,
            "title": "Shower",
            "image": "482_bathroom/toilet.webp"
        }
    ]; 

    $.each(btnList, function (i, v) {
        nav.button(v, 482);
    });
    nav.buildnav([480, 478, 479, 481, 482]);
};

room482.btnclick = function (name) {
    switch (name) {
        case "shower":
            nav.kill();
            nav.bg("482_bathroom/shower0.webp");
            if (sc.getMissionTask("a", "info", 6).notStarted) {
                if (sissy.st[0].ach)
                    chat(0, 482);
                else
                    chat(10, 482);
            }
            else {
                chat(12, 482);
            }
            break;
        case "toilet":
            nav.kill();
            nav.bg("482_bathroom/toilet0.webp");
            if (sc.getMissionTask("a", "info", 7).complete) {
                sc.select("pee", "482_bathroom/icon_piss.webp", 4);
                sc.select("cum", "482_bathroom/icon_cum.webp", 5);
            }
            else {
                sc.completeMissionTask("a", "info", 7);
                chat(15, 482);
            }
            break;
        case "cum":
            nav.kill();
            if (gv.getButtCum().total === 0 && gv.getPussyCum().total === 0)
                chat(23, 482);
            else {
                chat(20, 482);
            }
            break;
        case "pee":
            nav.kill();
            if (gv.get("bladder") > 0)
                chat(25, 482);
            else
                chat(24, 482);
            break;
        default:
            break;
    }
};

room482.chatcatch = function (callback) {
    switch (callback) {
        case "toilet_cum1":
        case "toilet0":
            nav.bg("482_bathroom/" + callback + ".webp");
            break;
        case "toilet_cum":
            gv.clearButtCum();
            gv.clearPussyCum();
            nav.bg("482_bathroom/" + callback + "_" + gender.pronoun("f") + ".webp");
            break;
        case "toilet2":
            if (cl.c.cock === 5)
                nav.bg("482_bathroom/toilet2_f.webp");
            else
                nav.bg("482_bathroom/toilet2_m.webp");
            gv.mod("bladder", -1);
            break;
        case "showerEnd":
            sc.completeMissionTask("a", "info", 6);
            char.addtime(50);
            char.room(482);
            break;
        case "shower":
            nav.kill();
            levels.gotfisted("n", "!chris", false);
            nav.bg("482_bathroom/shower1_" + gender.pronoun("f") + ".webp");
            break;
        case "shower1End":
            cl.clean();
            char.room(482);
            break;
        case "reset":
            char.room(482);
            break;
        default:
            break;
    }
};

room482.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "!chris",
            text: "Oh my god! So happy you made it out! That place went from amazing to the worst days " +
                "of our lives! Thank god for the " + sc.n("queen") + "! ",
            button: [
                { chatID: 1, text: "So what happened?", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "!timothy",
            text: "Yeah. I was tied up and dumped in the swamp. Left to die, but " + sc.n("!jenna") + 
                " scooped me up. I'm not sure how she knew where I was, but she did. She helped me back " +
                "here bandaged me up, and oh my god. She so saved my life. ",
            button: [
                { chatID: 2, text: "oh wow", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "!chris",
            text: "Yeah. She totally saved me too. We're so grateful for this place and all the boys and " +
                "girls they've saved... ",
            button: [
                { chatID: 3, text: "...", callback: "" }
            ]
        },
        {
            chatID: 3,
            speaker: "!timothy",
            text: "...but we're so bored here. OMG! Everyone want's to get fucked! We need men! Big strong " +
                "aggresive men! Fuck! We feel like we're wasting our best years in here! We need to get out! ",
            button: [
                { chatID: 4, text: "...", callback: "" }
            ]
        },
        {
            chatID: 4,
            speaker: "!chris",
            text: "As nice as everyone is, we can't stay here. Don't get me wrong, the dildo parties are the " +
                "best, but we want to get bent over and fucked again and again by a line of giant cock brutes! ",
            button: [
                { chatID: 5, text: "...", callback: "" }
            ]
        },
        {
            chatID: 5,
            speaker: "!timothy",
            text: "Yeah. We're going to leave once we get a chance. Go to the big city and get an apartment " +
                "together. Maybe be sexy secretaires or slutty waitresses. ",
            button: [
                { chatID: 6, text: "...", callback: "" }
            ]
        },
        {
            chatID: 6,
            speaker: "!chris",
            text: "OOoo. I'm so excited! I hope our boss likes fucking sissies! Maybe the whole office " +
                "will gang bang us at the end of each day! Who doesn't love empting their balls into " +
                "a pair of sexy young sluts! ",
            button: [
                { chatID: 7, text: "...", callback: "" }
            ]
        },
        {
            chatID: 7,
            speaker: "!timothy",
            text: "And the clothes we're going to get! Tight little skirts and revealing tops. As soon " +
                "as I can afford it I'm getting bigger tits! Like porn star big! ",
            button: [
                { chatID: 8, text: "...", callback: "" }
            ]
        },
        {
            chatID: 8,
            speaker: "!chris",
            text: "Yeah. We just have to wait a bit for the next ride out of here. " + sc.n("!jenna") +
                " has a secret way to get out of town and get new identities for us. But she said it " +
                "takes time. Once she's ready we're out of here! So excited! ",
            button: [
                { chatID: 9, text: "...", callback: "" }
            ]
        },
        {
            chatID: 9,
            speaker: "!timothy",
            text: "Me too! Until then we just like to hang out here. It's really the best room in this " +
                "place. So relaxing. If you ever want to take a bath with us just let us know! ",
            button: [
                { chatID: -1, text: "Ok. I hope you get to get out of here soon. ", callback: "showerEnd" }
            ]
        },
        {
            chatID: 10,
            speaker: "me",
            text: "Hi you two. What are you girls up to? ",
            button: [
                { chatID: 11, text: "...", callback: "" }
            ]
        },
        {
            chatID: 11,
            speaker: "!chris",
            text: "Just taking a bath. Waiting until we can leave. Say new " + gender.pronoun("girl") +
                " anytime you want a bath, just let us know. ",
            button: [
                { chatID: -1, text: "Oh. Cool", callback: "showerEnd" }
            ]
        },
        {
            chatID: 12,
            speaker: "!timothy",
            text: "So, you wanna take a bath?",
            button: [
                { chatID: 13, text: "I sure do!", callback: "shower" },
                { chatID: -1, text: "Some other time", callback: "reset" },
            ]
        },
        {
            chatID: 13,
            speaker: "!timothy",
            text: "I get to wash the outside...",
            button: [
                { chatID: 14, text: "...", callback: "" },
            ]
        },
        {
            chatID: 14,
            speaker: "!chris",
            text: "I get to wash the inside hehe. Love how warm and soft you are inside! ",
            button: [
                { chatID: -1, text: "...", callback: "shower1End" },
            ]
        },
        {
            chatID: 15,
            speaker: "!sissy_toilet",
            text: "Hey! A new " + gender.pronoun("girl") + "! So excited to taste your new flavors! ",
            button: [
                { chatID: 16, text: "Taste my new flavors? ", callback: "" },
            ]
        },
        {
            chatID: 16,
            speaker: "!sissy_toilet",
            text: "Oh. Hehe. I'm Toilet. Anytime you need to relive youself of cum or piss, just put " +
                "it in me! Yum yum yum!",
            button: [
                { chatID: 17, text: "How did you end up as the toilet? ", callback: "" },
            ]
        },
        {
            chatID: 17,
            speaker: "!sissy_toilet",
            text: "Well before everyone just peed in the bath water. " +
                "kinda nasty. So here I am!!",
            button: [
                { chatID: 18, text: "But why you? ", callback: "" },
            ]
        },
        {
            chatID: 18,
            speaker: "!sissy_toilet",
            text: "I guess becuase I'm here. I just kinda kneeled down and told people. Before long I became " +
                "the offical toilet. I wasn't always a toilet. Before the cult took me in I've never tasted " +
                "anyone pee. They were brutal, but they let me volunteer to be the toilet in there. ",
            button: [
                { chatID: 19, text: "...", callback: "" },
            ]
        },
        {
            chatID: 19,
            speaker: "!sissy_toilet",
            text: "It was really gross at first, being their toilet, but after some time I found it really " +
                "relaxing. It was the only place they didn't beat me. After a while I just kinda grew to love " +
                "it. I would probably still be there if they didn't boot me out once they found out I don't have " +
                "a vagina. Lucky me, I do get to be a toilet here! Everyone's so nice to me. Anytime you need " +
                "to pee or empty some cum bring it to me! ",
            button: [
                { chatID: -1, text: "Ok. Thanks! ", callback: "reset" },
            ]
        },
        {
            chatID: 20,
            speaker: "!sissy_toilet",
            text: "Yay! I wonder who's cum I get to yum down today! ",
            button: [
                { chatID: 21, text: "[Press your hole over her mouth]", callback: "toilet_cum" },
            ]
        },
        {
            chatID: 21,
            speaker: "me",
            text: "Oh wow! So good. You're hungry aren't you! ",
            button: [
                { chatID: 22, text: "...", callback: "toilet_cum1" },
            ]
        },
        {
            chatID: 22,
            speaker: "!sissy_toilet",
            text: "MMmmMmm YUM!!!!",
            button: [
                { chatID: -1, text: "...", callback: "reset" },
            ]
        },
        {
            chatID: 23,
            speaker: "thinking",
            text: "I'm not full of cum right now. I should go get someone to cum in me!",
            button: [
                { chatID: -1, text: "...", callback: "reset" },
            ]
        },
        {
            chatID: 24,
            speaker: "thinking",
            text: "I don't have to pee right now. ",
            button: [
                { chatID: -1, text: "...", callback: "reset" },
            ]
        },
        {
            chatID: 25,
            speaker: "!sissy_toilet",
            text: "Oh thank you! I'm so thirsty! ",
            button: [
                { chatID: 26, text: "...", callback: "toilet2" },
            ]
        },
        {
            chatID: 26,
            speaker: "me",
            text: "Hehe. You tounge tickels my naughty bits! ",
            button: [
                { chatID: 27, text: "...", callback: "toilet0" },
            ]
        },
        {
            chatID: 27,
            speaker: "!sissy_toilet",
            text: "YUMMMMY! You are delicious! ",
            button: [
                { chatID: -1, text: "...", callback: "reset" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};