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
        case "selfie":
            nav.killbutton("selfie");
            nav.bg("403_saucy/changeRoom6c.jpg");
            pic.add("jada_" + cl.c.panties);
            nav.killall();
            chat(47, 403);
            break;
        case "jadajackoff":
            chat(69, 403);
            break;
        default:
            break;
    }
};

room403.chatcatch = function (callback) {
    switch (callback) {
        case "mall":
            nav.bg("400_mall/400_mall_bg_t.jpg");
            break;
        case "tif2":
            nav.bg("403_saucy/tif2.jpg");
            break;
        case "tif3":
            nav.bg("403_saucy/tif3.jpg");
            break;
        case "tif4":
            nav.bg("403_saucy/tif4.jpg");
            break;
        case "tif5":
            nav.bg("403_saucy/tif5.jpg");
            break;
        case "tif6":
            nav.bg("403_saucy/tif6.jpg");
            break;
        case "tif7":
            nav.bg("403_saucy/tif7.jpg");
            break;
        case "tif8":
            nav.bg("403_saucy/tif8.jpg");
            break;
        case "tif9":
            nav.bg("403_saucy/tif9.jpg");
            break;
        case "tif10":
            nav.bg("403_saucy/tif10.jpg");
            break;
        case "shoeStore":
            nav.bg("403_saucy/shoe.jpg");
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
        case "changeRoom3s":
            cl.nude();
            cl.display();
            if (cl.chastity === null)
                chat(33, 403);
            else
                chat(31, 403);
            break;
        case "changeRoom3t":
            nav.bg("403_saucy/changeRoom3t.jpg");
            cl.c.chastity = null;
            cl.display();
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
        case "changeRoom6b":
            nav.bg("403_saucy/changeRoom6b.jpg");
            break;
        case "changeRoom6c":
            nav.bg("403_saucy/changeRoom6c.jpg");
            cl.display();
            zcl.displayMain(60, 760, .19, "panties");
            break;
        case "selfie":
            nav.bg("403_saucy/changeRoom.jpg");
            nav.button({
                "type": "btn",
                "name": "selfie",
                "left": 694,
                "top": 381,
                "width": 1121,
                "height": 699,
                "image": "403_saucy/selfie.png"
            }, 403);
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
        case "changeRoom11":
            nav.killbutton("jadajackoff");
            nav.bg("403_saucy/changeRoom11.jpg");
            break;
        case "changeRoom11a":
            nav.bg("403_saucy/changeRoom3b.jpg");
            cl.nude();
            cl.c.dress = "u";
            cl.c.panties = g.internal;
            cl.c.socks = "p";
            cl.c.shoes = "fb";
            cl.display();
            zcl.displayMain(60, 760, .19, "panties socks shoes shirt");
            break;
        case "changeRoom11b":
            cl.c.wig = "f";
            cl.display();
            zcl.displayMain(60, 760, .19, "panties socks shoes shirt");
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
        case "pantiesBlack":
            g.internal = "b";
            cl.add("panties", "b");
            cl.c.panties = "b";
            break;
        case "pantiesPink":
            g.internal = "p";
            cl.add("panties", "p");
            cl.c.panties = "p";
            break;
        case "pantiesFish":
            g.internal = "f";
            cl.add("panties", "f");
            cl.c.panties = "f";
            break;
        case "tifMap":
            g.set("map", 1);
            char.settime(19, 36);
            sc.setstep("tiffany", 14);
            sc.setstep("treyvon", 1);
            char.room(50);
            break;
        case "jadajackoff":
            nav.bg("403_saucy/jadajackoff.jpg");
            nav.button({
                "type": "btn",
                "name": "jadajackoff",
                "left": 519,
                "top": 42,
                "width": 711,
                "height": 1038,
                "image": "403_saucy/jada.gif"
            }, 403);
            break;
        case "leave":
            char.room(400);
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
                { chatID: 1, text: "[Follow " + sc.n("tiffany") + " around the store]", callback: "tif2" }
            ]
        },
        {
            chatID: 1,
            speaker: "tiffany",
            text: "Hmmmm, nope...",
            button: [
                { chatID: 2, text: "....", callback: "tif3" }
            ]
        },
        {
            chatID: 2,
            speaker: "tiffany",
            text: "Naw.... To slutty",
            button: [
                { chatID: 3, text: "...", callback: "tif4" }
            ]
        },
        {
            chatID: 3,
            speaker: "tiffany",
            text: "AH HA! This is prefect for you!",
            button: [
                { chatID: 4, text: "What?", callback: "tif5" }
            ]
        },
        {
            chatID: 4,
            speaker: "tiffany",
            text: "Oh... I guess I'm used to shopping with " + sc.n("candy") + ".  Just a sec...",
            button: [
                { chatID: 5, text: "Oh...", callback: "tif3" }
            ]
        },
        {
            chatID: 5,
            speaker: "tiffany",
            text: "Uhmmmm hmmmmmm",
            button: [
                { chatID: 6, text: "....", callback: "tif6" }
            ]
        },
        {
            chatID: 6,
            speaker: "tiffany",
            text: "This will work with your figure! Trust me!",
            button: [
                { chatID: 7, text: "I don't really think it's a good idea to dress up in public....", callback: "tif7" }
            ]
        },
        {
            chatID: 7,
            speaker: "tiffany",
            text: "Awww Don't worry about that. You're so cute no one will think you're a boy.!",
            button: [
                { chatID: 8, text: "No, I'm manly...", callback: "tif6" }
            ]
        },
        {
            chatID: 8,
            speaker: "tiffany",
            text: "Hahaha! Sure... Trust me, you're really pretty!",
            button: [
                { chatID: 9, text: "Yeah.. ok", callback: "" }
            ]
        },
        {
            chatID: 9,
            speaker: "tiffany",
            text: "I'll bring it with us! Lets shop some more!",
            button: [
                { chatID: 10, text: "Ok", callback: "mall" }
            ]
        },
        {
            chatID: 10,
            speaker: "tiffany",
            text: "Ok... now where... Oh, you need socks!",
            button: [
                { chatID: 11, text: "Socks?", callback: "" }
            ]
        },
        {
            chatID: 11,
            speaker: "tiffany",
            text: "Yes silly, YOu need socks to match your pretty new dress! Follow me",
            button: [
                { chatID: 12, text: "[Follow her]", callback: "tif8" }
            ]
        },
        {
            chatID: 12,
            speaker: "tiffany",
            text: "Ok... we gotta get the right pair of socks for you....",
            button: [
                { chatID: 13, text: "...", callback: "tif9" }
            ]
        },
        {
            chatID: 13,
            speaker: "tiffany",
            text: "Hmmmmm, not seeing anything.....",
            button: [
                { chatID: 14, text: "....", callback: "tif10" }
            ]
        },
        {
            chatID: 14,
            speaker: "tiffany",
            text: "Oh shit! Here we go! It's like they were made for your dress!",
            button: [
                { chatID: 15, text: "What, they're pink.", callback: "" }
            ]
        },
        {
            chatID: 15,
            speaker: "tiffany",
            text: "I know! Pink is your color! You'll look so girly in your new socks! You can wear the black flats I gave you. Little black flats go with everything. " +
            "This is so much fun! I love shopping with you, it's like having a gay best friend!",
            button: [
                { chatID: 16, text: "Wait I'm not....", callback: "" }
            ]
        },
        {
            chatID: 16,
            speaker: "tiffany",
            text: "Let's go to the next store!",
            button: [
                { chatID: 17, text: "Ok.", callback: "mall" }
            ]
        },
        {
            chatID: 17,
            speaker: "tiffany",
            text: "Ok, where to go next.....",
            button: [
                { chatID: 18, text: "Uhhh...", callback: "" }
            ]
        },
        {
            chatID: 18,
            speaker: "tiffany",
            text: "Oh duh! Now we need some panties and bras to go with that dress.",
            button: [
                { chatID: 19, text: "What? No we don't. No one will ever see my underwear.", callback: "" }
            ]
        },
        {
            chatID: 19,
            speaker: "tiffany",
            text: "Oh honey.. panties are more than just something to cover you cock, it's about the feeling of soft silky goodness " +
                "rubbing your fun stuff! Trust me you'll love a nice pair of panties in your new dress, the breeze is refreshing!",
            button: [
                { chatID: 20, text: "Ok, let's get some panties", callback: "tifPanty1" }
            ]
        },
        {
            chatID: 20,
            speaker: "tiffany",
            text: "Let's try and find someone to help us look for panties for you.",
            button: [
                { chatID: 21, text: "What, no, no no no...", callback: "" }
            ]
        },
        {
            chatID: 21,
            speaker: "tiffany",
            text: "Oh look, there's someone over there, I'll get her attention so she can help us find some panties for you.",
            button: [
                { chatID: 22, text: "Couldn't we just....", callback: "tifPanty2" }
            ]
        },
        {
            chatID: 22,
            speaker: "jada",
            text: sc.n("me") + "! What the fuck are you doing here.... Are you getting panties?",
            button: [
                { chatID: 23, text: sc.n("jada") + ".... I was... didn't.... what.....", callback: "tifPanty3" }
            ]
        },
        {
            chatID: 23,
            speaker: "tiffany",
            text: "Yes, we're getting him a pair of panties to go with his new dress. Do you two know each other?",
            button: [
                { chatID: 24, text: sc.n("jada") + " dated my buddy for a little bit in high school.", callback: "" }
            ]
        },
        {
            chatID: 24,
            speaker: "jada",
            text: "I had no fucking idea you were a cross dresser. Did you wear dresses back in high school?",
            button: [
                { chatID: 25, text: "NO, This is just a costume to sneak into " + sc.n("tiffany") + "'s building", callback: "" }
            ]
        },
        {
            chatID: 25,
            speaker: "jada",
            text: "You don't have to fucking lie to me " + sc.n("me") + ". I guess I should've known you liked wearing dresses. " +
                "You were always really girly in school",
            button: [
                { chatID: 26, text: "I wasn't into cross dressing. Really it's just to sneak into her building.", callback: "" }
            ]
        },
        {
            chatID: 26,
            speaker: "tiffany",
            text: "He's so cute when he's flustered! So can you help us find some cute panties for this little guy?",
            button: [
                { chatID: 27, text: "....", callback: "" }
            ]
        },
        {
            chatID: 27,
            speaker: "jada",
            text: "Anything for " + sc.n("me") + ". I have a few that would look really cute with that little butt of his! " +
                "Lets go back to the changing room so he can try them on. Everyone is going to get a kick out of this when they " +
            "find out!",
            button: [
                { chatID: 28, text: "....", callback: "changeRoom1" }
            ]
        },
        {
            chatID: 28,
            speaker: "tiffany",
            text: "Thanks " + sc.n("jada") + " for picking out some pretty panties for " + sc.n("me") + "! He's going to look so cute in one of these!",
            button: [
                { chatID: 29, text: "....", callback: "" }
            ]
        },
        {
            chatID: 29,
            speaker: "jada",
            text: "Oh yea. He really is a cutie! I bet you'll look sexy in panties! I've got to help some other customers, I'll come back and check on you.",
            button: [
                { chatID: 30, text: "ok, later " + sc.n("jada"), callback: "changeRoom3b" }
            ]
        },
        {
            chatID: 30,
            speaker: "tiffany",
            text: "Ok mister, time to strip so we can see you in your new panties. ",
            button: [
                { chatID: 31, text: "....", callback: "changeRoom3s" }
            ]
        },
        {
            chatID: 31,
            speaker: "tiffany",
            text: "Awww is that the chastity device " + sc.n("candy") + " sold you? It's so cute you still wear that. I'm going to take it off so I can " +
            "see your cock outline in your new panties. I love a good cock outline, it's so sexy. ",
            button: [
                { chatID: 32, text: "Oh, but I....", callback: "changeRoom3t" }
            ]
        },
        {
            chatID: 32,
            speaker: "tiffany",
            text: "Hahaha, it just slides right off! " + sc.n("missy") + " will need to hold your key for you!",
            button: [
                { chatID: 34, text: "Well....", callback: "changeRoom3b" }
            ]
        },
        {
            chatID: 33,
            speaker: "tiffany",
            text: "That's not a bad size cock. It's nice, not huge, but not tiny either. I like it.",
            button: [
                { chatID: 34, text: "Thanks?", callback: "changeRoom3b" }
            ]
        },
        {
            chatID: 34,
            speaker: "jada",
            text: "So lets get to those panties mister! I wonder what " + sc.n("jada") + " brought us...",
            button: [
                { chatID: 35, text: "...", callback: "changeRoom4" }
            ]
        },
        {
            chatID: 35,
            speaker: "tiffany",
            text: "It's panty time!!! This first pair " + sc.n("jada") + " got for us is the classic black thong. It says " +
                "I'm a classy girl so put a condom on before you fuck me.",
            button: [
                { chatID: 36, text: "...", callback: "changeRoom5" }
            ]
        },
        {
            chatID: 36,
            speaker: "tiffany",
            text: "This second pair is a slutty pink G-string panties. These say you want a bunch of big strong men " +
                "savagely penetrate my tender face and asshole with their giant throbbing cocks. ",
            button: [
                { chatID: 37, text: "...", callback: "changeRoom6" }
            ]
        },
        {
            chatID: 37,
            speaker: "tiffany",
            text: "This last pair of panties let everyone know that you're cute, playful, and so very innocent. So which " +
                "pair do you want?",
            button: [
                { chatID: 38, text: "The classy black panties", callback: "pantiesBlack" },
                { chatID: 39, text: "Slutty pink G-string", callback: "pantiesPink" },
                { chatID: 40, text: "Playful piranha panties", callback: "pantiesFish" }
            ]
        },
        {
            chatID: 38,
            speaker: "tiffany",
            text: "I never would have taken you as a classy girl. They'll look great with a pair of black high heels!",
            button: [
                { chatID: 41, text: "I'm a classy girl", callback: "" }
            ]
        },
        {
            chatID: 39,
            speaker: "tiffany",
            text: "Ahahaha, I knew you were an butt slut! Nothing shows off your pretty butthole like a good thong!",
            button: [
                { chatID: 41, text: "I'm such a butt slut", callback: "" }
            ]
        },
        {
            chatID: 40,
            speaker: "tiffany",
            text: "Ohhh that's so playful I love it. You'll make a great play toy!",
            button: [
                { chatID: 41, text: "Thanks", callback: "" }
            ]
        },
        {
            chatID: 41,
            speaker: "jada",
            text: "Everything ok in there? Do you need any help?",
            button: [
                { chatID: 42, text: "What.. Yes!, I mean no! We're good, no help", callback: "" }
            ]
        },
        {
            chatID: 42,
            speaker: "tiffany",
            text: "Oh hey " + sc.n("jada") + " c'mon in. I need your opinion on these new panties. ",
            button: [
                { chatID: 43, text: "Wha... no, no we don't", callback: "changeRoom6b" }
            ]
        },
        {
            chatID: 43,
            speaker: "jada",
            text: "Holy shit, you're naked, like totally naked! ",
            button: [
                { chatID: 44, text: "I said not to come in!", callback: "" }
            ]
        },
        {
            chatID: 44,
            speaker: "tiffany",
            text: "Relax " + sc.n("me") + ". She works here, she's a professional. We need to get her option on your new panties. Try them on for us and " +
            "give us a fashion show!",
            button: [
                { chatID: 45, text: "Oh um... sure", callback: "changeRoom6c" },
                { chatID: 70, text: "No! This is too much", callback: "changeRoom6a" }
            ]
        },
        {
            chatID: 45,
            speaker: "jada",
            text: "I fucking love it! Let me take a picture! I need to share this with everyone!",
            button: [
                { chatID: 46, text: "What.. NO, no way, not a chance", callback: "" }
            ]
        },
        {
            chatID: 46,
            speaker: "tiffany",
            text: "Oh stop it. Of course you can take a picture " + sc.n("jada") + ". You're such a pretty girl, you need to share that!",
            button: [
                { chatID: -1, text: "Why does no one listen to me?", callback: "selfie" }
            ]
        },
        {
            chatID: 47,
            speaker: "jada",
            text: "I'm going to send you a pic! Check your phone sometime. I've got to help other customers before my boss get pissed off. " +
            sc.n("tiffany") + " you fuckin' rock, later " + sc.n("me") + ". ",
            button: [
                { chatID: 48, text: "Oh, don't share that photo!!!", callback: "changeRoom6a" }
            ]
        },
        {
            chatID: 48,
            speaker: "tiffany",
            text: "You know playing dress up makes me soooo horny! I could really use some cock right now!",
            button: [
                { chatID: 50, text: "Oh god yes! I can't beleive this is happening!!", callback: "changeRoom7" },
                { chatID: 49, text: sc.n("tiffany") + " we can't do that in here, we'll get caught!", callback: "changeRoom6a" }
            ]
        },
        {
            chatID: 49,
            speaker: "tiffany",
            text: "Awww ok, Lets get you dressed and back to our new home. Stip off those pesky male clothes!",
            button: [
                { chatID: 65, text: "ok", callback: "changeRoom11" }
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
            text: "Don't worry honey, you're not the first to do that. It's time to get you dressed up to take you " +
                "to your new home.",
            button: [
                { chatID: -1, text: "...", callback: "jadajackoff" }
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
            text: "Your cock is amazing. I'm going to have to ride that again! It's time to get your all dressed up like a pretty girl and " +
                "take you to your new home.",
            button: [
                { chatID: -1, text: "...", callback: "jadajackoff" }
            ]
        },
        {
            chatID: 65,
            speaker: "tiffany",
            text: "Ok honey lets see how you look in your new clothes! I bet you'll look so pretty.",
            button: [
                { chatID: 66, text: "[Get Dressed]", callback: "changeRoom11a" }
            ]
        },
        {
            chatID: 66,
            speaker: "tiffany",
            text: "Ooohhh don't you look so pretty, I'm going to add a wig. It will really bring out your pretty eyes!",
            button: [
                { chatID: 68, text: "[Put on wig]", callback: "changeRoom11b" }
            ]
        },
        {
            chatID: 67,
            speaker: "tiffany",
            text: "Oh how pretty!",
            button: [
                { chatID: 68, text: "[Put on wig]", callback: "changeRoom11b" }
            ]
        },
        {
            chatID: 68,
            speaker: "tiffany",
            text: "You're my pretty girl! Let's take you home, we should be able to sneak you past the door guard.",
            button: [
                { chatID: -1, text: "[Follow " + sc.n("tiffany") + " home]", callback: "tifMap" }
            ]
        },
        {
            chatID: 69,
            speaker: "jada",
            text: "Oh fuck that was hot! I wonder if he'll fuck me?",
            button: [
                { chatID: 65, text: "...", callback: "changeRoom11" }
            ]
        },
        {
            chatID: 70,
            speaker: "tiffany",
            text: "Oh party pooper. Ok lets get you dressed.",
            button: [
                { chatID: 65, text: "...", callback: "changeRoom11" }
            ]
        }
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};