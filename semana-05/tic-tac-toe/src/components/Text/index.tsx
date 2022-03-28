import { FC } from "react";
import { ComponentProps } from "./Text.model";
import { StyledText } from "./Text.style";

const Text: FC<ComponentProps> = ({ children, type }) => <StyledText type={type}>{children}</StyledText>;

export default Text;
