//Room name
var room301 = {};
room301.main = function () {
    var navList = [0];
    nav.buildnav(navList);
    switch (sc.getstep("envy")) {
        case 2:
            nav.bg("301_living/bg1.jpg");
            chat(0, 301);
            break;
        case 3:
            nav.bg("301_living/bg1.jpg");
            chat(10, 301);
            break;
        case 4:
            nav.bg("301_living/bg1.jpg");
            chat(21, 301);
            break;
        case 5:
            nav.bg("301_living/bg1.jpg");
            chat(32, 301);
            break;
    }
};

room301.btnclick = function (name) {
    switch (name) {
        case "":
            break;
        default:
            break;
    }
};

room301.chatcatch = function (callback) {
    switch (callback) {
        case "startwars":
            nav.bg("301_living/startwars.jpg");
            break;
        case "startwars1":
            nav.bg("301_living/startwars1.jpg");
            break;
        case "envy2":
            sc.setstep("envy", 3);
            g.setflag("envyDayEvent");
            char.addtime(180);
            char.room(300);
            break;
        case "pizza0":
            nav.bg("301_living/pizza0.jpg");
            break;
        case "movie1":
            char.changeMenu("hide", false, true);
            g.internal = { m: 1, t: 0 };
            nav.bg("301_living/hypnobg.jpg");
            nav.button({
                "type": "btn",
                "name": "movie",
                "left": 1456,
                "top": 0,
                "width": 464,
                "height": 1080,
                "image": "301_living/m1.png"
            }, 301);
            nav.button({
                "type": "btn",
                "name": "girleye",
                "left": 469,
                "top": 341,
                "width": 262,
                "height": 166,
                "image": "301_living/geye1.png"
            }, 301);
            nav.button({
                "type": "btn",
                "name": "maleeye",
                "left": 133,
                "top": 356,
                "width": 282,
                "height": 92,
                "image": "301_living/heye1.png"
            }, 301);
            break;
        case "t0":
            g.internal.t = 0;
            room301.chatcatch("incrementMovie");
            break;
        case "t1":
            g.internal.t++;
            room301.chatcatch("incrementMovie");
            break;
        case "incrementMovie":
            g.internal.m++;
            if (g.internal.t > 4) {
                room301.chatcatch("movie2");
            }
            if (g.internal.m > 10) {
                room301.chatcatch("movie2");
            }
            else {
                switch (g.internal.t) {
                    case 0:
                        nav.modbutton("girleye", "301_living/geye1.png");
                        nav.modbutton("maleeye", "301_living/heye1.png");
                        chat(13, 301);
                        break;
                    case 1:
                        nav.modbutton("girleye", "301_living/geye1.png");
                        nav.modbutton("maleeye", "301_living/heye3.png");
                        chat(14, 301);
                        break;
                    case 2:
                        nav.modbutton("girleye", "301_living/geye2.png");
                        nav.modbutton("maleeye", "301_living/heye2.png");
                        chat(15, 301);
                        break;
                    case 3:
                        nav.modbutton("girleye", "301_living/geye3.png");
                        nav.modbutton("maleeye", "301_living/heye3.png");
                        chat(16, 301);
                        break;
                    case 4:
                        nav.modbutton("girleye", "301_living/geye4.png");
                        nav.modbutton("maleeye", "301_living/heye3.png");
                        chat(17, 301);
                        break;
                }
                nav.modbutton("movie", "301_living/m" + g.internal.m + ".png");
            }
            break;
        case "movie2":
            nav.killall();
            if (g.internal.t > 3) {
                nav.bg("301_living/pizzaGood1.jpg");
                chat(19, 301);
            }
            else {
                nav.bg("301_living/pizzaBad.jpg");
                chat(18, 301);
            }
            break;
        case "movieBadEnd":
            g.setflag("envyDayEvent");
            char.addtime(180);
            char.room(300);
            break;
        case "movieGoodEnd":
            g.setflag("envyDayEvent");
            char.addtime(180);
            sc.setstep("envy", 4);
            char.room(300);
            break;
        case "spanky3":
            nav.bg("301_living/spanky1.jpg");
            break;
        case "envy3end":
            sc.setstep("envy", 5);
            sc.setstep("spanky", -1);
            g.setflag("envyDayEvent");
            char.addtime(180);
            char.room(300);
            break;
        case "boardgame":
            nav.killall();
            nav.bg("301_living/startwars1.jpg");
            break;
        case "boardgameend":
            g.setflag("envyDayEvent");
            char.room(0);
            break;
        case "hypno1":
            if (inv.has("hypno1")) {
                nav.button({
                    "type": "btn",
                    "name": "movie",
                    "left": 1456,
                    "top": 0,
                    "width": 464,
                    "height": 1080,
                    "image": "301_living/h1-1.png"
                }, 301);
                nav.button({
                    "type": "btn",
                    "name": "girleye",
                    "left": 469,
                    "top": 341,
                    "width": 262,
                    "height": 166,
                    "image": "301_living/geye5.png"
                }, 301);
                nav.button({
                    "type": "btn",
                    "name": "maleeye",
                    "left": 133,
                    "top": 356,
                    "width": 282,
                    "height": 92,
                    "image": "301_living/heye1.png"
                }, 301);
            }
            else {
                chat(34, 301);
            }
            break;
        case "hypno2":
            nav.modbutton("movie", "301_living/h1-2.png", null, null);
            break;
        case "hypno3":
            nav.modbutton("maleeye", "301_living/heye3.png");
            nav.modbutton("movie", "301_living/h1-3.png", null, null);
            break;
        case "hypno4":
            nav.modbutton("maleeye", "301_living/heye1.png");
            nav.modbutton("movie", "301_living/h1-4.png", null, null);
            break;
        case "hypno5":
            nav.killbutton("movie");
            nav.bg("301_living/movieoff.jpg");
            nav.modbutton("girleye", "301_living/geye6.png");
            nav.modbutton("maleeye", "301_living/heye3.png");
            break;
        case "hypno6":
            nav.killall();
            nav.bg("301_living/bg.jpg");
            break;
        case "hypno7":

            break;
        case "hypnoEnd":
            sc.setstep("envy", 6);
            char.addtime(120);
            char.room(0);
            break;
        case "leave":
            char.room(0);
            break;
        default:
            break;
    }
};

