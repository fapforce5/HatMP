var sstat = {};

sstat.hormoneText = function (hormone) {
    if (hormone > 75)
        return "Transformation Possible";
    if (hormone > 50)
        return "Little bit feminine";
    return "Masculine";
};

sstat.updateLevelBar = function (stat) {
    var barWidth = (stat.c / levels.getPointsCapForLevel(stat)) * 100;
    var levelDesc = levels.desc(stat.n, stat.l);
    $(".rl-levelheader[data-name='" + stat.n + "']").text(stat.d + " " + stat.l);
    $(".rl-bar[data-name='" + stat.n + "']").css({ width: barWidth + "%" });
    $(".rl-level[data-name='" + stat.n + "']").text(levelDesc.txt);
};

sstat.makeGraph = function () {
    sstat.updateGraph();
};

sstat.updateGraph = function () {
    $("#char_money").text("$" + gv.get("money"));

    let i;
    var energy = gv.get("energy");
    var maxenergy = gv.get("maxenergy");
    var energyPercentage = (energy / maxenergy) * 100;
    $(".rl-bar[data-name='energy']").css({ width: energyPercentage + "%" });
    $(".rl-level[data-name='energy']").text(energy + "/" + maxenergy);

    let hormone = gv.get("hormone");
    $(".rl-bar[data-name='hormone']").css({ width: hormone + "%" });
    $(".rl-level[data-name='hormone']").text(sstat.hormoneText(hormone));

    for (i = 0; i < levels.st.length; i++) {
        if (levels.st[i].display)
            sstat.updateLevelBar(levels.st[i]);
    }
};
