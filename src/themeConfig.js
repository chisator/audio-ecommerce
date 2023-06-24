import { createTheme } from "@mui/material";
export const customTheme = createTheme({
  palette: {
    primary: {
      main: "#101010",
      second: "#f1f1f1",
      negro: "#000000c2",
      blanco:"#ffffff"
    },
    secondary: {
      main: "#D87D4A",
      second: "#FBAF85",
    },
  },
});

export const customDark = createTheme({
  palette: {
    primary: {
      main: "#D87D4A",
      second: "#FBAF85",
    },
    secondary: {
      main: "#101010",
      second: "#f1f1f1",
    },
  },
});
