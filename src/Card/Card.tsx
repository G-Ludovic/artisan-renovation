import "./Card.css";

interface Props {
    title: string;
    speciality: string;
    imgSrc: string;
    description: string;
    etudes: string;
    salaire: string;
}

function Card({ title, speciality, imgSrc, description, etudes, salaire }: Props) {
    return (
        <figure>
            <img src={imgSrc} />
            <h2>{title}</h2>
            <p>{element.description}</p>
            <p>{element.etudes}</p>
            <p>{element.salaire}</p>
        </figure>
    )
}

export default Card;