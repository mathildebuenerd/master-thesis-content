/**
 * Created by mathi on 01/10/2017.
 */

//console.log("hello");

let test = Object.keys(content);
let subtest = Object.keys(test);


//readJSON(content);

// function readJSON(data) {
//
//     Object.keys(data).forEach((k) => {
//         if (typeof data[k] === "object") { // s'il y a des sous-objets on va aussi chercher leur contenu
//             if (data[k].length > 1) {
//                 for (let i=0; i<data[k].length; i++) {
//                     //console.log(data[k][i]);
//                     readJSON(data[k][i]);
//                 }
//             }
//         }
//
//     });
//
// }
//
readJSON();

function display(keyContent, keyName) {
    let paragraphe = document.createElement('p');
    paragraphe.textContent = keyContent;
    paragraphe.setAttribute('class', keyName);
    //                         subSubBloc.appendChild(paragraphe);
    return(paragraphe);
}


function readJSON() {

    let keys = Object.keys(content); // afficher les intitulés des keys

    for (let i=0; i<keys.length; i++) { // on compte le nombre de keys (projects, theory, prototype)
        let section = document.createElement('section'); // correspond aux grandes sections "projets" "prototypes" "theory"...
        section.setAttribute('class', keys[i]);
        for (let j=0; j<content[keys[i]].length; j++) { // on loop dans ces keys

            if(Object.keys(content[keys[i]][j]).length > 1) { // si on a plus de 1 key, ça veut dire qu'on est déjà au dernier niveau
                let article = document.createElement('article');
                let finalKeys = Object.keys(content[keys[i]][j]); // contient la liste des clés de dernier niveau
                for(let k=0; k<finalKeys.length; k++) {
                    let keyContent = content[keys[i]][j][finalKeys[k]];
                    let keyName = finalKeys[k]; // correspond à l'intitulé de la key
                    let newtag = display(keyContent, keyName);
                    article.appendChild(newtag);
                }
                section.appendChild(article);

            } else { // si on a une seule key ça veut dire qu'on a affaire à un sous-niveau
                let subKeys = Object.keys(content[keys[i]][j]);
                let subKeysContent = content[keys[i]][j];
                let subSection = document.createElement('section'); // correspond aux sous-sections de la catégorie "theory" : "texts", "notions"...
                subSection.setAttribute('class', subKeys[0]);

                for (let l=0; l<subKeysContent[subKeys].length; l++) { // on parcoure chaque sous-sections
                    let article = document.createElement('article');
                    let finalKeys = Object.keys(subKeysContent[subKeys][l]);

                    for (let k=0; k<finalKeys.length; k++) { // correspond au niveau final
                        let keyContent = subKeysContent[subKeys][l][finalKeys[k]];
                        console.log(keyContent);
                        let keyName = finalKeys[k]; // correspond à l'intitulé de la key
                        let newtag = display(keyContent, keyName);
                        article.appendChild(newtag);
                    }
                    subSection.appendChild(article);
                }
                section.appendChild(subSection);
            }
        }
        document.body.appendChild(section);
    }
}