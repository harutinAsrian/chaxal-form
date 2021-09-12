import React from 'react'
import { Box, Grid, TextField, MenuItem, InputLabel, FormControl, Select, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  dropdown: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
  secondsInput: {
    margin: theme.spacing(1)
  },
  button: {
    minWidth: 108,
  }
}));

const Row = ({ id, add, remove, lastItem, seconds, direction,rowList, setRowList }) => {
  const classes = useStyles();
  const handleChange = (e) => {
    const { value, name } = e.target
    const currentItem = rowList.filter(item => item.id === id )
    currentItem[0][name] = value
    setRowList([...rowList])
  }

  return (
    <Box borderBottom={1} display="flex">
      <Grid container spacing={1} justifyContent="space-between" alignItems="center">
        <Grid item sm={8}>
          <form noValidate autoComplete="off">
            <TextField
              id="outlined-basic"
              className={classes.secondsInput}
              label="Seconds"
              variant="outlined"
              style={{ height: 40, width: 100 }}
              name="seconds"
              value={seconds}
              onChange={handleChange}
            />
            <FormControl variant="outlined" className={classes.dropdown}>
              <InputLabel id="demo-simple-select-outlined-label">Direction</InputLabel>
              <Select
                id="demo-simple-select-outlined"
                labelId="demo-simple-select-outlined-label"
                label="direction"
                name="direction"
                value={direction}
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"F"}>FRONT</MenuItem>
                <MenuItem value={"B"}>BACK</MenuItem>
                <MenuItem value={"L"}>LEFT</MenuItem>
                <MenuItem value={"R"}>RIGHT</MenuItem>
                <MenuItem value={"S"}>STOP</MenuItem>
              </Select>
            </FormControl>
          </form>
        </Grid>
        <Grid item sm={2}>
          <Button className={classes.button} variant="contained" onClick={lastItem ? () => add() : () => remove(id)}>{lastItem ? "Add" : "Remove"}</Button>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Row
