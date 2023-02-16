const sectionRestart = document.getElementById("section_reboot")
const sectionAttack = document.getElementById("section_selectattack")
const buttonSelectMutant = document.getElementById('button_selectmutant')
const buttonFire=document.getElementById('button_fire')
const buttonWater= document.getElementById('button_water')
const buttonForest = document.getElementById('button_forest');
const buttonRestart = document.getElementById('button_restart');
const spanMascotPlayer = document.getElementById('mutantname_player')
const sectionMutant = document.getElementById("section_selectmutant")
const spanMascotEnemy = document.getElementById('mutantname_enemy')
const sectionMessage = document.getElementById('result')
const playAttack= document.getElementById('player_attack')
const eneAttack=document.getElementById('enemy_attack')
const newPlayerAttack = document.createElement('p')
const newEnemyAttack = document.createElement('p')
const cardsContainer=document.getElementById('cards_container')
const sectionMap = document.getElementById('see_map')
const gameMap = document.getElementById('map')



let mutants = []
let playerAttack
let enemyAttack
let mutantOptions
let inputDragon 
let inputArbol 
let inputTiburon
let playerMutant
let playerHealth = 3
let enemyHealth = 3
let canvas = gameMap.getContext('2D')


class mutant {
    constructor(mutantname,pic,life){
        this.name = mutantname
        this.pic = pic
        this.life = life
        this.attacks = []
    }    
}

let tibura = new mutant('Tibura', './assets/Tibura.png', 3)
let dragono = new mutant('Dragono', './assets/Dragono.png', 3)
let arbolium = new mutant('Arbolium', './assets/Arboro.png' , 3)

tibura.attacks.push(
    {name: 'Ola mortal', id: 'button_water'},
    {name: 'Maremoto de Neptuno', id: 'button_water'},
    {name: 'Lluvia oscura', id: 'button_water'},
    {name: 'Cañon de agua', id: 'button_water'},
    {name: 'Huracán tropical', id: 'button_water'}
)

arbolium.attacks.push(
    {name: 'Bosque vivo', id: 'button_water'},
    {name: 'Hiedra venenosa', id: 'button_water'},
    {name: 'Fruta del mal', id: 'button_water'},
    {name: 'Terremoto de urano', id: 'button_water'},
    {name: 'Tierra mala', id: 'button_water'}
)

dragono.attacks.push(
    {name: 'Cañon de fuego', id: 'button_water'},
    {name: 'Fuego Mortal', id: 'button_water'},
    {name: 'Fuego doble', id: 'button_water'},
    {name: 'Fuego Triple', id: 'button_water'},
    {name: 'Fuego oscuro', id: 'button_water'}
)

mutants.push(tibura, dragono, arbolium)



function startGame() {
    
    sectionRestart.style.display = "none"
    sectionAttack.style.display = "none"
    sectionMap.style.display = "none"  
    
    
    mutants.forEach((mutant) => {
        mutantOptions = `
        <label class="mutantx_card" for=${mutant.name}>
            <input type="radio" name="mascota" id=${mutant.name}>
            <p>${mutant.name}</p>
            <img src=${mutant.pic} class="mutantx_mutant" alt=${mutant.name}>
        </label>
        `
        cardsContainer.innerHTML += mutantOptions

        inputArbol= document.getElementById('Arbolium')
        inputDragon = document.getElementById('Dragono')
        inputTiburon= document.getElementById('Tibura')
    })

    buttonSelectMutant.addEventListener('click', selectMascotPlayer);
    buttonFire.addEventListener('click', fireAttack);
    buttonWater.addEventListener('click', waterAttack);
    buttonForest.addEventListener('click',forestAttack);
    buttonRestart.addEventListener('click', restartGame);
}

function selectMascotPlayer() {
    // sectionAttack.style.display = "flex"
    sectionMutant.style.display = "none"
    sectionMap.style.display = "flex"
    

    if (inputDragon.checked) {
        spanMascotPlayer.innerHTML = inputDragon.id
        mutantPlayer = inputDragon.id
    }
    else if (inputArbol.checked) {
        spanMascotPlayer.innerHTML = inputArbol.id
        mutantPlayer = inputArbol.id
    }
    else if (inputTiburon.checked) {
        spanMascotPlayer.innerHTML = inputTiburon.id
        mutantPlayer = inputTiburon.id
    }
    else {
        alert("No seleccionaste ninguna opción")

    }
    extractAttacks(mutantPlayer)
    SelectMascotEnemy()
}

