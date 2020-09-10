//Room name
var room51 = {};
room51.main = function () {
    g.internal = "";
    if (sc.getstep("tiffany") === 15) {
        nav.bg("51_livingRoom/t1.jpg");
        $('.room-left').hide();
        cl.c.wig = null;
        char.settime(17, 37);
        cl.add("dress", "u");
        cl.add("socks", "p");
        chat(0, 51);
    }
    else {
        var navList = [55];
        var btnList =
        [{
            "type": "btn",
            "name": "hallway",
            "left": 1033,
            "top": 268,
            "width": 260,
            "height": 437,
            "image": "51_livingRoom/hallway.png"
        }];
        if (sc.tiffany().roomID === 57 || sc.candy().roomID === 57) {
            btnList.push({
                "type": "btn",
                "name": "reddooropen",
                "left": 1664,
                "top": 214,
                "width": 250,
                "height": 603,
                "image": "51_livingRoom/reddooropen.png"
            });
            navList.push(57);
        }
        else {
            btnList.push({
                "type": "btn",
                "name": "reddoor",
                "left": 1664,
                "top": 214,
                "width": 250,
                "height": 603,
                "image": "51_livingRoom/reddoor.png"
            });
        }
        $.each(btnList, function (i, v) {
            nav.button(v, 51);
        });
        
        var missingClothing = cl.hasoutfit("public");

        if (missingClothing === null)
            navList.push(0);
        else {
            g.internal = missingClothing;
            chat(50, 51);
        }

        nav.buildnav(navList);
    }
};

room51.btnclick = function (name) {
    switch (name) {
        case "hallway":
            char.room(55);
            break;
        case "reddoor":
            if (inv.has('reddoor'))
                char.room(57);
            else
                chat(49, 51);
            break;
        case "reddooropen":
            char.room(57);
            break;
        case "t19":
            chat(30, 51);
            break;
        case "chapter2":
            $('.room-left').show();
            char.room(51);
            break;
        default:
            break;
    }
};

