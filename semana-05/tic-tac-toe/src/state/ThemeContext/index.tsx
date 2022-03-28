import { FC } from "react";
import { ThemeProvider, DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  palette: {
    primary: "#F22E62",
    secondary: "#0D0D0D",
    lightGray: "#B5B4D9",
    regularGray: "#7D7ABF",
    darkGray: "#393E59"
  }
};

const ThemeContextProvider: FC = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export default ThemeContextProvider;
