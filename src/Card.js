import data from "./data.js"


export default function Card (props)
{ return (
    <div className="container">
        <img src={props.imageUrl} />
        <div class="info">
            <div className="location">
                <img src="icon" />
                <p>{props.location}</p>
                <p>{props.googleMapsUrl}</p>
            </div>
            <p>{props.startDate} - {props.endDate}</p>
            <p>{props.description}</p>
        </div>
    </div>)

}