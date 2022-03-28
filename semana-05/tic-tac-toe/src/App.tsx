import AppRoutes from "./routes";
import GameContextProvider from "./state/GameContext";
import ThemeContextProvider from "./state/ThemeContext";
import { ResetStyle } from "./style";

const App = () => (
  <ThemeContextProvider>
    <GameContextProvider>
      <ResetStyle />
      <AppRoutes />
    </GameContextProvider>
  </ThemeContextProvider>
);

export default App;
