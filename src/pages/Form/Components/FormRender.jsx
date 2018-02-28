import React from 'react'
import { PropTypes as T } from 'prop-types'


// stateless functional component example

const FormRender = ({ data, handleChange }) =>
  <form style={{ width: '50%' }}>
    <label>
      Is going:
      <input
        name="isGoing"
        type="checkbox"
        checked={data.isGoing}
        onChange={handleChange} />
    </label>

    <label>
      Number of guests:
        <input
        style={{ width: '50px' }}
        name="numberOfGuests"
        type="number"
        value={data.numberOfGuests}
        onChange={handleChange} />
    </label>

    <label>
      Allergies
        <input
        style={{ width: '100px' }}
        name="allergies"
        type="text"
        value={data.allergies}
        onChange={handleChange} />
    </label>
  </form>


const propData = {
  isGoing: T.bool.isRequired,
  numberOfGuests: T.number.isRequired,
  allergies: T.string.isRequired
}

FormRender.propTypes = {
  handleChange: T.func.isRequired,
  data: T.shape(propData).isRequired
}

export default FormRender
