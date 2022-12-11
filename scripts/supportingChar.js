
var sc = {};

//g.char MUST BE LOWERCASE!!!!!!!!!!
sc.char = [
    { name: "me", display: "Alex", image: "me.png", step: 0, max: 0, show: false, setName: false, phone: -1 },
    { name: "landlord", display: "Landlady", image: "mom.png", step: 0, max: 0, show: true, setName: true, phone: 0 },
    { name: "el", display: "Co-Tenants", image: "lolaEva.png", step: 0, max: 0, show: false, setName: false, phone: -1 },
    { name: "lola", display: "Lola", image: "lola.png", step: 0, max: 0, show: true, setName: true, phone: 0 },
    { name: "eva", display: "Eva", image: "eva.png", step: 0, max: 0, show: true, setName: true, phone: 0 },
    { name: "missy", display: "Missy", image: "missy.png", step: 0, max: 0, show: true, setName: true, phone: 2 },
    { name: "p", display: "Princess", image: "princess.png", step: 0, max: 0, show: false, setName: true, phone: 0 },
    { name: "black", display: "Ms. Black", image: "black.png", step: 0, max: 0, show: false, setName: true, phone: 0 },
    { name: "zoey", display: "Zoey", image: "zoey.png", step: 0, max: 0, show: false, setName: true, phone: 0 },
    { name: "stormy", display: "Stormy", image: "stormy.png", step: 0, max: 0, show: false, setName: true, phone: -1 },
    { name: "chloe", display: "Chloé", image: "chloe.png", step: 0, max: 0, show: true, setName: false, phone: -1 },
    { name: "tina", display: "Tina", image: "tina.png", step: 0, max: 0, show: false, setName: true, phone: 12 },
    { name: "construction", display: "The Bossman", image: "bossman.png", step: 0, max: 0, show: false, setName: true, phone: -1 },
    { name: "govlady", display: "Ms. Pixie", image: "govlady.png", step: 0, max: 0, show: false, setName: false, phone: -1 },
    { name: "chad", display: "Chad", image: "brad.png", step: 0, max: 0, show: false, setName: true, phone: -1 },
    { name: "g", display: "Gertrude", image: "gertrude.png", step: 0, max: 0, show: false, setName: true, phone: -1 },
    { name: "cecilia", display: "Cecilia", image: "cecilia.png", step: 0, max: 0, show: false, setName: true, phone: -1 },
    { name: "tiffany", display: "Tiffany", image: "tiffany.png", step: 0, max: 0, show: false, setName: true, phone: -1 },
    { name: "candy", display: "Candy", image: "candy.png", step: 0, max: 0, show: false, setName: true, phone: -1 },
    { name: "charlie", display: "Charlie", image: "charlie.png", step: 0, max: 0, show: false, setName: false, phone: -1 },
    { name: "cop", display: "Cop", image: "cop.png", step: 0, max: 0, show: false, setName: false, phone: -1 },
    { name: "cop2", display: "Cop", image: "cop2.png", step: 0, max: 0, show: false, setName: false, phone: -1 },
    { name: "jada", display: "Jada", image: "jada.png", step: 0, max: 0, show: false, setName: true, phone: -1 },
    { name: "red", display: "Red", image: "red.png", step: 0, max: 0, show: false, setName: false, phone: -1 },
    { name: "spanky", display: "Spanky", image: "spanky.png", step: 0, max: 0, show: false, setName: false, phone: -1 },
    { name: "keaton", display: "Keaton", image: "keaton.png", step: 0, max: 0, show: false, setName: false, phone: -1 },
    { name: "envy", display: "Envy", image: "envy.png", step: 0, max: 0, show: false, setName: true, phone: -1 },
    { name: "rachel", display: "Rachel", image: "rachel.png", step: 0, max: 0, show: false, setName: true, phone: -1 },
    { name: "kinsey", display: "Kinsey", image: "kinsey.png", step: 0, max: 0, show: false, setName: false, phone: -1 },
    { name: "horse", display: "Jimmy Dingler", image: "horse.png", step: 0, max: 0, show: false, setName: true, phone: -1 },

    { name: "fightman", display: "Bad Motherfucker", image: "fightMan.png", step: 0, max: 0, show: false, setName: false, phone: -1 },
    { name: "fightgirl", display: "Bad Motherfucker", image: "fightGirl.png", step: 0, max: 0, show: false, setName: false, phone: -1 },
    { name: "fighttrans", display: "Bad Motherfucker", image: "fightTrans.png", step: 0, max: 0, show: false, setName: false, phone: -1 },
    { name: "cult", display: "Cult", image: "cult.png", step: 0, max: 0, show: false, setName: false, phone: -1 },
    { name: "cultboy", display: "Cult", image: "cult_j_b.png", step: 0, max: 0, show: false, setName: false, phone: -1 },
    { name: "cultjgirl", display: "Cult", image: "cult_j_g.png", step: 0, max: 0, show: false, setName: false, phone: -1 },
    { name: "priapus", display: "Priapus", image: "Priapus.png", step: 0, max: 0, show: false, setName: false, phone: -1 },
    { name: "daria", display: "Morgan", image: "daria.png", step: 0, max: 0, show: false, setName: true, phone: -1 },
    { name: "jen", display: "Jen", image: "jen.png", step: 0, max: 0, show: false, setName: false, phone: -1 },
    { name: "ubel", display: "Ubel", image: "ubel.png", step: 0, max: 0, show: false, setName: false, phone: -1 },

    { name: "river", display: "River", image: "river.png", step: 0, max: 0, show: false, true: false, phone: -1 },
    { name: "jeffery", display: "Jeffery", image: "jeffery.png", step: 0, max: 0, show: false, setName: false, phone: -1 },
    { name: "holly", display: "Holly", image: "holly.png", step: 0, max: 0, show: false, setName: false, phone: -1 },
    { name: "molly", display: "Molly", image: "molly.png", step: 0, max: 0, show: false, setName: false, phone: -1 },
    { name: "dolly", display: "Dolly", image: "dolly.png", step: 0, max: 0, show: false, setName: false, phone: -1 },
    { name: "bimbo", display: "Bimbo", image: "bimbo.png", step: 0, max: 0, show: false, setName: true, phone: -1 },
    { name: "bigguy", display: "Dick", image: "bigman.png", step: 0, max: 0, show: true, setName: false, phone: -1 },
    { name: "treyvon", display: "Treyvon", image: "treyvon.png", step: 0, max: 0, show: false, setName: false, phone: -1 },
    { name: "jimmy", display: "Jimmy", image: "jimmy.png", step: 0, max: 0, show: false, setName: false, phone: -1 },
    { name: "kei", display: "Kei", image: "kei.png", step: 0, max: 0, show: false, setName: false, phone: -1 },
    { name: "ralph", display: "Ralph", image: "ralph.png", step: 0, max: 0, show: false, setName: false, phone: -1 },

    { name: "jones", display: "Mr. Jones", image: "jones.png", step: 0, max: 0, show: true, setName: false, phone: -1 },
    { name: "butler", display: "The Butler", image: "butler.png", step: 0, max: 0, show: false, setName: false, phone: -1 },

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

    { name: "queen", display: "Forest Queen", image: "queen.png", step: 0, max: 0, show: false, setName: false, phone: -1 },

    { name: "random", display: "Random", image: "rand.png", step: 0, max: 0, show: false, setName: false, phone: -1 },
    { name: "thinking", display: "Thinking", image: "thinking.png", step: 0, max: 0, show: false, setName: false, phone: -1 },
];

