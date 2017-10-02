/**
 * Created by mathi on 02/10/2017.
 */

function clearSorting() {

    let articles = document.querySelectorAll('article');
    for (let i=0; i<articles.length; i++) {
        if (articles[i].classList.contains('hidden')) {
            articles[i].classList.remove('hidden');
        }
    }


}

// Pour la fonction de recherche
// On cherche dans chaque paragraphe de chaque article
function sortArticles() {

    let input = document.querySelector('#searchbar');
    let filter = input.value.toUpperCase();
    let articles = document.querySelectorAll('article');

    let found = true;

    clearSorting();

    for (let i=0; i<articles.length; i++) {
        console.log('article n°' + i);
        let paragraphes = articles[i].querySelectorAll('p');

        for (let j=0; j<paragraphes.length; j++) {
            if (paragraphes[j].textContent.toUpperCase().indexOf(filter) > -1) { // si on a trouvé quelque chose
                console.log("j'ai trouvé " + filter);
                found = true;
                // Dès qu'on trouve quelque chose on stoppe la boucle
                // Sinon on continue jusqu'au bout
                break;
            } else {
                console.log("j'ai pas trouvé " + filter);
                found = false;
            }
        }

        if (!found) {
            if (!articles[i].classList.contains('hidden')) {
                articles[i].classList.add('hidden');
            }
        }

        found=true;

    }


}