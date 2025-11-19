




//Must pass through the Dozen Degrading Doors
//Do you want to play a game
//doll maker working with the mad professor from the woods
//1. shoe on head
//2. grow breasts
//3. grow butt
//4. grow lips
//5. dildo in butt
//6. dance like a fool
//7. get peed on
//8. tell a guy you're a giant whore
//9. slime falls from the celing
//10. wear a stupid outfit
//11. clown makup level 3
//12. drink a big cup of horse semen level 11
//13. drink a big cup of pig semen level 11
//14. moon the camera
//15. shrink penis
//16. wear clown shoes
//17. lick a horse penis level 12
//18. suck off a pig level 12
//19. hug a weird doll
//20. Yell "I'm a sissy cocksucker!" level 1
//21. eat a cum fart

//posters go up around town - raises fame
var room486 = {};
room486.main = function () {
    gv.mod("486gamecounter", 1);
    g.internal = {
        r: 0,
        inst: false,
        greenbutton: false,
        r1: g.rand(0, 3),
        r2: 0,
        r3: -1
    };
    nav.button({
        "type": "img",
        "name": "bg-door",
        "left": 672,
        "top": 158,
        "width": 703,
        "height": 604,
        "image": "486_game/r_openholder.webp"
    }, 486);
    room486.btnclick("drawbtns");
    nav.button({
        "type": "img",
        "name": "room0",
        "left": 0,
        "top": 0,
        "width": 1920,
        "height": 1080,
        "image": "486_game/room0.webp"
    }, 486);
    chat(0, 486);
};

room486.btnclick = function (name) {
    switch (name) {
        case "drawbtns":
            nav.killbutton("mask");
            nav.killbutton("redbutton");
            nav.killbutton("greenbutton");
            nav.button({
                "type": "hand",
                "name": "mask",
                "left": 1398,
                "top": 463,
                "width": 100,
                "height": 180,
                "image": "486_game/m" + g.internal.r + ".webp"
            }, 486);
            nav.killbutton("redbutton");
            nav.killbutton("greenbutton");
            nav.button({
                "type": "hand",
                "name": "redbutton",
                "left": 852,
                "top": 444,
                "width": 94,
                "height": 102,
                "image": "486_game/redbutton.webp"
            }, 486);
            if (g.internal.greenbutton)
                nav.button({
                    "type": "hand",
                    "name": "greenbutton",
                    "left": 1156,
                    "top": 444,
                    "width": 94,
                    "height": 102,
                    "image": "486_game/greenbutton.webp"
                }, 486);
            else
                nav.button({
                    "type": "hand",
                    "name": "greenbutton",
                    "left": 1156,
                    "top": 444,
                    "width": 94,
                    "height": 102,
                    "image": "486_game/greenbuttonx.webp"
                }, 486);
            break;
        case "initroom":
            switch (g.internal.r) {
                case 2:
                    nav.button({
                        "type": "grab",
                        "name": "room2",
                        "left": 968,
                        "top": 850,
                        "width": 129,
                        "height": 168,
                        "image": "486_game/room2.webp"
                    }, 486);
                    break;
                case 4:
                    nav.button({
                        "type": "clickthrough",
                        "name": "room4",
                        "left": 0,
                        "top": 0,
                        "width": 1920,
                        "height": 1080,
                        "image": "486_game/room4.webp"
                    }, 486);
                    break;
            }
            break;
        case "mask":
            switch (g.internal.r) {
                case 0: chat(5, 486); break;
                case 1: chat(1001, 486); break;
                case 2: chat(1002, 486); break;
                case 3: chat(1003, 486); break;
                case 4: chat(1004, 486); break;
            }
            break;
        case "redbutton":
            //if (g.internal.r === 0) {
            //    chat(5, 486);
            //}
            break;
        case "greenbutton":
            if (g.internal.greenbutton) {
                nav.killbutton("redbutton");
                nav.killbutton("greenbutton");
                nav.modbutton("mask", "486_game/m" + g.internal.r + ".webp", null, "img");
                nav.modbutton("bg-door", "486_game/r_open.webp", null, null);
                g.roomTimeout = setTimeout(function () {
                    nav.killall();
                    g.internal.r++;
                    g.internal.inst = false;
                    g.internal.greenbutton = false;
                    nav.bg("486_game/r" + g.internal.r + ".webp");
                    nav.button({
                        "type": "img",
                        "name": "bg-door",
                        "left": 672,
                        "top": 158,
                        "width": 703,
                        "height": 604,
                        "image": "486_game/r_openholder.webp"
                    }, 486);
                    room486.btnclick("drawbtns");
                    room486.btnclick("initroom");
                }, 1200);
            }
            else {
                if (g.internal.r === 0)
                    chat(5, 486);
                else
                    chat(7, 486);
            }
            break;
        case "room1":
            nav.killbutton("room1");
            chat(10011, 486);
            break;
        case "room2":
            if (!g.internal.inst) {
                chat(8, 486);
            }
            else if (!g.internal.greenbutton) {
                nav.modbutton("room2", "486_game/room2a.webp", null, "img");
                cl.nude();
                nav.button({
                    "type": "img",
                    "name": "me",
                    "left": 270,
                    "top": 271,
                    "width": 302,
                    "height": 809,
                    "image": "486_game/room2_" + gender.pronoun("f") + ".webp"
                }, 486);
                room486.chatcatch("greenbuttonON");
                chat(9, 486);
            }
            break;
        case "room3_0":
            nav.killbutton("room3_0");
            nav.killbutton("room3_1");
            zcl.assup(800, 1200, .3, "", false);
            room486.chatcatch("greenbuttonON");
            g.internal.r3 = 0;
            chat(11, 486);
            break;
        case "room3_1":
            nav.killbutton("room3_0");
            nav.killbutton("room3_1");
            room486.chatcatch("greenbuttonON");
            nav.button({
                "type": "img",
                "name": "me",
                "left": 1400,
                "top": 408,
                "width": 546,
                "height": 672,
                "image": "486_game/room3_" + gender.pronoun("f") + ".webp"
            }, 486);
            g.internal.r3 = 1;
            chat(12, 486);
            break;
        case "room4_0":
            nav.killbutton("room4_0");
            nav.killbutton("room4_1");
            g.internal.inst = false;
            chat(13, 486);
            break;
        case "room4_1":
            nav.killbutton("room4_0");
            nav.killbutton("room4_1");
            g.internal.inst = false;
            chat(14, 486);
            break;
        default:
            break;
    }
};

