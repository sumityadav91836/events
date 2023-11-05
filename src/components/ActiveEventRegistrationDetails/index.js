import './index.css'

const ActiveEventRegistrationDetails = props => {
  const {registrationStatus} = props
  const {registrationResult} = registrationStatus

  console.log(registrationResult)
  return (
    <li className="list-items">
      <h1>Hello World !</h1>
    </li>
  )
}

export default ActiveEventRegistrationDetails
