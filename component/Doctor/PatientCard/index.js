import React from "react";
import Avatarpatient from '../Avatar2'
import {
  Button,
  CardActionArea,
  CardActions,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Link,
  Box,
  StyledBadge,
  Avatar,
} from "@mui/material";
const PatientCard = () => {
  const totalwidth=90;
  const totalheight=90;
  return (
    <Box
      sx={{
        margin:'4rem 0',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }} 
    >

      <Card sx={{ maxWidth: 355  }}>
     
        <CardActionArea    >
        <Box display="flex" justifyContent="center" alignItems="center" m='1.1rem 0' >
        <Avatarpatient mwidth={totalwidth} mheight={totalheight}   />
        </Box>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Kashif  Nadeem
            </Typography>
            <Typography>
              Birth Date : 01/01/1998 <br/>
              Sex: Male <br/>
              Contact No : 123456789 <br/>
              Consulation Type : Virtual  Consulation <br/>
              Symptoms:  Fever , Headache
            </Typography>
            
          </CardContent>
        </CardActionArea>
       
        <CardActions sx={{margin:'0.7rem'}}>
          <Link href="" style={{ textDecoration: "none" }}>
            <Button
              sx={{
                width: "150px",
                fontSize: "1rem",
              }}
              variant="contained"
            >
              APPROVE
            </Button>
          </Link>
          <Link href="" style={{ textDecoration: "none" }}>
            <Button color="secondary"
              sx={{
                width: "150px",
                fontSize: "1rem",
                color:'#fff',
              }}
              variant="contained"
            >
              REJECT
            </Button>
          </Link>
        </CardActions>
        
      </Card>
      
    </Box>
  );
};

export default PatientCard;
