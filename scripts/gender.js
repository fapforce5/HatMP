var gender = {};
gender.changes = new Array();

gender.canUseCock = function () {
    if (cl.c.chastity !== null)
        return false;
    return !gender.isCockTooSmallForSex();
};

gender.isCockTooSmallForSex = function(){
    return cl.c.cock > 3;
};

gender.isGirl = function () {
    let tpronoun = gv.get("pronouns");
    if (tpronoun === "a") {
        var appearance = cl.appearance();
        if (appearance === 5) {
            if (cl.c.chest > 2)
                return true;
            else if (cl.c.chest === 2 && cl.c.hairLength > 1)
                return true;
            return false;
        }
        return cl.appearance() > 1;
    }
    else return tpronoun === "f";
}

gender.cock = function () {
    if (cl.c.chastity)
        return "c"; //chastity
    if (cl.c.cock === 5)
        return "v"; //vagina
    if (gender.isCockTooSmallForSex())
        return "t"; //tiny
    return "d"; //dick
};

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
        case "his":
            return gender.isGirl() ? "her" : "his"; 
        case "son":
        case "daughter":
            return gender.isGirl() ? "daughter" : "son";
        case "m":
        case "f":
            return gender.isGirl() ? "f" : "m";
        case "man":
        case "lady":
            return gender.isGirl() ? "lady" : "man";
        case "gentleman":
            return gender.isGirl() ? "lady" : "gentleman";
        case "bikini":
        case "swimsuit":
            return gender.isGirl() ? "bikini" : "swim trunks";
        case "panties":
            return gender.isGirl() ? "panties" : "underwear";
        case "fag":
            return gender.isGirl() ? "sissy" : "fag";
        case "faggot":
            return gender.isGirl() ? "sissy" : "faggot";
        case "asshole":
            return gender.isGirl() ? "bussy" : "asshole";
        case "sissy":
            return sissy.st[0].ach ? "sissy" : "boy";
        case "handome":
        case "pretty":
            return sissy.st[0].ach ? "pretty" : "handsome";
        case "mommy":
        case "daddy":
            return gender.isGirl() ? "mommy" : "daddy";
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

gender.entry = function (name) {
    return gender.changes[gender.cIndex(name)];
};

gender.currentValue = function (cType) {
    switch (cType) {
        case "xdress": return cl.isCrossdressing();
        case "panties": return cl.pantiesTxt() === "panties";
        case "chest": return cl.c.chest;
        case "leg": return cl.c.leg;
        case "hairLength": return cl.c.hairLength;
        case "hairColor": return cl.c.hairColor;
        case "cock": return cl.c.cock;
        case "chastity": return cl.c.chastity !== null;
        default: console.log("gender.currentValue cType not found: " + cType); break;
    }
};

gender.syncChangeField = function (entry, changes, field, currentValue) {
    if (entry[field] === null) {
        entry[field] = currentValue;
    }
    else if (entry[field] !== currentValue) {
        changes[field] = true;
        entry[field] = currentValue;
    }
};

gender.changesGetSet = function (name, characterCanSeeCock) {
    var changes = {
        anyChanges: false,
        xdress: false,
        panties: false,
        chest: false,
        leg: false,
        hairLength: false,
        hairColor: false,
        cock: false,
        chastity: false
    };
    var entry = gender.entry(name);
    //xdress
    if (!entry.xdress && cl.isCrossdressing()) {
        changes.xdress = true;
        entry.xdress = true;
    }

    //panties

    if (!entry.panties && cl.pantiesTxt() === "panties") {
        changes.panties = true;
        entry.panties = true;
    }

    gender.syncChangeField(entry, changes, "chest", cl.c.chest);
    gender.syncChangeField(entry, changes, "leg", cl.c.leg);
    gender.syncChangeField(entry, changes, "hairLength", cl.c.hairLength);
    gender.syncChangeField(entry, changes, "hairColor", cl.c.hairColor);

    if (entry.cock === null) {
        entry.cock = cl.c.cock;
    }
    else if (cl.c.cock !== entry.cock && characterCanSeeCock) {
        changes.cock = true;
        entry.cock = cl.c.cock;
    }

    if (cl.c.chastity !== null && characterCanSeeCock && !entry.chastity) {
        changes.chastity = true;
        entry.chastity = true;
    }

    changes.anyChanges = (changes.xdress || changes.panties || changes.chest || changes.leg || changes.hairLength || changes.hairColor || changes.cock || changes.chastity);
    return changes;
};

gender.setChanges = function (name, cType) {
    var entry = gender.entry(name);

    switch (cType) {
        case "xdress": entry.xdress = cl.isCrossdressing(); break;
        case "panties":
            if (cl.pantiesTxt() === "panties")
                entry.panties = true;
            break;
        case "chest":
        case "leg":
        case "hairLength":
        case "hairColor":
        case "cock":
            entry[cType] = gender.currentValue(cType);
            break;
        case "chastity":
            if (cl.c.chastity !== null)
                entry.chastity = true;
            break;
        default: console.log("gender.setChanges cType not found: " + cType); break;
    }
};

gender.getChange = function (name, cType) {
    var entry = gender.entry(name);

    switch (cType) {
        case "xdress": return entry.xdress; 
        case "panties": return entry.panties; 
        case "chastity": return entry.chastity;
        case "chest":
        case "leg":
        case "hairLength":
        case "hairColor":
        case "cock":
            return entry[cType] !== gender.currentValue(cType);
        default: console.log("gender.setChanges cType not found: " + cType); break;
    }
};

gender.get = function (name, cType) {
    var entry = gender.entry(name);
    switch (cType) {
        case "xdress":
        case "panties":
        case "chest":
        case "leg":
        case "hairLength":
        case "hairColor":
        case "cock":
        case "chastity":
            return entry[cType];
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
        var entry = gender.entry(ra[i].name);
        if (entry === undefined)
            return;
        saveloop: for (j = 0; j < gender.changes.length; j++) {
            if (ra[i].name === gender.changes[j].name) {
                gender.changes[j].xdress = ra[i].xdress;
                gender.changes[j].panties = ra[i].panties !== undefined ? ra[i].panties : gender.changes[j].panties;
                gender.changes[j].chest = ra[i].chest;
                gender.changes[j].leg = ra[i].leg;
                gender.changes[j].hairLength = ra[i].hairLength !== undefined ? ra[i].hairLength : ra[i].hair;
                gender.changes[j].hairColor = ra[i].hairColor !== undefined ? ra[i].hairColor : gender.changes[j].hairColor;
                gender.changes[j].cock = ra[i].cock;
                gender.changes[j].chastity = ra[i].chastity !== undefined ? ra[i].chastity : gender.changes[j].chastity;
                break saveloop;
            }
        }
    });
};
