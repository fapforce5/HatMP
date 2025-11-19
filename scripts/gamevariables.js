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
var confession = {};
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
        { n: "shower", t: g.startDate, q: "date" },

        //character
        { n: "map", t: 1, q: "int" },
        { n: "mapopen", t: false, q: "bool" },
        { n: "bladder", t: 0, q: "bladder" },
        { n: "cum", t: g.startDate, q: "date" },
        { n: "chastityCounter", t: 0, q: "zero" },
        { n: "missyWeekly", t: "", q: "string" },
        { n: "jackoff", t: 0, q: "int" },
        { n: "dildoanal", t: 0, q: "int" },
        { n: "fingeranal", t: 0, q: "int" },
        { n: "dildooral", t: 0, q: "int" },
        { n: "beer", t: 0, q: "zero" },
        { n: "sissySchoolDream", t: false, q: "bool" },

        //Settings
        { n: "fantasyCreatures", t: false, q: "bool" },
        { n: "fightspeed", t: 1250, q: "int" },
        { n: "difficulty", t: 1, q: "int" }, //0: easy, 1: normal, 2: hard
        { n: "clock24", t: "12", q: "string" },
        { n: "cheatMode", t: false, q: "bool" },
        { n: "transformation", t: "voluntary", q: "string" },
        { n: "breastSelect", t: 0, q: "int" },
        { n: "assSelect", t: 0, q: "int" },

        //jobs
        { n: "jobapplynurse", t: 0, q: "int" },
        { n: "jobapplyconst", t: 0, q: "hundred" },
        { n: "jobapplybeaver", t: 0, q: "int" },

        //landlord
        { n: "momClosetLube", t: 3, q: "int" },
        { n: "momClosetMoney", t: 7, q: "int" },
        { n: "pastRent", t: 0, q: "zero" },
        { n: "rentChores", t: 0, q: "zero" },
        { n: "workMonday", t: false, q: "bool" },

        //lola / eva
        { n: "lockdrawer", t: false, q: "bool" },

        //ralph
        { n: "ralphcycle", t: -1, q: "int" },
        //room decoration
        { n: "painting", t: "", q: "string" },

        //firstTime
        { n: "firstTimeInWardrobe", t: false, q: "bool" },
        { n: "pamphletConstSite", t: false, q: "bool" },
        { n: "lolaPanties", t: false, q: "bool" },
        { n: "momsPanties", t: false, q: "bool" },
        { n: "panties", t: false, q: "bool" },
        { n: "constructionMessage", t: false, q: "bool" },

        //sissyschool
        { n: "sissySchoolClass", t: null, q: "string" },
        { n: "sissySchoolClassDays", t: 0, q: "int" },
        { n: "sissyGrades", t: "", q: "string" },

        { n: "pill", t: null, q: "string" },

        //missy
        { n: "chastity", t: null, q: "date" },
        { n: "castitycage", t: null, q: "string" },
        { n: "chastityOverride", t: null, q: "string" },//null = weekly, "never", "forever"

        //analfill
        { n: "analCum", t: 0, q: "int" },
        { n: "analCumDog", t: 0, q: "int" },
        { n: "analCumHorse", t: 0, q: "int" },
        { n: "analCumPig", t: 0, q: "int" },
        { n: "analCumPlant", t: 0, q: "int" },

        { n: "jobConstructionPay", t: 0, q: "zero" },
        { n: "forbotenLove", t: 0, q: "zero" },

        { n: "janiceDatr", t: null, q: "string" },

        { n: "pink", t: 0, q: "int" },
        { n: "pinkroomopen", t: false, q: "int" },
        { n: "pinkGloryHole", t: 0, q: "int" },
        //{ n: "sissy", t: 0, q: "sissy" },
        //{ n: "usedSissyPoints", t: 0, q: "sissy" },

        { n: "lipstick", t: null, q: "string" },
        { n: "eyeliner", t: null, q: "string" },
        { n: "makeupx", t: "n", q: "string" },

        { n: "cultcabin", t: 0, q: "int" },

        { n: "sissyfinal_brayden", t: false, q: "bool" },
        { n: "sissyfinal_stripper", t: false, q: "bool" },
        { n: "sissyfinal_pageant", t: null, q: "bool" },
        { n: "sissyfinal_cumcounter", t: 0, q: "int" },

        //jail
        { n: "jail", t: 0, q: "int" },

        //masturbate
        { n: "masturbate_dick", t: 0, q: "masturbate" },
        { n: "masturbate_pussy", t: 0, q: "masturbate" },
        { n: "masturbate_vibrator", t: 0, q: "masturbate" },
        { n: "masturbate_oral", t: 0, q: "masturbate" },
        { n: "masturbate_finger", t: 0, q: "masturbate" },
        { n: "masturbate_dildo", t: 0, q: "masturbate" },

        { n: "lolaEvaShowerPeek", t: false, q: "bool" },

        { n: "dddfirsttime", t: true, q: "bool" },
        { n: "dddfail", t: 0, q: "int" },
        { n: "dddsuccess", t: 0, q: "int" },
        { n: "caveDoorEnter", t: false, q: "bool" },

        { n: "janiceWalk", t: 0, q: "int" },
        { n: "janiceAfternoon", t: 0, q: "int" },
        { n: "janiceRand", t: 0, q: "int" },
        { n: "janiceAnnoyance", t: 0, q: "hundred" },

        { n: "486gamecounter", t: 0, q: "int" },

        { n: "485seller", t: 0, q: "int" },
        { n: "carnival", t: true, q: "bool" },


        //{ n: "jobConstWorkToday", t: 0, q: "int" },
        //---------------------------------check not used------------------------------

        { n: "reddoorloc", t: 1, q: "int" },
        { n: "sewerEnd", t: 0, q: "int" },
        { n: "sewerMap", t: "", q: "string" },
        { n: "sewerID", t: 0, q: "int" },
        { n: "forestMapUpdate", t: null, q: "string" },
        { n: "forestVisit", t: null, q: "string" },
        
        { n: "puter", t: false, q: "bool" },
        { n: "slimeMonsters", t: true, q: "bool" },

        { n: "displayMenu", t: true, q: "bool" },
        { n: "daysCult", t: 0, q: "int" },

        { n: "mascot", t: 0, q: "int" },
        { n: "subdom", t: 50, q: "hundred" },
        
        { n: "milk", t: -1, q: "int" },
        { n: "cat", t: -1, q: "int" },
        //{ n: "cheerleader", t: 0, q: "hundred" },
        //{ n: "cheerlevel", t: 0, q: "int" },
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
    daily.st = new Array();

    weekly.st = [
        { n: "lolapee", t: false },
        { n: "momjerkoff", t: false },
    ];

    levels.st = [
        { id: 0, n: "pi", d: "Intelligence", c: 0, l: 0, autoLevel: true, display: true, compoundLevel: true },
        { id: 1, n: "xdress", d: "Sissy", c: 0, l: 0, autoLevel: true, display: true, compoundLevel: false },
        { id: 2, n: "sub", d: "Submissive", c: 0, l: 0, autoLevel: true, display: true, compoundLevel: true },
        { id: 3, n: "dom", d: "Dominance", c: 0, l: 0, autoLevel: true, display: true, compoundLevel: true },
        { id: 4, n: "oral", d: "Oral", c: 0, l: 0, autoLevel: true, display: true, compoundLevel: true },
        { id: 5, n: "anal", d: "Anal", c: 0, l: 0, autoLevel: true, display: true, compoundLevel: true },
        { id: 6, n: "cum", d: "Cum", c: 0, l: 0, autoLevel: true, display: true, compoundLevel: true },
        { id: 7, n: "piss", d: "Piss", c: 0, l: 0, autoLevel: true, display: true, compoundLevel: true },
        { id: 8, n: "beast", d: "Beast", c: 0, l: 0, autoLevel: true, display: true, compoundLevel: true },
        { id: 9, n: "heels", d: "Heels", c: 0, l: 0, autoLevel: true, display: false, compoundLevel: true },
        { id: 10, n: "charisma", d: "Charisma", c: 0, l: 0, autoLevel: true, display: true, compoundLevel: true },
        { id: 11, n: "fame", d: "Fame", c: 0, l: 0, autoLevel: true, display: true, compoundLevel: true }, //how likely you are to get raped

        { id: 12, n: "fitness", d: "Fitness", c: 0, l: 0, autoLevel: true, display: true, compoundLevel: true },
        { id: 13, n: "strength", d: "Strength [STR]", c: 0, l: 0, autoLevel: true, display: true, compoundLevel: true },
        { id: 14, n: "makeup", d: "Makeup", c: 0, l: 0, autoLevel: true, display: true, compoundLevel: true },
        { id: 15, n: "notused1", d: "Pain Tolerance", c: 0, l: 0, autoLevel: true, display: false, compoundLevel: true },
        { id: 16, n: "cheer", d: "Cheerleader", c: 0, l: 0, autoLevel: false, display: true, compoundLevel: true },
        { id: 17, n: "stripper", d: "Stripping", c: 0, l: 0, autoLevel: true, display: true, compoundLevel: true },
        { id: 18, n: "whore", d: "Whore", c: 0, l: 0, autoLevel: true, display: true, compoundLevel: true },

        { id: 19, n: "not used", d: "Lock Picking", c: 0, l: 0, autoLevel: true, display: false, compoundLevel: true },
        { id: 20, n: "dick", d: "Cock", c: 0, l: 0, autoLevel: true, display: false, compoundLevel: true },
        { id: 21, n: "beer", d: "Alcohol Tolerance", c: 0, l: 0, autoLevel: true, display: false, compoundLevel: true },
        { id: 22, n: "milk", d: "Breast Milk", c: 0, l: 0, autoLevel: true, display: false, compoundLevel: true },
        { id: 23, n: "noop", d: "Not used", c: 0, l: 0, autoLevel: true, display: false, compoundLevel: true },

    ];

    sex.st = [
        //pussy
        {
            id: 0, type: "fuckedinpussy", subdom: "sub", d: "Fucked my pussy", ent: [
                { id: 0, gender: "m", c: 0, day: null, names: new Array() },
                { id: 1, gender: "f", c: 0, day: null, names: new Array() },
                { id: 2, gender: "n", c: 0, day: null, names: new Array() },
            ]
        },
        {
            id: 1, type: "pussiesfucked", subdom: "dom", d: "Pussies fucked", ent: [
                { id: 0, gender: "m", c: 0, day: null, names: new Array() },
                { id: 1, gender: "f", c: 0, day: null, names: new Array() },
                { id: 2, gender: "n", c: 0, day: null, names: new Array() },
            ]
        },
        //anal
        {
            id: 2, type: "tookituptheass", subdom: "sub", d: "Anal", ent: [
                { id: 0, gender: "m", c: 0, day: null, names: new Array() },
                { id: 1, gender: "f", c: 0, day: null, names: new Array() },
                { id: 2, gender: "n", c: 0, day: null, names: new Array() },
            ]
        },
        {
            id: 3, type: "fuckass", subdom: "dom", d: "Assholes fucked", ent: [
                { id: 0, gender: "m", c: 0, day: null, names: new Array() },
                { id: 1, gender: "f", c: 0, day: null, names: new Array() },
                { id: 2, gender: "n", c: 0, day: null, names: new Array() },
            ]
        },
        //sissygasm
        {
            id: 4, type: "sissygasm", subdom: "sub", d: "Sissygasms", ent: [
                { id: 0, gender: "m", c: 0, day: null, names: new Array() },
                { id: 1, gender: "f", c: 0, day: null, names: new Array() },
                { id: 2, gender: "n", c: 0, day: null, names: new Array() },
            ]
        },
        //oral
        {
            id: 5, type: "gavebj", subdom: "sub", d: "Dicks Sucked", ent: [
                { id: 0, gender: "m", c: 0, day: null, names: new Array() },
                { id: 1, gender: "f", c: 0, day: null, names: new Array() },
                { id: 2, gender: "n", c: 0, day: null, names: new Array() },
            ]
        },
        {
            id: 6, type: "cunny", subdom: "dom", d: "Pussies Eaten", ent: [
                { id: 0, gender: "m", c: 0, day: null, names: new Array() },
                { id: 1, gender: "f", c: 0, day: null, names: new Array() },
                { id: 2, gender: "n", c: 0, day: null, names: new Array() },
            ]
        },
        {
            id: 7, type: "oralass", subdom: "sub", d: "Assholes licked", ent: [
                { id: 0, gender: "m", c: 0, day: null, names: new Array() },
                { id: 1, gender: "f", c: 0, day: null, names: new Array() },
                { id: 2, gender: "n", c: 0, day: null, names: new Array() },
            ]
        },
        {
            id: 8, type: "gotbj", subdom: "dom", d: "Received Oral", ent: [
                { id: 0, gender: "m", c: 0, day: null, names: new Array() },
                { id: 1, gender: "f", c: 0, day: null, names: new Array() },
                { id: 2, gender: "n", c: 0, day: null, names: new Array() },
            ]
        },
        //tits
        {
            id: 9, type: "gavetitjob", subdom: "sub", d: "Gave tit fucked", ent: [
                { id: 0, gender: "m", c: 0, day: null, names: new Array() },
                { id: 1, gender: "f", c: 0, day: null, names: new Array() },
                { id: 2, gender: "n", c: 0, day: null, names: new Array() },
            ]
        },
        {
            id: 10, type: "gottitjob", subdom: "dom", d: "Fucked tits", ent: [
                { id: 0, gender: "m", c: 0, day: null, names: new Array() },
                { id: 1, gender: "f", c: 0, day: null, names: new Array() },
                { id: 2, gender: "n", c: 0, day: null, names: new Array() },
            ]
        },
        //hand
        {
            id: 11, type: "gavehandjob", subdom: "sub", d: "Hand job / fingered", ent: [
                { id: 0, gender: "m", c: 0, day: null, names: new Array() },
                { id: 1, gender: "f", c: 0, day: null, names: new Array() },
                { id: 2, gender: "n", c: 0, day: null, names: new Array() },
            ]
        },
        {
            id: 12, type: "gothandjob", subdom: "dom", d: "Got hand job", ent: [
                { id: 0, gender: "m", c: 0, day: null, names: new Array() },
                { id: 1, gender: "f", c: 0, day: null, names: new Array() },
                { id: 2, gender: "n", c: 0, day: null, names: new Array() },
            ]
        },
        //fist
        {
            id: 13, type: "gotfisted", subdom: "sub", d: "Got fisted", ent: [
                { id: 0, gender: "m", c: 0, day: null, names: new Array() },
                { id: 1, gender: "f", c: 0, day: null, names: new Array() },
                { id: 2, gender: "n", c: 0, day: null, names: new Array() },
            ]
        },
        //foot
        {
            id: 14, type: "gotfootjob", subdom: "sub", d: "Got foot job", ent: [
                { id: 0, gender: "m", c: 0, day: null, names: new Array() },
                { id: 1, gender: "f", c: 0, day: null, names: new Array() },
                { id: 2, gender: "n", c: 0, day: null, names: new Array() },
            ]
        },
        {
            id: 15, type: "gavefootjob", subdom: "dom", d: "Gave foot job", ent: [
                { id: 0, gender: "m", c: 0, day: null, names: new Array() },
                { id: 1, gender: "f", c: 0, day: null, names: new Array() },
                { id: 2, gender: "n", c: 0, day: null, names: new Array() },
            ]
        },
        //piss
        {
            id: 16, type: "piss", subdom: "sub", d: "Pissed on", ent: [
                { id: 0, gender: "m", c: 0, day: null, names: new Array() },
                { id: 1, gender: "f", c: 0, day: null, names: new Array() },
                { id: 2, gender: "n", c: 0, day: null, names: new Array() },
            ]
        },
        {
            id: 17, type: "drankpiss", subdom: "sub", d: "Drank piss", ent: [
                { id: 0, gender: "m", c: 0, day: null, names: new Array() },
                { id: 1, gender: "f", c: 0, day: null, names: new Array() },
                { id: 2, gender: "n", c: 0, day: null, names: new Array() },
            ]
        },
        {
            id: 18, type: "analpiss", subdom: "sub", d: "Pissed in your ass", ent: [
                { id: 0, gender: "m", c: 0, day: null, names: new Array() },
                { id: 1, gender: "f", c: 0, day: null, names: new Array() },
                { id: 2, gender: "n", c: 0, day: null, names: new Array() },
            ]
        },
        //cum
        {
            id: 19, type: "drankcum", subdom: "sub", d: "Drank Cum", ent: [
                { id: 0, gender: "m", c: 0, day: null, names: new Array() },
                { id: 1, gender: "f", c: 0, day: null, names: new Array() },
                { id: 2, gender: "n", c: 0, day: null, names: new Array() },
            ]
        },
        {
            id: 20, type: "creampie", subdom: "sub", d: "Pussy Creampies", ent: [
                { id: 0, gender: "m", c: 0, day: null, names: new Array() },
                { id: 1, gender: "f", c: 0, day: null, names: new Array() },
                { id: 2, gender: "n", c: 0, day: null, names: new Array() },
            ]
        },
        {
            id: 21, type: "mudpie", subdom: "sub", d: "Anal Creampies", ent: [
                { id: 0, gender: "m", c: 0, day: null, names: new Array() },
                { id: 1, gender: "f", c: 0, day: null, names: new Array() },
                { id: 2, gender: "n", c: 0, day: null, names: new Array() },
            ]
        },
        //beast
        {
            id: 22, type: "dog", subdom: "sub", d: "Canine", ent: [
                { id: 0, gender: "m", c: 0, day: null, names: new Array() },
                { id: 1, gender: "f", c: 0, day: null, names: new Array() },
                { id: 2, gender: "n", c: 0, day: null, names: new Array() },
            ]
        },
        {
            id: 23, type: "horse", subdom: "sub", d: "Horse", ent: [
                { id: 0, gender: "m", c: 0, day: null, names: new Array() },
                { id: 1, gender: "f", c: 0, day: null, names: new Array() },
                { id: 2, gender: "n", c: 0, day: null, names: new Array() },
            ]
        },
        {
            id: 24, type: "pig", subdom: "sub", d: "Pig", ent: [
                { id: 0, gender: "m", c: 0, day: null, names: new Array() },
                { id: 1, gender: "f", c: 0, day: null, names: new Array() },
                { id: 2, gender: "n", c: 0, day: null, names: new Array() },
            ]
        },
        {
            id: 25, type: "vines", subdom: "sub", d: "Vines", ent: [
                { id: 0, gender: "m", c: 0, day: null, names: new Array() },
                { id: 1, gender: "f", c: 0, day: null, names: new Array() },
                { id: 2, gender: "n", c: 0, day: null, names: new Array() },
            ]
        },

        //virginity
        {
            id: 26, type: "analvirgin", subdom: "sub", d: "Anal Virginity", ent: [
                { id: 0, gender: "m", c: 0, day: null, names: new Array() },
                { id: 1, gender: "f", c: 0, day: null, names: new Array() },
                { id: 2, gender: "n", c: 0, day: null, names: new Array() },
            ]
        },
        {
            id: 27, type: "penisvirgin", subdom: "dom", d: "Virginity", ent: [
                { id: 0, gender: "m", c: 0, day: null, names: new Array() },
                { id: 1, gender: "f", c: 0, day: null, names: new Array() },
                { id: 2, gender: "n", c: 0, day: null, names: new Array() },
            ]
        },
        {
            id: 28, type: "pussyvirgin", subdom: "sub", d: "Got pussy fucked", ent: [
                { id: 0, gender: "m", c: 0, day: null, names: new Array() },
                { id: 1, gender: "f", c: 0, day: null, names: new Array() },
                { id: 2, gender: "n", c: 0, day: null, names: new Array() },
            ]
        },
        {
            id: 29, type: "oralvirgin", subdom: "sub", d: "Oral Virgin", ent: [
                { id: 0, gender: "m", c: 0, day: null, names: new Array() },
                { id: 1, gender: "f", c: 0, day: null, names: new Array() },
                { id: 2, gender: "n", c: 0, day: null, names: new Array() },
            ]
        },
        {
            id: 30, type: "milk", subdom: "sub", d: "Got Milked", ent: [
                { id: 0, gender: "m", c: 0, day: null, names: new Array() },
                { id: 1, gender: "f", c: 0, day: null, names: new Array() },
                { id: 2, gender: "n", c: 0, day: null, names: new Array() },
            ]
        },
    ];

    sissy.st = [
        { id: 0, pID: [17], icon: "firstday", x: 6, y: 1, name: "Sissy Intro", description: "Introduction to being a sissy", ach: false, active: true, room: 209 },

        { id: 1, pID: [0], icon: "fem101", x: 1, y: 1, name: "Feminization 101", description: "A smooth sissy is a sexy sissy.", ach: false, active: true, room: 180 },
        { id: 2, pID: [0], icon: "anal101", x: 4, y: 1, name: "Anal 101", description: "The importance and use of lube", ach: false, active: true, room: 175 },

        { id: 3, pID: [19], icon: "fem102", x: 0, y: 2, name: "Feminization 201", description: "Act like a lady (sitting)", ach: false, active: true, room: 180 },
        { id: 4, pID: [19], icon: "anal102", x: 3, y: 2, name: "Anal 202", description: "Learn how to use the bussy", ach: false, active: true, room: 175 },
        { id: 5, pID: [19], icon: "chastity101", x: 6, y: 2, name: "Chastity 201", description: "Get comfortable in chastity", ach: false, active: true, room: 177 },
        { id: 6, pID: [19], icon: "pee101", x: 2, y: 2, name: "Toilet 207", description: "Learn how to pee like a lady", ach: false, active: true, room: 180 },
        { id: 7, pID: [19], icon: "oral101", x: 5, y: 2, name: "Oral 206", description: "Learn the basics of oral", ach: false, active: true, room: 176 },
        { id: 8, pID: [19], icon: "bondage101", x: 11, y: 2, name: "Bondage 202", description: "Ropes are your friend", ach: false, active: true, room: 181 },
        { id: 9, pID: [19], icon: "cum101", x: 8, y: 2, name: "Cum 234", description: "Have a taste of your own", ach: false, active: true, room: 178 },

        { id: 10, pID: [3, 4, 5, 6, 7, 8, 9, 29], icon: "test1", x: 0, y: 3, name: "Sissy mid-term", description: "Show your progress!", ach: false, active: true, room: 182 },

        { id: 11, pID: [10], icon: "anal210", x: 5, y: 4, name: "Anal 210", description: "Find your bussy p-spot", ach: false, active: false },
        { id: 12, pID: [10], icon: "anal212", x: 3, y: 4, name: "Anal 312", description: "Experaince the joy of being filled", ach: false, active: true, room: 175 },
        { id: 13, pID: [10], icon: "chastity201", x: 6, y: 4, name: "Chastity 302", description: "Smaller chastity, smaller clitty", ach: false, active: true, room: 177 },
        { id: 14, pID: [10], icon: "enema205", x: 2, y: 4, name: "Enema 305", description: "A clean bussy makes everyone happy", ach: false, active: true, room: 180 },
        { id: 15, pID: [10], icon: "fem201", x: 0, y: 4, name: "Feminization 301", description: "Introduction to hormones", ach: false, active: true, room: 180 },
        { id: 16, pID: [19], icon: "fem121", x: 1, y: 2, name: "Feminization 202", description: "How to walk in high heels", ach: false, active: true, room: 180 },

        { id: 17, pID: [], icon: "invite", x: -1, y: -1, name: "Invited", description: "Payday told to be a sissy", ach: false, active: false },

        { id: 18, pID: [10], icon: "oral203", x: 5, y: 4, name: "Oral 310", description: "How to properly perform cunnilingus", ach: false, active: true, room: 176 },

        { id: 19, pID: [1, 2, 26], icon: "fem103", x: 8, y: 1, name: "Feminization 102", description: "Given your first set of sissy clothes.", ach: false, active: true, room: 180 },
        { id: 20, pID: [30, 24], icon: "bondage203", x: 10, y: 5, name: "Bondage 436", description: "Pony girl races", ach: false, active: true, room: 181 },

        { id: 21, pID: [0], icon: "finalx", x: 0, y: 6, name: "Final", description: "Prove you're a true sissy", ach: false, active: true, room: 176 },

        { id: 22, pID: [10], icon: "cum204", x: 8, y: 4, name: "Cum 304", description: "What are the jars for?", ach: false, active: true, room: 178 },

        { id: 23, pID: [15, 14], icon: "fem310", x: 1, y: 5, name: "Feminization 423", description: "Permanent hair removal", ach: false, active: true, room: 180 },
        { id: 24, pID: [10], icon: "bondage310", x: 11, y: 4, name: "Bondage 310", description: "Get in touch with your feelings", ach: false, active: true, room: 181 },
        { id: 25, pID: [22], icon: "cum307", x: 8, y: 5, name: "Cum Eating 404", description: "Eat cum from a sissy's ass", ach: false, active: false, room: 178 },
        { id: 26, pID: [0], icon: "bondage107", x: 10, y: 1, name: "Bondage 107", description: "Intro", ach: false, active: true, room: 181 },
        { id: 27, pID: [13, 22], icon: "chastity442", x: 7, y: 5, name: "Chastity 442", description: "The ultimate choice", ach: false, active: true, room: 177 },
        { id: 28, pID: [12, 18], icon: "anal421", x: 4, y: 5, name: "Anal/Oral 421", description: "Finger cuffs", ach: false, active: true, room: 175 },
        { id: 29, pID: [19], icon: "ex215", x: 9, y: 2, name: "Exposure 215", description: "Share your true slutty self with the world. ", ach: false, active: true, room: 181 },
        { id: 30, pID: [10], icon: "ex317", x: 9, y: 4, name: "Exposure 317", description: "Do your little dance on the catwalk.", ach: false, active: true, room: 170 },
        
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

        { id: 11, pId: 3, icon: "qc2", p: 1, h: true, x: 830, y: 774, ach: false, name: "A Cup", desc: "Feminine Body" },
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

        { id: 23, pId: 25, icon: "qwhore", p: 4, h: false, x: 1132, y: 64, ach: false, name: "Whore", desc: "Gotta make that money, honey." },
        { id: 24, pId: 3, icon: "qs", p: 1, h: false, x: 830, y: 64, ach: false, name: "Confidence", desc: "You can seduce men." },
        { id: 25, pId: 24, icon: "qsed", p: 3, h: false, x: 981, y: 64, ach: false, name: "Stripper", desc: "Feel comfortable taking your clothes off for money" },

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
        { id: 44, t: "plant", n: "sex", c: 0 },
    ];


    trophy.st = [
        { id: 0, display: "Wear panties for the first time. ", img: "panties.png", ach: false, group: "sissy" },
        { id: 1, display: "Lock the cock. ", img:"chastity.png", ach: false, group: "sissy" },
    ];

    future.st = new Array();

    dreams.st = new Array();
};

