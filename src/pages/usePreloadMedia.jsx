import { useEffect } from "react";

function usePreloadMedia() {
    useEffect(() => {
        const images = [
            "/foto1.jpeg",
            "/foto2.jpeg",
            "/foto3.jpeg",
            "/foto4.jpeg",
            "/foto5.jpeg",
            "/foto6.jpeg",
            "/foto7.jpeg",
            "/foto9.jpeg",
            "/fotodata.png",
        ];

        const audios = [
            "/alianca.mp3",
            "/lisboa.mp3",
            "/velha.mp3",
            "/partilhar.mp3",
            "/BB.mp3",
            "/amorpuro.mp3",
            "/levocomigo.mp3",
            "/queroamar.mp3",
        ];

        // Pré-carregar imagens
        images.forEach((src) => {
            const img = new Image();
            img.src = src;
        });

        // Pré-carregar músicas (carrega apenas o header, não toca)
        audios.forEach((src) => {
            const audio = new Audio();
            audio.src = src;
            audio.preload = "auto";
        });
    }, []);
}

export default usePreloadMedia;
