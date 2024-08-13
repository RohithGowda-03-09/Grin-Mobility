import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomePage from "./Screens/Home";
import RideWithUs from "./Screens/RideWithUs";
import Desktop3 from "./Screens/Desktop3";
import Desktop2 from "./Screens/Desktop2";
import Maps from "./components/Maps";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/RideWithUs":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-5":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-4":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Maps" element={<Maps />} />
      <Route path="/RideWithUs" element={<RideWithUs />} />
      <Route path="/desktop-5" element={<Desktop3 />} />
      <Route path="/desktop-4" element={<Desktop2 />} />
    </Routes>
  );
}
export default App;
