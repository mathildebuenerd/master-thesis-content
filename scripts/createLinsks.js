/**
 * Created by mathi on 02/10/2017.
 */

// permet de relier par une ligne les éléments qui ont des mots clés ou des références en commun

createLinks();

function createLinks() {

  // Plutôt que de chercher dans le json on cherche direct dans le DOM parce que c'est plus simple

    let relatedTextTags = document.querySelectorAll(".relatedText");
    console.log(relatedTextTags[0].textContent);

    for (let i=0; i<relatedTextTags.length; i++) {
        let relatedText = relatedTextTags[i].textContent;
        let textsId = document.querySelectorAll(".id");

        for (let j=0; j<textsId.length; j++) {
            let text = textsId[j].textContent;
            if (relatedText === text) {
                drawLine(relatedTextTags[i], textsId[j]);
            }
        }

    }
}

function drawLine(start, end) {

    console.log("drawline");
    console.log(start);
    console.log(end);

}
