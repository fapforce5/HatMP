var sstat = {};

sstat.makeGraph = function () {
    

    $("#rl_page0").hide();
    $("#rl_page1").hide();
    $("#rl_page2").hide();
    
    $("#rl_page" + g.statpage).show();
};

sstat.page0 = function () {
    //if ($("#room_left_graph").is(":visible")) {
    var i;
    var energy, maxenergy, oral, cock, anal, sissy, hormone, cheerlevel;
    oral = cock = anal = 0;
    for (i = 0; i < g.st.length; i++) {
        switch (g.st[i].n) {
            case "energy":
                energy = g.st[i].t;
                break;
            case "maxenergy":
                maxenergy = g.st[i].t;
                break;
            case "leg":
                $(".rl-bar[data-name='leg']").css({ width: g.st[i].t + "%" });
                break;
            case "legLevel":
                $("#rl_kick").html("Kick Power: " + tEnemy.getKick());
                break;
            case "body":
                $(".rl-bar[data-name='body']").css({ width: g.st[i].t + "%" });
                break;
            case "bodyLevel":
                $("#rl_punch").html("Punch Power: " + tEnemy.getPunch());
                break;
            case "d":
                $(".rl-bar[data-name='d']").css({ width: g.st[i].t + "%" });
                break;
            case "dLevel":
                $("#rl_d").html("Defense: " + tEnemy.getDefense());
                break;
            case "fitness":
                $(".rl-bar[data-name='fitness']").css({ width: g.st[i].t + "%" });
                break;
            case "fitnessLevel":
                $("#rl_fitness").html("Fitness: [" + g.st[i].t + "] <span class='char-12' style='font-size:" + (12 * g.ratio) + "px;'>" + (maxenergy - 100) + " Energy bonus</span>");
                break;
            case "hormone":
                hormone = g.st[i].t;
                $(".rl-bar[data-name='hormone']").css({ width: g.st[i].t + "%" });
                break;
            case "sissy":
                sissy = g.st[i].t;
                $(".rl-bar[data-name='sissy']").css({ width: g.st[i].t + "%" });
                break;
            case "subdom":
                //if (g.st[i].t > 75)
                //    $("#rl_subdom").text("Domme");
                //else if (g.st[i].t > 55)
                //    $("#rl_subdom").text("Little Domme");
                //else if (g.st[i].t > 45)
                //    $("#rl_subdom").text("Neutral");
                //else if (g.st[i].t > 25)
                //    $("#rl_subdom").text("Submissive");
                //else
                //    $("#rl_subdom").text("Submissive Slut");
                //$(".rl-bar[data-name='subdom']").css({ width: g.st[i].t + "%" });
                break;
            case "cheerleader":
                cheerlevel = g.st[i].t;
                $(".rl-bar[data-name='cheerleader']").css({ width: g.st[i].t + "%" });
                break;
            case "cheerlevel":
                console.log(cheerlevel)
                if (cheerlevel > 95 && g.st[i].t < 7) {
                    $("#rl_cheer").text(g.st[i].t + ". Attend Cheerleader Practice");
                }
                else {
                    switch (g.st[i].t) {
                        case 0:
                            $("#rl_cheer").text("Not a Cheerleader");
                            break;
                        case 1:
                            $("#rl_cheer").text("1. Clumsy Cheerleader");
                            break;
                        case 2:
                            $("#rl_cheer").text("2. Dumb Cheerleader");
                            break;
                        case 3:
                            $("#rl_cheer").text("3. (Cheer) Washing Machine");
                            break;
                        case 4:
                            $("#rl_cheer").text("4. Beginner Cheerleader");
                            break;
                        case 5:
                            $("#rl_cheer").text("5. (Cheer) Stacy's Bitch");
                            break;
                        case 6:
                            $("#rl_cheer").text("6. (Cheer) Konga Line");
                            break;
                        case 7:
                            $("#rl_cheer").text("7. Cheer for the Game!");
                            break;
                        case 8:
                            $("#rl_cheer").text("Small Dick Loser");
                            break;
                        case 9:
                            $("#rl_cheer").text("Cheerleader!");
                            break;
                        case 10:
                            $("#rl_cheer").text("Cheerleader Cum Bucket");
                            break;
                        default:
                            break;;
                    }
                }
                break;
            //case "sissyLevel":
            //    $("#rl_sissy").html("Sissy: " + g.st[i].t);
            //    break;
        }
    }

    $("#rl_energy").html("Energy: " + energy + "/" + maxenergy);
    $(".rl-bar[data-name='energy']").css({ width: ((energy / maxenergy) * 100) + "%" });
    var rlTempCock = "s";
    if (cl.c.chastity !== null)
        rlTempCock = "c";
    else if (cl.c.cock < 3)
        rlTempCock = "b";

    $("#rl_fightdisplay0").attr("src", "./images/room/227_fight/g_victory_" + (cl.c.chest > 2 ? "f" : "m") + ".png");
    $("#rl_fightdisplay1").attr("src", "./images/room/227_fight/g_victory_d_" + rlTempCock + ".png");
    if (cl.c.hairLength > 1) {
        $("#rl_fightdisplay2").attr("src", "./images/room/227_fight/h_8_long.png");
        $("#rl_fightdisplay-1").attr("src", "./images/room/227_fight/h_8_long_back.png");
    }
    else {
        $("#rl_fightdisplay2").attr("src", "./images/room/227_fight/h_8_short.png");
        $("#rl_fightdisplay-1").attr("src", "./images/room/227_fight/h_9_long_back.png");
    }

    if (hormone < 10)
        $("#rl_hormone").html(" &nbsp;&nbsp;Hairy Boy");
    else if (hormone < 50)
        $("#rl_hormone").html(" &nbsp;&nbsp;Boyish");
    else if (sissy < 75)
        $("#rl_hormone").html(" &nbsp;&nbsp;Feminine");
    else
        $("#rl_hormone").html(" &nbsp;&nbsp;Girly");
};