gv.init();

gv.i=function(n){var r=-1;for(i=0;i<gv.st.length;i++)if(gv.st[i].n===n){r=i;break}return r}; //returns index for gv.st by name
daily.i = function (n) {
    for (i = 0; i < daily.st.length; i++)
        if (daily.st[i] === n) 
            return i;
    return null;
}; //returns index for daily.st by name
weekly.i = function (n) { var r = -1; for (i = 0; i < weekly.st.length; i++)if (weekly.st[i].n === n) { r = i; break } return r }; //returns index for daily.st by name
levels.i=function(n){var r=-1;for(i=0;i<levels.st.length;i++)if(levels.st[i].n===n){r=i;break}return r}; //returns index for levels.st by name
stats.i = function (t, n) { for (var r = 0; r < stats.st.length; r++)if (t === stats.st[r].t && n === stats.st[r].n) return r; return -1 };

gv.get = function (n) {var t=gv.i(n);return t>-1?gv.st[t].t:(console.log("gv.st missing name: "+n),null)}; //gets gv.st
daily.get = function (n) {
    return daily.i(n) !== null;
}; //gets daily.st
weekly.get = function (n) { var t = weekly.i(n); return t > -1 ? weekly.st[t].t : (console.log("weekly.st missing name: " + n), null) }; //gets daily.st
levels.get=function(l){var n=levels.i(l);return n>-1?{c:levels.st[n].c,l:levels.st[n].l}:(console.log("levels.st missing name: "+l),null)}; //gets levels
stats.get = function (t, n) { return stats.st[stats.i(t, n)].c };

