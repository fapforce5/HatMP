var missy = {};

missy.st = new Array();
missy.cases = new Array();

missy.init = function () {

    missy.st = [
        { id: 0, n: "mood", c: 0 },
        { id: 1, n: "late", c: 0 },
        { id: 2, n: "uniform", c: 0 }, //0 is suit, 1 is suit and panties, 2 is suit panties shaved, 3 red blouse
        { id: 3, n: "activeCase", c: 0 },
        { id: 4, n: "weeklyPay", c: 0 },
        { id: 5, n: "jobDataEntry", c: 0 },
        { id: 6, n: "jobCleanToilet", c: 0 },
        { id: 7, n: "jobFileDocuments", c: 0 },
        { id: 8, n: "jobWorkReciption", c: 0 },
        { id: 9, n: "jobRunErrands", c: 0 },
        { id: 10, n: "maidCumDump", c: 0 },
        { id: 11, n: "gloryHole", c: 0 },
        { id: 12, n: "trash", c: 0 },
        { id: 13, n: "hypno1", c: 0 },
        { id: 14, n: "hypno2", c: 0 },
        { id: 15, n: "hypno3", c: 0 },
        { id: 16, n: "hypno4", c: 0 },
        { id: 17, n: "hypno5", c: 0 },
        { id: 18, n: "hypno6", c: 0 },
        { id: 19, n: "daysSinceBathroomCleaned", c: 0 },
        { id: 20, n: "totalDaysWorked", c: 0 },
        { id: 21, n: "dataEntryFirstTime", c: 0 },
        { id: 22, n: "pantiesFirstTime", c: 0 },
        { id: 23, n: "activeCaseComplete", c: 0 }, //0 not complete, 1 complete - success, 2 complete - fail
        { id: 24, n: "reusableCaseCounter", c: 0 }, //general purpose of current case
        { id: 25, n: "chastity", c: 0 }, //0 no chastity first time, 1 weekends off, 2 no weekends, 3 no chastity
        { id: 26, n: "uniformNew", c: 0 },
        { id: 27, n: "jobCleanToiletUniform", c: 0 },
        { id: 28, n: "sissySchoolDays", c: 0 },
        { id: 29, n: "cage", c: 0 }, //0 cage, 1 pink, 2 pinkx2
        { id: 30, n: "missyEventTracker", c: 0 }, //0 cage, 1 pink, 2 pinkx2
        { id: 31, n: "gloryHoleCounter", c: 0 }, 
        { id: 32, n: "cumMaidCounter", c: 0 },
        { id: 33, n: "trashSearchCounter", c: 0 },
        { id: 34, n: "subCounter197", c: 0 },

        { id: 35, n: "pinkEntrance", c: 0 },
    ];

    missy.cases = [
        { caseId: 0, name: "start", show: false, complete: true, success: false },
        { caseId: 1, name: "construction", show: false, complete: true, success: false },
        { caseId: 2, name: "apply", show: false, complete: true, success: false },
        { caseId: 3, name: "work", show: false, complete: true, success: false },
        { caseId: 4, name: "case_usb", show: true, complete: false, success: false },
        { caseId: 5, name: "case_booth", show: true, complete: false, success: false },
        { caseId: 6, name: "case_lostgirl", show: true, complete: false, success: false },
        { caseId: 7, name: "case_saveralph", show: true, complete: false, success: false },
        { caseId: 8, name: "case_trash", show: true, complete: false, success: false },
        { caseId: 9, name: "case_goth", show: true, complete: false, success: false },
        { caseId: 10, name: "case_newclothes", show: true, complete: false, success: false },
        { caseId: 11, name: "case_shopping", show: true, complete: false, success: false },
        { caseId: 12, name: "case_bimbopanties", show: true, complete: false, success: false },
        { caseId: 13, name: "case_elijah", show: true, complete: false, success: false },
        { caseId: 14, name: "case_beaver", show: true, complete: false, success: false },
        { caseId: 15, name: "case_elijah_origin", show: true, complete: false, success: false },
        { caseId: 16, name: "case_damselle", show: true, complete: false, success: false },
    ];
}

missy.init();

missy.mod = function (name, amount) {
    for (var i = 0; i < missy.st.length; i++) {
        if (missy.st[i].n === name) {
            missy.st[i].c += amount;
            missy.checkPop(name, amount);
            break;
        }
    }
};

missy.set = function (name, amount) {
    for (var i = 0; i < missy.st.length; i++) {
        if (missy.st[i].n === name) {
            missy.st[i].c = amount;
            missy.checkPop(name, amount);
            break;
        }
    }
};

