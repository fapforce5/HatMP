var sc = {};
sc.char = new Array();
sc.charMission = new Array();

//g.char MUST BE LOWERCASE!!!!!!!!!!
sc.init = function () {
    sc.char = [
        { name: "mainstory", display: "Main Story", image: "main.png", step: 0, secret: 0, c: 0, l: 0, show: true, setName: false, phone: -1, p: false, hex: "#D3CBBE" },

        { name: "me", display: "Alex", image: "me.png", step: 0, secret: 0, c: 0, l: 0, show: true, setName: false, phone: -1, p: false, hex: "#D3CBBE" },

        { name: "landlord", display: "Landlady", image: "mom.png", step: 0, secret: 0, c: 0, l: 0, show: true, setName: true, phone: 0, p: true, hex: "#D3CBBE" },
        { name: "el", display: "Co-Tenant", image: "lolaEva.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: true, hex: "#D3CBBE" },
        { name: "lola", display: "Lola", image: "lola.png", step: 0, secret: 0, c: 0, l: 0, show: true, setName: true, phone: 0, p: true, hex: "#D3CBBE" },
        { name: "tom", display: "Tom", image: "tom.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: true, phone: 0, p: true, hex: "#D3CBBE" },
        { name: "eva", display: "Eva", image: "eva.png", step: 0, secret: 0, c: 0, l: 0, show: true, setName: true, phone: 0, p: true, hex: "#D3CBBE" },
        { name: "bigguy", display: "Dick", image: "bigman.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: false, hex: "#D3CBBE" },
        { name: "raven", display: "Raven", image: "raven.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: true, phone: -1, p: false, hex: "#D3CBBE" },

        { name: "missy", display: "Missy", image: "missy.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: true, phone: 2, p: true, hex: "#E993AD" },
        { name: "tudor", display: "Mr. Tudor", image: "tudor.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: true, phone: 2, p: true, hex: "#E993AD" },
        { name: "p", display: "Ms. Pussywinks", image: "princess.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: true, hex: "#E993AD" },
        { name: "martha", display: "Mistress Martha", image: "martha.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: true, hex: "#E993AD" },
        { name: "black", display: "Ms. Black", image: "black.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: true, phone: -1, p: false, hex: "#E993AD" },
        { name: "cecilia", display: "Cecilia", image: "cecilia.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: true, phone: -1, p: false, hex: "#E993AD" },

        { name: "philbert", display: "Philbert", image: "philbert.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: 0, p: true, hex: "#F7BECC" },
        { name: "sporty", display: "Sporty", image: "sporty.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: 0, p: true, hex: "#F7BECC" },

        { name: "zoey", display: "Zoey", image: "zoey.png", step: 0, secret: 0, c: 0, l: 0, show: true, setName: true, phone: 0, p: true, hex: "#373231" },
        { name: "stormy", display: "Stormy", image: "stormy.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: true, phone: -1, p: true, hex: "#373231" },
        { name: "chloe", display: "Chloé", image: "chloe.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: true, hex: "#373231" },
        { name: "elijah", display: "Elijah", image: "elijah.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: true, hex: "#373231" },
        { name: "keaton", display: "Keaton", image: "keaton.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: false, hex: "#373231" },
        { name: "poppy", display: "Poppy", image: "poppy.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: false, hex: "#373231" },
        { name: "orchid", display: "Orchid", image: "orchid.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: false, hex: "#373231" },
        { name: "juniper", display: "Juniper", image: "juniper.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: false, hex: "#373231" },

        { name: "janice", display: "Janice", image: "janice.png", step: 0, secret: 0, c: 0, l: 0, show: true, setName: true, phone: -1, p: true, hex: "#8B8BBA" },
        { name: "dog", display: "Cooper the Mythical Demon", image: "dog.png", step: 0, secret: 0, c: 0, l: 0, show: true, setName: true, phone: -1, p: true, hex: "#8B8BBA" },

        { name: "envy", display: "Envy", image: "envy.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: true, phone: -1, p: true, hex: "#7924C6" },

        { name: "tiffany", display: "Tiffany", image: "tiffany.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: true, phone: -1, p: true, hex: "#DC7C82" },
        { name: "candy", display: "Candy", image: "candy.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: true, phone: -1, p: true, hex: "#DC7C82" },
        { name: "charlie", display: "Charlie", image: "charlie.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: false, hex: "#DC7C82" },
        { name: "treyvon", display: "Treyvon", image: "treyvon.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: false, hex: "#DC7C82" },

        { name: "stacy", display: "Stacy", image: "stacy.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: false, hex: "#C50000" },
        { name: "courtney", display: "Courtney", image: "courtney.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: false, hex: "#C50000" },
        { name: "chuck", display: "Chuck", image: "chuck.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: false, hex: "#C50000" },
        { name: "utah", display: "Utah", image: "utah.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: false, hex: "#C50000" },
        { name: "football", display: "Player", image: "football.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: false, hex: "#C50000" },
        { name: "liam", display: "Liam", image: "liam.png", step: 0, secret: 100, c: 0, l: 0, show: false, setName: false, phone: -1, p: false, hex: "#C50000" },

        { name: "jimmy", display: "Jimmy", image: "jimmy.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: false, hex: "#84C8E8" },
        { name: "kei", display: "Kei", image: "kei.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: false, hex: "#84C8E8" },
        { name: "jada", display: "Jada", image: "jada.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: true, phone: -1, p: true, hex: "#84C8E8" },
        { name: "spanky", display: "Spanky", image: "spanky.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: false, hex: "#84C8E8" },

        { name: "ralph", display: "Ralph", image: "ralph.png", step: 0, secret: 0, c: 0, l: 0, show: true, setName: false, phone: -1, p: false, hex: "#33053C" },
        { name: "ralphsmom", display: "Ralph's Mom", image: "ralphsmom.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: false, hex: "#33053C" },
        { name: "ralphsdad", display: "Ralph's Dad", image: "ralphsdad.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: false, hex: "#33053C" },

        { name: "tina", display: "Tina", image: "tina.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: true, phone: 12, p: true, hex: "#F79F00" },
        { name: "construction", display: "The Bossman", image: "bossman.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: true, phone: -1, p: false, hex: "#F79F00" },
        { name: "river", display: "River", image: "river.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: false, hex: "#F79F00" },

        { name: "chad", display: "Chad", image: "brad.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: false, hex: "#007C00" },
        { name: "g", display: "Gertrude", image: "gertrude.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: true, phone: -1, p: true, hex: "#007C00" },

        { name: "jeffery", display: "Jeffery", image: "jeffery.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: false, hex: "#940000" },
        { name: "holly", display: "Holly", image: "holly.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: false, hex: "#940000" },
        { name: "molly", display: "Molly", image: "molly.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: false, hex: "#940000" },
        { name: "dolly", display: "Dolly", image: "dolly.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: false, hex: "#940000" },

        { name: "jones", display: "Mr. Jones", image: "jones.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: false, hex: "#56545E" },
        { name: "bitch", display: "Bitch Face", image: "bitch.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: false, hex: "#56545E" },
        { name: "chef", display: "Chef", image: "chef.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: false, hex: "#56545E" },

        { name: "rachel", display: "Rachel", image: "rachel.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: true, phone: -1, p: true, hex: "#531000" },
        { name: "security", display: "CUM Guard", image: "security.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: true, hex: "#531000" },
        { name: "kinsey", display: "Kinsey", image: "kinsey.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: true, hex: "#531000" },
        { name: "horse", display: "Jimmy Dingler", image: "horse.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: true, phone: -1, p: false, hex: "#531000" },
        { name: "lead", display: "Bessie", image: "lead.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: false, hex: "#531000" },

        { name: "cindy", display: "Cindy", image: "cindy.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: true, hex: "#4BE1D2" },
        { name: "tim", display: "Tim", image: "tim.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: false, hex: "#4BE1D2" },

        { name: "wyatt", display: "Agent Wyatt", image: "wyatt.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: false, hex: "#0100DA" },
        { name: "cop", display: "Big Cop", image: "cop.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: false, hex: "#0100DA" },
        { name: "cop2", display: "Idiot Cop", image: "cop2.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: false, hex: "#0100DA" },

        { name: "ppgirl", display: "Pee Pee Girl", image: "pp.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: false, hex: "#F7D71F" },

        { name: "dale", display: "Dale", image: "dale.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: true, phone: -1, p: false, hex: "#734B30" },
        { name: "doc", display: "Dr. Strangelove", image: "doctor.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: false, hex: "#734B30" },
        { name: "whore", display: "Dirty Whore", image: "whore.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: false, hex: "#734B30" },

        { name: "priest", display: "Father O’Mally", image: "priest.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: true, phone: 0, p: true, hex: "#EAE9E7" },
        { name: "nun", display: "Sister Jane", image: "nun.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: true, phone: 0, p: true, hex: "#EAE9E7" },

        { name: "bimbo", display: "Bimbo", image: "bimbo.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: true, phone: -1, p: true, hex: "#F7F5C9" },

        { name: "queen", display: "Forest Queen", image: "queen.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: false, hex: "#125E06" },
        { name: "wolf", display: "Lobo", image: "wolf.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: 0, p: true, hex: "#125E06" },


        { name: "red", display: "Red", image: "red.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: true, hex: "" },

        { name: "brayden", display: "Brayden", image: "brayden.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: true, phone: -1, p: false, hex: "" },

        { name: "govlady", display: "Ms. Pixie", image: "govlady.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: true, hex: "" },

        { name: "daddy", display: "Daddy", image: "daddy.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: false, hex: "" },

        { name: "cult", display: "Cult", image: "cult.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: false, hex: "" },
        { name: "priapus", display: "Priapus", image: "Priapus.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: false, hex: "" },
        { name: "daria", display: "Morgan", image: "daria.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: true, phone: -1, p: false, hex: "" },
        { name: "bodhi", display: "Bodhi", image: "bodhi.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: false, hex: "" },
        { name: "jen", display: "Jen", image: "jen.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: true, hex: "" },
        { name: "ubel", display: "Ubel", image: "ubel.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: false, hex: "" },

        { name: "librarian", display: "The Librarian", image: "librarian.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: true, hex: "#A86448" },
        { name: "crystal", display: "Crystal", image: "crystal.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: true, hex: "" },

        { name: "dollmaker", display: "Doll maker", image: "dollmaker.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: false, hex: "" },

        { name: "clownqueen", display: "Clown", image: "clownQueen.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: false, hex: "" },
        { name: "futa1", display: "Fink", image: "futaYellow.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: false, hex: "" },
        { name: "futa2", display: "Frown", image: "futaRed.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: false, hex: "" },
        //{ name: "slime", display: "Slime Girl", image: "slime.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: false,  hex: "" },

        { name: "a", display: "Aethelreda", image: "aethelreda.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: false, hex: "#b58e2b" },
        { name: "vag", display: "Slutty Slave", image: "cockgobbler.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: false, hex: "#b58e2b" },
        { name: "cock", display: "Cock Gobbler", image: "cockgobbler.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: false, hex: "#b58e2b" },
        { name: "sammi", display: "Sammi Olifant", image: "sammi.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: false, hex: "#b58e2b" },
        { name: "aurora", display: "Aurora Kirei", image: "sammi.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: false, hex: "#b58e2b" },
        { name: "amputee", display: "Deb", image: "amputee.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: false, hex: "#b58e2b" },
        { name: "ff", display: "Futa Fuckhammer", image: "ff.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: false, hex: "#b58e2b" },

        //add her to sissy cave

        { name: "photo", display: "Photographer", image: "photo.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: 0, p: true, hex: "" },

        { name: "blade", display: "Blade", image: "blade.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: 0, p: true, hex: "" },

        { name: "tony", display: "Fat Tony", image: "tony.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: 0, p: true, hex: "" },

        { name: "dr", display: "Dr. Degenerate", image: "dr.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: 0, p: true, hex: "" },

        { name: "random", display: " ", image: "rand.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: false, hex: "" },
        { name: "thinking", display: "Thinking", image: "thinking.png", step: 0, secret: 0, c: 0, l: 0, show: false, setName: false, phone: -1, p: false, hex: "" },
    ];

    sc.charMission = [
        {
            name: "lola", mission: [
                {
                    missionName: "talk", mStatus: 1, title: "Get to know her better.", desc: "You have to talk to girls, silly.", task: //fix: removed extra space in title; removed extra space in desc
                        [
                            { id: 0, txt: "It's ok", show: true, mStatus: 0, roomId: 13 },
                            { id: 1, txt: "Back is sore!", show: true, mStatus: 0, roomId: 13 }, //fix: removed extra space in text
                            { id: 2, txt: "Massages", show: true, mStatus: 0, roomId: 13 },
                        ]
                },
                {
                    missionName: "massage", mStatus: 0, title: "Massage", desc: "Help her loosen up a bit.", task: //fix: removed extra space in desc
                        [
                            { id: 0, txt: "Back Rub", show: true, mStatus: 0, roomId: 13 },
                            { id: 1, txt: "Shirt off back rub.", show: true, mStatus: 0, roomId: 13 }, //fix: removed extra space in text
                            { id: 2, txt: "Massage her tight legs", show: true, mStatus: 0, roomId: 13 },
                            { id: 3, txt: "Massage them glutes", show: true, mStatus: 0, roomId: 13 },
                            { id: 4, txt: "Free choice", show: true, mStatus: 0, roomId: 13 },
                        ]
                },
                {
                    missionName: "games", mStatus: 0, title: "Drinking Games", desc: "Play some drinking games with the girls.", task: //fix: removed extra space in desc
                        [
                            { id: 0, txt: "Invited to get wine and play spin the bottle.", show: true, mStatus: 0, roomId: 13 }, //fix: removed extra space in text
                            { id: 1, txt: "Invited to get wine and play Truth or Dare.", show: true, mStatus: 0, roomId: 13 }, //fix: removed extra space in text
                            { id: 2, txt: "Played Truth or Dare.", show: true, mStatus: 0, roomId: 13 }, //fix: removed extra space in text
                        ]
                },
                {
                    missionName: "date", mStatus: 0, title: "Practice dates", desc: "Landlady suggests practice for the real thing.", task:
                        [
                            { id: 0, txt: "You should go on a practice date.", show: true, mStatus: 0, roomId: 13 }, //fix: removed extra space in text
                            { id: 1, txt: "Give me a day to get ready.", show: true, mStatus: 0, roomId: 13 }, //fix: removed extra space in text
                            { id: 2, txt: "Come by before dark for our first practice date.", show: true, mStatus: 0, roomId: 450 }, //fix: removed extra space in text; location was Girl's Room
                            { id: 3, txt: "Won a teddy bear (Hidden Task)", show: false, showWhenDone: true, mStatus: 0, roomId: 627 }, //fix: text was "Won a teddy bear "; added showWhenDone: hidden step, shown once done; location was Girl's Room
                            { id: 4, txt: "Meet her in her room. Go on dates.", show: true, mStatus: 0, roomId: 13 }, //fix: removed extra space in text
                            { id: 5, txt: "Creampie is the best pie.", show: true, mStatus: 0, roomId: 13 }, //fix: removed extra space in text
                            { id: 6, txt: "Threesome is best cum.", show: true, mStatus: 0, roomId: 13 },
                        ]
                },
                {
                    missionName: "sissy", mStatus: 0, title: "Sissy", desc: "Secret's out", strikeOpenWhenDone: true, task: //fix: added strikeOpenWhenDone: unfinished steps struck out when the mission ends
                        [
                            { id: 0, txt: "The talk", show: true, mStatus: 0, roomId: 16 },
                            { id: 1, txt: "Ice cream and dignity", show: true, mStatus: 0, roomId: 13 },
                            { id: 2, txt: "Dress up", show: true, mStatus: 0, roomId: 13 },
                            { id: 3, txt: "No! Not him!", show: true, mStatus: 0, roomId: 13 },
                            { id: 4, txt: "Worse than we thought", show: true, mStatus: 0, roomId: 11 },
                            { id: 5, txt: "You have a week to find a nice boy", show: true, mStatus: 0, roomId: 40 }, //fix: location was Map
                            { id: 6, txt: "Fuck you, I won't do what you tell me", show: true, mStatus: 0, roomId: 13 }, //fix: location was Map
                            { id: 7, txt: "Unexpected visitor", show: true, mStatus: 0, roomId: 13 },
                            { id: 8, txt: "A taste of the unexpected visitor", show: true, mStatus: 0, roomId: 13 },
                            { id: 9, txt: "This could be fun", show: true, mStatus: 0, roomId: 13 },
                            { id: 10, txt: "Surprise motherfucker!", show: true, mStatus: 0, roomId: 174 }, //fix: removed extra space in text; location was Girl's Room
                            { id: 11, txt: "Pills are best served cold", show: true, mStatus: 0, roomId: 13 },
                            { id: 12, txt: "Give them both the sleeping pills", show: true, mStatus: 0, roomId: 26 }, //fix: location was room 25
                            { id: 13, txt: "Everyone gets fucked!", show: true, mStatus: 0, roomId: 13 },
                        ]
                },
                {
                    missionName: "tom", mStatus: 0, title: "Tom", desc: "True love in another's arms", task:
                        [
                            { id: 0, txt: "Set up on date with Tom", show: true, mStatus: 0, roomId: 40 }, //fix: location was 1st Floor
                            { id: 1, txt: "He's the best", show: true, mStatus: 0, roomId: 13 }, //fix: location was 1st Floor
                            { id: 2, txt: "Bla bla bla [End]", show: true, mStatus: 0, roomId: 13 }, //fix: location was 1st Floor
                        ]
                },
                {
                    missionName: "random", mStatus: 0, title: "Misc", desc: "Random Events", task:
                        [
                            { id: 0, txt: "Steal her clothes [Need locker combo]", show: true, mStatus: 0, roomId: 902 },
                            { id: 1, txt: "Sneaky sleep fuck", show: true, mStatus: 0, roomId: 13 },
                        ]
                },
                {
                    missionName: "*wife", mStatus: 0, title: "Mother", desc: "Mother of my child", task:
                        [
                            { id: 0, txt: "Reunion", show: true, mStatus: 0, roomId: 16 }, //fix: location was Master Bedroom
                            { id: 1, txt: "Proper welcome back", show: true, mStatus: 0, roomId: 10 },
                        ]
                },
                {
                    missionName: "*tom2", mStatus: 0, title: "Fairy Tale", desc: "Her own happily ever after", task:
                        [
                            { id: 0, txt: "Reunion", show: true, mStatus: 0, roomId: 902 },
                        ]
                },
                {
                    missionName: "*cumdump", mStatus: 0, title: "Cum Dump", desc: "Whore for all", task:
                        [
                            { id: 0, txt: "Reunion", show: true, mStatus: 0, roomId: 32 }, //fix: location was Living Room
                            { id: 1, txt: "Catch up", show: true, mStatus: 0, roomId: 13 },
                            { id: 2, txt: "Baby talk", show: true, mStatus: 0, roomId: 13 },
                            { id: 3, txt: "Final Loop", show: true, mStatus: 0, roomId: 13 },
                        ]
                },
            ],
        },
        {
            name: "eva", mission: [
                {
                    missionName: "talk", mStatus: 1, title: "Get to know her better.", desc: "You have to talk to girls, silly.", task: //fix: removed extra space in title; removed extra space in desc
                        [
                            { id: 0, txt: "Small chat", show: true, mStatus: 0, roomId: 13 },
                            { id: 1, txt: "Feet?!", show: true, mStatus: 0, roomId: 13 },
                        ]
                },
                {
                    missionName: "massage", mStatus: 0, title: "Help her out", desc: "She really likes massages", task:
                        [
                            { id: 0, txt: "Massage her feet.", show: true, mStatus: 0, roomId: 13 },
                            { id: 1, txt: "Suck her toes doggy.", show: true, mStatus: 0, roomId: 13 }, //fix: removed extra space in text
                            { id: 2, txt: "Show me your dick.", show: true, mStatus: 0, roomId: 13 }, //fix: removed extra space in text
                            { id: 3, txt: "I want to play with it.", show: true, mStatus: 0, roomId: 13 }, //fix: removed extra space in text

                        ]
                },
                {
                    missionName: "games", mStatus: 0, title: "Drinking Games", desc: "Play some drinking games with the girls.", task: //fix: removed extra space in desc
                        [
                            { id: 0, txt: "Invited to get wine and play spin the bottle.", show: true, mStatus: 0, roomId: 13 }, //fix: removed extra space in text
                            { id: 1, txt: "Invited to get wine and play Truth or Dare.", show: true, mStatus: 0, roomId: 13 }, //fix: removed extra space in text
                            { id: 2, txt: "Played Truth or Dare.", show: true, mStatus: 0, roomId: 13 }, //fix: removed extra space in text
                        ]
                },
                {
                    missionName: "fuck", mStatus: 0, title: "Dirty sex", desc: "I guess we're fucking now", task: //fix: removed extra space in desc
                        [
                            { id: 0, txt: "Supervised blow job.", show: true, mStatus: 0, roomId: 13 }, //fix: removed extra space in text
                            { id: 1, txt: "Weak pullout game", show: true, mStatus: 0, roomId: 7 }, //fix: location was room 10
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
                            { id: 4, txt: "Slave doggy.", show: true, mStatus: 0, roomId: 13 }, //fix: removed extra space in text
                            { id: 5, txt: "Wear a doggy collar and no chastity.", show: true, mStatus: 0, roomId: 905 }, //fix: location was College
                            { id: 6, txt: "Stand up for yourself or not?", show: true, mStatus: 0, roomId: 13 },
                            { id: 7, txt: "Meet her Friday night.", show: true, mStatus: 0, roomId: 585 }, //fix: removed extra space in text; location was room 13
                            { id: 8, txt: "Do you embarrass yourself?", show: true, mStatus: 0, roomId: 585 },
                            { id: 9, txt: "Apology", show: true, mStatus: 0, roomId: 13 },
                        ]
                },
                {
                    missionName: "teach", mStatus: 0, title: "Teach me", desc: "Show me how to be a girl", task:
                        [
                            { id: 0, txt: "Lesson 1", show: true, mStatus: 0, roomId: 174 }, //fix: location was 1st Floor
                        ]
                },
                {
                    missionName: "random", mStatus: 0, title: "Random", desc: "Random Events", task:
                        [
                            { id: 0, txt: "Sneaky sleep fuck", show: true, mStatus: 0, roomId: 13 },
                            { id: 1, txt: "Walk the dog", show: true, mStatus: 0, roomId: 322 }, //happens on a walk with Janice's dog (room322)
                        ]
                },
                {
                    missionName: "*wife", mStatus: 0, title: "Roomy", desc: "We're stuck in the same room together", task:
                        [
                            { id: 0, txt: "Reunion", show: true, mStatus: 0, roomId: 14 },
                        ]
                },
                {
                    missionName: "*tom2", mStatus: 0, title: "Student", desc: "Keep on keeping on", task:
                        [
                            { id: 0, txt: "I'm telling", show: true, mStatus: 0, roomId: 10 },
                            { id: 1, txt: "You have to do what I say!", show: true, mStatus: 0, roomId: 10 },
                        ]
                },
                {
                    missionName: "*cumdump", mStatus: 0, title: "Cum Dump", desc: "Whore for all", task:
                        [
                            { id: 0, txt: "Reunion", show: true, mStatus: 0, roomId: 32 }, //fix: location was Living Room
                            { id: 1, txt: "Catch up", show: true, mStatus: 0, roomId: 13 },
                            { id: 2, txt: "Baby talk", show: true, mStatus: 0, roomId: 13 },
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
                            { id: 2, txt: "Come to the sperm bank Saturday morning. ", show: true, mStatus: 0, roomId: 350 }, //fix: location was Living Room
                            { id: 3, txt: "Room key for more chores. ", show: true, mStatus: 0, roomId: 26 },
                            { id: 4, txt: "You're so sexy", show: true, mStatus: 0, roomId: 26 },
                            { id: 5, txt: "Practice Date", show: true, mStatus: 0, roomId: 26 },
                            { id: 6, txt: "Your past", show: true, mStatus: 0, roomId: 26 },
                        ]
                },
                {
                    missionName: "spermbank", mStatus: -1, title: "Sperm Bank [Side Quest]", desc: "On Saturday Morning visit the Sperm Bank to help out. ", task:
                        [
                            { id: 0, txt: "Donated sperm first time. ", show: true, mStatus: 0, roomId: 350 },
                            { id: 1, txt: "Advertised first time. ", show: true, mStatus: 0, roomId: 350 },
                            { id: 2, txt: "Assistant Nurse first day. (Hidden Task)", show: false, showWhenDone: true, mStatus: 0, roomId: 350 }, //fix: text was "Assistant Nurse first day. "; added showWhenDone: hidden step, shown once done
                            { id: 3, txt: "Assistant Nurse loop. (Hidden Task)", show: false, showWhenDone: true, mStatus: 0, roomId: 350, repeatable: true }, //fix: text was "Assistant Nurse loop. "; added showWhenDone: hidden step, shown once done; added repeatable step
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
                            { id: 3, txt: "River Whore event", show: true, mStatus: 0, roomId: 183 }, //fix: location was Master Bedroom
                            { id: 4, txt: "Kicked out", show: true, mStatus: 0, roomId: 13 },
                            { id: 5, txt: "Chastity Check (Ongoing)", show: true, mStatus: 0, roomId: 16, ongoing: true }, //stays started so the daily checks keep going (room016) - never struck out
                            { id: 6, txt: "Carnival", show: true, mStatus: 0, roomId: 7 },
                            { id: 7, txt: "Coming home nude", show: true, mStatus: 0, roomId: 16 },
                        ]
                },
                {
                    missionName: "sissy", mStatus: -1, title: "Naughty girl", desc: "You're her sissy now.", task:
                        [
                            { id: 0, txt: "Have the talk", show: true, mStatus: 0, roomId: 14 },
                            { id: 1, txt: "When you're ready wear a polka dot dress", show: true, mStatus: 0, roomId: 26 },
                        ]
                },
                {
                    missionName: "*mother", mStatus: 0, title: "tbd", desc: "tbd", task:
                        [
                            { id: 0, txt: "Reunion", show: true, mStatus: 0, roomId: 902 },
                        ]
                },
                {
                    missionName: "*cumdump", mStatus: 0, title: "Cum Dump", desc: "Whore for all", task:
                        [
                            { id: 0, txt: "Reunion", show: true, mStatus: 0, roomId: 26 },
                        ]
                },
            ]
        },
        {
            name: "bigguy", mission: [
                {
                    missionName: "straight", mStatus: 1, title: "Laius", desc: "Stop pestering me you little shit.", task: //fix: removed extra space in desc
                        [
                            { id: 0, txt: "Meet for the first time.", show: true, mStatus: 0, roomId: 26 },
                            { id: 1, txt: "This little finger goes wee wee wee.", show: true, mStatus: 0, roomId: 26 },
                            { id: 2, txt: "My milkshake brings all the boys to the yard.", show: true, mStatus: 0, roomId: 26 },
                            //NOTE: step 3 has no scene yet. When it is implemented, remove the "mission complete"
                            //tag added at step 2 (room026.js "bg_s_2_end" and the load repair in sc.load),
                            //and remove the note/notImplemented options below.
                            //Removing notImplemented also takes the [Not Fully Implemented Yet] tag off this mission, the [WIP] tag off this step and the yellow WIP name off the character on the phone.
                            { id: 3, txt: "My milkshake brings all the boys to the yard.", show: true, mStatus: 0, roomId: 26, note: "(Not Implemented Yet)", notImplemented: true },

                        ]
                },
                {
                    missionName: "rent", mStatus: 0, title: "Rent", desc: "You have to pay to stay.", task: //fix: removed extra space in desc
                        [
                            { id: 0, txt: "Explained", show: true, mStatus: 0, roomId: 7 },
                            { id: 1, txt: "First Day.", show: true, mStatus: 0, roomId: 40 },
                            { id: 2, txt: "To tell or not to tell.", show: true, mStatus: 0, roomId: 7 },
                            { id: 3, txt: "No rent, only ass", show: true, mStatus: 0, roomId: 7 }, //Saturday wake-up after you confessed (room007 "bigguy15_4")
                        ]
                },
                {
                    missionName: "sissy", mStatus: 0, title: "Extra hole", desc: "Let's talk about sex baby.", task: //fix: removed extra space in desc
                        [
                            { id: 0, txt: "Catch them having sex.", show: true, mStatus: 0, roomId: 14 },
                            { id: 1, txt: "This little finger goes wee wee wee.", show: true, mStatus: 0, roomId: 14 },
                            { id: 2, txt: "I drink your milk!", show: true, mStatus: 0, roomId: 14 },
                            { id: 3, txt: "My man!", show: true, mStatus: 0, roomId: 14 },
                            { id: 4, txt: "Clean up duty", show: true, mStatus: 0, roomId: 14 }, //ticked when you confess and take his side (room014 "confess_end")
                            { id: 5, txt: "You're such my bitch.", show: true, mStatus: 0, roomId: 12 }, //his surprise shower visit (room012 "showerReset")
                        ]
                },
                {
                    missionName: "cult", mStatus: 0, title: "Cult", desc: "Good times at the cult", task:
                        [
                            { id: 0, txt: "Who's the daddy.", show: true, mStatus: 0, roomId: 955 }, //fix: text was "Whose the daddy."
                            { id: 1, txt: "Dropped out of college", show: true, mStatus: 0, roomId: 955 }, //fix: id was 0; text was "Got the first" (unfinished) - this step is when he tells you your ##el## dropped out of college
                        ]
                },
                {
                    missionName: "ex", mStatus: 0, title: "Ex [Not built yet]", desc: "Not allowed back!", task:
                        [
                            { id: 0, txt: "Never coming back!", show: true, mStatus: 0, roomId: 14 }, //fix: location was Auto Repair
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
                            { id: 2, txt: "Meet my friend.", show: true, mStatus: 0, roomId: 501 }, //fix: removed extra space in text
                            { id: 3, txt: "Sleep over.", show: true, mStatus: 0, roomId: 501 }, //fix: removed extra space in text
                            { id: 4, txt: "I have a feeling", show: true, mStatus: 0, roomId: 501 },
                            { id: 5, txt: "I need your help!", show: true, mStatus: 0, roomId: 501 },
                        ]
                },
                {
                    missionName: "cheating", mStatus: -1, title: "Chloé", desc: "Find out if Chloé is cheating", task:
                        [
                            { id: 0, txt: "Spy on her.", show: true, mStatus: 0, roomId: 725 },
                            { id: 1, txt: "Catch her at the club?", show: true, mStatus: 0, roomId: 725, orTask: 3 }, //orTask: club and glory hole are either/or - catching her at one locks out the other
                            { id: 3, txt: "Glory hole?", show: true, mStatus: 0, roomId: 216, orTask: 1 },
                            //Listed after the glory hole on purpose (ids stay the same so saves and the code still match).
                            //NOTE: step 2 has no scene yet (Zoey's report chat already has "Caught her at the mall!" for it).
                            //When it is implemented, remove the note/notImplemented options below.
                            //Removing notImplemented also takes the [Not Fully Implemented Yet] tag off this mission, the [WIP] tag off this step and the yellow WIP name off the character on the phone.
                            { id: 2, txt: "Catch her at the mall?", show: true, mStatus: 0, roomId: 400, note: "(Not Implemented Yet)", notImplemented: true },
                        ]
                },
                {
                    missionName: "sex", mStatus: -1, title: "Fuck me please", desc: "Will we be more than friends?", task:
                        [
                            { id: 0, txt: "New petite amie.", show: true, mStatus: 0, roomId: 525 },
                            { id: 1, txt: "Mystery friend at night.", show: true, mStatus: 0, roomId: 502 }, //fix: removed extra space in text
                            { id: 2, txt: "Handcuffs and chastity.", show: true, mStatus: 0, roomId: 525 }, //fix: removed extra space in text
                            { id: 3, txt: "Mon cœur souffre pour toi", show: true, mStatus: 0, roomId: 525 },
                            { id: 4, txt: "Sex at home, sex at work, sex everywhere [Loop]", show: true, mStatus: 0, roomId: 501, repeatable: true, needsRepeat: true }, //ticked by your first repeat scene (game night "Winner gets the sex!" or the bar),
                            { id: 5, txt: "My new vagina (Optional) [After you get a vagina]", show: true, mStatus: 0, roomId: 501, optional: true }, //optional: the mission completes without it,
                        ]
                },
                {
                    missionName: "xfriends", mStatus: -1, title: "Ex-friends", desc: "You've lost her trust.", task: //fix: removed extra space in desc
                        [
                            { id: 0, txt: "Always trust your friends.", show: true, mStatus: 0, roomId: 501 }, //fix: removed extra space in text
                        ]
                },
                {
                    missionName: "*wife", mStatus: -1, title: "Wives?", desc: "Our forever", task:
                        [
                            { id: 0, txt: "My new vagina", show: true, mStatus: 0, roomId: 525 },
                        ]
                },
                {
                    missionName: "*bff", mStatus: -1, title: "Best Friends Forever", desc: "Never be more than friends", task:
                        [
                            { id: 0, txt: "New petite amie.", show: true, mStatus: 0, roomId: 525 },
                        ]
                },
                {
                    missionName: "*help", mStatus: -1, title: "Help with the list", desc: "I hear stuff, let me help", task:
                        [
                            { id: 0, txt: "Spoke at the bar.", show: true, mStatus: 0, roomId: 525 }, //fix: removed extra space in text
                            { id: 1, txt: "Spoke at the home.", show: true, mStatus: 0, roomId: 501 }, //fix: removed extra space in text; location was Zoey's House
                        ]
                },
            ]
        },
        {
            name: "chloe", mission: [
                {
                    missionName: "random", mStatus: 1, title: "Random Events", desc: " ", task:
                        [
                            { id: 0, txt: "First meeting after caught cheating", show: true, mStatus: 0, roomId: 600 }, //fix: text was "First meeting after caught cheeting"
                        ]
                },
            ]
        },
        {
            name: "stormy", mission: [
                {
                    missionName: "property", mStatus: 0, title: "Property", desc: "You're my property", task:
                        [
                            { id: 0, txt: "Marked by the piss.", show: true, mStatus: 0, roomId: 526 }, //Zoey's bar (room526 "sex1_15")
                            { id: 1, txt: "I'm not a submissive slut!", show: true, mStatus: 0, roomId: 408, orTask: 2 }, //1 and 2 are alternatives
                            { id: 2, txt: "I guess I am a submissive slut", show: true, mStatus: 0, roomId: 408, orTask: 1 },

                        ]
                },
            ]
        },
        {
            name: "chad", mission: [
                {
                    missionName: "membership", mStatus: 0, title: "Membership Dues", desc: "Get into the gym.", task: //fix: removed extra space in desc
                        [
                            { id: 0, txt: "Meet for the first time.", show: true, mStatus: 0, roomId: 550 }, //fix: removed extra space in text
                            { id: 1, txt: "Pay the $500", show: true, mStatus: 0, roomId: 550, orTask: 2 }, //pay OR picture - either one completes the mission
                            { id: 2, txt: "Get topless picture.", show: true, mStatus: 0, roomId: 550, orTask: 1 }, //fix: removed extra space in text

                        ]
                },
            ]
        },
        {
            name: "g", mission: [
                {
                    missionName: "workout", mStatus: 0, title: "Personal Trainer", desc: "Get into the gym.", task: //fix: removed extra space in desc
                        [
                            { id: 0, txt: "Meet for the first time.", show: true, mStatus: 0, roomId: 551 }, //fix: removed extra space in text; location was room 550 (front desk), it happens in the gym
                            { id: 1, txt: "Raise your strength bitch!", show: true, mStatus: 0, roomId: 551 }, //fix: location was room 550 (front desk), it happens in the gym
                            { id: 2, txt: "Regular workouts.", show: true, mStatus: 0, roomId: 551 }, //fix: removed extra space in text; location was room 550 (front desk), it happens in the gym

                        ]
                },
                {
                    missionName: "spar", mStatus: 0, title: "Spar", desc: "Learn how to fight.", task: //fix: removed extra space in desc
                        [
                            { id: 0, txt: "Introduction", show: true, mStatus: 0, roomId: 556 },
                            { id: 1, txt: "Beginner Spar. Beat Maggie", show: true, mStatus: 0, roomId: 556 }, //fix: removed extra space in text
                            { id: 2, txt: "Advanced Spar.", show: true, mStatus: 0, roomId: 556 }, //fix: removed extra space in text

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
                            { id: 1, txt: "Wait.", show: true, mStatus: 0, roomId: 555 }, //fix: removed extra space in text
                            { id: 2, txt: "My baby's mama.", show: true, mStatus: 0, roomId: 551 }, //fix: removed extra space in text; location was Back Gym
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
                            { id: 3, txt: "First show was a bust. ", show: true, mStatus: 0, roomId: 316 },
                            { id: 4, txt: "Get a strap-on. ", show: true, mStatus: 0, roomId: 316 },
                            { id: 5, txt: "The talk. ", show: true, mStatus: 0, roomId: 316 },
                            { id: 6, txt: "Surprise", show: true, mStatus: 0, roomId: 316 },
                            //NOTE: step 7 has no scene yet. When it is implemented, remove the "mission complete" line
                            //marked REMOVE in room318.js (b2_end) and the Mine! repair in sc.load, and remove
                            //the note/notImplemented options below.
                            //Removing notImplemented also takes the [Not Fully Implemented Yet] tag off this mission, the [WIP] tag off this step and the yellow WIP name off the character on the phone.
                            { id: 7, txt: "A whole new world!", show: true, mStatus: 0, roomId: 316, note: "(Not Implemented Yet)", notImplemented: true },
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
                            { id: 7, txt: "You just keep cuming back for more", show: true, mStatus: 0, roomId: 321, repeatable: true }, //the repeat webcam shows after step 6 - mission shows Completed [Repeatable]
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
                            { id: 0, txt: "Complete some Datr events then offer to walk the dog.", show: true, mStatus: 0, roomId: 315 },
                            { id: 1, txt: "You know what you did your filthy fuck!", show: true, mStatus: 0, roomId: 315 },
                            { id: 2, txt: "You're her bitch", show: true, mStatus: 0, roomId: 315 },
                            { id: 3, txt: "Bitchsuit for a bitch", show: true, mStatus: 0, roomId: 316 },
                            { id: 4, txt: "First Day", show: true, mStatus: 0, roomId: 322 },
                            { id: 5, txt: "Webcam first time", show: true, mStatus: 0, roomId: 321 },
                            { id: 6, txt: "Do I surprise her?", show: true, mStatus: 0, roomId: 322 },
                            { id: 7, txt: "Freedom", show: true, mStatus: 0, roomId: 322 },
                        ]
                },
                {
                    missionName: "breakup", mStatus: 0, title: "Break Up", desc: "You two just weren't meant for each other. It's over", task: new Array() //fix: desc was "You two just wearn't meant for each other. It..."
                },
                {
                    missionName: "random", mStatus: 0, title: "Misc Events", desc: "", task:
                        [
                            { id: 0, txt: "Dog park", show: true, mStatus: 0, roomId: 322 },
                            { id: 1, txt: "Dog park 1", show: true, mStatus: 0, roomId: 322 },
                            { id: 2, txt: "Dog park 2", show: true, mStatus: 0, roomId: 322 },
                        ]
                },
                {
                    missionName: "*boyfriend", mStatus: 0, title: "My Boyfriend", desc: "You don't matter to me.", task:
                        [
                            { id: 0, txt: "Why are you here?", show: true, mStatus: 0, roomId: 315 },
                        ]
                },
                {
                    missionName: "*doggy", mStatus: 0, title: "My doggy", desc: "You're my second favorite pet", task:
                        [
                            { id: 0, txt: "Welcome back", show: true, mStatus: 0, roomId: 315 },
                            { id: 1, txt: "Don't call me a dog fucker", show: true, mStatus: 0, roomId: 315 },
                        ]
                }
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
                            { id: 0, txt: "Introduce yourself.", show: true, mStatus: 0, roomId: 300 }, //fix: removed extra space in text
                            { id: 1, txt: "Lost at a board game.", show: true, mStatus: 0, roomId: 301 }, //fix: removed extra space in text
                            { id: 2, txt: "Bring Pizza!", show: true, mStatus: 0, roomId: 301 }, //fix: removed extra space in text
                            { id: 3, txt: "Just friends.", show: true, mStatus: 0, roomId: 301 }, //fix: removed extra space in text
                        ]
                },
                {
                    missionName: "hypno", mStatus: 0, title: "Hypno", desc: "Turning a girl into a slut.", task:
                        [
                            { id: 0, txt: "Hypno 1: Touch myself", show: true, mStatus: 0, roomId: 301 },
                            { id: 1, txt: "Hypno 2: Makeup", show: true, mStatus: 0, roomId: 301 }, //fix: removed extra space in text
                            { id: 2, txt: "Hypno 3: Dresses are pretty", show: true, mStatus: 0, roomId: 301 },
                            { id: 3, txt: "Hypno 4: Blondes have more fun", show: true, mStatus: 0, roomId: 301 }, //fix: spelling (was "Blonde have")
                            { id: 4, txt: "Hypno 5: Dumb is sexy", show: true, mStatus: 0, roomId: 301 },
                            { id: 5, txt: "Hypno 6: Tits. Bigger is Better", show: true, mStatus: 0, roomId: 301 },
                            { id: 6, txt: "Break that hymen and fill that belly.", show: true, mStatus: 0, roomId: 301 }, //fix: text was "Break that Hymen and fill that belly."
                            { id: 7, txt: "Hypno 7", show: true, mStatus: 0, roomId: 301 },
                            { id: 8, txt: "Double team! Leave your cage at home.", show: true, mStatus: 0, roomId: 301 },
                            { id: 9, txt: "Broken.", show: true, mStatus: 0, roomId: 301 },
                            { id: 10, txt: "Invite her to be a hucow", show: true, mStatus: 0, roomId: 325 },
                            { id: 11, txt: "You're a hucow now!", show: true, mStatus: 0, roomId: 301 },
                        ]
                },
                {
                    missionName: "hucow", mStatus: 0, title: "Hucow", desc: "I love it here!", task:
                        [
                            { id: 0, txt: "Last night!", show: true, mStatus: 0, roomId: 327 },
                            { id: 1, txt: "Drake", show: true, mStatus: 0, roomId: 327 },
                            //NOTE: step 2 has no scene yet (Envy just says a placeholder line at the farm). When it is implemented,
                            //remove the "mission complete" line marked REMOVE in room327.js and the Hucow repair in sc.load,
                            //and remove the note/notImplemented options below.
                            //Removing notImplemented also takes the [Not Fully Implemented Yet] tag off this mission, the [WIP] tag off this step and the yellow WIP name off the character on the phone.
                            { id: 2, txt: "TBD", show: true, mStatus: 0, roomId: 327, note: "(Not Implemented Yet)", notImplemented: true },
                        ]
                },
                {
                    missionName: "gf", mStatus: 0, title: "Girlfriend", desc: "Emotional Connection.", task: //fix: removed extra space in desc
                        [
                            { id: 0, txt: "Talk to Spanky to undo the hypno", show: true, mStatus: 0, roomId: 404 }, //fix: location was room 301
                            { id: 1, txt: "Go Away!", show: true, mStatus: 0, roomId: 301 },
                            { id: 2, txt: "Forgiveness comes slowly.", show: true, mStatus: 0, roomId: 300 }, //fix: text was "Forgivness comes slowly."; location was Living Room
                            { id: 3, txt: "Get Help from Tiffany!", show: true, mStatus: 0, roomId: 650 },
                            { id: 4, txt: "Give her the gift of orgasms.", show: true, mStatus: 0, roomId: 301 },
                            { id: 5, txt: "See how her pussy is doing.", show: true, mStatus: 0, roomId: 301 },
                            { id: 6, txt: "Go to her place before " + nav.convertTime(14, 0) + " tomorrow.", show: true, mStatus: 0, roomId: 301 },
                            //NOTE: step 7 has no scene yet. When it is implemented, remove the "mission complete"
                            //tag added after step 6 (room904.js "endGood", room300.js door check and the load
                            //repair in sc.load), and remove the note/notImplemented options below.
                            //Removing notImplemented also takes the [Not Fully Implemented Yet] tag off this mission, the [WIP] tag off this step and the yellow WIP name off the character on the phone.
                            { id: 7, txt: "Successful test!", show: true, mStatus: 0, roomId: 301, note: "(Not Implemented Yet)", notImplemented: true },
                        ]
                },
                {
                    missionName: "breakup", mStatus: 0, title: "Failed me!", desc: "I hate you!", task: //fix: removed extra space in desc
                        [
                            { id: 0, txt: "Didn't meet her before her test.", show: true, mStatus: 0, roomId: 301 },
                            { id: 1, txt: "Didn't give her enough orgasms.", show: true, mStatus: 0, roomId: 904 }, //fix: texts of 1 and 2 were swapped (room904: endNoButton = 1, endTooMany = 2)
                            { id: 2, txt: "Made her orgasm too much.", show: true, mStatus: 0, roomId: 904 },
                        ]
                },
            ]
        },
        {
            name: "spanky", mission: [
                {
                    missionName: "shop", mStatus: 0, title: "Spanky's Store", desc: "Buy some shit", task:
                        [
                            { id: 0, txt: "You're cool. I guess", show: true, mStatus: 0, roomId: 404 },
                            { id: 1, txt: "You can buy sissy bimbo pills!", show: true, mStatus: 0, roomId: 213, roomName: "Pink Room / Naked Beaver" }, //Spanky shows up while you waitress at either place (after graduating)
                        ]
                },
                {
                    missionName: "hypno", mStatus: 0, title: "Hypno", desc: "Make her a slut", task:
                        [
                            { id: 0, txt: "Purchase Hypno Tapes.", show: true, mStatus: 0, roomId: 301 }, //ticked when Spanky brings the tapes (room301 envy3end)
                            { id: 1, txt: "I love you man! 1/2 prices!", show: true, mStatus: 0, roomId: 301, orTask: 2 }, //1 and 2 are alternatives
                            { id: 2, txt: "I hate you! Triple the prices!", show: true, mStatus: 0, roomId: 301, orTask: 1 },
                        ]
                },
            ]
        },
        {
            name: "tiffany", mission: [
                {
                    missionName: "friend", mStatus: 0, title: "Friends!", desc: "Did we just become best friends?", task:
                        [
                            { id: 0, txt: "Shopping trip!", show: true, mStatus: 0, roomId: 650 },
                            { id: 1, txt: "Came inside her.", show: true, mStatus: 0, roomId: 403, roomName: "Saucy Change Room", orTask: 2 }, //1 and 2 are alternatives; roomName overrides the phone location text
                            { id: 2, txt: "Sprayed your cum on her back.", show: true, mStatus: 0, roomId: 403, roomName: "Saucy Change Room", orTask: 1 },
                            { id: 3, txt: "Home.", show: true, mStatus: 0, roomId: 51 },
                            { id: 4, txt: "How to use your pussy", show: true, mStatus: 0, roomId: 54 },
                            { id: 5, txt: "Pussy Palace", show: true, mStatus: 0, roomId: 54 },
                            { id: 6, txt: "Cheerleader!", show: true, mStatus: 0, roomId: 54 }, //fix: removed extra space in text
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
                    missionName: "cheer", mStatus: 0, title: "Cheerleader!", desc: "Be a cheerleader!", task: //fix: removed extra space in desc
                        [
                            { id: 0, txt: "Meet Saturday morning", show: true, mStatus: 0, roomId: 875 }, //ticked at your first practice (room875 "practice")
                            { id: 1, txt: "Cheerleading practice. [Loop]", show: true, mStatus: 0, roomId: 875, repeatable: true, needsRepeat: true }, //ticked at your 2nd practice (room875 "practice"), then Completed [Repeatable]
                        ]
                },
            ]
        },
        {
            name: "treyvon", mission: [
                {
                    missionName: "doorman", mStatus: 0, title: "Doorman", desc: "A little molestation and a big dick", task:
                        [
                            { id: 0, txt: "You can enter the building as a girl.", show: true, mStatus: 0, roomId: 50 },
                            { id: 1, txt: "Visit him in the lobby as a girl. [Loop]", show: true, mStatus: 0, roomId: 50, repeatable: true, needsRepeat: true }, //ticked on your first repeat lobby scene (room050), then Completed [Repeatable]
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
                {
                    missionName: "*escape", mStatus: 0, title: "Escaped", desc: "Escaped back to the compound", task:
                        [
                            { id: 0, txt: "Escaped back to the compound", show: true, mStatus: 0, roomId: 450 },
                        ]
                },
            ]
        },
        {
            name: "philbert", mission: [
                {
                    missionName: "bully", mStatus: 0, title: "Bully", desc: "You're my bitch", task:
                        [
                            { id: 0, txt: "Shows his bully side", show: true, mStatus: 0, roomId: 211 },
                            { id: 1, txt: "Blackmailed into sucking his cock", show: true, mStatus: 0, roomId: 211 },
                            { id: 2, txt: "Everyone knows", show: true, mStatus: 0, roomId: 211 },
                            //NOTE: step 3 has no scene yet. When it is implemented, remove the "mission complete" line
                            //marked REMOVE in room211.js and the Bully repair in sc.load, and remove
                            //the note/notImplemented options below.
                            //Removing notImplemented also takes the [Not Fully Implemented Yet] tag off this mission, the [WIP] tag off this step and the yellow WIP name off the character on the phone.
                            { id: 3, txt: "Not made yet.", show: true, mStatus: 0, roomId: 211, note: "(Not Implemented Yet)", notImplemented: true },
                        ]
                },
                {
                    missionName: "barn", mStatus: 0, title: "Barn", desc: "My little helper", task:
                        [
                            { id: 0, txt: "We meet again. ", show: true, mStatus: 0, roomId: 329 },
                        ]
                },
            ]
        },
        {
            name: "sporty", mission: [
                {
                    missionName: "corrupt", mStatus: 0, title: "Corrupt the sissy", desc: "Not made yet.", task:
                        [
                            //NOTE: step 0 has no scene yet. When it is implemented, remove the "mission complete" line
                            //marked REMOVE in room601.js and the Corrupt the sissy repair in sc.load, and remove
                            //the note/notImplemented options below.
                            //Removing notImplemented also takes the [Not Fully Implemented Yet] tag off this mission, the [WIP] tag off this step and the yellow WIP name off the character on the phone.
                            { id: 0, txt: "In development (Not made)", show: true, mStatus: 0, roomId: 211, note: "(Not Implemented Yet)", notImplemented: true },
                            { id: 1, txt: "strip club", show: true, mStatus: 0, roomId: 601 },
                        ]
                },
            ]
        },
        {
            name: "cecilia", mission: [
                {
                    missionName: "gloryhole", mStatus: 0, title: "Glory hole!", desc: "Park bathroom on weekends", task: //fix: removed extra space in desc
                        [
                            { id: 0, txt: "Did we just become friends?", show: true, mStatus: 0, roomId: 451 }, //first time in her stall (room451 "enterstall")
                            { id: 1, txt: "2 sissies. 1 gloryhole", show: true, mStatus: 0, roomId: 451 },
                        ]
                },
            ]
        },
        {
            name: "bimbo", mission: [
                {
                    missionName: "fuck", mStatus: 0, title: "Cum dumpster", desc: "How many ways can you cum in her?", task:
                        [
                            { id: 0, txt: "Blow job", show: true, mStatus: 0, roomId: 77 },
                            { id: 1, txt: "Pussy", show: true, mStatus: 0, roomId: 77 },
                            { id: 2, txt: "Anus", show: true, mStatus: 0, roomId: 77 },
                            { id: 3, txt: "Sleepy pussy", show: true, mStatus: 0, roomId: 76 },
                            { id: 4, txt: "Sleepy anal", show: true, mStatus: 0, roomId: 76 },
                        ]
                },
                {
                    missionName: "preg", mStatus: 0, title: "Preggers!", desc: "Am I a mom?", task:
                        [
                            { id: 0, txt: "Gave her a sloppy cream pie", show: true, mStatus: 0, roomId: 77 },
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
                            { id: 1, txt: "Titty grabbing perv", show: true, mStatus: 0, roomId: 350 },
                            { id: 2, txt: "Eat a bag of dicks", show: true, mStatus: 0, roomId: 350 },
                            { id: 3, txt: "Stop touching her! (Repeatable)", show: true, mStatus: 0, roomId: 350, repeatable: true }, //fix: text was "Stop touching her!"; added repeatable step
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
                {
                    missionName: "ranch", mStatus: 0, title: "Ranch", desc: "Wash my back, I'll wash yours", task:
                        [
                            { id: 0, txt: "First meeting.", show: true, mStatus: 0, roomId: 329 },
                            { id: 1, txt: "Gave her water.", show: true, mStatus: 0, roomId: 329 },
                            { id: 2, txt: "Gave her food.", show: true, mStatus: 0, roomId: 329 },
                            { id: 3, txt: "Talk her into distracting the guard.", show: true, mStatus: 0, roomId: 329 },
                        ]
                },
            ]
        },
        {
            name: "rachel", mission: [
                {
                    missionName: "horse", mStatus: 0, title: "Horse Brushing", desc: "Help out around the farm.", task: //fix: removed extra space in desc
                        [
                            { id: 0, txt: "First meeting", show: true, mStatus: 0, roomId: 325 },
                        ]
                },
                {
                    missionName: "milk", mStatus: 0, title: "Hucow", desc: "Become her milking cow", task: //fix: removed extra space in desc
                        [
                            { id: 0, txt: "Inspection.", show: true, mStatus: 0, roomId: 325 },
                            { id: 1, txt: "Hucow.", show: true, mStatus: 0, roomId: 327 }, //ticked on your first milking (room327)
                        ]
                },
                {
                    missionName: "ranch", mStatus: 0, title: "Ranch", desc: "Life of a real hucow", task:
                        [
                            { id: 0, txt: "First day", show: true, mStatus: 0, roomId: 328 },
                        ]
                },
            ]
        },
        {
            name: "kinsey", mission: [
                {
                    missionName: "milk", mStatus: 0, title: "Fellow Hucow", desc: "Gain her trust", task:
                        [
                            { id: 0, txt: "Moooo", show: true, mStatus: 0, roomId: 327 }, //fix: location was Farm
                            { id: 1, txt: "Fucking Moooo", show: true, mStatus: 0, roomId: 327 }, //fix: location was Farm
                            { id: 2, txt: "I'm not talking to Mooo either", show: true, mStatus: 0, roomId: 327 }, //fix: location was Farm
                            { id: 3, txt: "Get me an energy drink", show: true, mStatus: 0, roomId: 327 }, //fix: location was Farm
                            { id: 4, txt: "Thanks", show: true, mStatus: 0, roomId: 327 }, //fix: location was Farm
                        ]
                },
                {
                    missionName: "ranch", mStatus: 0, title: "Ranch", desc: "Fun on the Ranch", task:
                        [
                            { id: 0, txt: "First meeting", show: true, mStatus: 0, roomId: 328 }, //fix: location was Farm
                            { id: 1, txt: "Break out plan #1", show: true, mStatus: 0, roomId: 328 },
                            { id: 2, txt: "Break out plan #2", show: true, mStatus: 0, roomId: 328 },
                        ]
                },
                {
                    missionName: "*post", mStatus: 0, title: "Owner", desc: "I'm the boss around here", task:
                        [
                            { id: 0, txt: "First meeting", show: true, mStatus: 0, roomId: 325 },
                            { id: 1, txt: "Free roam", show: true, mStatus: 0, roomId: 325 },
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
                            { id: 0, txt: "First time.", show: true, mStatus: 0, roomId: 172, roomName: "Black room" }, //roomName: what Ms. Black calls it (room 172 is "Punishment2" in global.js)
                            { id: 1, txt: "Repeat customer", show: true, mStatus: 0, roomId: 172, roomName: "Black room", repeatable: true, needsRepeat: true }, //ticked on your 2nd punishment (room172), then the mission shows Completed [Repeatable]
                        ]
                },
                {
                    missionName: "talent", mStatus: 0, title: "Talent show", desc: "Expose yourself to the people", task:
                        [
                            { id: 0, txt: "Explain", show: true, mStatus: 0, roomId: 186 },
                            { id: 1, txt: "Repeat customer", show: true, mStatus: 0, roomId: 186, repeatable: true }, //repeat talent shows - mission shows Completed [Repeatable]
                        ]
                },
            ]
        },
        {
            name: "p", mission: [
                {
                    missionName: "pink", mStatus: 0, title: "The Pink Room", desc: "A proper place for a sissy.", task:
                        [
                            { id: 0, txt: "Introduction", show: true, mStatus: 0, roomId: 213 },
                            { id: 1, txt: "First blowjob", show: true, mStatus: 0, roomId: 214 }, //ticked after your first Game Room session (room214)
                            { id: 2, txt: "Waitress first time", show: true, mStatus: 0, roomId: 213 },
                            { id: 3, txt: "Gloryhole first time", show: true, mStatus: 0, roomId: 171 }, //fix: location was room 213
                            { id: 4, txt: "Your own room", show: true, mStatus: 0, roomId: 215 }, //fix: location was room 213
                        ]
                },
                {
                    missionName: "*missy", mStatus: 0, title: "Save Missy", desc: "What you need to do", task: //fix: removed extra space in desc
                        [
                            { id: 0, txt: "Met at Missy's", show: true, mStatus: 0, roomId: 203 },
                            { id: 1, txt: "Get more information from the Forest Queen", show: true, mStatus: 0, roomId: 477 }, //fix: spelling (was "More")
                            { id: 2, txt: "Bring the letter from the Forest Queen", show: true, mStatus: 0, roomId: 203 },
                            { id: 3, txt: "Ask each person on the list if they have the code", show: true, mStatus: 0, roomId: 0 },
                            { id: 4, txt: "Report back to Missy's Detective Agency", show: true, mStatus: 0, roomId: 203 }, //fix: text was "Report back to Missy's Dective Agency"
                            { id: 5, txt: "Go deep past the caves and sneak into the C.U.M. compound", show: true, mStatus: 0, roomId: 487 }, //fix: location was 445 (upstream Nov 23 made the same change)
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
                            { id: 0, txt: "Met at the bar", show: true, mStatus: 0, roomId: 526 }, //fix: location was Naked Beaver Diner
                        ]
                },
                {
                    missionName: "case", mStatus: 0, title: "Gain her trust", desc: "Find out if she's been taking the money", task:
                        [
                            { id: 0, txt: "Chat at the diner", show: true, mStatus: 0, roomId: 250 },
                            { id: 1, txt: "Chat at the diner", show: true, mStatus: 0, roomId: 250 },
                            { id: 2, txt: "Chat at the diner", show: true, mStatus: 0, roomId: 250 },
                            { id: 3, txt: "Gift? (Optional)", show: true, mStatus: 0, roomId: 250, optional: true }, //optional: not struck out if the mission finishes without it
                        ]
                },
                {
                    missionName: "happy", mStatus: 0, title: "Friends", desc: "Bestest work friends!", task:
                        [
                            { id: 0, txt: "Didn't rat us out to Jeffery", show: true, mStatus: 0, roomId: 200 }, //fix: location was Naked Beaver Diner
                        ]
                },
                {
                    missionName: "mad", mStatus: 0, title: "Enemies", desc: "I hate you!", task:
                        [
                            { id: 0, txt: "Ratted us out to Jeffery", show: true, mStatus: 0, roomId: 200 }, //fix: location was Naked Beaver Diner
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
                            { id: 3, txt: "Gift? (Optional)", show: true, mStatus: 0, roomId: 250, optional: true }, //optional: not struck out if the mission finishes without it
                        ]
                },
                {
                    missionName: "happy", mStatus: 0, title: "Friends", desc: "Bestest work friends!", task:
                        [
                            { id: 0, txt: "Didn't rat us out to Jeffery", show: true, mStatus: 0, roomId: 200 }, //fix: location was Naked Beaver Diner
                            { id: 1, txt: "Warm cup of Gooey goo", show: true, mStatus: 0, roomId: 250 },
                        ]
                },
                {
                    missionName: "mad", mStatus: 0, title: "Enemies", desc: "I hate you!", task:
                        [
                            { id: 0, txt: "Ratted us out to Jeffery", show: true, mStatus: 0, roomId: 200 }, //fix: location was Naked Beaver Diner
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
                            { id: 3, txt: "Gift? (Optional)", show: true, mStatus: 0, roomId: 250, optional: true }, //optional: not struck out if the mission finishes without it
                        ]
                },
                {
                    missionName: "happy", mStatus: 0, title: "Friends", desc: "Bestest work friends!", task:
                        [
                            { id: 0, txt: "Didn't rat us out to Jeffery", show: true, mStatus: 0, roomId: 200 }, //fix: location was Naked Beaver Diner
                        ]
                },
                {
                    missionName: "mad", mStatus: 0, title: "Enemies", desc: "I hate you!", task:
                        [
                            { id: 0, txt: "Ratted us out to Jeffery", show: true, mStatus: 0, roomId: 200 }, //fix: location was Naked Beaver Diner
                        ]
                },
            ]
        },
        {
            name: "jeffery", mission: [
                {
                    missionName: "work", mStatus: 0, title: "You're hired!", desc: "Waitress @ the Naked Beaver", task:
                        [
                            { id: 0, txt: "Get to work!", show: true, mStatus: 0, roomId: 250 }, //ticked after your first shift once hired (room252)
                            { id: 1, txt: "Work a shift. [Loop]", show: true, mStatus: 0, roomId: 250, repeatable: true }, //shifts keep going - mission shows Completed [Repeatable]
                        ]
                },
                {
                    missionName: "cult", mStatus: 0, title: "Cult", desc: "The panties?", task:
                        [
                            { id: 0, txt: "Have you brought me the panties?", show: true, mStatus: 0, roomId: 950 },
                        ]
                },
                {
                    missionName: "*panties", mStatus: 0, title: "Panties", desc: "Bring me their panties!", task:
                        [
                            { id: 0, txt: "Break into his office at night", show: true, mStatus: 0, roomId: 250 },
                            { id: 1, txt: "Steal the panties", show: true, mStatus: 0, roomId: 251 }, //ticked when you hand all three pairs to Jeffery in his office (room251)
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
                            //NOTE: step 1 has no scene yet (Orchid never appears in the Pink Room). When it is implemented,
                            //remove the "mission complete" line marked REMOVE in room526.js (g1) and the Party Bitches!
                            //repair in sc.load, and remove the note/notImplemented options below.
                            //Removing notImplemented also takes the [Not Fully Implemented Yet] tag off this mission, the [WIP] tag off this step and the yellow WIP name off the character on the phone.
                            { id: 1, txt: "Pink room", show: true, mStatus: 0, roomId: 213, note: "(Not Implemented Yet)", notImplemented: true },
                            { id: 2, txt: "I was there! (Hidden Task)", show: false, showWhenDone: true, mStatus: 0, roomId: 526 },
                        ]
                }
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
                {
                    missionName: "*gf", mStatus: 0, title: "Girlfriend", desc: "I think I'm in love", task:
                        [
                            { id: 0, txt: "Confesses his love to you", show: true, mStatus: 0, roomId: 728 }, //fix: text was "Confesses his love your you"; location was Construction Entrance (upstream Nov 23 set it to 725 Bar; kept 728 River's Apartment)
                        ]
                },
            ]
        },
        {
            name: "tina", mission: [
                {
                    missionName: "cat", mStatus: 0, title: "Pussy Cat", desc: "Fill my pussy", task:
                        [
                            { id: 0, txt: "Saved your ass", show: true, mStatus: 0, roomId: 100 },
                            { id: 1, txt: "You caught me. Hehehe", show: true, mStatus: 0, roomId: 727 },
                            { id: 2, txt: "Put a litter of kitties inside me", show: true, mStatus: 0, roomId: 727 },
                        ]
                },
                {
                    missionName: "*leave", mStatus: 0, title: "Betrayed", desc: "I'm going home", task:
                        [
                            { id: 0, txt: "I'm never seeing you again!", show: true, mStatus: 0, roomId: 101 },
                        ]
                },
            ]
        },
        {
            name: "cindy", mission: [
                {
                    missionName: "fuck", mStatus: 0, title: "Man enough?", desc: "A swimmer's body is hot.", task:
                        [
                            { id: 0, txt: "Be manly enough.", show: true, mStatus: 0, roomId: 901 }, //fix: removed extra space in text
                            { id: 1, txt: "Swim race!", show: true, mStatus: 0, roomId: 901 }, //fix: removed extra space in text
                            { id: 2, txt: "Swoon her", show: true, mStatus: 0, roomId: 727 }, //fix: removed extra space in text; location was Dance Floor
                        ]
                },
            ]
        },
        {
            name: "tim", mission: [
                {
                    missionName: "fuck", mStatus: 0, title: "Girl enough?", desc: "Love big tits!", task:
                        [
                            { id: 0, txt: "Tits big enough?", show: true, mStatus: 0, roomId: 901 }, //fix: removed extra space in text
                            { id: 1, txt: "Tricked you into sucking your cock.", show: true, mStatus: 0, roomId: 727 }, //fix: location was Dance Floor
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
                            { id: 5, txt: "Sunday Big game! [Cheer level 7]", show: true, mStatus: 0, roomId: 875 }, //ticked when your first big game ends (room875 "cheer1_13x")
                            { id: 6, txt: "You're a cheerleader now", show: true, mStatus: 0, roomId: 875 }, //ticked with step 5
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
                            //NOTE: step 4 has no scene yet. When it is implemented, remove the "mission complete" line marked
                            //REMOVE in room125.js (Kei step 3) and the Boy's Game repair in sc.load, and remove the note/notImplemented options below.
                            //Removing notImplemented also takes the [Not Fully Implemented Yet] tag off this mission, the [WIP] tag off this step and the yellow WIP name off the character on the phone.
                            { id: 4, txt: "The new class", show: true, mStatus: 0, roomId: 125, note: "(Not Implemented Yet)", notImplemented: true },
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
                            //NOTE: step 1 has no scene yet. When it is implemented, remove the "mission complete" line marked
                            //REMOVE in room125.js (t4) and the Jimmy Boy's Game repair in sc.load, and remove the note/notImplemented options below.
                            //Removing notImplemented also takes the [Not Fully Implemented Yet] tag off this mission, the [WIP] tag off this step and the yellow WIP name off the character on the phone.
                            { id: 1, txt: "Not there, my no-no square", show: true, mStatus: 0, roomId: 125, note: "(Not Implemented Yet)", notImplemented: true },
                        ]
                },
            ]
        },
        {
            name: "ralph", mission: [
                {
                    missionName: "room", mStatus: 0, title: "Chat", desc: "Playing in my room", task:
                        [
                            { id: 0, txt: "First", show: true, mStatus: 0, roomId: 802 },
                            { id: 1, txt: "BBC", show: true, mStatus: 0, roomId: 802 },
                            { id: 2, txt: "Sissy School, Day 1", show: true, mStatus: 0, roomId: 802 },
                            { id: 3, txt: "Sissy School, Midterm", show: true, mStatus: 0, roomId: 802 },
                            { id: 4, txt: "Sissy School, Final - Find a job", show: true, mStatus: 0, roomId: 802 },
                            { id: 5, txt: "Ask Zoey about a job", show: true, mStatus: 0, roomId: 525 },
                            { id: 6, txt: "He has the job. Now let him know.", show: true, mStatus: 0, roomId: 802 }, //fix: removed extra space in text
                            { id: 7, txt: "Working girl.", show: true, mStatus: 0, roomId: 526 }, //fix: removed extra space in text
                            { id: 8, txt: "Boyfriend", show: true, mStatus: 0, roomId: 526 }, //fix: removed extra space in text
                            { id: 9, txt: "My hero!", show: true, mStatus: 0, roomId: 802 }, //fix: removed extra space in text
                        ]
                },
                {
                    missionName: "cards", mStatus: 0, title: "Boy's Game", desc: "Play some poker", task:
                        [
                            { id: 0, txt: "Sucked his cock", show: true, mStatus: 0, roomId: 125 },
                            { id: 1, txt: "Coming out", show: true, mStatus: 0, roomId: 125 },
                            { id: 2, txt: "I guess I'm a cock sucker too", show: true, mStatus: 0, roomId: 125 },
                            { id: 3, txt: "Why are you naked?", show: true, mStatus: 0, roomId: 125 },
                        ]
                },
                {
                    missionName: "cult", mStatus: 0, title: "Cult", desc: "Taken by the cult", task:
                        [
                            { id: 0, txt: "Taken by the cult", show: true, mStatus: 0, roomId: 952 },
                            { id: 1, txt: "Lost son (Hidden Task)", show: false, showWhenDone: true, mStatus: 0, roomId: 203 }, //his mom finds you at the PI Entrance
                            { id: 2, txt: "Welcome (Hidden Task)", show: false, showWhenDone: true, mStatus: 0, roomId: 952 },
                            { id: 3, txt: "Can I go home? (Hidden Task)", show: false, showWhenDone: true, mStatus: 0, roomId: 952 },
                            { id: 4, txt: "I need some lotion (Hidden Task)", show: false, showWhenDone: true, mStatus: 0, roomId: 952 },
                            { id: 5, txt: "I'm ready to be broken again (Hidden Task)", show: false, showWhenDone: true, mStatus: 0, roomId: 952 }, //ticked when he's ready to go again (room952 icon_boys_ralph)
                        ]
                },
            ]
        },
        {
            name: "ralphsmom", mission: [
                {
                    missionName: "room", mStatus: 0, title: "Mrs. Robinson", desc: "How far will she let me take this?", task:
                        [
                            { id: 0, txt: "First", show: true, mStatus: 0, roomId: 800 },
                            { id: 1, txt: "Rub my penis", show: true, mStatus: 0, roomId: 800 },
                            { id: 2, txt: "Hairy muff pie", show: true, mStatus: 0, roomId: 804 }, //fix: location was R Parents
                            { id: 3, txt: "Caught her husband", show: true, mStatus: 0, roomId: 803 },
                            { id: 4, txt: "The talk", show: true, mStatus: 0, roomId: 800 },
                            { id: 5, txt: "Sissy in the middle", show: true, mStatus: 0, roomId: 803 }, //fix: location was room 800
                        ]
                },
                {
                    missionName: "book", mStatus: 0, title: "Bedroom", desc: "Whatcha reading?", task: //fix: desc was "Wha cha reading?"
                        [
                            { id: 0, txt: "Tell me about your book.", show: true, mStatus: 0, roomId: 803 }, //fix: removed extra space in text
                            { id: 1, txt: "Honey Biscuits", show: true, mStatus: 0, roomId: 803 },
                            { id: 2, txt: "Tell me even more (Repeatable)", show: true, mStatus: 0, roomId: 803, repeatable: true },
                            { id: 3, txt: "One great fuck!", show: true, mStatus: 0, roomId: 803, orTask: 4 }, //3 and 4 are alternatives
                            { id: 4, txt: "A disappointing tiny dick", show: true, mStatus: 0, roomId: 803, orTask: 3 },
                        ]
                },
            ]
        },
        {
            name: "ralphsdad", mission: [
                {
                    missionName: "main", mStatus: 0, title: "Dad", desc: "My buddy's dad", task:
                        [
                            { id: 0, txt: "No spark until you play the part", show: true, mStatus: 0, roomId: 801 },
                            { id: 1, txt: "Reckless desire, petals for a pretty girl", show: true, mStatus: 0, roomId: 801 },
                            { id: 2, txt: "Passion hides within the mundane suburbs", show: true, mStatus: 0, roomId: 801 },
                            { id: 3, txt: "The sweet pursuit is now commencing", show: true, mStatus: 0, roomId: 803 },
                            { id: 4, txt: "Dirty little secret", show: true, mStatus: 0, roomId: 803 },
                            { id: 5, txt: "Dirty little secret exposed", show: true, mStatus: 0, roomId: 803 },
                            { id: 6, txt: "The talk", show: true, mStatus: 0, roomId: 800 },
                            { id: 7, txt: "Sissy in the middle", show: true, mStatus: 0, roomId: 803 }, //fix: location was R Living Room
                        ]
                },
                {
                    missionName: "random", mStatus: 0, title: "Random", desc: "Non linear events", task:
                        [
                            { id: 0, txt: "Bad girls get spanked", show: true, mStatus: 0, roomId: 804 },
                            { id: 1, txt: "Thumb in the bum", show: true, mStatus: 0, roomId: 804 },
                            //NOTE: step 2 has no scene yet. When it is implemented, remove the completeMission lines marked REMOVE
                            //in room804.js and the Dad Random repair in sc.load, and remove the note/notImplemented options below.
                            //Removing notImplemented also takes the [Not Fully Implemented Yet] tag off this mission, the [WIP] tag off this step and the yellow WIP name off the character on the phone.
                            { id: 2, txt: "Don't act like you've never seen a dick before", show: true, mStatus: 0, roomId: 803, note: "(Not Implemented Yet)", notImplemented: true },

                        ]
                },
            ]
        },
        {
            name: "queen", mission: [
                {
                    missionName: "meet", mStatus: 0, title: "Help", desc: "Hello weary traveler", task:
                        [
                            { id: 0, txt: "Met for the first time", show: true, mStatus: 0, roomId: 477 }, //fix: location was Jimmy's House
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
                            { id: 3, txt: "Receive the horn [Need level 10]", show: true, mStatus: 0, roomId: 483 }, //fix: text was "Recieve the horn [Need level 10]"
                        ]
                },
            ]
        },
        {
            name: "jones", mission: [
                {
                    missionName: "invite", mStatus: 0, title: "Service", desc: "Be my submissive slut. ", task: //fix: title was "Sevice"
                        [
                            { id: 0, txt: "Submissive piss whore", show: true, mStatus: 0, roomId: 170 },
                            { id: 1, txt: "Visit me at my mansion", show: true, mStatus: 0, roomId: 150 },
                            { id: 2, txt: "First time around", show: true, mStatus: 0, roomId: 154 }, //fix: location was Jones Home
                            { id: 3, txt: "Missing bitch", show: true, mStatus: 0, roomId: 150 },
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
            name: "bitch", mission: [
                {
                    missionName: "bitch", mStatus: 0, title: "Friend", desc: "Can we be friends?", task:
                        [
                            { id: 0, txt: "Caught in the basement", show: true, mStatus: 0, roomId: 155 },
                            { id: 1, txt: "Fuck that bitch", show: true, mStatus: 0, roomId: 150 },
                            { id: 2, txt: "Stay out of my room!", show: true, mStatus: 0, roomId: 155 },
                            { id: 3, txt: "I warned you!", show: true, mStatus: 0, roomId: 155 },
                        ]
                }
            ]
        },
        {
            name: "chef", mission: [
                {
                    missionName: "chef", mStatus: 0, title: "Sex", desc: "I love fucking sluts", task:
                        [
                            { id: 0, txt: "Meet", show: true, mStatus: 0, roomId: 155 },
                            { id: 1, txt: "Take his fat greasy hog in your mouth", show: true, mStatus: 0, roomId: 155 },
                        ]
                },
                {
                    missionName: "*env", mStatus: 0, title: "Look at it", desc: "Look at my penis", task:
                        [
                            { id: 0, txt: "First peek", show: true, mStatus: 0, roomId: 525 },
                            { id: 1, txt: "Touch it", show: true, mStatus: 0, roomId: 525 },
                            { id: 2, txt: "Virginity thief", show: true, mStatus: 0, roomId: 525 },
                        ]
                }
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
                {
                    missionName: "cult", mStatus: 0, title: "Exam", desc: "The transformation", task:
                        [
                            { id: 0, txt: "The examination", show: true, mStatus: 0, roomId: 956 },
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
                            { id: 1, txt: "You just can't get enough", show: true, mStatus: 0, roomId: 150, note: "(Not Implemented Yet)", notImplemented: true }, //NOTE: nothing in the game ticks this step yet - remove notImplemented when it's built
                        ]
                },
                {
                    missionName: "kidnap", mStatus: 0, title: "Slave", desc: "A sissy's place is on her knees.", task:
                        [
                            { id: 0, txt: "Taken by the cult", show: true, mStatus: 0, roomId: 950 },
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
                            { id: 2, txt: "Strip with Chris", show: true, mStatus: 0, roomId: 600 }, //fix: text was "StripWithChris "
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
                            //NOTE: NOT IMPLEMENTED YET - nothing in the game ticks this step (Brayden has no phone contact and no call scene yet).
                            //When it is implemented, remove the note/notImplemented options below.
                            //Removing notImplemented also takes the [Not Fully Implemented Yet] tag off this mission, the [WIP] tag off this step and the yellow WIP name off the character on the phone.
                            { id: 1, txt: "Call him after the Final", show: true, mStatus: 0, roomId: 210, note: "(Not Implemented Yet)", notImplemented: true },
                        ]
                },
            ]
        },
        {
            name: "priest", mission: [
                {
                    missionName: "confession", mStatus: 0, title: "Confession", desc: "Free yourself of sin", task: //fix: title was "confession"
                        [
                            { id: 0, txt: "First day", show: true, mStatus: 0, roomId: 775 },
                            { id: 1, txt: "Masturbate", show: true, mStatus: 0, roomId: 775 }, //fix: spelling (was "Masterbate")
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
                            //NOTE: step 1 has no scene yet. When it is implemented, remove the "mission complete" lines
                            //marked REMOVE in room775.js (sit_stroke) and the Web of lies repair in sc.load, and remove
                            //the note/notImplemented options below.
                            //Removing notImplemented also takes the [Not Fully Implemented Yet] tag off this mission, the [WIP] tag off this step and the yellow WIP name off the character on the phone.
                            { id: 1, txt: "Next release", show: true, mStatus: 0, roomId: 775, note: "(Not Implemented Yet)", notImplemented: true },
                        ]
                },
                {
                    missionName: "cult", mStatus: 0, title: "Connections", desc: "Meet as a sissy", task:
                        [
                            { id: 0, txt: "Reintroduce", show: true, mStatus: 0, roomId: 950 },
                            //NOTE: step 1 has no scene yet. When it is implemented, remove the "mission complete" line
                            //marked REMOVE in room950.js and the Connections repair in sc.load, and remove
                            //the note/notImplemented options below.
                            //Removing notImplemented also takes the [Not Fully Implemented Yet] tag off this mission, the [WIP] tag off this step and the yellow WIP name off the character on the phone.
                            { id: 1, txt: "Next release", show: true, mStatus: 0, roomId: 775, note: "(Not Implemented Yet)", notImplemented: true },
                        ]
                },
                {
                    missionName: "*closed", mStatus: 0, title: "Church is closed", desc: "No longer can go to the church", task:
                        [
                            { id: 0, txt: "Sold the Nun's soul", show: true, mStatus: 0, roomId: 776 }, //fix: location was Cell
                            { id: 1, txt: "Busted!", show: true, mStatus: 0, roomId: 776 }, //fix: location was Church
                        ]
                },
            ]
        },
        {
            name: "nun", mission: [
                {
                    missionName: "sin", mStatus: 0, title: "Penance", desc: "I can't help myself", task:
                        [
                            { id: 0, txt: "Grab tits", show: true, mStatus: 0, roomId: 776 }, //fix: location was Church
                            { id: 1, txt: "Took virginity", show: true, mStatus: 0, roomId: 776 }, //fix: location was Church
                            { id: 2, txt: "Cycle of sin", show: true, mStatus: 0, roomId: 776 }, //fix: location was Church
                        ]
                },
                {
                    missionName: "*sin", mStatus: 0, title: "Free her", desc: "Her only sin was falling in love.", task:
                        [
                            { id: 0, txt: "Get the list and talk to the priest", show: true, mStatus: 0, roomId: 776 }, //fix: location was Church
                            { id: 1, txt: "Freed the nun!", show: true, mStatus: 0, roomId: 776 }, //fix: location was Church
                        ]
                },
            ]
        },
        {
            name: "liam", mission: [
                {
                    missionName: "date", mStatus: 0, title: "Lose Virginity", desc: "Help him find true love, at least for a bit", task:
                        [
                            { id: 0, txt: "Chat", show: true, mStatus: 0, roomId: 585 },
                            { id: 1, txt: "Meet the girl", show: true, mStatus: 0, roomId: 585 },
                            { id: 2, txt: "Give the info to Liam", show: true, mStatus: 0, roomId: 585 },
                            { id: 3, txt: "Said she works as a waitress", show: true, mStatus: 0, roomId: 585 },
                            { id: 4, txt: "Said she's a marine biology student", show: true, mStatus: 0, roomId: 585 },
                            { id: 5, txt: "Said she likes milk", show: true, mStatus: 0, roomId: 585 },
                            { id: 6, txt: "Favorite animal is elephant", show: true, mStatus: 0, roomId: 585 },
                            { id: 7, txt: "Favorite animal is turtle", show: true, mStatus: 0, roomId: 585 },
                            { id: 8, txt: "Favorite animal is seal", show: true, mStatus: 0, roomId: 585 },
                        ]
                },
            ]
        },
        {
            name: "martha", mission: [
                //Sissy School classes, one mission per class level (sissy.st "y" in gamevariables.js).
                //Titles: Classes - Level 1, Classes - Level 2, Mid-term exam, Classes - Level 3, Classes - Level 4, Final Exam
                //(missionName class1-class6 follows the code's y value - keep it so saves still match).
                //Steps are in the order you can take them (prerequisites first). Task id = the class id in sissy.st. Statuses are copied from sissy.st by sc.syncSissyClasses().
                {
                    missionName: "class1", mStatus: 0, title: "Classes - Level 1", desc: "First year classes", task:
                        [
                            { id: 0, txt: "Sissy Intro", show: true, mStatus: 0, roomId: 209 },
                            { id: 1, txt: "Feminization 101", show: true, mStatus: 0, roomId: 180 },
                            { id: 2, txt: "Anal 101", show: true, mStatus: 0, roomId: 175 },
                            { id: 26, txt: "Bondage 107", show: true, mStatus: 0, roomId: 181 },
                            { id: 19, txt: "Feminization 102", show: true, mStatus: 0, roomId: 180 },
                        ]
                },
                {
                    missionName: "class2", mStatus: 0, title: "Classes - Level 2", desc: "Second year classes", task:
                        [
                            { id: 3, txt: "Feminization 201", show: true, mStatus: 0, roomId: 180 },
                            { id: 16, txt: "Feminization 202", show: true, mStatus: 0, roomId: 180 },
                            { id: 6, txt: "Toilet 207", show: true, mStatus: 0, roomId: 180 },
                            { id: 4, txt: "Anal 202", show: true, mStatus: 0, roomId: 175 },
                            { id: 7, txt: "Oral 206", show: true, mStatus: 0, roomId: 176 },
                            { id: 5, txt: "Chastity 201", show: true, mStatus: 0, roomId: 177 },
                            { id: 9, txt: "Cum 234", show: true, mStatus: 0, roomId: 178 },
                            { id: 29, txt: "Exposure 215", show: true, mStatus: 0, roomId: 181 },
                            { id: 8, txt: "Bondage 202", show: true, mStatus: 0, roomId: 181 },
                        ]
                },
                {
                    missionName: "class3", mStatus: 0, title: "Mid-term exam", desc: "Show your progress!", task:
                        [
                            { id: 10, txt: "Sissy mid-term", show: true, mStatus: 0, roomId: 182 },
                        ]
                },
                {
                    missionName: "class4", mStatus: 0, title: "Classes - Level 3", desc: "Third year classes", task:
                        [
                            { id: 15, txt: "Feminization 301", show: true, mStatus: 0, roomId: 180 },
                            { id: 14, txt: "Enema 305", show: true, mStatus: 0, roomId: 180 },
                            { id: 12, txt: "Anal 312", show: true, mStatus: 0, roomId: 175 },
                            { id: 18, txt: "Oral 310", show: true, mStatus: 0, roomId: 176 },
                            { id: 13, txt: "Chastity 302", show: true, mStatus: 0, roomId: 177 },
                            { id: 22, txt: "Cum 304", show: true, mStatus: 0, roomId: 178 },
                            { id: 30, txt: "Exposure 317", show: true, mStatus: 0, roomId: 170 },
                            { id: 24, txt: "Bondage 310", show: true, mStatus: 0, roomId: 181 },
                        ]
                },
                {
                    missionName: "class5", mStatus: 0, title: "Classes - Level 4", desc: "Fourth year classes", task:
                        [
                            { id: 23, txt: "Feminization 423", show: true, mStatus: 0, roomId: 180 },
                            { id: 28, txt: "Anal/Oral 421", show: true, mStatus: 0, roomId: 175 },
                            { id: 27, txt: "Chastity 442", show: true, mStatus: 0, roomId: 177 },
                            { id: 20, txt: "Bondage 436", show: true, mStatus: 0, roomId: 181 },
                        ]
                },
                {
                    missionName: "class6", mStatus: 0, title: "Final Exam", desc: "Graduation", task:
                        [
                            { id: 21, txt: "Final", show: true, mStatus: 0, roomId: 176 },
                        ]
                },
                //Sissy pills is listed last, after the class missions
                {
                    missionName: "sissy", mStatus: 0, title: "Sissy pills", desc: "Take your pills", task:
                        [
                            { id: 0, txt: "Hallway notice", show: true, mStatus: 0, roomId: 207 },
                            { id: 1, txt: "Foyer notice", show: true, mStatus: 0, roomId: 211 },
                            { id: 2, txt: "Welcome", show: true, mStatus: 0, roomId: 187 }, //ticked on your first daytime visit to Martha (elevator, white floor - room187)
                        ]
                },
            ]
        },
        {
            name: "security", mission: [
                {
                    missionName: "ranch", mStatus: 0, title: "Who am I", desc: "Secret desires", task:
                        [
                            { id: 0, txt: "For the first time", show: true, mStatus: 0, roomId: 328 },
                            { id: 1, txt: "What made you, you?", show: true, mStatus: 0, roomId: 328 },
                            { id: 2, txt: "Did you really suck his cock?", show: true, mStatus: 0, roomId: 328 },
                            { id: 3, txt: "First step. ", show: true, mStatus: 0, roomId: 328 },
                            { id: 4, txt: "Secret", show: true, mStatus: 0, roomId: 328 },
                            { id: 5, txt: "Another secret!", show: true, mStatus: 0, roomId: 328 },
                            { id: 6, txt: "For the last time", show: true, mStatus: 0, roomId: 328 },
                        ]
                },
                {
                    missionName: "cult", mStatus: 0, title: "Changes", desc: "I'm a sissy now!", task:
                        [
                            { id: 0, txt: "First meeting", show: true, mStatus: 0, roomId: 952 }, //fix: location was ranch
                        ]
                },
            ]
        },
        {
            name: "dale", mission: [
                {
                    missionName: "dale", mStatus: 0, title: "...", desc: "...", task:
                        [
                            { id: 0, txt: "Intro", show: true, mStatus: 0, roomId: 750 },
                            //NOTE: step 1 has no scene yet (Dale never asks for wine). When it is implemented, remove the
                            //completeMission line marked REMOVE in room750.js and the Dale repair in sc.load, and remove the note/notImplemented options below.
                            //Removing notImplemented also takes the [Not Fully Implemented Yet] tag off this mission, the [WIP] tag off this step and the yellow WIP name off the character on the phone.
                            { id: 1, txt: "Give me wine!", show: true, mStatus: 0, roomId: 750, note: "(Not Implemented Yet)", notImplemented: true },
                        ]
                },
            ]
        },
        {
            name: "doc", mission: [
                {
                    missionName: "doc", mStatus: 0, title: "*hic*", desc: "I'm a drunk", task:
                        [
                            { id: 0, txt: "Intro", show: true, mStatus: 0, roomId: 750 }, //fix: text was "intro"; location was ranch
                            { id: 1, txt: "Give me wine!", show: true, mStatus: 0, roomId: 750 }, //fix: location was ranch
                        ]
                },
            ]
        },
        {
            name: "elijah", mission: [
                {
                    missionName: "elijah", mStatus: 0, title: "Date", desc: "The boy's in love. ", task:
                        [
                            { id: 0, txt: "Didn't rat him out.", show: true, mStatus: 0, roomId: 408 },
                            { id: 1, txt: "Third date?", show: true, mStatus: 0, roomId: 408 },
                            { id: 2, txt: "Where is he?", show: true, mStatus: 0, roomId: 408 },
                            { id: 3, txt: "Fourth date?", show: true, mStatus: 0, roomId: 750 }, //fix: text was "Forth date?"
                            { id: 4, txt: "You tried to touch my erect penis!", show: true, mStatus: 0, roomId: 750 },
                            { id: 5, txt: "Gift for my girl.", show: true, mStatus: 0, roomId: 750 },
                            { id: 6, txt: "Hand job is still a job.", show: true, mStatus: 0, roomId: 750 },
                            { id: 7, txt: "Please don't touch my no no square", show: true, mStatus: 0, roomId: 750 },
                            { id: 8, txt: "Wait for the day we can get married", show: true, mStatus: 0, roomId: 750 } //started (In Progress) after step 7 (room750) - the ending (room975) needs it started
                        ]
                },
                {
                    missionName: "betray", mStatus: 0, title: "No date", desc: "Not going on that date. ", task:
                        [
                            { id: 0, txt: "Betrayed him. Told Missy where he is", show: true, mStatus: 0, roomId: 200 },
                            { id: 1, txt: "I just don't want to date you.", show: true, mStatus: 0, roomId: 750 }, //fix: location was Stormy's
                            { id: 2, txt: "You're a boy!", show: true, mStatus: 0, roomId: 750 },
                        ]
                },
            ]
        },
        {
            name: "lead", mission: [
                {
                    missionName: "ranch", mStatus: 0, title: "I'm the boss", desc: "Do what you're told", task:
                        [
                            { id: 0, txt: "Mooo", show: true, mStatus: 0, roomId: 328 },
                            { id: 1, txt: "Talk", show: true, mStatus: 0, roomId: 328 },
                            { id: 2, txt: "Talk", show: true, mStatus: 0, roomId: 328 },
                            { id: 3, txt: "Talk", show: true, mStatus: 0, roomId: 328 },
                            { id: 4, txt: "Talk", show: true, mStatus: 0, roomId: 328 },
                            { id: 5, txt: "Talk", show: true, mStatus: 0, roomId: 328 },
                            { id: 6, txt: "Talk", show: true, mStatus: 0, roomId: 328 },
                            { id: 7, txt: "Talk", show: true, mStatus: 0, roomId: 328 },
                            { id: 8, txt: "Talk", show: true, mStatus: 0, roomId: 328 }
                        ]
                },
            ]
        },
        {
            name: "crystal", mission: [
                {
                    missionName: "t", mStatus: 0, title: "Future", desc: "I can see your future.", task: //fix: removed extra space in desc
                        [
                            { id: 0, txt: "Why hello", show: true, mStatus: 0, roomId: 751 }, //fix: location was room 328
                        ]
                },
            ]
        },
        {
            name: "daria", mission: [
                {
                    missionName: "cabin", mStatus: 0, title: "Cabin", desc: "Welcome to my home, but leave.", task:
                        [
                            { id: 0, txt: "Introduction", show: true, mStatus: 0, roomId: 488 }, //fix: location was ranch
                        ]
                },
                {
                    missionName: "cult", mStatus: 0, title: "A new friend", desc: "Can she help?", task:
                        [
                            { id: 0, txt: "Did you poop?", show: true, mStatus: 0, roomId: 950 },
                            { id: 1, txt: "Can you help?", show: true, mStatus: 0, roomId: 950 },
                            { id: 2, txt: "You need the proper rank", show: true, mStatus: 0, roomId: 950 }, //tidy: dropped the full stop to match the other steps
                            { id: 3, txt: "A gift", show: true, mStatus: 0, roomId: 950 },
                        ]
                },
            ]
        },
        {
            name: "bodhi", mission: [
                {
                    missionName: "cult", mStatus: 0, title: "A new new friend", desc: "Can he help?", task:
                        [
                            { id: 0, txt: "I'm not trapped", show: true, mStatus: 0, roomId: 950 },
                            { id: 1, txt: "The path to enlightenment", show: true, mStatus: 0, roomId: 950 },
                            { id: 2, txt: "Did we just become friends?", show: true, mStatus: 0, roomId: 950 },
                            { id: 3, txt: "Can request work", show: true, mStatus: 0, roomId: 950 },
                            { id: 4, txt: "Steal the keys", show: true, mStatus: 0, roomId: 952 }, //tidy: was "Steal the Keys"
                            { id: 5, txt: "Have some fun?", show: true, mStatus: 0, roomId: 952 },
                        ]
                },
                {
                    missionName: "escape", mStatus: 0, title: "Escape!", desc: "Meet at the stairs", task:
                        [
                            { id: 0, txt: "Meet us at the stairs to escape!", show: true, mStatus: 0, roomId: 950 },
                        ]
                }
            ]
        },
        {
            name: "amputee", mission: [
                {
                    missionName: "chat", mStatus: 0, title: "Chat", desc: "Leave me be", task:
                        [
                            { id: 0, txt: "First attempt", show: true, mStatus: 0, roomId: 479 }, //fix: location was Cell
                            { id: 1, txt: "Second attempt", show: true, mStatus: 0, roomId: 479 }, //fix: location was Cell
                            { id: 2, txt: "Third attempt", show: true, mStatus: 0, roomId: 479 }, //fix: location was Cell
                            { id: 3, txt: "Good attempt", show: true, mStatus: 0, roomId: 479 }, //fix: location was Cell
                        ]
                },
                {
                    missionName: "escape", mStatus: 0, title: "Escape!", desc: "Meet at the stairs", task:
                        [
                            { id: 0, txt: "Meet us at the stairs to escape!", show: true, mStatus: 0, roomId: 950 },
                        ]
                }
            ]
        },
        {
            name: "a", mission: [
                {
                    missionName: "hole", mStatus: 0, title: "Welcome", desc: "Gain information", task:
                        [
                            { id: 0, txt: "Welcome friend", show: true, mStatus: 0, roomId: 480 },
                        ]
                },
                {
                    missionName: "info", mStatus: 0, title: "Learn our ways", desc: "Talk to at least three sissies. ", task:
                        [
                            { id: 0, txt: "Rim Job Recipient and Ass Eater", show: true, mStatus: 0, roomId: 478 },
                            { id: 1, txt: "Pookykins and her pets", show: true, mStatus: 0, roomId: 478 },
                            { id: 2, txt: "Glamour bitches", show: true, mStatus: 0, roomId: 478 },
                            { id: 3, txt: "Need some smokes", show: true, mStatus: 0, roomId: 478 },
                            { id: 4, txt: "Tangerine Tease", show: true, mStatus: 0, roomId: 478 },
                            { id: 5, txt: "Deb's missing leg", show: true, mStatus: 0, roomId: 479 },
                            { id: 6, txt: "Old friends in the shower", show: true, mStatus: 0, roomId: 482 },
                            { id: 7, txt: "My toilet has a name", show: true, mStatus: 0, roomId: 482 },
                            { id: 8, txt: "BJ girl", show: true, mStatus: 0, roomId: 479 },
                            { id: 9, txt: "Cock Gobbler's story", show: true, mStatus: 0, roomId: 480 },
                        ]
                },
                {
                    missionName: "secret", mStatus: 0, title: "Secret Path", desc: "Attend the secret event", task:
                        [
                            { id: 0, txt: "Are you submissive enough? ", show: true, mStatus: 0, roomId: 479 },
                            { id: 1, txt: "First time? ", show: true, mStatus: 0, roomId: 479 },
                        ]
                },
            ]
        },
        {
            name: "ff", mission: [
                {
                    missionName: "forest", mStatus: 0, title: "Forest", desc: "My slut", task:
                        [
                            { id: 0, txt: "Worship my pits", show: true, mStatus: 0, roomId: 475 },
                            { id: 1, txt: "Worship my feet", show: true, mStatus: 0, roomId: 475 },
                            { id: 2, txt: "Worship my milky mounds", show: true, mStatus: 0, roomId: 475 },
                            { id: 3, txt: "Worship my balls", show: true, mStatus: 0, roomId: 475 },
                            { id: 4, txt: "Worship my asshole", show: true, mStatus: 0, roomId: 475 },
                        ]
                },
                {
                    missionName: "sissy", mStatus: 0, title: "The sissy cave", desc: "Serve us!", task:
                        [
                            { id: 0, txt: "Accepted the invite", show: true, mStatus: 0, roomId: 479 },
                        ]
                },
            ]
        },
        {
            name: "whore", mission: [
                {
                    missionName: "*assistant", mStatus: 0, title: "Assistant", desc: "My personal ass-istant", task: //fix: desc was "My personal ass-isstant"
                        [
                            { id: 0, txt: "Come back anytime", show: true, mStatus: 0, roomId: 752 },
                        ]
                }
            ]
        },
        {
            name: "dollmaker", mission: [
                {
                    missionName: "*dolls", mStatus: 0, title: "Dolls", desc: "Living dolls", task:
                        [
                            { id: 0, txt: "Come back anytime", show: true, mStatus: 0, roomId: 310 },
                            { id: 1, txt: "Find Snuggle Ruffles", show: true, mStatus: 0, roomId: 310 },
                        ]
                }
            ]
        },
        {
            name: "jada", mission: [
                {
                    missionName: "panties", mStatus: 0, title: "Panties", desc: "Living dolls", task:
                        [
                            { id: 0, txt: "First time panties", show: true, mStatus: 0, roomId: 402 },
                        ]
                }
            ]
        },
    ];

}

sc.init();

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

sc.replace = function (txt) {
    if (txt.includes("#")) {
        const output = txt.replace(/#([^#]+)#/g, (match, internalString) => {
            return sc.n(internalString);
        });
        return output;
    }
    return txt;
};

//Chat text: ##name## becomes a colored name with a hover/tap card (see chat.js).
//Uses double # so hex colors and "#2" in chat text are left alone. Single #name# stays for sc.replace (trophies).
sc.replaceChat = function (txt) {
    if (typeof txt !== "string" || txt.indexOf("##") === -1)
        return txt;
    return txt.replace(/##([^#]+)##/g, function (match, token) {
        //##name:s## = singular form (same as g.makeSingular(sc.n(name)))
        var parts = token.split(":");
        var name = parts[0];
        var display = sc.chatName(name);
        if (parts[1] === "s")
            display = g.makeSingular(display);
        return '<span class="chat-name" data-char="' + name + '" style="color:' + sc.chatColor(name) + '">' + display + '</span>';
    });
};

sc.chatName = function (name) {
    if (name[0] !== "!" && name[0] !== "*" && sc.i(name) === -1)
        return name;
    return sc.n(name);
};

//sc.char hex lifted to at least 75% lightness so it reads on the dark chat box.
sc.chatColorCache = {};
sc.chatColor = function (name) {
    var hex = "";
    if (name[0] !== "!" && name[0] !== "*") {
        var i = sc.i(name);
        if (i > -1 && sc.char[i].hex)
            hex = sc.char[i].hex;
    }
    if (!/^#[0-9a-fA-F]{6}$/.test(hex))
        return "#ffe7a3";
    if (sc.chatColorCache[hex])
        return sc.chatColorCache[hex];

    var r = parseInt(hex.substr(1, 2), 16) / 255;
    var g2 = parseInt(hex.substr(3, 2), 16) / 255;
    var b = parseInt(hex.substr(5, 2), 16) / 255;
    var max = Math.max(r, g2, b), min = Math.min(r, g2, b);
    var h = 0, s = 0, l = (max + min) / 2;
    if (max !== min) {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        if (max === r) h = (g2 - b) / d + (g2 < b ? 6 : 0);
        else if (max === g2) h = (b - r) / d + 2;
        else h = (r - g2) / d + 4;
        h /= 6;
    }
    l = Math.max(l, 0.75);
    var color = "hsl(" + Math.round(h * 360) + ", " + Math.round(s * 100) + "%, " + Math.round(l * 100) + "%)";
    sc.chatColorCache[hex] = color;
    return color;
};

 //mStatus 0 = not started, 1 - 99 = inprogress, 100 = complete - success, 101 = complete - fail

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
    else if (mStatus === 102)
        return "Closed";
    return "In Progress";

}

sc.setcharname = function (name, newName) {
    sc.char[sc.i(name)].display = newName;
};

sc.show = function (name) {
    if (name === "all") {
        for (let i = 0; i < sc.char.length; i++)
            sc.char[i].show = true;
    }
    else
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
        //            { step: 5, txt: "[M] Talk about her boyfriend.", m: [16] },
        //            { step: 6, txt: "[M] Talk to her on the couch during the day or early evening. Eat that ass!", m: [16] },
        //            { step: 7, txt: "[M] Talk to her on the couch during the day or early evening. Lesson learned.", m: [16] },
        //            { step: 8, txt: "[M] On the couch - Pee pee slap.", img: "", m: [16] },
        //            { step: 9, txt: "[M] Visit her in her room between 8PM and 10PM. It only happens after you've been kicked out due to playing truth or dare with the girls. ", m: [16] },
        //            { step: 10, txt: "[M] Visit her in her room between 8PM and 10PM. ", m: [16] },
        //            { step: 11, txt: "[M] Progress Lola and Eva's story line. Then talk to her in her room between 8PM to 10PM.", m: [16] },
        //            { step: 12, txt: "[M] End of masculine route. Find the bonus content.", img: "evaLolaBlow", m: [16] },
        //        ];
        //    else
        //        tempLevel = [
        //            { step: 0, txt: "[F] Sissy! Get caught at home crossdressing. Purchase a polka dot dress at the mall for Sunday outing.", m: [16, 400] },
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
        //    //    { step: 6, txt: "Sleep at Zoey's on five different nights.", m: [500] },
        //    //    { step: 10, txt: "Sleep once more to see her night visitor", m: [500] },
        //    //    {
        //    //        step: 11, txt: "Raise her love to max. You can help her clean up at the bar or play video games at her home. Once you're " +
        //    //            "there wear a chasity device and buy the handcuffs from the Toy Store and help her clean her bar.", m: [525]
        //    //    },
        //    //    { step: 12, txt: "Keep helping her clean until her love meter is full. Get toy and cuffs - Voyeur", m: [525] },
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
                case 2: return "Almost there"; //fix: spelling/wording (was "Almsot there")
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

sc.getLevelDetails = function (name) {
    let i = sc.i(name);
    return { l: sc.char[i].l, c: sc.char[i].c };
};

sc.modLevel = function (name, amount, targetLevel = 10) {
    let i = sc.i(name);
    var char = sc.char[i];
    var addedLevels = 0;

    if (char.l > targetLevel || amount === 0)
        return;

    if (amount > 0) {
        if (gv.get("difficulty") === 0)
            amount = Math.floor(amount * 1.5);
        var currentTotalPoints = (char.l * 100) + char.c;
        var newTotalPoints = currentTotalPoints + amount;

        var projectedLevel = Math.floor(newTotalPoints / 100);
        var projectedPoints = newTotalPoints % 100;

        if (projectedLevel >= targetLevel) {
            // If they hit or exceed the target, pin to Level 5, 99 Points
            addedLevels = targetLevel - char.l;
            char.l = targetLevel;
            char.c = 99;
        } else {
            addedLevels = projectedLevel - char.l;
            char.l = projectedLevel;
            char.c = projectedPoints;
        }

        if (addedLevels > 0) {
            g.popUpNotice("Level Up! " + char.display + " is now Level " + char.l + ".");
        } else {
            g.popUpNotice(char.display + " gained " + amount + " points.");
        }

    } else if (amount < 0) {
        char.c = Math.max(0, char.c + amount);
        g.popUpNotice(char.display + " points decreased.");
    }
};

sc.setLevel = function (name, level, points) {
    let i = sc.i(name);
    sc.char[i].c = points;
    sc.char[i].l = level;
    return true;
}

//Mission ----------------------------------------------------------------------

sc.startMission = function (name, missionName, mStatus = 1) {
    if (sc.getMission(name, missionName).notStarted) {
        sc.setMission(name, missionName, mStatus);
        sc.closeMissionIfAllTasksDone(name, missionName); //tasks may have been finished before the mission started
    }
};

sc.getMissionEntry = function (name, missionName) {
    for (var i = 0; i < sc.charMission.length; i++) {
        if (sc.charMission[i].name === name) {
            for (var j = 0; j < sc.charMission[i].mission.length; j++) {
                if (sc.charMission[i].mission[j].missionName === missionName) {
                    return {
                        mission: sc.charMission[i].mission[j],
                        i: i,
                        j: j
                    };
                }
            }
        }
    }
    //fix for v 28.0-28.2
    if (name === "janice" && missionName === "*cuck") {
        sc.startMission("janice", "*doggy")
        return null;
    }
    console.log("mission not found: " + name + " " + missionName);
    return null;
};

//true when the character has no missions, or none of their missions has any steps
sc.hasNoTasks = function (name) {
    for (let i = 0; i < sc.charMission.length; i++) {
        if (sc.charMission[i].name === name) {
            let missions = sc.charMission[i].mission || [];
            for (let j = 0; j < missions.length; j++)
                if (missions[j].task && missions[j].task.length > 0)
                    return false;
        }
    }
    return true;
};

//true when the character has missions and every one of them is complete (Completed, Failed or Closed)
sc.allMissionsComplete = function (name) {
    for (let i = 0; i < sc.charMission.length; i++) {
        if (sc.charMission[i].name === name) {
            let missions = sc.charMission[i].mission;
            if (!missions || missions.length === 0)
                return false;
            for (let j = 0; j < missions.length; j++) {
                if (!(missions[j].mStatus > 99) && !sc.isAltPathMission(name, missions[j].missionName)) //a mission ruled out by another path counts as done
                    return false;
            }
            return true;
        }
    }
    return false;
};

sc.getMission = function (name, missionName) {
    var missionEntry = sc.getMissionEntry(name, missionName);
    if (missionEntry === null)
        return null;

    var mission = missionEntry.mission;
    return {
        mStatus: mission.mStatus,
        notStarted: mission.mStatus < 1,
        inProgress: mission.mStatus > 0 && mission.mStatus < 100,
        complete: mission.mStatus > 99,
        success: mission.mStatus === 100,
        fail: mission.mStatus === 101,
        startedOrComplete: mission.mStatus > 0,
        startedOrSuccess: mission.mStatus > 0 && mission.mStatus !== 101,
        i: missionEntry.i,
        j: missionEntry.j
    };
};

sc.getMissionTaskEntry = function (name, missionName, taskId) {
    var missionInfo = sc.getMission(name, missionName);
    if (missionInfo === null)
        return null;

    var taskList = sc.charMission[missionInfo.i].mission[missionInfo.j].task;
    for (var i = 0; i < taskList.length; i++) {
        if (taskList[i].id === taskId) {
            return {
                task: taskList[i],
                mission: missionInfo,
                i: i
            };
        }
    }

    return null;
};

sc.getMissionTask = function (name, missionName, taskId) {
    var taskEntry = sc.getMissionTaskEntry(name, missionName, taskId);
    if (taskEntry === null)
        return null;

    var mstatus = taskEntry.task.mStatus;
    return {
        mStatus: mstatus,
        notStarted: mstatus < 1,
        inProgress: mstatus > 0 && mstatus < 100,
        complete: mstatus > 99,
        success: mstatus === 100,
        fail: mstatus === 101,
        startedOrComplete: mstatus > 0,
        i: taskEntry.i
    };
};

sc.taskGetStepEndMission = function (name) {
    for (let i = 0; i < sc.charMission.length; i++) {
        if (name === sc.charMission[i].name) {
            for (let j = 0; j < sc.charMission[i].mission.length; j++) {
                if (sc.charMission[i].mission[j].missionName.startsWith("*")
                    && sc.charMission[i].mission[j].mStatus > 0
                    && sc.charMission[i].mission[j].mStatus < 102) {

                    let step = sc.taskGetStep(name, sc.charMission[i].mission[j].missionName);
                    return { missionName: sc.charMission[i].mission[j].missionName, step: step };
                }
            }
        }
    }
    return { missionName: "", step: -1 };
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

//---------------------------------------------------------------------------
//Auto-complete: when every task of a mission is finished, the mission itself is
//marked finished too, instead of staying "In Progress" forever.
//
//sc.autoCloseSkip: missions the game still needs "In Progress" after their tasks
//are done (ending missions, and missions checked with .inProgress/.complete/
//.success/.fail, or that a later scene can still fail). These are never touched.
//
//sc.autoCloseStepLookup: missions read through sc.taskGetStep. Those are only
//auto-closed when every task succeeded, because a Failed/Closed mission makes
//taskGetStep return -2 and would change which scene plays.
//---------------------------------------------------------------------------
sc.autoCloseSkip = [
    "bigguy/ex", "bitch/bitch", "bodhi/escape", "chuck/fuck",
    "cop/*escape", "dog/vacation", "dollmaker/*dolls", "dolly/happy", "elijah/elijah",
    "envy/breakup", "envy/gf", "envy/hypno", "envy/meet", "eva/*cumdump", "eva/*tom2",
    "eva/*wife", "eva/massage", "eva/talk", "g/spar", "holly/case",
    "janice/*boyfriend", "janice/*cuck", "janice/breakup", //"janice/*doggy" removed: My doggy completes when both steps are done (nothing checks it In Progress)
    "janice/cuck", "janice/date", "janice/dog-x", "janice/femdom", "janice/webcam", "jeffery/*panties",
    "jones/invite", "kinsey/*post", "landlord/*cumdump", "landlord/*mother", "landlord/sissy",
    "landlord/spermbank", "liam/date", "lola/*cumdump", "lola/*tom2", "lola/*wife",
    "lola/massage", "lola/sissy", "lola/talk", "nun/*sin", "nun/sin",
    "p/*missy", "ppgirl/pp", "priest/*closed", "rachel/ranch", "ralph/cult", "river/*gf",
    "security/ranch", "spanky/hypno", "tina/*leave", "whore/*assistant", "zoey/*bff",
    "zoey/*help", "zoey/*wife", "zoey/cheating", "zoey/friends"
];

sc.autoCloseStepLookup = [
    "amputee/chat", "bigguy/cult", "bigguy/rent", "bigguy/sissy", "bigguy/straight", "bitch/bitch",
    "bodhi/cult", "cecilia/gloryhole", "chad/membership", "chuck/fuck", "cindy/fuck", "cop/bitch",
    "crystal/t", "daria/cult", "doc/doc", "dolly/case", "elijah/elijah", "envy/gf",
    "envy/hucow", "envy/hypno", "envy/meet", "eva/*cumdump", "eva/*tom2", "eva/fuck",
    "eva/massage", "eva/sissy", "eva/talk", "ff/forest", "g/workout", "holly/case",
    "janice/bitch", "janice/cuck", "janice/date", "janice/dog", "janice/femdom", "janice/webcam",
    "jones/invite", "kinsey/milk", "landlord/man", "landlord/sissy", "landlord/talk", "lead/ranch",
    "liam/date", "lola/*cumdump", "lola/*wife", "lola/date", "lola/massage", "lola/sissy",
    "lola/talk", "lola/tom", "molly/case", "nun/sin", "philbert/bully", "ppgirl/pp",
    "ralph/cult", "raven/bitch", "security/cult", "security/ranch", "stormy/property", "tiffany/friend",
    "tim/fuck", "tom/chat", "wolf/pack", "zoey/friends", "zoey/sex"
];

//Missions with a repeatable step (task option repeatable: true): once every other step is done
//(a step whose orTask partner succeeded counts as done), tick the repeatable steps and mark the
//mission Completed. The repeatable scenes keep playing - they only check steps, not the mission.
//Missions the game marks Failed only because the player went down a different storyline
//(not because they did something wrong). The phone shows these as [Another Path Chosen] with every
//step struck out. The mission itself stays Failed (101) so every game check works the same.
//Each rule returns true when the failure came from the other path.
sc.altPathRules = {
    "envy/hypno": function () { return true; },          //Envy moved on to the Girlfriend path
    "spanky/hypno": function () { return true; },        //added 2026-11-24: only fails when you go Envy's Girlfriend way (room301/room404 "envy100")
    "elijah/elijah": function () { return true; },       //Betray path taken (Missy case / break up)
    "holly/happy": function () { return true; },         //Beaver case: Happy vs Mad
    "holly/mad": function () { return true; },
    "dolly/happy": function () { return true; },
    "dolly/mad": function () { return true; },
    "molly/happy": function () { return true; },
    "molly/mad": function () { return true; },
    "zoey/friends": function () { return true; },        //chose to destroy the friendship (Ex-Friends path)
    "bodhi/escape": function () { return true; },        //Daria path taken
    //Janice: these fail when you break up with her (Breakup path). Dog can also fail on its own.
    "janice/date": function () { return sc.getMission("janice", "breakup").startedOrComplete; },
    "janice/webcam": function () { return sc.getMission("janice", "breakup").startedOrComplete; },
    "janice/datr": function () { return sc.getMission("janice", "breakup").startedOrComplete; },
    "janice/dog-x": function () { return sc.getMission("janice", "breakup").startedOrComplete; },
    "janice/femdom": function () { return sc.getMission("janice", "breakup").startedOrComplete; }
};

//Missions that were never started and now can't be, because every scene that starts them is
//behind a story choice you've already made the other way. Shown as [Another Path Chosen] too.
sc.altPathNotStartedRules = {
    //Envy: Hypno -> Hucow and Hypno -> Girlfriend are the two paths. "Failed me!" can only start from a failed Girlfriend.
    "bigguy/ex": function () { return sc.getMissionTask("bigguy", "sissy", 4).complete; },  //confessed and took Dick's side instead of fighting him
    //Ralph: saving him on his lawn (Missy's case) starts "My hero!" in Chat; his Cult mission only starts if that case goes badly
    "ralph/cult": function () { return sc.getMissionTask("ralph", "room", 9).startedOrComplete; },
    //Dick "Cult": only starts in the cult's Cum Donation once Lola's "Sissy" reached "Everyone gets fucked!" (step 13).
    //If her Sissy mission ended without it, his Cult mission can never start.
    "bigguy/cult": function () {
        var lolaSissy = sc.getMission("lola", "sissy");
        return (lolaSissy.complete || lolaSissy.fail) && !sc.getMissionTask("lola", "sissy", 13).startedOrComplete;
    },
    //Zoey: "Friends" ends either way - help her with Chloé (Chloé and Fuck me please follow) or end the friendship (Ex-friends)
    "zoey/xfriends": function () { return sc.getMission("zoey", "friends").success; },
    "zoey/cheating": function () { return sc.getMission("zoey", "friends").fail; },
    "zoey/sex": function () { return sc.getMission("zoey", "friends").fail; },   //needs Chloé completed
    "envy/hucow": function () { return sc.getMission("envy", "hypno").fail; },          //went the Girlfriend way
    "envy/gf": function () { return sc.getMission("envy", "hypno").success; },          //went the Hucow way
    "envy/breakup": function () {                                                         //she passed the test, or you went the Hucow way
        return sc.getMission("envy", "gf").success || sc.getMission("envy", "hypno").success;
    },
    //Janice "Break Up": every breakup choice is in Getting to know you., the dog-sitting return,
    //Mine! (The talk / Surprise) or the start of Bad dog!. Once you stayed with her through all of
    //those, there is nothing left that can start it.
    "janice/breakup": function () {
        return sc.getMission("janice", "date").success &&
            sc.getMission("janice", "femdom").success &&
            sc.getMissionTask("janice", "femdom", 6).complete &&
            sc.getMission("janice", "dog-x").startedOrComplete;
    }
};

//A mission that isn't finished and whose every remaining step is blocked by "Secret Known" can never be completed.
//The phone shows it in red as [Failed - Secret Known] (the saved status is not changed).
sc.isSecretFailedMission = function (mission) {
    if (!mission || mission.mStatus > 99)
        return false;
    var left = mission.task.filter(function (t) { return t.mStatus < 100 && !t.optional && !t.notImplemented; });
    return left.length > 0 && left.every(function (t) { return t.blocked && t.note === "Secret Known"; });
};

//Missions that can't be finished any more because the story moved on (not a choice between two paths).
//They show [<label>] instead of [Another Path Chosen], and only their unfinished steps are struck out.
//They're still closed as Completed later by the story (e.g. the time jump in room954), which replaces this.
//Only "is the ranch case finished" is checked, so it works wherever you were in these missions: done steps stay ticked,
//a mission finished before the case stays Completed, a Failed one stays Failed, and nothing changes while the case is open.
//A failed case also shuts the ranch; the time jump then completes the guard's and Philbert's missions but not Kinsey's Ranch.
sc.closedByStoryRules = {
    //the ranch shuts down when Missy's ranch case is done (Rachel is arrested; the farm only shows the "so quiet" scene)
    "security/ranch": { label: "Ranch Closed", rule: function () { return missy.cases[19].complete; } }, //CUM Guard "Who am I"
    "kinsey/ranch": { label: "Ranch Closed", rule: function () { return missy.cases[19].complete; } },   //Kinsey "Ranch" (Break out plan #2)
    "philbert/barn": { label: "Ranch Closed", rule: function () { return missy.cases[19].complete; } },  //Philbert "Barn" (starts in the barn after "Who am I")
};
sc.isClosedByStory = function (name, missionName) {
    var r = sc.closedByStoryRules[name + "/" + missionName];
    var m = sc.getMission(name, missionName);
    return !!(r && m !== null && m.mStatus < 100 && typeof missy !== "undefined" && missy.cases && r.rule());
};
//The bracketed tag shown for a ruled-out mission
sc.altPathLabel = function (name, missionName) {
    return sc.isClosedByStory(name, missionName) ? sc.closedByStoryRules[name + "/" + missionName].label : "Another Path Chosen";
};

sc.isAltPathMission = function (name, missionName) {
    var key = name + "/" + missionName;
    var m = sc.getMission(name, missionName);
    if (m === null)
        return false;
    if (sc.isClosedByStory(name, missionName))
        return true;
    if (m.fail && sc.altPathRules[key])
        return sc.altPathRules[key]();
    if (m.notStarted && sc.altPathNotStartedRules[key])
        return sc.altPathNotStartedRules[key]();
    return false;
};

//Copy Sissy School class progress (sissy.st) into Mistress Martha's "Classes - Level N" missions.
//A class step is ticked when the class is done. A level is In Progress once any of its classes is
//done or can be taken (all its prerequisite classes done), and Completed when every class is done.
//During the final week the Final step lists the final's tasks underneath it.
sc.syncSissyClasses = function () {
    sc.closeLandlordMisc(); //Mother's Random (runs whenever the phone opens)
    if (typeof sissy === "undefined" || !Array.isArray(sissy.st) || sissy.st.length === 0)
        return;
    var mi = sc.charMission.findIndex(function (c) { return c.name === "martha"; });
    if (mi < 0)
        return;
    var classDone = function (id) { return sissy.st[id] !== undefined && sissy.st[id].ach; };
    sc.charMission[mi].mission.forEach(function (m) {
        if (!m.missionName.startsWith("class"))
            return;
        var done = 0, open = false;
        m.task.forEach(function (t) {
            var c = sissy.st[t.id];
            t.mStatus = classDone(t.id) ? 100 : 0;
            if (t.mStatus === 100)
                done++;
            else if (c && t.id === 21) { //Final: needs every Level 4 and 5 class (same rule as the class board, room210)
                if (sissy.st.every(function (o, k) { return k === 21 || !o.active || o.y < 4 || o.ach; }))
                    open = true;
            }
            else if (c && c.pID.every(classDone))
                open = true;
            delete t.note;
        });
        if (m.task.length > 0 && done === m.task.length)
            m.mStatus = 100;
        else if (done > 0 || open)
            m.mStatus = 1;
        else
            m.mStatus = 0;
    });
    //"Sneaky sleep fuck" needs the girl drunk, and she only gets drunk at Truth or Dare / Spin the Bottle, which stop
    //once her Sissy mission starts (your secret is known). Then the step can't be done: strike it out with a note.
    var blockStep = function (name, missionName, taskId, blocked, note) {
        var e = sc.getMissionTaskEntry(name, missionName, taskId);
        if (e === null)
            return;
        if (blocked && e.task.mStatus < 100) {
            e.task.blocked = true;
            e.task.note = note;
        }
        else {
            delete e.task.blocked;
            if (e.task.note === note)
                delete e.task.note;
        }
    };
    //Steps that can only be done before a character finds out your secret. Once her Sissy mission has started
    //(the secret is out), the scenes that tick them are gone, so an unfinished step is struck out with "Secret Known".
    //  Lola / Eva: everything on their old chat menu (talk, massage, drinking games, practice dates,
    //  sneaky sleep fuck - which needs her drunk from the games). Mother: "Now you're a man!" (her masculine route).
    //only when that character's own secret flag is on (and her Sissy mission has started, which removes the scenes)
    var lolaOut = sc.getSecret("lola").secretOut && sc.getMission("lola", "sissy").startedOrComplete;
    var evaOut = sc.getSecret("eva").secretOut && sc.getMission("eva", "sissy").startedOrComplete;
    var momOut = sc.getSecret("landlord").secretOut && sc.getMission("landlord", "sissy").startedOrComplete;
    var secretRules = [
        ["lola", "talk", null, lolaOut], ["lola", "massage", null, lolaOut], ["lola", "games", null, lolaOut],
        ["lola", "date", null, lolaOut], ["lola", "random", [1], lolaOut],
        ["eva", "talk", null, evaOut], ["eva", "massage", null, evaOut], ["eva", "games", null, evaOut],
        ["eva", "random", [0], evaOut],
        ["landlord", "man", null, momOut]
        //not marked: steps blocked by ANOTHER character's secret (Eva's Dirty sex steps on Lola's dates,
        //Mother's "Kicked out"/"Chastity Check" after a sneaky sleep fuck)
    ];
    secretRules.forEach(function (r) {
        var m = sc.getMission(r[0], r[1]);
        if (m === null)
            return;
        sc.charMission[m.i].mission[m.j].task.forEach(function (t) {
            if (r[2] === null || r[2].indexOf(t.id) > -1)
                blockStep(r[0], r[1], t.id, r[3], "Secret Known");
        });
    });
    //(the phone puts "Secret Known" at the end of each struck step when it fits, else on one line per mission)
    //Ms. Pussywinks' "The Pink Room" needs you to graduate first - say so under its first step
    var pink = sc.getMissionTaskEntry("p", "pink", 0);
    if (pink !== null) {
        if (!classDone(21) && pink.task.mStatus < 100)
            pink.task.note = "(Must graduate from the Sissy School)";
        else
            delete pink.task.note;
    }
    //final week: show the final's tasks under the Final step
    if (gv.get("sissySchoolClass") === "finalx" && !classDone(21)) {
        var fin = sc.getMissionTaskEntry("martha", "class6", 21);
        if (fin !== null) {
            //each task is crossed off with (Done) once you've done it
            var finDone = function (txt, done, doneTxt) {
                return done ? '<span style="text-decoration: line-through;">' + txt + '</span> (' + (doneTxt || "Done") + ')' : txt;
            };
            var pageant = gv.get("sissyfinal_pageant");
            fin.task.note = [
                "Final week - days left: " + future.get("sissyfinal"),
                finDone("1. Friday Night: Strip at the strip club", gv.get("sissyfinal_stripper") === true),
                finDone("2. Saturday Night: Visit the Pink Room at Missy's before " + nav.convertTime(18, 0), pageant !== null, pageant ? "Done - won the crown" : "Done"),
                finDone("3. At the fast food restaurant get a boy's phone number.", gv.get("sissyfinal_brayden") === true),
                "4. Get as many creampies as you can!"
            ];
            sc.charMission[mi].mission.forEach(function (m) { if (m.missionName === "class6") m.mStatus = 1; });
        }
    }
};

//Repairs that need the game variables (gv) - called from char.js after gv.load (gv loads after sc.load)
sc.loadRepairsAfterGv = function () {
    //Cult "Slave": "Taken by the cult" was never ticked (fixed in room949.js) - repair saves already taken by the cult
    //(the Missy Cult case is done, or the cult rank has moved on from the starting "Slave")
    if (!sc.getMission("cult", "kidnap").complete &&
        ((typeof missy !== "undefined" && missy.cases[22] && missy.cases[22].complete) || gv.get("cultRank") !== "Slave")) {
        sc.startMission("cult", "kidnap");
        sc.completeMissionTask("cult", "kidnap", 0);
    }
    //Jeffery "Cult": "Have you brought me the panties?" was never ticked (fixed in room958.js) - repair saves that have
    //already reached him on a delivery
    if (!sc.getMission("jeffery", "cult").complete && gv.get("cultFoundJeffery")) {
        sc.startMission("jeffery", "cult");
        sc.completeMissionTask("jeffery", "cult", 0);
    }
    //"Took Monster Size Dick" was never awarded in Bondage 436 (fixed in room181.js) - give it to saves that passed the class
    if (typeof sissy !== "undefined" && sissy.st[20] && sissy.st[20].ach && !trophy.st[25].ach)
        trophy.add(25);
    //Stacy's "Cheerleader": "Sunday Big game!" and "You're a cheerleader now" were never ticked - repair older
    //saves that already played the first big game (cheer level 8+)
    var stacyCheer = levels.get("cheer");
    if (stacyCheer !== null && stacyCheer.l > 7 && sc.getMission("stacy", "cheer").inProgress) {
        sc.completeMissionTask("stacy", "cheer", 5);
        sc.completeMissionTask("stacy", "cheer", 6);
    }
    //Cecilia's park stall scene stops after the cult - older saves that already went through it (lolapostcult is set at the cult's end)
    if (gv.get("lolapostcult") !== null && !gv.get("ceciliaGloryClosed"))
        gv.set("ceciliaGloryClosed", true);
    //Treyvon's "Doorman": step 1 was auto-ticked by an earlier patch right after step 0. It now needs a real
    //repeat lobby scene (doormanRepeat) - undo the auto-tick on older saves
    if (sc.getMissionTask("treyvon", "doorman", 1).complete && !gv.get("doormanRepeat")) {
        sc.charMission[sc.getMission("treyvon", "doorman").i].mission[sc.getMission("treyvon", "doorman").j].task[1].mStatus = 0;
        sc.setMission("treyvon", "doorman", 1);
    }
    //Candy's "Cheerleader!": "Meet Saturday morning" was never ticked - repair older saves that already practiced
    var cheer = levels.get("cheer");
    if (sc.getMission("candy", "cheer").inProgress && sc.getMissionTask("candy", "cheer", 0).notStarted && cheer !== null && (cheer.l > 0 || cheer.c > 0))
        sc.completeMissionTask("candy", "cheer", 0);
    //Candy's "Cheerleader!": "Cheerleading practice." ticks on your 2nd practice, counted in cheerPractices.
    //Older saves have no count yet: one practice if the cheer level is still 0, otherwise two (estimated once).
    if (cheer !== null && sc.getMissionTask("candy", "cheer", 0).complete && gv.get("cheerPractices") === 0)
        gv.set("cheerPractices", (cheer.l > 0 || sc.getMissionTask("candy", "cheer", 1).complete) ? 2 : 1);
    if (cheer !== null && sc.getMissionTask("candy", "cheer", 0).complete) {
        var cheerM = sc.getMission("candy", "cheer");
        if (sc.getMissionTask("candy", "cheer", 1).complete && gv.get("cheerPractices") < 2) {
            sc.charMission[cheerM.i].mission[cheerM.j].task[1].mStatus = 0;
            sc.setMission("candy", "cheer", 1);
        }
        else if (sc.getMissionTask("candy", "cheer", 1).notStarted && gv.get("cheerPractices") > 1)
            sc.completeMissionTask("candy", "cheer", 1);
    }
    //older saves: a ticked "First time." means you've already been punished once
    if (sc.getMissionTask("black", "punish", 0).complete && gv.get("blackPunishCount") < 1)
        gv.set("blackPunishCount", 1);
    //Black's "Punishment": "Repeat customer" was auto-ticked by an earlier patch even if you were only punished once.
    //It now needs a real 2nd punishment (counted in blackPunishCount) - undo the auto-tick on older saves
    if (sc.getMissionTask("black", "punish", 1).complete && gv.get("blackPunishCount") < 2) {
        sc.charMission[sc.getMission("black", "punish").i].mission[sc.getMission("black", "punish").j].task[1].mStatus = 0;
        sc.setMission("black", "punish", 1);
    }
};

//Mother's "Random": "Chastity Check" is an ongoing check - it stays started (never ticked) so her daily
//chastity checks keep happening. The mission counts as Completed once every other event is done and the
//checks have started.
sc.closeLandlordMisc = function () {
    var m = sc.getMission("landlord", "misc");
    if (m === null || m.complete)
        return;
    var tasks = sc.charMission[m.i].mission[m.j].task;
    var ok = tasks.every(function (t) { return t.id === 5 ? t.mStatus > 0 : t.mStatus > 99; });
    if (ok)
        sc.setMission("landlord", "misc", 100);
};

sc.isRepeatableMission = function (mission) {
    for (let i = 0; i < mission.task.length; i++)
        if (mission.task[i].repeatable)
            return true;
    return false;
};

sc.closeRepeatableMission = function (name, missionName) {
    let m = sc.getMission(name, missionName);
    if (m === null || m.notStarted || m.fail)
        return false;
    let mission = sc.charMission[m.i].mission[m.j];
    if (!sc.isRepeatableMission(mission))
        return false;
    let tasks = mission.task;
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].repeatable && tasks[i].needsRepeat && tasks[i].mStatus < 100)
            return true; //needsRepeat: this repeatable step must actually be done once before the mission completes
        if (tasks[i].repeatable || tasks[i].mStatus > 99 || tasks[i].optional) //optional steps don't hold the mission open
            continue;
        if (tasks[i].orTask !== undefined && tasks[tasks[i].orTask] && tasks[tasks[i].orTask].mStatus === 100)
            continue;
        return true; //repeatable mission, but not finished yet
    }
    for (let i = 0; i < tasks.length; i++)
        if (tasks[i].repeatable && tasks[i].mStatus < 100)
            tasks[i].mStatus = 100;
    if (mission.mStatus < 100)
        mission.mStatus = 100;
    return true;
};

sc.closeMissionIfAllTasksDone = function (name, missionName) {
    let key = name + "/" + missionName;
    if (sc.closeRepeatableMission(name, missionName))
        return; //handled above
    if (sc.autoCloseSkip.indexOf(key) > -1)
        return;
    let m = sc.getMission(name, missionName);
    if (m === null || !m.inProgress)
        return;
    let tasks = sc.charMission[m.i].mission[m.j].task;
    if (tasks.length === 0)
        return;
    //fix (2026-11-24): only the steps that are counted are compared below. Before, a skipped optional step still
    //counted in tasks.length, so a mission finished without its optional step was set Closed instead of Completed.
    //Also skipped now: a hidden step that was never found, and the unchosen orTask step while it is still unstarted.
    let success = 0, fail = 0, counted = 0;
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].optional && tasks[i].mStatus < 100)
            continue; //optional steps don't hold the mission open
        if (tasks[i].mStatus < 100 && tasks[i].orTask !== undefined && tasks.some(function (t) { return t.id === tasks[i].orTask && t.mStatus === 100; }))
            continue; //the other choice was taken - this one no longer needs doing
        if (tasks[i].mStatus < 100 && !tasks[i].show)
            continue; //hidden step that was never found
        if (tasks[i].mStatus < 100)
            return; //still something left to do
        counted++;
        if (tasks[i].mStatus === 100) success++;
        else if (tasks[i].mStatus === 101 && tasks[i].orTask !== undefined && tasks.some(function (t) { return t.id === tasks[i].orTask && t.mStatus === 100; }))
            success++; //the other choice of an either/or (orTask) step was taken - counts as done
        else if (tasks[i].mStatus === 101) fail++;
    }
    if (counted === 0)
        return;
    if (success === counted)
        sc.setMission(name, missionName, 100); //Completed
    else if (sc.autoCloseStepLookup.indexOf(key) > -1)
        return; //some tasks failed and scenes depend on this mission's step - leave it alone
    else if (fail === counted)
        sc.setMission(name, missionName, 101); //Failed
    else
        sc.setMission(name, missionName, 102); //Closed
};

sc.closeAllFinishedMissions = function () {
    for (let i = 0; i < sc.charMission.length; i++)
        for (let j = 0; j < sc.charMission[i].mission.length; j++)
            sc.closeMissionIfAllTasksDone(sc.charMission[i].name, sc.charMission[i].mission[j].missionName);
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

sc.completeMissionTopLevelOnly = function (name, missionName) {
    let ind = sc.getMission(name, missionName);
    if (sc.charMission[ind.i].mission[ind.j].mStatus > 99) //fix: compared the mission object itself to 99 (always false), now its mStatus
        return;
    let total = 0;
    let completedSuccess = 0;
    let completedFail = 0;
    for (let i = 0; i < sc.charMission[ind.i].mission[ind.j].task.length; i++) {
        if (sc.charMission[ind.i].mission[ind.j].task[i].show) {
            total += 1;
            if (sc.charMission[ind.i].mission[ind.j].task[i].mStatus === 100)
                completedSuccess += 1;
            else if (sc.charMission[ind.i].mission[ind.j].task[i].mStatus === 101)
                completedFail += 1;
        }
        if (sc.charMission[ind.i].mission[ind.j].task[i].mStatus > 0 && sc.charMission[ind.i].mission[ind.j].task[i].mStatus < 100)
            sc.charMission[ind.i].mission[ind.j].task[i].mStatus = 102;
    }
    
    if (completedSuccess > (total * .75) && completedFail === 0)
        sc.charMission[ind.i].mission[ind.j].mStatus = 100;
    else
        sc.charMission[ind.i].mission[ind.j].mStatus = 102;
};

sc.completeMissionTaskAll = function (name, missionName, taskId, success = true) {
    let ind = sc.getMission(name, missionName);
    for (let i = 0; i < sc.charMission[ind.i].mission[ind.j].task.length; i++) {
        if (sc.charMission[ind.i].mission[ind.j].task[i].id <= taskId)
            sc.charMission[ind.i].mission[ind.j].task[i].mStatus = success ? 100 : 101;
    }
    sc.closeMissionIfAllTasksDone(name, missionName); //fix: close the mission when this ticks its last steps
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
    var taskEntry = sc.getMissionTaskEntry(name, missionName, taskId);
    if (taskEntry !== null) { //fix: ticking a step now starts its mission if needed and closes it once every step is done
        taskEntry.task.mStatus += modNum;
        sc.autoStartMission(name, missionName);
        sc.closeMissionIfAllTasksDone(name, missionName);
    }
};

sc.completeMission = function (name, missionName, success = true, closed = false) {
    let thisMstatus;
    if (closed)
        thisMstatus = 102;
    else if (success)
        thisMstatus = 100
    else
        thisMstatus = 101;
    if (!sc.getMission(name, missionName).complete)
        sc.setMission(name, missionName, thisMstatus);
};

sc.taskGetStep = function (name, missionName) {
    var ml = sc.getMission(name, missionName);
    if (ml.notStarted)
        return -1;
    else if (ml.fail || ml.mStatus === 102)
        return -2;
    for (var k = 0; k < sc.charMission[ml.i].mission[ml.j].task.length; k++) {
        if (sc.charMission[ml.i].mission[ml.j].task[k].mStatus < 100)
            return sc.charMission[ml.i].mission[ml.j].task[k].id;
    }

    return sc.charMission[ml.i].mission[ml.j].task.length;
};

sc.setMission = function (name, missionName, mStatus) {
    var ml = sc.getMission(name, missionName);
    sc.charMission[ml.i].mission[ml.j].mStatus = mStatus;
};

//Event-tracker missions the game never starts itself. They switch to In Progress
//as soon as any of their steps is started or completed.
sc.autoStartMissions = [
    "landlord/misc",    //Landlady/Mother "Random"
    "lola/random",      //Lola "Misc"
    "eva/random",       //Eva "Random"
    "janice/random",    //Janice "Misc Events"
    "ralphsdad/random"  //Ralph's Dad "Random"
];

sc.autoStartMission = function (name, missionName) {
    if (sc.autoStartMissions.indexOf(name + "/" + missionName) < 0)
        return;
    let m = sc.getMission(name, missionName);
    if (m === null || !m.notStarted)
        return;
    let tasks = sc.charMission[m.i].mission[m.j].task;
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].mStatus > 0) {
            sc.setMission(name, missionName, 1);
            return;
        }
    }
};

sc.setMissionTask = function (name, missionName, taskId, mStatus) {
    var taskEntry = sc.getMissionTaskEntry(name, missionName, taskId);
    if (taskEntry !== null) { //fix: ticking a step now starts its mission if needed and closes it once every step is done
        taskEntry.task.mStatus = mStatus;
        sc.autoStartMission(name, missionName);
        if (mStatus > 99)
            sc.closeMissionIfAllTasksDone(name, missionName);
    }
}

sc.modSecret = function (name, amount) {
    let i = sc.i(name);

    //a missing amount or a broken (null / NaN) secret would turn into NaN and save as null
    if (typeof amount !== "number" || isNaN(amount)) {
        console.log("bad secret: " + name);
        return;
    }
    if (typeof sc.char[i].secret !== "number" || isNaN(sc.char[i].secret))
        sc.char[i].secret = 0;

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
                if (sc.getMission("lola", "sissy").notStarted && gv.get("cultEscape") === null) {
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

                    sc.completeMission("lola", "massage", false, true);
                    sc.completeMission("lola", "games", false, true);
                    sc.completeMission("lola", "date", sc.getMissionTask("lola", "date", 5).complete);
                    sc.completeMission("lola", "talk", false, true);

                    
                    sc.completeMission("eva", "massage", false, true);
                    sc.completeMission("eva", "games", false, true);
                    sc.completeMission("eva", "fuck", sc.getMissionTask("eva", "fuck", 1).complete);
                    sc.completeMission("eva", "talk", false, true);

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
    var i = sc.i(name);
    if (i < 0)
        return 0;
    return sc.char[i].step;
};

sc.setstep = function (name, step) {
    if (step < 0) {
        sc.setEvent(name, step);
        return;
    }
    var i = sc.i(name);
    if (i < 0)
        return;
    sc.char[i].step = step;
};

sc.incstep = function (name, amount) {
    var i = sc.i(name);
    if (i < 0)
        return;
    sc.char[i].step += amount;
};

sc.getEvent = function (name, step) {
    var i = sc.i(name);
    if (i < 0)
        return false;
    if (!Array.isArray(sc.char[i].events))
        sc.char[i].events = [];
    return sc.char[i].events.includes(step);
};

sc.setEvent = function (name, step) {
    var i = sc.i(name);
    if (i < 0)
        return;
    if (!Array.isArray(sc.char[i].events))
        sc.char[i].events = [];
    if (!sc.char[i].events.includes(step))
        sc.char[i].events.push(step);
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
            step: sc.char[i].step,
            events: Array.isArray(sc.char[i].events) ? sc.char[i].events.slice() : [],
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
                sc.char[j].step = typeof ra.char[i].step === "number" ? ra.char[i].step : 0;
                sc.char[j].events = Array.isArray(ra.char[i].events) ? ra.char[i].events.slice() : [];
                sc.char[j].c = ra.char[i].c;
                sc.char[j].l = ra.char[i].l;
                //null comes from an old NaN secret (see sc.modSecret); load it as 0
                if (typeof ra.char[i].secret === "number" && !isNaN(ra.char[i].secret))
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

    //fix for v 0.25.3 for people that started it 
    //only when "find a nice boy" (sissy step 5) is still open and its timer is gone - not after you
    //already picked Tom or Chad (picking kills the timer, which made this fail Tom on every load)
    if (sc.getMissionTask("lola", "sissy", 5).inProgress && future.get("lolaboy") < 0 && sc.getMission("lola", "tom").notStarted) {
        future.kill("lolaboy");
        sc.completeMissionTask("lola", "sissy", 5, false);
        sc.completeMission("lola", "tom", false); 
    }
    //repair saves where the line above wrongly failed Lola's Tom mission after you picked Tom
    //(picking Tom ticks Tom step 0; picking Chad never does)
    else if (sc.getMission("lola", "tom").fail && sc.getMissionTask("lola", "tom", 0).complete
        && !sc.getMissionTask("lola", "tom", 2).complete) {
        sc.setMission("lola", "tom", 1);
        sc.completeMissionTask("lola", "sissy", 5);
    }

    //Janice Webcam "Meet my femboy!" was never ticked (see room321) - repair older saves
    if (sc.getMissionTask("janice", "femdom", 3).complete && sc.getMissionTask("janice", "webcam", 4).notStarted)
        sc.completeMissionTask("janice", "webcam", 4);
    //Envy's "Girlfriend": completes after step 6 because step 7 is not implemented yet - repair older saves
    //(remove when step 7 is implemented - see the note on that step)
    if (sc.getMissionTask("envy", "gf", 6).complete && sc.getMission("envy", "gf").inProgress && sc.getMission("envy", "breakup").notStarted)
        sc.completeMission("envy", "gf", true);
    //Dick's "Laius": completes at step 2 because step 3 is not implemented yet - repair older saves
    //(remove when step 3 is implemented - see the note on that step)
    if (sc.getMissionTask("bigguy", "straight", 2).complete && sc.getMission("bigguy", "straight").inProgress)
        sc.completeMission("bigguy", "straight", true);
    //Jeffery's "You're hired!": "Get to work!" was never ticked by any scene. You are hired after
    //the Beaver case, which already had you working shifts - repair older saves
    if (sc.getMission("jeffery", "work").inProgress && sc.getMissionTask("jeffery", "work", 0).notStarted)
        sc.completeMissionTask("jeffery", "work", 0);
    //Father O'Malley's "Web of lies": completes after step 0 because step 1 is not implemented yet - repair older saves
    //(remove when step 1 is implemented - see the note on that step)
    if (sc.getMissionTask("priest", "dirty", 0).complete && sc.getMission("priest", "dirty").inProgress)
        sc.completeMission("priest", "dirty", true);
    //Janice's "Mine!": completes after step 6 because step 7 is not implemented yet - repair older saves
    //(remove when step 7 is implemented - see the note on that step)
    if (sc.getMissionTask("janice", "femdom", 6).complete && sc.getMission("janice", "femdom").inProgress && sc.getMission("janice", "breakup").notStarted)
        sc.completeMission("janice", "femdom", true);
    //Mistress Martha's "Sissy pills" was never started even after its steps were ticked - repair older saves
    if (sc.getMission("martha", "sissy").notStarted && sc.getMissionTask("martha", "sissy", 0).complete)
        sc.startMission("martha", "sissy");
    //Ms. Pussywinks' "The Pink Room" was never started, and "Gloryhole first time" was only ever started - repair older saves
    if (sc.getMission("p", "pink").notStarted && sc.getMissionTask("p", "pink", 0).complete)
        sc.startMission("p", "pink");
    if (sc.getMissionTask("p", "pink", 3).inProgress)
        sc.completeMissionTask("p", "pink", 3);
    //Zoey's "Friends": "I need your help!" was never ticked (the scene ticked step 4 again) - repair older saves
    if (sc.getMission("zoey", "friends").success && sc.getMission("zoey", "cheating").startedOrComplete && sc.getMissionTask("zoey", "friends", 5).notStarted)
        sc.charMission[sc.getMission("zoey", "friends").i].mission[sc.getMission("zoey", "friends").j].task[5].mStatus = 100;
    //Orchid's "Party Bitches!": completes after "Meet" because step 1 is not implemented yet - repair older saves
    //(remove when step 1 is implemented - see the note on that step)
    if (sc.getMissionTask("orchid", "slut", 0).complete && sc.getMission("orchid", "slut").inProgress)
        sc.completeMission("orchid", "slut", true);
    //Envy's "Hucow": completes after "Drake" because step 2 is not implemented yet - repair older saves
    //(remove when step 2 is implemented - see the note on that step)
    if (sc.getMissionTask("envy", "hucow", 1).complete && sc.getMission("envy", "hucow").inProgress)
        sc.completeMission("envy", "hucow", true);
    //Envy's "Failed me!": one of its three endings happening now completes it - repair older saves
    if (sc.getMission("envy", "breakup").inProgress &&
        [0, 1, 2].some(function (k) { return sc.getMissionTask("envy", "breakup", k).complete; }))
        sc.completeMission("envy", "breakup", true);
    //Tiffany's "Friends!": the change room is a choice (one of steps 1/2 is always Failed), so the mission never
    //auto-completed. It now completes at "Cheerleader!" - repair older saves
    if (sc.getMissionTask("tiffany", "friend", 6).complete && sc.getMission("tiffany", "friend").inProgress)
        sc.completeMission("tiffany", "friend", true);
    //Kei's "Boy's Game": completes after "Me too" because step 4 is not implemented yet - repair older saves
    //(REMOVE this repair when that step is implemented - see the NOTE on that step)
    if (sc.getMissionTask("kei", "cards", 3).complete && sc.getMission("kei", "cards").inProgress)
        sc.completeMission("kei", "cards", true);
    //Jimmy's "Boy's Game": completes after step 0 because step 1 is not implemented yet - repair older saves
    //(REMOVE this repair when that step is implemented - see the NOTE on that step)
    if (sc.getMissionTask("jimmy", "cards", 0).complete && sc.getMission("jimmy", "cards").inProgress)
        sc.completeMission("jimmy", "cards", true);
    //Spanky's "Hypno": "Purchase Hypno Tapes." was never ticked, and the Hucow-path ending (half prices) never
    //completed the mission - repair older saves
    if (sc.getMission("spanky", "hypno").startedOrComplete && sc.getMissionTask("spanky", "hypno", 0).notStarted)
        sc.charMission[sc.getMission("spanky", "hypno").i].mission[sc.getMission("spanky", "hypno").j].task[0].mStatus = 100;
    if (sc.getMission("spanky", "hypno").inProgress && sc.getMissionTask("spanky", "hypno", 1).complete)
        sc.completeMission("spanky", "hypno", true);
    //Spanky's "Hypno": the Girlfriend path (triple prices) used to mark it Failed - it now ends Completed - repair older saves
    if (sc.getMission("spanky", "hypno").fail && sc.getMissionTask("spanky", "hypno", 2).complete)
        sc.setMission("spanky", "hypno", 100);
    //Ralph's Dad "Random": completes once steps 0 and 1 are done because step 2 is not implemented yet - repair older saves
    //(REMOVE this repair when that step is implemented - see the NOTE on that step)
    if (sc.getMissionTask("ralphsdad", "random", 0).complete && sc.getMissionTask("ralphsdad", "random", 1).complete && !sc.getMission("ralphsdad", "random").complete)
        sc.completeMission("ralphsdad", "random", true);
    //Dolly's "Friends": completes after "Warm cup of Gooey goo" (the repeat scenes still play) - repair older saves
    if (sc.getMission("dolly", "happy").inProgress && sc.getMissionTask("dolly", "happy", 1).complete)
        sc.completeMission("dolly", "happy", true);
    //Rachel's "Ranch": "First day" was never ticked - repair older saves that reached the ranch
    if (sc.getMission("rachel", "ranch").startedOrComplete && sc.getMissionTask("rachel", "ranch", 0).notStarted) {
        sc.completeMissionTask("rachel", "ranch", 0);
        sc.completeMission("rachel", "ranch", true);
    }
    if (sc.getMission("rachel", "ranch").startedOrComplete && sc.getMission("rachel", "milk").inProgress) {
        sc.completeMissionTask("rachel", "milk", 1);
        sc.completeMission("rachel", "milk", true);
    }
    //Big Cop "Park": "You know why you keep coming back." was never ticked - repair older saves (mission already completed)
    if (sc.getMission("cop", "bitch").success && sc.getMissionTask("cop", "bitch", 3).notStarted)
        sc.charMission[sc.getMission("cop", "bitch").i].mission[sc.getMission("cop", "bitch").j].task[3].mStatus = 100;
    //Dale: "Intro" was never ticked (called without a step id), and step 1 is not implemented yet - repair older saves
    //(REMOVE this repair when that step is implemented - see the NOTE on that step)
    if (sc.getMission("dale", "dale").inProgress) {
        sc.completeMissionTask("dale", "dale", 0);
        sc.completeMission("dale", "dale", true);
    }
    //Sister Jane's "Free her": "Get the list and talk to the priest" was never ticked - repair older saves
    if (sc.getMission("nun", "*sin").success && sc.getMissionTask("nun", "*sin", 0).notStarted)
        sc.charMission[sc.getMission("nun", "*sin").i].mission[sc.getMission("nun", "*sin").j].task[0].mStatus = 100;
    //Mother's "Naughty girl": completes once the polka dot dress step is done - repair older saves
    if (sc.getMissionTask("landlord", "sissy", 1).complete && sc.getMission("landlord", "sissy").inProgress)
        sc.completeMission("landlord", "sissy", true);
    sc.closeLandlordMisc();
    //Philbert's "Bully": completes after "Everyone knows" because step 3 is not implemented yet - repair older saves
    //(REMOVE this repair when that step is implemented - see the NOTE on that step)
    if (sc.getMissionTask("philbert", "bully", 2).complete && sc.getMission("philbert", "bully").inProgress)
        sc.completeMission("philbert", "bully", true);
    //Father O'Mally's "Connections": completes after "Reintroduce" because step 1 is not implemented yet - repair older saves
    //(REMOVE this repair when that step is implemented - see the NOTE on that step)
    if (sc.getMissionTask("priest", "cult", 0).complete && sc.getMission("priest", "cult").inProgress)
        sc.completeMission("priest", "cult", true);
    //Sporty's "Corrupt the sissy": completes after "strip club" because step 0 is not implemented yet - repair older saves
    //(REMOVE this repair when that step is implemented - see the NOTE on that step)
    if (sc.getMissionTask("sporty", "corrupt", 1).complete && !sc.getMission("sporty", "corrupt").complete)
        sc.completeMission("sporty", "corrupt", true);
    //Cecilia's "Glory hole!": never completed after both steps (it was kept In Progress so her stall scene
    //keeps playing - room451 now checks ceciliaGloryClosed instead) - repair older saves
    if (sc.getMission("cecilia", "gloryhole").inProgress && sc.getMissionTask("cecilia", "gloryhole", 0).complete && sc.getMissionTask("cecilia", "gloryhole", 1).complete)
        sc.completeMission("cecilia", "gloryhole", true);
    //Kinsey's "Fellow Hucow": only completed when you start working on the ranch (room328). It now completes
    //as soon as "Thanks" (the energy drink) is ticked - repair older saves
    if (sc.getMission("kinsey", "milk").inProgress && sc.getMissionTask("kinsey", "milk", 4).complete)
        sc.completeMission("kinsey", "milk", true);
    //Stormy's "Property": never completed after picking one of its either/or steps - older saves are repaired by
    //sc.closeAllFinishedMissions() at the end of sc.load (it now counts a failed orTask step as done when its other choice succeeded)
    //Elijah's "Date": "Wait for the day we can get married" was never started after step 7, so his ending
    //(room975) could never be picked - repair older saves
    if (sc.getMissionTask("elijah", "elijah", 7).complete && sc.getMissionTask("elijah", "elijah", 8).notStarted && !sc.getMission("elijah", "elijah").fail)
        sc.startMissionTask("elijah", "elijah", 8);
    //Dr. Strangelove: never shown on the phone after you met him - repair older saves
    if (!sc.getMission("doc", "doc").notStarted && !sc.char[sc.i("doc")].show)
        sc.show("doc");
    //Zoey's "Ex-friends": "Always trust your friends." was never ticked, so it stayed In Progress - repair older saves
    if (sc.getMission("zoey", "xfriends").inProgress && sc.getMissionTask("zoey", "xfriends", 0).notStarted)
        sc.completeMissionTask("zoey", "xfriends", 0);
    //Bitch Face's "Friend": never completed after "I warned you!" when you followed her - repair older saves
    //(running away fails it, so an In Progress mission with every step ticked means you followed her)
    if (sc.getMission("bitch", "bitch").inProgress && sc.getMissionTask("bitch", "bitch", 3).complete)
        sc.completeMission("bitch", "bitch", true);
    //Zoey's "Chloé": "Spy on her." is ticked when the mission starts - repair older saves
    if (sc.getMission("zoey", "cheating").inProgress && sc.getMissionTask("zoey", "cheating", 0).notStarted)
        sc.completeMissionTask("zoey", "cheating", 0);
    //fix: River's Bully was started without ticking "Welcome back wedgie" - repair older saves
    if (sc.getMission("river", "bully").inProgress && sc.getMissionTask("river", "bully", 0).notStarted)
        sc.completeMissionTask("river", "bully", 0);

    //fix: start event-tracker missions that already have steps done (older saves)
    for (i = 0; i < sc.autoStartMissions.length; i++)
        sc.autoStartMission(sc.autoStartMissions[i].split("/")[0], sc.autoStartMissions[i].split("/")[1]);

    //fix missions left In Progress after all their tasks were completed
    sc.syncSissyClasses(); //Mistress Martha's class missions follow the Sissy School progress
    sc.closeAllFinishedMissions();

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
            if (!sc.getMission("bigguy", "ex").inProgress) {
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
            var lolaStep = sc.taskGetStep("lola", "sissy");
            if (sc.getMission("lola", "*wife").inProgress) {
                if (char === "lola") {
                    timeline = [
                        //sunday
                        { d: [0], hstart: 0, hend: 7, roomId: 10, alt: null }, //bedroom
                        { d: [0], hstart: 7, hend: 10, roomId: 775, alt: null }, //church
                        { d: [0], hstart: 10, hend: 11, roomId: 12, alt: null }, //bathroom
                        { d: [0], hstart: 11, hend: 24, roomId: 10, alt: null }, //their room

                        //monday, wed, frid
                        { d: [1, 2, 3, 4, 5], hstart: 0, hend: 7, roomId: 10, alt: null }, //bedroom
                        { d: [1, 2, 3, 4, 5], hstart: 7, hend: 9, roomId: 25, alt: null }, //kitchen
                        { d: [1, 2, 3, 4, 5], hstart: 9, hend: 14, roomId: 900, alt: null }, //school
                        { d: [1, 2, 3, 4, 5], hstart: 14, hend: 17, roomId: 901, alt: null }, //pool
                        { d: [1, 2, 3, 4, 5], hstart: 17, hend: 18, roomId: 25, alt: null }, //dining 
                        { d: [1, 2, 3, 4, 5], hstart: 18, hend: 24, roomId: 10, alt: null }, //room

                        //saturday
                        { d: [6], hstart: 0, hend: 7, roomId: 10, alt: null }, //bathroom
                        { d: [6], hstart: 7, hend: 9, roomId: 25, alt: null }, //bathroom
                        { d: [6], hstart: 9, hend: 24, roomId: 10, alt: null }, //bedroom room
                    ];
                }
                else {
                    timeline = [
                        //sunday
                        { d: [0, 6], hstart: 0, hend: 7, roomId: 13, alt: null }, //bedroom
                        { d: [0, 6], hstart: 7, hend: 10, roomId: 775, alt: null }, //church
                        { d: [0, 6], hstart: 10, hend: 11, roomId: 12, alt: null }, //bathroom
                        { d: [0, 6], hstart: 11, hend: 19, roomId: 400, alt: null }, //their room
                        { d: [0, 6], hstart: 19, hend: 24, roomId: 13, alt: null }, //their room

                        //monday, wed, frid
                        { d: [1, 2, 3, 4, 5], hstart: 0, hend: 7, roomId: 13, alt: null }, //bedroom
                        { d: [1, 2, 3, 4, 5], hstart: 7, hend: 9, roomId: 25, alt: null }, //kitchen
                        { d: [1, 2, 3, 4, 5], hstart: 9, hend: 14, roomId: 900, alt: null }, //school
                        { d: [1, 2, 3, 4, 5], hstart: 14, hend: 17, roomId: 400, alt: null }, //pool
                        { d: [1, 2, 3, 4, 5], hstart: 17, hend: 18, roomId: 25, alt: null }, //dining 
                        { d: [1, 2, 3, 4, 5], hstart: 18, hend: 24, roomId: 13, alt: null }, //room
                    ];
                }
            }
            else if (sc.getMission("lola", "*tom2").inProgress) {
                if (char === "lola") {
                    timeline = [
                        //sunday
                        { d: [0], hstart: 0, hend: 7, roomId: 13, alt: null }, //bedroom
                        { d: [0], hstart: 7, hend: 10, roomId: 775, alt: null }, //church
                        { d: [0], hstart: 10, hend: 11, roomId: 12, alt: null }, //bathroom
                        { d: [0], hstart: 11, hend: 24, roomId: 13, alt: null }, //their room

                        //monday, wed, frid
                        { d: [1, 2, 3, 4, 5], hstart: 0, hend: 7, roomId: 13, alt: null }, //bedroom
                        { d: [1, 2, 3, 4, 5], hstart: 7, hend: 9, roomId: 25, alt: null }, //kitchen
                        { d: [1, 2, 3, 4, 5], hstart: 9, hend: 14, roomId: 900, alt: null }, //school
                        { d: [1, 2, 3, 4, 5], hstart: 14, hend: 17, roomId: 901, alt: null }, //pool
                        { d: [1, 2, 3, 4, 5], hstart: 17, hend: 18, roomId: 25, alt: null }, //dining 
                        { d: [1, 2, 3, 4, 5], hstart: 18, hend: 24, roomId: 13, alt: null }, //room

                        //saturday
                        { d: [6], hstart: 0, hend: 7, roomId: 13, alt: null }, //bathroom
                        { d: [6], hstart: 7, hend: 9, roomId: 25, alt: null }, //bathroom
                        { d: [6], hstart: 9, hend: 24, roomId: 13, alt: null }, //bedroom room
                    ];
                }
                else {
                    timeline = [
                        //sunday
                        { d: [0, 6], hstart: 0, hend: 7, roomId: 10, alt: null }, //bedroom
                        { d: [0, 6], hstart: 7, hend: 10, roomId: 775, alt: null }, //church
                        { d: [0, 6], hstart: 10, hend: 11, roomId: 12, alt: null }, //bathroom
                        { d: [0, 6], hstart: 11, hend: 19, roomId: 400, alt: null }, //their room
                        { d: [0, 6], hstart: 19, hend: 24, roomId: 10, alt: null }, //their room

                        //monday, wed, frid
                        { d: [1, 2, 3, 4, 5], hstart: 0, hend: 7, roomId: 10, alt: null }, //bedroom
                        { d: [1, 2, 3, 4, 5], hstart: 7, hend: 9, roomId: 25, alt: null }, //kitchen
                        { d: [1, 2, 3, 4, 5], hstart: 9, hend: 14, roomId: 900, alt: null }, //school
                        { d: [1, 2, 3, 4, 5], hstart: 14, hend: 17, roomId: 400, alt: null }, //pool
                        { d: [1, 2, 3, 4, 5], hstart: 17, hend: 18, roomId: 25, alt: null }, //dining 
                        { d: [1, 2, 3, 4, 5], hstart: 18, hend: 24, roomId: 10, alt: null }, //room
                    ];
                }
            }
            else if (lolaStep === 11 || lolaStep === 12) {
                timeline = [
                    //sunday
                    { d: [0], hstart: 0, hend: 7, roomId: 13, alt: null }, //bedroom
                    { d: [0], hstart: 7, hend: 10, roomId: 775, alt: null }, //church
                    { d: [0], hstart: 10, hend: 11, roomId: 12, alt: null }, //bathroom
                    { d: [0], hstart: 11, hend: 24, roomId: 13, alt: null }, //their room

                    //monday, wed, frid
                    { d: [1, 3, 5], hstart: 0, hend: 7, roomId: 13, alt: null }, //bedroom
                    { d: [1, 3, 5], hstart: 7, hend: 14, roomId: 900, alt: null }, //school
                    { d: [1, 3, 5], hstart: 14, hend: 17, roomId: char === "lola" ? 901 : 400, alt: null }, //pool
                    { d: [1, 3, 5], hstart: 17, hend: 24, roomId: 13, alt: null }, //room

                    //tuesday thursday
                    { d: [2, 4], hstart: 0, hend: 7, roomId: 13, alt: null }, //bedroom
                    { d: [2, 4], hstart: 7, hend: 8, roomId: 12, alt: null }, //bathroom
                    { d: [2, 4], hstart: 8, hend: 17, roomId: 900, alt: null }, //school
                    { d: [2, 4], hstart: 17, hend: 24, roomId: 13, alt: null }, //dining

                    //saturday
                    { d: [6], hstart: 0, hend: 24, roomId: 13, alt: null }, //bathroom
                ];
            }
            else {
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
            }
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
        case "ralphsdad":
            var rdadhome = [1, 2, 3, 4];
            if (rdadhome.includes(g.dt.getDay())) {
                switch (gv.get("ralphcycle") % 3) {
                    case 0:
                        timeline = [
                            { d: [0, 1, 2, 3, 4, 5, 6], hstart: 0, hend: 7, roomId: 803, alt: null }, //bedroom
                            { d: [0, 1, 2, 3, 4, 5, 6], hstart: 0, hend: 20, roomId: 801, alt: null }, //pool
                            { d: [0, 1, 2, 3, 4, 5, 6], hstart: 20, hend: 24, roomId: 803, alt: null }, //bedroom
                        ];
                        break;
                    case 1:
                        timeline = [
                            { d: [0, 1, 2, 3, 4, 5, 6], hstart: 0, hend: 7, roomId: 803, alt: null }, //bedroom
                            { d: [0, 1, 2, 3, 4, 5, 6], hstart: 0, hend: 20, roomId: 801, alt: null }, //pool
                            { d: [0, 1, 2, 3, 4, 5, 6], hstart: 20, hend: 24, roomId: 803, alt: null }, //bedroom
                        ];
                        break;
                    case 2:
                        timeline = [
                            { d: [0, 1, 2, 3, 4, 5, 6], hstart: 0, hend: 7, roomId: 803, alt: null }, //bedroom
                            { d: [0, 1, 2, 3, 4, 5, 6], hstart: 0, hend: 20, roomId: 801, alt: null }, //pool
                            { d: [0, 1, 2, 3, 4, 5, 6], hstart: 20, hend: 24, roomId: 803, alt: null }, //bedroom
                        ];
                        break;
                }
            }
            else {
                timeline = [
                    { d: [0, 1, 2, 3, 4, 5, 6], hstart: 0, hend: 24, roomId: null, alt: "Traveling for work" }, //bedroom
                ];
            }
            break;
        case "ralphsmom":
            switch (gv.get("ralphcycle") % 3) {
                case 0:
                    timeline = [
                        { d: [0, 1, 2, 3, 4, 5, 6], hstart: 0, hend: 7, roomId: 803, alt: null }, //bedroom
                        { d: [0, 1, 2, 3, 4, 5, 6], hstart: 0, hend: 20, roomId: 800, alt: null }, //pool
                        { d: [0, 1, 2, 3, 4, 5, 6], hstart: 20, hend: 24, roomId: 803, alt: null }, //bedroom
                    ];
                    break;
                case 1:
                    timeline = [
                        { d: [0, 1, 2, 3, 4, 5, 6], hstart: 0, hend: 7, roomId: 803, alt: null }, //bedroom
                        { d: [0, 1, 2, 3, 4, 5, 6], hstart: 0, hend: 20, roomId: 803, alt: null }, //pool
                        { d: [0, 1, 2, 3, 4, 5, 6], hstart: 20, hend: 24, roomId: 803, alt: null }, //bedroom
                    ];
                    break;
                case 2:
                    timeline = [
                        { d: [0, 1, 2, 3, 4, 5, 6], hstart: 0, hend: 7, roomId: 803, alt: null }, //bedroom
                        { d: [0, 1, 2, 3, 4, 5, 6], hstart: 0, hend: 20, roomId: 804, alt: null }, //pool
                        { d: [0, 1, 2, 3, 4, 5, 6], hstart: 20, hend: 24, roomId: 803, alt: null }, //bedroom
                    ];
                    break;
            }
            break;
        case "ralph":
            timeline = [
                { d: [0, 1, 2, 3, 4, 5, 6], hstart: 0, hend: 24, roomId: 802, alt: null }, //bedroom
            ];
            break;
        case "daria":
            timeline = [
                { d: [0, 1, 2, 3, 4, 5, 6], hstart: 0, hend: 9, roomId: 488, alt: null }, //home
                { d: [0, 1, 2, 3, 4, 5, 6], hstart: 9, hend: 17, roomId: 949, alt: null }, //cult
                { d: [0, 1, 2, 3, 4, 5, 6], hstart: 17, hend: 24, roomId: 488, alt: null }, //home
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

sc.selectButtonPosition = function (index) {
    return {
        left: 400 + ((Math.abs(index) % 2) * 700),
        top: 200 + (Math.floor(index / 2) * 120)
    };
};

sc.drawSelectionButton = function (config, roomId = null) {
    if (roomId === null)
        roomId = g.roomID;

    nav.button({
        "type": config.type,
        "name": config.name,
        "left": config.left,
        "top": config.top,
        "width": config.width,
        "height": config.height,
        "image": config.image
    }, roomId);
};

sc.selectBg = function (name) {
    sc.drawSelectionButton({
        type: "img",
        name: name,
        left: 0,
        top: 0,
        width: 1920,
        height: 1080,
        image: "1001_rand/black_25.png"
    });
};

sc.select = function (name, img, i, sRoomId = null) {
    const position = sc.selectButtonPosition(i);
    sc.drawSelectionButton({
        type: "btn",
        name: name,
        left: position.left,
        top: position.top,
        width: 600,
        height: 100,
        image: img
    }, sRoomId);
};

sc.selectCancel = function (name, i) {
    sc.select(name, "1001_rand/icon_cancel.png", i);
};

sc.selectBack = function (name, i) {
    sc.select(name, "1001_rand/icon_back.png", i);
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
                        { s: "eva", t: "I knew if I played with your wiener you'd get tottally weird" },
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
                        invoker.invoke(7, "main");
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
                            invoker.invoke(450, "btnclick", "lolaPark");
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
                            invoker.invoke(450, "btnclick", "lolaPark12");
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


sc.trivialLookup = {
    "!blank": { display: "DEV NOTES", image: "blank.png" },
    "!burlysecurity": { display: "Security", image: "burlySecurity.png" },
    "!fatdogguy": { display: "Fatty McGillicutty", image: "fatdogguy.png" },
    "!constworker0": { display: "Tits McGee", image: "constWorker0.png" },
    "!sanaria": { display: "Sanaria", image: "sanaria.png" },
    "!philbert": { display: "Philbert", image: "philbert.png" },
    "!sporty": { display: "Sporty", image: "sporty.png" },
    "!jeremy": { display: "Jeremy", image: "jeremy.png" },
    "!martin": { display: "Martin", image: "martin.png" },
    "!missyguardday": { display: "Guard", image: "missyguardday.png" },
    "!missyguardnight": { display: "Guard", image: "missyguardnight.png" },
    "!stoner": { display: "Stoney", image: "stoner.png" },
    "!cheezy": { display: "Cheezy Poof", image: "cheezy.png" },
    "!nips": { display: "Nips McTits", image: "nips.png" },
    "!lep": { display: "Telchar", image: "lep.png" },
    "bitch": { display: "Bitch Face", image: "bitch.png" },
    "!twat": { display: "Twaty Honey", image: "twat.png" },
    "!madison": { display: "Nurse Madison", image: "madison.png" },
    "!boy": { display: "Boy", image: "boy.png" },
    "!man": { display: "Man", image: "boy.png" },
    "!girl": { display: "Girl", image: "girl.png" },
    "!oldlady": { display: "Old lady", image: "oldlady.png" },
    "!football": { display: "Player", image: "football.png" },
    "!waiter": { display: "Waiter", image: "waiter.png" },
    "!plumber": { display: "Plumber", image: "plumber.png" },
    "!bill": { display: "Bill", image: "bill.png" },
    "!punk": { display: "Punk Rocker", image: "punk.png" },
    "!m": { display: "Marilyn", image: "m.png" },
    "!peeguy": { display: "Peeing Asshole", image: "peeguy.png" },
    "!chem": { display: "Chemist", image: "chem.png" },
    "!rex": { display: "Mr. Rex", image: "rex.png" },
    "!gamerboy": { display: "Gamer", image: "gamerboy.png" },
    "!gamergirl": { display: "Miss M.", image: "gamergirl.png" },
    "!gameman": { display: "Some guy", image: "gameman.png" },
    "!g": { display: "Geoffrey", image: "g.png" },
    "!glory": { display: "Glory Hole Customer", image: "unk.png" },
    "!poppy": { display: "Poppy", image: "poppy.png" },
    "!juniper": { display: "Juniper", image: "juniper.png" },
    "!emily": { display: "Emily", image: "emily.png" },
    "!cindy": { display: "Cindy", image: "cindy.png" },
    "!missx": { display: "Mistress Anaru", image: "missx.png" },
    "!jenna": { display: "Jenna", image: "jenna.png" },
    "!footballguard": { display: "Security", image: "footballguard.png" },
    "!airwrecka": { display: "Airwrecka", image: "airwrecka.png" },
    "!boxes": { display: "Mike", image: "boxes.png" },
    "!bwc": { display: "BWC", image: "bwc.png" },
    "!bbc": { display: "BBC", image: "bbc.png" },
    "!bbc2": { display: "Other BBC", image: "bbc.png" },
    "!deb": { display: "Deb", image: "deb.png" },
    "!latika": { display: "Latika", image: "latika.png" },
    "!doofus": { display: "Doofus", image: "doofus.png" },
    "!custbitch": { display: "Mean girl", image: "custbitch.png" },
    "!jabari": { display: "Jabari", image: "jabari.png" },
    "!rape0": { display: "Rapist", image: "rape0.png" },
    "!rape12": { display: "Big Benny Cox", image: "rape12.png" },
    "!duo13": { display: "Abbot", image: "duo13.png" },
    "!duo13a": { display: "Costello", image: "duo13a.png" },
    "!peggy": { display: "Peggy", image: "peggy.png" },
    "!caveslave": { display: "Slave", image: "caveslave.png" },
    "!damselle": { display: "Damselle", image: "damselle.png" },
    "!futa0": { display: "Domina Dix", image: "futa0.png" },
    "!futa1": { display: "Jessica", image: "futa1.png" },
    "!plant": { display: "Vines", image: "futa0.png" },
    "!granola": { display: "Wild River", image: "granola.png" },
    "!girl2": { display: "Tits McGee", image: "girl2.png" },
    "!girl3": { display: "Delilah", image: "girl3.png" },
    "!girl3a": { display: "Willow", image: "girl3a.png" },
    "!butler": { display: "The Butler", image: "butler.png" },
    "!cat": { display: "Kitty", image: "cat.png" },
    "!jarome": { display: "Jarome", image: "jarome.png" },
    "!freddy": { display: "Fat Freddy", image: "freddy.png" },
    "!frank": { display: "Fat Franky", image: "frank.png" },
    "!wolf": { display: "Dire wolf", image: "wolf.png" },
    "!crystal": { display: "Crystal", image: "crystal.png" },
    "!judge": { display: "Reginald Esq. III", image: "judge.png" },
    "!fatnun": { display: "Sister Edna", image: "fatnun.png" },
    "!jail0": { display: "Fat dick prisoner", image: "jail0.png" },
    "!jail1": { display: "Long dick prisoner", image: "jail1.png" },
    "!music": { display: "", image: "music.png" },
    "!skank": { display: "Skanky Bitch", image: "skank.png" },
    "!belle": { display: "Belle", image: "belle.png" },
    "!seller": { display: "LeRoy", image: "seller.png" },
    "!dog": { display: "Doggy", image: "dog.png" },
    "!ann": { display: "Announcer", image: "ann.png" },
    "!barker": { display: "Barker", image: "barker.png" },
    "!statue": { display: "Stone Statue", image: "statue.png" },
    "!security": { display: "Security", image: "security.png" },
    "!rancher": { display: "Drake", image: "rancher.png" },
    "!rancher1": { display: "Clint", image: "rancher1.png" },
    "!hucow": { display: "Hucow", image: "hucow.png" },
    "!pig": { display: "Piggy", image: "pig.png" },
    "!horse": { display: "Horse", image: "horse.png" },
    "!cowboy": { display: "Cowboy", image: "cowboy.png" },
    "!chef": { display: "Fat Bastard", image: "chef.png" },
    "!info": { display: "Information", image: "info.png" },
    "!fatman": { display: "Fat Man", image: "fatman.png" },
    "!milkmaid": { display: "Milk Maid", image: "milkmaid.png" },
    "!sissy_ass": { display: "Rim Job Recipient ", image: "sissy_ass.png" },
    "!sissy_trio": { display: "Pookykins", image: "sissy_trio.png" },
    "!sissy_duo": { display: "Sapphire", image: "sissy_duo.png" },
    "!sissy_duo1": { display: "Onyx", image: "sissy_duo1.png" },
    "!sissy_smoke": { display: "Salvatore", image: "sissy_smoke.png" },
    "!sissy_tiedup": { display: "Tangerine Tease", image: "sissy_tiedup.png" },
    "!sissy_toilet": { display: "Toilet", image: "sissy_toilet.png" },
    "!ledja": { display: "Ledja", image: "ledja.png" },
    "!nar": { display: "Narrator ", image: "nar.png" },
    "!wolfgirl": { display: "Snail Trail", image: "wolfgirl.png" },
    "!tree": { display: "Tree branch", image: "tree.png" },
    "!dolly0": { display: "Dolly", image: "dolly0.png" },
    "!bf1": { display: "Michael", image: "bf1.png" },
    "!bf2": { display: "Mike", image: "bf2.png" }
};


sc.trivial = function (charname) {
    var name, image;
    var trivialEntry = sc.trivialLookup[charname];
    if (trivialEntry)
        return { display: trivialEntry.display, image: trivialEntry.image };

    switch (charname) {
        case "!kareem":
            if (sissy.st[10].ach)
                name = "Kesia"
            else
                name = "Kareem";
            image = "kareem.png";
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
        default:
            console.log("unknown trivial char: (check capitilazation)" + charname);
            break;
    }
    return { display: name, image: image };
}

//Main story milestones: what the player should do next (phone "Main Story" page and the save screen)
sc.mainStory = {};

sc.mainStory.steps = function () {
    const caseDone = function (id) { return missy.cases[id].complete; };
    const pTask = function (id) { return sc.getMissionTask("p", "*missy", id).complete; };
    let ac = missy.get("activeCase");
    if (ac === null || ac === undefined)
        ac = 0;
    const worked = missy.get("totalDaysWorked") > 0 || caseDone(4) || ac >= 4;
    const licensed = worked || inv.has("pi_lic");

    return [
        { txt: "Get a job. Use the computer in your room to apply", short: "Get a job", done: ac >= 1 || licensed },
        { txt: "Work at the construction site", short: "Construction", done: ac >= 2 || licensed },
        { txt: "Buy a P.I. license at city hall and show it to Missy", short: "P.I. license", done: ac >= 3 || licensed },
        { txt: "Buy dress clothes at the mall, then go to work at Missy's", short: "First day", done: worked },
        { txt: "Work 5 days and work out, then do the first case (the park)", short: "First case", done: caseDone(4) },
        { txt: "Do cases at Missy's until you're caged and in panties", short: "Cage + panties", done: sissy.st[17].ach },
        { txt: "Go to the sissy school at Missy's (Monday to Thursday)", short: "Sissy school", done: sissy.st[0].ach },
        { txt: "Raise your Intelligence to level 4 to get the lockpick", short: "Lockpick", done: inv.has("lockpick") },
        { txt: "Pass the sissy mid-term", short: "Mid-term", done: sissy.st[10].ach },
        { txt: "Pass the sissy final", short: "Final", done: sissy.st[21].ach },
        { txt: "Do the Carnival case", short: "Carnival", done: caseDone(18) },
        { txt: "Do the Farm and Sewer cases", short: "Farm + Sewer", done: caseDone(19) && caseDone(20) },
        { txt: "Do the Cult case (cabin in the woods, wear the cult robe)", short: "Cult case", done: caseDone(22) },
        { txt: "Escape the cult", short: "Escape cult", done: gv.get("cultEscape") !== null },
        { txt: "Meet " + sc.n("p") + " at Missy's Detective Agency", short: "Meet agency", done: pTask(0) },
        { txt: "Go to the Forest Queen's and bring back evidence to " + sc.n("p"), short: "Forest Queen", done: pTask(1) && pTask(2) },
        { txt: "Investigate each person on the list and report back to " + sc.n("p"), short: "The list", done: pTask(3) && pTask(4) },
        { txt: "Go deep into the woods, past the cave, to the very end to save Missy", short: "Save Missy", done: pTask(5) },
    ];
};

sc.mainStory.status = function () {
    const steps = sc.mainStory.steps();
    for (let i = steps.length - 2; i >= 0; i--) {
        if (steps[i + 1].done)
            steps[i].done = true;
    }
    let caseTxt = "";
    if (gv.get("cultEscape") === null && missy.get("activeCase") >= 4)
        caseTxt = missy.activecase().txt.trim();
    return { steps: steps, current: steps.findIndex(function (s) { return !s.done; }), caseTxt: caseTxt };
};

sc.mainStory.nextText = function () {
    const s = sc.mainStory.status();
    if (s.caseTxt !== "")
        return "Current case: " + s.caseTxt;
    if (s.current < 0)
        return "";
    return "Next: " + s.steps[s.current].txt;
};

sc.mainStory.shortText = function () {
    const s = sc.mainStory.status();
    if (s.current < 0)
        return "";
    return s.steps[s.current].short;
};

sc.mainStory.percent = function () {
    const steps = sc.mainStory.status().steps;
    const done = steps.filter(function (s) { return s.done; }).length;
    return Math.round((done / steps.length) * 20) * 5;
};
