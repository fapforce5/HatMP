var g = {}; //global
g.ratio = 1;// nav_ratio = 1;
g.roomTimeout = null;// var nav_roomTimout = null;
g.roomTimeout2 = null;
g.pass = null;//var nav_roomPass = null;
g.internal = null;
g.fight = null;
g.map = null;
g.roomAdd = new Array();
g.saveState = null;
g.startDate = new Date(2012, 0, 1, 0, 0, 0, 0);
g.version = 22.0;
g.versionText = "0.22.0 - MAR 2024";
g.newLoad = true;
g.back = false;
g.altview = false;
g.tview = "f";
g.cockDisplay = "c";
g.prevRoom;
g.displaymenu = true;
g.prevview = null;
g.passtime = [0, 10, 11, 15, 16, 29, 50, 51, 52, 55, 100, 225, 450, 475, 500, 650, 750, 901, 902, 408, 478, 479, 480];
g.roomChange = [10, 12, 56, 201, 209, 318, 451, 452, 503, 552, 553, 875, 902, 903];
g.sp = {};
g.roomID = 1;
g.dt = g.startDate;
g.walk = null;
g.statpage = 0;
g.roomMap = new Array();
g.st = new Array();
g.fmap;
g.nextRoomId = 0;
g.pastSaves = new Array();
//g.i = function (name) {
//    var thisIndex = -1;
//    for (i = 0; i < g.st.length; i++) {
//        if (gv.st[i].n === name) {
//            thisIndex = i;
//            type = gv.st[i].t;
//            break;
//        }
//    }
//    return thisIndex;
//};

//gv.set = function (name, amount) {
//    var index = g.i(name);
//    var oldAmount, newAmount;
//    oldAmount = gv.st[index].t;
//    gv.st[index].t = amount;

//    newAmount = amount - oldAmount;
//    g.checkPop(name, newAmount);
//};

//g.get = function (name) {
//    var thisIndex = g.i(name);
//    if(thisIndex > -1)
//        return gv.st[thisIndex].t;
//    console.log("get missing name: " + name);
//    return null;
//};


g.gt = function (first, second) {
    return gv.get(first) > gv.get(second);
};


g.checkPop = function (name, amount) {
    switch (name) {
        case "money":
            if (amount !== 0) {
                if (amount < 0)
                    g.popUpNotice("You spent<br />$" + Math.abs(amount));
                else
                    g.popUpNotice("You received<br />$" + amount);
            }
            break;
        case "jobConstructionPay":
            if (amount < 40)
                g.popUpNotice("You got a<br />$" + amount + " raise");
            break;
        case "hormone":
            if (amount > 0)
                g.popUpNotice("You feel more feminine");
            sstat.makeGraph();
            break;
        case "cheerleader":
            sstat.makeGraph();
            break;
        case "energy":
            if (amount > 0)
                g.popUpNotice("You Gained " + amount.toString() + " Energy");
            cl.energydisplay();
            //sstat.makeGraph();
            break;
        case "arousal": //0-100
            cl.cockDisplay();
            break;
        case "fitness":
            g.popUpNotice("Your fitness " + (amount < 0 ? "Decreased" : "Increased" + "  by ") + Math.abs(amount));
            sstat.makeGraph();
            break;
        case "fitnessLevel":
            g.popUpNotice("Your fitness Level has INCREASED!!");
            sstat.makeGraph();
            break;
        case "leg":
            g.popUpNotice("Your legs are " + (amount < 0 ? "weaker" : "stronger"));
            sstat.makeGraph();
            break;
        case "body":
            g.popUpNotice("Your arms are " + (amount < 0 ? "weaker" : "stronger"));
            sstat.makeGraph();
            break;
        //case "sissy":
        //    if (amount > 0)
        //        g.popUpNotice("Your sissy stats increased. ");
        //    else
        //        g.popUpNotice("You used " + amount + " Sissy Points. ");
        //    break;
        case "fame":
            if (amount > 20)
                g.popUpNotice("You became a lot more famous in this town. ");
            else
                g.popUpNotice("You gained a little notoriety");
            break;
    }
};

g.popUpNotice = function (notice) {
    if ($('#char_alert').is(":visible")) {
        $('#char_alert').append("<hr />" + notice);
    }
    else {
        $('#char_alert').html(notice).fadeIn(1000, function () {
            $('#char_alert').fadeOut(3000);
        });
    }
};

g.popUpNoticeBottom = function (notice) {
    if ($('#char_alert_bottom').is(":visible")) {
        $('#char_alert_bottom').append("<hr />" + notice);
    }
    else {
        $('#char_alert_bottom').html(notice).fadeIn(200, function () {
            setTimeout(function () {
                $('#char_alert_bottom').fadeOut(1000);
            }, 2000 );
            
        });
    }
};

g.gethourdecimal = function () {
    return g.dt.getHours() + (g.dt.getMinutes() / 60);
};

