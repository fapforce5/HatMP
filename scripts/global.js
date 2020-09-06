var g = {}; //global
g.ratio = 1;// nav_ratio = 1;
g.roomTimeout = null;// var nav_roomTimout = null;
g.roomTimeout2 = null;
g.pass = null;//var nav_roomPass = null;
g.internal = null;
g.roomAdd = new Array();
g.saveState = null;
g.startDate = new Date(2012, 0, 1, 0, 0, 0, 0);
g.version = 8.0;
g.versionText = "0.8.0 - 29 JUL 2020";
g.notes = "v0.8.0";
g.newLoad = false;
g.back = false;
g.altview = false;
g.tview = "f";
g.lview = "b";
g.prevRoom;

g.roomID = 1;
g.dt = g.startDate;

g.st = [
    { n: "shower", t: g.startDate, q: "date" },
    { n: "cum", t: g.startDate, q: "date" },
    { n: "knockedup", t: null, q: "date" },

    { n: "difficulty", t: 1, q: "int" },
    { n: "money", t: 450, q: "money" },
    { n: "rent", t: 200, q: "zero" },
    { n: "rentOwed", t: 0, q: "zero" },
    { n: "arousal", t: 5, q: "hundred" },
    { n: "rentKnockOff", t: 0, q: "zero" },
    { n: "energy", t: 95, q: "energy" },
    { n: "maxenergy", t: 100, q: "zero" },
    { n: "fitness", t: 0, q: "hundred" },
    { n: "hormone", t: 0, q: "hundred" },
    { n: "leg", t: 0, q: "hundred" },
    { n: "body", t: 0, q: "hundred" },
    { n: "d", t: 0, q: "hundred" },
    { n: "sissy", t: 0, q: "hundred" },
    { n: "legLevel", t: 0, q: "zero" },
    { n: "bodyLevel", t: 0, q: "zero" },
    { n: "fitnessLevel", t: 0, q: "zero" },
    { n: "sissyLevel", t: 0, q: "zero" },
    { n: "dLevel", t: 0, q: "zero" },
    { n: "map", t: 0, q: "int" },
    { n: "jobConstructionPay", t: 0, q: "zero" },
    { n: "jobConstWorkToday", t: 0, q: "int" },
    { n: "momClosetLube", t: 3, q: "int" },
    { n: "momClosetMoney", t: 7, q: "int" },
    { n: "bladder", t: 0, q: "zero" },
    { n: "painting", t: "", q: "string" },
    { n: "bodyhair", t: 100, q: "zero" },
    { n: "reddoorloc", t: 1, q: "int" },
    { n: "makeup", t: 0, q: "int" },
    { n: "sewerMap", t: "", q: "string" },
    { n: "sewerEnd", t: 0, q: "int" },
    { n: "sewerID", t: 0, q: "int" },

    { n: "giveOralMale", t: 0, q: "int" },
    { n: "giveOralFemale", t: 0, q: "int" },
    { n: "receiveOralMale", t: 0, q: "int" },
    { n: "receiveOralFemale", t: 0, q: "int" },

    { n: "receiveBoobJob", t: 0, q: "int" },
    { n: "giveBoobJob", t: 0, q: "int" },

    { n: "loadSwollowed", t: 0, q: "int" },
    { n: "loadSpit", t: 0, q: "int" },
    { n: "creamPied", t: 0, q: "int" },

    { n: "giveAnalMale", t: 0, q: "int" },
    { n: "giveAnalFemale", t: 0, q: "int" },
    { n: "receiveAnalMale", t: 0, q: "int" },
    { n: "receiveAnalFemale", t: 0, q: "int" },

    { n: "giveHandjobMale", t: 0, q: "int" },
    { n: "giveFingerFemale", t: 0, q: "int" },
    { n: "receiveHandjobMale", t: 0, q: "int" },
    { n: "receiveHandjobFemale", t: 0, q: "int" },

    { n: "giveFootjobMale", t: 0, q: "int" },
    { n: "giveFootjobFemale", t: 0, q: "int" },
    { n: "receiveFootjobMale", t: 0, q: "int" },
    { n: "receiveFootjobFemale", t: 0, q: "int" },

    { n: "fuckPussy", t: 0, q: "int" },
    { n: "getPussyFucked", t: 0, q: "int" },

    { n: "pissedonMale", t: 0, q: "int" },
    { n: "pissedonFemale", t: 0, q: "int" },

    { n: "girlname", t: "Scarlett", q: "int" },

    { n: "jobConstGetRaise", t: false, q: "bool" },
    { n: "lockboobs", t: false, q: "bool" },
    { n: "lockbutt", t: false, q: "bool" },

    { n: "enterSister", t: false, q: "day" },
    { n: "evaDayEvent", t: false, q: "day" },
    { n: "lolaDayEvent", t: false, q: "day" },
    { n: "tiffanyDayEvent", t: false, q: "day" },
    { n: "candyDayEvent", t: false, q: "day" },
    { n: "momChore", t: false, q: "day" },
    { n: "zoeyDay", t: false, q: "day" },
    { n: "choreDishes", t: false, q: "day" },
    { n: "showerPeek", t: false, q: "day" },
    { n: "momRaidCloset", t: false, q: "day" },
    { n: "tookHormonePill", t: false, q: "day" },
    { n: "gworkout", t: false, q: "day" },
    { n: "shinkCock", t: false, q: "day" },
    { n: "bigguy", t: false, q: "day" },
    { n: "cardgame", t: false, q: "day" },
    { n: "momchat", t: false, q: "day" },
    { n: "buttholeplay", t: false, q: "day" },
    { n: "reddoor", t: false, q: "day" },
    { n: "cultrun", t: false, q: "day" },
];

