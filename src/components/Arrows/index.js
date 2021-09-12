import React from 'react'
import { Box, Grid } from '@material-ui/core';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const containerStyle = {
  width: "44rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
}

const itemStyle = {
  cursor: "pointer",
  height: "60px",
  width: "60px",

}

const Arrows = () => {

  const handleTop = () => {
    console.log("handleTop")
  }

  const handleLeft = () => {
    console.log("handleLeft")
  }

  const handleStop = () => {
    console.log("handleStop")
  }

  const handleRight = () => {
    console.log("handleRight")
  }

  const handleBottom = () => {
    console.log("handleBottom")
  }


  return (
    <div style={containerStyle}>
      <div>
        <KeyboardArrowUpIcon style={itemStyle} onClick={handleTop}/>
      </div>
      <div>
        <KeyboardArrowLeftIcon style={itemStyle} onClick={handleLeft}/>
        <RadioButtonUncheckedIcon style={itemStyle} onClick={handleStop} />
        <KeyboardArrowRightIcon style={itemStyle} onClick={handleRight}/>
      </div>
      <div>
        <KeyboardArrowDownIcon style={itemStyle} onClick={handleBottom} />
      </div>
    </div>
  )
}

export default Arrows
