import { Avatar, Box, Heading, HStack, IconButton, Text, VStack, Image, useTheme } from "@chakra-ui/react";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import React from "react";
import { ColorModeContext } from "./ColorModeContext";

export function Content()
{
    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);

    return (
        <Box height="100vh" maxHeight="100vh" minWidth="100vw"
            bgColor={theme.initialColorMode === "dark" ? "gray.800" : "gray.100"}
            textColor={theme.initialColorMode === "dark" ? "white" : "gray.900"}>
            <Box display="flex" sx={{ placeContent: "end" }} paddingRight={5} height="72px">
                <IconButton
                    variant="ghost"
                    colorScheme={theme.initialColorMode === 'dark' ? "whiteAlpha" : "blackAlpha"}
                    sx={{ height: "48px", marginTop: "12px" }}
                    onClick={colorMode.toggleColorMode}
                    color="inherit"
                    aria-label="toggle dark mode">
                    {theme.initialColorMode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
            </Box>

            <Box display="flex" alignItems="center" sx={{ placeContent: "center" }} height="calc(100vh - 72px)">
                <Box sx={{ maxWidth: "20em" }} rounded="md" bgColor={theme.initialColorMode === 'dark' ? "gray.700" : "white"} shadow="base">
                    <HStack mb="0" p="3" spacing="3">
                        <Avatar src="icon192.png" bgColor="transparent" />
                        <VStack align="start" spacing="0">
                            <Text fontSize="md">React App with MUI</Text>
                            <Text fontSize="sm">Chrome Extension Starter</Text>
                        </VStack>
                    </HStack>

                    <Image
                        height="194"
                        width="100%"
                        src="card-image.jpg"
                        alt="Laptop"
                    />

                    <Text fontSize="body2" color="text.secondary" mt="3" mb="5" px="3">
                        This is an example of a simple card component created with MUI
                    </Text>

                    <HStack px="1" mb="1">
                        <IconButton variant="ghost" colorScheme={theme.initialColorMode === 'dark' ? "whiteAlpha" : "blackAlpha"} aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>

                        <IconButton variant="ghost" colorScheme={theme.initialColorMode === 'dark' ? "whiteAlpha" : "blackAlpha"} aria-label="share">
                            <ShareIcon />
                        </IconButton>
                    </HStack>
                </Box>
            </Box>
        </Box>
    );
}