daily.set = function (n, override = true) {
    let i = daily.i(n);
    if (n === "shower") {
        if (i === null) {
            gv.set("shower", g.dt);
            let maxEnergy = gv.get("maxenergy");
            let energy = gv.get("energy");
            if (energy < maxEnergy) {
                gv.mod("energy", maxEnergy - energy);
            }
            else
                g.popUpNotice("Already at Max energy");
        }

        cl.clean("face");
    }
    if (override && i === null)
        daily.st.push(n);
    else if (!override && i !== null)
        daily.st.splice(i, 1);
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
                if (g.roomID === 475) {
                    $(".my-life[data-t='energy']").css({ "width": ((gv.st[index].t / maxEnergy) * 280 * g.ratio) + "px" });
                }
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
            case "masturbate":
                gv.st[index].t += amount;
                switch (gv.st[index].n) {
                    case "masturbate_dick":
                    case "masturbate_vibrator":
                    case "masturbate_pussy":
                        cl.doCum();
                        break;
                    default:
                        gv.mod("arousal", 50);
                        break;
                }
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

gv.getButtCum = function () {
    var pig, horse, dog, human, cumType;
    cumType = null;
    pig = horse = dog = human = 0;
    counter = 0;
    for (i = 0; i < gv.st.length; i++) {
        if (gv.st[i].n === "analCum") {
            if (gv.st[i].t > 0) {
                human = gv.st[i].t;
                cumType = "cumjar";
            }
        }
        else if (gv.st[i].n === "analCumDog") {
            if (gv.st[i].t > 0) {
                dog = gv.st[i].t;
                cumType = "dogcumjar";
            }
        }
        else if (gv.st[i].n === "analCumHorse") {
            if (gv.st[i].t > 0) {
                horse = gv.st[i].t;
                cumType = "horsecumjar";
            }
        }
        else if (gv.st[i].n === "analCumPig") {
            if (gv.st[i].t > 0) {
                pig = gv.st[i].t;
                cumType = "pigcumjar";
            }
        }
    }
    return {
        human: human,
        dog: dog,
        horse: horse,
        pig: pig,
        cumType: cumType,
        total: human + dog + horse + pig
    };
};

gv.clearButtCum = function () {
    for (i = 0; i < gv.st.length; i++) {
        if (gv.st[i].n === "analCum") {
            gv.st[i].t = 0;
        }
        else if (gv.st[i].n === "analCumDog") {
            gv.st[i].t = 0;
        }
        else if (gv.st[i].n === "analCumHorse") {
            gv.st[i].t = 0;
        }
        else if (gv.st[i].n === "analCumPig") {
            gv.st[i].t = 0;
        }
    }
}

levels.set = function (name, c, l) {
    let i = levels.i(name);
    if(c !== null)
        levels.st[i].c = c;
    if(l !== null)
        levels.st[i].l = l;
    sstat.makeGraph();
};

levels.modLevel = function (name, amount) {
    if (name === "xdress" && !sissy.st[0].ach) {
        return;
    }

    let i = levels.i(name);
    let startLevel = levels.st[i].l;
    levels.st[i].l += amount;
    
    if (levels.st[i].l < 0) {
        levels.st[i].l = 0;
        levels.st[i].c = 0;
    }

    let levelsChange = levels.st[i].l - startLevel;

    if (levelsChange < 0)
        g.popUpNotice("You lost " + Math.abs(levelsChange) + " LEVEL" + (levelsChange === -1 ? "" : "S") + " for " + levels.st[i].d + "!");
    else if (levelsChange > 0)
        g.popUpNotice("You gained " + levelsChange + " LEVEL" + (levelsChange === 1 ? "" : "S") + " for " + levels.st[i].d + "!");
};

levels.mod = function (name, amount) {
    let i, startingLevel;
    
    i = levels.i(name);
    startingLevel = levels.st[i].l;

    //fix for old old level system - remove in the future;
    if (levels.st[i].c === null || isNaN(levels.st[i].c))
        levels.st[i].c = 0;

    if (!levels.st[i].autoLevel) {
        levels.st[i].c += amount;
        if (levels.st[i].c < 0)
            levels.st[i].c = 0;
        if (levels.st[i].c > 100)
            levels.st[i].c = 100;
        if (amount > 0) {
            if (levels.st[i].l > 15)
                g.popUpNoticeBottom("You're maxed out for " + levels.st[i].d);
            else if(amount > 0)
                g.popUpNoticeBottom("You gained "  + amount + " points for " + levels.st[i].d + "!");
            else
                g.popUpNoticeBottom("You lost " + Math.abs(amount) + " points for " + levels.st[i].d + "!");
        }
    }
    else if (amount > 0) {
        if (levels.st[i].compoundLevel) {
            levels.st[i].c += amount;
            while (levels.st[i].c >= levels.getCap(levels.st[i].l)) {
                levels.st[i].c -= levels.getCap(levels.st[i].l);
                levels.st[i].l++;
            }
            let levelsChange = levels.st[i].l - startingLevel;
           
            if (levelsChange > 0)
                g.popUpNoticeBottom("You gained " + levelsChange + " LEVEL" + (levelsChange === 1 ? "" : "S") + " for " + levels.st[i].d + "!");
            else
                g.popUpNoticeBottom("You gained " + amount + " POINT" + (amount === 1 ? "" : "S") + " for " + levels.st[i].d + "!");
        }
        else if (levels.st[i].autoLevel) {
            levels.st[i].c += amount;
            while (levels.st[i].c >= 100) {
                levels.st[i].c -= 100;
                levels.st[i].l++;
            }
            let levelsChange = levels.st[i].l - startingLevel;
            if (levelsChange > 0)
                g.popUpNoticeBottom("You gained " + levelsChange + " LEVEL" + (levelsChange === 1 ? "" : "S") + " for " + levels.st[i].d + "!");
            else
                g.popUpNoticeBottom("You gained " + amount + " POINT" + (amount === 1 ? "" : "S") + " for " + levels.st[i].d + "!");
        }
    }
    else if (amount < 0) {
        if (levels.st[i].l >= 15) {
            levels.st[i].l = 15;
            return;
        }
        levels.st[i].c -= amount;
        if (levels.st[i].c < 0)
            levels.st[i].c = 0;
        g.popUpNoticeBottom(levels.st[i].d + " points have decreased. ");
    }

    if (name === "fitness") {
        var fitnessEnd = levels.get("fitness").l;
        if (startingLevel < fitnessEnd)
            gv.mod("maxenergy", (fitnessEnd - startingLevel) * 4);
    }
    sstat.makeGraph();
};

levels.getCap = function (levels) {
    let interestRate = .3;
    if (levels > 7)
        interestRate = interestRate + .05;
    var initialComp = Math.floor(55 * Math.pow(1 + interestRate, levels));
    //if (initialComp > 500)
    //    return 500;
    return initialComp;
};

levels.compute = function (level) {
    var total = 0;
    let i;
    for (i = 0; i < level; i++) {
        total += levels.getCap(i);
    }
    return total;
}

sex.get = function (type, gender) {
    let gr;
    switch (gender) {
        case "m": gr = 0; break; 
        case "f": gr = 1; break;
        case "n": gr = 2; break;
    }
    for (let i = 0; i < sex.st.length; i++) {
        if (type === sex.st[i].type) {
            return { i: i, j: gr };
        }
    }
    return { i: null, gr: null };
};

sex.mod = function (type, gender, name) {
    if (gender !== null) {
        var idx = sex.get(type, gender);
        sex.st[idx.i].ent[idx.j].c++;
        if (sex.st[idx.i].ent[idx.j].day === null) {
            sex.st[idx.i].ent[idx.j].day = char.getDaysPlayed();
        }
        if (name === null)
            name = "Random person";
        else
            name = sc.n(name);
        if (!sex.st[idx.i].ent[idx.j].names.includes(name))
            sex.st[idx.i].ent[idx.j].names.push(name);
        levels.mod(sex.st[idx.i].subdom, 10);
        if (sex.st[idx.i].subdom === "sub")
            levels.mod("xdress", 20);
        let virginid = -1;
        switch (type) {
            case "fuckedinpussy": virginid = 28; break;
            case "tookituptheass": virginid = 26; break;
            case "pussiesfucked": virginid = 27; break;
            case "fuckedasshole": virginid = 27; break;
            case "gavebj": virginid = 29; break;
            case "cunny": virginid = 29; break;
            case "oralass": virginid = 29; break;
        };

        if (virginid > -1) {
            let gid;
            if (sex.st[virginid].ent[0].c === 0 && sex.st[virginid].ent[1].c === 0 && sex.st[virginid].ent[1].c === 0) {
                switch (gender) {
                    case "m": gid = 0; break;
                    case "f": gid = 1; break;
                    case "n": gid = 2; break;
                }
                sex.st[virginid].ent[gid].c = 1;
                sex.st[virginid].ent[gid].day = char.getDaysPlayed();
                sex.st[virginid].ent[gid].names.push(name);
            }
        }
    }
    else
        console.log("Missing gender in sex.mod type: " + type);
};

sex.getvirgin = function (id) {
    let gender = null;
    let who = "Unknown";
    let dayz = 0;
    if (sex.st[id].ent[0].c > 0) {
        gender = "m";
        dayz = sex.st[id].ent[0].day;
        if (sex.st[id].ent[0].names.length > 0)
            who = sex.st[id].ent[0].names[0];
    }
    if (sex.st[id].ent[1].c > 0) {
        gender = "f";
        dayz = sex.st[id].ent[1].day;
        if (sex.st[id].ent[1].names.length > 0)
            who = sex.st[id].ent[1].names[0];
    }
    if (sex.st[id].ent[2].c > 0) {
        gender = "n";
        dayz = sex.st[id].ent[2].day;
        if (sex.st[id].ent[2].names.length > 0)
            who = sex.st[id].ent[2].names[0];
    }
    if (gender === null)
        return { virgin: true, gender: null, day: null, who: null };
    return { virgin: false, gender: gender, day: dayz, who: who };
};

stats.mod = function (t, n, amount) {
    stats.st[stats.i(t, n)].c += amount;
};

future.add = function (name, daysleft) {
    let alreadyExists = false;
    for (let i = 0; i < future.st.length; i++) {
        if (future.st[i] === name) {
            alreadyExists = true;
        }
    }
    if (!alreadyExists)
        future.st.push({ name: name, daysleft: daysleft });
};

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

future.kill = function (name) {
    for (let i = 0; i < future.st.length; i++) {
        if (future.st[i].name === name) {
            future.st.splice(i, 1);
            return;
        }
    }
};

daily.newday = function () { 
    daily.st = new Array();
    var i;
    if ((g.hourBetween(0, 7) && g.dt.getDay() === 0) || (g.hourBetween(7, 24) && g.dt.getDay() === 6)) {
        for (i = 0; i < weekly.st.length; i++)
            weekly.st[i].t = false;
    }
};

levels.desc = function (name, level) {
    if (name === "fitness") {
        return { count: -1, txt: (level * 4) + " Energy Boost" };
    }
    else if (name === "fame") {
        return { count: -1, txt: (level) + "x chance of rape " };
    }
    else if (name === "strength") {
        return { count: -1, txt: "" };
    }
    else if (name === "charisma") {
        return { count: -1, txt: "" };
    }
    
    if (name === "xdress") {
        if (!sissy.st[0].ach)
            return { count: -1, txt: "Unlock Sissy School" };
        return { count: -1, txt: "Points: " + level };
    }
    var levelsDesc = new Array();
    switch (name) {
        case "dom":
            levelsDesc = [
                { id: 0, txt: "Total pushover" },
                { id: 1, txt: "Pushover" },
                { id: 2, txt: "Almost normal" },
                { id: 3, txt: "normal" },
                { id: 4, txt: "take charge" },
                { id: 5, txt: "in charge" },
                { id: 6, txt: "D 6" },
                { id: 7, txt: "D 7" },
                { id: 8, txt: "D 8" },
                { id: 9, txt: "D 9" },
            ];
            break;
        case "sub":
            levelsDesc = [
                { id: 0, txt: "Not submissive" },
                { id: 1, txt: "Can kiss Missy's feet" },
                { id: 2, txt: "Can x Missy" },
                { id: 3, txt: "Can offer mouth" },
                { id: 4, txt: "can y missy" },
                { id: 5, txt: "Can offer ass" },
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
                { id: 0, txt: "Dick is gross" },
                { id: 1, txt: "Suck small dildos" },
                { id: 2, txt: "Suck medium dildos" },
                { id: 3, txt: "Deepthroat dildos" },
                { id: 4, txt: "Suck a small cock" },
                { id: 5, txt: "Suck large cocks" },
                { id: 6, txt: "Deepthroat cock" },
                { id: 7, txt: "Deepthroat large cocks" },
                { id: 8, txt: "Can suck horse cock" },
                { id: 9, txt: "Need cock!" },
            ];
            break;
        case "anal":
            levelsDesc = [
                { id: 0, txt: "Butt stuff is gross" },
                { id: 1, txt: "Finger in your butt" },
                { id: 2, txt: "Tiny dildo" },
                { id: 3, txt: "Small dildo" },
                { id: 4, txt: "Medium dildo" },
                { id: 5, txt: "Dick in the ass" },
                { id: 6, txt: "Large dildo" },
                { id: 7, txt: "Huge dildo" },
                { id: 8, txt: "Horse cock" },
                { id: 9, txt: "Need anal everyday!" },
            ];
            break;
        case "cum":
            levelsDesc = [
                { id: 0, txt: "Ewwww" },
                { id: 1, txt: "Taste your own" },
                { id: 2, txt: "Not bad" },
                { id: 3, txt: "Don't mind the taste" },
                { id: 4, txt: "You can swallow" },
                { id: 5, txt: "Creampies!" },
                { id: 6, txt: "cum gains 5 energy" },
                { id: 7, txt: "cum gains 15 energy" },
                { id: 8, txt: "cum gains 25 energy" },
                { id: 9, txt: "Addicted to cum" },
            ];
            break;
        case "pi":
            levelsDesc = [
                { id: 0, txt: "Unlock first case" },
                { id: 1, txt: "Unlock more cases" },
                { id: 2, txt: "Pick pocket" },
                { id: 3, txt: "unlock locked doors" },
                { id: 4, txt: "Unlock cases" },
                { id: 5, txt: "Unlock cases" },
                { id: 6, txt: "Unlock cases" },
                { id: 7, txt: "TBD" },
                { id: 8, txt: "TBD" },
                { id: 9, txt: "TBD" },
            ];
            break;
        case "piss":
            levelsDesc = [
                { id: 0, txt: "Piss is gross" },
                { id: 1, txt: "Likes to watch" },
                { id: 2, txt: "Pissed on by girl" },
                { id: 3, txt: "Pissed on my guy" },
                { id: 4, txt: "Can drink piss" },
                { id: 5, txt: "Love piss!" },
                { id: 6, txt: "Yum yum piss" },
                { id: 7, txt: "Addicted to piss" },
            ];
            break;
        case "beast":
            levelsDesc = [
                { id: 0, txt: "Pet animals" },
                { id: 1, txt: "'Play' with animals" },
                { id: 2, txt: "Knotty dildo" },
                { id: 3, txt: "Hand job" },
                { id: 4, txt: "blow job" },
                { id: 5, txt: "anal" },
                { id: 6, txt: "Horse!" },
                { id: 7, txt: "Loves animals" },
                { id: 7, txt: "Loves Animales" },
                { id: 8, txt: "Need it!" },
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
                { id: 7, txt: "Cheer at the Games!" },
                { id: 8, txt: "Real Cheerleader!" },
                { id: 9, txt: "Real Cheerleader!" },
                { id: 10, txt: "Cum Bucket" },
            ];
            break;
        case "makeup":
            levelsDesc = [
                { id: 0, txt: "Light makeup" },
                { id: 1, txt: "Makeup" },
                { id: 2, txt: "Bimbo Makeup" },
            ];
            break;
    };
    if (levelsDesc.length === 0) {
        return { count: -1, txt: "not found" };
    }
    else if (level >= levelsDesc.length) {
        return { count: levelsDesc.length, txt: levelsDesc[levelsDesc.length - 1].txt };
    }
    else {
        return { count: levelsDesc.length, txt: levelsDesc[level].txt };
    }
};

levels.gavehandjob = function (gender, who = null, beast = null) {
    gv.mod("arousal", 40);
    sex.mod("gavehandjob", gender, who);
    if (beast !== null)
        levels.beast(beast, gender, who, "hand");
};

levels.gothandjob = function (gender, who = null, sissygasm = false, came = true) {
    if (came)
        cl.doCum();
    else
        gv.mod("arousal", 50);
    sex.mod("gothandjob", gender, who);
    if (sissygasm)
        sex.mod("sissygasm", gender, who);
};

levels.gotbj = function (gender, who = null) {
    cl.doCum(false);
    sex.mod("gotbj", gender, who);
};

levels.anal = function (size, sissygasm = false, gender = null, creampie = false, who = null, beast = null) {
    //0: 1 finger
    //1: tiny (finger)
    //2: small
    //3: regular (dick)
    //4: large (large dick)
    //5: huge
    //6: giant
    //7: ludicris
    if (levels.get("anal").l > 3) {
        switch (size) {
            case 0: levels.mod("anal", 1); break;
            case 1: levels.mod("anal", 5);  break;
            case 2: levels.mod("anal", 10); break;
            case 3: levels.mod("anal", 15); break;
            case 4: levels.mod("anal", 20); break;
            case 5: levels.mod("anal", 25); break;
            case 6: levels.mod("anal", 30); break;
            case 7: levels.mod("anal", 35); break;
            default: console.log("BAD ANAL SIZE: " + size);
        }
    }
    else {
        switch (levels.analSize(size).n) {
            case "noop": break;
            case "easy": levels.mod("anal", 10); break;
            case "normal": levels.mod("anal", 20); break;
            case "brutal": levels.mod("anal", 40); break;
            case "broken": levels.mod("anal", 100); break;
        }
    }
    if (sissygasm) {
        cl.doCum(false);
        if (gender !== null)
            sex.mod("sissygasm", gender, who);
    }
    else {
        gv.mod("arousal", 30);
    }

    if (creampie) {
        levels.mod("cum", 25, 999);
        sex.mod("mudpie", gender, who);
        if (beast === null) {
            gv.mod("analCum", 1);
        }
        else if (beast === "dog") {
            gv.mod("analCumDog", 1);
        }
        else if (beast === "horse") {
            gv.mod("analCumHorse", 1);
        }
        else if (beast === "pig") {
            gv.mod("analCumPig", 1);
        }
        if (gv.getButtCum().total === 1) //only fire off on the first instance of cream pie
            cl.display();
    }

    if (beast !== null) {
        sex.mod(beast, "m", who);
        levels.mod("beast", 50, 10);
        switch (beast) {
            case "dog": gv.mod("analCumDog", 1); break;
            case "horse": gv.mod("analCumHorse", 1); break;
            case "pig": gv.mod("analCumPig", 1); break;
            case "vines": gv.mod("analCumPlant", 1); break;
        }
    }

    if (gender !== null) {
        sex.mod("tookituptheass", gender, who);
    }
};

levels.analSize = function (size) {
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
                case 0: retvar = "easy"; break;
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
                case 0: retvar = "easy"; break;
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
                case 0: retvar = "easy"; break;
                case 1: retvar = "easy"; break;
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
        case "noop": return { n: retvar, c: 0, canTake: true, pleasure: 3 };
        case "easy": return { n: retvar, c: 1, canTake: true, pleasure: 7 };
        case "normal": return { n: retvar, c: 2, canTake: true, pleasure: 15 };
        case "brutal": return { n: retvar, c: 3, canTake: true, pleasure: -2 };
        case "broken": return { n: retvar, c: 4, canTake: false, pleasure: -10 };
    };
};

