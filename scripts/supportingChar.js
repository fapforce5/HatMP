
var sc = {};

//g.char MUST BE LOWERCASE!!!!!!!!!!
sc.char = [
    { name: "me", display: "Alex", image: "me.png", step: 0, max: 0, show: true, setName: false, phone: -1 },
    { name: "landlord", display: "Landlady", image: "mom.png", step: 0, max: 0, show: true, setName: true, phone: 0 },
    { name: "el", display: "Co-Tenants", image: "lolaEva.png", step: 0, max: 0, show: false, setName: false, phone: -1 },
    { name: "lola", display: "Lola", image: "lola.png", step: 0, max: 0, show: true, setName: true, phone: 0 },
    { name: "eva", display: "Eva", image: "eva.png", step: 0, max: 0, show: true, setName: true, phone: 0 },
    { name: "missy", display: "Missy", image: "missy.png", step: 0, max: 0, show: true, setName: true, phone: 2 },
    { name: "p", display: "Princess", image: "princess.png", step: 0, max: 0, show: true, setName: true, phone: 0 },
    { name: "zoey", display: "Zoey", image: "zoey.png", step: 0, max: 0, show: true, setName: true, phone: 0 },
    { name: "stormy", display: "Stormy", image: "stormy.png", step: 0, max: 0, show: false, setName: true, phone: -1 },
    { name: "chloe", display: "Chloé", image: "chloe.png", step: 0, max: 0, show: false, setName: false, phone: -1 },
    { name: "tina", display: "Tina", image: "tina.png", step: 0, max: 0, show: true, setName: true, phone: 12 },
    { name: "construction", display: "The Bossman", image: "bossman.png", step: 0, max: 0, show: true, setName: true, phone: -1 },
    { name: "govlady", display: "Ms. Pixie", image: "govlady.png", step: 0, max: 0, show: false, setName: false, phone: -1 },
    { name: "chad", display: "Chad", image: "brad.png", step: 0, max: 0, show: true, setName: true, phone: -1 },
    { name: "g", display: "Gertrude", image: "gertrude.png", step: 0, max: 0, show: false, setName: true, phone: -1 },
    { name: "cecilia", display: "Cecilia", image: "cecilia.png", step: 0, max: 0, show: false, setName: true, phone: -1 },
    { name: "tiffany", display: "Tiffany", image: "tiffany.png", step: 0, max: 0, show: true, setName: true, phone: -1 },
    { name: "candy", display: "Candy", image: "candy.png", step: 0, max: 0, show: true, setName: true, phone: -1 },
    { name: "charlie", display: "Charlie", image: "charlie.png", step: 0, max: 0, show: false, setName: false, phone: -1 },
    { name: "cop", display: "Cop", image: "cop.png", step: 0, max: 0, show: false, setName: false, phone: -1 },
    { name: "cop2", display: "Cop", image: "cop2.png", step: 0, max: 0, show: false, setName: false, phone: -1 },
    { name: "jada", display: "Jada", image: "jada.png", step: 0, max: 0, show: false, setName: true, phone: -1 },
    { name: "red", display: "Red", image: "red.png", step: 0, max: 0, show: false, setName: false, phone: -1 },
    { name: "spanky", display: "Spanky", image: "spanky.png", step: 0, max: 0, show: false, setName: false, phone: -1 },

    { name: "fightman", display: "Bad Motherfucker", image: "fightMan.png", step: 0, max: 0, show: false, setName: false, phone: -1 },
    { name: "fightgirl", display: "Bad Motherfucker", image: "fightGirl.png", step: 0, max: 0, show: false, setName: false, phone: -1 },
    { name: "fighttrans", display: "Bad Motherfucker", image: "fightTrans.png", step: 0, max: 0, show: false, setName: false, phone: -1 },
    { name: "cult", display: "Cult", image: "cult.png", step: 0, max: 0, show: false, setName: false, phone: -1 },
    { name: "cultboy", display: "Cult", image: "cult_j_b.png", step: 0, max: 0, show: false, setName: false, phone: -1 },
    { name: "cultjgirl", display: "Cult", image: "cult_j_g.png", step: 0, max: 0, show: false, setName: false, phone: -1 },
    { name: "priapus", display: "Priapus", image: "Priapus.png", step: 0, max: 0, show: false, setName: false, phone: -1 },
    { name: "daria", display: "D.M.", image: "daria.png", step: 0, max: 0, show: false, setName: true, phone: -1 },
    { name: "jen", display: "Jen", image: "jen.png", step: 0, max: 0, show: false, setName: false, phone: -1 },
    { name: "ubel", display: "Ubel", image: "ubel.png", step: 0, max: 0, show: false, setName: false, phone: -1 },

    { name: "jeffery", display: "Jeffery", image: "jeffery.png", step: 0, max: 0, show: false, setName: false, phone: -1 },
    { name: "holly", display: "Holly", image: "holly.png", step: 0, max: 0, show: false, setName: false, phone: -1 },
    { name: "molly", display: "Molly", image: "molly.png", step: 0, max: 0, show: false, setName: false, phone: -1 },
    { name: "dolly", display: "Dolly", image: "dolly.png", step: 0, max: 0, show: false, setName: false, phone: -1 },
    { name: "bimbo", display: "Bimbo", image: "bimbo.png", step: 0, max: 0, show: false, setName: true, phone: -1 },
    { name: "bigguy", display: "Dick", image: "bigman.png", step: 0, max: 0, show: false, setName: false, phone: -1 },
    { name: "treyvon", display: "Treyvon", image: "treyvon.png", step: 0, max: 0, show: false, setName: false, phone: -1 },
    { name: "jimmy", display: "Jimmy", image: "jimmy.png", step: 0, max: 0, show: false, setName: false, phone: -1 },
    { name: "kei", display: "Kei", image: "kei.png", step: 0, max: 0, show: false, setName: false, phone: -1 },
    { name: "ralph", display: "Ralph", image: "ralph.png", step: 0, max: 0, show: false, setName: false, phone: -1 },
    { name: "jones", display: "Mr. Jones", image: "jones.png", step: 0, max: 0, show: false, setName: false, phone: -1 },
    { name: "wyatt", display: "Agent Wyatt", image: "wyatt.png", step: 0, max: 0, show: false, setName: false, phone: -1 },
    { name: "doc", display: "Dr. Strangelove", image: "doctor.png", step: 0, max: 0, show: false, setName: false, phone: -1 },
    { name: "crystal", display: "Crystal", image: "crystal.png", step: 0, max: 0, show: false, setName: false, phone: -1 },
    { name: "librarian", display: "The Librarian", image: "librarian.png", step: 0, max: 0, show: false, setName: false, phone: -1 },

    { name: "bodhi", display: "Bodhi", image: "bodhi.png", step: 0, max: 0, show: false, setName: false, phone: -1 },

    { name: "cindy", display: "Cindy", image: "cindy.png", step: 0, max: 0, show: false, setName: false, phone: -1 },
    { name: "tim", display: "Tim", image: "tim.png", step: 0, max: 0, show: false, setName: false, phone: -1 },

    { name: "poppy", display: "Poppy", image: "poppy.png", step: 0, max: 0, show: false, setName: false, phone: -1 },
    { name: "orchid", display: "Orchid", image: "orchid.png", step: 0, max: 0, show: false, setName: false, phone: -1 },
    { name: "juniper", display: "Juniper", image: "juniper.png", step: 0, max: 0, show: false, setName: false, phone: -1 },

    { name: "clownqueen", display: "Clown", image: "clownQueen.png", step: 0, max: 0, show: false, setName: false, phone: -1 },
    { name: "futayellow", display: "Yellow", image: "futaYellow.png", step: 0, max: 0, show: false, setName: false, phone: -1 },
    { name: "futared", display: "Red", image: "futaRed.png", step: 0, max: 0, show: false, setName: false, phone: -1 },
    { name: "slime", display: "Slime Girl", image: "slime.png", step: 0, max: 0, show: false, setName: false, phone: -1 },
    { name: "random", display: "Random", image: "rand.png", step: 0, max: 0, show: false, setName: false, phone: -1 },
    { name: "thinking", display: "Thinking", image: "thinking.png", step: 0, max: 0, show: false, setName: false, phone: -1 },
];

