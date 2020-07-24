//Room name
var room501 = {};
room501.main = function () {
    var btnList = new Array();
    var navList = [0];
    var zoeyStep = sc.getstep("zoey");
    if (zoeyStep === 2) {
        nav.button({
            "type": "img",
            "name": "ddduo",
            "left": 820,
            "top": 54,
            "width": 658,
            "height": 1026,
            "image": "501_jadaGame/duo.png"
        }, 501);
        chat(53, 501);
    }
    else if (zoeyStep === 11) {
        btnList.push({
            "type": "btn",
            "name": "door",
            "left": 580,
            "top": 29,
            "width": 354,
            "height": 721,
            "title": "Peek",
            "image": "501_jadaGame/door.png"
        });
        
        btnList.push({
            "type": "btn",
            "name": "chair11",
            "left": 973,
            "top": 449,
            "width": 780,
            "height": 485,
            "title": sc.n("chloe") + "'s purse",
            "image": "501_jadaGame/chair.png"
        });
        btnList.push({
            "type": "btn",
            "name": "purse11",
            "left": 1476,
            "top": 608,
            "width": 151,
            "height": 100,
            "title": "Sleep",
            "image": "501_jadaGame/purse.png"
        });
        $.each(btnList, function (i, v) {
            nav.button(v, 501);
        });
        if (sc.checkevent("zoey", -3))
            chat(64, 501);
        else
            chat(65, 501);
    }
    else if (zoeyStep > 22) {
        nav.button({
            "type": "btn",
            "name": "zoey",
            "left": 1035,
            "top": 288,
            "width": 549,
            "height": 524,
            "image": "501_jadaGame/zoeySit.png"
        }, 501);
        nav.buildnav([0]);
    }
    else {
        if (sc.checkevent("zoey", -1)) {
            navList.push(502);
            navList.push(503);
            btnList.push({
                "type": "btn",
                "name": "door",
                "left": 580,
                "top": 29,
                "width": 354,
                "height": 721,
                "title": "Bedroom",
                "image": "501_jadaGame/door.png"
            });
        }
        if (sc.zoey().thisRoom) {
            btnList.push({
                "type": "btn",
                "name": "zoey",
                "left": 1035,
                "top": 288,
                "width": 549,
                "height": 524,
                "image": "501_jadaGame/zoeySit.png"
            });
        }
        $.each(btnList, function (i, v) {
            nav.button(v, 501);
        });
        nav.buildnav(navList);
    }
};