levels.gavebj = function (size, gender, who, swallow = false, facialOverride = false) {
    levels.oralSizes(size);
    gv.mod("arousal", 25);

    if (swallow && gender !== null) {
        levels.swallowCum(gender, who);
    }
    if (facialOverride) {
        cl.c.cumface = true;
        cl.display();
    }
    else if (gender !== null) {
        sex.mod("gavebj", gender, who);
    }
};

levels.oral = function (size, gender = null, who = null, swallow = false, beast = null, facialOverride = false) {
    //levels.mod("oral", 25, 999);
    levels.oralSizes(size);
    gv.mod("arousal", 25);

    if (swallow && gender !== null) {
        levels.swallowCum(gender, who);
    }
    else if ((gender === "m" || gender === "n") && !swallow) {
        if (!facialOverride) {
            cl.c.cumface = true;
            cl.display();
        }
    }

    if (gender === "f") {
        sex.mod("cunny", gender, who);
    }
    else if (gender !== null) {
        sex.mod("gavebj", gender, who);
    }

    levels.beast(beast, gender, who, "oral");
}

levels.oralSizes = function (size) {
    if (levels.get("oral").l > 3) {
        switch (size) {
            case 0: levels.mod("oral", 2); break;
            case 1: levels.mod("oral", 6); break;
            case 2: levels.mod("oral", 10); break;
            case 3: levels.mod("oral", 15); break;
            case 4: levels.mod("oral", 20); break;
            case 5: levels.mod("oral", 25); break;
            case 6: levels.mod("oral", 30); break;
            case 7: levels.mod("oral", 35); break;
            default: console.log("BAD ORAL SIZE: " + size);
        }
    }
    else {
        switch (levels.oralTake(size).n) {
            case "noop": levels.mod("oral", 2); break;
            case "easy": levels.mod("oral", 10); break;
            case "normal": levels.mod("oral", 20); break;
            case "brutal": levels.mod("oral", 40); break;
            case "broken": levels.mod("oral", 100); break;
        };
    }
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
        case "noop": return { n: retvar, c: 0, canTake: true, pleasure: 1 };
        case "easy": return { n: retvar, c: 1, canTake: true, pleasure: 2 };
        case "normal": return { n: retvar, c: 2, canTake: true, pleasure: 5 };
        case "brutal": return { n: retvar, c: 3, canTake: true, pleasure: 2 };
        case "broken": return { n: retvar, c: 4, canTake: false, pleasure: -2 };
    }
};