room486.chatcatch = function (callback) {
    switch (callback) {
        case "room0":
            nav.modbutton("room0", "486_game/room0_1.webp", null, null);
            g.setTimeout = setTimeout(function () {
                room486.chatcatch("greenbuttonON");
                nav.killbutton("room0");
            }, 1200);
            break;
        case "room1":
            if (!g.internal.inst) {
                zcl.displayMain(600, 950, .055, "clothes", true);
                sc.select("room1", "486_game/icon_r1_" + g.internal.r1 + ".webp", 0);
            }
            g.internal.inst = true;
            break;
        case "room3":
            if (!g.internal.inst) {
                sc.select("room3_0", "486_game/icon_r3_0.webp", 0);
                sc.select("room3_1", "486_game/icon_r3_1.webp", 1);
            }
            g.internal.inst = true;
            break;
        case "room4":
            if (!g.internal.inst) {
                sc.select("room4_0", "486_game/icon_r4_0.webp", 0);
                sc.select("room4_1", "486_game/icon_r4_1.webp", 1);
            }
            g.internal.inst = true;
            break;
        case "room4_0":
            zcl.facedown(800, 850, .2, "", false);
            break;
        case "greenbuttonON":
            g.internal.greenbutton = true;
            room486.btnclick("drawbtns");
            break;
        default:
            break;
    }
};

