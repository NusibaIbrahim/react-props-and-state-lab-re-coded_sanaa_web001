import React from 'react'

const Pet = ({ pet, onAdoptPet }) => {
  //const { onAdoptPet } = props
  // destructure this.props.pet
  const { 
    id, 
    gender, 
    age, 
    name, 
    type, 
    weight, 
    isAdopted 
  } = pet

  const alreadyAdoptedButton = <button className="ui disabled button">Already adopted</button>
  const adoptPetButton = <button className="ui primary button" onClick={() => onAdoptPet(id)}>Adopt pet</button>
  //const button = isAdopted ? alreadyAdoptedButton : adoptPetButton

  return (
    <div className="card">
      <div className="content">
        <a className="header" href="/">
          {/*'♀' OR '♂' */}
          {gender === 'female' ? '♀' : '♂'}
          {name}
        </a>
        <div className="meta">
          <span className="date">{type}</span>
        </div>
        <div className="extra content">
          <button className="ui disabled button">Already adopted</button>
          <button className="ui primary button">Adopt pet</button>
        </div>
      </div>
    )
  }
}

export default Pet
