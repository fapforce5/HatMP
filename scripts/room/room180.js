//Room name
var room180 = {};
room180.main = function () {
    switch (gv.get("sissySchoolClass")) {
        case "fem101":
            chat(0, 180);
            break;
        case "fem102":
            nav.bg("180_ballroom/fem0.jpg");
            chat(24, 180);
            break;
        case "fem121":
            nav.bg("180_ballroom/fem0.jpg");
            chat(78, 180);
            break;
        case "pee101":
            nav.bg("180_ballroom/pee0.jpg");
            chat(30, 180);
            break;
        case "fem103":
            nav.bg("180_ballroom/fem103_0.jpg");
            chat(52, 180);
            break;
        case "fem201":
            nav.bg("180_ballroom/fem201_1.jpg");
            chat(65, 180);
            break;
        case "enema205":
            nav.bg("180_ballroom/enema205_1.jpg");
            chat(71, 180);
            break;
    }
    //var btnList = [
    //    {
    //        "type": "btn",
    //        "name": "name",
    //        "left": 1741,
    //        "top": 618,
    //        "width": 130,
    //        "height": 252,
    //        "image": "180_folder/hole.png"
    //    }
    //];
    //var navList = [0];
    //$.each(btnList, function (i, v) {
    //    nav.button(v, 180);
    //});
    //nav.buildnav(navList);
};

room180.btnclick = function (name) {
    switch (name) {
        case "pee1":
            gv.mod("bladder", .6);
            nav.killall();
            nav.bg("180_ballroom/pee1.jpg");
            chat(33, 180);
            break;
        default:
            break;
    }
};

room180.chatcatch = function (callback) {
    switch (callback) {
        case "shave0":
        case "shave1":
        case "shave1point5":
        case "shave2":
        case "shave3":
        case "shave4":
        case "shave5":
        case "bg":
        case "fem1":
        case "fem2":
        case "pee2":
        case "pee3":
        case "pee4":
        case "pee5":
        case "fem103_2":
        case "fem103_3":
        case "fem201_2":
        case "fem201_3":
        case "fem201_4":
        case "enema205_5":
        case "fem121_0":
        case "fem121_1":
        case "fem121_2":
        case "fem121_3":
        case "fem121_4":
        case "fem121_5":
            nav.bg("180_ballroom/" + callback + ".jpg");
            break;
        case "fem103_0":
            nav.kill();
            nav.bg("180_ballroom/" + callback + ".jpg");
            break;
        case "charisma":
            levels.mod("charisma", 40, 999);
            break;
        case "shaveEnd":
            cl.c.bodyhair = 0;
            cl.display();
            missy.set("uniform", 2);
            sissy.passclass(true);
            break;
        case "femend":
            levels.mod("xdress", 50, 2);
            sissy.passclass(true);
            break;
        case "pee1":
            nav.button({
                "type": "btn",
                "name": "pee1",
                "left": 1068,
                "top": 571,
                "width": 90,
                "height": 295,
                "image": "180_ballroom/pee1.png"
            }, 180);
            break;
        case "addhour":
            char.addtime(60);
            break;
        case "peeend":
            levels.mod("piss", 100, 7);
            sissy.passclass(true);
            break;
        case "fem103_1":
            cl.nude();
            cl.c.panties = cl.cTemp.panties;
            cl.c.bra = "p";
            cl.c.pants = "ss";
            cl.c.socks = "ss";
            cl.c.shoes = "ss";
            cl.display();
            nav.bg("180_ballroom/fem103_1.jpg");
            zcl.displayMain(100, 800, .25, "clothes", true)
            break;
        case "fem103_end":
            cl.add("bra", "p");
            cl.add("pants", "ss");
            cl.add("shirt", "ss");
            cl.add("socks", "ss");
            cl.add("shoes", "ss");
            cl.c.pants = "ss";
            cl.c.shirt = "ss";
            cl.c.socks = "ss";
            cl.c.shoes = "ss";
            cl.display();
            levels.mod("xdress", 50, 999);
            sissy.passclass(true);
            break;
        case "fem201_end":
            inv.addMulti("hormone", 10);
            gv.mod("hormone", 30);
            daily.set("tookHormonePill");
            sissy.passclass(true);
            break;
        case "enema205_2":
            nav.bg("180_ballroom/enema205_2.jpg");
            zcl.assup(750, 80, .5);
            break;
        case "enema205_3":
            nav.killall();
            nav.bg("180_ballroom/enema205_3.jpg");
            break;
        case "enema205_4":
            nav.bg("180_ballroom/enema205_4.jpg");
            zcl.assup(450, 160, .95);
            break;
        case "enema205_6":
            nav.bg("180_ballroom/enema205_6.jpg");
            zcl.assup(750, 80, .5);
            break;
        case "enema205_7":
            levels.mod("xdress", 50, 999);
            sissy.passclass(true);
            break;
        case "fem121_end":
            levels.mod("heels", 100, 999);
            levels.mod("xdress", 50, 999);
            sissy.passclass(true);
            break;
        default:
            break;
    }
};

