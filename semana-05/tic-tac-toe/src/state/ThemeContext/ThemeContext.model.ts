import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    palette: ColorPalette;
  }
}

export interface ColorPalette {
  primary: string;
  secondary: string;
  lightGray: string;
  regularGray: string;
  darkGray: string;
}
