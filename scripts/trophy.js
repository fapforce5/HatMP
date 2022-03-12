var trophy = {};

trophy.list = {
    theboys: { img: "theboys.png", ach: false },
    llsissy: { img: "llsissy.png", ach: false },
    bimboKnockedup: { img: "bimboKnockedup.png", ach: false },
};

trophy.build = function () {
    var i;

    trophy.list.theboys.ach = trophy.list.llsissy.ach = trophy.list.bimboKnockedup.ach = false;


    for (i = 0; i < sc.events.length; i++) {
        switch (sc.events[i].name) {
            case "kei":
                if (sc.events[i].step === -2 && sc.events[i].ach)
                    t.theboys.ach = true;
                break;
            case "landlord":

                break;
        }
    }
    for (i = 0; i < g.st.length; i++) {
        switch (g.st[i].n) {
            case "knockedup":
                trophy.list.bimboKnockedup.ach = g.st[i].t !== null;
                break;
        }
    }
};

trophy.draw = function () {

};