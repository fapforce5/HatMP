//Room name
var room556 = {};
room556.main = function () {
    $("#room-inv").hide();
    g.pass = null;
    g.internal = { roomID: 555, char: "g", c: 0 };
    char.changeMenu("hide");
    var btnList = [
        {
            "type": "zimg",
            "name": "mystatus",
            "left": 15,
            "top": 693,
            "width": 616,
            "height": 372,
            "image": "227_fight/my_status.png"
        },
        {
            "type": "zimg",
            "name": "mystatus",
            "left": 1295,
            "top": 743,
            "width": 610,
            "height": 322,
            "image": "227_fight/enemy_status.png"
        }
    ];
    $.each(btnList, function (i, v) {
        nav.button(v, 556);
    });
    nav.text({
        type: "zimg",
        name: "name",
        left: 323,
        top: 970,
        font: 20,
        hex: "#ffffff",
        text: sc.n("me")
    });
    room556.btnclick("displayMain");
    room556.btnclick("g");
    room556.btnclick("pose");
    room556.btnclick("energyenemy"); 
    room556.btnclick("energymine");
    chat(0, 556);
};

room556.btnclick = function (name) {
    switch (name) {
        case "displayMain":
            nav.killbutton("punch");
            nav.killbutton("kick");
            nav.killbutton("block");
            nav.killbutton("cancel");
            nav.killbutton("undress");
            nav.killbutton("ass");
            nav.killbutton("bj");
            var btnList = [
                {
                    "type": "zbtn",
                    "name": "fight",
                    "left": 282,
                    "top": 854,
                    "width": 100,
                    "height": 100,
                    "image": "227_fight/fight.png"
                },
                {
                    "type": "zbtn",
                    "name": "fuck",
                    "left": 239,
                    "top": 749,
                    "width": 100,
                    "height": 100,
                    "image": "227_fight/fuck.png"
                },
                {
                    "type": "zbtn",
                    "name": "inventory",
                    "left": 132,
                    "top": 704,
                    "width": 100,
                    "height": 100,
                    "image": "227_fight/inventory.png"
                },
                {
                    "type": "zbtn",
                    "name": "flee",
                    "left": 26,
                    "top": 748,
                    "width": 100,
                    "height": 100,
                    "image": "227_fight/flee.png"
                }
            ];
            $.each(btnList, function (i, v) {
                nav.button(v, 556);
            });
            break;
        case "g":
            nav.bg("555_backgym/gym.jpg");
            
            g.pass = {
                char: {
                    name: "g",
                    energy: 200,
                    maxEnergy: 200,
                    damage: 0,
                    pPower: 50,
                    kPower: 50,
                    defense: .5,
                    bp: .3,
                    bk: .1,
                    horney: 0,
                    c: false,
                    pose: { i: "227_fight/g_pose.png", w: 716, h: 1080 },
                    punch: { i: "227_fight/g_punch.png", w: 716, h: 1080 },
                    kick: { i: "227_fight/g_kick.png", w: 716, h: 1080 },
                    block: { i: "227_fight/g_block.png", w: 716, h: 1080 },
                    recoil: { i: "227_fight/g_recoil.png", w: 716, h: 1080 },
                    avatar: "227_fight/g_avatar.png"
                },
                me: {
                    energy: g.get("energy"),
                    maxEnergy: g.get("maxenergy"),
                    damage: 0
                }
            };
            nav.button({
                "type": "zimg",
                "name": "charAvatar",
                "left": 1594,
                "top": 739,
                "width": 300,
                "height": 300,
                "image": g.pass.char.avatar
            }, 556);
            nav.text({
                type: "zimg",
                name: "charName",
                left: 1330,
                top: 970,
                font: 20,
                hex: "#ffffff",
                text: sc.n(g.pass.char.name)
            });
            room556.btnclick("drawPose");
            break;
        case "energyenemy":
            var thisDamage = (g.pass.char.energy / g.pass.char.maxEnergy) * 280;
            g.pass.char.energy = g.pass.char.energy - g.pass.char.damage;
            if (g.pass.char.energy < 0)
                g.pass.char.energy = 0;
            g.pass.char.damage = 0;
            var thisNewEnergy = (g.pass.char.energy / g.pass.char.maxEnergy) * 280;
            if ($(".enemy-life").length === 0) {
                $('#room-buttons').append('<div class="room-img room-zindex resize enemy-life" data-name="enemy0" data-room="556" style=" ' + g.makeCss(10, 280, 1007, 1330) + '  background: #333; border-radius:10px;" ></div>');
                $('#room-buttons').append('<div class="room-img room-zindex resize enemy-life" data-t="damage" data-name="enemy0" data-room="556" style=" ' + g.makeCss(10, thisDamage, 1007, 1330) + '  background: #ff3333; border-radius:10px;" ></div>');
                $('#room-buttons').append('<div class="room-img room-zindex resize enemy-life" data-t="energy" data-name="enemy0" data-room="556" style=" ' + g.makeCss(10, thisNewEnergy, 1007, 1330) + '  background: #33ff33; border-radius:10px;" ></div>');
            }
            else {
                $(".enemy-life[data-t='damage'").css({
                    width: thisDamage * g.ratio + "px"
                });
                $(".enemy-life[data-t='energy'").css({
                    width: thisNewEnergy * g.ratio + "px"
                });
            }
            break;
        case "energyme":
            var myDamage = (g.pass.me.energy / g.pass.me.maxEnergy) * 280;
            g.pass.me.energy = g.pass.me.energy - g.pass.me.damage;
            if (g.pass.me.energy < 0)
                g.pass.me.energy = 0;
            g.pass.me.damage = 0;
            var myNewEnergy = (g.pass.me.energy / g.pass.me.maxEnergy) * 280;
            if ($(".my-life").length === 0) {
                $('#room-buttons').append('<div class="room-img room-zindex resize my-life" data-name="enemy0" data-room="556" style=" ' + g.makeCss(10, 280, 1007, 310) + '  background: #333; border-radius:10px;" ></div>');
                $('#room-buttons').append('<div class="room-img room-zindex resize my-life" data-t="damage" data-name="enemy0" data-room="556" style=" ' + g.makeCss(10, myDamage, 1007, 310) + '  background: #ff3333; border-radius:10px;" ></div>');
                $('#room-buttons').append('<div class="room-img room-zindex resize my-life" data-t="energy" data-name="enemy0" data-room="556" style=" ' + g.makeCss(10, myNewEnergy, 1007, 310) + '  background: #33ff33; border-radius:10px;" ></div>');
            }
            else {
                $(".my-life[data-t='damage'").css({
                    width: myDamage * g.ratio + "px"
                });
                $(".my-life[data-t='energy'").css({
                    width: myNewEnergy * g.ratio + "px"
                });
            }
            break;
        case "fight":
            nav.killbutton("fight");
            nav.killbutton("fuck");
            nav.killbutton("inventory");
            nav.killbutton("flee");

            var btnListfight = [
                {
                    "type": "zbtn",
                    "name": "punch",
                    "left": 282,
                    "top": 854,
                    "width": 100,
                    "height": 100,
                    "image": "227_fight/punch.png"
                },
                {
                    "type": "zbtn",
                    "name": "kick",
                    "left": 239,
                    "top": 749,
                    "width": 100,
                    "height": 100,
                    "image": "227_fight/kick.png"
                },
                {
                    "type": "zbtn",
                    "name": "block",
                    "left": 132,
                    "top": 704,
                    "width": 100,
                    "height": 100,
                    "image": "227_fight/block.png"
                },
                {
                    "type": "zbtn",
                    "name": "cancel",
                    "left": 26,
                    "top": 748,
                    "width": 100,
                    "height": 100,
                    "image": "227_fight/cancel.png"
                }
            ];
            $.each(btnListfight, function (i, v) {
                nav.button(v, 556);
            });

            break;
        case "fuck":
            nav.killbutton("fight");
            nav.killbutton("fuck");
            nav.killbutton("inventory");
            nav.killbutton("flee");
            var btnListfuck = [
                {
                    "type": "zbtn",
                    "name": "bj",
                    "left": 282,
                    "top": 854,
                    "width": 100,
                    "height": 100,
                    "image": "227_fight/bj.png"
                },
                {
                    "type": "zbtn",
                    "name": "ass",
                    "left": 239,
                    "top": 749,
                    "width": 100,
                    "height": 100,
                    "image": "227_fight/ass.png"
                },
                {
                    "type": "zbtn",
                    "name": "undress",
                    "left": 132,
                    "top": 704,
                    "width": 100,
                    "height": 100,
                    "image": "227_fight/undress.png"
                },
                {
                    "type": "zbtn",
                    "name": "cancel",
                    "left": 26,
                    "top": 748,
                    "width": 100,
                    "height": 100,
                    "image": "227_fight/cancel.png"
                }
            ];
            $.each(btnListfuck, function (i, v) {
                nav.button(v, 556);
            });

            break;
        case "cancel":
            room556.btnclick("displayMain");
            break;
        case "inventory":
            inv.display();
            break;
        case "clearInputs":
            nav.killbutton("fight");
            nav.killbutton("fuck");
            nav.killbutton("inventory");
            nav.killbutton("flee");
            nav.killbutton("punch");
            nav.killbutton("kick");
            nav.killbutton("block");
            nav.killbutton("cancel");
            nav.killbutton("undress");
            nav.killbutton("ass");
            nav.killbutton("bj");
            break;
        case "block":
            nav.killbutton("punch");
            nav.killbutton("kick");
            nav.killbutton("block");

            var btnListblock = [
                {
                    "type": "zbtn",
                    "name": "blockPunch",
                    "left": 239,
                    "top": 749,
                    "width": 100,
                    "height": 100,
                    "image": "227_fight/blockPunch.png"
                },
                {
                    "type": "zbtn",
                    "name": "blockKick",
                    "left": 132,
                    "top": 704,
                    "width": 100,
                    "height": 100,
                    "image": "227_fight/blockKick.png"
                }
            ];
            $.each(btnListblock, function (i, v) {
                nav.button(v, 556);
            });

            break;
        case "flee":
        case "punch":
        case "kick":
        case "blockPunch":
        case "blockKick":
        case "bj":
        case "ass":
        case "undress":
            if (g.internal.c === 0) {
                if (name === "punch") {
                    g.internal.c = 1;
                    room556.btnclick("drawBlock");
                    room556.btnclick("mpunch");
                    g.pass.char.damage = 2;
                    chat(2, 556);
                }
                else
                    chat(1, 556);
            }
            else if (g.internal.c === 1) {
                if (name === "punch") {
                    room556.btnclick("clearInputs");
                    g.internal.c = 2;
                    room556.btnclick("drawRecoil");
                    room556.btnclick("mpunch");
                    g.pass.char.damage = 20;
                    room556.btnclick("energyenemy");
                    setTimeout(function () { room556.btnclick("counterAction") }, 1000);

                }
                else
                    chat(1, 556);
            }
            else if (g.internal.c === 2) {
                if (name === "blockKick")
                    chat(9, 556);
                if (name === "blockPunch") {
                    g.internal.c = 3;
                    room556.btnclick("drawPunch");
                    room556.btnclick("mblock");
                    g.pass.me.damage = 3;
                    room556.btnclick("energyme");
                    setTimeout(function () { room556.btnclick("counterPunch") }, 1000);
                }
                else
                    chat(10, 556);
            }


            break;
        case "counterAction":
            if (g.internal.c === 2) {
                nav.killbutton("me");
                room556.btnclick("drawPunch");
                g.pass.me.damage = 20;
                room556.btnclick("energyme");
                setTimeout(function () { chat(4, 556); }, 1000);
            }
            break;
        case "counterPunch":
            room556.btnclick("drawRecoil");
            room556.btnclick("mpunch");
            g.pass.char.damage = 20;
            room556.btnclick("energyenemy");
            setTimeout(function () {
                chat(11, 556);
                room556.btnclick("drawPose");
                nav.killbutton("me");
            }, 1000);
            break;
        case "drawPose":
            nav.killbutton("char");
            nav.button({
                "type": "img",
                "name": "char",
                "left": 960 - (g.pass.char.pose.w / 2),
                "top": 1080 - g.pass.char.pose.h,
                "width": g.pass.char.pose.w,
                "height": g.pass.char.pose.h,
                "image": g.pass.char.pose.i
            }, 556);
            break;
        case "drawBlock":
            nav.killbutton("char");
            nav.button({
                "type": "img",
                "name": "char",
                "left": 960 - (g.pass.char.block.w / 2),
                "top": 1080 - g.pass.char.block.h,
                "width": g.pass.char.block.w,
                "height": g.pass.char.block.h,
                "image": g.pass.char.block.i
            }, 556);
            break;
        case "drawPunch":
            nav.killbutton("char");
            nav.button({
                "type": "img",
                "name": "char",
                "left": 960 - (g.pass.char.punch.w / 2),
                "top": 1080 - g.pass.char.punch.h,
                "width": g.pass.char.punch.w,
                "height": g.pass.char.punch.h,
                "image": g.pass.char.punch.i
            }, 556);
            break;
        case "drawKick":
            nav.killbutton("char");
            nav.button({
                "type": "img",
                "name": "char",
                "left": 960 - (g.pass.char.kick.w / 2),
                "top": 1080 - g.pass.char.kick.h,
                "width": g.pass.char.kick.w,
                "height": g.pass.char.kick.h,
                "image": g.pass.char.kick.i
            }, 556);
            break;
        case "drawRecoil":
            nav.killbutton("char");
            nav.button({
                "type": "img",
                "name": "char",
                "left": 960 - (g.pass.char.recoil.w / 2),
                "top": 1080 - g.pass.char.recoil.h,
                "width": g.pass.char.recoil.w,
                "height": g.pass.char.recoil.h,
                "image": g.pass.char.recoil.i
            }, 556);
            break;
        case "mpunch":
            nav.killbutton("me");
            nav.button({
                "type": "img",
                "name": "me",
                "left": 1012,
                "top": 278,
                "width": 908,
                "height": 578,
                "image": "227_fight/mPunch.png"
            }, 556);
            break;
        case "mkick":
            nav.killbutton("me");
            nav.button({
                "type": "img",
                "name": "me",
                "left": 789,
                "top": 902,
                "width": 725,
                "height": 178,
                "image": "227_fight/mKick.png"
            }, 556);
            break;
        case "mblock":
            nav.killbutton("me");
            nav.button({
                "type": "img",
                "name": "me",
                "left": 556,
                "top": 425,
                "width": 655,
                "height": 578,
                "image": "227_fight/mBlock.png"
            }, 556);
            break;
        case "counter":


            break;
        default:
            break;
    }
};

