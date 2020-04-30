//Room name
var room403 = {};
room403.main = function () {
    if (sc.getstep("me") === 7) {
        nav.bg("403_saucy/tif1.jpg");
        chat(0, 403);
        
    }
    else {
        chat(60, 403);
    }
};

room403.btnclick = function (name) {
    switch (name) {
        case "fuckingDatAss":
            chat(57, 403);
            break;
        case "cupDrip":
            chat(59, 403);
            break;
        default:
            break;
    }
};

room403.chatcatch = function (callback) {
    switch (callback) {
        case "tifSummer":
            nav.bg("403_saucy/tifSummer.jpg");
            break;
        case "tifAlice":
            nav.bg("403_saucy/tifAlice.jpg");
            break;
        case "tifPurple":
            nav.bg("403_saucy/tifPurple.jpg");
            break;
        case "tif1":
            nav.bg("403_saucy/tif1.jpg");
            break;
        case "pickSummer":
            cl.c.shirt = null;
            cl.c.pants = null;
            cl.c.dress = "s";
            cl.add("dress", "s");
            g.popUpNotice("Added Summer Dress");
            cl.display();
            break;
        case "pickFancy":
            cl.c.shirt = null;
            cl.c.pants = null;
            cl.c.dress = "a";
            cl.add("dress", "a");
            g.popUpNotice("Added Alice Dress");
            cl.display();
            break;
        case "pickPurple":
            cl.c.shirt = null;
            cl.c.pants = null;
            cl.c.dress = "p";
            cl.add("dress", "p");
            g.popUpNotice("Added Purple Dress");
            cl.display();
            break;
        case "shoeStore":
            nav.bg("403_saucy/shoe.jpg");
            break;
        case "blackflats":
            cl.c.shoes = "fb";
            cl.add("shoes", "fb");
            g.popUpNotice("Added Black Flats");
            cl.display();
            break;
        case "redStrappy":
            cl.c.shoes = "fs";
            cl.add("shoes", "fs");
            g.popUpNotice("Added Red Strappy Flats");
            cl.display();
            break;
        case "blueflats":
            cl.c.shoes = "fl";
            cl.add("shoes", "fl");
            g.popUpNotice("Added Blue Flats");
            cl.display();
            break;
        case "rainbow":
            nav.bg("403_saucy/rainbow.jpg");
            break;
        case "shortwhite":
            nav.bg("403_saucy/shortWhite.jpg");
            break;
        case "fishnet":
            nav.bg("403_saucy/fishnet.jpg");
            break;
        case "pickRainbow":
            cl.c.socks = "r";
            cl.add("socks", "r");
            g.popUpNotice("Added Rainbow Socks");
            cl.display();
            break;
        case "pickWhitesocks":
            cl.c.socks = "s";
            cl.add("socks", "s");
            g.popUpNotice("Added Little White Socks");
            cl.display();
            break;
        case "pickFishnets":
            cl.c.socks = "f";
            cl.add("socks", "f");
            g.popUpNotice("Added Fishnets");
            cl.display();
            break;
        case "tifPanty1":
            nav.bg("402_mens/tifPanty1.jpg");
            break;
        case "tifPanty2":
            nav.bg("402_mens/tifPanty2.jpg");
            break;
        case "tifPanty3":
            nav.bg("402_mens/tifPanty3.jpg");
            break;
        case "changeRoom1":
            nav.bg("403_saucy/changeRoom1.jpg");
            break;
        case "changeRoom2":
            nav.bg("403_saucy/changeRoom2.jpg");
            break;
        case "changeRoom2a":
            nav.bg("403_saucy/changeRoom2a.jpg");
            break;
        case "changeRoom3":
            if (cl.c.dress !== null)
                cl.nude();
            nav.bg("403_saucy/changeRoom3.jpg");
            break;
        case "changeRoom3a":
            nav.bg("403_saucy/changeRoom3a.jpg");
            break;
        case "changeRoom3b":
            nav.bg("403_saucy/changeRoom3b.jpg");
            break;
        case "changeRoom3c":
            if (cl.c.dress !== null)
                cl.nude();
            nav.bg("403_saucy/changeRoom4.jpg");
            break;
        case "changeRoom4":
            if (cl.c.dress !== null)
                cl.nude();
            nav.bg("403_saucy/changeRoom4.jpg");
            break;
        case "changeRoom5":
            nav.bg("403_saucy/changeRoom5.jpg");
            break;
        case "changeRoom6":
            nav.bg("403_saucy/changeRoom6.jpg");
            break;
        case "changeRoom6a":
            nav.bg("403_saucy/changeRoom6a.jpg");
            sc.setstep("tiffany", 13);
            break;
        case "changeRoom7":
            nav.bg("403_saucy/changeRoom7.jpg");
            break;
        case "changeRoom8":
            nav.bg("403_saucy/changeRoom8.jpg");
            break;
        case "changeRoom9":
            nav.bg("403_saucy/changeRoom9.jpg");
            break;
        case "changeRoom10":
            nav.bg("403_saucy/changeRoom10.jpg");
            nav.button({
                "type": "btn",
                "name": "fuckingDatAss",
                "left": 651,
                "top": 0,
                "width": 969,
                "height": 1080,
                "image": "403_saucy/402_fuck.gif"
            }, 403);
            break;

        case "changeRoomX":
            nav.killbutton("cupDrip");
            nav.killbutton("fuckingDatAss");
            nav.bg("403_saucy/changeRoomX.jpg");
            break;
        case "changeRoomX1":
            nav.bg("403_saucy/changeRoomX1.jpg");
            break;
        case "changeRoomY":
            nav.killbutton("fuckingDatAss");
            nav.bg("403_saucy/changeRoomY.jpg");
            break;
        case "changeRoomPussyCum":
            sc.setstep("tiffany", 11);
            nav.killbutton("fuckingDatAss");
            nav.bg("403_saucy/changeRoomPussyCum.jpg");
            nav.button({
                "type": "btn",
                "name": "cupDrip",
                "left": 805,
                "top": 0,
                "width": 691,
                "height": 1080,
                "image": "403_saucy/cumDrip.png"
            }, 403);
            
            break;
        case "changeRoomCumBack":
            sc.setstep("tiffany", 12);
            nav.killbutton("fuckingDatAss");
            nav.bg("403_saucy/changeRoomCumBack.jpg");
            break;
        case "changeRoomDressed":
            nav.bg("403_saucy/changeRoom3b.jpg");
            cl.undo();
            switch (g.internal) {
                case "pantiesBlack":
                    cl.c.panties = "b";
                    break;
                case "pantiesPink":
                    cl.c.panties = "p";
                    break;
                case "pantiesFish":
                    cl.c.panties = "f";
                    break;
            }
            cl.display();
            break;
        case "pantiesBlack":
            g.internal = "pantiesBlack";
            cl.add("panties", "b");
            break;
        case "pantiesPink":
            g.internal = "pantiesPink";
            cl.add("panties", "p");
            break;
        case "pantiesFish":
            g.internal = "pantiesFish";
            cl.add("panties", "f");
            break;
        case "tifMap":
            g.set("map", 1);
            nav.bg("403_saucy/map.jpg");
            break;
        case "followTif":
            sc.setstep("tiffany", 14);
            char.addtime(180);
            char.room(50);
            break;
        case "leave":
            char.room(400);
            break;
        case "putOnWig":
            cl.c.wig = "d";
            cl.display();
            break;
        default:
            break;
    }
};

