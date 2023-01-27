import React from 'react'
import "../home.scss";
import paperIcon from "../../images/Paper.svg"

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
            <div className="copy-icon" onClick={() => navigator.clipboard.writeText(data)}>
                <img src={paperIcon} alt="paper" />
                <div>Copy</div>
            </div>
        </div>
    )
}

export default List