room180.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "martha",
            text: "Welcome, everyone, to your first class. I am pleased to see so many of you here today. What you " +
                " see before you is the public ballroom. For your first class, we are going to visit the showers. Please follow me.",
            button: [
                { chatID: 1, text: "...", callback: "shave0" }
            ]
        },
        {
            chatID: 1,
            speaker: "martha",
            text: "Welcome to the shower room. Please note that this is a communal space, and privacy is not guaranteed. " +
                "It is customary for all students to shave their bodies before beginning their training, as this " +
                "promotes hygiene and prevents the spread of disease.",
            button: [
                { chatID: 2, text: "...", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "martha",
            text: "I will now distribute shaving cream and disposable razors to each of you. Please conduct yourselves " +
                "with decorum and propriety while shaving in my presence. Ladies should always maintain their composure. " +
                "Please proceed with dispatch. There is no need for delay.",
            button: [
                { chatID: 3, text: "...", callback: "shave1" }
            ]
        },
        {
            chatID: 3,
            speaker: "!thomas",
            text: "So, uhhh. Do you want to take turns showering? ",
            button: [
                { chatID: 4, text: "...", callback: "" }
            ]
        },
        {
            chatID: 4,
            speaker: "!philbert",
            text: "No you idiot. That will take forever. Didn't you take showers at school? Just grab a razor and start " +
                "shaving. Just don't drop the soap.. or do hahahaha!",
            button: [
                { chatID: 5, text: "...", callback: "" }
            ]
        },
        {
            chatID: 5,
            speaker: "!kareem",
            text: "Alright, let's just get in there and shave. Like Philbert said, we don't want to catch any heat for taking too long.",
            button: [
                { chatID: 6, text: "Yeah, we should all go in and shave. ", callback: "charisma" },
                { chatID: 7, text: "No way. I don't want to be naked in front of you all. ", callback: "" },
            ]
        },
        {
            chatID: 6,
            speaker: "!kareem",
            text: "Word",
            button: [
                { chatID: 10, text: "[Strip and shave]", callback: "shave2" },
            ]
        },
        {
            chatID: 7,
            speaker: "!chris",
            text: "I agree with " + sc.n("me") + ". We should do it one at a time. ",
            button: [
                { chatID: 8, text: "...", callback: "shave1point5" },
            ]
        },
        {
            chatID: 8,
            speaker: "martha",
            text: "I have instructed you to take a shower. Please comply with my request. Forthwith.",
            button: [
                { chatID: 9, text: "oh", callback: "" },
            ]
        },
        {
            chatID: 9,
            speaker: "!philbert",
            text: "See. I told you nerds. Lets go shower together!",
            button: [
                { chatID: 10, text: "[Strip and shave]", callback: "shave2" },
            ]
        },
        {
            chatID: 10,
            speaker: "!sporty",
            text: "Damn Thomas. You really are hairy! ",
            button: [
                { chatID: 11, text: "...", callback: "" },
            ]
        },
        {
            chatID: 11,
            speaker: "!thomas",
            text: "I know. Martin over that has it easy. I'm going to be here forever. ",
            button: [
                { chatID: 12, text: "...", callback: "" },
            ]
        },
        {
            chatID: 12,
            speaker: "!timothy",
            text: "Ouch! Fuck. I cut my balls with this razor!  ",
            button: [
                { chatID: 13, text: "...", callback: "" },
            ]
        },
        {
            chatID: 13,
            speaker: "!martin",
            text: "You have to pull the skin tight. You can't just run the razor over them. ",
            button: [
                { chatID: 14, text: "...", callback: "" },
            ]
        },
        {
            chatID: 14,
            speaker: "!jeremy",
            text: "There's so much shaving. Do girls really do this everyday? ",
            button: [
                { chatID: 15, text: "...", callback: "" },
            ]
        },
        {
            chatID: 15,
            speaker: "!sporty",
            text: "You don't have to shave everyday. I shave for swimming. Usually I shave once a week, or right before a swim meet. ",
            button: [
                { chatID: 16, text: "...", callback: "shave3" },
            ]
        },
        {
            chatID: 16,
            speaker: "!philbert",
            text: "You know Chris. You ass is so smooth and fat. It's totally like a girls! ",
            button: [
                { chatID: 17, text: "...", callback: "" },
            ]
        },
        {
            chatID: 17,
            speaker: "!chris",
            text: "...",
            button: [
                { chatID: 18, text: "...", callback: "" },
            ]
        },
        {
            chatID: 18,
            speaker: "!philbert",
            text: "If I saw you from behind I would totally try to pound it. With my dick! ",
            button: [
                { chatID: 19, text: "Philbert, leave Chris alone. ", callback: "charisma" },
                { chatID: 20, text: "...", callback: "" },
            ]
        },
        {
            chatID: 19,
            speaker: "!philbert",
            text: "You have a girl's ass too! I bet it's begging for my cock! ",
            button: [
                { chatID: 20, text: "wa...", callback: "" },
            ]
        },
        {
            chatID: 20,
            speaker: "!kareem",
            text: "Don't be salty, bro. Just chill and get that shave done.",
            button: [
                { chatID: 21, text: "...", callback: "" },
            ]
        },
        {
            chatID: 21,
            speaker: "!sporty",
            text: "That should do it. All squeeky smooth. ",
            button: [
                { chatID: 22, text: "...", callback: "shave4" },
            ]
        },
        {
            chatID: 22,
            speaker: "martha",
            text: "Ladies and gentlemen, I believe we are ready to proceed. Please dry yourselves off and dress yourselves. " +
                "Afterwards, please join me in the ballroom.",
            button: [
                { chatID: 23, text: "...", callback: "bg" },
            ]
        },
        {
            chatID: 23,
            speaker: "martha",
            text: "I would like to thank you all for your participation today. It is expected that all students be properly " +
                "showered and shaved before attending class in the future. Those who fail to meet the grooming standards " +
                "will be disciplined and sent home. Remember to conduct yourselves with grace and decorum in my presence, " +
                "or a formal reprimand will be necessary. Finally, Philbert, please see me after class. Your behavior was simply " +
                "unbecoming of a lady. Dismissed! ",
            button: [
                { chatID: -1, text: "...", callback: "shaveEnd" },
            ]
        },
        {
            chatID: 24,
            speaker: "martha",
            text: "Good morning ladies. Welcome to Femininity 101. In this class, I shall instruct you on the proper " +
                "conduct of a lady. We shall discuss how to sit, stand, and behave in the presence of a gentleman.",
            button: [
                { chatID: 25, text: "...", callback: "" },
            ]
        },
        {
            chatID: 25,
            speaker: "martha",
            text: "To begin our class, I would like you to observe Alex as she demonstrates the proper way to sit in a " +
                "chair. Alex, would you please take a seat in the chair in the center of the room?",
            button: [
                { chatID: 26, text: "...", callback: "fem1" },
            ]
        },
        {
            chatID: 26,
            speaker: "martha",
            text: "Excellent. Alex here is demonstrating the incorrect way to sit in a chair. Observe how he slouches forward, " +
                "his mouth drawn down in a frown. His elbows rest on his knees, and his knees are spread wide apart. " +
                "He appears to be taking up all of the space around him, as if he is entitled to it. ",
            button: [
                { chatID: 27, text: "...", callback: "" },
            ]
        },
        {
            chatID: 27,
            speaker: "martha",
            text: "Ladies, I shall now explain how a lady sits in a chair. " + sc.n("me") + ", would you please assist me? " +
                "Please cross your legs so that your penis is not on display. Place your hands away from your knees. " +
                "Sit up straight and tall, with your shoulders back and your head held high. Relax your facial muscles and " +
                "smile pleasantly. A lady's smile is one of her most attractive features. It is a sign of warmth, kindness, " +
                "and confidence. It is also a way to invite others to approach her and to make conversation. When a lady " +
                "sits with her back straight and her shoulders back, she projects an air of poise and elegance. She also " +
                "makes herself more approachable and attractive to others. By following these simple guidelines, " +
                "you can learn to sit with grace and poise, reflecting the inner qualities of a true lady.",
            button: [
                { chatID: 28, text: "...", callback: "fem2" },
            ]
        },
        {
            chatID: 28,
            speaker: "martha",
            text: "Excellent. Observe how inviting he now appears. By simply changing the way he sits, he has transformed " +
                "from an unapproachable brute to a warm and inviting lady. When you sit, it is important to be " +
                "mindful of how you appear to others. As ladies, our true purpose is to serve others. By sitting with grace " +
                "and poise, we can create an atmosphere of warmth, welcome, and service.",
            button: [
                { chatID: 29, text: "...", callback: "" },
            ]
        },
        {
            chatID: 29,
            speaker: "martha",
            text: "Ladies, please practice what you have learned at home. In our next classes, we shall discuss how to " +
                "walk, talk, and act like proper ladies. Class dismissed.",
            button: [
                { chatID: -1, text: "...", callback: "femend" },
            ]
        },
        {
            chatID: 30,
            speaker: "martha",
            text: "Good afternoon, gentlemen.Today, we shall discuss the proper use of a toilet. I know that you may all " +
                "think that you know how to use a toilet, but I assure you that there is much more to it than meets the eye. " +
                "Femininity begins in the mind, and the actions that we repeat over time shape our minds. By learning to " +
                "use the toilet properly, we can train our minds to be more feminine.",
            button: [
                { chatID: 31, text: "...", callback: "" },
            ]
        },
        {
            chatID: 31,
            speaker: "martha",
            text: "To use the toilet properly like a lady, it is customary to sit down when urinating. This helps to " +
                "prevent splashback and keeps your bathroom clean. It is also important to wipe yourself properly after " +
                "using the toilet, wiping front to back to avoid spreading bacteria. Finally, it is always polite to flush " +
                "the toilet after use to remove any waste products and keep your bathroom smelling fresh. ",
            button: [
                { chatID: 32, text: "...", callback: "" },
            ]
        },
        {
            chatID: 32,
            speaker: "martha",
            text: "I have prepared one liter of water for each of you to drink. Please drink it all. We will then wait " +
                "one hour before reviewing our lesson with a practical exercise.",
            button: [
                { chatID: -1, text: "[Drink the water]", callback: "pee1" },
            ]
        },
        {
            chatID: 33,
            speaker: "martha",
            text: "Chris, a lady would never toss her rubbish aside in such a state. Please place it upright in a neat and orderly fashion.",
            button: [
                { chatID: 34, text: "...", callback: "" },
            ]
        },
        {
            chatID: 34,
            speaker: "!chris",
            text: "Oh no. Sorry. I'm so sorry. I'll put it up. I didn't know. I'm totally Sorry. ",
            button: [
                { chatID: 35, text: "...", callback: "pee2" },
            ]
        },
        {
            chatID: 35,
            speaker: "martha",
            text: "One apology is sufficient. There is no need to speak excessively. Be concise and to the point, then cease speaking. ",
            button: [
                { chatID: 36, text: "...", callback: "" },
            ]
        },
        {
            chatID: 36,
            speaker: "!sporty",
            text: "How long do we need to wait. I had a lot of water to drink with lunch and now I really have to go. ",
            button: [
                { chatID: 37, text: "...", callback: "" },
            ]
        },
        {
            chatID: 37,
            speaker: "martha",
            text: "You will wait until I give the signal. You must always be prepared and in control of your bodily functions. " +
                "Now stand there quietly and await my instruction.",
            button: [
                { chatID: 38, text: "[Wait]", callback: "" },
            ]
        },
        {
            chatID: 38,
            speaker: "thinking",
            text: "Crap now I really have to pee. How long does she need to keep us standing here? Surly we can just go pee. " +
                "I don't see what the big deal is. ",
            button: [
                { chatID: 39, text: "[Wait more]", callback: "" },
            ]
        },
        {
            chatID: 39,
            speaker: "thinking",
            text: "She's just standing there. I can see we all need to pee. Surely this is long enough...",
            button: [
                { chatID: 40, text: "[Wait more]", callback: "" },
            ]
        },
        {
            chatID: 40,
            speaker: "thinking",
            text: "Ok. Now it's starting to hurt. ",
            button: [
                { chatID: 41, text: "[Wait more]", callback: "" },
            ]
        },
        {
            chatID: 41,
            speaker: "thinking",
            text: "Is she trying to make us pee our pants? ",
            button: [
                { chatID: 42, text: "[Wait more]", callback: "addhour" },
            ]
        },
        {
            chatID: 42,
            speaker: "thinking",
            text: "It's been an hour! If she doesn't hurry up there's going to be 4 puddles of pee at our feet. ",
            button: [
                { chatID: 43, text: "[Wait more]", callback: "" },
            ]
        },
        {
            chatID: 43,
            speaker: "martha",
            text: "Very well. It is time. Please follow me to the restroom. ",
            button: [
                { chatID: 44, text: "[Follow her]", callback: "pee3" },
            ]
        },
        {
            chatID: 44,
            speaker: "martha",
            text: "As you can see there isn't a drop of pee on my spotless floor and we will keep it that way. " +
                "Please take a seat with grace and poise. " +
                "",
            button: [
                { chatID: 45, text: "...", callback: "" },
            ]
        },
        {
            chatID: 45,
            speaker: "!chris",
            text: "There aren't any dividers for the stalls." +
                "",
            button: [
                { chatID: 46, text: "...", callback: "" },
            ]
        },
        {
            chatID: 46,
            speaker: "martha",
            text: "Certainly not. As a lady, it is imperative that you recognize that your entire existence shall be " +
                "within the public domain, and concealing oneself will no longer be an option. Embrace with grace your " +
                "newfound existence, wherein you shall perpetually be in the spotlight.",
            button: [
                { chatID: 47, text: "[Can't wait any longer. Sit down and pee!]", callback: "pee4" },
            ]
        },
        {
            chatID: 47,
            speaker: "!kareem",
            text: "Yo, I was about to piss my pants. I had to go so bad.",
            button: [
                { chatID: 48, text: "...", callback: "" },
            ]
        },
        {
            chatID: 48,
            speaker: "martha",
            text: "Kareem. Such vulgar language. Simply unlady like. ",
            button: [
                { chatID: 49, text: "...", callback: "" },
            ]
        },
        {
            chatID: 49,
            speaker: "!kareem",
            text: "Oh snap! Sorry. I'm working on it lady girl. ",
            button: [
                { chatID: 50, text: "...", callback: "pee5" },
            ]
        },
        {
            chatID: 50,
            speaker: "martha",
            text: "Perfectly understandable. To change oneself is a journey, and I am happy to walk with you on this path. " +
                "We shall improve ourselves each day, until we become proper ladies. Now don't forget to wipe up any excess urine, " +
                "front to back, then we shall be on our way. ",
            button: [
                { chatID: 51, text: "Yea ma'am. [Wipe your chastity cage dry]", callback: "" },
            ]
        },
        {
            chatID: 51,
            speaker: "martha",
            text: "Speaking of journey's, we have started our journey of discovery into urination. Future instruction will " +
                "be much more interactive. Practice sitting while you pee at home. Once those chastity cages are on everyone " +
                "you will find that the dribble of a stream will be quite difficult while standing. Adieu",
            button: [
                { chatID: -1, text: "[Pull up your panties and leave]", callback: "peeend" },
            ]
        },
        {
            chatID: 52,
            speaker: "missy",
            text: "Ok sissy trainees, before you play the part, you have to dress for the part. " +
                "Since we're so amazing we're going to issue you your first set of clothing. ",
            button: [
                { chatID: 53, text: "...", callback: "" },
            ]
        },
        {
            chatID: 53,
            speaker: "martha",
            text: "I've carefully selected this outfit to guarantee it meets our standards for " +
                "both suitability and style. In the past, individual choices occasionally resulted " +
                "in attire that wasn't quite lady like. It was like walking into a cheap brothal. ",
            button: [
                { chatID: 54, text: "...", callback: "" },
            ]
        },
        {
            chatID: 54,
            speaker: "martha",
            text: "Ladies, it is now time for each of you to don your newly acquired uniforms. " +
                "Let us proceed forthwith to ensure that your attire meets the required standards.",
            button: [
                { chatID: 55, text: "...", callback: "" },
            ]
        },
        {
            chatID: 55,
            speaker: "missy",
            text: "Everyone strip out of those disgusting clothes and put on your new pretty " +
                "uniforms. Now! And keep yourp panties on! We don't need your nasty cum drool " +
                "all over the chairs and floors. ",
            button: [
                { chatID: 63, text: "...", callback: "fem103_3" },
            ]
        },
        {
            chatID: 56,
            speaker: "ralph",
            text: "This is so awesome! I love these uniforms, but I do wish they were more purple. " +
                "I'm so psyched that I get to wear pretty clothes around so many others. ",
            button: [
                { chatID: 57, text: "...", callback: "" },
            ]
        },
        {
            chatID: 57,
            speaker: "me",
            text: "I know right! I love how soft and breezy it is. I feel like I've lost the " +
                "weight of my normal clothing and now I'm just floating. It's nice to be around " +
                "others going through the same thing at the same time. I'm really glad I came here, " +
                "even if " + sc.n("p") + " seems like she's going to be a bit crazy. ",
            button: [
                { chatID: 58, text: "...", callback: "" },
            ]
        },
        {
            chatID: 58,
            speaker: "ralph",
            text: "But she's so hot! She can lube me anyday. I'm more afraid of " + sc.n("black") + 
                "! I hope she takes it easy on us. I don't even want to take her class. Who likes " +
                "all that rough stuff? I want a girl to be nice and gentle with me. ",
            button: [
                { chatID: 59, text: "Totally", callback: "" },
            ]
        },
        {
            chatID: 59,
            speaker: "ralph",
            text: "I saw the upcoming classes. I'm so looking forward to the high heel class! " +
                "I trip so much when I try to wear them at home. Every time I fall my two moms yells " +
                "yell at me wondering what I'm doing in my room. They think I'm the clumsiest person " +
                "in the world.",
            button: [
                { chatID: 60, text: "Hahah, You are though!", callback: "fem103_2" },
            ]
        },
        {
            chatID: 60,
            speaker: "missy",
            text: "Ok sluts, Chat time is over. Line up, I have other shit to do today. ",
            button: [
                { chatID: 61, text: "...", callback: "fem103_0" },
            ]
        },
        {
            chatID: 61,
            speaker: "missy",
            text: "This is your uniform. You won't be admitted to class without it. I don't care " +
                "were you change your clothes, you can do it at home, or in the lobby before class. " + 
                "Also wash it. I know most of you get embarrassed wearing your cute little uniforms " +
                "in public, but don't be the stinky girl in class. ",
            button: [
                { chatID: 62, text: "...", callback: "" },
            ]
        },
        {
            chatID: 62,
            speaker: "martha",
            text: "Ladies, class has now concluded. As Missy mentioned, it's essential to maintain " +
                "the pristine condition of your uniforms by keeping them clean and free of wrinkles. " +
                "I eagerly anticipate our next class where we will refine not only your attire but " +
                "also your demeanor. You are now free to go.",
            button: [
                { chatID: -1, text: "...", callback: "fem103_end" },
            ]
        },
        {
            chatID: 63,
            speaker: "thinking",
            text: "I think today just may be the best day of my life. These clothes are so girly " +
                "and soft. I just feel so pretty putting them on! Boy's clothes are so boring and " +
                "restrictive. These socks, bra, skirt, everything makes me feel so pretty! I really " +
                "do feel like today is the first day of the rest of my life!",
            button: [
                { chatID: 64, text: "...", callback: "" },
            ]
        },
        {
            chatID: 64,
            speaker: "ralph",
            text: "Hey! " + sc.n("me") + ". Are you daydreaming? ",
            button: [
                { chatID: 56, text: "Huh? ", callback: "fem103_1" },
            ]
        },
        {
            chatID: 65,
            speaker: "martha",
            text: "Ladies, I am going to give you a little lesson on how hormones can help you " +
                "achieve your true sissy potential. At the moment, you have the mind of a sissy but the " +
                "body of a boy. That pesky testosterones are blocking your true potential and preventing " +
                "your body from matching your mind.",
            button: [
                { chatID: 66, text: "... ", callback: "fem201_2" },
            ]
        },
        {
            chatID: 66,
            speaker: "martha",
            text: "Currently, your bodies are saturated with testosterone, which seeps into your brains " +
                "and emanates through your pores. The scent it produces is rather unpleasant. This hormone, " +
                "testosterone, forms the male body to a purely functional beast, lacking any aesthetic " +
                "appeal.",
            button: [
                { chatID: 67, text: "... ", callback: "fem201_3" },
            ]
        },
        {
            chatID: 67,
            speaker: "martha",
            text: "Sexual desires is rooted in beauty. The large breasts, plump lips, wide hips, long hair, " +
                "and smooth skin. Traits you lack. You have too look like an object of sex if you want to be desired. ",
            button: [
                { chatID: 68, text: "... ", callback: "fem201_4" },
            ]
        },
        {
            chatID: 68,
            speaker: "martha",
            text: "My, wouldn't we all love to be positively adored, wouldn't we? Well, fret no more, dears! Today, we embark on a delightful journey of enhancing your natural allure, all thanks to the marvels of modern science. Our brilliant chemist has concocted these very special little marvels – a bespoke pill for each of you! Now, these aren't your run-of-the-mill tonics, mind you. These clever creations work in perfect harmony with your own desires, triggering subtle changes within to bring forth your most captivating self. After all, true beauty comes not just from the outside, but from a confident spirit that shines through, wouldn't you agree?",
            button: [
                { chatID: 69, text: "... ", callback: "" },
            ]
        },
        {
            chatID: 69,
            speaker: "martha",
            text: "Oh my, these little treasures I have here can be quite the boon for a lady's allure! They work their magic in six delightful ways. First, they'll naturally encourage your lovely locks to grow thicker and faster, while keeping those pesky body hairs at bay for a delightfully smooth you.And wouldn't you know it, your skin will be positively radiant, your lips will have a touch more pout, and your figure will become even more divinely proportioned – fuller thighs and a more ample bosom, simply delightful! Now, for the gentlemen who appreciate a bit of... discretion, these might even have a delightfully shrinking effect down there, perfect for a smaller chastity device, if you know what I mean wink.",
            button: [
                { chatID: 70, text: "...", callback: "" }
            ]
        },
        {
            chatID: 70,
            speaker: "martha",
            text: "Now, darling, listen closely. Just one pill a day, that's all you need. Soon, while you slumber peacefully, you'll begin to notice a delightful transformation.To get you started on this marvelous journey, I'll provide each of you with ten precious pearls of change, ten little pills. Once those are gone, simply pop down to the Pink Room to replenish your supply. ",
            button: [
                { chatID: -1, text: "[Take your pill and be on your way. ]", callback: "fem201_end" }
            ]
        },
        {
            chatID: 71,
            speaker: "martha",
            text: "I'm so excited for this lesson. You are looking the part of true femininity, a vision " +
                "that wouldn't fail to turn heads. But once you have seduced a gentleman, your must feel " +
                "good when you envelop his penis into your Princess Hole. ",
            button: [
                { chatID: 72, text: "...", callback: "" }
            ]
        },
        {
            chatID: 72,
            speaker: "martha",
            text: "Now I'm going to apply an enema of my own making into each of your Princess Holes. This " +
                "mixture will smooth out your skin and make your holes smooth and moist to the touch. " +
                " Now I need each " +
                "of you to strip down and place your knees and hands on the floor so I may administer it. After " +
                "you've received your enema hold it in as long as you can to acheive maximum effectiveness. ",
            button: [
                { chatID: 73, text: "[Get ready for your enema]", callback: "enema205_2" }
            ]
        },
        {
            chatID: 73,
            speaker: "martha",
            text: "Now, now, there's no need to be tense, darling. You might feel a little pressure as my special concoction finds its way inside, filling you up ever so gently. It's quite natural to want to push it back, but trust me, the best thing to do is simply let it settle in. If you find yourself feeling a bit overwhelmed, why not close your eyes and allow your mind to drift away? Think of charming princes, enchanted forests, and happily ever afters. Let the magic of the mixture work its charm.",
            button: [
                { chatID: 74, text: "...", callback: "enema205_3" }
            ]
        },
        {
            chatID: 74,
            speaker: "martha",
            text: "Oh my, isn't that simply the most adorable little hole? Now, just let that feeling " +
                "wash right over you, dear. Imagine that precious hole, so soft and smooth as silk. " +
                "You're absorbing that very essence, my dear, velvety and delightful. " +
                "Splendid work, simply splendid! Now I have to step away. Just hold it in as long as you can. ",
            button: [
                { chatID: 75, text: "Yes ma'am", callback: "enema205_4" }
            ]
        },
        {
            chatID: 75,
            speaker: "!chris",
            text: "UUgh! I can't hold it in any longer! It's getting out! I can't stop it!",
            button: [
                { chatID: 76, text: "You can do it! Just hold it in!", callback: "enema205_5" }
            ]
        },
        {
            chatID: 76,
            speaker: "philbert",
            text: "Hahaha! You should change your name from Sporty to Squirty! ",
            button: [
                { chatID: 77, text: "Shut up Philbert! We're all cramping here!", callback: "enema205_6" }
            ]
        },
        {
            chatID: 77,
            speaker: "martha",
            text: "From your shouts I can tell it's time to expel the liquids. Once you're done you'll find " +
                "each of you has a smooth and moist anus, perfect for sliding phalluses in and out. Wash your " +
                "bodies and the shower, then you can be on your way.",
            button: [
                { chatID: -1, text: "[Clean up slut]", callback: "enema205_7" }
            ]
        },
        {
            chatID: 78,
            speaker: "martha",
            text: "Ah, welcome, my dears, to a most delightful lesson on the art of walking in high heels. I do trust that you will all approach this endeavor with a touch of grace and poise. While it may seem daunting at first, with a bit of practice, you shall find yourselves gliding across the room with the elegance of a swan.",
            button: [
                { chatID: 79, text: "...", callback: "" }
            ]
        },
        {
            chatID: 79,
            speaker: "martha",
            text: "Now, my dears, to ensure a smooth transition into the world of high heels, I do suggest that we begin with a pair of low heels. These will allow you to acclimate yourselves to the sensation of elevated heels without the added challenge of extreme height. Do be mindful when donning them, however. A misstep can be quite unfortunate, and I would not wish for any of you to find yourselves in an undignified position.",
            button: [
                { chatID: 80, text: "[Put on your low heels]", callback: "fem121_0" }
            ]
        },
        {
            chatID: 80,
            speaker: "thinking",
            text: "I do love these kitten heels. They're so light and open. I can feel the " +
                "soft kiss of the air and it passes over the top of my feet. I wonder if " +
                "these low heels will push up my butt and make it pop more.",
            button: [
                { chatID: 81, text: "...", callback: "fem121_1" }
            ]
        },
        {
            chatID: 81,
            speaker: "!philbert",
            text: "You're so clumsy you're totally going to fall on your ass as soon " +
                "as you try to get up! ",
            button: [
                { chatID: 82, text: "I'm just trying to enjoy class.", callback: "fem121_2" }
            ]
        },
        {
            chatID: 82,
            speaker: "!thomas",
            text: "Can't we ever get 5 minutes without you trying to ruin everything? ",
            button: [
                { chatID: 83, text: "...", callback: "" }
            ]
        },
        {
            chatID: 83,
            speaker: "!philbert",
            text: "I can't help if you ladies are awkward and clumsy, not as graceful " +
                "as I...",
            button: [
                { chatID: 84, text: "...", callback: "fem121_3" }
            ]
        },
        {
            chatID: 84,
            speaker: "!philbert",
            text: "AAAAAKkkkkk",
            button: [
                { chatID: 85, text: "...", callback: "fem121_4" }
            ]
        },
        {
            chatID: 85,
            speaker: "martha",
            text: "A lady of refinement knows that true elegance lies in subtlety. To flaunt one's virtues is to diminish them. Let others notice our poise, our grace, our quiet strength. It is in these unseen qualities that we truly shine." +
                "Please rise from your seats. May this day be filled with growth and refined discourse. ",
            button: [
                { chatID: 86, text: "...", callback: "fem121_5" }
            ]
        },
        {
            chatID: 86,
            speaker: "martha",
            text: "Keep your heads up and maintain your posture. A few more laps, and we shall conclude our walking lesson. Remember, the beauty of walking lies not only in the steps but also in the grace and elegance with which they are executed.",
            button: [
                { chatID: 87, text: "...", callback: "bg" }
            ]
        },
        {
            chatID: 87,
            speaker: "martha",
            text: "While our formal lesson may have concluded, the true test of your refinement lies in your everyday actions. Remember, a lady's walk is a silent expression of her grace and poise. Practice walking with your head held high, your shoulders back, and your steps measured. Your feet may protest initially, but with perseverance, you will find that high heels become an extension of your elegance.",
            button: [
                { chatID: -1, text: "[Return her shoes and finish the lesson.]", callback: "fem121_end" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};