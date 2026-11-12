var sstat = {};

sstat.hormoneText = function (hormone) {
    if (hormone > 75)
        return "Transformation Possible";
    if (hormone > 50)
        return "Little bit feminine";
    return "Masculine";
};

// Stats under the "Abilities" heading on the stats screen
sstat.pointStats = ["fitness", "strength", "charisma", "pi"];

// Centered "xx%" label inside an ability's progress bar, sized to the bar's height
sstat.updateBarPercent = function (stat, barWidth) {
    var track = $(".rl-bar[data-name='" + stat.n + "']").parent();
    var label = track.children(".rl-pct");
    if (!label.length) {
        label = $("<div class='rl-pct'>").css({
            position: "absolute", left: 0, top: 0, width: "100%", height: "100%",
            "text-align": "center", color: "#fff", "font-weight": "bold",
            "text-shadow": "0 0 2px #000, 0 0 2px #000",
            "pointer-events": "none", overflow: "hidden", "white-space": "nowrap"
        }).appendTo(track);
    }
    var pct = stat.l >= stat.cap ? 100 : Math.floor(g.limitRange(barWidth || 0, 0, 100));
    var h = track.innerHeight() || 10;
    label.css({ "font-size": Math.max(6, Math.floor(h * 0.85)) + "px", "line-height": h + "px" }).text(pct + "%");
};

sstat.updateLevelBar = function (stat) {
    var barWidth = (stat.c / levels.getPointsCapForLevel(stat)) * 100;
    if (sstat.pointStats.indexOf(stat.n) > -1 && stat.l >= stat.cap)
        barWidth = 100; // maxed abilities show a full bar to match "Max" / 100%
    var levelDesc = levels.desc(stat.n, stat.l);
    var header = $(".rl-levelheader[data-name='" + stat.n + "']");
    header.text(stat.d + " " + stat.l);
    // Abilities get a middle line with their points toward the next level, e.g. "491 / 606 Points"
    var showPoints = sstat.pointStats.indexOf(stat.n) > -1 && gv.get("showAbilityPoints") === true;
    if (sstat.pointStats.indexOf(stat.n) > -1 && !showPoints) {
        // Settings page 2 > Points is Off: back to the original two-line layout
        header.next(".rl-points").remove();
        header.css("line-height", "");
        $(".rl-level[data-name='" + stat.n + "']").css({ "font-size": 20 * g.ratio + "px", "line-height": "" });
        header.parent().css("margin-top", "7%");
    }
    if (showPoints) {
        var pointsLine = header.next(".rl-points");
        if (!pointsLine.length)
            pointsLine = $("<div class='rl-points light-grey'>")
                .css({ "text-align": "left" })
                .insertAfter(header);
        // three lines must fit above the bar: smaller second/third lines, tighter spacing
        var small = Math.round(14 * g.ratio) + "px";
        header.css("line-height", "1.15");
        pointsLine.css({ "font-size": small, "line-height": "1.15" });
        $(".rl-level[data-name='" + stat.n + "']").css({ "font-size": small, "line-height": "1.15" });
        header.parent().css("margin-top", "4%");
        pointsLine.text(stat.l >= stat.cap
            ? "Max"
            : Math.floor(stat.c || 0) + " / " + levels.getPointsCapForLevel(stat) + " Points");
    }
    $(".rl-bar[data-name='" + stat.n + "']").css({ width: barWidth + "%" });
    if (sstat.pointStats.indexOf(stat.n) > -1) {
        if (gv.get("showBarPercent") === true)
            sstat.updateBarPercent(stat, barWidth);
        else // Settings page 2 > Percentage is Off
            $(".rl-bar[data-name='" + stat.n + "']").parent().children(".rl-pct").remove();
    }
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
