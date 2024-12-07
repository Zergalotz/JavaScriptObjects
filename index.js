//Purely for Demonstrating Objects and there different uses in combination with JavaScript

const Pokemon = {
    name: '',
    type: '',
    attacks: {},
};

const Richu = Pokemon;

console.log(`This is a empty Pokemon Object = Pokemon name - "${Pokemon.name}", type - "${Pokemon.type}", attacks - "${Pokemon.attacks}"`);

Richu.name = "Richu";
Richu.type = "Electric";
Richu.attacks.quickAttack = function quickAttack() {
    return "Very quick attack and it goes first";
};
Richu.attacks.tackle = function tackle() {
    return "Full body tackle!";
};
Richu.attacks.agility = function agility() {
    return "Increases Speed state";
};
Richu.attacks.thunderbolt = function thunderBolt() {
    return "High voltage thunder bolt attack";
};

console.log(`This is the Richu Pokemon Object = Pokemon name - "${Richu.name}",\ntype - "${Richu.type}",\nattacks -\nquick attack: ${Richu.attacks.quickAttack()},\ntackle: ${Richu.attacks.tackle()},\nagility: ${Richu.attacks.agility()},\nthunderbolt: ${Richu.attacks.thunderbolt()}`);