room403.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "tiffany",
            text: "This is so exciting!!! You know the dress you choose says a lot about you. Lets see what we have....",
            button: [
                { chatID: 1, text: "[Follow " + sc.n("tiffany") + " around the store]", callback: "tifSummer" }
            ]
        },
        {
            chatID: 1,
            speaker: "tiffany",
            text: "This is the classic summer dress. If you pick the summer dress it says you're a happy go lucky girl next door.",
            button: [
                { chatID: 2, text: "[See the next dress]", callback: "tifAlice" }
            ]
        },
        {
            chatID: 2,
            speaker: "tiffany",
            text: "This is the fancy dress. It lets everyone know you're a classy lady, and won't put out on the first date.",
            button: [
                { chatID: 3, text: "[See the next dress]", callback: "tifPurple" }
            ]
        },
        {
            chatID: 3,
            speaker: "tiffany",
            text: "This is the fun dress. It lets the boys know that after a few drinks they'll probably get a blow job!",
            button: [
                { chatID: 4, text: "What?", callback: "tif1" }
            ]
        },
        {
            chatID: 4,
            speaker: "tiffany",
            text: "Relax, you don't have to give boys blow jobs, it's just a dress silly! So which one are you going to go with?",
            button: [
                { chatID: 5, text: "The Summer Dress", callback: "pickSummer" },
                { chatID: 6, text: "The Fancy Dress", callback: "pickFancy" },
                { chatID: 7, text: "The Purple Dress", callback: "pickPurple" }
            ]
        },
        {
            chatID: 5,
            speaker: "tiffany",
            text: "Great pick! I always thought you were a good girl next door!",
            button: [
                { chatID: 8, text: "Thanks! I'm a good lil girl!", callback: "" }
            ]
        },
        {
            chatID: 6,
            speaker: "tiffany",
            text: "I love this dress! It's like playing dress up!",
            button: [
                { chatID: 8, text: "I'm a fancy girl!", callback: "" }
            ]
        },
        {
            chatID: 7,
            speaker: "tiffany",
            text: "I always knew there was a secret slut in there!",
            button: [
                { chatID: 8, text: "It's not a secret slut, I'm a full out slut!", callback: "" }
            ]
        },
        {
            chatID: 8,
            speaker: "tiffany",
            text: "Ok, next we need some socks and shoes! Lets go to the shoe store!!",
            button: [
                { chatID: 9, text: "[Follow " + sc.n("tiffany") + " to the shoe store]", callback: "shoeStore" }
            ]
        },
        {
            chatID: 9,
            speaker: "tiffany",
            text: "So we need something sexy to go with that sexy dress! Have you ever worn heels?",
            button: [
                { chatID: 10, text: "Heels? No, just regular shoes.", callback: "" }
            ]
        },
        {
            chatID: 10,
            speaker: "tiffany",
            text: "I totally don't want you tripping all over yourself when we try and sneak you into my apartment. " +
                "I'll start you off on beginner sexy shoes... how about some flats?",
            button: [
                { chatID: 11, text: "Flat shoes?", callback: "" }
            ]
        },
        {
            chatID: 11,
            speaker: "tiffany",
            text: "Boys are so clueless on how to be pretty! We'll go simple, like you! Pick a color, Classy black, slutty red, or " +
                "whimsical blue",
            button: [
                { chatID: 12, text: "Black flats", callback: "blackflats" },
                { chatID: 13, text: "Red strappy flats", callback: "redStrappy" },
                { chatID: 14, text: "Whimsical blue flats", callback: "blueflats" }
            ]
        },
        {
            chatID: 12,
            speaker: "tiffany",
            text: "Classy choice, you can never go wrong with black.",
            button: [
                { chatID: 15, text: "Thanks", callback: "" }
            ]
        },
        {
            chatID: 13,
            speaker: "tiffany",
            text: "Ohhhh I like it! You feet are saying 'fuck me'",
            button: [
                { chatID: 15, text: "Yea, fuck me", callback: "" }
            ]
        },
        {
            chatID: 14,
            speaker: "tiffany",
            text: "Those shoes are cute on you!",
            button: [
                { chatID: 15, text: "Thanks!", callback: "" }
            ]
        },
        {
            chatID: 15,
            speaker: "tiffany",
            text: "Now you have cute shoes we HAVE to do something about those socks! They are just terrible, like " +
                "something a homeless man would wear! Here, pick one of these!",
            button: [
                { chatID: 17, text: "I like my socks....", callback: "rainbow" }
            ]
        },
        {
            chatID: 16,
            speaker: "tiffany",
            text: "",
            button: [
                { chatID: 17, text: "I like my socks....", callback: "rainbow" }
            ]
        },
        {
            chatID: 17,
            speaker: "tiffany",
            text: "These are exciting! I wear my knee high rainbow socks when I'm in the mood for some crazy sex. One time " +
                "when I was wearing them this girl thougt I was totally gay. She hit on me by licking her finger and rubbing my " +
                "butthole! She could like a pussy like no man!",
            button: [
                { chatID: 18, text: "That's hot, I'll take them!", callback: "shortwhite" }
            ]
        },
        {
            chatID: 18,
            speaker: "tiffany",
            text: "These are great if you want don't want people to see your socks. Very girl next door.",
            button: [
                { chatID: 19, text: "Ok", callback: "fishnet" }
            ]
        },
        {
            chatID: 19,
            speaker: "tiffany",
            text: "Fishnets say, I need a dick in me NOW! They'll look very sexy with your legs!",
            button: [
                { chatID: 20, text: "Thanks", callback: "shoeStore" }
            ]
        },
        {
            chatID: 20,
            speaker: "tiffany",
            text: "So which one do you want?",
            button: [
                { chatID: 21, text: "Rainbow socks", callback: "pickRainbow" },
                { chatID: 22, text: "Short white socks", callback: "pickWhitesocks" },
                { chatID: 23, text: "Fishnets", callback: "pickFishnets" }
            ]
        },
        {
            chatID: 21,
            speaker: "tiffany",
            text: "Rainbow socks! That's so alternative of you!",
            button: [
                { chatID: 24, text: "Thanks, I'm an alternative type of guy", callback: "" }
            ]
        },
        {
            chatID: 22,
            speaker: "tiffany",
            text: "You are such a girl next door!",
            button: [
                { chatID: 24, text: "Thanks, but I'm still a guy", callback: "" }
            ]
        },
        {
            chatID: 23,
            speaker: "tiffany",
            text: "You SLUT!! I love it!",
            button: [
                { chatID: 24, text: "Thanks, you're my hero!", callback: "" }
            ]
        },
        {
            chatID: 24,
            speaker: "tiffany",
            text: "Now we need some panties and bras to go with that dress.",
            button: [
                { chatID: 25, text: "What? No we don't. No one will ever see my underwear.", callback: "" }
            ]
        },
        {
            chatID: 25,
            speaker: "tiffany",
            text: "Oh honey.. panties are more than just something to cover you cock, it's about the feeling of soft silky goodness " +
                "rubbing your fun stuff! Trust me you'll love a nice pair of panties in your new dress, the breeze is refreshing!",
            button: [
                { chatID: 26, text: "Ok, let's get some panties", callback: "tifPanty1" }
            ]
        },
        {
            chatID: 26,
            speaker: "tiffany",
            text: "Let's try and find someone to help us look for panties for you.",
            button: [
                { chatID: 27, text: "What, no, no no no...", callback: "" }
            ]
        },
        {
            chatID: 27,
            speaker: "tiffany",
            text: "Oh look, there's someone over there, I'll get her attention so she can help us find some panties for you.",
            button: [
                { chatID: 28, text: "Couldn't we just....", callback: "tifPanty2" }
            ]
        },
        {
            chatID: 28,
            speaker: "jada",
            text: sc.n("me") + "! What the fuck are you doing here.... in a dress?",
            button: [
                { chatID: 29, text: sc.n("jada") + ".... I was... didn't.... what.....", callback: "tifPanty3" }
            ]
        },
        {
            chatID: 29,
            speaker: "tiffany",
            text: "We're getting him a pair of panties to go with his new dress. Do you two know each other?",
            button: [
                { chatID: 30, text: sc.n("jada") + " and I dated for a little bit in high school.", callback: "" }
            ]
        },
        {
            chatID: 30,
            speaker: "jada",
            text: "I had no fucking idea you were a cross dresser. Did you wear dresses when we dated.",
            button: [
                { chatID: 31, text: "NO, This is just a costume to sneak into " + sc.n("tiffany") + "'s building", callback: "" }
            ]
        },
        {
            chatID: 31,
            speaker: "jada",
            text: "You don't have to fucking lie to me " + sc.n("me") + ". I guess I should've known when we were dating that " +
                "you were a fucking wearing dresses. I really wish you would have told me, it expains so much. ",
            button: [
                { chatID: 32, text: "I wasn't into cross dressing. Really it's just to sneak into her building.", callback: "" }
            ]
        },
        {
            chatID: 32,
            speaker: "tiffany",
            text: "He's so cute when he's flustered! So can you help us find some cute panties for this little guy?",
            button: [
                { chatID: 33, text: "....", callback: "" }
            ]
        },
        {
            chatID: 33,
            speaker: "jada",
            text: "Anything for " + sc.n("me") + ". I have a few that would look really cute with that little butt of his! " +
                "Lets go back to the changing room so he can try them on.",
            button: [
                { chatID: 34, text: "....", callback: "changeRoom1" }
            ]
        },
        {
            chatID: 34,
            speaker: "tiffany",
            text: "Thanks " + sc.n("jada") + " for picking out some pretty panties for " + sc.n("me") + "! He's going to look so cute in one of these!",
            button: [
                { chatID: 35, text: "....", callback: "" }
            ]
        },
        {
            chatID: 35,
            speaker: "jada",
            text: "Do you mind if I get a quick peek of " + sc.n("me") + "'s giant fucking cock? I do miss putting that monster cock inside me, " +
                "most boys I let fuck are a small dick losers.",
            button: [
                { chatID: 36, text: "....", callback: "" }
            ]
        },
        {
            chatID: 36,
            speaker: "tiffany",
            text: "Oh of course! Come on in!",
            button: [
                { chatID: 37, text: "....", callback: "changeRoom2" }
            ]
        },
        {
            chatID: 37,
            speaker: "jada",
            text: "Ok, fucker, stip of that dress! ",
            button: [
                { chatID: 40, text: "Oh yea!", callback: "changeRoom3" },
                { chatID: 38, text: "What, I'm not going to strip!", callback: "changeRoom2a" }
            ]
        },
        {
            chatID: 38,
            speaker: "tiffany",
            text: "Oh, you're going to keep that moster hidden from your old girlfriend? ",
            button: [
                { chatID: 39, text: "Well....", callback: "" }
            ]
        },
        {
            chatID: 39,
            speaker: "jada",
            text: "Oh c'mon " + sc.n("me") + "! Just 'cause you dress like a bitch doesn't mean you have to act like a bitch",
            button: [
                { chatID: 40, text: "Does a bitch have a cock this big?", callback: "changeRoom3" },
                { chatID: 54, text: "I am a bitch, a big crossdressing bitch", callback: "changeRoom3a" }
            ]
        },
        {
            chatID: 40,
            speaker: "jada",
            text: "Fuck I miss riding that thing! Oh well I got to get back to work before my boss shits herself. ",
            button: [
                { chatID: 41, text: "...", callback: "" }
            ]
        },
        {
            chatID: 41,
            speaker: "tiffany",
            text: "Thanks for your help " + sc.n("jada") + "!",
            button: [
                { chatID: 42, text: "See ya " + sc.n("jada"), callback: "changeRoom4" }
            ]
        },
        {
            chatID: 42,
            speaker: "tiffany",
            text: "It's panty time!!! This first pair " + sc.n("jada") + " got for us is the classic black thong. It says " +
                "I'm a classy girl so put a condom on before you fuck me.",
            button: [
                { chatID: 43, text: "...", callback: "changeRoom5" }
            ]
        },
        {
            chatID: 43,
            speaker: "tiffany",
            text: "This second pair is a slutty pink G-string panties. These say you want a bunch of big strong men " +
                "savagely penetrate my tender face and asshole with their giant throbbing cocks. ",
            button: [
                { chatID: 44, text: "...", callback: "changeRoom6" }
            ]
        },
        {
            chatID: 44,
            speaker: "tiffany",
            text: "This last pair of panties let everyone know that you're cute, playful, and so very innocent. So which " +
                "pair do you want?",
            button: [
                { chatID: 45, text: "The classy black panties", callback: "pantiesBlack" },
                { chatID: 46, text: "Slutty pink G-string", callback: "pantiesPink" },
                { chatID: 47, text: "Playful piranha panties", callback: "pantiesFish" }
            ]
        },
        {
            chatID: 45,
            speaker: "tiffany",
            text: "That a nice safe pair. You know... " + sc.n("jada") + " is right, you do have a great cock!",
            button: [
                { chatID: 48, text: "Really?", callback: "" }
            ]
        },
        {
            chatID: 46,
            speaker: "tiffany",
            text: "You are such a slutty girl! A girl with a giant cock! " + sc.n("jada") + " was right it really is a " +
                "great cock!",
            button: [
                { chatID: 48, text: "Really?", callback: "" }
            ]
        },
        {
            chatID: 47,
            speaker: "tiffany",
            text: "Hahaha these panties are so emasculating, I didn't think you would pick them! You know they would look " + 
                "really good over that giant cock of yours. " + sc.n("jada") + " was right, that is a beautiful cock",
            button: [
                { chatID: 48, text: "Really?", callback: "" }
            ]
        },
        {
            chatID: 48,
            speaker: "tiffany",
            text: "Oh god yea. That's the most impressive cock I've seen from a boy in a dress! I need a taste!",
            button: [
                { chatID: 50, text: "Oh god yes! I can't beleive this is happening!!", callback: "changeRoom7" },
                { chatID: 49, text: sc.n("tiffany") + " we can't do that in here, we'll get caught!", callback: "changeRoom6a" }
            ]
        },
        {
            chatID: 49,
            speaker: "tiffany",
            text: "Awww ok, Lets get you dressed and back to our new home.",
            button: [
                { chatID: 65, text: "Yes", callback: "changeRoomDressed" }
            ]
        },
        {
            chatID: 50,
            speaker: "tiffany",
            text: "I don't know if I can fit it in my mouth it's so big!",
            button: [
                { chatID: 51, text: "Yes", callback: "changeRoom8" }
            ]
        },
        {
            chatID: 51,
            speaker: "tiffany",
            text: "HHHhhmmMMMMM ghghhgghhg hhhmmmmmmMMMMMMM",
            button: [
                { chatID: 52, text: "Oh yea", callback: "changeRoom7" }
            ]
        },
        {
            chatID: 52,
            speaker: "tiffany",
            text: "It's soooo big, I have a better idea.",
            button: [
                { chatID: 53, text: "Oh yea", callback: "changeRoom9" }
            ]
        },
        {
            chatID: 53,
            speaker: "tiffany",
            text: "What are you waiting for? Stretch my tight pussy with big cock of yours!",
            button: [
                { chatID: 56, text: "Oh yea", callback: "changeRoom10" }
            ]
        },
        {
            chatID: 54,
            speaker: "jada",
            text: "Oh, ok, Well I got to get back to work, later " + sc.n("me"),
            button: [
                { chatID: 55, text: "bye " + sc.n("jada"), callback: "changeRoom3b" }
            ]
        },
        {
            chatID: 55,
            speaker: "jada",
            text: "Well.... that was awkward. Oh well, strip mister we've got to get these panties on you. ",
            button: [
                { chatID: 42, text: "[Strip]", callback: "changeRoom3c" }
            ]
        },
        {
            chatID: 56,
            speaker: "tiffany",
            text: "MMMmmmmMMmMMMMMMmmmmmMMMMM",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 57,
            speaker: "me",
            text: "I'm so close I'm going to cum!",
            button: [
                { chatID: 58, text: "...", callback: "" }
            ]
        },
        {
            chatID: 58,
            speaker: "tiffany",
            text: "Don't you dare cum in me!! I don't want you dripping out of me all day!!",
            button: [
                { chatID: -1, text: "Cum inside " + sc.n("tiffany"), callback: "changeRoomPussyCum" },
                { chatID: 63, text: "Be a gentleman and spray your cum on her back", callback: "changeRoomCumBack" }//changeRoomX
            ]
        },
        {
            chatID: 59,
            speaker: "tiffany",
            text: "Grrrrr",
            button: [
                { chatID: 61, text: "...", callback: "changeRoomX" }
            ]
        },
        {
            chatID: 60,
            speaker: "me",
            text: "What am I doing here? I don't need women's clothing",
            button: [
                { chatID: -1, text: "...", callback: "leave" }
            ]
        },
        {
            chatID: 61,
            speaker: "tiffany",
            text: "My panties are going to be full of your cum all day, thanks. Don't worry I'll get you back.",
            button: [
                { chatID: 62, text: "I couldn't help it, it felt too good", callback: "changeRoomX1" }
            ]
        },
        {
            chatID: 62,
            speaker: "tiffany",
            text: "Don't worry honey, you're not the first to do that. Now put on your panties and get dressed. It's time to take you " +
                "to your new home.",
            button: [
                { chatID: 65, text: "[Get Dressed]", callback: "changeRoomDressed" }
            ]
        },
        {
            chatID: 63,
            speaker: "tiffany",
            text: "Oh fuck...",
            button: [
                { chatID: 64, text: "...", callback: "changeRoomY" }
            ]
        },
        {
            chatID: 64,
            speaker: "tiffany",
            text: "Your cock is amazing. I'm going to have to ride that again! Put on your panties and get dressed it's " +
                "time to take you to your new home.",
            button: [
                { chatID: 65, text: "[Get Dressed]", callback: "changeRoomDressed" }
            ]
        },
        {
            chatID: 65,
            speaker: "tiffany",
            text: "Oh I almost forgot to give you this wig I have. I call it the dolly, you'll look so cute in it! ",
            button: [
                { chatID: 66, text: "[put on wig]", callback: "putOnWig" }
            ]
        },
        {
            chatID: 66,
            speaker: "tiffany",
            text: "Ok so we're going home, let me show you the way.",
            button: [
                { chatID: 67, text: "[Follow " + sc.n("tiffany") + " home]", callback: "tifMap" }
            ]
        },
        {
            chatID: 67,
            speaker: "tiffany",
            text: "So this is our new home. " + sc.n("candy") + " picked out the color, that's why it's so pink. Let's go in.",
            button: [
                { chatID: -1, text: "[Enter you're new home]", callback: "followTif" }
            ]
        }
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};