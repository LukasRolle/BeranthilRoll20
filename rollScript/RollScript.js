// Resources

// items are advantages, successes and crits in that order in the roll order
// negative roll results are -
var rollResultsPositive = [0,0,0];
var rollResultsNegative = [0,0,0];
var rollStringsPositive = [];
var rollStringsNegative = [];

function doActionNothing(whoRolled, dice) {
	var image = "<img src='http://i.imgur.com/8mDF0ZG.png' title='Fuck you'>";
	if (dice[0] == "p") {
		rollStringsPositive.push(image);
	} else {
		rollStringsNegative.push(image);
	}
}

/*
 * Executes the "vorteil" Action.
 */
function doActionAdvantage(whoRolled) {
    rollStringsPositive.push("<img src='https://i.imgur.com/7Y93nwa.png' title='Vorteil'>");
		rollResultsPositive[0]++;
}

/*
 * Executes the "erfolg" Action.
 */
function doActionSuccess(whoRolled) {
    rollStringsPositive.push("<img src='https://i.imgur.com/znO45cy.png' title='Erfolg'>");
		rollResultsPositive[1]++;
}

/*
 * Executes the "ErfolgVorteil" Action.
 */
function doActionSuccessAdvantage(whoRolled) {
    rollStringsPositive.push("<img src='https://i.imgur.com/K1uIGHU.png' title='Erfolg und Vorteil'>");
		rollResultsPositive[0]++;
		rollResultsPositive[1]++;
}

/*
 * Executes the "vorteil2" Action.
 */
function doActionAdvantageTypeTwo(whoRolled) {
    rollStringsPositive.push("<img src='https://i.imgur.com/dngWmyq.png' title='Doppel Vorteil'>");
		rollResultsPositive[0] += 2;
}

/*
 * Executes the "erfolg2" Action.
 */
function doActionSuccessTypeTwo(whoRolled) {
    rollStringsPositive.push("<img src='https://i.imgur.com/SJewYE1.png' title='Doppel Erfolg'>");
		rollResultsPositive[1] += 2;
}

/*
 * Executes the "drache" Action.
 */
function doActionDragon(whoRolled) {
    rollStringsPositive.push("<img src='https://i.imgur.com/3EJxxMH.jpg' title='CRITICAL'>");
		rollResultsPositive[2]++;
}

/*
 * Executes the "nachteil" Action.
 */
function doActionDisadvantage(whoRolled) {
    rollStringsNegative.push("<img src='https://i.imgur.com/7OQBCPz.png?1' title='Nachteil'>");
		rollResultsNegative[0]++;
}

/*
 * Executes the "nachteil2" Action.
 */
function doActionDisadvantageTypeTwo(whoRolled) {
    rollStringsNegative.push("<img src='https://i.imgur.com/D4ykHZ4.png?1' title='Doppel Nachteil'>");
		rollResultsNegative[0] += 2;
}

/*
 * Executes the "fehlschlag" Action.
 */
function doActionMiss(whoRolled) {
    rollStringsNegative.push("<img src='https://i.imgur.com/xFczeHX.png?1' title='Fehlschlag'>");
		rollResultsNegative[1]++;
}

/*
 * Executes the "fehlschlag2" Action.
 */
function doActionMissTypeTwo(whoRolled) {
    rollStringsNegative.push("<img src='https://i.imgur.com/bNbz2iv.png?1' title='Doppel Fehlschlag'>");
		rollResultsNegative[1] += 2;
}

/*
 * Executes the "nachteilFehlschlag" Action.
 */
function doActionDisadvantageMiss(whoRolled) {
    rollStringsNegative.push("<img src='https://i.imgur.com/bFQHTY7.png?1' title='Fehlschlag und Nachteil'>");
		rollResultsNegative[0]++;
		rollResultsNegative[1]++;
}

/*
 * Executes the "unheil" Action.
 */
function doActionUnholy(whoRolled) {
    rollStringsNegative.push("<img src='https://i.imgur.com/D9IfpDV.png?1' title='UNHEIL'>");
		rollResultsNegative[2]++;
}

/*
 * Rolls the positive 12 sided dice.
 * @param whoRolled The player who rolled the dice.
 */
function rollPositiveDice12(whoRolled) {

	var dice_sides = 12;
	var dice = ("p" + dice_sides);
	var roll = randomInteger(dice_sides);

	switch(roll) {
		case 1: doActionNothing(whoRolled, dice); break;
		case 2: doActionAdvantage(whoRolled, dice); break;
		case 3: doActionSuccessAdvantage(whoRolled, dice); break;
		case 4: doActionAdvantageTypeTwo(whoRolled, dice); break;
		case 5: doActionSuccess(whoRolled, dice); break;
		case 6: doActionSuccess(whoRolled, dice); break;
		case 7: doActionSuccess(whoRolled, dice); break;
		case 8: doActionSuccessTypeTwo(whoRolled, dice); break;
		case 9: doActionSuccessTypeTwo(whoRolled, dice); break;
		case 10: doActionSuccessTypeTwo(whoRolled, dice); break;
		case 11: doActionSuccessTypeTwo(whoRolled, dice); break;
		case 12: doActionDragon(whoRolled, dice); break;
	}

}

