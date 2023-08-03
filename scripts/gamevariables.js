var sex = {};
var levels = {};
var daily = {};
var gv = {};
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
        { n: "oncase", t: null, q: "string" },

        //Settings
        { n: "fantasyCreatures", t: false, q: "bool" },
        { n: "fightspeed", t: 1250, q: "int" },
        { n: "difficulty", t: 1, q: "int" },
        { n: "clock24", t: "12", q: "bool" },
        { n: "cheatMode", t: false, q: "bool" },

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

        //room decoration
        { n: "painting", t: "", q: "string" },

        //firstTime
        { n: "firstTimeInWardrobe", t: false, q: "bool" },
        { n: "pamphletConstSite", t: false, q: "bool" },


        { n: "pill", t: null, q: "string" },

        

        

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
        { n: "lockdrawer", t: false, q: "bool" },
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
        { id: 0, n: "pi", d: "Investigation", c: 0, l: 0, autoLevel: false, page: 1 },
        { id: 1, n: "xdress", d: "X-Dress", c: 0, l: 0, autoLevel: true, page: 1 },
        { id: 2, n: "sub", d: "Submissive", c: 0, l: 0, autoLevel: true, page: 1 },
        { id: 3, n: "dom", d: "Dominate", c: 0, l: 0, autoLevel: true, page: 1 },
        { id: 4, n: "oral", d: "Cock Sucking", c: 0, l: 0, autoLevel: true, page: 1 },
        { id: 5, n: "anal", d: "Anal", c: 0, l: 0, autoLevel: true, page: 1 },
        { id: 6, n: "cum", d: "Cum", c: 0, l: 0, autoLevel: true, page: 1 },
        { id: 7, n: "piss", d: "Piss", c: 0, l: 0, autoLevel: true, page: 1 },
        { id: 8, n: "beast", d: "Beast", c: 0, l: 0, autoLevel: true, page: 1 },
        { id: 9, n: "int", d: "Intelligence", c: 0, l: 0, autoLevel: true, page: 1 },
        { id: 10, n: "charisma", d: "Charisma", c: 0, l: 0, autoLevel: true, page: 1 },
        { id: 11, n: "fame", d: "Famous", c: 0, l: 0, autoLevel: true, page: 1 }, //how likely you are to get raped

        { id: 12, n: "fitness", d: "Fitness", c: 0, l: 0, autoLevel: true, page: 2 },
        { id: 13, n: "body", d: "Upper Strength", c: 0, l: 0, autoLevel: true, page: 2 },
        { id: 14, n: "leg", d: "Lower Strength", c: 0, l: 0, autoLevel: true, page: 2 },
        { id: 15, n: "defense", d: "Pain Tolerance", c: 0, l: 0, autoLevel: true, page: 2 },
        { id: 16, n: "cheer", d: "Cheerleader", c: 0, l: 0, autoLevel: false, page: 0 },
        { id: 17, n: "stripper", d: "Stripping", c: 0, l: 0, autoLevel: true, page: 0 },
        { id: 18, n: "whore", d: "Whore", c: 0, l: 0, autoLevel: true, page: 0 },
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

        { id: 40, type: "tits", give: true, gender: "m", c: 0 },
        { id: 41, type: "tits", give: true, gender: "f", c: 0 },
        { id: 42, type: "tits", give: false, gender: "m", c: 0 },
        { id: 43, type: "tits", give: false, gender: "f", c: 0 },

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
                    //levels.mod(name, holder, targetLevel);
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

