//Room name
var room956 = {};
room956.main = function () {
    if (gv.get("cultRank") === "Sissy?") {
        gv.set("cultRank", "Sissy");
        sc.show("dr");
        sc.startMission("dr", "cult");
        sc.completeMissionTask("dr", "cult", 0);
        chat(0, 956);
    }
    else if (gv.get("cultRank") === "Mother Candidate") {
        if (g.pass === "endSleepyTime") {
            switch (g.map.c) {
                case 0:
                    nav.bg("999_phone/black.jpg");
                    chat(17, 956);
                    break;
                case 1:
                    nav.bg("999_phone/black.jpg");
                    chat(18, 956);
                    break;
                case 2:
                    nav.bg("999_phone/black.jpg");
                    chat(19, 956);
                    break;
                case 3:
                    nav.bg("999_phone/black.jpg");
                    chat(20, 956);
                    break;
                case 4:
                    nav.bg("956_science/f5.webp");
                    chat(24, 956);
                    break;
            }
            g.map.c++;
        }
        else {
            g.map = { c: 0 };
            chat(13, 956);
        }
    }
};

room956.btnclick = function (name) {
    switch (name) {
        case "":
            break;
        default:
            break;
    }
};

room956.chatcatch = function (callback) {
    switch (callback) {
        case "e0":
        case "e1":
        case "e2":
        case "e3":
        case "e4":
        case "f2":
        case "f3":
        case "f4":
        case "f6":
        case "f7":
        case "f8":
        case "f9":
        case "f10":
        case "f11":
        case "f12":
        case "f13":
        case "f14":
        case "f15":
        case "f16":
        case "f17":
        case "f18":
            nav.bg("956_science/" + callback + ".webp"); 
            break;
        case "f14":
        case "f15":
        case "f20":
            nav.bg("956_science/" + callback + "_" + gender.pronoun("f") + ".webp");
            break;
            break;
        case "f19":
            nav.bg("954_torture/t25.jpg"); 
            break;
        case "f1":
            nav.bg("999_phone/black.jpg");
            g.roomTimeout = setTimeout(function () {
                chat(16, 956);
            }, 1000);
            break;
        case "f13":
            g.pass = "azrael956";
            char.room(975);
            break;
        case "f21":
            g.pass = "lone";
            char.room(954);
            break;
        case "pussy":
            cl.nude();
            cl.c.cock = 5;
            cl.display();
            g.pass = 956;
            char.room(28);
            break;
        case "sleep":
            g.pass = 956;
            char.room(28);
            break;
        case "sleep1":
            char.addDays(1);
            g.pass = 956;
            char.room(28);
            break;
        case "room954":
            g.pass = "pussy";
            char.room(954);
            break;
        case "leave":
            gv.mod("cultDayCounter", 1);
            char.room(950);
            break;
    }
};