room501.btnclick = function (name) {
    switch (name) {
        case "zoey":
            if (!g.checkflag("zoeyDay")) {
                
                var zoeyy = sc.getstep("zoey");
                if (zoeyy === 0) {
                    nav.killall();
                    chat(0, 501);
                    room501.chatcatch("zForward");
                }
                else if (zoeyy === 1) {
                    nav.killall();
                    chat(6, 501);
                    room501.chatcatch("zLook");
                }
                else if (zoeyy === 2) {
                    nav.killall();
                    chat(16, 501);
                }
                else if (zoeyy === 3) {
                    nav.killall();
                    chat(17, 501);
                    room501.chatcatch("zLook");
                }
                else if (zoeyy === 4) {
                    nav.killall();
                    chat(40, 501);
                    room501.chatcatch("zLook");
                }
                else {
                    chat(63, 501);
                    room501.chatcatch("zLook");
                }
                g.setflag("zoeyDay");
            }
            else {
                if (sc.checkevent("zoey", -1))
                    chat(63, 501);
                else
                    chat(16, 501);
            }
            break;
        case "door":
            if (sc.getstep("zoey") === 11)
                g.pass = "zoeyLickPussy";
            char.room(502);
            break;
        case "chair11":
            chat(66, 501);
            break;
        case "purse11":
            if (sc.checkevent("zoey", -3)) {
                nav.killall();
                nav.bg("501_jadaGame/purse.jpg");
                var p11 = [{
                    "type": "btn",
                    "name": "notbook11",
                    "left": 340,
                    "top": 562,
                    "width": 769,
                    "height": 207,
                    "image": "501_jadaGame/notebook.png"
                },
                {
                    "type": "btn",
                    "name": "phone11",
                    "left": 714,
                    "top": 199,
                    "width": 414,
                    "height": 193,
                    "image": "501_jadaGame/cPhone.png"
                },
                {
                    "type": "btn",
                    "name": "pocketbook11",
                    "left": 1014,
                    "top": 434,
                    "width": 906,
                    "height": 372,
                    "image": "501_jadaGame/pocketbook.png"
                },
                {
                    "type": "btn",
                    "name": "cancelPeek",
                    "left": 1432,
                    "top": 93,
                    "width": 298,
                    "height": 298,
                    "title": "Cancel",
                    "image": "501_jadaGame/cancel.png"
                }];
                $.each(p11, function (i, v) {
                    nav.button(v, 501);
                });
            }
            else
                chat(74, 501);
            break;
        case "pocketbook11":
            chat(67, 501);
            break;
        case "phone11":
            nav.button({
                "type": "btn",
                "name": "phone11Kill",
                "left": 716,
                "top": 59,
                "width": 573,
                "height": 963,
                "image": "501_jadaGame/cPhone_big.png"
            }, 501);
            chat(68, 501);
            break;
        case "notbook11":
            nav.button({
                "type": "img",
                "name": "notebookKill",
                "left": 335,
                "top": 54,
                "width": 1368,
                "height": 917,
                "image": "501_jadaGame/notebookKill.png"
            }, 501);
            $('#room-buttons').append('<div class="zoey11KillMe" style="position:absolute; ' + g.makeCss(800, 500, 150, 450) + g.cssText("m") + ' z-index:100000; text-align:left; width">' +
                'Dear Diary, <br/>' +
                sc.n('zoey') + ' was getting ready to go out to a club tonight and she wanted to borrow one of my ' +
                'sexy dresses before out. I found a hot little red dress that I love and handed it over to her to try on. ' +
                'Without thinking she took off her dress freeing her big soft breasts and tiny thong right in front of me. ' +
                'I couldn\'t help but lick my lips since she looked sooo yummy! When she saw the look on my face she immediately ' +
                'turned a bright shade of pink and covered up her breasts in embarrassment. I told her it\'s ok, where just two friends ' +
                'trying on clothes and she didn\'t need to cover up. She looked at me and said she didn\'t  ' + //);
                //
                'want to be friends and moved her ' +
                ' hands to her hips pointing her pink nipples right at me and asked if I liked what ' +
                'I see. I don\'t know what came over me, I just went to her and burried my face into her boobs and started ' +
                'licking her nipples. She let out a little gasp as I circled my tongue around her hard nipples. She reached for ' +
                'my top and peeled it off me then ran her fingernails from ' +
                '</div>');
            $('#room-buttons').append('<div class="zoey11KillMe" style="position:absolute; ' + g.makeCss(800, 500, 150, 1110) + g.cssText("m") + ' z-index:100000; text-align:left; width">' +
                ' my panty line to my own nipples. She ' +
                'grabbed my boobies and told me that she liked how firm and perky my boobs were. ' + sc.n('zoey') +
                ' then ran her hands down my shorts and smiled when she discovered that I don\'t wear underwear. ' +
                '"Easy access" she breathed into my ear before kissing my on my lips.I\'ve never been molested with ' +
                'such voracity by a girl before, it was so hot when she peeled down my short revealing my bare pussy. ' +
                'She then pulled down her own panties and rubbed her clit and stuck her fingers inside her lubricating her own ' +
                'fingers before moving to my clit and playfully rubbing it. I couldn\'t take it anymore, I had to sit on her ' +
                'face!! I pushed her head down to my horny little clit and she just burried her face into my wet pussy! ' +
                'It felt soooo good, I had to taste her pussy. I kneeled down to give her a kiss and I could taste myself ' +
                'on her lips, I taste sooo good.I then pulled her down on her back and moved into a 69 with me on top. ' +
                'I\'ve slept with plenty of boys, but I\'ve never cum harder than with ' + sc.n('zoey') + '\'s face ' +
                'burried into my pussy as' +
                '</div>');
            
            chat(69, 501);
            break;
        case "cancelPeek":
            nav.room(501);
            break;
        default:
            break;
    }
};

