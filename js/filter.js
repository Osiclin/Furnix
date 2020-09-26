const couch = document.getElementsByClassName('couch');
const dinning = document.getElementsByClassName('dinning');
const wardrobe = document.getElementsByClassName('wardrobe');
const shelf = document.getElementsByClassName('shelf');


var category = [couch, dinning, wardrobe, shelf]


function showAll() {
    for (i = 0, j = 0, k = 0; i <= category.length;) {
        category[j][k].style.display = 'block';
        category[j][k + 1].style.display = 'block';
        i++;
        j++;
    }  
}

function filterCouch() {  
    for (i = 0, j = 0, k = 0; i < 2; i++) {
        category[0][i].style.display = 'block';
        category[1][i].style.display = 'none';
        category[2][i].style.display = 'none';
        category[3][i].style.display = 'none';
    } 
}

function filterDinning() {
    for (i = 0; i < 2; i++) {
        category[0][i].style.display = 'none';
        category[1][i].style.display = 'block';
        category[2][i].style.display = 'none';
        category[3][i].style.display = 'none';
    }
}

function filterWardrobe() {
    for (i = 0; i < 2; i++) {
        category[0][i].style.display = 'none';
        category[1][i].style.display = 'none';
        category[2][i].style.display = 'block';
        category[3][i].style.display = 'none';
    }
}

function filterShelf() { 
    for (i = 0; i < 2; i++) {
        category[0][i].style.display = 'none';
        category[1][i].style.display = 'none';
        category[2][i].style.display = 'none';
        category[3][i].style.display = 'block';
    }
}

function filterChair() {
    document.getElementById('furniture-block').innerHTML = "There are no chairs available.";
}