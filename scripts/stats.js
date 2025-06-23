var sstat = {};

sstat.makeGraph = function () {
    sstat.updateGraph();
};

sstat.updateGraph = function () {
    //money
    $("#char_money").text("$" + gv.get("money"));
    let i, barWidth;
    //energy
    var energy = gv.get("energy");
    var maxenergy = gv.get("maxenergy");
    var energyPercentage = (energy / maxenergy) * 100;
    $(".rl-bar[data-name='energy']").css({ width: energyPercentage + "%" });
    $(".rl-level[data-name='energy']").text(energy + "/" + maxenergy);

    //hormone
    let hormone = gv.get("hormone");
    let hormonetxt = "";
    if (hormone > 75)
        hormonetxt = "Transformation Possible";
    else if (hormone > 50)
        hormonetxt = "Little bit feminine";
    else
        hormonetxt = "Masculine";

    $(".rl-bar[data-name='hormone']").css({ width: hormone + "%" });
    $(".rl-level[data-name='hormone']").text(hormonetxt);

    

    for (i = 0; i < levels.st.length; i++) {
        if (levels.st[i].display) {
            if (levels.st[i].compoundLevel)
                barWidth = (levels.st[i].c / levels.getCap(levels.st[i].l)) * 100
            else
                barWidth = levels.st[i].c;

            var levelDesc = levels.desc(levels.st[i].n, levels.st[i].l);
            //console.log($(".rl-levelheader[data-name='" + levels.st[i].n + "']"));
            $(".rl-levelheader[data-name='" + levels.st[i].n + "']").text(levels.st[i].d + " " + levels.st[i].l);
            $(".rl-bar[data-name='" + levels.st[i].n + "']").css({ width: barWidth + "%" });
            $(".rl-level[data-name='" + levels.st[i].n + "']").text(levelDesc.txt);
        }
    }
};
