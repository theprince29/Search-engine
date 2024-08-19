import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Results from "./components/Results";
import Search from "./components/Search";
import Wave from "react-wavify";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <>
      <div className={darkTheme ? "dark" : ""}>
        <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
          <BrowserRouter>
            <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Search />
                    <Wave
                      fill="#0096FF"
                      paused={false}
                      style={{ display: "flex" }}
                      options={{
                        height: 20,
                        amplitude: 20,
                        speed: 0.15,
                        points: 3,
                      }}
                    />
                  </>
                }
              />
              <Route path="/search" element={<Results />} />
              <Route path="/videos" element={<Results />} />
              <Route path="/images" element={<Results />} />
              <Route path="/news" element={<Results />} />
              <Route
                path="*"
                element={
                  <>
                    <h1>SEARCH NOT FOUND</h1>
                  </>
                }
              />
            </Routes>
          </BrowserRouter>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
