//Room name
var room209 = {};
room209.main = function () {
    nav.bg("209_classroom/start.jpg");
    chat(30, 209);
};
 
room209.btnclick = function (name) {
    switch (name) {
        case "poster1":
        case "poster2":
        case "poster3":
        case "poster4":
        case "poster5":
            nav.killbutton("poster");
            nav.button({
                "type": "btnNoHover",
                "name": "poster",
                "left": 679,
                "top": 131,
                "width": 562,
                "height": 818,
                "image": "209_classroom/" + name + ".jpg"
            }, 209);
            break;
        case "poster":
            nav.killbutton("poster");
            break;
        default:
            break;
    }
};

room209.chatcatch = function (callback) {
    switch (callback) {
        case "group1":
        case "sitting0":
        case "sitting1":
        case "sitting2":
        case "sitting3":
        case "sitting4":
        case "sitting5":
        case "sitting6":
        case "sitting7":
        case "sitting8":
        case "meeting0":
        case "meeting1":
        case "meeting2":
        case "group0":
            nav.bg("209_classroom/" + callback + ".jpg");
            break;
        case "emptyRoom":
            nav.bg("209_classroom/day1.jpg");
            nav.killall();
            nav.button({
                "type": "btn",
                "name": "poster1",
                "left": 0,
                "top": 0,
                "width": 158,
                "height": 359,
                "image": "209_classroom/poster1.png"
            }, 209);
            nav.button({
                "type": "btn",
                "name": "poster2",
                "left": 1753,
                "top": 100,
                "width": 93,
                "height": 444,
                "image": "209_classroom/poster2.png"
            }, 209);
            nav.button({
                "type": "btn",
                "name": "poster3",
                "left": 161,
                "top": 0,
                "width": 123,
                "height": 346,
                "image": "209_classroom/poster3.png"
            }, 209);
            nav.button({
                "type": "btn",
                "name": "poster4",
                "left": 1847,
                "top": 80,
                "width": 73,
                "height": 509,
                "image": "209_classroom/poster4.png"
            }, 209);
            nav.button({
                "type": "btn",
                "name": "poster5",
                "left": 309,
                "top": 42,
                "width": 208,
                "height": 298,
                "image": "209_classroom/poster5.png"
            }, 209);
            
            break;
        case "afterClass":
            sissy.passclass(true);
            break;
        default:
            break;
    }
};

