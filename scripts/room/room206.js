//Room name
var room206 = {};

room206.main = function () {
    var l, t, w, h;
    l = 400 * g.ratio;
    t = 150 * g.ratio;
    w = 1400 * g.ratio;
    h = 800 * g.ratio;
    f = 36 * g.ratio;
    $("#room-buttons").append('<div style="position:absolute; left:' + l + 'px; top:' + t + 'px;' +
        ' width:' + w + 'px; height: ' + h + 'px; font-size:' + f + 'px;" id="q206"></div>');
    g.internal = g.pass = 0;
    room206.chatcatch("");
    $('#room_footer').hide();
};

room206.btnclick = function (name) {
    switch (name) {
        case "":
            break;
        default:
            break;
    }
};

room206.chatcatch = function (callback) {
    var t;
    var b = new Array();
    var ia = new Array();
    switch (g.internal) {
        case 0:
            t = "<h2>Questionairre for Junior Detective</h2> Being a junior detective may put you in " +
                "some situations that are new to you. The following questionairre will asses " +
                "your potential for employment. Please answer the following questions honestly so I may " +
                "evaluate your potenial employment with this agency.";
            b.push({ t: "Continue", a: 0});
            break;
        case 1:
            var p = {
                shoes: "hr", socks: "f", pants: null, panties: null, bra: null, shirt: null, dress: "ps", swimsuit: null, pj: null, accessories: new Array()
            };
            cl.changeClothing(p);
            t = "As a junior detective you aren't smart enough to know how to dress yourself for " +
                "office and undercover work. You agree to wear what " + sc.n("missy") + " instructs " +
                "you to wear, whether it be a suit, dress, or fully nude.";
            b.push({ t: "I agree to wear whatever " + sc.n("missy") + " tells me to wear. ", a: 2 });
            break;
        case 2:
            cl.undo();
            t = "Junior detectives also need to be trained to correctly carry out their appointed duties. " +
                "Do you agree to accept any and all punishments " + sc.n("missy") + " assigns you without question? ";
            b.push({ t: "I agree to follow and obey " + sc.n("missy") + " at all times. ", a: 2 });
            break;
        case 3:
            t = "The next set of questions is asses your personality and see if you'll be a good fit here.";
            b.push({ t: "Continue", a: 0 });
            break;
        case 4:
            t = "Do you usually initiate conversations? ";
            b.push({ t: "Yes I'm the center of the party.", a: 3 });
            b.push({ t: "No, I'm more of a wall flower", a: 0 });
            break;
        case 5:
            t = "What do you think about being tied up? ";
            b.push({ t: "No, just no.", a: -2 });
            b.push({ t: "I can go either way", a: 2 });
            b.push({ t: "Tie it tighter", a: 5 });
            break;
        case 6:
            t = "Do you try new things out of sheer curiosity?";
            b.push({ t: "Yes", a: 5 });
            b.push({ t: "No", a: 0 });
            break;
        case 7:
            t = "Do you feel superior to other people? ";
            b.push({ t: "Yes, I'm the king", a: 0 });
            b.push({ t: "No, I'm a little bitch", a: 5 });
            break;
        case 8:
            t = "What level of discomfort can you handle?";
            b.push({ t: "None, please be nice", a: -2 });
            b.push({ t: "A little, maybe an over the knee spanking", a: 3 });
            b.push({ t: "I'm a total pain slut", a: 5 });
            break;
        case 9:
            t = "What kind of clothing do you prefer to wear?";
            b.push({ t: "Professional male clothing", a: -2 });
            b.push({ t: "Any male clothing", a: 0 });
            b.push({ t: "I'll wear anything", a: 1 });
            b.push({ t: "Professional female clothing", a: 4 });
            b.push({ t: "Dress me up like a dirty dirty slut", a: 5 });
            break;
        case 10:
            t = "Do you prefer to be in charge of a situation, or would you rather follow orders?";
            b.push({ t: "I'm a dominate alpha male!", a: -5 });
            b.push({ t: "I'm a submissive little sissy", a: 5 });
            break;
        case 11:
            t = "Which gender are you attracted to?";
            b.push({ t: "Only girls can ride this ride", a: 0 });
            b.push({ t: "I'm only interested in men.", a: 3 });
            b.push({ t: "I prefer girls, but I wouldn't mind a sissy", a: 2 });
            b.push({ t: "I'm a total slut and will have sex with anyone", a: 5 });
            break;
        case 12:
            t = "Are you into watersports (The act of being urinating on someone or being urinated on)?";
            b.push({ t: "No, gross", a: -5 });
            b.push({ t: "If that's what you're into", a: 3 });
            b.push({ t: "I'm a pee pee whore", a: 5 });
            break;
        case 13:
            t = "Which is sexier?";
            ia.push({ w: 410, h: 204, img: "bentGirl.png", a: 0 });
            ia.push({ w: 410, h: 204, img: "bentBoy.png", a: 3 });
            break;
        case 14:
            t = "Which underwear do you prefer?";
            ia.push({ w: 200, h: 200, img: "panties_underwearblue.png", a: -2 });
            ia.push({ w: 200, h: 200, img: "panties_whitepanty.png", a: 2 });
            ia.push({ w: 200, h: 200, img: "panties_blackmesh.png", a: 5 });
            break;
        case 15:
            //end
            g.internal = g.pass;
            g.pass = "takeItBitch";
            char.room(203);
            break;
        default:
            break;
    }

    if (g.internal < 15) {
        $('#q206').html(t);
        $.each(ia, function (i, v) {
            $('#q206').append('<div><button style="background:none; border:none; margin-top:10px; display:block; margin-left:20px;" class="q206-btn" data-a="' + v.a + '">' +
                '<span style="padding:4px 8px; border:solid 2px #000; border-radius:5px; margin-right:15px; display:inline-block;">&nbsp;</span> ' +
                '<img src="./images/room/206_questions/' + v.img + '" style="height: ' + (v.h * g.ratio) + 'px; width: ' + (v.w * g.ratio) + 'px;" />' +
                '</button> </div>');
        });
        $.each(b, function (i, v) {
            $('#q206').append('<div><button style="background:none; border:none; margin-top:10px; display:block; margin-left:20px;" class="q206-btn" data-a="' + v.a + '">' +
                '<span style="padding:4px 8px; border:solid 2px #000; border-radius:5px; margin-right:15px; display:inline-block;">&nbsp;</span> ' + v.t + '</button> </div>');
        });

        $('.q206-btn').click(function () {
            var thisEntry = parseInt($(this).data('a'));
            //console.log(g.internal, thisEntry);
            g.mod("sissy", thisEntry);
            g.pass += thisEntry;
            g.internal++;
            room206.chatcatch("");
        });
    }
};

room206.chat = function (chatID) {
    return [];
};











