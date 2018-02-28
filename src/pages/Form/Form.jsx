import React, { Component } from 'react'

import Renderer from './Components/FormRender'


const getValue = e => {
  const t = e.target
  if (t.type === 'checkbox') return t.checked
  if (t.type === 'number') return parseInt(t.value, 10)
  return t.value
}


class ReservationForm extends Component {

  state = {
    isGoing: true,
    numberOfGuests: 2,
    allergies: ''
  }

  onChangeField = event => {
    this.setState({  //ES6 computed property name
      [event.target.name]: getValue(event)
    })
  }

  render() {
    return (
      <div>
        <h1>Form test</h1>

        <Renderer
          handleChange={this.onChangeField}
          data={this.state} />

      </div>
    )
  }
}

export default ReservationForm


