import React from 'react'
import { Box, Typography } from '@mui/material'

const About = () => {
  return (
    <>
    <Typography variant='h4' className='text-center mt-4'>About Us</Typography>
     <Box sx={{
      height:"70vh",
      display:"flex",
      justifyContent:"center",
      alignItems:"center"
     }}>
      <Typography className='container'  >Elevate your wardrobe with our latest collection of clothing, where style meets comfort. Each piece is crafted from high-quality fabrics and designed with attention to detail, offering a perfect blend of timeless elegance and modern trends. Whether you're dressing for a casual day out or a formal event, our clothing ensures you look and feel your best. Explore our range to find versatile, chic options that enhance your everyday wardrobe.</Typography>
    </Box>
    </>
  )
}

export default About