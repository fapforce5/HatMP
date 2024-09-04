//Room name
var room501 = {};
room501.main = function () {
    if (sc.getTimeline("zoey").thisRoom) {
        if (sc.taskGetStep("zoey", "friends") === 2 && !daily.get("zoeytalk")) {
            daily.set("zoey");
            sc.completeMissionTask("zoey", "friends", 2);
            nav.bg("501_jadaGame/together.jpg");
            chat(53, 501);
        }
        else {
            nav.button({
                "type": "btn",
                "name": "zoey",
                "left": 1035,
                "top": 288,
                "width": 549,
                "height": 524,
                "image": "501_jadaGame/zoeySit.png"
            }, 501);
        }
    }
    else {
        char.room(500);
    }

    //var btnList = new Array();
    //var navList = [0];
    //var zoeyStep = sc.getstep("zoey");
    //if (zoeyStep === 2) {
    //    nav.button({
    //        "type": "img",
    //        "name": "ddduo",
    //        "left": 820,
    //        "top": 54,
    //        "width": 658,
    //        "height": 1026,
    //        "image": "501_jadaGame/duo.png"
    //    }, 501);
    //    chat(53, 501);
    //}
    //else if (zoeyStep > 22) {
    //    nav.button({
    //        "type": "btn",
    //        "name": "zoey",
    //        "left": 1035,
    //        "top": 288,
    //        "width": 549,
    //        "height": 524,
    //        "image": "501_jadaGame/zoeySit.png"
    //    }, 501);
    //    nav.buildnav([0]);
    //}
    //else {
    //    if (sc.getEvent("zoey", -2)) {
    //        navList.push(502);
    //        navList.push(503);
    //        btnList.push({
    //            "type": "btn",
    //            "name": "door",
    //            "left": 580,
    //            "top": 29,
    //            "width": 354,
    //            "height": 721,
    //            "title": "Bedroom",
    //            "image": "501_jadaGame/door.png"
    //        });
    //    }
    //    if (sc.zoey().thisRoom) {
    //        if (zoeyStep > 13) {
    //            btnList.push({
    //                "type": "btn",
    //                "name": "zoey",
    //                "left": 1035,
    //                "top": 288,
    //                "width": 549,
    //                "height": 524,
    //                "image": "501_jadaGame/zoeySitx.png"
    //            });
    //        }
    //        else {
    //            btnList.push({
    //                "type": "btn",
    //                "name": "zoey",
    //                "left": 1035,
    //                "top": 288,
    //                "width": 549,
    //                "height": 524,
    //                "image": "501_jadaGame/zoeySit.png"
    //            });
    //        }
            
    //    }
    //    $.each(btnList, function (i, v) {
    //        nav.button(v, 501);
    //    });
        nav.buildnav([0]);
    //}
};

