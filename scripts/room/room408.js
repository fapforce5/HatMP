//Tattoo name
var room408 = {};
room408.main = function () {
    g.internal = {
        fairy: {
            name: "fairy",
            img: "tattoo_fairy.png",
            inv: false,
            x: 600,
            y: 200
        },
        trampstamp: {
            name: "trampstamp",
            img: "tattoo_trampstamp.png",
            inv: false,
            x: 800,
            y: 200
        },
        bunny: {
            name: "bunny",
            img: "tattoo_bunny.png",
            inv: false,
            x: 600,
            y: 400
        },
        sissy: {
            name: "sissy",
            img: "tattoo_sissy.png",
            inv: false,
            x: 800,
            y: 400
        },
        //custom: {
        //    name: "custom",
        //    img: "tattoo_custom.png",
        //    inv: false,
        //    x: 600,
        //    y: 600
        //}
    };
    if (sc.checkevent("stormy", -1) && g.hourBetween(10, 20)) {
        sc.revokeStep("stormy", -1);
        nav.bg("408_tattoo/inside.jpg");
        chat(38, 408);
    }
    else if (g.sissy[27].ach || g.sissy[30].ach) {
        if (g.hourBetween(10, 20)) {
            nav.bg("408_tattoo/inside.jpg");
            var activeCase = q3.activeSearch("stormy");
            if (!g.sissy[30].ach) {
                if (activeCase)
                    chat(6, 408);
                else
                    chat(2, 408);
            }
            else {
                if (activeCase)
                    chat(7, 408)
                else
                    chat(3, 408);
            }
        }
        else {
            chat(0, 408);
        }
    }
    else {
        chat(1, 408);
    }
    var navList = [0];
    nav.buildnav(navList);
};

room408.btnclick = function (name) {
    switch (name) {
        case "cancel":
            char.room(408);
            break;
        case "fairy":
        case "trampstamp":
            cl.c.tattoo.push(name);
            nav.killall();
            zcl.displayMain(-100, 300, .27, "nude", true);
            cl.display();
            g.roomTimeout = setTimeout(function () {
                chat(5, 408);
            }, 1500);
            break;
        case "bunny":
        case "sissy":
            cl.c.tattoo.push(name);
            nav.killall();
            zcl.displayMain(-100, 300, .27, "nude", false);
            cl.display();
            g.roomTimeout = setTimeout(function () {
                chat(5, 408);
            }, 1500);
            break;
        case "custom":
            nav.input(408, "Enter your custom tattoo word");
            break;
        case "char_input":
            var thisTattoo = nav.inputGet().trim();
            if (thisTattoo.length === 0)
                chat(39, 408);
            else {
                cl.c.bracelets = thisTattoo;
                nav.killall();
            }
            break;
        default:
            break;
    }
};

