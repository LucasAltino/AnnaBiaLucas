import { useState } from "react";
import styles from "./Home.module.css";
import Timer from "./Timer";
import Carousel from "./Carousel";
import Card from "./Card";
import usePreloadMedia from "./usePreloadMedia";

function Home() {
    usePreloadMedia()
    const cards = [
        {
            title: "Aliança",
            artist: "Tribalistas",
            audioSrc: "/alianca.mp3",
            imageSrc: "/foto1.jpeg",
        },
        {
            title: "Lisboa",
            artist: "ANAVITÓRIA, Lenine",
            audioSrc: "/lisboa.mp3",
            imageSrc: "/foto2.jpeg",
        },
        {
            title: "Velha Infância",
            artist: "Tribalistas",
            audioSrc: "/velha.mp3",
            imageSrc: "/foto3.jpeg",
        },
        {
            title: "Partilhar",
            artist: "Rubel",
            audioSrc: "/partilhar.mp3",
            imageSrc: "/foto4.jpeg",
        },
        {
            title: "BB",
            artist: "Tim Bernardes",
            audioSrc: "/BB.mp3",
            imageSrc: "/foto5.jpeg",
        },
        {
            title: "Um Amor Puro",
            artist: "Djavan",
            audioSrc: "/amorpuro.mp3",
            imageSrc: "/foto6.jpeg",
        },
        {
            title: "Levo Comigo",
            artist: "Restart",
            audioSrc: "/levocomigo.mp3",
            imageSrc: "/foto7.jpeg",
        },
        {
            title: "Não Quero Dinheiro",
            artist: "Tim Maia",
            audioSrc: "/queroamar.mp3",
            imageSrc: "/foto9.jpeg",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [authorized, setAuthorized] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [error, setError] = useState("");

    const nextCard = () => {
        setCurrentIndex((prev) => (prev + 1) % cards.length);
    };

    const prevCard = () => {
        setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
    };

    const currentCard = cards[currentIndex];

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().toLowerCase() === "anna beatriz") {
            setAuthorized(true);
        } else {
            setError("Senha incorreta! Tente novamente ❤️");
        }
    };

    if (!authorized) {
        return (
            <div style={overlayStyle}>
                <form onSubmit={handleSubmit} style={formStyle}>
                    <h2 style={{color:"white"}}>Digite a senha</h2>
                    <p style={{ fontSize: "14px", color: "#ddd", marginBottom: "10px" }}>
                        Dica: É o nome da menina mais linda desse mundo 💖
                    </p>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Digite aqui..."
                        style={inputStyle}
                    />
                    <button type="submit" style={buttonStyle}>Entrar</button>
                    {error && <p style={{ color: "pink", marginTop: "10px" }}>{error}</p>}
                </form>
            </div>
        );
    }

    return (
        <div className={styles.principal}>
            <Card
                key={currentCard.title}
                title={currentCard.title}
                artist={currentCard.artist}
                audioSrc={currentCard.audioSrc}
                imageSrc={currentCard.imageSrc}
                onNext={nextCard}
                onPrev={prevCard}
            />

            <div className={styles.cardtempo}>
                <div className={styles.fotinha}>
                    <p>Sobre o casal</p>
                </div>
                <div className={styles.timer}>
                    <p className={styles.nome}>Lucas e Anna Beatriz</p>
                    <h3>Juntinhos há:</h3>
                    <Timer />
                </div>
            </div>

            <Carousel />

            <div className={styles.data}>
                <img src="/fotodata.png" alt="" />
                <p>26 / 08 / 2025</p>
            </div>

            <div className={styles.carta}>
                <p>
                    Desde que te encontrei, Deus tem me ensinado de forma cada vez mais profunda sobre o amor,
                    aquele amor que acalma, que inspira, que faz o coração bater mais forte só de pensar em você.
                    <br /><br />
                    Amor, existe algo em você que me cativa de um jeito único, algo que não sei explicar,
                    mas que me faz me apaixonar mais e mais a cada dia. É como se tudo em mim encontrasse paz
                    quando estou com você. A vida, desde então, ficou mais bonita, até poque como já disse nosso querido amigo Rubel,
                    “A vida é boa, mas é muito melhor com você”.
                </p>
                <p style={{ margin: 0, marginLeft: "21%" }}>Do seu eterno namorado,</p>
                <p>Lucas Altino</p>
            </div>
        </div>
    );
}

/* Estilos inline da tela de senha */
const overlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    background: "rgba(0, 0, 0, 0.9)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    zIndex: 9999,
};

const formStyle = {
    background: "#222",
    padding: "40px",
    borderRadius: "12px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    boxShadow: "0 0 20px rgba(255,255,255,0.1)",
};

const inputStyle = {
    padding: "10px 15px",
    borderRadius: "6px",
    border: "1px solid #555",
    background: "#333",
    color: "#fff",
    marginBottom: "10px",
    outline: "none",
    width: "200px",
    textAlign: "center",
};

const buttonStyle = {
    background: "#e03b6d",
    border: "none",
    padding: "10px 20px",
    borderRadius: "6px",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "0.2s",
    marginTop:"3vw"
};

export default Home;
