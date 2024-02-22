const heroSpan = document.querySelector("#hero")
const villainsSpan = document.querySelector("#villain")
const resultSpan = document.querySelector("#result")
const button = document.querySelector("button")

const heroes = ["Harry", "Hagrid", "Garfield", "Irelia"]
const villains = ["Darius", "Voldemort", "Darth Vader", "Joker"]
const weapon = ["fork", "sword"]

button.addEventListener("click", () => {

    const randomHeroIndex = Math.floor(Math.random() * heroes.length)
    const randomHero = heroes[randomHeroIndex]
    const randomWeaponIndex = Math.floor(Math.random() * weapon.length)
    const randomHeroWeapon = weapon[randomWeaponIndex]

    const randomVillainIndex = Math.floor(Math.random() * villains.length)
    const randomVillain = villains[randomVillainIndex]
    const randomWeaponIndexVillain = Math.floor(Math.random() * weapon.length)
    const randomWeaponVillain = weapon[randomWeaponIndexVillain]

    heroSpan.innerHTML = `${randomHero} is armed with a/an ${randomHeroWeapon}.`
    villainsSpan.innerHTML = `${randomVillain} is armed with a/an ${randomWeaponVillain}`

    const HeroStrike = randomHero.length + randomHeroWeapon.length  
    const VillianStrike = randomVillain.length + randomWeaponVillain.length

    if(HeroStrike === VillianStrike) {  
        resultSpan.innerHTML = "It is a draw."
    } 
    else if(HeroStrike > VillianStrike) {  
        resultSpan.innerHTML = `The hero ${randomHero} saved the day!`
    } else {  
        resultSpan.innerHTML = `The villain ${randomVillain} won one for the dark side!`
    }
})

