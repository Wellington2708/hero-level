// 1️⃣ Desafio Classificador de nível de Herói

let nameHero = "FrontEnd";
let experienceXP = 8500;
let levelHero = "";

if(experienceXP <= 1000){
    console.log(levelHero = "Ferro");
} else if(experienceXP > 1000 && experienceXP <= 2000){
    console.log(levelHero = "Bronze");
} else if(experienceXP > 2000 && experienceXP <= 5000) {
    console.log(levelHero = "Prata");
} else if(experienceXP > 5000 && experienceXP <= 7000) {
    console.log(levelHero = "Ouro");
} else if(experienceXP > 7000 && experienceXP <= 8000) {
    console.log(levelHero = "Platina");
} else if(experienceXP > 8000 && experienceXP <= 9000) {
    console.log(levelHero = "Ascendente");
} else if(experienceXP > 9000 && experienceXP <= 10000) {
    console.log(levelHero = "Imortal");
} else if(experienceXP > 10000) {
    console.log(levelHero = "Radiante");
} else {
    console.log("Esse aí não é herói em lugar nenhum!!");
}

 console.log(`O Herói de nome ${nameHero} está no nível ${levelHero}!`);