levels.desc = function (name, level) {
    switch (name) {
        case "xdress":
            switch (level) {
                case 0: return "Boys clothes only";
                case 1: return "Can wear panties";
                case 2: return "Can cross dress at home and Missy's";
                case 3: return "Can work cases crossdressing";
                case 4: return "Only wear panties and bra";
                case 5: return "Can modestly cross dress in public ";
                case 6: return "Can wear sexy outfits";
                case 7: return "Don't have to wear panties and bra"
                case 8: return "Can wear slutty clothing";
                case 9: return "Wear what ever, or nothing at all";
            }
            break;
        case "sub":
            switch (level) {
                case 0: return "Not submissive";
                case 1: return "Can kiss Missy's feet";
                case 2: return "Can x Missy"
                case 3: return "Can offer mouth in violent situations"
                case 4: return "can y missy"
                case 5: return "Can offer ass in violent situations"
                case 6: return "TBD"
                case 7: return "TBD"
                case 8: return "TBD"
                case 9: return "TBD"
            }
            break;
        case "humiliation":
            switch (level) {
                case 0: return "Doesn't like humiliation";
            }
            break;
        case "oral":
            switch (level) {
                case 0: return "I'm not putting that in my mouth";
                case 1: return "Can suck small dildos at home";
                case 2: return "Can suck medium dildos at home";
                case 3: return "Can deepthroat dildos at home";
                case 4: return "Can suck a small cock";
                case 5: return "Can suck large cocks";
                case 6: return "Can deepthroat cock";
                case 7: return "Can deepthroat large cocks";
                case 8: return "Can suck horse cock";
                case 9: return "Need to suck cock everyday!";
            }
            break;
        case "anal":
            switch (level) {
                case 0: return "My butt is for pooping";
                case 1: return "Can stick your finger in your butt";
                case 2: return "Can play with a tiny dildo";
                case 3: return "Can play with a small dildo";
                case 4: return "Can play with a medium dildo";
                case 5: return "Can take a dick in the ass";
                case 6: return "Can play with a large dildo";
                case 7: return "Can play with a huge dildo";
                case 8: return "Can take a horse cock in the ass";
                case 9: return "Need anal everyday!";
            }
            break;
        case "cum":
            switch (level) {
                case 0: return "Ewwww";
                case 1: return "You can taste your own";
                case 2: return "Can work in the sperm store";
                case 3: return "You can cum in your own mouth";
                case 4: return "You can swallow";
                case 5: return "You can get creampied";
                case 6: return "cum gains 5 energy";
                case 7: return "cum gains 15 energy";
                case 8: return "cum gains 25 energy";
                case 9: return "You are addicted to cum";
            }
            break;
        case "pi":
            switch (level) {
                case 0: return "Can watch things (first case)";
                case 1: return "Speach / influnce increased";
                case 2: return "Pick pocket";
                case 3: return "unlock locked doors";
                case 4: return "Speach / influnce increased + 2";
                case 5: return "Pick pocket + 2";
                case 6: return "unlock locked doors + 2";
                case 7: return "TBD";
                case 8: return "TBD";
                case 9: return "TBD";
            }
            break;
        case "piss":
            switch (level) {
                case 0: return "Piss is gross";
                case 1: return "Can be pissed on by girl";
                case 2: return "Can be pissed on my guy";
                case 3: return "Can drink piss";
                case 4: return "piss drink + 5 energy";
                case 5: return "piss drink + 10 energy";
                case 6: return "piss drink + 15 energy";
                case 7: return "piss drink + 25 energy";
                case 8: return "piss drink + 30 energy";
                case 9: return "Addicted to piss";
            }
            break;
        case "beast":
            switch (level) {
                case 0: return "Avoids animals";
                case 1: return "Can pet animals";
                case 2: return "Can work as horse brusher at Rachel's";
                case 3: return "Can play with animals";
                case 4: return "Can get knotty dildo";
                case 5: return "Hand job";
                case 6: return "blow job";
                case 7: return "anal";
                case 8: return "Horse!"
                case 9: return "Subserviant to beasts (Can't stop it)";
            }
            break;
        case "cheer":
            switch (level) {
                case 0: return "Not a cheerleader";
                case 1: return "Clumsy";
                case 2: return "Dumb";
                case 3: return "Washing Machine";
                case 4: return "Beginner";
                case 5: return "Stacy's Bitch";
                case 6: return "Konga Line";
                case 7: return "Can Cheer at the Games!";
                case 8: return "Small Dick Loser";
                case 9: return "Real Cheerleader!";
                case 10: return "Cum Bucket";
            }
            break;
        case "fitness":
            return (level * 5) + " Energy Boost";
        case "body":
            return (level * 5) + " Punch Power Increase";
        case "leg":
            return (level * 5) + " Kick Power Increase";
        case "defense":
            return (level * 5) + " Fight Defense Increase";
    }
    return "Need to add text here! " + name + " level: " + level;
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