g.rooms = [
    
    { roomID: 0, name: "Map", image: "map/map1.jpg", nightImage: "map/map1_night.jpg", houseID: 0, btn: "roomBtn_000.png" },
    { roomID: 1, name: "Start", image: "1_startScreen/1_startscreen.png", nightImage: "1_startScreen/1_startscreen.png", houseID: -1, btn: "roomBtn_-1.png" },
    { roomID: 2, name: "Help", image: "2_info/2_infoScreen.png", nightImage: "2_info/2_infoScreen.png", houseID: -1, btn: "roomBtn_-1.png" },
    { roomID: 3, name: "Check", image: "2_info/2_infoScreen.png", nightImage: "2_info/2_infoScreen.png", houseID: -1, btn: "roomBtn_-1.png" },

    { roomID: 4, name: "Lola Massage", image: "4_lolamassage/bg.jpg", nightImage: "4_lolamassage/bg_night.jpg", houseID: 16, btn: "roomBtn_7.png" },
    { roomID: 5, name: "Eva Massage", image: "5_evaMassage/bg.jpg", nightImage: "5_evaMassage/bg_night.jpg", houseID: 16, btn: "roomBtn_7.png" },
    { roomID: 6, name: "List", image: "6_computer/bg.jpg", nightImage: "6_computer/bg.jpg", houseID: 16, btn: "roomBtn_7.png" },
    { roomID: 7, name: "My Room ALT", image: "7_mainCharRoomAlt/7_mainCharRoomAlt.jpg", nightImage: "7_mainCharRoomAlt/7_mainCharRoomAlt.jpg", houseID: 16, btn: "roomBtn_7.png" },
    { roomID: 8, name: "My Wardrobe", image: "8_wardrobe/8_wardrobe.jpg", nightImage: "8_wardrobe/8_wardrobe.jpg", houseID: 16, btn: "roomBtn_8.png" },
    { roomID: 9, name: "Computer", image: "9_computer/09_computer.jpg", nightImage: "9_computer/09_computer.jpg", houseID: 16, btn: "roomBtn_9.png" },
    { roomID: 10, name: "My Room", image: "10_mainchar/10_bedroom.png", nightImage: "10_mainchar/10_bedroomNight.png", houseID: 16, btn: "roomBtn_10.png" },
    { roomID: 11, name: "2nd Floor", image: "11_hallway/11_hallway.jpg", nightImage: "11_hallway/11_hallwayNight.jpg", houseID: 16, btn: "roomBtn_11.png" },
    { roomID: 12, name: "Bathroom", image: "12_bathroom/12_bathroom.png", nightImage: "12_bathroom/12_bathroom.png", houseID: 16, btn: "roomBtn_12.png" },
    { roomID: 13, name: "Girl's Room", image: "13_sisterRoom/room.jpg", nightImage: "13_sisterRoom/roomNight.jpg", houseID: 16, btn: "roomBtn_13.png" },
    { roomID: 14, name: "Master Bedroom", image: "14_motherRoom/14_motherRoom.jpg", nightImage: "14_motherRoom/14_motherRoomNight.jpg", houseID: 16, btn: "roomBtn_14.png" },
    { roomID: 15, name: "Kitchen", image: "15_kitchen/day.jpg", nightImage: "15_kitchen/night.jpg", houseID: 16, btn: "roomBtn_15.png" },
    { roomID: 16, name: "1st Floor", image: "16_livingRoom/16_downStairs.jpg", nightImage: "16_livingRoom/16_downStairsNight.jpg", houseID: 16, btn: "roomBtn_16.png" },
    { roomID: 17, name: "Master Closet", image: "17_motherCloset/017_motherCloset.jpg", nightImage: "17_motherCloset/017_motherCloset.jpg", houseID: 16, btn: "roomBtn_17.png" },
    { roomID: 18, name: "Nightstand Drawer", image: "18_bedroomDrawer/018_drawer.jpg", nightImage: "18_bedroomDrawer/018_drawer.jpg", houseID: 16, btn: "roomBtn_18.png" },
    { roomID: 19, name: "On Bed", image: "19_layInBed/bg52.jpg", nightImage: "19_layInBed/bg52.jpg", houseID: 16, btn: "roomBtn_19.png" },
    { roomID: 20, name: "Dishes", image: "20_dishes/20_dishes.png", nightImage: "20_dishes/20_dishes.png", houseID: 16, btn: "roomBtn_20.png" },
    { roomID: 21, name: "Mother's Room Spanking", image: "21_motherSpank/021_spankBG.jpg", nightImage: "21_motherSpank/021_spankBG.jpg", houseID: 16, btn: "roomBtn_21.png" },
    { roomID: 22, name: "Toilet", image: "22_toilet/12.jpg", nightImage: "22_toilet/12.jpg", houseID: 10, btn: "roomBtn_22.png" },
    { roomID: 23, name: "Truth or Dare", image: "24_spinTheBottle/013_spinBG.jpg", nightImage: "24_spinTheBottle/013_spinBG.jpg", houseID: 16, btn: "roomBtn_23.png" },
    { roomID: 24, name: "Spin the bottle", image: "24_spinTheBottle/013_spinBG.jpg", nightImage: "24_spinTheBottle/013_spinBG.jpg", houseID: 16, btn: "roomBtn_24.png" },
    { roomID: 25, name: "Dining Room", image: "25_dining/025_diningRoom.jpg", nightImage: "25_dining/025_diningRoomNight.jpg", houseID: 16, btn: "roomBtn_25.png" },
    { roomID: 26, name: "Living Room", image: "26_livingRoom/dayTable.jpg", nightImage: "26_livingRoom/night.jpg", houseID: 16, btn: "roomBtn_25.png" },
    { roomID: 27, name: "Mirror", image: "12_bathroom/012_brushTeeth.jpg", nightImage: "12_bathroom/012_brushTeeth.jpg", houseID: 16, btn: "roomBtn_25.png" },
    { roomID: 28, name: "Sleep", image: "28_transformation/sleep.jpg", nightImage: "28_transformation/sleep.jpg", houseID: 16, btn: "roomBtn_25.png" },
    { roomID: 29, name: "Back yard", image: "29_backyard/bg.jpg", nightImage: "29_backyard/night.jpg", houseID: 29, btn: "roomBtn_29.png" },
    { roomID: 30, name: "Girl's Room Peak", image: "30_peek/bg.jpg", nightImage: "30_peek/bgnight.jpg", houseID: 29, btn: "roomBtn_29.png" },
    { roomID: 31, name: "Lola's Puter", image: "31_puter/bg.jpg", nightImage: "31_puter/bg.jpg", houseID: 16, btn: "roomBtn_31.png" },

    { roomID: 50, name: "Lobby", image: "50_lobby/50_lobby.jpg", nightImage: "50_lobby/50_lobbynight.jpg", houseID: 50, btn: "roomBtn_50.png" },
    { roomID: 51, name: "Tif's Living Room", image: "51_livingRoom/livingroom.jpg", nightImage: "51_livingRoom/livingroom.jpg", houseID: 50, btn: "roomBtn_51.png" },
    { roomID: 52, name: "Girly Room", image: "52_myroom/52_myroom.jpg", nightImage: "52_myroom/52_myroom_night.jpg", houseID: 50, btn: "roomBtn_52.png" },
    { roomID: 53, name: "Candy's Room", image: "53_candy/53_candyRoom.jpg", nightImage: "53_candy/53_candyRoom_night.jpg", houseID: 50, btn: "roomBtn_53.png" },
    { roomID: 54, name: "Tiffany's Room", image: "54_tif/tif.jpg", nightImage: "54_tif/tifNight.jpg", houseID: 50, btn: "roomBtn_54.png" },
    { roomID: 55, name: "Tif's Hallway", image: "55_hallway/hallway.jpg", nightImage: "55_hallway/hallway.jpg", houseID: 50, btn: "roomBtn_55.png" },
    { roomID: 56, name: "Tif's Bathroom", image: "56_bathroom/bathroom.jpg", nightImage: "56_bathroom/bathroom.jpg", houseID: 50, btn: "roomBtn_56.png" },
    { roomID: 57, name: "Pussy Palace", image: "57_pussyPalace/bg.jpg", nightImage: "57_pussyPalace/bg.jpg", houseID: 50, btn: "roomBtn_57.png" },
    { roomID: 58, name: "Cam Whore", image: "58_camwhore/bg.jpg", nightImage: "58_camwhore/bg.jpg", houseID: 50, btn: "roomBtn_58.png" },

    { roomID: 75, name: "Bimbo's House", image: "75_bimbo/house.jpg", nightImage: "75_bimbo/houseNight.jpg", houseID: 75, btn: "roomBtn_75.png" },
    { roomID: 76, name: "Bimbo's Room", image: "76_bimboRoom/room.jpg", nightImage: "76_bimboRoom/roomNight.jpg", houseID: 75, btn: "roomBtn_76.png" },
    { roomID: 77, name: "Bimbo's Living Room", image: "77_bimboLiving/livingRoom.jpg", nightImage: "77_bimboLiving/livingRoomNight.jpg", houseID: 75, btn: "roomBtn_76.png" },
    { roomID: 78, name: "Laundry Room", image: "78_bimbolaundry/bg.jpg", nightImage: "78_bimbolaundry/bg.jpg", houseID: 75, btn: "roomBtn_78.png" },

    { roomID: 100, name: "Construction Entrance", image: "100_construction/100_site.jpg", nightImage: "100_construction/100_bg_night.jpg", houseID: 100, btn: "roomBtn_100.png" },
    { roomID: 101, name: "Front Office", image: "101_constFrontOffice/101_frontoffice.jpg", nightImage: "101_constFrontOffice/101_frontoffice.jpg", houseID: 100, btn: "roomBtn_101.png" },
    { roomID: 102, name: "Boss's Office", image: "102_constBoss/102_boss.jpg", nightImage: "102_constBoss/102_boss.jpg", houseID: 100, btn: "roomBtn_102.png" },
    { roomID: 103, name: "Work", image: "103_constSite/103_sweep.jpg", nightImage: "103_constSite/103_sweepnight.jpg", houseID: 100, btn: "roomBtn_103.png" },

    { roomID: 125, name: "Jimmy's House", image: "125_poker/basement.jpg", nightImage: "125_poker/basement_night.jpg", houseID: 125, btn: "roomBtn_125.png" },

    { roomID: 150, name: "Jones Home", image: "150_jones/frontdoor.jpg", nightImage: "150_jones/frontdoorNight.jpg", houseID: 150, btn: "roomBtn_125.png" },
    { roomID: 151, name: "Main", image: "151_jones/main.jpg", nightImage: "151_jones/main.jpg", houseID: 150, btn: "roomBtn_125.png" },
    { roomID: 152, name: "Mansion", image: "152_slave/entrance.jpg", nightImage: "152_slave/entrance.jpg", houseID: 150, btn: "roomBtn_125.png" },

    { roomID: 173, name: "Trash Job", image: "173_trash/bg.jpg", nightImage: "173_trash/bg.jpg", houseID: 203, btn: "roomBtn_200.png" },
    { roomID: 174, name: "My Room", image: "175_anal/anal0.jpg", nightImage: "175_anal/anal0.jpg", houseID: 203, btn: "roomBtn_200.png" },
    { roomID: 175, name: "Anal", image: "175_anal/anal0.jpg", nightImage: "175_anal/anal0.jpg", houseID: 203, btn: "roomBtn_200.png" },
    { roomID: 176, name: "Oral", image: "176_oral/oral0.jpg", nightImage: "176_oral/oral0.jpg", houseID: 203, btn: "roomBtn_200.png" },
    { roomID: 177, name: "Chastity", image: "177_chastity/bg.jpg", nightImage: "177_chastity/bg.jpg", houseID: 203, btn: "roomBtn_200.png" },
    { roomID: 178, name: "Cum", image: "177_chastity/bg.jpg", nightImage: "177_chastity/bg.jpg", houseID: 203, btn: "roomBtn_200.png" },
    { roomID: 180, name: "Feminity", image: "180_ballroom/bg.jpg", nightImage: "180_ballroom/bg.jpg", houseID: 203, btn: "roomBtn_200.png" },
    { roomID: 181, name: "Black Room", image: "181_black/bg.jpg", nightImage: "181_black/bg.jpg", houseID: 203, btn: "roomBtn_208.png" },
    { roomID: 182, name: "Test 1", image: "181_black/bg.jpg", nightImage: "181_black/bg.jpg", houseID: 203, btn: "roomBtn_208.png" },
    { roomID: 195, name: "Skill", image: "200_frontOffice/bg.jpg", nightImage: "200_frontOffice/bg.jpg", houseID: 203, btn: "roomBtn_200.png" },
    { roomID: 196, name: "Pay Day", image: "200_frontOffice/bg.jpg", nightImage: "200_frontOffice/bg.jpg", houseID: 203, btn: "roomBtn_200.png" },
    { roomID: 197, name: "Sub", image: "200_frontOffice/bg.jpg", nightImage: "200_frontOffice/bg.jpg", houseID: 203, btn: "roomBtn_200.png" },
    { roomID: 198, name: "PI Training", image: "198_pi/bg.jpg", nightImage: "198_pi/bg.jpg", houseID: 203, btn: "roomBtn_200.png" },
    { roomID: 199, name: "Workout", image: "217_punish/punish1.jpg", nightImage: "217_punish/punish1.jpg", houseID: 203, btn: "roomBtn_200.png" },
    { roomID: 200, name: "Missy PI Entrace", image: "200_frontOffice/200_frontOffice.jpg", nightImage: "200_frontOffice/200_frontOffice.jpg", houseID: 203, btn: "roomBtn_200.png" },
    { roomID: 201, name: "Missy's Bathroom", image: "201_bathroom/bg0.jpg", nightImage: "201_bathroom/bg0.jpg", houseID: 203, btn: "roomBtn_201.png" },
    { roomID: 202, name: "Desk Side", image: "202_sideDesk/202_sideDesk.jpg", nightImage: "202_sideDesk/202_sideDesk.jpg", houseID: 203, btn: "roomBtn_202.png" },
    { roomID: 203, name: "PI Entrance", image: "203_entrance/203_enter.jpg", nightImage: "203_entrance/203_enter.jpg", houseID: 203, btn: "roomBtn_203.png" },
    { roomID: 204, name: "Card Game", image: "204_cardgame/402_bg.jpg", nightImage: "204_cardgame/402_bg.jpg", houseID: 203, btn: "roomBtn_204.png" },
    { roomID: 205, name: "Chastity", image: "200_frontOffice/bg.jpg", nightImage: "200_frontOffice/bg.jpg", houseID: 203, btn: "roomBtn_204.png" },
    { roomID: 206, name: "Questions", image: "206_questions/white.jpg", nightImage: "206_questions/white.jpg", houseID: 203, btn: "roomBtn_200.png" },
    { roomID: 207, name: "Foyer", image: "207_door/bg.jpg", nightImage: "207_door/bg_night.jpg", houseID: 203, btn: "roomBtn_207.png" },
    { roomID: 208, name: "Red Room", image: "208_red/red.jpg", nightImage: "208_red/red.jpg", houseID: 203, btn: "roomBtn_208.png" },
    { roomID: 209, name: "Basement", image: "209_classroom/bg.jpg", nightImage: "209_classroom/bg.jpg", houseID: 203, btn: "roomBtn_208.png" },
    { roomID: 210, name: "Class Selection", image: "210_classSelection/bg.jpg", nightImage: "210_classSelection/bg.jpg", houseID: 203, btn: "roomBtn_210.png" },
    { roomID: 211, name: "Waiting Room", image: "211_meeting/bg.jpg", nightImage: "211_meeting/bg.jpg", houseID: 203, btn: "roomBtn_211.png" },
    { roomID: 212, name: "Gloryhole", image: "212_gloryhole/bg.jpg", nightImage: "212_gloryhole/bg.jpg", houseID: 203, btn: "roomBtn_212.png" },
    { roomID: 213, name: "Lounge", image: "213_pink/bg.jpg", nightImage: "213_pink/bg.jpg", houseID: 203, btn: "roomBtn_213.png" },
    { roomID: 214, name: "Game Room", image: "214_pink/game.jpg", nightImage: "214_pink/game.jpg", houseID: 203, btn: "roomBtn_214.png" },
    { roomID: 215, name: "Private Room", image: "215_pink/private1.jpg", nightImage: "215_pink/private1.jpg", houseID: 203, btn: "roomBtn_215.png" },
    { roomID: 216, name: "Glory Hole", image: "216_pink/bg.jpg", nightImage: "216_pink/bg.jpg", houseID: 203, btn: "roomBtn_216.png" },
    { roomID: 217, name: "Punishment", image: "217_punish/punish1.jpg", nightImage: "217_punish/punish1.jpg", houseID: 203, btn: "roomBtn_217.png" },
    { roomID: 218, name: "masturbate", image: "218_masturbate/punish1.jpg", nightImage: "217_punish/punish1.jpg", houseID: 203, btn: "roomBtn_217.png" },
    { roomID: 219, name: "Data Entry", image: "219_dataEntry/bg.jpg", nightImage: "219_dataEntry/bg.jpg", houseID: 203, btn: "roomBtn_219.png" },
    { roomID: 220, name: "Clean Bathroom", image: "201_bathroom/bg0.jpg", nightImage: "201_bathroom/bg0.jpg", houseID: 203, btn: "roomBtn_201.png" },
    { roomID: 221, name: "Reception", image: "221_recip/bg.jpg", nightImage: "221_recip/bg.jpg", houseID: 203, btn: "roomBtn_203.png" },
    { roomID: 222, name: "Errands", image: "200_frontOffice/bg.jpg", nightImage: "200_frontOffice/bg.jpg", houseID: 203, btn: "roomBtn_200.png" },
    { roomID: 223, name: "Cross Dress", image: "200_frontOffice/bg.jpg", nightImage: "200_frontOffice/bg.jpg", houseID: 203, btn: "roomBtn_200.png" },
    { roomID: 224, name: "Lunch", image: "203_entrance/default.jpg", nightImage: "203_entrance/default.jpg", houseID: 203, btn: "roomBtn_219.png" },
    

    { roomID: 225, name: "Alley", image: "225_sewer/day.jpg", nightImage: "225_sewer/night.jpg", houseID: 225, btn: "roomBtn_225.png" },
    { roomID: 226, name: "Sewer", image: "2_info/2_infoScreen.png", nightImage: "2_info/2_infoScreen.png", houseID: 225, btn: "roomBtn_225.png" },
    { roomID: 227, name: "Fight", image: "227_fight/welcome.jpg", nightImage: "227_fight/welcome.jpg", houseID: 225, btn: "roomBtn_225.png" },
    { roomID: 228, name: "Sewer Entrace", image: "225_sewer/sewer.jpg", nightImage: "225_sewer/sewer.jpg", houseID: 225, btn: "roomBtn_225.png" },


    { roomID: 250, name: "Naked Beaver Diner", image: "250_beaver/250_beaver.jpg", nightImage: "250_beaver/250_beaver.jpg", houseID: 250, btn: "roomBtn_250.png" },
    { roomID: 251, name: "Back Office", image: "251_office/office.jpg", nightImage: "251_office/office.jpg", houseID: 250, btn: "roomBtn_251.png" },

    { roomID: 300, name: "First Floor", image: "300_apartment/bg.jpg", nightImage: "300_apartment/bg.jpg", houseID: 300, btn: "roomBtn_300.png" },
    { roomID: 301, name: "Living Room", image: "301_living/bg.jpg", nightImage: "301_living/bg.jpg", houseID: 300, btn: "roomBtn_301.png" },
    { roomID: 303, name: "Fourth Floor", image: "303_secondFloor/bg.jpg", nightImage: "303_secondFloor/bg.jpg", houseID: 300, btn: "roomBtn_303.png" },
    { roomID: 304, name: "Room 302", image: "304_room202/livingroom.jpg", nightImage: "304_room202/livingroom.jpg", houseID: 300, btn: "roomBtn_303.png" },

    { roomID: 310, name: "Second Floor", image: "310_secondfloor/bg.jpg", nightImage: "310_secondfloor/bg.jpg", houseID: 300, btn: "roomBtn_303.png" },
    { roomID: 314, name: "Third Floor", image: "314_thirdFloor/bg.jpg", nightImage: "314_thirdFloor/bg.jpg", houseID: 300, btn: "roomBtn_303.png" },

    { roomID: 315, name: "Girlfriend's House", image: "315_girlfriend/bg.jpg", nightImage: "315_girlfriend/bg_night.jpg", houseID: 300, btn: "roomBtn_315.png" },
    { roomID: 316, name: "Living Room", image: "316_livingroom/bg.jpg", nightImage: "316_livingroom/bg.jpg", houseID: 300, btn: "roomBtn_316.png" },
    { roomID: 317, name: "Kitchen", image: "317_janiceKitchen/kitchen.jpg", nightImage: "317_janiceKitchen/kitchen.jpg", houseID: 300, btn: "roomBtn_317.png" },
    { roomID: 318, name: "Bedroom", image: "318_janiceBedroom/bg.jpg", nightImage: "318_janiceBedroom/bg.jpg", houseID: 300, btn: "roomBtn_318.png" },
    { roomID: 319, name: "Backyard", image: "319_backyard/bg.jpg", nightImage: "319_backyard/bgnight.jpg", houseID: 300, btn: "roomBtn_319.png" },


    { roomID: 325, name: "Farm", image: "325_farm/bg.jpg", nightImage: "325_farm/bg_night.jpg", houseID: 325, btn: "roomBtn_325.png" },
    { roomID: 326, name: "Stable", image: "326_stable/bg1.jpg", nightImage: "326_stable/bg1.jpg", houseID: 325, btn: "roomBtn_326.png" },
    { roomID: 327, name: "milking", image: "327_milking/milkparlor.jpg", nightImage: "327_milking/milkparlor.jpg", houseID: 325, btn: "roomBtn_327.png" },

    { roomID: 350, name: "Sperm Bank", image: "350_spermBank/350_spermbank.jpg", nightImage: "350_spermBank/350_spermbank.jpg", houseID: 350, btn: "roomBtn_350.png" },
    { roomID: 351, name: "Mu First Sissygasm", image: "351_spermJackoff/wallBg.jpg", nightImage: "351_spermJackoff/wallBg.jpg", houseID: 350, btn: "roomBtn_350.png" },
    { roomID: 352, name: "Jack 'Em", image: "352_jackoff/bg.jpg", nightImage: "352_jackoff/bg.jpg", houseID: 350, btn: "roomBtn_352.png" },
    { roomID: 353, name: "Mascot", image: "353_mascot/bg.jpg", nightImage: "353_mascot/bg.jpg", houseID: 350, btn: "roomBtn_352.png" },
    { roomID: 354, name: "Break Room", image: "352_jackoff/waitroom.jpg", nightImage: "352_jackoff/waitroom.jpg", houseID: 350, btn: "roomBtn_352.png" },

    { roomID: 375, name: "Mascot", image: "375_cop/bg.jpg", nightImage: "375_cop/bg.jpg", houseID: 375, btn: "roomBtn_375.png" },

    { roomID: 400, name: "Mall", image: "400_mall/400_mall_bg.jpg", nightImage: "400_mall/400_mall_bg.jpg", houseID: 400, btn: "roomBtn_400.png" },
    { roomID: 401, name: "Purchase", image: "401_purchase/401_buy.jpg", nightImage: "401_purchase/401_buy.jpg", houseID: 400, btn: "roomBtn_401.png" },
    { roomID: 402, name: "Popular Girl", image: "402_mens/interior.jpg", nightImage: "402_mens/interior.jpg", houseID: 400, btn: "roomBtn_402.png" },
    { roomID: 403, name: "Saucy", image: "403_saucy/403_saucy.jpg", nightImage: "403_saucy/403_saucy.jpg", houseID: 400, btn: "roomBtn_402.png" },
    { roomID: 404, name: "Spanky's", image: "404_spankys/404_bodega.jpg", nightImage: "404_spankys/404_bodega.jpg", houseID: 404, btn: "roomBtn_404.png" },
    { roomID: 405, name: "Reds", image: "405_reds/405_stylist.jpg", nightImage: "405_reds/405_stylist.jpg", houseID: 400, btn: "roomBtn_402.png" },
    { roomID: 406, name: "I Like Your Eyes", image: "406_eyes/bg.jpg", nightImage: "406_eyes/bg.jpg", houseID: 400, btn: "roomBtn_402.png" },
    { roomID: 407, name: "Makeup", image: "407_makeup/bg.jpg", nightImage: "407_makeup/bg.jpg", houseID: 400, btn: "roomBtn_402.png" },
    { roomID: 408, name: "Stormy's", image: "408_tattoo/bg.jpg", nightImage: "408_tattoo/bgNight.jpg", houseID: 400, btn: "roomBtn_408.png" },

    { roomID: 425, name: "Jail", image: "425_Jail/jail.jpg", nightImage: "425_Jail/jail.jpg", houseID: 225, btn: "roomBtn_402.png" },

    { roomID: 450, name: "Park Entrance", image: "450_park/450_bg.jpg", nightImage: "450_park/450_bg_night.jpg", houseID: 450, btn: "roomBtn_450.png" },
    { roomID: 451, name: "Men's Room", image: "451_parkMensRoom/mensroom.jpg", nightImage: "451_parkMensRoom/mensroom.jpg", houseID: 450, btn: "roomBtn_451.png" },
    { roomID: 452, name: "Woman's Room", image: "452_parkWomansRoom/bathroom.jpg", nightImage: "452_parkWomansRoom/bathroom.jpg", houseID: 450, btn: "roomBtn_452.png" },
    { roomID: 453, name: "Stall", image: "453_stall/453_stall.png", houseID: 450, btn: "roomBtn_453.png" },
    { roomID: 454, name: "Glory Hole", image: "454_gHole/454_gHole.png", nightImage: "454_gHole/454_gHole.png", houseID: 450, btn: "roomBtn_454.png" },
    { roomID: 456, name: "Park Bench", image: "456_bench/456_bg.jpg", nightImage: "456_bench/456_bg_night.jpg", houseID: 450, btn: "roomBtn_454.png" },
    { roomID: 460, name: "Forest Path", image: "460_parkRun/path1.jpg", nightImage: "460_parkRun/path1Night.jpg", houseID: 450, btn: "roomBtn_460.png" },
    { roomID: 461, name: "Run", image: "461_run/path2.jpg", nightImage: "461_run/path2Night.jpg", houseID: 450, btn: "roomBtn_461.png" },
    { roomID: 475, name: "Fight", image: "475_fight/475_path_1.jpg", nightImage: "475_fight/475_path_1.jpg", houseID: 450, btn: "roomBtn_460.png" },
    { roomID: 476, name: "Wander", image: "475_fight/475_fightScene0.png", nightImage: "475_fight/475_fightScene0.png", houseID: 450, btn: "roomBtn_460.png" },
    { roomID: 477, name: "Cottage", image: "477_cottage/bg.jpg", nightImage: "477_cottage/bg.jpg", houseID: 450, btn: "roomBtn_477.png" },


    { roomID: 478, name: "Cave Kitchen", image: "478_kitchen/bg.jpg", nightImage: "478_kitchen/bg.jpg", houseID: 480, btn: "roomBtn_478.png" },
    { roomID: 479, name: "Cave Hall", image: "479_hall/bg.jpg", nightImage: "479_hall/bg.jpg", houseID: 480, btn: "roomBtn_479.png" },
    { roomID: 480, name: "Cave Throne", image: "480_throne/bg.jpg", nightImage: "480_throne/bg.jpg", houseID: 480, btn: "roomBtn_480.png" },
    { roomID: 481, name: "Cave Bedroom", image: "481_bedroom/bg.jpg", nightImage: "481_bedroom/bg.jpg", houseID: 480, btn: "roomBtn_481.png" },

    { roomID: 500, name: "Zoey's House", image: "500_jada/500_zoeyHouseDay.jpg", nightImage: "500_jada/500_zoeyHouseNight.jpg", houseID: 500, btn: "roomBtn_500.png" },
    { roomID: 501, name: "Zoey's Living Room", image: "501_jadaGame/501_game.jpg", nightImage: "501_jadaGame/501_game.jpg", houseID: 500, btn: "roomBtn_501.png" },
    { roomID: 502, name: "Zoey's Bedroom", image: "502_bedroom/bedroom.jpg", nightImage: "502_bedroom/bedroomnight.jpg", houseID: 500, btn: "roomBtn_501.png" },
    { roomID: 503, name: "Zoey's Bathroom", image: "503_bathroom/bathroom.jpg", nightImage: "503_bathroom/bathroom.jpg", houseID: 500, btn: "roomBtn_503.png" },

    { roomID: 525, name: "Zoey's Bar", image: "525_entrance/bg.jpg", nightImage: "525_entrance/bgNight.jpg", houseID: 525, btn: "roomBtn_500.png" },
    { roomID: 526, name: "Inside Bar", image: "526_bar/bg.jpg", nightImage: "526_bar/bg.jpg", houseID: 525, btn: "roomBtn_526.png" },
    { roomID: 527, name: "Toilet", image: "527_bathroom/bg.jpg", nightImage: "527_bathroom/bg.jpg", houseID: 525, btn: "roomBtn_527.png" },

    { roomID: 535, name: "Keaton", image: "535_keaton/bg.jpg", nightImage: "535_keaton/bg.jpg", houseID: 525, btn: "535_keaton.png" },

    { roomID: 550, name: "Gym Front Desm", image: "550_gymFront/entrance.jpg", nightImage: "550_gymFront/entrance.jpg", houseID: 550, btn: "roomBtn_550.png" },
    { roomID: 551, name: "Gym", image: "551_gymInside/551_gym.jpg", nightImage: "551_gymInside/551_gym.jpg", houseID: 550, btn: "roomBtn_551.png" },
    { roomID: 552, name: "Boys Locker", image: "552_boy/lockeroom.jpg", nightImage: "552_boy/lockeroom.jpg", houseID: 550, btn: "roomBtn_552.png" },
    { roomID: 553, name: "Girls Locker", image: "553_girl/553_girl.jpg", nightImage: "552_running/553_girl.jpg", houseID: 550, btn: "roomBtn_553.png" },
    { roomID: 554, name: "Gym Shower", image: "554_shower/552_shower.jpg", nightImage: "554_shower/552_shower.jpg", houseID: 550, btn: "roomBtn_554.png" },
    { roomID: 555, name: "Back Gym", image: "555_backgym/gym.jpg", nightImage: "555_backgym/gym.jpg", houseID: 550, btn: "roomBtn_555.png" },
    { roomID: 556, name: "Spar Training", image: "555_backgym/ring.jpg", nightImage: "555_backgym/ring.jpg", houseID: 550, btn: "roomBtn_555.png" },

    { roomID: 575, name: "Sausage", image: "575_fastfood/bg.jpg", nightImage: "575_fastfood/bg.jpg", houseID: 575, btn: "roomBtn_575.png" },


    { roomID: 600, name: "For Testing", image: "map/map.png", nightImage: "map/map.png", houseID: 600, btn: "roomBtn_600.png" },

    { roomID: 650, name: "Toys 'n Us", image: "650_toyStore/650_front.jpg", nightImage: "650_toyStore/650_front.jpg", houseID: 650, btn: "roomBtn_650.png" },
    { roomID: 651, name: "T'n U Hallway", image: "651_wackHallway/651_hallway.jpg", nightImage: "651_wackHallway/651_hallway.jpg", houseID: 650, btn: "roomBtn_651.png" },
    { roomID: 661, name: "Peep Hole", image: "661_peephole/661_backroom.jpg", nightImage: "661_peephole/661_backroom.jpg", houseID: 650, btn: "roomBtn_661.png" },

    { roomID: 700, name: "Waiting Room", image: "700_waitingroom/waitingroom.jpg", nightImage: "700_waitingroom/night.jpg", houseID: 700, btn: "roomBtn_700.png" },
    { roomID: 701, name: "Hospital Room", image: "701_hospitalroom/wake0.jpg", nightImage: "701_hospitalroom/wake0.jpg", houseID: 700, btn: "roomBtn_701.png" },

    { roomID: 725, name: "Bar", image: "725_club/club.jpg", nightImage: "725_club/club.jpg", houseID: 725, btn: "roomBtn_725.png" },
    { roomID: 726, name: "Dance Floor", image: "726_dance/dance.jpg", nightImage: "726_dance/dance.jpg", houseID: 725, btn: "roomBtn_726.png" },
    { roomID: 727, name: "Unisex Bathroom", image: "727_bathroom/bg.jpg", nightImage: "727_bathroom/bg.jpg", houseID: 725, btn: "roomBtn_726.png" },

    { roomID: 750, name: "Homeless Camp", image: "750_homeless/bg.jpg", nightImage: "750_homeless/bgNight.jpg", houseID: 750, btn: "roomBtn_750.png" },
    { roomID: 751, name: "Fortune Teller", image: "751_crystal/bg.jpg", nightImage: "751_crystal/bg.jpg", houseID: 750, btn: "roomBtn_751.png" },
    { roomID: 752, name: "Dirty Whore's Tent", image: "752_whore/bg.jpg", nightImage: "752_whore/bg.jpg", houseID: 750, btn: "roomBtn_752.png" },

    { roomID: 775, name: "Church", image: "775_church/boy.jpg", nightImage: "775_church/boy.jpg", houseID: 775, btn: "roomBtn_10.png" },

    { roomID: 800, name: "Ralph's House", image: "800_ralph/bg.jpg", nightImage: "800_ralph/bg_night.jpg", houseID: 800, btn: "roomBtn_800.png" },

    { roomID: 825, name: "Dirty Lot", image: "825_lot/bg.jpg", nightImage: "825_lot/bg_night.jpg", houseID: 825, btn: "roomBtn_825.png" },

    { roomID: 875, name: "Football field", image: "875_entrance/bg.jpg", nightImage: "875_entrance/bg_night.jpg", houseID: 875, btn: "roomBtn_875.png" },
    { roomID: 876, name: "Gym", image: "876_gym/bg.jpg", nightImage: "876_gym/bg.jpg", houseID: 875, btn: "roomBtn_876.png" },

    { roomID: 900, name: "College Entrance", image: "900_college/bg.jpg", nightImage: "900_college/bg_night.jpg", houseID: 900, btn: "roomBtn_900.png" },
    { roomID: 901, name: "Pool", image: "901_pool/pool.jpg", nightImage: "901_pool/pool.jpg", houseID: 901, btn: "roomBtn_901.png" },
    { roomID: 902, name: "Girl's Swim Locker", image: "902_girl/bg.jpg", nightImage: "902_girl/bg.jpg", houseID: 901, btn: "roomBtn_902.png" },
    { roomID: 903, name: "Boy's Swim Locker", image: "903_boy/bg.jpg", nightImage: "903_boy/bg.jpg", houseID: 901, btn: "roomBtn_903.png" },
    { roomID: 904, name: "Test", image: "904_test/t1.jpg", nightImage: "904_test/t1.jpg", houseID: 901, btn: "roomBtn_903.png" },

    { roomID: 910, name: "Licenses", image: "910_gov/bg.jpg", nightImage: "910_gov/910_gov.png", houseID: 911, btn: "roomBtn_910.png" },
    { roomID: 911, name: "City Hall", image: "911_cityhall/bg.jpg", nightImage: "911_cityhall/bg.jpg", houseID: 910, btn: "roomBtn_911.png" },

    { roomID: 950, name: "Cell", image: "950_cell/cell.jpg", nightImage: "950_cell/cell.png", houseID: 950, btn: "bg.jpg" },
    { roomID: 951, name: "Box", image: "951_box/box.jpg", nightImage: "951_box/box.jpg", houseID: 950, btn: "bg.jpg" },
    { roomID: 952, name: "Hallway", image: "952_hallway/hallway.jpg", nightImage: "952_hallway/hallway.jpg", houseID: 950, btn: "bg.jpg" },
    { roomID: 953, name: "Chaple", image: "953_chaple/bg.jpg", nightImage: "953_chaple/bg.jpg", houseID: 950, btn: "roomBtn_953.png" },
    { roomID: 954, name: "Torture Room", image: "954_torture/bg.jpg", nightImage: "954_torture/bg.jpg", houseID: 950, btn: "bg.jpg" },

    { roomID: 999, name: "Quick Fight", image: "954_torture/bg.jpg", nightImage: "954_torture/bg.jpg", houseID: 999, btn: "bg.jpg" },

    //{ roomID: , name: "", image: "", houseID: , main: false, btn: "roomBtn_.png" }
];

