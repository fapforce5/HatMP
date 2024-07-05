//Living Room
var room26 = {};
room26.main = function () {
    var btnList = new Array();

    if (sc.getTimeline("landlord").thisRoom) {
        if (sc.getTimeline("bigguy").thisRoom) {
            if (daily.get("bigguy")) {
                nav.bg("26_livingRoom/bg_1.jpg");
                chat(27, 26);
            }
            else {
                var straightPath = sc.taskGetStep("bigguy", "straight");
                if (straightPath === 0) {
                    nav.bg("26_livingRoom/bg_1.jpg");
                    chat(17, 26);
                }
                else if (straightPath === 1) {
                    nav.bg("26_livingRoom/bg_2.jpg");
                    chat(19, 26);
                }
                else if (straightPath === 2) {
                    nav.bg("26_livingRoom/bg_4.jpg");
                    chat(23, 26);
                }
                else if (straightPath === 3) {
                    nav.bg("26_livingRoom/bg_1.jpg");
                    chat(28, 26);
                }
            }
        }
        else if (sc.getTimeline("lola").thisRoom) {
            nav.bg("26_livingRoom/day.jpg", "26_livingRoom/night.jpg");
            btnList.push({
                "type": "btn",
                "name": "all3",
                "left": 416,
                "top": 63,
                "width": 1295,
                "height": 1017,
                "image": "26_livingRoom/all3.png"
            });
        }
        else {
            nav.bg("26_livingRoom/day.jpg", "26_livingRoom/night.jpg");
            btnList.push({
                "type": "btn",
                "name": "landlord",
                "left": 977,
                "top": 69,
                "width": 634,
                "height": 942,
                "image": "26_livingRoom/ll.png"
            });
        }
    }

    var navList = [16];
    $.each(btnList, function (i, v) {
        nav.button(v, 26);
    });
    nav.buildnav(navList);
    //}
};

room26.btnclick = function (name) {
    switch (name) {
        case "landlord":
            nav.button({
                "type": "img",
                "name": "chatbg",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "1001_rand/black_25.png"
            }, g.roomID);
            if (!daily.get("landlordChat")) {
                sc.select("chat_landlord", "26_livingRoom/chat_landlord.png", 0);
            }
            if (sc.getMissionTask("landlord", "talk", 2).complete)
                sc.select("sit_landlord", "26_livingRoom/icon_tv.png", 1);

            sc.selectCancel("chat_cancel", 2);

            break;
        case "chat_cancel":
            nav.killbutton("chatbg");
            nav.killbutton("chat_cancel");
            nav.killbutton("sit_landlord");
            nav.killbutton("chat_landlord");
            break;
        case "chat_landlord":
            room26.btnclick("chat_cancel");
            daily.set("landlordChat");
            var jobapplyconst = gv.get("jobapplyconst");
            var chatEvent = sc.taskGetStep("landlord", "talk");

            if (jobapplyconst < 2)
                chat(0, 26);
            else if (chatEvent === 0)
                chat(1, 26);
            else if (chatEvent === 1)
                chat(3, 26);
            else if (chatEvent === 2)
                chat(6, 26);
            else if (chatEvent === 3)
                chat(7, 26);
            else if (chatEvent === 4)
                chat(29, 26);
            else if (chatEvent === 5)
                chat(38, 26);
            else if (chatEvent === 6)
                chat(11, 26);
            else
                chat(11, 26);
            break;
        case "sit_landlord":
            nav.killall();
            g.internal = { s: 0, c: 0 };
;
            nav.bg("26_livingRoom/sit0.jpg");
            sc.select("tv_chat", "26_livingRoom/chat_landlord.png", 10);
            sc.select("tv_closer", "26_livingRoom/icon_closer.png", 11);
            sc.select("tv_watch", "26_livingRoom/icon_tv.png", 12);
            sc.selectCancel("tv_complete", 13);
            break;
        case "tv_chat":
            nav.killall();
            chat(34, 26);
            break;
        case "tv_closer":
            switch (g.internal.c) {
                case 0:
                    g.internal.c = 1;
                    nav.bg("26_livingRoom/sit1.jpg");
                    break;
                case 1:
                    g.internal.c = 2;
                    nav.bg("26_livingRoom/sit2.jpg");
                    if (sc.getLevel("landlord") < 1) 
                        chat(31, 26);
                    break;
                case 2:
                    g.internal.c = 3;
                    nav.bg("26_livingRoom/sit3.jpg");
                    if (sc.getLevel("landlord") < 2)
                        chat(31, 26);
                    else
                        sc.modLevel("landlord", 10, 6);
                    break;
                case 3:
                    g.internal.c = 4;
                    nav.bg("26_livingRoom/sit4.jpg");
                    if (sc.getLevel("landlord") < 3)
                        chat(31, 26);
                    else {
                        nav.killall();
                        sc.modLevel("landlord", 10, 6);
                        g.roomTimeout = setTimeout(function () {
                            nav.bg("26_livingRoom/sit5.jpg");
                            chat(32, 26);
                        }, 1000);
                    }
                    break;
            }
            g.internal.s++;
            break;
        case "tv_watch":
            chat(999, 26);
            break;
        case "tv_complete":
            char.addtime(120);
            char.room(26);
            break;
        default:
            break;
    }
};