sc.events = [
    //{ name: "me", step: -13, txt: "Back In", img: "", show: false, row: 0, col: 1, ach: false, major: false },
    //{ name: "me", step: -12, txt: "Can wear makeup", img: "", show: false, row: 1, col: 5, ach: false, major: false },
    //{ name: "me", step: -11, txt: "Free to roam as a girl", img: "", show: false, row: 1, col: 5, ach: false, major: false },
    //{ name: "me", step: -10, txt: "Stretch Butthole bigger than 1", img: "", show: false, row: 1, col: 5, ach: false, major: false },
    //{ name: "me", step: -9, txt: "Give Blowjobs", img: "plug", show: false, row: 1, col: 5, ach: false, major: false },
    //{ name: "me", step: -8, txt: "Buy and wear buttplug", img: "plug", show: true, row: 1, col: 5, ach: false, major: false },
    //{ name: "me", step: -7, txt: "Buy and wear chastity", img: "chastity", show: true, row: 1, col: 4, ach: false, major: false },
    //{ name: "me", step: -6, txt: "No Panties", img: "", show: false, row: 1, col: 3, ach: false, major: false },
    //{ name: "me", step: -5, txt: "Can dye hair girly colors", img: "girlyDye", show: true, row: 1, col: 3, ach: false, major: false },
    { name: "me", step: -4, txt: "First time in wardrobe", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "me", step: -3, txt: "Can wear lipstick", img: "lipstick", show: true, row: 1, col: 2, ach: false, major: false },
    { name: "me", step: -2, txt: "You're ok with wearing panties", img: "panties", show: true, row: 1, col: 1, ach: false, major: false }, //hired at missy
    { name: "me", step: -1, txt: "You can shave your body", img: "razor", show: true, row: 1, col: 0, ach: false, major: false }, //hired at missy
    { name: "me", step: 0, txt: "[0] Wake up buttercup.", img: "bed", show: false, row: 0, col: 0, ach: true, major: false },
    { name: "me", step: 1, txt: "[1] Get a job and start paying rent", img: "money", show: true, row: 0, col: 0, ach: false, major: false },
    { name: "me", step: 2, txt: "[2] Pay rent each Sunday", img: "landlord", show: false, row: 0, col: -1, ach: false, major: false }, //hired at missy
    { name: "me", step: 3, txt: "[3] Homeless.. Find a Place to Sleep", img: "homeless", show: true, row: 0, col: 1, ach: false, major: false }, //TorD complete kicked out of house
    { name: "me", step: 7, txt: "[4] Shopping at the mall! - ignore this", img: "homeless", show: false, row: 0, col: 1, ach: false, major: false }, //TorD complete kicked out of house

    { name: "landlord", step: -8, txt: "Em bare ass", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "landlord", step: -7, txt: "First Day at the Sperm Bank", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "landlord", step: -6, txt: "Back in!", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "landlord", step: -5, txt: "Doctor donated", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "landlord", step: -4, txt: "Doctor Sperm", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "landlord", step: -3, txt: "Can donate sperm", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "landlord", step: -2, txt: "Caught with Panties", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "landlord", step: -1, txt: "Kicked out", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "landlord", step: 0, txt: "[0M] Lectured on laziness", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "landlord", step: 1, txt: "[1M] Talk to her about her job. ", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "landlord", step: 2, txt: "[2M] Continue to chat about job. ", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "landlord", step: 3, txt: "[3M] Chat about theif", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "landlord", step: 4, txt: "[4M] Get bedroom key and make bed each morning.", img: "llkey", show: true, row: 0, col: 0, ach: false, major: false },
    { name: "landlord", step: 5, txt: "[5M] Kicked out", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "landlord", step: 6, txt: "[6M] Can Work", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "landlord", step: 7, txt: "[7M] Ate that ass", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "landlord", step: 8, txt: "[8M] Dick Slap Rerun", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "landlord", step: 200, txt: "[0F] Caught in girl's clothes", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "landlord", step: 201, txt: "[1F] Picnic at the park in a polka dot dress", img: "", show: false, row: 0, col: 0, ach: false, major: false },

    //{ name: "landlord", step: 9, txt: "First day", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    //{ name: "landlord", step: 15, txt: "Work Complete - Invited back", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    //{ name: "landlord", step: 16, txt: "Back In", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    //{ name: "landlord", step: 200, txt: "Sissy Path", img: "", show: false, row: 0, col: 0, ach: false, major: false },

    { name: "bigguy", step: 0, txt: "[0] Not met", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "bigguy", step: 1, txt: "[1] First Meeting in the landlord's room", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "bigguy", step: 2, txt: "[2] Second Meeting in the landlord's room", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "bigguy", step: 3, txt: "[3] Third Meeting in the landlord's room", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "bigguy", step: 4, txt: "[4] Cum licker", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "bigguy", step: 5, txt: "[5] Eat all the cum - both", img: "", show: false, row: 0, col: 0, ach: false, major: false },

    { name: "zoey", step: -3, txt: "First Bar", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "zoey", step: -2, txt: "Can Sleep Over", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "zoey", step: -1, txt: "First Sleep Over", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "zoey", step: 0, txt: "[0] Play some video games. ", img: "zoeyGame", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "zoey", step: 1, txt: "[1] Define Relationship ", img: "zoeyGame", show: true, row: 0, col: 0, ach: false, major: false },
    { name: "zoey", step: 2, txt: "[2] Meet Chloé", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "zoey", step: 3, txt: "[3] Eat Chloé", img: "zoeyLick", show: true, row: 0, col: 1, ach: false, major: false },
    { name: "zoey", step: 4, txt: "[4] Talk to Zoey about Chloé", img: "", show: false, row: 0, col: 1, ach: false, major: false },
    { name: "zoey", step: 5, txt: "[5] Chloé  Cheating", img: "bff", show: true, row: 0, col: 2, ach: false, major: false },
    { name: "zoey", step: 6, txt: "[6] Sleep at Zoey's a few times", img: "bff", show: true, row: 0, col: 2, ach: false, major: false },
    { name: "zoey", step: 10, txt: "[7] Night visitor", img: "", show: false, row: 0, col: 3, ach: false, major: false },
    { name: "zoey", step: 11, txt: "[8] Night visitor end -- need new", img: "zoeyEat", show: true, row: 0, col: 3, ach: false, major: false },
    { name: "zoey", step: 12, txt: "[9] Get toy and cuffs - Voyer", img: "zoeyEat", show: false, row: 0, col: 3, ach: false, major: false },
    { name: "zoey", step: 13, txt: "[10] Eat the pussy", img: "zoeyEat", show: false, row: 0, col: 3, ach: false, major: false },
    { name: "zoey", step: 14, txt: "[11] Relationship - no new content", img: "zoeyEat", show: false, row: 0, col: 3, ach: false, major: false },

    { name: "zoey", step: 300, txt: "[0] No help, endless loop bad END", img: "bff", show: true, row: 0, col: 2, ach: false, major: false },
    { name: "zoey", step: 301, txt: "[1] Caught cheating - Zoey bad End", img: "bff", show: true, row: 0, col: 2, ach: false, major: false },

    { name: "missy", step: -2, txt: "Got Red Room bonus once", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "missy", step: -1, txt: "Get the Tea", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "missy", step: 0, txt: "[0] Apply to Missy's Detective Agency.", img: "pc", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "missy", step: 1, txt: "[1] Get Private Investigator's license and interview.", img: "pi_lic", show: true, row: 0, col: 0, ach: false, major: false },
    { name: "missy", step: 2, txt: "[2] Report for first day on job with a suit, black socks, and black shoes.", img: "suit", show: true, row: 0, col: 1, ach: false, major: false },
    { name: "missy", step: 3, txt: "[3] Finish cleaning bathroom", img: "sponge", show: true, row: 0, col: 2, ach: false, major: false },
    { name: "missy", step: 4, txt: "[4] Woship her beautiful feet", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "missy", step: 5, txt: "[5] Complete First file organize", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "missy", step: 6, txt: "[6] Wear piggy nose to work and lose weight.", img: "piggy", show: true, row: 0, col: 3, ach: false, major: false },
    { name: "missy", step: 7, txt: "[7] Report to the Toy Store before 10:00 AM", img: "tiffany", show: true, row: 0, col: 4, ach: false, major: true },
    { name: "missy", step: 8, txt: "[8] Report your failings.", img: "tiffanyMad", show: true, row: 0, col: 5, ach: false, major: false },
    { name: "missy", step: 9, txt: "[9] Report for work in a pair of panties", img: "panties", show: true, row: 0, col: 6, ach: false, major: false },
    { name: "missy", step: 10, txt: "[10] First Day of Sissy School", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "missy", step: 100, txt: "[100] Kidnapped by the cult", img: "", show: false, row: 0, col: 0, ach: false, major: false },

    { name: "p", step: 0, txt: "Sissy School Rules Day 1", img: "pc", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "p", step: 1, txt: "How to sit - get clothes", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "p", step: 2, txt: "How to sit", img: "", show: false, row: 0, col: 0, ach: false, major: false },

    { name: "cecilia", step: 0, txt: "[0] Met", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "cecilia", step: 1, txt: "[1] Tied Up", img: "", show: false, row: 0, col: 0, ach: false, major: false },

    { name: "tiffany", step: -9, txt: "Shopping", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "tiffany", step: -8, txt: "Give Box", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "tiffany", step: -7, txt: "Pink Pussy First Time", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "tiffany", step: -6, txt: "Return Trip", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "tiffany", step: -5, txt: "Peeked during show", img: "dildo", show: true, row: 1, col: 1, ach: false, major: true },
    { name: "tiffany", step: -4, txt: "Caught 'em", img: "nap", show: true, row: -1, col: 1, ach: false, major: true },
    { name: "tiffany", step: -3, txt: "Be a little bitch", img: "tifNoFuck", show: true, row: 0, col: 2, ach: false, major: false },
    { name: "tiffany", step: -2, txt: "Cum Inside", img: "tifCumInside", show: true, row: 1, col: 2, ach: false, major: false },
    { name: "tiffany", step: -1, txt: "Cum Back", img: "tifCumBack", show: true, row: -1, col: 2, ach: false, major: false },
    { name: "tiffany", step: 0, txt: "[0] Meet Tiffany", img: "", show: false, row: 0, col: 0, ach: true, major: false },
    { name: "tiffany", step: 1, txt: "[1] Work at The Toy Store to catch the Mad Pooper", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "tiffany", step: 2, txt: "[2] Continue to work at The Toy Store to catch the Mad Pooper", img: "cum", show: true, row: 0, col: 0, ach: false, major: false },
    { name: "tiffany", step: 3, txt: "[3] Peeked at Tiffany", img: "dildo", show: false, row: 1, col: 1, ach: false, major: true },
    { name: "tiffany", step: 4, txt: "[3] Found the cultist", img: "nap", show: false, row: -1, col: 1, ach: false, major: true },
    { name: "tiffany", step: 5, txt: "[4] Kicked out of toy store", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "tiffany", step: 6, txt: "[5] Visit Tiffany's home for the first time", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "tiffany", step: 10, txt: "UNK", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    //{ name: "tiffany", step: 11, txt: "Box of clothing given", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    //{ name: "tiffany", step: 12, txt: "Meet at her house", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    //{ name: "tiffany", step: 13, txt: "Meet at park", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    //{ name: "tiffany", step: 14, txt: "Brought him home", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    //{ name: "tiffany", step: 15, txt: "First time home", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "tiffany", step: 16, txt: "First In House", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "tiffany", step: 16, txt: "Watch Tiffany masturbate", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "tiffany", step: 17, txt: "Masturbate like a girl", img: "", show: false, row: 0, col: 0, ach: false, major: false },

    { name: "candy", step: -1, txt: "Flash in bathroom", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "candy", step: 0, txt: "[0] Need to do crossdressing event", img: "", show: false, row: 0, col: 0, ach: true, major: false },
    { name: "candy", step: 1, txt: "[1] Transformation", img: "", show: false, row: 0, col: 0, ach: true, major: false },
    { name: "candy", step: 2, txt: "[2] Ate your own cum!", img: "", show: false, row: 0, col: 0, ach: true, major: false },
    { name: "candy", step: 3, txt: "[3] Ate Brad's Cum", img: "", show: false, row: 0, col: 0, ach: true, major: false },

    { name: "chad", step: -2, txt: "Give Chad a picture of Lola's tits", img: "chad_pic", show: true, row: 1, col: 0, ach: false, major: false },
    { name: "chad", step: -1, txt: "Pay $500", img: "money", show: true, row: -1, col: 0, ach: false, major: false },
    { name: "chad", step: 0, txt: "[0] Meet Chat", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "chad", step: 1, txt: "[1] Either pay $500 or get a picture of her tits", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "chad", step: 2, txt: "[2] Got Gym pass", img: "gymPass", show: true, row: 0, col: 0, ach: false, major: false },

    { name: "construction", step: 1, txt: "Interview at the construction site.", img: "const1", show: true, row: 0, col: 0, ach: false, major: false },
    { name: "construction", step: 2, txt: "Work construction. - Need to arrive before 9:00 AM in a t-shirt and jeans. ", img: "sweep", show: true, row: 0, col: 1, ach: false, major: false },

    { name: "lola", step: -5, txt: "Caught doing sissy stuff", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "lola", step: -4, txt: "Just play", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "lola", step: -3, txt: "Professed Love", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "lola", step: -2, txt: "Lola Swim after kick out", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "lola", step: -1, txt: "Panty theif caught", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "lola", step: 0, txt: "[0M] Ask for a book", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "lola", step: 1, txt: "[1M] Rubbed back with clothes", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "lola", step: 2, txt: "[2M] Rubbed back shirt pulled up", img: "lolaMass", show: true, row: 0, col: 0, ach: false, major: false },
    { name: "lola", step: 3, txt: "[3M] Rubbed back topless", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "lola", step: 4, txt: "[4M] Waiting on liquor", img: "spinBottle", show: true, row: 0, col: 1, ach: false, major: true },
    { name: "lola", step: 5, txt: "[5M] Rubbed back in panties", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "lola", step: 6, txt: "[6M] Rubbed back spread pussy", img: "lolaMass1", show: true, row: 0, col: 2, ach: false, major: false },
    { name: "lola", step: 7, txt: "[7M] Rinse and repeat", img: "", show: false, row: 0, col: 3, ach: false, major: false },
    { name: "lola", step: 8, txt: "[8M] Truth or Dare", img: "evaLolaBlow", show: false, row: 0, col: 3, ach: false, major: true },
    { name: "lola", step: 9, txt: "[9M] Back in the house", img: "evaLolaBlow", show: false, row: 0, col: 3, ach: false, major: true },
    { name: "lola", step: 10, txt: "[10M] Bed time confession", img: "evaLolaBlow", show: false, row: 0, col: 3, ach: false, major: true },
    { name: "lola", step: 11, txt: "[11M] Waiting on text", img: "evaLolaBlow", show: false, row: 0, col: 3, ach: false, major: true },
    { name: "lola", step: 12, txt: "[12M] Next - UNK", img: "evaLolaBlow", show: false, row: 0, col: 3, ach: false, major: true },
    { name: "lola", step: 200, txt: "[0F] Sissy Path - caught crossdressing", img: "evaLolaBlow", show: false, row: 0, col: 3, ach: false, major: true },
    { name: "lola", step: 201, txt: "[1F] Gave panties", img: "evaLolaBlow", show: false, row: 0, col: 3, ach: false, major: true },

    { name: "eva", step: -1, txt: "Caught peeking on shower", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "eva", step: 0, txt: "[0M] Ask for book", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "eva", step: 1, txt: "[1M] Borrow Math Text Book", img: "mathBook", show: true, row: 0, col: 0, ach: false, major: false },
    { name: "eva", step: 2, txt: "[2M] Foot Massage", img: "evaFoot", show: true, row: 0, col: 1, ach: false, major: false },
    { name: "eva", step: 3, txt: "[3M] Waiting on liquor", img: "spinBottle", show: true, row: 0, col: 2, ach: false, major: true },
    { name: "eva", step: 4, txt: "[4M] Toe Suck", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "eva", step: 5, txt: "[5M] Foot Job", img: "evaFootjob", show: true, row: 0, col: 3, ach: false, major: false },
    { name: "eva", step: 6, txt: "[6M] Rinse and repeat", img: "", show: false, row: 0, col: 4, ach: false, major: false },
    { name: "eva", step: 7, txt: "[7M] Truth or Dare", img: "", show: false, row: 0, col: 4, ach: false, major: true },
    { name: "eva", step: 8, txt: "[8M] Back In", img: "", show: false, row: 0, col: 4, ach: false, major: true },
    { name: "eva", step: 9, txt: "[9M] In bed confession", img: "", show: false, row: 0, col: 4, ach: false, major: true },
    { name: "eva", step: 10, txt: "[10M] Next meeting in room", img: "", show: false, row: 0, col: 4, ach: false, major: true },
    { name: "eva", step: 11, txt: "[11M] Had the sex - phone contacts", img: "", show: false, row: 0, col: 4, ach: false, major: true },
    { name: "eva", step: 200, txt: "[0F] Sissy Path", img: "", show: false, row: 0, col: 4, ach: false, major: true },
    { name: "eva", step: 201, txt: "[1F] Gave panties", img: "", show: false, row: 0, col: 4, ach: false, major: true },
    { name: "eva", step: 202, txt: "[2F] Lunch", img: "", show: false, row: 0, col: 4, ach: false, major: true },
    { name: "eva", step: 203, txt: "[3F] Doggy 1", img: "", show: false, row: 0, col: 4, ach: false, major: true },
    { name: "eva", step: 300, txt: "[Bad] End of the Eva line", img: "evaLolaBlow", show: true, row: 0, col: 4, ach: false, major: true },

    { name: "tina", step: 1, txt: "Meet Tina the slut", img: "const1", show: true, row: 0, col: 0, ach: false, major: false },
    { name: "tina", step: 5, txt: "She likes it when you look at her panties", img: "tina5", show: true, row: 0, col: 1, ach: false, major: false },
    { name: "tina", step: 10, txt: "She shaved her pussy just for you", img: "tina10", show: true, row: 0, col: 2, ach: false, major: false },
    { name: "tina", step: 15, txt: "Do you like my tits?", img: "tina15", show: true, row: 0, col: 3, ach: false, major: false },

    { name: "spanky", step: 0, txt: "met", img: "", show: false, row: 0, col: 0, ach: true, major: false },
    { name: "spanky", step: 1, txt: "after first meet", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "spanky", step: 2, txt: "selling", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "spanky", step: 3, txt: "Buy Hormone Pill", img: "", show: false, row: 0, col: 0, ach: false, major: false },

    { name: "cultjgirl", step: 1, txt: "Met first time", img: "", show: false, row: 0, col: 0, ach: false, major: false },

    { name: "cop", step: 0, txt: "Just met", img: "", show: false, row: 0, col: 0, ach: true, major: false },
    { name: "cop", step: 1, txt: "First Meeting", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "cop", step: 2, txt: "Will let you blow him", img: "", show: false, row: 0, col: 0, ach: false, major: false },

    { name: "jeffery", step: -2, txt: "Failed investiagion", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "jeffery", step: -1, txt: "Dimed out the waitresses", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "jeffery", step: 0, txt: "Nothing", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "jeffery", step: 1, txt: "Applied", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "jeffery", step: 2, txt: "Denied", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "jeffery", step: 3, txt: "Can work", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "jeffery", step: 4, txt: "NOT USED", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "jeffery", step: 5, txt: "Now with extra chastity", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "jeffery", step: 6, txt: "Before the choice", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "jeffery", step: 7, txt: "The choice has been made", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "jeffery", step: 8, txt: "Can work again.", img: "", show: false, row: 0, col: 0, ach: false, major: false },

    { name: "holly", step: -1, txt: "NARC!!!", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "holly", step: 0, txt: "Not met", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "holly", step: 1, txt: "Meet Holly", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "holly", step: 2, txt: "Second meeting complete", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "holly", step: 3, txt: "Didn't reveal their secret", img: "", show: false, row: 0, col: 0, ach: false, major: false },

    { name: "bimbo", step: 0, txt: "Haven't met", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "bimbo", step: 1, txt: "Visit at home", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "bimbo", step: 2, txt: "Free use", img: "", show: false, row: 0, col: 0, ach: false, major: false },

    { name: "g", step: -4, txt: "Spar Chat", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "g", step: -3, txt: "Hip Thrusters", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "g", step: -2, txt: "Rope Game", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "g", step: -1, txt: "Back Gym", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "g", step: 0, txt: "Not met", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "g", step: 1, txt: "First met", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "g", step: 2, txt: "Exercise", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "g", step: 3, txt: "Training", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "g", step: 4, txt: "Spar", img: "", show: false, row: 0, col: 0, ach: false, major: false },

    { name: "treyvon", step: 0, txt: "nope", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "treyvon", step: 1, txt: "Tif Scene", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "treyvon", step: 2, txt: "Can enter apartment building", img: "", show: false, row: 0, col: 0, ach: false, major: false },

    { name: "kei", step: -2, txt: "Actually Blew everyone", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "kei", step: -1, txt: "Blowjobs for everyone", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "kei", step: 0, txt: "Meet at his home", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "kei", step: 5, txt: "Jada visited game", img: "", show: false, row: 0, col: 0, ach: false, major: false },

    { name: "jada", step: 0, txt: "Havent' met yet", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "jada", step: 1, txt: "Visited card game", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "jada", step: 2, txt: "First Pair of Panties", img: "", show: false, row: 0, col: 0, ach: false, major: false },

    { name: "tim", step: 1, txt: "Meet at pool", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "tim", step: 1, txt: "Flashed cock at pool.", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "tim", step: 2, txt: "First Pair of Panties", img: "", show: false, row: 0, col: 0, ach: false, major: false },

    { name: "daria", step: -2, txt: "Got the key", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "daria", step: -1, txt: "Plan", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "daria", step: 0, txt: "Not met yet. ", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "daria", step: 4, txt: "Received chisel ", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "daria", step: 5, txt: "3 some with bodhi", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "daria", step: 6, txt: "keys ", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "daria", step: 7, txt: "escape ", img: "", show: false, row: 0, col: 0, ach: false, major: false },

    { name: "chloe", step: 0, txt: "Meet at Zoey's or the Bar", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "chloe", step: 1, txt: "Tried to Fucked Chloe - chastity / small dick", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "chloe", step: 2, txt: "Fucked Chloe", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "chloe", step: 3, txt: "Zoey confrontation", img: "", show: false, row: 0, col: 0, ach: false, major: false },

    { name: "ubel", step: -1, txt: "First Nightly whipping", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "ubel", step: 0, txt: "Not met", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "ubel", step: 1, txt: "Escape", img: "", show: false, row: 0, col: 0, ach: false, major: false },
];

sc.setMax = function () {
    var i, j;
    var prevName = "";
    var prevEntry = -1;

    for (i = 0; i < sc.events.length; i++) {
        if (prevName !== sc.events[i].name) {
            for (j = 0; j < sc.char.length; j++) {
                if (prevName === sc.char[j].name) {
                    sc.char[j].max = prevEntry;
                    j = 99999;
                }
            }
            prevName = sc.events[i].name;
            prevEntry = -1;
        }
        if (prevEntry < sc.events[i].step)
            prevEntry = sc.events[i].step;
    }
    for (j = 0; j < sc.char.length; j++) {
        if (prevName === sc.char[j].name) {
            sc.char[j].max = prevEntry;
            j = 99999;
        }
    }

    //for (i = 0; i < sc.char.length; i++)
    //    sc.char[i].max = 0;

    //for (i = 0; i < sc.events.length; i++) {
    //    if (sc.events[i].name !== prevName) {
    //        for (j = 0; j < sc.char.length; j++) {
    //            if (sc.char[j].name === prevName) {
    //                sc.char[j].max = prevEntry;
    //                j = sc.char.length;
    //            }
    //        }
    //        prevName = sc.events[i].name;
    //        prevEntry = sc.events[i].step;
    //    }
    //    else if (prevEntry < sc.events[i].step && sc.events[i].show) {
    //        prevEntry = sc.events[i].step;
    //    }
    //}
    //for (j = 0; j < sc.char.length; j++) {
    //    if (sc.char[j].name === prevName) {
    //        sc.char[j].max = prevEntry;
    //        j = sc.char.length;
    //    }
    //}
};

sc.get = function (name) {
    for (var i = 0; i < sc.char.length; i++) {
        if (sc.char[i].name === name) {
            return sc.char[i];
        }
    }
    console.log("invalid character - " + name);
    return null;
};

sc.n = function (name) {
    return sc.get(name).display;
};

sc.getstep = function (name) {
    return sc.get(name).step;
};

sc.setstep = function (name, step) {
    var i, j;
    if (step > 0) {
        for (i = 0; i < sc.char.length; i++) {
            if (sc.char[i].name === name) {
                if (sc.char[i].step < step)
                    sc.char[i].step = step;
                break;
            }
        }
    }
    for (j = 0; j < sc.events.length; j++) {
        if (sc.events[j].step === step && sc.events[j].name === name) {
            sc.events[j].ach = true;
            j = 100000;
        }
    }
};

sc.setstepAll = function (name, step) {
    var i, j;
    if (step > 0) {
        for (i = 0; i < sc.char.length; i++) {
            if (sc.char[i].name === name) {
                if (sc.char[i].step < step)
                    sc.char[i].step = step;
                break;
            }
        }
    }
    for (j = 0; j < sc.events.length; j++) {
        if (sc.events[j].step > -1 && sc.events[j].step <= step && sc.events[j].name === name) {
            sc.events[j].ach = true;
        }
    }
};

sc.revokeStep = function(name, step){
    var i, j;
    for (j = 0; j < sc.events.length; j++) {
        if (sc.events[j].step === step && sc.events[j].name === name) {
            sc.events[j].ach = false;
            j = 100000;
        }
    }
};

sc.getEventIndex = function (name, step) {
    var retVal = -1;
    for (i = 0; i < sc.events.length; i++) {
        if (sc.events[i].name === name && sc.events[i].step === step) {
            retVal = i;
            break;
        }
    }
    return retVal;
};

sc.removeStep = function (name, step) {
    var i, j;
    var maxStep = 0;
    if (step < 1)
        alert("negative step : name " + name);

    for (j = 0; j < sc.events.length; j++) {
        if (sc.events[j].name === name) {
            if (sc.events[j].step === step)
                sc.events[j].ach = false;
            if (sc.events[j].ach && sc.events[j].step > maxStep)
                maxStep = sc.events[j].step;
        }
    }
    for (i = 0; i < sc.char.length; i++) {
        if (sc.char[i].name === name) {
            sc.char[i].step = maxStep;
            i = 10000;
        }
    }
};

sc.rollback = function (name, backTo) {
    var i;
    for (i = 0; i < sc.events.length; i++) {
        if (sc.events[i].name === name && sc.events[i].step > backTo && sc.events[i].step > -1)
            sc.events[i].ach = false;
    }
    for (i = 0; i < sc.char.length; i++) {
        if (sc.char[i].name === name) {
            sc.char[i].step = backTo;
            i = 99999;
        }
    }
};

sc.incstep = function (name, amount) {
    for (var i = 0; i < sc.char.length; i++) {
        if (sc.char[i].name === name) {
            sc.setstep(name, sc.char[i].step + amount);
            i = 100000;
        }
    }
};

sc.setcharname = function (entry, newName) {
    for (var i = 0; i < sc.char.length; i++) {
        if (sc.char[i].name === entry) {
            sc.char[i].display = newName;
            return;
        }
    }
    return;
};

sc.checkevent = function (name, step) {
    for (var i = 0; i < sc.events.length; i++) {
        if (sc.events[i].name === name && sc.events[i].step === step) {
            return sc.events[i].ach;
        }
    }
    return false;
};

/*
sc.buildIcons = function () {
    var counter = 0;
    var thisImg, thisName;
    $('#sc-fillQuest').remove();
    $.each(sc.char, function (i, v) {
        if (v.show) {
            thisImg = v.step >= v.max ? "c_" + v.image : v.image;
            thisName = v.display.length > 13 ? v.display.substring(0, 11) + '..' : v.display;
            thisName = v.step >= v.max ? thisName + "<br />COMPLETE" : thisName;
            $('#menu_parent').append('<img src="./images/phone/char/' + thisImg + '" style="position:absolute; ' + g.makeCss(218, 218, (130 + (218 * Math.floor(counter / 5.0))), (435 + (218 * (counter % 5)))) + '" data-name="' + v.name + '" class="sc-select sc-killMeeee" />');
            $('#menu_parent').append('<div class="phone-text sc-killMeeee" style="' + g.makeCss(218, 218, (285 + (218 * Math.floor(counter / 5.0))), (435 + (218 * (counter % 5)))) + '">' + thisName + '</div>');
            counter++;
        }
    });

    $('.sc-select').click(function () {
        var w, s;
        s = 150 * g.ratio;
        t = 10 * g.ratio;
        l = 20 * g.ratio; 1;
        var minor = 75 * g.ratio;
        var major = 100 * g.ratio;
        var topOffset = 500 * g.ratio;
        var leftOffset = 50 * g.ratio;
        var majorOffset = 25 * g.ratio;
        var umo;
        var name = $(this).data("name");
        $(".sc-killMeeee").remove();
        $('#menu_parent').append('<div id="sc-fillQuest" class="sc-killMeeee" style="position:absolute; ' + g.makeCss(904, 1118, 87, 406) + ' background:#333; overflow-x:auto;"></div>');

        for (var i = 0; i < sc.events.length; i++) {
            if (sc.events[i].name === name && sc.events[i].show) {
                var ti = sc.events[i].ach ? sc.events[i].img + ".png" : sc.events[i].img + "_g.png";
                w = sc.events[i].major ? major : minor;
                var title = sc.events[i].ach ? sc.events[i].txt : "Not Acheived";
                umo = sc.events[i].major ? majorOffset : 0;
                $('#sc-fillQuest').append('<img src="./images/quest/' + ti + '" style="' +
                    'height:' + w + 'px; ' +
                    'width:' + w + 'px; ' +
                    'top: ' + ((sc.events[i].row * s) + topOffset - umo) + 'px; ' +
                    'left:' + ((sc.events[i].col * s) + leftOffset - umo) + 'px; ' +
                    '" class="quest-eventIcon" title="' + title + ' "/>');
            }
        }
    });
};*/

sc.save = function () {
    var i;
    var retArra = {
        char: new Array(),
        events: new Array()
    };
    // { name: "me", display: "Me", image: "me.png", step: 0, show: true, setName: false },
    for (i = 0; i < sc.char.length; i++) {
        retArra.char.push({
            name: sc.char[i].name,
            step: sc.char[i].step,
            display: sc.char[i].display
        });
    }
    //{ name: "me", step: 0, txt: "Wake up buttercup.", img: "bed", show: true, row: 0, col: 0, ach: false, major: false },
    for (i = 0; i < sc.events.length; i++) {
        retArra.events.push({
            name: sc.events[i].name,
            step: sc.events[i].step,
            ach: sc.events[i].ach
        });
    }
    
    return retArra;
};

sc.load = function (ra) {
    var i, j;

    for (i = 0; i < ra.char.length; i++) {
        for (j = 0; j < sc.char.length; j++) {
            if (ra.char[i].name === sc.char[j].name) {
                sc.char[j].step = ra.char[i].step;

                if (typeof ra.char[i].display !== "undefined")
                    sc.char[j].display = ra.char[i].display;
                j = 100000;
            }
        }
    }

    for (i = 0; i < ra.events.length; i++) {
        for (j = 0; j < sc.events.length; j++) {
            if (ra.events[i].name === sc.events[j].name && ra.events[i].step === sc.events[j].step) {
                sc.events[j].ach = ra.events[i].ach;
                j = 100000;
            }
        }
    }
    
    sc.setMax();
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
sc.mother = function () {
    var r = 0;
    var hour = g.gethourdecimal();
    var thisDay = g.dt.getDay();

    if ((thisDay === 1 || thisDay === 6) && hour.between(8, 9))
        r = 12;
    else if (thisDay === 0 || thisDay === 6) {
        if (hour.between(0, 7))
            r = 14; //mother
        else if (hour.between(7, 8))
            r = 15; //kitchen
        else if (hour.between(8, 9))
            r = 25; //kitchen
        else if (hour.between(9, 17))
            r = 26; //kitchen
        else if (hour.between(17, 18))
            r = 15; //living
        else if (hour.between(18, 19))
            r = 25; //living
        else 
            r = 14; //bedroom
    }
    else {
        if (hour.between(0, 7))
            r = 14;
        else if (hour.between(7, 8))
            r = 25;  //bathroom
        else if (hour.between(8, 9))
            r = 15;  //kitchen
        else if (hour.between(9, 17))
            r = 350;
        else if (hour.between(17, 18))
            r = 15; //diningRoom
        else if (hour.between(18, 20))
            r = 26; //diningRoom
        else
            r = 14;
    }
    
    return { roomID: r, thisRoom: g.roomID === r };
};

sc.sister = function () {
    var r = 0;
    var hour = g.gethourdecimal();
    switch (g.dt.getDay()) {
        case 0: //sunday
            if (hour.between(0, 7))
                r = 13;
            else if (hour.between(7, 10))
                r = 12;
            if (hour.between(10, 24))
                r = 13;
            break;
        case 1: //monday
            if (hour.between(0, 7))
                r = 13;
            else if (hour.between(15, 17))
                r = 901;
            else if (hour.between(17, 18))
                r = 25;
            else if (hour.between(18, 24))//room night
                r = 13;
            break;
        case 2: //tuesday
            if (hour.between(0, 7))
                r = 13;
            else if (hour.between(7, 9)) //morning shower
                r = 12;
            else if (hour.between(15, 17))
                r = 901;
            else if (hour.between(17, 19))//Dining Room
                r = 25;
            else if (hour.between(18, 24))
                r = 13;
            break;
        case 3: //wednesday
            if (hour.between(0, 7))
                r = 13;
            else if (hour.between(7, 8))
                r = 15;
            else if (hour.between(15, 17))
                r = 901;
            else if (hour.between(17, 24))//room night
                r = 13;
            break;
        case 4: //thursday
            if (hour.between(0, 7))
                r = 13;
            else if (hour.between(7, 9))//morning shower
                r = 12;
            else if (hour.between(15, 17))
                r = 901;
            else if (hour.between(17, 19))//living room night
                r = 25;
            else if (hour.between(18, 24))
                r = 13;
            break;
        case 5: //friday
            if (hour.between(0, 10))
                r = 13;
            else if (hour.between(15, 17))
                r = 901;
            else if (hour.between(17, 24))//room night
                r = 13;
            break;
        case 6: //saturday
            if (hour.between(0, 7))
                r = 13;
            if (hour.between(7, 8))
                r = 25;
            else if (hour.between(8, 11))
                r = 13;
            else if (hour.between(12, 24)) //kitchen night
                r = 13;
            else
                r = 13;
            break;
    }
    return { roomID: r, thisRoom: g.roomID === r };
};



sc.cecilia = function () {
    var r = 0;
    var hour = g.gethourdecimal();
    switch (g.dt.getDay()) {
        case 1: //monday
        case 2: //tuesday
        case 3: //wednesday
        case 4: //thursday
        case 5: //friday
            if (hour.between(7, 18))
                r = 203;
            break;
    }
    return { roomID: r, thisRoom: g.roomID === r };
};

sc.zoey = function () {
    var r = 0;
    var hour = g.gethourdecimal();
    switch (g.dt.getDay()) {
        case 0: //Sunday
            if (hour.between(0, 12))
                r = 502;
            else if (hour.between(12, 16))
                r = 501;
            else
                r = 99999;
            break;
        case 1: //monday
            if (hour.between(0, 4))
                r = 99999;
            else if (hour.between(4, 12))
                r = 502;
            else
                r = 501;
            break;
        case 2: //tuesday
        case 3: //wednesday
        case 4: //thursday
            if (hour.between(0, 12))
                r = 502;
            else
                r = 501;
            break;
        case 5: //friday
            if (hour.between(0, 12))
                r = 502;
            else if (hour.between(12, 16))
                r = 501;
            else
                r = 99999;
            break;
        case 6://saturday
            if (hour.between(0, 4))
                r = 99999;
            else if (hour.between(4, 12))
                r = 502;
            else if (hour.between(12, 16))
                r = 501;
            else
                r = 99999;
            break;
    }
    return { roomID: r, thisRoom: g.roomID === r };

};

sc.tiffany = function () {
    var r = 0;
    var hour = g.gethourdecimal();
    switch (g.dt.getDay()) {
        case 0: //sunday
            if (hour.between(0, 7))
                r = 54; //Room
            else if (hour.between(7, 10))
                r = 54; //bathroom
            else if (hour.between(10, 18))
                r = 1001; //unk
            else if (hour.between(18, 24))
                r = 54; //Room
            break;
        case 1: //monday
            if (hour.between(0, 7))
                r = 54; //room
            if (hour.between(7, 8))
                r = -1; //room
            else if (hour.between(8, 17))
                r = 650;  //toystore
            else if (hour.between(17, 19))
                r = 57; //living room
            else if (hour.between(19, 24))
                r = 54;
            break;
        case 2: //tuesday
            if (hour.between(0, 7))
                r = 54; //room
            if (hour.between(7, 8))
                r = 53; //bathroom
            else if (hour.between(8, 17))
                r = 650;  //toystore
            else if (hour.between(17, 19))
                r = 57; //living room
            else if (hour.between(19, 24))
                r = 54;
            break;
        case 3: //wednesday
            if (hour.between(0, 7))
                r = 54; //room
            if (hour.between(7, 8))
                r = 53; //room
            else if (hour.between(8, 17))
                r = 650;  //toystore
            else if (hour.between(17, 19))
                r = 57; //living room
            else if (hour.between(19, 24))
                r = 54;
            break;
        case 4: //thursday
            if (hour.between(0, 7))
                r = 54; //room
            if (hour.between(7, 8))
                r = -1; //room
            else if (hour.between(8, 17))
                r = 650;  //toystore
            else if (hour.between(17, 19))
                r = 57; //living room
            else if (hour.between(19, 24))
                r = 54;
            break;
        case 5: //friday
            if (hour.between(0, 7))
                r = 54; //room
            if (hour.between(7, 8))
                r = 53; //room
            else if (hour.between(8, 17))
                r = 650;  //toystore
            else if (hour.between(17, 19))
                r = 57; //living room
            else if (hour.between(19, 24))
                r = 54;
            break;
        case 6: //saturday
            if (hour.between(0, 7))
                r = 54; //room
            else if (hour.between(7, 18))
                r = 650;  //toystore
            else if (hour.between(18, 17))
                r = 50; //living room
            else if (hour.between(17, 24))
                r = 54;
            break;
    }
    return { roomID: r, thisRoom: g.roomID === r };
};


sc.candy = function () {
    var r = 0;
    var hour = g.gethourdecimal();
    switch (g.dt.getDay()) {
        case 0: //sunday
            if (hour.between(0, 7))
                r = 53; //Room
            else if (hour.between(7, 10))
                r = 54; //bathroom
            else if (hour.between(10, 18))
                r = 1001; //unk
            else if (hour.between(18, 24))
                r = 53; //Room
            break;
        case 1: //monday
            if (hour.between(0, 7))
                r = 53; //room
            if (hour.between(7, 8))
                r = 53; //room
            else if (hour.between(8, 17))
                r = 650;  //toystore
            else if (hour.between(17, 19))
                r = 57; //living room
            else if (hour.between(19, 24))
                r = 53;
            break;
        case 2: //tuesday
            if (hour.between(0, 7))
                r = -1; //room
            if (hour.between(7, 8))
                r = 53; //room
            else if (hour.between(8, 17))
                r = 650;  //toystore
            else if (hour.between(17, 19))
                r = 57; //living room
            else if (hour.between(19, 24))
                r = 53;
            break;
        case 3: //wednesday
            if (hour.between(0, 7))
                r = 53; //room
            if (hour.between(7, 8))
                r = 53; //room
            else if (hour.between(8, 17))
                r = 650;  //toystore
            else if (hour.between(17, 19))
                r = 57; //living room
            else if (hour.between(19, 24))
                r = 53;
            break;
        case 4: //thursday
            if (hour.between(0, 7))
                r = 53; //room
            if (hour.between(7, 8))
                r = 53; //room
            else if (hour.between(8, 17))
                r = 650;  //toystore
            else if (hour.between(17, 19))
                r = 57; //living room
            else if (hour.between(19, 24))
                r = 53;
            break;
        case 5: //friday
            if (hour.between(0, 7))
                r = 53; //room
            if (hour.between(7, 8))
                r = -1; //room
            else if (hour.between(8, 17))
                r = 650;  //toystore
            else if (hour.between(17, 19))
                r = 57; //living room
            else if (hour.between(19, 24))
                r = 53;
            break;
        case 6: //saturday
            if (hour.between(0, 7))
                r = 53; //room
            else if (hour.between(7, 18))
                r = 650;  //toystore
            else if (hour.between(18, 17))
                r = 50; //living room
            else if (hour.between(17, 24))
                r = 53;
            break;
    }
    return { roomID: r, thisRoom: g.roomID === r };
};


sc.bimbo = function () {
    var r = 0;
    var hour = g.gethourdecimal();
    switch (g.dt.getDay()) {
        case 1: //monday
        case 2: //tuesday
        case 3: //wednesday
        case 4: //thursday
        case 5: //friday
            if (hour.between(0, 6))
                r = 76; //room
            else if (hour.between(15, 21))
                r = 77; //living room
            else if (hour.between(22, 24))
                r = 76;
            else
                r = 700;
            break;
        default: //Saturday / Sunday
            if (hour.between(0, 6))
                r = 76; //room
            else if (hour.between(12, 16))
                r = 77; //living room
            else if (hour.between(22, 24))
                r = 76;
            else
                r = 700;
            break;
    }
    return { roomID: r, thisRoom: g.roomID === r };
};

sc.swimgirl = function () {
    var r = 0;
    switch (g.dt.getDay()) {
        case 0: //monday
        case 5: //tuesday
        case 6: //wednesday
        case 7: //thursday
            r = 901;
            break;
    }
    return { roomID: r, thisRoom: g.roomID === r };
};

sc.c = function (name) {
    var retName = "UNK";
    $.each(g.char, function (i, v) {
        if (v.name === name) {
            retName = v.display;
            return true;
        }
    });
    return retName;
};

sc.step = function (name) {
    var retStep = -1;
    for (var i = 0; i < sc.char.length; i++) {
        if (sc.char[i].name === name) {
            retStep = sc.char[i].step;
            i = 100000;
        }
    }
    return retStep;
};

sc.phone = function (char) {
    var step = sc.getstep(char);
    var clist;
    var nophone = [950, 951];
    if (nophone.includes(g.roomID)) {
        g.popUpNotice("No reciption here. Damn!");
    }
    else {
        switch (char) {
            case "eva":
                if (step < 3) {
                    clist = [
                        { s: "me", t: "Hay what's up?" },
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
                        { s: "eva", t: "I'm going to give you a big suprise... just wait for it!" },
                        { s: "me", t: "What suprise?" },
                        { s: "eva", t: "If I tell you, it won't a suprise!" },
                    ];
                    sc.phoneChat(clist, char);
                }
                else if (step === 10 || step === 11) {
                    if (g.get("evaDayEvent")) {
                        clist = [
                            { s: "me", t: "Hay, been thinking about my dick?" },
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
                            { s: "me", t: "Hay, been thinking about my dick?" },
                            { s: "eva", t: "Oh yeah! Text me when you're in your room!" },
                        ];
                        sc.phoneChat(clist, char);
                    }

                }
                else if (step === 30) {
                    clist = [
                        { s: "me", t: "Soooo what's up?" },
                        { s: "eva", t: "Hayyyy buddy. I like you, i just need a manly cock" },
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
                        { s: "me", t: "Hay " + sc.n("lola") + "!" },
                        { s: "lola", t: "You should come by our room! We like hanging out with you." },
                    ], char);
                else if (step < 4)
                    sc.phoneChat([
                        { s: "me", t: "Soooo what's up?" },
                        { s: "lola", t: "I'm so sore from swimming, I could use a massage." },
                    ], char);
                else if (step < 4)
                    sc.phoneChat([
                        { s: "me", t: "Hay " + sc.n("lola") },
                        { s: "lola", t: "Hay " + sc.n("eva") + " wanted to play a game. Could you get some alcohol?" },
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
                        { s: "me", t: "Hay " + sc.n("lola") + " it was sooo good to see you! " },
                        { s: "lola", t: "It really is. I really missed you." },
                    ], char);
                else if (step === 10)
                    sc.phoneChat([
                        { s: "me", t: "Hay " + sc.n("lola") + " it was sooo good to see you! " },
                        { s: "lola", t: "It really is. I really missed you." },
                    ], char);
                else if (step === 11) {
                    if (g.roomID === 450) {
                        if (g.isNight()) {
                            sc.phoneChat([
                                { s: "me", t: "Hay " + sc.n("lola") + " I'm at the park " },
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
                            { s: "me", t: "Hay " + sc.n("lola") + " we should talk " },
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
                    sc.phoneChat([
                        { s: "me", t: "In Development" },
                    ], char);
                }
                break;
            case "missy":

                sc.phoneChat([
                    { s: "me", t: "Hay " + sc.n("lola") + " it was sooo good to see you! " },
                    { s: "missy", t: "In progress" },
                ], char);

                break;
            case "zoey":
                sc.phoneChat([
                    { s: "me", t: "Hay " + sc.n("lola") + " it was sooo good to see you! " },
                    { s: "zoey", t: "In progress" },
                ], char);
                break;
        }
    }
};

//{ name: "lola", step: -2, txt: "Lola Swim after kick out", img: "", show: false, row: 0, col: 0, ach: false, major: false },
//{ name: "lola", step: -1, txt: "Panty theif caught", img: "", show: false, row: 0, col: 0, ach: false, major: false },
//{ name: "lola", step: 0, txt: "Ask for a book", img: "", show: false, row: 0, col: 0, ach: false, major: false },
//{ name: "lola", step: 1, txt: "Rubbed back with clothes", img: "", show: false, row: 0, col: 0, ach: false, major: false },
//{ name: "lola", step: 2, txt: "Rubbed back shirt pulled up", img: "lolaMass", show: true, row: 0, col: 0, ach: false, major: false },
//{ name: "lola", step: 3, txt: "Rubbed back topless", img: "", show: false, row: 0, col: 0, ach: false, major: false },
//{ name: "lola", step: 4, txt: "Waiting on liquor", img: "spinBottle", show: true, row: 0, col: 1, ach: false, major: true },
//{ name: "lola", step: 5, txt: "Rubbed back in panties", img: "", show: false, row: 0, col: 0, ach: false, major: false },
//{ name: "lola", step: 6, txt: "Rubbed back spread pussy", img: "lolaMass1", show: true, row: 0, col: 2, ach: false, major: false },
//{ name: "lola", step: 7, txt: "Rinse and repeat", img: "", show: false, row: 0, col: 3, ach: false, major: false },
//{ name: "lola", step: 8, txt: "Truth or Dare", img: "evaLolaBlow", show: true, row: 0, col: 3, ach: false, major: true },
//{ name: "lola", step: 9, txt: "Back In", img: "evaLolaBlow", show: true, row: 0, col: 3, ach: false, major: true },
//{ name: "lola", step: 10, txt: "Bed time confession", img: "evaLolaBlow", show: true, row: 0, col: 3, ach: false, major: true },
//{ name: "lola", step: 11, txt: "UNK", img: "evaLolaBlow", show: true, row: 0, col: 3, ach: false, major: true },

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