import React from 'react'
import styled from 'styled-components'

const ActivityItemStyled = styled.article`
  border: 1px solid;
  border-radius: 8px;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 'header header' 'image description' 'date date';
  .activity-wrapper {
    padding: .5rem;
  }
  .activity-title {
    grid-area: header;
  }
  .activity-desc {
    grid-area: description;
  }
  .date {
    grid-area: date;
    font-style: italic;
    font-size: 12px;
  }
  .evidence {
    grid-area: image;
    img {
      height: 100px;
      width: 100%;
      object-fit: cover;
    }
  }
  p, h4 {
    font-size: 14px;
    line-height: 16px;
    -webkit-line-clamp: 5;
  }
  p, .activity-title {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }
  .activity-title, .date {
    text-align: center;
    color: #283E71;
  }
  .activity-title {
    -webkit-line-clamp: 2;
  }
  .activity-wrapper, .activity-title {
    padding: .28rem;
  }
  @media screen and (min-width: 550px) {
    p {-webkit-line-clamp: 6;}
  }
  @media screen and (min-width: 768px) {
    min-height: 380px;
    min-width: 410px;
    margin-right: 20px;
    display: block;
    &:last-child {
      margin-right: 0;
    }
    p {
      display: block;
      font-size: 15px;
      font-family: Montserrat, system-ui, sans-serif;
      line-height: 21px;
    }
    h4, .date {
      font-size: initial;
    }
    .evidence, .evidence img {
      height: 200px;
    }
    .activity-wrapper, .activity-title {
      padding: .5rem .5rem .3rem;
    }
  }
  `

function ActivityItem({ title, evidence, description, date }) {
  function handleClick() {
    alert(`Descripción: ${description}`)
  }
  return (
    <ActivityItemStyled>
      <h4 className="activity-title">{title}</h4>
      <figure className="evidence">
        <img src={evidence} alt="practica 1" />
      </figure>
      <div className="activity-desc">
        <div className="activity-wrapper">
          <p onClick={handleClick}><strong>Descripción: </strong>{description}</p>
        </div>
      </div>
      <h5 className="date">
        {date}
      </h5>
    </ActivityItemStyled>
  )
}

export default ActivityItem