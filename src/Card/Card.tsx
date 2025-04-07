import "./Card.css";

interface CardProps {
    title : string;
    speciality: string;
    imgSrc: string;
    bgColor?: string;
}

const Card = ({ title, imgSrc, bgColor }: CardProps) => {

    return (
        <figure className="card" style={{ backgroundColor: bgColor || "#f0f0f0"}}>
            <img src={imgSrc}/>
            <figcaption>
                <h2>{title}</h2>
            </figcaption>
        </figure>
    );
};

export default Card;