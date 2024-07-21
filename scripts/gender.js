var gender = {};
gender.changes = new Array();

gender.canUseCock = function () {
    if (cl.c.chastity !== null)
        return false;
    return !gender.isCockTooSmallForSex();
};

gender.isCockTooSmallForSex = function(){
    return cl.c.cock > 2;
};

gender.isGirl = function () {
    var appearance = cl.appearance();
    if (appearance === 5)
        return cl.c.chest > 1;
    return cl.appearance() > 2;
}

gender.pronoun = function (ptype) {
    switch (ptype) {
        case "boy":
        case "girl":
            return gender.isGirl() ? "girl" : "boy";
        case "he":
        case "she":
            return gender.isGirl() ? "she" : "he"; 
        case "him":
        case "her":
            return gender.isGirl() ? "her" : "him"; 
        case "son":
        case "daughter":
            return gender.isGirl() ? "daughter" : "son";
        case "m":
        case "f":
            return gender.isGirl() ? "f" : "m";
        case "man":
        case "lady":
            return gender.isGirl() ? "lady" : "man";
        case "bikini":
        case "swimsuit":
            return gender.isGirl() ? "bikini" : "swim trunks";
        case "panties":
            return gender.isGirl() ? "panties" : "underware";
        default:
            console.log("gender.pronoun - not found: " + ptype);
    }
    return "you";
};

gender.init = function () {
    gender.changes = [
        { name: "zoey", xdress: false, panties: false, chest: 0, leg: 0, hairLength: 0, hairColor: "black", cock: null, chastity: false },
        { name: "eva", xdress: false, panties: false, chest: 0, leg: 0, hairLength: 0, hairColor: "black", cock: null, chastity: false },
        { name: "lola", xdress: false, panties: false, chest: 0, leg: 0, hairLength: 0, hairColor: "black", cock: null, chastity: false },
        { name: "landlord", xdress: false, panties: false, chest: 0, leg: 0, hairLength: 0, hairColor: "black", cock: null, chastity: false },
        { name: "tiffany", xdress: false, panties: false, chest: null, leg: null, hairLength: null, hairColor: null, cock: null, chastity: false },
        { name: "missy", xdress: false, panties: false, chest: null, leg: null, hairLength: null, hairColor: null, cock: null, chastity: false },
        { name: "tina", xdress: false, panties: false, chest: null, leg: null, hairLength: null, hairColor: null, cock: null, chastity: false },
        { name: "cecilia", xdress: false, panties: false, chest: null, leg: null, hairLength: null, hairColor: null, cock: null, chastity: false },
        { name: "jones", xdress: false, panties: false, chest: null, leg: null, hairLength: null, hairColor: null, cock: null, chastity: false },
        //{ name: "cult", xdress: false, chest: null, leg: null, hairLength: null, hairColor: null, cock: null },
    ];
}
gender.init();

gender.cIndex = function (name) {
    for (var i = 0; i < gender.changes.length; i++) {
        if (name === gender.changes[i].name)
            return i;
    }
    return -1;
}

