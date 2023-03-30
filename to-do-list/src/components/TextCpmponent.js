import React, { useState } from 'react'

export default function TextComponent(props) {
    const{city, setCity} =useState
  return (
    <div>{props.firstName}{props.lastName} is of age {props.age}</div>
  )
}
