var fame = {};
fame.niceCounter = 0;
fame.rapeCounter = 0;
fame.moanCounter = null;
fame.animateTimeout = null;

fame.nextMoanFrame = function () {
    if (fame.moanCounter === null)
        fame.moanCounter = g.rand(0, 9);
    fame.moanCounter++;
    if (fame.moanCounter > 8)
        fame.moanCounter = 0;
    return fame.moanCounter;
};

fame.drawMoan = function (left, top, size) {
    nav.button({
        "type": "img",
        "name": "fame.moan-kill",
        "left": left,
        "top": top,
        "width": size * 2,
        "height": size,
        "image": "1001_rand/moan" + fame.nextMoanFrame() + ".webp"
    }, 1010);
};

fame.event = function (roomId, returnBtn) {
    if (g.isNight()) {
        let orallevel = levels.get("oral").l;
        let anallevel = levels.get("anal").l;
        if ((orallevel > 9 || anallevel > 9) && !daily.get("fameEventHypno") && g.rand(0, 3) === 0) {
            daily.set("fameEventHypno");
            if (orallevel > 8 && anallevel > 8) {
                if (g.rand(0, 2) === 0) {
                    nav.bg("1001_rand/hypno0.gif");
                    chat(7, 0);
                }
                else {
                    nav.bg("1001_rand/hypno1.gif");
                    chat(8, 0);
                }
            }
            else if (orallevel > 8) {
                nav.bg("1001_rand/hypno0.gif");
                chat(7, 0);
            }
            else {
                nav.bg("1001_rand/hypno1.gif");
                chat(8, 0);
            }
            return true;
        }
        let rapeplace = [50, 225, 250, 375, 450, 500, 650, 776, 825, 900];
        let thisAppearance = cl.appearance();
        let rapeFame = 10 - levels.get("fame").l;
        let rapeAppearance = 10 - thisAppearance * 2;
        let rapeDay = g.dt.getDay() === 5 ? 0 : 6;
        if (rapeFame < 0)
            rapeFame = 0;
        let totalRapeChance = rapeFame + rapeAppearance + rapeDay;
        console.log(totalRapeChance);
        if (thisAppearance > 0 && rapeplace.includes(g.nextRoomId) && fame.rapeCounter < 2 && g.rand(0, totalRapeChance) === 0) {
            fame.rapeCounter++;
            rape.init(null, "street", roomId, returnBtn);
            return true;
        }
    }
    else {
        let niceday = [50, 250, 300, 350, 400, 404, 500, 575, 625, 700, 776, 900];
        let randFame = 10 - levels.get("fame").l;
        if (randFame < 0)
            randFame = 0;
        if (niceday.includes(g.nextRoomId) && fame.niceCounter < 2 && g.rand(0, randFame + 10) === 0) {
            fame.niceCounter++;
            trap.init("encounter", "street", roomId, returnBtn);
            return true;
        }
    }
    return false;
};

fame.moankill = function () {
    nav.killbutton("fame.moan-kill");
};

//side: left, right, center, double
fame.moanAnimate = function (side) {
    if (fame.animateTimeout !== null) return;
    fame.moan(side);
    fame.animateTimeout = setInterval(function () {
        fame.moankill();
        fame.moan(side);
    }, 1200);
};

fame.moanAnimateStop = function () {
    nav.killbutton("fame.moan-kill");
    clearInterval(fame.animateTimeout);
    fame.animateTimeout = null;
};

fame.moan = function (side = "center") {
    //0-8
    fame.moankill();
    let primarySize = g.rand(150, 201);
    let secondarySize = g.rand(150, 201);
    let top = g.rand(200, 700);
    let positions = {
        left: g.rand(100, 540),
        center: g.rand(540, 1180),
        right: g.rand(1180, 1500)
    };

    if (side === "left") {
        fame.drawMoan(positions.left, top, primarySize);
    }
    else if (side === "right") {
        fame.drawMoan(positions.right, top, primarySize);
    }
    else if (side === "center") {
        fame.drawMoan(positions.center, top, primarySize);
    }
    else if (side === "double") {
        fame.drawMoan(positions.left, g.rand(400, 700), secondarySize);
        fame.drawMoan(positions.right, top, primarySize);
    }
};
