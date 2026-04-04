//Room name
var room955 = {};
room955.main = function () {
    if (gv.get("cultRank") === "Slave") {
        nav.bg("955_milk/milk0.jpg");
        if (gv.get("cultMilkCounter") === 0) {
            chat(15, 955);
        }
        else {
            chat(28, 955);
        }
        gv.mod("cultMilkCounter", 1);
    }
    else {
        if ((gv.get("cultCumJob") ?? 0) === 0) {
            nav.bg("955_milk/w0.webp");
            gv.set("cultCumJob", g.rand(1, 8));
            //add chalice to inventory
            chat(0, 955);
        }
        else {
            room950.btnclick("bars");
            if (daily.get("celldoor_blonde")) {
                nav.bg("950_cell/door_bg0.webp");
            }
            else {
                nav.bg("950_cell/door_bg.webp");
            }
            nav.button({
                "type": "img",
                "name": "celldoor",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "950_cell/door_girl.webp",
            }, 950);
            chat(37, 955);
        }
    }
};

room955.btnclick = function (name) {
    switch (name) {
        case "chalice":
            nav.kill();
            nav.bg("955_milk/cell.webp");
            chat(14, 955);
        break;
        case "icon_bj":
            switch (g.internal) {
                case 0:
                    nav.kill();
                    nav.bg("955_milk/bg.webp");
                    zcl.face(0, 400, 1, "up", g.pass.c, false);
                    nav.suck("icon_bj");
                    break;
                case 1:
                    nav.suck("icon_bj");
                    fame.moanAnimate("right");
                    zcl.face(0, 400, 1, "insert", g.pass.c, false);
                    nav.next("icon_bj");
                    break;
                case 2:
                    nav.killbutton("icon_bj");
                    zcl.face(0, 400, 1, "suck", g.pass.c, false);
                    nav.suck("icon_bj");
                    break;
                case 3:
                    nav.killbutton("icon_bj");
                    fame.moanAnimateStop();
                    zcl.face(0, 400, 1, "cum", g.pass.c, false);
                    nav.next("icon_bj");
                    break;
                case 4:
                    levels.oral(g.pass.big ? 4 : 3, "m", g.pass.n, false, null, true);
                    nav.kill();
                    nav.bg("955_milk/chalice.webp");
                    nav.next("chalice"); 
                    break;
            }
            g.internal++;
            break;
        case "icon_anal":
            var iconAnal995Color = (g.pass.big ? "" : "s") + g.pass.c;
            switch (g.internal) {
                case 0:
                    nav.kill();
                    nav.bg("955_milk/bg.webp");
                    zcl.legsup(-180, 500, .6, "smile", true, iconAnal995Color);
                    nav.takeit("icon_anal");
                    break;
                case 1:
                    nav.kill();
                    zcl.legsup(-180, 500, .6, "compare", true, iconAnal995Color);
                    nav.takeit("icon_anal");
                    break;
                case 2:
                    nav.kill();
                    fame.moanAnimate("center");
                    zcl.legsup(-180, 500, .6, "open fuck", true, iconAnal995Color);
                    nav.takeit("icon_anal");
                    break;
                case 3:
                    nav.kill();
                    fame.moanAnimate("center");
                    zcl.legsup(-180, 500, .6, "eyes fuck sg0", true, iconAnal995Color);
                    nav.takeit("icon_anal");
                    break;
                case 4:
                    nav.kill();
                    fame.moanAnimate("center");
                    zcl.legsup(-180, 500, .6, "open fuck sg1", true, iconAnal995Color);
                    nav.takeit("icon_anal");
                    break;
                case 5:
                    nav.kill();
                    fame.moanAnimateStop();
                    zcl.legsup(-180, 500, .6, "eyes creampie sg1", true, iconAnal995Color);
                    nav.takeit("icon_anal");
                    break;
                case 6:
                    levels.anal(g.pass.big ? 4 : 3, true, "m", true, g.pass.n);
                    nav.kill();
                    nav.bg("955_milk/chalicebutt.webp");
                    gv.clearButtCum();
                    nav.next("chalice"); 
                    break;
            }
            g.internal++;
            break;
        case "icon_boobjob":
            if (cl.c.chest < 3) {
                chat(13, 955);
            }
            else {
                switch (g.internal) {
                    case 0:
                        nav.kill();
                        nav.bg("955_milk/bj0_" + g.pass.c + ".webp");
                        nav.next("icon_boobjob"); 
                        break;
                    case 1:
                        nav.bg("955_milk/bj1_" + g.pass.c + ".webp");
                        break;
                    case 2:
                        levels.gavetitjob("m", g.pass.n);
                        nav.kill();
                        nav.bg("955_milk/chalice.webp");
                        nav.next("chalice"); 
                        break;
                }
            }
            g.internal++;
            break;
        case "icon_footjob":
            switch (g.internal) {
                case 0:
                    nav.kill();
                    nav.bg("955_milk/fj0_" + (g.pass.big ? "" : "s") + g.pass.c + ".webp");
                    nav.next("icon_footjob");
                    break;
                case 1:
                    nav.kill();
                    nav.bg("955_milk/fj1_" + (g.pass.big ? "" : "s") + g.pass.c + ".webp");
                    nav.next("icon_footjob");
                    break;
                case 2:
                    levels.gavefootjob("m", g.pass.n);
                    nav.kill();
                    nav.bg("955_milk/chalice.webp");
                    nav.next("chalice"); 
                    break;
            }
            g.internal++;
            break;
        case "icon_hj":
            switch (g.internal) {
                case 0:
                    nav.kill();
                    nav.bg("955_milk/bg.webp"); 
                    zcl.handjob(-200, 300, .9, "", false, g.pass.c, !g.pass.bg);
                    nav.next("icon_hj"); 
                    break;
                case 1:
                    nav.kill();
                    zcl.handjob(-200, 300, .9, "stroke", false, g.pass.c, !g.pass.bg);
                    nav.next("icon_hj"); 
                    break;
                case 2:
                    nav.kill();
                    zcl.handjob(-200, 300, .9, "cum", false, g.pass.c, !g.pass.bg);
                    nav.next("icon_hj"); 
                    break;
                case 3:
                    levels.gavehandjob("m", g.pass.n);
                    nav.kill();
                    nav.bg("955_milk/chalice.webp");
                    nav.next("chalice"); 
                    break;
            }
            g.internal++;
            break;
        default:
            break;
    }
};