/*
 * Rolls the positive 8 sided dice.
 * @param whoRolled The player who rolled the dice.
 */
function rollPositiveDice8(whoRolled) {
	var dice_sides = 8;
	var dice = ("p" + dice_sides);
	var roll = Math.floor(Math.random() * dice_sides +1 );

	switch(roll) {
		case 1: doActionNothing(whoRolled, dice); break;
		case 2: doActionAdvantage(whoRolled, dice); break;
		case 3: doActionAdvantage(whoRolled, dice); break;
		case 4: doActionSuccess(whoRolled, dice); break;
		case 5: doActionSuccess(whoRolled, dice); break;
		case 6: doActionSuccess(whoRolled, dice); break;
		case 7: doActionSuccessTypeTwo(whoRolled, dice); break;
		case 8: doActionSuccessTypeTwo(whoRolled, dice); break;
	}

}

/*
 * Rolls the positive 6 sided dice.
 * @param whoRolled The player who rolled the dice.
 */
function rollPositiveDice6(whoRolled) {
	var dice_sides = 6;
	var dice = ("p" + dice_sides);
	var roll = Math.floor(Math.random() * dice_sides +1 );

	switch(roll) {
		case 1: doActionNothing(whoRolled, dice); break;
		case 2: doActionNothing(whoRolled, dice); break;
		case 3: doActionAdvantage(whoRolled, dice); break;
		case 4: doActionSuccess(whoRolled, dice); break;
		case 5: doActionSuccess(whoRolled, dice); break;
		case 6: doActionSuccessTypeTwo(whoRolled, dice); break;
	}
}


/*
 * Rolls the negative 12 sided dice.
 * @param whoRolled The player who rolled the dice.
 */
function rollNegativeeDice12(whoRolled) {
	var dice_sides = 12;
	var dice = ("n" + dice_sides);
	var roll = randomInteger(dice_sides);

	switch(roll) {
		case 1: doActionNothing(whoRolled, dice); break;
		case 2: doActionDisadvantage(whoRolled, dice); break;
		case 3: doActionDisadvantageMiss(whoRolled, dice); break;
		case 4: doActionDisadvantageTypeTwo(whoRolled, dice); break;
		case 5: doActionMiss(whoRolled, dice); break;
		case 6: doActionMiss(whoRolled, dice); break;
		case 7: doActionMiss(whoRolled, dice); break;
		case 8: doActionMissTypeTwo(whoRolled, dice); break;
		case 9: doActionMissTypeTwo(whoRolled, dice); break;
		case 10: doActionMissTypeTwo(whoRolled, dice);  break;
		case 11: doActionMissTypeTwo(whoRolled, dice); break;
		case 12: doActionUnholy(whoRolled, dice); break;
	}
}

/*
 * Rolls the negative 8 sided dice.
 * @param whoRolled The player who rolled the dice.
 */
function rollNegativeeDice8(whoRolled) {
	var dice_sides = 8;
	var dice = ("n" + dice_sides);
	var roll = randomInteger(dice_sides);

	switch(roll) {
		case 1: doActionNothing(whoRolled, dice); break;
		case 2: doActionDisadvantage(whoRolled, dice); break;
		case 3: doActionDisadvantage(whoRolled, dice); break;
		case 4: doActionMiss(whoRolled, dice); break;
		case 5: doActionMiss(whoRolled, dice); break;
		case 6: doActionMiss(whoRolled, dice); break;
		case 7: doActionMissTypeTwo(whoRolled, dice); break;
		case 8: doActionMissTypeTwo(whoRolled, dice); break;
	}
}

/*
 * Rolls the negative 6 sided dice.
 * @param whoRolled The player who rolled the dice.
 */
function rollNegativeeDice6(whoRolled) {
	var dice_sides = 6;
	var dice = ("n" + dice_sides);
	var roll = randomInteger(dice_sides);
	switch(roll) {
		case 1: doActionNothing(whoRolled, dice); break;
		case 2: doActionNothing(whoRolled, dice); break;
		case 3: doActionDisadvantage(whoRolled, dice); break;
		case 4: doActionMiss(whoRolled, dice); break;
		case 5: doActionMiss(whoRolled, dice); break;
		case 6: doActionMissTypeTwo(whoRolled, dice); break;
	}
}

/*
 * Rolls a dice.
 * @param dice The dice you want to roll.
 * @param whoRolled The player who rolled the dice.
 */
function rollDice(dice, whoRolled) {
		var characterPosition = 0;
		if (dice.indexOf("p") != -1 || dice.indexOf("n") != -1) {
			characterPosition = dice.indexOf("p");
			if (characterPosition === -1) {
				characterPosition = dice.indexOf("n");
			}
		} else {
			log("unknown type of dice");
			return;
		}

		var diceType = dice.substring(characterPosition);
		var diceCount = dice.substring(0,characterPosition);
		if (!diceCount) {
			diceCount = 1;
		}
		log(diceType);
		log(diceCount);

    for (var i = 0; i < diceCount; i++) {
        switch(diceType) {
            case "p12": rollPositiveDice12(whoRolled);  break;
            case "p8":  rollPositiveDice8(whoRolled);   break;
            case "p6":  rollPositiveDice6(whoRolled);   break;
            case "n12": rollNegativeeDice12(whoRolled); break;
            case "n8":  rollNegativeeDice8(whoRolled); break;
            case "n6":  rollNegativeeDice6(whoRolled); break;
        }
    }
}

