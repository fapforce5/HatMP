var m = {};
m.fmap = new Array();
m.direction = [
    { n: 0, d: 'n', display: 'north', img: '475_path_1_n.png', l: 712, t: 0, w: 458, h: 489 },
    { n: 0, d: 'e', display: 'east', img: '475_path_1_e.png', l: 1170, t: 316, w: 750, h: 440 },
    { n: 0, d: 's', display: 'south', img: '475_path_1_s.png', l: 712, t: 489, w: 458, h: 591 },
    { n: 0, d: 'w', display: 'west', img: '475_path_1_w.png', l: 0, t: 316, w: 712, h: 440 },


];

m.drawMap = function () {

    var c = 0;
    var isize = 30;
    var right, top;
    right = 600;
    top = 250;
    for (i = (m.fmap.length - 1); i > -1; i--) {
        for (j = 0; j < m.fmap[i].length; j++) {
            console.log('hit');
            $('#menu_parent').append('<img class="dot_' + i + '_' + j + '" src="./images/room/475_fight/map_' + m.fmap[i][j].visited + '.png" style="position:absolute; ' + g.makeCss(30, 30, (30 * c) + top, (isize * j) + right) + '" />');
        }
        c++;
    }
    if (g.pass === "combat") {
        $(".dot_" + g.internal.row + "_" + g.internal.col).remove();
        $('#menu_parent').append('<img class="dot_' + i + '_' + j + '" src="./images/room/475_fight/map_me.gif" style="position:absolute; ' + g.makeCss(30, 30, (isize * (Math.abs(g.internal.row - m.fmap.length) - 1)) + top, (isize * g.internal.col) + right) + '" />');
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
}

m.save = function () {
    return "";
}

m.load = function () {
    m.createFmap();
}


m.createFmap = function () {
    var row, col, i, j, tf;
    row = 17;
    col = 22;
    m.fmap = new Array();
    var thisUpdate;

    var fill0 = [
        { row: 1, col: 9 },
        { row: 2, col: 9 },
        { row: 2, col: 8 },
        { row: 3, col: 9 },
        { row: 2, col: 7 },
        { row: 4, col: 9 },
        { row: 2, col: 6 },
        { row: 4, col: 10 },
        { row: 4, col: 11 },
        { row: 1, col: 6 },
        { row: 1, col: 5 },
        { row: 1, col: 4 },
        { row: 2, col: 4 },
        { row: 3, col: 4 },
        { row: 4, col: 4 },
        { row: 5, col: 4 },
        { row: 5, col: 3 },
        { row: 6, col: 3 },
        { row: 7, col: 3 },
        { row: 7, col: 4 },
        { row: 7, col: 5 },
        { row: 8, col: 5 },
        { row: 9, col: 5 },
        { row: 10, col: 5 },
        { row: 11, col: 5 },
        { row: 11, col: 4 },
        { row: 11, col: 6 },
        { row: 11, col: 3 },
        { row: 11, col: 7 },
        { row: 12, col: 7 },
        { row: 12, col: 7 },
        { row: 14, col: 7 },
        { row: 3, col: 12 },
        { row: 3, col: 13 },
        { row: 2, col: 13 },
        { row: 1, col: 13 },
        { row: 0, col: 13 },
        { row: 3, col: 14 },
        { row: 4, col: 14 },
        { row: 5, col: 14 },
        { row: 5, col: 15 },
        { row: 6, col: 15 },
        { row: 7, col: 15 },
        { row: 8, col: 15 },
        { row: 8, col: 14 },
        { row: 9, col: 14 },
        { row: 9, col: 13 },
        { row: 10, col: 13 },
        { row: 11, col: 13 },
        { row: 12, col: 13 },
        { row: 12, col: 14 },
        { row: 12, col: 15 },
        { row: 12, col: 16 },
        { row: 12, col: 17 },
        { row: 13, col: 7 },
        { row: 4, col: 12 }
    ];

    var fill1 = [
        { row: 1, col: 9 },
        { row: 1, col: 8 },
        { row: 1, col: 10 },
        { row: 1, col: 7 },
        { row: 1, col: 11 },
        { row: 1, col: 6 },
        { row: 1, col: 5 },
        { row: 1, col: 4 },
        { row: 2, col: 5 },
        { row: 1, col: 3 },
        { row: 2, col: 2 },
        { row: 1, col: 2 },
        { row: 3, col: 2 },
        { row: 4, col: 2 },
        { row: 5, col: 2 },
        { row: 5, col: 1 },
        { row: 5, col: 3 },
        { row: 5, col: 0 },
        { row: 6, col: 0 },
        { row: 7, col: 0 },
        { row: 8, col: 0 },
        { row: 8, col: 1 },
        { row: 9, col: 1 },
        { row: 10, col: 1 },
        { row: 11, col: 1 },
        { row: 11, col: 2 },
        { row: 11, col: 3 },
        { row: 11, col: 4 },
        { row: 12, col: 4 },
        { row: 13, col: 4 },
        { row: 2, col: 11 },
        { row: 3, col: 11 },
        { row: 4, col: 11 },
        { row: 5, col: 11 },
        { row: 6, col: 11 },
        { row: 6, col: 10 },
        { row: 6, col: 9 },
        { row: 5, col: 9 },
        { row: 6, col: 9 },
        { row: 9, col: 9 },
        { row: 9, col: 9 },
        { row: 10, col: 10 },
        { row: 11, col: 10 },
        { row: 11, col: 11 },
        { row: 11, col: 12 },
        { row: 11, col: 13 },
        { row: 6, col: 12 },
        { row: 6, col: 13 },
        { row: 6, col: 14 },
        { row: 6, col: 15 },
        { row: 6, col: 16 },
        { row: 6, col: 17 },
        { row: 6, col: 1 },
        { row: 7, col: 1 },
        { row: 8, col: 1 },
        { row: 6, col: 18 },
        { row: 7, col: 18 },
        { row: 8, col: 18 },
        { row: 9, col: 18 },
        { row: 9, col: 19 },
        { row: 10, col: 19 },
        { row: 11, col: 19 },
        { row: 12, col: 19 },
    ];

    var fill2 = [
        { row: 1, col: 9 },
        { row: 1, col: 8 },
        { row: 1, col: 7 },
        { row: 2, col: 7 },
        { row: 3, col: 7 },
        { row: 2, col: 7 },
        { row: 4, col: 6 },
        { row: 4, col: 5 },
        { row: 5, col: 5 },
        { row: 6, col: 5 },
        { row: 7, col: 5 },
        { row: 7, col: 4 },
        { row: 7, col: 3 },
        { row: 7, col: 2 },
        { row: 7, col: 1 },
        { row: 7, col: 0 },
        { row: 6, col: 0 },
        { row: 5, col: 0 },
        { row: 4, col: 0 },
        { row: 3, col: 0 },
        { row: 2, col: 0 },
        { row: 2, col: 9 },
        { row: 3, col: 9 },
        { row: 4, col: 9 },
        { row: 5, col: 9 },
        { row: 6, col: 9 },
        { row: 6, col: 10 },
        { row: 6, col: 11 },
        { row: 6, col: 12 },
        { row: 6, col: 13 },
        { row: 5, col: 13 },
        { row: 4, col: 13 },
        { row: 4, col: 14 },
        { row: 4, col: 15 },
        { row: 3, col: 15 },
        { row: 3, col: 16 },
        { row: 3, col: 17 },
        { row: 3, col: 18 },
        { row: 4, col: 18 },
        { row: 5, col: 18 },
        { row: 6, col: 18 },
        { row: 7, col: 18 },
        { row: 8, col: 18 },
        { row: 9, col: 18 },
        { row: 9, col: 19 },
        { row: 10, col: 19 },
        { row: 11, col: 19 },
        { row: 12, col: 19 },
        { row: 13, col: 19 },
        { row: 13, col: 18 },
        { row: 7, col: 9 },
        { row: 8, col: 9 },
        { row: 9, col: 9 },
        { row: 10, col: 9 },
        { row: 11, col: 9 },
        { row: 12, col: 9 },
        { row: 3, col: 6 }
    ];
    if (g.rand(0, 2)) {
        thisUpdate = 0;
        tf = fill0;
    }
    else if (g.rand(0, 1)) {
        thisUpdate = 1;
        tf = fill1;
    }
    else {
        thisUpdate = 2;
        tf = fill2;
    }

    for (i = 0; i < row; i++) {
        m.fmap.push(new Array())
        for (j = 0; j < col; j++) {
            m.fmap[i][j] = {
                used: 'x',
                t: (i * row) + j,
                visited: 'u'
            };
        }
    }

    for (i = 0; i < tf.length; i++) {
        m.fmap[tf[i].row][tf[i].col].used = 'm';
    }

    for (i = 0; i < Math.floor((col * row) / 1.8); i++) {
        var tc = g.rand(0, col);
        var tr = g.rand(0, row);
        if (m.fmap[tr][tc].used != 'm')
            m.fmap[tr][tc].used = 'm'; //make u for test
    }
    for (i = 0; i < row; i++) {
        m.fmap[i][0].used = 'x';
        m.fmap[i][col - 1].used = 'x';
    }
    for (i = 0; i < col; i++) {
        m.fmap[0][i].used = 'x';
        m.fmap[row - 1][i].used = 'x';
    }

    m.fmap[g.rand(3, 15)][g.rand(1, 20)].used = 'b';
    m.fmap[g.rand(3, 15)][g.rand(1, 20)].used = 'b';
    m.fmap[g.rand(3, 15)][g.rand(1, 20)].used = 'g';
    m.fmap[g.rand(3, 15)][g.rand(1, 20)].used = 'g';

    switch (thisUpdate) {
        case 0:
            m.fmap[15][7].used = 'h';
            m.fmap[13][17].used = 'h';
            m.fmap[11][7].used = 'b';
            m.fmap[12][13].used = 'b';
            m.fmap[7][5].used = 'g';
            m.fmap[8][15].used = 'g';
            break;
        case 1:
            m.fmap[12][20].used = 'h';
            m.fmap[13][3].used = 'h';
            m.fmap[11][4].used = 'b';
            m.fmap[9][19].used = 'b';
            m.fmap[5][2].used = 'g';
            m.fmap[6][14].used = 'g';
            break;
        case 2:
            m.fmap[8][1].used = 'h';
            m.fmap[14][18].used = 'h';
            m.fmap[7][5].used = 'b';
            m.fmap[9][19].used = 'b';
            m.fmap[4][5].used = 'g';
            m.fmap[3][18].used = 'g';
            break;
    }
}