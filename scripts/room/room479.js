//Room name
var room479 = {};
room479.main = function () {
    g.internal = { arrive: g.dt, talkList: new Array(), amputee: 0, secretPath: 0, tod: 1, single: null };

    room480.chatcatch("settod");
    var btnList = [
        {
            "type": "btn",
            "name": "left",
            "left": 53,
            "top": 118,
            "width": 166,
            "height": 533,
            "image": "479_hall/left.png"
        },
        {
            "type": "btn",
            "name": "right",
            "left": 1660,
            "top": 80,
            "width": 260,
            "height": 594,
            "image": "479_hall/right.png"
        },
        {
            "type": "btn",
            "name": "up",
            "left": 1160,
            "top": 224,
            "width": 261,
            "height": 178,
            "image": "479_hall/up.png"
        },
        
    ];

    var navList = [478, 480, 481];
    $.each(btnList, function (i, v) {
        nav.button(v, 479);
    });
    nav.buildnav(navList);

    room480.displaychar([
        {
            "type": "img",
            "name": "bggirls",
            "left": 699,
            "top": 462,
            "width": 357,
            "height": 235,
            "image": "479_hall/bggirls.png",
            "tod": [1, 2, 3]
        },
        {
            "type": "btn",
            "name": "ledge",
            "left": 631,
            "top": 293,
            "width": 85,
            "height": 247,
            "image": "479_hall/high.png",
            "tod": [1, 3]
        },
        {
            "type": "btn",
            "name": "amputee",
            "left": 441,
            "top": 485,
            "width": 378,
            "height": 406,
            "image": "479_hall/amputee.png",
            "tod": [1]
        },
        {
            "type": "btn",
            "name": "bj",
            "left": 741,
            "top": 516,
            "width": 616,
            "height": 627,
            "image": "479_hall/bj.png",
            "tod": [1]
        },
        {
            "type": "btn",
            "name": "dance",
            "left": 712,
            "top": 76,
            "width": 432,
            "height": 661,
            "image": "479_hall/dance.png",
            "tod": [2]
        },

        
    ]);
};

room479.btnclick = function (name) {
    switch (name) {
        case "left":
            char.room(478);
            break;
        case "right":
            char.room(481);
            break;
        case "up":
            char.room(480);
            break;
        case "bj":
            nav.killall();
            nav.bg("479_hall/bj0.jpg");
            if (!g.internal.talkList.includes("bj"))
                chat(0, 479);
            else
                chat(11, 479);
            break;
        case "bj2":
            if (g.internal.single === 5) {
                nav.bg("479_hall/bj0.jpg");
                nav.killbutton("bj2");
                chat(12, 479);
            }
            else
                nav.bg("479_hall/bj" + g.internal.single + ".jpg");
            g.internal.single++;
            break;
        case "amputee":
            nav.killall();
            nav.bg("479_hall/amputee.jpg");
            if (g.internal.amputee === 0)
                chat(14, 479);
            else if (g.internal.amputee === 1)
                chat(19, 479);
            else if (g.internal.amputee === 2)
                chat(20, 479);
            else if (g.internal.amputee === 3)
                chat(21, 479);
            else 
                chat(13, 479);
            break;
        case "ledge":
            nav.killall();
            nav.bg("479_hall/ledge.jpg");
            if (g.internal.secretPath === 0)
                chat(26, 479);
            else if (g.internal.secretPath === 1)
                chat(32, 479);
            break;
        case "dance":
            if (!g.internal.talkList.includes("dance"))
                chat(33, 479);
            else
                chat(9999, 479);
            break;
        default:
            break;
    }
};