g.fr = function(roomID){
    var i;
    for (i = 0; i < g.rooms.length; i++) {
        if (g.rooms[i].roomID === roomID)
            return g.rooms[i];
    }
    return g.rooms[8];
};

g.roomMapInit = function () {

    g.roomMap = [
        { roomID: 16, display: "My House", access: true, darkAccess: true, left: 1425, top: 399, width: 102, height: 146, img: "map/10.png", night: "map/10_night.png", map: 1 },
        { roomID: 29, display: "Back Yard", access: true, darkAccess: true, left: 1353, top: 393, width: 70, height: 158, img: "map/29.png", night: "map/29_night.png", map: 1 },
        { roomID: 50, display: "Tif's Place", access: true, darkAccess: true, left: 1665, top: 559, width: 218, height: 319, img: "map/50.png", night: "map/50_night.png", map: 1 },
        { roomID: 75, display: "Bimbo's Place", access: true, darkAccess: true, left: 895, top: 407, width: 102, height: 122, img: "map/75.png", night: "map/75_night.png", map: 1 },
        { roomID: 100, display: "Construction", access: false, darkAccess: false, left: 1458, top: 0, width: 323, height: 282, img: "map/100.png", night: "map/100_night.png", map: 2 },
        //{ roomID: 125, display: "Jimmy's", access: true, darkAccess: true, left: 714, top: 435, width: 60, height: 97, img: "map/125.png", night: "map/125_night.png", map: 1 },
        //{ roomID: 150, display: "Mr. Jones", access: false, darkAccess: false, left: 1643, top: 20, width: 222, height: 211, img: "map/150.png", night: "map/150_night.png", map: 1 },
        { roomID: 203, display: "Missy's", access: false, darkAccess: false, left: 1456, top: 263, width: 207, height: 340, img: "map/203.png", night: "map/203_night.png", map: 2 },
        { roomID: 225, display: "Alley", access: true, darkAccess: true, left: 765, top: 760, width: 78, height: 190, img: "map/225.png", night: "map/225_night.png", map: 2 },
        { roomID: 250, display: "Naked Beaver Diner", access: true, darkAccess: false, left: 24, top: 304, width: 224, height: 160, img: "map/250.png", night: "map/250_night.png", map: 2 },
        { roomID: 300, display: "Apartment", access: true, darkAccess: true, left: 836, top: 662, width: 303, height: 309, img: "map/300.png", night: "map/300_night.png", map: 2 },
        { roomID: 315, display: "GF's House", access: true, darkAccess: true, left: 222, top: 431, width: 173, height: 145, img: "map/315.png", night: "map/315_night.png", map: 1 },

        { roomID: 325, display: "Farm", access: true, darkAccess: true, left: 646, top: 419, width: 351, height: 195, img: "map/325.png", night: "map/325_night.png", map: 0 },
        { roomID: 350, display: "Sperm Bank", access: true, darkAccess: false, left: 74, top: 672, width: 291, height: 207, img: "map/350.png", night: "map/350_night.png", map: 2 },
        { roomID: 375, display: "Cop Shop", access: true, darkAccess: true, left: 1064, top: 32, width: 246, height: 202, img: "map/375.png", night: "map/375_night.png", map: 2 },
        { roomID: 400, display: "Mall", access: true, darkAccess: false, left: 530, top: 0, width: 308, height: 212, img: "map/400.png", night: "map/400_night.png", map: 2 },
        { roomID: 404, display: "Spankey's", access: true, darkAccess: true, left: 530, top: 375, width: 93, height: 126, img: "map/404.png", night: "map/404_night.png", map: 1 },
        { roomID: 405, display: "Hair Cut", access: true, darkAccess: false, left: 230, top: 469, width: 163, height: 129, img: "map/405.png", night: "map/405_night.png", map: 2 },
        { roomID: 406, display: "Contacts", access: true, darkAccess: false, left: 962, top: 408, width: 88, height: 95, img: "map/406.png", night: "map/406_night.png", map: 2 },
        //{ roomID: 407, display: "Makeup", access: false, darkAccess: false, left: 257, top: 209, width: 129, height: 115, img: "map/407.png", night: "map/407_night.png", map: 2 },
        //{ roomID: 408, display: "Stormy's", access: true, darkAccess: true, left: 1056, top: 31, width: 316, height: 282, img: "map/408.png", night: "map/408_night.png", map: 1 },
        { roomID: 450, display: "Park", access: true, darkAccess: true, left: 1378, top: 483, width: 196, height: 211, img: "map/450.png", night: "map/450_night.png", map: 0 },
        //{ roomID: 500, display: "Zoey's", access: true, darkAccess: false, left: 781, top: 51, width: 197, height: 142, img: "map/500.png", night: "map/500_night.png", map: 1 },
        //{ roomID: 525, display: "Zoey's Bar", access: true, darkAccess: true, left: 1162, top: 693, width: 152, height: 276, img: "map/525.png", night: "map/525_night.png", map: 2 },
        //{ roomID: 535, display: "Keaton's Home", access: true, darkAccess: false, left: 1338, top: 151, width: 102, height: 90, img: "map/535.png", night: "map/535_night.png", map: 1 },
        { roomID: 550, display: "Gym", access: true, darkAccess: false, left: 1072, top: 370, width: 238, height: 179, img: "map/550.png", night: "map/550_night.png", map: 2 },
        { roomID: 575, display: "Sausage", access: true, darkAccess: false, left: 589, top: 114, width: 93, height: 97, img: "map/575.png", night: "map/575_night.png", map: 1 },
        { roomID: 650, display: "Toy's In Us", access: true, darkAccess: true, left: 1459, top: 712, width: 222, height: 215, img: "map/650.png", night: "map/650_night.png", map: 2 },
        { roomID: 700, display: "Hospital", access: true, darkAccess: true, left: 506, top: 246, width: 392, height: 282, img: "map/700.png", night: "map/700_night.png", map: 2 },
        { roomID: 725, display: "Discotheque", access: false, darkAccess: true, left: 531, top: 688, width: 206, height: 194, img: "map/725.png", night: "map/725_night.png", map: 2 },
        { roomID: 750, display: "Homeless Camp", access: true, darkAccess: true, left: 1663, top: 391, width: 162, height: 208, img: "map/750.png", night: "map/750_night.png", map: 2 },
        { roomID: 800, display: "Ralph's House", access: true, darkAccess: true, left: 1633, top: 414, width: 103, height: 137, img: "map/800.png", night: "map/800_night.png", map: 1 },
        //{ roomID: 825, display: "Dirty Lot", access: true, darkAccess: true, left: 1697, top: 737, width: 223, height: 233, img: "map/825.png", night: "map/825_night.png", map: 2 },
        //{ roomID: 875, display: "Football Field", access: true, darkAccess: true, left: 539, top: 683, width: 140, height: 258, img: "map/875.png", night: "map/875_night.png", map: 1 },
        //{ roomID: 900, display: "University", access: true, darkAccess: true, left: 879, top: 630, width: 225, height: 235, img: "map/900.png", night: "map/900_night.png", map: 1 },
        //{ roomID: 901, display: "Pool", access: true, darkAccess: false, left: 714, top: 675, width: 142, height: 86, img: "map/901.png", night: "map/901_night.png", map: 1 },
        { roomID: 911, display: "City Hall", access: true, darkAccess: false, left: 1260, top: 646, width: 253, height: 162, img: "map/910.png", night: "map/910_night.png", map: 1 },

        //{ roomID: 2003, display: "[In Dev]", access: false, darkAccess: false, left: 1144, top: 399, width: 135, height: 113, img: "map/2003.png", night: "map/2003_night.png", map: 1 },
        //{ roomID: 100, access: false, left: 500, top: 300, width: 300, height: 150, activeImg: "map/constructionSite.png", inactiveImg: "map/inactive.png" },
    ];
}


