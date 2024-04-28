//Cum
var room178 = {};
room178.main = function () {
    switch (gv.get("sissySchoolClass")) {
        case "cum101":
            if (gv.get("sissySchoolClassDays") === 0) {
                nav.bg("178_cum/cum0.jpg");
                chat(0, 178);
            }
            else {
                nav.bg("178_cum/cum100.jpg");
                chat(13, 178);
            }
            break;
    }
};

room178.btnclick = function (name) {
    switch (name) {
        case "":
            break;
        default:
            break;
    }
};

room178.chatcatch = function (callback) {
    switch (callback) {
        case "cum1":
        case "cum2":
        case "cum3":
        case "cum4":
        case "cum5":
        case "cum101":
        case "cum102":
        case "cum103":
        case "cum104":
        case "cum105":
        case "cum106":
        case "cum107":
            nav.bg("178_cum/" + callback + ".jpg");
            break;
        case "cum6":
        case "cum7":
            var chastity = cl.c.chastity === "cage" ? "cage" : "pink";
            nav.bg("178_cum/" + callback + "_" + chastity + ".jpg");
            break;
        case "cum8":
            gv.set("cum", char.addMinutes(g.dt, 2160));

            if (gv.get("cum") > g.dt)
                gv.set("cum", g.dt);
            cl.display();
            var chastityx = cl.c.chastity === "cage" ? "cage" : "pink";
            nav.bg("178_cum/" + callback + "_" + chastityx + ".jpg");
            break;
        case "cum9":
            levels.mod("cum", 50, 999);
            nav.bg("178_cum/" + callback + ".jpg");
            break;
        case "cumend":
            gv.mod("sissySchoolClassDays", 1);
            char.settime(17, 18);
            char.room(201);
            break;
        case "cumend101Pass":
            sissy.passclass(true);
            break;
        default:
            break;
    }
};