levels.gotfisted = function(gender, who = null, sissygasm = false){
    if (sissygasm)
        cl.doCum();
    sex.mod("gotfisted", "f", who);
    levels.anal(gender === "m" ? 6 : 5);
}

levels.swallowCum = function (gender = "m", name = null) {
    switch (levels.get("cum").l) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4: gv.mod("energy", 5); break;
        case 5: gv.mod("energy", 10); break;
        case 6: gv.mod("energy", 15); break;
        case 7: gv.mod("energy", 20); break;
        case 8: gv.mod("energy", 25); break;
        case 9: gv.mod("energy", 30); break;
        default: gv.mod("energy", 35); break;
    }
    levels.mod("cum", 25);
    sex.mod("drankcum", gender, name);
};

levels.oralass = function(gender, who = null){
    sex.mod("oralass", gender, who);
    gv.mod("arousal", 40);
    levels.oralSizes(3);
};

levels.gavetitjob = function (gender, who = null) {
    sex.mod("gavetitjob", gender, who);
    gv.mod("arousal", 40);
};

sex.masturbate = function (t = null) {
    switch (t) {
        case "penis":
        case null:
            sc.startMissionTask("priest", "confession", 1);
            stats.mod("masturbate", "dick", 1);
            cl.doCum(false);
            break;
        case "finger":
            sc.startMissionTask("priest", "confession", 4);
            break;
        case "anal":
            sc.startMissionTask("priest", "confession", 5);
            break;
        case "oral":
            sc.startMissionTask("priest", "confession", 6);
            break;
    }
};

