import 'react-dates/initialize'
import React, { useState, useEffect } from 'react'
import { DateRangePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'
import './datePicker.css'
import { convertDates } from './Helper/helpers'
import moment from 'moment'


export const DateSelection = (props) => {
  const screenWidth = props.width
  const [state, setState] = useState({
    startDate: null,
    endDate: null,
  })
  const [focus, setFocus] = useState({ focusedInput: null })
  const block= true 


  useEffect(() => {
    if (state.startDate !== null && state.endDate !== null) {
      const final = convertDates(state.startDate, state.endDate)
      props.onChange(final)
    }
  }, [state])

  return (
    <div>
      <DateRangePicker
        enableOutsideDays
        startDate={state.startDate}
        startDateId="your_unique_start_date_id"
        endDate={state.endDate}
        endDateId="your_unique_end_date_id"
        onDatesChange={({ startDate, endDate }) => setState({ startDate, endDate })}
        focusedInput={focus.focusedInput}
        onFocusChange={(focusedInput) => setFocus({ focusedInput })}
        block={block}
        isOutsideRange={day => (moment().diff(day) < 0)}
      />
    </div>
  )
}
