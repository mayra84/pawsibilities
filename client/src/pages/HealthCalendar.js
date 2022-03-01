import React from 'react'
import DogCalendar from 'src/components/DogCalendar'
import { useSelector } from 'react-redux'
// import CalendarHero from '../components/CalendarHero'

function HealthCalendar() {
    const calendar = useSelector((state) => state.calendar)
    return (
        <div>
            <DogCalendar />
            {/* {calendar.activities.length === 0 ? (
                <CalendarHero />
            ) : (
                null
            )} */}

        </div>
    )
}

export default HealthCalendar
