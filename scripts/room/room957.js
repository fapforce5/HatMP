//Room name
var room957 = {};
room957.main = function () {
    switch (g.pass) {
        case "clean":
            nav.bg("957_jobs/walk.webp");
            zcl.pucker(800, 1000, .15, "back", false);
            g.internal = g.rand(0, 2);
            chat(0, 957);
            break;
        case "sweep":
            nav.bg("957_jobs/sweepHallway1.jpg");
            chat(3, 957);
            break;
        case "kissingbooth":
            nav.bg("957_jobs/kissing0.webp");
            g.internal = {
                bg: g.shuffleArray([0, 1, 2, 3, 4, 5, 6, 7]),
                events: g.shuffleArray([0, 1, 2, 3, 4, 5, 6, 7]),
                counter: 0,
                pose: null,
                active: null
            };
            chat(9, 957);
            break;
        case "toilet":
            g.internal = {
                asspiss: 0,
                facepissWho: [],
                titspiss: false,
                hairpiss: false,
                events: g.shuffleArray([0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
                tcounter: 0,
                counter: g.rand(5, 12)
            };
            nav.bg("957_jobs/toilet_bg.webp");
            nav.button({
                "type": "img",
                "name": "char",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "957_jobs/toiletp_" + gender.pronoun("f") + "_bored.webp"
            }, 957);
            nav.button({
                "type": "img",
                "name": "fg",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "957_jobs/toilet_left.webp"
            }, 957);
            chat(34, 957);
            break;
        case "delivery0":
            nav.bg("957_jobs/delivery0.webp"); 
            chat(51, 957);
            break;
        default:
            g.pass = "sweep";
            char.room(957);
            break;
    }
};

room957.btnclick = function (name) {
    switch (name) {
        case "kissing":
            if (g.internal.counter > 7) {
                nav.kill();
                nav.bg("957_jobs/kissing1.webp");
                room950.btnclick("bars")
                zcl.poseExpose(250, 900, .3, "", false);
                nav.button({
                    "type": "img",
                    "name": "bg",
                    "left": 0,
                    "top": 0,
                    "width": 1920,
                    "height": 1080,
                    "image": "957_jobs/kissing_start0.webp"
                }, 957);
                chat(33, 957);
            }
            else if (g.rand(0, 2) === 1) {
                nav.kill();
                room950.btnclick("bars")
                nav.bg("957_jobs/kissing1.webp");
                zcl.poseExpose(250, 900, .3, "", false);
                nav.button({
                    "type": "img",
                    "name": "bg",
                    "left": 0,
                    "top": 0,
                    "width": 1920,
                    "height": 1080,
                    "image": "957_jobs/kissing_ol" + g.internal.bg[0] + ".webp"
                }, 957);
                g.internal.bg.shift();
                nav.next("kissing"); 
            }
            else {
                nav.kill();
                room950.btnclick("bars")
                nav.bg("957_jobs/kissing1.webp");
                zcl.poseExpose(250, 900, .3, "", false);
                nav.button({
                    "type": "img",
                    "name": "bg",
                    "left": 0,
                    "top": 0,
                    "width": 1920,
                    "height": 1080,
                    "image": "957_jobs/kissing_start0.webp"
                }, 957);
                switch (g.internal.events[0]) {
                    case 0: 
                        chat(10, 957);
                        break;
                    case 1:
                        chat(12, 957);
                        break;
                    case 2:
                        nav.modbutton("bg", "957_jobs/kissing_start1.webp", null, null);
                        chat(14, 957);
                        break;
                    case 3:
                        chat(16, 957);
                        break;
                    case 4:
                        chat(19, 957);
                        break;
                    case 5:
                        chat(24, 957);
                        break;
                    case 6:
                        sc.modLevel("cult", 10, 10);
                        nav.modbutton("bg", "957_jobs/kissing_start2.webp", null, null);
                        chat(27, 957);
                        break;
                    case 7:
                        nav.modbutton("bg", "957_jobs/kissing_start3.webp", null, null);
                        chat(29, 957);
                        break;
                }
                g.internal.events.shift();
            }
            
            g.internal.counter++;
            break;
        case "kissingClose":
            if (g.internal.pose === null)
                alert("Error: No pose set for kissing booth event."); 
            nav.kill();
            nav.bg("957_jobs/kissing_" + (cl.c.chest > 2 ? "f" : "m") + "_" + g.internal.pose + ".webp"); 
            break;
        case "kissing_ev1":
            nav.kill();
            levels.oralass("m", "cult");
            sc.modLevel("cult", 8, 10);
            chat(13, 957);
            break;
        case "kissing_ev2":
            nav.kill();
            levels.oral(3, "f", "chloe");
            sc.modLevel("cult", 8, 10);
            chat(15, 957);
            break;
        case "kissing_ev7":
            nav.killbutton("kissing_ev7");
            chat(31, 957);
            break;
        case "toiletDraw":
            nav.kill();
            nav.bg("957_jobs/toilet_bg.webp");
            room950.btnclick("bars");
            nav.button({
                "type": "img",
                "name": "char",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "957_jobs/toiletp_" + gender.pronoun("f") + "_bored.webp"
            }, 957);

            if (g.internal.titspiss) {
                nav.button({
                    "type": "img",
                    "name": "char",
                    "left": 0,
                    "top": 0,
                    "width": 1920,
                    "height": 1080,
                    "image": "957_jobs/toilet_peeTitties.webp"
                }, 957);
            }
            if (g.internal.hairpiss) {
                nav.button({
                    "type": "img",
                    "name": "char",
                    "left": 0,
                    "top": 0,
                    "width": 1920,
                    "height": 1080,
                    "image": "957_jobs/toilet_peeHair.webp"
                }, 957);
            }
            if (g.internal.asspiss > 0) {
                nav.button({
                    "type": "img",
                    "name": "char",
                    "left": 0,
                    "top": 0,
                    "width": 1920,
                    "height": 1080,
                    "image": "957_jobs/toilet_peeAnus" + (g.internal.asspiss > 2 ? 2 : g.internal.asspiss) + ".webp"
                }, 957);
            }
            
            if (g.internal.facepissWho.length > 0) {
                nav.button({
                    "type": "img",
                    "name": "char",
                    "left": 0,
                    "top": 0,
                    "width": 1920,
                    "height": 1080,
                    "image": "957_jobs/toilet_peeMouth.webp"
                }, 957);
            }
            break;
        case "toilet":
            if (g.internal.counter > 13) {
                room957.btnclick("toiletDraw");
                nav.button({
                    "type": "img",
                    "name": "char",
                    "left": 0,
                    "top": 0,
                    "width": 1920,
                    "height": 1080,
                    "image": "957_jobs/toilet_left.webp"
                }, 957);
                chat(47, 957);
            }
            else {
                switch (g.internal.events[0]) {
                    case 0:
                        room957.btnclick("toiletDraw");
                        nav.button({
                            "type": "img",
                            "name": "char",
                            "left": 0,
                            "top": 0,
                            "width": 1920,
                            "height": 1080,
                            "image": "957_jobs/toilet_thought" + g.internal.tcounter % 5 + ".webp"
                        }, 957);
                        g.internal.tcounter++;
                        nav.wait("toilet");
                        break;
                    case 1:
                    case 2:
                    case 3:
                        room957.btnclick("toiletDraw");
                        g.internal.asspiss++;
                        nav.button({
                            "type": "img",
                            "name": "char",
                            "left": 0,
                            "top": 0,
                            "width": 1920,
                            "height": 1080,
                            "image": "957_jobs/toilet_1.webp"
                        }, 957);
                        g.internal.titspiss = true;
                        sc.modLevel("cult", 5, 10);
                        levels.piss(false, true, false, "m", "cult");
                        chat(800, 957);
                        break;
                    case 4:
                    case 5:
                        room957.btnclick("toiletDraw");
                        g.internal.facepiss++;
                        nav.button({
                            "type": "img",
                            "name": "char",
                            "left": 0,
                            "top": 0,
                            "width": 1920,
                            "height": 1080,
                            "image": "957_jobs/toilet_2.webp"
                        }, 957);
                        g.internal.facepissWho = ["cult"];
                        g.internal.hairpiss = true;
                        sc.modLevel("cult", 5, 10);
                        levels.piss(true, false, false, "m", "cult");
                        chat(801, 957);
                        break;
                    case 6:
                        room957.btnclick("toiletDraw");
                        nav.button({
                            "type": "img",
                            "name": "char",
                            "left": 0,
                            "top": 0,
                            "width": 1920,
                            "height": 1080,
                            "image": "957_jobs/toilet_6_0.webp"
                        }, 957);
                        chat(35, 957);
                        break;
                    case 7:
                        room957.btnclick("toiletDraw");
                        nav.button({
                            "type": "img",
                            "name": "char",
                            "left": 0,
                            "top": 0,
                            "width": 1920,
                            "height": 1080,
                            "image": "957_jobs/toilet_7_0.webp"
                        }, 957);
                        chat(37, 957);
                        break;
                    case 8:
                        nav.kill();
                        nav.bg("957_jobs/toilet_8_1.webp");
                        chat(43, 957);
                        break;
                    case 9:
                        room957.btnclick("toiletDraw");
                        nav.button({
                            "type": "img",
                            "name": "char",
                            "left": 0,
                            "top": 0,
                            "width": 1920,
                            "height": 1080,
                            "image": "957_jobs/toilet_9_0.webp"
                        }, 957);
                        chat(40, 957);
                        break;
                    default:
                        nav.next("toilet");

                        break;
                }
                
            }
            g.internal.counter++;
            g.internal.events.shift();
            break;
        case "toilet_spit":
            $.each(g.internal.facepissWho, function (index, value) {
                sc.modLevel("cult", 2, 10);
                levels.piss(false, false, true, (value === "cult" ? "m" : "f"), value);
            });
            g.internal.facepissWho = [];
            room957.chatcatch("toilet");
            break;
        case "toilet_swallow":
            $.each(g.internal.facepissWho, function (index, value) {
                sc.modLevel("cult", 8, 10);
                levels.piss(true, false, false, (value === "cult" ? "m" : "f"), value);
            });
            g.internal.facepissWho = [];
            room957.chatcatch("toilet");
            break;
        default:
            break;
    }
};

room957.chatcatch = function (callback) {
    switch (callback) {
        case "sweepHallway2":
        case "sweepHallway3":
        case "sweepHallway4":
        case "sweepHallway5x":
        case "sweepHallway6x":
            nav.bg("957_jobs/" + callback + ".jpg"); 
            break;
        case "toilet_8_2":
        case "toilet_8_3":
            nav.bg("957_jobs/" + callback + ".webp"); 
            break;
        case "toilet_8_4":
            room957.btnclick("toiletDraw");
            nav.button({
                "type": "img",
                "name": "bg",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "957_jobs/toilet_8_4.webp"
            }, 957);
            break;
        case "sweepHallway5":
            nav.bg("957_jobs/" + callback + ".jpg"); 
            chat(7, 957);
            break;
        case "sweepHallway6":
            levels.oral(3, "m", "cult", true);
            nav.bg("957_jobs/" + callback + ".jpg"); 
            break;
        case "shower0":
            nav.kill();
            nav.bg("957_jobs/" + callback + ".webp"); 
            break;
        case "shower1":
            nav.kill();
            nav.bg("957_jobs/shower" + g.internal + "_1.webp");
            break;
        case "shower2":
            nav.bg("957_jobs/shower" + g.internal + "_2.webp");
            break;
        case "kissing0":
            nav.bg("957_jobs/kissing1.webp");
            zcl.poseExpose(250, 900, .3, "", false);
            nav.wait("kissing");
            break;
        case "kissing_ev0":
            g.internal.pose = "s";
            room957.btnclick("kissingClose");
            sc.modLevel("cult", 5, 10);
            nav.button({
                "type": "img",
                "name": "bg",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "957_jobs/kissing_e0.webp"
            }, 957);
            break;
        case "kissing_ev1":
            nav.kill();
            nav.bg("957_jobs/kissing_e1.webp"); 
            nav.button({
                "type": "tongue",
                "name": "kissing_ev1",
                "left": 1051,
                "top": 300,
                "width": 203,
                "height": 202,
                "image": "957_jobs/kissing_e1_icon.webp"
            }, 957);
            break;
        case "kissing_ev2":
            nav.kill();
            nav.bg("957_jobs/kissing_e2.webp");
            nav.button({
                "type": "tongue",
                "name": "kissing_ev2",
                "left": 1026,
                "top": 726,
                "width": 116,
                "height": 203,
                "image": "957_jobs/kissing_e2_icon.webp"
            }, 957);
            break;
        case "kissing_ev3":
            nav.kill();
            g.internal.pose = "t";
            room957.btnclick("kissingClose");
            nav.button({
                "type": "img",
                "name": "bg",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "957_jobs/kissing_e3.webp"
            }, 957);
            break;
        case "kissing_ev3_1":
            sc.modLevel("cult", 5, 10);
            nav.kill();
            break;
        case "kissing_ev4":
            nav.kill();
            g.internal.pose = "w";
            room957.btnclick("kissingClose");
            nav.button({
                "type": "img",
                "name": "kissing_ev4",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "957_jobs/kissing_e4.webp"
            }, 957);
            break;
        case "kissing_ev4_1":
            g.internal.pose = "t";
            room957.btnclick("kissingClose");
            nav.button({
                "type": "img",
                "name": "kissing_ev4",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "957_jobs/kissing_e4.webp"
            }, 957);
            break;
        case "kissing_ev4_2":
            nav.modbutton("kissing_ev4", "957_jobs/kissing_e4_2.webp", null, null);
            sc.modLevel("cult", 8, 10);
            break;
        case "kissing_ev5":
            nav.kill();
            g.internal.pose = "t";
            room957.btnclick("kissingClose");
            nav.button({
                "type": "img",
                "name": "bg",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "957_jobs/kissing_e5.webp"
            }, 957);
            break;
        case "kissing_ev5_1":
            sc.modLevel("cult", 5, 10);
            nav.kill();
            break;
        case "kissing_ev7":
            nav.killbutton("bg");
            nav.button({
                "type": "img",
                "name": "bg",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "957_jobs/kissing_e7.webp"
            }, 957);
            break;
        case "kissing_ev7_1":
            nav.killbutton("bg");
            nav.button({
                "type": "img",
                "name": "bg",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "957_jobs/kissing_e7_1.webp"
            }, 957);
            nav.wait("kissing_ev7");
            break;
        case "leave":
            gv.mod("cultDayCounter", 1);
            switch (g.pass) {
                case "clean": sc.modLevel("cult", 20, 10); break;
                case "sweep": sc.modLevel("cult", 20, 10); break;
                case "kissingbooth":/*points earned during event*/break;
            }
            g.pass = null;
            char.room(950);
            break;
        case "kissingReset":
            nav.kill();
            nav.bg("957_jobs/kissing1.webp");
            room950.btnclick("bars")
            zcl.poseExpose(250, 900, .3, "", false);
            nav.wait("kissing"); 
            break;
        case "toilet":
            room957.btnclick("toiletDraw");
            if (g.internal.facepissWho.length > 0) {
                nav.button({
                    "type": "zbtn",
                    "name": "toilet_spit",
                    "left": 1420,
                    "top": 920,
                    "width": 225,
                    "height": 75,
                    "image": "1001_rand/spit.png"
                }, 957);
                nav.button({
                    "type": "zbtn",
                    "name": "toilet_swallow",
                    "left": 1695,
                    "top": 920,
                    "width": 225,
                    "height": 75,
                    "image": "1001_rand/swallow.png"
                }, 957);
            }
            else {
                nav.wait("toilet");
            }
            break;
        case "toilet_6_1":
            room957.btnclick("toiletDraw");
            g.internal.facepiss++;
            nav.button({
                "type": "img",
                "name": "char",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "957_jobs/toilet_6_1.webp"
            }, 957);
            g.internal.facepissWho = ["!girl2"];
            g.internal.hairpiss = true;
            break;
        case "toilet_7_1":
            nav.kill();
            g.internal.facepissWho = ["cult", "cult"];
            g.internal.hairpiss = true;
            sc.modLevel("cult", 10, 10);
            levels.piss(false, true, false, "m", "cult");
            levels.piss(false, true, false, "m", "cult");
            g.internal.titspiss = true;
            nav.bg("957_jobs/toilet_7_1_" + gender.pronoun("f") + ".webp");
            break;
        case "toilet_9_1":
            nav.kill();
            g.internal.facepissWho = ["cult"];
            g.internal.hairpiss = true;
            sc.modLevel("cult", 10, 10);
            levels.piss(false, true, false, "m", "cult");
            g.internal.titspiss = true;
            nav.bg("957_jobs/toilet_9_1_" + gender.pronoun("f") + ".webp");
            break;
        case "toilet_back0":
            nav.kill();
            if (g.internal.asspiss > 0) {
                nav.bg("957_jobs/toilet_back0.webp"); 
                chat(48, 957);
            }
            else {
                room957.chatcatch("leave");
            }
            break;
        case "toilet_back1":
            nav.kill();
            room950.btnclick("drawBG");
            nav.killbutton("clean");
            zcl.assup(730, 400, .5, "", false);
            break;
        case "toilet_back2":
            gv.set("cultLastClean", new Date(gv.get("cultLastClean").getTime() - 604800000));
            room950.btnclick("drawBG");
            nav.killbutton("clean");
            nav.kill();
            nav.button({
                "type": "img",
                "name": "char",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "957_jobs/toilet_back2.webp"
            }, 957);
            zcl.assup(730, 400, .5, "", false);
            break;
        default:
            break;
    }
};

room957.chat = function (chatID) {
    if (chatID === 900) {
        let txt900 = ["Hehe, someone brought a mut in the shower! ",
            "Gross! Who let a sissy in here!",
            "*pffft* hehehe. Sorry, I go too relaxed in the shower. I just can't help myself! ",
            "I just love the feeling of water on my skin. I could stay in here all day! ",
            "Oh, the sissy cleaner! My favorite part of my shower! ",
            "OOoo look. A sissy cleaner. sissy cleaner on my skin! It's so relaxing! ",
            "What a loser! ",
            "*ugh* I can't believe I'm sharing a shower with a sissy cleaner! ",
            "I just want to get clean and get out of here! ",
            "Hey Becky! Do you want to join me in the shower? We can have some fun together! ",
            "*ugh* So much cum. I'm going to be queefing this out all day.",
            "My asshole REALLY hurts! I hate how the tiny cock guys don't even try to ease it in. "
        ];
        return {
            chatID: 900,
            speaker: "!girl",
            text: txt900[g.rand(0, txt900.length)],
            button: [
                { chatID: 1, text: "...", callback: "shower1" }
            ]
        };
    }
    else if (chatID === 800) {
        let txt800 = [
            "What an honor. I get to piss in this sissy's asshole! hehehe!",
            "Disgusting",
            "A sissies should know they are only toilets to be pissed in. ",
            "*ugh* I've been holding that in all day. ",
            "Close your eyes. I can't pee when you stare at me. ",
            "What kind of person let's people piss in their asshole? ",
            "Slut!"
        ];
        return {
            chatID: 800,
            speaker: "cult",
            text: txt800[g.rand(0, txt800.length)],
            button: [
                { chatID: -1, text: "...", callback: "toilet" },
            ]
        };
    }
    else if (chatID === 801) {
        let txt801 = [
            "Fuck that ass, I'm going piss in that face. ",
            "You look prettier with my piss in your face. ",
            "There you go. Now hold my piss in your mouth. Get a good taste. ",
            "That's probably going to taste rank. I've been eating aspragus all day. ",
            "Huh? There's a sissy in the toilet. ",
            "Nasty bitch. "
        ];
        return {
            chatID: 801,
            speaker: "cult",
            text: txt801[g.rand(0, txt801.length)],
            button: [
                { chatID: -1, text: "*gargle*", callback: "toilet" },
            ]
        };
    }
    var cArray = [
        {
            chatID: 0,
            speaker: "cult",
            text: "Keep your eyes on the ground or I'll shove my foot up your ass. ",
            button: [
                { chatID: 900, text: "...", callback: "shower0" }
            ]
        },
        {
            chatID: 1,
            speaker: "!girl",
            text: "Don't forget to wipe down my pussy and asshole! ",
            button: [
                { chatID: 2, text: "mmmMMmmm", callback: "shower2" }
            ]
        },
        {
            chatID: 2,
            speaker: "!girl",
            text: "Now fuck off so I can rinse off.",
            button: [
                { chatID: -1, text: "[Back to your cell]", callback: "leave" }
            ]
        },
        {
            chatID: 3,
            speaker: "thinking",
            text: "Cleaning this hallway isn't so bad. I wish it was warmer though. ",
            button: [
                { chatID: 4, text: "Chat with the cult member at the end of the hall", callback: "sweepHallway2" },
                { chatID: -1, text: "Finish cleaning", callback: "leave" }
            ]
        },
        {
            chatID: 4,
            speaker: "cult",
            text: "You're looking at me like you want to suck my cock. ",
            button: [
                { chatID: 5, text: "Oh. I do", callback: "sweepHallway3" },
                { chatID: -1, text: "Nothing. I've got to finish cleaning. Sorry. ", callback: "sweepHallway1end" }
            ]
        },
        {
            chatID: 5,
            speaker: "cult",
            text: "I thought so slut. Now get to it. ",
            button: [
                { chatID: 6, text: "Yes sir.", callback: "sweepHallway4" }
            ]
        },
        {
            chatID: 6,
            speaker: "cult",
            text: "That's a good cock sucker. You must have sucked a lot of dicks. ",
            button: [
                { chatID: -1, text: "SLURP SLURP SLURP", callback: "sweepHallway5" }
            ]
        },
        {
            chatID: 7,
            speaker: "cult",
            text: "Oh fuck! Swallow my cum slut! ",
            button: [
                { chatID: 8, text: "GURGLE, Slurp, swollow", callback: "sweepHallway6" }
            ]
        },
        {
            chatID: 8,
            speaker: "cult",
            text: "Now thank me for allowing you to swallow my cum, slut, and get out of here.",
            button: [
                { chatID: -1, text: "Thank you for letting me swallow your cum.", callback: "leave" }
            ]
        },
        {
            chatID: 9,
            speaker: "cult",
            text: "Welcome to the *heh* Kissing booth. Get comfortable and have a seat. Hehehe",
            button: [
                { chatID: -1, text: "*sigh* [Impale your anus on the pole]", callback: "kissingReset" }
            ]
        },
        {
            chatID: 10,
            speaker: "!milkmaid",
            text: "Don't you look lonely sitting there. ",
            button: [
                { chatID: 11, text: "hmmm?", callback: "kissing_ev0" }
            ]
        },
        {
            chatID: 11,
            speaker: "!milkmaid",
            text: "*mmwwwaaa* You're the cutest sissy here! All the girls are jelous of you. ",
            button: [
                { chatID: -1, text: "Awwww", callback: "kissingReset" }
            ]
        },
        {
            chatID: 12,
            speaker: "cult",
            text: "Haha! You fell for the kissing booth job! Idiot! How about you kiss my hairy asshole " +
                "with your tongue! ",
            button: [
                { chatID: -1, text: "[Lick his hairy asshole]", callback: "kissing_ev1" },
                { chatID: -1, text: "No way!", callback: "kissingReset" },
            ]
        },
        {
            chatID: 13,
            speaker: "cult",
            text: "Fuckin' loser, hahaha.",
            button: [
                { chatID: -1, text: "*ugh* [All I can taste is ass]", callback: "kissingReset" },
            ]
        },
        {
            chatID: 14,
            speaker: "chloe",
            text: "Oh! Are you looking for a kiss? How about a kiss between my lips. For ol' times sake? ",
            button: [
                { chatID: -1, text: "[Lick " + sc.n("chloe") + "'s wet, dripping pussy]", callback: "kissing_ev2" },
                { chatID: -1, text: "No way!", callback: "kissingReset" },
            ]
        },
        {
            chatID: 15,
            speaker: "chloe",
            text: "Hehe! You're cute when your tongues burried in my pussy. I'll have to tell " + sc.n("zoey") +
                " you're here. Maybe I can get her to join too! Later! ",
            button: [
                { chatID: -1, text: "'bye", callback: "kissingReset" },
            ]
        },
        {
            chatID: 16,
            speaker: "cult",
            text: "Oh wow. You're really pretty. Can I have a kiss please? ",
            button: [
                { chatID: 17, text: "You're cute too! Sure! ", callback: "kissing_ev3" },
                { chatID: -1, text: "No way!", callback: "kissingReset" },
            ]
        },
        {
            chatID: 17,
            speaker: "cult",
            text: "MMmmMmmm *slobber* mmmmMmmm ",
            button: [
                { chatID: 18, text: "*swoon*", callback: "kissing_ev3_1" },
            ]
        },
        {
            chatID: 18,
            speaker: "thinking",
            text: "Wow! What a kisser! My head is still swimming. ",
            button: [
                { chatID: -1, text: "...", callback: "kissingReset" },
            ]
        },
        {
            chatID: 19,
            speaker: "cult",
            text: "So you're doing the kissing booth today? I got something for you to kiss. ",
            button: [
                { chatID: 20, text: "...", callback: "kissing_ev4" },
            ]
        },
        {
            chatID: 20,
            speaker: "cult",
            text: "Stick your tongue out. Show me how much you want it. ",
            button: [
                { chatID: 22, text: "[Stick your tongue out]", callback: "kissing_ev4_1" },
                { chatID: 21, text: "No way!", callback: "" },
            ]
        },
        {
            chatID: 21,
            speaker: "cult",
            text: "Hehe. Your loss bitch. ",
            button: [
                { chatID: -1, text: "*grrr*", callback: "kissingReset" },
            ]
        },
        {
            chatID: 22,
            speaker: "thinking",
            text: "I can't wait to taste that man's penis! I so want it in my mouth! ",
            button: [
                { chatID: 23, text: "...", callback: "kissing_ev4_2" },
            ]
        },
        {
            chatID: 23,
            speaker: "cult",
            text: "That's right " + gender.pronoun("boy") + ". Just swirl your tongue on that dick hole. " +
                "Get a taste of a real man. ",
            button: [
                { chatID: -1, text: "mMmmMMmmm", callback: "kissingReset" },
            ]
        },
        {
            chatID: 24,
            speaker: "cult",
            text: "Oh wow. You fine as shit. Could I get a kiss please? ",
            button: [
                { chatID: 25, text: "You're cute too! Sure! ", callback: "kissing_ev5" },
                { chatID: -1, text: "No way!", callback: "kissingReset" },
            ]
        },
        {
            chatID: 25,
            speaker: "cult",
            text: "MMmmMmmm *slobber* mmmmMmmm ",
            button: [
                { chatID: 26, text: "*swoon*", callback: "kissing_ev5_1" },
            ]
        },
        {
            chatID: 26,
            speaker: "thinking",
            text: "Wow! What a man! His arms are so powerful. My head is totally swimming! ",
            button: [
                { chatID: -1, text: "...", callback: "kissingReset" },
            ]
        },
        {
            chatID: 27,
            speaker: "ubel",
            text: "Oh. Of course it's a sissy at the kissing booth. That's why Azrael has to be birthed " +
                "by a virgin man. Girls lack the hyper-sexuality that men do. Men are the superior sex, " +
                "even *men* like this. ",
            button: [
                { chatID: 28, text: "...", callback: "" },
            ]
        },
        {
            chatID: 28,
            speaker: "ubel",
            text: "Don't worry, sissy, you'll soon learn the power of the cult. It's better to be apart of something amazing, " +
                "than the master of nothing. I look forward to your birthing the coming of the end of the world. ",
            button: [
                { chatID: -1, text: "...", callback: "kissingReset" },
            ]
        },
        {
            chatID: 29,
            speaker: "bimbo",
            text: "Oh! Is this the blow job place? ",
            button: [
                { chatID: 30, text: "Huh?", callback: "kissing_ev7" },
            ]
        },
        {
            chatID: 30,
            speaker: "bimbo",
            text: "Do we just sit here with our mouth open to get a penis? ",
            button: [
                { chatID: -1, text: "I don't...", callback: "kissing_ev7_1" },
            ]
        },
        {
            chatID: 31,
            speaker: "bimbo",
            text: "*gluk* *gluk* *gluk* *gluk* ",
            button: [
                { chatID: 32, text: "...think...", callback: "kissing_ev7" },
            ]
        },
        {
            chatID: 32,
            speaker: "bimbo",
            text: "That was easy! I needed a snack! ",
            button: [
                { chatID: -1, text: "*sigh*", callback: "kissingReset" },
            ]
        },
        {
            chatID: 33,
            speaker: "cult",
            text: "Shift's over. Back to your cell. ",
            button: [
                { chatID: -1, text: "ok", callback: "leave" },
            ]
        },
        {
            chatID: 34,
            speaker: "cult",
            text: "Haha. I guess you've found your true worth. I'll come back *if* I feel like it. ",
            button: [
                { chatID: -1, text: "...", callback: "toilet" },
            ]
        },
        {
            chatID: 35,
            speaker: "!girl2",
            text: "oh crap! Gotta pee, gotta pee, gotta pee!",
            button: [
                { chatID: 36, text: "huh", callback: "toilet_6_1" },
            ]
        },
        {
            chatID: 36,
            speaker: "!girl2",
            text: "Awwww! So gooooood! Thanks sissy for giving me a face to sit on. ",
            button: [
                { chatID: -1, text: "*glug*", callback: "toilet" },
            ]
        },
        {
            chatID: 37,
            speaker: "cult",
            text: "Oh shit, what do we have here? ",
            button: [
                { chatID: 38, text: "...", callback: "" },
            ]
        },
        {
            chatID: 38,
            speaker: "cult",
            text: "Looks like some sissy wants to be pissed on, what do you say boys, shall we piss " +
                "all over this nasty sissy? ",
            button: [
                { chatID: 39, text: "...", callback: "toilet_7_1" },
            ]
        },
        {
            chatID: 39,
            speaker: "cult",
            text: "Filling this little piss slut is the least we could do. Nasty bitch.  ",
            button: [
                { chatID: -1, text: "*glug* *glug* *glug* ", callback: "toilet" },
            ]
        },
        {
            chatID: 40,
            speaker: "cult",
            text: "Well if it isn't our favorite pee pee girl... ",
            button: [
                { chatID: 41, text: "...", callback: "" },
            ]
        },
        {
            chatID: 41,
            speaker: "cult",
            text: "That ass look's hungry for my piss. ",
            button: [
                { chatID: 42, text: "...", callback: "toilet_9_1" },
            ]
        },
        {
            chatID: 42,
            speaker: "cult",
            text: "I do love pissing inside this slut",
            button: [
                { chatID: -1, text: "...", callback: "toilet" },
            ]
        },
        {
            chatID: 43,
            speaker: "cult",
            text: "It that hole beggin' for piss or cock?",
            button: [
                { chatID: 44, text: "Piss sir", callback: "toilet_8_2" },
                { chatID: 44, text: "Cock sir", callback: "toilet_8_2" },
            ]
        },
        {
            chatID: 44,
            speaker: "cult",
            text: "Well, first I'm going to piss in that hole...",
            button: [
                { chatID: 45, text: "...", callback: "toilet_8_3" },
            ]
        },
        {
            chatID: 45,
            speaker: "cult",
            text: "Then I'm gunna fuck that piss hole, hehe. Make you a piss cum milkshake! ",
            button: [
                { chatID: 46, text: "ooOOooo", callback: "toilet_8_4" },
            ]
        },
        {
            chatID: 46,
            speaker: "cult",
            text: "They need toilets like you everywhere. ",
            button: [
                { chatID: -1, text: "They really do", callback: "toilet" },
            ]
        },
        {
            chatID: 47,
            speaker: "cult",
            text: "Shift's over. Back to your cell, sissy. ",
            button: [
                { chatID: -1, text: "[Return to your cell]", callback: "toilet_back0" },
            ]
        },
        {
            chatID: 48,
            speaker: "thinking",
            text: "My colon is so full of piss. I can hear it sloshing around.. So cramp!!! ",
            button: [
                { chatID: 49, text: "[Keep waddling to your cell]", callback: "toilet_back1" },
            ]
        },
        {
            chatID: 49,
            speaker: "thinking",
            text: "My colon is so full of piss. I can hear it sloshing around.. So cramp!!! ",
            button: [
                { chatID: 50, text: "[Keep waddling to your cell]", callback: "toilet_back2" },
            ]
        },
        {
            chatID: 50,
            speaker: "thinking",
            text: "OOOOooooooo mmmmyyyy god. That feels better than an orgasm. ",
            button: [
                { chatID: -1, text: "[Wait for the last of your piss enema to drip down your balls from your anus]", callback: "leave" },
            ]
        },
        {
            chatID: 51,
            speaker: "cult",
            text: "One of the Masters has requested a sissy deliver these panties to him. His only rule is " +
                "that you have to wear them the entire way there. Don't lose or rip them or there will be " +
                "trouble. ",
            button: [
                { chatID: 52, text: "Where do I go?", callback: "" },
            ]
        },
        {
            chatID: 52,
            speaker: "cult",
            text: "I didn't ask. Just don't go anywhere dumb. Later.",
            button: [
                { chatID: -1, text: "*groan*", callback: "delivery1" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};