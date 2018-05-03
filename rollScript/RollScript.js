function doActionNothing(whoRolled) {
	sendChat(whoRolled,"/direct <img src='http://i.imgur.com/8mDF0ZG.png' title='Fuck you'>");
}

/*
 * Executes the "vorteil" Action.
 */
function doActionAdvantage(whoRolled) {
    sendChat(whoRolled,"/direct <img src='https://i.imgur.com/7Y93nwa.png' title='Vorteil'>");
}

/*
 * Executes the "erfolg" Action.
 */
function doActionSuccess(whoRolled) {
    sendChat(whoRolled,"/direct <img src='https://i.imgur.com/znO45cy.png' title='Erfolg'>");
}

/*
 * Executes the "ErfolgVorteil" Action.
 */
function doActionSuccessAdvantage(whoRolled) {
    sendChat(whoRolled,"/direct <img src='https://i.imgur.com/K1uIGHU.png' title='Erfolg und Vorteil'>");
}

/*
 * Executes the "erfolg2" Action.
 */
function doActionSuccessTypeTwo(whoRolled) {
    sendChat(whoRolled,"/direct <img src='https://i.imgur.com/SJewYE1.png' title='Doppel Erfolg'>");
}

/*
 * Executes the "drache" Action.
 */
function doActionDragon(whoRolled) {
    sendChat(whoRolled,"/direct <img src='https://i.imgur.com/3EJxxMH.jpg' title='CRITICAL'>");
}

/*
 * Executes the "vorteil2" Action.
 */
function doActionAdvantageTypeTwo(whoRolled) {
    sendChat(whoRolled,"/direct <img src='https://i.imgur.com/dngWmyq.png' title='Doppel Vorteil'>");
}

/*
 * Executes the "nachteil" Action.
 */
function doActionDisadvantage(whoRolled) {
    sendChat(whoRolled,"/direct <img src='https://i.imgur.com/7OQBCPz.png?1' title='Nachteil'>");
}

/*
 * Executes the "nachteil2" Action.
 */
function doActionDisadvantageTypeTwo(whoRolled) {
    sendChat(whoRolled,"/direct <img src='https://i.imgur.com/D4ykHZ4.png?1' title='Doppel Nachteil'>");
}

/*
 * Executes the "fehlschlag" Action.
 */
function doActionMiss(whoRolled) {
    sendChat(whoRolled,"/direct <img src='https://i.imgur.com/xFczeHX.png?1' title='Fehlschlag'>");
}

/*
 * Executes the "fehlschlag2" Action.
 */
function doActionMissTypeTwo(whoRolled) {
    sendChat(whoRolled,"/direct <img src='https://i.imgur.com/bNbz2iv.png?1' title='Doppel Nachteil'>");
}

/*
 * Executes the "nachteilFehlschlag" Action.
 */
function doActionDisadvantageMiss(whoRolled) {
    sendChat(whoRolled,"/direct <img src='https://i.imgur.com/bFQHTY7.png?1' title='Fehlschlag und Nachteil'>");
}

/*
 * Executes the "unheil" Action.
 */
function doActionUnholy(whoRolled) {
    sendChat(whoRolled,"/direct <img src='https://i.imgur.com/D9IfpDV.png?1'>");
}

/*
 * Rolls the positive 12 sided dice.
 * @param whoRolled The player who rolled the dice.
 */
function rollPositiveDice12(whoRolled) {

	var dice_sides = 12;
	var roll = Math.floor(Math.random() * dice_sides + 1);

	switch(roll) {
		case 1: doActionNothing(whoRolled); break;
		case 2: doActionAdvantage(whoRolled); break;
		case 3: doActionSuccessAdvantage(whoRolled); break;
		case 4: doActionAdvantageTypeTwo(whoRolled); break;
		case 5: doActionSuccess(whoRolled); break;
		case 6: doActionSuccess(whoRolled); break;
		case 7: doActionSuccess(whoRolled); break;
		case 8: doActionSuccessTypeTwo(whoRolled); break;
		case 9: doActionSuccessTypeTwo(whoRolled); break;
		case 10: doActionSuccessTypeTwo(whoRolled); break;
		case 11: doActionSuccessTypeTwo(whoRolled); break;
		case 12: doActionDragon(whoRolled); break;
	}

}

