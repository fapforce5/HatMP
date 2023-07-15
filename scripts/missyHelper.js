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

];

missy.mod = function (num, amount) {
    missy.tracker[num].c += amount;
    g.popUpNotice("Missy " + missy.tracker[num].n + " that");
}

missy.step = [
    
]

missy.save = function () {

};
missy.load = function () {

}