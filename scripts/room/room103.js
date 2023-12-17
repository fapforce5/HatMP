//const Work
var room103 = {};

room103.main = function () {
    g.internal = false;
    var jobapplyconst = gv.get("jobapplyconst");
    if (jobapplyconst === 2) {
        nav.bg("103_constSite/day1.jpg");
        chat(1, 103);
    }
    else if (jobapplyconst > 4 && jobapplyconst < 100) {
        g.internal = true;
        room103.chatcatch("sweep");
    }
    else if (jobapplyconst === 100) {
        nav.bg("103_constSite/day1.jpg");
        chat(67, 103);
    }
    else {
        room103.chatcatch("sweep");
    }
    
    //var thisRand = Math.floor(Math.random() * 10);
    //if (thisRand === 1)
    //    chat(1, 103);
    //else if (thisRand === 2) {
    //    nav.bg("103_constSite/103_topless.png");
    //    chat(3, 103);
    //}
    //else
    //    chat(0, 103);
};

room103.btnclick = function (name) {
    switch (name) {
        case "work":
            if (gv.get("jobapplyconst") === 6) {
                chat(65, 103);
            }
            else {
                nav.killall();
                nav.bg("103_constSite/sweep.jpg");
                gv.mod("energy", -30);
                chat(0, 103);
            }
            break;
        case "work2":
            nav.killall();
            nav.bg("103_constSite/sweep.jpg");
            gv.mod("energy", -30);
            chat(12, 103);
            break;
        default:
            break;
        case "hole":
            levels.mod("anal", 5, 1);
            chat(25, 103);
            break;
        case "pamphlet":
            nav.killbutton("pamphlet");
            nav.button({
                "type": "img",
                "name": "pamphlet2",
                "left": 915,
                "top": 50,
                "width": 500,
                "height": 800,
                "image": "103_constSite/pamphlet.jpg"
            }, 103);
            chat(66, 103);
            break;
        case "fight0lose":
            char.room(701);
            break;
        case "fight0run":
            char.room(0);
            break;
        case "fight0win":
            nav.killall();
            nav.bg("103_constSite/fight1.jpg");
            chat(69, 103);
            break;
    }
};