sstat.page1 = function () {
    //humiliation
    


    //if ($("#room_left_graph").is(":visible")) {
    var i;
    var energy, maxenergy, oral, cock, anal, sissy, hormone, cheerlevel;
    oral = cock = anal = 0;
    for (i = 0; i < g.st.length; i++) {
        switch (g.st[i].n) {
            case "energy":
                energy = g.st[i].t;
                break;
            case "maxenergy":
                maxenergy = g.st[i].t;
                break;
            case "leg":
                $(".rl-bar[data-name='leg']").css({ width: g.st[i].t + "%" });
                break;
            case "legLevel":
                $("#rl_kick").html("Kick Power: " + tEnemy.getKick());
                break;
            case "body":
                $(".rl-bar[data-name='body']").css({ width: g.st[i].t + "%" });
                break;
            case "bodyLevel":
                $("#rl_punch").html("Punch Power: " + tEnemy.getPunch());
                break;
            case "d":
                $(".rl-bar[data-name='d']").css({ width: g.st[i].t + "%" });
                break;
            case "dLevel":
                $("#rl_d").html("Defense: " + tEnemy.getDefense());
                break;
            case "fitness":
                $(".rl-bar[data-name='fitness']").css({ width: g.st[i].t + "%" });
                break;
            case "fitnessLevel":
                $("#rl_fitness").html("Fitness: [" + g.st[i].t + "] <span class='char-12' style='font-size:" + (12 * g.ratio) + "px;'>" + (maxenergy - 100) + " Energy bonus</span>");
                break;
            case "hormone":
                hormone = g.st[i].t;
                $(".rl-bar[data-name='hormone']").css({ width: g.st[i].t + "%" });
                break;
            case "sissy":
                sissy = g.st[i].t;
                $(".rl-bar[data-name='sissy']").css({ width: g.st[i].t + "%" });
                break;
            case "subdom":
                //if (g.st[i].t > 75)
                //    $("#rl_subdom").text("Domme");
                //else if (g.st[i].t > 55)
                //    $("#rl_subdom").text("Little Domme");
                //else if (g.st[i].t > 45)
                //    $("#rl_subdom").text("Neutral");
                //else if (g.st[i].t > 25)
                //    $("#rl_subdom").text("Submissive");
                //else
                //    $("#rl_subdom").text("Submissive Slut");
                //$(".rl-bar[data-name='subdom']").css({ width: g.st[i].t + "%" });
                break;
            case "cheerleader":
                cheerlevel = g.st[i].t;
                $(".rl-bar[data-name='cheerleader']").css({ width: g.st[i].t + "%" });
                break;
            case "cheerlevel":
                console.log(cheerlevel)
                if (cheerlevel > 95 && g.st[i].t < 7) {
                    $("#rl_cheer").text(g.st[i].t + ". Attend Cheerleader Practice");
                }
                else {
                    switch (g.st[i].t) {
                        case 0:
                            $("#rl_cheer").text("Not a Cheerleader");
                            break;
                        case 1:
                            $("#rl_cheer").text("1. Clumsy Cheerleader");
                            break;
                        case 2:
                            $("#rl_cheer").text("2. Dumb Cheerleader");
                            break;
                        case 3:
                            $("#rl_cheer").text("3. (Cheer) Washing Machine");
                            break;
                        case 4:
                            $("#rl_cheer").text("4. Beginner Cheerleader");
                            break;
                        case 5:
                            $("#rl_cheer").text("5. (Cheer) Stacy's Bitch");
                            break;
                        case 6:
                            $("#rl_cheer").text("6. (Cheer) Konga Line");
                            break;
                        case 7:
                            $("#rl_cheer").text("7. Cheer for the Game!");
                            break;
                        case 8:
                            $("#rl_cheer").text("Small Dick Loser");
                            break;
                        case 9:
                            $("#rl_cheer").text("Cheerleader!");
                            break;
                        case 10:
                            $("#rl_cheer").text("Cheerleader Cum Bucket");
                            break;
                        default:
                            break;;
                    }
                }
                break;
            //case "sissyLevel":
            //    $("#rl_sissy").html("Sissy: " + g.st[i].t);
            //    break;
        }
    }

    $("#rl_energy").html("Energy: " + energy + "/" + maxenergy);
    $(".rl-bar[data-name='energy']").css({ width: ((energy / maxenergy) * 100) + "%" });
    var rlTempCock = "s";
    if (cl.c.chastity !== null)
        rlTempCock = "c";
    else if (cl.c.cock < 3)
        rlTempCock = "b";

    $("#rl_fightdisplay0").attr("src", "./images/room/227_fight/g_victory_" + (cl.c.chest > 2 ? "f" : "m") + ".png");
    $("#rl_fightdisplay1").attr("src", "./images/room/227_fight/g_victory_d_" + rlTempCock + ".png");
    if (cl.c.hairLength > 1) {
        $("#rl_fightdisplay2").attr("src", "./images/room/227_fight/h_8_long.png");
        $("#rl_fightdisplay-1").attr("src", "./images/room/227_fight/h_8_long_back.png");
    }
    else {
        $("#rl_fightdisplay2").attr("src", "./images/room/227_fight/h_8_short.png");
        $("#rl_fightdisplay-1").attr("src", "./images/room/227_fight/h_9_long_back.png");
    }

    if (hormone < 10)
        $("#rl_hormone").html(" &nbsp;&nbsp;Hairy Boy");
    else if (hormone < 50)
        $("#rl_hormone").html(" &nbsp;&nbsp;Boyish");
    else if (sissy < 75)
        $("#rl_hormone").html(" &nbsp;&nbsp;Feminine");
    else
        $("#rl_hormone").html(" &nbsp;&nbsp;Girly");
};

