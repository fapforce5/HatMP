var sissy = {};

sissy.virgin = [
    { id: 0, t: "dick", v: true },
    { id: 0, t: "pussy", v: true },
    { id: 0, t: "ass", v: true },
    { id: 0, t: "oral", v: true },
];

sissy.levels = [
    { id: 0, n: "xdress", d: "Cross Dressing", c: 0, l: 0, autoLevel: true, autoLevel: true },
    { id: 0, n: "sub", d: "Submissive", c: 0, l: 0, autoLevel: true },
    { id: 0, n: "humiliation", d: "Humiliation", c: 0, l: 0, autoLevel: true },
    { id: 0, n: "pi", d: "Private Investigator", c: 0, l: 0, autoLevel: true },
    { id: 0, n: "intel", d: "intelligence", c: 0, l: 0, autoLevel: true },
    { id: 0, n: "oral", d: "Cock Sucking", c: 0, l: 0, autoLevel: true },
    { id: 0, n: "anal", d: "Anal", c: 0, l: 0, autoLevel: true },
    { id: 0, n: "cum", d: "Cum", c: 0, l: 0, autoLevel: true },
    { id: 0, n: "piss", d: "Piss", c: 0, l: 0, autoLevel: true },
    { id: 0, n: "feet", d: "Feet", c: 0, l: 0, autoLevel: true },
    { id: 0, n: "beast", d: "Beast", c: 0, l: 0, autoLevel: true },

    { id: 0, n: "fitness", d: "Fitness", c: 0, l: 0, autoLevel: true },
    { id: 0, n: "body", d: "Upper Strength", c: 0, l: 0, autoLevel: true },
    { id: 0, n: "leg", d: "Lower Strength", c: 0, l: 0, autoLevel: true },
    { id: 0, n: "defense", d: "Pain Tolerance", c: 0, l: 0, autoLevel: true },
    { id: 0, n: "cheer", d: "Cheerleader", c: 0, l: 0, autoLevel: false },
    { id: 0, n: "stripper", d: "Stripping", c: 0, l: 0, autoLevel: false },
];

sissy.levelCreator = function (name, level) {
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
                case 9: return "Wear what ever, or nothing at all"
            }
            break;
        case "sub":
            switch (level) {
                case 0: return "Not submissive";
                case 1: return "Can kiss Missy's feet";
                case 2: return "Can x Missy"
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
                case 2: return "Can deepthroat dildos at home";
                case 3: return "Can suck a small cock";
                case 4: return "Can suck human cock";
                case 5: return "Can deepthroat cock";
                case 6: return "Can suck horse cock";
                case 7: return "Need to suck cock everyday!";
            }
            break;
        case "anal":
            switch (level) {
                case 0: return "My butt is for pooping";
                case 1: return "Can stick your finger in your butt";
                case 2: return "Can play with a tiny dildo";
                case 3: return "Can play with a small dildo";
                case 4: return "Can play with a medium dildo";
                case 5: return "Can play with a large dildo";
                case 6: return "Can take a normal dick in the ass";
                case 7: return "Can take a big dick in the ass";
                case 8: return "Can take a horse cock in the ass";
                case 9: return "Need anal everyday!";
            }
            break;
        case "cum":
            switch (level) {
                case 0: return "Ewwww";
                case 1: return "You can taste your own";
                case 2: return "You can cum in your own mouth";
                case 3: return "You can swallow";
                case 4: return "You can get creampied";
                case 5: return "cum gains 5 energy";
                case 6: return "cum gains 15 energy";
                case 7: return "cum gains 25 energy";
                case 8: return "You are addicted to cum";
            }
            break;
        case "pi":
            switch (level) {
                case 0: return "Can watch things (first case)";
                case 1: return "Pick pocket";
                case 2: return "unlock locked doors";
            }
            break;
        case "intel":
            switch (level) {
                case 0: return "better at pickpocket / unlock doors";
                case 1: return "better at pickpocket / unlock doors";
                case 2: return "better at pickpocket / unlock doors";
            }
            break;
    }

}

sissy.stats = [
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

    { id: 39, t: "xdress", n: "xdress", c: 0 },
];

sissy.statsUpdate = function (num) {
    sissy.stats[num].c++;
    g.popUpNotice("Your love of " + sissy.stats[num].n + " increased");
}

sissy.makeGraph = function () {

};

