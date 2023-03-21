import './Header.css'


export default function Header() {
  return (
    <header className='header'>
      <h2 className='eventsSectionTitle'>Upcoming Events</h2>
      <form className='eventsSectionSearch'>

        <div>
          <select>
            <option>Weekdays</option>
            <option>Weekdays</option>
            <option>Weekdays</option>
          </select>
        </div>

        <div>
          <select>
            <option>Event Type</option>
            <option>Event Type</option>
            <option>Event Type</option>
            <option>Event Type</option>
          </select>
        </div>

        <div>
          <select>
            <option>Any Category</option>
            <option>Any Category</option>
            <option>Any Category</option>
            <option>Any Category</option>
          </select>
        </div>
      </form>
    </header>
  )
}