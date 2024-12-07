//Room name
var room954 = {};
room954.main = function () {
    chat(0, 954);
};

room954.btnclick = function (name) {
    switch (name) {
        case "tnext":
            if (g.internal < 11) {
                g.internal++;
                nav.bg("954_torture/t" + g.internal + ".jpg");
            }
            else {
                char.settime(22, 47);
                nav.killbutton("tnext");
                chat(14, 954);
            }
                
            break;
        default:
            break;
    }
};

room954.chatcatch = function (callback) {
    switch (callback) {
        case "t0":
            cl.nude();
            nav.bg("954_torture/t0.jpg");
            break;
        case "t1":
        case "t2":
        case "t3":
        case "t4":
        case "t12":
        case "t14":
        case "t15":
        case "t16":
        case "t17":
        case "t20":
        case "t21":
        case "t22":
        case "t23":
        case "t24":
        case "t25":
        case "t33":
            nav.killall();
            nav.bg("954_torture/" + callback + ".jpg");
            break;
        case "t4x":
            g.internal = 5;
            nav.button({
                "type": "btn",
                "name": "tnext",
                "left": 1687,
                "top": 900,
                "width": 233,
                "height": 150,
                "image": "526_bar/arrowRight.png",
                "title": "Keep getting fuck sissy"
            }, 954);
            break;
        case "t13":
            nav.bg("7_mainCharRoomAlt/black.jpg");
            g.roomTimeout = setTimeout(function () {
                nav.bg("954_torture/t13.jpg");
                chat(19, 954);
            }, 1000);
            break;
        case "t18":
            nav.bg("954_torture/t18.jpg");
            zcl.displayMain(100, 800, .22, "", false);
            nav.button({
                "type": "img",
                "name": "tnext",
                "left": 422,
                "top": 0,
                "width": 960,
                "height": 1080,
                "image": "954_torture/t18.png"
            }, 954);
            break;
        case "t19":
            nav.killall();
            nav.bg("954_torture/t19.jpg");
            break;
        case "t26":
            char.addDays(1);
            char.settime(2, 16);
            nav.bg("954_torture/t26.jpg");
            zcl.displayMain(100, 100, .3, "", true);
            break;
        case "t27":
            nav.bg("954_torture/t27.jpg");
            zcl.displayMain(-100, 260, .3, "", true);
            break;
        case "t28":
            nav.bg("225_sewer/sewer.jpg");
            nav.button({
                "type": "btn",
                "name": "t29",
                "left": 1525,
                "top": 430,
                "width": 94,
                "height": 228,
                "image": "225_sewer/up.png",
                "title": "Notify the police."
            }, 228);
            break;
        case "t29":
            nav.killall();
            nav.bg("954_torture/t29.jpg");
            break;
        case "t30":
            nav.bg("954_torture/t30.jpg");
            g.roomTimeout = setTimeout(function () {
                nav.bg("954_torture/t30.jpg");
                chat(58, 954);
            }, 1500);
            break;
        case "t34":
            g.sissy[55].ach = true;
            g.sissy[58].ach = true;
            g.sissy[59].ach = true;
            sc.setstep("missy", 100);
            cl.c.swimsuit = null;
            cl.c.dress = null;
            cl.c.pants = "p";
            cl.c.shirt = "j";
            cl.display();
            char.room(0);
            gv.set("oncase", null);
            $('#room-menu').show();
            $("#room-inv").show();
            break;
        default:
            break;
    }
};