room486.chat = function (chatID) {
    let carray;
    if (chatID === 1001) {
        carray = [
            "I really love penises in my butt. They tickle my fancy, I'm a slut!'",
            "I would lick anyone’s butt on command. Rim job ready, I’m your biggest fan!",
            "I'm a pee pee girl, wild and free. Golden showers just for me!"
        ];
        return {
            chatID: 0,
            speaker: "!ann",
            text: "This first room starts off light, Shout the line with all your might! " +
                carray[g.internal.r1] +
                " Let the crowd hear clear and true, Loud as thunder, that’s on you!",
            button: [
                { chatID: -1, text: "Shout the line? ", callback: "room1" }
            ]
        };
    }
    else if (chatID === 10011) {
        carray = [
            "I REALLY LOVE PENISES IN MY BUTT. THEY TICKLE MY FANCY, I'M A SLUT!",
            "I WOULD LICK ANYONE’S BUTT ON COMMAND. RIM JOB READY, I’M YOUR BIGGEST FAN!",
            "I'M A PEE PEE GIRL, WILD AND FREE. GOLDEN SHOWERS JUST FOR ME!"
        ];
        return {
            chatID: 0,
            speaker: "me",
            text: carray[g.internal.r1],
            button: [
                { chatID: -1, text: "...", callback: "greenbuttonON" }
            ]
        };
    }
    else if (chatID === 1002) {
        g.internal.inst = true;
        return {
            chatID: 0,
            speaker: "!ann",
            text: "Now that you’ve boasted you’re a slut so bold,"+
                "Prove it to all, let the truth unfold." +
                "Peel off your threads, every last stitch bare," +
                "Drop all your clothes in the barrel there ",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        };
    }
    else if (chatID === 1003) {
        return {
            chatID: 0,
            speaker: "!ann",
            text: "Now the game truly begins," +
                "Choices will test your skin." +
                "Some sting and shame on the spot," +
                "Others fester and rot." +
                "Energy guards your fate " +
                "Pass the door, or seal your fate. ",
            button: [
                { chatID: 10, text: "...", callback: "" }
            ]
        };
    }
    else if (chatID === 1004) {
        return {
            chatID: 0,
            speaker: "!ann",
            text: "Pain is yours to pick and choose. Ten hard spanks in this room you’ll lose, " +
                "Or clip those nipples, bite the sting, Carry the ache through ev’ry thing!",
            button: [
                { chatID: -1, text: "...", callback: "room4" }
            ]
        };
        ////close pin on nipples - keep for rest of game (small energy drain)
        ////10 spankings (big energy drain)
        //carray = [
        //    "Strip off your slimy clothes",
        //    "Strip off your cream pie covered clown costume"
        //];
    }
    else if (chatID === 1005) {
        
        carray = [
            "Put in this spinny butt plug",
            "moon the audiance",
            "put 5 pool balls in your ass"
        ];
    }
    else if (chatID === 1006) {
        carray = [
            "Shoot out the spinny butt plug into the hoop. ", //repeat until it goes in
            "Dry hump the doll and yell how much you like it"
        ];
    }
    else if (chatID === 1007) {
        carray = [
            "Lick the floor ", //someone from the crowd pees on the floor
            "Suck on this man's toes. ",
            "glory hole in window - give spectators bj"
        ];
    }
    else if (chatID === 1008) {
        carray = [
            "Get on your knees and bark like a dog.",
            "Write on your body you're a stupid whore",
            "Nipple clamps",
            "ball clamps",
            "walk knotted rope with nipple clamps",
            "Put in vibrator"
        ];
    }
    else if (chatID === 1009) {
        //tattoo
        carray = [
            "Take this pill to make your boobs bigger",
            "Take this pill to make your weiner smaller",
            "Take this pill to make your butt bigger",
            "Take this pill to make your lips bigger",
            "Take this pill to be dumber.",
        ];
    }
    else if (chatID === 1010) {
        carray = [
            "Shoot tennis ball up your asshole",
            "Ride the fuck machine for 10 minutes",
            "enema"
        ];
    }
    else if (chatID === 1011) {
        carray = [
            "Suck the cum out this woman's vagina",
            "Lay over his lap for 10 spankings",
            "Up on the rack", //rack with fucking machine and nipple clamps and face fucking
            "Stick ass through hole in glass and let the spectators fuck you"
        ];
    }
    else if (chatID === 1012) {
        carray = [
            "Suck off this horse's dick",
            "Suck off this pig's dick",
            "enema to mouth - drink till it's empty hung upside down"
        ];
    }
    else {
        var cArray = [
            {
                chatID: 0,
                speaker: "!barker",
                text: "Welcome newcomer you're the next contestant to the underground " +
                    "game show The Dozen Degrading Doors!!!! ",
                button: [
                    { chatID: 1, text: "huh?", callback: "" }
                ]
            },
            {
                chatID: 1,
                speaker: "!barker",
                text: "That's right, you are lucky to be here in front of our live studio audience." +
                    "You must make it through all 12 doors to get your freedom. If you can't make " +
                    "it through all 12 doors... well then. It'll be bad. Really bad. ",
                button: [
                    { chatID: 2, text: "What if I don't want to play? ", callback: "" }
                ]
            },
            {
                chatID: 2,
                speaker: "!barker",
                text: "I can see you're excited to play! Tap the face of challenge to hear what must  " +
                    "be done to pass. Then press the Green Button once you're done. It will only open " +
                    "the door once you've completed the task! ",
                button: [
                    { chatID: 3, text: "But what if I don't want to play? ", callback: "" }
                ]
            },
            {
                chatID: 3,
                speaker: "!barker",
                text: "What ever you do don't press the Red Button! The Red Button ends the game " +
                    "and you will be punished. Given to the CUM cult so they may use you as their " +
                    "toy! It is much better to pass all 12 doors! Don't forget to smile for the " +
                    "audiance! They do enjoy a competitor!",
                button: [
                    { chatID: 4, text: "Please just let me out ", callback: "" }
                ]
            },
            {
                chatID: 4,
                speaker: "!barker",
                text: "That’s the spirit! I know you'll do great. Now let the game begin! Claus, pull me " +
                    "up! ",
                button: [
                    { chatID: -1, text: "*sigh* ", callback: "room0" }
                ]
            },
            {
                chatID: 5,
                speaker: "!barker",
                text: "Press the mask of instruction now. Launch the game to take your bow! ",
                button: [
                    { chatID: -1, text: "huh?", callback: "" }
                ]
            },
            {
                chatID: 6,
                speaker: "!ann",
                text: "To start the game press the green button, When the crowd gets excited and shoutin'. ",
                button: [
                    { chatID: -1, text: "crap. Here again.", callback: "" }
                ]
            },
            {
                chatID: 7,
                speaker: "!ann",
                text: "You skipped the task, oh what a shame! Press the mask to hear the instructions again!",
                button: [
                    { chatID: -1, text: "*sigh*", callback: "" }
                ]
            },
            {
                chatID: 8,
                speaker: "thinking",
                text: "Huh. I wonder what that barrel is for?",
                button: [
                    { chatID: -1, text: "...", callback: "" }
                ]
            },
            {
                chatID: 9,
                speaker: "thinking",
                text: "If being naked in front of everyone is the second room, what could possibly be in store " +
                    "for the next 10!",
                button: [
                    { chatID: -1, text: "...", callback: "" }
                ]
            },
            {
                chatID: 10,
                speaker: "!ann",
                text: "For this next task, the choice is yours. Fun " + gender.pronoun("girl") + " vibes or slut that roars!" +
                    " Shake that ass for the crowd to cheer, Or bend right over, show your bussy clear!",
                button: [
                    { chatID: -1, text: "...", callback: "room3" }
                ]
            },
            {
                chatID: 11,
                speaker: "thinking",
                text: "I guess I've chosen that I'm a slut. ",
                button: [
                    { chatID: -1, text: "...", callback: "" }
                ]
            },
            {
                chatID: 12,
                speaker: "thinking",
                text: "I'm not just some slut! I'm a fun time " + gender.pronoun("girl") + "! ",
                button: [
                    { chatID: -1, text: "...", callback: "" }
                ]
            },
            {
                chatID: 13,
                speaker: "thinking",
                text: "Do I just gend down on my knees with my butt up?",
                button: [
                    { chatID: 15, text: "[Get on the ground with your butt up]", callback: "room4_0" },
                    { chatID: -1, text: "[Change your mind]", callback: "room4" },
                ]
            },
            {
                chatID: 14,
                speaker: "thinking",
                text: "I suppose I just put these clothes pins on my nipples. Seems easy. ", 
                button: [
                    { chatID: -1, text: "[Put the clothes pins on your nipples]", callback: "room4_1" },
                    { chatID: -1, text: "[Change your mind]", callback: "room4" },
                ]
            },
            {
                chatID: 15,
                speaker: "!barker",
                text: "No dummy! Put the shackles on your feet, then lean over the chain with your butt up, " +
                    "and finally shackle your wrists to the ground! ",
                button: [
                    { chatID: -1, text: "Oh. I knew that", callback: "room4_2" },
                    { chatID: -1, text: "[Change your mind]", callback: "room4" },
                ]
            },
        ];
        if (cArray.length > chatID && chatID > -1)
            return cArray[chatID];
        else
            return [];
    }
};