gender.changesGetSet = function (name, characterCanSeeCock) {
    var changes = {
        anyChanges: false,
        xdress: false,
        chest: false,
        leg: false,
        hair: false,
        haircolor: false,
        cock: false,
        chastity: false
    };
    var i = gender.cIndex(name);
    //xdress
    if (!gender.changes[i].xdress && cl.isCrossdressing()) {
        changes.xdress = true;
        gender.changes[i].xdress = true;
    }

    //panties

    if (!gender.changes[i].panties && cl.pantiesTxt() === "panties") {
        changes.panties = true;
        gender.changes[i].panties = true;
    }

    //chest
    if (gender.changes[i].chest === null) {
        gender.changes[i].chest = cl.c.chest;
    }
    else if (cl.c.chest !== gender.changes[i].chest) {
        changes.chest = true;
        gender.changes[i].chest = cl.c.chest;
    }

    //leg (butt)
    if (gender.changes[i].leg === null) {
        gender.changes[i].leg = cl.c.leg;
    }
    else if (cl.c.leg !== gender.changes[i].leg) {
        changes.leg = true;
        gender.changes[i].leg = cl.c.leg;
    }

    //hair length
    if (gender.changes[i].hairLength === null) {
        gender.changes[i].hairLength = cl.c.hairLength;
    }
    else if (cl.c.hairLength !== gender.changes[i].hairLength) {
        changes.hairLength = true;
        gender.changes[i].hairLength = cl.c.hairLength;
    }

    //hair color
    if (gender.changes[i].hairColor === null) {
        gender.changes[i].hairColor = cl.c.hairColor;
    }
    else if (cl.c.hairColor !== gender.changes[i].hairColor) {
        changes.hairColor = true;
        gender.changes[i].hairColor = cl.c.hairColor;
    }

    if (gender.changes[i].cock === null) {
        gender.changes[i].cock = cl.c.cock;
    }
    else if (cl.c.cock !== gender.changes[i].cock && characterCanSeeCock) {
        changes.cock = true;
        gender.changes[i].cock = cl.c.cock;
    }

    if (cl.c.chastity !== null && characterCanSeeCock && !gender.changes[i].chastity) {
        changes.chastity = true;
        gender.changes[i].cock = true;
    }

    changes.anyChanges = (changes.xdress || changes.panties || changes.chest || changes.leg || changes.hairLength || changes.haircolor || changes.cock || changes.chastity);
    return changes;
};

gender.setChanges = function (name, cType) {
    var i = gender.cIndex(name);

    switch (cType) {
        case "xdress": gender.changes[i].xdress = cl.isCrossdressing(); break;
        case "panties":
            if (cl.pantiesTxt() === "panties")
                gender.changes[i].panties = true;
            break;
        case "chest": gender.changes[i].chest = cl.c.chest; break;
        case "leg": gender.changes[i].leg = cl.c.leg; break;
        case "hairLength": gender.changes[i].hairLength = cl.c.hairLength; break;
        case "hairColor": gender.changes[i].hairColor = cl.c.hairColor; break;
        case "cock": gender.changes[i].cock = cl.c.cock; break;
        case "chastity":
            if (cl.c.chastity !== null)
                gender.changes[i].chastity = true;
            break;
        default: console.log("gender.setChanges cType not found: " + cType); break;
    }
};

gender.getChange = function (name, cType) {
    var i = gender.cIndex(name);

    switch (cType) {
        case "xdress": return gender.changes[i].xdress; 
        case "panties": return gender.changes[i].panties; 
        case "chest": return gender.changes[i].chest !== cl.c.chest; 
        case "leg": return gender.changes[i].leg !== cl.c.leg; 
        case "hairLength": return gender.changes[i].hairLength !== cl.c.hairLength; 
        case "hairColor": return gender.changes[i].hairColor !== cl.c.hairColor; 
        case "cock": return gender.changes[i].cock !== cl.c.cock; 
        case "chastity": return gender.changes[i].chastity
        default: console.log("gender.setChanges cType not found: " + cType); break;
    }
};

gender.get = function (name, cType) {
    var i = gender.cIndex(name);
    switch (cType) {
        case "xdress": return gender.changes[i].xdress;
        case "panties": return gender.changes[i].panties;
        case "chest": return gender.changes[i].chest;
        case "leg": return gender.changes[i].leg;
        case "hairLength": return gender.changes[i].hairLength;
        case "hairColor": return gender.changes[i].hairColor;
        case "cock": return gender.changes[i].cock;
        case "chastity": return gender.changes[i].chastity
        default: console.log("gender.setChanges cType not found: " + cType); break;
    }
};

gender.save = function () {
    return $.extend(true, {}, gender.changes);
};

gender.load = function (ra) {
    var i, j;

    gender.init();

    $.each(ra, function (i, v) {
        saveloop: for (j = 0; j < gender.changes.length; j++) {
            if (ra[i].name === gender.changes[j].name) {
                gender.changes[j].xdress = ra[i].xdress;
                gender.changes[j].chest = ra[i].chest;
                gender.changes[j].leg = ra[i].leg;
                gender.changes[j].hair = ra[i].hair;
                gender.changes[j].cock = ra[i].cock;
                break saveloop;
            }
        }
    });
};