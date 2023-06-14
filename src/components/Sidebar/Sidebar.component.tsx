import React from "react";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

import styles from "./Sidebar.module.scss";
import { sidebarHistoryData } from "./constants";

export const SidebarComponent = () => {
  return (
    <Box
      component={"aside"}
      className={styles.sidebar}
      sx={{
        overflow: "hidden",
        "&:hover": {
          overflow: "auto",
        },
      }}
    >
      <List sx={{ pt: 0 }}>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AddIcon sx={{ fontSize: "20px" }} />
            </ListItemIcon>
            <ListItemText primary='New chat' />
          </ListItemButton>
        </ListItem>

        <Divider />
        {sidebarHistoryData.map((history) => (
          <React.Fragment key={history.id}>
            <ListItem>
              <ListItemText className={styles.dateSmallText} disableTypography>
                {history.date}
              </ListItemText>
            </ListItem>

            {history.chats.map((chat) => (
              <ListItem disablePadding key={chat.id}>
                <ListItemButton>
                  <ListItemIcon>
                    <ChatBubbleOutlineIcon sx={{ fontSize: "20px" }} />
                  </ListItemIcon>
                  <ListItemText primary={chat.title} />
                </ListItemButton>
              </ListItem>
            ))}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};

SidebarComponent.displayName = "Sidebar";
