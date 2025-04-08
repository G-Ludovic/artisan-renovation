import "./Card.css";

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
    return (
        <figure className="card" style={{ backgroundColor: bgColor || "#f0f0f0" }}>

            <img src={imgSrc} />
            <figcaption>
                <h2>{title}</h2>
            </figcaption>
            <p>{description}</p>
            <p>{etudes}</p>
            <p>{salaire}</p>
        </figure>
    );
};

export default Card;