room955.chatcatch = function (callback) {
    switch (callback) {
        case "clean1":
        case "clean2":
        case "clean3":
            nav.bg("955_milk/" + callback + ".webp"); 
            break;
        case "milk0":
            nav.kill();
            nav.bg("955_milk/" + callback + ".webp"); 
            break;
        case "clean0":
            nav.bg("955_milk/" + callback + ".webp"); 
            break;
        case "milk1":
        case "milk2":
            nav.bg("955_milk/" + callback + ".jpg");
            break;
        case "milk3":
        case "milk4":
        case "milk5":
        case "milk6":
        case "milk8":
        case "milk9":
            nav.bg("955_milk/" + callback + "_" + gender.pronoun("f") + ".jpg");
            break;
        case "milk7":
            levels.gotbj("f", "!milkmaid");
            nav.bg("955_milk/" + callback + "_" + gender.pronoun("f") + ".jpg");
            break;
        case "start":
            var ccc995 = gv.get("cultCumJob");
            var cultist955 = [
                { n: "kei", c: "w", big: false },
                { n: "chad", c: "w", big: true },
                { n: "cult", c: "b", big: true },
                { n: "!bbc", c: "b", big: true },
                { n: "tim", c: "w", big: false },
                { n: "bigguy", c: "w", big: true },
                { n: "charlie", c: "w", big: true },
                { n: "utah", c: "w", big: true },
                { n: "!rape12", c: "b", big: true },
                { n: "!waiter", c: "w", big: false },
                { n: "!football", c: "b", big: true },   
                { n: "river", c: "w", big: true },
                { n: "raven", c: "w", big: false }
            ];
            g.pass = cultist955[ccc995 % cultist955.length];
            gv.mod("cultCumJob", 1);
            nav.bg("955_milk/milk1_" + g.pass.n.replace("!", "") + ".webp");
            chat(900, 955);
            break;
        case "choices":
            g.internal = 0;
            sc.select("icon_bj", "955_milk/icon_bj.webp", 0);
            sc.select("icon_boobjob", "955_milk/icon_boobjob.webp", 2);
            sc.select("icon_hj", "955_milk/icon_hj.webp", 4);
            sc.select("icon_anal", "955_milk/icon_anal.webp", 6);
            sc.select("icon_footjob", "955_milk/icon_footjob.webp", 8);
            break;
        case "leave":
            sc.modLevel("cult", 15, 10);
            gv.set("cultDayCounter", 5);
            char.room(950);
            break;
        default:
            break;
    }
};

