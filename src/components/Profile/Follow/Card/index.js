import React from 'react'

 const Card = ({name, value}) => {
    return (
        <div>
            <p style = {{color: 'red'}}>{value}</p>
            <p>{name}</p>
        </div>
    )
}
export default Card 