//FUNCTIONS==========================================================================================================================================================================

g.roomMapAccess = function (roomID, access, darkAccess) {
    var i;
    for (i = 0; i < g.roomMap.length; i++) {
        if (g.roomMap[i].roomID === roomID) {
            g.roomMap[i].access = access;
            g.roomMap[i].darkAccess = darkAccess;
        }
    }
};

g.roomMapAccessAll = function () {
    for (i = 0; i < g.roomMap.length; i++) {
        g.roomMap[i].access = true;
        g.roomMap[i].darkAccess = true;
    }
}

g.hasAccess = function (roomID) {
    var retVal = { access: false, darkAccess: false };
    var i;
    for (i = 0; i < g.roomMap.length; i++) {
        if (g.roomMap[i].roomID === roomID) {
            retVal.access = g.roomMap[i].access;
            retVal.darkAccess = g.roomMap[i].darkAccess;
        }
    }
    return retVal;
};

g.getRoomMap = function (roomId) {
    for (i = 0; i < g.roomMap.length; i++) {
        if (g.roomMap[i].roomID === roomId) {
            return g.roomMap[i];
        }
    }
    return null;
};

g.setRatio = function () {
    var width = $(window).width();
    var height = $(window).height();
    g.ratio = width / height > 16 / 9 ? height / 1080 : width / 1920;
    var btnWidth = 300 * g.ratio;
    var btnHeight = 620 * g.ratio;
    $('.char-container').css({ "width": btnWidth, "height": btnHeight });
    $('#char-bg').css({ "width": btnWidth, "height": btnHeight });
};

