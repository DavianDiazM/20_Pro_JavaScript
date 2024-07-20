import AutoPlay from "./plugins/AutoPlay.js"
import AutoPause from './plugins/AutoPause.js'
import MediaPlayer from './MediaPlayer.js'

document.addEventListener('DOMContentLoaded', function() {  //Espera a que el documento cargue todo el contenido

    const video = document.querySelector('video')
    const player = new MediaPlayer({el: video, plugins: [
        new AutoPlay(),
        new AutoPause()
    ]})

    const button = document.querySelector('button')
    button.onclick = () => player.togglePlay()    
    // button.onclick = () => player.mute()
    player.initPlugins()
});
