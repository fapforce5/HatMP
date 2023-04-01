//Room name
var room6 = {};
room6.main = function () {
    g.internal = q3.list();
    room6.chatcatch("drawmain");
};

//room6.getNameList = function () {
//    return {
//        level: 0,
//        current: "",
//        active: [
//            { n: "landlord", f: true, x: true },
//            { n: "eva", f: true, x: true },
//            { n: "stormy", f: true, x: true },
//            { n: "chloe", f: true, x: true },
//            { n: "chad", f: false, x: true },
//            { n: "charlie", f: false, x: true },
//            { n: "cop", f: false, x: true },
//            { n: "cop2", f: false, x: true },
//            { n: "govlady", f: true, x: true },
//            { n: "g", f: true, x: true },
//            { n: "jones", f: false, x: true },
//            { n: "juniper", f: true, x: true },
//            { n: "keaton", f: false, x: true },
//            { n: "molly", f: true, x: true },
//            { n: "river", f: false, x: true },
//            { n: "spanky", f: false, x: true },
//            { n: "treyvon", f: false, x: true },
//            { n: "rachel", f: true, x: true },
//        ],
//        inactive: [
//            { n: "missy", x: true },
//            { n: "black", x: true },
//            { n: "p", x: true },
//            { n: "cecilia", x: true },
//            { n: "construction", x: true },
//            { n: "nell", display: "Nell", x: false, img: "6_computer/nell.png" },
//            { n: "dad", display: "Alexander", x: false, img: "6_computer/dad.png" },
//            { n: "jeremy", display: "Jeremy", x: false, img: "6_computer/jeremy.png" },
//        ]
//    };
//}

