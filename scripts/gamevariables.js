﻿var sex = {};
var levels = {};
var daily = {};
var gv = {};
var sissy = {};
var t = {}; //remove this

gv.difficulty = 0;

sex.st = new Array();
levels.st = new Array();
daily.st = new Array();
gv.st = new Array();

t.modLevel = function (id, amount) {
    console.log("kill me");
    g.popUpNotice(sissy.levels[id] + " changed ")
}

t.statsUpdate = function (num) {
    sissy.stats[num].c++;
    g.popUpNotice("Your love of " + sissy.stats[num].n + " increased");
}

t.makeGraph = function () {

};

gv.init = function () {
    gv.st = [
        //stats
        { n: "energy", t: 95, q: "energy" },
        { n: "maxenergy", t: 100, q: "zero" },
        { n: "hormone", t: 0, q: "hundred" },
        { n: "autohormone", t: false, q: "bool" },
        { n: "money", t: 100, q: "money" },
        { n: "arousal", t: 5, q: "hundred" },

        //character
        { n: "map", t: 0, q: "int" },
        { n: "shower", t: g.startDate, q: "date" },
        { n: "bladder", t: 0, q: "zero" },
        { n: "cum", t: g.startDate, q: "date" },
        { n: "chastityLock", t: false, q: "bool" },
        { n: "missyWeekly", t: "", q: "string" },

        //Settings
        { n: "fantasyCreatures", t: false, q: "bool" },
        { n: "fightspeed", t: 1250, q: "int" },
        { n: "difficulty", t: 1, q: "int" },
        { n: "clock24", t: "12", q: "string" },
        { n: "cheatMode", t: false, q: "bool" },
        { n: "transformation", t: "voluntary", q: "string" },

        //virgin
        { n: "virginMouth", t: 0, q: "string" },
        { n: "virginDick", t: 0, q: "string" },
        { n: "virginAss", t: 0, q: "string" },
        { n: "virginPussy", t: 0, q: "string" },

        //jobs
        { n: "jobapplynurse", t: 0, q: "int" },
        { n: "jobapplyconst", t: 0, q: "int" },
        { n: "jobapplybeaver", t: 0, q: "int" },

        //landlord
        { n: "momClosetLube", t: 3, q: "int" },
        { n: "momClosetMoney", t: 7, q: "int" },
        { n: "rent", t: 50, q: "zero" },
        { n: "rentOwed", t: 0, q: "zero" },
        { n: "rentKnockOff", t: 0, q: "zero" },

        //lola / eva
        { n: "lockdrawer", t: false, q: "bool" },

        //room decoration
        { n: "painting", t: "", q: "string" },

        //firstTime
        { n: "firstTimeInWardrobe", t: false, q: "bool" },
        { n: "pamphletConstSite", t: false, q: "bool" },
        { n: "lolaPanties", t: false, q: "bool" },
        { n: "momsPanties", t: false, q: "bool" },

        //sissyschool
        { n: "sissySchoolClass", t: "", q: "" },
        { n: "sissySchoolClassDays", t: 0, q: "int" },


        { n: "pill", t: null, q: "string" },

        //missy
        { n: "chastity", t: null, q: "date" },

        

        //{ n: "sissy", t: 0, q: "sissy" },
        //{ n: "usedSissyPoints", t: 0, q: "sissy" },

        { n: "domEvent", t: 0, q: "int" },


        { n: "jobConstructionPay", t: 0, q: "zero" },
        //{ n: "jobConstWorkToday", t: 0, q: "int" },

        { n: "momearnbackhome", t: 0, q: "int" },


        { n: "reddoorloc", t: 1, q: "int" },
        { n: "makeup", t: 0, q: "int" },
        { n: "sewerEnd", t: 0, q: "int" },
        { n: "sewerMap", t: "", q: "string" },
        { n: "sewerID", t: 0, q: "int" },
        { n: "forestMap", t: null, q: "string" },
        { n: "forestVisit", t: null, q: "string" },
        { n: "shinkCock", t: false, q: "bool" },
        
        { n: "puter", t: false, q: "bool" },
        { n: "slimeMonsters", t: true, q: "bool" },

        { n: "displayMenu", t: true, q: "bool" },
        { n: "daysCult", t: 0, q: "int" },

        { n: "mascot", t: 0, q: "int" },
        { n: "subdom", t: 50, q: "hundred" },
        { n: "pink", t: 0, q: "int" },
        { n: "milk", t: -1, q: "int" },
        { n: "cat", t: -1, q: "int" },
        { n: "cheerleader", t: 0, q: "hundred" },
        { n: "cheerlevel", t: 0, q: "int" },
        { n: "stripper", t: 0, q: "hundred" },
        { n: "stripperlevel", t: 0, q: "int" },
        { n: "waitressSteal", t: false, q: "bool" },

        { n: "fightsex", t: 1250, q: "int" },
        { n: "fightWon", t: 0, q: "int" },
        { n: "fightLost", t: 0, q: "int" },
        { n: "fightControlWon", t: 0, q: "int" },
        { n: "fightControlLost", t: 0, q: "int" },
        { n: "superPunch", t: 0, q: "int" },
        { n: "fame", t: 0, q: "hundred" },
        { n: "spankyprices", t: false, q: "bool" },

        { n: "girlname", t: "Scarlett", q: "string" },
        { n: "quest3", t: null, q: "string" },

        { n: "jobConstGetRaise", t: false, q: "bool" },
        { n: "lockboobs", t: false, q: "bool" },
        { n: "lockbutt", t: false, q: "bool" },

    ];

    daily.st = [
        { n: "chloe", t: false },
        { n: "landlord", t: false },
        { n: "eva", t: false },
        { n: "lola", t: false },
        { n: "tif", t: false },
        { n: "candy", t: false },
        { n: "envy", t: false },
        { n: "jones", t: false },
        { n: "rachel", t: false },
        { n: "zoey", t: false },
        { n: "tim", t: false },
        { n: "cindy", t: false },
        { n: "keaton", t: false },
        { n: "bigguy", t: false },
        { n: "g", t: false },
        { n: "doc", t: false },

        { n: "momChoreBed", t: false },
        { n: "momChoreDishes", t: false },
        { n: "homeShowerPeek", t: false },
        { n: "momRaidCloset", t: false },

        { n: "construction", t: false },
        { n: "buttholePlay", t: false },
        { n: "zbar", t: false },
        { n: "gold0", t: false },
        { n: "petcat", t: false },
        { n: "cardgame", t: false },
        { n: "cultrun", t: false },
        { n: "tookHormonePill", t: false }
    ];

    levels.st = [
        { id: 0, n: "pi", d: "Investigation", c: 0, l: 0, autoLevel: true, display: true },
        { id: 1, n: "xdress", d: "Sissy", c: 0, l: 0, autoLevel: true, display: true },
        { id: 2, n: "sub", d: "Submissive", c: 0, l: 0, autoLevel: true, display: true },
        { id: 3, n: "dom", d: "Dominate", c: 0, l: 0, autoLevel: true, display: true },
        { id: 4, n: "oral", d: "Cock Sucking", c: 0, l: 0, autoLevel: true, display: true },
        { id: 5, n: "anal", d: "Anal", c: 0, l: 0, autoLevel: true, display: true },
        { id: 6, n: "cum", d: "Cum", c: 0, l: 0, autoLevel: true, display: true },
        { id: 7, n: "piss", d: "Piss", c: 0, l: 0, autoLevel: true, display: true },
        { id: 8, n: "beast", d: "Beast", c: 0, l: 0, autoLevel: true, display: true },
        { id: 9, n: "int", d: "Intelligence", c: 0, l: 0, autoLevel: true, display: true },
        { id: 10, n: "charisma", d: "Charisma", c: 0, l: 0, autoLevel: true, display: true },
        { id: 11, n: "fame", d: "Fame", c: 0, l: 0, autoLevel: true, display: true }, //how likely you are to get raped

        { id: 12, n: "fitness", d: "Fitness", c: 0, l: 0, autoLevel: true, display: true },
        { id: 13, n: "strength", d: "Strength", c: 0, l: 0, autoLevel: true, display: true },
        { id: 14, n: "notused", d: "Not used", c: 0, l: 0, autoLevel: true, display: true },
        { id: 15, n: "defense", d: "Pain Tolerance", c: 0, l: 0, autoLevel: true, display: true },
        { id: 16, n: "cheer", d: "Cheerleader", c: 0, l: 0, autoLevel: false, display: true },
        { id: 17, n: "stripper", d: "Stripping", c: 0, l: 0, autoLevel: true, display: true },
        { id: 18, n: "whore", d: "Whore", c: 0, l: 0, autoLevel: true, display: true },
    ];

    sex.st = [
        { id: 0, type: "anal", give: true, gender: "m", c: 0 },
        { id: 1, type: "anal", give: true, gender: "f", c: 0 },
        { id: 2, type: "anal", give: false, gender: "m", c: 0 },
        { id: 3, type: "anal", give: false, gender: "f", c: 0 },

        { id: 4, type: "oral", give: true, gender: "m", c: 0 },
        { id: 5, type: "oral", give: true, gender: "f", c: 0 },
        { id: 6, type: "oral", give: false, gender: "m", c: 0 },
        { id: 7, type: "oral", give: false, gender: "f", c: 0 },

        { id: 8, type: "hand", give: true, gender: "m", c: 0 },
        { id: 9, type: "hand", give: true, gender: "f", c: 0 },
        { id: 10, type: "hand", give: false, gender: "m", c: 0 },
        { id: 11, type: "hand", give: false, gender: "f", c: 0 },

        { id: 12, type: "fist", give: true, gender: "m", c: 0 },
        { id: 13, type: "fist", give: true, gender: "f", c: 0 },
        { id: 14, type: "fist", give: false, gender: "m", c: 0 },
        { id: 15, type: "fist", give: false, gender: "f", c: 0 },

        { id: 16, type: "foot", give: true, gender: "m", c: 0 },
        { id: 17, type: "foot", give: true, gender: "f", c: 0 },
        { id: 18, type: "foot", give: false, gender: "m", c: 0 },
        { id: 19, type: "foot", give: false, gender: "f", c: 0 },

        { id: 20, type: "footworship", give: true, gender: "m", c: 0 },
        { id: 21, type: "footworship", give: true, gender: "f", c: 0 },
        { id: 22, type: "footworship", give: false, gender: "m", c: 0 },
        { id: 23, type: "footworship", give: false, gender: "f", c: 0 },

        { id: 24, type: "pussy", give: true, gender: "m", c: 0 },
        { id: 25, type: "pussy", give: true, gender: "f", c: 0 },
        { id: 26, type: "pussy", give: false, gender: "m", c: 0 },
        { id: 27, type: "pussy", give: false, gender: "f", c: 0 },

        { id: 28, type: "piss", give: true, gender: "m", c: 0 },
        { id: 29, type: "piss", give: true, gender: "f", c: 0 },
        { id: 30, type: "piss", give: false, gender: "m", c: 0 },
        { id: 31, type: "piss", give: false, gender: "f", c: 0 },

        { id: 32, type: "drankpiss", give: true, gender: "m", c: 0 },
        { id: 33, type: "drankpiss", give: true, gender: "f", c: 0 },
        { id: 34, type: "drankpiss", give: false, gender: "m", c: 0 },
        { id: 35, type: "drankpiss", give: false, gender: "f", c: 0 },

        { id: 36, type: "spit", give: true, gender: "m", c: 0 },
        { id: 37, type: "spit", give: true, gender: "f", c: 0 },
        { id: 38, type: "spit", give: false, gender: "m", c: 0 },
        { id: 39, type: "spit", give: false, gender: "f", c: 0 },

        { id: 40, type: "boob", give: true, gender: "m", c: 0 },
        { id: 41, type: "boob", give: true, gender: "f", c: 0 },
        { id: 42, type: "boob", give: false, gender: "m", c: 0 },
        { id: 43, type: "boob", give: false, gender: "f", c: 0 },

        { id: 44, type: "beast", give: true, gender: "m", c: 0 },
        { id: 45, type: "beast", give: true, gender: "f", c: 0 },
        { id: 46, type: "beast", give: false, gender: "m", c: 0 },
        { id: 47, type: "beast", give: false, gender: "f", c: 0 },
    ];
};



