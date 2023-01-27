function startGame() {
    let buttonSelectMutant = document.getElementById('button_selectmutant')
    buttonSelectMutant.addEventListener('click', selectMascotPlayer);
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

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}



window.addEventListener('load', startGame)