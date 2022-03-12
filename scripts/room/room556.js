//Fight Room
var room556 = {};
room556.main = function () {
    g.internal = 0;
    char.changeMenu("hide", false, true);
    tEnemy.init("g", null, "ring", 556, 556);
    tEnemy.drawButtons("init");
    //tEnemy.drawButtonList("begin");
    $("#room-inv").hide();
    $("#room-menu").hide();
    chat(0, 556);
};

room556.btnclick = function (name) {
    var i, xi, mymove, enemymove;
    switch (name) {
        case "f2":
            nav.killbutton("f2");
            chat(4, 556);
            break;
        case "g2":
            nav.killbutton("g2");
            chat(16, 556);
            break;
        case "lb_fight":
            if (g.internal === 0) {
                chat(9, 556);
                tEnemy.drawButtonList("fight");
                nav.killbutton("e0");
                tEnemy.drawStage();
            }
            if (g.internal === 2 || g.internal === 4)
                tEnemy.drawButtonList("fight");
            break;
        case "lb_slut":
            if (g.internal === 3) {
                g.fight.me.panties = true;
                g.fight.me.clothes = null;
                tEnemy.drawButtonList("slut");
            }
            else
                chat(8, 556);
            break;
        case "lb_strippanties":
            tEnemy.drawButtonList("close");
            tEnemy.drawChar("stripclothes");
            g.roomTimeout = setTimeout(function () {
                room227.chatcatch("main");
                chat(19, 556);
            }, g.fight.fighttimer);
            break;
        case "lb_inventory":
            if (g.internal === 0)
                chat(8, 556);
            break;
        case "lb_flee":
            if (g.internal === 0)
                chat(8, 556);
            break;
        case "lb_punch":
            if (g.internal === 0) {
                g.fight.box = ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1"];
                tEnemy.drawButtonList("box");
                tEnemy.drawBox();
                chat(11, 556);
            }
            else {
                chat(8, 556);
            }
            break;
        case "lb_grapple":
            if (g.internal === 2 || g.internal === 4) {
                tEnemy.drawButtonList("grapple");
                if (g.internal === 2)
                    chat(17, 556);
            }
            
            break;
        case "lb_teabag":
            tEnemy.drawButtonList("close");
            tEnemy.drawChar("teabag");
            g.fight.e[0].p = "teabag";
            tEnemy.drawEnemy();
            tEnemy.changeEnergy(null, null, { t: "grapple", me: true });
            g.roomTimeout = setTimeout(function () {
                chat(20, 556);
            }, g.fight.fighttimer);
            break;
        case "lb_kick":
        case "lb_weapon":
        case "lb_superpunch":
        case "lb_cancel":
            chat(8, 556);
            break;
        case "box0":
        case "box1":
        case "box2":
        case "box3":
        case "box4":
        case "box5":
        case "box6":
        case "box7":
        case "box8":
        case "box9":
            tEnemy.selectBox(name);
            g.fight.e[0].p = "recoil";
            tEnemy.drawChar("punch");
            tEnemy.drawEnemy();
            nav.killbutton("box");
            nav.killbutton("boxtarget");
            tEnemy.drawButtonList("close");
            tEnemy.changeEnergy(null, -100, null);
            chat(12, 556);
            g.roomTimeout = setTimeout(function () {
                tEnemy.drawButtonList("counterAction");
                g.fight.e[0].p = "pose";
                tEnemy.drawChar("pose");
                tEnemy.drawEnemy();
                
            }, 1500);
            break;
        case "lb_blockpunch":
            tEnemy.drawButtonList("close");
            g.fight.e[0].p = "kick";
            tEnemy.drawChar("recoil");
            tEnemy.drawEnemy();
            tEnemy.changeEnergy(-50, null, null);
            g.roomTimeout = setTimeout(function () {
                tEnemy.drawButtonList("main");
                g.fight.e[0].p = "pose";
                tEnemy.drawChar("pose");
                tEnemy.drawEnemy();
                chat(13, 556);
            }, 1500);
            break;
        case "lb_blockkick":
        case "lb_blockgrapple":
        case "lb_takeit":
            chat(8, 556);
            break;
        case "lb_steal":
            g.fight.e[0].clothingLevel = 1;
            g.fight.e[0].p = "steal";
            tEnemy.drawEnemy();
            g.roomTimeout = setTimeout(function () {
                g.fight.e[0].clothingLevel = 0;
                tEnemy.drawButtonList("main");
                g.fight.e[0].p = "pose";
                tEnemy.drawChar("pose");
                tEnemy.drawEnemy();
                chat(18, 556);
            }, 1500);
            break;
        default:

            break;
    }
};

