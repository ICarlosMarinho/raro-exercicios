export interface CellProps {
  row: number;
  column: number;
  children: "X" | "O" | null;
}
