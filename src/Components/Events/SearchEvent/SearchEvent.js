import React from 'react'
import './SearchEvent.css'

export default function SearchEvent() {
  return (
    <div className='searchEventContainer'>
      <form className='formContainer'>
        <label className='label'>
          Search Event
        </label>

        <div className='selectContainer'>
          <select className='selectInput'>
            <option>VR EVENT</option>
            <option>VR EVENT</option>
            <option>VR EVENT</option>
            <option>VR EVENT</option>
            <option>XR EVENT</option>
          </select>
        </div>
      </form>
      <form className='formContainer'>
        <label className='label'>
          Place
        </label>

        <div className='selectContainer'>
          <select className='selectInput'>
            <option>Indonesia</option>
            <option>Brasil</option>
          </select>
        </div>
      </form>
      <form className='formContainer'>
        <label className='label'>
          Time
        </label>


        <div className='selectContainer'>
          <select className='selectInput'>
            <option>Any date</option>
            <option>Today</option>
          </select>
        </div>
      </form>
    </div>
  )
}