import './card.css';

export default function Card(props) {
  return (
    <div className="card">
      <div className="card--img--wrapper">
        <img
          className="card--img"
          src={`https://images.unsplash.com/photo-${props.cardData.imageUrlId}?fit=crop&w=257&h=360`}
          alt={`${props.cardData.title} image`}
        />
      </div>
      <div className="card--info">
        <div className="card--location">
          <img src="marker.svg" alt="location-marker" />
          <span className="card--country">{props.cardData.location}</span>
          <a
            href={`https://goo.gl/maps/${props.cardData.googleMapsUrlId}`}
            target={'_blank'}
          >
            View on Google Maps
          </a>
        </div>
        <h1 className="card--title">{props.cardData.title}</h1>
        <div className="card--date">
          <span className="start--date">{props.cardData.startDate}</span>
          <span> &#8211; </span>
          <span className="end--date">{props.cardData.endDate}</span>
        </div>
        <article className="card--description">
          {props.cardData.description}
        </article>
        <a
          className="read--more"
          href={`https://en.wikipedia.org/wiki/${props.cardData.wikipediaId}`}
          target={'_blank'}
        >
          Read More
        </a>
      </div>
    </div>
  );
}
