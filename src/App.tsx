import { RouterProvider } from "react-router";
import { router } from "@/routing/router";

import "@styles/style.scss";

function App() {
	return <RouterProvider router={router} />;
}

export default App;