sstat.page2 = function () {
    //if ($("#room_left_graph").is(":visible")) {
    var i;
    var energy, maxenergy, oral, cock, anal, sissy, hormone, cheerlevel;
    oral = cock = anal = 0;
    for (i = 0; i < g.st.length; i++) {
        switch (g.st[i].n) {
            case "energy":
                energy = g.st[i].t;
                break;
            case "maxenergy":
                maxenergy = g.st[i].t;
                break;
            case "leg":
                $(".rl-bar[data-name='leg']").css({ width: g.st[i].t + "%" });
                break;
            case "legLevel":
                $("#rl_kick").html("Kick Power: " + tEnemy.getKick());
                break;
            case "body":
                $(".rl-bar[data-name='body']").css({ width: g.st[i].t + "%" });
                break;
            case "bodyLevel":
                $("#rl_punch").html("Punch Power: " + tEnemy.getPunch());
                break;
            case "d":
                $(".rl-bar[data-name='d']").css({ width: g.st[i].t + "%" });
                break;
            case "dLevel":
                $("#rl_d").html("Defense: " + tEnemy.getDefense());
                break;
            case "fitness":
                $(".rl-bar[data-name='fitness']").css({ width: g.st[i].t + "%" });
                break;
            case "fitnessLevel":
                $("#rl_fitness").html("Fitness: [" + g.st[i].t + "] <span class='char-12' style='font-size:" + (12 * g.ratio) + "px;'>" + (maxenergy - 100) + " Energy bonus</span>");
                break;
            case "hormone":
                hormone = g.st[i].t;
                $(".rl-bar[data-name='hormone']").css({ width: g.st[i].t + "%" });
                break;
            case "sissy":
                sissy = g.st[i].t;
                $(".rl-bar[data-name='sissy']").css({ width: g.st[i].t + "%" });
                break;
            case "subdom":
                //if (g.st[i].t > 75)
                //    $("#rl_subdom").text("Domme");
                //else if (g.st[i].t > 55)
                //    $("#rl_subdom").text("Little Domme");
                //else if (g.st[i].t > 45)
                //    $("#rl_subdom").text("Neutral");
                //else if (g.st[i].t > 25)
                //    $("#rl_subdom").text("Submissive");
                //else
                //    $("#rl_subdom").text("Submissive Slut");
                //$(".rl-bar[data-name='subdom']").css({ width: g.st[i].t + "%" });
                break;
            case "cheerleader":
                cheerlevel = g.st[i].t;
                $(".rl-bar[data-name='cheerleader']").css({ width: g.st[i].t + "%" });
                break;
            case "cheerlevel":
                console.log(cheerlevel)
                if (cheerlevel > 95 && g.st[i].t < 7) {
                    $("#rl_cheer").text(g.st[i].t + ". Attend Cheerleader Practice");
                }
                else {
                    switch (g.st[i].t) {
                        case 0:
                            $("#rl_cheer").text("Not a Cheerleader");
                            break;
                        case 1:
                            $("#rl_cheer").text("1. Clumsy Cheerleader");
                            break;
                        case 2:
                            $("#rl_cheer").text("2. Dumb Cheerleader");
                            break;
                        case 3:
                            $("#rl_cheer").text("3. (Cheer) Washing Machine");
                            break;
                        case 4:
                            $("#rl_cheer").text("4. Beginner Cheerleader");
                            break;
                        case 5:
                            $("#rl_cheer").text("5. (Cheer) Stacy's Bitch");
                            break;
                        case 6:
                            $("#rl_cheer").text("6. (Cheer) Konga Line");
                            break;
                        case 7:
                            $("#rl_cheer").text("7. Cheer for the Game!");
                            break;
                        case 8:
                            $("#rl_cheer").text("Small Dick Loser");
                            break;
                        case 9:
                            $("#rl_cheer").text("Cheerleader!");
                            break;
                        case 10:
                            $("#rl_cheer").text("Cheerleader Cum Bucket");
                            break;
                        default:
                            break;;
                    }
                }
                break;
            //case "sissyLevel":
            //    $("#rl_sissy").html("Sissy: " + g.st[i].t);
            //    break;
        }
    }

    $("#rl_energy").html("Energy: " + energy + "/" + maxenergy);
    $(".rl-bar[data-name='energy']").css({ width: ((energy / maxenergy) * 100) + "%" });
    var rlTempCock = "s";
    if (cl.c.chastity !== null)
        rlTempCock = "c";
    else if (cl.c.cock < 3)
        rlTempCock = "b";

    $("#rl_fightdisplay0").attr("src", "./images/room/227_fight/g_victory_" + (cl.c.chest > 2 ? "f" : "m") + ".png");
    $("#rl_fightdisplay1").attr("src", "./images/room/227_fight/g_victory_d_" + rlTempCock + ".png");
    if (cl.c.hairLength > 1) {
        $("#rl_fightdisplay2").attr("src", "./images/room/227_fight/h_8_long.png");
        $("#rl_fightdisplay-1").attr("src", "./images/room/227_fight/h_8_long_back.png");
    }
    else {
        $("#rl_fightdisplay2").attr("src", "./images/room/227_fight/h_8_short.png");
        $("#rl_fightdisplay-1").attr("src", "./images/room/227_fight/h_9_long_back.png");
    }

    if (hormone < 10)
        $("#rl_hormone").html(" &nbsp;&nbsp;Hairy Boy");
    else if (hormone < 50)
        $("#rl_hormone").html(" &nbsp;&nbsp;Boyish");
    else if (sissy < 75)
        $("#rl_hormone").html(" &nbsp;&nbsp;Feminine");
    else
        $("#rl_hormone").html(" &nbsp;&nbsp;Girly");
};