room26.chatcatch = function (callback) {
    $.each(callback.split(" "), function (i, v) {
        switch (v.trim()) {
            case "bg_3":
            case "bg_4":
            case "bg_5":
            case "bg_6":
                nav.bg("26_livingRoom/" + callback + ".jpg");
                break;
            case "passtime":
                char.addtime(30);
                break;
            case "level1":
                sc.modLevel("landlord", 100, 4);
                break;
            case "missionSpermBank":
                sc.completeMissionTask("landlord", "talk", 1);
                break;
            case "pantycheck":
                if (gv.get("lockdrawer"))
                    chat(9, 26);
                else
                    chat(8, 26);
                break;
            case "talk_0_complete":
                sc.completeMissionTask("landlord", "talk", 0);
                sc.modLevel("landlord", 50, 4);
                break;
            case "talk_3_complete":
                sc.completeMissionTask("landlord", "talk", 3);
                inv.add("landlordKey");
                sc.modLevel("landlord", 50, 4);
                sc.startMission("landlord", "man");
                char.addtime(30);
                break;
            case "talk_4_complete":
                sc.completeMissionTask("landlord", "talk", 4);
                sc.modLevel("landlord", 50, 4);
                char.addtime(30);
                break;
            case "talk_5_complete":
                sc.completeMissionTask("landlord", "talk", 5);
                sc.startMission("lola", "date");
                sc.modLevel("landlord", 50, 4);
                char.addtime(30);
                break;
            case "talk_6_complete":
                sc.modLevel("landlord", 50, 4);
                break;
            case "bg_s_0_end":
                sc.char[sc.i("bigguy")].show = true;
                sc.completeMissionTask("bigguy", "straight", 0, true);
                char.addtime(37);
                daily.set("bigguy");
                break;
            case "bg_s_1_end":
                gv.mod("money", 10);
                sc.completeMissionTask("bigguy", "straight", 1, true);
                char.addtime(37);
                daily.set("bigguy");
                break;
            case "bg_s_2_end":
                sc.completeMissionTask("bigguy", "straight", 2, true);
                char.addtime(37);
                daily.set("bigguy");
                break;
            case "tv_closer":
                g.internal.c--;
                nav.bg("26_livingRoom/sit" + g.internal.c + ".jpg");
                break;
            case "sit6":
                nav.bg("26_livingRoom/sit6.jpg");
                sc.modLevel("landlord", 30, 6);
                char.settime(23, 17);
                break;
            case "tvEnd":
                sc.modLevel("landlord", 20, 5);
                char.addtime(120);
                char.room(26);
                break;
            case "tvChatEnd":
                sc.select("tv_chat", "26_livingRoom/chat_landlord.png", 10);
                sc.select("tv_closer", "26_livingRoom/icon_closer.png", 11);
                sc.select("tv_watch", "26_livingRoom/icon_tv.png", 12);
                sc.selectCancel("tv_complete", 13);
                break;
            case "reset":
                char.room(26);
                break;
            default:
                console.log("unknown callback: " + v)
                break;
        }
    });
};

