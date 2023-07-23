var missy = {};

missy.active = null;

missy.activecase = new function () {
    var retVar;
    switch (missy.active) {
        case "getjob":
            retVar = { txt: "Get a job you bum!", room: [16] };
            break;
        case "workConst":
            retVar = { txt: "Make something of yourself and go to work at the construction site.", room: [100] };
            break;
        case "missy":
            retVar = { txt: "Get your PI License and visit Missy. ", room: [910, 203] };
            break;
    }

    return retVar;
}

missy.tracker = [
    { id: 0, n: "mood", c: 0 },
    { id: 1, n: "late", c: 0 },
    { id: 2, n: "uniform", c: 0 }, //0 is suit, 1 is dress
    { id: 3, n: "minorInfraction", c: 0 }, 
    { id: 4, n: "jobDataEntry", c: 0 }, 
    { id: 5, n: "jobCleanToilet", c: 0 }, 
    { id: 6, n: "jobFileDocuments", c: 0 }, 
    { id: 7, n: "jobWorkReciption", c: 0 }, 
    { id: 8, n: "jobRunErrands", c: 0 }, 
    { id: 9, n: "jobPlaceholder1", c: 0 }, 
    { id: 10, n: "jobPlaceholder2", c: 0 }, 
    { id: 10, n: "jobPlaceholder3", c: 0 }, 
    { id: 11, n: "hypno1", c: 0 },
    { id: 12, n: "hypno2", c: 0 },
    { id: 13, n: "hypno3", c: 0 },
    { id: 14, n: "hypno4", c: 0 },
    { id: 15, n: "hypno5", c: 0 },
    { id: 16, n: "hypno6", c: 0 },
    { id: 17, n: "al_workout", c: 0 },
    { id: 18, n: "al_placeHolder", c: 0 },
    { id: 19, n: "al_placeHolder", c: 0 },
    { id: 20, n: "al_placeHolder", c: 0 },
    { id: 21, n: "al_placeHolder", c: 0 },
    { id: 22, n: "al_placeHolder", c: 0 },
    { id: 23, n: "al_placeHolder", c: 0 },
    { id: 24, n: "al_placeHolder", c: 0 },
    { id: 25, n: "daysSinceBathroomCleaned", c: 0 },
];

missy.mod = function (num, amount) {
    missy.tracker[num].c += amount;
    g.popUpNotice("Missy " + missy.tracker[num].n + " that");
}

missy.jobs = [
    { id: 0, n: "Clean Toilet", img: "errand3.png", pay: 20, page: 220 },
    { id: 1, n: "File Documents", img: "errand1.png", pay: 30, page: 204 },
    { id: 2, n: "Data Entry", img: "errand0.png", pay: 25, page: 219 },
    { id: 3, n: "Work Reciption", img: "errand2.png", pay: 40, page: 221 },
    { id: 4, n: "Run Errands", img: "errand5.png", pay: 25, page: 222 },
];

missy.step = [

];

missy.afterLunch = function () {

}

missy.save = function () {

};
missy.load = function () {

}

missy.daily = function () {
    missy.tracker[25].c++;
}