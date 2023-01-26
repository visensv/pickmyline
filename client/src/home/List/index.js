import React from 'react'
import "../home.css";

function List({pickupLines}) {
  return (
      <div className={"list-container"}>
          {pickupLines && pickupLines.length ?
              pickupLines.map((item) => <Card data={item.split('. ')[1]}/>)
                : null}
    </div>
  )
}

function Card({data}) {
    return (
        <div className={"card-item"}>
            <div>{data}</div>
            <div>
            <div onClick={() =>  navigator.clipboard.writeText(data)}>Copy</div>
            </div>
        </div>
    )
}

export default List