import { Box, Grid, Typography,Divider,TextField } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import Image from 'next/image'
import AvatarBox from '../Avatar2';

export default function MessageBox() {
  const totalwidth=60;
  const totalheight=60;
  return (
    <Box sx={{margin:'5rem 0'}}>
       <Grid container justifyContent='center'>
          <Grid item xs={3} sx={{height:'600px',margin:'0 0.5rem',overflow:'scroll',backgroundColor:'#b2bdef21',border:'1px solid #edd9d9', borderRadius:'4px'}}>
            <Box sx={{width:'100%',height:'90px',margin:'0.4rem 0',borderBottom:'1px solid #edd9d9',borderTop:'1px solid #edd9d9',backgroundColor:'white',display:'flex',alignItems:'center',cursor:'pointer'}}>
                <AvatarBox mwidth={totalwidth} mheight={totalheight}/>
                <Box sx={{margin:'0 0.5rem'}}>
                <Typography variant='h6'>JAMSHAID KHAN</Typography>
                <Typography variant='p'>NOOB DEV MBBS</Typography>
                </Box>
            </Box>
              
          </Grid>
          <Grid item xs={7} sx={{height:'600px',margin:'0 0.5rem',overflow:'scroll',backgroundColor:'#b2bdef21',border:'1px solid #edd9d9', borderRadius:'4px'}}>
               
               <Box sx={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',width:'100%',height:'100%'}}>
                <Typography variant='h5' textAlign='center'>Start Chat To Get Started!</Typography>
                <Image
                src='/Assests/message.gif'
                width={400}
                height={300}
                alt='MESSAGE BOX'/>
               </Box>

               {/* GETTING STARTED TO CHAT */}
                
               {/* <Box display='flex' alignItems='center' m='1rem'> 
                <AvatarBox mwidth={totalwidth} mheight={totalheight}/>
                <Box>
                 <Typography variant='h6' sx={{margin:'0 1rem'}}>Jamshaid Khan</Typography>
                 <Typography variant='p' sx={{margin:'0 1rem'}}>NOOB DEV</Typography>
                </Box>
               </Box>
                 <Divider textAlign='center' sx={{color:'grey'}}>Chat</Divider>

                 <Box display='flex' alignItems='end' sx={{height:'450px'}}>
                 <TextField id="outlined-basic" label="Type Message To Send" variant="outlined" sx={{width:'80%',marginLeft:'4rem'}} />
                 
                <SendIcon fontSize='large' sx={{margin:'0 1rem 0.8rem 1rem',color:'blue', cursor:'pointer'}}/>
                 </Box> */}
          </Grid>
       </Grid>
    </Box>
  )
}
