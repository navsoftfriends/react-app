import React from 'react'
import './person.css'
export const Person = (props) => {
    return (
        <div className="person">
            <p onClick={props.clickMe}>I am {props.name} and my age {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
}
export default Person