levels.piss = function (drankpiss, analpiss, pissedon, gender, who = null) {
    if (analpiss) {
        sex.mod("analpiss", gender, who);
        levels.mod("piss", 40, 999);
        levels.mod("xdress", 40, 999);
    }
    else if (pissedon) {
        sex.mod("piss", gender, who);
        levels.mod("piss", 15, 999);
        levels.mod("xdress", 5, 999);
    }
    else if (drankpiss) {
        sex.mod("drankpiss", gender, who);
        levels.mod("piss", 25, 999);
        var pissLevel = levels.get("piss").l - 4;
        levels.mod("xdress", 15, 999);

        if (pissLevel > 0) {
            let pissEnergy = pissLevel * 5;
            if (gender === "f")
                pissEnergy += 20;
            gv.mod("energy", pissEnergy);
        }
    }
    else {
        levels.mod("xdress", 5, 999);
        levels.mod("piss", 15, 999);
    }
}

levels.fuckpussy = function (who, gender = "f") {
    cl.doCum(false);
    levels.mod("dick", 20, 999);
    sex.mod("pussiesfucked", gender, who);
};

levels.beast = function (beast, gender = "m", who = null, type = "anal") {
    if (beast !== null) {
        sex.mod(beast, gender, who);
        switch (type) {
            case "hand": levels.mod("beast", 25); break;
            case "oral": levels.mod("beast", 45); break;
            case "anal": levels.mod("beast"), 60; break;
        }
    }
};