g.error = function (id, details) {
    console.log("id: " + id + " -- " + details);
};

g.dow = function (dt) {
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    return weekday[dt.getDay()];
};

g.hourBetween = function (startTime, endTime) {
    return g.dt.getHours() >= startTime && g.dt.getHours() <= endTime;
};

g.diffDatesByDays = function (startDate, endDate) {
    return Math.floor((startDate - endDate) / (1000 * 60 * 60 * 24));
};

g.diffDateByMinutes = function (startDate, endDate) {
    return Math.floor((startDate - endDate) / (1000 * 60));
};

g.room = function (roomID) {
    return "room" + roomID.toString();
};

g.getRooms = function (roomID) {
    for (i = 0; i < g.rooms.length; i++)
        if (g.rooms[i].roomID === roomID)
            return g.rooms[i];
    return null;
}

Number.prototype.between = function (a, b) {
    var min = Math.min.apply(Math, [a, b]),
      max = Math.max.apply(Math, [a, b]);
    return this > min && this <= max;
};

g.shuffleArray = function (array) {
    var temp, randIndex;
    if (array === null)
        return null;

    for (i = 0; i < array.length; i++) {
        randIndex = Math.floor(Math.random() * array.length);
        temp = array[i];
        array[i] = array[randIndex];
        array[randIndex] = temp;
    }
    return array;
};

