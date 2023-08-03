var trophy = {};
//trophy for each girl person slept with (event pink room / cult)
trophy.list = {
    fucklola: { img: "fucklola.png", ach: false, fuck: true },
    fuckeva: { img: "fuckeva.png", ach: false, fuck: true },
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
            case "lola":
                if (sc.events[i].step === 12 && sc.events[i].ach)
                    t.fucklola.ach = true;
                break;
            case "eva":
                if (sc.events[i].step === 11 && sc.events[i].ach)
                    t.fuckeva.ach = true;
                break;
        }
    }
    for (i = 0; i < g.st.length; i++) {
        switch (gv.st[i].n) {
            case "knockedup":
                trophy.list.bimboKnockedup.ach = gv.st[i].t !== null;
                break;
        }
    }
};

trophy.draw = function () {
    $('#menu_parent').append('<div id="cheat_Killme" class="menu-center" style="position:absolute; ' + g.makeCss(760, 615, 167, 651) + ' background:#ccc; text-align:center; font-size:' + 24 * g.ratio + 'px;">' +
        "<h2>Work in Progress</h2>" +
        '</div>');
};