let playerAttack
let enemyAttack



function startGame() {
    let buttonSelectMutant = document.getElementById('button_selectmutant')
    buttonSelectMutant.addEventListener('click', selectMascotPlayer);

    let buttonFire=document.getElementById('button_fire')
    buttonFire.addEventListener('click', fireAttack);
    
    let buttonWater= document.getElementById('button_water')
    buttonWater.addEventListener('click', waterAttack);

    let buttonForest = document.getElementById('button_forest');
    buttonForest.addEventListener('click',forestAttack);
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

function createMessage(resultAttack) {
    let sectionMessage = document.getElementById('section_messages')
    let attackParagraph = document.createElement('p')
    attackParagraph.innerHTML = 'Tu mutante atacó con ' + playerAttack + ' y tu enemigo atacó con ' + enemyAttack +', ' + resultAttack
    sectionMessage.appendChild(attackParagraph)
    
}

function combat() {
    
    if (enemyAttack == playerAttack) {
        createMessage('Empate')
    }
    else if (enemyAttack == 'Fuego Mortal' && playerAttack == 'Cañón de Agua') {
        createMessage('Ganaste el movimiento')
    }
    else if (enemyAttack == 'Fuego Mortal' && playerAttack == 'Bosque Vivo') {
        createMessage('Perdiste el movimiento')
    }
    else if (enemyAttack == 'Cañón de Agua' && playerAttack == 'Bosque Vivo') {
        createMessage('Ganaste el movimiento')
    }
    else if (enemyAttack == 'Cañón de Agua' && playerAttack == 'Fuego Mortal') {
        createMessage('Perdiste el movimiento')
    }
    else if (enemyAttack == 'Bosque Vivo' && playerAttack == 'Cañón de Agua') {
        createMessage('Perdiste el movimiento')
    }
    else if (enemyAttack == 'Bosque Vivo' && playerAttack == 'Fuego Mortal') {
        createMessage('Ganaste el movimiento')
    }
}


function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}



window.addEventListener('load', startGame)