g.i = function (name) {
    var thisIndex = -1;
    for (i = 0; i < g.st.length; i++) {
        if (g.st[i].n === name) {
            thisIndex = i;
            type = g.st[i].t;
            break;
        }
    }
    return thisIndex;
};

g.set = function (name, amount) {
    var index = g.i(name);
    g.st[index].t = amount;
};

g.get = function (name) {
    var thisIndex = g.i(name);
    if(thisIndex > -1)
        return g.st[thisIndex].t;
    console.log("get missing name: " + name);
    return null;
};

g.mod = function (name, amount) {
    var i, index, type;
    index = g.i(name);

    if (index > -1) {
        type = g.st[index].q;
        switch (type) {
            case "zero":
                g.st[index].t += amount;
                if (g.st[index].t < 0)
                    g.st[index].t = 0;
                g.checkPop(name, amount);
                break;
            case "money":
                g.st[index].t += amount;
                if (g.st[index].t < 0)
                    g.st[index].t = 0;
                g.checkPop(name, amount);
                $('#char_money').text('$' + g.st[index].t);
                break;
            case "hundred":
                g.st[index].t += amount;
                if (g.st[index].t < 0)
                    g.st[index].t = 0;
                if (g.st[index].t > 100)
                    g.st[index].t = 100;
                g.checkPop(name, amount);
                break;
            case "energy":
                var maxEnergy = 100;
                for (i = 0; i < g.st.length; i++) {
                    if (g.st[i].n === "maxenergy") {
                        maxEnergy = g.st[i].t;
                        break;
                    }
                }
                g.st[index].t += amount;
                if (g.st[index].t < 0)
                    g.st[index].t = 0;
                if (g.st[index].t > maxEnergy)
                    g.st[index].t = maxEnergy;
                g.checkPop(name, amount);
                break;
            case "day":
            case "bool":
                g.st[index].t = amount;
                break;
            case "int":
                g.st[index].t += amount;
                break;
            case "date":
                g.st[index].t = new Date(g.st[index].t.getTime() + (amount * 60000));
                break;
            default:
                console.log("unknown g.mod type: " + type + ", name: " + name);
                break;
        }
    }
    else
        console.log("unknown g.mod: " + name);
};

g.gt = function (first, second) {
    return g.get(first) > g.get(second);
};

g.setflag = function (name) {
    for (var i = 0; i < g.st.length; i++) {
        if (g.st[i].n === name) {
            g.st[i].t = true;
            return;
        }
    }
};

g.checkflag = function (name) {
    for (var i = 0; i < g.st.length; i++) {
        if (g.st[i].n === name) {
            return g.st[i].t;
        }
    }
    console.log("Flag name: " + name + " not found. ");
    return false;
};

g.newday = function () {
    for (var i = 0; i < g.st.length; i++) {
        if (g.st[i].q === "day") {
            g.st[i].t = false;
        }
    }
};