room956.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "dr",
            text: "Oh my. Look at this one. Get them up on my stirrups! I need to see what they're working with!",
            button: [
                { chatID: 1, text: "...", callback: "e0" }
            ]
        },
        {
            chatID: 1,
            speaker: "me",
            text: "What am I doing here?",
            button: [
                { chatID: 2, text: "...", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "dr",
            text: "Right now you are Schrödinger's cat. Schrödinger cat was a thought experiment that " +
                "claimed a cat in a box is both alive and dead until someone looks inside. Only by " +
                "opening the lid and observing the cat does the universe finally choose one single reality.  ",
            button: [
                { chatID: 3, text: "...I'm a cat?", callback: "" }
            ]
        },
        {
            chatID: 3,
            speaker: "dr",
            text: "Haha no. You are both a boy and a girl. You see you give, what we'll call an aura, that makes " +
                "people think you may be a sissy. It's becuase somewhere in them they can't really tell if " +
                "you're a boy or a girl. There's many reasons why, but what I've found in my studies is that " +
                "many of you sissies are really both. ",
            button: [
                { chatID: 4, text: "I'm both a boy and a girl?", callback: "" }
            ]
        },
        {
            chatID: 4,
            speaker: "dr",
            text: "Maybe. I won't know for sure until I look. You see, many of you are born with both " +
                "a penis and a uterus. There's a vagina there too, but the testicles have grown over the " +
                "opening, hiding it from view? ",
            button: [
                { chatID: 5, text: "Are you saying I have a vagina? ", callback: "" }
            ]
        },
        {
            chatID: 5,
            speaker: "dr",
            text: "Again, maybe. You see, when a 'Sissy' is born, becuase all anyone can see is the penis " +
                "they all believe that the child is a boy. But they aren't! They are both a boy and a girl. " +
                "Around 68% of all sissies have both the penis and uterus. " +
                "As you age your uterus and vagina shrink with time. The eggs fall into the body and are " +
                "absorbed and the sissy has no idea. They just know that they feel a bit differnt. Feminine.",
            button: [
                { chatID: 6, text: "I have eggs? ", callback: "" }
            ]
        },
        {
            chatID: 6,
            speaker: "dr",
            text: "Maybe. Lucky for you I know exactly what I'm looking for, that your 'normal' doctor doesn't. ",
            button: [
                { chatID: 7, text: "How can you tell?", callback: "e1" }
            ]
        },
        {
            chatID: 7,
            speaker: "dr",
            text: "Quite simple really. I just use this ultrasound. The trick is, you don't look at the belly. " +
                "I have to go up the rectum to get a really good picture. Now hold still. You're going to feel " +
                "some lube, then the ultrasound while I search for your Schrödinger's cat. ",
            button: [
                { chatID: 8, text: "...", callback: "e2" }
            ]
        },
        {
            chatID: 8,
            speaker: "dr",
            text: "Hmmmm... yes... Don't worry about your penis, it happens all the time.... just... hmmmm....",
            button: [
                { chatID: 9, text: "well?", callback: "e3" }
            ]
        },
        {
            chatID: 9,
            speaker: "dr",
            text: "Well, well. Take a look at this. Let me swing the monitor over so you can see it.",
            button: [
                { chatID: 10, text: "...", callback: "e4" }
            ]
        },
        {
            chatID: 10,
            speaker: "dr",
            text: "There it is! Plain as day! ",
            button: [
                { chatID: 11, text: "What am I looking at?", callback: "" }
            ]
        },
        {
            chatID: 11,
            speaker: "dr",
            text: "*ugh* Surrounded by idiots. That's your uterus. Schrödinger cat confirmed! You will make " +
                "a fine specimen for my experiment. That is when the time is right. I'll let Ubel know right away. " +
                "I would hate for him to throw you away. I have so many missing specimens. You do have one of the " +
                "most pronounced uteri I've seen and will make a great test for my improved experiment. I'm so excited! ",
            button: [
                { chatID: 12, text: "...", callback: "e0" }
            ]
        },
        {
            chatID: 12,
            speaker: "dr",
            text: "Cult person. I'm done with this one. You can return *her* to *her* cell. hehe. I'll go let " +
                "Ubel know that we have another candidate! ",
            button: [
                { chatID: -1, text: "...", callback: "leave" }
            ]
        },
        {
            chatID: 13,
            speaker: "dr",
            text: "Welcome back. It seems you have chosen the right path. Lay right down and we will get " +
                "started! Oh happy day! ",
            button: [
                { chatID: 14, text: "[Lay on the bed]", callback: "e0" }
            ]
        },
        {
            chatID: 14,
            speaker: "dr",
            text: "Well look at that. A good look. That aweful boy part will soon be gone. Gone forever. " +
                "But I'm sure you'll find some pleasure in the Clitoris. Much smaller, but much more " +
                "pleasurable. ",
            button: [
                { chatID: 15, text: "...", callback: "f0" }
            ]
        },
        {
            chatID: 15,
            speaker: "dr",
            text: "Now just relax. When you wake up you'll be a whole new woman. ",
            button: [
                { chatID: -1, text: "...pssssstttt", callback: "f1" }
            ]
        },
        {
            chatID: 16,
            speaker: "thinking",
            text: "Ooofff. Soooo dizzy.... so...",
            button: [
                { chatID: -1, text: "...", callback: "pussy" }
            ]
        },
        {
            chatID: 17,
            speaker: "thinking",
            text: "I feel weird. My whole body hurts. too tired...",
            button: [
                { chatID: -1, text: "...", callback: "sleep" }
            ]
        },
        {
            chatID: 18,
            speaker: "thinking",
            text: "I don't feel my penis... but there's something else... what is that....",
            button: [
                { chatID: -1, text: "...", callback: "sleep" }
            ]
        },
        {
            chatID: 19,
            speaker: "thinking",
            text: "It's so moist between my legs. Did I pee myself... I can't...",
            button: [
                { chatID: -1, text: "...", callback: "sleep" }
            ]
        },
        {
            chatID: 20,
            speaker: "thinking",
            text: "I must open my eyes. I cant' sleep forever. ",
            button: [
                { chatID: 21, text: "[Try to open your eyes]", callback: "f2" }
            ]
        },
        {
            chatID: 21,
            speaker: "thinking",
            text: "huh? ",
            button: [
                { chatID: 22, text: "...", callback: "f3" }
            ]
        },
        {
            chatID: 22,
            speaker: "dr",
            text: "Now now. Can't have you waking up before the big show. Don't want you to ruin your new " +
                "vagina. ",
            button: [
                { chatID: 23, text: "...", callback: "f4" }
            ]
        },
        {
            chatID: 23,
            speaker: "dr",
            text: "Just sleep. Soon. Soon you'll see my greatest triumph! ",
            button: [
                { chatID: -1, text: "...", callback: "sleep1" }
            ]
        },
        {
            chatID: 24,
            speaker: "dr",
            text: "This newest specimin is the finest of the hidden uterus I've ever had! I mean really, " +
                "it's amazing her penis even existed. Mother nature made a mistake with this one, but I " +
                sc.n("dr") + " have fixed her mistake! ",
            button: [
                { chatID: 25, text: "...", callback: "f6" }
            ]
        },
        {
            chatID: 25,
            speaker: "ubel",
            text: "I am just simply amazed. She looks like she's had a pussy her entire life. Are you sure " +
                "she can give birth? ",
            button: [
                { chatID: 26, text: "...", callback: "f7" }
            ]
        },
        {
            chatID: 26,
            speaker: "dr",
            text: "I am! She's even ovulating now. She is at her ripest and will most certainly be able to " +
                "carry a child when you soak her into the cum bath. It's amazing really. She was always meant " +
                "to be a girl and now thanks to my brilliance, she always will be. ",
            button: [
                { chatID: 27, text: "...", callback: "f8" }
            ]
        },
        {
            chatID: 27,
            speaker: "ubel",
            text: "I am so.... aaak!!! *grunt* ",
            button: [
                { chatID: 28, text: "...", callback: "f9" }
            ]
        },
        {
            chatID: 29,
            speaker: "missy",
            text: "Ooooo. Wow. As much as I hate " + sc.n("dr") + " and his forced penectomies, he really did " +
                "some amazing work! I mean wow! Your vagina is so much prettier than mine! I want so much to " +
                "play with it! Wow! ",
            button: [
                { chatID: 30, text: "huh?", callback: "" }
            ]
        },
        {
            chatID: 30,
            speaker: "missy",
            text: "*hrumph* We don't really have time right now! We have to go! On your feet. I know a way. Let's get " +
                "out of here! ",
            button: [
                { chatID: 31, text: "*ugh* I'm so tired.", callback: "f10" }
            ]
        },
        {
            chatID: 30,
            speaker: "missy",
            text: "You need to make yourself untired right the fuck now! Unless you want to stay here until " +
                "you die, which won't be long from now! Now get up! Let's go! ",
            button: [
                { chatID: 36, text: "Coming!", callback: "f14" },
                { chatID: 31, text: "No. I'm staying here", callback: "" }
            ]
        },
        {
            chatID: 31,
            speaker: "missy",
            text: "What the fuck do you mean, no?",
            button: [
                { chatID: 32, text: "...", callback: "" }
            ]
        },
        {
            chatID: 32,
            speaker: "me",
            text: "I mean I'm staying here. All my life has been leading up to this moment. " +
                "It is my destiny to carry Azrael in my womb. I alone can bring about the coming " +
                "of our savior. I'm sorry you thought you could just come in here and rescue me, but " +
                "I don't need to be rescued. I am where I'm supposed to be. ",
            button: [
                { chatID: 33, text: "...", callback: "" }
            ]
        },
        {
            chatID: 33,
            speaker: "missy",
            text: "I am going to knock you the fuck out and drag your ass out of here! You have been completely " +
                "brain washed by these assholes! Now stop playing around and let's go!",
            button: [
                { chatID: 34, text: "...", callback: "f11" }
            ]
        },
        {
            chatID: 34,
            speaker: "me",
            text: "No. It's you that's been brain washed. Brain washed into thinking you're always right. " +
                "Not this time. This time I'm the one that's right! This time I'm the chosen one to bring " +
                "about the coming of Azrael! ",
            button: [
                { chatID: 35, text: "...", callback: "f12" }
            ]
        },
        {
            chatID: 35,
            speaker: "ubel",
            text: "Not only are you the chosen one, but you have gifted me a new pet. Missy will make an " +
                "excelling doggy to serve us all as we bring about the coming of Azrael! Come let us " +
                "join the masses and bring about the new age! ",
            button: [
                { chatID: -1, text: "[Follow him]", callback: "f13" }
            ]
        },
        {
            chatID: 36,
            speaker: "missy",
            text: "We need to hurry. I haven't had a chance to properly scout these passagess. ",
            button: [
                { chatID: 37, text: "...", callback: "f15" }
            ]
        },
        {
            chatID: 37,
            speaker: "cult",
            text: "HEY!!!! WE FOUND THEM!!! EVERYONE, THIS WAY!!!!! ",
            button: [
                { chatID: 38, text: "...", callback: "f16" }
            ]
        },
        {
            chatID: 38,
            speaker: "missy",
            text: "Fuck. Do what I say now! You keep running, I'll hold them off. What ever you do, do " +
                "not stop running! GO!",
            button: [
                { chatID: 39, text: "Yes ma'am!", callback: "f17" }
            ]
        },
        {
            chatID: 39,
            speaker: "thinking",
            text: "Shit! I can hear them coming! There's no way I'll be able to escape! ",
            button: [
                { chatID: 40, text: "*huff* *puff*", callback: "f18" }
            ]
        },
        {
            chatID: 40,
            speaker: "thinking",
            text: "That beem is broken. If I can just hit that post hard enough it just may collapse ",
            button: [
                { chatID: 41, text: "[Hit it with all your might]", callback: "f19" }
            ]
        },
        {
            chatID: 41,
            speaker: "me",
            text: "Wow! No one is ever getting through there again! ",
            button: [
                { chatID: 42, text: "...", callback: "f20" }
            ]
        },
        {
            chatID: 42,
            speaker: "me",
            text: "oh crap. There's a tunnel to here? Let me just hop down...",
            button: [
                { chatID: -1, text: "...", callback: "f21" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};

/*







        {
            chatID: 0,
            speaker: "thinking",
            text: "Finish my squats. ",
            button: [
                { chatID: -1, text: "...", callback: "finishSquats" }
            ]
        },
        {
            chatID: 1,
            speaker: "thinking",
            text: "Finish my pushups. ",
            button: [
                { chatID: -1, text: "...", callback: "finsihPushups" }
            ]
        },
       
        {
            chatID: 17,
            speaker: "cult",
            text: "It's time for your offering. ",
            button: [
                { chatID: 18, text: "...", callback: "milk6" }
            ]
        },
        {
            chatID: 18,
            speaker: "thinking",
            text: "Well, here it comes. ",
            button: [
                { chatID: 19, text: "...", callback: "milk7" }
            ]
        },
        {
            chatID: 19,
            speaker: "random",
            text: "UNGH! ",
            button: [
                { chatID: 20, text: "...", callback: "milk8" }
            ]
        },
        {
            chatID: 20,
            speaker: "thinking",
            text: "First again! He comes so easily!",
            button: [
                { chatID: -1, text: "...", callback: "milk10" }
            ]
        },
        {
            chatID: 21,
            speaker: "cult",
            text: "I've come to collect you to give your offering... What is that on the wall?",
            button: [
                { chatID: 22, text: "ummm", callback: "jo0" }
            ]
        },
        {
            chatID: 22,
            speaker: "cult",
            text: "You jacked off didn't you! You wasted our seed on the wall! For that you must be punished! Release the gas!",
            button: [
                { chatID: 23, text: "*GULP*", callback: "jo1" }
            ]
        },
        {
            chatID: 23,
            speaker: "thinking",
            text: "Oh crap.",
            button: [
                { chatID: -1, text: "...", callback: "jo2" }
            ]
        },
        {
            chatID: 24,
            speaker: "thinking",
            text: "What is that light. Am I dead?",
            button: [
                { chatID: 25, text: "...", callback: "" }
            ]
        },
        {
            chatID: 25,
            speaker: "thinking",
            text: "I can't seem to move. What the hell. What are they doing?",
            button: [
                { chatID: 26, text: "...", callback: "" }
            ]
        },
        {
            chatID: 26,
            speaker: "me",
            text: "AAAAAA!! Aaaaaa",
            button: [
                { chatID: -1, text: "...", callback: "box" }
            ]
        },
       
       
        
        {
            chatID: 42,
            speaker: "thinking",
            text: "Well that was better than just sitting around. Now what.",
            button: [
                { chatID: -1, text: "...", callback: "reset" }
            ]
        },
        {
            chatID: 43,
            speaker: "thinking",
            text: "Oh crap, that cum isn't coming out! Gross.",
            button: [
                { chatID: -1, text: "...", callback: "reset" }
            ]
        },
        {
            chatID: 44,
            speaker: "cult",
            text: "This cell is a mess. Only cleanliness is the holy grail for Azrael. You must pay the price for your transgression. ",
            button: [
                { chatID: 45, text: "*GULP*", callback: "clean1" }
            ]
        },
        {
            chatID: 45,
            speaker: "cult",
            text: "You must cleanse yourself of your sins by cleaning my pussy. Now eat it!",
            button: [
                { chatID: -1, text: "MMmmm", callback: "" }
            ]
        },
        {
            chatID: 46,
            speaker: "cult",
            text: "Oh fuck! You are awesome! I'm going to cum all over your face! ",
            button: [
                { chatID: 47, text: "*lick* *lick* *lick*", callback: "clean3" }
            ]
        },
        {
            chatID: 47,
            speaker: "cult",
            text: "Now clean up this mess bitch!",
            button: [
                { chatID: -1, text: "Right away!", callback: "clean4" }
            ]
        },
        {
            chatID: 48,
            speaker: "thinking",
            text: "This stone is loose. If only I had a something to help pry it loose. Where am I going to get something to pry it? " +
                "It also looks heavy. I hope I'm strong enough to move it. ",
            button: [
                { chatID: -1, text: "...", callback: "reset" }
            ]
        },
        {
            chatID: 49,
            speaker: "thinking",
            text: "I've chiseled it loose, but I'm not strong enough to move it. I should do some pushups. ",
            button: [
                { chatID: -1, text: "...", callback: "reset" }
            ]
        },
        
        
        
        {
            chatID: 54,
            speaker: "thinking",
            text: "Almost got it... Yes I broke through! It's too tight to squeeze through. I wonder what's on the other side. ",
            button: [
                { chatID: 55, text: "...", callback: "brick1" }
            ]
        },
        
        
        {
            chatID: 68,
            speaker: "thinking",
            text: "He doens't know I can see him. His butt is right there. Should I call out, or maybe I can surprise him..",
            button: [
                { chatID: -1, text: "Surprise him", callback: "bb0" },
                { chatID: 73, text: "Call out", callback: "b2" }
            ]
        },
        {
            chatID: 69,
            speaker: "bodhi",
            text: "<span class='hl-pink'>MOAN</span>",
            button: [
                { chatID: 70, text: "?", callback: "" }
            ]
        },
        {
            chatID: 70,
            speaker: "bodhi",
            text: "OOooo yeah. Lick it.",
            button: [
                { chatID: -1, text: "...", callback: "bb2" }
            ]
        },
        {
            chatID: 71,
            speaker: "bodhi",
            text: "<span class='hl-pink'>Hahah Again!</span>",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 72,
            speaker: "bodhi",
            text: "I love a good sissy pussy licking! It's totally sweet. I think we just became friends!",
            button: [
                { chatID: 73, text: "Sweet", callback: "" }
            ]
        },
        {
            chatID: 73,
            speaker: "bodhi",
            text: "So I was talking to my owner. She says she may be able to help you, but you have to get on the cults good " +
                "side. Just lay low and do what they say. ",
            button: [
                { chatID: -1, text: "Yeah, got it. Cool", callback: "bb4" }
            ]
        },
        
        {
            chatID: 79,
            speaker: "cult",
            text: "Then stop wasting my time. ",
            button: [
                { chatID: -1, text: "Finish", callback: "reset" },
            ]
        },
        {
            chatID: 80,
            speaker: "thinking",
            text: "Damn. I'm locked pretty tight. ",
            button: [
                { chatID: 81, text: "...", callback: "mp2" }
            ]
        },
        {
            chatID: 81,
            speaker: "thinking",
            text: "Oh no! What have I gotten myself into again. ",
            button: [
                { chatID: 82, text: "...", callback: "mp3" }
            ]
        },
        {
            chatID: 82,
            speaker: "cult",
            text: "After I finish pissing in your mouth I'm going to piss into that sweet ass of yours. ",
            button: [
                { chatID: 83, text: "GLUB GLUB", callback: "mp4" }
            ]
        },
        {
            chatID: 83,
            speaker: "cult",
            text: "Oh yes. That ass is hungry for my piss. ",
            button: [
                { chatID: 84, text: "...", callback: "mp5" }
            ]
        },
        {
            chatID: 84,
            speaker: "thinking",
            text: "I'm so full of piss! It's leaking all over my body. I don't think I can fit any more. ",
            button: [
                { chatID: 85, text: "...", callback: "mp6" }
            ]
        },
        {
            chatID: 85,
            speaker: "cult",
            text: "My favorite pee pee girl! I love pissing in this slut! ",
            button: [
                { chatID: 86, text: "...", callback: "mp7" }
            ]
        },
        {
            chatID: 86,
            speaker: "thinking",
            text: "I feel so dirty, used and ashamed. ",
            button: [
                { chatID: 87, text: "Gulp", callback: "mp8" }
            ]
        },
        {
            chatID: 87,
            speaker: "cult",
            text: "GROSS!! You're so disgusting! Back to your cell pee pee whore. ",
            button: [
                { chatID: 88, text: "[Return to cell]", callback: "mp9" }
            ]
        },
        {
            chatID: 88,
            speaker: "thinking",
            text: "Oh no! I have so much pee in me it's cramping sooooo bad. I need to expel it!",
            button: [
                { chatID: 89, text: "...", callback: "mp10" }
            ]
        },
        {
            chatID: 89,
            speaker: "thinking",
            text: "Oh god! That feels so good!",
            button: [
                { chatID: -1, text: "Groan", callback: "mp11" }
            ]
        },
        
        
        {
            chatID: 102,
            speaker: "cult",
            text: "Too much body hair is unhygienic. We don't want you to get lice or crabs. Now go shave. ",
            button: [
                { chatID: 103, text: "ok.", callback: "shave1" }
            ]
        },
        {
            chatID: 103,
            speaker: "thinking",
            text: "I should shave like she told me to. ",
            button: [
                { chatID: -1, text: "...", callback: "shave2" }
            ]
        },
        {
            chatID: 104,
            speaker: "cult",
            text: "You've been such a good slut " + sc.n("ubel") + " has asked for you to join the ceremony. " ,
            button: [
                { chatID: -1, text: "...", callback: "ceremony" }
            ]
        },
        {
            chatID: 105,
            speaker: "bodhi",
            text: "Just be cool and they'll let you out. Then you can come over and visit! ",
            button: [
                { chatID: -1, text: "Ok ", callback: "reset" }
            ]
        },
        {
            chatID: 106,
            speaker: "cult",
            text: "I can see you're on the path to enlightenment. If you stay the path you may find yourself within the " +
                "Carnal Union of Motals. You still have much to learn, and much suffering to give before we will look at you, " +
                "but for now I shall let you stretch your legs and wander the hallway. ",
            button: [
                { chatID: 107, text: "Nice! ", callback: "" }
            ]
        },
        {
            chatID: 107,
            speaker: "cult",
            text: "While you may visit your fellow cell prisoners, but you may not proceed beyond the hallway without an escort. " +
                "May Azreal be with you. ",
            button: [
                { chatID: -1, text: "ok", callback: "reset" }
            ]
        },
        {
            chatID: 108,
            speaker: "thinking",
            text: "cleaning this hallway isn't so bad. I wish it was warmer though. ",
            button: [
                { chatID: 109, text: "Chat with the cult member at the end of the hall", callback: "sweepHallway2" },
                { chatID: -1, text: "Finish cleaning", callback: "sweepHallway1end" }
            ]
        },
        {
            chatID: 109,
            speaker: "cult",
            text: "You're looking at me like you want to suck my cock. ",
            button: [
                { chatID: 110, text: "Oh. I do", callback: "sweepHallway3" },
                { chatID: -1, text: "Nothing. I've got to finish cleaning. Sorry. ", callback: "sweepHallway1end" }
            ]
        },
        {
            chatID: 110,
            speaker: "cult",
            text: "I thought so slut. Now get to it. ",
            button: [
                { chatID: 111, text: "Yes sir.", callback: "sweepHallway4" }
            ]
        },
        {
            chatID: 111,
            speaker: "cult",
            text: "That's a good cock sucker. You must have sucked a lot of dicks. ",
            button: [
                { chatID: -1, text: "SLURP SLURP SLURP", callback: "sweepHallway5" }
            ]
        },
        {
            chatID: 112,
            speaker: "cult",
            text: "Oh fuck! Swallow my cum slut! ",
            button: [
                { chatID: 113, text: "GURGLE, Slurp, swollow", callback: "sweepHallway6" }
            ]
        },
        {
            chatID: 113,
            speaker: "cult",
            text: "Now thank me for allowing your to swollow my cum slut and get out of here.  ",
            button: [
                { chatID: -1, text: "Thank you for letting me swollow your cum. ", callback: "sweepHallway6end" }
            ]
        },
        {
            chatID: 114,
            speaker: "thinking",
            text: "Those keys are so BIG! I need to stretch my ass out more if I want to fit them in! Maybe I'll use " +
                "those vegetables to stretch me out more. ",
            button: [
                { chatID: 113, text: "GURGLE, Slurp, swollow", callback: "sweepHallway6" }
            ]
        },
        {
            chatID: 115,
            speaker: "thinking",
            text: "I'll just grab these keys really quick while he's got his eyes closed and shove them in my ass. ",
            button: [
                { chatID: 116, text: "GURGLE, Slurp, swollow", callback: "sweepHallway6x" }
            ]
        },
        {
            chatID: 116,
            speaker: "thinking",
            text: "Oh wow. They are so cold! Now to sneak these keys back to my cell and get it to " + sc.n("daria") + ". ",
            button: [
                { chatID: 117, text: "...", callback: "sweepHallway7" }
            ]
        },
        {
            chatID: 117,
            speaker: "daria",
            text: "I saw you blowing that guy. Did you get the keys?",
            button: [
                { chatID: 118, text: "I did. They're in hidden in my butt. ", callback: "" }
            ]
        },
        {
            chatID: 118,
            speaker: "daria",
            text: "Good. Turn around really quick, I'll grab them.",
            button: [
                { chatID: 119, text: "Wha...", callback: "sweepHallway8" }
            ]
        },
        {
            chatID: 119,
            speaker: "daria",
            text: "I think I feel them. Your asshole is so stretched out. One second... Got them.",
            button: [
                { chatID: 120, text: "OOooooo", callback: "sweepHallway7" }
            ]
        },
        {
            chatID: 120,
            speaker: "daria",
            text: "Everything's set. The next time they do the ceremony we'll break out of here! I can't stay long. Keep a " +
                "low profile. ",
            button: [
                { chatID: -1, text: "Sweet", callback: "sweepHallway9" }
            ]
        },
        {
            chatID: 121,
            speaker: "cult",
            text: "You're doing well at cleaning. So well I'll let you clean the floors. ",
            button: [
                { chatID: -1, text: "oh, uh thanks. ", callback: "sleepforNight" }
            ]
        },
        {
            chatID: 122,
            speaker: "cult",
            text: "I can tell you're a dirty dirty slut. Cleaning floors is really a waste of your talents. I'm going to let you " +
                "be a toilet. It's more fitting for a trashy slut like you. ",
            button: [
                { chatID: -1, text: "Thanks?", callback: "sleepforNight" }
            ]
        },
        {
            chatID: 123,
            speaker: "cult",
            text: "Step aside, we must prepare you. ",
            button: [
                { chatID: 124, text: "Huh?", callback: "t0" }
            ]
        },
        {
            chatID: 124,
            speaker: "cult",
            text: "You are blessed to have the opportunity with " + sc.n("ubel") + ". He doesn't usually spend time with " +
                "the milking stock, but he sees something special in you. May Azreal be with you this night. ",
            button: [
                { chatID: 125, text: "Uhh, you too?", callback: "t1" }
            ]
        },
        {
            chatID: 125,
            speaker: "ubel",
            text: "Azreal truly has blessed us both with our meeting. It was fate that brought you to me. ",
            button: [
                { chatID: 126, text: "What?", callback: "" }
            ]
        },
        {
            chatID: 126,
            speaker: "ubel",
            text: "Don't speak. You are an empty vessel, both in mind and spirit with no true meaning for your life. But Azreal " +
                "has seen your potential. That is why you were brought to me. To fill you with meaning till it overflows from " +
                "your stoma and bowels. ",
            button: [
                { chatID: 127, text: "?", callback: "" }
            ]
        },
        {
            chatID: 127,
            speaker: "ubel",
            text: "But no realizings one's potential takes time and effort on both our ends for your ascension into greatness. " +
                "Are you ready small one to begin of your journey?",
            button: [
                { chatID: 128, text: "Journey?", callback: "t2" }
            ]
        },
        {
            chatID: 128,
            speaker: "ubel",
            text: "Yes. I will shape and mold you into who you were truly meant to be. Now ready yourself, for the first step " +
                "is to break you with pain. ",
            button: [
                { chatID: 129, text: "Pain?", callback: "t3" }
            ]
        },
        {
            chatID: 129,
            speaker: "ubel",
            text: "PAIN WILL MOLD YOU!",
            button: [
                { chatID: 130, text: "AAAAAAAaaaaaaaaaaaaaaaaaa", callback: "t2" }
            ]
        },
        {
            chatID: 130,
            speaker: "ubel",
            text: "Pain will..",
            button: [
                { chatID: 131, text: "*Sob*", callback: "t3" }
            ]
        },
        {
            chatID: 131,
            speaker: "ubel",
            text: "FREE YOUR BODY!!",
            button: [
                { chatID: 132, text: "AAAAaaaaa", callback: "t2" }
            ]
        },
        {
            chatID: 132,
            speaker: "ubel",
            text: "Pain will...",
            button: [
                { chatID: 133, text: "*Whimper*", callback: "t3" }
            ]
        },
        {
            chatID: 133,
            speaker: "ubel",
            text: "FREE YOUR MIND!!",
            button: [
                { chatID: 134, text: "!!!!!!!", callback: "t2" }
            ]
        },
        {
            chatID: 134,
            speaker: "ubel",
            text: "Pain will...",
            button: [
                { chatID: 135, text: "*Sob uncontrollably*", callback: "t3" }
            ]
        },
        {
            chatID: 135,
            speaker: "ubel",
            text: "MAKE YOU MINE!!!!",
            button: [
                { chatID: 136, text: "AAAAAAAAAAAAAaaaaaa", callback: "t4x" }
            ]
        },
        {
            chatID: 136,
            speaker: "ubel",
            text: "Leave her to enjoy her pain through the night. It must be relished. ",
            button: [
                { chatID: 137, text: "*whimper*", callback: "t5" }
            ]
        },
        {
            chatID: 137,
            speaker: "thinking",
            text: "I'm in too much pain to even think. My legs sting, my calves are cramping, and my buttole feels like it's going " +
                "to rip open. I will do anything not to have that happen again...",
            button: [
                { chatID: 138, text: "...", callback: "t4" }
            ]
        },
        {
            chatID: 138,
            speaker: "cult",
            text: "You are blessed to have such an experience. I shall let you down, but don't forget the lesson you have learned. ",
            button: [
                { chatID: -1, text: "*Grumble*", callback: "t6" }
            ]
        },*/