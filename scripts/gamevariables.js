var sex = {};
var levels = {};
var daily = {};
var weekly = {};
var stats = {};
var gv = {};
var sissy = {};
var qdress = {};
var t = {}; //remove this
var trophy = {};
var future = {};
var dreams = {};
gv.difficulty = 0;

sex.st = new Array();
levels.st = new Array();
daily.st = new Array();
weekly.st = new Array();
gv.st = new Array();
sissy.st = new Array();
trophy.st = new Array();
gv.stats = new Array();
future.st = new Array();
dreams.st = new Array();

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
        { n: "xdress", t: false, q: "bool" },

        //character
        { n: "map", t: 1, q: "int" },
        { n: "bladder", t: 0, q: "bladder" },
        { n: "cum", t: g.startDate, q: "date" },
        { n: "chastityLock", t: false, q: "bool" },
        { n: "missyWeekly", t: "", q: "string" },
        { n: "jackoff", t: 0, q: "int" },
        { n: "dildoanal", t: 0, q: "int" },
        { n: "fingeranal", t: 0, q: "int" },
        { n: "dildooral", t: 0, q: "int" },
        { n: "xdressPoints", t: 0, q: "int" },

        //Settings
        { n: "fantasyCreatures", t: false, q: "bool" },
        { n: "fightspeed", t: 1250, q: "int" },
        { n: "difficulty", t: 1, q: "int" },
        { n: "clock24", t: "12", q: "string" },
        { n: "cheatMode", t: false, q: "bool" },
        { n: "transformation", t: "voluntary", q: "string" },
        { n: "breastSelect", t: 0, q: "int" },
        { n: "assSelect", t: 0, q: "int" },

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
        //{ n: "rentKnockOff", t: 0, q: "zero" },

        //lola / eva
        { n: "lockdrawer", t: false, q: "bool" },

        //room decoration
        { n: "painting", t: "", q: "string" },

        //firstTime
        { n: "firstTimeInWardrobe", t: false, q: "bool" },
        { n: "pamphletConstSite", t: false, q: "bool" },
        { n: "lolaPanties", t: false, q: "bool" },
        { n: "momsPanties", t: false, q: "bool" },
        { n: "panties", t: false, q: "bool" },

        //sissyschool
        { n: "sissySchoolClass", t: null, q: "string" },
        { n: "sissySchoolClassDays", t: 0, q: "int" },
        { n: "sissyGrades", t: "", q: "string" },

        { n: "pill", t: null, q: "string" },

        //missy
        { n: "chastity", t: null, q: "date" },
        { n: "castitycage", t: null, q: "string" },

        //church
        { n: "confession", t: "", q: "string" },

        //analfill
        { n: "analCum", t: 0, q: "int" },
        { n: "analCumDog", t: 0, q: "int" },
        { n: "analCumHorse", t: 0, q: "int" },
        { n: "analCumPig", t: 0, q: "int" },


        { n: "jobConstructionPay", t: 0, q: "zero" },
        { n: "forbotenLove", t: 0, q: "zero" },

        //{ n: "sissy", t: 0, q: "sissy" },
        //{ n: "usedSissyPoints", t: 0, q: "sissy" },





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

    //save by index
    daily.st = [
        { n: "chloe", t: false },
        { n: "landlord", t: false },
        { n: "landlordChat", t: false },
        { n: "landlordmolest", t: false },
        { n: "evamassage", t: false },
        { n: "evatalk", t: false },
        { n: "lolamassage", t: false },
        { n: "lolatalk", t: false },
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
        { n: "ppgirl", t: false },
        { n: "janice", t: false },
        { n: "bimbo", t: false },
        { n: "foundmoney", t: false },

        { n: "momChoreBed", t: false },
        { n: "momChoreDishes", t: false },
        { n: "homeShowerPeek", t: false },
        { n: "momRaidCloset", t: false },
        { n: "spermbank", t: false },
        { n: "shower", t: false },

        { n: "construction", t: false },
        { n: "buttholePlay", t: false },
        { n: "dildoSuckPlay", t: false },
        { n: "zbar", t: false },
        { n: "gold0", t: false },
        { n: "petcat", t: false },
        { n: "cardgame", t: false },
        { n: "cultrun", t: false },
        { n: "tookHormonePill", t: false },
        //dogsitting
        { n: "dog", t: false },
        { n: "dcrawl", t: false },
        { n: "dfeed", t: false },
        { n: "dpet", t: false },
        { n: "dsniff", t: false },
        { n: "dball", t: false },
        { n: "dpb", t: false },
        { n: "dinside", t: false },
        { n: "dhump", t: false },
        { n: "dlock", t: false },
        { n: "dpee", t: false },
        { n: "dsex", t: false },
        { n: "dwalk", t: false },

        { n: "water", t: false },

        { n: "cop", t: false },
        { n: "loladrunk", t: false },
        { n: "evadrunk", t: false },
        { n: "elsleep", t: false },
    ];

    weekly.st = [
        { n: "lolapee", t: false },
        { n: "momjerkoff", t: false },
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

        { id: 19, n: "lockpicking", d: "Lock Picking", c: 0, l: 0, autoLevel: true, display: true },
        { id: 20, n: "dick", d: "Cock", c: 0, l: 0, autoLevel: true, display: true },
        { id: 21, n: "beer", d: "Alcohol Tolerance", c: 0, l: 0, autoLevel: true, display: true },
        { id: 21, n: "milk", d: "Breast Milk", c: 0, l: 0, autoLevel: true, display: true },

    ];

    sex.st = [
        { id: 0, type: "anal", give: true, gender: "m", c: 0, sin: 0 },
        { id: 1, type: "anal", give: true, gender: "f", c: 0, sin: 0 },
        { id: 2, type: "anal", give: false, gender: "m", c: 0, sin: 0 },
        { id: 3, type: "anal", give: false, gender: "f", c: 0, sin: 0 },

        { id: 4, type: "oral", give: true, gender: "m", c: 0, sin: 0 },
        { id: 5, type: "oral", give: true, gender: "f", c: 0, sin: 0 },
        { id: 6, type: "oral", give: false, gender: "m", c: 0, sin: 0 },
        { id: 7, type: "oral", give: false, gender: "f", c: 0, sin: 0 },

        { id: 8, type: "hand", give: true, gender: "m", c: 0, sin: 0 },
        { id: 9, type: "hand", give: true, gender: "f", c: 0, sin: 0 },
        { id: 10, type: "hand", give: false, gender: "m", c: 0, sin: 0 },
        { id: 11, type: "hand", give: false, gender: "f", c: 0, sin: 0 },

        { id: 12, type: "fist", give: true, gender: "m", c: 0, sin: 0 },
        { id: 13, type: "fist", give: true, gender: "f", c: 0, sin: 0 },
        { id: 14, type: "fist", give: false, gender: "m", c: 0, sin: 0 },
        { id: 15, type: "fist", give: false, gender: "f", c: 0, sin: 0 },

        { id: 16, type: "foot", give: true, gender: "m", c: 0, sin: 0 },
        { id: 17, type: "foot", give: true, gender: "f", c: 0, sin: 0 },
        { id: 18, type: "foot", give: false, gender: "m", c: 0, sin: 0 },
        { id: 19, type: "foot", give: false, gender: "f", c: 0, sin: 0 },

        { id: 20, type: "footworship", give: true, gender: "m", c: 0, sin: 0 },
        { id: 21, type: "footworship", give: true, gender: "f", c: 0, sin: 0 },
        { id: 22, type: "footworship", give: false, gender: "m", c: 0, sin: 0 },
        { id: 23, type: "footworship", give: false, gender: "f", c: 0, sin: 0 },

        { id: 24, type: "pussy", give: true, gender: "m", c: 0, sin: 0 },
        { id: 25, type: "pussy", give: true, gender: "f", c: 0, sin: 0 },
        { id: 26, type: "pussy", give: false, gender: "m", c: 0, sin: 0 },
        { id: 27, type: "pussy", give: false, gender: "f", c: 0, sin: 0 },

        { id: 28, type: "piss", give: true, gender: "m", c: 0, sin: 0 },
        { id: 29, type: "piss", give: true, gender: "f", c: 0, sin: 0 },
        { id: 30, type: "piss", give: false, gender: "m", c: 0, sin: 0 },
        { id: 31, type: "piss", give: false, gender: "f", c: 0, sin: 0 },

        { id: 32, type: "drankpiss", give: true, gender: "m", c: 0, sin: 0 },
        { id: 33, type: "drankpiss", give: true, gender: "f", c: 0, sin: 0 },
        { id: 34, type: "drankpiss", give: false, gender: "m", c: 0, sin: 0 },
        { id: 35, type: "drankpiss", give: false, gender: "f", c: 0, sin: 0 },

        { id: 36, type: "spit", give: true, gender: "m", c: 0, sin: 0 },
        { id: 37, type: "spit", give: true, gender: "f", c: 0, sin: 0 },
        { id: 38, type: "spit", give: false, gender: "m", c: 0, sin: 0 },
        { id: 39, type: "spit", give: false, gender: "f", c: 0, sin: 0 },

        { id: 40, type: "boob", give: true, gender: "m", c: 0, sin: 0 },
        { id: 41, type: "boob", give: true, gender: "f", c: 0, sin: 0 },
        { id: 42, type: "boob", give: false, gender: "m", c: 0, sin: 0 },
        { id: 43, type: "boob", give: false, gender: "f", c: 0, sin: 0 },

        { id: 44, type: "beast", give: true, gender: "m", c: 0, sin: 0 },
        { id: 45, type: "beast", give: true, gender: "f", c: 0, sin: 0 },
        { id: 46, type: "beast", give: false, gender: "m", c: 0, sin: 0 },
        { id: 47, type: "beast", give: false, gender: "f", c: 0, sin: 0 }
    ];

    sissy.st = [
        { id: 0, pID: [17], icon: "firstday", x: -1, y: -1, name: "First Day", description: "First day of class", ach: false, active: false, room: 209 },

        { id: 1, pID: [0], icon: "fem101", x: 1, y: 1, name: "Feminization 101", description: "A smooth sissy is a sexy sissy.", ach: false, active: true, room: 180 },
        { id: 2, pID: [1], icon: "anal101", x: 4, y: 1, name: "Anal 101", description: "The importance and use of lube", ach: false, active: true, room: 175 },

        { id: 3, pID: [19], icon: "fem102", x: 0, y: 2, name: "Feminization 110", description: "Act like a lady (sitting)", ach: false, active: true, room: 180 },
        { id: 4, pID: [19], icon: "anal102", x: 3, y: 2, name: "Anal 102", description: "Learn how to use the bussy", ach: false, active: true, room: 175 },
        { id: 5, pID: [19], icon: "chastity101", x: 6, y: 2, name: "Chastity 101", description: "Get comfortable in chastity", ach: false, active: true, room: 177 },
        { id: 6, pID: [19], icon: "pee101", x: 2, y: 2, name: "Pee 101", description: "Learn how to pee like a lady", ach: false, active: true, room: 180 },
        { id: 7, pID: [19], icon: "oral101", x: 5, y: 2, name: "Oral 101", description: "Learn the basics of oral", ach: false, active: true, room: 176 },
        { id: 8, pID: [19], icon: "bondage101", x: 10, y: 2, name: "Bondage 101", description: "Ropes are your friend", ach: false, active: true, room: 181 },
        { id: 9, pID: [19], icon: "cum101", x: 8, y: 2, name: "Cum Eating 101", description: "Have a taste of your own", ach: false, active: true, room: 178 },

        { id: 10, pID: [3, 4, 5, 6, 7, 8, 9, 19], icon: "test1", x: 0, y: 3, name: "Beginner Sissy Test", description: "Sissy Test 1! Once you pass you will be issued your first sissy uniform!", ach: false, active: true, room: 182 },

        { id: 11, pID: [10], icon: "anal210", x: 5, y: 4, name: "Anal 210", description: "Find your bussy p-spot", ach: false, active: true },
        { id: 12, pID: [10], icon: "anal212", x: 3, y: 4, name: "Anal 212", description: "Experaince the joy of being filled", ach: false, active: true, room: 175 },
        { id: 13, pID: [10], icon: "chastity201", x: 6, y: 4, name: "Chastity 201", description: "Expand your time in chastity", ach: false, active: true },
        { id: 14, pID: [10], icon: "enema205", x: 1, y: 4, name: "Enema 205", description: "A clean bussy makes everyone happy", ach: false, active: true, room: 180 },
        { id: 15, pID: [10], icon: "fem201", x: 0, y: 4, name: "Feminization 201", description: "Introduction to hormones", ach: false, active: true, room: 180 },
        { id: 16, pID: [10], icon: "fem212", x: 2, y: 4, name: "Feminization 212", description: "How to walk in high heels", ach: false, active: true },

        { id: 17, pID: [], icon: "invite", x: -1, y: -1, name: "Invited", description: "Payday told to be a sissy", ach: false, active: false },

        { id: 18, pID: [10], icon: "oral203", x: 4, y: 4, name: "Oral 203", description: "How to properly perform cunnilingus", ach: false, active: true, room: 176 },

        { id: 19, pID: [2], icon: "fem103", x: 7, y: 1, name: "Feminization 102", description: "Given your first set of sissy clothes.", ach: false, active: true, room: 180 },

    ];

    qdress.st = [
        { id: 0, pId: null, icon: "qpanties", p: 1, h: false, x: 341, y: 490, ach: false, name: "Panties", desc: "You can wear panties. " },
        { id: 1, pId: 0, icon: "qbra", p: 1, h: false, x: 487, y: 490, ach: false, name: "Bra", desc: "If you have a bra, you don't feel comfortable going out without it. " },
        { id: 2, pId: 1, icon: "qdildo", p: 1, h: false, x: 487, y: 359, ach: false, name: "Buy Sex Toys", desc: "You feel comfortable buying sex toys. " },
        { id: 3, pId: 1, icon: "qxdress", p: 1, h: false, x: 636, y: 440, ach: false, name: "Public", desc: "You feel comfortable wearing girly clothes in public. " },

        { id: 4, pId: 3, icon: "qearring", p: 1, h: false, x: 830, y: 212, ach: false, name: "Piercings", desc: "You feel comfortable getting piercings and wearing jewlery. " },
        { id: 5, pId: 4, icon: "qmakup", p: 1, h: false, x: 981, y: 212, ach: false, name: "Makeup", desc: "You feel comfortable wearing makeup in public. " },
        { id: 6, pId: 5, icon: "qtattoo", p: 2, h: false, x: 1132, y: 212, ach: false, name: "Tattoo", desc: "You feel comfortable getting tattoos." },

        { id: 7, pId: 3, icon: "qxdress1", p: 1, h: false, x: 830, y: 359, ach: false, name: "Sexy", desc: "You feel comfortable buying sexy clothing. " },
        { id: 8, pId: 7, icon: "qxdress2", p: 2, h: false, x: 981, y: 359, ach: false, name: "Bimbo", desc: "You feel comfortable buying stupid bimbo clothing. " },
        { id: 9, pId: 8, icon: "qxdress3", p: 3, h: false, x: 1132, y: 359, ach: false, name: "Commando", desc: "You feel comfortable going out without bra and panties. " },
        { id: 10, pId: 9, icon: "qxdress4", p: 4, h: false, x: 1283, y: 359, ach: false, name: "Nudist", desc: "You are comfortable enough with your body that you can wear anthing or nothing." },

        { id: 11, pId: 3, icon: "qc2", p: 1, h: true, x: 830, y: 774, ach: false, name: "A Cup", desc: "Feminie Body" },
        { id: 12, pId: 11, icon: "qc3", p: 1, h: true, x: 981, y: 774, ach: false, name: "B Cup", desc: "We must increase our bust!" },
        { id: 13, pId: 12, icon: "qc4", p: 2, h: true, x: 1132, y: 774, ach: false, name: "C Cup", desc: "A good size" },
        { id: 14, pId: 13, icon: "qc5", p: 3, h: true, x: 1283, y: 774, ach: false, name: "DDD Cup", desc: "A bit big" },
        { id: 15, pId: 14, icon: "qc6", p: 4, h: true, x: 1434, y: 774, ach: false, name: "Ludicrous Cup", desc: "My back hurts!" },

        { id: 16, pId: 3, icon: "ql1", p: 1, h: true, x: 830, y: 922, ach: false, name: "Butt", desc: "Sexy little butt" },
        { id: 17, pId: 16, icon: "ql2", p: 1, h: true, x: 981, y: 922, ach: false, name: "Ass", desc: "Sexy Butt" },
        { id: 18, pId: 17, icon: "ql3", p: 2, h: true, x: 1132, y: 922, ach: false, name: "Ass of a Goddess", desc: "She must work out" },
        { id: 19, pId: 18, icon: "ql4", p: 3, h: true, x: 1283, y: 922, ach: false, name: "Dat ass", desc: "Thicker than a bowl of oatmeal" },
        { id: 20, pId: 19, icon: "ql5", p: 4, h: true, x: 1434, y: 922, ach: false, name: "Ba donk a donk", desc: "Oh My God. Look at that butt!" },

        { id: 21, pId: 3, icon: "qlip1", p: 1, h: true, x: 830, y: 628, ach: false, name: "Lips", desc: "Dick Sucking Lips" },
        { id: 22, pId: 21, icon: "qlip2", p: 2, h: true, x: 981, y: 628, ach: false, name: "Bimbo Lips", desc: "Lips so fat you can't close your mouth" },

        { id: 23, pId: 3, icon: "qwhore", p: 4, h: false, x: 830, y: 64, ach: false, name: "Whore", desc: "Gotta make that money, honey." },
    ];

    stats.st = [
        { id: 0, t: "cum", n: "swallow", c: 0 },
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
        { id: 11, t: "consecutiveCastity", n: "days", c: 0 },

        { id: 12, t: "sissygasm", n: "m", c: 0 },
        { id: 13, t: "sissygasm", n: "f", c: 0 },

        { id: 14, t: "humiliate", n: "m", c: 0 },
        { id: 15, t: "humiliate", n: "f", c: 0 },

        { id: 16, t: "public", n: "m", c: 0 },
        { id: 17, t: "public", n: "f", c: 0 },

        { id: 18, t: "rape", n: "m", c: 0 },
        { id: 19, t: "rape", n: "f", c: 0 },

        { id: 20, t: "bondage", n: "m", c: 0 },
        { id: 21, t: "bondage", n: "f", c: 0 },

        { id: 22, t: "hit", n: "m", c: 0 },
        { id: 23, t: "hit", n: "f", c: 0 },

        { id: 24, t: "cbt", n: "m", c: 0 },
        { id: 25, t: "cbt", n: "f", c: 0 },

        { id: 26, t: "sph", n: "m", c: 0 },
        { id: 27, t: "sph", n: "f", c: 0 },

        { id: 28, t: "subdom", n: "dom", c: 0 },
        { id: 29, t: "subdom", n: "sub", c: 0 },

        { id: 30, t: "piss", n: "bed", c: 0 },
        { id: 31, t: "piss", n: "self", c: 0 },

        { id: 32, t: "enema", n: "take", c: 0 },

        { id: 33, t: "beast", n: "pet", c: 0 },
        { id: 34, t: "beast", n: "hand", c: 0 },
        { id: 35, t: "beast", n: "oral", c: 0 },
        { id: 36, t: "beast", n: "anal", c: 0 },

        { id: 37, t: "dislike", n: "anal", c: 0 },
        { id: 38, t: "dislike", n: "oral", c: 0 },
        { id: 39, t: "dislike", n: "cum", c: 0 },
        { id: 40, t: "dislike", n: "piss", c: 0 },

        { id: 41, t: "dog", n: "sex", c: 0 },
        { id: 42, t: "horse", n: "sex", c: 0 },
        { id: 43, t: "pig", n: "sex", c: 0 },
        { id: 44, t: "bull", n: "sex", c: 0 },
    ];


    trophy.st = [
        { id: 0, display: "Wear panties for the first time. ", img: "panties.png", ach: false, group: "sissy" },
        { id: 1, display: "Lock the cock. ", img:"chastity.png", ach: false, group: "sissy" },
    ];

    future.st = new Array();

    dreams.st = new Array();
};



