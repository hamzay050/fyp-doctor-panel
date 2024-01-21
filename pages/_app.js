import AppLayout from "@/component/Layout/AppLayout";
import GlobalSnackbar from "@/component/SnackBar";
import AppContextProvider from "@/context/appContext";
import ProfileContextProvider from "@/context/profileContext";
import "@/styles/globals.css";
import { createTheme, colors, ThemeProvider, CssBaseline } from "@mui/material";
import SimpleBackdrop from "@/component/SimpleBackdrop";
export default function App({ Component, pageProps }) {
  const theme = createTheme({
    palette: {
      primary: {
        main: colors.teal[400],
      },
      secondary: {
        main: colors.orange[300],
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppContextProvider>
        <GlobalSnackbar />
        <SimpleBackdrop />
        <ProfileContextProvider>
          <AppLayout>
            <Component {...pageProps} />
          </AppLayout>
        </ProfileContextProvider>
      </AppContextProvider>
    </ThemeProvider>
  );
}
