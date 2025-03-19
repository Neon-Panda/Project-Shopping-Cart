import "./App.css";
import routes from "./Routes.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DataProvider } from "./Context/DataContext.jsx";

const router = createBrowserRouter(routes);

function App() {
  return (
    <DataProvider>
      <RouterProvider router={router} />
    </DataProvider>
  );
}

export default App;
