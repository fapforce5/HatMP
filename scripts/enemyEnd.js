var enemyEnd = {};

enemyEnd.end = function (eArray) {
	var step = eArray.eventStep - 1;
	if (eArray.eventType === "ass") {

	}
	else if (eArray.eventType === "bj") {

	}
	else {
		console.log("enemyEnd invalid eventType: " + eArray.eventType);
	}
	return step;
};

enemyEnd.g = function (eArray) {
	var step = eArray.eventStep - 1;
	if (eArray.eventType === "ass") {

	}
	else if (eArray.eventType === "bj") {

	}
	else {
		console.log("enemyEnd invalid eventType: " + eArray.eventType);
	}
	return step;
};

enemyEnd.futaRed = function (eArray) {
	var retVar = null;
	if (eArray.eventType === "ass") {
		if (eArray.eventStep === 4) {
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
			retVar = { step: 3, type: "cp", chat: "You know I like to use my feet. ", r: "hmmmm", p: null };
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
			retVar = { step: 2, type: "c", chat: "Can you feel the pressure? ", r: "uh huhh", p: null };
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
			retVar = { step: 1, type: "c", chat: "Oh fuck I just sucked my foot right in.", r: "GRUNT", p: null };
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
			retVar = { step: 0, type: "c", chat: "Now smell it you filthy slut!", r: "Snifff", p: null };
		}
	}
	else if (eArray.eventType === "bj") {
		zcl.kneel(0, 200, 1.2, "open");
	}
	else {
		console.log("enemyEnd invalid eventType: " + eArray.eventType);
	}
	return retVar;
};

enemyEnd.futaYellow = function (eArray) {
	var retVar = null;
	if (eArray.eventType === "ass") {
		
		if (eArray.eventType === "ass") {
			if (eArray.eventStep === 3) {
				nav.killbutton("char");
				nav.button({
					"type": "img",
					"name": "char",
					"left": 1128,
					"top": 0,
					"width": 707,
					"height": 1080,
					"image": "227_fight/y_assup3.png"
				}, 9999);
				retVar = { step: 2, type: "c", chat: "I love it when a sissy bitch know's their true purpose.", r: "...", p: null };
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
				retVar = { step: 1, type: "c", chat: "Take my COCK SLUT!", r: "GRUNT", p: 2000 };
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
				retVar = { step: 0, type: "c", chat: "Oh yes my little cum pig!", r: "OOooooooooo", p: null };
			}
		}
	}
	else if (eArray.eventType === "bj") {
		if (eArray.eventStep === 3) {
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
			retVar = { step: 2, type: "c", chat: "Look at you sitting there with your mouth open begging for my cock. I'm going to fill your slutty belly with my cum!", r: "Please", p: null };
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
			retVar = { step: 1, type: "c", chat: "Your throat is sooo tight!", r: "Ugh Ugh Ugh *GAG* Ugh Ugh", p: 2000 };
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
			retVar = { step: 0, type: "c", chat: "Ohhhh yeah! Take my cum you slut!", r: "cough... gag... gulp!", p: null };
		}
		
	}
	else {
		console.log("enemyEnd invalid eventType: " + eArray.eventType);
	}
	return retVar;
};

enemyEnd.clownQueen = function (eArray) {
	var step = eArray.eventStep - 1;
	if (eArray.eventType === "ass") {

	}
	else if (eArray.eventType === "bj") {

	}
	else {
		console.log("enemyEnd invalid eventType: " + eArray.eventType);
	}
	return step;
};