room556.chatcatch = function (callback) {
    switch (callback) {
        case "reset":
            room556.btnclick("drawPose");
            nav.killbutton("me");
            break;
        case "reset2":
            room556.btnclick("drawPose");
            nav.killbutton("me");
            setTimeout(function () { if (g.pass.me.energy > 60) chat(5, 556); else chat(6, 556); }, 2000);
            break;
        case "reset2a":
            room556.btnclick("displayMain"); 
            break;
        case "sewer":
            inv.add("sewer");
            nav.button({
                "type": "img",
                "name": "me",
                "left": 751,
                "top": 263,
                "width": 531,
                "height": 473,
                "image": "227_fight/sewer.png"
            }, 556);
            break;
        case "leave":
            g.mod("fitness", 30);
            g.setflag("gworkout");
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
            text: "ok shrimp, I'm going to teach you how to fight. We'll start easy. Punch me. To punch me click the 'spar' button, then the " +
                "punch button on the bottom left. ",
            button: [
                { chatID: -1, text: "Ok, click the spar button then the punch button. ", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "g",
            text: "No, dumbass. I said punch me.",
            button: [
                { chatID: -1, text: "Ohhhh, punch", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "g",
            text: "Good. You can follow instructions. Notice how I blocked your punch. If I sucessfully block your punch there's a " +
                "chance I could get a counter attack so make sure you don't just do one move or your opponant will be able to predict " +
                "your moves. ",
            button: [
                { chatID: 3, text: "ok, don't do the same move", callback: "reset" }
            ]
        },
        {
            chatID: 3,
            speaker: "g",
            text: "Now I'm going to have you punch me again, but this time I'm going to take it, but I'm going to punch you back. Pay " +
                "attention to the energy bars at the bottom. ",
            button: [
                { chatID: -1, text: "Crap.. ok", callback: "" }
            ]
        },
        {
            chatID: 4,
            speaker: "g",
            text: "Now take a look at the life bars, both yours and mine.. go ahead I'll wait... They are at the bottom.",
            button: [
                { chatID: -1, text: "ok", callback: "reset2" }
            ]
        },
        {
            chatID: 5,
            speaker: "g",
            text: "So you came to the fight with a good amount of energy. We're learning to fight, not to kill. You can fight until " +
                "either you or your opponent runs out of energy. ",
            button: [
                { chatID: 7, text: "ok", callback: "" }
            ]
        },
        {
            chatID: 6,
            speaker: "g",
            text: "Notice how low your energy is? When you go out for a fight you want to make sure you start the fight with as much energy " +
                "as you can. We're learning to fight, not to kill. You can fight until either you or your opponent runs out of energy.",
            button: [
                { chatID: 7, text: "ok", callback: "" }
            ]
        },
        {
            chatID: 7,
            speaker: "g",
            text: "If you are low on energy you can go into your inventory and eat an energy snack. If you need some more snacks you can " +
                "buy them it from Spanky. Next I'm going to teach you how to block. You can either my punch, or block  " +
                "my kick. ",
            button: [
                { chatID: 8, text: "oh, so I can block high to block a punch and block low to block a kick.", callback: "" }
            ]
        },
        {
            chatID: 8,
            speaker: "g",
            text: "You're learning. If you guess right you'll block most of the damage to your energy and have a chance to counter attack. " +
                "If you guess wrong you'll get either punched in the face or kicked in the balls. So only use the block if you notice a pattern " +
                "in your opponent's attack. I'm going to punch you, so block my punch.",
            button: [
                { chatID: -1, text: "Ok, I'm going to block high.", callback: "reset2a" }
            ]
        },
        {
            chatID: 9,
            speaker: "g",
            text: "Almost. You're setup to block my kick, not my punch. Try again.",
            button: [
                { chatID: -1, text: "Ok, Block your punch", callback: "" }
            ]
        },
        {
            chatID: 10,
            speaker: "g",
            text: "You make a better bimbo than a fighter. You need to think when you fight. Try again, but block my punch this time. ",
            button: [
                { chatID: -1, text: "Ok, Block your punch", callback: "" }
            ]
        },
        {
            chatID: 11,
            speaker: "g",
            text: "Nice punch. You have the basics for fighting now. Don't worry if you lose a few fights, in time you'll get better. ",
            button: [
                { chatID: 12, text: "How do I get better?", callback: "" }
            ]
        },
        {
            chatID: 12,
            speaker: "g",
            text: "The best way is to keep training. If you want to punch better do upper body workouts like pushups. To kick better work " +
                "on that ass with exercises like squats. With enough workouts you'll slowly get better and punch or kick harder. ",
            button: [
                { chatID: 13, text: "What if I can't win a fight?", callback: "" }
            ]
        },
        {
            chatID: 13,
            speaker: "g",
            text: "Welllll I guess you could fuck the energy out of them. You could strip down and shake that ass of yours. It's not " +
                "very honorable, volunteering to be someone's bitch.",
            button: [
                { chatID: 14, text: "So I could just fuck my way through my problems?", callback: "" }
            ]
        },
        {
            chatID: 14,
            speaker: "g",
            text: "You could just be a slut and fuck you way out of your problems, but you'll find that taking cock and eating pussy takes " +
                "a lot more energy and should only be used when you have to. ",
            button: [
                { chatID: 15, text: "Will you show me how to fuck my way out of a fight?", callback: "sewer" }
            ]
        },
        {
            chatID: 15,
            speaker: "g",
            text: "Sigh... no. I only teach you how to win! I'm not going to teach you how to be a fuck toy. I'm sure you'll figure that " +
                "out on your own. You're welcome to come back and spar. Oh also " + sc.n("missy") + " told me to give you " +
                "this. It's a crowbar so you can open the manhold cover in the alley near the dance club. Make yourself proud " +
            "and fight your way through.",
            button: [
                { chatID: 15, text: "ok, thanks!", callback: "leave" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};