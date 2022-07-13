﻿var m = {};
m.fmap = null;
m.row = 80;
m.col = 20;
m.drawBackground = function (row, col) {
    nav.killall();
    if (m.fmap[row][col].used === 'b') {
        nav.bg("475_fight/b.jpg");
        nav.button({
            "type": "btn",
            "name": "south",
            "title": "South",
            "left": 0,
            "top": 718,
            "width": 1920,
            "height": 362,
            "image": "475_fight/b_s.jpg"
        }, 475);
        chat(0, 475);
    }
    else {
        var bg = m.drawBackgroundSub(row, col);

        nav.bg("475_fight/" + bg + ".jpg");
        if (row > 0) {
            if (m.fmap[row - 1][col].used !== 'x')
                nav.button({
                    "type": "btn",
                    "name": "north",
                    "title": "North",
                    "left": 712,
                    "top": 0,
                    "width": 458,
                    "height": 489,
                    "image": "475_fight/" + bg + "_n.jpg"
                }, 475);
        }
        if (row < m.row - 1) {
            if (m.fmap[row + 1][col].used !== 'x')
                nav.button({
                    "type": "btn",
                    "name": "south",
                    "title": "South",
                    "left": 712,
                    "top": 489,
                    "width": 458,
                    "height": 591,
                    "image": "475_fight/" + bg + "_s.jpg"
                }, 475);
        }
        if (col > 0) {
            if (m.fmap[row][col - 1].used !== 'x')
                nav.button({
                    "type": "btn",
                    "name": "west",
                    "title": "West",
                    "left": 0,
                    "top": 316,
                    "width": 712,
                    "height": 440,
                    "image": "475_fight/" + bg + "_w.jpg"
                }, 475);
        }
        if (col < m.col - 1) {
            if (m.fmap[row][col + 1].used !== 'x')
                nav.button({
                    "type": "btn",
                    "name": "east",
                    "title": "East",
                    "left": 1170,
                    "top": 316,
                    "width": 750,
                    "height": 440,
                    "image": "475_fight/" + bg + "_e.jpg"
                }, 475);
        }
    }
    
};

m.drawBackgroundSub = function (row, col) {
    var bg = "f1";
    if (row > 67) {
        bg = (col + row) % 2 === 0 ? "f0" : "f1";
    }
    else if (row > 57) {
        if (row % 2 === 0)
            bg = (col + row) % 2 === 0 ? "f0" : "f1";
        else
            bg = (col + row) % 2 === 0 ? "o0" : "o1";
    }
    else {
        bg = (col + row) % 2 === 0 ? "o0" : "o1";
    }
    return bg + (g.isNight() ? "n" : "");
};

m.drawMap = function (r, c) {
    
    char.changeMenu("map", false, true);

    var i, j;
    var st = "";
    $('#room_left_map').html('<div class="resize" style="margin-top:' + 100 * g.ratio + 'px; "></div>');
    var style = 'style="width: ' + 11 * g.ratio + 'px; height: ' + 11 * g.ratio + 'px;" ';
    for (i = 0; i < m.row; i++) {
        st = '<div class="resize" style="margin:0; padding:0; height: ' + 11 * g.ratio + 'px; margin-left: ' + 20 * g.ratio + 'px;" >';
        for (j = 0; j < m.col; j++) {
            if (i === r && c === j)
                st = st.concat('<div class="map-box map-tile-q resize" title="' + i + ', ' + j + '" ' + style + '></div>');
            else if (!m.fmap[i][j].visited)
                st = st.concat('<div class="map-box resize" title="' + i + ', ' + j + '" ' + style + '></div>');
            else
                st = st.concat('<div class="resize map-box map-tile-' + m.fmap[i][j].used + '" title="' + i + ', ' + j + '" ' + style + '></div>');
        }
        st = st.concat("</div>");
        $('#room_left_map').append(st);
    }
};

m.getDir = function (n, d) {
    var i;
    var ret = {};
    for (i = 0; i < m.direction.length; i++) {
        if (m.direction[i].n === n && m.direction[i].d === d) {
            ret = {
                "type": "btn",
                "name": m.direction[i].display,
                "title": m.direction[i].display,
                "left": m.direction[i].l,
                "top": m.direction[i].t,
                "width": m.direction[i].w,
                "height": m.direction[i].h,
                "image": "475_fight/" + m.direction[i].img
            };
            i = m.direction.length;
        }
    }
    return ret;
};

m.createFmap = function () {
    var i, j, k, l, c, r, tf;

    var x = g.get("forestMap");
    if (x === null)
        m.createFmapNew();
    else {
        var y = g.get("forestVisit");
        //var z = g.get("forestID");
        //var xa = x.split(",");
        var ya = y.split(",");
        m.fmap = new Array(m.row).fill(0).map(() => new Array(m.col).fill(0));
        for (i = 0; i < m.row; i++) {
            for (j = 0; j < m.col; j++)
                m.fmap[i][j] = {
                    used: 'x',
                    visited: false
                };
        }

        for (i = 0; i < x.length; i++) {
            k = Math.floor(i / 18) + 1;
            l = (i % 18) + 1;
            m.fmap[k][l].used = x[i];
        }
        for (i = 0; i < ya.length; i++) {
            c = m.revGetNum(ya[i]);
            if (c !== null)
                m.fmap[c.row][c.col].visited = true;
        }

        m.fmap[79][10].used = 's';
        m.fmap[49][0].used = 's';
        m.fmap[24][0].used = 's';
    }
};

