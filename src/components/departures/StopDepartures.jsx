import React from 'react'
import broadcastIcon from '../../assets/broadcast-blue.svg'

export default function StopDepartures({ nextTrips: { departures } }) {
  return departures ? (
    <div className="stop-departures">
      <table className="table departures-table">
        <thead>
          <tr>
            <th className="route">Route</th>
            <th className="destination">Destination</th>
            <th className="departs text-right">Departs</th>
          </tr>
        </thead>
        <tbody>
          {departures.length > 0 &&
            departures.map(
              ({
                trip_id,
                actual,
                route_short_name,
                description,
                departure_text,
              }) => (
                <tr
                  key={trip_id}
                  className="departure"
                  style={{ display: 'table-row' }}
                >
                  <td className="route-number mr-2">{route_short_name}</td>
                  <td className="route-name">{description}</td>

                  <td className="depart-time ml-auto">
                    {actual && (
                      <img
                        className="icon blink mr-1"
                        src={broadcastIcon}
                        alt="broadcast icon"
                      />
                    )}
                    <span>{departure_text}</span>
                  </td>
                </tr>
              )
            )}

          {!departures.length && (
            <tr>
              <td class="no-departures-msg" colspan="3">
                <strong>No departures at this time</strong>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  ) : null
}