missy.checkPop = function (name, amount) {
    switch (name) {
        case "mood":
            if (amount > 14)
                g.popUpNotice("Missy really liked that!");
            else if (amount > 0)
                g.popUpNotice("Missy liked that");
            else if (amount < -14)
                g.popUpNotice("Missy really hated that");
            else if (amount !== 0)
                g.popUpNotice("Missy didn't like that");
            break;
    }
}

missy.get = function (name) {
    for (var i = 0; i < missy.st.length; i++) {
        if(missy.st[i].n === name)
        return missy.st[i].c;
    }
};

missy.activecase = function () {
    var activecase = missy.get("activeCase");
    var activeCaseComplete = missy.get("activeCaseComplete") !== 0;
    if (activecase === null)
        activecase = -1;
    if (activecase < 0) {
        return { caseId: -1, name: "start", txt: "Get to work! ", m: [203], isComplete: true };
    }
    else {

        //priapus (chloe notepad)
        var cases = [
            { caseId: 0, name: "start", txt: "Get a job. Check your computer in your room and apply. ", m: [16], isComplete: activeCaseComplete },
            { caseId: 1, name: "construction", txt: "Go work at the contruction site. ", m: [100], isComplete: activeCaseComplete },
            { caseId: 2, name: "apply", txt: "Go to city hall and purchase a P.I. license. Then go to Missy's. ", m: [910, 203] },
            { caseId: 3, name: "work", txt: "Purchase dress shirt, pants, socks, and black shoes from the mall. Then go to your first day of work. ", m: [203, 400], isComplete: activeCaseComplete },
            { caseId: 4, name: "case_usb", txt: "Get the USB drive from the back of the toilet at the park. ", m: [450], isComplete: activeCaseComplete },
            { caseId: 5, name: "case_booth", txt: "Investigate the Cum Caper at Toy 'n Us. Tiffany is there M-F during the day. ", m: [650], isComplete: activeCaseComplete },
            { caseId: 6, name: "case_lostgirl", txt: "Find Martha's daughter and report to Missy. ", m: [], isComplete: activeCaseComplete },
            { caseId: 7, name: "case_saveralph", txt: "Hide out at Ralph's house to stop the cult from kidnapping him. ", m: [], isComplete: activeCaseComplete },
            { caseId: 8, name: "case_locket", txt: "Get the locket from the prostitute at the homeless camp. ", m: [], isComplete: activeCaseComplete },
            { caseId: 9, name: "case_goth", txt: "Babysit Bill and get her to the train station on time. ", m: [], isComplete: activeCaseComplete },
            { caseId: 10, name: "case_newclothes", txt: "Visit Tiffany at Toys 'n Us and pick up your new uniform.", m: [650], isComplete: activeCaseComplete },
            { caseId: 11, name: "case_shopping", txt: "Meet Tiffany at the Toys 'n Us.", m: [650], isComplete: activeCaseComplete },
            { caseId: 12, name: "case_bimbopanties", txt: "Steal the panties from the Bimbo", m: [75], isComplete: activeCaseComplete },
            { caseId: 13, name: "case_elijah", txt: "Convince Elijah to spill the details", m: [575], isComplete: activeCaseComplete },
            { caseId: 14, name: "case_beaver", txt: "Work at the Naked Beaver diner to find who has stolen the money. ", m: [250], isComplete: activeCaseComplete },
            { caseId: 15, name: "case_elijah_origin", txt: "Find the mad pooper", m: [725], isComplete: activeCaseComplete },

        ];
        if (activecase > cases.length) {
            console.log("invalid missy.activecase" + activecase);
            return null;
        }
        else
            return cases[activecase];
    }
};

missy.jobs = [
    { id: 0, n: "Clean Toilet", img: "errand3.png", pay: 20, page: 220, thisWeek: 6 },
    { id: 1, n: "File Documents", img: "errand1.png", pay: 40, page: 204, thisWeek: 7 },
    { id: 2, n: "Data Entry", img: "errand0.png", pay: 25, page: 219, thisWeek: 5 },
    { id: 3, n: "Work Reception", img: "errand2.png", pay: 40, page: 221, thisWeek: 8 },
    { id: 4, n: "Run Errands", img: "errand5.png", pay: 30, page: 222, thisWeek: 9 },
    { id: 5, n: "Cum Dump Maid", img: "errand6.png", pay: 35, page: 216, thisWeek: 10 },
    { id: 6, n: "Glory Hole", img: "errand7.png", pay: 50, page: 212, thisWeek: 11 },
    { id: 7, n: "Search the trash", img: "errand8.png", pay: 15, page: 173, thisWeek: 12 },
];