room556.chatcatch = function (callback) {
    var i;

    switch (callback) {
        case "setup":
            nav.killbutton("e0");
            tEnemy.drawButtonList("main");
            tEnemy.drawStage();
            break;
        case "f0":
            g.internal = 0;
            break;
        case "f1":
            nav.button({
                "type": "btn",
                "name": "f2",
                "left": 760,
                "top": 300,
                "width": 400,
                "height": 100,
                "image": "556_spar/ready.png"
            }, 556);
            break;
        case "f3":
            tEnemy.drawButtonList("main");
            break;
        case "g0":
            g.internal = 1;
            break;
        case "g1":
            nav.button({
                "type": "btn",
                "name": "g2",
                "left": 760,
                "top": 300,
                "width": 400,
                "height": 100,
                "image": "556_spar/ready.png"
            }, 556);
            break;
        case "g2":
            g.internal = 2;
            break;
        case "g3":
            g.internal = 3;
            break;
        case "g4":
            g.internal = 4;
            break;
        case "g5":
            tEnemy.drawChar("pose");
            g.fight.e[0].p = "pose";
            tEnemy.drawEnemy();

            break;
        case "g6":
            
            break;
        case "checkcrowbar":
            if (inv.has("sewer")) {
                chat(532, 556);
            }
            else {
                inv.add("sewer");
                nav.button({
                    "type": "zimg",
                    "name": "spar",
                    "left": 695,
                    "top": 305,
                    "width": 531,
                    "height": 473,
                    "image": "556_spar/sewer.png"
                }, 556);
            }

            break;
        case "leave":
            char.room(550);
            break;
        default:
            break;
    }
};