room408.chatcatch = function (callback) {
    var i;
    switch (callback) {
        case "leave":
            char.room(0);
            break;
        case "reset":
            char.room(408);
            break;
        case "tattoo":
            for (i = 0; i < cl.c.tattoo.length; i++) {
                switch (cl.c.tattoo[i]) {
                    case "fairy":
                        g.internal.fairy.inv = true;
                        break;
                    case "bunny":
                        g.internal.bunny.inv = true;
                        break;
                    case "sissy":
                        g.internal.sissy.inv = true;
                        break;
                    case "trampstamp":
                        g.internal.trampstamp.inv = true;
                        break;
                    case "custom":
                        g.internal.custom.inv = true;
                }
            }
            if (!g.internal.fairy.inv)
                nav.button({
                    "type": "btn",
                    "name": "fairy",
                    "left": g.internal.fairy.x,
                    "top": g.internal.fairy.y,
                    "width": 150,
                    "height": 150,
                    "image": "408_tattoo/" + g.internal.fairy.img
                }, 408);
            if (!g.internal.bunny.inv)
                nav.button({
                    "type": "btn",
                    "name": "bunny",
                    "left": g.internal.bunny.x,
                    "top": g.internal.bunny.y,
                    "width": 150,
                    "height": 150,
                    "image": "408_tattoo/" + g.internal.bunny.img
                }, 408);
            if (!g.internal.sissy.inv)
                nav.button({
                    "type": "btn",
                    "name": "sissy",
                    "left": g.internal.sissy.x,
                    "top": g.internal.sissy.y,
                    "width": 150,
                    "height": 150,
                    "image": "408_tattoo/" + g.internal.sissy.img
                }, 408);
            if (!g.internal.trampstamp.inv)
                nav.button({
                    "type": "btn",
                    "name": "trampstamp",
                    "left": g.internal.trampstamp.x,
                    "top": g.internal.trampstamp.y,
                    "width": 150,
                    "height": 150,
                    "image": "408_tattoo/" + g.internal.trampstamp.img
                }, 408);
            if (!g.internal.custom.inv)
                nav.button({
                    "type": "btn",
                    "name": "custom",
                    "left": g.internal.custom.x,
                    "top": g.internal.custom.y,
                    "width": 150,
                    "height": 150,
                    "image": "408_tattoo/" + g.internal.custom.img
                }, 408);
            nav.button({
                "type": "btn",
                "name": "cancel",
                "left": 1000,
                "top": 200,
                "width": 150,
                "height": 150,
                "image": "19_layInBed/cancel.png"
            }, 408);
            break;
        case "nipple":
            g.pass = "nipple";
            char.room(401);
            break;
        case "black":
            nav.killall();
            nav.bg("212_black/black.jpg");
            break;
        case "blackx":
            nav.bg("408_tattoo/scratch.jpg");
            break;
        case "zoeycheck":
            if (sc.getstep("zoey") > 10)
                chat(21, 408);
            else
                chat(20, 408);
            break;
        case "checkStormy":
            if (q3.isItMe("stormy"))
                chat(27, 408);
            else {
                q3.eventComplete("stormy");
                chat(36, 408);
            }
            break;
        case "moneycheck":
            if (gv.get("money") < 500) {
                sc.setstep("stormy", -1);
                chat(33, 408);
            }
            else {
                gv.mod("money", -500);
                q3.eventComplete("stormy");
                chat(32, 408);
            }
            break;
        case "showtattoo":
            cl.c.tattoo.push("cum");
            nav.killall();
            zcl.displayMain(-200, 300, .27, "nude", true);
            cl.display();
            nav.bg("408_tattoo/inside.jpg");
            g.roomTimeout = setTimeout(function () {
                chat(34, 408);
            }, 1500);
            break;
        case "solveCaseSecondTry":
            q3.eventComplete("stormy");
            if (!g.sissy[30].ach)
                chat(2, 408);
            else
                chat(3, 408);
            break;
        case "s0":
        case "s1":
        case "s2":
            nav.bg("408_tattoo/" + callback  + ".jpg");
            break;
        default:
            break;
    }
};

