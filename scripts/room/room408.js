//Tattoo name
var room408 = {};
room408.main = function () {
    nav.button({
        "type": "btn",
        "name": "door",
        "left": 794,
        "top": 142,
        "width": 199,
        "height": 307,
        "image": "408_tattoo/door.png",
        "night": "408_tattoo/door_night.png"
    }, 408);
    nav.buildnav([0]);
};

room408.btnclick = function (name) {
    switch (name) {
        case "door":
            nav.kill();
            nav.bg("408_tattoo/inside.jpg", "408_tattoo/inside_night.jpg");
            nav.button({
                "type": "btn",
                "name": "stormy",
                "left": 1042,
                "top": 101,
                "width": 475,
                "height": 979,
                "image": "408_tattoo/stormy.png",
            }, 408);
            break;
        case "stormy":
            if (sc.taskGetStep("stormy", "property") === 1) {
                chat(43, 408);
            }
            else if (!qdress.st[4].ach && !qdress.st[6].ach) {
                chat(40, 408);
            }
            else {
                sc.selectBg("selectbg");
                sc.select("pStart", "408_tattoo/icon_p.png", 0);
                if (qdress.st[6].ach)
                    sc.select("tattooStart", "408_tattoo/icon_tattoo.png", 1);
                else
                    sc.select("tattooStartNo", "408_tattoo/icon_tattoo_no.png", 1);
                sc.selectCancel("selectCancel", 2)
            }
            break;
        case "selectCancel":
            nav.killbutton("selectbg");
            nav.killbutton("tattooStart");
            nav.killbutton("pStart");
            nav.killbutton("tattooStartNo");
            nav.killbutton("selectCancel");
            return;
        case "tattooStart":
            nav.killbutton("tattooStart");
            nav.killbutton("pStart");
            nav.killbutton("tattooStartNo");
            nav.killbutton("selectCancel");
            nav.killbutton("stormy");
            zcl.displayMain(50, 1200, .14, "nude", false);

            if (cl.c.tattoo.find(x => x.startsWith("womb_")) !== undefined)
                sc.select("has_tattoo", "408_tattoo/icon_tattoo_womb_no.png", 0);
            else
                sc.select("tattoo_womb", "408_tattoo/icon_tattoo_womb.png", 0);

            if (cl.c.tattoo.find(x => x.startsWith("back_")) !== undefined)
                sc.select("has_tattoo", "408_tattoo/icon_tattoo_back_no.png", 1);
            else
                sc.select("tattoo_back", "408_tattoo/icon_tattoo_back.png", 1);

            if (cl.c.tattoo.find(x => x.startsWith("ut_")) !== undefined)
                sc.select("has_tattoo", "408_tattoo/icon_tattoo_upperthigh_no.png", 2);
            else
                sc.select("tattoo_ut", "408_tattoo/icon_tattoo_upperthigh.png", 2);

            if (cl.c.tattoo.find(x => x.startsWith("tramp_")) !== undefined)
                sc.select("has_tattoo", "408_tattoo/icon_tattoo_trampstamp_no.png", 3);
            else
                sc.select("tattoo_tramp", "408_tattoo/icon_tattoo_trampstamp.png", 3);

            //if (cl.c.tattoo.find(x => x.startsWith("thigh_")) !== undefined)
            //    sc.select("has_tattoo", "408_tattoo/icon_tattoo_thigh_no.png", 4);
            //else
            //    sc.select("tattoo_thigh", "408_tattoo/icon_tattoo_thigh.png", 4);

            if (cl.c.tattoo.find(x => x.startsWith("butt_")) !== undefined)
                sc.select("has_tattoo", "408_tattoo/icon_tattoo_butt_no.png", 5);
            else
                sc.select("tattoo_butt", "408_tattoo/icon_tattoo_butt.png", 5);

            sc.selectCancel("tattoo_cancel1", 6);
            break;
        case "tattoo_cancel1":
            nav.kill();
            nav.button({
                "type": "btn",
                "name": "stormy",
                "left": 1042,
                "top": 101,
                "width": 475,
                "height": 979,
                "image": "408_tattoo/stormy.png",
            }, 408);
            room408.btnclick("stormy");
            break;
        case "tattoo_cancel":
            nav.kill();
            room408.btnclick("tattooStart");
            break;
        case "tattoo_kill":
            nav.killbutton("has_tattoo");
            nav.killbutton("tattoo_womb");
            nav.killbutton("tattoo_back");
            nav.killbutton("tattoo_ut");
            nav.killbutton("tattoo_butt");
            nav.killbutton("tattoo_tramp");
            nav.killbutton("tattoo_thigh");
            nav.killbutton("tattoo_cancel");
            return;
        case "tattoo_womb":
            room408.btnclick("tattoo_kill");
            zcl.displayMain(50, 1200, .14, "nude", false);
            sc.select("womb_trans", "408_tattoo/icon_womb_trans.png", 0);
            sc.select("womb_qos", "408_tattoo/icon_womb_qos.png", 2);
            sc.select("womb_breed2", "408_tattoo/icon_womb_breed2.png", 4);
            sc.select("womb_bat", "408_tattoo/icon_womb_bat.png", 6);
            sc.select("womb_breed1", "408_tattoo/icon_womb_breed1.png", 8);
            sc.selectCancel("tattoo_cancel", 10);
            break;
        case "tattoo_ut":
            room408.btnclick("tattoo_kill");
            zcl.displayMain(50, 1200, .14, "nude", false);
            sc.select("ut_rose", "408_tattoo/icon_ut_rose.png", 0);
            sc.select("ut_kiss", "408_tattoo/icon_ut_kiss.png", 2);
            sc.select("ut_qos", "408_tattoo/icon_ut_qos.png", 4);
            sc.select("ut_chastity", "408_tattoo/icon_ut_chastity.png", 6);
            sc.selectCancel("tattoo_cancel", 8);
            break;
        case "tattoo_butt":
            room408.btnclick("tattoo_kill");
            zcl.displayMain(50, 1200, .14, "nude", true);
            sc.select("butt_paws", "408_tattoo/icon_butt_paws.png", 0);
            sc.select("butt_sperm", "408_tattoo/icon_butt_sperm.png", 2);
            sc.select("butt_qos", "408_tattoo/icon_butt_qos.png", 4);
            sc.select("butt_sissy", "408_tattoo/icon_butt_sissy.png", 6);
            sc.selectCancel("tattoo_cancel", 8);
            break;
        case "tattoo_tramp":
            room408.btnclick("tattoo_kill");
            zcl.displayMain(50, 1200, .14, "nude", true);
            sc.select("tramp_butterfly", "408_tattoo/icon_tramp_butterfly.png", 0);
            sc.select("tramp_design", "408_tattoo/icon_tramp_design.png", 2);
            sc.select("tramp_bat", "408_tattoo/icon_tramp_bat.png", 4);
            sc.select("tramp_handlebars", "408_tattoo/icon_tramp_handlebars.png", 6);
            sc.select("tramp_jimmy", "408_tattoo/icon_tramp_jummy.png", 8);
            sc.select("tramp_guns", "408_tattoo/icon_tramp_guns.png", 10);
            sc.selectCancel("tattoo_cancel", 12);
            break;
        case "tattoo_back":
            room408.btnclick("tattoo_kill");
            zcl.displayMain(50, 1200, .14, "nude", true);
            sc.select("back_butterfly", "408_tattoo/icon_back_butterfly.png", 0);
            sc.select("back_rose", "408_tattoo/icon_back_rose.png", 2);
            sc.select("back_fairy", "408_tattoo/icon_back_fairy.png", 4);
            sc.select("back_wings", "408_tattoo/icon_back_wings.png", 6);
            sc.selectCancel("tattoo_cancel", 8);
            break;
        case "ut_rose":
        case "ut_kiss":
        case "ut_qos":
        case "ut_chastity":
        case "womb_trans":
        case "womb_qos":
        case "womb_breed2":
        case "womb_bat":
        case "womb_breed1":
            g.internal = {
                t: name,
                b: false,
                s: 1
            };
            room408.btnclick("getit1");
            break;
        case "tramp_butterfly":
        case "tramp_design":
        case "tramp_bat":
        case "tramp_handlebars":
        case "tramp_jimmy":
        case "tramp_guns":
        case "back_butterfly":
        case "back_rose":
        case "back_fairy":
        case "back_wings":
        case "butt_paws":
        case "butt_sperm":
        case "butt_qos":
        case "butt_sissy":
            g.internal = {
                t: name,
                b: true,
                s: 1
            };
            room408.btnclick("getit1");
            break;
        case "getit1":
            nav.kill();
            cl.c.tattoo.push(g.internal.t);
            zcl.displayMain(50, 1200, .14, "nude", g.internal.b);
            for (let i = 0; i < cl.c.tattoo.length; i++) {
                if (cl.c.tattoo[i] === g.internal.t) {
                    cl.c.tattoo.splice(i, 1);
                }
            }
            sc.select("getit2", "408_tattoo/icon_getit.png", 0);
            sc.selectCancel("tattoo_cancel_back", 2);
            break;
        case "getit2":
            cl.c.tattoo.push(g.internal.t);
            nav.killall();
            nav.next("scratch");
            nav.bg("408_tattoo/s0.jpg");
            break;
        case "scratch":
            if (g.internal.s < 4) {
                nav.bg("408_tattoo/s" + g.internal.s + ".jpg");
            }
            else {
                cl.display();
                nav.killbutton("scratch");
                nav.bg("408_tattoo/inside.jpg", "408_tattoo/inside_night.jpg");
                nav.button({
                    "type": "btn",
                    "name": "stormy",
                    "left": 1042,
                    "top": 101,
                    "width": 475,
                    "height": 979,
                    "image": "408_tattoo/stormy.png",
                }, 408);

                zcl.displayMain(-50, 500, .2, "nude", g.internal.b);
                chat(42, 408);
            }
            g.internal.s++;
            break;
        case "tattoo_cancel_back":
            nav.kill();
            if (g.internal.t.startsWith("womb_"))
                 room408.btnclick("tattoo_womb");
            else if (g.internal.t.startsWith("ut_"))
                room408.btnclick("tattoo_ut");
            else if (g.internal.t.startsWith("back_"))
                room408.btnclick("tattoo_back");
            else if (g.internal.t.startsWith("tramp_"))
                room408.btnclick("tattoo_tramp");
            else if (g.internal.t.startsWith("butt_"))
                room408.btnclick("tattoo_butt");

            g.internal = null;
            break;
        case "tattooStartNo":
            room408.btnclick("selectCancel");
            chat(41, 408);
            break;
        case "pStart":
            g.pass = "nipple";
            char.room(401);
            break;
        case "cancel":
            char.room(408);
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
            room408.btnclick("door");
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
        case "killchar":
            zcl.kill();
            nav.buildnav([0]);
            break;
        case "notawhore":
            sc.completeMissionTask("stormy", "property", 1);
            sc.completeMissionTask("stormy", "property", 2, false);
            break;
        case "imawhore":
            sc.completeMissionTask("stormy", "property", 1, false);
            sc.completeMissionTask("stormy", "property", 2);
            g.internal = {
                t: "chest_sub",
                b: false,
                s: 1
            };
            room408.btnclick("getit2");
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
            text: "Ah crap. What have I gotten myself into now. I can't back out because she might have what I need to " +
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
        {
            chatID: 40,
            speaker: "stormy",
            text: "What 'cha want?",
            button: [
                { chatID: -1, text: "Oh nothing. [Need to unlock piercings and tattoo in the sissy menu]", callback: "" }
            ]
        },
        {
            chatID: 41,
            speaker: "thinking",
            text: "I'm not comfortable enough to get a tattoo yet. ",
            button: [
                { chatID: -1, text: "[Need to unlock tattoos in the sissy menu]", callback: "" }
            ]
        },
        {
            chatID: 42,
            speaker: "stormy",
            text: "So hot my pussy is sweating! ",
            button: [
                { chatID: -1, text: "Thanks!", callback: "killchar" }
            ]
        },
        {
            chatID: 43,
            speaker: "stormy",
            text: "Well, well, well. If it isn't my little pee pee whore. ",
            button: [
                { chatID: 44, text: "Hey! You pissed on me. I didn't ask for it! ", callback: "" }
            ]
        },
        {
            chatID: 44,
            speaker: "stormy",
            text: "You might not have asked for it, but you did want it. I'll tell you " +
                "what pee pee girl; I know you're such a submissive slut you'll let anyone " +
                "do whatever they want to your body. Let me give you a free tattoo, but submissive " +
                "little bitches like you don't get to pick. ",
            button: [
                { chatID: 46, text: "Promise it won't be too bad?", callback: "" },
                { chatID: 45, text: "No way! I won't let you mark me! ", callback: "" },
            ]
        },
        {
            chatID: 45,
            speaker: "stormy",
            text: "Ok. I guess I was wrong about you. ",
            button: [
                { chatID: -1, text: "*hrumph* ", callback: "notawhore" },
            ]
        },
        {
            chatID: 46,
            speaker: "stormy",
            text: "Hahaha no! Now lay back and let me mark you! ",
            button: [
                { chatID: -1, text: "ok", callback: "imawhore" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};