room301.chat = function (chatID) {
    if (chatID === 999) {
        return {
            chatID: 999,
            speaker: "random",
            text: "*Movie Plays*",
            button: [
                { chatID: 999, text: "Continue watching the movie", callback: "c" },
                { chatID: 1000, text: "Touch her leg", callback: "t" }
            ]
        };
    }
    else {
        var cArray = [
            {
                chatID: 0,
                speaker: "envy",
                text: "So what's up?",
                button: [
                    { chatID: 1, text: "Oh, I just stopped by to say hi, bestie!", callback: "" }
                ]
            },
            {
                chatID: 1,
                speaker: "envy",
                text: "Don't lie. How many boys do you just randomly stop by at to say hi when you barely know them? ",
                button: [
                    { chatID: 2, text: "None. That would be weird. ", callback: "" }
                ]
            },
            {
                chatID: 2,
                speaker: "envy",
                text: "See. Like I said you just think about sex. ",
                button: [
                    { chatID: 3, text: "That's a cool looking telescope. ", callback: "" }
                ]
            },
            {
                chatID: 3,
                speaker: "envy",
                text: "Oh. Yeah. I just got it for Coeus comet that is supposed to fly by next week. I've been trying to get " +
                    "the exact time and location in the sky when it flies by here. ",
                button: [
                    { chatID: 4, text: "It's a good thing your window points that way. ", callback: "" }
                ]
            },
            {
                chatID: 4,
                speaker: "envy",
                text: "It's the only good thing about this building. I wanted to live in the grey apartments up north, but " +
                    "the rent was just so much. I'm just a poor college student trying to live and it's been hard since my " +
                    "roomate left and moved in with her boyfriend. ",
                button: [
                    { chatID: 5, text: "That bitch!", callback: "" }
                ]
            },
            {
                chatID: 5,
                speaker: "envy",
                text: "I know. She said I had too much of my junk laying around the house. It's not my fault all she wanted " +
                    "to do was watch tv. She almost messed up my chess game I've been playing with Bohdana from Belarus. We " +
                    "mail each other our moves. This game has been going on for two months now!",
                button: [
                    { chatID: 6, text: "That's awesome....", callback: "" }
                ]
            },
            {
                chatID: 6,
                speaker: "envy",
                text: "So do you want to play a game?",
                button: [
                    { chatID: 7, text: "Like truth or dare?", callback: "startwars" }
                ]
            },
            {
                chatID: 7,
                speaker: "envy",
                text: "That's a kid's game. How about Star Wars Monopoly! I get to be the x-wing!",
                button: [
                    { chatID: 8, text: "Oh... sure", callback: "startwars1" }
                ]
            },
            {
                chatID: 8,
                speaker: "envy",
                text: "I'm totally kicking your ass. You have to be strategic on what and where you buy. ",
                button: [
                    { chatID: 9, text: "I think we'll just declare you the winner here. ", callback: "" }
                ]
            },
            {
                chatID: 9,
                speaker: "envy",
                text: "That was totally fun! Next time you come by bring some chips. We'll watch a movie. ",
                button: [
                    { chatID: -1, text: "You're on. See you later", callback: "envy2" }
                ]
            },
            {
                chatID: 10,
                speaker: "envy",
                text: "You brought pizza! I'll throw it in the oven. I have a great documentry I wanted to watch if you want " +
                    "to watch with me. ",
                button: [
                    { chatID: 11, text: "That sounds like fun. ", callback: "pizza0" }
                ]
            },
            {
                chatID: 11,
                speaker: "envy",
                text: "This side of the couch has the best angle for the tv, so you can sit beside me. But no touching. " +
                    "I'm just trying to enjoy the documentry. I think you'll like it. It's a love story set in " +
                    "the Anglo-French Hundred Years' War. ",
                button: [
                    { chatID: 13, text: "Ooohhh ok ", callback: "movie1" }
                ]
            },
            {
                chatID: 12,
                speaker: "thinking",
                text: "*Movie Plays*",
                button: [
                    { chatID: 12, text: "Continue watching the movie", callback: "t0" }
                ]
            },
            {
                chatID: 13,
                speaker: "thinking",
                text: "*Movie Plays*",
                button: [
                    { chatID: -1, text: "Continue watching the movie", callback: "t0" },
                    { chatID: -1, text: "Touch her leg", callback: "t1" }
                ]
            },
            {
                chatID: 14,
                speaker: "thinking",
                text: "*Movie Plays*",
                button: [
                    { chatID: -1, text: "Pull your hand away", callback: "t0" },
                    { chatID: -1, text: "Keep your hand on her leg.", callback: "t1" }
                ]
            },
            {
                chatID: 15,
                speaker: "thinking",
                text: "*Movie Plays*",
                button: [
                    { chatID: -1, text: "Pull your hand away", callback: "t0" },
                    { chatID: -1, text: "Move your hand between her legs. ", callback: "t1" }
                ]
            },
            {
                chatID: 16,
                speaker: "thinking",
                text: "*Movie Plays*",
                button: [
                    { chatID: -1, text: "Pull your hand away", callback: "t0" },
                    { chatID: -1, text: "Rub her pussy over her clothes", callback: "t1" }
                ]
            },
            {
                chatID: 17,
                speaker: "thinking",
                text: "*Movie Plays*",
                button: [
                    { chatID: -1, text: "Finger bang her pussy", callback: "t1" }
                ]
            },
            {
                chatID: 18,
                speaker: "envy",
                text: "Thanks for watching the movie with me buddy! My mind wandered off a few time and I need to watch " +
                    "it again. You should come over to watch it with me. Bring pizza!",
                button: [
                    { chatID: -1, text: "You're welcome friend", callback: "movieBadEnd" }
                ]
            },
            {
                chatID: 19,
                speaker: "envy",
                text: "Oh wow! Ummmmm. Well. That was a movie. I think. I missed it. Oh well. Ummm. I think you should " +
                    "go. I have to take care of a thing. Come back. Please. But go now. I need to do a thing. ummm " +
                    "Yeah go, but come back later. ",
                button: [
                    { chatID: 20, text: "You sure you don't want me to stick around for a bit. ", callback: "" }
                ]
            },
            {
                chatID: 20,
                speaker: "envy",
                text: "Welllll, uuuhhhhh. It's better you go now. You should leave, but in a good way. I want to see " +
                    "you again, just not right now. ",
                button: [
                    { chatID: -1, text: "Ok. See you tomorrow. ", callback: "movieGoodEnd" }
                ]
            },
            {
                chatID: 21,
                speaker: "envy",
                text: "So we need to talk. I really like hanging out with you, but more like a friend. The board " +
                    "game we played was really fun and I would like to do that some more or even watch some movies. " +
                    "I'll even let you choose the movie. But as friends. No more trying to put your fingers in my " +
                    "pussy, ok?",
                button: [
                    { chatID: 22, text: "Oh.", callback: "" }
                ]
            },
            {
                chatID: 22,
                speaker: "envy",
                text: "I know. I like you, but I don't think you can control yourself. What's worse is I don't think " +
                    "I can control myself around you when you get horny. So for now we should just be friends. No " +
                    "touching privileges. ",
                button: [
                    { chatID: 23, text: "That's fine. Let's play some games! ", callback: "startwars1" }
                ]
            },
            {
                chatID: 23,
                speaker: "envy",
                text: "That was fun. I'm glad we can be friends. I really enjoy hanging out with you. ",
                button: [
                    { chatID: 24, text: "I had fun too. See ya buddy. ", callback: "spanky3" }
                ]
            },
            {
                chatID: 24,
                speaker: "spanky",
                text: "Hay, I saw you coming out of " + sc.n("envy") + "'s place. Are you fucking her? ",
                button: [
                    { chatID: 25, text: "Oh no, we're just friends ", callback: "" }
                ]
            },
            {
                chatID: 25,
                speaker: "spanky",
                text: "So she gave you the 'Just friends' speach too? So one day I was tired of being her friend and " +
                    "just wanted to fuck. Had the worst case of blue balls, ya know. So I think, fuck it, I'm either " +
                    "going to fuck this chick or she'll never talk to me again. Guess what I did. ",
                button: [
                    { chatID: 26, text: "Oh, ummmm, finger her?", callback: "" }
                ]
            },
            {
                chatID: 26,
                speaker: "spanky",
                text: "I wish I got that close. No. So she goes to the bathroom and I just strip off all my clothes. " +
                    "My cock was the hardest it's ever been, just sitting out there in all it's glory. I got a big " +
                    "cock, ya know. I thought she would take one look at it and just start slobbin the knob. ",
                button: [
                    { chatID: 27, text: "ok", callback: "" }
                ]
            },
            {
                chatID: 27,
                speaker: "spanky",
                text: "But no. She just screams at tme to put my clothes back on a to get out of her apartment. Fuckin' " +
                    "bitch, ya know. So I make a plan. I'm gunna get that pussy. I know a guy that makes these hypno " +
                    "vidoes. Really good ones too. Each hypno is tailored to the person you want to hypno. It took " +
                    "me months getting all the information the dude needed to make the videos. ",
                button: [
                    { chatID: 28, text: "right", callback: "" }
                ]
            },
            {
                chatID: 28,
                speaker: "spanky",
                text: "Cost a lot too. Almost had to sell my store so I could afford them. So I get the videos and " +
                    "go to her place so I could show them to her, and you know what that bitch did? ",
                button: [
                    { chatID: 29, text: "what", callback: "" }
                ]
            },
            {
                chatID: 29,
                speaker: "spanky",
                text: "She told me to leave. Wouldn't even watch my videos. Bitch. So now I have a bunch of " +
                    "hypno videos to turn that bitch into a slut and I can't get her to watch them. So I see " +
                    "you comin out of her place and I think to myself that you are her new friend. She mad at " +
                    "you bro, or are you still buds?",
                button: [
                    { chatID: 30, text: "We're still buds", callback: "" }
                ]
            },
            {
                chatID: 30,
                speaker: "spanky",
                text: "I'll tell you what. I'm such an awesome guy I'll sell you the hypno videos. Stop by my " +
                    "store. If I sell them to you, you gotta play them though. Don't be a little bitch boy and " +
                    "hold on to them. Also they only work on " + ("envy") + " so don't go fuckin' around with 'em. ",
                button: [
                    { chatID: 31, text: "I won't", callback: "" }
                ]
            },
            {
                chatID: 31,
                speaker: "spanky",
                text: "Cool. I'll give you a good price. Just play them for her. And don't be a bitch. ",
                button: [
                    { chatID: -1, text: "ok", callback: "envy3end" }
                ]
            },
            {
                chatID: 32,
                speaker: "envy",
                text: "I'm glad you came back! So what do you want to do?",
                button: [
                    { chatID: 33, text: "Play a board game", callback: "boardgame" },
                    { chatID: -1, text: "Watch a movie ", callback: "hypno0" }
                ]
            },
            {
                chatID: 33,
                speaker: "envy",
                text: "You're so bad at this, I don't know why you keep challenging me! Can't wait to play you again. ",
                button: [
                    { chatID: -1, text: "That was fun. I'll see you later", callback: "boardgameend" }
                ]
            },
            {
                chatID: 34,
                speaker: "me",
                text: "Oh. I forgot to get a movie. I'll have to bring one next time. ",
                button: [
                    { chatID: 33, text: "...", callback: "boardgame" }
                ]
            },
            {
                chatID: 35,
                speaker: "me",
                text: "I'll just put this movie in...",
                button: [
                    { chatID: 36, text: "...", callback: "hypno1" }
                ]
            },
            {
                chatID: 36,
                speaker: "envy",
                text: "I am horny.....I need to masturbate....",
                button: [
                    { chatID: 37, text: "...", callback: "hypno2" }
                ]
            },
            {
                chatID: 37,
                speaker: "envy",
                text: "Finger..... wet......",
                button: [
                    { chatID: 38, text: "...", callback: "hypno3" }
                ]
            },
            {
                chatID: 38,
                speaker: "envy",
                text: "I will rub my pussy.....",
                button: [
                    { chatID: 39, text: "...", callback: "hypno4" }
                ]
            },
            {
                chatID: 39,
                speaker: "envy",
                text: "....play with my clit...",
                button: [
                    { chatID: 40, text: "...", callback: "hypno5" }
                ]
            },
            {
                chatID: 40,
                speaker: "envy",
                text: "I have to go to sleep now. You should go. See yourself out...",
                button: [
                    { chatID: 41, text: "ok...", callback: "hypno6" }
                ]
            },
            {
                chatID: 41,
                speaker: "thinking",
                text: "She left really quickly. I wonder if it worked... I sure sounds like she's playing with " +
                    "her pussy. It sounds so wet...",
                button: [
                    { chatID: -1, text: "I should respect her privacy and leave", callback: "hypnoEnd" },
                    { chatID: 43, text: "She didn't close her door all the way. A quick peek wouldn't hurt. For science", callback: "hypno7" }
                ]
            },
        ];
        if (cArray.length > chatID && chatID > -1)
            return cArray[chatID];
        else
            return [];
    }
};