room6.btnclick = function (name) {
    if (name === "close") {
        if (g.internal.level === 0) {
            char.room(9);
        }
        else if (g.internal.level === 1) {
            g.internal.level = 0;
            room6.chatcatch("drawmain");
        }
        else if (g.internal.level === 2) {
            g.internal.level = 1;
            nav.killall();
            room6.chatcatch("drawscreen");
        }
        else if (g.internal.level === 3) {
            g.internal.level = 1;
            nav.killall();
            room6.chatcatch("drawinactive");
        }
    }
    else if (name === "zzzactive") {
        nav.killall();
        room6.chatcatch("drawscreen");
    }
    else if (name === "zzzinactive") {
        nav.killall();
        room6.chatcatch("drawinactive");
    }
    else if (name === "zzznotes") {
        g.internal.level = 1;
        nav.killall();
        nav.t({
            type: "img",
            name: "title",
            left: 300,
            top: 150,
            font: 40,
            hex: "#ffffff",
            text: "I'm sure someone in my list of known contacts knows the combo to get into <br/> " +
                "the compound. They stopped telling me after they said I had become 'disgruntaled'. <br/>" +
                "Most people are just buzzed in, so you have to get someone from the inside to let <br/>" +
                "you in. But there's a few that know the secret combo to the door, I just don't know who. <br/>" +
                "Best of luck in taking them down. I know you can do it! <br/><br/>" +
                "❤️ Forest Queen"
        }, 6);
        nav.button({
            "type": "btn",
            "name": "close",
            "left": 1652,
            "top": 829,
            "width": 150,
            "height": 150,
            "image": "6_computer/close.png"
        }, 6);
    }
    else {
        var txt = { o: "", p: "", s: "", h: "", n: false }
        nav.killall();
        g.internal.current = sc.get(name);
        if (g.internal.current === null) {
            for (var i = 0; i < g.internal.inactive.length; i++) {
                if (g.internal.inactive[i].n === name) {
                    g.internal.current = {
                        image: g.internal.inactive[i].img,
                        display: g.internal.inactive[i].display
                    };
                    i = 9999;
                }
            }
        }
        else
            g.internal.current.image = "../speaker/" + g.internal.current.image;
        g.internal.level = 2;
        nav.button({
            "type": "img",
            "name": "char",
            "left": 300,
            "top": 150,
            "width": 200,
            "height": 200,
            "image": g.internal.current.image
        }, 6);
        nav.t({
            type: "img",
            name: "title",
            left: 500,
            top: 270,
            font: 80,
            hex: "#ffffff",
            text: "Name: " + g.internal.current.display
        }, 6);
        switch (name) {
            case "landlord":
                txt.o = "Sperm Bank Owner";
                txt.p = "Cum Bath Supplier";
                txt.s = "Principle sperm supplier for all Cum Bath rituals. We first made contact with her store after her " +
                    "husband died during the pregnancy of Azrael. Ubel wanted to reward the widow for her husband's sacrafice to " +
                    "C.U.M. and offered her the Sperm Bank so long as she continued to supply all Cum Bath rituals. " +
                    "Production has been adequate. A deal has been made that we leave her children alone. ";
                txt.h = "I need to gain her trust by showing that I'm a girl and ask what happened. "
                break;
            case "eva":
                txt.o = "Student";
                txt.p = "Milk Maid";
                txt.s = sc.n("eva") + " was an active Milk Maid after she turned 18, but has stopped coming in lately. " +
                    "While doing the ritual to convert from a Milk Maid to full member she was stubborn and refused to " +
                    "to serve the bishop, slapping him and calling him a pussy. She was told she wasn't submissive enough " +
                    "to serve C.U.M. and never return. ";
                txt.h = "I need to prove to her that I belong there. I should show her I can be a submissive girl. ";
                break;
            case "stormy":
                txt.o = "Tattoo Artist";
                txt.p = "Milk Maid";
                txt.s = sc.n("stormy") + " has been a loyal Milk Maid for many years. She first came into service when her brother " + 
                    "received his full membership into the order and invited her to the ceremony. She came back the next day to " +
                    "inquire about being a Milk Maid. Ubel himself allowed her to extract his cum for her first time and has been " +
                    "a favorite of his since. ";
                txt.h = "";
                break;
            case "chloe":
                txt.o = "Prostitute";
                txt.p = "Milk Maid";
                txt.s = sc.n("chloe") + " was recruited off the streets by " + sc.n("charlie") + " soon after her 18th birthday. " +
                    "When she does show up she is a master Milk Maid, able to extract cum from 10 men in a single hour. ";
                break;
            case "chad":
                txt.o = "Gym Owner";
                txt.p = "Brother of C.U.M.";
                txt.s = "Brother " + sc.n("chad") + " came to us after failing to get a baseball scholarship and ending " +
                    "up homeless on the streets. We took him in, broke him down and built him back up. With the help of " +
                    sc.n("govlady") + " we were able to get him a gym and free membership of all our Brothers and Sisters. ";
                break;
            case "charlie":
                txt.o = "Toys 'n Us Employee";
                txt.p = "Recruiter";
                txt.s = sc.n("charlie") + " was Brother " + sc.n("charlie") + " at one time. He was given the store Toy 'n " +
                    "Us to recruite future Milk Maids that needed extra money. He ended up losing all his money by buying up " +
                    "a tanker full of fuel during the gas crisis and then forgetting to close the value spilling it all. " +
                    "He had to sell the store to " + sc.n("tiffany") + " and " + sc.n("candy") + " without our approval to " +
                    "cover the cost of clean up. He continues to recruit Milk Maids at Toys 'n Us. "
                txt.h = "I guess sex is the only way to get information from him. Maybe I should walk in naked so he knows what I'm after and ask him " +
                    "about working as a Milk Maid. ";
                break;
            case "cop":
                txt.o = "Cop";
                txt.p = "On the payroll";
                txt.s = "He is paid a small bribe each week as well has given use of some of our members. Additionally we have blackmail " +
                    "pictures of him snorting coke off of a number of our Milk Miad's breasts, " +
                    "the Bishop Stan, " + sc.n("charlie") + " and " + sc.n("molly") + "'s cock, " +
                    sc.n("chloe") + "'s butthole, " + sc.n("keaton") + "'s taint, and " + sc.n("stormy") + "'s pussy. ";
                txt.h = "I could probably just tease him until he wants to fuck me then blackmail him into telling me the code. ";
                break;
            case "cop2":
                txt.o = "Cop";
                txt.p = "Brother of C.U.M.";
                txt.s = "He was working a missing persons case for Nell, our first Transformation Maiden who did not " +
                    "survive the deprevation trials. After a talk with Ubel it was decided to put him on the payroll since " +
                    "having a dead cop would draw too much suspicion. He's too squeeky clean. " +
                    "We haven't been able to find any blackmail on him to ensure he stays loyal. ";
                txt.h = "Maybe I could find some blackmail on him. ";
                break;
            case "govlady":
                txt.o = "City Government";
                txt.p = "No Affiliation";
                txt.s = "Through her all things in Carnalville happen. " + sc.n("govlady") + " pays the police bribes, " +
                    "keeps the mayor inline, and approves all permits. When asked if she wanted to join our congretgation " +
                    "she stated 'Religions are fake and silly. Money is the only real I know.' She may be expensive, but " +
                    "she has become essential to keeping the town in line. ";
                txt.h = "I wonder if I could just bribe her for information. ";
                break;
            case "g":
                txt.o = "Personal Trainer";
                txt.p = "Sister of C.U.M.";
                txt.s = sc.n("g") + " was demoted from Bishop to Sister after she tried to assult Ubel for control of " +
                    "C.U.M. Unfortunatly for her Ubel was too tough and almost beat her till she died. Ubel chose to let " +
                    "he live becuase she had too much spunk to die, but was demoted from Bishop to Sister until she learned " +
                    "how to obey. ";
                txt.h = "Maybe if I beat her in a fight. ";
                break;
            case "jones":
                txt.o = "CEO";
                txt.p = "Bishop";
                txt.s = "It is through " + sc.n("jones") + "'s financial contrubutions that C.U.M. is able to have a compound. " +
                    "He was the first person Ubel recruited for the coming of Azrael. Not much is known about him, except " +
                    "that once a year he takes a new Milk Maid as a slave to his home and they are never seen again. ";
                txt.h = "I could try to see if he'll let me be his slave and work from the inside. ";
                break;
            case "juniper":
                txt.o = "Clerk";
                txt.p = "Sister of C.U.M.";
                txt.s = sc.n("juniper") + " likes to switch between the duties of a Milk Maid and donating her seed for the " +
                    "cum bath. ";
                txt.h = "I could befrind her. See if she'll just tell me. ";
                break;
            case "keaton":
                txt.o = "Student";
                txt.p = "Slave";
                txt.s = "No one is sure of how " + sc.n("keaton") + " came into the service of C.U.M. He was just found one " +
                    "day in the hallway of the compound tied up with a note that said 'Use me how ever you want'. After many " +
                    "Sister and Brothers of the cult used him and set him free, he just started showing up a few times a month. " +
                    "Each time tied up with the same note. ";
                txt.h = "I could ask him who is putting him in the compound. I should tell her I'm a sissy slut too. ";
                break;
            case "molly":
                txt.o = "Waitress";
                txt.p = "Milk Maid";
                txt.s = "";
                txt.h = sc.checkevent("holly", -1) ? "I've got to find some way to get on her good side. " :
                    "Oh good! We're best buds! Maybe I'll just ask. ";
                break;
            case "river":
                txt.o = "Garbage Man";
                txt.p = "Brother of C.U.M.";
                txt.s = "A loyal follower, but is really dumb. Other than his great body and cock, there isn't much else " +
                    "to him. ";
                txt.h = "I know he likes to hang out at the strip club. Maybe I can catch him there. "
                break;
            case "spanky":
                txt.o = "Convenience Store Owner";
                txt.p = "Brother of C.U.M.";
                txt.s = "Really just shows up for the cum extractions. Most of the Milk Maids get weird vibes from him and " +
                    "try to avoid him. But every male must be milked so someone has to jack him off.";
                txt.h = "He does love talking and sex. I guess I could start with the sex to get him to talk. ";
                break;
            case "treyvon":
                txt.o = "Security";
                txt.p = "Brother of C.U.M.";
                txt.s = "C.U.M. uses " + sc.n("treyvon") + " to enfore their policies. I don't really know exactly what " +
                    "he does, but I do know it's violent. Best not to cross paths with him. ";
                txt.h = "He does seem to like me. Maybe I could work on him to get information. "
                break;
            case "rachel":
                txt.o = "Farm Owner";
                txt.p = "Milk Supplier";
                txt.s = "C.U.M. uses only the finest breast milk to feed their followers... More to come "
                break;
            case "jeffery":
                txt.o = "Naked Beaver owner";
                txt.p = "Brother of C.U.M.";
                txt.s = "Creepy guy. General member";
                txt.h = "I need to go there before 11AM and work a shift. I'll ask him after I'm done. --Have to steal panties from the 3. "
                break;
            case "dad": //"Jacqueline":
                g.internal.level = 3;
                txt.o = "Secretary";
                txt.p = "Second Transformation Maiden";
                txt.s = "The second person chosen one to bring about the coming of Azrael. His effiminate body was easily " +
                    "transformed in cum bath into the perfect feminine host. She was able to survive the " +
                    "deprevation trials were the spirit of Azrael was able to impregnate her. The embryo grew too rapidly " +
                    "for her body to handle and the fetus ripped her womb open where it died on the floor. " +
                    "The heavy blood loss caused Jacqueline to die soon after. Becuase of the sacrafice of Jacqueline, her wife " +
                    "was given the Sperm Bank to run and continue to supply the cult."
                txt.h = "Deceased";
                break;
            case "nell":
                g.internal.level = 3;
                txt.o = "Clerk";
                txt.p = "First Transformation Maiden";
                txt.s = "Many years ago Nell was the first Transformation Maiden of C.U.M. He was recuirted by Ubel himself " 
                    "before the church was started. Ubel long studied the Book of Azrael and thought Nell would " +
                    "make a great host. Nell was eager at the time, with no prospects in life, so he was more than willing " +
                    "to do whatever he asked. Ubel used Nell as a recruiting tool to increase their numbers. He was put on " +
                    "estrogen and testosterone blockers to make him a cute sissy bimbo. At rallies he would be paraded naked " +
                    "to the group telling them anyone that joined C.U.M. would get a free hour with Nell and do whatever " +
                    "they wanted to his tender little body. So brutal were the worshipers that often Nell would fart blood for several " +
                    "days after each event. Nell was able to transfor their body during the cum bath ritual, proving that Ubel " +
                    "was correct about Azrael. However during the deprevation trials her heart exploded in her chest killing her. " +
                    "She's burried in an unmarked grave on the compound with only Ubel knowing the location. "
                break;
            case "jeremy":
                g.internal.level = 3;
                txt.o = "Prostitute";
                txt.p = "Eighth Transformation Maiden";
                txt.s = "Jeremy was the eighth and most recent Transformation Maiden. " +
                    "After the failure of the seventh Transforamtion Maiden who died during the Cum Bath Ritual in front of the " +
                    "entire congrecation five years passed before Jeremy was chosen. To prepare Jeremy, he was held in a cell for a " +
                    "full year, whipped by Ubel himself once a week, and made to serve the congregation in a varity of demeaning tasks. " +
                    "Anytime Jeremy stepped out of line he was placed on the dildo in the hallway all night or placed in the fuck box. "
                    "After that year he was transformed in the cum bath ritual. " +
                    "The church doctor examined her to find that a womb did not form. It was decided a second ritual was to " +
                    "be held to see the attempt would complete the transformation and produce a womb. The second bath was a failure and " +
                    "Jeremy was sent to live out her new life as a Milk Maiden. "
                break;
            case "missy":
                g.internal.level = 3;
                txt.o = "Detective";
                txt.p = "N/A";
                txt.s = sc.n("missy") + " has been a thorn in C.U.M.'s side for a while. " +
                    "She was hired by Nell's mother after Nell had dissappeared. She was starting to get too close " +
                    "so we had to pay off " + sc.n("cop2") + " to stop the case and give " + sc.n("missy") + " trouble. " +
                    "He arrested her for tresspass on the compound and threatened her with jail time if she didn't " +
                    "leave C.U.M. alone. She stopped visiting the compound, but is still activly pursuing the church. " +
                    "Ubel tried a few differnt ways to get rid of her, all unsuccessful. Now that she's been captured " +
                    "Ubel is either going to torture her to death, or make an example for all to see. Either way it's going " +
                    "to be brutal. "
                break;
            case "p":
                g.internal.level = 3;
                txt.o = "Pink Room Mistress";
                txt.p = "N/A";
                txt.s = "C.U.M doesn't have a lot of information on her other than being " + sc.n("missy") + "'s right hand. " +
                    "They'll keep an eye on her with " + sc.n("missy") + " out of the picture in case she becomes a problem. " +
                    "for them. ";
                break;
            case "cecilia":
                g.internal.level = 3;
                txt.o = "Secretary";
                txt.p = "N/A";
                txt.s = "Works for " + sc.n("missy") + ". I don't know a lot except the cult calls her the communal cum " +
                    "sock, becuase everyone ejaculates in her. ";
                break;
            case "black":
                g.internal.level = 3;
                txt.o = "Excommunicated";
                txt.p = "Sadist";
                txt.s = sc.n("black") + " was a rising star in the church as the principal disciplinarian.  " +
                    "Any time a member of church started to go astray " + sc.n("black") + " would administer her " +
                    "own special flavor of corrective punishment leaving many permently scarred and traumatized. " +
                    "She kept the order in line and loved what she did. Ubel offered her a position as a Bishop within " +
                    "the church if should would take care of the " + sc.n("missy") + " problem once and for all. " +
                    "Someone tipped " + sc.n("missy") + " off and she was able to capture " + sc.n("black") + ". During " +
                    "her capture she was able to convert " + sc.n("black") + " to " + sc.n("missy") + "'s service. " +
                    "Due to her disloyalty in the face of adversity " + sc.n("black") + " has been Excommunicated from " +
                    "the church. "
                break;
            case "construction":
                txt.o = "Burly Construction Owner";
                txt.p = "Milk Supplier";
                txt.s = "Construction Company worked on compound.  "
                break;
        }
        
        nav.t({
            type: "img",
            name: "title",
            left: 300,
            top: 370,
            font: 50,
            hex: "#ffffff",
            text: "Occupation: " + txt.o
        }, 6);
        nav.t({
            type: "img",
            name: "title",
            left: 300,
            top: 430,
            font: 50,
            hex: "#ffffff",
            text: "Affiliation: " + txt.p
        }, 6);
        nav.t({
            type: "img",
            name: "title",
            left: 300,
            top: 500,
            font: 30,
            hex: "#ffffff",
            text: g.linebreak(txt.s, 100)
        }, 6);
        nav.button({
            "type": "img",
            "name": "char",
            "left": 1300,
            "top": 230,
            "width": 300,
            "height": 100,
            "image": "6_computer/unsolve.gif"
        }, 6);
        nav.button({
            "type": "btn",
            "name": "close",
            "left": 1652,
            "top": 829,
            "width": 150,
            "height": 150,
            "image": "6_computer/close.png"
        }, 6);
    }
};

