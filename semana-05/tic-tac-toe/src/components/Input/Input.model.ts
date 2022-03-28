export interface StyleProps {
  width?: string;
  height?: string;
}

export interface ComponentProps extends StyleProps {
  label: string;
  id: string;
}
