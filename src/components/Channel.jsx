import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";

import { ChannelCard, Videos } from './';
import { fetchFromAPI } from "../utils/FetchFromAPI";

const Channel = () => {
  const [channelDetial, setChannelDetial] = useState(null);
  const [videos, setVideo] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`channel?part=snippet&id=${id}`)
      .then((data) => setChannelDetial(data?.items[0]));
    
      fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => setVideo(data?.items));
  }, [id])
  
  return (
    <Box minHeight='95vh'>
      <Box>
        <div style={{background: 'linear-gradient(90deg, rgba(184,9,96,1) 0%, rgba(0,212,255,1) 100%)', zIndex: 10, height: '300px'}}/>
        <ChannelCard channelDetail={channelDetial} marginTop="-120px"/>
      </Box>
      <Box display="flex" p="2">
        <Box sx={{ mr: { sm: '100px'}}}/>
        <Videos videos={videos}/>
      </Box>
    </Box>  
  )
}

export default Channel