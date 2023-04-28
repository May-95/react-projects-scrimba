export default function Card(props) {
  return (
    <section className="card-section">
      <div className="image-section">
        <img src={props.item.imageUrl} alt="" className="location-img" />
      </div>
      <div className="main-section">
        <div className="location-section">
          <i
            className="fa-solid fa-location-dot fa-sm location-pin"
            style={{ color: "#F55A5A" }}
          ></i>
          <p className="location-country">{props.item.location}</p>
          <a className="maps-link" href={props.item.googleMapsUrl}>
            View on Google Maps
          </a>
        </div>
        <h2 className="location-title">{props.item.title}</h2>
        <h3 className="location-date">
          {props.item.startDate} – {props.item.endDate}
        </h3>
        <p className="location-description">{props.item.description}</p>
      </div>
    </section>
  );
}