room26.chat = function (chatID) {
    if (chatID === 999) {
        var fl = gv.get("forbotenLove");
        if (fl > 8) {
            fl = 0;
            gv.set("forbotenLove", 1);
        }
        else
            gv.mod("forbotenLove", 1);

        nav.killall();
        nav.bg("26_livingRoom/tv" + fl + ".jpg");
        var chatz = [
            "I can't wait to see this show! It's a story of a love that wasn't supposed to be. ",
            "They so aren't right for each other. He's too boring for her. ",
            "Awwww. I hope it works out. They could be such a better couple. ",
            "When I was younger we used to walk everywhere. You kids today don't even know how hard it was to find entertainment. ",
            "OOooo. It's starting to get spicy! ",
            "He has such a sexy butt. Oh my. You may have to step out of the room. Hehehe. ",
            "They do make the perfect couple. I'm so happy they were able to find each other. ",
            "I guess that's life. Sometimes people cheat. If he provided what she needed, she wouldn't have to go out and cheat on him. ",
            "Well that was a show. Not a great show, but it was a show. "
        ];
        return {
            chatID: 0,
            speaker: "landlord",
            text: chatz[fl],
            button: [
                { chatID: -1, text: "[Finish watching the show]", callback: "tvEnd" }
            ]
        };
    }
    else {

        var cArray = [
            {
                chatID: 0,
                speaker: "landlord",
                text: "Stop staring at my tits and go get a job!",
                button: [
                    { chatID: -1, text: "...", callback: "passtime" }
                ]
            },
            {
                chatID: 1,
                speaker: "landlord",
                text: "I'm so glad you have such a manly job! You're really growing up. A few weeks working out there and you'll get " +
                    "some big sexy man muscles! Some lucky girls going to just love running her hands all over your hard veiny construction " +
                    "muscles... Anyway, I'm so happy you aren't a lazy fuck up anymore. Now let me watch my shows. ",
                button: [
                    { chatID: -1, text: "Thanks? ", callback: "passtime talk_0_complete" }
                ]
            },
            {
                chatID: 2,
                speaker: "landlord",
                text: sc.n("landlord") + "'s watching her shows.. run along.",
                button: [
                    { chatID: -1, text: "[Run along]", callback: "passtime" }
                ]
            },
            {
                chatID: 3,
                speaker: "landlord",
                text: "You would not believe the day I had at the Sperm Bank today! First I got a huge order to ship out to our local buyer, way " +
                    "to big for us to fill, but I couldn't say no. So now I have to find a way to double the donations I get in a month somehow. " +
                    "I just don't know how I'll do it, but god finds a way I guess. ",
                button: [
                    { chatID: 4, text: "I'm sorry. It must be hard getting more customers. ", callback: "" }
                ]
            },
            {
                chatID: 4,
                speaker: "landlord",
                text: "I know I don't allow you to come to the Sperm Bank, but now that you're a working man, you could help. I have " +
                    "a couple ideas. You can come by on Saturday morning if you want to help me out. I don't want to interfere " +
                    "with your job, my working man. ",
                button: [
                    { chatID: 5, text: "Sounds cool.", callback: "" }
                ]
            },
            {
                chatID: 5,
                speaker: "landlord",
                text: "Great! I'll be at the Sperm Bank Saturday Morning. I have a couple ideas on how you can help, but I'll " +
                    "let you choose when you get there! ",
                button: [
                    { chatID: -1, text: "Ok. See you Saturday!", callback: "missionSpermBank" }
                ]
            },
            {
                chatID: 6,
                speaker: "landlord",
                text: "I'm so happy we'll get to work together. Can't wait to see you Saturday morning! ",
                button: [
                    { chatID: -1, text: "Ok. See you Saturday!", callback: "" }
                ]
            },
            {
                chatID: 7,
                speaker: "landlord",
                text: "I can't thank you enough for helping me out. You really are growing into a man. Since you like helping " +
                    "so much you can help me in the morning. Here's my bedroom key. If you make my bed in the morning I'll give " +
                    "you $5 in allowance in addition to cleaning the dishes. ",
                button: [
                    { chatID: -1, text: "Oh. cool", callback: "pantycheck" }
                ]
            },
            {
                chatID: 8,
                speaker: "landlord",
                text: "And no funny business. Your " + sc.n("el") + " like to go into my closet and steal things. I know there " +
                    "isn't anything for you in there, but I just have to say. ",
                button: [
                    { chatID: 10, text: "Oh. cool", callback: "" }
                ]
            },
            {
                chatID: 9,
                speaker: "landlord",
                text: "And don't be rooting around my panty drawer like you did with your " + sc.n("el") + ". I know that horny young " +
                    "men love the smell of pussy, but I don't need your fluids on my clean panties. ",
                button: [
                    { chatID: 10, text: "Oh. ok.", callback: "" }
                ]
            },
            {
                chatID: 10,
                speaker: "landlord",
                text: "I know you'll be a good boy and help me out. Here's the key, and behave yourself. ",
                button: [
                    { chatID: -1, text: "Sweet. I will", callback: "talk_3_complete" }
                ]
            },
            {
                chatID: 11,
                speaker: "landlord",
                text: "So what do you want to talk about?",
                button: [
                    { chatID: 12, text: "That's a very revealing night gown you're wearing", callback: "" },
                    { chatID: 13, text: "Why are you so hard on me?", callback: "" },
                    { chatID: 14, text: "Can you tell me about my father?", callback: "" },
                    { chatID: 15, text: "What are your opinions of the cult? ", callback: "" },
                    { chatID: -1, text: "Oh, nothing. ", callback: "talk_6_complete" },
                ]
            },
            {
                chatID: 12,
                speaker: "landlord",
                text: "When I'm at home, I'm relaxing. There's no need to dress stuffy. You all need to just accept " +
                    "that I don't care. You can dress however you want if you're paying the bills. ",
                button: [
                    { chatID: 11, text: "...", callback: "" },
                ]
            },
            {
                chatID: 13,
                speaker: "landlord",
                text: "I'm hard on you so you don't end up in the streets. It's not out of anger, it's out of love.  " +
                    "With " + sc.n("lola") + " I don't have to be mean, but with you and " + sc.n("eva") + " I do. " +
                    "I really want to be nice, but you two don't respond to that, so you make me mean so I can get " +
                    "through to you.",
                button: [
                    { chatID: 11, text: "...", callback: "" },
                ]
            },
            {
                chatID: 14,
                speaker: "landlord",
                text: "Your father was a good man. Not a manly man, but a good man. I don't really like talking about " +
                    "him, but he got mixed up with that cult. I told him that it was trouble, but he didn't listen. He " +
                    "never was good at listening to good advice, much like you. It ended up costing his life. Never " +
                    "trust them. Never go there. ",
                button: [
                    { chatID: 11, text: "...", callback: "" },
                ]
            },
            {
                chatID: 15,
                speaker: "landlord",
                text: "I'm a terrible person to ask. They are my main buyer, but I hate them. Really I use them as a " +
                    "means to an end. The sperm bank was owned by a man named " + sc.n("charlie") + ". Now he used to " +
                    "own almost half the town, till his gamling and whoring caught up with him and forced him to sell off " +
                    "most of his properites. For cheap. Cheap enough for me to buy it, with a little help from the bank. ",
                button: [
                    { chatID: 16, text: "uh huh", callback: "" },
                ]
            },
            {
                chatID: 16,
                speaker: "landlord",
                text: "So after I bought it, I found out that there isn't a huge demand in this town for sperm. After " +
                    "about three months I was about to go under till I was approached by the cult. They offered to buy " +
                    "all my extra sperm for a good price. While I hate them for everything they are, I needed them to " +
                    "stay afloat. So I take their dirty money, but I use it for good, like paying on this house. " +
                    "So I hate them and you should avoid them, I use them for their money. ",
                button: [
                    { chatID: 11, text: "...", callback: "" },
                ]
            },
            {
                chatID: 17,
                speaker: "landlord",
                text: "Hi honey. I don't think you've met " + sc.n("bigguy") + " yet. ",
                button: [
                    { chatID: 18, text: "oh. Hello.", callback: "" },
                ]
            },
            {
                chatID: 18,
                speaker: "bigguy",
                text: "Oh. Hi. Why don't you run along little one. Your " + sc.n("landlord") + " and I kinda busy here. ",
                button: [
                    { chatID: -1, text: "oh. ok. ", callback: "bg_s_0_end" },
                ]
            },
            {
                chatID: 19,
                speaker: "landlord",
                text: "Oh fuck... right there.... fuck.....",
                button: [
                    { chatID: 20, text: sc.n("landlord") + "?", callback: "bg_3" },
                ]
            },
            {
                chatID: 20,
                speaker: "landlord",
                text: "Oh my. I guess I got caught being a bit naughty. ",
                button: [
                    { chatID: 21, text: "...", callback: "" },
                ]
            },
            {
                chatID: 21,
                speaker: "bigguy",
                text: "Hey kid. Why don't you run along and go play in traffic or something. Let the grown ups talk about grown up things. ",
                button: [
                    { chatID: 22, text: "...", callback: "" },
                ]
            },
            {
                chatID: 22,
                speaker: "landlord",
                text: "Here's $10. Go play at the mall. I know you guys like playing at the mall. ok. ",
                button: [
                    { chatID: -1, text: "Oh. Sure. ", callback: "bg_s_1_end" },
                ]
            },
            {
                chatID: 23,
                speaker: "bigguy",
                text: "You ever see real man's cock cum in your " + sc.n("landlord") + "? ",
                button: [
                    { chatID: 24, text: "huh? ", callback: "bg_5" },
                ]
            },
            {
                chatID: 24,
                speaker: "landlord",
                text: "*gulp*",
                button: [
                    { chatID: 25, text: "...", callback: "bg_6" },
                ]
            },
            {
                chatID: 25,
                speaker: "landlord",
                text: "Oh my. I'm sorry you saw this. You see sometimes when two adults get together.. ",
                button: [
                    { chatID: 26, text: "I know what's going on. I don't need the details. ", callback: "" },
                ]
            },
            {
                chatID: 26,
                speaker: "bigguy",
                text: "Since you're such a smart little guy, why don't you figure out how to remove yourself from this room. ",
                button: [
                    { chatID: -1, text: "Ugh. ok", callback: "bg_s_2_end" },
                ]
            },
            {
                chatID: 27,
                speaker: "bigguy",
                text: "I know I told you to run along. Now get going before I move you along. ",
                button: [
                    { chatID: -1, text: "*Huff*", callback: "" },
                ]
            },
            {
                chatID: 28,
                speaker: "bigguy",
                text: "Why don't you run along cock blocker.  ",
                button: [
                    { chatID: -1, text: "...", callback: "" },
                ]
            },
            {
                chatID: 29,
                speaker: "landlord",
                text: "You know you're really grown into a handsome man. You must have the girls " +
                    "beating down the door trying to get with you. ",
                button: [
                    { chatID: 30, text: "Oh thanks. ", callback: "" },
                ]
            },
            {
                chatID: 30,
                speaker: "landlord",
                text: "You know if I was a younger woman I would absolutely date you. I love " +
                    "how I can see your veiny arms pop whenever you touch your face. ",
                button: [
                    { chatID: 37, text: "oh " + sc.n("landlord"), callback: "" },
                ]
            },
            {
                chatID: 31,
                speaker: "landlord",
                text: "What are you doing. Give me some space. ",
                button: [
                    { chatID: -1, text: "Oh. yeah. Sorry.", callback: "tv_closer" },
                ]
            },
            {
                chatID: 32,
                speaker: "thinking",
                text: "So soft and comfortable. I'm just going to close my eyes for a minute. ",
                button: [
                    { chatID: 33, text: "zzz", callback: "sit6" },
                ]
            },
            {
                chatID: 33,
                speaker: "landlord",
                text: "Honey. Wake up. You should go to bed.",
                button: [
                    { chatID: -1, text: "Oh. yeah. Sorry.", callback: "reset" },
                ]
            },
            {
                chatID: 34,
                speaker: "me",
                text: "Hey, do you...",
                button: [
                    { chatID: 35, text: "...", callback: "" },
                ]
            },
            {
                chatID: 35,
                speaker: "landlord",
                text: "Shhh. It's rude to talk when I'm watching the T.V.",
                button: [
                    { chatID: 36, text: "oh... sorry. ", callback: "" },
                ]
            },
            {
                chatID: 36,
                speaker: "landlord",
                text: "Don't be sorry. Be quit. ",
                button: [
                    { chatID: -1, text: "...", callback: "tvChatEnd" },
                ]
            },
            {
                chatID: 37,
                speaker: "landlord",
                text: "Oh my, I'm flushed now. Be good. ",
                button: [
                    { chatID: -1, text: "Hahaha ok", callback: "talk_4_complete" },
                ]
            },
            {
                chatID: 38,
                speaker: "landlord",
                text: "You know you should talk to your friends about " + sc.n("lola") + ". " +
                    "She's a good girl and really should be dating more. Maybe you two " +
                    "should date, you know as a practice date. You're both single and " +
                    "awkward around other people. ",
                button: [
                    { chatID: 39, text: "What? That's weird.", callback: "" },
                ]
            },
            {
                chatID: 39,
                speaker: "landlord",
                text: "It's not that weird. Just keep it cordial. Maybe a dinner and movie, " +
                    "just to practice for when you two get real boyfriends and girlfriends.",
                button: [
                    { chatID: -1, text: "Maybe. Let me think on it", callback: "talk_5_complete" },
                ]
            },
        ];
        if (cArray.length > chatID && chatID > -1)
            return cArray[chatID];
        else
            return [];
    }
};
