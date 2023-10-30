import '@/styles/globals.css'
import { createTheme,colors,ThemeProvider } from '@mui/material'

export default function App({ Component, pageProps }) {
  const theme=createTheme({
    palette:{
      primary:{
        main:colors.teal[400],
      },
      secondary:{
        main:colors.orange[300],
      }
    }
  })

  return(
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    
    ) 
}
