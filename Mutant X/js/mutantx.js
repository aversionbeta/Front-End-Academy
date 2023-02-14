let playerAttack
let enemyAttack
let playerHealth = 3
let enemyHealth = 3



function startGame() {
    let sectionRestart = document.getElementById("section_reboot")
    sectionRestart.style.display = "none"
    
    
    let sectionAttack = document.getElementById("section_selectattack")
    sectionAttack.style.display = "none"
        
    let buttonSelectMutant = document.getElementById('button_selectmutant')
    buttonSelectMutant.addEventListener('click', selectMascotPlayer);

    let buttonFire=document.getElementById('button_fire')
    buttonFire.addEventListener('click', fireAttack);
    
    let buttonWater= document.getElementById('button_water')
    buttonWater.addEventListener('click', waterAttack);

    let buttonForest = document.getElementById('button_forest');
    buttonForest.addEventListener('click',forestAttack);

    let buttonRestart = document.getElementById('button_restart');
    buttonRestart.addEventListener('click', restartGame);

}

function selectMascotPlayer() {

    let inputDragon = document.getElementById('dragon')
    let inputArbol = document.getElementById('arbol')
    let inputTiburon = document.getElementById('tiburon')
    let spanMascotPlayer = document.getElementById('mutantname_player') 
    
    if (inputDragon.checked) {
        spanMascotPlayer.innerHTML = 'Dragono'
    }
    else if (inputArbol.checked) {
        spanMascotPlayer.innerHTML = 'Arbolium'
    }
    else if (inputTiburon.checked) {
        spanMascotPlayer.innerHTML = 'Tibura'
    }
    else {
        alert("No seleccionaste ninguna opción")

    }

    let sectionAttack = document.getElementById("section_selectattack")
    sectionAttack.style.display = "flex"
    let sectionMutant = document.getElementById("section_selectmutant")
    sectionMutant.style.display = "none"

    SelectMascotEnemy()
}

function SelectMascotEnemy() {
    let randomEnemy = aleatorio(1,3)
    let spanMascotEnemy = document.getElementById('mutantname_enemy')


    if (randomEnemy == 1) {
        spanMascotEnemy.innerHTML = 'Dragono'
    } 
    else if (randomEnemy == 2) {
        spanMascotEnemy.innerHTML = 'Arbolium'
    }
    else if (randomEnemy == 3) {
        spanMascotEnemy.innerHTML = 'Tibura'
    }

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
    let sectionMessage = document.getElementById('result')
    let playAttack= document.getElementById('player_attack')
    let eneAttack=document.getElementById('enemy_attack')

    let newPlayerAttack = document.createElement('p')
    let newEnemyAttack = document.createElement('p')

    sectionMessage.innerHTML = result
    newPlayerAttack.innerHTML = playerAttack
    newEnemyAttack.innerHTML = enemyAttack
        
    playAttack.appendChild(newPlayerAttack)
    eneAttack.appendChild(newEnemyAttack)

    
}

function createMessageFinal(finalResult) {
    let sectionMessage = document.getElementById('result')
    
    sectionMessage.innerHTML = finalResult

    let buttonSelectMutant = document.getElementById('button_selectmutant')
    buttonSelectMutant.disabled = true
    let buttonFire=document.getElementById('button_fire')
    buttonFire.disabled= true
    let buttonWater= document.getElementById('button_water')
    buttonWater.disabled= true
    let buttonForest = document.getElementById('button_forest');
    buttonForest.disabled= true

    let sectionRestart = document.getElementById("section_reboot")
    sectionRestart.style.display = "block"
    let buttonRestart = document.getElementById('button_restart');
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