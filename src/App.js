import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/system";
import { Feed, Channel, SearchFeed, VideoDetail, Navbar } from "./components";


const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: '#000'}}>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/channel/:id" element={<Channel />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
)

export default App;
