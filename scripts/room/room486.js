




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
    if (gv.get("ddd") === 0) {

    }
    var btnList = [
        {
            "type": "btn",
            "name": "name",
            "left": 1741,
            "top": 618,
            "width": 130,
            "height": 252,
            "image": "486_folder/hole.png"
        }
    ];
    var navList = [0];
    $.each(btnList, function (i, v) {
        nav.button(v, 486);
    });
    nav.buildnav(navList);
};

room486.btnclick = function (name) {
    switch (name) {
        case "":
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
            "Yell out 'I really love penises in my butt!'",
            "Yell out 'I would lick anyone's butt on command!'",
            "Yell out 'I'm a pee pee girl!"
        ];
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
                text: "Welcome new comer you're the next contestant to the underground " +
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
                text: "What ever you do don't press the Red Button! The Red Button ends the game, " +
                    "but you will be punished. Given to the CUM cult so they may use you as their " +
                    "toy! It is much better to pass all 12 doors! Don't forget to smile for the " +
                    "audiance! They do enjoy a competitor!",
                button: [
                    { chatID: 4, text: "Please just let me out ", callback: "" }
                ]
            },
            {
                chatID: 4,
                speaker: "!ann",
                text: "That's the spirit! The door will now open so you can BEGIN THE SHOW!!!",
                button: [
                    { chatID: -1, text: "*sigh* ", callback: "nextRoom" }
                ]
            },
        ];
        if (cArray.length > chatID && chatID > -1)
            return cArray[chatID];
        else
            return [];
    }
};