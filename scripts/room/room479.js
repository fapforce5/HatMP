//Room name
var room479 = {};
room479.main = function () {
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
        {
            "type": "btn",
            "name": "bj",
            "left": 741,
            "top": 516,
            "width": 616,
            "height": 627,
            "image": "479_hall/bj.png"
        },
    ];
    var navList = [478, 480, 481];
    $.each(btnList, function (i, v) {
        nav.button(v, 479);
    });
    nav.buildnav(navList);
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
            if (!g.pass.talkList.includes("bj"))
                chat(0, 479);
            else
                chat(11, 479);
            break;
        case "bj2":
            if (g.internal === 5) {
                nav.bg("479_hall/bj0.jpg");
                nav.killbutton("bj2");
                chat(12, 479);
            }
            else
                nav.bg("479_hall/bj" + g.internal + ".jpg");
            g.internal++;
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
            g.mod("receiveOralFemale", 1);
            cl.doCum("false");
            if (!g.pass.talkList.includes("bj"))
                g.pass.talkList.push("bj");
            char.room(479);
            break;
        case "bj2x":
            nav.bg("479_hall/bj2.jpg");
            g.internal = 3;
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
        case "reset":
            char.room(479);
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
            text: "It has been a rocky road, but my slave here has found a reason to live as my servent. It " +
                "may not be the story of Sleeping Beauty, but it is how we have chosen to survive our trauma. ",
            button: [
                { chatID: 10, text: "oh wow", callback: "" },
            ]
        },
        {
            chatID: 10,
            speaker: "random",
            text: "Come back anytime to receive a blow job from her. She gets an odd joy from having a dick in her " +
                "mouth. I think it's becuase she gets the choice to bring pleasure to others. ",
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
                { chatID: -1, text: "Totally ", callback: "reset" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};