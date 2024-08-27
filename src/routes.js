import { createBrowserRouter } from "react-router-dom";

import Add from "./layouts/Add";
import Edit from "./layouts/Edit";
import Home from "./layouts/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/edit/:personId",
    element: <Edit />,
  },
  {
    path: "/new",
    element: <Add />,
  },
]);

export default router;
