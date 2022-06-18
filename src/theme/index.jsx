import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#00bcd4",
      contrastText: "#fff",
    },
    secondary: {
      main: "#ff9800",
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});
export default theme;