levels.fuckass = function (who = null, gender = "f") {
    cl.doCum(false);
    sex.mod("fuckass", gender, who);
};

levels.gottitjob = function (gender, who = null) {
    sex.mod("gottitjob", gender, who);
    cl.doCum();
};

levels.beer = function (numBeers = 1) {
    gv.mod("beer", numBeers);
    levels.mod("beer", 5);
    gv.mod("bladder", .3);
    let totalBeers = gv.get("beer");
    let beerLevel = levels.get("beer").l + 2;
    if (totalBeers >= beerLevel)
        return { totalBeers: totalBeers, beerLevel: beerLevel, passout: true, nextOneDrunk: true };

    return { totalBeers: totalBeers, beerLevel: beerLevel, passout: false, nextOneDrunk: (beerLevel - totalBeers === 1) };
};

levels.gotfootjob = function (gender, who = null, came = true) {
    if (came)
        cl.doCum();
    sex.mod("gotfootjob", gender, who);
};

levels.gavefootjob = function (gender, who = null) {
    sex.mod("gavefootjob", gender, who);
};

levels.sissygasm = function (gender, who = null) {
    cl.doCum();
    sex.mod("sissygasm", gender, who);
};

qdress.unlock = function (setting = true) {
    for (let i = 0; i < qdress.st.length; i++)
        qdress.st[i].ach = setting;
};

gv.timeTxt = function (hour, minute) {
    if (gv.get("clock24") === "12") 
        return (hour % 12) + ":" + (minute < 10 ? ("0" + minute.toString()) : minute) + " " + hour < 12 ? "AM" : "PM";
    else
        return hour + ":" + (minute < 10 ? ("0" + minute.toString()) : minute)
};

qdress.stx = new Array();

qdress.getPoints = function (i, points, hormones) {
    if (!qdress.st[i].ach) {
        qdress.stx.push(qdress.st[i]);
        return;
    }

    for (let j = 0; j < qdress.st.length; j++) {
        if (qdress.st[j].pId === i) {
            if (qdress.st[j].p <= points && ((qdress.st[j].h && hormones) || !qdress.st[j].h)) {
                qdress.getPoints(j, points, hormones);
            }
        }
    }
};