room209.chat = function (chatID) {
    if (chatID === 999) {
        return {
            chatID: 999,
            speaker: "missy",
            text: scc.changeText,
            button: [
                { chatID: -1, text: "Thanks ma'am!", callback: "selectStart" }
            ]
        };
    }
    else {
        var cArray = [
            {
                chatID: 0,
                speaker: "me",
                text: "Oh wow. So many people. " + sc.n("ralph") + " I didn't know you were in this class too! ",
                button: [
                    { chatID: 1, text: "...", callback: "" }
                ]
            },
            {
                chatID: 1,
                speaker: "ralph",
                text: "Oh, I'm so glad I know someone here. I was so scared to come, but " + sc.n("martha") + " was so " +
                    "convincing. Are we all here for what I think we are? ",
                button: [
                    { chatID: 2, text: "...", callback: "" }
                ]
            },
            {
                chatID: 2,
                speaker: "!philbert",
                text: "I don't know about the rest of you, but I'm here 'cause those bitches on the flyer are hot! I bet they " +
                    "let us look at their titties. I bet that girl in black has giant titties! I want to suck them! ",
                button: [
                    { chatID: 3, text: "Oh, what flyer? ", callback: "group1" }
                ]
            },
            {
                chatID: 3,
                speaker: "!kareem",
                text: "Yo, this flyer.I'm sayin' we all got hit up by " + sc.n("martha") + " and got this flyer, right?",
                button: [
                    { chatID: 4, text: "...", callback: "" }
                ]
            },
            {
                chatID: 4,
                speaker: "!jeremy",
                text: "Oh thank god. I was afraid I was the only one here for the school. I was getting so nervous I almost " +
                    "just left. Anyone else a little worried about this school. ",
                button: [
                    { chatID: 5, text: "...", callback: "" }
                ]
            },
            {
                chatID: 5,
                speaker: "!kareem",
                text: "I'm still kinda sketched out about this school. I'm just here to scope it out.",
                button: [
                    { chatID: 26, text: "...", callback: "meeting0" }
                ]
            },
            {
                chatID: 6,
                speaker: "missy",
                text: "not used ",
                button: [
                    { chatID: 7, text: "!", callback: "" }
                ]
            },
            {
                chatID: 7,
                speaker: "missy",
                text: "Alright boys! Everyone take you seats. Your first class is beginning! ",
                button: [
                    { chatID: 8, text: "!", callback: "sitting0" }
                ]
            },
            {
                chatID: 8,
                speaker: "missy",
                text: "Welcome to the first day of the rest of your worthless lives! You're here becuase deep down in those " +
                    "boring boys clothes lie a pretty little girl desperate to get out. My staff and I are here to help you " +
                    "free yourself of that constant nagging voice in your head begging to be let loose. ",
                button: [
                    { chatID: 9, text: "...", callback: "" }
                ]
            },
            {
                chatID: 9,
                speaker: "!philbert",
                text: "I have a question. ",
                button: [
                    { chatID: 10, text: "...", callback: "sitting1" }
                ]
            },
            {
                chatID: 10,
                speaker: "missy",
                text: "I did not ask for questions! You ladies will have to learn that you are not in control. At this school " +
                    "you do what we say, when we say, or you will be on the street with nothing but that empty feeling that you " +
                    "missed out on being the perfect you. Speaking of the perfect you, " + sc.n("martha") + " will introduce herself " +
                    "and tell you about her program. ",
                button: [
                    { chatID: 11, text: "...", callback: "sitting2" }
                ]
            },
            {
                chatID: 11,
                speaker: "martha",
                text: "Thank you my dear Missy. My name is Martha, but you will address me as " + sc.n("martha") + ". I will be here to " +
                    "begin your transition into sissyhood. So many new sissies believe that putting on a promiscuous dress makes them a sissy." +
                    "However, this is not the case. True sissyhood begins in the mind and is reflected in one's actions. " +
                    "I will teach you how to walk, sit, stand, and carry yourself in public. I'm very excited to help you young " +
                    "gentlemen on this journey of yours. However, please be aware that I expect the utmost politeness from my pupils.",
                button: [
                    { chatID: 12, text: "...", callback: "" }
                ]
            },
            {
                chatID: 12,
                speaker: "martha",
                text: "I am confident that we shall have a most enjoyable time as we learn to comport ourselves as proper ladies. " +
                    "I look forward to seeing you all again in our next class. I shall now be followed by " + sc.n("p") + ".",
                button: [
                    { chatID: 13, text: "...", callback: "sitting3" }
                ]
            },
            {
                chatID: 13,
                speaker: "p",
                text: "Listen up! I'm your sexuality teacher. I can stand up here and yell at you all day about how you're " +
                    "better off as little sissies, but I prefer to show you! You in the brown, get up here! ",
                button: [
                    { chatID: 14, text: "...", callback: "" }
                ]
            },
            {
                chatID: 14,
                speaker: "!thomas",
                text: "Oh! me? ",
                button: [
                    { chatID: 15, text: "...", callback: "" }
                ]
            },
            {
                chatID: 15,
                speaker: "p",
                text: "Yes. Get up here and face the audience. You're going to be my first demonstrator. ",
                button: [
                    { chatID: 16, text: "...", callback: "sitting4" }
                ]
            },
            {
                chatID: 16,
                speaker: "p",
                text: "Now every take a good look at this future sissy. He looks like a normal guy right? But he hides his true " +
                    "sissyness under this layer of clothing. We're going to see what hides behind this clothing. What's your name? ",
                button: [
                    { chatID: 17, text: "...", callback: "" }
                ]
            },
            {
                chatID: 17,
                speaker: "!thomas",
                text: "Thomas. I'm Thomas. I'm not hiding anything under my clothes. ",
                button: [
                    { chatID: 18, text: "...", callback: "" }
                ]
            },
            {
                chatID: 18,
                speaker: "p",
                text: "Now Thomas. I'm going to tell you to do something outside of your comfort level, but you need to forget that. You're no longer Thomas the " +
                    "boy, you're Thomas my slut. Now slut I need you to take off all your clothes for the next demonstration. " +
                    "Don't worry it will all be fine. ",
                button: [
                    { chatID: 19, text: "...", callback: "" }
                ]
            },
            {
                chatID: 19,
                speaker: "!thomas",
                text: "Oh. Right here? In front of everyone? I don't know if I can...",
                button: [
                    { chatID: 20, text: "...", callback: "sitting5" }
                ]
            },
            {
                chatID: 20,
                speaker: "p",
                text: "I didn't ask you if you wanted to strip! I told you to strip! Now strip off those clothes right " +
                    "fucking now or find yourself on the street! ",
                button: [
                    { chatID: 21, text: "...", callback: "sitting6" }
                ]
            },
            {
                chatID: 21,
                speaker: "p",
                text: "Much better. Now everyone look at Thomas here. You might see his naked body and think, this here is " +
                    "a boy, but you'd be wrong. Thomas show everyone your tiny little sissy dick. Hands to the side now!  ",
                button: [
                    { chatID: 22, text: "...", callback: "sitting7" }
                ]
            },
            {
                chatID: 22,
                speaker: "p",
                text: "Now everyone look at Thomas' tiny little sissy dick. Like most of you this useless flesh isn't going " +
                    "to please anyone. That is why sissy life is your life. No woman wants this tiny flaccid thing anywhere " +
                    "near their pussy. That is why you're the pussy. My frilly sissy little pussies. Now we're going to have " +
                    "lots of time to play, once you're ready. Now put some clothes and get back to your seat Thomas, no one  " +
                    "wants to looks at your pathetic body. ",
                button: [
                    { chatID: 23, text: "...", callback: "sitting8" }
                ]
            },
            {
                chatID: 23,
                speaker: "black",
                text: "Hi maggots. I'm " + sc.n("black") + ". I'm in charge of bondage and discipline. I look forward to meeting " +
                    "each and every one of you. Back to you Missy. ",
                button: [
                    { chatID: 24, text: "...", callback: "sitting0" }
                ]
            },
            {
                chatID: 24,
                speaker: "missy",
                text: "This is the end of your introduction. Tomorrow will be your first class. I'm so excited for this class. " +
                    "I know " + sc.n("martha") + " is looking forward to helping you on your journey. Class dismissed. ",
                button: [
                    { chatID: 25, text: "...", callback: "emptyRoom" }
                ]
            },
            {
                chatID: 25,
                speaker: "thinking",
                text: "That was... odd. Like everyone else I'm a bit worried about this school. Maybe I'll keep going just to " +
                    "see what happens, but if it gets too strange I'm totally out. ",
                button: [
                    { chatID: -1, text: "...", callback: "afterClass" }
                ]
            },
            {
                chatID: 26,
                speaker: "missy",
                text: "Ok sissies, step aside. I'm going to start your tour. ",
                button: [
                    { chatID: 27, text: "...", callback: "meeting0" }
                ]
            },
            {
                chatID: 27,
                speaker: "missy",
                text: "You're now in the waiting room. Here is where you will congregate and wait till school starts. We don't need a bunch of sissies " +
                    "milling about the classrooms while the teachers are preparing for your lessons. While your waiting, keep it to a dull roar. I still have " +
                    "business to conduct here and your voices carry. ",
                button: [
                    { chatID: 28, text: "...", callback: "meeting1" }
                ]
            },
            {
                chatID: 28,
                speaker: "missy",
                text: "This is your class selection interface. Here is where you'll go to select the next class you want to take. Some classes have  " +
                    "prerequisites. To see the course description and prerequisite list, just select that class. Once you've decided on your class select " +
                    "the 'Take Course' button and the computer will be updated with your course selection. You'll notice that each course has an instructor and " +
                    "color associated with that class. When you take the elevator go to the floor associated with that color. Now follow me to the elevator. ",
                button: [
                    { chatID: 29, text: "...", callback: "meeting2" }
                ]
            },
            {
                chatID: 29,
                speaker: "missy",
                text: "This is the elevator to go to your assigned class. Remember when I said that each class was color coded. Well, since you sissies can't " +
                    "seem to count past the number of holes in your body, we make the floors by color. Simply select the floor or your class to begin. Now " +
                    "follow me into the elevator. We'll go to the Pink Room to continue our introductions. ",
                button: [
                    { chatID: 8, text: "...", callback: "sitting0" }
                ]
            },
            {
                chatID: 30,
                speaker: "thinking",
                text: "Well, this is it. I'm about to go to my first day of class. I wonder what it will be like. Am I the " +
                    "only student? How many can there be. I bet it's just Missy yelling at me and punching me in the balls. " +
                    "This is going to be terrible, I can just feel it. Maybe I could run away. No, she'll just chase me down. " +
                    "I guess I can at least take a look. Well, here goes... ",
                button: [
                    { chatID: 0, text: "...", callback: "group0" }
                ]
            },
        ];
        if (cArray.length > chatID && chatID > -1)
            return cArray[chatID];
        else
            return [];
    }
};