import React from 'react'
import styled from 'styled-components'
import ActivityItem from 'components/home/activity-item'
import activities from 'activities.json'

const ActivityLogStyled = styled.section`
  margin: 1rem 0;
  h2 {
    font-size: 18px;
  }
  .activities-grid {
    padding: .5rem 0;
    display: grid;
    grid-template-columns: 1fr;
    overflow-x: unset;
    overflow-y: scroll;
    max-height: 500px;
    grid-row-gap: .5em;
  }
  @media screen and (min-width: 768px) {
    h2 {
      font-size: 21px;
    }
    .activities-grid {
      padding: 1rem 0;
      overflow-x: scroll;
      display: flex;
    }
  }
`

function ActivityLog() {
  return (
    <ActivityLogStyled>
      <h2>Actividades</h2>
      <div className="activities-grid">
        {activities.map((activity, index) => (
          <ActivityItem
            key={index}
            title={activity.title}
            evidence={activity.evidence}
            description={activity.description}
            date={activity.date}
          />
        ))}
      </div>
    </ActivityLogStyled>
  )
}

export default ActivityLog