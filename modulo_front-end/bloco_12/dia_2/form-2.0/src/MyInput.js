import React, { Component } from 'react';

class MyInput extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <div>
        <fieldset>
          <label>
            Nome:
            <input type="text" name="nome" value={value} onChange={handleChange}/>
          </label>
        </fieldset>
      </div>
    )
  }
}

export default MyInput;