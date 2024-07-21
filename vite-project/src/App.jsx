import React, { useEffect, useState } from "react";

import AllRoutes from "./components/AllRoutes";
import Navbarr from "./components/Navbarr";
import Footer from "./components/Footer";
import Popup from "./components/Popup";

const App = () => {
  const [popup, setpopup] = useState(false);

  useEffect(() => {
    setpopup(true);

    return () => {
      setpopup(false);
    };
  }, []);

  return (
    <>
      <Navbarr />
      <AllRoutes />

      <Footer />
      {popup && <Popup />}
    </>
  );
};

export default App;