gv.i=function(n){var r=-1;for(i=0;i<gv.st.length;i++)if(gv.st[i].n===n){r=i;break}return r}; //returns index for g.st by name
daily.i=function(n){var r=-1;for(i=0;i<daily.st.length;i++)if(daily.st[i].n===n){r=i;break}return r}; //returns index for daily.st by name
levels.i=function(n){var r=-1;for(i=0;i<levels.st.length;i++)if(levels.st[i].n===n){r=i;break}return r}; //returns index for levels.st by name

gv.get=function(n){var t=gv.i(n);return t>-1?gv.st[t].t:(console.log("gv.st missing name: "+n),null)}; //gets g.st
daily.get=function(n){var t=daily.i(n);return t>-1?daily.st[t].t:(console.log("daily.st missing name: "+n),null)}; //gets daily.st
levels.get=function(l){var n=levels.i(l);return n>-1?{c:levels.st[n].c,l:levels.st[n].l}:(console.log("levels.st missing name: "+l),null)}; //gets levels

daily.set=function(t){var n=daily.i(t);n>0?daily.st[n].t=!0:console.log("daily set "+t+" not found")}; //sets daily to true
gv.set=function(t,c){var s,e,i=gv.i(t);s=gv.st[i].t,gv.st[i].t=c,e=c-s,g.checkPop(t,e)};

