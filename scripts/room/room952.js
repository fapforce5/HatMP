//Room name
var room952 = {};
room952.main = function () {
    var btnList = [
        {
            "type": "btn",
            "name": "mine",
            "left": 244,
            "top": 27,
            "width": 298,
            "height": 942,
            "title": "Return to your cell",
            "image": "952_hallway/hallway1.png"
        },
        {
            "type": "btn",
            "name": "bodhi",
            "left": 652,
            "top": 239,
            "width": 138,
            "height": 638,
            "title": "Bodhi's Cell",
            "image": "952_hallway/hallway2.png"
        },
        {
            "type": "btn",
            "name": "bigdick",
            "left": 858,
            "top": 357,
            "width": 60,
            "height": 467,
            "title": "Last Cell",
            "image": "952_hallway/hallway3.png"
        },
        {
            "type": "btn",
            "name": "escape",
            "left": 1206,
            "top": 445,
            "width": 173,
            "height": 243,
            "title": "Attempt and escape",
            "image": "952_hallway/escape.png"
        }
    ];
    $.each(btnList, function (i, v) {
        nav.button(v, 952);
    });
};

room952.btnclick = function (name) {
    switch (name) {
        case "mine":
            chat(0, 952);
            break;
        case "bodhi":
            chat(1, 952);
            break;
        case "bigdick":
            nav.killall();
            nav.bg("950_cell/cell.jpg");
            nav.button({
                "type": "btn",
                "name": "bexit",
                "left": 496,
                "top": 824,
                "width": 423,
                "height": 166,
                "title": "Exit",
                "image": "952_hallway/bexit.png"
            }, 952);
            nav.button({
                "type": "btn",
                "name": "b0",
                "left": 1061,
                "top": 381,
                "width": 476,
                "height": 652,
                "title": "Talk to the big guy",
                "image": "952_hallway/b0.png"
            }, 952);
            break;
        case "bexit":
            char.room(952);
            break;
        case "b0":
            chat(2, 952);
            break;
        case "escape":
            chat(16, 952);
            break;
        case "escape2cancel":
            char.room(952);
            break;
        case "escape2":
            nav.killall();
            scc.love("cult", -20, 100);
            nav.bg("952_hallway/escape3.jpg");
            chat(18, 952);
            break;
        case "butt2":
            chat(40, 952);
            nav.killbutton("butt2");
            break;
        case "t1":
            if (g.pass < 4)
                nav.bg("952_hallway/l" + g.pass + ".jpg");
            else {
                nav.killbutton("t1");
                nav.bg("952_hallway/l4.jpg");
                chat(48, 952);
            }
            g.pass++;
            break;
        case "b1":
            if (g.pass === 1)
                chat(51, 952);
            else 
                chat(52, 952);
            g.pass++;
            break;
        default:
            break;
    }
};

