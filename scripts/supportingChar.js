var sc = {};

//g.char MUST BE LOWERCASE!!!!!!!!!!
sc.char = [
    { name: "me", display: "Alex", image: "me.png", step: 0, secret: 0, c: 0, l: 0, show: true, setName: false, phone: -1, p: false,  q3: null },

    { name: "missy", display: "Missy", image: "missy.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: true, phone: 2, p: true, q3: null },
    { name: "tudor", display: "Mr. Tudor", image: "tudor.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: true, phone: 2, p: true, q3: null },
    { name: "p", display: "Ms. Pussywinks", image: "princess.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: true, q3: null },
    { name: "martha", display: "Mistress Martha", image: "martha.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: true, q3: null },
    { name: "black", display: "Ms. Black", image: "black.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: true, phone: -1, p: false, q3: null },
    { name: "cecilia", display: "Cecilia", image: "cecilia.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: true, phone: -1, p: false, q3: null },

    { name: "landlord", display: "Landlady", image: "mom.png", step: 0, secret: 0, c: 0, l: 0, show: true, setName: true, phone: 0, p: true, q3: false },
    { name: "el", display: "Co-Tenant", image: "lolaEva.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: true,  q3: null },
    { name: "lola", display: "Lola", image: "lola.png", step: 0, secret: 0, c: 0, l: 0, show: true, setName: true, phone: 0, p: true,  q3: null },
    { name: "tom", display: "Tom", image: "tom.png", step: 0, secret: 0, c: 0, l: 0, show: true, setName: true, phone: 0, p: true, q3: null },
    { name: "eva", display: "Eva", image: "eva.png", step: 0, secret: 0, c: 0, l: 0, show: true, setName: true, phone: 0, p: true, q3: false },
    { name: "bigguy", display: "Dick", image: "bigman.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: false, q3: null },
    { name: "raven", display: "Raven", image: "raven.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: true, phone: -1, p: false, q3: null },

    { name: "janice", display: "Janice", image: "janice.png", step: 0, secret: 0, c: 0, l: 0, show: true, setName: true, phone: -1, p: true, q3: null },
    { name: "dog", display: "Cooper the Mythical Demon", image: "dog.png", step: 0, secret: 0, c: 0, l: 0, show: true, setName: true, phone: -1, p: true, q3: null },

    { name: "zoey", display: "Zoey", image: "zoey.png", step: 0, secret: 0, c: 0, l: 0, show: true, setName: true, phone: 0, p: true, q3: null },
    { name: "stormy", display: "Stormy", image: "stormy.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: true, phone: -1, p: true,  q3: false },
    { name: "chloe", display: "Chloé", image: "chloe.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: true,  q3: false },

    { name: "tina", display: "Tina", image: "tina.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: true, phone: 12, p: true, q3: null },
    { name: "construction", display: "The Bossman", image: "bossman.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: true, phone: -1, p: false,  q3: null },
 
    { name: "brayden", display: "Brayden", image: "brayden.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: true, phone: -1, p: false, q3: null },

    { name: "govlady", display: "Ms. Pixie", image: "govlady.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: true, q3: false },
    { name: "chad", display: "Chad", image: "brad.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: false,  q3: false },
    { name: "g", display: "Gertrude", image: "gertrude.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: true, phone: -1, p: true,  q3: false },
    { name: "tiffany", display: "Tiffany", image: "tiffany.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: true, phone: -1, p: true,  q3: null },
    { name: "candy", display: "Candy", image: "candy.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: true, phone: -1, p: true,  q3: null },
    { name: "charlie", display: "Charlie", image: "charlie.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: false,  q3: false },
    { name: "cop", display: "Big Cop", image: "cop.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: false,  q3: false },
    { name: "cop2", display: "Idiot Cop", image: "cop2.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: false, q3: false },
    { name: "jada", display: "Jada", image: "jada.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: true, phone: -1, p: true,  q3: null },
    { name: "red", display: "Red", image: "red.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: true,  q3: null },
    { name: "spanky", display: "Spanky", image: "spanky.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: false,  q3: false },
    { name: "keaton", display: "Keaton", image: "keaton.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: false,  q3: false },
    { name: "daddy", display: "Daddy", image: "daddy.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: false, q3: false },
    { name: "envy", display: "Envy", image: "envy.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: true, phone: -1, p: true, q3: null },
    { name: "rachel", display: "Rachel", image: "rachel.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: true, phone: -1, p: true,  q3: false },
    { name: "kinsey", display: "Kinsey", image: "kinsey.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: true,  q3: null },
    { name: "horse", display: "Jimmy Dingler", image: "horse.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: true, phone: -1, p: false,  q3: null },
    { name: "dale", display: "Dale", image: "dale.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: true, phone: -1, p: false, q3: null },

    { name: "cult", display: "Cult", image: "cult.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: false,  q3: null },
    { name: "priapus", display: "Priapus", image: "Priapus.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: false,  q3: null },
    { name: "daria", display: "Morgan", image: "daria.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: true, phone: -1, p: false,  q3: null },
    { name: "bodhi", display: "Bodhi", image: "bodhi.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: false, q3: null },
    { name: "jen", display: "Jen", image: "jen.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: true, q3: null },
    { name: "ubel", display: "Ubel", image: "ubel.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: false,  q3: null },

    { name: "ppgirl", display: "Pee Pee Girl", image: "pp.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: false, q3: null },

    { name: "river", display: "River", image: "river.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: false,  q3: false },
    { name: "jeffery", display: "Jeffery", image: "jeffery.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: false,  q3: false },
    { name: "holly", display: "Holly", image: "holly.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: false,  q3: null },
    { name: "molly", display: "Molly", image: "molly.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: false,  q3: false },
    { name: "dolly", display: "Dolly", image: "dolly.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: false,  q3: null },
    { name: "bimbo", display: "Bimbo", image: "bimbo.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: true, phone: -1, p: true,  q3: null },
    { name: "treyvon", display: "Treyvon", image: "treyvon.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: false,  q3: false },
    { name: "jimmy", display: "Jimmy", image: "jimmy.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: false,  q3: null },
    { name: "kei", display: "Kei", image: "kei.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: false,  q3: null },
    { name: "ralph", display: "Ralph", image: "ralph.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: false,  q3: null },
    { name: "ralphsmom", display: "Ralph's Mom", image: "ralphsmom.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: false, q3: null },

    { name: "jones", display: "Mr. Jones", image: "jones.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: false,  q3: false },

    { name: "wyatt", display: "Agent Wyatt", image: "wyatt.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: false,  q3: null },
    { name: "doc", display: "Dr. Strangelove", image: "doctor.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: false,  q3: null },
    { name: "librarian", display: "The Librarian", image: "librarian.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: true,  q3: null },
    { name: "whore", display: "Dirty Whore", image: "whore.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: false, q3: null },

    { name: "cindy", display: "Cindy", image: "cindy.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: true,  q3: null },
    { name: "tim", display: "Tim", image: "tim.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: false,  q3: null },

    { name: "dollmaker", display: "Doll maker", image: "dollmaker.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: false, q3: null },

    { name: "poppy", display: "Poppy", image: "poppy.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: false,  q3: null },
    { name: "orchid", display: "Orchid", image: "orchid.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: false,  q3: null },
    { name: "juniper", display: "Juniper", image: "juniper.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: false,  q3: false },

    { name: "clownqueen", display: "Clown", image: "clownQueen.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: false,  q3: null },
    { name: "futa1", display: "Fink", image: "futaYellow.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: false,  q3: null },
    { name: "futa2", display: "Frown", image: "futaRed.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: false,  q3: null },
    //{ name: "slime", display: "Slime Girl", image: "slime.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: false,  q3: null },

    { name: "stacy", display: "Stacy", image: "stacy.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: false, q3: null },
    { name: "courtney", display: "Courtney", image: "courtney.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: false, q3: null },
    { name: "chuck", display: "Chuck", image: "chuck.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: false, q3: null },
    { name: "utah", display: "Utah", image: "utah.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: false, q3: null },
    { name: "football", display: "Player", image: "football.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: false, q3: null },

    { name: "queen", display: "Forest Queen", image: "queen.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: false,  q3: null },
    { name: "a", display: "Aethelreda", image: "aethelreda.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: false, q3: null },
    { name: "vag", display: "Slutty Slave", image: "cockgobbler.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: false, q3: null },
    { name: "cock", display: "Cock Gobbler", image: "cockgobbler.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: false, q3: null },
    { name: "sammi", display: "Sammi Olifant", image: "sammi.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: false, q3: null },
    { name: "aurora", display: "Aurora Kirei", image: "sammi.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: false, q3: null },
    //add her to sissy cave

    { name: "priest", display: "Father O'Mally", image: "priest.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: true, phone: 0, p: true, q3: false },
    { name: "nun", display: "Sister Jane", image: "nun.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: true, phone: 0, p: true, q3: false },

    { name: "philbert", display: "Philbert", image: "philbert.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: 0, p: true, q3: false },
    { name: "sporty", display: "Sporty", image: "sporty.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: 0, p: true, q3: false },

    { name: "photo", display: "Photographer", image: "photo.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: 0, p: true, q3: false },

    { name: "blade", display: "Blade", image: "blade.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: 0, p: true, q3: false },
    { name: "wolf", display: "Lobo", image: "wolf.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: 0, p: true, q3: false },

    { name: "tony", display: "Fat Tony", image: "tony.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: 0, p: true, q3: false },

    { name: "dr", display: "Dr. Degenerate", image: "dr.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: 0, p: true, q3: false },

    { name: "random", display: " ", image: "rand.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: false,  q3: null },
    { name: "thinking", display: "Thinking", image: "thinking.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: false,  q3: null },
];

sc.i = function (name) {
    for (var i = 0; i < sc.char.length; i++)
        if (sc.char[i].name === name)
            return i;
    console.log("char not found. Name: " + name);
    return -1;
};

sc.get = function (name) {
    return sc.char[sc.i(name)];
};

sc.n = function (name) {
    if (name.startsWith("!"))
        return sc.trivial(name).display;
    else if (name.startsWith("*"))
        return rape.char.displayName;
    return sc.get(name).display;
};

 //mStatus 0 = not started, 1 - 99 = inprogress, 100 = complete - success, 101 = complete - fail
sc.charMission = [
    {
        name: "lola", mission: [
            {
                missionName: "talk", mStatus: 1, title: "Get to know her better. ", desc: "You have to talk to girls, silly. ", task:
                    [
                        { id: 0, txt: "It's ok", show: true, mStatus: 0, roomId: 13 },
                        { id: 1, txt: "Back is sore! ", show: true, mStatus: 0, roomId: 13 },
                        { id: 2, txt: "Massages", show: true, mStatus: 0, roomId: 13 },
                    ]
            },
            {
                missionName: "massage", mStatus: 0, title: "Massage", desc: "Help her loosen up a bit. ", task:
                    [
                        { id: 0, txt: "Back Rub", show: true, mStatus: 0, roomId: 13 },
                        { id: 1, txt: "Shirt off back rub. ", show: true, mStatus: 0, roomId: 13 },
                        { id: 2, txt: "Massage her tight legs", show: true, mStatus: 0, roomId: 13 },
                        { id: 3, txt: "Massage them glutes", show: true, mStatus: 0, roomId: 13 },
                        { id: 4, txt: "Free choice", show: true, mStatus: 0, roomId: 13 },
                    ]
            },
            {
                missionName: "games", mStatus: 0, title: "Drinking Games", desc: "Play some drinking games with the girls. ", task:
                    [
                        { id: 0, txt: "Invited to get wine and play spin the bottle. ", show: true, mStatus: 0, roomId: 13 },
                        { id: 1, txt: "Invited to get wine and play Truth or Dare. ", show: true, mStatus: 0, roomId: 13 },
                        { id: 2, txt: "Played Truth or Dare. ", show: true, mStatus: 0, roomId: 13 },
                    ]
            },
            {
                missionName: "date", mStatus: 0, title: "Practice dates", desc: "Landlady suggests practice for the real thing.", task:
                    [
                        { id: 0, txt: "You should go on a practice date. ", show: true, mStatus: 0, roomId: 13 },
                        { id: 1, txt: "Give me a day to get ready. ", show: true, mStatus: 0, roomId: 13 },
                        { id: 2, txt: "Come by before dark for our first practice date. ", show: true, mStatus: 0, roomId: 13 },
                        { id: 3, txt: "Won a teddy bear ", show: false, mStatus: 0, roomId: 13 },
                        { id: 4, txt: "Meet her in her room. Go on dates. ", show: false, mStatus: 0, roomId: 13 },
                        { id: 5, txt: "Creampie is the best pie. ", show: false, mStatus: 0, roomId: 13 },
                        { id: 6, txt: "Threesome is best cum.", show: true, mStatus: 0, roomId: 13 },
                    ]
            },
            {
                missionName: "sissy", mStatus: 0, title: "Sissy", desc: "Secret's out", task:
                    [
                        { id: 0, txt: "The talk", show: true, mStatus: 0, roomId: 16 },
                        { id: 1, txt: "Ice cream and dignity", show: true, mStatus: 0, roomId: 13 },
                        { id: 2, txt: "Dress up", show: true, mStatus: 0, roomId: 13 },
                        { id: 3, txt: "No! Not him!", show: true, mStatus: 0, roomId: 13 },
                        { id: 4, txt: "Worse than we thought", show: true, mStatus: 0, roomId: 11 },
                        { id: 5, txt: "You have a week to find a nice boy", show: true, mStatus: 0, roomId: 0 },
                        { id: 6, txt: "Fuck you, I won't do what you tell me", show: true, mStatus: 0, roomId: 0 },
                        { id: 7, txt: "Unexpected visitor", show: true, mStatus: 0, roomId: 13 },
                        { id: 8, txt: "Not made yet - probably end up fucking all three to compare assholes", show: true, mStatus: 0, roomId: 0 },
                    ]
            },
            {
                missionName: "tom", mStatus: 0, title: "Tom", desc: "True love in another's arms", task:
                    [
                        { id: 0, txt: "Set up on date with Tom", show: true, mStatus: 0, roomId: 16 },
                        { id: 1, txt: "He's the best", show: true, mStatus: 0, roomId: 16 },
                        { id: 2, txt: "Bla bla bla", show: true, mStatus: 0, roomId: 16 },
                        { id: 3, txt: "Not made yet - but he's really the best", show: true, mStatus: 0, roomId: 16 },
                    ]
            },
            {
                missionName: "random", mStatus: 0, title: "Misc", desc: "Random Events", task:
                    [
                        { id: 0, txt: "Steal her clothes [Need locker combo]", show: true, mStatus: 0, roomId: 902 },
                    ]
            },
        ],
    },
    {
        name: "eva", mission: [
            {
                missionName: "talk", mStatus: 1, title: "Get to know her better. ", desc: "You have to talk to girls, silly. ", task:
                    [
                        { id: 0, txt: "Small chat", show: true, mStatus: 0, roomId: 13 },
                        { id: 1, txt: "Feet?!", show: true, mStatus: 0, roomId: 13 },
                    ]
            },
            {
                missionName: "massage", mStatus: 0, title: "Help her out", desc: "She really likes massages", task:
                    [
                        { id: 0, txt: "Massage her feet.", show: true, mStatus: 0, roomId: 13 },
                        { id: 1, txt: "Suck her toes doggy. ", show: true, mStatus: 0, roomId: 13 },
                        { id: 2, txt: "Show me your dick. ", show: true, mStatus: 0, roomId: 13 },
                        { id: 3, txt: "I want to play with it. ", show: true, mStatus: 0, roomId: 13 },

                    ]
            },
            {
                missionName: "games", mStatus: 0, title: "Drinking Games", desc: "Play some drinking games with the girls. ", task:
                    [
                        { id: 0, txt: "Invited to get wine and play spin the bottle. ", show: true, mStatus: 0, roomId: 13 },
                        { id: 1, txt: "Invited to get wine and play Truth or Dare. ", show: true, mStatus: 0, roomId: 13 },
                        { id: 2, txt: "Played Truth or Dare. ", show: true, mStatus: 0, roomId: 13 },
                    ]
            },
            {
                missionName: "fuck", mStatus: 0, title: "Dirty sex", desc: "I guess we're fucking now ", task:
                    [
                        { id: 0, txt: "Supervised blow job. ", show: true, mStatus: 0, roomId: 13 },
                        { id: 1, txt: "Weak pullout game", show: true, mStatus: 0, roomId: 10 },
                        { id: 2, txt: "Threesome is best cum.", show: true, mStatus: 0, roomId: 13 },
                    ]
            },
            {
                missionName: "sissy", mStatus: 0, title: "Sissy", desc: "Secret's out", task:
                    [
                        { id: 0, txt: "The talk", show: true, mStatus: 0, roomId: 16 },
                        { id: 1, txt: "Ice cream and dignity", show: true, mStatus: 0, roomId: 13 },
                        { id: 2, txt: "Dress up", show: true, mStatus: 0, roomId: 13 },
                        { id: 3, txt: "Lick my feet. No chastity", show: true, mStatus: 0, roomId: 13 },
                        { id: 4, txt: "Slave doggy. ", show: true, mStatus: 0, roomId: 13 },
                        { id: 5, txt: "Wear a doggy collar and no chastity.", show: true, mStatus: 0, roomId: 900 },
                        { id: 6, txt: "Stand up for yourself or not?", show: true, mStatus: 0, roomId: 13 },
                        { id: 7, txt: "Meet her Friday night. ", show: true, mStatus: 0, roomId: 13 },
                        { id: 8, txt: "Friday night - house part [end]", show: true, mStatus: 0, roomId: 13 },
                    ]
            },
        ],
    },
    {
        name: "landlord", mission: [
            {
                missionName: "talk", mStatus: 1, title: "Living Room", desc: "Get to know her better. ", task:
                    [
                        { id: 0, txt: "You're not a fuckup", show: true, mStatus: 0, roomId: 26 },
                        { id: 1, txt: "Help at the sperm bank. ", show: true, mStatus: 0, roomId: 26 },
                        { id: 2, txt: "Come to the sperm bank Saturday morning. ", show: true, mStatus: 0, roomId: 26 },
                        { id: 3, txt: "Room key for more chores. ", show: true, mStatus: 0, roomId: 26 },
                        { id: 4, txt: "You're so sexy", show: true, mStatus: 0, roomId: 26 },
                        { id: 5, txt: "Practice Date", show: true, mStatus: 0, roomId: 26 },
                        { id: 6, txt: "Your past", show: true, mStatus: 0, roomId: 26 },
                        //{ id: 7, txt: "She's catching feeling for you.", show: true, mStatus: 0, roomId: 26 },
                        //{ id: 8, txt: "She loves your dick", show: true, mStatus: 0, roomId: 26 },
                        //{ id: 9, txt: "Fucking!", show: true, mStatus: 0, roomId: 26 },
                        //{ id: 10, txt: "Cum sponge", show: true, mStatus: 0, roomId: 26 },
                    ]
            },
            {
                missionName: "spermbank", mStatus: -1, title: "Sperm Bank [Side Quest]", desc: "On Saturday Morning visit the Sperm Bank to help out. ", task:
                    [
                        { id: 0, txt: "Donated sperm first time. ", show: true, mStatus: 0, roomId: 350 },
                        { id: 1, txt: "Advertised first time. ", show: true, mStatus: 0, roomId: 350 },
                        { id: 2, txt: "Assistant Nurse first day. ", show: false, mStatus: 0, roomId: 350 },
                        { id: 3, txt: "Assistant Nurse loop. ", show: false, mStatus: 0, roomId: 350 },
                    ]
            },
            {
                missionName: "man", mStatus: -1, title: "Now you're a man!", desc: "A manly manly man. Now you're a man's man!", task:
                    [
                        { id: 0, txt: "Talk about butts ", show: true, mStatus: 0, roomId: 14 },
                        { id: 1, txt: "Forbidden kiss.", show: true, mStatus: 0, roomId: 14 },
                        { id: 2, txt: "Wet Pussy Lips", show: true, mStatus: 0, roomId: 14 },
                        { id: 3, txt: "Testing a new toy. ", show: true, mStatus: 0, roomId: 14 },
                        { id: 4, txt: "Oral Pleasure. ", show: true, mStatus: 0, roomId: 14 },
                        { id: 5, txt: "Learn to eat pussy [Oral Level 1]", show: true, mStatus: 0, roomId: 14 },
                        { id: 6, txt: "Will they or won't they?", show: true, mStatus: 0, roomId: 14 },
                        { id: 7, txt: "Dominance", show: true, mStatus: 0, roomId: 14 },
                        { id: 8, txt: "Coitus interruptus", show: true, mStatus: 0, roomId: 14 },
                        { id: 9, txt: "You've turned her into a cum sponge", show: true, mStatus: 0, roomId: 14 },
                    ]
            },
            {
                missionName: "misc", mStatus: -1, title: "Random", desc: "Random Event Tracker", task:
                    [
                        { id: 0, txt: "Jacked Off first time", show: true, mStatus: 0, roomId: 10 },
                        { id: 1, txt: "Threesome! [After first time]", show: true, mStatus: 0, roomId: 26 },
                        { id: 2, txt: "Help with your sissy hole", show: true, mStatus: 0, roomId: 14 },
                        { id: 3, txt: "River Whore event", show: true, mStatus: 0, roomId: 14 },
                    ]
            },
            {
                missionName: "sissy", mStatus: -1, title: "Naughty girl", desc: "You're her sissy now.", task:
                    [
                        { id: 0, txt: "Have the talk", show: true, mStatus: 0, roomId: 14 },
                        { id: 1, txt: "When you're ready wear a polka dot dress", show: true, mStatus: 0, roomId: 26 },
                    ]
            },
        ]
    },
    {
        name: "bigguy", mission: [
            {
                missionName: "straight", mStatus: 1, title: "Laius", desc: "Stop pestering me you little shit. ", task:
                    [
                        { id: 0, txt: "Meet for the first time. ", show: true, mStatus: 0, roomId: 26 },
                        { id: 1, txt: "This little finger goes wee wee wee. ", show: true, mStatus: 0, roomId: 26 },
                        { id: 2, txt: "My milkshake brings all the boys to the yard. ", show: true, mStatus: 0, roomId: 26 },
                        { id: 3, txt: "My milkshake brings all the boys to the yard. ", show: true, mStatus: 0, roomId: 26 },

                    ]
            },
            {
                missionName: "rent", mStatus: 0, title: "Rent", desc: "You have to pay to stay. ", task:
                    [
                        { id: 0, txt: "Explained", show: true, mStatus: 0, roomId: 7 },
                        { id: 1, txt: "First Day. ", show: true, mStatus: 0, roomId: 7 },
                        { id: 2, txt: "To tell or not to tell. ", show: true, mStatus: 0, roomId: 26 },
                        { id: 3, txt: "No rent, only ass", show: true, mStatus: 0, roomId: 14 },
                    ]
            },
            {
                missionName: "sissy", mStatus: 0, title: "Extra hole", desc: "Let's talk about sex baby. ", task:
                    [
                        { id: 0, txt: "Catch them having sex. ", show: true, mStatus: 0, roomId: 14 },
                        { id: 1, txt: "This little finger goes wee wee wee. ", show: true, mStatus: 0, roomId: 26 },
                        { id: 2, txt: "I drink your milk! ", show: true, mStatus: 0, roomId: 26 },
                        { id: 3, txt: "My man! ", show: true, mStatus: 0, roomId: 26 },
                        { id: 4, txt: "Clean up duty", show: true, mStatus: 0, roomId: 10 },
                        { id: 5, txt: "You're such my bitch. ", show: true, mStatus: 0, roomId: 26 },
                    ]
            },
            {
                missionName: "ex", mStatus: 0, title: "Ex [Not built yet]", desc: "Not allowed back!", task:
                    [
                        { id: 0, txt: "Never coming back!", show: true, mStatus: 0, roomId: 40 },
                    ]
            },
        ]
    },
    {
        name: "tom", mission: [
            {
                missionName: "chat", mStatus: 1, title: "Meet", desc: "Small talk", task:
                    [
                        { id: 0, txt: "Meet for the first time. ", show: true, mStatus: 0, roomId: 40 },
                        { id: 1, txt: "Perfect girl", show: true, mStatus: 0, roomId: 40 },

                    ]
            },
        ]
    },
    {
        name: "zoey", mission: [
            {
                missionName: "friends", mStatus: 1, title: "Friends", desc: "BFFs forever!", task:
                    [
                        { id: 0, txt: "I'm a can opener", show: true, mStatus: 0, roomId: 501 },
                        { id: 1, txt: "Back for a can of beat ass?", show: true, mStatus: 0, roomId: 501 },
                        { id: 2, txt: "Meet my friend. ", show: true, mStatus: 0, roomId: 501 },
                        { id: 3, txt: "Sleep over. ", show: true, mStatus: 0, roomId: 501 },
                        { id: 4, txt: "I have a feeling", show: true, mStatus: 0, roomId: 501 },
                        { id: 5, txt: "I need your help!", show: true, mStatus: 0, roomId: 501 },
                    ]
            },
            {
                missionName: "cheating", mStatus: -1, title: "Chloé", desc: "Find out if Chloé is cheating", task:
                    [
                        { id: 0, txt: "Spy on her.", show: true, mStatus: 0, roomId: 725 },
                        { id: 1, txt: "Catch her at the club?", show: true, mStatus: 0, roomId: 725 },
                        { id: 2, txt: "Catch her at the strip club?", show: false, mStatus: 0, roomId: 400 },
                        { id: 3, txt: "Glory hole?", show: true, mStatus: 0, roomId: 216 },
                    ]
            },
            {
                missionName: "sex", mStatus: -1, title: "Fuck me please", desc: "Will we be more than friends?", task:
                    [
                        { id: 0, txt: "New petite amie.", show: true, mStatus: 0, roomId: 525 },
                        { id: 1, txt: "Mystery friend at night. ", show: true, mStatus: 0, roomId: 502 },
                        { id: 2, txt: "Handcuffs and chastity. ", show: true, mStatus: 0, roomId: 525 },
                        { id: 3, txt: "Mon cœur souffre pour toi", show: true, mStatus: 0, roomId: 525 },
                        { id: 4, txt: "Sex at home, sex at work, sex everywhere", show: true, mStatus: 0, roomId: 502 },
                    ]
            },
            {
                missionName: "xfriends", mStatus: -1, title: "Ex-friends", desc: "You've lost her trust. ", task:
                    [
                        { id: 0, txt: "Always trust your friends. ", show: true, mStatus: 0, roomId: 501 },
                    ]
            },
        ]
    },
    {
        name: "chloe", mission: [
            {
                missionName: "random", mStatus: 1, title: "Random Events", desc: " ", task:
                    [
                        { id: 0, txt: "First meeting after caught cheeting", show: true, mStatus: 0, roomId: 600 },
                    ]
            },
        ]
    },
    {
        name: "stormy", mission: [
            {
                missionName: "property", mStatus: 0, title: "Property", desc: "You're my property", task:
                    [
                        { id: 0, txt: "Marked by the piss. ", show: true, mStatus: 0, roomId: 550 },
                        { id: 1, txt: "I'm not a submissive slut!", show: true, mStatus: 0, roomId: 408 },
                        { id: 2, txt: "I guess I am a submissive slut", show: true, mStatus: 0, roomId: 408 },

                    ]
            },
        ]
    },
    {
        name: "chad", mission: [
            {
                missionName: "membership", mStatus: 0, title: "Membership Dues", desc: "Get into the gym. ", task:
                    [
                        { id: 0, txt: "Meet for the first time. ", show: true, mStatus: 0, roomId: 550 },
                        { id: 1, txt: "Pay the $500", show: true, mStatus: 0, roomId: 550 },
                        { id: 2, txt: "Get topless picture. ", show: true, mStatus: 0, roomId: 550 },

                    ]
            },
        ]
    },
    {
        name: "g", mission: [
            {
                missionName: "workout", mStatus: 0, title: "Personal Trainer", desc: "Get into the gym. ", task:
                    [
                        { id: 0, txt: "Meet for the first time. ", show: true, mStatus: 0, roomId: 550 },
                        { id: 1, txt: "Raise your strength bitch!", show: true, mStatus: 0, roomId: 550 },
                        { id: 2, txt: "Regular workouts. ", show: true, mStatus: 0, roomId: 550 },

                    ]
            },
            {
                missionName: "spar", mStatus: 0, title: "Spar", desc: "Learn how to fight. ", task:
                    [
                        { id: 0, txt: "Introduction", show: true, mStatus: 0, roomId: 556 },
                        { id: 1, txt: "Begginer Spar. Beat Maggie ", show: true, mStatus: 0, roomId: 556 },
                        { id: 2, txt: "Advanced Spar. ", show: true, mStatus: 0, roomId: 556 },

                    ]
            },
            {
                missionName: "secret", mStatus: 0, title: "Secret Room", desc: "Special workout. Need strength Level 4.", task:
                    [
                        { id: 0, txt: "Introduction", show: true, mStatus: 0, roomId: 555 },
                        { id: 1, txt: "Drippy Bicep Curls", show: true, mStatus: 0, roomId: 555 },
                        { id: 2, txt: "Hip Thrusters", show: true, mStatus: 0, roomId: 555 },
                        { id: 3, txt: "Yoga Bridge", show: true, mStatus: 0, roomId: 555 },
                    ]
            },
            {
                missionName: "mom", mStatus: 0, title: "Muscle Mommy", desc: "", task:
                    [
                        { id: 0, txt: "Cum in her tight muscle mommy pussy.", show: true, mStatus: 0, roomId: 555 },
                        { id: 1, txt: "Wait. ", show: true, mStatus: 0, roomId: 555 },
                    ]
            },
        ]
    },
    {
        name: "janice", mission: [
            {
                missionName: "date", mStatus: 1, title: "Getting to know you. ", desc: "Get to know her as a person. ", task:
                    [
                        { id: 0, txt: "Meet up. ", show: true, mStatus: 0, roomId: 315 },
                        { id: 1, txt: "Get to know her better. ", show: true, mStatus: 0, roomId: 315 },
                        { id: 2, txt: "Friday or Saturday before " + nav.convertTime(20, 0) + ". ", show: true, mStatus: 0, roomId: 315 },
                        { id: 3, txt: "A surprise, to be sure", show: true, mStatus: 0, roomId: 315 },
                        { id: 4, txt: "A creamy center", show: true, mStatus: 0, roomId: 315 },
                        { id: 5, txt: "Emergency help!", show: true, mStatus: 0, roomId: 315 },
                    ]
            },
            {
                missionName: "femdom", mStatus: 0, title: "Mine!", desc: "Help her find herself", task:
                    [
                        { id: 0, txt: "Back from vacation!", show: true, mStatus: 0, roomId: 316 },
                        { id: 1, txt: "Webcam to earn cash", show: true, mStatus: 0, roomId: 316 },
                        { id: 2, txt: "She knows. ", show: true, mStatus: 0, roomId: 316 },
                        { id: 3, txt: "Fist show was a bust. ", show: true, mStatus: 0, roomId: 316 },
                        { id: 4, txt: "Get a strap-on. ", show: true, mStatus: 0, roomId: 316 },
                        { id: 5, txt: "The talk. ", show: true, mStatus: 0, roomId: 316 },
                        { id: 6, txt: "Suprise", show: true, mStatus: 0, roomId: 316 },
                        { id: 7, txt: "A whole new world!", show: true, mStatus: 0, roomId: 316 },
                    ]
            },
            {
                missionName: "webcam", mStatus: 0, title: "Webcam", desc: "Fuck her pussy to make extra money", task:
                    [
                        { id: 0, txt: "First show", show: true, mStatus: 0, roomId: 316 },
                        { id: 1, txt: "Ate her pussy", show: true, mStatus: 0, roomId: 321 },
                        { id: 2, txt: "Came down her throat", show: true, mStatus: 0, roomId: 321 },
                        { id: 3, txt: "Fuck her for the first time", show: true, mStatus: 0, roomId: 321 },
                        { id: 4, txt: "Meet my femboy!", show: true, mStatus: 0, roomId: 321 },
                        { id: 5, txt: "Take my cute little strap-on", show: true, mStatus: 0, roomId: 321 },
                        { id: 6, txt: "Reintroduce myself", show: true, mStatus: 0, roomId: 321 },
                        { id: 7, txt: "You just keep cuming back fo rmore", show: true, mStatus: 0, roomId: 321 },
                    ]
            },
            {
                missionName: "datr", mStatus: 0, title: "Datr", desc: "Dating App", task:
                    [
                        { id: 0, txt: "Mike first time", show: true, mStatus: 0, roomId: 315 },
                        { id: 1, txt: "Mike again", show: true, mStatus: 0, roomId: 315 },
                        { id: 2, txt: "Jarome first time", show: true, mStatus: 0, roomId: 315 },
                        { id: 3, txt: "Jarome again", show: true, mStatus: 0, roomId: 315 },
                        { id: 4, txt: "Chad first time", show: true, mStatus: 0, roomId: 315 },
                        { id: 5, txt: "Chad again", show: true, mStatus: 0, roomId: 315 },
                        { id: 6, txt: "Jabari first time", show: true, mStatus: 0, roomId: 315 },
                        { id: 7, txt: "Jabari again", show: true, mStatus: 0, roomId: 315 },
                    ]
            },
            {
                missionName: "dog-x", mStatus: 0, title: "Bad dog!", desc: "You're a very naughty girl!", task:
                    [
                        { id: 0, txt: "Dish ran away without the spoon", show: true, mStatus: 0, roomId: 315 },
                        { id: 1, txt: "Caught!", show: true, mStatus: 0, roomId: 315 },
                        { id: 2, txt: "You're her bitch", show: true, mStatus: 0, roomId: 315 },
                        { id: 3, txt: "[not made yet your dirty bitch]", show: true, mStatus: 0, roomId: 315 },
                    ]
            },
            {
                missionName: "breakup", mStatus: 0, title: "Break Up", desc: "You two just wearn't meant for each other. It's over", task: new Array()
            },
        ]
    },
    {
        name: "dog", mission: [
            {
                missionName: "vacation", mStatus: 0, title: "Doggy sit", desc: "Take care of him while I'm gone.", task:
                    [
                        { id: 0, txt: "Day 1 feed him", show: true, mStatus: 0, roomId: 316 },
                        { id: 1, txt: "Day 2 feed him", show: true, mStatus: 0, roomId: 316 },
                        { id: 2, txt: "Day 3 feed him", show: true, mStatus: 0, roomId: 316 },
                        { id: 3, txt: "Day 4 feed him", show: true, mStatus: 0, roomId: 316 },
                        { id: 4, txt: "Day 5 feed him", show: true, mStatus: 0, roomId: 316 },
                        { id: 5, txt: "Day 6 feed him", show: true, mStatus: 0, roomId: 316 },
                    ]
            },
        ]
    },
    {
        name: "envy", mission: [
            {
                missionName: "meet", mStatus: 0, title: "Get to know her", desc: "Getting to know the odd unshaven girl", task:
                    [
                        { id: 0, txt: "Introduce yourself. ", show: true, mStatus: 0, roomId: 300 },
                        { id: 1, txt: "Lost at a board game. ", show: true, mStatus: 0, roomId: 301 },
                        { id: 2, txt: "Bring Pizza! ", show: true, mStatus: 0, roomId: 301 },
                        { id: 3, txt: "Just friends. ", show: true, mStatus: 0, roomId: 301 },
                    ]
            },
            {
                missionName: "hypno", mStatus: 0, title: "Hypno", desc: "Turning a girl into a slut.", task:
                    [
                        { id: 0, txt: "Hypno 1: Touch myself", show: true, mStatus: 0, roomId: 301 },
                        { id: 1, txt: "Hypno 2: Makeup ", show: true, mStatus: 0, roomId: 301 },
                        { id: 2, txt: "Hypno 3: Dresses are pretty", show: true, mStatus: 0, roomId: 301 },
                        { id: 3, txt: "Hypno 4: Blonde have more fun", show: true, mStatus: 0, roomId: 301 },
                        { id: 4, txt: "Hypno 5: Dumb is sexy", show: true, mStatus: 0, roomId: 301 },
                        { id: 5, txt: "Hypno 6: Tits. Bigger is Better", show: true, mStatus: 0, roomId: 301 },
                        { id: 6, txt: "Break that Hymen and fill that belly.", show: true, mStatus: 0, roomId: 301 },
                        { id: 7, txt: "Hypno 7", show: true, mStatus: 0, roomId: 301 },
                        { id: 8, txt: "Double team! Leave your cage at home.", show: true, mStatus: 0, roomId: 301 },
                        { id: 9, txt: "Broken.", show: true, mStatus: 0, roomId: 301 },
                        { id: 10, txt: "Cum dump", show: true, mStatus: 0, roomId: 301 },
                    ]
            },
            {
                missionName: "gf", mStatus: 0, title: "Girlfriend", desc: "Emotional Connection. ", task:
                    [
                        { id: 0, txt: "Talk to Spanky to undo the hypno", show: true, mStatus: 0, roomId: 301 },
                        { id: 1, txt: "Go Away!", show: true, mStatus: 0, roomId: 301 },
                        { id: 2, txt: "Forgivness comes slowly.", show: true, mStatus: 0, roomId: 301 },
                        { id: 3, txt: "Get Help from Tiffany!", show: true, mStatus: 0, roomId: 650 },
                        { id: 4, txt: "Give her the gift of orgasms.", show: true, mStatus: 0, roomId: 301 },
                        { id: 5, txt: "See how her pussy is doing. ", show: true, mStatus: 0, roomId: 301 },
                        { id: 6, txt: "Go to her place before " + nav.convertTime(14, 0) + " tomorrow. ", show: true, mStatus: 0, roomId: 301 },
                        { id: 7, txt: "Successful test! [Not ready] ", show: true, mStatus: 0, roomId: 301 },
                    ]
            },
            {
                missionName: "breakup", mStatus: 0, title: "Failed me!", desc: "I hate you! ", task:
                    [
                        { id: 0, txt: "Didn't meet her before her test.", show: true, mStatus: 0, roomId: 301 },
                        { id: 1, txt: "Made her orgasm too much.", show: true, mStatus: 0, roomId: 904 },
                        { id: 2, txt: "Didn't give her enough orgasms.", show: true, mStatus: 0, roomId: 904 },
                    ]
            },
        ]
    },
    {
        name: "spanky", mission: [
            {
                missionName: "shop", mStatus: 0, title: "Spanky's Store", desc: "Buy some shit", task:
                    [
                        { id: 0, txt: "You're cool. I guess", show: true, mStatus: 0, roomId: 301 },
                        { id: 1, txt: "You can buy sissy bimbo pills!", show: true, mStatus: 0, roomId: 404 },
                    ]
            },
            {
                missionName: "hypno", mStatus: 0, title: "Hypno", desc: "Make her a slut", task:
                    [
                        { id: 0, txt: "Purchase Hypno Takes. ", show: true, mStatus: 0, roomId: 301 },
                        { id: 1, txt: "I love you man! 1/2 prices! ", show: true, mStatus: 0, roomId: 301 },
                        { id: 2, txt: "I hate you! Triple the prices! ", show: true, mStatus: 0, roomId: 301 },
                    ]
            },
        ]
    },
    {
        name: "tiffany", mission: [
            {
                missionName: "friend", mStatus: 0, title: "Friends!", desc: "Did we just become best friends?", task:
                    [
                        { id: 0, txt: "Shopping trip! ", show: true, mStatus: 0, roomId: 650 },
                        { id: 1, txt: "Came inside her in the change room. ", show: true, mStatus: 0, roomId: 301 },
                        { id: 2, txt: "Sprayed your cum on her back in the change room. ", show: true, mStatus: 0, roomId: 301 },
                        { id: 3, txt: "Home. ", show: true, mStatus: 0, roomId: 51 },
                        { id: 4, txt: "How to use your pussy", show: true, mStatus: 0, roomId: 54 },
                        { id: 5, txt: "Pussy Palace", show: true, mStatus: 0, roomId: 54 },
                        { id: 6, txt: "Cheerleader! ", show: true, mStatus: 0, roomId: 54 },
                    ]
            },
        ]
    },
    {
        name: "candy", mission: [
            {
                missionName: "cuck", mStatus: 0, title: "Girlfriends", desc: "Do what two girlfriends do", task:
                    [
                        { id: 0, txt: "Home", show: true, mStatus: 0, roomId: 51 },
                    ]
            },
            {
                missionName: "cheer", mStatus: 0, title: "Cheerleader!", desc: "Be a cheerleader! ", task:
                    [
                        { id: 0, txt: "Meet Saturday morning", show: true, mStatus: 0, roomId: 875 },
                    ]
            },
        ]
    },
    {
        name: "treyvon", mission: [
            {
                missionName: "doorman", mStatus: 0, title: "Doorman", desc: "A little molestation and a big dick", task:
                    [
                        { id: 0, txt: "You can enter the building as a girl.", show: true, mStatus: 0, roomId: 650 },
                    ]
            },
        ]
    },
    {
        name: "cop", mission: [
            {
                missionName: "bitch", mStatus: 0, title: "Park", desc: "Don't play in the park after dark.", task:
                    [
                        { id: 0, txt: "Warning", show: true, mStatus: 0, roomId: 450 },
                        { id: 1, txt: "Final Warning", show: true, mStatus: 0, roomId: 450 },
                        { id: 2, txt: "Face rape", show: true, mStatus: 0, roomId: 450 },
                        { id: 3, txt: "You know why you keep coming back.", show: true, mStatus: 0, roomId: 450 },
                    ]
            },
        ]
    },
    {
        name: "philbert", mission: [
            {
                missionName: "bully", mStatus: 0, title: "Bully", desc: "Don't play in the park after dark.", task:
                    [
                        { id: 0, txt: "Shows his bully side", show: false, mStatus: 0, roomId: 211 },
                        { id: 1, txt: "Blackmailed into sucking his cock", show: true, mStatus: 0, roomId: 211 },
                        { id: 2, txt: "Everyone knows", show: true, mStatus: 0, roomId: 211 },
                        { id: 3, txt: "Not made yet.", show: true, mStatus: 0, roomId: 211 },
                    ]
            },
        ]
    },
    {
        name: "sporty", mission: [
            {
                missionName: "corrupt", mStatus: 0, title: "Corrupt the sissy", desc: "Not made yet.", task:
                    [
                        { id: 0, txt: "In development (Not made)", show: false, mStatus: 0, roomId: 211 },
                        { id: 1, txt: "strip club", show: false, mStatus: 0, roomId: 211 },
                    ]
            },
        ]
    },
    {
        name: "cecilia", mission: [
            {
                missionName: "gloryhole", mStatus: 0, title: "Glory hole!", desc: "Park bathroom on weekends ", task:
                    [
                        { id: 0, txt: "Did we just become friends?", show: false, mStatus: 0, roomId: 211 },
                        { id: 1, txt: "2 sissies. 1 gloryhole", show: false, mStatus: 0, roomId: 211 },
                    ]
            },
        ]
    },
    {
        name: "bimbo", mission: [
            {
                missionName: "fuck", mStatus: 0, title: "Cum dumpster", desc: "How many ways can you cum in her?", task:
                    [
                        { id: 0, txt: "Blow job", show: false, mStatus: 0, roomId: 77 },
                        { id: 1, txt: "Pussy", show: false, mStatus: 0, roomId: 77 },
                        { id: 2, txt: "Anus", show: false, mStatus: 0, roomId: 77 },
                        { id: 3, txt: "Sleepy pussy", show: false, mStatus: 0, roomId: 76 },
                        { id: 4, txt: "Sleepy anal", show: false, mStatus: 0, roomId: 76 },
                    ]
            },
            {
                missionName: "preg", mStatus: 0, title: "Preggers!", desc: "Am I a mom?", task:
                    [
                        { id: 0, txt: "Gave her a sloppy cream pie", show: false, mStatus: 0, roomId: 77 },
                    ]
            },
        ]
    },
    {
        name: "raven", mission: [
            {
                missionName: "bitch", mStatus: 0, title: "Her Honor", desc: "Will you save her honor? ", task:
                    [
                        { id: 0, txt: "Meet", show: true, mStatus: 0, roomId: 350 },
                        { id: 1, txt: "Titty grabing perv", show: true, mStatus: 0, roomId: 350 },
                        { id: 2, txt: "Eat a bag of dicks", show: true, mStatus: 0, roomId: 350 },
                        { id: 3, txt: "Stop touching her!", show: true, mStatus: 0, roomId: 350 },
                    ]
            },
        ]
    },
    {
        name: "ppgirl", mission: [
            {
                missionName: "pp", mStatus: 0, title: "PP Girl", desc: "Pee pee?", task:
                    [
                        { id: 0, txt: "Caught her peeing!", show: true, mStatus: 0, roomId: 461 },
                        { id: 1, txt: "Interrupting pee", show: true, mStatus: 0, roomId: 461 },
                        { id: 2, txt: "Really! Again!", show: true, mStatus: 0, roomId: 461 },
                        { id: 3, txt: "You're her toilet", show: true, mStatus: 0, roomId: 461 },
                    ]
            },
        ]
    },
    {
        name: "rachel", mission: [
            {
                missionName: "horse", mStatus: 0, title: "Horse Brushing", desc: "Help out around the farm. ", task:
                    [
                        { id: 0, txt: "First meeting", show: true, mStatus: 0, roomId: 325 },
                    ]
            },
            {
                missionName: "milk", mStatus: 0, title: "Hucow", desc: "Become her milking cow ", task:
                    [
                        { id: 0, txt: "Inspection.", show: true, mStatus: 0, roomId: 325 },
                        { id: 1, txt: "Hucow.", show: true, mStatus: 0, roomId: 325 },
                    ]
            },
        ]
    },
    {
        name: "kinsey", mission: [
            {
                missionName: "milk", mStatus: 0, title: "Fellow Hucow", desc: "Gain her trust", task:
                    [
                        { id: 0, txt: "Moooo", show: true, mStatus: 0, roomId: 325 },
                        { id: 1, txt: "Fucking Moooo", show: true, mStatus: 0, roomId: 325 },
                        { id: 2, txt: "I'm not talking to Mooo either", show: true, mStatus: 0, roomId: 325 },
                        { id: 3, txt: "Get me an energy drink", show: true, mStatus: 0, roomId: 325 },
                        { id: 4, txt: "Thanks", show: true, mStatus: 0, roomId: 325 },
                        { id: 5, txt: "End of path for nwo.", show: true, mStatus: 0, roomId: 325 },
                    ]
            },
        ]
    },
    {
        name: "horse", mission: [
            {
                missionName: "sex", mStatus: 0, title: "Dirty boy", desc: "What are you doing?", task:
                    [
                        { id: 0, txt: "First handjob", show: true, mStatus: 0, roomId: 325 },
                        { id: 1, txt: "First blowjob", show: true, mStatus: 0, roomId: 325 },
                    ]
            },
        ]
    },
    {
        name: "black", mission: [
            {
                missionName: "punish", mStatus: 0, title: "Punishment", desc: "A proper punishment.", task:
                    [
                        { id: 0, txt: "First time.", show: true, mStatus: 0, roomId: 172 },
                        { id: 1, txt: "Repeat customer ", show: true, mStatus: 0, roomId: 172 },
                    ]
            },
            {
                missionName: "talent", mStatus: 0, title: "Talent show", desc: "Expose yourself to the people", task:
                    [
                        { id: 0, txt: "Explain", show: true, mStatus: 0, roomId: 172 },
                        { id: 1, txt: "Repeat customer ", show: true, mStatus: 0, roomId: 172 },
                    ]
            },
        ]
    },
    {
        name: "p", mission: [
            {
                missionName: "pink", mStatus: 0, title: "The Pink Room", desc: "A proper place for a sissy.", task:
                    [
                        { id: 0, txt: "Introducation", show: true, mStatus: 0, roomId: 213 },
                        { id: 1, txt: "First blowjob", show: true, mStatus: 0, roomId: 213 },
                        { id: 2, txt: "Waitress first time", show: true, mStatus: 0, roomId: 213 },
                        { id: 3, txt: "Gloryhole first time", show: true, mStatus: 0, roomId: 213 },
                        { id: 4, txt: "Your own room", show: true, mStatus: 0, roomId: 213 },
                    ]
            },
        ]
    },
    {
        name: "construction", mission: [
            {
                missionName: "sex", mStatus: 0, title: "Slut", desc: "I didn't know you're a slut!", task:
                    [
                        { id: 0, txt: "Caught at the Pink Room", show: true, mStatus: 0, roomId: 213 },
                    ]
            },
        ]
    },
    {
        name: "holly", mission: [
            {
                missionName: "bar", mStatus: 0, title: "Caravaggio", desc: "Meet them", task:
                    [
                        { id: 0, txt: "Met at the bar", show: true, mStatus: 0, roomId: 250 },
                    ]
            },
            {
                missionName: "case", mStatus: 0, title: "Gain her trust", desc: "Find out if she's been taking the money", task:
                    [
                        { id: 0, txt: "Chat at the diner", show: true, mStatus: 0, roomId: 250 },
                        { id: 1, txt: "Chat at the diner", show: true, mStatus: 0, roomId: 250 },
                        { id: 2, txt: "Chat at the diner", show: true, mStatus: 0, roomId: 250 },
                        { id: 3, txt: "Gift?", show: true, mStatus: 0, roomId: 250 },
                    ]
            },
            {
                missionName: "happy", mStatus: 0, title: "Friends", desc: "Bestest work friends!", task:
                    [
                        { id: 0, txt: "Didn't rat us out to Jeffery", show: true, mStatus: 0, roomId: 250 },
                    ]
            },
            {
                missionName: "mad", mStatus: 0, title: "Enemies", desc: "I hate you!", task:
                    [
                        { id: 0, txt: "Ratted us out to Jeffery", show: true, mStatus: 0, roomId: 250 },
                    ]
            },
        ]
    },
    {
        name: "dolly", mission: [
            {
                missionName: "case", mStatus: 0, title: "Gain her trust", desc: "Find out if she's been taking the money", task:
                    [
                        { id: 0, txt: "Chat at the diner", show: true, mStatus: 0, roomId: 250 },
                        { id: 1, txt: "Chat at the diner", show: true, mStatus: 0, roomId: 250 },
                        { id: 2, txt: "Chat at the diner", show: true, mStatus: 0, roomId: 250 },
                        { id: 3, txt: "Gift?", show: true, mStatus: 0, roomId: 250 },
                    ]
            },
            {
                missionName: "happy", mStatus: 0, title: "Friends", desc: "Bestest work friends!", task:
                    [
                        { id: 0, txt: "Didn't rat us out to Jeffery", show: true, mStatus: 0, roomId: 250 },
                        { id: 1, txt: "Warm cup of Gooey goo", show: true, mStatus: 0, roomId: 250 },
                    ]
            },
            {
                missionName: "mad", mStatus: 0, title: "Enemies", desc: "I hate you!", task:
                    [
                        { id: 0, txt: "Ratted us out to Jeffery", show: true, mStatus: 0, roomId: 250 },
                    ]
            },
        ]
    },
    {
        name: "molly", mission: [
            {
                missionName: "case", mStatus: 0, title: "Gain her trust", desc: "Find out if she's been taking the money", task:
                    [
                        { id: 0, txt: "Chat at the diner", show: true, mStatus: 0, roomId: 250 },
                        { id: 1, txt: "Chat at the diner", show: true, mStatus: 0, roomId: 250 },
                        { id: 2, txt: "Chat at the diner", show: true, mStatus: 0, roomId: 250 },
                        { id: 3, txt: "Gift?", show: true, mStatus: 0, roomId: 250 },
                    ]
            },
            {
                missionName: "happy", mStatus: 0, title: "Friends", desc: "Bestest work friends!", task:
                    [
                        { id: 0, txt: "Didn't rat us out to Jeffery", show: true, mStatus: 0, roomId: 250 },
                    ]
            },
            {
                missionName: "mad", mStatus: 0, title: "Enemies", desc: "I hate you!", task:
                    [
                        { id: 0, txt: "Ratted us out to Jeffery", show: true, mStatus: 0, roomId: 250 },
                    ]
            },
        ]
    },
    {
        name: "jeffery", mission: [
            {
                missionName: "work", mStatus: 0, title: "You're hired!", desc: "Waitress @ the Naked Beaver", task:
                    [
                        { id: 0, txt: "Get to work!", show: true, mStatus: 0, roomId: 250 },
                    ]
            },
        ]
    },
    {
        name: "photo", mission: [
            {
                missionName: "photo", mStatus: 0, title: "Photos", desc: "Vacation images", task:
                    [
                        { id: 0, txt: "Doggy in park", show: true, mStatus: 0, roomId: 316 },
                        { id: 1, txt: "Pink room", show: true, mStatus: 0, roomId: 213 },
                    ]
            },
        ]
    },
    {
        name: "orchid", mission: [
            {
                missionName: "slut", mStatus: 0, title: "Party Bitches!", desc: "Slut, slut in da butt", task:
                    [
                        { id: 0, txt: "Meet", show: true, mStatus: 0, roomId: 526 },
                        { id: 1, txt: "Pink room", show: true, mStatus: 0, roomId: 213 },
                    ]
            },
        ]
    },
    {
        name: "river", mission: [
            {
                missionName: "bully", mStatus: 0, title: "Bully", desc: "You're going to regret life", task:
                    [
                        { id: 0, txt: "Welcome back wedgie", show: true, mStatus: 0, roomId: 100 },
                    ]
            },
        ]
    },
    {
        name: "tina", mission: [
            {
                missionName: "cat", mStatus: 0, title: "Kitty", desc: "I'm a cat girl", task:
                    [
                        { id: 0, txt: "Saved your ass", show: true, mStatus: 0, roomId: 100 },
                    ]
            },
        ]
    },
    {
        name: "cindy", mission: [
            {
                missionName: "fuck", mStatus: 0, title: "Man enough?", desc: "A swimmer's body is hot.", task:
                    [
                        { id: 0, txt: "Be manly enough. ", show: true, mStatus: 0, roomId: 901 },
                        { id: 1, txt: "Swim race! ", show: true, mStatus: 0, roomId: 901 },
                        { id: 2, txt: "Swoon her ", show: true, mStatus: 0, roomId: 726 },
                    ]
            },
        ]
    },
    {
        name: "tim", mission: [
            {
                missionName: "fuck", mStatus: 0, title: "Girl enough?", desc: "Love big tits!", task:
                    [
                        { id: 0, txt: "Tits big enough? ", show: true, mStatus: 0, roomId: 901 },
                        { id: 1, txt: "Tricked you into sucking your cock.", show: true, mStatus: 0, roomId: 726 },
                        { id: 2, txt: "The jig is up.", show: true, mStatus: 0, roomId: 726 },
                        { id: 3, txt: "I do love bussy.", show: true, mStatus: 0, roomId: 726 },
                    ]
            },
        ]
    },
    {
        name: "stacy", mission: [
            {
                missionName: "cheer", mStatus: 0, title: "Cheerleader", desc: "You're my bitch", task:
                    [
                        { id: 0, txt: "Need tits, ass, tiny pp, and smooth skin", show: true, mStatus: 0, roomId: 875 },
                        { id: 1, txt: "Practice cartwheels at home", show: true, mStatus: 0, roomId: 875 },
                        { id: 2, txt: "Keep practicing at home", show: true, mStatus: 0, roomId: 875 },
                        { id: 3, txt: "Uniform!!!", show: true, mStatus: 0, roomId: 875 },
                        { id: 4, txt: "Keep practicing at home", show: true, mStatus: 0, roomId: 875 },
                        { id: 5, txt: "Sunday Big game! [Cheer level 7]", show: true, mStatus: 0, roomId: 875 },
                        { id: 6, txt: "You're a cheerleader now  ", show: true, mStatus: 0, roomId: 875 },
                    ]
            },
        ]
    },
    {
        name: "chuck", mission: [
            {
                missionName: "fuck", mStatus: 0, title: "Fuck Chuck", desc: "Payback", task:
                    [
                        { id: 0, txt: "Find him. Probably at a college party", show: true, mStatus: 0, roomId: 586 },
                        { id: 1, txt: "Console him. ", show: true, mStatus: 0, roomId: 586 },
                        { id: 2, txt: "Revenge! ", show: true, mStatus: 0, roomId: 586 },
                    ]
            },
        ]
    },
    {
        name: "kei", mission: [
            {
                missionName: "cards", mStatus: 0, title: "Boy's Game", desc: "Play some poker", task:
                    [
                        { id: 0, txt: "First time", show: true, mStatus: 0, roomId: 125 },
                        { id: 1, txt: "New rule", show: true, mStatus: 0, roomId: 125 },
                        { id: 2, txt: "Blowjob bitch", show: true, mStatus: 0, roomId: 125 },
                        { id: 3, txt: "Me too", show: true, mStatus: 0, roomId: 125 },
                        { id: 4, txt: "The new class", show: true, mStatus: 0, roomId: 125 },
                    ]
            },
        ]
    },
    {
        name: "jimmy", mission: [
            {
                missionName: "cards", mStatus: 0, title: "Boy's Game", desc: "Play some poker", task:
                    [
                        { id: 0, txt: "Sucked his cock", show: true, mStatus: 0, roomId: 125 },
                        { id: 1, txt: "Not there, my no-no square", show: true, mStatus: 0, roomId: 125 },
                    ]
            },
        ]
    },
    {
        name: "ralph", mission: [
            {
                missionName: "cards", mStatus: 0, title: "Boy's Game", desc: "Play some poker", task:
                    [
                        { id: 0, txt: "Sucked his cock", show: true, mStatus: 0, roomId: 125 },
                        { id: 1, txt: "Coming out", show: true, mStatus: 0, roomId: 125 },
                        { id: 2, txt: "I guess I'm a cock sucker too", show: true, mStatus: 0, roomId: 125 },
                        { id: 3, txt: "Why are you naked?", show: true, mStatus: 0, roomId: 125 },
                    ]
            },
        ]
    },
    {
        name: "queen", mission: [
            {
                missionName: "meet", mStatus: 0, title: "Help", desc: "Hello weary traveler", task:
                    [
                        { id: 0, txt: "Met for the first time", show: true, mStatus: 0, roomId: 125 },
                    ]
            },
        ]
    },
    {
        name: "wolf", mission: [
            {
                missionName: "pack", mStatus: 0, title: "Pack", desc: "Member of the pack", task:
                    [
                        { id: 0, txt: "Met for the first time", show: true, mStatus: 0, roomId: 483 },
                        { id: 1, txt: "Gain their trust", show: true, mStatus: 0, roomId: 483 },
                        { id: 2, txt: "Welcome to the pack", show: true, mStatus: 0, roomId: 483 },
                    ]
            },
        ]
    },
    {
        name: "jones", mission: [
            {
                missionName: "invite", mStatus: 0, title: "Sevice", desc: "Be my submissive slut. ", task:
                    [
                        { id: 0, txt: "Submissive piss whore", show: true, mStatus: 0, roomId: 170 },
                        { id: 1, txt: "Visit me at my mansion", show: true, mStatus: 0, roomId: 150 },
                    ]
            },
            {
                missionName: "fail", mStatus: 0, title: "Failure", desc: "Failed me one, never again.", task:
                    [
                        { id: 0, txt: "Told Mr. Jones no", show: true, mStatus: 0, roomId: 150 },
                    ]
            },
        ]
    },
    {
        name: "dr", mission: [
            {
                missionName: "meet", mStatus: 0, title: "Monologuing", desc: "The greatest doctor ever!", task:
                    [
                        { id: 0, txt: "Caught in my trap!", show: true, mStatus: 0, roomId: 450 },
                        { id: 1, txt: "Why not?", show: true, mStatus: 0, roomId: 150 },
                    ]
            },
        ]
    },
    {
        name: "cult", mission: [
            {
                missionName: "cabin", mStatus: 0, title: "Cabin", desc: "Highway to hell", task:
                    [
                        { id: 0, txt: "A new fuck toy?", show: true, mStatus: 0, roomId: 450 },
                        { id: 1, txt: "You just can't get enough", show: true, mStatus: 0, roomId: 150 },
                    ]
            },
        ]
    },
    {
        name: "wyatt", mission: [
            {
                missionName: "forest", mStatus: 0, title: "My hero!", desc: "Stay safe", task:
                    [
                        { id: 0, txt: "Saved from the cult", show: true, mStatus: 0, roomId: 450 },
                    ]
            },
        ]
    },
    {
        name: "tony", mission: [
            {
                missionName: "strip", mStatus: 0, title: "Stripper", desc: "Working for the fat man", task:
                    [
                        { id: 0, txt: "Want a job? ", show: true, mStatus: 0, roomId: 600 },
                        { id: 1, txt: "First day ", show: true, mStatus: 0, roomId: 600 },
                        { id: 2, txt: "StripWithChris ", show: false, mStatus: 0, roomId: 600 },
                    ]
            },
        ]
    },
    {
        name: "brayden", mission: [
            {
                missionName: "date", mStatus: 0, title: "Date", desc: "Romance is in the air", task:
                    [
                        { id: 0, txt: "Got his phone number. ", show: true, mStatus: 0, roomId: 575 },
                        { id: 1, txt: "Call him after the Final", show: true, mStatus: 0, roomId: 210 },
                    ]
            },
        ]
    },
    {
        name: "priest", mission: [
            {
                missionName: "confession", mStatus: 0, title: "confession", desc: "Free yourself of sin", task:
                    [
                        { id: 0, txt: "First day", show: true, mStatus: 0, roomId: 775 },
                        { id: 1, txt: "Masterbate", show: true, mStatus: 0, roomId: 775 },
                        { id: 2, txt: "Peeked", show: true, mStatus: 0, roomId: 775 },
                        { id: 3, txt: "New Job", show: true, mStatus: 0, roomId: 775 },
                        { id: 4, txt: "Inserted my finger in my butthole", show: true, mStatus: 0, roomId: 775 },
                        { id: 5, txt: "Put a dildo in me bum", show: true, mStatus: 0, roomId: 775 },
                        { id: 6, txt: "Sucked a dildo", show: true, mStatus: 0, roomId: 775 },
                        { id: 7, txt: "Had sex. With a girl", show: true, mStatus: 0, roomId: 775 },
                        { id: 8, txt: "Started Sissy School", show: true, mStatus: 0, roomId: 775 },
                        { id: 9, txt: "Licked a vagina", show: true, mStatus: 0, roomId: 775 },
                        { id: 10, txt: "Sucked a penis", show: true, mStatus: 0, roomId: 775 },
                        { id: 11, txt: "Had a penis in my butt", show: true, mStatus: 0, roomId: 775 },
                        { id: 12, txt: "Lay with one of God's creatures", show: true, mStatus: 0, roomId: 775 },
                        { id: 13, txt: "Corrupted Sister Mary", show: true, mStatus: 0, roomId: 775 },
                    ]
            },
            {
                missionName: "dirty", mStatus: 0, title: "Web of lies", desc: "Get trapped in the web of lies", task:
                    [
                        { id: 0, txt: "Dirty girl", show: true, mStatus: 0, roomId: 775 },
                        { id: 1, txt: "Next release", show: true, mStatus: 0, roomId: 775 },
                    ]
            },
        ]
    },
    {
        name: "nun", mission: [
            {
                missionName: "sin", mStatus: 0, title: "Penance", desc: "I can't help myself", task:
                    [
                        { id: 0, txt: "Grab tits", show: true, mStatus: 0, roomId: 775 },
                        { id: 1, txt: "Took virginity", show: true, mStatus: 0, roomId: 775 },
                        { id: 2, txt: "Cycle of sin", show: true, mStatus: 0, roomId: 775 },
                    ]
            },
        ]
    },
];

sc.el = function () {
    return g.makeSingular(sc.n("el"));
};

sc.mStatus = function (mStatus) {
    if (mStatus < 1)
        return "Not Started";
    else if (mStatus === 100)
        return "Completed";
    else if (mStatus === 101)
        return "Failed";
    return "In Progress";

}

sc.setcharname = function (name, newName) {
    sc.char[sc.i(name)].display = newName;
};

sc.show = function(name){
    sc.char[sc.i(name)].show = true;
};

//Levels ----------------------------------------------------------------------

sc.levelName = function (charIndex) {
    let level = sc.char[charIndex].l;
    switch (sc.char[charIndex].name) {
        //case "landlord":
        //    if (secret < 100)
        //        tempLevel = [
        //            { step: 0, txt: "Get a job loser. ", m: [16] },
        //            { step: 1, txt: "She's starting to warm up to you. ", m: [16] },
        //            { step: 2, txt: "She's liking you. ", m: [16] },
        //            { step: 3, txt: "A little crush perhaps? ", m: [16] },
        //            { step: 4, txt: "* Go in for the kiss!", m: [16] },
        //            { step: 5, txt: "[M] Talk about her boyfried.", m: [16] },
        //            { step: 6, txt: "[M] Talk to her on the couch during the day or early evening. Eat that ass!", m: [16] },
        //            { step: 7, txt: "[M] Talk to her on the couch during the day or early evening. Lesson learned.", m: [16] },
        //            { step: 8, txt: "[M] On the couch - Pee pee slap.", img: "", m: [16] },
        //            { step: 9, txt: "[M] Visit her in her room between 8PM and 10PM. It only happens after you've been kicked out due to playing truth or dare with the girls. ", m: [16] },
        //            { step: 10, txt: "[M] Visit her in her room between 8PM and 10PM. ", m: [16] },
        //            { step: 11, txt: "[M] Progress Lola and Evas story line. Then talk to her in her room between 8PM to 10PM.", m: [16] },
        //            { step: 12, txt: "[M] End of masculine route. Find the bonus content.", img: "evaLolaBlow", m: [16] },
        //        ];
        //    else
        //        tempLevel = [
        //            { step: 0, txt: "[F] Sissy! Get caught at home crossdressing. Purchase a polka dot dress at he mall for Sunday outing.", m: [16, 400] },
        //            { step: 1, txt: "[F] Talk to her in the living room for your surprise guest.", m: [16] },
        //            { step: 2, txt: "[F] No new content", m: [16] },
        //        ];
        //    break;
        //case "bigguy":
        //    tempLevel = [
        //        { step: 0, txt: "Get caught crossdressing at home. He comes to visit Friday thru Sunday at night. ", m: [16] },
        //        { step: 1, txt: "Keep pestering them", m: [16] },
        //        { step: 2, txt: "Keep pestering them", m: [16] },
        //        { step: 3, txt: "Keep pestering them - This time with cum reward!", m: [16] },
        //        { step: 4, txt: "Pester them. This time with more cum! ", m: [16] },
        //        { step: 5, txt: "Sleep at home - surprise wake up.", m: [16] },
        //        { step: 6, txt: "Should I, or shouldn't I tell on him ", m: [16] },
        //        { step: 7, txt: "Betrayed her for more surprises on Saturday 😉", m: [16] },
        //    ];
        //    break;
        //case "zoey":
        //    //tempLevel = [
        //    //    { step: 0, txt: "Go to her house and play some video games after noon. ", m: [500] },
        //    //    { step: 1, txt: "Visit her again at her house.", m: [500] },
        //    //    { step: 2, txt: "Visit her house and meet Chloé.", m: [500] },
        //    //    { step: 3, txt: "Watch her eat out Chloé.", m: [500] },
        //    //    { step: 4, txt: "Talk to Zoey about her problems with Chloé.", m: [500] },
        //    //    { step: 5, txt: "Catch Chloé  Cheating (Only if your support your best friend)", m: [500] },
        //    //    { step: 6, txt: "Sleep at Zoey's on five differnt nights.", m: [500] },
        //    //    { step: 10, txt: "Sleep once more to see her night visitor", m: [500] },
        //    //    {
        //    //        step: 11, txt: "Raise her love to max. You can help her clean up at the bar or play video games at her home. Once you're " +
        //    //            "there wear a chasity device and buy the handcuffs from the Toy Store and help her clean her bar.", m: [525]
        //    //    },
        //    //    { step: 12, txt: "Keep helping her clean until her love meter is full. Get toy and cuffs - Voyer", m: [525] },
        //    //    { step: 13, txt: "Eat her pussy after you finish cleaning up.", m: [500] },
        //    //    { step: 14, txt: "Relationship - no new content", m: [500] },

        //    //    { step: 300, txt: "No help, endless loop bad END", m: [500] },
        //    //    { step: 301, txt: "Caught cheating - Zoey bad End", m: [500] },
        //    //];
        //    break;
        //case "tiffany":
        //    break;
        //case "dog":
        //    tempLevel = [
        //        { step: 0, txt: "Meet", m: [316] },
        //        { step: 1, txt: "You can enter her house when your girlfriend is not home. ", m: [16] },
        //        { step: 2, txt: "Will let you pet him. ", m: [16] },
        //        { step: 3, txt: "Will play catch", m: [16] },
        //        { step: 4, txt: "Will try to knock you over you if you stand. ", m: [16] },
        //        { step: 5, txt: "More aggressive. ", m: [16] },
        //        { step: 6, txt: "Won't let you wear clothes in the house. ", m: [16] },
        //        { step: 7, txt: "More likely to make you his bitch ", m: [16] }, //More likely to make you his bitch
        //        { step: 8, txt: "You're his bitch", m: [16] }, //You're his bitch
        //        { step: 9, txt: "You're so his bitch", m: [16] },
        //    ];
        //    break;
        //case "envy":
        //    tempLevel = [
        //        { step: 0, txt: "Meet", m: [316] },
        //        { step: 1, txt: "You can enter her house when your girlfriend is not home. ", m: [16] },
        //        { step: 2, txt: "Will let you pet him. ", m: [16] },
        //        { step: 3, txt: "Will play catch", m: [16] },
        //        { step: 4, txt: "Will try to knock you over you if you stand. ", m: [16] },
        //        { step: 5, txt: "More aggressive. ", m: [16] },
        //        { step: 6, txt: "Won't let you wear clothes in the house. ", m: [16] },
        //        { step: 7, txt: "More likely to make you his bitch ", m: [16] }, //More likely to make you his bitch
        //        { step: 8, txt: "You're his bitch", m: [16] }, //You're his bitch
        //        { step: 9, txt: "You're so his bitch", m: [16] },
        //    ];
        //    break;
        case "holly":
        case "dolly":
        case "molly":
            switch (level) {
                case -1: return "Enemies";
                case 0: return "Gain trust";
                case 1: return "Keep going";
                case 2: return "Almsot there";
                case 3: return "Complete";
                default: return "Friends";
            }
        default: return "Level " + level;
    }
};

sc.getLevel = function (name) {
    for (var i = 0; i < sc.char.length; i++) {
        if (sc.char[i].name === name) {
            return sc.char[i].l;
        }
    }
    console.log("invalid character - " + name);
    return null;
};

sc.modLevel = function (name, amount, targetLevel = 10) {
    var actualAmount = 0;
    var i, j;
    sc.getch
    i = sc.i(name);
    if (amount > 0) {
        if (sc.char[i].l > 9) {
            g.popUpNotice("At maximum level for " + sc.char[i].display + ". ");
            return;
        }

        if (sc.char[i].l <= targetLevel)
            actualAmount = amount;
        else if (sc.char[i].l <= targetLevel + 1)
            actualAmount = Math.floor(amount / 3) + 1;
        else if (sc.char[i].l <= targetLevel + 2)
            actualAmount = 1; //fix this later
        

        var additionalLevels = Math.floor(actualAmount / 100);
        var addedLevels = 0;
        var remainderPoints = actualAmount % 100;
        sc.char[i].c += remainderPoints;

        if (additionalLevels > 0) {
            for (j = 0; j < additionalLevels; j++) { //i know. Shut up. this is easier
                if (sc.char[i].l < targetLevel) {
                    sc.char[i].l++;
                    addedLevels++;
                }
                else if (sc.char[i].l === targetLevel) {
                    sc.char[i].l++;
                    sc.char[i].c = 0;
                    addedLevels++;
                }
            }
        }

        if (sc.char[i].c >= 100) {
            remainderPoints = sc.char[i].c % 100;
            sc.char[i].c = 0;
            sc.char[i].l++;
            addedLevels++;
            if (sc.char[i].l <= targetLevel)
                sc.char[i].c += remainderPoints;
        }

        if (addedLevels > 0)
            g.popUpNotice("You gained " + addedLevels + " level(s) for: " + sc.char[i].display + "!");
        else if(actualAmount > 0)
            g.popUpNotice(sc.char[i].display + " points have increased by " + actualAmount + "! ");
    }
    else if (amount < 0) {
        sc.char[i].c -= amount;
        if (sc.char[i].c < 0)
            sc.char[i].c = 0;
        g.popUpNotice(sc.char[i].display + "'s points have decreased. ");
    }
    //sstat.makeGraph();
};

//Mission ----------------------------------------------------------------------

sc.startMission = function (name, missionName, mStatus = 1) {
    if (sc.getMission(name, missionName).notStarted)
        sc.setMission(name, missionName, mStatus);
};

sc.getMission = function (name, missionName) {
    for (var i = 0; i < sc.charMission.length; i++) {
        if (sc.charMission[i].name === name) {

            for (j = 0; j < sc.charMission[i].mission.length; j++) {
                if (sc.charMission[i].mission[j].missionName === missionName) {

                    return {
                        mStatus: sc.charMission[i].mission[j].mStatus,
                        notStarted: sc.charMission[i].mission[j].mStatus < 1,
                        inProgress: sc.charMission[i].mission[j].mStatus > 0 && sc.charMission[i].mission[j].mStatus < 100,
                        complete: sc.charMission[i].mission[j].mStatus > 99,
                        success: sc.charMission[i].mission[j].mStatus === 100,
                        fail: sc.charMission[i].mission[j].mStatus === 101,
                        startedOrComplete: sc.charMission[i].mission[j].mStatus > 0,
                        i: i,
                        j: j
                    };
                }
            }
        }
    }

    console.log("mission not found: " + name + " " + missionName);
    return null;
};

sc.getMissionTask = function (name, missionName, taskId) {
    var ml = sc.getMission(name, missionName);
    let i;
    for (i = 0; i < sc.charMission[ml.i].mission[ml.j].task.length; i++) {
        if (sc.charMission[ml.i].mission[ml.j].task[i].id === taskId) {
            var mstatus = sc.charMission[ml.i].mission[ml.j].task[i].mStatus;
            return {
                mStatus: mstatus,
                notStarted: mstatus < 1,
                inProgress: mstatus > 0 && mstatus < 100,
                complete: mstatus > 99,
                success: mstatus === 100,
                fail: mstatus === 101,
                i: i
            };
        }
    }
};

sc.getMissionTaskId = function (nameId, missionId, taskId) {
    for (var i = 0; i < sc.charMission[nameId].mission[missionId].task.length; i++) {
        if (sc.charMission[nameId].mission[missionId].task[i].id === taskId)
            return i;
    }
    return -1;
};

sc.getActiveMissions = function (name) {
    var retArray = new Array();
    for (var i = 0; i < sc.mission.length; i++) {
        if (sc.mission[i].name === name && sc.mission[i].mStatus > 0 && sc.mission[i].mStatus < 100) {
            retArray.push(sc.mission[i].missionName);
        }
    }
    return retArray;
};

sc.completeMissionTask = function (name, missionName, taskId, success = true) {
    sc.setMissionTask(name, missionName, taskId, success ? 100 : 101);
};

sc.completeAllUnstartedMissionAndTasks = function (name, missionName, success) {
    if (success === undefined)
        alert("undefined success");

    let ind = sc.getMission(name, missionName);
    if (sc.charMission[ind.i].mission[ind.j].mStatus < 100)
        sc.charMission[ind.i].mission[ind.j].mStatus = success ? 100 : 101;

    for (let i = 0; i < sc.charMission[ind.i].mission[ind.j].task.length; i++) {
        if (sc.charMission[ind.i].mission[ind.j].task[i].mStatus < 100) //incomplete
            sc.charMission[ind.i].mission[ind.j].task[i].mStatus = success ? 100 : 101;
    }
};

sc.completeMissionTaskAll = function (name, missionName, taskId, success = true) {
    let ind = sc.getMission(name, missionName);
    for (let i = 0; i < sc.charMission[ind.i].mission[ind.j].task.length; i++) {
        if (sc.charMission[ind.i].mission[ind.j].task[i].id <= taskId)
            sc.charMission[ind.i].mission[ind.j].task[i].mStatus = success ? 100 : 101;
    }
};

sc.rollbackMission = function (name, missionName) {
    let m = sc.getMission(name, missionName);
    let i;
    for (i = 0; i < sc.charMission[m.i].mission[m.j].task.length; i++) {
        sc.charMission[m.i].mission[m.j].task[i].mStatus = 0;
    }
    sc.charMission[m.i].mission[m.j].mStatus = 0;
};

sc.startMissionTask = function (name, missionName, taskId) {
    if (sc.getMissionTask(name, missionName, taskId).notStarted)
        sc.setMissionTask(name, missionName, taskId, 1);
};

sc.modMissionTask = function (name, missionName, taskId, modNum) {
    var ml = sc.getMission(name, missionName);

    for (var k = 0; k < sc.charMission[ml.i].mission[ml.j].task.length; k++) {
        if (sc.charMission[ml.i].mission[ml.j].task[k].id === taskId) {
            sc.charMission[ml.i].mission[ml.j].task[k].mStatus += modNum;
            return;
        }
    }
};

sc.completeMission = function (name, missionName, success = true) {
    if (!sc.getMission(name, missionName).complete)
        sc.setMission(name, missionName, success ? 100 : 101);
};

sc.taskGetStep = function (name, missionName) {
    var ml = sc.getMission(name, missionName);
    if (ml.notStarted)
        return -1;
    else if (ml.fail)
        return -2;
    for (var k = 0; k < sc.charMission[ml.i].mission[j].task.length; k++) {
        if (sc.charMission[ml.i].mission[j].task[k].mStatus < 100)
            return sc.charMission[ml.i].mission[j].task[k].id;
    }

    return sc.charMission[ml.i].mission[j].task.length;
};

sc.setMission = function (name, missionName, mStatus) {
    var ml = sc.getMission(name, missionName);
    sc.charMission[ml.i].mission[ml.j].mStatus = mStatus;
};

sc.setMissionTask = function (name, missionName, taskId, mStatus) {
    var ml = sc.getMission(name, missionName);

    for (var k = 0; k < sc.charMission[ml.i].mission[ml.j].task.length; k++) {
        if (sc.charMission[ml.i].mission[ml.j].task[k].id === taskId) {
            sc.charMission[ml.i].mission[ml.j].task[k].mStatus = mStatus;
            return;
        }
    }
}

sc.modSecret = function (name, amount) {
    let i = sc.i(name);
    
    //Don't modify, secret is already known
    if (sc.char[i].secret > 99)
        return;

    sc.char[i].secret += amount;
    if (sc.char[i].secret > 99) {
        sc.char[i].secret = 100;
        switch (name) {
            case "lola":
            case "eva":
            case "landlord":
                if (sc.getMission("lola", "sissy").notStarted) {
                    let x = sc.i("lola");
                    let y = sc.i("eva");
                    let z = sc.i("landlord");
                    sc.char[x].secret = 100;
                    sc.char[y].secret = 100;
                    sc.char[z].secret = 100;
                    sc.modSecret("bigguy", 100);

                    sc.startMission("lola", "sissy");
                    sc.startMission("eva", "sissy");
                    sc.startMission("landlord", "sissy");

                    sc.completeMission("lola", "massage", sc.getMissionTask("lola", "massage", 3).complete);
                    sc.completeMission("lola", "games", sc.getMissionTask("lola", "games", 2).complete);
                    sc.completeMission("lola", "date", sc.getMissionTask("lola", "date", 5).complete);
                    sc.completeMission("lola", "talk", sc.getMissionTask("lola", "talk", 2).complete);

                    
                    sc.completeMission("eva", "massage", sc.getMissionTask("eva", "massage", 3).complete);
                    sc.completeMission("eva", "games", sc.getMissionTask("eva", "games", 1).complete);
                    sc.completeMission("eva", "fuck", sc.getMissionTask("eva", "fuck", 1).complete);
                    sc.completeMission("eva", "talk", sc.getMissionTask("eva", "talk", 1).complete);

                    //sc.completeMission("landlord", "talk", sc.getMissionTask("landlord", "talk", 9).complete);
                    sc.completeMission("landlord", "man", sc.getMissionTask("landlord", "man", 8).complete);
                    sc.startMission("landlord", "spermbank");

                    if (sc.getMissionTask("landlord", "spermbank", 0).notStarted)
                        sc.completeMissionTask("landlord", "spermbank", 0, false);
                    if (sc.getMissionTask("landlord", "spermbank", 1).notStarted)
                        sc.completeMissionTask("landlord", "spermbank", 1, false);
                    g.popUpNotice(sc.char[x].display + ", " + sc.char[y].display + ", and " + sc.char[z].display +
                        " all are now aware of your secret lifestyle. Sissy!");
                }
                
                break;
            default:
                g.popUpNotice(sc.char[i].display + " is aware of your secret lifestyle. Sissy!");
                break;
        }
    }

    else {
        g.popUpNotice(sc.char[i].display + " is more aware of your secret lifestyle. ");
    }

};

sc.getSecret = function (name) {
    for (var i = 0; i < sc.char.length; i++) {
        if (sc.char[i].name === name) {
            return {
                secret: sc.char[i].secret,
                secretOut: sc.char[i].secret > 99
            };
        }
    }
    console.log("Secret NOT found: " + name);
    return {
        secret: -1,
        secretOut: false
    };
};

sc.getstep = function (name) {
    //alert("sc.getstep: " + name);
    console.log("error");
};

sc.setstep = function (name, step) {
    //alert(name + step);
    console.log("error");
};

sc.incstep = function (name, amount) {
    console.log("error");
};

sc.getEvent = function (name, step) {
    console.log("error");
};

sc.setEvent = function (name, step) {
    console.log("error");
};

sc.save = function () {
    var i, j, k;
    var retArra = {
        char: new Array(),
        //events: new Array(),
        charMission: new Array()
    };
    // { name: "me", display: "Me", image: "me.png", step: 0, show: true, setName: false },
    for (i = 0; i < sc.char.length; i++) {
        retArra.char.push({
            name: sc.char[i].name,
            c: sc.char[i].c,
            l: sc.char[i].l,
            display: sc.char[i].display,
            secret: sc.char[i].secret,
            show: sc.char[i].show
        });
    }

    for (i = 0; i < sc.charMission.length; i++) {
        var charMission = { name: sc.charMission[i].name, mission: new Array() };
        for (j = 0; j < sc.charMission[i].mission.length; j++) {
            charMission.mission.push({ missionName: sc.charMission[i].mission[j].missionName, mStatus: sc.charMission[i].mission[j].mStatus, task: new Array() });
            for (k = 0; k < sc.charMission[i].mission[j].task.length; k++) {
                charMission.mission[j].task.push({ id: sc.charMission[i].mission[j].task[k].id, mStatus: sc.charMission[i].mission[j].task[k].mStatus });
            }
        }
        retArra.charMission.push(charMission);
    }
    
    return retArra;
};


sc.load = function (ra) {
    var i, j;

    for (i = 0; i < ra.char.length; i++) {
        for (j = 0; j < sc.char.length; j++) {
            if (ra.char[i].name === sc.char[j].name) {
                sc.char[j].display = ra.char[i].display;
                sc.char[j].c = ra.char[i].c;
                sc.char[j].l = ra.char[i].l;
                if (typeof ra.char[i].secret !== "undefined")
                    sc.char[j].secret = ra.char[i].secret;
                else
                    sc.char[j].secret = 0;
                sc.char[j].show = ra.char[i].show;
                j = 100000;
            }
        }
    }

    for (i = 0; i < ra.charMission.length; i++) {

        for (j = 0; j < ra.charMission[i].mission.length; j++) {

            var ml = sc.getMission(ra.charMission[i].name, ra.charMission[i].mission[j].missionName);
            if (ml !== null) {
                sc.charMission[ml.i].mission[ml.j].mStatus = ra.charMission[i].mission[j].mStatus; //set overall mission status
                for (k = 0; k < ra.charMission[i].mission[j].task.length; k++) {

                    var mlk = sc.getMissionTaskId(ml.i, ml.j, ra.charMission[i].mission[j].task[k].id);
                    if (mlk > -1)
                        sc.charMission[ml.i].mission[ml.j].task[mlk].mStatus = ra.charMission[i].mission[j].task[k].mStatus;
                }
            }
        }
    }

    //fix bad early data
    if (sc.getMission("landlord", "spermbank").complete)
        sc.startMission("landlord", "spermbank");
    //fix v0.23 sissy
    if (sc.getMission("lola", "sissy").notStarted) {
        let x, y, z;
        x = sc.i("lola");
        y = sc.i("eva");
        z = sc.i("landlord");
        if (sc.char[x].secret > 95)
            sc.char[x].secret = 95;
        if (sc.char[y].secret > 95)
            sc.char[y].secret = 95;
        if (sc.char[z].secret > 95)
            sc.char[z].secret = 95;
    }

    //fix for v 0.25.3 for people that started it 
    if (sc.getMissionTask("lola", "sissy", 5).startedOrComplete && future.get("lolaboy") < 0) {
        sc.completeMissionTask("lola", "sissy", 5, false);
        sc.completeMission("lola", "tom", false); 
    }

    sc.show("me");
};

/*
var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
*/
sc.getTimeline = function (char) {
    var thisDay = g.dt.getDay();
    var thisTime = g.gethourdecimal();
    var timeline = new Array();
    switch (char) {
        case "landlord":
            timeline = [
            //sunday
                { d: [0], hstart: 0, hend: 7, roomId: 14, alt: null }, //bedroom
                { d: [0], hstart: 7, hend: 10, roomId: 775, alt: null }, //church
                { d: [0], hstart: 10, hend: 11, roomId: 25, alt: null }, //kitchen
                { d: [0], hstart: 11, hend: 18, roomId: 26, alt: null }, //living room
                { d: [0], hstart: 18, hend: 19, roomId: 25, alt: null }, //dining
                { d: [0], hstart: 19, hend: 24, roomId: 14, alt: null }, //bedroom
            //monday wednesday friday
                
                { d: [1, 3, 5], hstart: 0, hend: 7, roomId: 14, alt: null }, //bedroom
                { d: [1, 3, 5], hstart: 7, hend: 8, roomId: 12, alt: null }, //bathroom
                { d: [1, 3, 5], hstart: 8, hend: 9, roomId: 25, alt: null }, //dining
                { d: [1, 3, 5], hstart: 9, hend: 17, roomId: 350, alt: null }, //sperm store
                { d: [1, 3, 5], hstart: 17, hend: 18, roomId: 15, alt: null }, //kitchen
                { d: [1, 3, 5], hstart: 18, hend: 20, roomId: 26, alt: null }, //living room
                { d: [1, 3, 5], hstart: 20, hend: 24, roomId: 14, alt: null }, //bedroom
                //tuesday thursday
                { d: [2, 4], hstart: 0, hend: 7, roomId: 14, alt: null }, //bedroom
                { d: [2, 4], hstart: 7, hend: 9, roomId: 25, alt: null }, //dining
                { d: [2, 4], hstart: 9, hend: 17, roomId: 350, alt: null }, //sperm store
                { d: [2, 4], hstart: 17, hend: 18, roomId: 15, alt: null }, //kitchen
                { d: [2, 4], hstart: 18, hend: 20, roomId: 26, alt: null }, //living room
                { d: [2, 4], hstart: 20, hend: 24, roomId: 14, alt: null }, //bedroom
                //saturday
                { d: [6], hstart: 0, hend: 7, roomId: 14, alt: null }, //bathroom
                { d: [6], hstart: 7, hend: 8, roomId: 12, alt: null }, //bathroom
                { d: [6], hstart: 8, hend: 12, roomId: 350, alt: null }, //living room
                { d: [6], hstart: 12, hend: 17, roomId: 26, alt: null }, //living room
                { d: [6], hstart: 17, hend: 19, roomId: 25, alt: null }, //kitchen
                { d: [6], hstart: 19, hend: 24, roomId: 14, alt: null }, //bedroom
            ];
            break;
        case "bigguy":
            if (sc.getMission("bigguy", "ex").notStarted) {
                timeline = [
                    //Sunday
                    { d: [0], hstart: 0, hend: 7, roomId: 14, alt: null }, //bedroom
                    { d: [0], hstart: 7, hend: 10, roomId: null, alt: "In town" }, //church
                    { d: [0], hstart: 10, hend: 11, roomId: 25, alt: null }, //kitchen
                    { d: [0], hstart: 11, hend: 18, roomId: 26, alt: null }, //living room
                    { d: [0], hstart: 18, hend: 19, roomId: 25, alt: null }, //dining
                    { d: [0], hstart: 19, hend: 24, roomId: 14, alt: null }, //bedroom
                    //week
                    { d: [1, 2, 3, 4], hstart: 0, hend: 9, roomId: null, alt: "His home" }, //bathroom
                    { d: [1, 2, 3, 4], hstart: 9, hend: 18, roomId: null, alt: "Work" }, //bathroom
                    { d: [1, 2, 3, 4], hstart: 18, hend: 24, roomId: null, alt: "His home" }, //bathroom
                    //friday
                    { d: [5], hstart: 0, hend: 9, roomId: null, alt: "His home" }, //bathroom
                    { d: [5], hstart: 9, hend: 17, roomId: null, alt: "Work" }, //bathroom
                    { d: [5], hstart: 17, hend: 18, roomId: null, alt: "Train" }, //bathroom
                    { d: [5], hstart: 18, hend: 20, roomId: 26, alt: null }, //bathroom
                    { d: [5], hstart: 20, hend: 24, roomId: 14, alt: null }, //bathroom
                    //saturday
                    { d: [6], hstart: 0, hend: 7, roomId: 14, alt: null }, //bathroom
                    { d: [6], hstart: 7, hend: 12, roomId: null, alt: "In town" }, //bathroom
                    { d: [6], hstart: 12, hend: 17, roomId: 26, alt: null }, //living room
                    { d: [6], hstart: 17, hend: 19, roomId: 25, alt: null }, //kitchen
                    { d: [6], hstart: 19, hend: 24, roomId: 14, alt: null }, //bedroom
                ];
            }
            else {
                timeline = [
                    //week
                    { d: [1, 2, 3, 4], hstart: 0, hend: 9, roomId: null, alt: "His home" }, //bathroom
                    { d: [1, 2, 3, 4], hstart: 9, hend: 18, roomId: null, alt: "Work" }, //bathroom
                    { d: [1, 2, 3, 4], hstart: 18, hend: 24, roomId: null, alt: "His home" }, //bathroom
                    //friday
                    { d: [0, 6], hstart: 0, hend: 24, roomId: null, alt: "His home" }, //bathroom
                ];
            }
            break;
        case "lola":
        case "eva":
            
            timeline = [
            //sunday
                { d: [0], hstart: 0, hend: 7, roomId: 13, alt: null }, //bedroom
                { d: [0], hstart: 7, hend: 10, roomId: 775, alt: null }, //church
                { d: [0], hstart: 10, hend: 11, roomId: 12, alt: null }, //bathroom
                { d: [0], hstart: 11, hend: 24, roomId: 13, alt: null }, //their room

                //monday, wed, frid
                { d: [1, 3, 5], hstart: 0, hend: 7, roomId: 13, alt: null }, //bedroom
                { d: [1, 3, 5], hstart: 7, hend: 9, roomId: 25, alt: null }, //kitchen
                { d: [1, 3, 5], hstart: 9, hend: 14, roomId: 900, alt: null }, //school
                { d: [1, 3, 5], hstart: 14, hend: 17, roomId: char === "lola" ? 901 : 400, alt: null }, //pool
                { d: [1, 3, 5], hstart: 17, hend: 18, roomId: 25, alt: null }, //dining 
                { d: [1, 3, 5], hstart: 18, hend: 24, roomId: 13, alt: null }, //room

                //tuesday thursday
                { d: [2, 4], hstart: 0, hend: 7, roomId: 13, alt: null }, //bedroom
                { d: [2, 4], hstart: 7, hend: 8, roomId: 12, alt: null }, //bathroom
                { d: [2, 4], hstart: 8, hend: 9, roomId: 25, alt: null }, //school
                { d: [2, 4], hstart: 9, hend: 17, roomId: 900, alt: null }, //school
                { d: [2, 4], hstart: 17, hend: 18, roomId: 25, alt: null }, //dining 
                { d: [2, 4], hstart: 18, hend: 20, roomId: 26, alt: null }, //living room
                { d: [2, 4], hstart: 20, hend: 24, roomId: 13, alt: null }, //dining

                //saturday
                { d: [6], hstart: 0, hend: 7, roomId: 13, alt: null }, //bathroom
                { d: [6], hstart: 7, hend: 9, roomId: 25, alt: null }, //bathroom
                { d: [6], hstart: 9, hend: 24, roomId: 13, alt: null }, //living room
            ];
           
            break;
        case "cecilia":
            timeline = [
                { d: [1, 2, 3, 4, 5], hstart: 0, hend: 7, roomId: null, alt: "Home" },
                { d: [1, 2, 3, 4, 5], hstart: 7, hend: 16, roomId: 203, alt: null }, //office
                { d: [1, 2, 3, 4, 5], hstart: 16, hend: 20, roomId: null, alt: "Taking cock" }, //office
                { d: [1, 2, 3, 4, 5], hstart: 20, hend: 24, roomId: null, alt: "home" }, //office

                { d: [0, 6], hstart: 0, hend: 7, roomId: null, alt: "Home" },
                { d: [0, 6], hstart: 7, hend: 16, roomId: 451, alt: null }, //blowjob
                { d: [0, 6], hstart: 16, hend: 24, roomId: null, alt: "Taking cock" }, //office
                { d: [0, 6], hstart: 20, hend: 24, roomId: null, alt: "home" }, //office
            ];
            break;
        case "zoey":
            timeline = [
                { d: [0, 1, 2, 3, 4, 5, 6], hstart: 0, hend: 2, roomId: 525, alt: null }, //bar
                { d: [0, 1, 2, 3, 4, 5, 6], hstart: 2, hend: 12, roomId: 502, alt: null }, //bedroom
                { d: [0, 1, 2, 3, 4, 5, 6], hstart: 12, hend: 20, roomId: 501, alt: null }, //living room
                { d: [0, 1, 2, 3, 4, 5, 6], hstart: 20, hend: 24, roomId: 525, alt: null }, //bar
            ];
            break;
        case "tiffany":
        case "candy":
            timeline = [
                { d: [0], hstart: 0, hend: 7, roomId: 54, alt: null }, //bedroom
                { d: [0], hstart: 7, hend: 16, roomId: null, alt: "Penisland" },
                { d: [0], hstart: 16, hend: 24, roomId: 54, alt: null },
                { d: [6], hstart: 0, hend: 7, roomId: 54, alt: null }, //bedroom
                { d: [6], hstart: 7, hend: 16, roomId: char === "candy" ? 876 : 475, alt: null },
                { d: [6], hstart: 16, hend: 24, roomId: 54, alt: null },
                { d: [1, 2, 3, 4, 5], hstart: 0, hend: 7, roomId: 54, alt: null }, //bedroom
                { d: [1, 2, 3, 4, 5], hstart: 7, hend: 18, roomId: 650, alt: null }, //porn store
                { d: [1, 2, 3, 4, 5], hstart: 18, hend: 20, roomId: 57, alt: null }, //pussy palace
                { d: [1, 2, 3, 4, 5], hstart: 20, hend: 24, roomId: 54, alt: null }, //bedroom
            ];
            break;
        case "bimbo":
            timeline = [
                { d: [1, 2, 3, 4, 5], hstart: 0, hend: 7, roomId: 76, alt: null }, //bedroom
                { d: [1, 2, 3, 4, 5], hstart: 7, hend: 17, roomId: 700, alt: null }, //hospital
                { d: [1, 2, 3, 4, 5], hstart: 17, hend: 21, roomId: 77, alt: null }, //living room
                { d: [1, 2, 3, 4, 5], hstart: 21, hend: 24, roomId: 76, alt: null }, //bedroom
                { d: [0, 6], hstart: 0, hend: 9, roomId: 76, alt: null }, //bedroom
                { d: [0, 6], hstart: 9, hend: 21, roomId: 77, alt: null }, //living room
                { d: [0, 6], hstart: 21, hend: 24, roomId: 76, alt: null }, //bedroom
            ];
            break;
        case "cindy":
            timeline = [
                { d: [0, 2, 4, 6], hstart: 0, hend: 7, roomId: null, alt: "Home" }, //bedroom
                { d: [0, 2, 4, 6], hstart: 7, hend: 20, roomId: 901, alt: null }, //pool
                { d: [1, 3, 5], hstart: 0, hend: 7, roomId: null, alt: "Home" }, //bedroom
                { d: [1, 3, 5], hstart: 7, hend: 20, roomId: 900, alt: null }, //school
                { d: [0, 1, 2, 3, 4, 5, 6], hstart: 20, hend: 24, roomId: 726, alt: null }, //club
            ];
            break;
        case "tim":
            timeline = [
                { d: [0, 2, 4, 6], hstart: 0, hend: 7, roomId: null, alt: "Home" }, //bedroom
                { d: [0, 2, 4, 6], hstart: 0, hend: 20, roomId: 900, alt: null }, //pool
                { d: [1, 3, 5], hstart: 0, hend: 7, roomId: null, alt: "Home" }, //bedroom
                { d: [1, 3, 5], hstart: 7, hend: 20, roomId: 901, alt: null }, //school
                { d: [0, 1, 2, 3, 4, 5, 6], hstart: 20, hend: 24, roomId: 726, alt: null }, //club
            ];
            break;
    }

    var retVar = { roomID: -1, thisRoom: false, subList: new Array() };
    for (i = 0; i < timeline.length; i++) {
        if (timeline[i].d.includes(thisDay)) {
            retVar.subList.push({
                hstart: timeline[i].hstart,
                hend: timeline[i].hend,
                room: timeline[i].roomId === null ? timeline[i].alt : g.fr(timeline[i].roomId).name,
                current: (timeline[i].hstart <= thisTime && timeline[i].hend > thisTime)
            });
            if (timeline[i].hstart <= thisTime && timeline[i].hend > thisTime) {
                retVar.roomID = timeline[i].roomId;
                retVar.thisRoom = timeline[i].roomId === g.roomID;
            }
        }
    }
    return retVar;
};

sc.selectBg = function (name) {
    nav.button({
        "type": "img",
        "name": name,
        "left": 0,
        "top": 0,
        "width": 1920,
        "height": 1080,
        "image": "1001_rand/black_25.png"
    }, g.roomID);
}

sc.select = function (name, img, i) {
    nav.button({
        "type": "btn",
        "name": name,
        "left": 400 + ((Math.abs(i) % 2) * 700),
        "top": 200 + (Math.floor(i / 2) * 120),
        "width": 600,
        "height": 100,
        "image": img
    }, g.roomID);
};

sc.selectCancel = function (name, i) {
    sc.select(name, "1001_rand/icon_cancel.png", i);
};

sc.swimgirl = function () {
    return { roomID: g.roomID, thisRoom: true };
};

sc.phone = function (char) {
    var step
    if (char === "zoey1")
        step = 1;
    else
        step = sc.getstep(char);
    var clist;
    var nophone = [950, 951];
    if (nophone.includes(g.roomID)) {
        g.popUpNotice("No reception here. Damn!");
    }
    else {
        switch (char) {
            case "eva":
                if (step < 3) {
                    clist = [
                        { s: "me", t: "Hey what's up?" },
                        { s: "eva", t: "Nothing you pervert!" }
                    ];
                    sc.phoneChat(clist, char);
                }
                else if (step === 3) {
                    clist = [
                        { s: "me", t: "What was I supposed to do?" },
                        { s: "eva", t: "Get us some alcohol weird-o" }
                    ];
                    sc.phoneChat(clist, char);
                }
                else if (step < 6) {
                    clist = [
                        { s: "me", t: "You are so hot!" },
                        { s: "eva", t: "You are so weird and perverted! I bet" }
                    ];
                    sc.phoneChat(clist, char);
                }
                else if (step === 6) {
                    clist = [
                        { s: "me", t: "So what are you up to? You want to do the thing with your feet again?" },
                        { s: "eva", t: "I knew if I played with your weiner you'd get tottally weird" },
                        { s: "me", t: "Oh no I didn't mean to be weird" },
                        { s: "eva", t: "whatever. " + sc.n("lola") + " and me want to play truth or dare, come by tonight." }
                    ];
                    sc.phoneChat(clist, char);
                }
                else if (step === 7) {
                    clist = [
                        { s: "me", t: "That totally sucked!" },
                        { s: "eva", t: "I know! I'm so sorry! " + sc.n("landlord") + " got soooooo mad. I'm not even supposed to talk to you." },
                        { s: "me", t: "That's lame" },
                        { s: "eva", t: "I know! Also I totally want to see that giant cock of yours! " },
                        { s: "eva", t: "It's just soooo big. I wanted to play with it. You need to smooth things over with " + sc.n("landlord") }
                    ];
                    sc.phoneChat(clist, char);
                }
                else if (step === 9) {
                    clist = [
                        { s: "me", t: "I'm so excited to be back in the house!" },
                        { s: "eva", t: "I'm going to give you a big surprise... just wait for it!" },
                        { s: "me", t: "What surprise?" },
                        { s: "eva", t: "If I tell you, it won't a surprise!" },
                    ];
                    sc.phoneChat(clist, char);
                }
                else if (step === 10 || step === 11) {
                    if (daily.get("eva")) {
                        clist = [
                            { s: "me", t: "Hey, been thinking about my dick?" },
                            { s: "eva", t: "I'm busy today, try me tomorrow!" },
                        ];
                        sc.phoneChat(clist, char);
                    }
                    else if (g.roomID === 10) {
                        g.pass = "phonecall";
                        menu.mClick("close");
                        room7.main();
                    }
                    else {
                        clist = [
                            { s: "me", t: "Hey, been thinking about my dick?" },
                            { s: "eva", t: "Oh yeah! Text me when you're in your room!" },
                        ];
                        sc.phoneChat(clist, char);
                    }

                }
                else if (step === 30) {
                    clist = [
                        { s: "me", t: "Soooo what's up?" },
                        { s: "eva", t: "Heyyyy buddy. I like you, i just need a manly cock" },
                    ];
                    sc.phoneChat(clist, char);
                }
                else if (step === 203) {
                    if (g.roomID !== 900) {
                        clist = [
                            { s: "me", t: "You told me to text you." },
                            { s: "eva", t: "I did. Text me when you get in the library. And wear a doggy collar. " },
                        ];
                        sc.phoneChat(clist, char);
                    }
                    else {
                        clist = [
                            { s: "me", t: "You told me to text you." },
                            { s: "eva", t: "I did. AND I TOLD YOU TO WEAR A DOGGY COLLAR!" }
                        ];
                        sc.phoneChat(clist, char);
                    }
                }
                break;
            case "lola":
                if (step === 0)
                    sc.phoneChat([
                        { s: "me", t: "Hey " + sc.n("lola") + "!" },
                        { s: "lola", t: "You should come by our room! We like hanging out with you." },
                    ], char);
                else if (step < 4)
                    sc.phoneChat([
                        { s: "me", t: "Soooo what's up?" },
                        { s: "lola", t: "I'm so sore from swimming, I could use a massage." },
                    ], char);
                else if (step < 4)
                    sc.phoneChat([
                        { s: "me", t: "Hey " + sc.n("lola") },
                        { s: "lola", t: "Hey " + sc.n("eva") + " wanted to play a game. Could you get some alcohol?" },
                    ], char);
                else if (step < 7)
                    sc.phoneChat([
                        { s: "me", t: "Soooo what's up?" },
                        { s: "lola", t: "My legs are so tight from swimming. Could you give them a rub down?" },
                    ], char);
                else if (step === 7)
                    sc.phoneChat([
                        { s: "me", t: "Soooo what's up?" },
                        { s: "lola", t: sc.n("eva") + " said something about a game. Sounds like fun, we should play." },
                    ], char);
                else if (step === 8)
                    sc.phoneChat([
                        { s: "me", t: "That was so crazy, I'm so sorry" },
                        { s: "lola", t: "I know! " + sc.n("landlord") + " made us promise not to see you again." },
                        { s: "me", t: "That's terrible. I miss seeing you" },
                        { s: "lola", t: "I'm working on her to try and get you back into the house. You should see her at work and work on it too. She's really mad" },
                    ], char);
                else if (step === 9)
                    sc.phoneChat([
                        { s: "me", t: "Hey " + sc.n("lola") + " it was sooo good to see you! " },
                        { s: "lola", t: "It really is. I really missed you." },
                    ], char);
                else if (step === 10)
                    sc.phoneChat([
                        { s: "me", t: "Hey " + sc.n("lola") + " it was sooo good to see you! " },
                        { s: "lola", t: "It really is. I really missed you." },
                    ], char);
                else if (step === 11) {
                    if (g.roomID === 450) {
                        if (g.isNight()) {
                            sc.phoneChat([
                                { s: "me", t: "Hey " + sc.n("lola") + " I'm at the park " },
                                { s: "lola", t: "It's so late, how about we meet up during the day. " },
                                { s: "me", t: "Oh yeah, of course. I'll text you during the day." },
                            ], char);
                        }
                        else {
                            menu.mClick("close");
                            menu.mClick("close");
                            room450.btnclick("lolaPark");
                        }
                    }
                    else {
                        sc.phoneChat([
                            { s: "me", t: "Hey " + sc.n("lola") + " we should talk " },
                            {
                                s: "lola", t: "I'm so glad you texted me. We should talk, but I can't let " + sc.n("landlord") + " or " +
                                    sc.n("eva") + " know I'm breaking the rules. "
                            },
                            { s: "me", t: "Ok. I'll text you from the park. We'll have a date." },
                            { s: "lola", t: "I'm so glad! I'll see you there. " },
                        ], char);
                    }
                }
                else if (step === 12) {
                    if (g.roomID === 450) {
                        if (g.isNight()) {
                            sc.phoneChat([
                                { s: "me", t: "Hey " + sc.n("lola") + " I'm at the park " },
                                { s: "lola", t: "It's so late, how about we meet up during the day. " },
                                { s: "me", t: "Oh yeah, of course. I'll text you during the day." },
                            ], char);
                        }
                        else {
                            menu.mClick("close");
                            menu.mClick("close");
                            room450.btnclick("lolaPark12");
                        }
                    }
                    else {
                        sc.phoneChat([
                            { s: "me", t: "Hey " + sc.n("lola") + " we should talk " },
                            {
                                s: "lola", t: "I'm so glad you texted me. We should talk, but I can't let " + sc.n("landlord") + " or " +
                                    sc.n("eva") + " know I'm breaking the rules. "
                            },
                            { s: "me", t: "Ok. I'll text you from the park. We'll have a date." },
                            { s: "lola", t: "I'm so glad! I'll see you there. " },
                        ], char);
                    }
                }
                break;
            case "missy":
                sc.phoneChat([
                    { s: "me", t: "Hey! " },
                    { s: "missy", t: "Fuck off - In progress" },
                ], char);
                break;
            case "zoey":
                sc.phoneChat([
                    { s: "me", t: "You're my bestest pal! " },
                    { s: "zoey", t: "In progress" },
                ], char);
                break;
            case "zoey1":
                sc.phoneChat([
                    { s: "zoey", t: "You'll never guess what " + sc.n("chloe") + " just sent me! " },
                    { s: "me", t: "I can guess. She surprised me and tied me up. Took the picture of it to make you mad. " },
                    { s: "zoey", t: "MDR! That is so funny. She is such a idiot jaloux. I do not care if you fuck her in the brains. She is the crazy. " },
                    { s: "me", t: "LOL. good. I'm glad you don't hate me " },
                    { s: "zoey", t: "je ne te déteste pas. " + sc.n("chloe") + " does have a pussy délicieuse. I may eat it again when je suis excitée. " }
                ], "zoey");
                break;
        }
    }
};

sc.phoneChat = function (chatList, char) {
    var ts = "";
    var thisCar = sc.get(char);
    var thisImg = 'style="height: ' + 100 * g.ratio + 'px; width: ' + 100 * g.ratio + 'px; display:inline-block; vertical-align: top;"';
    $.each(chatList, function (i, v) {
        ts += '<div class="phone-chat char-20 ' + v.s + '-phone" style="' + g.cssText(20) + ' border-radius:' + 10 * g.ratio + 'px;">' + v.t + '</div>';
    });

    $('.contact-body').html('<img src="./images/phone/char/' + thisCar.image + '" ' + thisImg + '/>' +
        '<div style="display:inline-block; font-weight:bold; vertical-align: top; padding-top:' + 10 * g.ratio + 'px; font-size:' + 40 * g.ratio + 'px;">' + thisCar.display + '</div><hr/>' + ts);
};


sc.trivial = function (charname) {
    var name, image;
    switch (charname) {
        case "!blank":
            name = "";
            image = "blank.png";
            break;
        case "!burlysecurity":
            name = "Security";
            image = "burlySecurity.png";
            break;
        case "!fatdogguy":
            name = "Fatty McGillicutty";
            image = "fatdogguy.png";
            break;
        case "!constworker0":
            name = "Tits McGee";
            image = "constWorker0.png";
            break;
        case "!sanaria":
            name = "Sanaria";
            image = "sanaria.png";
            break;
        case "!kareem":
            if (sissy.st[10].ach)
                name = "Kesia"
            else
                name = "Kareem";
            image = "kareem.png";
            break;
        case "!philbert":
            name = "Philbert";
            image = "philbert.png";
            break;
        case "!chris":
            if (sissy.st[10].ach)
                name = "Chrissy"
            else
                name = "Chris";
            image = "chris.png";
            break;
        case "!thomas":
            if (sissy.st[10].ach)
                name = "Thomas";
            else
                name = "Sinéad";
            image = "thomas.png";
            break;
        case "!timothy":
            if (sissy.st[10].ach) {
                name = "Trixy"
            }
            else {
                name = "Timothy";
            }
            image = "timothy.png";
            break;
        case "!sporty":
            name = "Sporty";
            image = "sporty.png";
            break;
        case "!jeremy":
            //if (sissy.st[10].ach) {
            //    name = "Jenny"
            //}
            //else {
            //    name = "Jeremy";
            //}
            name = "Jeremy";
            image = "jeremy.png";
            break;
        case "!martin":
            name = "Martin";
            image = "martin.png";
            break;
        case "!missyguardday":
            name = "Guard"; 
            image = "missyguardday.png";
            break;
        case "!missyguardnight":
            name = "Guard";
            image = "missyguardnight.png";
            break;
        case "!stoner":
            name = "Stoney";
            image = "stoner.png";
            break;
        case "!cheezy":
            name = "Cheezy Poof";
            image = "cheezy.png";
            break;
        case "!nips":
            name = "Nips McTits";
            image = "nips.png";
            break;
        case "!lep":
            name = "Telchar";
            image = "lep.png";
            break;
        case "!bitch":
            name = "Bitch Face";
            image = "bitch.png";
            break;
        case "!twat":
            name = "Twaty Honey";
            image = "twat.png";
            break;
        case "!madison":
            name = "Nurse Madison";
            image = "madison.png";
            break;
        case "!boy":
            name = "Boy's Voice";
            image = "boy.png";
            break;
        case "!man":
            name = "Man";
            image = "boy.png";
            break;
        case "!girl":
            name = "Girl's Voice";
            image = "girl.png";
            break;
        case "!oldlady":
            name = "Old lady";
            image = "oldlady.png";
            break;
        case "!football":
            name = "Player";
            image = "football.png";
            break;
        case "!waiter":
            name = "Waiter";
            image = "waiter.png";
            break;
        case "!plumber":
            name = "Plumber";
            image = "plumber.png";
            break;
        case "!bill":
            name = "Bill";
            image = "bill.png";
            break;
        case "!punk":
            name = "Punk Rocker";
            image = "punk.png";
            break;
        case "!m":
            name = "Marilyn";
            image = "m.png";
            break;
        case "!peeguy":
            name = "Peeing Asshole";
            image = "peeguy.png";
            break;
        case "!chem":
            name = "Chemist";
            image = "chem.png";
            break;
        case "!elijah":
            name = "Elijah";
            image = "elijah.png";
            break;
        case "!rex":
            name = "Mr. Rex";
            image = "rex.png";
            break;
        case "!gamerboy":
            name = "Gamer";
            image = "gamerboy.png";
            break;
        case "!gamergirl":
            name = "Miss M.";
            image = "gamergirl.png";
            break;
        case "!gameman":
            name = "Some guy";
            image = "gameman.png";
            break;
        case "!g":
            name = "Geoffrey";
            image = "g.png";
            break;
        case "!glory":
            name = "Glory Hole Customer";
            image = "unk.png";
            break;
        case "!poppy":
            name = "Poppy";
            image = "poppy.png";
            break;
        case "!juniper":
            name = "Juniper";
            image = "juniper.png";
            break;
        case "!emily":
            name = "Emily";
            image = "emily.png";
            break;
        case "!cindy":
            name = "Cindy";
            image = "cindy.png";
            break;
        case "!missx":
            name = "Mistress Anaru";
            image = "missx.png";
            break;
        case "!jenna":
            name = "Jenna";
            image = "jenna.png";
            break;
        case "!footballguard":
            name = "Security";
            image = "footballguard.png";
            break;
        case "!airwrecka":
            name = "Airwrecka";
            image = "airwrecka.png";
            break;
        case "!boxes":
            name = "Mike";
            image = "boxes.png";
            break;
        case "!bwc":
            name = "BWC";
            image = "bwc.png";
            break;
        case "!bbc":
            name = "BBC";
            image = "bbc.png";
            break;
        case "!deb":
            name = "Deb";
            image = "deb.png";
            break;
        case "!latika":
            name = "Latika";
            image = "latika.png";
            break;
        case "!doofus":
            name = "Doofus";
            image = "doofus.png";
            break;
        case "!custbitch":
            name = "Mean girl";
            image = "custbitch.png";
            break;
        case "!jabari":
            name = "Jabari";
            image = "jabari.png";
            break;
        case "!rape0":
            name = "Rapist";
            image = "rape0.png";
            break;
        case "!rape12":
            name = "Big Benny Cox";
            image = "rape12.png";
            break;
        case "!duo13":
            name = "Abbot";
            image = "duo13.png";
            break;
        case "!duo13a":
            name = "Costello";
            image = "duo13a.png";
            break;
        case "!peggy":
            name = "Peggy";
            image = "peggy.png";
            break;
        case "!caveslave":
            name = "Slave";
            image = "caveslave.png";
            break;
        case "!damselle":
            name = "Damselle";
            image = "damselle.png";
            break;
        case "!futa0":
            name = "Domina Dix";
            image = "futa0.png";
            break;
        case "!futa1":
            name = "Jessica";
            image = "futa1.png";
            break;
        case "!plant":
            name = "Vines";
            image = "futa0.png";
            break;
        case "!granola":
            name = "Wild River"
            image = "granola.png";
            break;
        case "!girl2":
            name = "Tits McGee";
            image = "girl2.png"
            break;
        case "!girl3":
            name = "Delilah";
            image = "girl3.png"
            break;
        case "!girl3a":
            name = "Willow";
            image = "girl3a.png"
            break;
        case "!butler":
            name = "The Butler";
            image = "butler.png";
            break;
        case "!cat":
            name = "Kitty";
            image = "cat.png";
            break;
        case "!jarome":
            name = "Jarome";
            image = "jarome.png";
            break;
        case "!freddy":
            name = "Fat Freddy";
            image = "freddy.png";
            break;
        case "!frank":
            name = "Fat Franky";
            image = "frank.png";
            break;
        case "!wolf":
            name = "Dire wolf";
            image = "wolf.png";
            break;
        case "!crystal":
            name = "Crystal";
            image = "crystal.png";
            break;
        case "!judge":
            name = "Reginald Esq. III";
            image = "judge.png";
            break;
        case "!fatnun":
            name = "Sister Edna";
            image = "fatnun.png";
            break;
        case "!jail0":
            name = "Fat dick prisoner";
            image = "jail0.png";
            break;
        case "!jail1":
            name = "Long dick prisoner";
            image = "jail1.png";
            break;
        case "!music":
            name = "";
            image = "music.png";
            break;
        case "!skank":
            name = "Skanky Bitch";
            image = "skank.png";
            break;
        default:
            console.log("unknown trivial char: (check capitilazation)" + charname);
            break;
    }
    return { display: name, image: image };
}