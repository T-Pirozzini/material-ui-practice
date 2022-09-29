import React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup'
import Container from "@mui/material/Container"
import CastleIcon from '@mui/icons-material/Castle';
import CookieIcon from '@mui/icons-material/Cookie';
import Face2Icon from '@mui/icons-material/Face2';

export default function Create() {
  return (
    <Container>      
     <Typography
        variant="h6" 
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Create a New Note
      </Typography>

      <Button onClick={() => console.log("You clicked me")} type="submit" color="secondary" variant="contained" disableElevation startIcon={<CookieIcon />} endIcon={<Face2Icon />}>
        Submit
      </Button>

      <br></br>

      <Button type="submit" color="primary">Submit</Button>
      <Button type="submit" color="secondary" variant="outlined">Submit</Button>

      <br></br>

      <ButtonGroup color="secondary" variant="contained">
        <Button>ONE</Button>
        <Button>TWO</Button>
        <Button>THREE</Button>
      </ButtonGroup>

      {/* Icons */}
      <br></br>
      <CastleIcon />
      <CastleIcon color="secondary" fontSize="large"/>
      <CastleIcon color="secondary" fontSize="small"/>
      <CastleIcon color="action" fontSize="small"/>
      <CastleIcon color="error" fontSize="small"/>
      <CastleIcon color="disabled" fontSize="small"/>

    </Container>
  )
}