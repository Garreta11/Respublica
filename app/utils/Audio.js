import EventEmitter from "./EventEmitter";

export default class Audio extends EventEmitter {
    constructor(sound) {
        super()
        this.sound = sound;
    }

    playAudio = () => {
        // console.log("plays")
        this.sound.play()
    }

    pauseAudio = () => {
        // console.log("pause")
        this.sound.pause()
    }
}