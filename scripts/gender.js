var gender = {};

gender.canUseCock = function () {
    if (cl.c.chastity !== null)
        return false;
    return !gender.isCockTooSmallForSex();
};

gender.isCockTooSmallForSex = function(){
    return cl.c.cock > 2;
};

gender.isGirl = function () {
    return cl.appearance() > 2;
}

gender.pronoun = function (ptype) {
    switch (ptype) {
        case "boy":
        case "girl":
            return gender.isGirl() ? "girl" : "boy";
        case "he":
        case "she":
            return gender.isGirl() ? "she" : "he"; 
        case "him":
        case "her":
            return gender.isGirl() ? "him" : "her"; 
        default:
            console.log("gender.pronoun - not found: " + ptype);
    }
    return "you";
};