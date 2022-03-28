import { BrowserRouter, Route, Routes } from "react-router-dom";
import GameView from "../views/Game";
import HomeView from "../views/Home";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/game" element={<GameView />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
