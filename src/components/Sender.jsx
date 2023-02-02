import React from "react";
import { TextField } from "@mui/material";



function Sender(){
    
    return (
        <TextField
            id="standard-multiline-flexible"
            placeholder="Type a message"
            multiline
            maxRows={10}
            color="primary"
            fullWidth="true"
            variant="filled"
            InputProps={{
                style: {
                    color: 'white',
                },
            }}
      />
    )
}


export default Sender;