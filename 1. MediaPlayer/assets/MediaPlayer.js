class MediaPlayer {
    constructor(config) {
        this.media = config.el;
        this.plugins = config.plugins || [];
    }

    play() {
        this.media.play();
    }

    pause() {
        this.media.pause();
    }

    togglePlay() {
        if(this.media.paused)
            this.play()
        else
            this.pause()
    }
    
    mute() {
        this.media.muted = true
    }

    initPlugins() {
        this.plugins.forEach(element => {
            element.run(this) 
        });
    }
}

export default MediaPlayer