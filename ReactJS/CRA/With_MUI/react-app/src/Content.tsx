import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { ColorModeContext } from "./ColorModeContext";

export function Content()
{
    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);

    return (
        <Box height="100vh" maxHeight="100vh" minWidth="100vw" sx={{
            bgcolor: theme.palette.mode === "dark" ? "grey.800" : "grey.50",
            color: 'text.primary',
        }}>
            <Box display="flex" sx={{ placeContent: "end" }} paddingRight={5} height="72px">
                <IconButton sx={{height:"48px", marginTop:"12px"}} onClick={colorMode.toggleColorMode} color="inherit">
                    {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
            </Box>

            <Box display="flex" alignItems="center" sx={{ placeContent: "center" }} height="calc(100vh - 72px)">
                <Card sx={{ maxWidth: "20em" }}>
                    <CardHeader title="React App with MUI" subheader="Chrome Extension Starter" avatar={
                        <Avatar src="icon192.png">

                        </Avatar>
                    } />

                    <CardMedia
                        component="img"
                        height="194"
                        image="/card-image.jpg"
                        alt="Laptop"
                    />

                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            This is an example of a simple card component created with MUI
                        </Typography>
                    </CardContent>

                    <CardActions>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>

                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                    </CardActions>
                </Card>
            </Box>
        </Box>
    );
}