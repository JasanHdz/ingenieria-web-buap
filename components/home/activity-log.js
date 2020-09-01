import React, { useState } from 'react'
import styled from 'styled-components'
import ActivityItem from 'components/home/activity-item'
import SearchActivity from 'components/home/search-activity'
import ListEmpty from 'components/home/list-empty'
import activitiesArray from 'activities.json'

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
function filterActivities(activity, value) {
  if (
    activity.title.toLowerCase().includes(value.toLowerCase()) ||
    activity.description.toLowerCase().includes(value.toLowerCase()) ||
    activity.date.toLowerCase().includes(value.toLowerCase()) ||
    activity.link.toLowerCase().includes(value.toLowerCase())
  ) return activity
}

function ActivityLog() {
  const [activities, setActivities] = useState([...activitiesArray])
  const [inputValue, setInputValue] = useState('')
  const handleInputChange = event => {
    const value = event.target.value
    setInputValue(value)
    setActivities(activitiesArray.filter(item => filterActivities(item, value)))
  }
  return (
    <ActivityLogStyled id="activities">
      <h2>Actividades</h2>
      <SearchActivity
        inputHandleChange={handleInputChange}
        inputValue={inputValue}
      />
      <div className="activities-grid">
        {activities && (activities.map((activity, index) => (
          <ActivityItem
            key={index}
            title={activity.title}
            evidence={activity.evidence}
            description={activity.description}
            date={activity.date}
            link={activity.link}
            name={activity.linkName}
          />
        )))}
        {!activities.length && <ListEmpty />}
      </div>
    </ActivityLogStyled>
  )
}

export default ActivityLog