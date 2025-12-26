import './InfoCard.css'

type Props = {title: string, text: string}
export default function InfoCard(props: Props) {
    return (
        <div className="info-card-container">
            <h4>{props.title}</h4>
            <p>{props.text}</p>
        </div>
    );
}