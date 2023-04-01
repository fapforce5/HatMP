//Girls Lockerroom
var room902 = {};
room902.main = function () {
    if (cl.appearance() < 2) {
        nav.button({
            "type": "img",
            "name": "woman",
            "left": 1273,
            "top": 48,
            "width": 410,
            "height": 1057,
            "image": "452_parkWomansRoom/woman.png"
        }, 902);
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
                    if (sc.checkevent("lola", -1)) {
                        chat(23, 902)
                    }
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
            sc.setstep("lola", -6);
            char.settime(18, 0);
            nav.buildnav([0, 901, 902]);
            break;
        default:
            break;
    }
};

room902.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "random",
            text: "AAAAAAAAAaaaaaaaaaaaaaaaaa WHAT ARE YOU DOING IN HERE! GET OUT!!!!",
            button: [{ chatID: -1, text: "Oh crap! I'm not a dirty pervert! Sorry", callback: "leave" }]
        },
        {
            chatID: 1,
            speaker: "me",
            text: "Oh nice, it's " + sc.n("lola") + "'s locker. Hmmm I wonder what the combination is...[In development]",
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
            text: "Oh crap. Why would she run out the front door? Idiot! I need to chase after her. ",
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
                "around the the locker room at the pool for my clothes. Pretty please. Please. Please. ",
            button: [
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
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};