missy.didJob = function (jobId, payMulti, payOverride) {
    missy.st[missy.jobs[jobId].thisWeek].c = 1;
    missy.mod("totalDaysWorked", 1);
    if (payOverride === null)
        missy.mod("weeklyPay", missy.jobs[jobId].pay * payMulti);
    else
        missy.mod("weeklyPay", payOverride);
};

missy.getcases = function () {
    var i;
    var caseList = new Array();
    var canDoCase;
    var piLevel = levels.get("pi").l;
    var completeCounter = 0;

    for (i = 4; i < missy.cases.length; i++) {
        if (missy.cases[i].complete)
            completeCounter++
    };

    //no cases in first 5 days
    if (missy.get("totalDaysWorked") < 5)
        return caseList;

    //must do first case (Has explaination)
    if (completeCounter === 0) {
        canDoCase = cl.c.chest > 0;
        caseList.push({
            caseId: 4,
            active: canDoCase,
            icon: "case4" + (canDoCase ? "" : "_no") + ".png",
            notReadyTxt: "Need to get in shape first piggy. oink oink!",
            callback: missy.cases[4].name
        });
    } //list all cases
    else {
        for (i = 0; i < missy.cases.length; i++) {
            if (!missy.cases[i].complete && missy.cases[i].show) {
                switch (missy.cases[i].name) {
                    case "case_booth":
                        canDoCase = piLevel > 0;
                        caseList.push({
                            caseId: i,
                            active: canDoCase,
                            icon: "case" + i.toString() + (canDoCase ? "" : "_no") + ".png",
                            notReadyTxt: "Need to increase improve your Invistation expertise (Level 1).",
                            callback: missy.cases[i].name
                        });
                        break;
                    case "case_lostgirl":
                        canDoCase = piLevel > 1;
                        caseList.push({
                            caseId: i,
                            active: canDoCase,
                            icon: "case" + i.toString() + (canDoCase ? "" : "_no") + ".png",
                            notReadyTxt: "Need to increase improve your Invistation expertise (Level 2).",
                            callback: missy.cases[i].name
                        });
                        break;
                    case "case_trash":
                        if (completeCounter > 1) {
                            canDoCase = piLevel > 2;
                            caseList.push({
                                caseId: i,
                                active: canDoCase,
                                icon: "case" + i.toString() + (canDoCase ? "" : "_no") + ".png",
                                notReadyTxt: "Need to increase improve your Invistation expertise (Level 3).",
                                callback: missy.cases[i].name
                            });
                        }
                        break;
                    case "case_goth":
                        canDoCase = piLevel > 1;
                        caseList.push({
                            caseId: i,
                            active: canDoCase,
                            icon: "case" + i.toString() + (canDoCase ? "" : "_no") + ".png",
                            notReadyTxt: "Need to increase improve your Invistation expertise (Level 2).",
                            callback: missy.cases[i].name
                        });
                        break;
                    case "case_shopping":
                        if (qdress.st[1].ach) {
                            canDoCase = qdress.st[3].ach;
                            caseList.push({
                                caseId: i,
                                active: canDoCase,
                                icon: "case" + i.toString() + (canDoCase ? "" : "_no") + ".png",
                                notReadyTxt: "Find it in yourself to wear women's clothing. [Unlock Women's clothing in your dreams]",
                                callback: missy.cases[i].name
                            });
                        }
                        break;
                    case "case_bimbopanties":
                        if (levels.get("pi").l > 4) {
                            canDoCase = inv.has("lockpick");
                            caseList.push({
                                caseId: i,
                                active: canDoCase,
                                icon: "case" + i.toString() + (canDoCase ? "" : "_no") + ".png",
                                notReadyTxt: "Work everyday till Missy decides you're worthy of the lock picking class. ",
                                callback: missy.cases[i].name
                            });
                        }
                        break;
                    case "case_elijah_origin": 
                        if (levels.get("pi").l > 2) {
                            canDoCase = piLevel > 3;
                            caseList.push({
                                caseId: i,
                                active: canDoCase,
                                icon: "case" + i.toString() + (canDoCase ? "" : "_no") + ".png",
                                notReadyTxt: "Raise your PI Level. ",
                                callback: missy.cases[i].name
                            });
                        }
                        break;
                    case "case_elijah":
                        if (qdress.st[3].ach && missy.cases[15].success) {
                            canDoCase = piLevel > 2;
                            caseList.push({
                                caseId: i,
                                active: canDoCase,
                                icon: "case" + i.toString() + (canDoCase ? "" : "_no") + ".png",
                                notReadyTxt: "Raise your PI Level. ",
                                callback: missy.cases[i].name
                            });
                        }
                        break;
                    case "case_beaver":
                        if (missy.get("uniform") > 0) {
                            canDoCase = piLevel > 2;
                            caseList.push({
                                caseId: i,
                                active: canDoCase,
                                icon: "case" + i.toString() + (canDoCase ? "" : "_no") + ".png",
                                notReadyTxt: "Raise your PI Level. ",
                                callback: missy.cases[i].name
                            });
                        }
                        break;
                    //case "case_saveralph":
                    //    if (sissy.st[10].ach) {
                    //        canDoCase = piLevel > 4;
                    //        caseList.push({
                    //            caseId: i,
                    //            active: canDoCase,
                    //            icon: "case" + i.toString() + (canDoCase ? "" : "_no") + ".png",
                    //            notReadyTxt: "Raise your PI Level. ",
                    //            callback: missy.cases[i].name
                    //        });
                    //    }
                    //    break;
                }
            }
        }
    }
    //order by active
    return caseList;
};

