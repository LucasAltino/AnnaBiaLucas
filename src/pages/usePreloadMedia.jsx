import { useEffect } from "react";

function usePreloadMedia() {
    useEffect(() => {
        const images = [
            "/foto1.webp",
            "/foto2.webp",
            "/foto3.webp",
            "/foto4.webp",
            "/foto5.webp",
            "/foto6.webp",
            "/foto7.webp",
            "/foto9.webp",
            "/fotodata.webp",
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
