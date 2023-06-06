let letters;
let updatedAttributeId = 0;

import { domManipulator} from "./index.js";
export {morseDecoder, updatedAttributeId};

function morseDecoder(exportGroups, attributeId){

    switch (exportGroups){
        case '・ー':
            letters = 'a';
            outputScreen(letters, attributeId)
        break;
        case 'ー・・・':
            letters = 'b';
            outputScreen(letters, attributeId)
        break;
        case 'ー・ー・':
            letters = 'c';
            outputScreen(letters, attributeId)
        break;
        case 'ー・・':
            letters = 'd';
            outputScreen(letters, attributeId)
        break;
        case '・':
            letters = 'e';
            outputScreen(letters, attributeId)
        break;
        case '・・ー・':
            letters = 'f';
            outputScreen(letters, attributeId)
        break;
        case 'ーー・':
            letters = 'g';
            outputScreen(letters, attributeId)
        break;
        case '・・・・':
            letters = 'h';
            outputScreen(letters, attributeId)
        break;
        case '・・':
            letters = 'i';
            outputScreen(letters, attributeId)
        break;
        case '・ーーー':
            letters = 'j';
            outputScreen(letters, attributeId)
        break;
        case 'ー・ー':
            letters = 'k';
            outputScreen(letters, attributeId)
        break;
        case '・ー・・':
            letters = 'l';
            outputScreen(letters, attributeId)
        break;
        case 'ーー':
            letters = 'm';
            outputScreen(letters, attributeId)
        break;
        case 'ー・':
            letters = 'n';
            outputScreen(letters, attributeId)
        break;
        case 'ーーー':
            letters = 'o';
            outputScreen(letters, attributeId)
        break;
        case '・ーー・':
            letters = 'p';
            outputScreen(letters, attributeId)
        break;
        case 'ーー・ー':
            letters = 'q';
            outputScreen(letters, attributeId)
        break;
        case '・ー・':
            letters = 'r';
            outputScreen(letters, attributeId)
        break;
        case '・・・':
            letters = 's';
            outputScreen(letters, attributeId)
        break;
        case 'ー':
            letters = 't';
            outputScreen(letters, attributeId)
        break;
        case '・・ー':
            letters = 'u';
            outputScreen(letters, attributeId)
        break;
        case '・・・ー':
            letters = 'v';
            outputScreen(letters, attributeId)
        break;
        case '・ーー':
            letters = 'w';
            outputScreen(letters, attributeId)
        break;
        case 'ー・・ー':
            letters = 'x';
            outputScreen(letters, attributeId)
        break;
        case 'ー・ーー':
            letters = 'y';
            outputScreen(letters, attributeId)
        break;
        case 'ーー・・':
            letters = 'z';
            outputScreen(letters, attributeId)
        break;
        case '・ーーーー':
            letters = '1';
            outputScreen(letters, attributeId)
        break;
        case '・・ーーー':
            letters = '2';
            outputScreen(letters, attributeId)
        break;
        case '・・・ーー':
            letters = '3';
            outputScreen(letters, attributeId)
        break;
        case '・・・・ー':
            letters = '4';
            outputScreen(letters, attributeId)
        break;
        case '・・・・・':
            letters = '5';
            outputScreen(letters, attributeId)
        break;
        case 'ー・・・・':
            letters = '6';
            outputScreen(letters, attributeId)
        break;
        case 'ーー・・・':
            letters = '7';
            outputScreen(letters, attributeId)
        break;
        case 'ーーー・・':
            letters = '8';
            outputScreen(letters, attributeId)
        break;
        case 'ーーーー・':
            letters = '9';
            outputScreen(letters, attributeId)
        break;
        case 'ーーーーー':
            letters = '0';
            outputScreen(letters, attributeId)
        break;
        case '・ー・ー・ー':
            letters = '.';
            outputScreen(letters, attributeId)
        break;
        case 'ーー・・ーー':
            letters = ',';
            outputScreen(letters, attributeId)
        break;
        case '・・ーー・・':
            letters = '?';
            outputScreen(letters, attributeId)
        break;
        case 'ー・ー・ーー':
            letters = '!';
            outputScreen(letters, attributeId)
        break;
        case 'ー・・ー・':
            letters = '/';
            outputScreen(letters, attributeId)
        break;
        default:
            console.log('input letter not found' + exportGroups)
    }
}

function outputScreen(letters, attr){
    
    domManipulator(letters, "display: flex; margin:0; justify-content: center; font-size:2rem");
    
    updatedAttributeId = attr + 1;
    createNewDivClass(updatedAttributeId);
}

function createNewDivClass(updatedAttributeId){
    const div = document.createElement('div');
    let newClass = `div${updatedAttributeId}`
    div.setAttribute('class', newClass)
    div.style.display = "inline-block";
    document.body.appendChild(div);
}