room952.chatcatch = function (callback) {
    switch (callback) {
        case "return":
            g.internal.interval++;
            char.room(950);
            break;
        case "reset":
            char.room(952);
            break;
        case "bodhi":
            if (g.internal.chaple > 0 && !sc.checkevent("daria", -1)) {
                nav.killall();
                nav.bg("952_hallway/bodhi0.jpg");
                chat(3, 952);
            }
            else {
                if (sc.getstep('daria') < 5) {
                    sc.setstep('daria', 5);
                    nav.killall();
                    nav.bg("952_hallway/bodhi0.jpg");
                    chat(15, 952);
                }
                else {
                    nav.killall();
                    nav.bg("952_hallway/bodhi0.jpg");
                    chat(46, 952);
                }
            }
            break;
        case "end1":
            sc.setstep("daria", -1);
            g.internal.interval++;
            char.room(950);
            break;
        case "escape1":
            nav.killall();
            nav.bg("952_hallway/escape1.jpg");
            nav.button({
                "type": "btn",
                "name": "escape2cancel",
                "left": 505,
                "top": 958,
                "width": 807,
                "height": 120,
                "title": "Return to your hallway",
                "image": "952_hallway/escape2cancel.png"
            }, 952);
            nav.button({
                "type": "btn",
                "name": "escape2",
                "left": 1364,
                "top": 199,
                "width": 169,
                "height": 705,
                "title": "Try the side hallway",
                "image": "952_hallway/escape2.png"
            }, 952);
            break;
        case "escape4":
            nav.bg("952_hallway/escape4.jpg");
            break;
        case "escape5":
            nav.bg("952_hallway/escape5.jpg");
            break;
        case "escape6":
            nav.bg("952_hallway/escape6.jpg");
            break;
        case "escape7":
            char.addDays(1);
            char.settime(2, 0);
            nav.bg("952_hallway/escape7.jpg");
            break;
        case "escape8":
            char.settime(9, 0);
            nav.bg("952_hallway/escape8.jpg");
            break;
        case "escape9":
            nav.bg("952_hallway/escape9.jpg");
            break;
        case "escape10":
            nav.bg("952_hallway/escape10.jpg");
            break;
        case "escape11":
            char.settime(14, 0);
            gv.set("energy", 0);
            gv.mod("receiveAnalMale", 1);
            gv.mod("creamPied", 1);
            cl.c.butthole += .5;
            g.internal.nightEvent = false;
            g.internal.interval = 2;
            g.internal.constDayDirty++;
            g.internal.day++;
            g.internal.jo = false;
            g.pass = 950;
            g.internal.food = false;
            char.room(950);
            break;
        case "butt1":
            nav.killall();
            nav.bg("952_hallway/butt1.jpg");
            break;
        case "butt2":
            nav.bg("952_hallway/butt2.jpg");
            nav.button({
                "type": "btn",
                "name": "butt2",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "title": "Get in position",
                "image": "952_hallway/butt2.jpg"
            }, 952);
            break;
        case "butt3":
            nav.bg("952_hallway/butt3.jpg");
            break;
        case "butt4":
            gv.mod("receiveAnalFemale", 1);
            gv.mod("sissygasm", 1);
            g.internal.interval++;
            char.room(950);
            break;
        case "l0":
            g.pass = 0;
            nav.button({
                "type": "btn",
                "name": "t1",
                "left": 1687,
                "top": 900,
                "width": 233,
                "height": 150,
                "image": "526_bar/arrowRight.png",
            }, 952);
            break;
        case "l4":
            gv.mod("giveOralFemale", 1);
            g.internal.interval++;
            char.room(950);
            break;
        case "b1":
            g.pass = 0;
            nav.killall();
            nav.bg("952_hallway/b1.jpg");
            nav.button({
                "type": "kiss",
                "name": "b1",
                "left": 765,
                "top": 0,
                "width": 390,
                "height": 927,
                "image": "952_hallway/b1.png"
            }, 952);
            break;
        case "b2":
            nav.killall();
            nav.bg("952_hallway/b2.jpg");
            zcl.kneel(-200, -200, 1.3, "open", true);
            break;
        case "b2a":
            nav.bg("952_hallway/b2.jpg");
            break;
        case "b3":
            nav.bg("952_hallway/b3.jpg");
            break;
        case "b4s":
            nav.bg("952_hallway/bbg.jpg");
            nav.button({
                "type": "img",
                "name": "xx",
                "left": 911,
                "top": 0,
                "width": 1080,
                "image": "952_hallway/b4s.png"
            }, 952);
            gv.mod("giveOralMale", 1);
            gv.mod("loadSwollowed", 1);
            break;
        case "b4f":
            nav.bg("952_hallway/bbg.jpg");
            cl.c.cumface = true;
            zcl.displayMain(0, -150, .55, "", false);
            nav.button({
                "type": "img",
                "name": "xx",
                "left": 1042,
                "top": 639,
                "width": 353,
                "height": 441,
                "image": "952_hallway/b4f.png"
            }, 952);
            gv.mod("giveOralMale", 1);
            gv.mod("loadSpit", 1);
            break;
        case "b5":
            g.internal.interval++;
            char.room(950);
            break;
        default:
            break;
    }
};

