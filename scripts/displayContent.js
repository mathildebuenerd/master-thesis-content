/**
 * Created by mathi on 01/10/2017.
 */

//console.log("hello");

let test = Object.keys(content);
let subtest = Object.keys(test);


//readJSON(content);

function readJSON(data) {

    Object.keys(data).forEach((k) => {
        if (typeof data[k] === "object") { // s'il y a des sous-objets on va aussi chercher leur contenu
            if (data[k].length > 1) {
                for (let i=0; i<data[k].length; i++) {
                    //console.log(data[k][i]);
                    readJSON(data[k][i]);
                }
            }
        }

    });

}

display();

function display() {

    console.log("display");
    let mykeys = Object.keys(content);
    // console.log(content[keys[1]]);
    // console.log(content[keys[1]][1]);

    for (let i=0; i<mykeys.length; i++) {
        let bloc = document.createElement('div');
        bloc.setAttribute('class', mykeys[i]);

        if (content[mykeys[i]].length > 1) { // si l'objet a des sous-objets

            //console.log(content[mykeys[i]][0]);
            // console.log(content[mykeys[i]].length);
            // for (let j=0; j<content[mykeys[i]].length; j++) {
            //     let subBloc = document.createElement('div');
            //     let subkey = Object.keys(content[mykeys[i]]);
            //     console.log(subkey[j]);
            //     subBloc.setAttribute('class', subkey);
            //     bloc.appendChild(subBloc);
            // }


        } else {
            console.log("je n'ai pas de sous-objets " + content[mykeys[i]]);
            let subKeys = Object.keys(content[mykeys[i]][0]);
            console.log(subKeys);
            //console.log(Object.keys(content[mykeys[i]][0]));
            for (let k=0; k<content[mykeys[i]].length; k++) {
                let subBloc = document.createElement('div');
                for (let l=0; l<Object.keys(content[mykeys[i]][k]).length; l++) {
                    let paragraphe = document.createElement('p');
                    //console.log(content[mykeys[i]][k][l]);
                    paragraphe.textContent = content[mykeys[i]][k][subKeys[l]];
                    subBloc.appendChild(paragraphe);
                }
                bloc.appendChild(subBloc);
            }

        }
        //console.log(content[mykeys[0]].length);

        // for (let j=0; j<mykeys[i].length; j++) {
        //         let subKeys = Object.keys(content[mykeys[i]][j]);
        //         console.log("subkeys " + subKeys);
        //         let subBloc = document.createElement('div');
        //         // subBloc.setAttribute('class', subKeys[0]);
        //
        //         for(let k=0; k<mykeys[i][j].length; k++) {
        //             let paragraphe = document.createElement('p');
        //             paragraphe.innerHTML = mykeys[i][j];
        //             paragraphe.setAttribute("class",mykeys[i][j]);
        //             subBloc.appendChild(paragraphe);
        //         }
        //
        //         bloc.appendChild(subBloc);
        //         console.log("appendchild");
        //
        // }

        document.body.appendChild(bloc);
    }

    
}