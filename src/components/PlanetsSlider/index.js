// Write your code here
import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className="main-bg" data-testid="planets">
      <h1 className="main-heading">PLANETS</h1>
      <Slider {...settings}>
        {planetsList.map(eachItem => (
          <PlanetItem key={eachItem.id} planetDetails={eachItem} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
