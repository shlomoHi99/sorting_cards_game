import { createBrowserRouter } from "react-router-dom";
import MainScreen from "./components/MainScreen/MainScreen";

const router = createBrowserRouter([{ path: "/", element: <MainScreen /> }]);

export default router;
