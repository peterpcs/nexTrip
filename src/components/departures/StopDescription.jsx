import React from 'react'

export default function StopDescription({ nextTrips }) {
  const { stops, instance, status } = nextTrips

  const showError = status === 400

  return (
    <>
      <div className="stop-description mb-3">
        {showError && instance && (
          <p className="fail-text">
            {instance.split('/')[2]} is not a valid stop number.
          </p>
        )}
        {!showError && stops && (
          <>
            <h3 className="h2 stop-name">{stops[0].description}</h3>
            <span className="stop-number">
              <strong>Stop #: </strong>
              {stops[0].stop_id}
            </span>
          </>
        )}
      </div>
    </>
  )
}
