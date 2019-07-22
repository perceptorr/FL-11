function Fighter(person) {
	let name = person.name;
	let damage = person.damage;
	let agility = person.agility;
	let fullHp = person.hp;
	let hp = fullHp;
	let win = 0,
		loss = 0;

	this.getName = function() {
		return name;
	}
	this.getDamage = function() {
		return damage;
	}
	this.getHealth = function() {
		return hp;
	}
	this.getAgility = function() {
		return agility;
	}
	this.attack = function(defender) {
		let percents = 100;
		let probability = Math.random() * percents;
		if (probability > defender.getAgility()) {
			defender.dealDamage(damage);
			console.log(`${name} makes ${damage} damage to ${defender.getName()}`);

		} else {
			console.log(`${defender.getName()} attack missed`);
		}
	}
	this.dealDamage = function(health) {
		hp -= health;
		if (hp < 0) {
			hp = 0;
		}
	}
	this.logCombatHistory = function() {
		console.log(`Name:${name}, Wins:${win}, Losses:${loss}`);
	}
	this.heal = function(heal) {
		if (hp + heal >= fullHp) {
			hp = fullHp;
		} else {
			hp += heal;
		}
	}
	this.addWin = function() {
		win++;
	}
	this.addLoss = function() {
		loss++;
	}
}

function battle(fighter1, fighter2) {
	if (fighter1.getHealth() === 0) {
		console.log(`${fighter1.getName()} is dead and can't fight`);
	} else if (fighter2.getHealth() === 0) {
		console.log(`${fighter2.getName()} is dead and can't fight`);
	} else {
		while (fighter1.getHealth() > 0 && fighter2.getHealth() > 0) {
			fighter1.attack(fighter2);
			if (fighter2.getHealth() > 0) {
				fighter2.attack(fighter1);
			}
		}
		fighter1.getHealth() === 0 ? fighter1.addLoss() : fighter1.addWin();
		fighter2.getHealth() === 0 ? fighter2.addLoss() : fighter2.addWin();
	}
}


const myFighter1 = new Fighter({
	name: 'John',
	damage: 20,
	hp: 100,
	agility: 25
});

console.log(myFighter1);

const myFighter2 = new Fighter({
	name: 'Jim',
	damage: 10,
	hp: 120,
	agility: 40
});