/*
 *
 *
 */
function calculateRollResult() {
	var rollResults = [0,0,0];
	rollResults[0] = rollResultsPositive[0] - rollResultsNegative[0];
	var successes = rollResultsPositive[1] - rollResultsNegative[1];
	var criticals = rollResultsPositive[2] - rollResultsNegative[2];
	if (successes >> 31 != criticals >> 31) {
		if (successes != 0 && criticals != 0) {
    	if (Math.abs(successes) > Math.abs(criticals*3)) {
    		successes = successes + criticals*3;
				criticals = 0
    	} else {
				successes = 0
    	}
		}
		rollResults[0] = rollResultsPositive[0] - rollResultsNegative[0];
	}
	if (criticals > 0){
		rollResults[0] = rollResultsPositive[0];
		successes = rollResultsPositive[1];
		criticals = rollResultsPositive[2];
	} else if (criticals < 0){
		rollResults[0] = -rollResultsNegative[0];
		successes = -rollResultsNegative[1];
		criticals = -rollResultsNegative[2];
	}
	rollResults[1] = successes;
	rollResults[2] = criticals;
	return rollResults;
}

/*
 * Announces the results of the complete Roll of the rolling player
 * @param whoRolled The player who rolled the dice.
 */
function announceRollResults(whoRolled, rollResults) {
	var rollResultString = [];
	rollResultString.push("Ergebnis: ");
	if (rollResults[0] != 0) {
		rollResultString.push(Math.abs(rollResults[0]));
		if(rollResults[0] >= 0) {
			rollResultString.push("<img src='https://i.imgur.com/7Y93nwa.png' title='Vorteil'>");
		} else if(rollResults[0] <= 0) {
			rollResultString.push("<img src='https://i.imgur.com/7OQBCPz.png?1' title='Nachteil'>")
		}
	}
	if (rollResults[1] != 0) {
		rollResultString.push(Math.abs(rollResults[1]));
		if(rollResults[1] >= 0) {
			rollResultString.push("<img src='https://i.imgur.com/znO45cy.png' title='Erfolg'>");
		} else if(rollResults[1] <= 0) {
			rollResultString.push("<img src='https://i.imgur.com/xFczeHX.png?1' title='Fehlschlag'>");
		}
	}
	if (rollResults[2] != 0) {
		rollResultString.push(Math.abs(rollResults[2]));
		if(rollResults[2] >= 0) {
			rollResultString.push("<img src='https://i.imgur.com/3EJxxMH.jpg' title='CRITICAL'>")
		} else if(rollResults[2] <= 0) {
			rollResultString.push("<img src='https://i.imgur.com/D9IfpDV.png?1' title='UNHEIL'>")
		}
	}
	sendChat(whoRolled, rollStringsPositive.join(" "));
	sendChat(whoRolled, rollStringsNegative.join(" "));
	rollStringsPositive = [];
	rollStringsNegative = [];
	if(rollResultString.length == 1) {
		rollResultString.push("Neutral")
	}
	sendChat(whoRolled, rollResultString.join(" "));
}

/*
 * Tests all dices of this script.
 */
function testAllDice(player) {
	// Test of all functions returned via console.
	for (var i = 0; i < 12; i++) {
		executeChatCommand("!roll p12", player);
		executeChatCommand("!roll 2p8", player);
		executeChatCommand("!roll 3p6", player);
		executeChatCommand("!roll 4n12", player);
		executeChatCommand("!roll 5n8", player);
		executeChatCommand("!roll 6n6", player);
	}
}
on("chat:message", function(msg) {
    // returns the chat window command entered, all in lowercase.

    var chatCommand = msg.content;
    chatCommand = chatCommand.toLowerCase(); //make all characters lowercase
    if (msg.type != 'api') {
        return;
    }
    return executeChatCommand(chatCommand, msg.who);
});

function executeChatCommand(command, player) {

	if(command === null) {
		log("command was emtpy or null.");
		return;
	}

	command = command.toLowerCase();

	if(command.indexOf("!roll") !== -1 && command.indexOf("!hq test") !== -1) {
		log("command not known.");
		return;
	}

	//execute !roll command
	if (command.indexOf("!roll") == 0) {
		sendChat(player,("/direct Rolled " + command.substring(6)));
		//Get the dice from the command.
		command = command.split(" ");
    for (var i = 1; i < command.length; i++) {
  		rollDice(command[i], player);
    }
		var rollResult = calculateRollResult();
		announceRollResults(player, rollResult);
		rollResultsPositive = [0,0,0];
		rollResultsNegative = [0,0,0];
	}
	else if (command.indexOf("!hq test") !== -1) {
		testAllDice(player);
	}

}
