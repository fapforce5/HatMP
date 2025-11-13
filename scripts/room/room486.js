




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
        r1: g.rand(0, 3)
    };
    room486.btnclick("drawbtns");
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
            nav.button({
                "type": "hand",
                "name": "greenbutton",
                "left": 1156,
                "top": 444,
                "width": 94,
                "height": 102,
                "image": "486_game/greenbutton.webp"
            }, 486);
            break;
        case "mask":
            g.internal.inst = true;
            switch (g.internal.r) {
                case 0:
                    if (gv.get("486gamecounter") < 2) {
                        chat(0, 486);
                    }
                    else {
                        chat(6, 486);
                    }
                    break;
                case 1:
                    chat(1001, 486);
                    break;
            }
            break;
        case "redbutton":
            if (g.internal.r === 0 && !g.internal.inst) {
                chat(5, 486);
            }
            break;
        case "greenbutton":
            var proc486 = false;
            if (g.internal.r === 0 && !g.internal.inst) {
                chat(5, 486);
                return;
            }
            switch (g.internal.r) {
                case 0:
                    
                    proc486 = true;
                    break;
            }
            if (proc486) {
                nav.killbutton("redbutton");
                nav.killbutton("greenbutton");
                nav.bg("486_game/r" + g.internal.r + "_o.webp");
                nav.modbutton("mask", "486_game/m" + g.internal.r + ".webp", null, "img");
                g.roomTimeout = setTimeout(function () {
                    nav.killall();
                    g.internal.r++;
                    nav.bg("486_game/r" + g.internal.r + ".webp");
                    room486.btnclick("drawbtns");
                }, 1200);
            }
            break;
        default:
            break;
    }
};

room486.chatcatch = function (callback) {
    switch (callback) {
        case "nap_1hour":
            break;
        default:
            break;
    }
};

room486.chat = function (chatID) {
    let carray;
    if (chatID === 1001) {
        carray = [
            "yell out 'I really love penises in my butt!'",
            "yell out 'I would lick anyone's butt on command!'",
            "yell out 'I'm a pee pee girl!"
        ];
        return {
            chatID: 0,
            speaker: "!ann",
            text: "This first room will start easy. We just want you to " + carray[g.internal.r1] + 
                "",
            button: [
                { chatID: 1, text: "huh?", callback: "" }
            ]
        };
    }
    else if (chatID === 1002) {
        carray = [
            "Put this shoe on your head.",
            "Shake your butt for the crowd",
            "Spin around 10 times",
            "Do the chicken dance"
        ];
    }
    else if (chatID === 1003) {
        carray = [
            "Stand in the middle of the room",
            "Put on this clown costume. " //get pied in the face
        ];
    }
    else if (chatID === 1004) {
        carray = [
            "Strip off your slimy clothes",
            "Strip off your cream pie covered clown costume"
        ];
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
                speaker: "!ann",
                text: "Welcome newcomer you're the next contestant to the underground " +
                    "game show The Dozen Degrading Doors!!!! ",
                button: [
                    { chatID: 1, text: "huh?", callback: "" }
                ]
            },
            {
                chatID: 1,
                speaker: "!ann",
                text: "That's right, you are lucky to be here in front of our live studio audience." +
                    "You must make it through all 12 doors to get your freedom. If you can't make " +
                    "it through all 12 doors... well then. It'll be bad. Really bad. ",
                button: [
                    { chatID: 2, text: "What if I don't want to play? ", callback: "" }
                ]
            },
            {
                chatID: 2,
                speaker: "!ann",
                text: "I can see you're excited to play! Tap the face of challenge to hear what must  " +
                    "be done to pass. Then press the Green Button once you're done. It will only open " +
                    "the door once you've completed the task! ",
                button: [
                    { chatID: 3, text: "But what if I don't want to play? ", callback: "" }
                ]
            },
            {
                chatID: 3,
                speaker: "!ann",
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
                speaker: "!ann",
                text: "That's the spirit! To open the door, just press the green button!",
                button: [
                    { chatID: -1, text: "*sigh* ", callback: "nextRoom" }
                ]
            },
            {
                chatID: 5,
                speaker: "!ann",
                text: "Press the mask of instruction to begin the game. ",
                button: [
                    { chatID: -1, text: "huh?", callback: "" }
                ]
            },
            {
                chatID: 6,
                speaker: "!ann",
                text: "Welcome back! I see you do enjoy our little game. Please press the green button to play. ",
                button: [
                    { chatID: -1, text: "crap. Here again.", callback: "" }
                ]
            },
        ];
        if (cArray.length > chatID && chatID > -1)
            return cArray[chatID];
        else
            return [];
    }
};