gv.i=function(n){var r=-1;for(i=0;i<gv.st.length;i++)if(gv.st[i].n===n){r=i;break}return r}; //returns index for g.st by name
daily.i = function (n) { var r = -1; for (i = 0; i < daily.st.length; i++)if (daily.st[i].n === n) { r = i; break } return r }; //returns index for daily.st by name
weekly.i = function (n) { var r = -1; for (i = 0; i < weekly.st.length; i++)if (weekly.st[i].n === n) { r = i; break } return r }; //returns index for daily.st by name
levels.i=function(n){var r=-1;for(i=0;i<levels.st.length;i++)if(levels.st[i].n===n){r=i;break}return r}; //returns index for levels.st by name
stats.i = function (t, n) { for (var r = 0; r < stats.st.length; r++)if (t === stats.st[r].t && n === stats.st[r].n) return r; return -1 };

gv.get = function (n) {var t=gv.i(n);return t>-1?gv.st[t].t:(console.log("gv.st missing name: "+n),null)}; //gets g.st
daily.get = function (n) { var t = daily.i(n); return t > -1 ? daily.st[t].t : (console.log("daily.st missing name: " + n), null) }; //gets daily.st
weekly.get = function (n) { var t = weekly.i(n); return t > -1 ? weekly.st[t].t : (console.log("weekly.st missing name: " + n), null) }; //gets daily.st
levels.get=function(l){var n=levels.i(l);return n>-1?{c:levels.st[n].c,l:levels.st[n].l}:(console.log("levels.st missing name: "+l),null)}; //gets levels
stats.get = function (t, n) { return stats.st[stats.i(t, n)].c };