room479.chatcatch = function (callback) {
    switch (callback) {
        case "bj0":
        case "bj1":
        case "bj2":
        case "bj3":
        case "bj4":
            nav.bg("479_hall/" + callback + ".jpg");
            break;
        case "bj5":
            gv.mod("receiveOralFemale", 1);
            cl.doCum("false");
            if (!g.internal.talkList.includes("bj"))
                g.internal.talkList.push("bj");
            room480.chatcatch("incrementtod");
            char.room(479);
            break;
        case "bj2x":
            nav.bg("479_hall/bj2.jpg");
            g.internal.single = 3;
            nav.button({
                "type": "btn",
                "name": "bj2",
                "left": 1650,
                "top": 785,
                "width": 232,
                "height": 150,
                "image": "526_bar/arrowRight.png"
            }, 479);
            break;
        case "bj2x1":
            room480.chatcatch("incrementtod");
            char.room(479);
            break;
        case "reset":
            char.room(479);
            break;
        case "increment":
            room480.chatcatch("incrementtod");
            char.room(479);
            break;
        case "amputee0":
            room480.chatcatch("incrementtod");
            g.internal.amputee = 1;
            char.room(479);
            break;
        case "amputee1":
            room480.chatcatch("incrementtod");
            g.internal.amputee = 2;
            char.room(479);
            break;
        case "amputee2":
            room480.chatcatch("incrementtod");
            g.internal.amputee = 3;
            char.room(479);
            break;
        case "amputee3":
            if (!g.internal.talkList.includes("amputee"))
                g.internal.talkList.push("amputee");
            room480.chatcatch("incrementtod");
            g.internal.amputee = 4;
            char.room(479);
            break;
        case "ledge0":
            room480.chatcatch("incrementtod");
            g.internal.secretPath = 1;
            char.room(479);
            break;
        case "dance1":
            nav.killall();
            nav.killbutton("dance");
            cl.nude();
            cl.c.panties = cl.cTemp.panties;
            cl.display();
            nav.button({
                "type": "btn",
                "name": "dance",
                "left": 712,
                "top": 49,
                "width": 432,
                "height": 688,
                "image": "479_hall/dance1.png",
            }, 479);
            break;
        default:
            break;
    }
};

