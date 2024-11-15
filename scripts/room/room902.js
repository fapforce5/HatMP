//Girls Lockerroom
var room902 = {};
room902.main = function () {
    let manAppear = cl.appearance() < 2;
    let caught = g.rand(0, 3) !== 0;

    if (!manAppear) {
        if (inv.has("lolalocker") && !sc.getMissionTask("lola", "random", 0).complete)
            caught = false;
    }

    if (manAppear && caught) {
        nav.bg("902_girl/bgbad.jpg");
        chat(0, 902);
    }
    else {
        var btnList = [
            {
                "type": "btn",
                "name": "lolalocker",
                "left": 1176,
                "top": 197,
                "width": 166,
                "height": 476,
                "image": "902_girl/lolalocker.png"
            }
        ];
        if (!inv.has("studentid")) {
            btnList.push({
                "type": "btn",
                "name": "sudentid",
                "left": 552,
                "top": 666,
                "width": 84,
                "height": 18,
                "image": "902_girl/studentid.png"
            });
        }
        var navList = [0, 901];
        $.each(btnList, function (i, v) {
            nav.button(v, 902);
        });
        nav.buildnav(navList);
        if (manAppear)
            chat(36, 902);
    }
};

room902.btnclick = function (name) {
    switch (name) {
        case "lolalocker":
            nav.killbutton("lolalocker");
            nav.bg("902_girl/locker.jpg");
            nav.button({
                "type": "btn",
                "name": "lock",
                "left": 1078,
                "top": 850,
                "width": 136,
                "height": 198,
                "image": "902_girl/lock.png"
            }, 902);
            nav.button({
                "type": "btn",
                "name": "reset",
                "left": 1700,
                "top": 800,
                "width": 160,
                "height": 160,
                "image": "6_computer/back.png"
            }, 902);
            break;
        case "sudentid":
            nav.killall();
            inv.add("studentid");
            nav.button({
                "type": "img",
                "name": "sudentid1",
                "left": 618,
                "top": 207,
                "width": 684,
                "height": 507,
                "image": "902_girl/studentid1.png"
            }, 902);
            chat(2, 902);
            break;
        case "lock":
            if (inv.has("lolalocker")) {
                nav.kill();
                
                if (sc.getTimeline("lola").roomID === 901) {
                    nav.bg("902_girl/unlockz.jpg");
                    if (sc.getMissionTask("lola", "random", 0).complete)
                        chat(23, 902)
                    else
                        chat(4, 902);
                }
                else {
                    nav.bg("902_girl/unlock.jpg");
                    nav.button({
                        "type": "btn",
                        "name": "reset",
                        "left": 1700,
                        "top": 800,
                        "width": 160,
                        "height": 160,
                        "image": "6_computer/back.png"
                    }, 902);
                    chat(3, 902);
                }
            }
            else
                chat(1, 902);
            break;
        case "reset":
            char.room(902);
            break;
        case "s4":
            nav.killbutton("s4");
            chat(9, 902);
            break;
        default:
            break;
    }
};

room902.chatcatch = function (callback) {
    switch (callback) {
        case "leave":
            char.room(901);
            break;
        case "resest":
            char.room(902);
            break;
        case "s1":
            nav.killall();
            nav.bg("902_girl/s1.jpg");
            break;
        case "s2":
        case "s3":
        case "s6":
        case "s7":
        case "s8":
        case "s9":
        case "s10":
        case "s11":
        case "s13":
        case "s14":
        case "s15":
        case "r0":
        case "r1":
        case "r3":
        case "r4":
            nav.bg("902_girl/" + callback + ".jpg");
            break;
        case "s4":
            nav.bg("902_girl/s4.jpg");
            nav.button({
                "type": "btn",
                "name": "s4",
                "left": 1051,
                "top": 96,
                "width": 484,
                "height": 984,
                "image": "902_girl/s4.png"
            }, 902);
            break;
        case "s5":
            nav.kill();
            nav.bg("902_girl/s5.jpg");
            break;
        case "s12":
            nav.bg("902_girl/bg.jpg");
            break;
        case "s16":
            nav.killall();
            sc.completeMissionTask("lola", "random", 0);
            char.settime(18, 0);
            nav.buildnav([0, 901, 902]);
            break;
        case "r1check":
            if (cl.c.chastity !== null)
                chat(27, 902);
            else
                chat(28, 902);
            break;
        case "r2":
            nav.bg("902_girl/r2.jpg");
            if (sc.getstep("lola") < 7)
                chat(30, 902);
            else
                chat(31, 902);
            break;
        case "r5":
            gv.mod("receiveOralFemale", 1);
            nav.bg("902_girl/" + callback + ".jpg");
            break;
        default:
            break;
    }
};