room51.chatcatch = function (callback) {
    var i;
    switch (callback) {
        case "t2":
            nav.bg("51_livingRoom/t2.jpg");
            break;
        case "t3":
            nav.bg("51_livingRoom/t3.jpg");
            break;
        case "t4":
            nav.bg("51_livingRoom/t4.jpg");
            break;
        case "t5":
            nav.bg("51_livingRoom/t5.jpg");
            break;
        case "t6":
            nav.bg("51_livingRoom/t6.jpg");
            break;
        case "t7":
            nav.bg("51_livingRoom/t7.jpg");
            break;
        case "t8":
            nav.bg("51_livingRoom/t8.jpg");
            break;
        case "t9":
            nav.bg("51_livingRoom/t9.jpg");
            break;
        case "t10":
            nav.bg("51_livingRoom/t10.jpg");
            break;
        case "t11":
            nav.bg("51_livingRoom/t11.jpg");
            break;
        case "t12":
            nav.bg("51_livingRoom/t12.jpg");
            break;
        case "t13":
            nav.bg("51_livingRoom/t13.jpg");
            zcl.displayface();
            if (cl.getBodyHair() !== null)
                chat(19, 51);
            else
                chat(22, 51);
            break;
        case "t14":
            nav.killall();
            nav.bg("51_livingRoom/t14.jpg");
            break;
        case "t15":
            g.set("bodyhair", 0);
            nav.bg("51_livingRoom/t15.jpg");
            break;
        case "t16":
            nav.bg("51_livingRoom/t13.jpg");
            zcl.displayface();
            break;
        case "t17":
            cl.c.makeup = "mb";
            zcl.displayface();
            break;
        case "t18":
            nav.bg("51_livingRoom/livingroom.jpg");
            nav.killall();
            cl.nude();
            zcl.displayMain(20, 650, .20, "", false);
            nav.button({
                "type": "btn",
                "name": "t19",
                "left": 364,
                "top": 0,
                "width": 487,
                "height": 1080,
                "image": "51_livingRoom/t18Candy.png"
            }, 51);
            nav.button({
                "type": "btn",
                "name": "t19",
                "left": 1191,
                "top": 17,
                "width": 519,
                "height": 1063,
                "image": "51_livingRoom/t18tif.png"
            }, 51);
            break;
        case "t19":
            nav.killall();
            nav.bg("51_livingRoom/t19.jpg");
            break;
        case "t20":
            nav.bg("51_livingRoom/t20.jpg");
            break;
        case "t21":
            nav.bg("51_livingRoom/t21.jpg");
            break;
        case "t22":
            nav.bg("51_livingRoom/t22.jpg");
            break;
        case "t23":
            nav.bg("51_livingRoom/t23.jpg");
            break;
        case "t24":
            nav.bg("51_livingRoom/t24.jpg");
            break;
        case "t25":
            nav.bg("51_livingRoom/t25.jpg");
            break;
        case "t26":
            nav.bg("51_livingRoom/t26.jpg");
            break;
        case "t27":
            nav.killall();
            char.settime(18, 8);
            nav.bg("51_livingRoom/livingroom.jpg");
            zcl.displayMain(20, 650, .20, "", false);
            nav.button({
                "type": "img",
                "name": "t19",
                "left": 364,
                "top": 0,
                "width": 487,
                "height": 1080,
                "image": "51_livingRoom/t18Candy.png"
            }, 51);
            nav.button({
                "type": "img",
                "name": "t19",
                "left": 1191,
                "top": 17,
                "width": 519,
                "height": 1063,
                "image": "51_livingRoom/t27tif.png"
            }, 51);
            break;
        case "t28":
            cl.add("pj", "gown");
            cl.c.pj = "gown";
            nav.killall();
            zcl.displayMain(20, 650, .20, "clothes", false);
            nav.button({
                "type": "img",
                "name": "t19",
                "left": 364,
                "top": 0,
                "width": 487,
                "height": 1080,
                "image": "51_livingRoom/t18Candy.png"
            }, 51);
            nav.button({
                "type": "img",
                "name": "t19",
                "left": 1191,
                "top": 17,
                "width": 519,
                "height": 1063,
                "image": "51_livingRoom/t18tif.png"
            }, 51);
            break;
        case "t29":
            
            cl.display();
            for (i = 0; i < cl.list.length; i++) {
                if (cl.list[i].sex === "m")
                    cl.list[i].inv = false;
            }
            cl.saveOutfit = [
                { name: "Outfit 1", shoes: null, socks: null, pants: null, panties: null, bra: null, shirt: null, dress: null, swimsuit: null, pj: null, accessories: new Array(), isReg: true },
                { name: "Outfit 2", shoes: null, socks: null, pants: null, panties: null, bra: null, shirt: null, dress: null, swimsuit: null, pj: null, accessories: new Array(), isReg: true },
                { name: "Outfit 3", shoes: null, socks: null, pants: null, panties: null, bra: null, shirt: null, dress: null, swimsuit: null, pj: null, accessories: new Array(), isReg: true },
                { name: "Outfit 4", shoes: null, socks: null, pants: null, panties: null, bra: null, shirt: null, dress: null, swimsuit: null, pj: null, accessories: new Array(), isReg: true },
                { name: "Sleep", shoes: null, socks: null, pants: null, panties: null, bra: null, shirt: null, dress: null, swimsuit: null, pj: "gown", accessories: new Array(), isReg: false }
            ];
            sc.setstep("me", -7);
            sc.setstep("me", -10);
            sc.setstep("me", -11);
            sc.setstep("me", 8);
            sc.setstep("tiffany", 16);
            sc.setstep("candy", 1);
            sc.setstep("missy", 24);
            sc.setstep("landlord", 6);
            sc.setstep("me", -5);
            char.settime(19, 57);
            nav.button({
                "type": "btn",
                "name": "chapter2",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "51_livingRoom/t29.jpg"
            }, 51);
            //char.room(51);
            break;
        case "red":
        case "pink":
        case "purple":
            cl.c.lips = callback;
            g.internal = callback;
            zcl.displayface();
            break;
        default:
            break;
    }
};