room501.chatcatch = function (callback) {
    switch (callback) {
        case "zForward":
            nav.killbutton("zoey");
            nav.button({
                "type": "img",
                "name": "zoey",
                "left": 963,
                "top": 271,
                "width": 785,
                "height": 626,
                "title": "Wardrobe",
                "image": "501_jadaGame/zoeyForward.jpg"
            }, 501);
            break;
        case "zLook":
            nav.killbutton("zoey");
            nav.button({
                "type": "img",
                "name": "zoey",
                "left": 963,
                "top": 271,
                "width": 785,
                "height": 626,
                "image": "501_jadaGame/zoeyLookAtViewer.jpg"
            }, 501);
            break;
        case "zSuprise":
            nav.killbutton("zoey");
            nav.button({
                "type": "img",
                "name": "zoey",
                "left": 963,
                "top": 271,
                "width": 785,
                "height": 626,
                "image": "501_jadaGame/zoeySuprise.jpg"
            }, 501);
            break;
        case "zShock":
            nav.killbutton("zoey");
            nav.button({
                "type": "img",
                "name": "zoey",
                "left": 963,
                "top": 271,
                "width": 785,
                "height": 626,
                "image": "501_jadaGame/zoeyBigSuprise.jpg"
            }, 501);
            break;
        case "zCumface":
            nav.killbutton("zoey");
            nav.button({
                "type": "img",
                "name": "zoey",
                "left": 963,
                "top": 271,
                "width": 785,
                "height": 626,
                "image": "501_jadaGame/zoeyCumFace.jpg"
            }, 501);
            break;
        case "vaginaDoorway":
            nav.killbutton("zoey");
            nav.button({
                "type": "img",
                "name": "zoey",
                "left": 963,
                "top": 271,
                "width": 785,
                "height": 626,
                "image": "501_jadaGame/zoeyBigSuprise.jpg"
            }, 501);
            nav.button({
                "type": "img",
                "name": "vagina",
                "left": 562,
                "top": 0,
                "width": 394,
                "height": 768,
                "image": "501_jadaGame/vagina.jpg"
            }, 501);
            break;
        case "vaginaHide":
            nav.killbutton("vagina");
            room501.chatcatch("zForward");
            break;
        case "munchTheTwat":
            nav.killbutton("vagina");
            nav.killbutton("zoey");
            nav.bg("501_jadaGame/zoeyMunch1.jpg");
            break;
        case "munchTheTwat1":
            nav.bg("501_jadaGame/zoeyMunch2.jpg");
            break;
        case "munchTheTwat2":
            cl.horny(50);
            nav.bg("501_jadaGame/zoeyMunch3.jpg");
            break;
        case "munchTheTwat3":
            nav.bg("501_jadaGame/zoeyMunch4.jpg");
            break;
        case "munchTheTwat4":
            nav.bg("501_jadaGame/501_game.jpg");
            nav.button({
                "type": "img",
                "name": "zoey",
                "left": 963,
                "top": 271,
                "width": 785,
                "height": 626,
                "image": "501_jadaGame/zoeyCumFace.jpg"
            }, 501);
            break;
        case "leave":
            if (sc.checkevent("zoey", -1))
                char.room(501);
            else
                char.room(500);
            break;
        case "leave0":
            sc.setstep("zoey", 1);
            g.setflag("zoeyDay");
            if (g.hourBetween(0, 16)) 
                char.addtime(180);
            else 
                char.addtime(120);
            char.room(500);
            break;
        case "leave1":
            sc.setstep("zoey", 2);
            g.setflag("zoeyDay");
            if (g.hourBetween(0, 16)) 
                char.addtime(180);
            else 
                char.addtime(120);
            char.room(500);
            break;
        case "leave3":
            sc.setstep("zoey", 4);
            g.setflag("zoeyDay");
            if (g.hourBetween(0, 16))
                char.addtime(180);
            else
                char.addtime(120);
            char.room(500);
            break;
        case "cheat":
            sc.setstep("zoey", -3);
            sc.setstep("zoey", 5);
            room501.chatcatch("zLook");
            g.setflag("zoeyDay");
            break;
        case "noCheat":
            sc.setstep("zoey", -2);
            sc.setstep("zoey", 5);
            room501.chatcatch("zLook");
            g.setflag("zoeyDay");
            break;
        case "chloeLeave":
            g.setflag("zoeyDay");
            sc.setstep("zoey", 3);
            if (sc.checkevent("zoey", 7)) {
                nav.killbutton("ddduo");
            }
            else 
                char.room(0);
            break;
        case "lookForward":
            nav.killbutton("zoey");
            nav.button({
                "type": "img",
                "name": "zoey",
                "left": 963,
                "top": 271,
                "width": 785,
                "height": 626,
                "image": "501_jadaGame/zoeySuprise.jpg"
            }, 501);
            break;
        case "killPhone11":
            nav.killbutton("phone11Kill");
            break;
        case "notbook11-1":
            $('.zoey11KillMe').remove();
            $('#room-buttons').append('<div class="zoey11KillMe" style="position:absolute; ' + g.makeCss(800, 500, 150, 450) + g.cssText("m") + ' z-index:100000; text-align:left; width">' +
                'I ate her out. We made out for an hour after that both of our faces wet with ' +
                'each other\'s cum! I had to have her more!<br/><br/><br/>' +
                'Saw ' + sc.n('zoey') + ' again... I sat on her face for an hour. I think I had 5 differnt orgasms that night.' +
                'I\'ve never met someone who loves pussy like her!' +
                '<br/><br/><br/>' +
                'Went out with ' + sc.n('zoey') + ' to the Hard Cock Café. We had so many men drooling over us! ' +
                'One guy kept staring at us all night so while ' + sc.n('zoey') + ' was sitting on her bar stool ' +
                'I pulled up her dress and licked her asshole right in front of him! His cock was so hard I could see ' +
                'the outline almost down to his knees! He even had a wet spot where he was leaking cum while watching us! ' +
                '</div>');
            $('#room-buttons').append('<div class="zoey11KillMe" style="position:absolute; ' + g.makeCss(800, 500, 150, 1110) + g.cssText("m") + ' z-index:100000; text-align:left; width">' +
                'Took 5 deliveries of cum to ' + sc.n('priapus') + ' today. He only game me $50 this time! I don\'t ' +
                'think he knows how hard it is to collect so much cum in a single day and refrigerate it so it stays fresh! ' +
                'What a cheap fucker!' +
                '<br/><br/><br/>' +
                sc.n('zoey') + ' asked me to pee on her pussy today. I\'ve never peed on anyone before, but it sounded hot so ' +
                'we went into her tub and I peed all over her, I even got some on her face by accident! We showered off ' +
                'and she rewarded me. It was weird, but I kinda liked it, I may do it again.' +
                '<br/><br/><br/>' +
                sc.n('priapus') + ' demanded more cum! What a selfish asshole. I had to jerk off 7 men to get enought cum ' +
                'for him! My wrist was sooo sore when I was done I made ' + sc.n('priapus') + ' pay me $150 for all that cum!' +
                '</div>');
            break;
        case "notbook11-2":
            $('.zoey11KillMe').remove();
            $('#room-buttons').append('<div class="zoey11KillMe" style="position:absolute; ' + g.makeCss(800, 500, 150, 450) + g.cssText("m") + ' z-index:100000; text-align:left; width">' +
                'Just got the sexiest fuzzy green boots! They really make my ass pop out and ' + sc.n('zoey') + ' absolutly loved them' +
                '<br/><br/><br/>' +
                sc.n('priapus') + ' offered me $500 to sit in the middle of his free love cult and have the guys bust their nuts in my ' +
                'mouth. He promised it was only going to take an hour, but after the 30th cult follower finished in my mouth I had been sitting ' +
                'there for almost 2 HOURS!! My jaw is still sore! This one guy who\'s dick was only 2 inches long had to stroke it ' +
                'for like 20 minutes before he finally came! ' +
                '<br/><br/><br/>' +
                sc.n('zoey') + ' totally ate me out in front of ' + sc.n("me") + '. I love it when a guy watches, but can\'t touch ' +
                '</div>');
            $('#room-buttons').append('<div class="zoey11KillMe" style="position:absolute; ' + g.makeCss(800, 500, 150, 1110) + g.cssText("m") + ' z-index:100000; text-align:left; width">' +
                sc.n('priapus') + ' offered me $1000 to come by the ranch in the woods every Thursday and "be a more active participant" ' +
                'I don\'t know what that means, but I\'m a little scared. I can definitely use the money' +
                '</div>');
            break;
        case "killNotebook11":
            $('.zoey11KillMe').remove();
            nav.killbutton("notebookKill");
            break;
        case "tellZoey":
            g.pass = "tellZoey";
            char.room(502);
            break;
        case "takeANap":
            char.settime(7, 12);
            chat(73, 501);
            break;
        case "zoey11To12":
            sc.setstep("zoey", 12);
            g.pass = "";
            char.room(502);
            break;
        default:
            break;
    }
};

