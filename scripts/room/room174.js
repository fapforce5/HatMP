//Room name
var room174 = {};
room174.main = function () {
    if (g.pass === "moveitMoveIt") {
        g.pass = null;
        nav.bg("174_oneOffCase/xdress0.jpg");
        chat(35, 174);
    }
    else if (g.pass === "case_elijah_origin") {
        g.pass = null;
        g.internal = 0;
        nav.bg("999_phone/black.jpg");
        char.newdayfake();
        char.settime(2, 0);
        chat(46, 174);
    }
    else if (missy.activecase().name === "case_goth") {
        if (g.pass === 174) {
            if (cl.c.panties === "b" && cl.c.shirt === null && cl.c.pants === null && cl.c.dress === null) {
                nav.bg("174_oneOffCase/goth6.jpg");
                chat(18, 174);
            }
            else {
                nav.bg("174_oneOffCase/goth5.jpg");
                nav.button({
                    "type": "btn",
                    "name": "wardrobe",
                    "left": 1684,
                    "top": 230,
                    "width": 236,
                    "height": 602,
                    "title": "Wardrobe",
                    "image": "10_mainchar/10_wardrobe.png"
                }, 174);
                chat(17, 174);
            }
        }
        else {
            nav.bg("174_oneOffCase/goth0.jpg");
            chat(0, 174);
        }
    }
};

room174.btnclick = function (name) {
    switch (name) {
        case "goth4":
            nav.killbutton("goth4");
            sex.mod("bj", true, "f", 1);
            gv.mod("arousal", 20);
            nav.bg("174_oneOffCase/goth4.jpg");
            chat(6, 174);
            break;
        case "wardrobe":
            g.pass = 174;
            char.room(8);
            break;
        default:
            break;
    }
};

room174.chatcatch = function (callback) {
    switch (callback) {
        case "xdress1":
        case "xdress2":
        case "xdress3":
        case "xdress4":
        case "xdress5":
        case "xdress6":
        case "xdress7":
        case "xdress8":
        case "xdress10":
        case "club0":
        case "club1":
        case "club2":
        case "club3":
        case "club4":
        case "club5_a1":
        case "club5_a2":
        case "club5_a5":
        case "club6":
        case "club8":
        case "club9":
            nav.bg("174_oneOffCase/" + callback + ".jpg");
            break;
        case "goth1":
        case "goth2":
        case "goth3a":
        case "goth7":
        case "goth8":
        case "goth9":
        case "goth10":
        case "goth11":
        case "goth13":
            char.addtime(5);
            gv.mod("arousal", 3);
            nav.bg("174_oneOffCase/" + callback + ".jpg");
            break;
        case "goth12":
            char.addtime(5);
            nav.bg("174_oneOffCase/" + callback + ".jpg");
            cl.c.pants = "s";
            cl.c.shirt = "s";
            cl.c.socks = "b";
            cl.c.shoes = "d";
            cl.c.panties = "b";
            missy.set("activeCaseComplete", 1);
            cl.display();
            break;
        case "goth7a":
            nav.bg("10_mainchar/10_bedroom.png");
            break;
        case "goth3":
            nav.killbutton("goth3");
            char.addtime(5);
            nav.bg("174_oneOffCase/" + callback + ".jpg");
            nav.next("goth4")
            break;
        case "goth5":
            char.settime(11, 17);
            nav.bg("174_oneOffCase/" + callback + ".jpg");
            break;
        case "goth6":
            cl.add("panties", "b");
            nav.button({
                "type": "btn",
                "name": "wardrobe",
                "left": 1684,
                "top": 230,
                "width": 236,
                "height": 602,
                "title": "Wardrobe",
                "image": "7_mainCharRoomAlt/clickHere.png"
            }, 174);
            break;
        case "goth14":
            cl.c.panties = "b";
            cl.add("panties", "b");
            cl.remove("panties", "u");
            cl.remove("panties", "n");
            missy.set("reusableCaseCounter", 1);
            char.settime(17, 39);
            char.room(0);
            break;
        case "xdress9":
            nav.bg("174_oneOffCase/" + callback + ".jpg");
            cl.nude();
            cl.c.shoes = "sq";
            cl.c.socks = "sq";
            cl.c.shirt = "sq";
            cl.c.pants = "sq";
            cl.add("shoes", "sq");
            cl.add("socks", "sq");
            cl.add("shirt", "sq");
            cl.add("dress", "sq");
            cl.display();
            zcl.displayMain(300, 800, .09, "clothes", false);
            break;
        case "xdressEnd":
            char.room(210);
            break;
        case "club5_a3":
        case "club5_a4":
            var shirtGender = "m";
            if (cl.c.shirt === "b")
                shirtGender = "f";
            else
                shirtGender = gender.pronoun("m");
            nav.bg("174_oneOffCase/" + callback + shirtGender + ".jpg");
            break;
        case "club5_badEnd":
            missy.set("activeCaseComplete", 2);
            char.addtime(60);
            char.room(0);
            break;
        case "club_end":
            missy.set("activeCaseComplete", 1);
            levels.mod("pi", 75, 999);
            char.addtime(60);
            char.room(0);
            break;
        case "club7":
            char.addtime(97);
            nav.bg("174_oneOffCase/" + callback + ".jpg");
            break;
        default:
            break;
    }
};

