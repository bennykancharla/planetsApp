// Write your code here
import './index.css'

const PlanetItem = props => {
  const {planetDetails} = props
  const {name, imageUrl, description} = planetDetails
  return (
    <div className="planets-container">
      <img className="image" src={imageUrl} alt={`planet ${name}`} />
      <h1 className="planet-heading">{name}</h1>
      <p className="planet-desc">{description}</p>
    </div>
  )
}

export default PlanetItem
