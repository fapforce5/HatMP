//Room name

var room776 = {};
room776.main = function () {
    if (sc.getMission("priest", "*closed").startedOrComplete) {
        if (sc.getMissionTask("priest", "*closed", 0).success) {
            nav.button({
                "type": "img",
                "name": "fatnun",
                "left": 1131,
                "top": 64,
                "width": 502,
                "height": 1016,
                "image": "776_church/fatnun.webp"
            }, 776);
            chat(65, 776);
        }
        else {
            nav.bg("map/776_close.jpg", "map/776_closenight.jpg");
            chat(66, 776);
        }
        return;
    }
    if (!g.isNight()) {
        if (sc.getMissionTask("priest", "confession", 13).complete) {
            nav.button({
                "type": "btn",
                "name": "fatnun",
                "left": 1131,
                "top": 64,
                "width": 502,
                "height": 1016,
                "image": "776_church/fatnun.webp"
            }, 776);

        }
        else {
            if (!daily.get("nun")) {
                if (!sc.getSecret("nun").secretOut) {
                    if (cl.appearance() > 1) {
                        sc.modSecret("nun", 100);
                    }
                }
                nav.button({
                    "type": "btn",
                    "name": "nun",
                    "left": 913,
                    "top": 27,
                    "width": 940,
                    "height": 1053,
                    "image": "776_church/nun.webp"
                }, 776);
                if (cl.c.chastity === null) {
                    nav.button({
                        "type": "grab",
                        "name": "nuntits",
                        "left": 1324,
                        "top": 417,
                        "width": 204,
                        "height": 104,
                        "image": "776_church/nuntits.webp"
                    }, 776);
                }
            }
        }
        if (missy.getenvelope("priest").active) {
            chat(33, 776);
        }
    }
    else if (missy.getenvelope("priest").active) {
        sc.select("icon_sneak", "776_church/icon_sneak.webp", 1);
    }
    sc.select("pray", "776_church/pray.webp", 0);
    nav.buildnav([0]);
};

room776.btnclick = function (name) {
    switch (name) {
        case "pray":
            nav.kill();
            chat(0, 776);
            break;
        case "fatnun":
            if (cl.stinky())
                chat(32, 776);
            else
                chat(31, 776);
            break;
        case "nun":
            chat(11, 776);
            break;
        case "nuntits":
            daily.set("nun");

            if (cl.stinky()) {
                chat(29, 776);
                return;
            }
            if (sc.getSecret("nun").secretOut) {
                chat(30, 776);
                return;
            }
            switch (sc.taskGetStep("nun", "sin")) {
                case -1:
                case 0:
                    sc.show("nun");
                    sc.startMission("nun", "sin");
                    sc.completeMissionTask("nun", "sin", 0);
                    nav.modbutton("nun", "776_church/nun1.webp", null, null);
                    nav.killbutton("nuntits");
                    chat(12, 776);
                    break;
                case 1:
                    nav.modbutton("nun", "776_church/nun1.webp", null, null);
                    nav.killbutton("nuntits");
                    chat(13, 776);
                    break;
                default:
                    nav.modbutton("nun", "776_church/nun1.webp", null, null);
                    nav.killbutton("nuntits");
                    chat(24, 776);
                    break;
            }
            break;
        case "icon_sneak":
            nav.kill();
            nav.bg("776_church/hall.webp");
            sc.select("icon_office", "776_church/icon_office.webp", 0);
            sc.select("icon_basement", "776_church/icon_basement.webp", 1);
            sc.select("icon_leave", "316_livingroom/icon_leave.png", 2);
            break;
        case "icon_leave":
            char.room(0);
            break;
        case "icon_basement":
            nav.kill();
            nav.bg("776_church/hall_lock.webp");
            chat(34, 776);
            break;
        case "icon_office":
            nav.killall();
            nav.bg("776_church/office.webp");
            nav.button({
                "type": "grab",
                "name": "lockbox",
                "left": 888,
                "top": 692,
                "width": 140,
                "height": 65,
                "image": "776_church/box.webp"
            }, 776);
            nav.button({
                "type": "grab",
                "name": "book",
                "left": 794,
                "top": 756,
                "width": 135,
                "height": 45,
                "image": "776_church/book.webp"
            }, 776);
            nav.back("icon_sneak");
            break;
        case "book":
            nav.kill();
            revents.cultbook(776, "icon_office");
            break;
        case "lockbox":
            chat(64, 776);
            break;
        case "picklocklose":
            chat(35, 776);
            break;
        case "picklockwin":
            chat(36, 776);
            break;
        case "fightwin":
            nav.kill();
            nav.bg("776_church/basement5.webp");
            chat(48, 776);
            break;
        case "fightlose":
            nav.kill();
            nav.bg("999_phone/black.jpg");
            chat(54, 776);
            break;
        case "fightrun":
            nav.kill();
            nav.bg("map/776_close.jpg", "map/776_closenight.jpg");
            chat(57, 776);
            break;
        default:
            break;
    }
};