room479.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "random",
            text: "Hay stranger! I'd ask for a blow job, but it's going to take me a few minutes to get it " +
                "hard again!",
            button: [
                { chatID: 1, text: "Oh, no, I was just..", callback: "bj1" }
            ]
        },
        {
            chatID: 1,
            speaker: "random",
            text: "Oh! you want a blow job. I don't do that, but my slave does! Slave suck her dick!",
            button: [
                { chatID: 2, text: "Well ok! ", callback: "bj2" },
                { chatID: 5, text: "I'm just here to ask some questions. ", callback: "bj0" },
            ]
        },
        {
            chatID: 2,
            speaker: "random",
            text: "You're going to love her blowjob",
            button: [
                { chatID: 3, text: "MMmmmm", callback: "bj3" },
            ]
        },
        {
            chatID: 3,
            speaker: "random",
            text: "Feel her tongue flicking right at the base of you dick? Really soft and playful. Hard to hold " +
                "back with your head bobbing against her throat. ",
            button: [
                { chatID: 4, text: "OOooohhhh fffffff", callback: "bj4" },
            ]
        },
        {
            chatID: 4,
            speaker: "random",
            text: "She was so terrible when she got here. I had to hold her by her ears and correct years of bad " +
                "training. But as you can see with your cum running down her throat, she has nearly perfected the " +
                "blow job. ",
            button: [
                { chatID: 5, text: "Oh Yeah!", callback: "bj0" },
            ]
        },
        {
            chatID: 5,
            speaker: "random",
            text: "I met my slave here at this place. When I first laid eyes on her after coming here I knew she was " +
                "the one for me. I found her curled up under one of the beds. Poor thing hadn't eaten for days. " +
                "I brought her some soup and fed it to her calming this poor thing. ",
            button: [
                { chatID: 6, text: "...", callback: "" },
            ]
        },
        {
            chatID: 6,
            speaker: "random",
            text: "My time with the cult was not terrible. I learned to serve those and ate my hormone pills. " +
                "My slaves time was not as good. She fought and called them names all through her first days there. " +
                "When she refused to quiet down they removed her vocal cords and put her in the toilet pit for weeks. ",
            button: [
                { chatID: 7, text: "...", callback: "" },
            ]
        },
        {
            chatID: 7,
            speaker: "random",
            text: "She grew terribly ill in there, nearly caught her death. They allowed her to recover only so they " +
                "could use her body for their twisted purpose. After nearly two years of beatings and torture they put " +
                "her though the transformation ritual and impregnation. She was one of the few that was able to carry " +
                "the embryo of Azrael. Fearing what she would bring into this world she gave self induced her own " +
                "abortion. ",
            button: [
                { chatID: 8, text: "...", callback: "" },
            ]
        },
        {
            chatID: 8,
            speaker: "random",
            text: "When they found her with her aborted fetus they tied her to a tree in the swamps to die of exposure or " +
                "or dehydration while the mosquitoes fed on her. Luckily the " + sc.n("queen") + " found her and saved her " +
                "from death. Unable to talk and tired from the years of abuse she was on the edge of ending her own life. " +
                "That's when I found her brought her some soup. ",
            button: [
                { chatID: 9, text: "...", callback: "" },
            ]
        },
        {
            chatID: 9,
            speaker: "random",
            text: "It has been a rocky road, but my slave here has found a reason to live as my servant. It " +
                "may not be the story of Sleeping Beauty, but it is how we have chosen to survive our trauma. ",
            button: [
                { chatID: 10, text: "oh wow", callback: "" },
            ]
        },
        {
            chatID: 10,
            speaker: "random",
            text: "Come back anytime to receive a blow job from her. She gets an odd joy from having a dick in her " +
                "mouth. I think it's because she gets the choice to bring pleasure to others. ",
            button: [
                { chatID: -1, text: "Well thanks. ", callback: "bj5" },
            ]
        },
        {
            chatID: 11,
            speaker: "random",
            text: "So you've come back for a blow job? ",
            button: [
                { chatID: -1, text: "Yes I have", callback: "bj2x" },
                { chatID: -1, text: "Nope. Just bored. ", callback: "reset" },
            ]
        },
        {
            chatID: 12,
            speaker: "random",
            text: "She thinks your cum is the sweetest. Feel free to feed my slave anytime.  ",
            button: [
                { chatID: -1, text: "Totally ", callback: "bj2x1" },
            ]
        },
        {
            chatID: 13,
            speaker: "random",
            text: "I can't wait till I'm healed up so I can leave this place.  ",
            button: [
                { chatID: -1, text: "...", callback: "reset" },
            ]
        },
        {
            chatID: 14,
            speaker: "random",
            text: "Yeah?",
            button: [
                { chatID: 15, text: "I was just going around talking to people. ", callback: "" },
            ]
        },
        {
            chatID: 15,
            speaker: "random",
            text: "oh",
            button: [
                { chatID: 16, text: "So.. uh what happened to your legs?", callback: "" },
                { chatID: 17, text: "Hello. How are you?", callback: "" },
            ]
        },
        {
            chatID: 16,
            speaker: "random",
            text: "Normally people start a conversation with a 'hello, how are you', but you go straight to my legs. ",
            button: [
                { chatID: 17, text: "Oh. Hello. How are you? ", callback: "" },
            ]
        },
        {
            chatID: 17,
            speaker: "random",
            text: "Fine. ",
            button: [
                { chatID: 18, text: "Sooooo. About your leg? ", callback: "" },
            ]
        },
        {
            chatID: 18,
            speaker: "random",
            text: "I've got to go. Maybe I'll find someone that knows how to talk to a guy. ",
            button: [
                { chatID: -1, text: "oh. sorry. ", callback: "amputee0" },
            ]
        },
        {
            chatID: 19,
            speaker: "me",
            text: "Hello, How are you.  ",
            button: [
                { chatID: -1, text: "That's so lame. Try again. ", callback: "amputee1" },
            ]
        },
        {
            chatID: 20,
            speaker: "me",
            text: "Nice shoes. Want to fuck?  ",
            button: [
                { chatID: -1, text: "Better. But no. You're not my type. ", callback: "amputee2" },
            ]
        },
        {
            chatID: 21,
            speaker: "me",
            text: "I have no idea what to say. ",
            button: [
                { chatID: 22, text: "...", callback: "" },
            ]
        },
        {
            chatID: 22,
            speaker: "random",
            text: "You're persistent. I guess you want to know what happened to my legs. ",
            button: [
                { chatID: 23, text: "I sure do. ", callback: "" },
            ]
        },
        {
            chatID: 23,
            speaker: "random",
            text: "It's funny, before the cult crushed my legs no one would just come up to me and talk to me. " +
                "Now that my legs are all fucked up that's all everyone wants to talk about. Did you know I was " +
                "a wilderness guide and survival expert? I've trained hundreds of people who to get out of " +
                "difficult situations in the forest with nothing buy a knife. ",
            button: [
                { chatID: 24, text: "I didn't know that. ", callback: "" },
            ]
        },
        {
            chatID: 24,
            speaker: "random",
            text: "Of course you didn't, because you were so fixated on my legs. No one wants a wilderness guide " +
                "that can't even walk. The cult may have given me a great set of tits, but they took away my " +
                "purpose. ",
            button: [
                { chatID: 25, text: "Can't you get a prosthetic? ", callback: "" },
            ]
        },
        {
            chatID: 25,
            speaker: "random",
            text: "You know what's better than a prosthetic leg? My real leg. This place is stupid. The cult is " +
                "stupid. I'm done talking. Once my other leg is healed up I plan on getting out of here and " +
                "hiding in the forest. so I don't have to have stupid conversations with people. ",
            button: [
                { chatID: -1, text: "Oh. Ouch", callback: "amputee3" },
            ]
        },
        {
            chatID: 26,
            speaker: "random",
            text: "Hi you. ",
            button: [
                { chatID: 27, text: "So what are you doing way up here?", callback: "" },
            ]
        },
        {
            chatID: 27,
            speaker: "random",
            text: "Just waiting till night time. What are you doing way up here? ",
            button: [
                { chatID: 28, text: "I came to visit you. ", callback: "" },
            ]
        },
        {
            chatID: 28,
            speaker: "random",
            text: "Smooth. You just may be what I'm looking for. Are you an obedient sissy? ",
            button: [
                { chatID: 30, text: "I am very submissive. ", callback: "" },
                { chatID: 29, text: "Nope! I'm always the boss! ", callback: "" },
                { chatID: 31, text: "I am a true obedient sissy. ", callback: "" },
            ]
        },
        {
            chatID: 29,
            speaker: "random",
            text: "I guess I was wrong about you. ",
            button: [
                { chatID: -1, text: "Oh... ", callback: "increment" },
            ]
        },
        {
            chatID: 30,
            speaker: "random",
            text: "That's not what I asked.  ",
            button: [
                { chatID: -1, text: "Oh... ", callback: "reset" },
            ]
        },
        {
            chatID: 31,
            speaker: "random",
            text: "Say I am an obedient fuck slut that will do anything anyone tells me. I only live to serve " +
                "my superiors and their pleasure is what I live for.  ",
            button: [
                { chatID: 30, text: "huh... ", callback: "" },
                { chatID: 32, text: "I am an obedient fuck slut that will do anything anyone tells me. I only live to serve " +
                "my superiors and their pleasure is what I live for.", callback: "" },
            ]
        },
        {
            chatID: 32,
            speaker: "random",
            text: "Good! Meet me in the kitchen after 5 PM, but before bedtime. ",
            button: [
                { chatID: -1, text: "I'll be there! ", callback: "ledge0" },
            ]
        },
        {
            chatID: 33,
            speaker: "me",
            text: "Hi. I wanted to ask you about how you got here. ",
            button: [
                { chatID: 34, text: "...", callback: "" },
            ]
        },
        {
            chatID: 34,
            speaker: "random",
            text: "Strip down to your panties and get up here and dance bitch!",
            button: [
                { chatID: 35, text: "I don't know. I'm not that good of a dancer..", callback: "" },
            ]
        },
        {
            chatID: 35,
            speaker: "random",
            text: "No one cares. We're all terrible. Just get up here and have fun!",
            button: [
                { chatID: -1, text: "Strip down and Go Dance!", callback: "dance1" },
                { chatID: -1, text: "Maybe next time", callback: "reset" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};