function extractAttacks(mutantPlayer) {
    let extractAttacks
    for (let i = 0; i < mutants.length; i++){
        if (mutantPlayer === mutants[i].name) {
            attacks= mutants[i].attacks
    }
}
}

function SelectMascotEnemy() {
    let randomEnemy = aleatorio(0,mutants.length-1)
    
    spanMascotEnemy.innerHTML = mutants[randomEnemy].name
}

function fireAttack() {
    playerAttack = 'Fuego Mortal'
    enemyRandomAttack()
}
function waterAttack() {
    playerAttack = 'Cañón de Agua'
    enemyRandomAttack()
}

function forestAttack() {
    playerAttack = 'Bosque Vivo'
    enemyRandomAttack()
}

function enemyRandomAttack() {
    let randomAttack = aleatorio(1,3)

    if (randomAttack == 1) {
        enemyAttack= 'Fuego Mortal'
    }
    else if (randomAttack == 2) {
        enemyAttack='Cañón Agua'
    }
    else if (randomAttack == 3) {
        enemyAttack='Bosque Vivo'
    }

    combat();
}

function createMessage(result) {
    sectionMessage.innerHTML = result
    newPlayerAttack.innerHTML = playerAttack
    newEnemyAttack.innerHTML = enemyAttack
        
    playAttack.appendChild(newPlayerAttack)
    eneAttack.appendChild(newEnemyAttack)

    
}

function createMessageFinal(finalResult) {
        
    sectionMessage.innerHTML = finalResult
    buttonSelectMutant.disabled = true
    buttonFire.disabled= true
    buttonWater.disabled= true
    buttonForest.disabled= true
    sectionRestart.style.display = "block"
    buttonRestart.addEventListener('click', restartGame);
}

function combat() {

    let spanLifesPlayer = document.getElementById('lifes_player')
    let spanLifesEnemy = document.getElementById('lifes_enemy')


    
    if (enemyAttack == playerAttack) {
        createMessage('Empate')
        enemyHealth
        playerHealth
        spanLifesEnemy.innerHTML = enemyHealth
        spanLifesPlayer.innerHTML = playerHealth
    }
    else if (enemyAttack == 'Fuego Mortal' && playerAttack == 'Cañón de Agua') {
        createMessage('Ganaste el movimiento')
        enemyHealth --
        spanLifesEnemy.innerHTML = enemyHealth
    }
    else if (enemyAttack == 'Fuego Mortal' && playerAttack == 'Bosque Vivo') {
        createMessage('Perdiste el movimiento')
        playerHealth --
        spanLifesPlayer.innerHTML = playerHealth
    }
    else if (enemyAttack == 'Cañón de Agua' && playerAttack == 'Bosque Vivo') {
        createMessage('Ganaste el movimiento')
        enemyHealth --
        spanLifesEnemy.innerHTML = enemyHealth
    }
    else if (enemyAttack == 'Cañón de Agua' && playerAttack == 'Fuego Mortal') {
        createMessage('Perdiste el movimiento')
        playerHealth --
        spanLifesPlayer.innerHTML = playerHealth
    }
    else if (enemyAttack == 'Bosque Vivo' && playerAttack == 'Cañón de Agua') {
        createMessage('Perdiste el movimiento')
        playerHealth --
        spanLifesPlayer.innerHTML = playerHealth
    }
    else if (enemyAttack == 'Bosque Vivo' && playerAttack == 'Fuego Mortal') {
        createMessage('Ganaste el movimiento')
        enemyHealth --
        spanLifesEnemy.innerHTML = enemyHealth 
    }

    lifesCount()
}

function lifesCount(){
    if (enemyHealth==0){
        createMessageFinal('¡Ganaste! Batalla Finalizada, la vida de tu enemigo es ' + enemyHealth + ' y la tuya es de ' + playerHealth)   
    }
    else if (playerHealth==0){
        createMessageFinal('Perdiste... Batalla Finalizada, la vida de tu enemigo es ' + enemyHealth + ' y la tuya es de ' + playerHealth)
    }

    
}

function restartGame() {
    location.reload()
    
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}



window.addEventListener('load', startGame)