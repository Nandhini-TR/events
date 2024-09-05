import './index.css'

const registrationStatusViews = {
  YET_TO_REGISTER: {
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/events-register-img.png',
    altText: 'yet to register',
    description:
      'A live performance brings so much to your relationship with dance. See you there!',
    buttonText: 'Register Here',
  },
  REGISTERED: {
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/events-regestered-img.png',
    altText: 'registered',
    heading: 'You have already registered for the event',
  },
  REGISTRATIONS_CLOSED: {
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png',
    altText: 'registrations closed',
    heading: 'Registrations Are Closed Now!',
    description: 'Stay tuned. We will reopen this registration soon!',
  },
}

const ActiveEventRegistrationDetails = props => {
  const {status} = props
  const {imageUrl, altText, description, buttonText, heading} =
    registrationStatusViews[status]
  return (
    <div className="registration-status-container">
      <img src={imageUrl} alt={altText} className="registration-status-img" />
      {heading && <h1 className="registration-status-heading">{heading}</h1>}
      {description && (
        <p className="registration-status-description">{description}</p>
      )}
      {buttonText && (
        <button type="button" className="register-button">
          {buttonText}
        </button>
      )}
    </div>
  )
}

export default ActiveEventRegistrationDetails
