import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import About from "./pages/about";
import RootLayout from "./pages/rootlayout";
import ErrorBoundary from "./pages/errorpage";
import Home from "./pages/home";
import Research from "./pages/research";

const App = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />} errorElement={<ErrorBoundary />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/research" element={<Research />} />
    </Route>
  )
);

export default App;
