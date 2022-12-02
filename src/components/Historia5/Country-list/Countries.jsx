import React, { useState, useEffect, useMemo } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'

function Countries() {
  const [value, setValue] = useState('')
  const options = useMemo(() => countryList().getData(), [])

  const changeHandler = value => {
    setValue(value)
  }

  return <Select options={options} value={value} onChange={changeHandler} className="select_button" />
}
