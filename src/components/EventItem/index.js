import './index.css'

const EventItem = props => {
  const {eventDetails, clickingImgElement} = props
  const {id, imageUrl, name, location} = eventDetails

  const onClickImg = () => {
    clickingImgElement(id)
  }

  return (
    <li className="each-event">
      <button type="button" className="btn" onClick={onClickImg}>
        <img src={imageUrl} alt="event" className="event-img" />
      </button>
      <p className="name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}

export default EventItem