gv.mod = function (name, amount) {
    var i, index, type;
    index = gv.i(name);

    if (index > -1) {
        type = gv.st[index].q;
        switch (type) {
            case "zero":
                gv.st[index].t += amount;
                if (gv.st[index].t < 0)
                    gv.st[index].t = 0;
                g.checkPop(name, amount);
                break;
            case "money":
                gv.st[index].t += amount;
                if (gv.st[index].t < 0)
                    gv.st[index].t = 0;
                g.checkPop(name, amount);
                $('#char_money').text('$' + gv.st[index].t);
                break;
            case "hundred":
                gv.st[index].t += amount;
                if (gv.st[index].t < 0)
                    gv.st[index].t = 0;
                if (gv.st[index].t > 100)
                    gv.st[index].t = 100;
                g.checkPop(name, amount);
                break;
            case "energy":
                var maxEnergy = gv.get("maxenergy");
                gv.st[index].t += amount;
                if (gv.st[index].t < 0)
                    gv.st[index].t = 0;
                if (gv.st[index].t > maxEnergy)
                    gv.st[index].t = maxEnergy;
                g.checkPop(name, amount);
                sstat.makeGraph();
                break;
            case "bool":
                gv.st[index].t = amount;
                break;
            case "int":
                gv.st[index].t += amount;
                break;
            case "date":
                gv.st[index].t = new Date(gv.st[index].t.getTime() + (amount * 60000));
                break;
            default:
                console.log("unknown g.mod type: " + type + ", name: " + name);
                break;
        }
    }
    else
        console.log("unknown g.mod: " + name);
};
levels.mod = function (name, amount, targetLevel) {
    var actualAmount;
    for (var i = 0; i < levels.st.length; i++) {
        if (levels.st[i].n === name) {
            if (levels.st[i].l <= targetLevel)
                actualAmount = amount;
            else {
                actualAmount = 1; //fix this later
            }
            levels.st[i].c += actualAmount;
            g.popUpNotice(levels.st[i].d + (amount >= 0 ? " has increased " : " has decreased ") + actualAmount + " points! ");
            if (levels.st[i].c > 99) {
                if (levels.st[i].autoLevel) {
                    var holder = levels.st[i].c - 100;
                    levels.st[i].l += 1;
                    levels.st[i].c = 0;
                    levels.mod(name, holder, targetLevel);
                    g.popUpNotice("You gained a new level for: " + levels.st[i].d + "!" + levels.desc(levels.st[i].n, levels.st[i].l));
                }
                else {
                    levels.st[i].c = 100;
                }
            }
        }
    }
    sstat.makeGraph();
};

sex.mod = function (type, give, gender, number) {
    for (var i = 0; i < sex.st.length; i++) {
        if (sex.st[i].type === type && sex.st[i].give === give && sex.st[i].gender === gender) {
            sex.st[i].c += number;
            break;
        }
    }
}

daily.newday = function () {
    for (var i = 0; i < daily.st.length; i++)
        daily.st[i].t = false;
};

