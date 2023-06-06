const myAudioContext = new AudioContext();

/**
 *
 * 
 * @param {number} duration 
 * @param {number} frequency 
 * @param {number} volume 
 * 
 * @returns {Promise} 
 */

export function beep(duration, frequency, volume){
    return new Promise((resolve, reject) => {

        duration = duration;
        frequency = frequency;
        volume = volume;

        console.log(duration)

        try{
            let oscillatorNode = myAudioContext.createOscillator();
            let gainNode = myAudioContext.createGain();
            oscillatorNode.connect(gainNode);

            // Set the oscillator frequency in hertz
            oscillatorNode.frequency.value = frequency;

            // Set the type of oscillator
            oscillatorNode.type= "square";
            gainNode.connect(myAudioContext.destination);

            // Set the gain to the volume
            gainNode.gain.value = volume * 0.01;

            // Start audio with the desired duration
            oscillatorNode.start(myAudioContext.currentTime);
            oscillatorNode.stop(myAudioContext.currentTime + duration * 0.001);

            // Resolve the promise when the sound is finished
            oscillatorNode.onended = () => {
                resolve();
            };
        }catch(error){
            reject(error);
        }
    });
}