room952.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "thinking",
            text: "Return to my cell?",
            button: [
                { chatID: -1, text: "Yes. Return to my cell.", callback: "return" },
                { chatID: -1, text: "No. Stay out here a bit longer. ", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "thinking",
            text: "Visit " + sc.n("bodhi") + "?",
            button: [
                { chatID: -1, text: "Yes. Visit " + sc.n("bodhi") + ".", callback: "bodhi" },
                { chatID: -1, text: "No. Stay out here a bit longer. ", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "random",
            text: "So you think it's cool to just walk into my cell? ",
            button: [
                { chatID: 49, text: "Sorry, the door was open", callback: "" },
                { chatID: -1, text: "Oh no. Sorry I'm leaving ", callback: "reset" }
            ]
        },
        {
            chatID: 3,
            speaker: "daria",
            text: "We need to talk. With the failed ritual they sacrificed the chosen one to appease Azreal. ",
            button: [
                { chatID: 4, text: "The chosen one?", callback: "" },
            ]
        },
        {
            chatID: 4,
            speaker: "daria",
            text: "Yes. The girl you saw that was bathed in cum. It will be a few weeks before a new chosen one is selected, " +
                "but I overheard the list of names and both of you are on it. ",
            button: [
                { chatID: 5, text: "I thought you had to be a hermaphrodite to be chosen. ", callback: "" },
            ]
        },
        {
            chatID: 5,
            speaker: "daria",
            text: "Oh that. It's funny how word gets around and it's always wrong. The cum bath ritual that brings about the coming " +
                "of Azreal is done with girl that was born a boy. They have a lot of dumb rituals, but this one is for real. " +
                sc.n("ubel") + " has figured out how to turn a guy into a full on chick, pussy and everything. ",
            button: [
                { chatID: 6, text: "Really, how do they do that?", callback: "" }
            ]
        },
        {
            chatID: 6,
            speaker: "daria",
            text: "I'm not entirly sure, but I do know that they choose one of you from the cells. From what I understand " +
                "he picks the most feminine slave and forces them to take part. He gives them some drug then puts them in the tub " +
                "of cum and they are forced to stay there until they drink the entire tub. It usually takes a few days to drink that " +
                "much cum. I've been there on the third day and the smell is absolutly horrible. ",
            button: [
                { chatID: 7, text: "But why us?", callback: "" }
            ]
        },
        {
            chatID: 7,
            speaker: "daria",
            text: "I'm not sure if you pay attention, but you two are the most femboys in this place. That's why we need to get out of " +
                "here, all three of us. I have a plan, but I'll need your help. ",
            button: [
                { chatID: 8, text: "Sweet! What do you need?", callback: "" }
            ]
        },
        {
            chatID: 8,
            speaker: "daria",
            text: "Each week they do the ceremony which brings almost everyone into the main room, to " +
                "include most of the guards. This is the perfect time for our getaway. I know a rarely used side entrance. It has a " +
                "camera monitoring it, but I can clip those wires the day before the ceremony so they won't see us sneaking out. " +
                "It usually takes a few days to get supplies this far back in the woods, so that camera should stay down. I'll be " +
                "able to create a diversion to draw any guard away if they choose to guard that door. ",
            button: [
                { chatID: 9, text: "...", callback: "" }
            ]
        },
        {
            chatID: 9,
            speaker: "daria",
            text: "After the way is cleared you'll need to follow me. I know a side trail in the swamp that will take us to the city, but once we reach " +  
                "the city " + sc.n("bodhi") + " and I are going to disappear so you'll be on your own. Now the door to the side entrace is locked and I'll " +
                "need your help unlocking it. ",
            button: [
                { chatID: 10, text: "What do you need from me?", callback: "" }
            ]
        },
        {
            chatID: 10,
            speaker: "daria",
            text: "When you sweep up you'll need a way to pull the keys off the desk. I don't care how you do it, but you need " +  
                "those keys. I know they guard. He's an absolute tool who thinks he can never fuck up. If you can get them " +
                "he won't tell anyone becuase he doesn't want to get in trouble. But you'll have to hide them... in your body.",
            button: [
                { chatID: 11, text: "In my body?", callback: "" }
            ]
        },
        {
            chatID: 11,
            speaker: "daria",
            text: "Up your butt dummy. You can't get caught, so make sure you can fit those big skelton keys in your butt before " +    
                "you try to steal them or this entire plan is sunk. ",
            button: [
                { chatID: 12, text: "I can do that. ", callback: "" }
            ]
        },
        {
            chatID: 12,
            speaker: "daria",
            text: "I know, you butt freak. After you get the keys I'll come get them from you. Then just act cool and wait until you're invited to " +  
                "the next ceremony. Act cool and do what ever they tell you to do. ",
            button: [
                { chatID: 14, text: "Ok. ", callback: "" },
                { chatID: 13, text: "But what if I want to stay and be turned into a girl? ", callback: "" },
            ]
        },
        {
            chatID: 13,
            speaker: "daria",
            text: "Having a pussy is great, but you don't want to be their chosen one. " +
                "You'll be locked away in a special cell with no way to escape. You be made to bathe in the cum and one of two things will " +
                "happen. One. The cult is real and Azreal will burst from your womb and split you open killing you. Or two, the cult is " +
                "bullshit and they'll sacrafice you to appease Azreal. Either way you end up dead. It would take a full on FBI raid " +
                "with a ton of bloodshed for you to ever see the light of day again. ",
            button: [
                { chatID: 14, text: "Oh.", callback: "" }
            ]
        },
        {
            chatID: 14,
            speaker: "daria",
            text: "I'm going to do my appointed rounds so they don't get suspicious. Remember to get those keys! ",
            button: [
                { chatID: -1, text: "Right. Shove they keys up my ass. ", callback: "end1" }
            ]
        },
        {
            chatID: 15,
            speaker: "daria",
            text: "I see you've been a good and following the cult's orders and are behaving like a good slut. ",
            button: [
                { chatID: 29, text: "I have. ", callback: "" }
            ]
        },
        {
            chatID: 16,
            speaker: "thinking",
            text: "I'm not supposed to go that way, but I may be able to escape if there's no one watching. ",
            button: [
                { chatID: 17, text: "Attempt to escape", callback: "escape1" },
                { chatID: -1, text: "Cancel", callback: "" }
            ]
        },
        {
            chatID: 17,
            speaker: "thinking",
            text: "He sounds like he's asleep. I could try the side hallway or return to the hallway. ",
            button: [
                { chatID: -1, text: "Make my choice", callback: "" }
            ]
        },
        {
            chatID: 18,
            speaker: "cult",
            text: "What are you doing this far out of your cell! ",
            button: [
                { chatID: 19, text: "I, uh... what? ", callback: "" }
            ]
        },
        {
            chatID: 19,
            speaker: "cult",
            text: "Come with us slut. You must be punished for your actions. ",
            button: [
                { chatID: 20, text: "I should've guessed. ", callback: "escape4" }
            ]
        },
        {
            chatID: 20,
            speaker: "cult",
            text: "A day on the slut pole should teach you some discipline. ",
            button: [
                { chatID: 21, text: "whimper", callback: "escape5" }
            ]
        },
        {
            chatID: 21,
            speaker: "thinking",
            text: "It's so wide and deep! There's no way to get comfortable on this giant thing!",
            button: [
                { chatID: 22, text: "...", callback: "escape6" }
            ]
        },
        {
            chatID: 22,
            speaker: "bodhi",
            text: "That pole is the worst! I've had to sit on it once when one of the guards tried to fuck me. I told him that I " +
                "was the property of " + sc.n("daria") + " and only she can fuck me. He didn't like that and put me on the " +
                "pole before I could let her know. When " + sc.n("daria") + " found out she really kicked that guy's ass and let " +
                "everyone know I was her property. ",
            button: [
                { chatID: 23, text: "...", callback: "" }
            ]
        },
        {
            chatID: 23,
            speaker: "bodhi",
            text: "You do look sexy impaled on that pole. I would jack you off, but I don't want to get in trouble for wasting seed. " +
                "You won't be here forever. Just promise me you'll be good. ",
            button: [
                { chatID: 24, text: "ok", callback: "escape5" }
            ]
        },
        {
            chatID: 24,
            speaker: "thinking",
            text: "How long are they going to keep me up here?",
            button: [
                { chatID: 25, text: "...", callback: "escape7" }
            ]
        },
        {
            chatID: 25,
            speaker: "thinking",
            text: "ZZzzzZZZzzz",
            button: [
                { chatID: 26, text: "...", callback: "escape8" }
            ]
        },
        {
            chatID: 26,
            speaker: "cult",
            text: "It looks like this one passed out from exhaustion. I like it when they don't resist. ",
            button: [
                { chatID: 27 , text: "...", callback: "escape9" }
            ]
        },
        {
            chatID: 27,
            speaker: "cult",
            text: "I'll just leave her a present for when she wakes up! And by present I mean my cum dripping out of her asshole!",
            button: [
                { chatID: 28, text: "...", callback: "escape10" }
            ]
        },
        {
            chatID: 28,
            speaker: "thinking",
            text: "zzzZZZzzz",
            button: [
                { chatID: -1, text: "[Wake up]", callback: "escape11" }
            ]
        },
        {
            chatID: 29,
            speaker: "bodhi",
            text: "I told you, you just need to be cool!",
            button: [
                { chatID: 30, text: "So what are you two doing here?", callback: "" }
            ]
        },
        {
            chatID: 30,
            speaker: "daria",
            text: "That's a long story, " + sc.n("bodhi") + " was the one that brought it up, but I wasn't sure about coming here. " +
                "He convinced me " +
                "we would have a great time and neither of us would have to work. We could just fuck each other all day every day. ",
            button: [
                { chatID: 31, text: "Oh wow! Is that why you're here?", callback: "" }
            ]
        },
        {
            chatID: 31,
            speaker: "daria",
            text: "Yes, " + sc.n("bodhi") + " had just lost his job selling surf boards, and I was working in a book store. We both " +
                "hated working these doldrum jobs so much that when we heard about this place we gave up everything and came here. ",
            button: [
                { chatID: 32, text: "That's crazy", callback: "" }
            ]
        },
        {
            chatID: 32,
            speaker: "daria",
            text: "We didn't find the cult right away, so I got a job with your " + sc.n("landlord") + " working at the sperm bank so " +
                "we wern't living on the streets. But one day we were having a picnic in the park saw some people in robes. " +
                "They offered to take us straight " +
                "here. Even fed us on the way. I told them I was the only one that could milk " + sc.n("bodhi") + " and they readily " +
                "agreed. No one jacks off my toy but me, and I get to make sure he only has sissygasms. No touching the clitty for him!",
            button: [
                { chatID: 33, text: "Really", callback: "" }
            ]
        },
        {
            chatID: 33,
            speaker: "bodhi",
            text: "I haven't had a normal manly orgasm in almost 2 years! Once you get in touch with your sissy pussy it's the only way! " +
                "My orgasms are so intense they usually last for 5 minutes. " + sc.n("daria") + " really is the best! ",
            button: [
                { chatID: 34, text: "Wow", callback: "" }
            ]
        },
        {
            chatID: 34,
            speaker: "daria",
            text: "She really is a hungry butt slut. The best thing is there's plenty of well endowed men here that I can grab at any time " +  
                "to fill both of our holes. No more searching, I just ask in the hallway on my way here. ",
            button: [
                { chatID: 35, text: "...", callback: "" }
            ]
        },
        {
            chatID: 35,
            speaker: "bodhi",
            text: "That cultist Tom is my favorite! I've never seen you orgasm so hard that when he was fucking you while I licked your clit. " +
                "He really filled us both so much! Nacy is fun too! Her fist is the perfect size for both of us! ",
            button: [
                { chatID: 36, text: "I want to play!", callback: "" }
            ]
        },
        {
            chatID: 36,
            speaker: "daria",
            text: "I suppose we'll let you. We like to be fucked by strong manly men, but you're not manly. If you want you can play " +
                "as our sissy. I'll even let you pick. I can fuck you both, or both of you can serve me. ",
            button: [
                { chatID: 37, text: "I want to get fucked!", callback: "" },
                { chatID: 47, text: "I want to serve you", callback: "" },
            ]
        },
        {
            chatID: 37,
            speaker: "daria",
            text: "I love fucking sissies! Assume the position! ",
            button: [
                { chatID: 38, text: "Oh?", callback: "" }
            ]
        },
        {
            chatID: 38,
            speaker: "bodhi",
            text: "I get bottom! ",
            button: [
                { chatID: 39, text: "I guess I get top", callback: "butt1" }
            ]
        },
        {
            chatID: 39,
            speaker: "daria",
            text: "You two are really a couple of eager sluts. ",
            button: [
                { chatID: -1, text: "Yes we are!", callback: "butt2" }
            ]
        },
        {
            chatID: 40,
            speaker: "daria",
            text: "You like it when I alternate my strokes between your pussies? ",
            button: [
                { chatID: 41, text: "Oh yeah", callback: "" }
            ]
        },
        {
            chatID: 41,
            speaker: "daria",
            text: "It gets me so hot shoving my cock into your soft warm pussies. ",
            button: [
                { chatID: 42, text: "*moan*", callback: "" }
            ]
        },
        {
            chatID: 42,
            speaker: "bodhi",
            text: "I'm going to cum all over you! I'm so close! ",
            button: [
                { chatID: 43, text: "Fuck, I'm going to cum all over you too!", callback: "" }
            ]
        },
        {
            chatID: 43,
            speaker: "daria",
            text: "You sluts are so easy. Now clean my cock!",
            button: [
                { chatID: 44, text: "Ok. ", callback: "butt3" }
            ]
        },
        {
            chatID: 44,
            speaker: "daria",
            text: "Oh yeah. Lick it up sluts. Taste your yummy pussies. ",
            button: [
                { chatID: 45, text: "Yummy!", callback: "" }
            ]
        },
        {
            chatID: 45,
            speaker: "daria",
            text: "Nice and clean. You are both good sluts. Now run along, I've got to attend to my sissy. ",
            button: [
                { chatID: -1, text: "Ok. ", callback: "butt4" }
            ]
        },
        {
            chatID: 46,
            speaker: "daria",
            text: "Back again? So how do you want to play?",
            button: [
                { chatID: 37, text: "I want to get fucked!", callback: "" },
                { chatID: 47, text: "I want to serve you.", callback: "" },
                { chatID: -1, text: "Nope. ", callback: "reset" }
            ]
        },
        {
            chatID: 47,
            speaker: "daria",
            text: "Oh good. I do love it when I can relax and go at a slower pace. You sissies always want a hard fucking, spitting, " +
                "slapping and anal, but you think you're serving me. I'm going to show you what real service looks like. Lay down " +
                "while I sit on your face. ",
            button: [
                { chatID: -1, text: "...", callback: "l0" },
            ]
        },
        {
            chatID: 48,
            speaker: "daria",
            text: "I love your lips " + sc.n("bodhi") + ". And you " + sc.n("me") + " you're not bad. You really know how to serve a " +
                "woman. Come back anytime to eat my pussy. ",
            button: [
                { chatID: -1, text: "...", callback: "l4" },
            ]
        },
        {
            chatID: 49,
            speaker: "random",
            text: "You can't stop staring at my cock huh? It's really pretty. I bet you want me to shove it in your face. ",
            button: [
                { chatID: 50, text: "huh?", callback: "b1" },
                { chatID: -1, text: "Yelp [Run away]", callback: "reset" }
            ]
        },
        {
            chatID: 50,
            speaker: "random",
            text: "It's pretty ain't it. Kiss it.",
            button: [
                { chatID: -1, text: "...", callback: "" },
            ]
        },
        {
            chatID: 51,
            speaker: "random",
            text: "Good slut. Kiss it again. ",
            button: [
                { chatID: -1, text: "MMmmMmmmm", callback: "" },
            ]
        },
        {
            chatID: 52,
            speaker: "random",
            text: "I bet you want to wrap your sissy lips around this cock huh? It's too pretty not to be deep down your throat. ",
            button: [
                { chatID: 53, text: "mmmmm yes.", callback: "b2" },
            ]
        },
        {
            chatID: 53,
            speaker: "random",
            text: "Now swollow this dick! ",
            button: [
                { chatID: 54, text: "glog", callback: "b3" },
            ]
        },
        {
            chatID: 54,
            speaker: "random",
            text: "Your Your throat is so tight",
            button: [
                { chatID: 55, text: "Gasp", callback: "b2" },
            ]
        },
        {
            chatID: 55,
            speaker: "random",
            text: "Your face is so fuckable.",
            button: [
                { chatID: 56, text: "GLUG", callback: "b3" },
            ]
        },
        {
            chatID: 56,
            speaker: "random",
            text: "Should I shoot it down your throat, or all over your face?",
            button: [
                { chatID: 57, text: "Swollow", callback: "b4s" },
                { chatID: 57, text: "Cum on my face", callback: "b4f" },
            ]
        },
        {
            chatID: 57,
            speaker: "random",
            text: "Allright slut. Get out. I need a nap. ",
            button: [
                { chatID: -1, text: "ok", callback: "b5" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};