g.isNight = function () {
    return !g.hourBetween(6, 19);
};

g.cleanText = function (thisInput) {
    var tempcleanText = $('<div/>').text(thisInput).html();
    tempcleanText = tempcleanText.split('"').join('&quot;');
    tempcleanText = tempcleanText.split("'").join('&apos;');
    return tempcleanText;
};

g.rand = function (lower, upper) {
    return Math.floor(Math.random() * (upper - lower)) + lower;
};

g.randn_bm = function() {
    let u = 0, v = 0;
    while (u === 0) u = Math.random(); //Converting [0,1) to (0,1)
    while (v === 0) v = Math.random();
    let num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
    num = num / 10.0 + 0.5; // Translate to 0 -> 1
    if (num > 1 || num < 0) return randn_bm() // resample between 0 and 1
    return num
}

g.makeCss = function (height, width, top, left) {
    return " height:" + (height * g.ratio) + "px; width:" + (width * g.ratio) + "px; top:" + (top * g.ratio) + "px; left:" + (left * g.ratio) + "px; ";
};

g.cssText = function (size) {
    var baseFontSize = 24;
    if (size !== undefined) {
        if (size === "s")
            baseFontSize = 16;
        else if (size === "l")
            baseFontSize = 64;
        else if (size === "super")
            baseFontSize = 128;
    }
    return " font-size: " + (baseFontSize * g.ratio) + "px; ";
};

