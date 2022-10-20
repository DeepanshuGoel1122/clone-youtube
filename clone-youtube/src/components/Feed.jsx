import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";

import Sidebar from "./Sidebar";


const feed = () => {
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>

    <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2}}}>

    <Sidebar />

    <Typography className="copyright" varient="body2" sx={{ mt: 1.5, color: "#fff"}}>
        Copyright deepu 2022
    </Typography>

    </Box>

    </Stack>
  )
}

export default feed