//hallway
var room11 = {};
room11.main = function () {
    if (!sc.getSecret("lola").secretOut && (cl.isCrossdressing() || cl.c.chest > 2)) {
        nav.button({
            "type": "btn",
            "name": "caught",
            "left": 513,
            "top": 0,
            "width": 1065,
            "height": 1080,
            "image": "16_livingRoom/allthree.png"
        }, 16);
        return;
    }
    else if (!daily.get("evaTalkSecret") && sc.taskGetStep("lola", "sissy") === 4) {
        sc.completeMissionTask("lola", "sissy", 4);
        future.add("lolaboy", 7);
        nav.button({
            "type": "img",
            "name": "eva",
            "left": 760,
            "top": 295,
            "width": 518,
            "height": 785,
            "image": "11_hallway/eva.webp"
        }, 11);
        chat(7, 11);
        return;
    }
    g.pass = null;
    if (g.hasAccess(16).access) {
        var motherLocation = sc.getTimeline("landlord").roomID;
        var sisterLocation = sc.getTimeline("lola").roomID;
        var openDoor = g.hourBetween(7, 21);
        var btnList = new Array();
        var navList = [16, 10];
        var lolapee = false;
        if (!weekly.get("lolapee") && sisterLocation === 13 && motherLocation !== 12 && g.rand(0, 2) === 0) {
            g.pass = "lolapee";
        }
        //Bathroom
        btnList.push({
            "type": "btn",
            "name": "mainChar",
            "title": "My Room",
            "left": 628,
            "top": 350,
            "width": 99,
            "height": 486,
            "image": "11_hallway/11_mainCharDoor.png",
            "night": "11_hallway/11_mainCharDoorNight.png"
        });

        //Bathroom
        if (motherLocation === 12 || sisterLocation === 12 || g.pass === "lolapee") {
            btnList.push({
                "type": "btn",
                "name": "bathroomClose",
                "title": "Bathroom",
                "left": 1499,
                "top": 118,
                "width": 294,
                "height": 962,
                "image": "11_hallway/11_bathroomClosed.png",
                "night": "11_hallway/11_bathroomClosedNight.png"
            });
        }
        else {
            btnList.push({
                "type": "btn",
                "name": "bathroomOpen",
                "title": "Bathroom",
                "left": 1499,
                "top": 118,
                "width": 294,
                "height": 962,
                "image": "11_hallway/11_bathroomOpen.png",
                "night": "11_hallway/11_bathroomOpenNight.png"
            });
            navList.push(12);
        }

        //EL room
        if (sisterLocation === 13 && openDoor) {
            btnList.push({
                "type": "btn",
                "name": "sisterOpen",
                "title": sc.n("el") + "'s Room",
                "left": 1276,
                "top": 388,
                "width": 53,
                "height": 409,
                "image": "11_hallway/11_sisterOpen.png",
                "night": "11_hallway/11_sisterOpenNight.png"
            });
            navList.push(13);
        }
        else {
            btnList.push({
                "type": "btn",
                "name": "sisterClose",
                "title": sc.n("el") + "'s Locked Room",
                "left": 1276,
                "top": 388,
                "width": 53,
                "height": 409,
                "image": "11_hallway/11_sisterClosed.png",
                "night": "11_hallway/11_sisterClosedNight.png"
            });
        }

        btnList.push({
            "type": "btn",
            "name": "downStairs",
            "title": "Down Stairs",
            "left": 345,
            "top": 88,
            "width": 255,
            "height": 945,
            "image": "11_hallway/downStairs.png",
            "night": "11_hallway/downStairsNight.png"
        });

        $.each(btnList, function (i, v) {
            nav.button(v, 11);
        });
        nav.buildnav(navList);
    }
    else {
        if (sc.getTimeline("landlord").roomID === 0) {
            chat(6, 11);
        }
        else {
            nav.button({
                "type": "btn",
                "name": "sisterClose",
                "title": sc.n("el") + "'s Locked Room",
                "left": 800,
                "top": 146,
                "width": 786,
                "height": 931,
                "image": "11_hallway/m.png",
            }, 11);
            chat(5, 11);
        }
    }
};