levels.desc = function (name, level) {
    if (name === "fitness") {
        return { count: -1, txt: (level * 5) + " Energy Boost" };
    }
    if (name === "punch") {
        return { count: -1, txt: "+" + (level) + " Punch Power" };
    }
    if (name === "kick") {
        return { count: -1, txt: "+" + (level * 5) + " Kick Power" };
    }
    if (name === "defense") {
        return { count: -1, txt: (level * 5) + " Defense" };
    }
    if (name === "int") {
        return { count: -1, txt: "+" + level + " Lock pick and Pick Pocket" };
    }
    if (name === "charisma") {
        return { count: -1, txt: "+" + level + " Charisma" };
    }
    if (name === "fame") {
        return { count: -1, txt: "+" + level + " Random Encounters" };
    }

    var levels = new Array();
    switch (name) {
        case "xdress":
            levels = [
                { id: 0, txt: "Boys clothes only" },
                { id: 1, txt: "Can wear panties" },
                { id: 2, txt: "Can cross dress at home and Missy's" },
                { id: 3, txt: "Can work cases crossdressing" },
                { id: 4, txt: "Only wear panties and bra" },
                { id: 5, txt: "Can modestly cross dress in public " },
                { id: 6, txt: "Can wear sexy outfits" },
                { id: 7, txt: "Don't have to wear panties and bra" },
                { id: 8, txt: "Can wear slutty clothing" },
                { id: 9, txt: "Wear what ever, or nothing at all" }
            ];
            break;
        case "sub":
            levels = [
                { id: 0, txt: "Not submissive" },
                { id: 1, txt: "Can kiss Missy's feet" },
                { id: 2, txt: "Can x Missy" },
                { id: 3, txt: "Can offer mouth in violent situations" },
                { id: 4, txt: "can y missy" },
                { id: 5, txt: "Can offer ass in violent situations" },
                { id: 6, txt: "TBD" },
                { id: 7, txt: "TBD" },
                { id: 8, txt: "TBD" },
                { id: 9, txt: "TBD" },
            ];
            break;
        case "humiliation":
            levels = [
                { id: 0, txt: "Doesn't like humiliation" },
            ];
            break;
        case "oral":
            levels = [
                { id: 0, txt: "I'm not putting that in my mouth" },
                { id: 1, txt: "Can suck small dildos at home" },
                { id: 2, txt: "Can suck medium dildos at home" },
                { id: 3, txt: "Can deepthroat dildos at home" },
                { id: 4, txt: "Can suck a small cock" },
                { id: 5, txt: "Can suck large cocks" },
                { id: 6, txt: "Can deepthroat cock" },
                { id: 7, txt: "Can deepthroat large cocks" },
                { id: 8, txt: "Can suck horse cock" },
                { id: 9, txt: "Need to suck cock everyday!" },
            ];
            break;
        case "anal":
            levels = [
                { id: 0, txt: "My butt is for pooping" },
                { id: 1, txt: "Can stick your finger in your butt" },
                { id: 2, txt: "Can play with a tiny dildo" },
                { id: 3, txt: "Can play with a small dildo" },
                { id: 4, txt: "Can play with a medium dildo" },
                { id: 5, txt: "Can take a dick in the ass" },
                { id: 6, txt: "Can play with a large dildo" },
                { id: 7, txt: "Can play with a huge dildo" },
                { id: 8, txt: "Can take a horse cock in the ass" },
                { id: 9, txt: "Need anal everyday!" },
            ];
            break;
        case "cum":
            levels = [
                { id: 0, txt: "Ewwww" },
                { id: 1, txt: "You can taste your own" },
                { id: 2, txt: "Can work in the sperm store" },
                { id: 3, txt: "You can cum in your own mouth" },
                { id: 4, txt: "You can swallow" },
                { id: 5, txt: "You can get creampied" },
                { id: 6, txt: "cum gains 5 energy" },
                { id: 7, txt: "cum gains 15 energy" },
                { id: 8, txt: "cum gains 25 energy" },
                { id: 9, txt: "You are addicted to cum" },
            ];
            break;
        case "pi":
            levels = [
                { id: 0, txt: "Can watch things (first case)" },
                { id: 1, txt: "Speach / influnce increased" },
                { id: 2, txt: "Pick pocket" },
                { id: 3, txt: "unlock locked doors" },
                { id: 4, txt: "Speach / influnce increased + 2" },
                { id: 5, txt: "Pick pocket + 2" },
                { id: 6, txt: "unlock locked doors + 2" },
                { id: 7, txt: "TBD" },
                { id: 8, txt: "TBD" },
                { id: 9, txt: "TBD" },
            ];
            break;
        case "piss":
            levels = [
                { id: 0, txt: "Piss is gross" },
                { id: 1, txt: "Can be pissed on by girl" },
                { id: 2, txt: "Can be pissed on my guy" },
                { id: 3, txt: "Can drink piss" },
                { id: 4, txt: "piss drink + 5 energy" },
                { id: 5, txt: "piss drink + 10 energy" },
                { id: 6, txt: "piss drink + 15 energy" },
                { id: 7, txt: "piss drink + 25 energy" },
                { id: 8, txt: "piss drink + 30 energy" },
                { id: 9, txt: "Addicted to piss" },
            ];
            break;
        case "beast":
            levels = [
                { id: 0, txt: "Avoids animals" },
                { id: 1, txt: "Can pet animals" },
                { id: 2, txt: "Can work as horse brusher at Rachel's" },
                { id: 3, txt: "Can play with animals" },
                { id: 4, txt: "Can get knotty dildo" },
                { id: 5, txt: "Hand job" },
                { id: 6, txt: "blow job" },
                { id: 7, txt: "anal" },
                { id: 8, txt: "Horse!" },
                { id: 9, txt: "Subserviant to beasts (Can't stop it)" },
            ];
            break;
        case "cheer":
            levels = [
                { id: 0, txt: "Not a cheerleader" },
                { id: 1, txt: "Clumsy" },
                { id: 2, txt: "Dumb" },
                { id: 3, txt: "Washing Machine" },
                { id: 4, txt: "Beginner" },
                { id: 5, txt: "Stacy's Bitch" },
                { id: 6, txt: "Konga Line" },
                { id: 7, txt: "Can Cheer at the Games!" },
                { id: 8, txt: "Small Dick Loser" },
                { id: 9, txt: "Real Cheerleader!" },
                { id: 10, txt: "Cum Bucket" },
            ];
            break;
        
    };
    if (levels.length === 0) {
        console.log("no level " + name);
        return { count: -1, txt: "not found" };
    }
    else if (level >= levels.length) {
        return { count: levels.length, txt: levels[levels.length].text };
    }
    else {
        return { count: levels.length, txt: levels[level].txt };
    }
};

levels.oralGive = function (size, swallow) {
    levels.mod("oral", 25, 999);
    if (swallow) {
        levels.mod("cum", 25, 999);
    }
    else {
        cl.c.cumface = true;
        cl.display();
    }
}

levels.anal = function (size) {
    switch (levels.analTake(size).n) {
        case "noop":
            //do nothing;
            break;
        case "easy":
            levels.mod("anal", 10, 999);
            break;
        case "normal":
            levels.mod("anal", 20, 999);
            break;
        case "brutal":
            levels.mod("anal", 40, 999);
            break;
        case "broken":
            levels.mod("anal", 100, 999);
            break;
    };
};