room174.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "me",
            text: "So we have to kill a few hours. Is there anywhere you want to go? ",
            button: [
                { chatID: 1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "!bill",
            text: "Take me to your house! I want to see how you live! ",
            button: [
                { chatID: 2, text: "I'm not taking you to my house. I don't even know you. ", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "!bill",
            text: "Fine! Take me to Toys 'n Us. I need to crank one out. ",
            button: [
                { chatID: 3, text: "Yeah. Lets go to Toys 'n Us", callback: "goth1" },
                { chatID: 10, text: "We can't go there! ", callback: "" },
            ]
        },
        {
            chatID: 3,
            speaker: "Candy",
            text: "Oh hi! I see you got yourself a little girlfriend. Are you here for some toys " +
                "or did you want to visit one of our booths? ",
            button: [
                { chatID: 4, text: "Hi, Just visiting the booths today. ", callback: "" }
            ]
        },
        {
            chatID: 4,
            speaker: "Candy",
            text: "Cool! Leave the cum on the walls. I love cleaning it up! ",
            button: [
                { chatID: 5, text: "Sure. ", callback: "goth2" }
            ]
        },
        {
            chatID: 5,
            speaker: "!bill",
            text: "So, do you want to suck it, or should I just paint the glass on my own? ",
            button: [
                { chatID: -1, text: "Oh yeah! ", callback: "goth3" },
                { chatID: 9, text: "Oh. No thanks ", callback: "goth3a" },
            ]
        },
        {
            chatID: 6,
            speaker: "!bill",
            text: "You look so pretty with my cum on your face.  ",
            button: [
                { chatID: 7, text: "...", callback: "" },
            ]
        },
        {
            chatID: 7,
            speaker: "thinking",
            text: "What the fuck am I doing? I just blew someone I just met. I'm supposed to be " +
                "working, and here I am sucking her dick at an adult porn store! Am I turning into " +
                "a real sissy? Am I a slut? ",
            button: [
                { chatID: 8, text: "...", callback: "" },
            ]
        },
        {
            chatID: 8,
            speaker: "!bill",
            text: "Hehe. Let's clean you face and go to your place. I need a place to relax. ",
            button: [
                { chatID: 10, text: "...", callback: "" },
            ]
        },
        {
            chatID: 9,
            speaker: "!bill",
            text: "That whore dancing is the best! I needed that. I clears my head. Let's head over " +
                "to your place. ",
            button: [
                { chatID: 10, text: "...", callback: "" },
            ]
        },
        {
            chatID: 10,
            speaker: "me",
            text: "I've never brought a girl over. Everyone would flip if they saw you. We should just " +
                "hang out at the mall. ",
            button: [
                { chatID: 11, text: "...", callback: "" },
            ]
        },
        {
            chatID: 11,
            speaker: "!bill",
            text: "I hate the mall. Bunch of the sunshine people there. All fake happy and empty. " +
                "I love seeing how other people live. Take me to your home or I'm leaving and you " +
                "won't find me!",
            button: [
                { chatID: 12, text: "Fine! But we're going straight to my room and you have to stay quiet and hidden.", callback: "" },
            ]
        },
        {
            chatID: 12,
            speaker: "!bill",
            text: "Deal! No one will hear or see me. Let's go! ",
            button: [
                { chatID: 13, text: "Deal.", callback: "goth5" },
            ]
        },
        {
            chatID: 13,
            speaker: "!bill",
            text: "So this is your room. It feels so incredibly... normal. No dirty plates, " +
                "no death metal posters, clothes put away. You're a normie aren't ya? ",
            button: [
                { chatID: 14, text: "What. No way. I'm not a normie. My life is so vida loca", callback: "" },
            ]
        },
        {
            chatID: 14,
            speaker: "!bill",
            text: "Prove it. I want to do a fashion show. ",
            button: [
                { chatID: 15, text: "I guess. Everyone's gone for the day. What do you want to fashion? ", callback: "" },
            ]
        },
        {
            chatID: 15,
            speaker: "!bill",
            text: "Hahaha Great! We'll try on each other's underwear. I'll model yours, and you model mine. ",
            button: [
                { chatID: 16, text: "Sure. ", callback: "" },
            ]
        },
        {
            chatID: 16,
            speaker: "!bill",
            text: "You first. Change in the closet then come out and put on a show for me.  ",
            button: [
                { chatID: -1, text: "Yes! Gimmie your panties! I'll go in the closet and change. ", callback: "goth6" },
            ]
        },
        {
            chatID: 17,
            speaker: "!bill",
            text: "Just come out in my panties. Nothing else chicken! ",
            button: [
                { chatID: -1, text: "Oh yeah. ok ", callback: "" },
            ]
        },
        {
            chatID: 18,
            speaker: "!bill",
            text: "Sexy! Now hop on that bed and show me that butt! ",
            button: [
                { chatID: 19, text: "Ok! ", callback: "goth7" },
            ]
        },
        {
            chatID: 19,
            speaker: "!bill",
            text: "You have such a great butt! I love it! I want to bury my face in it! Ok. " +
                "it's my turn to fashion show you! ",
            button: [
                { chatID: 20, text: "Yeah! ", callback: "goth7a" },
            ]
        },
        {
            chatID: 20,
            speaker: "thinking",
            text: "Ohhh. I wonder which pair she'll wear? Can't wait to see her hot body. ",
            button: [
                { chatID: 21, text: "...", callback: "goth8" },
            ]
        },
        {
            chatID: 21,
            speaker: "me",
            text: "Wow! Nice. You look hot in my underwear! ",
            button: [
                { chatID: 22, text: "...", callback: "" },
            ]
        },
        {
            chatID: 22,
            speaker: "!bill",
            text: "These are really comphy and soft. So are you ready for round two?  ",
            button: [
                { chatID: 23, text: "Round two?", callback: "" },
            ]
        },
        {
            chatID: 23,
            speaker: "!bill",
            text: "We're moving to the socks and shoes. Just the socks and shoes. You put on my " +
                "stockings and heels, and I'll wear your socks and shoes. Just your socks and shoes. ",
            button: [
                { chatID: 25, text: "Fuck yeah! I'm going to the closet to change! ", callback: "goth9" },
                { chatID: 34, text: "No. That's too far. I don't want to do that. ", callback: "" },
            ]
        },
        {
            chatID: 24,
            speaker: "!bill",
            text: "Not used ",
            button: []
        },
        {
            chatID: 25,
            speaker: "thinking",
            text: "My legs feel so silky smoothing in these stockings! I should get some. I'm going " +
                "to look so sexy for Bill. Fuck that, I'm going to look so sexy for me! ",
            button: [
                { chatID: 26, text: "...", callback: "goth10" },
            ]
        },
        {
            chatID: 26,
            speaker: "landlord",
            text: "Why is there a half naked girl in your room! And why are you naked in the closet trying " +
                "on women's stockings? ",
            button: [
                { chatID: 27, text: "I uhh...", callback: "" },
            ]
        },
        {
            chatID: 27,
            speaker: "landlord",
            text: "Don't even talk, 'cause I know you're going to lie! She's cute, but back in my day " +
                "we took off each other's clothing, not traded clothes. I'm going to have to teach " +
                "you two how to have sex properly. But right now I have to get back to work. I just " +
                "needed to grab my lunch. Be gentle and listen to what she says. Bye honey. ",
            button: [
                { chatID: 28, text: "ok", callback: "goth11" },
            ]
        },
        {
            chatID: 28,
            speaker: "me",
            text: "Sorry about that. I didn't know my " + sc.n("landlord") + " would be here. ",
            button: [
                { chatID: 29, text: "...", callback: "" },
            ]
        },
        {
            chatID: 29,
            speaker: "!bill",
            text: "I almost had a heart attack when she came in. Sorry I couldn't warn you, I totally " +
                "froze. It's a good thing I had your underwear on or she would have seen my little boner " +
                "sticking up. Hahaha",
            button: [
                { chatID: 30, text: "haha.. oh wow. That would have been a different converstaion. ", callback: "" },
            ]
        },
        {
            chatID: 30,
            speaker: "!bill",
            text: "So, I think the moments passed. You should wear my panties when we walk to " +
                "the train. I'm going to get dressed.  ",
            button: [
                { chatID: 31, text: "Yeah. I guess we should get going. ", callback: "goth12" },
            ]
        },
        {
            chatID: 31,
            speaker: "!bill",
            text: "Bye! It was nice just spending time with you. Sometimes it's nice just to " +
                "be normal. I've been on the run from the cult for so long I've forgotten what " +
                "a normal house looks like. Thank you.",
            button: [
                { chatID: 32, text: "I had fun too. ", callback: "" },
            ]
        },
        {
            chatID: 32,
            speaker: "!bill",
            text: "By the way, I know a future sissy when I " +
                "see one, so when I was in your closet I helped you out! Bye bye! ",
            button: [
                { chatID: 33, text: "Helped me out? Wait.. ", callback: "goth13" },
            ]
        },
        {
            chatID: 33,
            speaker: "thinking",
            text: "What did she mean that she helped me out when she was in my closet? ",
            button: [
                { chatID: -1, text: "Wait... ", callback: "goth14" },
            ]
        },
        {
            chatID: 34,
            speaker: "!bill",
            text: "Oh, ok. I'll go if you should wear my panties when we walk to " +
                "the train. I'm going to get dressed now lame-o.  ",
            button: [
                { chatID: 31, text: "Sure what ever gets us going. ", callback: "goth12" },
            ]
        },
        {
            chatID: 35,
            speaker: "martha",
            text: "Ah,ladies! A most delightful welcome to you all. You've diligently traversed the path " +
                "of a trainee, and now you stand proudly as full-fledged sissies.  To celebrate this momentous " +
                "occasion, it's time to bid farewell to those, shall we say, less distinguished garments. " +
                "Fear not, for I have prepared a selection of outfits far more befitting your newfound " +
                "status. I shall call each of you forward in turn, and you'll receive your new attire for " +
                "the remainder of your classes.",
            button: [
                { chatID: 36, text: "OOooo", callback: "xdress1" },
            ]
        },
        {
            chatID: 36,
            speaker: "martha",
            text: "Ah, Chris, isn't that simply delightful! Your youthful charm and slight frame are simply perfect for a darling baby doll dress. And what a simply smashing shade of pink!  I can just imagine how it will complement your complexion.  And don't forget the wig, my dear! A touch of whimsy never goes amiss.Why, I daresay you'll be the belle of the ball, turning heads and captivating hearts in such an ensemble. A true gentleman wouldn't be able to resist such a charming display!",
            button: [
                { chatID: 37, text: "...", callback: "xdress2" },
            ]
        },
        {
            chatID: 37,
            speaker: "martha",
            text: "Jeremy, my dear! Look at you, a true diamond in the rough. Today, we shall transform that gentlemanly spirit into the radiant lady you were always meant to be.This exquisite lace top, with its delicate frills, will dance around your form, creating a most charming silhouette.And fret not a single bit about your chest, for femininity comes in all shapes and sizes.Now, this cunning little girdle here will work wonders, nipping in your waist and emphasizing those delightful hips of yours. ",
            button: [
                { chatID: 38, text: "...", callback: "xdress3" },
            ]
        },
        {
            chatID: 38,
            speaker: "martha",
            text: "Kareem, that simply divine shade of purple! It absolutely accentuates your most charming legs, wouldn't you agree? A touch of boldness is just the ticket to draw out the marvelous woman I know resides within you. Remember, darling, confidence is the most exquisite accessory one can possess. Now, go forth and blossom, my dear. I can't wait to witness the truly remarkable woman you'll become.",
            button: [
                { chatID: 39, text: "...", callback: "xdress4" },
            ]
        },
        {
            chatID: 39,
            speaker: "martha",
            text: "Oh, Martin, my dear!  You simply must be the most delightful transformation we've ever had the pleasure of witnessing.  When you first arrived, a gruff little fellow indeed, wouldn't you agree? But look at you now, a positively charming and wonderful lady!  My heart simply brims with pride for all the progress you've made. Truly, a triumph!",
            button: [
                { chatID: 40, text: "...", callback: "xdress5" },
            ]
        },
        {
            chatID: 40,
            speaker: "martha",
            text: "Ah, Philbert, there you are. My most... challenging pupil. Today, I've selected a rather unassuming ensemble for your transformation. A long dress, wouldn't you know, perfect for keeping those... exuberant tendencies nicely under wraps. Now, do try to see if we can cultivate a touch of decorum, shall we?",
            button: [
                { chatID: 45, text: "...", callback: "xdress10" },
            ]
        },
        {
            chatID: 41,
            speaker: "martha",
            text: "Ah, Sporty, this simply darling ensemble will perfectly capture your inherent femininity.It allows for the utmost comfort and mobility, ensuring you can continue your active pursuits without a moment's worry.  Imagine, gracefully gliding through your day, a vision of both elegance and practicality. Now, wouldn't that be simply splendid?",
            button: [
                { chatID: 42, text: "...", callback: "xdress7" },
            ]
        },
        {
            chatID: 42,
            speaker: "martha",
            text: "My, my, how delightful to meet Sinéad!  What a charming name, indeed. It suits her so much better, wouldn't you agree? I remember when dear Thomas first arrived, a quiet little bookworm, nose always buried in a tome. One couldn't help but wonder if she'd ever blossom. But blossom she has! Look at her now, Sinéad, radiant and beautiful. It's truly heartwarming to see such a transformation. Quite a testament to finding one's true self, wouldn't you say?",
            button: [
                { chatID: 43, text: "...", callback: "xdress8" },
            ]
        },
        {
            chatID: 43,
            speaker: "martha",
            text: "My, my, isn't Trixy a vision? Formerly Timothy, you see. Quite the transformation, wouldn't you agree? Our little scientific marvel, the transformation pill, has done wonders, wouldn't you say? A touch of science to bring out the true you, the radiant woman just waiting to blossom. Just a little pill, and your inner beauty can finally take center stage.  ",
            button: [
                { chatID: 44, text: "...", callback: "xdress9" },
            ]
        },
        {
            chatID: 44,
            speaker: "martha",
            text: "Finally our favorite pupil, " + sc.n("me") + ". Missy has personally chosen this outfit " +
                "to accentuate what she calls 'Her slutty desires to be impaled by every cock in the room.' " +
                "Her exposed midriff displays her toned figure, low cut top displays her femininity, " +
                "and short skirt signals that she is ready for breeding. Now everyone return to the waiting room. " +
                "Your next selection of classes await. I'm so excited to see you take the next step! ",
            button: [
                { chatID: -1, text: "...", callback: "xdressEnd" },
            ]
        },
        {
            chatID: 45,
            speaker: "martha",
            text: "Here's Ralph. *sigh* ",
            button: [
                { chatID: 41, text: "...", callback: "xdress6" },
            ]
        },
        {
            chatID: 46,
            speaker: "thinking",
            text: "I'm just going to take a nap before I have to go to the club since it looks " +
                "like I'll be up all night. ",
            button: [
                { chatID: 47, text: "[Wake up and go to the club]", callback: "club0" },
            ]
        },
        {
            chatID: 47,
            speaker: "me",
            text: "Hi Mr. Rex I'm here to...",
            button: [
                { chatID: 48, text: "...", callback: "" },
            ]
        },
        {
            chatID: 48,
            speaker: "!rex",
            text: "One sec. Hey tits! Careful with those glasses. If you break another glass " +
                "tonight I'm going to have to punish you in my office. Now hurry up and finish cleaning " +
                "up. You're not getting overtime for being lazy. ",
            button: [
                { chatID: 49, text: "...", callback: "club1" },
            ]
        },
        {
            chatID: 49,
            speaker: "!rex",
            text: "Let me take you to the dance floor where that piece of shit has been doing his " +
                "thing.",
            button: [
                { chatID: 50, text: "ok", callback: "club2" },
            ]
        },
        {
            chatID: 50,
            speaker: "!rex",
            text: "I had that dumb waitress, tits, put this table here that you can hide under. " +
                "Don't fuck this up. I fucking sick of ordering the busboy to clean up shit off " +
                "my floor. Plus it's bad for business. It needs to stop tonight. ok?",
            button: [
                { chatID: 51, text: "I'll catch him tonight! ", callback: "" },
            ]
        },
        {
            chatID: 51,
            speaker: "!rex",
            text: "Good. Now get under that table and don't fuck this up. ",
            button: [
                { chatID: 52, text: "Yes sir. ", callback: "club3" },
            ]
        },
        {
            chatID: 52,
            speaker: "thinking",
            text: "It's so cramped in here. Hopefully he comes quickly so I don't have to spen " +
                "the entire night squatting under this table. Oh it's the waitress. She's so hot! " +
                "hopefully it's her so I can get done with this case. ",
            button: [
                { chatID: 53, text: "...", callback: "club4" },
            ]
        },
        {
            chatID: 53,
            speaker: "thinking",
            text: "Not that is a tight pussy! I can smell her musky scent. So hot! I want to " +
                "bury my face in that pussy. I wonder what she would do if I reached out and " +
                "touched it. That's stupid. She'll totally get pissed. But she didn't seem to get " +
                "mad when Mr. Rex called her tits. Maybe she's down. I shouldn't though. But she " +
                "does seem like a slut. ",
            button: [
                { chatID: 59, text: "Just do your job ", callback: "club6" },
                { chatID: 54, text: "Touch her pussy with your finger. ", callback: "club5_a1" }
            ]
        },
        {
            chatID: 54,
            speaker: "thinking",
            text: "It's so warm and moist. Oh. She just moaned. She's totally into it. " +
                "I wonder if she'll let me slide down her shorts and see her pussy...",
            button: [
                { chatID: 55, text: "Slide down her shorts", callback: "club5_a2" },
            ]
        },
        {
            chatID: 55,
            speaker: "thinking",
            text: "Holy shit! She let me take down her shorts and she's not wearing panties! " +
                "Fuck she's dripping wet. Fuck I have to taste her pussy.",
            button: [
                { chatID: 56, text: "[Eat her pussy]", callback: "club5_a3" },
            ]
        },
        {
            chatID: 56,
            speaker: "thinking",
            text: "Fuck yeah! I knew some girls were sluts, but I never knew I would be face " +
                "deep in one! I love this girl!",
            button: [
                { chatID: 57, text: "...", callback: "club5_a4" },
            ]
        },
        {
            chatID: 57,
            speaker: "!rex",
            text: "What the FUCK!!!",
            button: [
                { chatID: 58, text: "huh?", callback: "club5_a5" },
            ]
        },
        {
            chatID: 58,
            speaker: "!rex",
            text: "The Mad Pooper stuck again! Tits, clean this shit up. And you PI Punk! " +
                "Get the hell out of my club 'cause you're fucking fired. ",
            button: [
                { chatID: -1, text: "Aw crap. Missy's going to be pissed. ", callback: "club5_badEnd" },
            ]
        },
        {
            chatID: 59,
            speaker: "thinking",
            text: "I'm not going to grab her pussy. I'm not that kind of guy. But I can still " +
                "smell her pussy. Those shorts must be holding all the sweat and pussy juice " +
                "from working all night. I really should have tried to finger her. Oh well...",
            button: [
                { chatID: 60, text: "[Wait...]", callback: "club7" },
            ]
        },
        {
            chatID: 60,
            speaker: "thinking",
            text: "Holy crap. Someone's walking in. I just need to take a picture really quick.",
            button: [
                { chatID: 61, text: "[Take picture]", callback: "club8" },
            ]
        },
        {
            chatID: 61,
            speaker: "thinking",
            text: "Shit he moved! Crap I forgot to take off the camera sound effect. Crap crap crap!",
            button: [
                { chatID: 62, text: "[Chase after him]", callback: "club9" },
            ]
        },
        {
            chatID: 62,
            speaker: "thinking",
            text: "Damn! He's fast. Fuck. Hopefully there's enough here to figure out who he " +
                "is. I'll send this to Missy and call it a night. ",
            button: [
                { chatID: -1, text: "[Send picture to Missy and go home]", callback: "club_end" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};