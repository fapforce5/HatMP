
var sc = {};

//g.char MUST BE LOWERCASE!!!!!!!!!!
sc.char = [
    { name: "me", display: "Alex", image: "me.png", step: 0, max: 0, show: true, setName: false, phone: -1 },
    { name: "landlord", display: "Land Lord", image: "mom.png", step: 0, max: 0, show: true, setName: true, phone: 0 },
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
    { name: "govlady", display: "The clerk", image: "govlady.png", step: 0, max: 0, show: false, setName: false, phone: -1 },
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
    { name: "me", step: 0, txt: "Wake up buttercup.", img: "bed", show: false, row: 0, col: 0, ach: true, major: false },
    { name: "me", step: 1, txt: "Get a job and start paying rent", img: "money", show: true, row: 0, col: 0, ach: false, major: false },
    { name: "me", step: 2, txt: "Pay rent each Sunday", img: "landlord", show: false, row: 0, col: -1, ach: false, major: false }, //hired at missy
    { name: "me", step: 3, txt: "Homeless.. Find a Place to Sleep", img: "homeless", show: true, row: 0, col: 1, ach: false, major: false }, //TorD complete kicked out of house
    { name: "me", step: 7, txt: "Shopping at the mall!", img: "homeless", show: false, row: 0, col: 1, ach: false, major: false }, //TorD complete kicked out of house
    
    { name: "landlord", step: -6, txt: "Back in!", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "landlord", step: -5, txt: "Doctor donated", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "landlord", step: -4, txt: "Doctor Sperm", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "landlord", step: -3, txt: "Can donate sperm", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "landlord", step: -2, txt: "Caught with Panties", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "landlord", step: -1, txt: "Kicked out", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "landlord", step: 1, txt: "Chat about job", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "landlord", step: 2, txt: "Chat about job next day", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "landlord", step: 3, txt: "Chat about theif", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "landlord", step: 4, txt: "Get bedroom key and make bed each morning.", img: "llkey", show: true, row: 0, col: 0, ach: false, major: false },
    { name: "landlord", step: 5, txt: "Kicked out", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "landlord", step: 6, txt: "Can Work", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "landlord", step: 7, txt: "Ate that ass", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "landlord", step: 8, txt: "Dick Slap Rerun", img: "", show: false, row: 0, col: 0, ach: false, major: false },

    { name: "landlord", step: 9, txt: "First day", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "landlord", step: 15, txt: "Work Complete - Invited back", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "landlord", step: 16, txt: "Back In", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "landlord", step: 200, txt: "Sissy Path", img: "", show: false, row: 0, col: 0, ach: false, major: false },

    { name: "bigguy", step: 0, txt: "Not met", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "bigguy", step: 1, txt: "First Meeting", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "bigguy", step: 2, txt: "Second Meeting", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "bigguy", step: 3, txt: "Third Meeting", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "bigguy", step: 4, txt: "Cum licker", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "bigguy", step: 5, txt: "Eat all the cum - both", img: "", show: false, row: 0, col: 0, ach: false, major: false },

    { name: "zoey", step: -2, txt: "Can Sleep Over", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "zoey", step: -1, txt: "First meet at bar", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "zoey", step: 0, txt: "Play some video games. ", img: "zoeyGame", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "zoey", step: 1, txt: "Define Relationship ", img: "zoeyGame", show: true, row: 0, col: 0, ach: false, major: false },
    { name: "zoey", step: 2, txt: "Meet Chloé", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "zoey", step: 3, txt: "Eat Chloé", img: "zoeyLick", show: true, row: 0, col: 1, ach: false, major: false },
    { name: "zoey", step: 4, txt: "Talk to Zoey about Chloé", img: "", show: false, row: 0, col: 1, ach: false, major: false },
    { name: "zoey", step: 5, txt: "Chloé  Cheating", img: "bff", show: true, row: 0, col: 2, ach: false, major: false },
    { name: "zoey", step: 6, txt: "sleep repeat", img: "bff", show: true, row: 0, col: 2, ach: false, major: false },
    { name: "zoey", step: 10, txt: "Night visitor", img: "", show: false, row: 0, col: 3, ach: false, major: false },
    { name: "zoey", step: 12, txt: "Night visitor end -- need new", img: "zoeyEat", show: true, row: 0, col: 3, ach: false, major: false },

    { name: "zoey", step: 18, txt: "Ready for kick out", img: "", show: true, row: 0, col: 3, ach: false, major: false },
    { name: "zoey", step: 19, txt: "3 days", img: "", show: false, row: 0, col: 4, ach: false, major: false },
    { name: "zoey", step: 23, txt: "Need some space", img: "zoeyLock", show: true, row: 0, col: 4, ach: false, major: false },
    { name: "zoey", step: 24, txt: "transformation", img: "", show: false, row: 0, col: 4, ach: false, major: false },

    { name: "zoey", step: 300, txt: "No help, endless loop", img: "bff", show: true, row: 0, col: 2, ach: false, major: false },
    { name: "zoey", step: 301, txt: "Caught cheating on Zoey", img: "bff", show: true, row: 0, col: 2, ach: false, major: false },

    { name: "missy", step: -2, txt: "Got Red Room bonus once", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "missy", step: -1, txt: "Get the Tea", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "missy", step: 0, txt: "Not applied yet.", img: "pc", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "missy", step: 1, txt: "Get Private Investigator's license and interview.", img: "pi_lic", show: true, row: 0, col: 0, ach: false, major: false },
    { name: "missy", step: 2, txt: "Report for first day on job with a suit, black socks, and black shoes.", img: "suit", show: true, row: 0, col: 1, ach: false, major: false },
    { name: "missy", step: 3, txt: "Finish cleaning bathroom", img: "sponge", show: true, row: 0, col: 2, ach: false, major: false },
    { name: "missy", step: 4, txt: "Woship her beautiful feet", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "missy", step: 5, txt: "Complete First file organize", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "missy", step: 6, txt: "Wear piggy nose to work and lose weight.", img: "piggy", show: true, row: 0, col: 3, ach: false, major: false },
    { name: "missy", step: 7, txt: "Report to the Toy Store before 10:00 AM", img: "tiffany", show: true, row: 0, col: 4, ach: false, major: true },
    { name: "missy", step: 8, txt: "Report your failings.", img: "tiffanyMad", show: true, row: 0, col: 5, ach: false, major: false },
    { name: "missy", step: 9, txt: "Report for work in a pair of panties", img: "panties", show: true, row: 0, col: 6, ach: false, major: false },
    { name: "missy", step: 10, txt: "First Day of Sissy School", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    //{ name: "missy", step: 11, txt: "First lesson on obedience", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    //{ name: "missy", step: 12, txt: "Failed lesson - if leave office", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    //{ name: "missy", step: 13, txt: "Dildo in mouth", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    //{ name: "missy", step: 14, txt: "Exlain sissy school", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    //{ name: "missy", step: 15, txt: "Explain", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    //{ name: "missy", step: 11, txt: "Hypno Time", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    //{ name: "missy", step: 12, txt: "Start wearing girly clothes", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    //{ name: "missy", step: 13, txt: "Took the pussy juice cock", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    //{ name: "missy", step: 14, txt: "Peed self end", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    //{ name: "missy", step: 15, txt: "Displayed Sissy Asshole", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    //{ name: "missy", step: 16, txt: "Not used", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    //{ name: "missy", step: 17, txt: "Naked Beaver Details", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    //{ name: "missy", step: 18, txt: "Work at Naked Beaver to Missy's", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    //{ name: "missy", step: 19, txt: "Work at Naked Beaver to Missy's - post chastity", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    //{ name: "missy", step: 20, txt: "Report to Missy - post Naked Beaver", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    //{ name: "missy", step: 21, txt: "Post Naked Beaver Report", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    //{ name: "missy", step: 24, txt: "Begin Red Room", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    //{ name: "missy", step: 25, txt: "All Challenges Complete?", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    //{ name: "missy", step: 26, txt: "Red Challenge Complete", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    //{ name: "missy", step: 27, txt: "Receive Sewer Mission", img: "", show: false, row: 0, col: 0, ach: false, major: false },

    { name: "p", step: 0, txt: "Sissy School Rules Day 1", img: "pc", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "p", step: 1, txt: "How to sit - get clothes", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "p", step: 2, txt: "How to sit", img: "", show: false, row: 0, col: 0, ach: false, major: false },

    { name: "cecilia", step: 0, txt: "Met", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "cecilia", step: 1, txt: "Tied Up", img: "", show: false, row: 0, col: 0, ach: false, major: false },

    { name: "tiffany", step: -9, txt: "Shopping", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "tiffany", step: -8, txt: "Give Box", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "tiffany", step: -7, txt: "Pink Pussy First Time", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "tiffany", step: -6, txt: "Return Trip", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "tiffany", step: -5, txt: "Peeked during show", img: "dildo", show: true, row: 1, col: 1, ach: false, major: true },
    { name: "tiffany", step: -4, txt: "Caught 'em", img: "nap", show: true, row: -1, col: 1, ach: false, major: true },
    { name: "tiffany", step: -3, txt: "Be a little bitch", img: "tifNoFuck", show: true, row: 0, col: 2, ach: false, major: false },
    { name: "tiffany", step: -2, txt: "Cum Inside", img: "tifCumInside", show: true, row: 1, col: 2, ach: false, major: false },
    { name: "tiffany", step: -1, txt: "Cum Back", img: "tifCumBack", show: true, row: -1, col: 2, ach: false, major: false },
    { name: "tiffany", step: 0, txt: "Meet Tiffany", img: "", show: false, row: 0, col: 0, ach: true, major: false },
    { name: "tiffany", step: 1, txt: "Work at The Toy Store to catch the Mad Pooper", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "tiffany", step: 2, txt: "Continue to work at The Toy Store to catch the Mad Pooper", img: "cum", show: true, row: 0, col: 0, ach: false, major: false },
    { name: "tiffany", step: 3, txt: "Pervert", img: "dildo", show: false, row: 1, col: 1, ach: false, major: true },
    { name: "tiffany", step: 4, txt: "Napper", img: "nap", show: false, row: -1, col: 1, ach: false, major: true },
    { name: "tiffany", step: 5, txt: "Kicked out of toy store", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "tiffany", step: 6, txt: "Home for the first time", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "tiffany", step: 10, txt: "UNK", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    //{ name: "tiffany", step: 11, txt: "Box of clothing given", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    //{ name: "tiffany", step: 12, txt: "Meet at her house", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    //{ name: "tiffany", step: 13, txt: "Meet at park", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    //{ name: "tiffany", step: 14, txt: "Brought him home", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    //{ name: "tiffany", step: 15, txt: "First time home", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "tiffany", step: 16, txt: "First In House", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "tiffany", step: 16, txt: "Watch masturbate", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "tiffany", step: 17, txt: "Masturbate like a girl", img: "", show: false, row: 0, col: 0, ach: false, major: false },

    { name: "candy", step: -1, txt: "Flash in bathroom", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "candy", step: 0, txt: "Begin Here", img: "", show: false, row: 0, col: 0, ach: true, major: false },
    { name: "candy", step: 1, txt: "Transformation", img: "", show: false, row: 0, col: 0, ach: true, major: false },
    { name: "candy", step: 2, txt: "Ate your own cum!", img: "", show: false, row: 0, col: 0, ach: true, major: false },
    { name: "candy", step: 3, txt: "Ate Brad's Cum", img: "", show: false, row: 0, col: 0, ach: true, major: false },

    { name: "chad", step: -2, txt: "Give Chad a picture of Lola's tits", img: "chad_pic", show: true, row: 1, col: 0, ach: false, major: false },
    { name: "chad", step: -1, txt: "Pay $500", img: "money", show: true, row: -1, col: 0, ach: false, major: false },
    { name: "chad", step: 0, txt: "Meet Chat", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "chad", step: 1, txt: "Either pay $500 or get a picture of her tits", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "chad", step: 2, txt: "Got Gym pass", img: "gymPass", show: true, row: 0, col: 0, ach: false, major: false },

    { name: "construction", step: 1, txt: "Interview at the construction site.", img: "const1", show: true, row: 0, col: 0, ach: false, major: false },
    { name: "construction", step: 2, txt: "Work construction. - Need to arrive before 9:00 AM in a t-shirt and jeans. ", img: "sweep", show: true, row: 0, col: 1, ach: false, major: false },

    { name: "lola", step: -5, txt: "Caught doing sissy stuff", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "lola", step: -4, txt: "Just play", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "lola", step: -3, txt: "Professed Love", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "lola", step: -2, txt: "Lola Swim after kick out", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "lola", step: -1, txt: "Panty theif caught", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "lola", step: 0, txt: "Ask for a book", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "lola", step: 1, txt: "Rubbed back with clothes", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "lola", step: 2, txt: "Rubbed back shirt pulled up", img: "lolaMass", show: true, row: 0, col: 0, ach: false, major: false },
    { name: "lola", step: 3, txt: "Rubbed back topless", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "lola", step: 4, txt: "Waiting on liquor", img: "spinBottle", show: true, row: 0, col: 1, ach: false, major: true },
    { name: "lola", step: 5, txt: "Rubbed back in panties", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "lola", step: 6, txt: "Rubbed back spread pussy", img: "lolaMass1", show: true, row: 0, col: 2, ach: false, major: false },
    { name: "lola", step: 7, txt: "Rinse and repeat", img: "", show: false, row: 0, col: 3, ach: false, major: false },
    { name: "lola", step: 8, txt: "Truth or Dare", img: "evaLolaBlow", show: false, row: 0, col: 3, ach: false, major: true },
    { name: "lola", step: 9, txt: "Back In", img: "evaLolaBlow", show: false, row: 0, col: 3, ach: false, major: true },
    { name: "lola", step: 10, txt: "Bed time confession", img: "evaLolaBlow", show: false, row: 0, col: 3, ach: false, major: true },
    { name: "lola", step: 11, txt: "Waiting on text", img: "evaLolaBlow", show: false, row: 0, col: 3, ach: false, major: true },
    { name: "lola", step: 12, txt: "Next - UNK", img: "evaLolaBlow", show: false, row: 0, col: 3, ach: false, major: true },
    { name: "lola", step: 200, txt: "Sissy Path", img: "evaLolaBlow", show: false, row: 0, col: 3, ach: false, major: true },
    { name: "lola", step: 201, txt: "Gave panties", img: "evaLolaBlow", show: false, row: 0, col: 3, ach: false, major: true },

    { name: "eva", step: -1, txt: "Caught peeking on shower", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "eva", step: 0, txt: "Ask for book", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "eva", step: 1, txt: "Borrow Math Text Book", img: "mathBook", show: true, row: 0, col: 0, ach: false, major: false },
    { name: "eva", step: 2, txt: "Foot Massage", img: "evaFoot", show: true, row: 0, col: 1, ach: false, major: false },
    { name: "eva", step: 3, txt: "Waiting on liquor", img: "spinBottle", show: true, row: 0, col: 2, ach: false, major: true },
    { name: "eva", step: 4, txt: "Toe Suck", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "eva", step: 5, txt: "Foot Job", img: "evaFootjob", show: true, row: 0, col: 3, ach: false, major: false },
    { name: "eva", step: 6, txt: "Rinse and repeat", img: "", show: false, row: 0, col: 4, ach: false, major: false },
    { name: "eva", step: 7, txt: "Truth or Dare", img: "evaLolaBlow", show: false, row: 0, col: 4, ach: false, major: true },
    { name: "eva", step: 8, txt: "Back In", img: "evaLolaBlow", show: false, row: 0, col: 4, ach: false, major: true },
    { name: "eva", step: 9, txt: "In bed confession", img: "evaLolaBlow", show: false, row: 0, col: 4, ach: false, major: true },
    { name: "eva", step: 10, txt: "Next meeting in room", img: "evaLolaBlow", show: false, row: 0, col: 4, ach: false, major: true },
    { name: "eva", step: 11, txt: "Had the sex - phone contacts", img: "evaLolaBlow", show: false, row: 0, col: 4, ach: false, major: true },
    { name: "eva", step: 200, txt: "Sissy Path", img: "evaLolaBlow", show: false, row: 0, col: 4, ach: false, major: true },
    { name: "eva", step: 201, txt: "Gave panties", img: "evaLolaBlow", show: false, row: 0, col: 4, ach: false, major: true },

    { name: "eva", step: 30, txt: "End of the Eva line", img: "evaLolaBlow", show: true, row: 0, col: 4, ach: false, major: true },

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

    { name: "kei", step: 5, txt: "Jada visited game", img: "", show: false, row: 0, col: 0, ach: false, major: false },

    { name: "jada", step: 1, txt: "Visited card game", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "jada", step: 2, txt: "First Pair of Panties", img: "", show: false, row: 0, col: 0, ach: false, major: false },

    { name: "tim", step: 1, txt: "Flashed cock at pool.", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "tim", step: 2, txt: "First Pair of Panties", img: "", show: false, row: 0, col: 0, ach: false, major: false },

    { name: "chloe", step: 1, txt: "Tried to Fucked Chloe - chastity / small dick", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "chloe", step: 2, txt: "Fucked Chloe", img: "", show: false, row: 0, col: 0, ach: false, major: false },
    { name: "chloe", step: 3, txt: "Zoey confrontation", img: "", show: false, row: 0, col: 0, ach: false, major: false },
];

sc.setMax = function () {
    var i, j;
    var prevName = "";
    var prevEntry = -1;

    for (i = 0; i < sc.char.length; i++)
        sc.char[i].max = 0;

    for (i = 0; i < sc.events.length; i++) {
        if (sc.events[i].name !== prevName) {
            for (j = 0; j < sc.char.length; j++) {
                if (sc.char[j].name === prevName) {
                    sc.char[j].max = prevEntry;
                    j = sc.char.length;
                }
            }
            prevName = sc.events[i].name;
            prevEntry = sc.events[i].step;
        }
        else if (prevEntry < sc.events[i].step && sc.events[i].show) {
            prevEntry = sc.events[i].step;
        }
    }
    for (j = 0; j < sc.char.length; j++) {
        if (sc.char[j].name === prevName) {
            sc.char[j].max = prevEntry;
            j = sc.char.length;
        }
    }
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
};

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
    switch (g.dt.getDay()) {
        case 0: //sunday
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
            else if (hour.between(19, 24))
                r = 14; //bedroom
            break;
        case 1: //monday
            if (hour.between(0, 7))
                r = 14;
            else if (hour.between(7, 8))
                r = 12;  //bathroom
            else if (hour.between(8, 9))
                r = 25;  //kitchen
            else if (hour.between(9, 17))
                r = 350;
            else if (hour.between(17, 18))
                r = 15; //diningRoom
            else if (hour.between(18, 22))
                r = 26; //diningRoom
            else if (hour.between(22, 24))
                r = 14;
            break; 
        case 2: //tuesday
            if (hour.between(0, 7))
                r = 14;
            else if (hour.between(7, 8))
                r = 25;  //bathroom
            else if (hour.between(9, 17))
                r = 350;
            else if (hour.between(17, 18))
                r = 15; //diningRoom
            else if (hour.between(18, 22))
                r = 26; //diningRoom
            else if (hour.between(22, 24))
                r = 14;
            break;
        case 3: //wednesday
            if (hour.between(0, 7))
                r = 14;
            else if (hour.between(7, 8))
                r = 25;  //bathroom
            else if (hour.between(9, 17))
                r = 350;
            else if (hour.between(17, 18))
                r = 15; //diningRoom
            else if (hour.between(18, 22))
                r = 26; //diningRoom
            else if (hour.between(22, 24))
                r = 14;
            break;
        case 4: //thursday
            if (hour.between(0, 7))
                r = 14;
            else if (hour.between(7, 8))
                r = 25;  //bathroom
            else if (hour.between(9, 17))
                r = 350;
            else if (hour.between(17, 18))
                r = 15; //diningRoom
            else if (hour.between(18, 22))
                r = 26; //diningRoom
            else if (hour.between(22, 24))
                r = 14;
            break;
        case 5: //friday
            if (hour.between(0, 7))
                r = 14;
            else if (hour.between(7, 8))
                r = 25;  //bathroom
            else if (hour.between(9, 17))
                r = 350;
            else if (hour.between(18, 19))
                r = 26; //diningRoom
            else if (hour.between(19, 24))
                r = 14;
            break;
        case 6: //saturday
            if (hour.between(0, 7))
                r = 14;
            else if (hour.between(7, 8))
                r = 12;  //bathroom
            else if (hour.between(8, 9))
                r = 15;  //bathroom
            else if (hour.between(9, 19))
                r = 26;  //bathroom
            else if (hour.between(19, 24))
                r = 14;  //kitchen
            break;
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
                r = 700
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
    var clist
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