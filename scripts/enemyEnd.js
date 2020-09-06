var enemyEnd = {};

enemyEnd.end = function (eArray) {
	switch (eArray.name) {
		case "g":
			return enemyEnd.g(eArray);
		case "futaRed":
			return enemyEnd.futaRed(eArray);
		case "futaYellow":
			return enemyEnd.futaYellow(eArray);
		case "clownQueen":
			return enemyEnd.clownQueen(eArray);
	}
	return { eventStep: 0, type: "c", chat: "Invalid Entry", r: "INVALID", p: null };
};

enemyEnd.g = function (eArray) {
	var step = eArray.eventStep - 1;
	if (eArray.eventType === "submitAss") {

	}
	else if (eArray.eventType === "submitBJ") {

	}
	else {
		console.log("enemyEnd invalid eventType: " + eArray.eventType);
	}
	return step;
};

enemyEnd.futaRed = function (eArray) {
	var retVar = null;
	if (eArray.eventType === "submitAss") {
		if (eArray.eventStep === 9999) {
			nav.killbutton("char");
			zcl.assup(450, 350, 1, "");
			nav.button({
				"type": "img",
				"name": "char",
				"left": 1283,
				"top": 0,
				"width": 637,
				"height": 1037,
				"image": "227_fight/r_assup4.png"
			}, 9999);
			retVar = { eventStep: 3, type: "c", chat: "You know I like to use my feet. ", r: "hmmmm", p: null };
		}
		else if (eArray.eventStep === 3) {
			nav.killbutton("char");
			nav.button({
				"type": "img",
				"name": "char",
				"left": 1262,
				"top": 0,
				"width": 658,
				"height": 1023,
				"image": "227_fight/r_assup3.png"
			}, 9999);
			retVar = { eventStep: 2, type: "c", chat: "Can you feel the pressure? ", r: "uh huhh", p: null };
		}
		else if (eArray.eventStep === 2) {
			nav.killbutton("char");
			nav.button({
				"type": "img",
				"name": "char",
				"left": 1202,
				"top": 0,
				"width": 718,
				"height": 994,
				"image": "227_fight/r_assup2.png"
			}, 9999);
			retVar = { eventStep: 1, type: "c", chat: "Oh fuck I just sucked my foot right in.", r: "GRUNT", p: null };
		}
		else if (eArray.eventStep === 1) {
			nav.killbutton("char");
			nav.button({
				"type": "img",
				"name": "char",
				"left": 0,
				"top": 0,
				"width": 704,
				"height": 1080,
				"image": "227_fight/r_assup1.png"
			}, 9999);
			retVar = { eventStep: 0, type: "c", chat: "Now smell it you filthy slut!", r: "Snifff", p: null };
		}
	}
	else if (eArray.eventType === "submitBJ") {
		if (eArray.eventStep === 9999) {
			zcl.kneel(0, 200, 1.2, "open");
			nav.button({
				"type": "img",
				"name": "char",
				"left": 0,
				"top": 0,
				"width": 980,
				"height": 1080,
				"image": "227_fight/r_bj3.png"
			}, 9999);
			retVar = { eventStep: 2, type: "c", chat: "I bet you want me to stuff my giant cock down your throat...", r: "Yes please", p: null };
        }
		else if (eArray.eventStep === 2) {
			nav.killbutton("char");
			nav.button({
				"type": "img",
				"name": "char",
				"left": 0,
				"top": 0,
				"width": 1099,
				"height": 1080,
				"image": "227_fight/r_bj2.png"
			}, 9999);
			retVar = { eventStep: 1, type: "c", chat: "But I only cum with my asshole! Lick it slut! Eat my ass", r: "Lick Lick Slurpppp", p: null };
		}
		else if (eArray.eventStep === 1) {
			nav.killbutton("char");
			nav.button({
				"type": "img",
				"name": "char",
				"left": 0,
				"top": 0,
				"width": 1099,
				"height": 1080,
				"image": "227_fight/r_bj1.png"
			}, 9999);
			retVar = { eventStep: 0, type: "c", chat: "Ohhh fuck yes!", r: "MmmmmMmmmmm", p: null };
		}
	}
	else if (eArray.eventType === "win") {
		if (eArray.eventStep === 9999) {
			nav.button({
				"type": "img",
				"name": "char",
				"left": 0,
				"top": 0,
				"width": 1358,
				"height": 1080,
				"image": "227_fight/r_win3.png"
			}, 9999);
			retVar = { eventStep: 2, type: "c", chat: "Please be gentle mister, I haven't had a lot of dicks back there.", r: "No slut, I'm going to make you feel this.", p: null };
		}
		else if (eArray.eventStep === 2) {
			nav.killbutton("char");
			nav.button({
				"type": "img",
				"name": "char",
				"left": 0,
				"top": 0,
				"width": 1700,
				"height": 1080,
				"image": "227_fight/r_win2.gif"
			}, 9999);
			retVar = { eventStep: 1, type: "c", chat: "Ow ow ow ow ow ow ow Please cum, please cum ow ow", r: "Here it comes", p: null };
		}
		else if (eArray.eventStep === 1) {
			nav.killbutton("char");
			nav.button({
				"type": "img",
				"name": "char",
				"left": 0,
				"top": 0,
				"width": 1358,
				"height": 1080,
				"image": "227_fight/r_win1.png"
			}, 9999);
			retVar = { eventStep: 0, type: "c", chat: "Thank god that's over. I won't be able to sit down for a week!", r: "Slut", p: null };
		}
    }
	else {
		console.log("enemyEnd invalid eventType: " + eArray.eventType);
	}
	return retVar;
};