sstat.init = function () {
    var loop = ["xdress", "subdom", "attraction", "humiliation", "oral", "anal", "cum", "piss", "enema", "feet", "knotty"];
    for (var i = 0; i < loop.length; i++) {
        var cravings = sissy.cravings(loop[i]);
        $('#rl_' + loop[i]).html("");
        document.getElementById('rl_' + loop[i]).appendChild(
            sstat.initCreateKnob(cravings.baseBG, cravings.baseFG, cravings.val));
        $('#rl1_' + loop[i]).text(cravings.txt);
    }

    $(".mt-adjust").css({ "margin-top": (-35 * g.ratio) + "px" });
};

sstat.initCreateKnob = function (bgColor, fgColor, setval) {
    const knob = pureknob.createKnob(100 * g.ratio, 100 * g.ratio);
    knob.setProperty('angleStart', -0.5 * Math.PI);
    knob.setProperty('angleEnd', 0.5 * Math.PI);
    knob.setProperty('colorBG', bgColor);
    knob.setProperty('colorFG', fgColor);
    knob.setProperty('colorLabel', '#000000');
    knob.setProperty('trackWidth', 0.2);
    knob.setProperty('valMin', 0);
    knob.setProperty('valMax', 100);
    knob.setProperty('readonly', true);
    knob.setValue(setval);
    return knob.node();
    //const node = knob.node();
    //const elem = document.getElementById('rl_pussy');
    //elem.appendChild(sexuality_node);
};


