var revents = {};
var room1010 = {};

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
        "name": "1010js_booknext1",
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
    if (name.startsWith("1010js_booknext") || name.startsWith("1010js_bookprev")) {
        let currentpage;
        if (name.startsWith("1010js_booknext")) {
            currentpage = parseInt(name.replace("1010js_booknext", ""));
        }
        else {
            currentpage = parseInt(name.replace("1010js_bookprev", ""));
        }
        console.log(currentpage);
        nav.modbutton("1010js_book0", "1010_rand/book" + currentpage + ".webp");
        nav.killbuttonStartsWith("1010js_booknext");
        nav.killbuttonStartsWith("1010js_bookprev");
        if (currentpage < 7) {
            nav.button({
                "type": "btn",
                "name": "1010js_booknext" + (currentpage + 1),
                "left": 1621,
                "top": 854,
                "width": 195,
                "height": 154,
                "image": "1010_rand/cum_next.png"
            }, 1010);
        }
        if (currentpage > 0) {
            nav.button({
                "type": "btn",
                "name": "1010js_bookprev" + (currentpage - 1),
                "left": 108,
                "top": 860,
                "width": 188,
                "height": 153,
                "image": "1010_rand/cum_prev.png"
            }, 1010);
        }
    }
};