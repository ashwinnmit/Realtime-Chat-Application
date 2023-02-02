import { Avatar, Typography } from "@mui/material";
import React from "react";

import {Box} from "@mui/material";
import { Stack } from "@mui/system";


function Header(){
    return (
        <Box style={{display:"flex",justifyContent:"stretch",width:"70vw",marginTop:"10px"}}>
            <Stack direction="row" spacing={2}>
                <Avatar src="../assets/pattern.svg"/>
                <Typography variant="h5" style={{color:"white"}}>Ashwin</Typography>
            </Stack>
        </Box>
    )
}


export default Header;