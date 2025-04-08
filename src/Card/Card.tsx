import "./Card.css";
import { useState } from 'react';

interface Props {
    title: string;
    speciality: string;
    imgSrc: string;
    description: string;
    etudes: string;
    salaire: string;
    bgColor?: string;
}

function Card({ title, speciality, imgSrc, description, etudes, salaire, bgColor }: Props) {
    const [metierInfo, setMetierInfo] = useState(false);
    function handleText() {
        setMetierInfo(!metierInfo); // <-- inverse la valeur (true/false)
        if (useState() ? false : true)
            return false
    }
    return (
        <figure className="card" style={{ backgroundColor: bgColor || "#f0f0f0" }} onClick={handleText}>

            <img src={imgSrc} />
            <figcaption>
                <h2>{title}</h2>
            </figcaption>

            {metierInfo ? (null) : (
                <section className="info">
                    <p>{description}</p>
                    <p>{etudes}</p>
                    <p>{salaire}</p>
                </section>
            )}
        </figure>
    );
};

export default Card;