room501.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "zoey",
            text: "I'm a can opener and I just open a can of beat ass on your video game!",
            button: [
                { chatID: 1, text: "If you played as good as smack talk I would win more often.", callback: "zLook" }
            ]
        },
        {
            chatID: 1,
            speaker: "zoey",
            text: "Well if your penis was as large as your ego you wouldn't still be a virgin. ",
            button: [
                { chatID: 2, text: "OUCH!! right in the dick!", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "zoey",
            text: "Hahah, you know I'm just joking! ",
            button: [
                { chatID: 3, text: "So how's your girlfriend Chloe doing?", callback: "zSuprise" }
            ]
        },
        {
            chatID: 3,
            speaker: "zoey",
            text: "Oh my God! She has a tongue that just won't stop, and the softest hands... ",
            button: [
                { chatID: 4, text: ".. and huge boobies", callback: "zForward" }
            ]
        },
        {
            chatID: 4,
            speaker: "zoey",
            text: "HAHAHA yeah she does, I'm so jealous. I'm so totally in love!",
            button: [
                { chatID: 5, text: "Aww. I'm happy for your " + sc.n("zoey"), callback: "zLook" }
            ]
        },
        {
            chatID: 5,
            speaker: "zoey",
            text: "Thanks " + sc.n("me") + ", you're the best friend any girl could want. " +
                "It's been fun I'm going to get ready for my date tonight.",
            button: [
                { chatID: -1, text: "I had fun too. Night " + sc.n("zoey") , callback: "leave0" }
            ]
        },
        {
            chatID: 6,
            speaker: "zoey",
            text: "Back for your can of beat ass? I've got an entire case!",
            button: [
                { chatID: 7, text: "Damn it " + sc.n("zoey") + " it's a can of whoop ass!", callback: "zForward" }
            ]
        },
        {
            chatID: 7,
            speaker: "zoey",
            text: "I don't whoop ass, girls never fart! I do, however beat your ass at video games!",
            button: [
                { chatID: 9, text: "Haha, you liar, I heard you squeek one out 5 minutes ago!", callback: "" }
            ]
        },
        {
            chatID: 8,
            speaker: "zoey",
            text: "I don't whoop ass, girls never fart! I do, however beat your ass at video games!",
            button: [
                { chatID: 9, text: "Haha, you liar, I heard you squeek one out 5 minutes ago!", callback: "zLook" }
            ]
        },
        {
            chatID: 9,
            speaker: "zoey",
            text: "It's only because I feel comfortable around you.",
            button: [
                { chatID: 10, text: "So " + sc.n("zoey") + " why don't we ever date?", callback: "zSuprise" }
            ]
        },
        {
            chatID: 10,
            speaker: "zoey",
            text: "Because I prefer tits to dicks. You know you would make a sexy chick.",
            button: [
                { chatID: 11, text: "I make a sexy anything!", callback: "zLook" }
            ]
        },
        {
            chatID: 11,
            speaker: "zoey",
            text: "Haha, ok I'll tell you what, when you grow some tits I'll give you a chance, but you know I like 'em big and round, so " +
                "don't come at me with some moobs.",
            button: [
                { chatID: 12, text: "Moobs? What's that?", callback: "zShock" }
            ]
        },
        {
            chatID: 12,
            speaker: "zoey",
            text: "Man boobs you dolt! It's when a man gets really fat and grows boobs! ",
            button: [
                { chatID: 13, text: "I'd make moobs look good!", callback: "zLook" }
            ]
        },
        {
            chatID: 13,
            speaker: "zoey",
            text: "Ok, plus I wouldn't want to ruin our friendship, I really like having you as a friend, plus " +
                "who would come over so often just so I could beat them at old school video games?",
            button: [
                { chatID: 14, text: "Yep, you're lucky you have me. ", callback: "zForward" }
            ]
        },
        {
            chatID: 14,
            speaker: "zoey",
            text: "You're the best.",
            button: [
                { chatID: 15, text: "Thanks! Well I better get going, I can't keep losing all night. ", callback: "zLook" }
            ]
        },
        {
            chatID: 15,
            speaker: "zoey",
            text: "OK, bye bye, love ya!",
            button: [
                { chatID: -1, text: "Love ya too, night ", callback: "leave1" }
            ]
        },
        {
            chatID: 16,
            speaker: "zoey",
            text: "I'm really busy, do you mind coming back sometime?",
            button: [
                { chatID: -1, text: "Sure. Later ", callback: "leave" }
            ]
        },
        {
            chatID: 17,
            speaker: "zoey",
            text: "Hay Chloé is here, she's sleeping in the other room. I hope you don't mind.",
            button: [
                { chatID: 18, text: "Only if she doens't mind that I steal you away form some games.", callback: "zForward" }
            ]
        },
        {
            chatID: 18,
            speaker: "zoey",
            text: "She doens't mind, she likes how happy I am when after I kick you in the ass.",
            button: [
                {
                    chatID: 19, text: "Dammit it " + sc.n("zoey") + ", its 'kick your ass.' Kick you in the ass " +
                        "sounds like you're putting your foot in my butthole. ", callback: "zShock"
                }
            ]
        },
        {
            chatID: 19,
            speaker: "zoey",
            text: "I said what I meant. My foot is going in that ass.",
            button: [
                { chatID: 20, text: "We'll see", callback: "zForward" }
            ]
        },
        {
            chatID: 20,
            speaker: "zoey",
            text: "Mon dieu, you are bad at this.",
            button: [
                { chatID: 21, text: "'Cause you're a big ol' cheater.", callback: "vaginaDoorway" }
            ]
        },
        {
            chatID: 21,
            speaker: "chloe",
            text: "I thought I heard you two in here.",
            button: [
                { chatID: 22, text: "...", callback: "zSuprise" }
            ]
        },
        {
            chatID: 22,
            speaker: "zoey",
            text: "Chloé! Where's your panties?",
            button: [
                { chatID: 23, text: "...", callback: "" }
            ]
        },
        {
            chatID: 23,
            speaker: "chloe",
            text: "On your floor where you dropped them last night! ",
            button: [
                { chatID: 24, text: "...", callback: "zLook" }
            ]
        },
        {
            chatID: 24,
            speaker: "zoey",
            text: sc.n("me") + " I didn't know she was going to do this",
            button: [
                { chatID: 27, text: "It's ok " + sc.n('zoey') + ". Chloé has a great pussy, she should show that thing off.", callback: "zSuprise" },
                { chatID: 25, text: "Hay Chloé, that's not cool, you need to put on some pants", callback: "" }
            ]
        },
        {
            chatID: 25,
            speaker: "chloe",
            text: "Oh, I thought you would want a look. I'll go put this away.",
            button: [
                { chatID: 26, text: "...", callback: "vaginaHide" }
            ]
        },
        {
            chatID: 26,
            speaker: "zoey",
            text: "I'm going to talk to Chloé, I'll see you some other time. ",
            button: [
                { chatID: -1, text: "Ok, see ya later. ", callback: "leave3" }
            ]
        },
        {
            chatID: 27,
            speaker: "zoey",
            text: "Really " + sc.n("me") + "? You don't mind that Chloé's naked in my living room?",
            button: [
                { chatID: 28, text: "Don't mind? That's the hottest thing I've seen all day", callback: "zForward" }
            ]
        },
        {
            chatID: 28,
            speaker: "chloe",
            text: "Well if you think that's hot, I hope you don't mind if I get off really quick? I love being watched.",
            button: [
                { chatID: 29, text: "Huh?", callback: "munchTheTwat" }
            ]
        },
        {
            chatID: 29,
            speaker: "zoey",
            text: "What can I say, J'aime la chatte.",
            button: [
                { chatID: 30, text: "....", callback: "munchTheTwat1" }
            ]
        },
        {
            chatID: 30,
            speaker: "zoey",
            text: "mmmMMMmmmmmmmMMmmmMM",
            button: [
                { chatID: 31, text: "....", callback: "" }
            ]
        },
        {
            chatID: 31,
            speaker: "chloe",
            text: "I love grinding my pussy into your little mouth, it feels so good. ",
            button: [
                { chatID: 32, text: "....", callback: "" }
            ]
        },
        {
            chatID: 32,
            speaker: "chloe",
            text: "Lick my clit " + sc.n("zoey") + ", make me cum all over your goth face.",
            button: [
                { chatID: 34, text: "....", callback: "munchTheTwat2" }
            ]
        },
        {
            chatID: 33,
            speaker: "chloe",
            text: "no op",
            button: [
                { chatID: 34, text: "....", callback: "munchTheTwat2" }
            ]
        },
        {
            chatID: 34,
            speaker: "chloe",
            text: "OOOOOhhh fuck I'm cumming all over your pretty little face!!!",
            button: [
                { chatID: 35, text: "....", callback: "munchTheTwat3" }
            ]
        },
        {
            chatID: 35,
            speaker: "chloe",
            text: "I'm going to get my panties, I've got to get going. Your tongue is amazing. ",
            button: [
                { chatID: 36, text: "....", callback: "munchTheTwat4" }
            ]
        },
        {
            chatID: 36,
            speaker: "zoey",
            text: "I hope you didn't mind seeing that. ",
            button: [
                { chatID: 37, text: "Of course not! Feel free to eat her out anytime I'm around!", callback: "" }
            ]
        },
        {
            chatID: 37,
            speaker: "zoey",
            text: "You are the best ami a girl could have. I'm going to clean up. I'll catch you later. ",
            button: [
                { chatID: -1, text: "Later " + sc.n("zoey"), callback: "leave3" }
            ]
        },
        {
            chatID: 38,
            speaker: "zoey",
            text: "I'm really glad you keep coming over to play games. No one's a better friend than you are. ",
            button: [
                { chatID: 39, text: "You're an awesome friend too", callback: "zForward" }
            ]
        },
        {
            chatID: 39,
            speaker: "zoey",
            text: "That means a lot, Merci.",
            button: [
                { chatID: -1, text: "You're welcome. I'm going to head out.", callback: "leave" }
            ]
        },
        {
            chatID: 40,
            speaker: "zoey",
            text: "Hay Tête de noeud, you back for some more kicks in the ass?",
            button: [
                { chatID: 41, text: "Oh my god " + sc.n("zoey") + "! I'm going to destroy you so you can never try to talk shit again. ", callback: "zforward" }
            ]
        },
        {
            chatID: 41,
            speaker: "zoey",
            text: "You could not beat a small child. Sit down a take your beating!",
            button: [
                { chatID: 42, text: "So, that thing you did with Chloé the other day.... that was hot ", callback: "zSuprise" }
            ]
        },
        {
            chatID: 42,
            speaker: "zoey",
            text: "Yes. Chloé's always been the wild one, but lately she's been hanging out with Emily a lot more. It has me worried. ",
            button: [
                { chatID: 43, text: "Who's Emily ", callback: "zForward" }
            ]
        },
        {
            chatID: 43,
            speaker: "zoey",
            text: "You remember Emily. She was in our senior science class.",
            button: [
                { chatID: 44, text: "I remember her; she was always so friendly. I think she was dating Billy.", callback: "" }
            ]
        },
        {
            chatID: 44,
            speaker: "zoey",
            text: "I forgot about that. Maybe I'm just being crazy.",
            button: [
                { chatID: 45, text: "Always trust your gut, if you think she's cheating, she's probably cheating.", callback: "cheat" },
                { chatID: 50, text: "You're probably looking too much into it. Chloé and Emily aren't the cheating type.", callback: "noCheat" }
            ]
        },
        {
            chatID: 45,
            speaker: "zoey",
            text: "Yes, you're right. I'm going to go through her phone to see if I can find anything! ",
            button: [
                { chatID: 46, text: "Or just ask her...", callback: "" }
            ]
        },
        {
            chatID: 46,
            speaker: "zoey",
            text: "There's no way I could just ask her. That's too embarrassing, especially if I'm wrong. I'm going to check her phone.",
            button: [
                { chatID: 47, text: "You're beginning to sound like a crazy girlfriend", callback: "zShock" }
            ]
        },
        {
            chatID: 47,
            speaker: "zoey",
            text: "Mon dieu. Whose side are you on?",
            button: [
                {
                    chatID: 48, text: "Your side. I'm always on your side. I'm only trying to help. If you need help going " +
                    "through her phone I'm there. ", callback: "zLook" }
            ]
        },
        {
            chatID: 48,
            speaker: "zoey",
            text: "I know it's crazy, but I've got to know. ",
            button: [
                { chatID: 49, text: "I know " + sc.n("zoey") + ". If you need anything from me let me know.", callback: "" }
            ]
        },
        {
            chatID: 49,
            speaker: "zoey",
            text: "Ok. You're my best friend, you know that right? ",
            button: [
                { chatID: 52, text: "I do, you're my best friend too", callback: "" }
            ]
        },
        {
            chatID: 50,
            speaker: "zoey",
            text: "You're right. I'm probably looking too much into it. I'm glad you're here to keep me sane. ",
            button: [
                { chatID: 51, text: "Hay, it's what best friends are for!", callback: "zLook" }
            ]
        },
        {
            chatID: 51,
            speaker: "zoey",
            text: "You really are my best friend. ",
            button: [
                { chatID: 52, text: "I know, you're my best friend too.", callback: "" }
            ]
        },
        {
            chatID: 52,
            speaker: "zoey",
            text: "I'll see you later? ",
            button: [
                { chatID: -1, text: "You know it. I gotta get my revenge on that video game!", callback: "leave" }
            ]
        },
        {
            chatID: 53,
            speaker: "zoey",
            text: "Bonjour " + sc.n("me") + "! Meet my girlfriend Chloé. I forgot we were supposed to go out today.",
            button: [
                { chatID: 54, text: "...", callback: "" }
            ]
        },
        {
            chatID: 54,
            speaker: "chloe",
            text: "Hay " + sc.n("me") + " " + sc.n("zoey") + "'s told me so much about you. How's your penis?",
            button: [
                { chatID: 55, text: "Wha....?", callback: "" }
            ]
        },
        {
            chatID: 55,
            speaker: "zoey",
            text: "Oh Chloé, I told you that in secret! Sorry " + sc.n("me") + ", I told her about that time in 11th grade when " +
                "you made fun of Stacy on the lunch room and she kicked you in the balls so hard it looked like she broke them!",
            button: [
                { chatID: 59, text: "ohhh, hahaha yea. They're better now, but feel free to check them.", callback: "" },
                { chatID: 56, text: sc.n("zoey") + "!! I can't believe your told her that! So rude." , callback: "" }
            ]
        },
        {
            chatID: 56,
            speaker: "chloe",
            text: "Clam down " + sc.n("me") + ", its funny. Take a chill pill. ",
            button: [
                { chatID: 57, text: "But...", callback: "" }
            ]
        },
        {
            chatID: 57,
            speaker: "chloe",
            text: "No dude, be cool.",
            button: [
                { chatID: 58, text: "I guess it was funny", callback: "" }
            ]
        },
        {
            chatID: 58,
            speaker: "zoey",
            text: "Pardonne moi " + sc.n("me") + ", I didn't think you would get so upset. I promise never to tell anyone ever again.",
            button: [
                { chatID: 62, text: "I shouldn't have blown up at you. You're good ", callback: "" }
            ]
        },
        {
            chatID: 59,
            speaker: "chloe",
            text: "You know " + sc.n("zoey") + " and I just may do that. We'd want to make sure nothing's broken.",
            button: [
                { chatID: 60, text: "Oh yea...", callback: "" }
            ]
        },
        {
            chatID: 60,
            speaker: "zoey",
            text: "Chloé!!! I'm not checking out " + sc.n("me") + "'s Une coucougnettes!",
            button: [
                { chatID: 61, text: "...", callback: "" }
            ]
        },
        {
            chatID: 61,
            speaker: "chloe",
            text: "Hahaha " + sc.n("zoey") + ". I'm just kidding you know my pussy only aches for you.",
            button: [
                { chatID: 62, text: "...", callback: "" }
            ]
        },
        {
            chatID: 62,
            speaker: "zoey",
            text: "Well Chloé and I have got to get going, It's good seeing you!",
            button: [
                { chatID: -1, text: "Ok, have fun.", callback: "chloeLeave" }
            ]
        },
        {
            chatID: 63,
            speaker: "zoey",
            text: "LA PROCHAINE FOIS JE TE BOTTE LE CUL!!! Sorry " + sc.n("me") + " I have a butt to kick!",
            button: [
                { chatID: -1, text: "Ok, have fun.", callback: "lookForward" }
            ]
        },
        {
            chatID: 64,
            speaker: "me",
            text: "Oh, it's " + sc.n("chloe") + "'s purse, I wonder if there's any  proof that she's cheeting in there.... " +
                "or I could peep on those two.",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 65,
            speaker: "me",
            text: "Hmmm I wonder if " + sc.n("zoey") + " would mind if I peeped just for a second... I know " + sc.n("chloe") + 
                " wouldn't care.",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 66,
            speaker: "me",
            text: "Should I call it a night?",
            button: [
                { chatID: -1, text: "Take a nap until morning", callback: "takeANap" },
                { chatID: -1, text: "Never mind, I still have stuff to do", callback: "" }
            ]
        },
        {
            chatID: 67,
            speaker: "me",
            text: "That's her pocketbook, I'm not going to steal from " + sc.n("chloe") + ".",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 68,
            speaker: "me",
            text: "Fuck!!! I have no idea what to press! ",
            button: [
                { chatID: -1, text: "...", callback: "killPhone11" }
            ]
        },
        {
            chatID: 69,
            speaker: "me",
            text: ".",
            button: [
                { chatID: -1, text: "Close Book", callback: "killNotebook11" },
                { chatID: 70, text: "Turn Page", callback: "notbook11-1" }
            ]
        },
        {
            chatID: 70,
            speaker: "me",
            text: "..",
            button: [
                { chatID: 72, text: "Close Book", callback: "killNotebook11" },
                { chatID: 71, text: "Turn Page", callback: "notbook11-2" }
            ]
        },
        {
            chatID: 71,
            speaker: "me",
            text: "...",
            button: [
                { chatID: 72, text: "Close Book", callback: "killNotebook11" },
            ]
        },
        {
            chatID: 72,
            speaker: "me",
            text: "Oh wow " + sc.n("chloe") + " really is cheating on " + sc.n("zoey") + "! " +
                (sc.checkevent("zoey", -3) ? "I knew it, I have to tell " + sc.n("zoey") + "!" :
                " I can't believe how stupid I was! I need to tell " + sc.n("zoey") + "!"),
            button: [
                { chatID: -1, text: "Tell " + sc.n("zoey"), callback: "tellZoey" }
            ]
        },
        {
            chatID: 73,
            speaker: "me",
            text: "That chair is horrible to sleep in. Oh well I need to change and get ready for my day!",
            button: [
                { chatID: -1, text: "[Go to " + sc.n("zoey") + "'s room and change]", callback: "zoey11To12" }
            ]
        },
        {
            chatID: 74,
            speaker: "me",
            text: "I'm not going to go through " + sc.n("chloe") + "'s purse. ",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        }
    ];
    //chloe - there is no good or bad, only fun and not fun
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};