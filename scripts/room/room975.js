//Room name
var room975 = {};
room975.main = function () {
    let overlay = "";
    switch (g.pass) {
        case "azrael956":
            trophy.add(33);
            nav.bg("975_ending/azrael1_" + gender.pronoun("m") + ".webp");
            overlay = "overlay_azrael";
            chat(1, 975);
            break;

    }
    nav.button({
            "type": "img",
            "name": "ol",
            "left": 0,
            "top": 0,
            "width": 1920,
            "height": 1080,
        "image": "975_ending/" + overlay + ".webp"
    }, 975);
};

room975.btnclick = function (name) {
    switch (name) {
        case "":
            break;
        default:
            break;
    }
};

room975.chatcatch = function (callback) {
    switch (callback) {
        case "azrael2":
            nav.bg("975_ending/" + callback + ".webp");
            break;
        case "restart":
            let t = new Array();
            let s = new Array();
            let r = new Array();
            let ra = ["maxenergy", "fantasyCreatures", "difficulty", "clock24", "transformation", "breastSelect", "firstTimeInWardrobe"];
            for (let i = 0; i < gv.st.length; i++) {
                if (ra.includes(gv.st[i].n))
                    r.push({ i: i, t: gv.st[i].t });
            }

            for (let i = 0; i < trophy.st.length; i++) {
                if (trophy.st[i].ach)
                    t.push(i);
            }
            for (let i = 0; i < sc.char.length; i++) {
                s.push({ j: i, d: sc.char[i].display });
            }
            let n = $.extend(true, {}, sc.char);
            g.initGame();
            cl.init();

            sc.init();
            inv.init();
            
            
            for (let i = 0; i < s.length; i++) {
                sc.char[s[i].j].display = s[i].d;
            }

            let money975, sissy975, dom975;
            money975 = sissy975 = dom975 = 0;
            for (let i = 0; i < t.length; i++) {
                trophy.st[t[i]].ach = true;
                if (trophy.st[t[i]].m > 0) {
                    money975 += trophy.st[t[i]].m;
                }
                if (trophy.st[t[i]] > 0) {
                    sissy975 += trophy.st[t[i]].s;
                }
                if (trophy.st[t[i]].d > 0) {
                    dom975 += trophy.st[t[i]].d;
                }
            }
            levels.mod("xdress", sissy975);
            levels.mod("dom", dom975);
            gv.mod("money", money975);
            for (let i = 0; i < r.length; i++) {
                gv.st[r[i].i].t = r[i].t;
            }
            cl.display();
            room2.chatcatch("proceed");
            break;
        default:
            break;
    }
};

room975.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "!nar",
            text: "Thank you for playing! If you restart the game, all the counters reset, but you get to " +
                "keep your achievements and the points from those that you've earned. ",
            button: [
                { chatID: -1, text: "Restart the game? ", callback: "restart" }
            ]
        },
        {
            chatID: 1,
            speaker: "!nar",
            text: "After your betrayal of Missy you were taken to the surmon and bathed in the cum of the " +
                "followers leading to your virgin pregancy. To ensure you remain a virgin til birth your arms " +
                "were bound and several cult members guarded you day and night. For nine months it was a lavish, " +
                "yet empty experiance, never getting the chance to be touched on your new vagina. Missy, " +
                "the dog, was placed at your side to drain any cocks that seemed headed your way. ",
            button: [
                { chatID: 2, text: "...", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "!nar",
            text: "After nine month you had a virgin birth to a healthy baby boy who was immediately taken " +
                "from you never to be seen again by your own eyes. Never knowing what became of him. With the virgin birth complete Ubel " +
                "lifted all protections from you and you were now free for the cult to use. ",
            button: [
                { chatID: 3, text: "...", callback: "azrael2" }
            ]
        },
        {
            chatID: 3,
            speaker: "!nar",
            text: "You spent the rest of your life locked in a room with Missy being abused and fucked " +
                "by anyone that needed their balls drained. The only food you two would receive " +
                "is the creampies from each other's pussy and assholes. The only liquid from the piss from " +
                " their cocks until your dying day. ",
            button: [
                { chatID: 0, text: "...", callback: "" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};