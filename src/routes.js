import { createBrowserRouter } from "react-router-dom";

import Edit from "./layouts/Edit";
import Home from "./layouts/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/test",
    element: <Edit />,
  },
]);

export default router;