sissy.sex = [
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

sissy.cravings = function (crave) {
    var craveVal, txt, i, retTxt;
    var avoid = 25;
    var dislike = 50;
    var like = 75;
    var addict = 100;
    baseBG = "#333333";
    baseFG = "#ffb6c1";
    switch (crave) {
        case "xdress":
            //don't like xdress
            //wear panties
            //xdress at work or home
            //xdress in public
            //wear sexy clothes
            //not wear panties
            //wear slutty
            //go naked
            craveVal = 50;
            txt = {
                avoid: "Submissive bitch", dislike: "A little submissive",
                like: "a little dominate", addict: "Dominate"
            };
            break;
        case "subdom":
            var sub = sissy.stats[28].c;
            var dom = sissy.stats[27].c;
            var subdomdiff = dom - sub;
            craveVal = 50 - subdomdiff;
            txt = {
                avoid: "Submissive bitch", dislike: "A little submissive",
                like: "a little dominate", addict: "Dominate"
            };
            baseBG = "#ffb6c1";
            baseFG = "#ff3333";
            break;
        case "attraction":
            craveVal = 0;
            var male, female;
            male = female = 0;
            for (i = 0; i < sissy.sex.length; i++) {
                if (sissy.sex[i].gender === "m")
                    male += sissy.sex[i].c;
                else 
                    female += sissy.sex[i].c;
            } 
            var total = male + female;
            if (total < 20)
                craveVal = male * 3;
            else
                craveVal = male / total;
            txt = { avoid: "You Love Pussy", dislike: "You love pussy, and some dick", like: "You love Dick, and some pussy", addict: "Sissy Fag" };
            baseFG = "#ADD8E6";
            baseBG = "#ffb6c1";
            break;
        case "humiliation":
            craveVal = Math.round(
                sissy.stats[13].c + sissy.stats[14].c +
                sissy.stats[25].c + sissy.stats[26].c +
                (sissy.stats[15].c + sissy.stats[16].c * 2)
            );
            txt = { avoid: "Don't Humiliate Me", dislike: "A little humiliation is good", like: "Humiliation Sissy", addict: "Humiliate Me Mommy!" };
            break;
        case "oral":
            //gross
            //can suck toy
            //can request suck strapon
            //can request suck cock
            //love gain 10 energy
            //need gain 15 energy
            //addicted, lost 20 points if you don't get fucked
            craveVal = Math.round(
                sissy.sex[6].c + (sissy.sex[7].c * 5) + //receive oral
                (sissy.stats[0].c * .1) + (sissy.stats[2].c * .2) - //swallow / creampie
                (sissy.stats[1].c) +  //spit
                (sissy.stats[7].c * .5) //masturbate oral
            );
            txt = { avoid: "Oral: Yuck!", dislike: "Oral: Just a taste", like: "Oral: I need cock", addict: "Cock Sucking Whore" };
            break;
        case "anal":
            //gross
            //can use finger
            //can use toy
            //can request strapon
            //can request cock
            //love gain 10 energy
            //need gain 15 energy
            //addicted, lost 20 points if you don't get fucked
            craveVal = Math.round(
                sissy.sex[2].c + (sissy.sex[3].c * .5) + //receive anal
                (sissy.sex[14].c * .3) + (sissy.sex[15].c * .3) + //receive fist
                (sissy.stats[8].c * .1) + (sissy.stats[9].c * .2) + //masturbate
                (sissy.stats[11].c) + (sissy.stats[12].c * .5) //sissygasm
            );
            txt = { avoid: "Anal: Ouch!", dislike: "Anal: It hurts a little", like: "Anal: I love it in the ass", addict: "Anal cock whore" };
            break;
        case "cum":
            //gross
            //like
            //enjoy gain 5 energy
            //love gain 10 energy
            //need gain 15 energy
            //addicted, lost 20 points if you don't drink cum that day
            craveVal = Math.round(
                (sissy.stats[0].c) - (sissy.stats[1].c) + //masturbate
                (sissy.stats[2].c) + (sissy.stats[3].c * .5) //sissygasm
            );
            txt = { avoid: "Cum: Gross", dislike: "Cum: It's ok", like: "Cum: Yummy", addict: "Feed me CUM!" };
            baseFG = "#ffffff";
            break;
        case "piss":
            //gross
            //won't run away
            //enjoy gain 5 energy
            //enjoy gain 10 energy
            //love gain 15 energy
            //addicted, lost 20 points if you don't drink piss that day
            craveVal = Math.round(
               sissy.sex[30].c + sissy.sex[31].c + 
                ((sissy.sex[34].c + sissy.sex[35].c) * 2) +
                ((sissy.stats[29].c + sissy.stats[30].c) * .3)
            );
            txt = { avoid: "Piss: Gross", dislike: "Piss: Not in my mouth", like: "Piss: Yummy!", addict: "Dirty Piss Whore" };
            baseFG = "#FFEA00";
            break;
        case "enema":
            //gross
            //can give self enema
            //enjoy gain 10 energy
            //love gain 15 energy
            //love gain 20 energy
            craveVal = Math.round(
               sissy.stats[31].c * 2
            );
            txt = { avoid: "Enema: Uhh, no", dislike: "Enema: Just cleaning up", like: "Enema: Squeeky Clean", addict: "Bloated Enema Whore" };
            baseFG = "#ADD8E6";
            break;
        case "feet":
            //gross
            //won't say no
            //can request
            //love gain 5 energy
            //love gain 10 energy
            //love gain 20 energy
            craveVal = Math.round(
                sissy.sex[16].c + sissy.sex[17].c + sissy.sex[18].c + sissy.sex[19].c + 
                sissy.sex[20].c + sissy.sex[21].c 
            );
            txt = { avoid: "Feet: Weird", dislike: "Feet: I'll lick your toes", like: "Feet: Love them!", addict: "Feet: I can't cum without" };
            break;
        case "knotty":
            //gross
            //won't say no
            //can request
            //love gain 5 energy
            //love gain 10 energy
            //love gain 20 energy
            craveVal = Math.round(
                (sissy.sex[46].c * 2) + (sissy.stats[32].c * .1) +
                (sissy.stats[33].c * .5) + (sissy.stats[34].c)
            );
            txt = { avoid: "Beasts: Are nice. ", dislike: "Beasts: I like to play", like: "Beasts: So furry and warm", addict: "Beasts: Knot me!" };
            baseFG = "#ff3333";
            break;
    }
    if (craveVal < avoid)
        retTxt = txt.avoid;
    else if (craveVal < dislike)
        retTxt = txt.dislike;
    else if (craveVal < like)
        retTxt = txt.like;
    else
        retTxt = txt.addict;
    if (craveVal < 0)
        craveVal = 0;
    if (craveVal > 100)
        craveVal = 100;

    return { val: craveVal, txt: retTxt, avoid: craveVal < avoid, addict: craveVal > craveVal.like, baseFG: baseFG, baseBG: baseBG };
}