room556.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "g",
            text: "Ready to learn how to fight?",
            button: [
                { chatID: 2, text: "Ready", callback: "setup" },
                { chatID: 1, text: "No. Skip it. ", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "g",
            text: "ok, train hard and don't be rape meat",
            button: [
                { chatID: -1, text: "I will!", callback: "leave" },
            ]
        },
        {
            chatID: 2,
            speaker: "g",
            text: "Ok. I'm going to teach you how to fight. Choose which one you want to learn about. ",
            button: [
                { chatID: 3, text: "Basics", callback: "f0" },
                { chatID: 15, text: "Dominating", callback: "g0" },
                { chatID: 23, text: "Submitting", callback: "" },
                { chatID: 24, text: "Learn new Moves", callback: "" },
                { chatID: 1, text: "I'm done", callback: "" }
            ]
        },
        {
            chatID: 3,
            speaker: "g",
            text: "I'm going to show you is the energy and control bar at the bottom. Take a look. You'll see a green bar on the " +
                "left and right. ",
            button: [
                { chatID: -1, text: "...", callback: "f1" }
            ]
        },
        {
            chatID: 4,
            speaker: "g",
            text: "So those green bars are energy. No one dies in these fights, they just run out of energy to continue. So if your " +
                "energy drops to zero you just give up and limp away too tired to fight. If they enemies energy drops to zero they give " +
                "up and yo win. Simple right? ",
            button: [
                { chatID: 5, text: "Yeah", callback: "" }
            ]
        },
        {
            chatID: 5,
            speaker: "g",
            text: "If you find yourself running low on energy you can always use your inventory to refill it, so save your acia berries. ",
            button: [
                { chatID: 6, text: "What happens when someone is the dominate? ", callback: "" }
            ]
        },
        {
            chatID: 6,
            speaker: "g",
            text: "Fighting is the most basic way to win a fight. You just keep beating your enemy until one of your runs out of energy. ",
            button: [
                { chatID: 7, text: "Ok", callback: "f3" }
            ]
        },
        {
            chatID: 7,
            speaker: "g",
            text: "Now on to how to fight. Click the Fight button. ",
            button: [
                { chatID: -1, text: "Ok. ", callback: "" }
            ]
        },
        {
            chatID: 8,
            speaker: "g",
            text: "No idiot. Try again.  ",
            button: [
                { chatID: -1, text: "Ok. ", callback: "" }
            ]
        },
        {
            chatID: 9,
            speaker: "g",
            text: "You have a few options with the basic fight. You can do an attack on their energy with a punch or a kick. " +
                "If you can land " +
                "a hit you'll take some energy from me. ",
            button: [
                { chatID: -1, text: "Ok. ", callback: "" }
            ]
        },
        {
            chatID: 10,
            speaker: "g",
            text: "",
            button: [
                { chatID: -1, text: "Ok. ", callback: "" }
            ]
        },
        {
            chatID: 11,
            speaker: "g",
            text: "Now choose where to punch me. Each person has a weak spot, and it's not always the dick. ",
            button: [
                { chatID: -1, text: "Ok. ", callback: "f5" }
            ]
        },
        {
            chatID: 12,
            speaker: "g",
            text: "Good, now it's my turn to attack. You have to guess if I'm going to punch you, kick you, or do a grappeling move. " +
                "In this case block my punch. ",
            button: [
                { chatID: -1, text: "Ok. ", callback: "" }
            ]
        },
        {
            chatID: 13,
            speaker: "g",
            text: "And that's what happens when you choose wrong. You tried to block my punch, but I decided to kick and was able to kick you.  ",
            button: [
                { chatID: 14, text: "Unfair! ", callback: "" }
            ]
        },
        {
            chatID: 14,
            speaker: "g",
            text: "And that is the end of the basics lesson. ",
            button: [
                { chatID: 2, text: "...", callback: "" }
            ]
        },
        {
            chatID: 15,
            speaker: "g",
            text: "Let's go over grappeling. Dropping your enemie's energy to zero is not the only way to win a fight. See the long " +
                "gray bar at the bottom center?",
            button: [
                { chatID: -1, text: "[Take a look]", callback: "g1" }
            ]
        },
        {
            chatID: 16,
            speaker: "g",
            text: "That bar shows who is dominating the fight. When you hit your opponent you dominate them a little bit, but there are " +
                "other ways to dominate them. Click Fight, then Grapple. ",
            button: [
                { chatID: -1, text: "Ok", callback: "g2" }
            ]
        },
        {
            chatID: 17,
            speaker: "g",
            text: "You'll see the only option is to steal my clothing. That's because grappeling has it's roots in Greco-Roman wrestling. " +
                "And the only true Greco-Roman wrestling was done in the nude. Go ahead and try to strip my clothing. ",
            button: [
                { chatID: -1, text: "Sweet", callback: "" }
            ]
        },
        {
            chatID: 18,
            speaker: "g",
            text: "Now you strip off your clothing. Select Slut, then strip clothing. ",
            button: [
                { chatID: -1, text: "Ok", callback: "g3" }
            ]
        },
        {
            chatID: 19,
            speaker: "g",
            text: "Now fight, then grapple, and tea bag. ",
            button: [
                { chatID: -1, text: "Ok", callback: "g4" }
            ]
        },
        {
            chatID: 20,
            speaker: "me",
            text: "So tea bag like this?",
            button: [
                { chatID: 21, text: "Ok", callback: "" }
            ]
        },
        {
            chatID: 21,
            speaker: "g",
            text: "Get your balls out of my mouth. NOW!",
            button: [
                { chatID: 22, text: "Ok", callback: "g5" }
            ]
        },
        {
            chatID: 22,
            speaker: "g",
            text: "And that's how you dominate someone. If you hit them, strip them, or do a domination move you will move the " +  
                "bar to your side. If your enemy does the same they will move the bar to their side. Some enemy are too tough to " +
                "fight, so you'll have to dominate them. ",
            button: [
                { chatID: 2, text: "ok, thanks", callback: "g6" }
            ]
        },
        {
            chatID: 23,
            speaker: "g",
            text: "WHAT?!?!?! you want me to teach you how to bend over and take it up the asshole? No. You'll have to " +
                "figure out how to do that on your own, you stupid weak slut. If you do get dominated you better bring a lot of " +
                "acia becuase you're going to go through a lot of energy taking all that dick. ",
            button: [
                { chatID: 2, text: "oh, ok", callback: "" }
            ]
        },
        {
            chatID: 24,
            speaker: "g",
            text: "Here is where I teach you new domination / submissive moves. Work in progress",
            button: [
                { chatID: 2, text: "oh, ok", callback: "" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};
