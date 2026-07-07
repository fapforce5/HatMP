var revents = {};
var room1010 = {};

revents.bookPageName = function (direction, page) {
    return "1010js_book" + direction + page;
};

revents.bookPageNumber = function (name) {
    if (name.startsWith("1010js_booknext"))
        return parseInt(name.replace("1010js_booknext", ""));
    if (name.startsWith("1010js_bookprev"))
        return parseInt(name.replace("1010js_bookprev", ""));
    return null;
};

revents.drawBookNavButton = function (direction, page) {
    var isNext = direction === "next";
    nav.button({
        "type": "btn",
        "name": revents.bookPageName(direction, page),
        "left": isNext ? 1621 : 108,
        "top": isNext ? 854 : 860,
        "width": isNext ? 195 : 188,
        "height": isNext ? 154 : 153,
        "image": "1010_rand/cum_" + direction + ".png"
    }, 1010);
};

revents.refreshCultBookNav = function (currentpage) {
    nav.killbuttonStartsWith("1010js_booknext");
    nav.killbuttonStartsWith("1010js_bookprev");
    if (currentpage < 7)
        revents.drawBookNavButton("next", currentpage + 1);
    if (currentpage > 0)
        revents.drawBookNavButton("prev", currentpage - 1);
};

revents.cultbook = function (roomNum, btnclickName) {
    nav.button({
        "type": "img",
        "name": "1010js_book0",
        "left": 0,
        "top": 0,
        "width": 1920,
        "height": 1080,
        "image": "1010_rand/book0.webp"
    }, 1010);
    nav.button({
        "type": "btn",
        "name": revents.bookPageName("next", 1),
        "left": 1621,
        "top": 854,
        "width": 195,
        "height": 154,
        "image": "1010_rand/cum_next.png"
    }, 1010);
    nav.button({
        "type": "btn",
        "name": btnclickName,
        "left": 1740,
        "top": 150,
        "width": 160,
        "height": 160,
        "image": "1010_rand/cum_close.png"
    }, roomNum);
};

room1010.btnclick = function (name) {
    if (name === "magazineCloseInventory") {
        nav.killbutton("magazineCloseInventory");
    }
    if (name.startsWith("1010js_booknext") || name.startsWith("1010js_bookprev")) {
        let currentpage = revents.bookPageNumber(name);
        nav.modbutton("1010js_book0", "1010_rand/book" + currentpage + ".webp");
        revents.refreshCultBookNav(currentpage);
    }
};

invoker.registerRoom(1010, room1010);