missy.caseComplete = function (caseId) {
    if (missy.get("activeCaseComplete") === 1)
        missy.cases[caseId].success = true;
    else
        missy.cases[caseId].success = false;

    missy.set("activeCase", -1);
    missy.set("activeCaseComplete", 0);
    missy.set("reusableCaseCounter", 0);
    missy.cases[caseId].complete = true;
};

missy.save = function () { 
    var i;
    var saveRet = {
        st: new Array(),
        cases: new Array()
    }

    for (i = 0; i < missy.st.length; i++) {
        saveRet.st.push(missy.st[i].c);
    }
    for (i = 0; i < missy.cases.length; i++) {
        saveRet.cases.push({ complete: missy.cases[i].complete, success: missy.cases[i].success });
    }
    return saveRet;
};
missy.load = function (saveData) {
    var i;
    missy.init();
    for (i = 0; i < saveData.st.length; i++) {
        missy.st[i].c = saveData.st[i];
    }
    for (i = 0; i < saveData.cases.length; i++) {
        missy.cases[i].complete = saveData.cases[i].complete;
        missy.cases[i].success = saveData.cases[i].success;
    }
};

missy.daily = function () {
    if (missy.st[20] > 0)
        missy.st[19].c++;
};

missy.afterLunch = function () {
    var weekly = gv.get("missyWeekly");
    var crossRef = [
        { id: 0, name: "no event", char: "x", room: 203 },
        { id: 1, name: "pay day", char: "$", room: 196 },
        { id: 2, name: "excersize", char: "e", room: 199 },
        { id: 3, name: "pi skillz", char: "p", room: 198 },
        { id: 4, name: "sub", char: "s", room: 197 },
        { id: 5, name: "panties", char: "q", room: 223 },
        { id: 6, name: "Sissy School", char: "c", room: 211 },
    ];
    
    //build weekly schedule
    if (g.dt.getDay() === 1 || weekly === null || weekly.length < 7) {
        var subweek;
        if (sissy.st[17].ach) {
            if (Math.floor(Math.random() * 2) === 0)
                subweek = "pcsc";
            else
                subweek = "scpc";
        }
        else {

            if (cl.c.chest < 1)
                subweek = "eeps";
            else {
                if (Math.floor(Math.random() * 2 === 0))
                    subweek = "epps";
                else
                    subweek = "epss";
            }

            //mix it up
            for (var i = 0; i < subweek.length; i++) {
                var j = Math.floor(Math.random() * subweek.length);
                var tmp = subweek[i];
                subweek[i] = subweek[j];
                subweek[j] = tmp;
            }
        }
        weekly = "x" + subweek + "$x";
        gv.set("missyWeekly", weekly);
    }

    var today = weekly[g.dt.getDay()];
    var returnRoomId = 0;
    for (i = 0; i < crossRef.length; i++) {
        if (crossRef[i].char === today) {
            returnRoomId = crossRef[i].room;
            break;
        }
    }
    if (returnRoomId === 198) {
        if (levels.get("pi").l > 4 && !inv.has("lockpick")) {
            returnRoomId = 195;
        }
    }
    return returnRoomId;
};

missy.payday = function () {
    return {
        payday: g.dt.getDay() === 5,
        paydayHasPay: g.dt.getDay() === 5 && missy.get("weeklyPay") > 0
    };
};