m.createFmapNew = function () {
    var i, j, k, l, c, r;
    var trow, tcol, goRight, howMany;

    m.fmap = new Array(m.row).fill(0).map(() => new Array(m.col).fill(0));
    var thisUpdate;
    var prevDir = Math.floor(Math.random() * 2) === 1;
    var tf = new Array();
    trow = 78;
    tcol = 10;
    while (trow > 1) {
        if (prevDir) {
            var moveAhead = (Math.floor(Math.random() * 6)) + 2;
            for (moveAhead; moveAhead > 0; moveAhead--) {
                if (trow > 0) {
                    trow--;
                    tf.push({ row: trow, col: tcol });
                }
            }
        }
        else {
            if (tcol < 4)
                goRight = true;
            else if (tcol > 15)
                goRight = false;
            else
                goRight = Math.floor(Math.random() * 2) === 1;
            howMany = Math.floor(Math.random() * 10) + 3;
            for (howMany; howMany > 0; howMany--) {
                if (goRight) {
                    if (tcol < 17)
                        tcol++;
                }
                else {
                    if (tcol > 2)
                        tcol--;
                }
                tf.push({ row: trow, col: tcol });
            }
        }
        prevDir = !prevDir;
    }

    
    for (i = 0; i < 15; i++) {
        j = Math.floor(Math.random() * tf.length);
        r = tf[j].row;
        c = tf[j].col;
        l = Math.floor(Math.random() * 2);
        for (j = 0; j < 10; j++) {
            k = Math.floor(Math.random() * 8);
            if (k === 0 && r > 0)
                r--;
            else if (k === 1 && r < 48)
                r++;
            else if (k === 3 && c > 1)
                c--;
            else if (k === 4 && c < 18)
                c++;
            else if (l === 0 && c > 1)
                c--;
            else if (c < 18)
                c++;
            tf.push({ row: r, col: c });
        }
    }

    for (i = 0; i < m.row; i++) {
        for (j = 0; j < m.col; j++) {
            m.fmap[i][j] = {
                used: 'x',
                visited: false
            };
        }
    }
    for (i = 0; i < tf.length; i++) {
        m.fmap[tf[i].row][tf[i].col].used = 'm';
    }

    for (i = 0; i < Math.floor((m.col * m.row) / 3); i++) {
        var tc = g.rand(1, m.col - 1);
        var tr = g.rand(1, m.row - 1);
        if (m.fmap[tr][tc].used !== 'm')
            m.fmap[tr][tc].used = 'm'; //make u for test
    }

    for (i = 1; i < m.col - 1; i++) {
        m.fmap[50][i].used = 'x';
        m.fmap[51][i].used = 'm';
        m.fmap[49][i].used = 'm';

        m.fmap[25][i].used = 'x';
        m.fmap[26][i].used = 'm';
        m.fmap[24][i].used = 'm';

        m.fmap[0][i].used = 'x';
        m.fmap[1][i].used = 'm';

        m.fmap[59][i].used = 'm';
        m.fmap[32][i].used = 'm';
        m.fmap[12][i].used = 'm';
    }

    
    m.fmap[50][Math.floor(Math.random() * 16) + 2].used = 'b';
    m.fmap[25][Math.floor(Math.random() * 16) + 2].used = 'c';
    m.fmap[0][Math.floor(Math.random() * 16) + 2].used = 'd';

    var goldHouseLoc = Math.floor(Math.random() * 2) === 1;
    var close = goldHouseLoc ? 2 : 17;
    var far = !goldHouseLoc ? 2 : 17;
    m.fmap[59][close].used = 'g';
    m.fmap[32][far].used = 'g';
    m.fmap[12][close].used = 'g';

    m.fmap[58][far].used = 'm';
    m.fmap[59][far].used = 'm';
    m.fmap[60][far].used = 'm';
    m.fmap[61][far].used = 'm';
    m.fmap[62][far].used = 'i';

    m.fmap[33][close].used = 'm';
    m.fmap[34][close].used = 'm';
    m.fmap[35][close].used = 'm';
    m.fmap[36][close].used = 'j';

    m.fmap[13][far].used = 'm';
    m.fmap[14][far].used = 'm';
    m.fmap[15][far].used = 'm';
    m.fmap[16][far].used = 'k';

    m.fmap[49][0].used = 's';
    m.fmap[24][0].used = 's';
    
    m.fmap[78][10].used = 'm';
    m.fmap[79][10].used = 's';
    m.fmap[79][10].visited = true;
    var tx = "";
    for (i = 0; i < m.row; i++) {
        for (j = 0; j < m.col; j++) {
            if (m.fmap[i][j].visited)
                tx += m.getNum(i, j) + ",";
        }
    }
    g.set("forestVisit", tx);
    var forestString = "";

    for (i = 1; i < 79; i++) {
        for (j = 1; j < 19; j++)
            forestString += m.fmap[i][j].used;
    }
    g.set("forestMap", forestString);
};

m.updateVisit = function () {
    var tx = "";
    var i, j;
    for (i = 0; i < m.row; i++) {
        for (j = 0; j < m.col; j++) {
            if (m.fmap[i][j].visited)
                tx += m.getNum(i, j) + ",";
        }
    }
    g.set("forestVisit", tx);
};

m.getNum = function (i, j) {
    return (i * 20) + j;
};
m.revGetNum = function (x) {
    var n = parseInt(x);
    if (!isNaN(n)) {
        var m = Math.floor(n / 20);
        var o = n % 20;
        return { row: m, col: o };
    }
    return null;
};