room6.chatcatch = function (callback) {
    switch (callback) {
        case "drawmain":
            nav.killall();
            nav.button({
                "type": "btn",
                "name": "zzznotes",
                "left": 300 + (0 * 220),
                "top": 150 + (0 * 200),
                "width": 140,
                "height": 140,
                "image": "6_computer/notes.png"
            }, 6);
            nav.button({
                "type": "btn",
                "name": "zzzactive",
                "left": 300 + (1 * 220),
                "top": 150 + (0 * 200),
                "width": 140,
                "height": 140,
                "image": "6_computer/active.png"
            }, 6);
            nav.button({
                "type": "btn",
                "name": "zzzinactive",
                "left": 300 + (2 * 220),
                "top": 150 + (0 * 200),
                "width": 140,
                "height": 140,
                "image": "6_computer/inactive.png"
            }, 6);
            nav.button({
                "type": "btn",
                "name": "close",
                "left": 1652,
                "top": 829,
                "width": 150,
                "height": 150,
                "image": "6_computer/close.png"
            }, 6);
            break;
        case "drawscreen":
            g.internal.level = 1;
            nav.killall();
            var thisx;
            var row, col;
            row = col = 0;
            nav.button({
                "type": "btn",
                "name": "close",
                "left": 1652,
                "top": 829,
                "width": 150,
                "height": 150,
                "image": "6_computer/close.png"
            }, 6);

            for (i = 0; i < g.internal.active.length; i++) {
                thisx = sc.get(g.internal.active[i].n);
                nav.button({
                    "type": "btn",
                    "name": thisx.name,
                    "left": 300 + (col * 220),
                    "top": 150 + (row * 200),
                    "width": 140,
                    "height": 140,
                    "image": "../speaker/" + thisx.image
                }, 6);
                col++;
                if (col > 6) {
                    col = 0;
                    row++;
                }
            }
            break;
        case "drawinactive":
            g.internal.level = 1;
            nav.killall();
            var xthisx;
            var xrow, xcol;
            xrow = xcol = 0;
            nav.button({
                "type": "btn",
                "name": "close",
                "left": 1652,
                "top": 829,
                "width": 150,
                "height": 150,
                "image": "6_computer/close.png"
            }, 6);

            for (i = 0; i < g.internal.inactive.length; i++) {
                if (g.internal.inactive[i].x) {
                    xthisx = sc.get(g.internal.inactive[i].n);
                    xthisx.image = "../speaker/" + xthisx.image;
                }
                else {
                    xthisx = { name: g.internal.inactive[i].n, image: g.internal.inactive[i].img };
                }
                if (xthisx === null) {
                    console.log(g.internal.inactive[i].n);
                }
                else {
                    nav.button({
                        "type": "btn",
                        "name": xthisx.name,
                        "left": 300 + (xcol * 220),
                        "top": 150 + (xrow * 200),
                        "width": 140,
                        "height": 140,
                        "image": xthisx.image
                    }, 6);
                    xcol++;
                    if (xcol > 6) {
                        xcol = 0;
                        xrow++;
                    }
                }
            }
            break;
        default:
            break;
    }
};

room6.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "me",
            text: "",
            button: [
                { chatID: 1, text: "", callback: "" }
            ]
        }
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};