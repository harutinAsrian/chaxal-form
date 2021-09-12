import React, { useState } from "react";
import Row from "./Row";
import { Box, Button } from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import axios from "axios";

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(green[900]),
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[700],
    },
  },
}))(Button);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const Form = () => {
  const classes = useStyles();
  const [rowList, setRowList] = useState([
    {
      id: 0,
      seconds: "",
      direction: "",
    },
  ]);

  const handleAddButton = (id) => {
    const newRow = {
      id: rowList[rowList.length - 1].id + 1,
      seconds: "",
      direction: "",
    };
    setRowList([...rowList, newRow]);
  };

  const handleDeleteButton = (id) => {
    const newRowList = rowList.filter((item) => item.id !== id);
    setRowList(newRowList);
  };

  const handleSubmit = () => {
    console.log(rowList.direction);
    rowList.forEach((item) => {
      setTimeout(() => {
        axios.post(`192.168.4.1/?State=${item.direction}`).then((res) => {
          console.log(res);
        });
      }, item.seconds);
    });
  };

  console.log(rowList);
  return (
    <Box
      boxShadow={3}
      bgcolor="background.paper"
      m={1}
      p={1}
      style={{ width: "44rem", height: "80vh", overflow: "auto" }}
    >
      {rowList.length &&
        rowList.map((item, i) => (
          <Row
            id={item.id}
            key={i}
            add={handleAddButton}
            remove={handleDeleteButton}
            lastItem={rowList.length - 1 === i ? true : false}
            seconds={item.seconds}
            rowList={rowList}
            setRowList={setRowList}
            direction={item.direction}
          />
        ))}
      <ColorButton
        variant="contained"
        color="primary"
        className={classes.margin}
        onClick={handleSubmit}
      >
        Submit
      </ColorButton>
    </Box>
  );
};

export default Form;
