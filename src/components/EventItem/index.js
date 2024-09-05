import './index.css'

const EventItem = props => {
  const {eventsList, renderEvent} = props
  const {registrationStatus, imageUrl, name, location} = eventsList

  const onClickImage = () => {
    renderEvent(registrationStatus)
  }

  return (
    <li className="list-container">
      <button onClick={onClickImage} className="image-button">
        <img src={imageUrl} alt="event" className="event-img" />
      </button>
      <p className="event-name">{name}</p>
      <p className="event-location">{location}</p>
    </li>
  )
}

export default EventItem