room408.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "thinking",
            text: "She must be closed down for the night. ",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "thinking",
            text: "It's says by appointments only. Hmmm I wonder how I can get in? ",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "stormy",
            text: "Hey sexy. What can I do for you?",
            button: [
                { chatID: -1, text: "I want a piercing. ", callback: "nipple" },
                { chatID: -1, text: "Nothing. ", callback: "leave" }
            ]
        },
        {
            chatID: 3,
            speaker: "stormy",
            text: "Hey sexy. What can I do for you?",
            button: [
                { chatID: -1, text: "I want a piercing. ", callback: "nipple" },
                { chatID: -1, text: "I want a tattoo. ", callback: "tattoo" },
                { chatID: -1, text: "Nothing. ", callback: "leave" }
            ]
        },
        {
            chatID: 4,
            speaker: "stormy",
            text: "Which kind?",
            button: [
                { chatID: -1, text: "Nipple piercing. ", callback: "nipple" },
                { chatID: -1, text: "Something else ", callback: "reset" }
            ]
        },
        {
            chatID: 5,
            speaker: "stormy",
            text: "I did such great work! I love it. Another?",
            button: [
                { chatID: 3, text: "Yea ", callback: "" },
                { chatID: -1, text: "I'm good", callback: "leave" }
            ]
        },
        {
            chatID: 6,
            speaker: "stormy",
            text: "Hey sexy. What can I do for you?",
            button: [
                { chatID: -1, text: "I want a piercing. ", callback: "nipple" },
                { chatID: 8, text: "Prod her about the C.U.M. cult", callback: "" },
                { chatID: -1, text: "Nothing. ", callback: "leave" }
            ]
        },
        {
            chatID: 7,
            speaker: "stormy",
            text: "Hey sexy. What can I do for you?",
            button: [
                { chatID: -1, text: "I want a piercing. ", callback: "nipple" },
                { chatID: -1, text: "I want a tattoo. ", callback: "tattoo" },
                { chatID: 8, text: "Prod her about the C.U.M. cult", callback: "" }, 
                { chatID: -1, text: "Nothing. ", callback: "leave" }
            ]
        },
        {
            chatID: 8,
            speaker: "thinking",
            text: "I don't know her that well. I need a way to get the converstaion started. ",
            button: [
                { chatID: 9, text: "So, I've heard you attend C.U.M. I was wondering about attending myself. ", callback: "" },
            ]
        },
        {
            chatID: 9,
            speaker: "stormy",
            text: "Oh. Sure. I prefer tattooing while I talk. Care for a free tattoo while I tell you all about them? ",
            button: [
                { chatID: 10, text: "Sure! ", callback: "" },
                { chatID: -1, text: "Squeel and run away! ", callback: "leave" },
            ]
        },
        {
            chatID: 10,
            speaker: "stormy",
            text: "Great just lay down on your belly and relax. I find the time goes quicker if your eyes are closed.  ",
            button: [
                { chatID: 11, text: "Don't I get to pick the tattoo? ", callback: "" },
            ]
        },
        {
            chatID: 11,
            speaker: "stormy",
            text: "Don't worry, I have the perfect tattoo for you. Now do you want to talk about the cult or not? ",
            button: [
                { chatID: 12, text: "...", callback: "" },
            ]
        },
        {
            chatID: 12,
            speaker: "thinking",
            text: "Ah crap. What have I gotten myself into now. I can't back out becuase she might have what I need to " +
                "get " + sc.n("missy") + ". Besides how bad can the tattoo be? ",
            button: [
                { chatID: 13, text: "...", callback: "black" },
            ]
        },
        {
            chatID: 13,
            speaker: "stormy",
            text: "That's a good girl. Now you will feel a little scratch. Just relax and keep still.  ",
            button: [
                { chatID: 14, text: "...", callback: "blackx" },
            ]
        },
        {
            chatID: 14,
            speaker: "stormy",
            text: "Oh hahaha. Sorry about that. Don't worry, it's going good. So you want to know about C.U.M. huh? ",
            button: [
                { chatID: 15, text: "I do.", callback: "s0" },
            ]
        },
        {
            chatID: 15,
            speaker: "stormy",
            text: "I don't get many customers asking about about my faith. It really is a great church, way better than those " +
                "stupid other churches. ",
            button: [
                { chatID: 16, text: "Other churches? ", callback: "s1" },
            ]
        },
        {
            chatID: 16,
            speaker: "stormy",
            text: "When I was 16 I got my first tattoo of the dragon on my leg. I really hurt, ya know, but I loved it " +
                "so much. It was a tribute to my dead dad who was born in the year of the dragon. My mom was christian " +
                "so when she took me to church one of those old bitches tried to tell me I was going to hell if I keep " +
                "marking up my body like that. It was that day that I knew those churches weren't for me. I stopped " +
                "going to church and soon after I met a boy that did tattoos. I hung out in his shop all the time and " +
                "over time I learned how to tattoo myself, all under the table, ya know. I thought we would be together " +
                "forever, but that didn't happen. ",
            button: [
                { chatID: 17, text: "What happened?", callback: "s2" },
            ]
        },
        {
            chatID: 17,
            speaker: "stormy",
            text: "I came into his tattoo shop one night when he said he was hanging with a buddy and I caught him bent over " +
                "in my panties and tights getting railed by 4 dudes and another dude filming it. When he turned and saw " +
                "me he farted a giant blob of cum out of his ass. I guess I should have known it was coming, but I guess I " +
                "was lying to myself. I'll never get that picture out of my head. So anyway we broke up and I moved here to " +
                "get a fresh start and open my own tattoo shop. Things didn't go well at first. I ended up eating out of " +
                "dumpsters for a while until the church found me. ",
            button: [
                { chatID: 18, text: "They found you? ", callback: "s0" },
            ]
        },
        {
            chatID: 18,
            speaker: "stormy",
            text: "Yeah. I was bent over this dumpster when I felt a hand slide up my pussy from behind. I turned around " +
                "and slapped that dude so hard he fell to his butt. Well he offered me some money if I let him jack off " +
                "on my feet. What can I say, a girl's gott eat. So " + sc.n("charlie") + "...",
            button: [
                { chatID: 19, text: "..." + sc.n("charlie") + "! From Toy 'n Us? ", callback: "zoeycheck" },
            ]
        },
        {
            chatID: 19,
            speaker: "stormy",
            text: "That's my " + sc.n("charlie") + ". He's a perv, but one of the good ones. He offers to take me to " +
                "C.U.M. At first I didn't want to go, but he convinced me to just attend one sermon and if I didn't like " +
                "it he would pay me for coming. So I ended up going and met so many great people! Ubel really is a visionary. " +
                "I guess you could say I found my place. Azrael will bring about equality for us all. ",
            button: [
                { chatID: -1, text: "Yes Azrael will bring equality for all. ", callback: "zoeycheck" },
            ]
        },
        {
            chatID: 20,
            speaker: "stormy",
            text: "I'm so glad you agree. We all must do our part. I've risen to a Milk Maid. It's some work jacking " +
                "off all those guys, but they help me with my bills. Way better than some stupid job. I've met all kinds " +
                "of new clients with their dicks in my hand. It's kinda funny. ",
            button: [
                { chatID: 24, text: "Meeting a client with their dick in your hand is the best way. ", callback: "s1" },
            ]
        },
        {
            chatID: 21,
            speaker: "stormy",
            text: "I'm so glad you agree. We all must do our part. I've risen to a Milk Maid. It's some work jacking " +
                "off all those guys, but they help me with my bills. Way better than some stupid job. I've met all kinds " +
                "of new clients with their dicks in my hand. It's kinda funny. ",
            button: [
                { chatID: 22, text: "So what does " + sc.n("zoey") + " think of all this? ", callback: "s2" },
            ]
        },
        {
            chatID: 22,
            speaker: "stormy",
            text: "Oh, we're not dating, dating. Just having fun. I've talked to her about the church, but she " +
                "doesn't seem interested. Her pussy is so yummy that I don't mind. She really is a great girl, but " +
                "we're just having fun, ya know. I'm pretty sure she loves someone else. ",
            button: [
                { chatID: 23, text: "Someone else. Who? ", callback: "s0" },
            ]
        },
        {
            chatID: 23,
            speaker: "stormy",
            text: "If you have to ask you'll never know, you big dummy! ",
            button: [
                { chatID: 24, text: "oh. uh. So anyway.. ", callback: "s1" },
            ]
        },
        {
            chatID: 24,
            speaker: "stormy",
            text: "Yeah. The church is something that I really identify with. You seem to know a bit. Have you thought of joining?",
            button: [
                { chatID: 25, text: "I have, but I'm scared. I would want to check it out first. ", callback: "s2" },
            ]
        },
        {
            chatID: 25,
            speaker: "stormy",
            text: "I would love to take you! There's a big sermon every Friday, you'll love it! I have some friends that go like " +
                sc.n("charlie") + " and " + sc.n("daddy") + " that go with me. We'll even give you a ride. ", 
            button: [
                { chatID: 26, text: "...", callback: "s0" },
            ]
        },
        {
            chatID: 26,
            speaker: "me",
            text: "That sounds great, but is there anyway I could just go up there myself and look around? I get scared around " +
                "large groups. But I've read a lot on the church and it really feels like the right place for me. ",
            button: [
                { chatID: -1, text: "...", callback: "checkStormy" },
            ]
        },
        {
            chatID: 27,
            speaker: "stormy",
            text: "Hmmmm. Maybe. If I tell you, promise you won't tell anyone?",
            button: [
                { chatID:28, text: "Yes. I promise! ", callback: "s1" },
            ]
        },
        {
            chatID: 28,
            speaker: "stormy",
            text: "So I don't know how to get there 'cuase " + sc.n("daddy") + " always drives me, but I do know the code to " +
                "get into the compound. " + sc.n("daddy") + " makes me hop out and open the door since I ride shotgun. It " +
                "would be fun to see you there.. I really shouldn't.",
            button: [
                { chatID: 29, text: "...", callback: "s2" },
            ]
        },
        {
            chatID: 29,
            speaker: "thinking",
            text: "I've almost got her! I should make up a sob story about how much this would mean to me. I don't like " +
                "lying to her, but I have to save " + sc.n("missy") + ". ",
            button: [
                { chatID: 30, text: "...", callback: "s0" },
            ]
        },
        {
            chatID: 30,
            speaker: "me",
            text: sc.n("stormy") + " I've been lost for a long time, and I think I can find myself with C.U.M. " +
                "I'm just so scared to go with everyone around. I just want to take a look and know that it's safe for me " +
                "without any pressure. I know I'll find what I've been searching for once I can get a peek. ",
            button: [
                { chatID: 31, text: "...", callback: "s1" },
            ]
        },
        {
            chatID: 31,
            speaker: "stormy",
            text: "Awwww you got me. Fine. But I want $500 for telling you when I really shouldn't. I've got bills to pay " +
                "ya know. I do really need the money. ",
            button: [
                { chatID: -1, text: "[Pay her $500]", callback: "moneycheck" },
            ]
        },
        {
            chatID: 32,
            speaker: "stormy",
            text: "You're the sweetest! The code to get in the door is 1-2-3-4-5. I just finished the tattoo, want to see " +
                "it. I know you'll love it! ",
            button: [
                { chatID: -1, text: "Sweet!", callback: "showtattoo" },
            ]
        },
        {
            chatID: 33,
            speaker: "stormy",
            text: "I'll tell you what. When you have $500 just bring it by and I'll let you know the code. I just finished " +
                "your tattoo. You're going to love it! ",
            button: [
                { chatID: -1, text: "Totally. I'll bring the money by. ", callback: "showtattoo" },
            ]
        },
        {
            chatID: 34,
            speaker: "stormy",
            text: "Don't you love it! I know you'll love C.U.M. once you check it out. C.U.M. for life baby!  ",
            button: [
                { chatID: 35, text: "Oh. cool. I have a I ❤️ C.U.M. tattoo", callback: "" },
            ]
        },
        {
            chatID: 35,
            speaker: "stormy",
            text: "I knew you would love it! Now go show that off you sexy slut! I'll see you at the church! ",
            button: [
                { chatID: -1, text: "Ok. See you later.", callback: "leave" },
            ]
        },
        {
            chatID: 36,
            speaker: "stormy",
            text: "I know meeting a big group is scary, but they're all very nice and you'll fit right in. I can tell. " +
                "besides I don't even know how to get in. " + sc.n("daddy") + " or " + sc.n("charlie") + " take me there " +
                "since I don't have a ride, and I don't know how to get in without them. ",
            button: [
                { chatID: 37, text: "Oh. Ok. Well the church does sound amazing", callback: "" },
            ]
        },
        {
            chatID: 37,
            speaker: "stormy",
            text: "It is. It will change your life. Well, I just finished your tattoo. Want to see? I know you'll love it! ",
            button: [
                { chatID: -1, text: "I'm so excited! ", callback: "showtattoo" },
            ]
        },
        {
            chatID: 38,
            speaker: "stormy",
            text: "So I was thinking, it's not fair that I charge you any money to check out the compound. I know what it's " +
                "like to be broke. The code for the door is 1-2-3-4-5. I've been there and I know money is hard to come by. " +
                "It would be great seeing you there. ",
            button: [
                { chatID: -1, text: "Thank you so much! It will be great seeing you there too! ", callback: "solveCaseSecondTry" },
            ]
        },
        {
            chatID: 39,
            speaker: "stormy",
            text: "You didn't enter anything. ",
            button: [
                { chatID: -1, text: "Let me try again. ", callback: "" },
                { chatID: -1, text: "I changed my mind. ", callback: "leave" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};