room776.chatcatch = function (callback) {
    switch (callback) {
        case "nun_0":
        case "nun_1":
        case "nun_2":
        case "nun_3":
        case "nun_4":
        case "nun_5":
        case "basement0":
        case "basement2":
        case "basement6":
        case "basement7":
        case "basement8":
            nav.killall();
            nav.bg("776_church/" + callback + ".webp");
            break;
        case "basement3":
            if (missy.getenvelope("priest").hasKey) {
                nav.bg("776_church/basement3.webp");
                chat(45, 776);
            }
            else {
                nav.bg("776_church/basement4.webp");
                chat(47, 776);
            }
            missy.setenvelope("priest");
            break;
        case "confess-1":
            nav.bg("776_church/confess.webp");
            trophy.add(35);
            sc.completeMissionTask("nun", "sin", 1);
            sc.startMissionTask("priest", "confession", 13);
            levels.fuckpussy("nun");
            break;
        case "reset":
            char.room(776);
            break;
        case "popular":
            if (daily.get("pray_popular"))
                chat(2, 776);
            else {
                daily.set("pray_popular");
                levels.mod("fame", 15);
                chat(3, 776);
            }
            break;
        case "charaisma":
            if (daily.get("pray_charaisma"))
                chat(2, 776);
            else {
                daily.set("pray_charaisma");
                levels.mod("charisma", 15);
                chat(3, 776);
            }
            break;
        case "pi":
            if (levels.get("pi").l < 1) {
                chat(7, 776);
            }
            if (!inv.has("lockpick")) {
                chat(6, 776);
            }
            else if (daily.get("pray_pi"))
                chat(2, 776);
            else {
                daily.set("pray_pi");
                levels.modLevel("pi", -1, false, true);
                chat(3, 776);
            }
            break;
        case "strength":
            if (levels.get("strength").l < 1) {
                chat(9, 776);
            }
            if (sc.getMission("g", "secret").notStarted) {
                chat(10, 776);
            }
            else if (daily.get("pray_strength"))
                chat(2, 776);
            else {
                daily.set("pray_strength");
                levels.modLevel("strength", -1, false, true);
                chat(3, 776);
            }
            break;
        case "nunComplete":
            if (sc.getMission("nun", "sin").inProgress) {
                sc.completeMissionTask("nun", "sin", 2);
                sc.completeMission("nun", "sin");
            }
            levels.fuckpussy("nun");
            char.room(776);
            break;
        case "killnun":
            nav.killbutton("nun");
            break;
        case "icon_sneak":
            room776.btnclick("icon_sneak");
            break;
        case "picklock":
            lockpick.init(4, "picklockwin", "picklocklose", 60, 776);
            break;
        case "basement1":
            if (sc.getMission("nun", "*sin").startedOrComplete) {
                nav.bg("776_church/basement1.webp");
                chat(38, 776);
            }
            else {
                nav.bg("776_church/basement9.webp");
                chat(58, 776);
            }
            break;
        case "fight":
            quickFight.init(8, sc.n("priest"), "fightwin", "fightlose", "fightrun", 776);
            break;
        case "savethenun":
            trophy.add(34);
            missy.setenvelope("priest");
            sc.startMission("priest", "*closed");
            sc.completeMissionTask("priest", "*closed", 1);
            char.addtime(180);
            char.room(0);
            break;
        case "orgycode":
            if (missy.getenvelope("priest").hasKey) {
                chat(61, 776);
            }
            else {
                chat(63, 776);
            }
            missy.setenvelope("priest");
            break;
        case "badend":
            g.pass = "776kidnapped";
            char.room(975);
            break;
        case "nolongerwelcom":
            missy.setenvelope("priest");
            sc.startMission("priest", "*closed");
            sc.completeMissionTask("priest", "*closed", 0);
            char.addtime(180);
            char.room(0);
            break;
        case "leave":
            char.addtime(15);
            char.room(0);
            break;
        default:
            break;
    }
};

