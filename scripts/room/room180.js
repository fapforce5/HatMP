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
        case "pee101":
            nav.bg("180_ballroom/pee0.jpg");
            chat(30, 180);
            break;
        case "fem103":
            nav.bg("180_ballroom/fem103_0.jpg");
            chat(52, 180);
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
            levels.mod("xdress", 100, 2);
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
            levels.mod("pee", 100, 2);
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
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};