room103.chatcatch = function (callback) {
    switch (callback) {
        case "complete":
            char.settime(17, 50);
            levels.mod("fitness", 4, 999);
            gv.mod("jobapplyconst", 1);
            daily.set("construction");
            char.room(101);
            break;
        case "sweep":
            nav.killall();
            nav.bg("103_constSite/103_sweep.jpg");
            if (g.internal) {
                nav.button({
                    "type": "btn",
                    "name": "hole",
                    "left": 1302,
                    "top": 531,
                    "width": 135,
                    "height": 124,
                    "image": "103_constSite/holepussy.png",
                }, 103);
            }
            else {
                nav.button({
                    "type": "btn",
                    "name": "hole",
                    "left": 1302,
                    "top": 531,
                    "width": 135,
                    "height": 124,
                    "image": "103_constSite/hole.png",
                    "night": "103_constSite/holenight.png"
                }, 103);
            }
            nav.button({
                "type": "btn",
                "name": "work",
                "left": 315,
                "top": 718,
                "width": 513,
                "height": 272,
                "image": "103_constSite/work.png"
            }, 103);
            if (!gv.get("pamphletConstSite")) {
                nav.button({
                    "type": "btn",
                    "name": "pamphlet",
                    "left": 1165,
                    "top": 877,
                    "width": 97,
                    "height": 82,
                    "image": "103_constSite/pamphlet.png"
                }, 103);
            }
            break;
        case "endDay1":
            char.room(103);
            break;
        case "moveDay1":
            nav.bg("103_constSite/103_sweep.jpg");
            break;
        case "chat":
            nav.killall();
            switch (gv.get("jobapplyconst")) {
                case 2: //first day
                    nav.bg("103_constSite/worker2.jpg");
                    chat(13, 103);
                    break;
                case 3:
                    nav.bg("103_constSite/worker1.jpg");
                    chat(15, 103);
                    break;
                case 4:
                    nav.bg("103_constSite/worker0.jpg");
                    chat(19, 103);
                    break;
                case 5:
                    chat(23, 103);
                    break;
                case 6:
                    nav.bg("103_constSite/worker3.jpg");
                    chat(99, 103);
                    break;
            }
            break;
        case "work2":
            nav.killall();
            nav.bg("103_constSite/103_sweep.jpg");
            if (g.internal) {
                nav.button({
                    "type": "btn",
                    "name": "hole",
                    "left": 1302,
                    "top": 531,
                    "width": 135,
                    "height": 124,
                    "image": "103_constSite/holepussy.png",
                }, 103);
            }
            else {
                nav.button({
                    "type": "btn",
                    "name": "hole",
                    "left": 1302,
                    "top": 531,
                    "width": 135,
                    "height": 124,
                    "image": "103_constSite/hole.png",
                    "night": "103_constSite/holenight.png"
                }, 103);
            }
            nav.button({
                "type": "btn",
                "name": "work2",
                "left": 315,
                "top": 718,
                "width": 513,
                "height": 272,
                "image": "103_constSite/work.png"
            }, 103);
            if (!gv.get("pamphletConstSite")) {
                nav.button({
                    "type": "btn",
                    "name": "pamphlet",
                    "left": 1165,
                    "top": 877,
                    "width": 97,
                    "height": 82,
                    "image": "103_constSite/pamphlet.png"
                }, 103);
            }
            break;
        case "lunch":
            nav.killall();
            nav.bg("103_constSite/lunch.jpg");
            gv.mod("energy", 20);
            break;
        case "give20":
            if (gv.get("money") > 19) {
                levels.mod("charisma", 5, 999);
                gv.mod("money", -20);
                chat(17, 103);
            }
            else {
                chat(18, 103);
            }
            break;
        case "enableHole":
            g.internal = true;
            break;
        case "panties":
            levels.mod("xdress", 5, 1);
            nav.bg("103_constSite/worker4.jpg");
            break;
        
        case "hole0":
            nav.killall();
            nav.bg("103_constSite/hole0.jpg");
            break;
        case "hole1":
        case "hole4":
        case "hole5":
        case "hole7":
        case "hole8":
        case "hole9":
        case "hole10":
        case "hole11":
        case "hole12":
        case "hole13":
        case "hole14":
        case "hole16":
            nav.bg("103_constSite/" + callback + ".jpg");
            break;
        case "hole2":
        case "hole3":
            if (cl.pantiesTxt() === "panties")
                nav.bg("103_constSite/" + callback + "_" + (cl.c.panties === "c" ? "c" : "p") + ".jpg");
            else
                nav.bg("103_constSite/" + callback + ".jpg");
            break;
        case "hole6":
            cl.nude();
            char.settime(23, 7);
            nav.bg("103_constSite/" + callback + ".jpg");
            break;
        case "hole15":
            cl.undo();
            nav.bg("103_constSite/" + callback + ".jpg");
            break;
        case "hole17":
            gv.mod("money", 200);
            char.addtime(67);
            gv.set("jobapplynurse", 2);
            gv.set("jobapplybeaver", 2);
            gv.set("jobapplyconst", 100);
            sc.setstep("missy", 1);
            missy.set("activeCase", 2);
            g.roomMapAccess(203, true, true);
            char.room(10);
            break;
        case "adddom":
            levels.mod("dom", 5, 1);
            break;
        case "addsub":
            levels.mod("sub", 5, 1);
            break;
        
        case "pamphlet":
            nav.killbutton("pamphlet2");
            gv.mod("pamphletConstSite", true);
            levels.mod("pi", 20, 999);
            break;
        case "intPlus":
            levels.mod("int", 15, 999);
            break;
        case "fight0":
            nav.bg("103_constSite/fight0.jpg");
            quickFight.init(18, sc.n("river"), "fight0win", "fight0lose", "fight0run", 103);
            break;
        default:
            break;
    }
};

