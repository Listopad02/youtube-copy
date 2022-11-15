import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Box } from "@mui/material"
import { Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed } from "./components"

const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: "#000" }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Feed />} exact />
        <Route path="/video/:id" element={<VideoDetail />} exact />
        <Route path="/channel/:id" element={<ChannelDetail />} exact />
        <Route path="/search/:searchTerm" element={<SearchFeed />} exact />
      </Routes>
    </Box>
  </BrowserRouter>
)

export default App