enemyEnd.futaYellow = function (eArray) {
	var retVar = null;
	if (eArray.eventType === "submitAss") {
		if (eArray.eventStep === 9999) {
			nav.killbutton("char");
			zcl.assup(450, 350, 1, "");
			nav.button({
				"type": "img",
				"name": "char",
				"left": 1128,
				"top": 0,
				"width": 707,
				"height": 1080,
				"image": "227_fight/y_assup3.png"
			}, 9999);
			retVar = { eventStep: 2, type: "c", chat: "I love it when a sissy bitch know's their true purpose.", r: "...", p: null };
		}
		else if (eArray.eventStep === 2) {
			nav.killbutton("char");
			nav.button({
				"type": "img",
				"name": "char",
				"left": 556,
				"top": 0,
				"width": 1364,
				"height": 967,
				"image": "227_fight/y_assup2.gif"
			}, 9999);
			retVar = { eventStep: 1, type: "c", chat: "Take my COCK SLUT!", r: "GRUNT", p: 2000 };
		}
		else if (eArray.eventStep === 1) {
			nav.killbutton("char");
			nav.button({
				"type": "img",
				"name": "char",
				"left": 556,
				"top": 40,
				"width": 1364,
				"height": 894,
				"image": "227_fight/y_assup1.png"
			}, 9999);
			retVar = { eventStep: 0, type: "c", chat: "Oh yes my little cum pig!", r: "OOooooooooo", p: null };
		}
	}
	else if (eArray.eventType === "submitBJ") {
		if (eArray.eventStep === 9999) {
			zcl.kneel(100, 700, .55, "open");
			nav.killbutton("char");
			nav.button({
				"type": "img",
				"name": "char",
				"left": 85,
				"top": 0,
				"width": 774,
				"height": 1080,
				"image": "227_fight/y_bj3.png"
			}, 9999);
			retVar = { eventStep: 2, type: "c", chat: "Look at you sitting there with your mouth open begging for my cock. I'm going to fill your slutty belly with my cum!", r: "Please", p: null };
		}
		else if (eArray.eventStep === 2) {
			nav.killbutton("char");
			nav.button({
				"type": "img",
				"name": "char",
				"left": 546,
				"top": 0,
				"width": 700,
				"height": 1080,
				"image": "227_fight/y_bj2.gif"
			}, 9999);
			retVar = { eventStep: 1, type: "c", chat: "Your throat is sooo tight!", r: "Ugh Ugh Ugh *GAG* Ugh Ugh", p: 2000 };
		}
		else if (eArray.eventStep === 1) {
			nav.killbutton("char");
			nav.button({
				"type": "img",
				"name": "char",
				"left": 677,
				"top": 0,
				"width": 564,
				"height": 1080,
				"image": "227_fight/y_bj1.png"
			}, 9999);
			retVar = { eventStep: 0, type: "c", chat: "Ohhhh yeah! Take my cum you slut!", r: "cough... gag... gulp!", p: null };
		}
	}
	else if (eArray.eventType === "win") {
		if (eArray.eventStep === 9999) {
			nav.killbutton("char");
			nav.button({
				"type": "img",
				"name": "char",
				"left": 0,
				"top": 0,
				"width": 1920,
				"height": 1080,
				"image": "227_fight/y_win4.png"
			}, 9999);
			retVar = { eventStep: 3, type: "c", chat: "You have bested me! Now do with me as you want.", r: "Yes!", p: null };
		}
		else if (eArray.eventStep === 3) {
			nav.killbutton("char");
			nav.button({
				"type": "img",
				"name": "char",
				"left": 0,
				"top": 0,
				"width": 1920,
				"height": 1080,
				"image": "227_fight/y_win3.png"
			}, 9999);
			retVar = { eventStep: 2, type: "c", chat: "Don't tease me, please put it in", r: "Here it comes slut", p: null };
		}
		else if (eArray.eventStep === 2) {
			nav.killbutton("char");
			nav.button({
				"type": "img",
				"name": "char",
				"left": 0,
				"top": 0,
				"width": 1920,
				"height": 1080,
				"image": "227_fight/y_win2.png"
			}, 9999);
			retVar = { eventStep: 1, type: "c", chat: "Oh fuck... I feel the air building in my guts", r: "huh?", p: null };
		}
		else if (eArray.eventStep === 1) {
			nav.killbutton("char");
			nav.button({
				"type": "img",
				"name": "char",
				"left": 0,
				"top": 0,
				"width": 1920,
				"height": 1080,
				"image": "227_fight/y_win1.png"
			}, 9999);
			retVar = { eventStep: 0, type: "c", chat: "I can't contain it!! PPPRRRTTTTT *fart*", r: "....", p: null };
		}
	}
	else {
		console.log("enemyEnd invalid eventType: " + eArray.eventType);
	}
	console.log(retVar);

	return retVar;
};