gv.save = function () {
    var i;
    var retArray = {
        gv: new Array(),
        daily: daily.st.slice(),
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
    for (let i = 0; i < sex.st.length; i++) {
        for (let j = 0; j < 3; j++)
            retArray.sex.push({
                i: i,
                j: j,
                c: sex.st[i].ent[j].c,
                day: sex.st[i].ent[j].day,
                names: sex.st[i].ent[j].names
            });
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

gv.load = function (rma, saveVersion) {
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

    daily.st = rma.daily.slice();

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

    if (saveVersion > 25.4) {
        for (let i = 0; i < rma.sex.length; i++) {
            sex.st[rma.sex[i].i].ent[rma.sex[i].j].c = rma.sex[i].c;
            sex.st[rma.sex[i].i].ent[rma.sex[i].j].day = rma.sex[i].day;
            sex.st[rma.sex[i].i].ent[rma.sex[i].j].names = rma.sex[i].names;
        }
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

    if (gv.get("sissySchoolClass") === "final") {
        gv.set("sissySchoolClass", null);
        gv.set("sissySchoolClassDays", 0);
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

sex.stObject = function () {
    return {
        fuckedinpussy: {
            male: sex.st[0].ent[0].c,
            female: sex.st[0].ent[1].c,
            nb: sex.st[0].ent[2].c,
            total: sex.st[0].ent[0].c + sex.st[0].ent[1].c + sex.st[0].ent[2].c
        },
        pussiesfucked: {
            male: sex.st[1].ent[0].c,
            female: sex.st[1].ent[1].c,
            nb: sex.st[1].ent[2].c,
            total: sex.st[1].ent[0].c + sex.st[1].ent[1].c + sex.st[1].ent[2].c
        },
        tookituptheass: {
            male: sex.st[2].ent[0].c,
            female: sex.st[2].ent[1].c,
            nb: sex.st[2].ent[2].c,
            total: sex.st[2].ent[0].c + sex.st[2].ent[1].c + sex.st[2].ent[2].c
        },
        fuckass: {
            male: sex.st[3].ent[0].c,
            female: sex.st[3].ent[1].c,
            nb: sex.st[3].ent[2].c,
            total: sex.st[3].ent[0].c + sex.st[3].ent[1].c + sex.st[3].ent[2].c
        },
        sissygasm: {
            male: sex.st[4].ent[0].c,
            female: sex.st[4].ent[1].c,
            nb: sex.st[4].ent[2].c,
            total: sex.st[4].ent[0].c + sex.st[4].ent[1].c + sex.st[4].ent[2].c
        },
        gavebj: {
            male: sex.st[5].ent[0].c,
            female: sex.st[5].ent[1].c,
            nb: sex.st[5].ent[2].c,
            total: sex.st[5].ent[0].c + sex.st[5].ent[1].c + sex.st[5].ent[2].c
        },
        cunny: {
            male: sex.st[6].ent[0].c,
            female: sex.st[6].ent[1].c,
            nb: sex.st[6].ent[2].c,
            total: sex.st[6].ent[0].c + sex.st[6].ent[1].c + sex.st[6].ent[2].c
        },
        oralass: {
            male: sex.st[7].ent[0].c,
            female: sex.st[7].ent[1].c,
            nb: sex.st[7].ent[2].c,
            total: sex.st[7].ent[0].c + sex.st[7].ent[1].c + sex.st[7].ent[2].c
        },
        gotbj: {
            male: sex.st[8].ent[0].c,
            female: sex.st[8].ent[1].c,
            nb: sex.st[8].ent[2].c,
            total: sex.st[8].ent[0].c + sex.st[8].ent[1].c + sex.st[8].ent[2].c
        },
        gavetitjob: {
            male: sex.st[9].ent[0].c,
            female: sex.st[9].ent[1].c,
            nb: sex.st[9].ent[2].c,
            total: sex.st[9].ent[0].c + sex.st[9].ent[1].c + sex.st[9].ent[2].c
        },
        gottitjob: {
            male: sex.st[10].ent[0].c,
            female: sex.st[10].ent[1].c,
            nb: sex.st[10].ent[2].c,
            total: sex.st[10].ent[0].c + sex.st[10].ent[1].c + sex.st[10].ent[2].c
        },
        gavehandjob: {
            male: sex.st[11].ent[0].c,
            female: sex.st[11].ent[1].c,
            nb: sex.st[11].ent[2].c,
            total: sex.st[11].ent[0].c + sex.st[11].ent[1].c + sex.st[11].ent[2].c
        },
        gothandjob: {
            male: sex.st[12].ent[0].c,
            female: sex.st[12].ent[1].c,
            nb: sex.st[12].ent[2].c,
            total: sex.st[12].ent[0].c + sex.st[12].ent[1].c + sex.st[12].ent[2].c
        },
        gotfisted: {
            male: sex.st[13].ent[0].c,
            female: sex.st[13].ent[1].c,
            nb: sex.st[13].ent[2].c,
            total: sex.st[13].ent[0].c + sex.st[13].ent[1].c + sex.st[13].ent[2].c
        },
        gotfootjob: {
            male: sex.st[14].ent[0].c,
            female: sex.st[14].ent[1].c,
            nb: sex.st[14].ent[2].c,
            total: sex.st[14].ent[0].c + sex.st[14].ent[1].c + sex.st[14].ent[2].c
        },
        gavefootjob: {
            male: sex.st[15].ent[0].c,
            female: sex.st[15].ent[1].c,
            nb: sex.st[15].ent[2].c,
            total: sex.st[15].ent[0].c + sex.st[15].ent[1].c + sex.st[15].ent[2].c
        },
        piss: {
            male: sex.st[16].ent[0].c,
            female: sex.st[16].ent[1].c,
            nb: sex.st[16].ent[2].c,
            total: sex.st[16].ent[0].c + sex.st[16].ent[1].c + sex.st[16].ent[2].c
        },
        drankpiss: {
            male: sex.st[17].ent[0].c,
            female: sex.st[17].ent[1].c,
            nb: sex.st[17].ent[2].c,
            total: sex.st[17].ent[0].c + sex.st[17].ent[1].c + sex.st[17].ent[2].c
        },
        analpiss: {
            male: sex.st[18].ent[0].c,
            female: sex.st[18].ent[1].c,
            nb: sex.st[18].ent[2].c,
            total: sex.st[18].ent[0].c + sex.st[18].ent[1].c + sex.st[18].ent[2].c
        },
        drankcum: {
            male: sex.st[19].ent[0].c,
            female: sex.st[19].ent[1].c,
            nb: sex.st[19].ent[2].c,
            total: sex.st[19].ent[0].c + sex.st[19].ent[1].c + sex.st[19].ent[2].c
        },
        creampie: {
            male: sex.st[20].ent[0].c,
            female: sex.st[20].ent[1].c,
            nb: sex.st[20].ent[2].c,
            total: sex.st[20].ent[0].c + sex.st[20].ent[1].c + sex.st[20].ent[2].c
        },
        mudpie: {
            male: sex.st[21].ent[0].c,
            female: sex.st[21].ent[1].c,
            nb: sex.st[21].ent[2].c,
            total: sex.st[21].ent[0].c + sex.st[21].ent[1].c + sex.st[21].ent[2].c
        },
        dog: {
            male: sex.st[22].ent[0].c,
            female: sex.st[22].ent[1].c,
            nb: sex.st[22].ent[2].c,
            total: sex.st[22].ent[0].c + sex.st[22].ent[1].c + sex.st[22].ent[2].c
        },
        horse: {
            male: sex.st[23].ent[0].c,
            female: sex.st[23].ent[1].c,
            nb: sex.st[23].ent[2].c,
            total: sex.st[23].ent[0].c + sex.st[23].ent[1].c + sex.st[23].ent[2].c
        },
        pig: {
            male: sex.st[24].ent[0].c,
            female: sex.st[24].ent[1].c,
            nb: sex.st[24].ent[2].c,
            total: sex.st[24].ent[0].c + sex.st[24].ent[1].c + sex.st[24].ent[2].c
        },
        vines: {
            male: sex.st[25].ent[0].c,
            female: sex.st[25].ent[1].c,
            nb: sex.st[25].ent[2].c,
            total: sex.st[25].ent[0].c + sex.st[25].ent[1].c + sex.st[25].ent[2].c
        },
        analvirgin: {
            male: sex.st[26].ent[0].c,
            female: sex.st[26].ent[1].c,
            nb: sex.st[26].ent[2].c,
            total: sex.st[26].ent[0].c + sex.st[26].ent[1].c + sex.st[26].ent[2].c
        },
        penisvirgin: {
            male: sex.st[27].ent[0].c,
            female: sex.st[27].ent[1].c,
            nb: sex.st[27].ent[2].c,
            total: sex.st[27].ent[0].c + sex.st[27].ent[1].c + sex.st[27].ent[2].c
        },
        pussyvirgin: {
            male: sex.st[28].ent[0].c,
            female: sex.st[28].ent[1].c,
            nb: sex.st[28].ent[2].c,
            total: sex.st[28].ent[0].c + sex.st[28].ent[1].c + sex.st[28].ent[2].c
        },
        oralvirgin: {
            male: sex.st[29].ent[0].c,
            female: sex.st[29].ent[1].c,
            nb: sex.st[29].ent[2].c,
            total: sex.st[29].ent[0].c + sex.st[29].ent[1].c + sex.st[29].ent[2].c
        },
    };
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