levels.analTake = function (size) {
    //1: tiny (finger)
    //2: small
    //3: regular (dick)
    //4: large (large dick)
    //5: huge
    //6: giant
    var analLevel = levels.get("anal").l;
    switch (analLevel) {
        case 0:
            switch (size) {
                case 1: retvar = "normal"; break;
                case 2: retvar = "normal"; break;
                case 3: retvar = "brutal"; break;
                case 4: retvar = "broken"; break;
                case 5: retvar = "broken"; break;
                case 6: retvar = "broken"; break;
            };
            break;
        case 1:
            switch (size) {
                case 1: retvar = "normal"; break;
                case 2: retvar = "normal"; break;
                case 3: retvar = "brutal"; break; //level 1 should be brutal for anal 101
                case 4: retvar = "brutal"; break;
                case 5: retvar = "broken"; break;
                case 6: retvar = "broken"; break;
            };
            break;
        case 2:
            switch (size) {
                case 1: retvar = "easy"; break;
                case 2: retvar = "normal"; break;
                case 3: retvar = "normal"; break; //level 2 should be normal for anal 101
                case 4: retvar = "brutal"; break;
                case 5: retvar = "broken"; break;
                case 6: retvar = "broken"; break;
            };
            break;
        case 3:
            switch (size) {
                case 1: retvar = "easy"; break;
                case 2: retvar = "easy"; break;
                case 3: retvar = "normal"; break;
                case 4: retvar = "brutal"; break;
                case 5: retvar = "broken"; break;
                case 6: retvar = "broken"; break;
            };
            break;
        case 4:
            switch (size) {
                case 1: retvar = "noop"; break;
                case 2: retvar = "easy"; break;
                case 3: retvar = "normal"; break;
                case 4: retvar = "brutal"; break;
                case 5: retvar = "brutal"; break;
                case 6: retvar = "broken"; break;
            };
            break;
        case 5:
            switch (size) {
                case 1: retvar = "noop"; break;
                case 2: retvar = "easy"; break;
                case 3: retvar = "normal"; break;
                case 4: retvar = "normal"; break;
                case 5: retvar = "brutal"; break;
                case 6: retvar = "broken"; break;
            };
            break;
        case 6:
            switch (size) {
                case 1: retvar = "noop"; break;
                case 2: retvar = "noop"; break;
                case 3: retvar = "normal"; break;
                case 4: retvar = "normal"; break;
                case 5: retvar = "brutal"; break;
                case 6: retvar = "broken"; break;
            };
            break;
        case 7:
            switch (size) {
                case 1: retvar = "noop"; break;
                case 2: retvar = "noop"; break;
                case 3: retvar = "easy"; break;
                case 4: retvar = "normal"; break;
                case 5: retvar = "brutal"; break;
                case 6: retvar = "broken"; break;
            };
            break;
        case 8:
            switch (size) {
                case 1: retvar = "noop"; break;
                case 2: retvar = "noop"; break;
                case 3: retvar = "easy"; break;
                case 4: retvar = "normal"; break;
                case 5: retvar = "normal"; break;
                case 6: retvar = "brutal"; break;
            };
            break;
        case 9:
            switch (size) {
                case 1: retvar = "noop"; break;
                case 2: retvar = "noop"; break;
                case 3: retvar = "easy"; break;
                case 4: retvar = "easy"; break;
                case 5: retvar = "normal"; break;
                case 6: retvar = "normal"; break;
            };
            break;
        case 10:
            switch (size) {
                case 1: retvar = "noop"; break;
                case 2: retvar = "noop"; break;
                case 3: retvar = "easy"; break;
                case 4: retvar = "easy"; break;
                case 5: retvar = "easy"; break;
                case 6: retvar = "normal"; break;
            };
            break;
        default:
            switch (size) {
                case 1: retvar = "noop"; break;
                case 2: retvar = "noop"; break;
                case 3: retvar = "easy"; break;
                case 4: retvar = "easy"; break;
                case 5: retvar = "easy"; break;
                case 6: retvar = "normal"; break;
            };
            break;
    }
    switch (retvar) {
        case "noop": return { n: retvar, c: 0 };
        case "easy": return { n: retvar, c: 1 };
        case "normal": return { n: retvar, c: 2 };
        case "brutal": return { n: retvar, c: 3 };
        case "broken": return { n: retvar, c: 4 };
    };
};

sex.getFuck = function () {
    var x = {
        anal: sex.st[0].c + sex.st[1].c,
        oral: sex.st[4].c + sex.st[5].c,
        hand: sex.st[8].c + sex.st[9].c,
        foot: sex.st[16].c + sex.st[17].c,
        pussy: sex.st[24].c + sex.st[25].c,
        tits: sex.st[40].c + sex.st[41].c,
        beast: sex.st[44].c + sex.st[45].c,
    };

    return {
        anal: x.anal,
        oral: x.oral,
        hand: x.hand,
        foot: x.foot,
        pussy: x.pussy,
        tits: x.tits,
        beast: x.beast,
        virginDick: x.anal === 0 && x.oral === 0 && x.hand === 0 && x.foot === 0 && x.pussy === 0 && x.tits === 0 && x.beast === 0
    };
};

gv.timeTxt = function (hour, minute) {
    if (gv.get("clock24") === "12") 
        return (hour % 12) + ":" + (minute < 10 ? ("0" + minute.toString()) : minute) + " " + hour < 12 ? "AM" : "PM";
    else
        return hour + ":" + (minute < 10 ? ("0" + minute.toString()) : minute)
};

gv.save = function () {
    var i;
    var retArray = {
        gv: new Array(),
        daily: new Array(),
        levels: new Array(),
        sex: new Array()
    };
    //save by name
    for (i = 0; i < gv.st.length; i++) {
        retArray.gv.push({
            n: gv.st[i].n,
            t: gv.st[i].t
        });
    };
    //save by name if true
    for (i = 0; i < daily.st.length; i++) {
        if (daily.st[i].t)
            retArray.daily.push(daily.st[i].n);
    }
    //save by index
    for (i = 0; i < levels.st.length; i++) {
        retArray.levels.push({
            c: levels.st[i].c,
            l: levels.st[i].l
        });
    }
    //save by index
    for (i = 0; i < sex.st.length; i++) {
        retArray.sex.push(sex.st[i].c);
    }
    return retArray;
};