daily.set = function (t, override = true) {
    var n = daily.i(t);
    n >= 0 ? daily.st[n].t = override : console.log("daily set " + t + " not found")
}; //sets daily to true

weekly.set = function (t, override = true) {
    var n = weekly.i(t);
    n >= 0 ? weekly.st[n].t = override : console.log("weekly set " + t + " not found")
}; 

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
            case "bladder":
                if (gv.st[index].t < .9 && amount > 0)
                    gv.mod("energy", Math.floor(amount * 100));

                gv.st[index].t += amount;
                if (gv.st[index].t > 1)
                    gv.st[index].t = 1;
                else if (gv.st[index].t < 0)
                    gv.st[index].t = 0;

                cl.display();
                if (gv.st[index].t > .9) {
                    g.popUpNotice("Your bladder is so full it hurts. ");
                    gv.mod("energy", -30);
                }
                else if (gv.st[index].t > .5)
                    g.popUpNotice("You feel the need to pee. ");
                break;
            case "string":
                gv.st[index].t += amount;
                break;
            default:
                console.log("unknown g.mod type: " + type + ", name: " + name);
                break;
        }
    }
    else
        console.log("unknown g.mod: " + name);
};

levels.mod = function (name, amount, targetLevel = 999) {
    var actualAmount = 0;
    var i, j, fitnessStart;
    fitnessStart = null;
    if (name === "fitness") {
        fitnessStart = levels.get("fitness").l;
    }
    for (i = 0; i < levels.st.length; i++) {
        if (levels.st[i].n === name) {
            if (levels.st[i].c === null || isNaN(levels.st[i].c))
                levels.st[i].c = 0;

            if (amount > 0) {
                if (levels.st[i].l <= targetLevel)
                    actualAmount = amount;
                else {
                    if (levels.st[i].l <= targetLevel + 1)
                        actualAmount = Math.floor(amount / 3) + 1; 
                    else if (levels.st[i].l <= targetLevel + 2)
                        actualAmount = 1;
                }

                var additionalLevels = Math.floor(actualAmount / 100);
                var addedLevels = 0;
                var remainderPoints = actualAmount % 100;
                levels.st[i].c += remainderPoints;

                if (additionalLevels > 0) {
                    for (j = 0; j < additionalLevels; j++) { //i know. Shut up. this is easier
                        if (levels.st[i].l < targetLevel) {
                            levels.st[i].l++;
                            addedLevels++;
                        }
                        else if (levels.st[i].l === targetLevel) {
                            levels.st[i].l++;
                            levels.st[i].c = 0;
                            addedLevels++;
                        }
                    }
                }

                if (levels.st[i].c >= 100) {
                    remainderPoints = levels.st[i].c % 100;
                    levels.st[i].c = 0;
                    levels.st[i].l++;
                    addedLevels++;
                    if (levels.st[i].l <= targetLevel)
                        levels.st[i].c += remainderPoints;
                }
                
                if (addedLevels > 0)
                    g.popUpNotice("You gained " + addedLevels + " level(s) for: " + levels.st[i].d + "!");
                else
                    g.popUpNotice(levels.st[i].d + " points have increased by " + actualAmount + "! ");

            }
            else if (amount < 0) {
                levels.st[i].c -= amount;
                if (levels.st[i].c < 0)
                    levels.st[i].c = 0;
                g.popUpNotice(levels.st[i].d + " points have decreased. ");
            }
        }
    }
    if (fitnessStart !== null) {
        var fitnessEnd = levels.get("fitness").l;
        if (fitnessStart !== fitnessEnd)
            gv.mod("maxenergy", (fitnessEnd - fitnessStart) * 3);
    }
    sstat.makeGraph();
};

