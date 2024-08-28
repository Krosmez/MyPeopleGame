import { createBrowserRouter } from "react-router-dom";

import Add from "./layouts/Add";
import Edit from "./layouts/Edit";
import Home from "./layouts/Home";
import Person from "./layouts/Person";

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
    path: "/view/:personId",
    element: <Person />,
  },
  {
    path: "/new",
    element: <Add />,
  },
]);

export default router;
