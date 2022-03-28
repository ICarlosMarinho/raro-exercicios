import { FC, InputHTMLAttributes, useRef, useState } from "react";
import { ComponentProps } from "./Input.model";
import { Container, StyledInput, StyledLabel } from "./Input.style";

const Input: FC<ComponentProps & InputHTMLAttributes<HTMLInputElement>> = ({
  width,
  height,
  label,
  id,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <Container width={width} height={height}>
      <StyledLabel inputFocus={isFocused} htmlFor={id}>
        {label}
      </StyledLabel>
      <StyledInput onFocus={handleFocus} onBlur={handleBlur} id={id} {...rest} />
    </Container>
  );
};

export default Input;