room103.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "thinking",
            text: "This sucks. ",
            button: [
                { chatID: -1, text: "Chat with co-workers", callback: "chat" },
                { chatID: 11, text: "Take Lunch", callback: "lunch" },
            ]
        },
        {
            chatID: 1,
            speaker: "river",
            text: "Oh hey hey hey! If it isn't the high school dweeb. I didn't know you knew how to use " +
                "tools. I always just assumed you were too weak. So Do you have a forklift license? ",
            button: [
                { chatID: 2, text: "No", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "river",
            text: "General Contractor's License?",
            button: [
                { chatID: 3, text: "No", callback: "" }
            ]
        },
        {
            chatID: 3,
            speaker: "river",
            text: "Any heavy equipment licenses?",
            button: [
                { chatID: 4, text: "No", callback: "" }
            ]
        },
        {
            chatID: 4,
            speaker: "river",
            text: "Welding?",
            button: [
                { chatID: 5, text: "No", callback: "" }
            ]
        },
        {
            chatID: 5,
            speaker: "river",
            text: "Worked on construction sites?",
            button: [
                { chatID: 6, text: "No", callback: "" }
            ]
        },
        {
            chatID: 6,
            speaker: "river",
            text: "Ever swung a hammer?",
            button: [
                { chatID: 7, text: "No", callback: "" }
            ]
        },
        {
            chatID: 7,
            speaker: "river",
            text: "Well what do you do? ",
            button: [
                { chatID: 8, text: "I don't know. Anything you need? ", callback: "" }
            ]
        },
        {
            chatID: 8,
            speaker: "river",
            text: "Well, fuck. I don't know why the boss man keeps hiring losers, but here we are. I guess you " +
                "can sweep up. Normally that job is reserved for chicks, but I got quite a mess that needs cleaning " +
                "and no one I can spare. Come follow me. ",
            button: [
                { chatID: 9, text: "... ok", callback: "moveDay1" }
            ]
        },
        {
            chatID: 9,
            speaker: "river",
            text: "Well, fuck. I don't know why the boss man keeps hiring losers, but here we are. I guess you " +
                "can sweep up. Normally that job is reserved for chicks, but I got quite a mess that needs cleaning " +
                "and no one I can spare. Come follow me. ",
            button: [
                { chatID: 10, text: "... ok", callback: "" }
            ]
        },
        {
            chatID: 10,
            speaker: "river",
            text: "Here's the pile of dirt. Sweep well pussy. And don't fuck around. ",
            button: [
                { chatID: -1, text: "... ok", callback: "sweep" }
            ]
        },
        {
            chatID: 11,
            speaker: "thinking",
            text: "Best part of the day, eating.  ",
            button: [
                { chatID: -1, text: "...", callback: "work2" }
            ]
        },
        {
            chatID: 12,
            speaker: "thinking",
            text: "I'm so tired and sweaty. I hate this place. ",
            button: [
                { chatID: -1, text: "...", callback: "complete" }
            ]
        },
        {
            chatID: 13,
            speaker: "construction",
            text: "Hey slick, Just checking out the site. Lotta fucking dirt here. You got any coke? ",
            button: [
                { chatID: 14, text: "Oh, no. I didn't bring any soda with me.", callback: "" }
            ]
        },
        {
            chatID: 14,
            speaker: "construction",
            text: "What? Nevermind. Get back to work. If you have time to lean, you have time to clean. ",
            button: [
                { chatID: -1, text: "ok. ", callback: "work2" }
            ]
        },
        {
            chatID: 15,
            speaker: "!fatdogguy",
            text: "Hey. New guy. I'm collecting money for the Jim who's dying of cancer. Do you think " +
                "you could spare $20? ",
            button: [
                { chatID: -1, text: "Sure. Here's $20", callback: "give20" },
                { chatID: 16, text: "No. I don't even know Jim", callback: "intPlus" }
            ]
        },
        {
            chatID: 16,
            speaker: "!fatdogguy",
            text: "Fucking fag. I hope you die of cancer. Go fuck yourself. ",
            button: [
                { chatID: -1, text: "Ouch. Bye I guess. ", callback: "work2" },
            ]
        },
        {
            chatID: 17,
            speaker: "!fatdogguy",
            text: "I'll add this to Jim's fund. You're a realy great dude. Thanks buddy. ",
            button: [
                { chatID: -1, text: "No problem.", callback: "work2" },
            ]
        },
        {
            chatID: 18,
            speaker: "me",
            text: "I don't seem to have that much money. You know money's tight. ",
            button: [
                { chatID: 16, text: "...", callback: "" },
            ]
        },
        {
            chatID: 19,
            speaker: "!constworker0",
            text: "Oh hi. You're new here right. How do you like working at Burly Construction? ",
            button: [
                { chatID: 20, text: "I'm loving it here! ", callback: "" },
                { chatID: 21, text: "So lame. I don't want to work here anymore! ", callback: "" },
            ]
        },
        {
            chatID: 20,
            speaker: "!constworker0",
            text: "That's nice. It's always great to find a job you like. If you ever get bored " +
                "Annika sometimes does strip shows on the other side of that pipe. You might be able to " +
                "crawl in and take a peek. ",
            button: [
                { chatID: 22, text: "Oh thanks! ", callback: "enableHole" },
            ]
        },
        {
            chatID: 21,
            speaker: "!constworker0",
            text: "That sucks, you know what might make this better. If you ever get bored " +
                "Annika sometimes does strip shows on the other side of that pipe. You might be able to " +
                "crawl in and take a peek. ",
            button: [
                { chatID: 22, text: "Oh thanks! ", callback: "enableHole" },
            ]
        },
        {
            chatID: 22,
            speaker: "!constworker0",
            text: "Also if Fatty McGillicutty asks for a donation tell him no. He's just trying to " +
                "scam money. ",
            button: [
                { chatID: -1, text: "Good to know. Welp back to work ", callback: "work2" },
            ]
        },
        {
            chatID: 23,
            speaker: "random",
            text: "Check this out new guy. Tony wears panties! ",
            button: [
                { chatID: 24, text: "huh? ", callback: "panties" },
            ]
        },
        {
            chatID: 24,
            speaker: "random",
            text: "What the fuck! You said you wouldn't tell anyone! Fuck off! ",
            button: [
                { chatID: -1, text: "Nice ", callback: "work2" },
            ]
        },
        {
            chatID: 25,
            speaker: "thinking",
            text: "I wonder what's on the otherside of that hole. I guess I'll take a peek. Can't " +
                "hurt anything. ",
            button: [
                { chatID: 26, text: "[Crawl in] ", callback: "hole0" },
            ]
        },
        {
            chatID: 26,
            speaker: "thinking",
            text: "There's nothing there. I thought I saw something. I better back out before I get..." +
                "Fuck, I'm stuck pretty good here. Maybe I can wiggle... Nope. I better swollow my pride " +    
                "and call for help. ",
            button: [
                { chatID: 27, text: "...", callback: "" },
            ]
        },
        {
            chatID: 27,
            speaker: "me",
            text: "HELP! Someone, Help!",
            button: [
                { chatID: 28, text: "...", callback: "hole1" },
            ]
        },
        {
            chatID: 28,
            speaker: "random",
            text: "Qué pasa. What are you doing in there? ",
            button: [
                { chatID: 29, text: "I was just checking some stuff. Can you get me out? ", callback: "hole0" },
            ]
        },
        {
            chatID: 29,
            speaker: "random",
            text: "Crazy gringo. Always fucking around at the worksite.  ",
            button: [
                { chatID: 30, text: "Please just help me out of here!", callback: "" },
            ]
        },
        {
            chatID: 30,
            speaker: "me",
            text: "Hey! My pants are slipping. Grab my leg, not my pants! Hey. Why are you grabbing my " +
                "underwear? Stop. What are you doing. Pull my pants back up! Hey! Are you still there? ",
            button: [
                { chatID: 31, text: "...", callback: "hole2" },
            ]
        },
        {
            chatID: 31,
            speaker: "me",
            text: "You better still be there! Hey! Get me out and give me back my pants" +
                (cl.pantiesTxt() === "panties" ? "!" : " and  underwear! ") +  
                "You better have not left me here! ",
            button: [
                { chatID: 32, text: "...", callback: "hole3" },
            ]
        },
        {
            chatID: 32,
            speaker: "river",
            text: "Well, well, well. What do we have here? I always knew you were queer, but I didn't think " +
                "you would do that stuff here. ",
            button: [
                { chatID: 33, text: "It's not me! I got was just looking through this hole and some dude stole my clothes! Just get me out of here! ", callback: "hole4" },
            ]
        },
        {
            chatID: 33,
            speaker: "river",
            text: "You know you can just walk around the wall. You didn't have to climb into the pipe to " +
                "look on the other side. Now do you want to change your story? ",
            button: [
                { chatID: 34, text: "Just get me out " + sc.n("river") + "!", callback: "" },
            ]
        },
        {
            chatID: 34,
            speaker: "river",
            text: "Sure. I'll get you out. Just got to do one little thing first. ",
            button: [
                { chatID: 35, text: "What! ", callback: "hole5" },
            ]
        },
        {
            chatID: 35,
            speaker: "river",
            text: "We've been looking for someone like you... ",
            button: [
                { chatID: 36, text: "Huh? ", callback: "hole6" },
            ]
        },
        {
            chatID: 36,
            speaker: "thinking",
            text: "What's happening to me. I feel so strange...",
            button: [
                { chatID: 37, text: "...", callback: "" },
            ]
        },
        {
            chatID: 37,
            speaker: "cult",
            text: "No. It's your turn to carry him. I carried the last one. ",
            button: [
                { chatID: 38, text: "...", callback: "" },
            ]
        },
        {
            chatID: 38,
            speaker: "cult",
            text: "Stop fighting. We each should just take turns. That's why they sent four of us. " +
                "Why do you have to make it so difficult. ",
            button: [
                { chatID: 39, text: "Wha...", callback: "hole7" },
            ]
        },
        {
            chatID: 39,
            speaker: "cult",
            text: "Awww crap is he waking up? I saw him move. ",
            button: [
                { chatID: 40, text: "Who...", callback: "hole8" },
            ]
        },
        {
            chatID: 40,
            speaker: "cult",
            text: "Doesn't matter. I'll just inject some more etorphine. Then it's your turn to carry him. ",
            button: [
                { chatID: 41, text: "No. I've got to get out of here. ", callback: "hole9" },
            ]
        },
        {
            chatID: 41,
            speaker: "missy",
            text: "You boys better run out of here and leave that poor kid alone. ",
            button: [
                { chatID: 42, text: "?", callback: "hole10" },
            ]
        },
        {
            chatID: 42,
            speaker: "cult",
            text: "Aw crap it's " + sc.n("missy") + ". You know you don't stand a chance against four of us. ",
            button: [
                { chatID: 64, text: "...", callback: "hole11" },
            ]
        },
        
        {
            chatID: 43,
            speaker: "missy",
            text: "You don't stand a chance!  ",
            button: [
                { chatID: 44, text: "...", callback: "hole13" },
            ]
        },
        {
            chatID: 44,
            speaker: "missy",
            text: "Hiiiaaa",
            button: [
                { chatID: 45, text: "...", callback: "hole14" },
            ]
        },
        {
            chatID: 45,
            speaker: "missy",
            text: "Hi, I'm " + sc.n("missy") + ". You can get dressed now. Do you know what the " +
                "Cult wanted from you? ",
            button: [
                { chatID: 46, text: "Oh. Thanks... I don't know. One minute " + sc.n("river") + " was messing with me, the next I'm naked in the woods. ", callback: "" },
            ]
        },
        {
            chatID: 46,
            speaker: "missy",
            text: "Hmmmm. From the looks of you my guess would be another one for their little ritual. ",
            button: [
                { chatID: 47, text: "Ritual? Like were they going to kill me? ", callback: "" },
            ]
        },
        {
            chatID: 47,
            speaker: "missy",
            text: "It's not that kind of ritual. It's not safe here. Let me take you home kid. ",
            button: [
                { chatID: 48, text: "Ok. ", callback: "hole15" },
            ]
        },
        {
            chatID: 48,
            speaker: "missy",
            text: "... So that's how I found him. I didn't want him as just another failed ritual.  ",
            button: [
                { chatID: 49, text: "...", callback: "" },
            ]
        },
        {
            chatID: 49,
            speaker: "landlord",
            text: "I'm so thankful you were there. It would have been terrible if he ended up like his father. " +
                "He really is too delicate to be working at a construction site. I'm sure those big mean men just " +
                "teased him all day. If only there was a job where someone could look after him so he didn't get " +
                "into trouble. ",
            button: [
                { chatID: 50, text: "...", callback: "" },
            ]
        },
        {
            chatID: 50,
            speaker: "missy",
            text: "I'm going to pay this " + sc.n("river") + " a visit and let him know to leave this one alone if " +
                "he wants to keep his dick attached to his body. I'm sure he's fine to go back working at the " +
                "construction site if he wants. Just be careful. Not everyone works for C.U.M.",
            button: [
                { chatID: 51, text: "C.U.M?", callback: "" },
            ]
        },
        {
            chatID: 51,
            speaker: "missy",
            text: "It's the Cult that tried to kidnap you. Terrible bunch, but you'll be fine. Just stay away from " +
                "the forest and keep your wits about you. ",
            button: [
                { chatID: 52, text: "ok.. Couldn't we go to the police? ", callback: "" },
            ]
        },
        {
            chatID: 52,
            speaker: "missy",
            text: "Hahaha, I wish. Stay away from them too. They're part of this. I know someone that escaped from " +
                "the cult and ran to the police only to be dragged back to their compound by the police. ",
            button: [
                { chatID: 53, text: "oh. ", callback: "" },
            ]
        },
        {
            chatID: 53,
            speaker: "landlord",
            text: "Isn't there anything you can do to keep an eye on him? I had made a deal with them to leave these " +
                "kids alone, but it looks like their getting desperate. Do you know anyone that can watch out for him " +
                "that's cheap. We don't have a lot of money, but I could figure something out. ",
            button: [
                { chatID: 54, text: "I don't need to be watched. ", callback: "" },
            ]
        },
        {
            chatID: 54,
            speaker: "landlord",
            text: "You don't know what you need. I'll do anything to keep these kids safe.",
            button: [
                { chatID: 55, text: "Hrumph", callback: "" },
            ]
        },
        {
            chatID: 55,
            speaker: "missy",
            text: "The only way he's safe is if we take down Ubel and destroy the Cult. I've been trying, but I need " +
                "more help. It's just too big for me and my partners.  ",
            button: [
                { chatID: 56, text: "...", callback: "" },
            ]
        },
        {
            chatID: 56,
            speaker: "landlord",
            text: sc.n("me") + " could help. Like you said it's too big of a job without some help. ",
            button: [
                { chatID: 57, text: "That would be awesome! I can help take them down. ", callback: "adddom" },
                { chatID: 58, text: "That sounds dangerous. I don't think I can do it. ", callback: "addsub" },
            ]
        },
        {
            chatID: 57,
            speaker: "missy",
            text: "Well... There will be danger, and I can't guarantee your safety... but you know what you're in. ",
            button: [
                { chatID: 59, text: "Sweet!", callback: "" },
            ]
        },
        {
            chatID: 58,
            speaker: "landlord",
            text: "You can't just sit at home all day and wait for " + sc.n("missy") + " to save you. It's best " +
                "that you're around someone strong that can take care of you when I'm not around. I'll hear no " +
                "more whining, you're going to work for " + sc.n("missy") + " if she'll have you. ",
            button: [
                { chatID: 59, text: "Yes " + sc.n("landlord"), callback: "" },
            ]
        },
        {
            chatID: 59,
            speaker: "missy",
            text: "Working as one of my private investigators won't be easy. I'm going to have to break you down " +
                "and rebuild you into something I can use. It'll be brutal and hard at times, but rewarding. I'm " +
                "not going to lie, you will be put in danger, but I'll do everything I can to make sure you're " +
                "ready for that danger. ",
            button: [
                { chatID: 60, text: "Hmmm", callback: "" },
            ]
        },
        {
            chatID: 60,
            speaker: "missy",
            text: "You'll need a Private Investigator License from city hall and a willingness to do everything " +
                "I tell you without question. No matter what! Can you do that? ",
            button: [
                { chatID: 61, text: "Uhhh", callback: "" },
            ]
        },
        {
            chatID: 61,
            speaker: "landlord",
            text: "Stop stammering and answer the nice lady that saved your life. Sometime I feel I have to do " +
                "everything for him. He can do that. He needs to get out of this house and stop being so lazy. I'll " +
                "even give him the money for the license. Now thank the nice lady and get to bed. It's getting late. ",
            button: [
                { chatID: 62, text: "Yes " + sc.n("landlord") + ". I'll do it. ", callback: "" },
            ]
        },
        {
            chatID: 62,
            speaker: "missy",
            text: "Good. Get the licesnce from city hall and meet with my reciptionist. She'll help you on the " +
                "next step. ",
            button: [
                { chatID: 63, text: "Thank you. ", callback: "hole16" },
            ]
        },
        {
            chatID: 63,
            speaker: "thinking",
            text: "I'll have to go to city hall and buy a license, then visit " + sc.n("missy") + " at her work. " +
                "I'm so excited, but a little scared. What if she doesn't like how I work, or I'm too weak to " +
                "do the job. I'll have to try extra hard to impress her! ",
            button: [
                { chatID: -1, text: "[Go to bed]", callback: "hole17" },
            ]
        },
        {
            chatID: 64,
            speaker: "cult",
            text: "Ok. You don't stand a chance against the two of us. ",
            button: [
                { chatID: 43, text: "...", callback: "hole12" },
            ]
        },
        {
            chatID: 65,
            speaker: "thinking",
            text: "It that a hairy pussy over there in the pipe? I gotta take a closer look! ",
            button: [
                { chatID: 26, text: "[Crawl in] ", callback: "hole0" },
            ]
        },
        {
            chatID: 66,
            speaker: "thinking",
            text: "This is a weird flyer. I wonder who Aurora Kirei is. Hopefully they don't eat her. ",
            button: [
                { chatID: -1, text: "[Toss it aside]", callback: "pamphlet" },
            ]
        },
        {
            chatID: 67,
            speaker: "river",
            text: "What are you doing back loser? I thought after you showed everyone your ass you would never show your face " +
                "around here. Get lost fuckwad.",
            button: [
                { chatID: 68, text: "You tried to kidnap me! You should be in jail!", callback: "" },
            ]
        },
        {
            chatID: 68,
            speaker: "river",
            text: "Don't come to my job site and start yelling lies. I'm going to beat your ass like I should have done in " +
                "the first place. ",
            button: [
                { chatID: -1, text: "Huh?", callback: "fight0" },
            ]
        },
        {
            chatID: 69,
            speaker: "me",
            text: "I did it! I kicked " + sc.n("river") + "'s ass. I totally did it! I beat that asshole up! He'll never live " +
                "this down! I'm totally awesome! Take that punk ass! A beat down in front of everyone. ",
            button: [
                { chatID: -1, text: "I guess I get to go back to work here. ", callback: "sweep" },
            ]
        },
    ];

    return cArray[chatID];
};