room51.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "tiffany",
            text: "Hay baby, I brought home a new toy!",
            button: [
                { chatID: 1, text: "...", callback: "t2" }
            ]
        },
        {
            chatID: 1,
            speaker: "candy",
            text: "Oh awesome it's " + sc.n("me") + "! I was hoping we could play with him! He looked like so much fun at the store! What is that " +
            "thing he's wearing? ................",
            button: [
                { chatID: 2, text: "...", callback: "t3" }
            ]
        },
        {
            chatID: 2,
            speaker: "candy",
            text: "Did you do that thing where you find a strange boy and dress him up in the ugliest dress you could find again?",
            button: [
                { chatID: 3, text: "huh?", callback: "" }
            ]
        },
        {
            chatID: 3,
            speaker: "tiffany",
            text: "Hahahaha I totally did! I took him to the mall and everything! I had him try on panties at Popular Girl, I even had the clerk help us!",
            button: [
                { chatID: 4, text: "...", callback: "t4" }
            ]
        },
        {
            chatID: 4,
            speaker: "candy",
            text: "Hahahaha you are so silly! Why do boys like you always fall for the ugly dress game? You really are the worst " + sc.n("tiffany") +
                "! Picking on this simple silly boy!",
            button: [
                { chatID: 5, text: "Hay!", callback: "" }
            ]
        },
        {
            chatID: 5,
            speaker: "tiffany",
            text: "It's not my fault it's he's so easy! He's like a lost puppy dog that just follows you around and does whatever you tell him! ",
            button: [
                { chatID: 6, text: "Now wait a minute!", callback: "t5" }
            ]
        },
        {
            chatID: 6,
            speaker: "candy",
            text: "He's so cute. So is this one staying in the room, or does he have his own place? ",
            button: [
                { chatID: 7, text: "?", callback: "t6" }
            ]
        },
        {
            chatID: 7,
            speaker: "tiffany",
            text: "The poor little guy doesn't have any place to go. I was going to put him in Bambi's old room. ",
            button: [
                { chatID: 8, text: "...", callback: "tf7" }
            ]
        },
        {
            chatID: 8,
            speaker: "candy",
            text: "Aww the poor little guy. You know he's got such a pretty face. He's really pulling off that dress. So " + sc.n("me") + " you want " +
                "to show me what you have under there?",
            button: [
                { chatID: 9, text: "I uhhhhh", callback: "t8" }
            ]
        },
        {
            chatID: 9,
            speaker: "tiffany",
            text: "Yeah, show " + sc.n("candy") + " what you got! Take off your dress!",
            button: [
                { chatID: 10, text: "But.. Shouldn't you take off your clothes?", callback: "t9" },
            ]
        },
        {
            chatID: 10,
            speaker: "candy",
            text: "Hahaha, we're not going to take off our clothes for you! You should be happy just being here with us. We both can fuck " +
                "much hotter and manlier men than you. " + sc.n("tiffany") + " brought you here cause we get bored fucking big hot guys all the time, " + 
                "she thought you might be fun.",
            button: [
                { chatID: 11, text: "What?", callback: "" },
            ]
        },
        {
            chatID: 11,
            speaker: "tiffany",
            text: sc.n("missy") + " told me what a sissy you were! I've always wanted to have a sissy best friend that I could dress up " +
            "tease, and play with. That's why I brought you here!",
            button: [
                { chatID: 12, text: "I'm not a sissy...", callback: "t10" },
                { chatID: 14, text: "I am such a sissy boy, please play with me", callback: "" },
            ]
        },
        {
            chatID: 12,
            speaker: "tiffany",
            text: "AHahaha haha hahhaaha You so are! You don't need to lie to us. Just release your inner slut! You don't even have to do anything, just " +
            "let us take control.",
            button: [
                { chatID: 13, text: "Hay", callback: "" },
            ]
        },
        {
            chatID: 13,
            speaker: "candy",
            text: "Haha you silly boy, just relax and we'll help you release your inner girl!",
            button: [
                { chatID: 15, text: "Oh", callback: "t11" },
            ]
        },
        {
            chatID: 14,
            speaker: "candy",
            text: "Don't worry our little slut, we're going to make you into such a cock hungry whore!",
            button: [
                { chatID: 15, text: "Oh fuck yea!", callback: "t11" },
            ]
        },
        {
            chatID: 15,
            speaker: "candy",
            text: "Lets get this dress off of your first.",
            button: [
                { chatID: 16, text: "huh", callback: "t12" },
            ]
        },
        {
            chatID: 16,
            speaker: "candy",
            text: "Not bad. You know he would look really cute with some makeup.",
            button: [
                { chatID: 17, text: "huh", callback: "" },
            ]
        },
        {
            chatID: 17,
            speaker: "tiffany",
            text: "You're right! Come here, we're going to make you a pretty girl!",
            button: [
                { chatID: 18, text: "huh", callback: "t13" },
            ]
        },
        {
            chatID: 18,
            speaker: "tiffany",
            text: "You're right! Come here, we're going to make you a pretty girl!",
            button: [
                { chatID: -1, text: "huh", callback: "" },
            ]
        },
        {
            chatID: 19,
            speaker: "candy",
            text: "Oh gross! body hair! We need to get rid of that! " + sc.n("tiffany") + " go grab your hair removal cream!",
            button: [
                { chatID: 20, text: "But I like it...", callback: "t14" },
            ]
        },
        {
            chatID: 20,
            speaker: "tiffany",
            text: "So hairy! You really need our help to make you a prety girl!",
            button: [
                { chatID: 21, text: "It's ichy..", callback: "t15" },
            ]
        },
        {
            chatID: 21,
            speaker: "tiffany",
            text: "That looks soooo much better! Such a pretty girl!",
            button: [
                { chatID: 22, text: "It's ichy..", callback: "t16" },
            ]
        },
        {
            chatID: 22,
            speaker: "tiffany",
            text: "Lets put some makeup on him! I bet he'll look really pretty with some makeup!",
            button: [
                { chatID: 23, text: "But I don't want makeup", callback: "" },
                { chatID: 24, text: "Oh yes! Please make me a pretty girl!", callback: "" },
            ]
        },
        {
            chatID: 23,
            speaker: "candy",
            text: "Oh shush! I'm going to make you pretty!",
            button: [
                { chatID: 25, text: "[Grumpy]", callback: "t17" },
            ]
        },
        {
            chatID: 24,
            speaker: "candy",
            text: "I'm so excited! You're going to be so pretty!",
            button: [
                { chatID: 25, text: "Thank you!", callback: "t17" },
            ]
        },
        {
            chatID: 25,
            speaker: "candy",
            text: "I'm so excited! You're going to be so pretty!",
            button: [
                { chatID: 26, text: "Thank you!", callback: "" },
            ]
        },
        {
            chatID: 26,
            speaker: "tiffany",
            text: "OOHHH MMMYYY GGGOOODDDD You really are a pretty girl... Needs something more...",
            button: [
                { chatID: 27, text: "Oh wow", callback: "" },
            ]
        },
        {
            chatID: 27,
            speaker: "candy",
            text: "Oh course she does! She needs pretty lips! I'm not sure what your color is. What color do you want? When I pick which color " +
            "cI always think about what would look prettiest wrapped around a big meaty cock!",
            button: [
                { chatID: 28, text: "Classic Red Lips", callback: "red" },
                { chatID: 28, text: "Sissy Pink", callback: "pink" },
                { chatID: 28, text: "Rebellious Purple", callback: "purple" },
            ]
        },
        {
            chatID: 28,
            speaker: "tiffany",
            text: "Oh " + g.internal + " really is your color! You really know how to make yourself a pretty girl!",
            button: [
                { chatID: 29, text: "Oh wow", callback: "" },
            ]
        },
        {
            chatID: 29,
            speaker: "candy",
            text: "She really does make a pretty girl! Let's take a look at you.",
            button: [
                { chatID: -1, text: "I look pretty?", callback: "t18" },
            ]
        },
        {
            chatID: 30,
            speaker: "candy",
            text: "Hmmmm...",
            button: [
                { chatID: 31, text: "...", callback: "t19" },
            ]
        },
        {
            chatID: 31,
            speaker: "candy",
            text: "You're pretty, but there's something I can't put my finger on....",
            button: [
                { chatID: 32, text: "...", callback: "t20" },
            ]
        },
        {
            chatID: 32,
            speaker: "candy",
            text: "Oh, haha I can put my finger on it!",
            button: [
                { chatID: 33, text: "...", callback: "t21" },
            ]
        },
        {
            chatID: 33,
            speaker: "candy",
            text: "Hahaha these things are so much fun, but it's not a good look for you.. hmmm. Should we cut it off?",
            button: [
                { chatID: 34, text: "What!! No!!", callback: "" },
            ]
        },
        {
            chatID: 34,
            speaker: "tiffany",
            text: sc.n("candy") + "!!! You're going to scare the poor boy! No one is cutting off you boy cock. Let's see the back side, " +
            "turn around girl.",
            button: [
                { chatID: 35, text: "[Turn around]", callback: "t23" },
            ]
        },
        {
            chatID: 35,
            speaker: "candy",
            text: "I like it! Lets see how tight she is.",
            button: [
                { chatID: 36, text: "huh", callback: "t24" },
            ]
        },
        {
            chatID: 36,
            speaker: "candy",
            text: "Do you like it when I play with your girl hole?",
            button: [
                { chatID: 37, text: "*moan*", callback: "t25" },
            ]
        },
        {
            chatID: 37,
            speaker: "candy",
            text: "Oh you are a tight one!",
            button: [
                { chatID: 38, text: "*moan*", callback: "t26" },
            ]
        },
        {
            chatID: 38,
            speaker: "candy",
            text: "But with just a little work your gril hole opens right up!",
            button: [
                { chatID: 39, text: "*moan*", callback: "t25" },
            ]
        },
        {
            chatID: 39,
            speaker: "tiffany",
            text: "I can tell you like that, don't you? You are such a little slut! Lets play some dress up with this slut!",
            button: [
                { chatID: 40, text: "But we already played that....", callback: "t26" },
            ]
        },
        {
            chatID: 40,
            speaker: "candy",
            text: "Oh I like dress up! We're going to play that!",
            button: [
                { chatID: 41, text: "Groan", callback: "t27" },
            ]
        },
        {
            chatID: 41,
            speaker: "tiffany",
            text: "Before we play we have to do something with all these boy clothes of yours...",
            button: [
                { chatID: 42, text: "Huh, those are my clothes.", callback: "" },
            ]
        },
        {
            chatID: 42,
            speaker: "candy",
            text: "Sorry, but this is a girls only building. We can't have you accidently exposing to " + sc.n("treyvon") + " we snunk a boy in here.",
            button: [
                { chatID: 43, text: "I won't wear them out, I promise", callback: "" },
            ]
        },
        {
            chatID: 43,
            speaker: "candy",
            text: "You don't have to promise, we're just going to throw them all out. From now on it's just girls clothes for you since you're living here. ",
            button: [
                { chatID: 44, text: "Please, you can't do that, they're mine!", callback: "" },
            ]
        },
        {
            chatID: 44,
            speaker: "tiffany",
            text: "I told you we would have to dress you up like a girl at the bench and you said you were in. I don't even know why we're having an argument.",
            button: [
                { chatID: 45, text: "but, but...", callback: "t18" },
            ]
        },
        {
            chatID: 45,
            speaker: "candy",
            text: "Now you don't have any boy pajamas, you can use mine till you buy new clothes. You'll love it, try it on!",
            button: [
                { chatID: 46, text: "but, but...", callback: "t28" },
            ]
        },
        {
            chatID: 46,
            speaker: "tiffany",
            text: "Oh My God! You are sooooo pretty! I'm so happy we picked you to come live here. I don't think I've seen anything more pretty!",
            button: [
                { chatID: 47, text: "really?", callback: "" },
            ]
        },
        {
            chatID: 47,
            speaker: "candy",
            text: "Well I'm tired, I'm going to bed. We'll play more with you later, our new pretty girl!",
            button: [
                { chatID: 48, text: "You're just going to leave me like this?", callback: "" },
            ]
        },
        {
            chatID: 48,
            speaker: "tiffany",
            text: "*Yawn* yes. We'll have time tomorrow to play some more. Your room is at the end of the hallway. Good night " + sc.n("me") + ".",
            button: [
                { chatID: -1, text: "Humph!", callback: "t29" },
            ]
        },
        {
            chatID: 49,
            speaker: "me",
            text: "Hmmm, it's locked. I wonder what's behind the red door?",
            button: [
                { chatID: -1, text: "...", callback: "" },
            ]
        },
        {
            chatID: 50,
            speaker: "me",
            text: "Before I leave I need to get dressed. <span class='hl'>I'm missing my " + g.internal + ".</span>",
            button: []
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};