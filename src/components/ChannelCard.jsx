import { Box, CardMedia, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { CheckCircle } from "@mui/icons-material";

import { demoChannelTitle, demoProfilePicture } from "../utils/constants";

const ChannelCard = ({channelDetail, marginTop}) => {
  return (
    <Box
        sx={{
            boxShadow: 'none',
            boarderRadius: '20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: {xs: '356px', md: '320px'},
            height: '326px',
            margin: 'auto',
            marginTop,
        }}
    >
        <Link to={`/channel/${channelDetail?.id?.channelId}`}>
            <CardContent
                sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', 
                    textAlign: 'center', color: '#fff'}}>
                <CardMedia 
                    image={demoProfilePicture}
                    sx={{borderRadius: '50%', height: '180px', width: '180px', boarder: '1px solid #e3e3e3'}}
                />
                <Typography variant="h6">
                    {channelDetail?.snippet?.title || demoChannelTitle}
                    <CheckCircle sx={{ fontSize: 12, color: 'gary', ml: '5px'}}/>
                    {channelDetail?.statistics?.subscriberCount && (<Typography>
                        {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
                    </Typography>)}
                </Typography>
            </CardContent>
        </Link>
    </Box>
  )
}

export default ChannelCard