room501.btnclick = function (name) {
    switch (name) {
        case "zoey":
            sc.selectBg("icon_kill");
            sc.select("icon_chat", "501_jadaGame/icon_chat.png", 0);
            sc.select("icon_game", "501_jadaGame/icon_game.png", 1);
            sc.selectCancel("icon_kill", 2);
            break;
        case "icon_kill":
            char.room(501);
            break;
        case "icon_game":
            nav.killall();
            nav.bg("501_jadaGame/game" + g.rand(0, 9) + ".jpg");
            zcl.displayMain(0, -400, .4, "clothes", true);
            chat(999, 501);
            break;
        case "icon_chat":
            if (daily.get("zoeytalk")) {
                chat(8, 501);
            }
            else if (sc.getMission("zoey", "friends").inProgress) {
                var friends = sc.taskGetStep("zoey", "friends");
                switch (friends) {
                    case 0:
                        nav.killall();
                        room501.chatcatch("zForward");
                        sc.completeMissionTask("zoey", "friends", 0);
                        daily.set("zoeytalk");
                        chat(0, 501);
                        break;
                    case 1:
                        nav.killall();
                        room501.chatcatch("zLook");
                        sc.completeMissionTask("zoey", "friends", 1);
                        daily.set("zoeytalk");
                        chat(6, 501);
                        break;
                    case 2:
                        nav.killall();
                        room501.chatcatch("zLook");
                        chat(8, 501);
                        break;
                    case 3:
                        nav.killall();
                        room501.chatcatch("zLook");
                        sc.completeMissionTask("zoey", "friends", 3);
                        daily.set("zoey");
                        chat(17, 501);
                        break;
                    case 4:
                        nav.killall();
                        room501.chatcatch("zLook");
                        sc.completeMissionTask("zoey", "friends", 4);
                        daily.set("zoeytalk");
                        chat(40, 501);
                        break;
                    case 5:
                        nav.killall();
                        room501.chatcatch("zLook");
                        sc.completeMissionTask("zoey", "friends", 4);
                        daily.set("zoeytalk");
                        chat(64, 501);
                        break;
                    case 6:
                        nav.killall();
                        room501.chatcatch("zLook");
                        sc.completeMissionTask("zoey", "friends", 4);
                        daily.set("zoeytalk");
                        chat(64, 501);
                        break;
                }
            }
            else if (sc.getMission("zoey", "cheating").inProgress) {
                if (!sc.getMissionTask("zoey", "cheating", 0).complete) {
                    nav.killall();
                    room501.chatcatch("zLook");
                    chat(800, 501);
                }
            }
            break;
        case "cheating3":
            nav.killbutton("cheatingx");
            if (g.internal === 0) {
                nav.bg("999_phone/black.jpg");
                char.addDays(1);
                char.settime(2, 17);
            }
            if (g.internal === 1)
                nav.bg("501_jadaGame/cheating4.jpg");
            if (g.internal === 2) {
                nav.killall();
                chat(82, 501);
            }
            g.internal++;
            break;
        case "cheating11":
            sc.completeMission("zoey", "cheating");
            sc.startMission("zoey", "sex");
            g.pass = 502;
            char.room(28);
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
            break;
        case "pocketbook11":
            chat(85, 501);
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
            chat(86, 501);
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
                'I see. I don\'t know what came over me, I just went to her and buried my face into her boobs and started ' +
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
                'face!! I pushed her head down to my horny little clit and she just buried her face into my wet pussy! ' +
                'It felt soooo good, I had to taste her pussy. I kneeled down to give her a kiss and I could taste myself ' +
                'on her lips, I taste sooo good.I then pulled her down on her back and moved into a 69 with me on top. ' +
                'I\'ve slept with plenty of boys, but I\'ve never cum harder than with ' + sc.n('zoey') + '\'s face ' +
                'buried into my pussy as' +
                '</div>');
            g.internal = 0;
            nav.next("cheatingDiary");
            break;
        case "cheatingDiary":
            if (g.internal === 0) {
                $('.zoey11KillMe').remove();
                $('#room-buttons').append('<div class="zoey11KillMe" style="position:absolute; ' + g.makeCss(800, 500, 150, 450) + g.cssText("m") + ' z-index:100000; text-align:left; width">' +
                    'I ate her out. We made out for an hour after that both of our faces wet with ' +
                    'each other\'s cum! I had to have her more!<br/><br/><br/>' +
                    'Saw ' + sc.n('zoey') + ' again... I sat on her face for an hour. I think I had 5 different orgasms that night.' +
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
                    sc.n('priapus') + ' demanded more cum! What a selfish asshole. I had to jerk off 7 men to get enough cum ' +
                    'for him! My wrist was sooo sore when I was done I made ' + sc.n('priapus') + ' pay me $150 for all that cum!' +
                    '</div>');
            }
            else {
                $('.zoey11KillMe').remove();
                $('#room-buttons').append('<div class="zoey11KillMe" style="position:absolute; ' + g.makeCss(800, 500, 150, 450) + g.cssText("m") + ' z-index:100000; text-align:left; width">' +
                    'Just got the sexiest fuzzy green boots! They really make my ass pop out and ' + sc.n('zoey') + ' absolutely loved them' +
                    '<br/><br/><br/>' +
                    sc.n('priapus') + ' offered me $500 to sit for the C.U.M. cult and have the guys bust their nuts in my ' +
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
                nav.killbutton("cheatingDiary");
                nav.close("cancelPeek");
            }
            g.internal++;
            break;
        case "door11":
            nav.killall();
            nav.bg("501_jadaGame/cheating7.jpg");
            nav.next("door11x")
            break;
        case "door11x":
            nav.killall();
            nav.bg("501_jadaGame/cheating8.jpg");
            chat(87, 501);
            break;
        case "cancelPeek":
            room501.chatcatch("cheating6");
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
        case "zCry":
            nav.killbutton("zoey");
            nav.button({
                "type": "img",
                "name": "zoey",
                "left": 963,
                "top": 271,
                "width": 785,
                "height": 626,
                "image": "501_jadaGame/zoeyCry.jpg"
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
        case "cheating0":
            nav.killall();
            nav.bg("501_jadaGame/cheating0.jpg");
            break;
        case "cheating1":
            sc.modLevel("zoey", 100, 5);
            nav.bg("502_bedroom/sleep_" + gender.pronoun("f") + ".jpg");
            break;
        case "cheating1x":
            nav.bg("502_bedroom/sleep_" + gender.pronoun("f") + ".jpg");
            break;
        case "cheating2":
            g.internal = 0;
            nav.button({
                "type": "img",
                "name": "cheatingx",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "502_bedroom/cheating2.png"
            }, 501);
            nav.next("cheating3");
            break;
        case "cheating5":
            nav.killall();
            nav.bg("501_jadaGame/cheating5.jpg");
            break;
        case "cheating6":
            nav.killall();
            nav.bg("501_jadaGame/501_game.jpg");
            nav.button({
                "type": "btn",
                "name": "door11",
                "left": 580,
                "top": 29,
                "width": 354,
                "height": 721,
                "title": "Peek",
                "image": "501_jadaGame/door.png"
            }, 501);
            nav.button({
                "type": "btn",
                "name": "purse11",
                "left": 1476,
                "top": 608,
                "width": 151,
                "height": 100,
                "title": "Sleep",
                "image": "501_jadaGame/purse.png"
            }, 501);

            break;
        case "cheating9":
            nav.killall();
            nav.bg("501_jadaGame/cheating9.jpg");
            break;
        case "cheating10":
            nav.bg("502_bedroom/sleep_" + gender.pronoun("f") + ".jpg");
            nav.next("cheating11");
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
            scc.love("zoey", -5, 100);
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
            gv.mod("arousal", 50);
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
            char.room(0);
            break;
        case "leaveDaily":
            daily.set("zoey");
            char.room(0);
            break;
        case "resetEndTalk":
            sc.modLevel("zoey", 40, 5);
            char.addtime(32);
            char.room(501);
            break;
        case "resetEndGame":
            sc.modLevel("zoey", 20, 5);
            char.addtime(180);
            char.room(501);
            break;
        case "reset":
            char.room(501);
            break;
        case "leave3":
            char.room(500);
            break;
        case "cheat":
            sc.modLevel("zoey", 100, 5);
            sc.completeMission("zoey", "friends");
            sc.startMission("zoey", "cheating");
            daily.set("zoey");
            room501.chatcatch("zLook");
            break;
        case "cheat2":
            sc.modLevel("zoey", 20, 5);
            sc.completeMission("zoey", "friends");
            sc.startMission("zoey", "cheating");
            daily.set("zoey");
            room501.chatcatch("zSuprise");
            break;
        case "noCheat":
            sc.modLevel("zoey", -50, 999);
            daily.set("zoey");
            room501.chatcatch("zLook");
            break;
        case "chloeLeave":
            daily.set("zoey");
            sc.setstep("zoey", 3);
            if (sc.getEvent("zoey", 7)) {
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
                'Saw ' + sc.n('zoey') + ' again... I sat on her face for an hour. I think I had 5 different orgasms that night.' +
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
                sc.n('priapus') + ' demanded more cum! What a selfish asshole. I had to jerk off 7 men to get enough cum ' +
                'for him! My wrist was sooo sore when I was done I made ' + sc.n('priapus') + ' pay me $150 for all that cum!' +
                '</div>');
            break;
        case "notbook11-2":
            $('.zoey11KillMe').remove();
            $('#room-buttons').append('<div class="zoey11KillMe" style="position:absolute; ' + g.makeCss(800, 500, 150, 450) + g.cssText("m") + ' z-index:100000; text-align:left; width">' +
                'Just got the sexiest fuzzy green boots! They really make my ass pop out and ' + sc.n('zoey') + ' absolutely loved them' +
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
            nav.killall();
            nav.bg("502_bedroom/eat1.jpg");
            break;
        case "tellZoey1":
            nav.bg("502_bedroom/eat3.jpg");
            break;
        case "zhate":
            sc.modLevel("zoey", -20, 999);
            break;
        case "zlove":
            sc.modLevel("zoey", 40, 5);
            break;
        case "5endbad":
            sc.setstep("zoey", 300);
            char.addtime(120);
            daily.set("zoey");
            char.room(0);
            break;
        case "5midway":
            g.dt = new Date(g.dt.getFullYear(), g.dt.getMonth(), g.dt.getDate(), 23, 0, 0, 0);
            char.addtime(10);
            room501.chatcatch("zShock");
            break;
        case "phoneRandom":
        case "phone69":
            nav.killbutton("code");
            var code = (callback === "phone69" ? 6969 : Math.floor(Math.random() * 9999)).toString();
            nav.t({
                type: "img",
                name: "code",
                left: 940,
                top: 170,
                font: 100,
                hex: "#ffffff",
                text: code
            });
            nav.modbutton("phone11Kill", "501_jadaGame/cPhone_bigx.png");
            chat(79, 501);
            break;
        case "fuckingcheater":
            if (sc.getstep("chloe") > 0)
                chat(98, 501)//fucking chater
            else
                chat(92, 501);
            break;
        case "zoeyCry":
            nav.bg("502_bedroom/zoeyCry.jpg");
            break;
        case "zoeySleep":
            nav.bg("502_bedroom/sleepZoey.jpg");
            scc.love("zoey", 40, 60);
            sc.setstep("zoey", 6);
            sc.setstep("zoey", -2);
            sc.setstep("chloe", 3);
            g.roomTimeout = setTimeout(function () {
                g.pass = 502;
                char.room(28);
            }, 500);
            break;
        case "zoeyDestroy":
            sc.completeMission("zoey", "friends", false);
            sc.startMission("zoey", "xfriends");
            daily.set("zoey");
            char.addtime(37);
            char.room(0);
            break;
        case "repeat6":
            daily.set("zoey");
            char.addtime(78);
            char.room(0);
            break;
        case "checkLove":
            nav.killall();
            nav.bg("501_jadaGame/game.jpg");
            chat(110, 501);
            break;
        case "gameEnd":
            scc.love("zoey", 5, 90);
            char.addtime(180);
            char.room(501);
            break;
        case "gotohouse":
            if (g.dt.getHours() < 24)
                char.addDays(1);
            char.settime(2, 0);
            sc.setstep("zoey", 12);
            char.room(502);
            break;
        default:
            break;
    }
};

room501.chat = function (chatID) {
    if (chatID === 999) {
        var c = [
            "I will lick the floor with you! ",
            "Tu es pire que ma mère",
            "Va te faire enculer! ",
            "Va niquer ta mere",
            "Je t'emmerde",
            "J'en ai ras de cul.",
            "Ça me fait chier!",
            "You're the floor poop!",
            "My nuts are on your mouth!",
            "You are the suck of prostitutes! ",
            "You are the poop biggest!"
        ];
        return {
            chatID: 0,
            speaker: "zoey",
            text: c[g.rand(0, c.length)],
            button: [
                { chatID: -1, text: "Grrr.", callback: "resetEndGame" }
            ]
        };
    }
    else if (chatID === 800) {
        var cclub = sc.getMissionTask("zoey", "cheating", 1).success;
        var cmall = sc.getMissionTask("zoey", "cheating", 2).success;
        var cgh = sc.getMissionTask("zoey", "cheating", 3).success;

        if (!cclub && !cmall && !cgh) {
            return {
                chatID: 800,
                speaker: "zoey",
                text: "Did you catch her cheating yet?",
                button: [
                    { chatID: 76, text: "Not yet", callback: "" }
                ]
            };
        }
        else {
            var cBtnArray = new Array();
            if (cclub)
                cBtnArray.push({ chatID: 77, text: "Caught her at the club!", callback: "zShock" });
            if (cmall)
                cBtnArray.push({ chatID: 77, text: "Caught her at the mall!", callback: "zShock" });
            if (cgh)
                cBtnArray.push({ chatID: 94, text: "Caught her at the glory hole!", callback: "zShock" });
            cBtnArray.push({ chatID: 76, text: "Haven't caught her yet. ", callback: "" });
        }
        return {
            chatID: 800,
            speaker: "zoey",
            text: "Did you catch her cheating yet?",
            button: cBtnArray
        }; 
    }
    else {
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
                    { chatID: 3, text: "So how's your girlfriend, " + sc.n("chloe") + ", doing?", callback: "zSuprise" }
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
                    { chatID: 5, text: "Aww. I'm happy for you " + sc.n("zoey") + ". ", callback: "zLook" }
                ]
            },
            {
                chatID: 5,
                speaker: "zoey",
                text: "Thanks " + sc.n("me") + ", you're the best friend any girl could want. ",
                button: [
                    { chatID: -1, text: "Thanks bestie!.", callback: "resetEndTalk" }
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
                    { chatID: 9, text: "Haha, you liar, I heard you squeak one out 5 minutes ago!", callback: "" }
                ]
            },
            {
                chatID: 8,
                speaker: "zoey",
                text: "That is the American thing. Parle juste, parle, parle.. No talk, just game!",
                button: [
                    { chatID: -1, text: "...", callback: "reset" }
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
                    { chatID: 11, text: "I make anything sexy!", callback: "zLook" }
                ]
            },
            {
                chatID: 11,
                speaker: "zoey",
                text: "Haha, ok I'll tell you what, when you grow some tits I'll give you a chance, " +
                    "but you know I like 'em big and round, so " +
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
                text: "Ok, plus I wouldn't want to ruin our friendship, I really like having you " +
                    "as a friend, plus who would come over so often just so I could beat them at " +
                    "old school video games?",
                button: [
                    { chatID: 14, text: "Yep, you're lucky you have me. ", callback: "zForward" }
                ]
            },
            {
                chatID: 14,
                speaker: "zoey",
                text: "You're the best.",
                button: [
                    { chatID: -1, text: "Thanks! ", callback: "resetEndTalk" }
                ]
            },
            {
                chatID: 15,
                speaker: "zoey",
                text: "noop",
                button: [
                    { chatID: -1, text: "Love ya too, night ", callback: "" }
                ]
            },
            {
                chatID: 16,
                speaker: "zoey",
                text: "I'm really busy, do you mind coming back sometime?",
                button: [
                    { chatID: -1, text: "Sure. Later ", callback: "" }
                ]
            },
            {
                chatID: 17,
                speaker: "zoey",
                text: "Hey Chloé is here, she's sleeping in the other room. I hope you don't mind.",
                button: [
                    { chatID: 18, text: "Only if she doesn't mind that I steal you away form some games.", callback: "zForward" }
                ]
            },
            {
                chatID: 18,
                speaker: "zoey",
                text: "She doesn't mind, she likes how happy I am when after I kick you in the ass.",
                button: [
                    {
                        chatID: 19, text: "Dammit it " + sc.n("zoey") + ", its 'kick your ass.' Kick you in the ass " +
                            "sounds like you're putting your foot in my butt-hole. ", callback: "zShock"
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
                    { chatID: 25, text: "Hey Chloé, that's not cool, you need to put on some pants", callback: "" }
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
                    { chatID: -1, text: "Ok, see ya later. ", callback: "leave" }
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
                    { chatID: 37, text: "Of course not! Feel free to eat her out anytime I'm around!", callback: "zlove" }
                ]
            },
            {
                chatID: 37,
                speaker: "zoey",
                text: "You are the best ami a girl could have. I'm going to clean up. I'll catch you later. ",
                button: [
                    { chatID: -1, text: "Later " + sc.n("zoey"), callback: "leave" }
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
                text: "Hey Tête de noeud, you back for some more kicks in the ass?",
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
                        chatID: 48, text: "Your side. I'm always on your side. I'm only trying to help. What do you need from me? ", callback: "zLook"
                    }
                ]
            },
            {
                chatID: 48,
                speaker: "zoey",
                text: "I know it's crazy, but maybe spy on her. Or maybe seduce her. Tu es un homme attirant, " +
                    "you could try seducing her. She's very bisexuelle. ",
                button: [
                    { chatID: 49, text: "But she knows I know you.", callback: "" }
                ]
            },
            {
                chatID: 49,
                speaker: "zoey",
                text: "Ok. You're my best friend, you know that right? Just find out for me. ",
                button: [
                    { chatID: 52, text: "I will. You're my best friend too", callback: "" }
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
                text: "You'll catch her and let me know? ",
                button: [
                    { chatID: -1, text: "You know it. I gotta get my revenge on that video game!", callback: "reset" }
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
                text: "Hey " + sc.n("me") + " " + sc.n("zoey") + "'s told me so much about you. How's your penis?",
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
                    { chatID: 56, text: sc.n("zoey") + "!! I can't believe your told her that! So rude.", callback: "zhate" }
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
                    { chatID: 62, text: "...", callback: "zlove" }
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
                speaker: "zoey",
                text: "I saw Emily and " + sc.n("chloe") + " hanging out at the mall. They were a little too coquine. ",
                button: [
                    { chatID: 65, text: "Did you talk to them?", callback: "zShock" }
                ]
            },
            {
                chatID: 65,
                speaker: "zoey",
                text: "OH NO!!I would never! I'm too shy. I don't know what to do. ",
                button: [
                    { chatID: 66, text: "Maybe you could just break up with her?", callback: "zSuprise" }
                ]
            },
            {
                chatID: 66,
                speaker: "zoey",
                text: "Oh no I can't do that without knowing, but I need your help. ",
                button: [
                    { chatID: 67, text: "Me? What can I do? ", callback: "zLook" }
                ]
            },
            {
                chatID: 67,
                speaker: "zoey",
                text: "I need you to spy on her! Catch " + sc.n("chloe") + " flirter avec Emily. ",
                button: [
                    { chatID: 68, text: "That's crazy! ", callback: "zLook" }
                ]
            },
            {
                chatID: 68,
                speaker: "thinking",
                text: "Oh man! " + sc.n("zoey") + "'s gone crazy over this girl. I haven't seen her this stressed before. I want to " +
                    "help her, but is it right to spy on " + sc.n("chloe") + "? This could backfire REALLY BIG!",
                button: [
                    { chatID: 69, text: "...", callback: "" }
                ]
            },
            {
                chatID: 69,
                speaker: "zoey",
                text: "Je sais que je suis fou, but I just have to know! Will you do it?",
                button: [
                    { chatID: 71, text: "You're my best friend, of course I'll do it. ", callback: "cheat2" },
                    { chatID: 70, text: "No, you just need to talk with her. Relationships are about communication ", callback: "" }
                ]
            },
            {
                chatID: 70,
                speaker: "zoey",
                text: "Tu as raison. She'll be coming by shortly. I've got to get ready. I'll see you later.",
                button: [
                    { chatID: -1, text: "okay. Talk to her. I'm sure she'll tell you the truth. ", callback: "leaveDaily" },
                    { chatID: 71, text: "You know... I changed my mind. I'm in. You're my best friend and I trust you.", callback: "cheat2" }
                ]
            },
            {
                chatID: 71,
                speaker: "zoey",
                text: "Tu es mon meilleur ami!!! I know you you'll catch her cheating! Maybe the mall or the " +
                    "dance club. She knows I do not like crowded places, so she'll go somewhere I will not.",
                button: [
                    { chatID: 72, text: "I just have one condition. I get to pick the video game.", callback: "" }
                ]
            },
            {
                chatID: 72,
                speaker: "zoey",
                text: "Tu es le meilleur ami de tous les temps! I'm going to eat the floor on you, no matter which game your pick!",
                button: [
                    { chatID: -1, text: "Yeah right!", callback: "leaveDaily" }
                ]
            },
            {
                chatID: 73,
                speaker: "zoey",
                text: "I just found out " + sc.n("chloe") + " has been cheating on me. I confronted her about it and she admitted everything. ",
                button: [
                    { chatID: 74, text: "oh", callback: "" }
                ]
            },
            {
                chatID: 74,
                speaker: "zoey",
                text: "I can't believe my best friend wouldn't support me. Tu ne me fais pas confiance. My best friend has to support me and  " +
                    "since you can't support me, we aren't friends anymore. You should go now. I don't think I can look at you again. ",
                button: [
                    { chatID: 75, text: "but...", callback: "" }
                ]
            },
            {
                chatID: 75,
                speaker: "zoey",
                text: "No, not my butt. We're done. Goodbye.",
                button: [
                    { chatID: -1, text: "Sad whimper.", callback: "zoeyDestroy" }
                ]
            },
            {
                chatID: 76,
                speaker: "zoey",
                text: "I know she likes to hang out at the mall, or the dance club. " +
                    "J'ai entendu des rumeurs that she goes to some place called the hole glory. ",
                button: [
                    { chatID: -1, text: "Ok. I'll keep looking for you, my best friend.", callback: "reset" }
                ]
            },
            {
                chatID: 77,
                speaker: "zoey",
                text: "No. Really! With who? ",
                button: [
                    { chatID: 78, text: "[Lie]", callback: "zCry" },
                    { chatID: 90, text: "[Truth]", callback: "zCry" },
                ]
            },
            {
                chatID: 78,
                speaker: "me",
                text: "Emily. I saw them at the club and I followed them back to her apartment. " +
                    "They were definitely together. I saw them making out and touching each other. " +
                    "Sorry " + sc.n("zoey") + ", " + sc.n("chloe") + " is cheating on you. ",
                button: [
                    { chatID: 79  , text: "...", callback: "" },
                ]
            },
            {
                chatID: 79,
                speaker: "zoey",
                text: "Why would she cheat? I've been nothing but faithful to her. She promised " +
                    "she loved only me. Oh god....",
                button: [
                    { chatID: 80, text: "Are you going to be ok? Do you need a hug?", callback: "cheating0" },
                ]
            },
            {
                chatID: 80,
                speaker: "zoey",
                text: "*WAAAA* I do need a hug! I'm not going to be ok! I don't want to be alone, please " +
                    "just lay down with me. I can't be alone! ",
                button: [
                    { chatID: 81, text: "Anything for my best friend. ", callback: "cheating1" },
                ]
            },
            {
                chatID: 81,
                speaker: "zoey",
                text: "Just hold me. I need rest....",
                button: [
                    { chatID: -1, text: "I'll hold you for as long as you need. ", callback: "cheating2" },
                ]
            },
            {
                chatID: 82,
                speaker: "chloe",
                text: sc.n("zoey") + ", " + sc.n("me") + "? I didn't know you two were fucking. " +
                    "You should have told me! I was thinking the three of us should fuck since he " +
                    "saw my bare ass pussy. This is going to be awesome!  ",
                button: [
                    { chatID: 83, text: "...huh?", callback: "cheating5" },
                ]
            },
            {
                chatID: 83,
                speaker: "zoey",
                text: "We are not fucking! " + gender.pronoun("he") + " is my best friend! " +
                    "Nous n'aurons jamais de relations sexuelles! You are a pute infidèle! I " +
                    "am so so so angry right now, I can not even think in english! I am going to " +
                    "foot butt you so hard! " + sc.n("me") + " wait in my living room. This " +
                    "will not take long. " + sc.n("chloe") + ", je vais te donner le fond de ma pensée!",
                button: [
                    { chatID: 84, text: "oh sure [Go wait in the living room]", callback: "cheating6" },
                ]
            },
            {
                chatID: 84,
                speaker: "thinking",
                text: "Oh wow. I don't think I've ever seen her so mad! She's really going " +
                    "to give it to " + sc.n("chloe") + "! I hope she doesn't kill her. No, " + 
                    "she wouldn't kill her. She's too nice.. oh look " + sc.n("chloe") + " left " +
                    "her bag on the table... ",
                button: [
                    { chatID: -1, text: "Do I snoop on her purse, or just interrupt their fight? ", callback: "" },
                ]
            },
            {
                chatID: 85,
                speaker: "thinking",
                text: "That's her pocketbook. If I get caught it will look like I'm trying to steal from " + sc.n("chloe") + ".",
                button: [
                    { chatID: -1, text: "...", callback: "cheating6" }
                ]
            },
            {
                chatID: 86,
                speaker: "thinking",
                text: "Fuck!!! I have no idea what her code is. ",
                button: [
                    { chatID: -1, text: "Give Up", callback: "cheating6" },
                ]
            },
            {
                chatID: 87,
                speaker: "zoey",
                text: "Mon dieu. I forgot you were out there. Elle s'excuse auprès de ma chatte. " +
                    "But, we are fini. Au revoir " + sc.n("chloe") + ". You were fun, but I can't " +
                    "date a cheater. You knew that. ",
                button: [
                    { chatID: 88, text: "[Continue to stare at their pussies...]", callback: "" },
                ]
            },
            {
                chatID: 88,
                speaker: "chloe",
                text: "*slurp* it's cool. Totally deserve it. If you need your pussy eaten, just " +
                    "give me a call. Adiós. You always had the best tasting pussy. ",
                button: [
                    { chatID: 89, text: "...", callback: "cheating9" },
                ]
            },
            {
                chatID: 89,
                speaker: "zoey",
                text: "Oh my. Thank you for rescuing my butt. I almost made up with her, but that " +
                    "would be such a huge erreur. You really are my best friend. Anytime you need " +
                    "a place to sleep away from home, you are welcome here. And I could use the cuddles " +
                    "now that I'm a girl single. Let me put my panties back on and you can cuddle me some " +
                    "more. I could really use it. ",
                button: [
                    { chatID: -1, text: "Yeah. I would like that. ", callback: "cheating10" },
                ]
            },
            {
                chatID: 90,
                speaker: "zoey",
                text: "So, you know how you asked me to see if she was cheating. Well, I caught " +
                    "her in the club with Emily, but I didn't know if they were just chatting " +
                    "or if they were having sex. Well, Emily invited me to her place and " +
                    sc.n("chloe") + " came along too. I was going to hook up with just Emily " +
                    "but one thing led to another and " + sc.n("chloe") + " ended up having " +
                    "sex with both Emily and I. ",
                button: [
                    { chatID: 91, text: "...", callback: "" },
                ]
            },
            {
                chatID: 91,
                speaker: "zoey",
                text: "Tu mens, espèce de connard... You are not lying are you? " +
                    "Je suis tellement énervé en ce moment ! Je ne peux pas croire que vous " +
                    "baiseriez tous les deux dans mon dos! Putain! Ma vie est ruinée!",
                button: [
                    { chatID: 92, text: "huh? ", callback: "" },
                ]
            },
            {
                chatID: 92,
                speaker: "zoey",
                text: "I am so angry at " + sc.n("chloe") + ", but I knew it! I knew she was always " +
                    "a cheater! Any you! You didn't have to sex her to find out! You could have just " +
                    "told me they were at the club. I should be mad at you, but you did what I asked. " +
                    "I am not heureux with you, but I am not mad. Right now I am just tired. So very " +
                    "weak and tired. I feel like liquid on the floor. ",
                button: [
                    { chatID: 93, text: "I'm sorry. I didn't mean to hurt you. ", callback: "cheating0" },
                ]
            },
            {
                chatID: 93,
                speaker: "zoey",
                text: "You didn't. " + sc.n("chloe") + " did. Right now I just need to lay down. " +
                    "Please I can not be alone right now. Just lay with me and let me be sad. ",
                button: [
                    { chatID: 81, text: "Anything for my best friend. ", callback: "cheating1x" },
                ]
            },
            {
                chatID: 94,
                speaker: "zoey",
                text: "Quoi? What does that mean? What is this gorey hole? ",
                button: [
                    { chatID: 95, text: "...", callback: "zLook" },
                ]
            },
            {
                chatID: 95,
                speaker: "me",
                text: "So at my work there's this place where girls crawl into a hole with their " +
                    "naked ass exposed and random men come and have sex with those girls. " + 
                    sc.n("chloe") + " was one of those girls in the hole and many different men " +
                    "came by and had sex with her naked pussy and asshole. ",
                button: [
                    { chatID: 96, text: "...", callback: "zCry" },
                ]
            },
            {
                chatID: 96,
                speaker: "zoey",
                text: "Et merde! How does she... How do you... Many men? What is in the hole? " +
                    "How do you know the hole? Do you use the hole? ",
                button: [
                    { chatID: 97, text: "...", callback: "" },
                ]
            },
            {
                chatID: 97,
                speaker: "me",
                text: "What's in the hole doesn't matter. She has had sex with MANY MANY men. " +
                    "The place near my work has it, and I heard she was there so I checked and " +
                    "saw her in the hole with a guy having sex. Also, no, I would never have sex " +
                    "with the women in the hole. I'm sorry I had to be the one to tell you, but " +
                    sc.n("chloe") + " is very much cheating on you. Are you going to be ok? Do " +
                    "you need a hug? ",
                button: [
                    { chatID: 80, text: "...", callback: "cheating0" },
                ]
            },


























            {
                chatID: 100,
                speaker: "zoey",
                text: "I'm so glad you're around. You can lick my ass in video games! ",
                button: [
                    { chatID: -1, text: "Sure, I'll lick your ass good", callback: "checkLove" },
                    { chatID: -1, text: "Sorry, Gotta run.", callback: "" },
                ]
            },
            {
                chatID: 101,
                speaker: "zoey",
                text: "Phénoménale! She's so amazing! I have such a lightening bolt for " + sc.n("chloe") + ". " +
                    "I'm so glad you talked me out of doing crazy. ",
                button: [
                    { chatID: 102, text: "of course", callback: "zForward" }
                ]
            },
            {
                chatID: 102,
                speaker: "zoey",
                text: "I'm going to get back to killing these noobs! You should stop by the bar sometime.",
                button: [
                    { chatID: -1, text: "Yeah, that'd be cool", callback: "repeat6" }
                ]
            },
            {
                chatID: 103,
                speaker: "zoey",
                text: "In progress",
                button: [
                    { chatID: -1, text: "...", callback: "repeat6" }
                ]
            },
            {
                chatID: 104,
                speaker: "zoey",
                text: "ooooooooohhhhh right there",
                button: [
                    { chatID: -1, text: "[Silently leave]", callback: "peek2" }
                ]
            },
            {
                chatID: 105,
                speaker: "zoey",
                text: "I just found out " + sc.n("chloe") + " has been cheating on me. I confronted her about it and she admitted everything. ",
                button: [
                    { chatID: 106, text: "oh", callback: "" }
                ]
            },
            {
                chatID: 106,
                speaker: "zoey",
                text: "I can't believe my best friend wouldn't support me. Tu ne me fais pas confiance. My best friend has to support me and  " +
                    "since you can't support me, we aren't friends anymore. You should go now. I don't think I can look at you again. ",
                button: [
                    { chatID: 107, text: "but...", callback: "" }
                ]
            },
            {
                chatID: 107,
                speaker: "zoey",
                text: "No, not my butt. We're done. Goodbye.",
                button: [
                    { chatID: -1, text: "Sad whimper.", callback: "zoeyDestroy" }
                ]
            },
            {
                chatID: 108,
                speaker: "zoey",
                text: "Soooo, I'm pretty bored, do you want to eat my chatte?",
                button: [
                    { chatID: 109, text: "What about your friend?", callback: "" },
                    { chatID: -1, text: "No. I've got to run", callback: "" }
                ]
            },
            {
                chatID: 109,
                speaker: "zoey",
                text: "Oh, we are just doing la sex, she is not mon petite amie, just an amie with benifits. Sooo, do you want a taste?",
                button: [
                    { chatID: -1, text: "Yes I do!", callback: "gotohouse" }
                ]
            },
            {
                chatID: 110,
                speaker: "zoey",
                text: "Merci. I had a lot of fun!",
                button: [
                    { chatID: -1, text: "Me too", callback: "gameEnd" }
                ]
            },
            {
                chatID: 111,
                speaker: "zoey",
                text: "So, " + sc.n("stormy") + " wants you to watch us have sex, and I though the idea was sexy. If you want to " +
                    "do that she has some rules. You have to wear a appareil de chasteté and bring some handcuffs. If you do not want " +
                    "to, I am understanding. ",
                button: [
                    { chatID: -1, text: "Oh, cool.", callback: "" }
                ]
            },
            {
                chatID: 112,
                speaker: "zoey",
                text: "So, " + sc.n("stormy") + " wants you to watch us have sex like a cocue. I think it's kind of sexy, but I " +
                    "am understanding if you do not want to. ",
                button: [
                    { chatID: 113, text: "Oh yes! I totally do", callback: "" },
                    { chatID: -1, text: "No, I think I'll pass", callback: "" }
                ]
            },
            {
                chatID: 113,
                speaker: "zoey",
                text: "Ça le fait! Wait while I call her to come over.",
                button: [
                    { chatID: -1, text: "Sweet", callback: "gotohouse" }
                ]
            },
            {
                chatID: 114,
                speaker: "zoey",
                text: "I'm busy making this person eat my salad. You should catch me at the bar. ",
                button: [
                    { chatID: -1, text: "Ok, cool.", callback: "" }
                ]
            },
        ];
        //chloe - there is no good or bad, only fun and not fun
        if (cArray.length > chatID && chatID > -1)
            return cArray[chatID];
        else
            return [];
    }
};