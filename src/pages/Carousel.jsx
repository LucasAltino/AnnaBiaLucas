import { useState, useEffect } from "react";
import styles from "./Carousel.module.css";

function Carousel() {
    const images = [
        "/foto3.webp",
        "/foto1.webp",
        "/foto2.webp",
        "/foto4.webp",
        "/foto5.webp",
        "/foto6.webp",
        "/foto7.webp",
        "/foto8.webp",
    ];

    const [index, setIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    // Muda a imagem automaticamente a cada 5s
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => {
        setIndex((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    // Armazena o início do toque
    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    // Atualiza o ponto de fim do toque
    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    // Verifica a direção ao soltar o dedo
    const handleTouchEnd = () => {
        if (touchStart - touchEnd > 50) {
            // arrastou para a esquerda → próximo slide
            nextSlide();
        }
        if (touchStart - touchEnd < -50) {
            // arrastou para a direita → slide anterior
            prevSlide();
        }
    };

    return (
        <div
            className={styles.carousel}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <img
                src={images[index]}
                alt={`Slide ${index + 1}`}
                className={styles.image}
            />
            <div className={styles.dots}>
                {images.map((_, i) => (
                    <span
                        key={i}
                        className={`${styles.dot} ${i === index ? styles.active : ""}`}
                    />
                ))}
            </div>
        </div>
    );
}

export default Carousel;