gv.load = function (rma) {
    gv.init();

    for (i = 0; i < rma.gv.length; i++) {
        for (j = 0; j < gv.st.length; j++) {
            if (rma.gv[i].n === gv.st[j].n) {
                if (gv.st[j].q === "date")
                    gv.st[j].t = new Date(rma.gv[i].t);
                else
                    gv.st[j].t = rma.gv[i].t;
                break;
            }
        }
    }

    for (i = 0; i < rma.daily.length; i++) {
        for (j = 0; j < daily.st.length; j++) {
            if (rma.daily[i].n === daily.st[j].n) {
                daily.st[j].t = true;
                break;
            }
        }
    }

    for (i = 0; i < rma.levels.length; i++) {
        levels.st[i].c = rma.levels[i].c;
        levels.st[i].l = rma.levels[i].l;
    }
    
    for (i = 0; i < rma.sex.length; i++) {
        sex.st[i].c = rma.sex[i];
    }
};

sissy.st = [
    { id: 0, pID: [], icon: "shave101", x: 3, y: 0, name: "Smoothness 101", description: "A smooth sissy is a sexy sissy.", ach: false, active: true, room: 180 },
    { id: 1, pID: [], icon: "lube101", x: 6, y: 0, name: "Lube 101", description: "The importance and use of lube", ach: false, active: true },

    { id: 2, pID: [0, 1], icon: "fem101", x: 1, y: 1, name: "Feminization 101", description: "Act like a lady (sitting)", ach: false, active: true },
    { id: 3, pID: [0, 1], icon: "anal101", x: 10, y: 1, name: "Anal 101", description: "Learn how to use the bussy", ach: false, active: true },
    { id: 4, pID: [0, 1], icon: "chastity101", x: 3, y: 1, name: "Chastity 101", description: "Get comfortable in chastity", ach: false, active: true },
    { id: 5, pID: [0, 1], icon: "toilet101", x: 5, y: 1, name: "Toilet 101", description: "Learn how to pee like a lady", ach: false, active: true },
    { id: 6, pID: [0, 1], icon: "oral101", x: 8, y: 1, name: "Oral 101", description: "Learn the basics of oral", ach: false, active: true },
    { id: 7, pID: [0, 1], icon: "bondage101", x: 12, y: 1, name: "Bondage 101", description: "Ropes are your friend", ach: false, active: true },
    { id: 8, pID: [0, 1], icon: "cum101", x: 7, y: 1, name: "Cum Eating 101", description: "Have a taste of your own", ach: false, active: true },
    { id: 9, pID: [2, 3, 6], icon: "sissy101", x: 5, y: 2, name: "Beginner Sissy Test", description: "Sissy Test 1! Once you pass you will be issued your first sissy uniform!", ach: false, active: true },

    { id: 7, pID: [1], icon: "prostate210", x: 9, y: 3, name: "Prostate 210", description: "Find your bussy p-spot", ach: false, active: true },
    { id: 8, pID: [1], icon: "buttplug212", x: 10, y: 4, name: "Buttplug 212", description: "Experaince the joy of being filled", ach: false, active: true },
    { id: 9, pID: [1], icon: "chastity201", x: 3, y: 5, name: "Chastity 201", description: "Expand your time in chastity", ach: false, active: true },
    { id: 10, pID: [1], icon: "enema205", x: 5, y: 2, name: "Enema 205", description: "A clean bussy makes everyone happy", ach: false, active: true },
    
];

sissy.passclass = function (className) {
    for (var i = 0; i < sissy.st.length; i++) {
        if (sissy.st[i].icon === className) {
            sissy.st[i].ach = true;
            break;
        }
    }
};

