g.shuffleArray = function (array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
};

g.makeSingular = function (text) {
    text = text.trim();
    if (text.substr(text.length - 1).toLowerCase() === "s")
        text = text.slice(0, -1);
    return text;
};

g.newLine = function (str, maxLength) {
    var stringArray = str.split(" ");
    var counter = 0;
    var i;
    var newString = "";
    for (i = 0; i < stringArray.length; i++) {
        if (counter + stringArray[i].length > maxLength) {
            newString += "</br>" + stringArray[i] + " ";
            counter = stringArray[i].length + 1;
            console.log(counter + "?");
        }
        else {
            newString += stringArray[i] + " ";
            counter += stringArray[i].length + 1;
        }
    }
    return newString;
};

g.save = function () {
    var i;
    var retArra = {
        roomMap: new Array(),
        roomID: g.roomID,
        dt: g.dt,// g.dtstring() //timezone share bug fix
    };

    for (i = 0; i < g.roomMap.length; i++) {
        if (g.roomMap[i].access || g.roomMap[i].darkAccess) {
            retArra.roomMap.push({
                roomID: g.roomMap[i].roomID,
                access: g.roomMap[i].access,
                darkAccess: g.roomMap[i].darkAccess
            });
        }
    }

    return retArra;
};

g.load = function (rma) {
    var i, j;
    g.initGame();
    g.roomID = rma.roomID;
    if (rma.dt.indexOf("|") > -1) {
        var ds = rma.dt.split("|");
        g.dt = new Date(ds[0], ds[1], ds[2], ds[3], ds[4], ds[5], 0);
    }
    else {
        g.dt = new Date(rma.dt);
    }
    g.prevview = null;
    g.map = rma.map;
    g.roomMapInit();

    for (i = 0; i < rma.roomMap.length; i++) {
        for (j = 0; j < g.roomMap.length; j++) {
            if (rma.roomMap[i].roomID === g.roomMap[j].roomID) {
                if (rma.roomMap[i].access)
                    g.roomMap[j].access = true;
                if (rma.roomMap[i].darkAccess)
                    g.roomMap[j].darkAccess = true;
                j = 100000;
            }
        }
    }
};