room178.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "missy",
            text: "Hello my cum piggies. You're all here because you're interested in swollowing cum, but you're too scared to do it on " +
                "your own. It's like the first time you try coffee. It can be a little bitter, have an unusual taste or texture, but " +
                "you learn to enjoy it all. Even crave it. Like coffee cum isn't all the same. You'll learn where good smooth cum is, " +
                "and where to avoid nasty cheap bitter cum. ",
            button: [
                { chatID: 1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "missy",
            text: "Since this is your first class we're going to start out simple. Each of you will savor and swollow your own cum. It's " +
                "in your body anyway, we're just putting it in a differt hole. Your mouth hole. Next class we'll have some more fun, but " +
                "I'm a busy woman so this class will be quick. Luckily only " + sc.n("me") + " is in chastity, so you other two " +
                "can just jack off in my hand. Martin and Jeremy go first. I'll do " + sc.n("me") + " last. I have a special gift " +
                "for my chasity sissy. Now bring those cocks here. ",
            button: [
                { chatID: 2, text: "Yes ma'am", callback: "cum1" }
            ]
        },
        {
            chatID: 2,
            speaker: "missy",
            text: "That's very good Martin. Remember to smile when eating cum. It's the best gift you can receive. Next! ",
            button: [
                { chatID: 3, text: "...", callback: "cum2" }
            ]
        },
        {
            chatID: 3,
            speaker: "missy",
            text: "That's a lot of cum Jeremy. It looks like you've been saving it up for some time. Save it up for next class " +
                "too. I have a yummy suprise for you all. Next!",
            button: [
                { chatID: 4, text: "...", callback: "cum3" }
            ]
        },
        {
            chatID: 4,
            speaker: "missy",
            text: "My favorite pupil. Looking to get released from that chastity cage? You know I could just skip it and keep " + 
                "you in that cage without release. But then you would miss out on the fun of eating your own cum... Hmmm....",
            button: [
                { chatID: 5, text: "Ohh no", callback: "" }
            ]
        },
        {
            chatID: 5,
            speaker: "missy",
            text: "I could try squeezing your balls till you ejaculate. I've heard stories, but there's mixed results. Would " +
                "you like it if I squeezed your balls so hard cum came out? I would probably need to stand on them with my heels. ",
            button: [
                { chatID: 6, text: "Please no, ma'am", callback: "" }
            ]
        },
        {
            chatID: 6,
            speaker: "missy",
            text: "Hush. You don't get a say in what I do. Your cock and balls are mine. I wonder if they'll break like eggs. We " +
                "would have to have them removed. You would have a dick with no balls. How funny that would look. Just an empty " +
                "sack hanging off your dick. I've never cracked a man's eggs before. It sounds like so much fun. Strip down while " +
                "I get ready. ",
            button: [
                { chatID: 7, text: "*groan*", callback: "cum4" }
            ]
        },
        {
            chatID: 7,
            speaker: "missy",
            text: "Hmmmm. Now where did I put that... It's around here somewhere. Enjoy these last few minutes with your " +
                "balls fully intact before they're gone forever. Doesn't really matter. Not like you're using them. Better " +  
                "to just get rid of old junk. Maybe I'll just cut your balls off and squeeze the cum out of them into your " +
                "mouth. Hmmmmm... Now where is... Oh. look! ",
            button: [
                { chatID: 8, text: "*whimper*", callback: "cum5" }
            ]
        },
        {
            chatID: 8,
            speaker: "missy",
            text: "It's my favorite vibrator. It's your lucky day, you get to keep your balls. " +
                "I love playing with vibrators. Bring that caged cock over here " +
                "so I can play with it! ",
            button: [
                { chatID: 9, text: "*whew*", callback: "cum6" }
            ]
        },
        {
            chatID: 9,
            speaker: "missy",
            text: "Men masturbate with their hands. Stroking their cock up and down. Sissy girls like you cum with vibrators on " +
                "their little clitties. The clitty is too small to stoke it, but the vibrations on it feel oh, so good. Does you " +
                "clitty like the vibrations while in the cage? It does feel good doesn't it? Tell me when you're about to cum. ",
            button: [
                { chatID: 10, text: "....I'm going to cum....", callback: "cum7" }
            ]
        },
        {
            chatID: 10,
            speaker: "missy",
            text: "Hahaha! Shake all you want, you won't get a real orgasm. Your balls may drain, but the arousal remains. ",
            button: [
                { chatID: 11, text: "....UUUUghghghghgh....", callback: "cum8" }
            ]
        },
        {
            chatID: 11,
            speaker: "missy",
            text: "See how it oozes out now. Sissies don't shoot their cum across the room, it just oozes out like vaginal " +
                "discharge. That's why you wear panties, to catch the vaginial discharge from dripping all over the floor. Now " +
                "drop to your knees and open your mouth. You're going to eat this sissy discharge. ",
            button: [
                { chatID: 12, text: "yes ma'am", callback: "cum9" }
            ]
        },
        {
            chatID: 12,
            speaker: "missy",
            text: "That's a good piggy. Eat your discharge. You'll be a full on sissy before you know it. ",
            button: [
                { chatID: -1, text: "yes ma'am", callback: "cumend" }
            ]
        },
        {
            chatID: 13,
            speaker: "missy",
            text: "Welcome back my hungry little piggies. Ready to root around with your piggy noses? ",
            button: [
                { chatID: 14, text: "Ma'am?", callback: "" }
            ]
        },
        {
            chatID: 14,
            speaker: "missy",
            text: "Your first lesson was easy, eating your own cum. This next lesson we're going to build on that. Eating " +
                "and swallowing someone else's cum, but with a twist to make it go down easier. To begin our lesson we're going " +
                "to need something. Can anyone guess what it is? ",
            button: [
                { chatID: 15, text: "A vibrator? ", callback: "" },
                { chatID: 16, text: "...", callback: "" },
            ]
        },
        {
            chatID: 15,
            speaker: "missy",
            text: "No idiot. This isn't a sissygasm class. Anyone else? ",
            button: [
                { chatID: 16, text: "...", callback: "" },
            ]
        },
        {
            chatID: 16,
            speaker: "!martin",
            text: "Cum ma'am?",
            button: [
                { chatID: 17, text: "...", callback: "" },
            ]
        },
        {
            chatID: 17,
            speaker: "missy",
            text: "That's right Martin. Cum. I'll unlock each of you to jack your little pee pees in this bowl. Consider yourself " +
                "lucky to jack off in my presence, because it won't happen again. Now each of you strip and kneel before me " +
                "while you jack off in my doggy bowl. ",
            button: [
                { chatID: 18, text: "...", callback: "cum101" },
            ]
        },
        {
            chatID: 18,
            speaker: "missy",
            text: "Nice cum shot Martin. Jeremy cum in my bowl too. ",
            button: [
                { chatID: 19, text: "...", callback: "cum102" },
            ]
        },
        {
            chatID: 19,
            speaker: "missy",
            text: "Not as big of a load as last time, but this will work. ",
            button: [
                { chatID: 20, text: "My turn ma'am? ", callback: "cum103" },
            ]
        },
        {
            chatID: 20,
            speaker: "missy",
            text: "No. Your last orgasm was a one time gift. Castity sluts don't get to cum, but lucky for you I'll let you " +
                "participate even if you didn't contribute. Now let slip into something more arousing for your feeding. ",
            button: [
                { chatID: 21, text: "...", callback: "cum104" },
            ]
        },
        {
            chatID: 21,
            speaker: "missy",
            text: sc.n("me") + " take that bowl of cum and drizzle it over my ass like warm gooey cinnamon buns. ",
            button: [
                { chatID: 22, text: "Yes ma'am", callback: "cum105" },
            ]
        },
        {
            chatID: 22,
            speaker: "missy",
            text: "Cum doesn't always ejaculate straight from the cock into your little slutty mouths. Sometimes that cum " +
                "gets shot inside a pussy, or over an ass. A sissy's job is slurp down any and all cum no matter where it lays. " +
                "Now get in there and clean every last drop of cum off my ass my little tramps. ",
            button: [
                { chatID: 23, text: "...", callback: "cum106" },
            ]
        },
        {
            chatID: 23,
            speaker: "missy",
            text: "That's my good little sluts. Lick up every drop. Dig your tonge into my asshole and pussy lips to make sure it's " +
                "all clean. Wouldn't want your nasty cum dripping into my panties. ",
            button: [
                { chatID: 24, text: "...", callback: "cum107" },
            ]
        },
        {
            chatID: 24,
            speaker: "missy",
            text: "Such eager mouths. You've done well and passed the class. Remember, a good slut swallows, a bad whore spits. " +
                "Now go and find some cocks to slups down. ",
            button: [
                { chatID: -1, text: "...", callback: "cumend101Pass" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};