room11.btnclick = function (name) {
    switch (name) {
        case "mainChar":
            char.room(10);
            break;
        case "bathroomOpen":
            char.room(12);
            break;
        case "bathroomClose":
            if (!daily.get("homeShowerPeek")) {
                if (sc.getTimeline("landlord").roomID === 12)
                    char.room(12);
                else
                    char.room(12);//chat(0, 11);
            }
            else
                chat(0, 11);
            break;
        case "sisterOpen":
            char.room(13);
            break;
        case "sisterClose":
            if (inv.has("flatmateKey"))
                chat(3, 11);
            else
                chat(2, 11);
            break;
        case "motherOpen":
            char.room(14);
            break;
        case "motherClose":
            if (inv.has("landlordKey"))
                chat(4, 11);
            else
                chat(1, 11);
            break;
        case "downStairs":
            char.room(16);
            break;
        default:
            break;
    }
};

room11.chatcatch = function (chatcatch) {
    switch (chatcatch) {
        case "enterLLRoom":
            char.room(14);
            break;
        case "enterELRoom":
            char.room(13);
            break;
        case "kickouot":
            char.room(0);
            break;
        case "reset":
            char.room(11);
            break;
    }
};

room11.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "me",
            text: "I'll let them finish their shower",
            button: []
        },
        {
            chatID: 1,
            speaker: "me",
            text: sc.n("landlord") + " has locked the door",
            button: []
        },
        {
            chatID: 2,
            speaker: "me",
            text: "It appears my " + sc.n("el") + " have locked their door",
            button: []
        },
        {
            chatID: 3,
            speaker: "me",
            text: "Unlock " + sc.n("el") + "'s door?",
            button: [
                { chatID: -1, text: "Yes", callback: "enterELRoom" },
                { chatID: -1, text: "No", callback: "" }
            ]
        },
        {
            chatID: 4,
            speaker: "me",
            text: "Unlock " + sc.n("landlord") + "'s door?",
            button: [
                { chatID: -1, text: "Yes", callback: "enterLLRoom" },
                { chatID: -1, text: "No", callback: "" }
            ]
        },
        {
            chatID: 5,
            speaker: "landlord",
            text: "I don't know how you got in here, but I know where you're going to go! Get out of my house!",
            button: [
                { chatID: -1, text: "Sorry " + sc.n("landlord"), callback: "kickouot" }
            ]
        },
        {
            chatID: 6,
            speaker: "me",
            text: "I better get out of here before " + sc.n("landlord") + " finds me. ", 
            button: [
                { chatID: -1, text: "...", callback: "kickouot" }
            ]
        },
        {
            chatID: 7,
            speaker: "eva",
            text: "I have to talk to you! It's worse than I thought. I was snooping in her phone and I found her chat history " +
                "with " + sc.n("chad") + "! He totally pressured her into sending him a naked picture. She sent him a picture " +
                "of herself in her underwear, but it's going faster than I thought!  We should try to find a nice boy for her. Someone " +
                "that will treat her right, but I don't know anyone I would match them with. Think you could help me find " +
                "a nice boy? And it can't be someone that's fucked either of us. Too icky.",
            button: [
                { chatID: 8, text: "Well... I don't know if there's any good looking boys left in this town that haven't been with you. hahahah ", callback: "" }
            ]
        },
        {
            chatID: 8,
            speaker: "eva",
            text: "That's becuase all the boys want this booty, so thbptttttttt. We have to break them up! I haven't told anyone, " +
                "but I found the recordings " + sc.n("chad") + " made when we had sex. I told him to delete it, but he make me " +
                "blow all his friends before he would! He's such an ass, but I was afraid he would post them to those porn sites. " +
                "We can't let her date him. She's too naive for a guy like him.",
            button: [
                { chatID: 9, text: "Agreed. I'll go find a nice boy to distract her from that asshole! ", callback: "" },
            ]
        },
        {
            chatID: 9,
            speaker: "eva",
            text: "You do that. I'll keep trying to talk her out of dating that creep. We must stop them! I think they have a " +
                "date in a week. You find a good boy for her, I'll intorduce them. Deal?",
            button: [
                { chatID: -1, text: "Deal!", callback: "reset" },
            ]
        },
    ];
    return cArray[chatID];
};