g.initGame = function () {
    g.roomID = 7;
    g.dt = char.addMinutes(g.startDate, 425);
    gv.init();
    g.roomMapInit();
};

g.dtstring = function () {
    return g.dt.getFullYear().toString() + "|" + pad2(g.dt.getMonth() + 1) + "|" + pad2(g.dt.getDate()) + "|" + pad2(g.dt.getHours()) + "|" + pad2(g.dt.getMinutes()) + "|" + pad2(g.dt.getSeconds())
}

function pad2(n) { return n < 10 ? '0' + n : n }

String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

g.removeItemByValue = function(array, value){
    var index = array.indexOf(value);
    if (index !== -1)
        array.splice(index, 1);
    return array;
};

g.sleep = function (days = 0) {
    if (days !== 0)
        char.addDays(days);
    g.pass = g.roomID;
    char.room(28);
};

g.linebreak = function (str, limit) {
    let brokenString = '';
    for (let i = 0, count = 0; i < str.length; i++) {
        if (count >= limit && str[i] === ' ') {
            count = 0;
            brokenString += '<br/>';
        } else {
            count++;
            brokenString += str[i];
        }
    }
    return brokenString;
};

g.getDiceRollPercentage = function (mine, theirs) {
    var num = mine - theirs;
    var retPercent;
    if (num < -12)
        retPercent = 100;
    else if (num > 11)
        retPercent = 0;
    else
        switch (num) {
            case -12: retPercent = 99; break;//6 or greater dice roll
            case -11: retPercent = 99; break;
            case -10: retPercent = 99; break;
            case -9: retPercent = 99; break;
            case -8: retPercent = 98; break;
            case -7: retPercent = 96; break;
            case -6: retPercent = 94; break;
            case -5: retPercent = 90; break;
            case -4: retPercent = 84; break;
            case -3: retPercent = 77; break;
            case -2: retPercent = 69; break;
            case -1: retPercent = 60; break;
            case 0: retPercent = 50; break; //18 total dice rolls
            case 1: retPercent = 39; break;
            case 2: retPercent = 30; break;
            case 3: retPercent = 22; break;
            case 4: retPercent = 15; break;
            case 5: retPercent = 9; break;
            case 6: retPercent = 5; break;
            case 7: retPercent = 3; break;
            case 8: retPercent = 1; break;
            case 9: retPercent = 1; break;
            case 10: retPercent = 1; break;
            case 11: retPercent = 1; break;
        }
    return retPercent;
};

g.getSingleRoll = function (num) {
    var retPercent;
    if (num < 6)
        retPercent = 100;
    else if (num > 29)
        retPercent = 0;
    else
        switch (num) {
            case 6: retPercent = 99; break;//6 or greater dice roll
            case 7: retPercent = 99; break;
            case 8: retPercent = 99; break;
            case 9: retPercent = 99; break;
            case 10: retPercent = 98; break;
            case 11: retPercent = 96; break;
            case 12: retPercent = 94; break;
            case 13: retPercent = 90; break;
            case 14: retPercent = 84; break;
            case 15: retPercent = 77; break;
            case 16: retPercent = 69; break;
            case 17: retPercent = 60; break;
            case 18: retPercent = 50; break; //18 total dice rolls
            case 19: retPercent = 39; break;
            case 20: retPercent = 30; break;
            case 21: retPercent = 22; break;
            case 22: retPercent = 15; break;
            case 23: retPercent = 9; break;
            case 24: retPercent = 5; break;
            case 25: retPercent = 3; break;
            case 26: retPercent = 1; break;
            case 27: retPercent = 1; break;
            case 28: retPercent = 1; break;
            case 29: retPercent = 1; break;
        }
    return retPercent;
};

g.getGrade = function (percentage) {
    if (percentage > 96)
        return "A+";
    else if (percentage > 93)
        return "A";
    else if (percentage > 89)
        return "A-";
    else if (percentage > 86)
        return "B+";
    else if (percentage > 83)
        return "B";
    else if (percentage > 79)
        return "B-";
    else if (percentage > 86)
        return "B+";
    else if (percentage > 83)
        return "B";
    else if (percentage > 79)
        return "B-";
    else if (percentage > 76)
        return "C+";
    else if (percentage > 73)
        return "C";
    else if (percentage > 69)
        return "C-";
    else if (percentage > 66)
        return "D+";
    else if (percentage > 63)
        return "D";
    else if (percentage > 59)
        return "D-";
    return "F";
};