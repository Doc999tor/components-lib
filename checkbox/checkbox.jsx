import React from 'react'

import './checkbox.styl'

export const Checkbox = ({ value, onHandleChange, text }) => (
  <label className='shared_checkbox_wrap'>
    <input className='shared_checkbox' type='checkbox'
      checked={value}
      onChange={onHandleChange}
    />
    <p className='shared_checkbox_label'>
      {text}
    </p>
  </label>
)