room954.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "ubel",
            text: "I would like to welcome you to my favorite room one the entire compound. This is where those that have lost " +
                "the path rejoin us either on earth or with Azreal. Where shall we start... What is your favorite torture?",
            button: [
                { chatID: 1, text: "No torture?", callback: "" },
                { chatID: 2, text: "The Pillory", callback: "" },
                { chatID: 2, text: "Wooden Horse", callback: "" },
                { chatID: 2, text: "Iron Maiden", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "ubel",
            text: "Hahaha. Still have a sense of humor. Breaking you will be the most delicious. ",
            button: [
                { chatID: 3, text: "...", callback: "" },
            ]
        },
        {
            chatID: 2,
            speaker: "ubel",
            text: "Aaaaa. I do like that one, but my favorite will always be the whip. There is no better sound than the flesh " +
                "being ripped from the body. ",
            button: [
                { chatID: 3, text: "...", callback: "" },
            ]
        },
        {
            chatID: 3,
            speaker: "ubel",
            text: "Since we have time, I'm going to lock you two in while I gather everyone. ",
            button: [
                { chatID: 4, text: "...", callback: "t0" }
            ]
        },
        {
            chatID: 4,
            speaker: "me",
            text: "...",
            button: [
                { chatID: 5, text: "...", callback: "t0" }
            ]
        },
        {
            chatID: 5,
            speaker: "daria",
            text: "I'm scared.",
            button: [
                { chatID: 6, text: "Me too.", callback: "" }
            ]
        },
        {
            chatID: 6,
            speaker: "daria",
            text: "I know I can come off as some big bad dominatrix, but this is really just too much. I only wanted to be with " +
                sc.n("bodhi") + " in a place where we could just focus on each other. ",
            button: [
                { chatID: 7, text: "...", callback: "" }
            ]
        },
        {
            chatID: 7,
            speaker: "daria",
            text: "I never wanted any of this. I really made of mess of this. I was so sure of my plan. ",
            button: [
                { chatID: 8, text: "It's ok. I know you were only trying to help", callback: "" }
            ]
        },
        {
            chatID: 8,
            speaker: "daria",
            text: "I've heard stories of this place. No one comes out alive. Sometimes at night I can hear the screams echoing " +
                "in the corridors. I always thought they deserved what they were getting not knowing I would end up here too. ",
            button: [
                { chatID: 9, text: "We'll get through this.", callback: "" }
            ]
        },
        {
            chatID: 9,
            speaker: "daria",
            text: "We must stick together and support each other. No matter what happens. No matter how long it takes. We " +
                "must persevere.",
            button: [
                { chatID: 10, text: "...", callback: "t1" }
            ]
        },
        {
            chatID: 10,
            speaker: "me",
            text: "I will be with you. ",
            button: [
                { chatID: 11, text: "...", callback: "t2" }
            ]
        },
        {
            chatID: 11,
            speaker: "me",
            text: "Every step of the way.",
            button: [
                { chatID: 12, text: "...", callback: "t3" }
            ]
        },
        {
            chatID: 12,
            speaker: "ubel",
            text: "Let us begin. Your first lesson is self worth. This lesson will continue until you realize you have no worth. " +
                "Put them on the slab. ",
            button: [
                { chatID: 13, text: "...", callback: "t4" }
            ]
        },
        {
            chatID: 13,
            speaker: "ubel",
            text: "You will service every cock until your breath reeks of semen and your ass flows a river of cum. ",
            button: [
                { chatID: -1, text: "Oh no", callback: "t4x" }
            ]
        },
        {
            chatID: 14,
            speaker: "me",
            text: "I have never been fucked like that before. I'm so sore, tired, and full of cum. ",
            button: [
                { chatID: 15, text: "...", callback: "" }
            ]
        },
        {
            chatID: 15,
            speaker: "daria",
            text: "I can't believe this is just the first day. I don't think my asshole will ever close on it's own again. " ,
            button: [
                { chatID: 16, text: "...", callback: "" }
            ]
        },
        {
            chatID: 16,
            speaker: "me",
            text: "How many do we have left?",
            button: [
                { chatID: 17, text: "...", callback: "" }
            ]
        },
        {
            chatID: 17,
            speaker: "daria",
            text: "There must be a few hundred here and I don't think we've even done half. Even more they keep coming. " +
                "There's no way I can take all these dicks.",
            button: [
                { chatID: 18, text: "...", callback: "t12" }
            ]
        },
        {
            chatID: 18,
            speaker: "me",
            text: "I don't know if I can keep going either. ",
            button: [
                { chatID: -1, text: "...", callback: "t13" }
            ]
        },
        {
            chatID: 19,
            speaker: "ubel",
            text: "I must commend you two. No one has lasted as long as either of you have. I expected that from " + sc.n("me") + 
                ", for I know she has a higher purpose. But I was surprised by your performance, " + sc.n("daria") + ". It " +
                "seems like " + sc.n("bodhi") + " is holding you back from your true potential. ", 
            button: [
                { chatID: 20, text: "...", callback: "" }
            ]
        },
        {
            chatID: 20,
            speaker: "ubel",
            text: "But neither of you were able to pass the first test, so we shall repeat it tomorrow. Since neither of you were " +
                "able to pass it today you shall be punished. Each day you fail to pass the first test the punishment will increase " +
                "in severity. ",
            button: [
                { chatID: 21, text: "*groan*", callback: "t14" }
            ]
        },
        {
            chatID: 21,
            speaker: "ubel",
            text: "Today I will allow you to choose. You can spend the night in that position after taking 10 lashing from my whip. Or " +
                "you can spend the night strapped down to the wooden horse with weights attached to your ankles. " +
                "The choice is yours. Choose carefully for if you fail your test " +
                "tomorrow I shall hang you both upside down and whip you every hour till the night is over. ",
            button: [
                { chatID: 22, text: "We'll take the whip.", callback: "t15" },
                { chatID: 22, text: "We'll choose the wooden horse. ", callback: "t15" }
            ]
        },
        {
            chatID: 22,
            speaker: "ubel",
            text: "A fine choice. I will enjoy your suffering almost as much as my brothers will enjoy using and abusing all of " +
                "your gaping cum filled holes. With the power of Azreal I will make you SUFFER! I WILL MAKE YOUR BLEED! I " +
                "WILL MAKE YOU WISH FOR DEATH!! I WILL ...",
            button: [
                { chatID: 23, text: "...", callback: "t16" }
            ]
        },
        {
            chatID: 23,
            speaker: "missy",
            text: "You will shut up! ",
            button: [
                { chatID: 24, text: "Huh!?", callback: "t17" }
            ]
        },
        {
            chatID: 24,
            speaker: "missy",
            text: "Now to release you three and get out of here.  ",
            button: [
                { chatID: 25, text: sc.n("missy") + "!!!", callback: "t18" }
            ]
        },
        {
            chatID: 25,
            speaker: "missy",
            text: "I need you three to keep quiet and follow me. I know the secret tunnel to escape from here. We need to be quick " +
                "or those idiots from the cult will figure out what's going on and try to stop us. ",
            button: [
                { chatID: 26, text: "Oh thank you so much. I thought we were going to die. ", callback: "" }
            ]
        },
        {
            chatID: 26,
            speaker: "missy",
            text: "Yes. It really is my fault you got in so deep. I've been working ever angle I could on the outside to get you out, " +
                "but for now we've got to go. Follow me",
            button: [
                { chatID: 27, text: "Follow her", callback: "t19" }
            ]
        },
        {
            chatID: 27,
            speaker: "missy",
            text: "Not many people know about this old cave system that runs to the compound. I caught one of those cultists and had " +
                "to torture him in the black room of pain for a week before he told me about it. Then it took a few days of sneaking " +
                "around before I could get a good layout of the place. ",
            button: [
                { chatID: 28, text: "Why didn't you go to the police?", callback: "" }
            ]
        },
        {
            chatID: 28,
            speaker: "missy",
            text: "I did. They told me they did a search of this place and didn't find anything. That pig cop told me you had just " +
                "run off and I was being ridiculous. I'm pretty sure the cops are on the payroll of the cult. I even tried the FBI, " +
                "but the local cops got to them first and they wouldn't take the case. ",
            button: [
                { chatID: 29, text: "Wow", callback: "" }
            ]
        },
        {
            chatID: 29,
            speaker: "missy",
            text: "Now that I know the cave system I'm going to go back in and get the evidence I need and turn it over to the news stations. " +
                " I'm going to bury them in so many pictures and videos the FBI won't have any choice other than to raid this place and " +
                "shut it down for good. They can't continue to kidnap the people of this town.",
            button: [
                { chatID: 30, text: "Yes!", callback: "" }
            ]
        },
        {
            chatID: 30,
            speaker: "missy",
            text: "I know it was rough in there, but you have really come a long way. You should really be proud of yourself. " +
                "Most people would not have survived what they put you through, but your inner strength is what made you survive. " +
                "I won't blame you if you quit, but there's really so much potential in you to do greatness. ",
            button: [
                { chatID: 31, text: "Oh thank you", callback: "" }
            ]
        },
        {
            chatID: 31,
            speaker: "missy",
            text: "When we get back there's going to be a lot of changes. The first thing I'm going to do... ",
            button: [
                { chatID: 32, text: "Yes?", callback: "" }
            ]
        },
        {
            chatID: 32,
            speaker: "missy",
            text: "Shhhh... everyone be quiet. I think I hear something...",
            button: [
                { chatID: 33, text: "...", callback: "t20" }
            ]
        },
        {
            chatID: 33,
            speaker: "missy",
            text: "Shit. I thought it would take them longer to find us! You three run. If you keep following the sewer you'll come out " +
                "where you got the red box. You know how to get out from there. ",
            button: [
                { chatID: 34, text: "What? Aren't you coming?", callback: "t21" }
            ]
        },
        {
            chatID: 34,
            speaker: "missy",
            text: "I'll buy you time! Run you fools! ",
            button: [
                { chatID: 35, text: "Run!", callback: "t22" }
            ]
        },
        {
            chatID: 35,
            speaker: "bodhi",
            text: "I don't want to go back!",
            button: [
                { chatID: 36, text: "...", callback: "t23" }
            ]
        },
        {
            chatID: 36,
            speaker: "me",
            text: "They're still following us! Keep running!",
            button: [
                { chatID: 37, text: "...", callback: "t22" }
            ]
        },
        {
            chatID: 37,
            speaker: "me",
            text: "I don't think we'll be able to outrun them!",
            button: [
                { chatID: 38, text: "...", callback: "t24" }
            ]
        },
        {
            chatID: 38,
            speaker: "daria",
            text: "Look! That log holding the roof the cave is rotting. If we can kick it down the entire roof my fall in!",
            button: [
                { chatID: 39, text: "What about " + sc.n("missy") + "!", callback: "" }
            ]
        },
        {
            chatID: 39,
            speaker: "daria",
            text: "There's too many of them, they have her. If we don't knock this down they'll have us too! We have to act NOW!",
            button: [
                { chatID: 40, text: "We can't do that, she'll be trapped!", callback: "" }
            ]
        },
        {
            chatID: 40,
            speaker: "daria",
            text: "They already have her and if we don't act fast they'll have us too! " + sc.n("bodhi") + " help me knock " +
                "this over!",
            button: [
                { chatID: 41, text: "Noooooo!", callback: "" }
            ]
        },
        {
            chatID: 41,
            speaker: "daria",
            text: "Oh wow! That did it! There's no way they're getting through that. ",
            button: [
                { chatID: 42, text: "I'm so sorry " + sc.n("missy") + ". ", callback: "" }
            ]
        },
        {
            chatID: 42,
            speaker: "daria",
            text: "It's done. We need to keep going.",
            button: [
                { chatID: 43, text: "*Sob* Ok, follow me. ", callback: "t25" }
            ]
        },
        {
            chatID: 43,
            speaker: "bodhi",
            text: "It's too high. I'm going to break my head.",
            button: [
                { chatID: 44, text: "...", callback: "t26" }
            ]
        },
        {
            chatID: 44,
            speaker: "daria",
            text: "That's why you go feet first. We're both fine. Just drop down before someone comes. ",
            button: [
                { chatID: 45, text: "Hurry up, we've got to get through the tunnels.", callback: "t27" }
            ]
        },
        {
            chatID: 45,
            speaker: "me",
            text: "We've got to get " + sc.n("missy") + " out of there. We'll get dressed, get some weapons and get her out of there. " +
                "We have to! She came back to save us and we're not going to leave her there!. " + sc.n("daria") +
                " do you know the way to get into the compound? ",
            button: [
                { chatID: 46, text: "...", callback: "" }
            ]
        },
        {
            chatID: 46,
            speaker: "daria",
            text: "I have no idea of any shortcuts. We only went in there once, and what I remember is that we had to go through " +
                "a cave with a giant locked door. There's all kinds of weirdos in the cave. People that tried to join the cult, but " +
                "were rejected. They keep them there to protect the path in by filling their heads with all kinds of nonsense. ",
            button: [
                { chatID: 47, text: "How do we get into the compound once we make it through the cave?", callback: "" }
            ]
        },
        {
            chatID: 47,
            speaker: "daria",
            text: "First of all, you're not making it through the cave. There's too many of them. Then when you reach the compound " +
                "you have to make it through all the guards everywhere, which is impossible. I had to blow around 20 different guards " +
                "so they would let me wander around in my regular clothes. ",
            button: [
                { chatID: 48, text: "There's got to be a way in ", callback: "" }
            ]
        },
        {
            chatID: 48,
            speaker: "daria",
            text: "There isn't! If we go back there we'll end up dead. It's suicide. You need to just tell the cops and let them handle " +
                "it. This is too big for you, or us. ",
            button: [
                { chatID: 49, text: "You heard " + sc.n("missy") + ". The cops are in on it! ", callback: "" }
            ]
        },
        {
            chatID: 49,
            speaker: "bodhi",
            text: "I'm with " + sc.n("daria") + ". That place is totally nuts and I really don't want to die. We need to get out of " +
                "this town; pronto. You're welcome to come with us. I feel terrible, but there's nothing we can do. ",
            button: [
                { chatID: 50, text: "Are you really thinking about leaving her there with them!", callback: "" }
            ]
        },
        {
            chatID: 50,
            speaker: "daria",
            text: "Yes. We're leaving, and you should too. I'm really sorry about that " + sc.n("missy") + " girl, but she's probably " +
                "already dead and we're not going to walk to our certain deaths too. ",
            button: [
                { chatID: 51, text: "But...", callback: "" }
            ]
        },
        {
            chatID: 51,
            speaker: "daria",
            text: "No. We're leaving and you should too. C'mon " + sc.n("bodhi") + ". ",
            button: [
                { chatID: 52, text: "...", callback: "t28" }
            ]
        },
        {
            chatID: 52,
            speaker: "thinking",
            text: "Fuck those two assholes! I'm not going to just leave " + sc.n("missy") + " there. What should I do. I don't " +
                "think " + sc.n("landlord") + " or my " + sc.n("el") + " could help. I can't think of anyone that can. Maybe " +
                sc.n("p") + " can, but I don't know how to reach her so late and I can't wait till morning. I have to go to the cops. " +
                "Maybe they'll listen to me. They have to!",
            button: [
                { chatID: 53, text: "Go to the police. ", callback: "t29" }
            ]
        },
        {
            chatID: 53,
            speaker: "me",
            text: "Hay! I need to get a cop! The cult is out there! They kidnapped my friend! ",
            button: [
                { chatID: 54, text: "...", callback: "" }
            ]
        },
        {
            chatID: 54,
            speaker: "wyatt",
            text: "You're naked! In a police station.  ",
            button: [
                { chatID: 55, text: "Yeah! Is there a cop in here! ", callback: "" }
            ]
        },
        {
            chatID: 55,
            speaker: "cop2",
            text: "Hey hay hay. I'm got this!",
            button: [
                { chatID: 56, text: "I need your help! ", callback: "" }
            ]
        },
        {
            chatID: 56,
            speaker: "wyatt",
            text: "I want to hear this. ",
            button: [
                { chatID: 57, text: "...", callback: "" }
            ]
        },
        {
            chatID: 57,
            speaker: "cop2",
            text: "Agent " + sc.n("wyatt") + " why don't we step aside really quick. Just a second kid. Wait here. ",
            button: [
                { chatID: -1, text: "What! ", callback: "t30" }
            ]
        },
        {
            chatID: 58,
            speaker: "wyatt",
            text: "I have run out of town for a few days, but I do want to sit down with you personally when I get back. " +
                "I'll get your contact information from this officer here, but I do want to hear more of this kidnapping. " +
                "You're in good hands with this man. ",
            button: [
                { chatID: 59, text: "Buh... ", callback: "t31" }
            ]
        },
        {
            chatID: 59,
            speaker: "cop2",
            text: "Follow me back to one of our back offices so I can help you out. ",
            button: [
                { chatID: 60, text: "ok... ", callback: "t32" }
            ]
        },
        {
            chatID: 60,
            speaker: "me",
            text: "Tell your entire story. ",
            button: [
                { chatID: 61, text: "...", callback: "t33" }
            ]
        },
        {
            chatID: 61,
            speaker: "cop2",
            text: "That sounds like a lot. I'll send out an officer to check it out. ",
            button: [
                { chatID: 62, text: "They have her! She could be dead! You need to send all the troops to get her!", callback: "" }
            ]
        },
        {
            chatID: 62,
            speaker: "cop2",
            text: "I don't think you really understand how the real world works. Maybe you've played too many video games. You come " +
                "into my station, naked, and demand we storm the compound saying " + sc.n("missy") + " is trapped in there. Now I've " +
                "dealt with her a few times with her crazy conspiracies with the cult. Just because they worship some strange shit " +
                "don't make illegal. We don't just go storming places of worship based on crazy stories made up by naked people " +
                "that show up here. ",
            button: [
                { chatID: 63, text: "It's not crazy. It's real!", callback: "" }
            ]
        },
        {
            chatID: 63,
            speaker: "cop2",
            text: "Like I said, I'll send an officer there in the morning and well check the validity of your story. It's far too " +
                "late to go wandering in the forest. I'll give you a change of clothes, then you should get some sleep. Let us " +
                "handle it from here. ",
            button: [
                { chatID: 64, text: "Bu...", callback: "" }
            ]
        },
        {
            chatID: 64,
            speaker: "cop2",
            text: "I will take care of it. You just settle down and go get some sleep. You can stop by in the afternoon and I'll " +
                "give you an update. ",
            button: [
                { chatID: 65, text: "...", callback: "" }
            ]
        },
        {
            chatID: 65,
            speaker: "thinking",
            text: "I don't trust that stupid cop. He won't do anything. I need help. Maybe " + sc.n("p") + " or " + sc.n("cecilia") +
                " know something that can help. I'll have to catch them at the detective agency in the morning and get them to help. ",
            button: [
                { chatID: 66, text: "Ok. Give me some clothes and I'll be on my way. ", callback: "" }
            ]
        },
        {
            chatID: 66,
            speaker: "cop2",
            text: "Now that's a smart thing to do. Don't worry, if she's there we'll get her out. ",
            button: [
                { chatID: -1, text: "Humph. ok ", callback: "t34" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};