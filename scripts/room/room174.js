//Room name
var room174 = {};
room174.main = function () {
    if (missy.activecase().name === "case_goth") {
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
            sex.mod("bj", true, "f", 1);
            gv.mod("arousal", 20);
            nav.bg("174_oneOffCase/goth4.jpg");
            chat(6, 174);
            break;
        case "wardrobe":
            g.pass = 174;
            char.room(8);
            break;
        default:
            break;
    }
};

room174.chatcatch = function (callback) {
    switch (callback) {
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
                "froze. It's a good thing I had your underware on or she would have seen my little boner " +
                "sticking up. Hahaha",
            button: [
                { chatID: 30, text: "haha.. oh wow. That would have been a different converstaion. ", callback: "" },
            ]
        },
        {
            chatID: 30,
            speaker: "!bill",
            text: "So, I think the moments passed. You should wear my panties when we walk to " +
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
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};