//to be removed
//sissy.steps = [
g.sissy = [

    { id: 0, pID: [54], icon: "missy1", x: 3, y: 10, name: "Tea Time", description: "Follow Instructions", ach: false, active: true, points: 0, h: false },
    { id: 1, pID: [0], icon: "missy2", x: 4, y: 10, name: "Patience", description: "Follow Instructions", ach: false, active: true, points: 0, h: false },
    { id: 2, pID: [20], icon: "missy3", x: 6, y: 11, name: "Furniture", description: "You will learn to know your place.", ach: false, active: true, points: 0, h: false },

    { id: 3, pID: [2], icon: "hypno0", x: 7, y: 11, name: "Hypno", description: "Watch the hypno tube", ach: false, active: true, points: 0, h: false },
    { id: 4, pID: [3], icon: "hypno1", x: 7, y: 12, name: "Hypno", description: "Watch the hypno tube", ach: false, active: true, points: 0, h: false },
    { id: 5, pID: [4], icon: "hypno2", x: 7, y: 13, name: "Hypno", description: "Watch the hypno tube", ach: false, active: false, points: 0, h: false },

    { id: 6, pID: [3], icon: "chastity", x: 8, y: 11, name: "Chastity Training", description: "What a worthless flag of skin you have", ach: false, active: true, points: 0, h: false },
    { id: 7, pID: [51], icon: "cock1", x: 10, y: 5, name: "Average Size Cock", description: "Just enough to still please women", ach: false, active: true, points: 1, h: false },
    { id: 8, pID: [7], icon: "cock2", x: 11, y: 4, name: "Below Average Cock", description: "Women will be dissapointed in your manhood", ach: false, active: true, points: 1, h: false },
    { id: 9, pID: [8], icon: "cock3", x: 12, y: 3, name: "Tiny pp", description: "Hahaha, that's too small to give anyone pleasure", ach: false, active: true, points: 1, h: false },
    { id: 10, pID: [9], icon: "cock4", x: 13, y: 2, name: "It's a Clitty", description: "You're no longer a man, sissy", ach: false, active: true, points: 1, h: false },
    { id: 11, pID: [51], icon: "cock5", x: 20, y: 9, name: "Wet Juicy Pussy", description: "Finally you've reached your final potential", ach: false, active: false, points: 2, h: false },

    { id: 12, pID: [6], icon: "bj", x: 9, y: 11, name: "Blow Me", description: "Work on your BJ skills", ach: false, active: true, points: 1, h: false },
    { id: 13, pID: [12], icon: "gloryhole0", x: 9, y: 13, name: "Glory Hole Slut", description: "Present your mouth at a glory hole", ach: false, active: true, points: 1, h: false },

    { id: 14, pID: [51], icon: "pink", x: 18, y: 5, name: "Pink Room", description: "Train in the Pink Room", ach: false, active: true, points: 1, h: false },

    { id: 15, pID: [12], icon: "redroom", x: 10, y: 11, name: "Red Room", description: "Prove your Worth", ach: false, active: true, points: 0, h: false },

    { id: 16, pID: [15], icon: "takeit", x: 11, y: 11, name: "Take It Slut", description: "Bend over and serve", ach: false, active: true, points: 0, h: false },
    { id: 17, pID: [16, 13], icon: "gloryhole1", x: 11, y: 13, name: "Anal Hole", description: "Present your ass at a glory hole", ach: false, active: true, points: 2, h: false },
    { id: 18, pID: [47, 48, 49], icon: "save", x: 18, y: 10, name: "Save Missy", description: "Save Missy", ach: false, active: true, points: 0, h: false },

    { id: 19, pID: [16], icon: "sewer", x: 12, y: 11, name: "Sewer", description: "Search the sewer", ach: false, active: true, points: 0, h: false },

    { id: 20, pID: [1], icon: "p0", x: 5, y: 10, name: "Meet and Greet", description: "Meet your new instructor", ach: false, active: true, points: 0, h: false },
    { id: 21, pID: [20], icon: "p1", x: 6, y: 9, name: "Sit Like A Lady", description: "How to sit like a proper lady", ach: false, active: true, points: 0, h: false },
    { id: 22, pID: [21], icon: "p2", x: 8, y: 9, name: "How to Pee", description: "How to pee like a lady", ach: false, active: true, points: 0, h: false },
    { id: 23, pID: [24], icon: "p3", x: 10, y: 9, name: "Dress", description: "How to dress like a lady", ach: false, active: true, points: 0, h: false },

    { id: 24, pID: [22], icon: "cross0", x: 10, y: 9, name: "Cross dress", description: "Cross Dressing Class", ach: false, active: true, points: 0, h: false },
    { id: 25, pID: [24], icon: "heels", x: 13, y: 24, name: "High Heels", description: "Learn how to walk in high heels", ach: false, active: false, points: 1, h: false },
    { id: 26, pID: [51], icon: "makeup0", x: 14, y: 5, name: "Makeup", description: "You can go out wearing makeup", ach: false, active: true, points: 1, h: false },
    { id: 27, pID: [26], icon: "makeup1", x: 15, y: 4, name: "Piercing", description: "You can get piercings", ach: false, active: true, points: 2, h: false },

    { id: 28, pID: [24], icon: "diner", x: 12, y: 9, name: "Diner", description: "Diner Case", ach: false, active: true, points: 0, h: false },

    { id: 29, pID: [28], icon: "cross1", x: 12, y: 8, name: "Cross dress", description: "You can cross dress in public", ach: false, active: true, points: 0, h: false },

    { id: 30, pID: [27], icon: "makeup2", x: 16, y: 3, name: "Tattoos", description: "You can get tattoos", ach: false, active: true, points: 3, h: false },

    { id: 31, pID: [51], icon: "clothes0", x: 12, y: 5, name: "Modeling 1", description: "You can buy sexy clothes", ach: false, active: true, points: 1, h: true },
    { id: 32, pID: [31], icon: "clothes1", x: 13, y: 4, name: "Modeling 2", description: "You don't have to wear panties or bra", ach: false, active: true, points: 2, h: true },
    { id: 33, pID: [32], icon: "clothes2", x: 14, y: 3, name: "Modeling 3", description: "You can buy slutty clothes", ach: false, active: true, points: 3, h: true },
    { id: 34, pID: [33], icon: "clothes3", x: 15, y: 2, name: "Modeling 4", description: "You can go out in the nude. Be careful you can still be arrested.", ach: false, active: true, points: 4, h: true },

    { id: 35, pID: [51], icon: "chest2", x: 6, y: 5, name: "A Cups", description: "Awwww you've spouted cute little buds", ach: false, active: true, points: 1, h: true },
    { id: 36, pID: [35], icon: "chest3", x: 7, y: 4, name: "B Cups", description: "A nice pair for a nice girl", ach: false, active: true, points: 2, h: true },
    { id: 37, pID: [36], icon: "chest4", x: 8, y: 3, name: "C Cups", description: "Any girl would be proud of these titties", ach: false, active: true, points: 3, h: true },
    { id: 38, pID: [37], icon: "chest5", x: 9, y: 2, name: "DD Cups", description: "Ok.. Now they're getting a bit big", ach: false, active: true, points: 4, h: true },
    { id: 39, pID: [38], icon: "chest6", x: 10, y: 1, name: "Bimbo Tits", description: "Only a complete bimbo whore would go this big", ach: false, active: true, points: 5, h: true },

    { id: 40, pID: [51], icon: "leg1", x: 8, y: 5, name: "Feminine Legs", description: "A nice pair of legs for a nice girl", ach: false, active: true, points: 1, h: true },
    { id: 41, pID: [40], icon: "leg2", x: 9, y: 4, name: "Tight Booty", description: "Men will start to notice a nice butt like this", ach: false, active: true, points: 2, h: true },
    { id: 42, pID: [41], icon: "leg3", x: 10, y: 3, name: "Big Booty", description: "Women will notice a big booty like this", ach: false, active: true, points: 3, h: true },
    { id: 43, pID: [42], icon: "leg4", x: 11, y: 2, name: "Phat Ass", description: "Everyone wants to slap a booty this big", ach: false, active: true, points: 4, h: true },
    { id: 44, pID: [43], icon: "leg5", x: 12, y: 1, name: "Porn Star Ass", description: "An ass built for cock", ach: false, active: true, points: 5, h: true },

    { id: 45, pID: [51], icon: "lip1", x: 16, y: 5, name: "Girl's Lips", description: "What a purdy mouth you have", ach: false, active: true, points: 1, h: true },
    { id: 46, pID: [45], icon: "lip2", x: 17, y: 4, name: "Bimbo Lips", description: "Everyone wants to fuck your soft lips", ach: false, active: true, points: 2, h: true },

    { id: 47, pID: [55], icon: "q1", x: 16, y: 8, name: "Quest 1", description: "Construction Site", ach: false, active: true, points: 0, h: false },
    { id: 48, pID: [55], icon: "q2", x: 16, y: 10, name: "Quest 2", description: "Rachel's Farm", ach: false, active: true, points: 0, h: false },
    { id: 49, pID: [55], icon: "q3", x: 16, y: 12, name: "Quest 3", description: "Investiate the Forest Queen's List", ach: false, active: true, points: 0, h: true },

    { id: 50, pID: [15], icon: "black", x: 10, y: 12, name: "Black Room", description: "Train in the Black Room", ach: false, active: true, points: 1, h: false },

    { id: 51, pID: [29], icon: "hormone", x: 12, y: 7, name: "Sissy Bimbo Pills", description: "Pills are good", ach: false, active: true, points: 0, h: false },

    { id: 52, pID: [52], icon: "gloryhole2", x: 11, y: 8, name: "Whore", description: "Work the street corner like the dirty slutty bimbo you are [Not Implemented]", ach: false, active: false, points: 3, h: false },
    { id: 53, pID: [18], icon: "end", x: 19, y: 10, name: "This is the end", description: "Take down the cult!", ach: false, active: true, points: 3, h: false },

    { id: 54, pID: [], icon: "missy0", x: 2, y: 10, name: "Contract", description: "Introduction", ach: false, active: true, points: 0, h: false },

    { id: 55, pID: [19, 28], icon: "redbox", x: 14, y: 10, name: "What's in the box", description: "Discover what's in the box! [Major event, make sure you're ready!]", ach: false, active: true, points: 0, h: false },
    { id: 56, pID: [0], icon: "cancel", x: 19, y: 2, name: "Cancel", description: "Cancel and leave the classroom", ach: false, active: true, points: 0, h: false },

    { id: 57, pID: [34], icon: "stripper", x: 13, y: 1, name: "Stripper", description: "Work as a stripper on a case", ach: false, active: false, points: 0, h: false },

    { id: 58, pID: [0], icon: "lube", x: 3, y: 11, name: "Lube", description: "Learn the importance of proper lubrication", ach: false, active: true, points: 1, h: false },
    { id: 59, pID: [58], icon: "dildos", x: 3, y: 12, name: "Dildos", description: "Shove toys in your pooper", ach: false, active: true, points: 1, h: false },

    { id: 60, pID: [55], icon: "q0", x: 15, y: 10, name: "Forest Queen", description: "Get information on the cult from the Forest Queen", ach: false, active: true, points: 0, h: false },

];

