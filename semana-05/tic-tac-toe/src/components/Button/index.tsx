import { FC, ButtonHTMLAttributes } from "react";
import { StyleProps } from "../Input/Input.model";

import { StyledButton } from "./Button.style";

const Button: FC<ButtonHTMLAttributes<HTMLButtonElement> & StyleProps> = ({ children, ...rest }) => (
  <StyledButton {...rest}>{children}</StyledButton>
);

export default Button;
