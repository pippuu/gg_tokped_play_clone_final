// import * as React from 'react';
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "./App.css";
import Homepage from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VideoDetail from "./pages/VideoDetail";

const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: "",
      },
    }),
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/video/:id" element={<VideoDetail />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
