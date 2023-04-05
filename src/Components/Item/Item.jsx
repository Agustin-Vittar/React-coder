import React from 'react'

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const Item = ( {element} ) => {
  return (
    
      <Card
      sx={{
        width: 345,
        height: 370,
        backgroundColor: "black",
        color: "#eb6ad59a",
        border: "1px solid black",
        borderRadius: "10px",
        boxShadow: "0px 0px 10px #eb6ad59a"
      }}
    >
      <CardMedia
        sx={{ height: 160}}
        image={element.img}
        title={element.title}
      />
      <CardContent sx={{textAlign: "center" }}>
        <Typography gutterBottom variant="h5" component="div" align="center">
          {element.title}
        </Typography>
        <Typography variant="body">Precio: ${element.price}</Typography>
      </CardContent>
      <CardActions >
        <div style={{width: "100%", display: "flex", justifyContent: "center", marginTop: "60px"}}>
          <Link style={{textDecoration: "none"}} to={`/itemDetail/${element.id}`}>
            <Button size="small" variant="contained" color="secondary" >
              Ver detalle
            </Button>
          </Link>
        </div>
        
      </CardActions>
    </Card>
    
    
  );
  
}

export default Item