room902.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "!girl",
            text: "AAAAAAAAAaaaaaaaaaaaaaaaaa WHAT ARE YOU DOING IN HERE! GET OUT!!!!",
            button: [{ chatID: -1, text: "Oh crap! I'm not a dirty pervert! Sorry", callback: "leave" }]
        },
        {
            chatID: 1,
            speaker: "me",
            text: "Oh nice, it's " + sc.n("lola") + "'s locker. Hmmm I wonder what the combination is...",
            button: [{ chatID: -1, text: "...", callback: "" }]
        },
        {
            chatID: 2,
            speaker: "me",
            text: "Oh, Cindy left her student ID here. Maybe I'll just hold onto this for now. ",
            button: [{ chatID: -1, text: "...", callback: "resest" }]
        },
        {
            chatID: 3,
            speaker: "thinking",
            text: "She's not swiming now... is that a picture of me when we went hiking last year? ",
            button: [{ chatID: -1, text: "...", callback: "" }]
        },
        {
            chatID: 4,
            speaker: "thinking",
            text: sc.n("lola") + " must be out swimming. Should I play a prank on her and hide her clothes when she gets back? ",
            button: [
                { chatID: 5, text: "Hide in a locker and wait for her. ", callback: "s1" },
                { chatID: -1, text: "Leave it", callback: "resest" },
            ]
        },
        {
            chatID: 5,
            speaker: "thinking",
            text: "I hope she finishes swimming soon. This locker is so uncomfortable. ",
            button: [
                { chatID: 6, text: "...", callback: "s2" },
            ]
        },
        {
            chatID: 6,
            speaker: "thinking",
            text: "Oh look, there she is..",
            button: [
                { chatID: 7, text: "...", callback: "s3" },
            ]
        },
        {
            chatID: 7,
            speaker: "thinking",
            text: "...and there is her butt. She really does have a great butt. ",
            button: [
                { chatID: 8, text: "...", callback: "s1" },
            ]
        },
        {
            chatID: 8,
            speaker: "thinking",
            text: "She's in the shower. Now's my chance to steal her clothes. ",
            button: [
                { chatID: -1, text: "...", callback: "s4" },
            ]
        },
        {
            chatID: 9,
            speaker: "thinking",
            text: "Now to hide and wait for her to discover she has not clothes.. hehehehehhehe",
            button: [
                { chatID: 10, text: "...", callback: "s1" },
            ]
        },
        {
            chatID: 10,
            speaker: "thinking",
            text: "This is going to be good! I can hear her turn off the shower! ",
            button: [
                { chatID: 11, text: "...", callback: "s5" },
            ]
        },
        {
            chatID: 11,
            speaker: "thinking",
            text: "OH lol! She just discovered her clothes are missing!",
            button: [
                { chatID: 12, text: "...", callback: "s6" },
            ]
        },
        {
            chatID: 12,
            speaker: "thinking",
            text: "Awww. I should resuce her from this prank. I think she's going to have a complete break down. " + sc.n("lola") +
                " was never good at public embarrassment. ",
            button: [
                { chatID: 13, text: "...", callback: "s7" },
            ]
        },
        {
            chatID: 13,
            speaker: "thinking",
            text: "Huh? Did someone just come in? ",
            button: [
                { chatID: 14, text: "...", callback: "s8" },
            ]
        },
        {
            chatID: 14,
            speaker: "thinking",
            text: "Oh crap. Did she just run out the front door? Why would she do that? Idiot! I need to chase after her. ",
            button: [
                { chatID: 15, text: "...", callback: "s9" },
            ]
        },
        {
            chatID: 15,
            speaker: "me",
            text: "Wait " + sc.n("lola") + ". Wait up!",
            button: [
                { chatID: 16, text: "...", callback: "s10" },
            ]
        },
        {
            chatID: 16,
            speaker: "thinking",
            text: "She ran this way, but I can't tell which way she went. ",
            button: [
                { chatID: 17, text: "...", callback: "" },
            ]
        },
        {
            chatID: 17,
            speaker: "me",
            text: sc.n("lola") + "! Are you over this way? It's " + sc.n("me") + ".",
            button: [
                { chatID: 18, text: "...", callback: "s11" },
            ]
        },
        {
            chatID: 18,
            speaker: "lola",
            text: "Oh thank god! " + sc.n("eva") + " hid my clothes after I went swimming again. Can you save me and look " +
                "around the the locker room at the pool for my clothes. Pretty please. Please. Please. You're dressed like " +
                "a girl so it shouldn't be a big deal. ",
            button: [
                { chatID: 24, text: "[Sneak a quick peek at her naked body] ", callback: "r0" },
                { chatID: 19, text: "Sure. I'll run grab those. ", callback: "s12" },
            ]
        },
        {
            chatID: 19,
            speaker: "thinking",
            text: "I'm so glad she thinks " + sc.n("eva") + " did this. Hopefully it doesn't come up that I did it. I'll " +
                "just grab her clothes from the locker I was hiding in and blame it all on " + sc.n("eva") + ". Simple. ",
            button: [
                { chatID: 20, text: "...", callback: "s13" },
            ]
        },
        {
            chatID: 20,
            speaker: "lola",
            text: "My hero! I'm going to get dressed, but promise not to tell " + sc.n("eva") + ". She'll never " +
                "let me live it down that her prank had me run across the campus naked. Now hand over my clothes so " +
                "I can get dressed. No peeking. ",
            button: [
                { chatID: 22, text: "[Hand over her clothes]", callback: "s15" },
                { chatID: 21, text: "[Hand over her clothes and take a peek]", callback: "s14" },
            ]
        },
        {
            chatID: 21,
            speaker: "lola",
            text: "I love that you have to get a look at my boobs, but no peeking. I don't need everyone to " +
                "know I'm naked back here. ",
            button: [
                { chatID: 22, text: "oh, I was just... nevermind.", callback: "s15" },
            ]
        },
        {
            chatID: 22,
            speaker: "lola",
            text: "You're the best. I hope you don't mind, but I'm going to go to my room and die. ",
            button: [
                { chatID: -1, text: "Yeah. I'll catch you later. ", callback: "s16" },
            ]
        },
        {
            chatID: 23,
            speaker: "thinking",
            text: "I already got her once pretty good. I'm not going to get her again.  ",
            button: [
                { chatID: -1, text: "...", callback: "reset" },
            ]
        },
        {
            chatID: 24,
            speaker: "lola",
            text: "Hey perv! Why are you getting so close?",
            button: [
                { chatID: 25, text: "I had a hard time hearing you. What did you need?", callback: "r1" },
            ]
        },
        {
            chatID: 25,
            speaker: "lola",
            text: "I need my clothes. There's probably somewhere in the locker room. Can you run and grab them. ",
            button: [
                { chatID: 26, text: "If I'm going to do something for you, you have to do something for me ", callback: "" },
                { chatID: 19, text: "Sure. I'll run grab those. ", callback: "s12" },
            ]
        },
        {
            chatID: 26,
            speaker: "lola",
            text: "Yeah, yeah, yeah. Just get me my clothes. ",
            button: [
                { chatID: -1, text: "First you have to give me a blow job. ", callback: "r1check" },
            ]
        },
        {
            chatID: 27,
            speaker: "thinking",
            text: "Fuck! I have my chastity cage on. I'll just run and grab her clothes.  ",
            button: [
                { chatID: 19, text: "Sure. I'll run grab those. ", callback: "s12" }
            ]
        },
        {
            chatID: 28,
            speaker: "lola",
            text: "What! I'm not giving you a blow job in the middle of the college campus! You've lost your mind. " +
                "Stop messing around and get me my clothes! ",
            button: [
                { chatID: 29, text: "Ok. I'm going home. You can walk back to the pool naked. ", callback: "" },
            ]
        },
        {
            chatID: 29,
            speaker: "lola",
            text: "Grrrrrr.... ok you got me. Come on back. Let's see that penis of yours. But be quiet so we don't get " +
                "caught. ",
            button: [
                { chatID: 30, text: "Sweet! ", callback: "r2" },
            ]
        },
        {
            chatID: 30,
            speaker: "lola",
            text: "You're going to have to help. I've never put someone's penis in my mouth before. Do I blow on it? ",
            button: [
                { chatID: 32, text: "Hahah no. You'll do great. Just put it in your mouth and slide it back and forth. ", callback: "r3" },
            ]
        },
        {
            chatID: 31,
            speaker: "lola",
            text: "You know, I just love your penis. This is wrong, but I can't help but be excited. Get it out, I love touching it. ",
            button: [
                { chatID: 32, text: "Hahah sure. Here you go ", callback: "r3" },
            ]
        },
        {
            chatID: 32,
            speaker: "lola",
            text: "My jaw is starting to hurt. Can you hurry up and cum? I don't think I can do this much longer. ",
            button: [
                { chatID: 33, text: "Hearing all the people walking around has thrown me off. I just really need to cum. Maybe I'll finish myself off.", callback: "" },
            ]
        },
        {
            chatID: 33,
            speaker: "lola",
            text: "That's sexy. I want to see you masturbate. You can even cum on my boobies if you want. ",
            button: [
                { chatID: 34, text: "Oh yeah", callback: "r4" },
            ]
        },
        {
            chatID: 34,
            speaker: "lola",
            text: "AaaaaaAaaa ",
            button: [
                { chatID: 35, text: "Fuck yeah", callback: "r5" },
            ]
        },
        {
            chatID: 35,
            speaker: "lola",
            text: "You look so sexy masturbating for me. Now pretty please, with sugar on top, can you get my clothes while I " +
                "wipe your cum off my chest. ",
            button: [
                { chatID: 19, text: "Sure. I'll run grab those. ", callback: "s12" }
            ]
        },
        {
            chatID: 36,
            speaker: "thinking",
            text: "The coast is clear. No one's in here. ",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};