/*
 * Rolls the positive 8 sided dice.
 * @param whoRolled The player who rolled the dice.
 */
function rollPositiveDice8(whoRolled) {
	var dice_sides = 8;
	var roll = Math.floor(Math.random() * dice_sides +1 );

	switch(roll) {
		case 1: doActionNothing(whoRolled); break;
		case 2: doActionAdvantage(whoRolled); break;
		case 3: doActionAdvantage(whoRolled); break;
		case 4: doActionSuccess(whoRolled); break;
		case 5: doActionSuccess(whoRolled); break;
		case 6: doActionSuccess(whoRolled); break;
		case 7: doActionSuccessTypeTwo(whoRolled); break;
		case 8: doActionSuccessTypeTwo(whoRolled); break;
	}

}

/*
 * Rolls the positive 6 sided dice.
 * @param whoRolled The player who rolled the dice.
 */
function rollPositiveDice6(whoRolled) {
	var dice_sides = 6;
	var roll = Math.floor(Math.random() * dice_sides +1 );

	switch(roll) {
		case 1: doActionNothing(whoRolled); break;
		case 2: doActionNothing(whoRolled); break;
		case 3: doActionAdvantage(whoRolled); break;
		case 4: doActionSuccess(whoRolled); break;
		case 5: doActionSuccess(whoRolled); break;
		case 6: doActionSuccessTypeTwo(whoRolled); break;
	}
}


/*
 * Rolls the negative 12 sided dice.
 * @param whoRolled The player who rolled the dice.
 */
function rollNegativeeDice12(whoRolled) {
	var dice_sides = 12;
	var roll = Math.floor(Math.random() * dice_sides + 1);

	switch(roll) {
		case 1: doActionNothing(whoRolled); break;
		case 2: doActionDisadvantage(whoRolled); break;
		case 3: doActionDisadvantageMiss(whoRolled); break;
		case 4: doActionDisadvantageTypeTwo(whoRolled); break;
		case 5: doActionMiss(whoRolled); break;
		case 6: doActionMiss(whoRolled); break;
		case 7: doActionMiss(whoRolled); break;
		case 8: doActionMissTypeTwo(whoRolled); break;
		case 9: doActionMissTypeTwo(whoRolled); break;
		case 10: doActionMissTypeTwo(whoRolled);  break;
		case 11: doActionMissTypeTwo(whoRolled); break;
		case 12: doActionUnholy(whoRolled); break;
	}
}

/*
 * Rolls the negative 8 sided dice.
 * @param whoRolled The player who rolled the dice.
 */
function rollNegativeeDice8(whoRolled) {
	var dice_sides = 8;
	var roll = Math.floor(Math.random() * dice_sides + 1 );

	switch(roll) {
		case 1: doActionNothing(whoRolled); break;
		case 2: doActionDisadvantage(whoRolled); break;
		case 3: doActionDisadvantage(whoRolled); break;
		case 4: doActionMiss(whoRolled); break;
		case 5: doActionMiss(whoRolled); break;
		case 6: doActionMiss(whoRolled); break;
		case 7: doActionMissTypeTwo(whoRolled); break;
		case 8: doActionMissTypeTwo(whoRolled); break;
	}
}

/*
 * Rolls the negative 6 sided dice.
 * @param whoRolled The player who rolled the dice.
 */
function rollNegativeeDice6(whoRolled) {
	var dice_sides = 6;
	var roll = Math.floor(Math.random() * dice_sides + 1 );
	switch(roll) {
		case 1: doActionNothing(whoRolled); break;
		case 2: doActionNothing(whoRolled); break;
		case 3: doActionDisadvantage(whoRolled); break;
		case 4: doActionMiss(whoRolled); break;
		case 5: doActionMiss(whoRolled); break;
		case 6: doActionMissTypeTwo(whoRolled); break;
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
    sendChat(whoRolled,"/direct  ");
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
	}
	else if (command.indexOf("!hq test") !== -1) {
		testAllDice(player);
	}

}
