import "./Events.css"
import EventsCard from '../../components/EventsCard/EventsCard'
import { events } from './EventData'
const Events = () => {

  return (
    < >
      <div >
      <div className="stars"></div>
          <div className="stars1"></div>
          <div className="stars2"></div>
        <div className="eventsPg">
        <div id="title">
          <h1 className=" text-center h12 fade-in">EVENTS</h1>

          {(
            <div className="cardc mb-5">
              {
                events.map((event) => {
                  return <EventsCard
                    key={event.key}
                    imageUrl={event.imageUrl}
                    shortname={event.shortname}
                    eventName={event.eventName}
                    details={event.details}
                    timings={event.timings}
                    rules={event.rules}
                    contact={event.contact}
                  />
                })
              }
            </div>

          )


          }
</div>
        </div>
        
      </div>
    </>
  )
}

export default Events