room776.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "thinking",
            text: "Let's see if this praying thing really works",
            button: [
                { chatID: 5, text: "Be a dumb bimbo", callback: "" },
                { chatID: 8, text: "Be a weak bimbo", callback: "" },
                { chatID: 4, text: "Be a charismatic bimbo", callback: "" },
                { chatID: 1, text: "Be a popular bimbo", callback: "" },
                { chatID: -1, text: "Stop praying", callback: "reset" },
            ]
        },
        {
            chatID: 1,
            speaker: "thinking",
            text: "Please please please make every one know a cock hungry slut " +
                "I am! I want to be the most famous slut in the city!",
            button: [
                { chatID: -1, text: "...", callback: "popular" },
            ]
        },
        {
            chatID: 2,
            speaker: "thinking",
            text: "Drat! I don't think that worked. Maybe I'm praying too much. ",
            button: [
                { chatID: 0, text: "...", callback: "" },
            ]
        },
        {
            chatID: 3,
            speaker: "thinking",
            text: "I don't know why, but I feel it worked!",
            button: [
                { chatID: 0, text: "...", callback: "" },
            ]
        },
        {
            chatID: 4,
            speaker: "thinking",
            text: "Please please please make me be a more charismatic and less " +
                "awkward around people so I can get more dates!",
            button: [
                { chatID: -1, text: "...", callback: "charaisma" },
            ]
        },
        {
            chatID: 5,
            speaker: "thinking",
            text: "Please please please make me a dumb bimbo! I don't want to be " +
                "smart, I just want to turn my brain off and be a mindless fuck doll! ",
            button: [
                { chatID: -1, text: "...", callback: "pi" },
            ]
        },
        {
            chatID: 6,
            speaker: "thinking",
            text: "Drat! I don't think that worked. ",
            button: [
                { chatID: 0, text: "[Need to unlock lock pick event with Missy first]", callback: "" },
            ]
        },
        {
            chatID: 7,
            speaker: "thinking",
            text: "Hehehe! I'm already a brain dead bimbo! I can't get any dumber! ",
            button: [
                { chatID: 0, text: "...", callback: "" },
            ]
        },
        {
            chatID: 8,
            speaker: "thinking",
            text: "Please please please make me a weak bimbo slut! If anyone wants to " +
                "force their dick into me, I don't want to be able to fight back no matter " +
                "how much I don't want to get fucked!",
            button: [
                { chatID: -1, text: "...", callback: "strength" },
            ]
        },
        {
            chatID: 9,
            speaker: "thinking",
            text: "I'm already a weak bimbo slut! I couldn't fight off a fly if it " +
                "wanted to bend me over and fuck my ass!",
            button: [
                { chatID: 10, text: "...", callback: "" },
            ]
        },
        {
            chatID: 10,
            speaker: "thinking",
            text: "Drat! I don't think that worked. ",
            button: [
                { chatID: 0, text: "[Need to unlock back gym first]", callback: "" },
            ]
        },
        {
            chatID: 11,
            speaker: "nun",
            text: "Welcome. Why don't you find a spot to pray and find holiness. ",
            button: [
                { chatID: -1, text: "I will", callback: "" },
            ]
        },
        {
            chatID: 12,
            speaker: "nun",
            text: "Oh my! Ohhhh. oh my. oh. Uhhh. wow. I've never been touched there " +
                "before. I uh... I don't know. You shouldn't. You are cute.. I mean " +
                "ummm. oh my. I need to pray.",
            button: [
                { chatID: -1, text: "hehehe", callback: "killnun" },
            ]
        },
        {
            chatID: 13,
            speaker: "nun",
            text: "Oh! I'm so dirty! dirty dirty dirty. I must go pray!",
            button: [
                { chatID: 14, text: "hehe", callback: "killnun" },
            ]
        },
        {
            chatID: 14,
            speaker: "thinking",
            text: "That was really rude. I should go apologize for grabbing her " +
                "tits twice now. I can really be a horny ass sometimes. I'm pretty " +
                "sure she went in the confessional.",
            button: [
                { chatID: 15, text: "I should go apologize. ", callback: "nun_0" },
                { chatID: -1, text: "I molested her enough for one day ", callback: "" },
            ]
        },
        {
            chatID: 15,
            speaker: "me",
            text: "I'm sorry, I just wanted to say....",
            button: [
                { chatID: 16, text: "....", callback: "nun_1" },
            ]
        },
        {
            chatID: 16,
            speaker: "nun",
            text: "...",
            button: [
                { chatID: 17, text: "....", callback: "" },
            ]
        },
        {
            chatID: 17,
            speaker: "me",
            text: "...",
            button: [
                { chatID: 18, text: "....", callback: "" },
            ]
        },
        {
            chatID: 18,
            speaker: "nun",
            text: "...",
            button: [
                { chatID: 19, text: "[Take your dick out]", callback: "nun_2" },
                { chatID: -1, text: "[Respectfully leave]", callback: "reset" },
            ]
        },
        {
            chatID: 19,
            speaker: "nun",
            text: "*squeal* I shouldn't... I-I-I took a vow of celibacy... oooOOoooo. " +
                "Oh fiddle sticks! I need it so bad! You have no idea! Please keep it " +
                "quiet and don't tell ANYONE. I can't get found out",
            button: [
                { chatID: 20, text: "[Fuck that virgin pussy]", callback: "nun_3" },
            ]
        },
        {
            chatID: 20,
            speaker: "thinking",
            text: "She's so enthusiastic for a virgin. Just amazing! A little awkward, " +
                "but damn it's wet and tight. Think of something so I don't cum... My " +
                "grandma naked.. gross.. why am I thinking of my naked grandma.. fuck it.. I'm just going to " +
                "cum!",
            button: [
                { chatID: 21, text: "[Fill her virgin pussy with cum]", callback: "nun_4" },
            ]
        },
        {
            chatID: 21,
            speaker: "thinking",
            text: "I can feel your penis filling my womb! This is so much better than " +
                "using my fingers! I love your penis so much!",
            button: [
                { chatID: 22, text: "...", callback: "nun_5" },
            ]
        },
        {
            chatID: 22,
            speaker: "nun",
            text: "I really really have to go. I'm going to be in so much trouble if anyone " +
                "knew. I had a really lovely time, please don't be mad that I used you, just " +
                "don't tell anyone. Sorry. Bye",
            button: [
                { chatID: 23, text: "bye", callback: "confess-1" },
            ]
        },
        {
            chatID: 23,
            speaker: "thinking",
            text: "THAT WAS SO HOT! I just took a nun's virginity in a confession " +
                "booth! I'm going to go to hell, but at least the devil will give me " +
                "a high five! ",
            button: [
                { chatID: -1, text: "...", callback: "reset" },
            ]
        },
        {
            chatID: 24,
            speaker: "nun",
            text: "We can't keep doing this. You need to go. ",
            button: [
                { chatID: -1, text: "You're right. Sorry for bothering you", callback: "" },
                { chatID: 25, text: "If you don't let me fuck you, I'm going to tell your secret", callback: "" },
            ]
        },
        {
            chatID: 25,
            speaker: "nun",
            text: "You wouldn't.",
            button: [
                { chatID: 26, text: "I would. Now get in the confession booth and ride my dick.", callback: "nun_3" },
            ]
        },
        {
            chatID: 26,
            speaker: "nun",
            text: "Please forgive me for my sins, please forgive me for my sins",
            button: [
                { chatID: 27, text: "...", callback: "nun_4" },
            ]
        },
        {
            chatID: 27,
            speaker: "nun",
            text: "Please forgive me, but it feels soooo good. ",
            button: [
                { chatID: 28, text: "...", callback: "nun_5" },
            ]
        },
        {
            chatID: 28,
            speaker: "nun",
            text: "Oh no! I did it again. I'm such a sinful nun! ",
            button: [
                { chatID: -1, text: "...", callback: "nunComplete" },
            ]
        },
        {
            chatID: 29,
            speaker: "nun",
            text: "Oh my. You're really stinky. I think I just threw up in my mouth a " +
                "little. I've got to go rinse out. ",
            button: [
                { chatID: -1, text: "Oh. I probably should shower. ", callback: "reset" },
            ]
        },
        {
            chatID: 30,
            speaker: "nun",
            text: "Hehehe. I guess since we're both girls that's ok. But you really " +
                "shouldn't grab someone's breasts. I'm going to pray for your soul. ",
            button: [
                { chatID: -1, text: "Oh sorry. ", callback: "reset" },
            ]
        },
        {
            chatID: 31,
            speaker: "!fatnun",
            text: "Like all God's creatures you're free to sit and pray. You, however, " +
                "should pray extra hard since your sins are greater than most. ",
            button: [
                { chatID: -1, text: "Thanks?", callback: "" },
            ]
        },
        {
            chatID: 32,
            speaker: "!fatnun",
            text: "You stink, just like your sinful actions. ",
            button: [
                { chatID: -1, text: "rude much?", callback: "" },
            ]
        },
        {
            chatID: 33,
            speaker: "thinking",
            text: "He's not going to just give me the code. I should come in at night and see if I can " +
                "find anything. I know this priest is dirty, I just need to prove it. ",
            button: [
                { chatID: -1, text: "...", callback: "" },
            ]
        },
        {
            chatID: 34,
            speaker: "thinking",
            text: "Drat! It's locked. Really well. ",
            button: [
                { chatID: -1, text: "[Pick the lock]", callback: "picklock" },
                { chatID: -1, text: "[Try something else]", callback: "icon_sneak" },
            ]
        },
        {
            chatID: 35,
            speaker: "thinking",
            text: "Damn. That lock is hard! ",
            button: [
                { chatID: -1, text: "[Try again]", callback: "picklock" },
                { chatID: -1, text: "[Try something else]", callback: "icon_sneak" },
            ]
        },
        {
            chatID: 36,
            speaker: "thinking",
            text: "Let's see what's down here. Nothing crazy I hope...",
            button: [
                { chatID: 37, text: "[Enter the basement]", callback: "basement0" },
            ]
        },
        {
            chatID: 37,
            speaker: "thinking",
            text: "Another locked door? Someone's trying to keep a secret. ",
            button: [
                { chatID: -1, text: "[Pick the lock and enter the room]", callback: "basement1" },
            ]
        },
        {
            chatID: 38,
            speaker: "priest",
            text: "Oh! What are you doing here?  ",
            button: [
                { chatID: 39, text: "What am I doing here? What are you doing!", callback: "" },
            ]
        },
        {
            chatID: 39,
            speaker: "priest",
            text: "This is my church and my flock. I am simply leading my people by the word of God. " +
                "You are no longer welcome under my roof. I know what you've done and God is displeased. " +
                "No amount of confession will absolve you of your wicked sins! ",
            button: [
                { chatID: 40, text: "My sins? You have a pregnant woman tied up! ", callback: "" },
            ]
        },
        {
            chatID: 40,
            speaker: "priest",
            text: "She is just another example of your sins. This was the nun you turned to satan and " +
                "impregnated. Another one of my sheep that suffers for your sins. So if you don't " +
                "mind I'm going to return to punishing her. I don't care where you go, but you are no " +
                "longer welcome as part of my flock. ",
            button: [
                { chatID: 41, text: "You let her go! ", callback: "" },
            ]
        },
        {
            chatID: 41,
            speaker: "priest",
            text: "She's here of her own volition. " + sc.n("nun") + ", tell this sinner that you wish to stay " +
                "tell him you are where you belong. ",
            button: [
                { chatID: 42, text: "...", callback: "" },
            ]
        },
        {
            chatID: 42,
            speaker: "nun",
            text: "I have sinned. I deserve to be where I am...",
            button: [
                { chatID: 43, text: "...", callback: "" },
            ]
        },
        {
            chatID: 43,
            speaker: "priest",
            text: "You have no business here. Now begone before I involve that simpleton, " + sc.n("ubel") +
                ", and his squad of goons to take care of you! ",
            button: [
                { chatID: 44, text: "I will leave, but only if you tell me the code to the back door of C.U.M.", callback: "" },
                { chatID: -1, text: "I'm not leaving her here with you! [Fight chance: " + quickFight.getStats(8, 100).winProb + "]", callback: "fight" },
            ]
        },
        {
            chatID: 44,
            speaker: "priest",
            text: "Fine. Follow me up to my office. ",
            button: [
                { chatID: -1, text: "[Follow him]", callback: "basement3" },
            ]
        },
        {
            chatID: 45,
            speaker: "priest",
            text: "I knew you would see reason. Even a soul wrapped in the coils of Satan can find God's light. " +
                "The code for the back door is 1-2-3-4-5. Now, if you'll excuse me, I have actual souls to save.",
            button: [
                { chatID: -1, text: "Thanks. You get back to punishing that nun. [Leave]", callback: "nolongerwelcom" },
            ]
        },
        {
            chatID: 46,
            speaker: "priest",
            text: "noop",
            button: [
                { chatID: -1, text: "...", callback: "" },
            ]
        },
        {
            chatID: 47,
            speaker: "priest",
            text: "A fool to the last. Gentlemen, take the garbage out. " + gender.pronoun("he") + 
                " is no longer welcome in this place of worship. ",
            button: [
                { chatID: -1, text: "Grrr! Someday you'll pay for all this!", callback: "nolongerwelcom" },
            ]
        },
        {
            chatID: 48,
            speaker: "nun",
            text: "Did.. Did you just punch out " + sc.n("priest") + "? ",
            button: [
                { chatID: 49, text: "Yes. I suppose I did.", callback: "" },
            ]
        },
        {
            chatID: 49,
            speaker: "nun",
            text: "Are you going to rape me again? If you do, please don't touch my butt. It hurts so much. ",
            button: [
                { chatID: 50, text: "What? No. Not a chance. I'm going to free you! I never raped you.", callback: "basement6" },
            ]
        },
        {
            chatID: 50,
            speaker: "nun",
            text: sc.n("priest") + " said you did. You used the power of satan to trick and seduce me against " +
                "my will. That's why I had to be punished. I have the power of satan over me and punishment " +
                "is the only way to save my child. ",
            button: [
                { chatID: 52, text: "Oh wow. Ok. How about this. Let me call the police. Hopefully they can help. [Call the police]", callback: "basement7" },
            ]
        },
        {
            chatID: 51,
            speaker: "nun",
            text: "noop",
            button: [
                { chatID: 52, text: "", callback: "basement7" },
            ]
        },
        {
            chatID: 52,
            speaker: "wyatt",
            text: "Thank you for the call. That poor nun is going to take years of therapy to get over " +
                "the ghastly events that happened to her. Turns out " + sc.n("priest") + " was also helping C.U.M. out with " +
                "some app. ",
            button: [
                { chatID: 53, text: "Some app?", callback: "" },
            ]
        },
        {
            chatID: 53,
            speaker: "wyatt",
            text: "Yes, the church was providing the names to C.U.M. with " +
                "this Purity app in return for sex and money. As an avid member of the church this bust " +
                "really hurts. I'm just glad you notified us before more young men ended up being taken " +
                "away by that cult. Anyway I've got to get back to the scene. ",
            button: [
                { chatID: -1, text: "Bye ", callback: "savethenun" },
            ]
        },
        {
            chatID: 54,
            speaker: "thinking",
            text: "Ohhh, my head! I can't believe I lost a fight with that wimp... ",
            button: [
                { chatID: 55, text: "[Open your eyes]", callback: "basement8" },
            ]
        },
        {
            chatID: 55,
            speaker: "river",
            text: "Well well well. Look who finally woke up. ",
            button: [
                { chatID: 56, text: sc.n("river") + "!", callback: "" },
            ]
        },
        {
            chatID: 56,
            speaker: "river",
            text: "We were going to leave you alone until the heat died off, but not now. Can't have you " +
                "messing with our friend " + sc.n("priest") + ". Let's take you back to your new home so " +
                "we can all take turns on you then throw you in the swamps. " +
                "I'm going to enjoy this more than you know. Hehehe",
            button: [
                { chatID: -1, text: "...fuck", callback: "badend" },
            ]
        },
        {
            chatID: 57,
            speaker: "thinking",
            text: "Crap! That was scary. I need to avoid this place from now on. " + sc.n("priest") +
                " now knows that I know all his secrets. ",
            button: [
                { chatID: -1, text: "[Leave]", callback: "nolongerwelcom" },
            ]
        },
        {
            chatID: 58,
            speaker: "priest",
            text: "*ugh* What are you doing here? ",
            button: [
                { chatID: 59, text: "What are you doing here? ", callback: "" },
            ]
        },
        {
            chatID: 59,
            speaker: "!butler",
            text: "*sigh* Can you two wrap this up. My boner pills won't last forever. ",
            button: [
                { chatID: 60, text: "Oh. " + sc.n("priest") + " do you have the code for the back door to C.U.M.?", callback: "" },
            ]
        },
        {
            chatID: 60,
            speaker: "!rex",
            text: "You came here for some stupid code. " + sc.n("priest") + " just give 'em the code so " +
                "we can have our fun!",
            button: [
                { chatID: -1, text: "...", callback: "orgycode" },
            ]
        },
        {
            chatID: 61,
            speaker: "priest",
            text: "*ugh* It's 1-2-3-4-5. Now get so we may enjoy ourselves. ",
            button: [
                { chatID: -1, text: "Ok. Thanks!", callback: "leave" },
                { chatID: 62, text: "So, uh. Can I join you?", callback: "" },
            ]
        },
        {
            chatID: 62,
            speaker: "!butler",
            text: "Gross, no. You have your answer, now go before I lose my boner. ",
            button: [
                { chatID: -1, text: "ok ok. I'm going", callback: "leave" },
            ]
        },
        {
            chatID: 63,
            speaker: "priest",
            text: "How would I know? I'm not a member of C.U.M. Now if you don't mind. ",
            button: [
                { chatID: -1, text: "Ok. Thanks, bye!", callback: "leave" },
                { chatID: 62, text: "So, uh. Can I join you?", callback: "" },
            ]
        },
        {
            chatID: 64,
            speaker: "thinking",
            text: "Locked, and my lock pick won't fit a lock of this size. ",
            button: [
                { chatID: -1, text: "...", callback: "" },
            ]
        },
        {
            chatID: 65,
            speaker: "!fatnun",
            text: "I was told that our doors are closed to you. I give you blessing on your journey outside " +
                "the church. ",
            button: [
                { chatID: -1, text: "Drat!", callback: "leave" },
            ]
        },
        {
            chatID: 66,
            speaker: "thinking",
            text: "The church is locked up tight and closed. ",
            button: [
                { chatID: -1, text: "...", callback: "leave" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};

invoker.registerRoom(776, room776);