enemyEnd.clownQueen = function (eArray) {
	if (eArray.eventType === "submitAss") {
		if (eArray.eventStep === 9999) {
			nav.killbutton("char");
			nav.button({
				"type": "img",
				"name": "char",
				"left": 598,
				"top": 0,
				"width": 859,
				"height": 1080,
				"image": "227_fight/c_ass3.png"
			}, 9999);
			zcl.assup(650, 550, .7, "");
			retVar = { eventStep: 2, type: "c", chat: "*HONK* pretty butt!! Make good power punch holder!", r: "huh?", p: null };
		}
		else if (eArray.eventStep === 2) {
			nav.killbutton("char");
			zcl.kill();
			nav.button({
				"type": "img",
				"name": "char",
				"left": 0,
				"top": 0,
				"width": 1842,
				"height": 1080,
				"image": "227_fight/c_ass2.png"
			}, 9999);
			retVar = { eventStep: 1, type: "c", chat: "Stick so long", r: "hhhuuunnnnnggggg That's not what I wanted", p: null };
		}
		else if (eArray.eventStep === 1) {
			nav.killbutton("char");
			nav.button({
				"type": "img",
				"name": "char",
				"left": 0,
				"top": 0,
				"width": 1878,
				"height": 1080,
				"image": "227_fight/c_ass1.png"
			}, 9999);
			retVar = { eventStep: 0, type: "c", chat: "Hahaha you're my pretty stick holder!", r: "Oh fuck I think the top of the stick is in my throat", p: null };
		}
	}
	if (eArray.eventType === "submitBJ") {
		if (eArray.eventStep === 9999) {
			nav.killbutton("char");
			nav.button({
				"type": "img",
				"name": "char",
				"left": 459,
				"top": 0,
				"width": 472,
				"height": 1080,
				"image": "227_fight/c_bj3.png"
			}, 9999);
			zcl.kneel(300, 300, .5, "open");
			retVar = { eventStep: 2, type: "c", chat: "HEHEHE you want to eat my pussy? So silly", r: "um hmmmm", p: null };
		}
		else if (eArray.eventStep === 2) {
			nav.button({
				"type": "img",
				"name": "char_bjc",
				"left": 1046,
				"top": 44,
				"width": 740,
				"height": 740,
				"image": "227_fight/c_bj2.gif"
			}, 9999);
			retVar = { eventStep: 1, type: "c", chat: "Oh yes! You're a good pussy eater", r: "mmmmMMmmmmMMMmmmm", p: null };
		}
		else if (eArray.eventStep === 1) {
			nav.killbutton("char_bjc");
			nav.button({
				"type": "img",
				"name": "char",
				"left": 1046,
				"top": 44,
				"width": 740,
				"height": 740,
				"image": "227_fight/c_bj1.png"
			}, 9999);
			retVar = { eventStep: 0, type: "c", chat: "HONK HONK HONK!!", r: "Lick lick slurrrpppppp", p: null };
		}
	}
	else if (eArray.eventType === "win") {
		if (eArray.eventStep === 9999) {
			nav.killbutton("char");
			nav.button({
				"type": "img",
				"name": "char",
				"left": 516,
				"top": 0,
				"width": 990,
				"height": 1063,
				"image": "227_fight/c_win3.png"
			}, 9999);
			retVar = { eventStep: 2, type: "cp", chat: "HEHEHE Are you going HONK me?", r: "Oh yeah!", p: null };
		}
		else if (eArray.eventStep === 2) {
			nav.killbutton("char");
			nav.button({
				"type": "img",
				"name": "char_bjc",
				"left": 516,
				"top": 0,
				"width": 990,
				"height": 1080,
				"image": "227_fight/c_win2.gif"
			}, 9999);
			retVar = { eventStep: 1, type: "cp", chat: "Oh Uh Ugh HONK HONK Ugh", r: "Ready to be filled?", p: null };
		}
		else if (eArray.eventStep === 1) {
			nav.killbutton("char_bjc");
			nav.button({
				"type": "img",
				"name": "char",
				"left": 516,
				"top": 0,
				"width": 990,
				"height": 1063,
				"image": "227_fight/c_win1.png"
			}, 9999);
			retVar = { eventStep: 0, type: "cp", chat: "HONK... I have a cum pool in my pussy! HAHAhahaha", r: "...", p: null };
		}
	}
	else {
		console.log("enemyEnd invalid eventType: " + eArray.eventType);
	}
	return retVar;
};