sc.events = [
    { name: "me", step: -4, txt: "First time in wardrobe", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [] },
    { name: "me", step: -3, txt: "Can wear lipstick", img: "lipstick", show: true, row: 1, col: 2, ach: false, major: false, m: [] },
    { name: "me", step: -2, txt: "You're ok with wearing panties", img: "panties", show: true, row: 1, col: 1, ach: false, major: false, m: [] }, //hired at missy
    { name: "me", step: -1, txt: "You can shave your body", img: "razor", show: true, row: 1, col: 0, ach: false, major: false, m: [] }, //hired at missy
    { name: "me", step: 0, txt: "[0] Wake up buttercup.", img: "bed", show: false, row: 0, col: 0, ach: true, major: false, m: [] },
    { name: "me", step: 1, txt: "[1] Get a job and start paying rent", img: "money", show: true, row: 0, col: 0, ach: false, major: false, m: [] },
    { name: "me", step: 2, txt: "[2] Pay rent each Sunday", img: "landlord", show: false, row: 0, col: -1, ach: false, major: false, m: [] }, //hired at missy
    { name: "me", step: 3, txt: "[3] Homeless.. Find a Place to Sleep", img: "homeless", show: true, row: 0, col: 1, ach: false, major: false, m: [] }, //TorD complete kicked out of house
    { name: "me", step: 7, txt: "[4] Shopping at the mall! - ignore this", img: "homeless", show: false, row: 0, col: 1, ach: false, major: false, m: [] }, //TorD complete kicked out of house

    { name: "landlord", step: -10, txt: "Caught at the whore house", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [] },
    { name: "landlord", step: -9, txt: "Caught naked in the house and took giant dildo", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [] },
    { name: "landlord", step: -8, txt: "Em bare ass", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [] },
    { name: "landlord", step: -7, txt: "First Day at the Sperm Bank", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [] },
    { name: "landlord", step: -6, txt: "Back in!", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [] },
    { name: "landlord", step: -5, txt: "Doctor donated", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [] },
    { name: "landlord", step: -4, txt: "Doctor Sperm", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [] },
    { name: "landlord", step: -3, txt: "Can donate sperm", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [] },
    { name: "landlord", step: -2, txt: "Caught with Panties", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [] },
    { name: "landlord", step: -1, txt: "Kicked out", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [] },
    { name: "landlord", step: 0, txt: "[M] Get a job. Go to your Computer in your room. Apply and interview for a job. Chat with her about working. ", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [16] },
    { name: "landlord", step: 1, txt: "[M] Talk to her about her job. ", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [16] },
    { name: "landlord", step: 2, txt: "[M] Chat about sperm theif. ", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [16] },
    { name: "landlord", step: 3, txt: "[M] Extra Money! Get key to her bedroom.", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [16] },
    { name: "landlord", step: 4, txt: "[M] Chat about working at the sperm store.", img: "llkey", show: true, row: 0, col: 0, ach: false, major: false, m: [16] },
    { name: "landlord", step: 5, txt: "[M] Talk about her boyfried.", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [16] },
    { name: "landlord", step: 6, txt: "[M] Talk to her on the couch during the day or early evening. Eat that ass!", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [16] },
    { name: "landlord", step: 7, txt: "[M] Talk to her on the couch during the day or early evening. Lesson learned.", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [16] },
    { name: "landlord", step: 8, txt: "[M] On the couch - Pee pee slap.", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [16] },
    { name: "landlord", step: 9, txt: "[M] Visit her in her room between 8PM and 10PM. It only happens after you've been kicked out due to playing truth or dare with the girls. ", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [16] },
    { name: "landlord", step: 10, txt: "[M] Visit her in her room between 8PM and 10PM. ", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [16] },
    { name: "landlord", step: 11, txt: "[M] Progress Lola and Evas story line. Then talk to her in her room between 8PM to 10PM.", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [16] },
    { name: "landlord", step: 12, txt: "[M] End of masculine route. Find the bonus content.", img: "evaLolaBlow", show: false, row: 0, col: 3, ach: false, major: true, m: [16] },
    { name: "landlord", step: 200, txt: "[F] Sissy! Get caught at home crossdressing. Purchase a polka dot dress at he mall for Sunday outing.", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [16, 400] },
    { name: "landlord", step: 201, txt: "[F] Talk to her in the living room for your suprise guest.", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [16] },
    { name: "landlord", step: 202, txt: "[F] No new content", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [16] },

    { name: "bigguy", step: 0, txt: "Get caught crossdressing at home. He comes to visit Friday thru Sunday at night. ", img: "", show: true, row: 0, col: 0, ach: false, major: false, m: [16] },
    { name: "bigguy", step: 1, txt: "Keep pestering them", img: "", show: true, row: 0, col: 0, ach: false, major: false, m: [16] },
    { name: "bigguy", step: 2, txt: "Keep pestering them", img: "", show: true, row: 0, col: 0, ach: false, major: false, m: [16] },
    { name: "bigguy", step: 3, txt: "Keep pestering them - This time with cum reward!", img: "", show: true, row: 0, col: 0, ach: false, major: false, m: [16] },
    { name: "bigguy", step: 4, txt: "Pester them. This time with more cum! ", img: "", show: true, row: 0, col: 0, ach: false, major: false, m: [16] },
    { name: "bigguy", step: 5, txt: "Sleep at home - suprise wake up.", img: "", show: true, row: 0, col: 0, ach: false, major: false, m: [16] },
    { name: "bigguy", step: 6, txt: "No new events. ", img: "", show: true, row: 0, col: 0, ach: false, major: false, m: [16] },

    { name: "zoey", step: -3, txt: "First Bar", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [] },
    { name: "zoey", step: -2, txt: "Can Sleep Over", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [] },
    { name: "zoey", step: -1, txt: "First Sleep Over", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [] },
    { name: "zoey", step: 0, txt: "Go to her house and play some video games after noon. ", img: "zoeyGame", show: false, row: 0, col: 0, ach: false, major: false, m: [500] },
    { name: "zoey", step: 1, txt: "Visit her again at her house.", img: "zoeyGame", show: true, row: 0, col: 0, ach: false, major: false, m: [500] },
    { name: "zoey", step: 2, txt: "Visit her house and meet Chloé.", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [500] },
    { name: "zoey", step: 3, txt: "Watch her eat out Chloé.", img: "zoeyLick", show: true, row: 0, col: 1, ach: false, major: false, m: [500] },
    { name: "zoey", step: 4, txt: "Talk to Zoey about her problems with Chloé.", img: "", show: false, row: 0, col: 1, ach: false, major: false, m: [500] },
    { name: "zoey", step: 5, txt: "Catch Chloé  Cheating (Only if your support your best friend)", img: "bff", show: true, row: 0, col: 2, ach: false, major: false, m: [500] },
    { name: "zoey", step: 6, txt: "Sleep at Zoey's on five differnt nights.", img: "bff", show: true, row: 0, col: 2, ach: false, major: false, m: [500] },
    { name: "zoey", step: 10, txt: "Sleep once more to see her night visitor", img: "", show: false, row: 0, col: 3, ach: false, major: false, m: [500] },
    { name: "zoey", step: 11, txt: "Raise her love to max. You can help her clean up at the bar or play video games at her home. Once you're " +
        "there wear a chasity device and buy the handcuffs from the Toy Store and help her clean her bar.", img: "zoeyEat", show: true, row: 0, col: 3, ach: false, major: false, m: [525] },
    { name: "zoey", step: 12, txt: "Keep helping her clean until her love meter is full. Get toy and cuffs - Voyer", img: "zoeyEat", show: false, row: 0, col: 3, ach: false, major: false, m: [525] },
    { name: "zoey", step: 13, txt: "Eat her pussy after you finish cleaning up.", img: "zoeyEat", show: false, row: 0, col: 3, ach: false, major: false, m: [500] },
    { name: "zoey", step: 14, txt: "Relationship - no new content", img: "zoeyEat", show: false, row: 0, col: 3, ach: false, major: false, m: [500] },

    { name: "zoey", step: 300, txt: "No help, endless loop bad END", img: "bff", show: true, row: 0, col: 2, ach: false, major: false, m: [500] },
    { name: "zoey", step: 301, txt: "Caught cheating - Zoey bad End", img: "bff", show: true, row: 0, col: 2, ach: false, major: false, m: [500] },

    { name: "missy", step: -2, txt: "Got Red Room bonus once", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [] },
    { name: "missy", step: -1, txt: "Get the Tea", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [] },
    { name: "missy", step: 0, txt: "On your computer in your room click the Jobs button and apply to Missy's Private Investigation. .", img: "pc", show: false, row: 0, col: 0, ach: false, major: false, m: [16] },
    { name: "missy", step: 1, txt: "Get Private Investigator's license  and interview.", img: "pi_lic", show: true, row: 0, col: 0, ach: false, major: false, m: [203, 910] },
    { name: "missy", step: 2, txt: "Report a Missy's with a button up shirt, black dress pants, black socks, and black shoes. These are purchased at the mall", img: "suit", show: true, row: 0, col: 1, ach: false, major: false, m: [400, 203] },
    { name: "missy", step: 3, txt: "Finish cleaning bathroom", img: "sponge", show: true, row: 0, col: 2, ach: false, major: false, m: [203] },
    { name: "missy", step: 4, txt: "Report back in full suit before 10:00", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [203] },
    { name: "missy", step: 5, txt: "Complete First file organize", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [203] },
    { name: "missy", step: 6, txt: "Wear piggy nose to work and lose weight. You can run in the park or work out at the gym.", img: "piggy", show: true, row: 0, col: 3, ach: false, major: false, m: [203] },
    { name: "missy", step: 7, txt: "Report to the Toy Store before 10:00 AM", img: "tiffany", show: true, row: 0, col: 4, ach: false, major: true, m: [650] },
    { name: "missy", step: 8, txt: "Report back on the investigation.", img: "tiffanyMad", show: true, row: 0, col: 5, ach: false, major: false, m: [203] },
    { name: "missy", step: 9, txt: "Report for work in a pair of panties. You can find some in the girl's room. Sneak in from the backyard.", img: "panties", show: true, row: 0, col: 6, ach: false, major: false, m: [29, 203] },
    { name: "missy", step: 10, txt: "Sissy School. Take the elevator to the basement. ", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [203] },
    { name: "missy", step: 100, txt: "Kidnapped by the cult. You need to free her!", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [203] },

    { name: "p", step: 0, txt: "Sissy School Rules Day 1", img: "pc", show: false, row: 0, col: 0, ach: false, major: false, m: [203] },
    { name: "p", step: 1, txt: "How to sit - get clothes", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [203] },
    { name: "p", step: 2, txt: "How to sit", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [203] },

    { name: "cecilia", step: 0, txt: "Met", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [203] },
    { name: "cecilia", step: 1, txt: "Tied Up", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [203] },

    { name: "tiffany", step: -9, txt: "Shopping", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [] },
    { name: "tiffany", step: -8, txt: "Give Box", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [] },
    { name: "tiffany", step: -7, txt: "Pink Pussy First Time", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [] },
    { name: "tiffany", step: -6, txt: "Return Trip", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [] },
    { name: "tiffany", step: -5, txt: "Peeked during show", img: "dildo", show: true, row: 1, col: 1, ach: false, major: true, m: [] },
    { name: "tiffany", step: -4, txt: "Caught 'em", img: "nap", show: true, row: -1, col: 1, ach: false, major: true, m: [] },
    { name: "tiffany", step: -3, txt: "Be a little bitch", img: "tifNoFuck", show: true, row: 0, col: 2, ach: false, major: false, m: [] },
    { name: "tiffany", step: -2, txt: "Cum Inside", img: "tifCumInside", show: true, row: 1, col: 2, ach: false, major: false, m: [] },
    { name: "tiffany", step: -1, txt: "Cum Back", img: "tifCumBack", show: true, row: -1, col: 2, ach: false, major: false, m: [] },
    { name: "tiffany", step: 0, txt: "You can see her at the toy store, but you will need to wait for the case given my Missy to progress with her.", img: "", show: false, row: 0, col: 0, ach: true, major: false, m: [650] },
    { name: "tiffany", step: 1, txt: "Investigate Cum Caper at The Toy Store.", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [650] },
    { name: "tiffany", step: 2, txt: "Continue to work at The Toy Store.", img: "cum", show: true, row: 0, col: 0, ach: false, major: false, m: [650] },
    { name: "tiffany", step: 3, txt: "Go back to The Toy Store and continue working.", img: "dildo", show: false, row: 1, col: 1, ach: false, major: true, m: [650] },
    { name: "tiffany", step: 4, txt: "Continue the investiagion...", img: "nap", show: false, row: -1, col: 1, ach: false, major: true, m: [650] },
    { name: "tiffany", step: 5, txt: "You'll need to do the crossdressing event at Missy's Sissy School to continue with her", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [400] },
    { name: "tiffany", step: 6, txt: "Visit Tiffany's home for the first time", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [650] },
    { name: "tiffany", step: 10, txt: "UNK", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [650] },
    //{ name: "tiffany", step: 11, txt: "Box of clothing given", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [650] },
    //{ name: "tiffany", step: 12, txt: "Meet at her house", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [650] },
    //{ name: "tiffany", step: 13, txt: "Meet at park", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [650] },
    //{ name: "tiffany", step: 14, txt: "Brought him home", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [650] },
    //{ name: "tiffany", step: 15, txt: "First time home", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [650] },
    { name: "tiffany", step: 16, txt: "First In House", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [50] },
    { name: "tiffany", step: 16, txt: "Watch Tiffany masturbate", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [50] },
    { name: "tiffany", step: 17, txt: "Masturbate like a girl", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [50] },

    { name: "candy", step: -1, txt: "Flash in bathroom", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [] },
    { name: "candy", step: 0, txt: "Need to do crossdressing event", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [50] },
    { name: "candy", step: 1, txt: "Transformation", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [50] },
    { name: "candy", step: 2, txt: "Ate your own cum!", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [50] },
    { name: "candy", step: 3, txt: "Ate Brad's Cum", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [50] },

    { name: "chad", step: -2, txt: "Give Chad a picture of Lola's tits", img: "chad_pic", show: true, row: 1, col: 0, ach: false, major: false, m: [] },
    { name: "chad", step: -1, txt: "Pay $500", img: "money", show: true, row: -1, col: 0, ach: false, major: false, m: [] },
    { name: "chad", step: 0, txt: "[0] Meet Chat", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [550] },
    { name: "chad", step: 1, txt: "[1] Either pay $500 or get a picture of her tits", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [550] },
    { name: "chad", step: 2, txt: "[2] Got Gym pass", img: "gymPass", show: true, row: 0, col: 0, ach: false, major: false, m: [550] },

    { name: "construction", step: 1, txt: "Interview at the construction site.", img: "const1", show: true, row: 0, col: 0, ach: false, major: false, m: [100] },
    { name: "construction", step: 2, txt: "Work construction. - Need to arrive before 9:00 AM in a t-shirt and jeans. ", img: "sweep", show: true, row: 0, col: 1, ach: false, major: false, m: [100] },

    { name: "lola", step: -5, txt: "Caught doing sissy stuff", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [] },
    { name: "lola", step: -4, txt: "Just play", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [] },
    { name: "lola", step: -3, txt: "Professed Love", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [] },
    { name: "lola", step: -2, txt: "Lola Swim after kick out", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [] },
    { name: "lola", step: -1, txt: "Panty theif caught", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [] },
    { name: "lola", step: 0, txt: "[M] Visit her in her room at your house. Typically she's there after 5PM. Talk to both of them. ", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [16] },
    { name: "lola", step: 1, txt: "[M] Rub her back with her clothes on.", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [16] },
    { name: "lola", step: 2, txt: "[M] Pull her shirt up and rub her back.", img: "lolaMass", show: true, row: 0, col: 0, ach: false, major: false, m: [16] },
    { name: "lola", step: 3, txt: "[M] Topless back rub.", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [16] },
    { name: "lola", step: 4, txt: "[M] Get some wine from the convenience store.", img: "spinBottle", show: true, row: 0, col: 1, ach: false, major: true, m: [404] },
    { name: "lola", step: 5, txt: "[M] Massage in her panties.", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [16] },
    { name: "lola", step: 6, txt: "[M] Massage and play with her pussy.", img: "lolaMass1", show: true, row: 0, col: 2, ach: false, major: false, m: [350] },
    { name: "lola", step: 7, txt: "[M] Truth or Dare!", img: "", show: false, row: 0, col: 3, ach: false, major: false, m: [16] },
    { name: "lola", step: 8, txt: "[M] Get back into the house. Visit the Sperm Store. ", img: "evaLolaBlow", show: false, row: 0, col: 3, ach: false, major: true, m: [350] },
    { name: "lola", step: 9, txt: "[M] Welcoming in the house.", img: "evaLolaBlow", show: false, row: 0, col: 3, ach: false, major: true, m: [16] },
    { name: "lola", step: 10, txt: "[M] In bed confession. She'll visit you if you sleep in your bed. ", img: "evaLolaBlow", show: false, row: 0, col: 3, ach: false, major: true, m: [16] },
    { name: "lola", step: 11, txt: "[M] Text her in the park.", img: "evaLolaBlow", show: false, row: 0, col: 3, ach: false, major: true, m: [450] },
    { name: "lola", step: 12, txt: "[M] Text her in the park again. ", img: "evaLolaBlow", show: false, row: 0, col: 3, ach: false, major: true, m: [450] },
    { name: "lola", step: 13, txt: "[M] Progress Eva's storyline. You'll get a suprise when you wake up at home.", img: "evaLolaBlow", show: false, row: 0, col: 3, ach: false, major: true, m: [16] },
    { name: "lola", step: 14, txt: "[M] Progress Landlord's storyline. Then talk to her", img: "evaLolaBlow", show: false, row: 0, col: 3, ach: false, major: true, m: [16] },
    { name: "lola", step: 15, txt: "[M] End of masculine route. Find the bonus content.", img: "evaLolaBlow", show: false, row: 0, col: 3, ach: false, major: true, m: [16] },
    { name: "lola", step: 200, txt: "[F] Sissy! Get caught at home crossdressing. Then talk to them in their room.", img: "evaLolaBlow", show: false, row: 0, col: 3, ach: false, major: true, m: [16] },
    { name: "lola", step: 201, txt: "[F] Visit them while crossdressing.", img: "evaLolaBlow", show: false, row: 0, col: 3, ach: false, major: true, m: [16] },
    { name: "lola", step: 202, txt: "[F] Give her a massages till your relationship meter is full. No new events", img: "evaLolaBlow", show: false, row: 0, col: 3, ach: false, major: true, m: [16] },
    { name: "lola", step: 203, txt: "[F] no new events.", img: "evaLolaBlow", show: false, row: 0, col: 3, ach: false, major: true, m: [16] },

    { name: "eva", step: -1, txt: "Caught peeking on shower", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [] },
    { name: "eva", step: 0, txt: "[M] Visit her in her room at your house. Typically she's there after 5PM. Offer her your math book.", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [16] },
    { name: "eva", step: 1, txt: "[M] She'll visit you in your room in the morning to borrow your math text book.", img: "mathBook", show: true, row: 0, col: 0, ach: false, major: false, m: [16] },
    { name: "eva", step: 2, txt: "[M] Massage her feet in her room.", img: "evaFoot", show: true, row: 0, col: 1, ach: false, major: false, m: [16] },
    { name: "eva", step: 3, txt: "[M] Get some wine from the convenience store.", img: "spinBottle", show: true, row: 0, col: 2, ach: false, major: true, m: [404] },
    { name: "eva", step: 4, txt: "[M] Suck her toes in her room.", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [16] },
    { name: "eva", step: 5, txt: "[M] Suprise gift for you in her room.", img: "evaFootjob", show: true, row: 0, col: 3, ach: false, major: false, m: [16] },
    { name: "eva", step: 6, txt: "[M] Truth or Dare!", img: "", show: false, row: 0, col: 4, ach: false, major: false, m: [16] },
    { name: "eva", step: 7, txt: "[M] Get back into the house. Visit the Sperm Store. ", img: "", show: false, row: 0, col: 4, ach: false, major: true, m: [350] },
    { name: "eva", step: 8, txt: "[M] Welcoming in the house.", img: "", show: false, row: 0, col: 4, ach: false, major: true, m: [16] },
    { name: "eva", step: 9, txt: "[M] In bed confession. She'll visit you if you sleep in your bed. ", img: "", show: false, row: 0, col: 4, ach: false, major: true, m: [16] },
    { name: "eva", step: 10, txt: "[M] Text her from your phone when you're in your bedroom.", img: "", show: false, row: 0, col: 4, ach: false, major: true, m: [16] },
    { name: "eva", step: 11, txt: "[M] Had the sex - phone contacts", img: "", show: false, row: 0, col: 4, ach: false, major: true, m: [16] },
    { name: "eva", step: 12, txt: "[M] Progress Lola's storyline. You'll get a suprise when you wake up at home.", img: "", show: false, row: 0, col: 4, ach: false, major: true, m: [16] },
    { name: "eva", step: 13, txt: "[M] Progress Landlord's storyline. Then talk to her.", img: "", show: false, row: 0, col: 4, ach: false, major: true, m: [16] },
    { name: "eva", step: 14, txt: "[M] End of masculine route. Find the bonus content.", img: "evaLolaBlow", show: false, row: 0, col: 3, ach: false, major: true, m: [16] },
    { name: "eva", step: 200, txt: "[F] Sissy! Get caught at home crossdressing. Then talk to them in their room.", img: "", show: false, row: 0, col: 4, ach: false, major: true, m: [16] },
    { name: "eva", step: 201, txt: "[F] Visit them while crossdressing.", img: "", show: false, row: 0, col: 4, ach: false, major: true, m: [16] },
    { name: "eva", step: 202, txt: "[F] Visit her in her room. Once your relationship meter is full touch her pussy instead of licking her feet.", img: "", show: false, row: 0, col: 4, ach: false, major: true, m: [16] },
    { name: "eva", step: 203, txt: "[F] Wear a collar and cage and meet her in the library. [Hint] There's an ID in the girl's locker room at the pool. ", img: "", show: false, row: 0, col: 4, ach: false, major: true, m: [900] },
    { name: "eva", step: 204, txt: "[F] No new events ", img: "", show: false, row: 0, col: 4, ach: false, major: true, m: [900] },
    { name: "eva", step: 300, txt: "[Bad] End of the Eva line", img: "evaLolaBlow", show: true, row: 0, col: 4, ach: false, major: true, m: [16] },

    { name: "tina", step: 1, txt: "Meet Tina the slut", img: "const1", show: true, row: 0, col: 0, ach: false, major: false, m: [100] },
    { name: "tina", step: 5, txt: "She likes it when you look at her panties", img: "tina5", show: true, row: 0, col: 1, ach: false, major: false, m: [100] },
    { name: "tina", step: 10, txt: "She shaved her pussy just for you", img: "tina10", show: true, row: 0, col: 2, ach: false, major: false, m: [100] },
    { name: "tina", step: 15, txt: "Do you like my tits?", img: "tina15", show: true, row: 0, col: 3, ach: false, major: false, m: [100] },

    { name: "envy", step: 0, txt: "Meet her", img: "", show: false, row: 0, col: 0, ach: true, major: false, m: [300] },
    { name: "envy", step: 1, txt: "Watch the breakup", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [300] },
    { name: "envy", step: 2, txt: "Get to know her", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [300] },
    { name: "envy", step: 3, txt: "Bring some chips for movie night", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [300] },


    { name: "spanky", step: -1, txt: "Hypno vids", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [404] },
    { name: "spanky", step: 0, txt: "met", img: "", show: false, row: 0, col: 0, ach: true, major: false, m: [404] },
    { name: "spanky", step: 1, txt: "after first meet", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [404] },
    { name: "spanky", step: 2, txt: "selling", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [250] },
    { name: "spanky", step: 3, txt: "Buy Hormone Pill", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [404] },

    { name: "cultjgirl", step: 1, txt: "Met first time", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [] },

    { name: "cop", step: 0, txt: "Just met", img: "", show: false, row: 0, col: 0, ach: true, major: false, m: [450] },
    { name: "cop", step: 1, txt: "First Meeting", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [450] },
    { name: "cop", step: 2, txt: "Will let you blow him", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [450] },

    { name: "jeffery", step: -2, txt: "Failed investiagion", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [] },
    { name: "jeffery", step: -1, txt: "Dimed out the waitresses", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [] },
    { name: "jeffery", step: 0, txt: "Nothing", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [] },
    { name: "jeffery", step: 1, txt: "Applied", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [250] },
    { name: "jeffery", step: 2, txt: "Denied", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [250] },
    { name: "jeffery", step: 3, txt: "Can work", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [203] },
    { name: "jeffery", step: 4, txt: "NOT USED", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [250] },
    { name: "jeffery", step: 5, txt: "Now with extra chastity", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [250] },
    { name: "jeffery", step: 6, txt: "Before the choice", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [250] },
    { name: "jeffery", step: 7, txt: "The choice has been made", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [250] },
    { name: "jeffery", step: 8, txt: "Can work again.", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [250] },

    { name: "holly", step: -1, txt: "NARC!!!", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [250] },
    { name: "holly", step: 0, txt: "Not met", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [250] },
    { name: "holly", step: 1, txt: "Meet Holly", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [250] },
    { name: "holly", step: 2, txt: "Second meeting complete", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [250] },
    { name: "holly", step: 3, txt: "Didn't reveal their secret", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [250] },

    { name: "bimbo", step: 0, txt: "Haven't met", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [450] },
    { name: "bimbo", step: 1, txt: "Visit at home", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [75] },
    { name: "bimbo", step: 2, txt: "Free use", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [75] },

    { name: "g", step: -4, txt: "Spar Chat", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [] },
    { name: "g", step: -3, txt: "Hip Thrusters", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [] },
    { name: "g", step: -2, txt: "Rope Game", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [] },
    { name: "g", step: -1, txt: "Back Gym", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [] },
    { name: "g", step: 0, txt: "Not met", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [550] },
    { name: "g", step: 1, txt: "First met", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [550] },
    { name: "g", step: 2, txt: "Exercise", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [550] },
    { name: "g", step: 3, txt: "Training", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [550] },
    { name: "g", step: 4, txt: "Spar", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [550] },

    { name: "treyvon", step: 0, txt: "nope", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [] },
    { name: "treyvon", step: 1, txt: "Tif Scene", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [] },
    { name: "treyvon", step: 2, txt: "Can enter apartment building", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [] },

    { name: "kei", step: -2, txt: "Actually Blew everyone", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [] },
    { name: "kei", step: -1, txt: "Blowjobs for everyone", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [] },
    { name: "kei", step: 0, txt: "Meet at his home", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [] },
    { name: "kei", step: 5, txt: "Jada visited game", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [] },

    { name: "jada", step: 0, txt: "Havent' met yet", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [50] },
    { name: "jada", step: 1, txt: "Visited card game", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [50] },
    { name: "jada", step: 2, txt: "First Pair of Panties", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [50] },

    { name: "tim", step: 1, txt: "Meet at pool", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [901] },
    { name: "tim", step: 1, txt: "Flashed cock at pool.", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [901] },
    { name: "tim", step: 2, txt: "First Pair of Panties", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [725] },

    { name: "daria", step: -2, txt: "Got the key", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [] },
    { name: "daria", step: -1, txt: "Plan", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [] },
    { name: "daria", step: 0, txt: "Not met yet. ", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [950] },
    { name: "daria", step: 4, txt: "Received chisel ", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [950] },
    { name: "daria", step: 5, txt: "3 some with bodhi", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [950] },
    { name: "daria", step: 6, txt: "keys ", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [950] },
    { name: "daria", step: 7, txt: "escape ", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [950] },

    { name: "chloe", step: -1, txt: "Tied up and fucked at the pink room", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [500] },
    { name: "chloe", step: 0, txt: "Meet at Zoey's or the Bar. If you fuck her at the bar you'll get the bad end for Zoey.", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [500] },
    { name: "chloe", step: 1, txt: "Tried to Fucked Chloe - chastity / small dick", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [725] },
    { name: "chloe", step: 2, txt: "Fucked Chloe", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [725] },
    { name: "chloe", step: 3, txt: "Zoey confrontation", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [500] },

    { name: "jones", step: 0, txt: "Complete the fashion show at the sissy school", img: "", show: true, row: 0, col: 0, ach: false, major: false, m: [150] },
    { name: "jones", step: 1, txt: "Clean his house and his cock", img: "", show: true, row: 0, col: 0, ach: false, major: false, m: [150] },
    { name: "jones", step: 2, txt: "Next Event - Not complete", img: "", show: true, row: 0, col: 0, ach: false, major: false, m: [150] },

    { name: "rachel", step: 0, txt: "Not yet met", img: "", show: true, row: 0, col: 0, ach: false, major: false, m: [150] },
    { name: "rachel", step: 1, txt: "Need to get bigger boobs for the milking. ", img: "", show: true, row: 0, col: 0, ach: false, major: false, m: [150] },
    { name: "rachel", step: 2, txt: "You can get milked now. ", img: "", show: true, row: 0, col: 0, ach: false, major: false, m: [150] },

    { name: "ubel", step: -1, txt: "First Nightly whipping", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [] },
    { name: "ubel", step: 0, txt: "Not met", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [950] },
    { name: "ubel", step: 1, txt: "Escape", img: "", show: false, row: 0, col: 0, ach: false, major: false, m: [950] },
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
    if (name === g.walk)
        char.makeWalk();
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
    else if (thisDay === 3 || thisDay === 4) {
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
            r = 25; //diningRoom
        else if (hour.between(20, 22))
            r = 26; //diningRoom
        else
            r = 14;
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
            else if (hour.between(20, 22))
                r = 26;
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
            else if (hour.between(20, 22))
                r = 26;
            else if (hour.between(14, 24))
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
    var step
    if (char === "zoey1")
        step = 1;
    else
        step = sc.getstep(char);
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
                            room450.btnclick("lolaPark12");
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
                break;
            case "missy":
                sc.phoneChat([
                    { s: "me", t: "Hay! " },
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
                    { s: "me", t: "I can guess. She suprised me and tied me up. Took the picture of it to make you mad. " },
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