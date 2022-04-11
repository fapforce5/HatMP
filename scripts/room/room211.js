//Room name
var room211 = {};
room211.main = function () {
};

room211.btnclick = function (name) {
    g.set("oncase", null);
    switch (name) {
        case "h_0":
        case "h_1":
        case "h_2":
        case "h_3":
        case "h_13":
        case "h_15":
        case "h_16":
        case "h_20":
        case "h_21":
        case "h_22":
        case "h_27":
        case "h_34":
        case "h_54":
        case "h_58":
            var t = parseInt(name.replace("h_", ""));
            g.sissy[t].ach = true;
            g.popUpNotice(g.sissy[t].name + " achieved. ");
            break;
        case "h_6":
            g.sissy[6].ach = true;
            cl.c.chastity = "cage";
            g.mod("chastityLock", true);
            g.popUpNotice(g.sissy[6].name + " achieved. ");
            break;
        case "h_7":
        case "h_8":
        case "h_9":
        case "h_10":
            cl.c.cock++;
            g.sissy[parseInt(name.replace("h_", ""))].ach = true;
            g.popUpNotice("Your cock shrunk. ");
            cl.display();
            break;
        case "h_11":
            
            break;
        case "h_12":
            g.sissy[12].ach = true;
            g.mod("giveOralFemale", 1);
            g.popUpNotice(g.sissy[12].name + " achieved. ");
            break;
        case "h_19":
            inv.add("sewer");
            g.sissy[parseInt(name.replace("h_", ""))].ach = true;
            g.popUpNotice("You finished the sewer event!");
            cl.display();
            break;
        case "h_24":
            g.sissy[24].ach = true;
            g.roomMapAccess(650, true, true);
            cl.add("shirt", "r");
            cl.add("pants", "k");
            cl.add("shoes", "fb");
            g.popUpNotice(g.sissy[24].name + " achieved. ");
            break;
        case "h_26":
            var t26 = parseInt(name.replace("h_", ""));
            g.roomMapAccess(407, true, false);
            g.sissy[t26].ach = true;
            g.popUpNotice(g.sissy[t26].name + " achieved. ");
            break;
        case "h_28":
            sc.setstep("jones", 1);
            sc.setstep("spanky", 3);
            sc.setstep("dolly", 3);
            sc.setstepAll("holly", 3);
            sc.setstep("molly", 3);
            sc.setstepAll("jeffery", 8);
            sc.setstep("molly", -2);
            cl.add("chastity", "cage");
            cl.add("panties", "q");
            cl.add("panties", "h");
            g.roomMapAccess(250, true, true);
            g.sissy[28].ach = true;
            g.popUpNotice(g.sissy[28].name + " achieved. ");
            break;
        case "h_29":
            cl.add("bra", "p");
            cl.add("panties", "b");
            cl.add("dress", "u");
            pic.add("jada_b");
            sc.setstep("treyvon", 2);
            sc.setstep("tiffany", 16);
            sc.setstep("candy", 1);
            g.sissy[29].ach = true;
            g.popUpNotice(g.sissy[29].name + " achieved. ");
            break;
        case "h_30":
            cl.c.tattoo.push("slut");
            cl.display();
            g.sissy[30].ach = true;
            g.popUpNotice(g.sissy[30].name + " achieved. ");
            break;
        case "h_31":
            cl.add("dress", "rose");
            g.sissy[31].ach = true;
            g.popUpNotice(g.sissy[31].name + " achieved. ");
            break;
        case "h_32":
            cl.add("dress", "maid");
            g.sissy[32].ach = true;
            g.popUpNotice(g.sissy[32].name + " achieved. ");
            break;
        case "h_33":
            cl.add("shirt", "cor");
            cl.add("pants", "co");
            g.sissy[33].ach = true;
            g.popUpNotice(g.sissy[32].name + " achieved. ");
            break;
        case "h_35":
        case "h_36":
        case "h_37":
        case "h_38":
        case "h_39":
            cl.c.chest++;
            g.sissy[parseInt(name.replace("h_", ""))].ach = true;
            g.popUpNotice("Your tits are bigger.");
            cl.display();
            break;
        case "h_40":
        case "h_41":
        case "h_42":
        case "h_43":
        case "h_44":
            cl.c.leg++;
            g.sissy[parseInt(name.replace("h_", ""))].ach = true;
            g.popUpNotice("Your ass is bigger.");
            cl.display();
            break;
        case "h_45":
        case "h_46":
            cl.c.lips++;
            g.sissy[parseInt(name.replace("h_", ""))].ach = true;
            g.popUpNotice("Your lips are bigger.");
            cl.display();
            break;
        case "h_51":
            sc.setstep("spanky", 3);
            inv.addMulti("hormone", 10);
            g.sissy[51].ach = true;
            g.popUpNotice(g.sissy[51].name + " achieved. ");
            break;
        case "h_55":
            g.sissy[55].ach = true;
            g.sissy[58].ach = true;
            g.sissy[59].ach = true;
            sc.setstep("missy", 100);
            sc.setstep("daria", 7);
            sc.setstep("bodhi", 4);
            sc.setstep("ubel", 1);
            inv.add("chisel");
            g.popUpNotice(g.sissy[51].name + " achieved. ");
            break;
        case "h_59":
            var t59 = parseInt(name.replace("h_", ""));
            g.sissy[t59].ach = true;
            g.popUpNotice(g.sissy[t59].name + " achieved. ");
            inv.add("pinkDildo");
            break;
        default:
            break;
    }
    nav.killall();
    room210.main();
};

room211.chatcatch = function (callback) {
    switch (callback) {
        case "nap_1hour":
            break;
        default:
            break;
    }
};

room211.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "me",
            text: "",
            button: [
                { chatID: 1, text: "", callback: "" }
            ]
        }
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};