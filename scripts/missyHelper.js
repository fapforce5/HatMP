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

missy.st = [
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
    { id: 26, n: "totalDaysWorked", c: 0 },
    { id: 27, n: "jobDataEntryThisWeek", c: 0 },
    { id: 28, n: "jobCleanToiletThisWeek", c: 0 },
    { id: 29, n: "jobFileDocumentsThisWeek", c: 0 },
    { id: 30, n: "jobWorkReciptionThisWeek", c: 0 },
    { id: 31, n: "jobRunErrandsThisWeek", c: 0 },
    { id: 32, n: "jobPlaceholder1ThisWeek", c: 0 },
    { id: 33, n: "jobPlaceholder2ThisWeek", c: 0 },
    { id: 34, n: "jobPlaceholder3ThisWeek", c: 0 },
    { id: 35, n: "activeCase", c: 0 },
];

missy.mod = function (num, amount) {
    missy.st[num].c += amount;
    g.popUpNotice("Missy " + missy.st[num].n + " that");
};

missy.get = function (name) {
    for (var i = 0; i < missy.st.length; i++) {
        if(missy.st[i].n === name)
        return missy.st[i].c;
    }
};

missy.jobs = [
    { id: 0, n: "Clean Toilet", img: "errand3.png", pay: 20, page: 220, thisWeek: 28 },
    { id: 1, n: "File Documents", img: "errand1.png", pay: 40, page: 204, thisWeek: 29 },
    { id: 2, n: "Data Entry", img: "errand0.png", pay: 25, page: 219, thisWeek: 27 },
    { id: 3, n: "Work Reciption", img: "errand2.png", pay: 40, page: 221, thisWeek: 30 },
    { id: 4, n: "Run Errands", img: "errand5.png", pay: 30, page: 222, thisWeek: 31 },
];

missy.cases = [
    { id: 0, n: "booth", img: "case0.png", pay: 300, chatId: 0, d: "Visit Tiffany at the Toys 'n Us adult toy store and solve this cum caper! " },
];

missy.getcases = function () {
    var caseList = new Array();
    $.each(missy.cases, function (i, v) {
        caseList.push({ id: v.id, n: v.n, img: v.img, d: v.d, chatId: v.chatId, display: true, req: "Need to increase you PI to level 1. " });
        caseList.push({ id: v.id, n: v.n, img: v.img, d: v.d, chatId: v.chatId, display: true, req: "Need to increase you PI to level 1. " });
        caseList.push({ id: v.id, n: v.n, img: v.img, d: v.d, chatId: v.chatId, display: true, req: "Need to increase you PI to level 1. " });
        caseList.push({ id: v.id, n: v.n, img: v.img, d: v.d, chatId: v.chatId, display: true, req: "Need to increase you PI to level 1. " });
    });
    return caseList;
};

missy.step = [

];

missy.afterLunch = function () {

}

missy.save = function () {

};
missy.load = function () {

}

missy.daily = function () {
    missy.st[25].c++;
}