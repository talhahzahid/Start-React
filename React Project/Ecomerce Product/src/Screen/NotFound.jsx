import { Box , Typography } from '@mui/material'
import React from 'react'

const NotFound = () => {
  return (
   <Box sx={{
    height:"90vh",
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
   }}>
            <Typography variant='h1'>Not Found</Typography>

   </Box>
  )
}

export default NotFound