g.checkPop = function (name, amount) {
    switch (name) {
        case "money":
            if (amount < 0)
                g.popUpNotice("You spent<br />$" + Math.abs(amount));
            else
                g.popUpNotice("You received<br />$" + amount);
            break;
        case "jobConstructionPay":
            g.popUpNotice("You got a<br />$" + amount + " raise");
            break;
        case "hormone":
            if (amount > 0)
                g.popUpNotice("You feel more feminine");
            char.makeGraph();
            break;
        case "energy":
            if (amount > 0)
                g.popUpNotice("You Gained " + amount.toString() + " Energy");
            cl.energydisplay();
            char.makeGraph();
            break;
        case "arousal": //0-100
            cl.cockDisplay();
            break;
        case "fitness":
            g.popUpNotice("You fitness " + (amount < 0 ? "Decreased" : "Increased" + "  by ") + Math.abs(amount));
            char.makeGraph();
            break;
        case "leg":
            g.popUpNotice("Your legs are " + (amount < 0 ? "weaker" : "stonger"));
            char.makeGraph();
            break;
        case "body":
            g.popUpNotice("Your arms are " + (amount < 0 ? "weaker" : "stonger"));
            char.makeGraph();
            break;
        case "sissy":
            g.popUpNotice("Your are " + (amount < 0 ? "less slutty" : "sluttier"));
            char.makeGraph();
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

g.gethourdecimal = function () {
    return g.dt.getHours() + (g.dt.getMinutes() / 60);
};

g.rooms = [
    
    { roomID: 0, name: "Map", image: "map/map1.jpg", nightImage: "map/map1_night.jpg", houseID: 0, btn: "roomBtn_000.png" },
    { roomID: 1, name: "Start", image: "1_startScreen/1_startscreen.png", nightImage: "1_startScreen/1_startscreen.png", houseID: -1, btn: "roomBtn_-1.png" },
    { roomID: 2, name: "Help", image: "2_info/2_infoScreen.png", nightImage: "2_info/2_infoScreen.png", houseID: -1, btn: "roomBtn_-1.png" },
    { roomID: 3, name: "Check", image: "2_info/2_infoScreen.png", nightImage: "2_info/2_infoScreen.png", houseID: -1, btn: "roomBtn_-1.png" },

    { roomID: 7, name: "My Room ALT", image: "7_mainCharRoomAlt/7_mainCharRoomAlt.jpg", nightImage: "7_mainCharRoomAlt/7_mainCharRoomAlt.jpg", houseID: 10, btn: "roomBtn_7.png" },
    { roomID: 8, name: "My Wardrobe", image: "8_wardrobe/8_wardrobe.jpg", nightImage: "8_wardrobe/8_wardrobe.jpg", houseID: 10, btn: "roomBtn_8.png" },
    { roomID: 9, name: "Computer", image: "9_computer/09_computer.jpg", nightImage: "9_computer/09_computer.jpg", houseID: 10, btn: "roomBtn_9.png" },
    { roomID: 10, name: "My Room", image: "10_mainchar/10_bedroom.png", nightImage: "10_mainchar/10_bedroomNight.png", houseID: 10, btn: "roomBtn_10.png" },
    { roomID: 11, name: "2nd Floor", image: "11_hallway/11_hallway.jpg", nightImage: "11_hallway/11_hallwayNight.jpg", houseID: 10, btn: "roomBtn_11.png" },
    { roomID: 12, name: "Bathroom", image: "12_bathroom/12_bathroom.png", nightImage: "12_bathroom/12_bathroom.png", houseID: 10, btn: "roomBtn_12.png" },
    { roomID: 13, name: "Girl's Room", image: "13_sisterRoom/13_sisterRoom.png", nightImage: "13_sisterRoom/13_sisterRoomNight.png", houseID: 10, btn: "roomBtn_13.png" },
    { roomID: 14, name: "Master Bedroom", image: "14_motherRoom/14_motherRoom.jpg", nightImage: "14_motherRoom/14_motherRoomNight.jpg", houseID: 10, btn: "roomBtn_14.png" },
    { roomID: 15, name: "Kitchen", image: "15_kitchen/day.jpg", nightImage: "15_kitchen/night.jpg", houseID: 10, btn: "roomBtn_15.png" },
    { roomID: 16, name: "1st Floor", image: "16_livingRoom/16_downStairs.jpg", nightImage: "16_livingRoom/16_downStairsNight.jpg", houseID: 10, btn: "roomBtn_16.png" },
    { roomID: 17, name: "Mom's Closet", image: "17_motherCloset/017_motherCloset.png", nightImage: "17_motherCloset/017_motherCloset.png", houseID: 10, btn: "roomBtn_17.png" },
    { roomID: 18, name: "Nightstand Drawer", image: "18_bedroomDrawer/018_drawer.jpg", nightImage: "18_bedroomDrawer/018_drawer.jpg", houseID: 10, btn: "roomBtn_18.png" },
    { roomID: 19, name: "On Bed", image: "19_layInBed/bg.jpg", nightImage: "19_layInBed/bg.jpg", houseID: 10, btn: "roomBtn_19.png" },
    { roomID: 20, name: "Dishes", image: "20_dishes/20_dishes.png", nightImage: "20_dishes/20_dishes.png", houseID: 10, btn: "roomBtn_20.png" },
    { roomID: 21, name: "Mother's Room Spanking", image: "21_motherSpank/021_spankBG.jpg", nightImage: "21_motherSpank/021_spankBG.jpg", houseID: 10, btn: "roomBtn_21.png" },
    { roomID: 22, name: "Toilet", image: "22_toilet/022_pee_dick.png", nightImage: "22_toilet/022_pee_dick.png", houseID: 10, btn: "roomBtn_22.png" },
    { roomID: 23, name: "Truth or Dare", image: "24_spinTheBottle/013_spinBG.jpg", nightImage: "24_spinTheBottle/013_spinBG.jpg", houseID: 10, btn: "roomBtn_23.png" },
    { roomID: 24, name: "Spin the bottle", image: "24_spinTheBottle/013_spinBG.jpg", nightImage: "24_spinTheBottle/013_spinBG.jpg", houseID: 10, btn: "roomBtn_24.png" },
    { roomID: 25, name: "Dining Room", image: "25_dining/025_diningRoom.jpg", nightImage: "25_dining/025_diningRoomNight.jpg", houseID: 10, btn: "roomBtn_25.png" },
    { roomID: 26, name: "Living Room", image: "26_livingRoom/dayTable.jpg", nightImage: "26_livingRoom/night.jpg", houseID: 10, btn: "roomBtn_25.png" },
    { roomID: 27, name: "Mirror", image: "12_bathroom/012_brushTeeth.jpg", nightImage: "12_bathroom/012_brushTeeth.jpg", houseID: 10, btn: "roomBtn_25.png" },
    { roomID: 28, name: "Sleep", image: "28_transformation/sleep.jpg", nightImage: "28_transformation/sleep.jpg", houseID: 10, btn: "roomBtn_25.png" },

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

    { roomID: 100, name: "Construction Entrance", image: "100_construction/100_site.jpg", nightImage: "100_construction/100_bg_night.jpg", houseID: 100, btn: "roomBtn_100.png" },
    { roomID: 101, name: "Front Office", image: "101_constFrontOffice/101_frontoffice.jpg", nightImage: "101_constFrontOffice/101_frontoffice.jpg", houseID: 100, btn: "roomBtn_101.png" },
    { roomID: 102, name: "Boss's Office", image: "102_constBoss/102_boss.png", nightImage: "102_constBoss/102_boss.png", houseID: 100, btn: "roomBtn_102.png" },
    { roomID: 103, name: "Work", image: "103_constSite/103_sweep.jpg", nightImage: "103_constSite/103_sweepnight.jpg", houseID: 100, btn: "roomBtn_103.png" },

    { roomID: 125, name: "Jimmy's House", image: "125_poker/basement.jpg", nightImage: "125_poker/basement_night.jpg", houseID: 125, btn: "roomBtn_125.png" },

    { roomID: 150, name: "Jones Home", image: "150_jones/frontdoor.jpg", nightImage: "150_jones/frontdoorNight.jpg", houseID: 150, btn: "roomBtn_125.png" },

    { roomID: 200, name: "Missy PI Entrace", image: "200_frontOffice/200_frontOffice.jpg", nightImage: "200_frontOffice/200_frontOffice.jpg", houseID: 200, btn: "roomBtn_200.png" },
    { roomID: 201, name: "Missy's Bathroom", image: "201_bathroom/201_bathroom.jpg", nightImage: "201_bathroom/201_bathroom.jpg", houseID: 200, btn: "roomBtn_201.png" },
    { roomID: 202, name: "Desk Side", image: "202_sideDesk/202_sideDesk.jpg", nightImage: "202_sideDesk/202_sideDesk.jpg", houseID: 200, btn: "roomBtn_202.png" },
    { roomID: 203, name: "PI Entrance", image: "203_entrance/203_enter.jpg", nightImage: "203_entrance/203_enter.jpg", houseID: 200, btn: "roomBtn_203.png" },
    { roomID: 204, name: "Card Game", image: "204_cardgame/402_bg.jpg", nightImage: "204_cardgame/402_bg.jpg", houseID: 200, btn: "roomBtn_204.png" },
    { roomID: 205, name: "Computer Work", image: "205_computerWork/205_computerWork.png", nightImage: "205_computerWork/205_computerWork.png", houseID: 200, btn: "roomBtn_204.png" },
    { roomID: 206, name: "Questions", image: "206_questions/white.jpg", nightImage: "206_questions/white.jpg", houseID: 200, btn: "roomBtn_200.png" },
    { roomID: 207, name: "Elevator", image: "207_door/elevator.jpg", nightImage: "207_door/elevator.jpg", houseID: 200, btn: "roomBtn_207.png" },
    { roomID: 208, name: "Red Room", image: "208_red/red.jpg", nightImage: "208_red/red.jpg", houseID: 200, btn: "roomBtn_208.png" },

    { roomID: 225, name: "Alley", image: "225_sewer/day.jpg", nightImage: "225_sewer/night.jpg", houseID: 650, btn: "roomBtn_225.png" },
    { roomID: 226, name: "Sewer", image: "2_info/2_infoScreen.png", nightImage: "2_info/2_infoScreen.png", houseID: 650, btn: "roomBtn_225.png" },
    { roomID: 227, name: "Fight", image: "2_info/2_infoScreen.png", nightImage: "2_info/2_infoScreen.png", houseID: 650, btn: "roomBtn_225.png" },

    { roomID: 250, name: "Naked Beaver Diner", image: "250_beaver/250_beaver.jpg", nightImage: "250_beaver/250_beaver.jpg", houseID: 250, btn: "roomBtn_250.png" },
    { roomID: 251, name: "Back Office", image: "251_office/office.jpg", nightImage: "251_office/office.jpg", houseID: 250, btn: "roomBtn_251.png" },

    { roomID: 350, name: "Sperm Bank", image: "350_spermBank/350_spermbank.jpg", nightImage: "350_spermBank/350_spermbank.jpg", houseID: 350, btn: "roomBtn_350.png" },
    { roomID: 351, name: "Sperm Bank", image: "351_spermJackoff/wallBg.jpg", nightImage: "351_spermJackoff/wallBg.jpg", houseID: 350, btn: "roomBtn_350.png" },

    { roomID: 400, name: "Mall", image: "400_mall/400_mall_bg.jpg", nightImage: "400_mall/400_mall_bg.jpg", houseID: 400, btn: "roomBtn_400.png" },
    { roomID: 401, name: "Purchase", image: "401_purchase/401_buy.jpg", nightImage: "401_purchase/401_buy.jpg", houseID: 400, btn: "roomBtn_401.png" },
    { roomID: 402, name: "Popular Girl", image: "402_mens/interior.jpg", nightImage: "402_mens/interior.jpg", houseID: 400, btn: "roomBtn_402.png" },
    { roomID: 403, name: "Saucy", image: "403_saucy/403_saucy.jpg", nightImage: "403_saucy/403_saucy.jpg", houseID: 400, btn: "roomBtn_402.png" },
    { roomID: 404, name: "Spanky's", image: "404_spankys/404_bodega.jpg", nightImage: "404_spankys/404_bodega.jpg", houseID: 404, btn: "roomBtn_404.png" },
    { roomID: 405, name: "Reds", image: "405_reds/405_stylist.jpg", nightImage: "405_reds/405_stylist.jpg", houseID: 400, btn: "roomBtn_402.png" },
    { roomID: 406, name: "I Like Your Eyes", image: "406_eyes/bg.jpg", nightImage: "406_eyes/bg.jpg", houseID: 400, btn: "roomBtn_402.png" },

    { roomID: 425, name: "Jail", image: "425_Jail/jail.jpg", nightImage: "425_Jail/jail.jpg", houseID: 400, btn: "roomBtn_402.png" },

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

    { roomID: 500, name: "Zoey's House", image: "500_jada/500_zoeyHouseDay.jpg", nightImage: "500_jada/500_zoeyHouseNight.jpg", houseID: 500, btn: "roomBtn_500.png" },
    { roomID: 501, name: "Zoey's Living Room", image: "501_jadaGame/501_game.jpg", nightImage: "501_jadaGame/501_game.jpg", houseID: 500, btn: "roomBtn_501.png" },
    { roomID: 502, name: "Zoey's Bedroom", image: "502_bedroom/bedroom.jpg", nightImage: "502_bedroom/bedroomnight.jpg", houseID: 500, btn: "roomBtn_501.png" },
    { roomID: 503, name: "Zoey's Bathroom", image: "503_bathroom/bathroom.jpg", nightImage: "503_bathroom/bathroom.jpg", houseID: 500, btn: "roomBtn_503.png" },

    { roomID: 550, name: "Gym Front Desm", image: "550_gymFront/550_gymFront.png", nightImage: "550_gymFront/550_gymFront.png", houseID: 550, btn: "roomBtn_550.png" },
    { roomID: 551, name: "Gym", image: "551_gymInside/551_gym.jpg", nightImage: "551_gymInside/551_gym.jpg", houseID: 550, btn: "roomBtn_551.png" },
    { roomID: 552, name: "Boys Locker", image: "552_boy/lockeroom.jpg", nightImage: "552_boy/lockeroom.jpg", houseID: 550, btn: "roomBtn_552.png" },
    { roomID: 553, name: "Girls Locker", image: "553_girl/553_girl.jpg", nightImage: "552_running/553_girl.jpg", houseID: 550, btn: "roomBtn_553.png" },
    { roomID: 554, name: "Gym Shower", image: "554_shower/552_shower.jpg", nightImage: "554_shower/552_shower.jpg", houseID: 550, btn: "roomBtn_554.png" },
    { roomID: 555, name: "Back Gym", image: "555_backgym/gym.jpg", nightImage: "555_backgym/gym.jpg", houseID: 550, btn: "roomBtn_555.png" },
    { roomID: 556, name: "Spar Training", image: "555_backgym/gym.jpg", nightImage: "555_backgym/gym.jpg", houseID: 550, btn: "roomBtn_555.png" },

    { roomID: 600, name: "For Testing", image: "map/map.png", nightImage: "map/map.png", houseID: 600, btn: "roomBtn_600.png" },

    { roomID: 650, name: "Toys 'n Us", image: "650_toyStore/650_front.jpg", nightImage: "650_toyStore/650_front.jpg", houseID: 650, btn: "roomBtn_650.png" },
    { roomID: 651, name: "T'n U Hallway", image: "651_wackHallway/651_hallway.jpg", nightImage: "651_wackHallway/651_hallway.jpg", houseID: 650, btn: "roomBtn_651.png" },
    { roomID: 661, name: "Peep Hole", image: "661_peephole/661_backroom.png", nightImage: "661_peephole/661_backroom.png", houseID: 650, btn: "roomBtn_661.png" },

    { roomID: 900, name: "College Entrance", image: "900_college/900_college.png", nightImage: "900_college/900_college.png", houseID: 900, btn: "roomBtn_900.png" },
    { roomID: 901, name: "Class Room", image: "901_classroom/901_classroom.png", nightImage: "901_classroom/901_classroom.png", houseID: 900, btn: "roomBtn_901.png" },

    { roomID: 910, name: "Department Of Licenses", image: "910_gov/bg.jpg", nightImage: "910_gov/910_gov.png", houseID: 910, btn: "bg.jpg" }

    //{ roomID: , name: "", image: "", houseID: , main: false, btn: "roomBtn_.png" }
];

g.roomMap = [
    { roomID: 16, access: true, darkAccess: true, left: 818, top: 750, width: 168, height: 237, img: "map/10.png", night: "map/10_night.png", map: 1 },
    { roomID: 50, access: true, darkAccess: true, left: 411, top: 369, width: 395, height: 311, img: "map/50.png", night: "map/50_night.png", map: 1 },
    { roomID: 75, access: false, darkAccess: false, left: 1649, top: 780, width: 178, height: 212, img: "map/75.png", night: "map/75_night.png", map: 1 },
    { roomID: 100, access: false, darkAccess: false, left: 1458, top: 0, width: 323, height: 282, img: "map/100.png", night: "map/100_night.png", map: 2 },
    { roomID: 125, access: true, darkAccess: true, left: 1194, top: 824, width: 107, height: 167, img: "map/125.png", night: "map/125_night.png", map: 1 },
    { roomID: 150, access: false, darkAccess: false, left: 395, top: 62, width: 406, height: 208, img: "map/150.png", night: "map/150_night.png", map: 1 },
    { roomID: 203, access: false, darkAccess: false, left: 1456, top: 263, width: 207, height: 340, img: "map/203.png", night: "map/203_night.png", map: 2 },
    { roomID: 225, access: true, darkAccess: true, left: 765, top: 760, width: 78, height: 190, img: "map/225.png", night: "map/225_night.png", map: 2 },
    { roomID: 250, access: true, darkAccess: false, left: 24, top: 304, width: 224, height: 160, img: "map/250.png", night: "map/250_night.png", map: 2 },
    { roomID: 350, access: true, darkAccess: false, left: 74, top: 672, width: 291, height: 207, img: "map/350.png", night: "map/350_night.png", map: 2 },
    { roomID: 400, access: true, darkAccess: false, left: 530, top: 0, width: 308, height: 212, img: "map/400.png", night: "map/400_night.png", map: 2 },
    { roomID: 404, access: true, darkAccess: true, left: 798, top: 502, width: 130, height: 172, img: "map/404.png", night: "map/404_night.png", map: 1 },
    { roomID: 405, access: true, darkAccess: false, left: 230, top: 469, width: 163, height: 129, img: "map/405.png", night: "map/405_night.png", map: 2 },
    { roomID: 406, access: true, darkAccess: false, left: 962, top: 408, width: 88, height: 95, img: "map/406.png", night: "map/406_night.png", map: 2 },
    { roomID: 450, access: true, darkAccess: true, left: 1513, top: 638, width: 138, height: 126, img: "map/450.png", night: "map/450_night.png", map: 0 },
    { roomID: 500, access: true, darkAccess: false, left: 496, top: 784, width: 294, height: 214, img: "map/500.png", night: "map/500_night.png", map: 1 },
    { roomID: 550, access: true, darkAccess: false, left: 1072, top: 370, width: 238, height: 179, img: "map/550.png", night: "map/550_night.png", map: 2 },
    { roomID: 650, access: true, darkAccess: false, left: 1459, top: 712, width: 222, height: 215, img: "map/650.png", night: "map/650_night.png", map: 2 },
    { roomID: 910, access: true, darkAccess: false, left: 918, top: 225, width: 259, height: 143, img: "map/910.png", night: "map/910_night.png", map: 1 },


    { roomID: 1001, access: false, darkAccess: false, left: 531, top: 688, width: 206, height: 194, img: "map/1001.png", night: "map/1001_night.png", map: 1 },
    { roomID: 1002, access: false, darkAccess: false, left: 506, top: 246, width: 392, height: 282, img: "map/1001.png", night: "map/1001_night.png", map: 1 },
    { roomID: 1001, access: false, darkAccess: false, left: 531, top: 688, width: 206, height: 194, img: "map/1001.png", night: "map/1001_night.png", map: 1 },
    //{ roomID: 100, access: false, left: 500, top: 300, width: 300, height: 150, activeImg: "map/constructionSite.png", inactiveImg: "map/inactive.png" },
];

g.fmap;

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

Number.prototype.between = function (a, b) {
    var min = Math.min.apply(Math, [a, b]),
      max = Math.max.apply(Math, [a, b]);
    return this > min && this <= max;
};

g.shuffleArray = function (array) {
    var temp, randIndex;
    for (i = 0; i < array.length; i++) {
        randIndex = Math.floor(Math.random() * array.length);
        temp = array[i];
        array[i] = array[randIndex];
        array[randIndex] = temp;
    }
    return array;
};

g.isNight = function () {
    if (g.hourBetween(6, 19))
        return false;
    return true;
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

g.save = function () {
    var i;

    var retArra = {
        st: new Array(),
        roomMap: new Array(),
        roomID: g.roomID,
        dt: g.dt
    };

    for (i = 0; i < g.st.length; i++) {
        retArra.st.push({
            n: g.st[i].n,
            t: g.st[i].t
        });
    }
    for (i = 0; i < g.roomMap.length; i++) {
        retArra.roomMap.push({
            roomID: g.roomMap[i].roomID,
            access: g.roomMap[i].access,
            darkAccess: g.roomMap[i].darkAccess
        });
    }

    return retArra;
};

g.load = function (rma) {
    var i, j;
    g.initGame();
    g.roomID = rma.roomID;
    g.dt = new Date(rma.dt);
    for (i = 0; i < rma.roomMap.length; i++) {
        for (j = 0; j < g.roomMap.length; j++) {
            if (rma.roomMap[i].roomID === g.roomMap[j].roomID) {
                g.roomMap[j].access = rma.roomMap[i].access;
                g.roomMap[j].darkAccess = rma.roomMap[i].darkAccess;
                j = 100000;
            }
        }
    }

    for (i = 0; i < rma.st.length; i++) {
        for (j = 0; j < g.st.length; j++) {
            if (rma.st[i].n === g.st[j].n) {
                if (g.st[j].q === "date")
                    g.st[j].t = new Date(rma.st[i].t);
                else
                    g.st[j].t = rma.st[i].t;
                j = 999999;
            }
        }
    }
};

g.initGame = function () {
    var i;
    g.roomID = 7;
    //$("#room_left_map").hide();
    g.dt = char.addMinutes(g.startDate, 757);
    for (i = 0; i < g.st.length; i++) {
        switch (g.st[i].n) {
            case "knockedup":
                g.st[i].t = null;
                break;
            case "shower":
                g.st[i].t = char.addMinutes(g.startDate, -4320);
                break;
            case "cum":
                g.st[i].t = char.addMinutes(g.startDate, -757);
                break;
            case "money":
                g.st[i].t = 450;
                break;
            case "rent":
                g.st[i].t = 200;
                break;
            case "energy":
                g.st[i].t = 95;
                break;
            case "maxenergy":
                g.st[i].t = 100;
                break;
            case "map":
                g.st[i].t = "map_1";
                break;
            case "rentOwed":
            case "arousal":
            case "rentKnockOff":
            case "fitness":
            case "hormone":
            case "leg":
            case "d":
            case "body":
            case "sissy":
            case "legLevel":
            case "bodyLevel":
            case "fitnessLevel":
            case "sissyLevel":
            case "dLevel":
            case "jobConstructionPay":
            case "jobConstWorkToday":
            case "giveOralMale":
            case "giveOralFemale":
            case "receiveOralMale":
            case "receiveOralFemale":
            case "loadSwollowed":
            case "loadSpit":
            case "creamPied":
            case "giveAnalMale":
            case "giveAnalFemale":
            case "receiveAnalMale":
            case "receiveAnalFemale":
            case "giveHandjobMale":
            case "giveFingerFemale":
            case "receiveHandjobMale":
            case "receiveHandjobFemale":
            case "giveFootjobMale":
            case "giveFootjobFemale":
            case "receiveFootjobMale":
            case "receiveFootjobFemale":
            case "fuckPussy":
            case "getPussyFucked":
            case "pissedonMale":
            case "pissedonFemale":
            case "receiveBoobJob":
            case "giveBoobJob":
            case "shinkCock":
            case "makeup":
            case "sewerEnd":
            case "sewerID":
                g.st[i].t = 0;
                break;
            case "bodyhair":
                g.st[i].t = 100;
                break;
            case "momClosetLube":
                g.st[i].t = 3;
                break;
            case "momClosetMoney":
                g.st[i].t = 7;
                break;
            case "bladder":
                g.st[i].t = 0;
                break;
            case "painting":
            case "sewerMap":
                g.st[i].t = "";
                break;
            case "girlname":
                g.st[i].t = "Scarlett";
                break;
            case "lockboobs":
            case "lockbutt":
            case "enterSister":
            case "jobConstGetRaise":
            case "evaDayEvent":
            case "lolaDayEvent":
            case "tiffanyDayEvent":
            case "candyDayEvent":
            case "momChore":
            case "zoeyDay":
            case "choreDishes":
            case "showerPeek":
            case "momRaidCloset":
            case "tookHormonePill":
            case "gworkout":
            case "cardgame":
            case "bigguy":
            case "momchat":
            case "buttholeplay":
            case "reddoor":
            case "cultrun":
                g.st[i].t = false;
                break;
            case "reddoorloc":
                g.st[i].t = Math.floor(Math.random() * 8);
                break;
            case "difficulty":
                break;
            default:
                console.log("unknown load: " + g.st[i].n);
        }
    }
};