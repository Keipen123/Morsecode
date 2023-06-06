import { beep } from "./audio.js";
import { morseDecoder, updatedAttributeId } from "./morsecode.js";

let sustainer = {};
let inputGroups = [];
let exportGroups = [];
let secondsRecorder = [];
let timerID = 'theTimer';
let utteranceSpeed = 500;
let toggleThreshold = 0.15;
export let attributeId = 0;

let keyDownEvent = (e) => {
    if(e.code !== 'Space') return;
    if(sustainer[e.code] ) return;
    clearInterval(timerID);
    sustainer[e.code] = e.timeStamp;
}
 
let keyUpEvent = (e) => {
    if(!sustainer[e.code]) return;
    let duration = (e.timeStamp - sustainer[e.code])/1000   
    let assignedLetters = `${duration <= toggleThreshold ? "・" : "ー"}`;

    console.log(inputGroups)

    inputGroups.push(assignedLetters);
    interfacePusher(assignedLetters);
    sustainer[e.code] = 0;
    beep((duration*1000), 850, 5);
    inputPendingTimer(timerID);
} 

function inputPendingTimer(){ 
    timerID = setInterval(() => {
        const unixDate = new Date();
        let secondsElapsed = unixDate.getSeconds();
        secondsRecorder.push(secondsElapsed);

        if(secondsRecorder.length === 2){
            timeElapseSequence();
        }
        }
    , utteranceSpeed);
    }

function timeElapseSequence(){
    letterSpacer();
    secondsRecorder = [];
    clearInterval(timerID);
    inputGroups = inputGroups.join(''); 
    exportGroups = inputGroups.slice();
    exportGroups = exportGroups.toString();

    attributeId = updatedAttributeId || 0;

    morseDecoder(exportGroups, attributeId);
    inputGroups = [];
    exportGroups = [];
}

export let domManipulator = (insertingLetters, styleCustom = "display: inline; font-size:1.5rem") =>{
    const e = document.createElement('p');
    e.setAttribute('id', `letterNumber${attributeId}`)

    e.innerHTML = insertingLetters;
    e.style = styleCustom;
    let classname  = `div${updatedAttributeId}`
    document.getElementsByClassName(classname)[0].appendChild(e);
}

function letterSpacer (){
    domManipulator('|')
}

let interfacePusher = (assignedLetters) => {
    domManipulator(assignedLetters)
}

window.addEventListener('keydown', keyDownEvent)
window.addEventListener('keyup', keyUpEvent)