sex.mod = function (type, give, gender, number) {
    for (var i = 0; i < sex.st.length; i++) {
        if (sex.st[i].type === type && sex.st[i].give === give && sex.st[i].gender === gender) {
            sex.st[i].c += number;
            sex.st[i].sin += number;
            break;
        }
    }
}

stats.mod = function (t, n, amount) {
    stats.st[stats.i(t, n)].c += amount;
};

future.add = function (name, daysleft) {
    future.st.push({ name: name, daysleft: daysleft });
}

dreams.add = function (dream) {
    dreams.st.push(dream);
}

future.get = function (name) {
    for (i = 0; i < future.st.length; i++) {
        if (future.st[i].name === name)
            return future.st[i].daysleft;
    }
    return -1;
}

daily.newday = function () { 
    var i;
    for (i = 0; i < daily.st.length; i++)
        daily.st[i].t = false;
    if ((g.hourBetween(0, 7) && g.dt.getDay() === 0) || (g.hourBetween(7, 24) && g.dt.getDay() === 6)) {
        for (i = 0; i < weekly.st.length; i++)
            weekly.st[i].t = false;
    }
};

levels.desc = function (name, level) {
    if (name === "fitness") {
        return { count: -1, txt: (level * 5) + " Energy Boost" };
    }
    if (name === "defense") {
        return { count: -1, txt: (level * 5) + " Defense" };
    }
    if (name === "int") {
        return { count: -1, txt: "+" + level + " Lock pick and Pick Pocket" };
    }
    if (name === "charisma") {
        return { count: -1, txt: "Level: " + level };
    }
    if (name === "fame") {
        return { count: -1, txt: "+" + level + " Random Encounters" };
    }
    if (name === "strength") {
        return { count: -1, txt: "Level: " + level };
    }
    var levelsDesc = new Array();
    switch (name) {
        case "xdress":
            levelsDesc = [
                { id: 0, txt: "Boys clothes only" },
                { id: 1, txt: "Can wear panties" },
                { id: 2, txt: "Can cross dress at home and Missy's" },
                { id: 3, txt: "Can work cases crossdressing" },
                { id: 4, txt: "Must wear bra" },
                { id: 5, txt: "Can buy girly clothes." },
                { id: 6, txt: "Can go out in girl clothes" },
                { id: 7, txt: "Can buy slutty clothing" },
                { id: 8, txt: "Don't have to wear panties and bra" }, 
                { id: 9, txt: "Wear what ever, or nothing at all" }
            ];
            break;
        case "sub":
            levelsDesc = [
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
            levelsDesc = [
                { id: 0, txt: "Doesn't like humiliation" },
            ];
            break;
        case "oral":
            levelsDesc = [
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
            levelsDesc = [
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
            levelsDesc = [
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
            levelsDesc = [
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
            levelsDesc = [
                { id: 0, txt: "Piss is gross" },
                { id: 1, txt: "Likes to watch people piss" },
                { id: 2, txt: "Can be pissed on by girl" },
                { id: 3, txt: "Can be pissed on my guy" },
                { id: 4, txt: "Can drink piss" },
                { id: 5, txt: "piss drink + 5 energy" },
                { id: 6, txt: "piss drink + 10 energy" },
                { id: 7, txt: "piss drink + 15 energy" },
                { id: 8, txt: "piss drink + 25 energy" },
                { id: 9, txt: "Addicted to piss" },
            ];
            break;
        case "beast":
            levelsDesc = [
                { id: 0, txt: "Can pet / brush animals" },
                { id: 1, txt: "Can 'play' with animals" },
                { id: 2, txt: "Can get knotty dildo" },
                { id: 3, txt: "Hand job" },
                { id: 4, txt: "blow job" },
                { id: 5, txt: "anal" },
                { id: 6, txt: "Horse!" },
                { id: 7, txt: "Loves animals" },
                { id: 7, txt: "Being around animals raises energy" },
                { id: 8, txt: "Subserviant to beasts (Can't stop it)" },
            ];
            break;
        case "cheer":
            levelsDesc = [
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
    if (levelsDesc.length === 0) {
        console.log("no level " + name);
        return { count: -1, txt: "not found" };
    }
    else if (level >= levelsDesc.length) {
        return { count: levelsDesc.length, txt: levelsDesc[levelsDesc.length - 1].text };
    }
    else {
        return { count: levelsDesc.length, txt: levelsDesc[level].txt };
    }
};

levels.oralGive = function (size, swallow, isDildo, gender = null) {
    //levels.mod("oral", 25, 999);
    levels.oral(size);
    if (swallow) {
        levels.mod("cum", 25, 999);
        stats.mod("cum", "swallow", 1);
    }
    else if(gender === "m") {
        cl.c.cumface = true;
        cl.display();
    }

    if (gender !== null) {
        sex.mod("oral", true, gender, 1);
    }
}

levels.getBlowJob = function (who, gender) {
    cl.doCum(false);
    sex.mod("oral", false, gender, 1);
};

levels.anal = function (size, sissygasm = false, gender = null, creampie = false, beast = null) {
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
    if (sissygasm) {
        cl.doCum(false);
        if (gender !== null)
            stats.mod("sissygasm", gender, 1);
    }
    if (creampie) {
        levels.mod("cum", 25, 999);
    }
    if (beast !== null) {
        sex.mod("beast", false, "m", 1);
        levels.mod("beast", 50, 10);
        stats.mod(beast, "sex", 1);
        switch (beast) {
            case "dog": gv.mod("analCumDog", 1); break;
            case "horse": gv.mod("analCumHorse", 1); break;
            case "pig": gv.mod("analCumPig", 1); break;
        }
    }
    else if (gender !== null) {
        sex.mod("anal", false, gender, 1);
        gv.mod("analCum", 1);
    }
};

levels.oral = function (size) {
    switch (levels.oralTake(size).n) {
        case "noop":
            //do nothing;
            break;
        case "easy":
            levels.mod("oral", 10, 999);
            break;
        case "normal":
            levels.mod("oral", 20, 999);
            break;
        case "brutal":
            levels.mod("oral", 40, 999);
            break;
        case "broken":
            levels.mod("oral", 100, 999);
            break;
    };
};

levels.analTake = function (size) {
    //0: 1 finger
    //1: tiny (finger)
    //2: small
    //3: regular (dick)
    //4: large (large dick)
    //5: huge
    //6: giant
    //7: ludicris
    var analLevel = levels.get("anal").l;
    switch (analLevel) {
        case 0:
            switch (size) {
                case 0: retvar = "normal"; break;
                case 1: retvar = "brutal"; break;
                case 2: retvar = "brutal"; break;
                case 3: retvar = "broken"; break;
                case 4: retvar = "broken"; break;
                case 5: retvar = "broken"; break;
                case 6: retvar = "broken"; break;
                case 7: retvar = "broken"; break;
            };
            break;
        case 1:
            switch (size) {
                case 0: retvar = "easy"; break;
                case 1: retvar = "normal"; break;
                case 2: retvar = "brutal"; break;
                case 3: retvar = "brutal"; break; //level 1 should be brutal for anal 101
                case 4: retvar = "brutal"; break;
                case 5: retvar = "broken"; break;
                case 6: retvar = "broken"; break;
                case 7: retvar = "broken"; break;
            };
            break;
        case 2:
            switch (size) {
                case 0: retvar = "noop"; break;
                case 1: retvar = "easy"; break;
                case 2: retvar = "normal"; break;
                case 3: retvar = "brutal"; break; //level 2 should be normal for anal 101
                case 4: retvar = "brutal"; break;
                case 5: retvar = "broken"; break;
                case 6: retvar = "broken"; break;
                case 7: retvar = "broken"; break;
            };
            break;
        case 3:
            switch (size) {
                case 0: retvar = "noop"; break;
                case 1: retvar = "easy"; break;
                case 2: retvar = "easy"; break;
                case 3: retvar = "normal"; break;
                case 4: retvar = "brutal"; break;
                case 5: retvar = "broken"; break;
                case 6: retvar = "broken"; break;
                case 7: retvar = "broken"; break;
            };
            break;
        case 4:
            switch (size) {
                case 0: retvar = "noop"; break;
                case 1: retvar = "noop"; break;
                case 2: retvar = "easy"; break;
                case 3: retvar = "normal"; break;
                case 4: retvar = "brutal"; break;
                case 5: retvar = "brutal"; break;
                case 6: retvar = "broken"; break;
                case 7: retvar = "broken"; break;
            };
            break;
        case 5:
            switch (size) {
                case 0: retvar = "noop"; break;
                case 1: retvar = "noop"; break;
                case 2: retvar = "easy"; break;
                case 3: retvar = "normal"; break;
                case 4: retvar = "normal"; break;
                case 5: retvar = "brutal"; break;
                case 6: retvar = "broken"; break;
                case 7: retvar = "broken"; break;
            };
            break;
        case 6:
            switch (size) {
                case 0: retvar = "noop"; break;
                case 1: retvar = "noop"; break;
                case 2: retvar = "noop"; break;
                case 3: retvar = "normal"; break;
                case 4: retvar = "normal"; break;
                case 5: retvar = "brutal"; break;
                case 6: retvar = "broken"; break;
                case 7: retvar = "broken"; break;
            };
            break;
        case 7:
            switch (size) {
                case 0: retvar = "noop"; break;
                case 1: retvar = "noop"; break;
                case 2: retvar = "noop"; break;
                case 3: retvar = "easy"; break;
                case 4: retvar = "normal"; break;
                case 5: retvar = "brutal"; break;
                case 6: retvar = "broken"; break;
                case 7: retvar = "broken"; break;
            };
            break;
        case 8:
            switch (size) {
                case 0: retvar = "noop"; break;
                case 1: retvar = "noop"; break;
                case 2: retvar = "noop"; break;
                case 3: retvar = "easy"; break;
                case 4: retvar = "normal"; break;
                case 5: retvar = "normal"; break;
                case 6: retvar = "brutal"; break;
                case 7: retvar = "broken"; break;
            };
            break;
        case 9:
            switch (size) {
                case 0: retvar = "noop"; break;
                case 1: retvar = "noop"; break;
                case 2: retvar = "noop"; break;
                case 3: retvar = "easy"; break;
                case 4: retvar = "easy"; break;
                case 5: retvar = "normal"; break;
                case 6: retvar = "normal"; break;
                case 7: retvar = "broken"; break;
            };
            break;
        case 10:
            switch (size) {
                case 0: retvar = "noop"; break;
                case 1: retvar = "noop"; break;
                case 2: retvar = "noop"; break;
                case 3: retvar = "easy"; break;
                case 4: retvar = "easy"; break;
                case 5: retvar = "easy"; break;
                case 6: retvar = "normal"; break;
                case 7: retvar = "brutal"; break;
            };
            break;
        default:
            switch (size) {
                case 0: retvar = "noop"; break;
                case 1: retvar = "noop"; break;
                case 2: retvar = "noop"; break;
                case 3: retvar = "easy"; break;
                case 4: retvar = "easy"; break;
                case 5: retvar = "easy"; break;
                case 6: retvar = "normal"; break;
                case 7: retvar = "normal"; break;
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

levels.oralTake = function (size) {
    //0: 1 finger
    //1: tiny (finger)
    //2: small
    //3: regular (dick)
    //4: large (large dick)
    //5: huge
    //6: giant
    //7: ludicris
    var oralLevel = levels.get("oral").l;
    switch (oralLevel) {
        case 0:
            switch (size) {
                case 0: retvar = "noop"; break;
                case 1: retvar = "normal"; break;
                case 2: retvar = "normal"; break;
                case 3: retvar = "normal"; break;
                case 4: retvar = "brutal"; break;
                case 5: retvar = "broken"; break;
                case 6: retvar = "broken"; break;
                case 7: retvar = "broken"; break;
            };
            break;
        case 1:
            switch (size) {
                case 0: retvar = "noop"; break;
                case 1: retvar = "easy"; break;
                case 2: retvar = "normal"; break;
                case 3: retvar = "normal"; break;
                case 4: retvar = "brutal"; break;
                case 5: retvar = "broken"; break;
                case 6: retvar = "broken"; break;
                case 7: retvar = "broken"; break;
            };
            break;
        case 2:
            switch (size) {
                case 0: retvar = "noop"; break;
                case 1: retvar = "noop"; break;
                case 2: retvar = "easy"; break;
                case 3: retvar = "normal"; break;
                case 4: retvar = "brutal"; break;
                case 5: retvar = "brutal"; break;
                case 6: retvar = "broken"; break;
                case 7: retvar = "broken"; break;
            };
            break;
        case 3:
            switch (size) {
                case 0: retvar = "noop"; break;
                case 1: retvar = "noop"; break;
                case 2: retvar = "noop"; break;
                case 3: retvar = "normal"; break;
                case 4: retvar = "normal"; break;
                case 5: retvar = "brutal"; break;
                case 6: retvar = "broken"; break;
                case 7: retvar = "broken"; break;
            };
            break;
        case 4:
            switch (size) {
                case 0: retvar = "noop"; break;
                case 1: retvar = "noop"; break;
                case 2: retvar = "noop"; break;
                case 3: retvar = "easy"; break;
                case 4: retvar = "normal"; break;
                case 5: retvar = "brutal"; break;
                case 6: retvar = "broken"; break;
                case 7: retvar = "broken"; break;
            };
            break;
        case 5:
            switch (size) {
                case 0: retvar = "noop"; break;
                case 1: retvar = "noop"; break;
                case 2: retvar = "noop"; break;
                case 3: retvar = "easy"; break;
                case 4: retvar = "normal"; break;
                case 5: retvar = "normal"; break;
                case 6: retvar = "brutal"; break;
                case 7: retvar = "broken"; break;
            };
            break;
        case 6:
            switch (size) {
                case 0: retvar = "noop"; break;
                case 1: retvar = "noop"; break;
                case 2: retvar = "noop"; break;
                case 3: retvar = "easy"; break;
                case 4: retvar = "easy"; break;
                case 5: retvar = "normal"; break;
                case 6: retvar = "brutal"; break;
                case 7: retvar = "broken"; break;
            };
            break;
        case 7:
            switch (size) {
                case 0: retvar = "noop"; break;
                case 1: retvar = "noop"; break;
                case 2: retvar = "noop"; break;
                case 3: retvar = "easy"; break;
                case 4: retvar = "easy"; break;
                case 5: retvar = "normal"; break;
                case 6: retvar = "normal"; break;
                case 7: retvar = "broken"; break;
            };
            break;
        case 8:
            switch (size) {
                case 0: retvar = "noop"; break;
                case 1: retvar = "noop"; break;
                case 2: retvar = "noop"; break;
                case 3: retvar = "easy"; break;
                case 4: retvar = "easy"; break;
                case 5: retvar = "easy"; break;
                case 6: retvar = "normal"; break;
                case 7: retvar = "brutal"; break;
            };
            break;
        case 9:
            switch (size) {
                case 0: retvar = "noop"; break;
                case 1: retvar = "noop"; break;
                case 2: retvar = "noop"; break;
                case 3: retvar = "easy"; break;
                case 4: retvar = "easy"; break;
                case 5: retvar = "easy"; break;
                case 6: retvar = "normal"; break;
                case 7: retvar = "normal"; break;
            };
            break;
        case 10:
            switch (size) {
                case 0: retvar = "noop"; break;
                case 1: retvar = "noop"; break;
                case 2: retvar = "noop"; break;
                case 3: retvar = "easy"; break;
                case 4: retvar = "easy"; break;
                case 5: retvar = "easy"; break;
                case 6: retvar = "normal"; break;
                case 7: retvar = "normal"; break;
            };
            break;
        default:
            switch (size) {
                case 0: retvar = "noop"; break;
                case 1: retvar = "noop"; break;
                case 2: retvar = "noop"; break;
                case 3: retvar = "easy"; break;
                case 4: retvar = "easy"; break;
                case 5: retvar = "easy"; break;
                case 6: retvar = "normal"; break;
                case 7: retvar = "normal"; break;
            };
            break;
    }
    switch (retvar) {
        case "noop": return { n: retvar, c: 0, canTake: true };
        case "easy": return { n: retvar, c: 1, canTake: true };
        case "normal": return { n: retvar, c: 2, canTake: true };
        case "brutal": return { n: retvar, c: 3, canTake: false };
        case "broken": return { n: retvar, c: 4, canTake: false };
    };
};

levels.fuckpussy = function (who) {
    cl.doCum(false);
    levels.mod("dom", 20, 999);
    levels.mod("dick", 20, 999);
    sex.mod("pussy", true, "f", 1);
    if (gv.get("virginDick") === null) {
        gv.set("virginDick", who);
        //dreams.add("virginDick_" + who);
        g.popUpNotice("You lost your virginity");
    }
};

levels.fuckass = function (who, gender) {
    cl.doCum(false);
    levels.mod("dom", 20, 999);
    levels.mod("dick", 20, 999);
    sex.mod("anal", true, gender, 1);
    if (gv.get("virginDick") === null) {
        gv.set("virginDick", who);
        g.popUpNotice("You lost your virginity");
    }
};

sex.takeAnal = function (who, size, creampie, gender, number) {
    levels.anal(size);
    if (gender !== null) {
        sex.mod("anal", false, gender, number);
    }
    if (gv.get("virginAss") === null)
        gv.set("virginAss", who);
};

sex.getFuck = function () {
    var tempFuck = {
        anal: {
            give: {
                m: { c: sex.st[0].c, sin: sex.st[0].sin },
                f: { c: sex.st[1].c, sin: sex.st[1].sin },
            },
            take: {
                m: { c: sex.st[2].c, sin: sex.st[2].sin },
                f: { c: sex.st[3].c, sin: sex.st[3].sin },
            }
        },
        oral: {
            give: {
                m: { c: sex.st[4].c, sin: sex.st[4].sin },
                f: { c: sex.st[5].c, sin: sex.st[5].sin },
            },
            take: {
                m: { c: sex.st[6].c, sin: sex.st[6].sin },
                f: { c: sex.st[7].c, sin: sex.st[7].sin },
            }
        },
        hand: {
            give: {
                m: { c: sex.st[8].c, sin: sex.st[8].sin },
                f: { c: sex.st[9].c, sin: sex.st[9].sin },
            },
            take: {
                m: { c: sex.st[10].c, sin: sex.st[10].sin },
                f: { c: sex.st[11].c, sin: sex.st[11].sin },
            }
        },
        fist: {
            give: {
                m: { c: sex.st[12].c, sin: sex.st[12].sin },
                f: { c: sex.st[13].c, sin: sex.st[13].sin },
            },
            take: {
                m: { c: sex.st[14].c, sin: sex.st[14].sin },
                f: { c: sex.st[15].c, sin: sex.st[15].sin },
            }
        },
        foot: {
            give: {
                m: { c: sex.st[16].c, sin: sex.st[16].sin },
                f: { c: sex.st[17].c, sin: sex.st[17].sin },
            },
            take: {
                m: { c: sex.st[18].c, sin: sex.st[18].sin },
                f: { c: sex.st[19].c, sin: sex.st[19].sin },
            }
        },
        footworship: {
            give: {
                m: { c: sex.st[20].c, sin: sex.st[20].sin },
                f: { c: sex.st[21].c, sin: sex.st[21].sin },
            },
            take: {
                m: { c: sex.st[22].c, sin: sex.st[22].sin },
                f: { c: sex.st[23].c, sin: sex.st[23].sin },
            }
        },
        pussy: {
            give: {
                m: { c: sex.st[24].c, sin: sex.st[24].sin },
                f: { c: sex.st[25].c, sin: sex.st[25].sin },
            },
            take: {
                m: { c: sex.st[26].c, sin: sex.st[26].sin },
                f: { c: sex.st[27].c, sin: sex.st[27].sin },
            }
        },
        piss: {
            give: {
                m: { c: sex.st[28].c, sin: sex.st[28].sin },
                f: { c: sex.st[29].c, sin: sex.st[29].sin },
            },
            take: {
                m: { c: sex.st[30].c, sin: sex.st[30].sin },
                f: { c: sex.st[31].c, sin: sex.st[31].sin },
            }
        },
        drankpiss: {
            give: {
                m: { c: sex.st[32].c, sin: sex.st[32].sin },
                f: { c: sex.st[33].c, sin: sex.st[33].sin },
            },
            take: {
                m: { c: sex.st[34].c, sin: sex.st[34].sin },
                f: { c: sex.st[35].c, sin: sex.st[35].sin },
            }
        },
        spit: {
            give: {
                m: { c: sex.st[36].c, sin: sex.st[36].sin },
                f: { c: sex.st[37].c, sin: sex.st[37].sin },
            },
            take: {
                m: { c: sex.st[38].c, sin: sex.st[38].sin },
                f: { c: sex.st[39].c, sin: sex.st[39].sin },
            }
        },
        boob: {
            give: {
                m: { c: sex.st[40].c, sin: sex.st[40].sin },
                f: { c: sex.st[41].c, sin: sex.st[41].sin },
            },
            take: {
                m: { c: sex.st[42].c, sin: sex.st[42].sin },
                f: { c: sex.st[43].c, sin: sex.st[43].sin },
            }
        },
        beast: {
            give: {
                m: { c: sex.st[44].c, sin: sex.st[44].sin },
                f: { c: sex.st[45].c, sin: sex.st[45].sin },
            },
            take: {
                m: { c: sex.st[46].c, sin: sex.st[46].sin },
                f: { c: sex.st[47].c, sin: sex.st[47].sin },
            }
        },
        virginDick: true,
        virginAss: true,
        virginMouth: true
    };

    return tempFuck;
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
        weekly: new Array(),
        levels: new Array(),
        sex: new Array(),
        sissy: new Array(),
        stats: new Array(),
        trophy: new Array(),
        future: new Array(),
        qdress: new Array(),
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
    for (i = 0; i < weekly.st.length; i++) {
        if (weekly.st[i].t)
            retArray.daily.push(weekly.st[i].n);
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
        retArray.sex.push({ c: sex.st[i].c, sin: sex.st[i].sin });
    }
    
    //save by index
    for (i = 0; i < sissy.st.length; i++) {
        retArray.sissy.push(sissy.st[i].ach);
    }

    //save by index
    for (i = 0; i < stats.st.length; i++) {
        retArray.stats.push(stats.st[i].c);
    }

    //save by index if true
    for (i = 0; i < trophy.st.length; i++) {
        retArray.trophy.push(trophy.st[i].ach);
    }
    //{ name : "", daysleft: 0 }
    for (i = 0; i < future.st.length; i++) {
        retArray.future.push({ name: future.st[i].name, daysleft: future.st[i].daysleft });
    }

    for (i = 0; i < qdress.st.length; i++) {
        if (qdress.st[i].ach)
            retArray.qdress.push(i);
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

    //        { n: "chloe", t: false },

    for (i = 0; i < rma.daily.length; i++) {
        for (j = 0; j < daily.st.length; j++) {
            if (rma.daily[i] === daily.st[j].n) {
                daily.st[j].t = true;
                break;
            }
        }
    }

    if (typeof rma.weekly !== 'undefined') {
        for (i = 0; i < rma.weekly.length; i++) {
            for (j = 0; j < weekly.st.length; j++) {
                if (rma.weekly[i] === weekly.st[j].n) {
                    weekly.st[j].t = true;
                    break;
                }
            }
        }
    }

    for (i = 0; i < qdress.st.length; i++) {
        qdress.st[i].ach = false;
    }

    if (typeof rma.qdress !== 'undefined') {
        for (i = 0; i < rma.qdress.length; i++) {
            qdress.st[rma.qdress[i]].ach = true;
        }
    }

    for (i = 0; i < rma.levels.length; i++) {
        levels.st[i].c = rma.levels[i].c;
        levels.st[i].l = rma.levels[i].l;
    }
    
    for (i = 0; i < rma.sex.length; i++) {
        sex.st[i].c = rma.sex[i].c;
        sex.st[i].sin = rma.sex[i].sin;
    }

    for (i = 0; i < rma.sissy.length; i++) {
        sissy.st[i].ach = rma.sissy[i];
    }

    for (i = 0; i < rma.stats.length; i++) {
        stats.st[i].c = rma.stats[i];
    }
    
    if (typeof rma.trophy !== 'undefined') {
        for (i = 0; i < rma.trophy.length; i++) {
            trophy.st[i].ach = rma.trophy[i];
        }
    }

    if (typeof rma.future !== 'undefined') {
        for (i = 0; i < rma.future.length; i++) {
            future.st.push({ name: rma.future[i].name, daysleft: rma.future[i].daysleft });
        }
    }

    if (typeof rma.dreams !== 'undefined') {
        for (i = 0; i < rma.dreams.length; i++) {
            dreams.st.push({ name: rma.future[i].name, daysleft: rma.future[i].daysleft });
        }
    }
};


sissy.passclass = function (normalRoom) {
    var currentClass = gv.get("sissySchoolClass");
    gv.set("sissySchoolClass", null);
    gv.set("sissySchoolClassDays", 0);
    levels.mod("xdress", 30, 999);
    for (var i = 0; i < sissy.st.length; i++) {
        if (sissy.st[i].icon === currentClass) {
            sissy.st[i].ach = true;
            break;
        }
    }
    
    if (normalRoom) {
        char.settime(17, 15);
        char.room(201);
    }
};

sissy.getMilestones = function () {
    
};

sissy.get = function (icon) {
    for (var i = 0; i < sissy.st.length; i++) {
        if (sissy.st[i].icon === icon)
            return sissy.st[i];
    }
    return null;
}

sissy.getNumPassed = function () {
    var counter = 0;
    for (var i = 0; i < sissy.st.length; i++) {
        if (sissy.st[i].ach)
            counter++;
    }
    return counter;
};

qdress.all = function () {
    for (i = 0; i < qdress.st.length; i++) {
        qdress.st[i].ach = true;
    }
}
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



