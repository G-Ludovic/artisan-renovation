import "./Card.css";

interface Props {
    title : string;
    speciality: string;
    imgSrc: string;
}

function Card ({ title, speciality, imgSrc }: Props) {
    return (
        <figure>
            <img src={imgSrc}/>
            <h1>{title}</h1>
        </figure>
    )
}

export default Card;