room955.chat = function (chatID) {
    if (chatID === 900) {
        let txt955 = "";
        switch (g.pass.n) {
            case "kei":
                txt955 = "Hey girlie! So you think you can empty my balls of cum!"
                break;
            case "chad":
                txt955 = "Hahaha! I always knew you were a fuckin' bitch, and here you are on your knees " +
                    "ready to take any cock that comes to you! You know what to do, unload my balls cunt."
                break;
            case "river":
                txt955 = "I always knew you were a sissy! I've wanted to be balls deep in that ass since you started at the construction " +
                    "site. Put that ass up, let me fuck it bitch. "
                break;
            case "cult":
                txt955 = "Hi. I think you're so pretty I had to come over. Could you service me please. "
                break;
            case "!bbc":
                txt955 = "I break bitches like you!"
                break;
            case "tim":
                txt955 = "I do hope they are able to give you a pussy. I so want to be deep in that! Don't " +
                    "get me wrong, I love anal, but I love pussy more!";
                break;
            case "bigguy":
                if (sc.getMissionTask("lola", "sissy", 13).startedOrComplete) {
                    switch (sc.taskGetStep.taskGetStep("bigguy", "cult")) {
                        case -1:
                        case 0:
                            sc.startMission("bigguy", "cult");
                            sc.completeMissionTask("bigguy", "cult", 0);
                            return {
                                chatID: 900,
                                speaker: "bigguy",
                                text: sc.n("chad") + " and I are taking good care of your " + sc.n("el") +
                                    " and " + sc.n("landlord") + ". We started playing a game called whose " +
                                    "the dadday. ",
                                button: [
                                    { chatID: 10, text: "What's that?", callback: "" }
                                ]
                            };
                        case 1:
                            sc.completeMissionTask("bigguy", "cult", 1);
                            return {
                                chatID: 900,
                                speaker: "bigguy",
                                text: "Got your " + sc.n("el") + " to drop out of college. They haven't been in " +
                                    "quite some time. Too busy making money on their backs, hehehe. It's amazing " +
                                    "how easily you can turn young women into whores. ",
                                button: [
                                    { chatID: 12, text: "Mother fucker!", callback: "" }
                                ]
                            };
                        default:
                            txt955 = "Don't worry little " + gender.pronoun("girl") + " your " + sc.n("el") +
                                " is taking good care of this dick while you're in here. Hehehe"
                            break;
                    }
                }
                else {
                    txt955 = "Don't worry little " + gender.pronoun("girl") + " take care of this dick and " +
                        "I'll take care of you. Hehehe!";
                }
                break;
            case "charlie":
                txt955 = "Fuck yeah, I beat those other bastards to ya! You know what I love about a sissy? " +
                    "They love giving up that ass! I don't know what it is about fucking an asshole, but I love it!";
                break;
            case "utah":
                txt955 = "Today's your lucky day! You get to take some of the best cum in this whole place! " +
                    "Treat this dick with care, I need it to fuck those cheerleaders! "
                break;
            case "!rape12":
                txt955 = "Fuck yeah! I do love fucking sissies! "
                break;
            case "!waiter":
                if (sc.getMissionTask("janice", "date", 4).complete)
                    txt955 = "I got to fuck the girlfriend, now I get to fuck her " + gender.pronoun("boy") +
                        "friend too. I do love being me. ";
                else
                txt955 = "Are you a hot piece of ass."
                break;
            case "!football":
                txt955 = "Hehehe. So where you want this dick? "
                break;
            case "raven":
                txt955 = "I'm going to fuck you then fuck your " + sc.n("landlord") + " over and take her property " +
                    "and there isn't a damn thing you can do about it sissy."
                break;
        }
        return {
            chatID: 900,
            speaker: g.pass.n,
            text: txt955,
            button: [
                { chatID: -1, text: "*sigh*", callback: "choices" }
            ]
        };

    }
    var cArray = [
        {
            chatID: 0,
            speaker: "!milkmaid",
            text: "Oh I do love a new sissy! While those boys do love fucking my Milk Maids they really " +
                "love a sissy! I don't know why, I think they just love to see that little penis bounce " +
                "when they pound their little butts hehe. ",
            button: [
                { chatID: 1, text: "I can see that ", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "!milkmaid",
            text: "I just want to give you some pointers before we go in. They do treat you sissies so " +
                "terribly. You know us Milk Maids get an entire month to get used to it here before they " +
                "throw us in the milking room. And we've really made our quarters so nice for those girls " +
                "that do stay at the castle. ",
            button: [
                { chatID: 2, text: "Really? ", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "!milkmaid",
            text: "Oh yes. Ubel says the girls are for pleasure, but you sissies have to be tough to birth " +
                "Azrael. I think he just cares about you sissies more than us. ",
            button: [
                { chatID: 3, text: "...", callback: "" }
            ]
        },
        {
            chatID: 3,
            speaker: "!milkmaid",
            text: "I'm taking you up to Milking Room Four. There's ten Milking Rooms, mostly the same except " +
                "for Milking Room One and ten. One room has all the important people. Only the best Milk Maids go there " +
                "and sissies aren't allowed in. You visited room ten as a slave. Only slaves to go that one. ",
            button: [
                { chatID: 4, text: "Oh. ", callback: "" }
            ]
        },
        {
            chatID: 4,
            speaker: "!milkmaid",
            text: "So the milking ritual happens each day. Well, except for Friday as you know. The boys can " +
                "choose any girl they want. Ubel does that becuase he thinks some girls will get too attached " +
                "to just one boy and pick him every time. ",
            button: [
                { chatID: 5, text: "...", callback: "" }
            ]
        },
        {
            chatID: 5,
            speaker: "!milkmaid",
            text: "But the girl gets to pick how to make him cum, but you have to be able to fill you chalice  " +
                "with his cum. The girls get to pick how to make them cum. Too many boys with huge penises were " +
                "picking the smallest girls and ramming it up their dirty dry butthole. So Ubel agreed that the girls get " +
                "to pick it how they receive the cum. ",
            button: [
                { chatID: 6, text: "That was nice of him. ", callback: "" }
            ]
        },
        {
            chatID: 6,
            speaker: "!milkmaid",
            text: "Oh no! He threatened to lock us all up like you sissies. We really had to work on him. A lot." +
                "That's why Room One is special. They can do what ever they like to the girls, but we " +
                "only send our best... and those that like the rough play. ",
            button: [
                { chatID: 7, text: "What if the boys get too rough and try to do something I don't want. ", callback: "" }
            ]
        },
        {
            chatID: 7,
            speaker: "!milkmaid",
            text: "They wouldn't dare! No one defies Ubel. Terrible things happen to those few that have " +
                "tried. The swamp is full of bodies that pissed him off. You don't have to worry.",
            button: [
                { chatID: 8, text: "Ok good. ", callback: "" }
            ]
        },
        {
            chatID: 8,
            speaker: "!milkmaid",
            text: "I'm going to take you each day, but them I have to go to Room One. Ubel has a standing " +
                "request for me, hehe. I do kegels every day to keep him happy so he lets me keep the girls " +
                "safe. Now let's see what those boys have for you in Milking Room Four.",
            button: [
                { chatID: 9, text: "[Follow her]", callback: "milk0" }
            ]
        },
        {
            chatID: 9,
            speaker: "!milkmaid",
            text: "Ok girls, get all the CUM you can! ",
            button: [
                { chatID: -1, text: "[Wait for a boy to pick you]", callback: "start" }
            ]
        },
        {
            chatID: 10,
            speaker: "bigguy",
            text: "It's where we invite a bunch of the guys from CUM over and we fuck them all! Hahaha! " +
                "Also, the best part is I told them they are not longer allowed to use birth control. " +
                "Women are made to cook and raise children, not work or go to school. ",
            button: [
                { chatID: 11, text: "You bastard!", callback: "" }
            ]
        },
        {
            chatID: 11,
            speaker: "bigguy",
            text: "Hahah, maybe. Now we just have to wait till and see if you get a pussy too so you can stay home " +
                "and raise kids too. Now drain my balls, hole. ",
            button: [
                { chatID: -1, text: "*grrr*", callback: "choices" }
            ]
        },
        {
            chatID: 12,
            speaker: "bigguy",
            text: "That's right kid. I'm your " + sc.n("landlord") + "'s fucker! Hahaha! Even got her to " +
                "take it up the ass. Love how she just lets me do whatever I want to her. I don't even " +
                "have to get up from the couch when I have to piss. She just gulps it down. Love that " +
                "fat slut. Too bad you'll never get home to see them again, hahaha. Now take my cum, whore. ",
            button: [
                { chatID: -1, text: "*grrr*", callback: "choices" }
            ]
        },
        {
            chatID: 13,
            speaker: "thinking",
            text: "My boobs are too small to give a boob job. ",
            button: [
                { chatID: -1, text: "*sigh*", callback: "" }
            ]
        },
        {
            chatID: 14,
            speaker: "cult",
            text: "Ok worm! Leave your chalice and go back to your cell!  ",
            button: [
                { chatID: -1, text: "*sigh*", callback: "leave" }
            ]
        },
        {
            chatID: 15,
            speaker: "cult",
            text: "Are you ready to give your offering?",
            button: [
                { chatID: 16, text: "My offering?", callback: "" }
            ]
        },
        {
            chatID: 16,
            speaker: "cult",
            text: "Yes. We all must do our part to bring the coming of Azreal, and you must do your part. Now come. ",
            button: [
                { chatID: 17, text: "[Follow her]", callback: "milk1" }
            ]
        },
        {
            chatID: 17,
            speaker: "me",
            text: "What is this? Please don't put me up there! *whimper*",
            button: [
                { chatID: 18, text: "...", callback: "milk2" }
            ]
        },
        {
            chatID: 18,
            speaker: "cult",
            text: "All must give to Azreal, now up on the chains you before you also give the gift of pain. ",
            button: [
                { chatID: 19, text: "...", callback: "milk3" }
            ]
        },
        {
            chatID: 19,
            speaker: "me",
            text: "Now what? What are you going to do to us? Let me down.",
            button: [
                { chatID: 20, text: "...", callback: "" }
            ]
        },
        {
            chatID: 20,
            speaker: "!man",
            text: "Hey! New person. Relax. This is the best part. ",
            button: [
                { chatID: 21, text: "What do you mean? Are they going to torture us?", callback: "" }
            ]
        },
        {
            chatID: 21,
            speaker: "!man",
            text: "Just relax and enjoy it. Also you're giving me a giant headache whining and whimpering, so just be quiet. ",
            button: [
                { chatID: 22, text: "[Hang your head in defeat]", callback: "milk5" }
            ]
        },
        {
            chatID: 22,
            speaker: "thinking",
            text: "Oh no, what is this?",
            button: [
                { chatID: 23, text: "...", callback: "milk6" }
            ]
        },
        {
            chatID: 23,
            speaker: "thinking",
            text: "Is she sucking my dick? ",
            button: [
                { chatID: 24, text: "?", callback: "" }
            ]
        },
        {
            chatID: 24,
            speaker: "thinking",
            text: "She's sucking my dick!",
            button: [
                { chatID: 25, text: "!", callback: "milk7" }
            ]
        },
        {
            chatID: 25,
            speaker: "me",
            text: "UNGH!",
            button: [
                { chatID: 26, text: "...", callback: "milk8" }
            ]
        },
        {
            chatID: 26,
            speaker: "!milkmaid",
            text: "First! ",
            button: [
                { chatID: 27, text: "What are you doing with my cum?", callback: "milk9" }
            ]
        },
        {
            chatID: 27,
            speaker: "cult",
            text: "Now time for you to clean up slave!",
            button: [
                { chatID: 32, text: "...", callback: "clean0" }
            ]
        },
        {
            chatID: 28,
            speaker: "cult",
            text: "Time to make your offering. ",
            button: [
                { chatID: 29, text: "...", callback: "milk6" }
            ]
        },
        {
            chatID: 29,
            speaker: "thinking",
            text: "At least this part isn't so bad...",
            button: [
                { chatID: 30, text: "...", callback: "milk7" }
            ]
        },
        {
            chatID: 30,
            speaker: "me",
            text: "ugh! ",
            button: [
                { chatID: 31, text: "...", callback: "milk8" }
            ]
        },
        {
            chatID: 31,
            speaker: "!milkmaid",
            text: "The offering!",
            button: [
                { chatID: 36, text: "...", callback: "clean0" }
            ]
        },
        {
            chatID: 32,
            speaker: "cult",
            text: "Welcome to room six. Slaves are assinged to take all the cum chalices and fill the bucket. Then " +
                "scrape the cum off the floor and walls and put that in the bucket too! Once the cum bucket is " +
                "full clean this room from top to bottom so it's prepared for the next donation event. ",
            button: [
                { chatID: 33, text: "!", callback: "clean1" }
            ]
        },
        {
            chatID: 33,
            speaker: "thinking",
            text: "Holy crap, it smells so much in here! It smells like rotten pussy, assholes, and cum! *sigh* " +
                "I guess I better get to work cleaning all this cum up. ",
            button: [
                { chatID: 34, text: "...", callback: "clean2" }
            ]
        },
        {
            chatID: 34,
            speaker: "thinking",
            text: "Such bullshit.  ",
            button: [
                { chatID: 35, text: "...", callback: "clean3" }
            ]
        },
        {
            chatID: 35,
            speaker: "cult",
            text: "Took you long enough you stupid slave. Back your your cell. Go!",
            button: [
                { chatID: -1, text: "*grrr*", callback: "leave" }
            ]
        },
        {
            chatID: 36,
            speaker: "cult",
            text: "Now clean the cum room you dumb slave. And don't let me catch you eating any of it! ",
            button: [
                { chatID: 34, text: "*sigh*", callback: "clean2" }
            ]
        },
        {
            chatID: 37,
            speaker: "!milkmaid",
            text: "Let's go. Time to milk some cocks. ",
            button: [
                { chatID: 9, text: "Oh YES!!!!!", callback: "milk0" },
                { chatID: 9, text: "*sigh*", callback: "milk0" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};