g.supersissy = function (all) {
    for (var i = 0; i < g.sissy.length; i++)
        g.sissy[i].ach = all;
};


gv.stats = [
    { id: 0, t: "cum", n: "swollow", c: 0 },
    { id: 1, t: "cum", n: "spit", c: 0 },
    { id: 2, t: "cum", n: "creamPied", c: 0 },
    { id: 3, t: "cum", n: "eat", c: 0 },

    { id: 4, t: "masturbate", n: "dick", c: 0 },
    { id: 5, t: "masturbate", n: "pussy", c: 0 },
    { id: 6, t: "masturbate", n: "vibrator", c: 0 },
    { id: 7, t: "masturbate", n: "oral", c: 0 },
    { id: 8, t: "masturbate", n: "finger", c: 0 },
    { id: 9, t: "masturbate", n: "dildo", c: 0 },

    { id: 10, t: "chastity", n: "days", c: 0 },

    { id: 11, t: "sissygasm", n: "m", c: 0 },
    { id: 12, t: "sissygasm", n: "f", c: 0 },

    { id: 13, t: "humiliate", n: "m", c: 0 },
    { id: 14, t: "humiliate", n: "f", c: 0 },

    { id: 15, t: "public", n: "m", c: 0 },
    { id: 16, t: "public", n: "f", c: 0 },

    { id: 17, t: "rape", n: "m", c: 0 },
    { id: 18, t: "rape", n: "f", c: 0 },

    { id: 19, t: "bondage", n: "m", c: 0 },
    { id: 20, t: "bondage", n: "f", c: 0 },

    { id: 21, t: "hit", n: "m", c: 0 },
    { id: 22, t: "hit", n: "f", c: 0 },

    { id: 23, t: "cbt", n: "m", c: 0 },
    { id: 24, t: "cbt", n: "f", c: 0 },

    { id: 25, t: "sph", n: "m", c: 0 },
    { id: 26, t: "sph", n: "f", c: 0 },

    { id: 27, t: "subdom", n: "dom", c: 0 },
    { id: 28, t: "subdom", n: "sub", c: 0 },

    { id: 29, t: "piss", n: "bed", c: 0 },
    { id: 30, t: "piss", n: "self", c: 0 },

    { id: 31, t: "enema", n: "take", c: 0 },

    { id: 32, t: "beast", n: "pet", c: 0 },
    { id: 33, t: "beast", n: "hand", c: 0 },
    { id: 34, t: "beast", n: "oral", c: 0 },

    { id: 35, t: "dislike", n: "anal", c: 0 },
    { id: 36, t: "dislike", n: "oral", c: 0 },
    { id: 37, t: "dislike", n: "cum", c: 0 },
    { id: 38, t: "dislike", n: "piss", c: 0 },

];
