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
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

import styles from "./Sidebar.module.scss";
import { sidebarHistoryData } from "./constants";

export const SidebarComponent = () => {
  return (
    <Box component={"aside"} className={styles.sidebar}>
      <List sx={{ py: 0 }}>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AddIcon sx={{ fontSize: "20px" }} />
            </ListItemIcon>
            <ListItemText primary='New chat' />
          </ListItemButton>
        </ListItem>
      </List>

      <Divider />

      <List
        sx={{
          pt: 0,
          overflowY: "hidden",
          height: "100%",
          "&:hover": {
            overflowY: "auto",
          },
        }}
      >
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

      <Divider />
      <List sx={{ py: 0 }}>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <PersonIcon sx={{ fontSize: "20px" }} />
            </ListItemIcon>
            <ListItemText primary='Upgrade to plus' />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AccountBoxIcon sx={{ fontSize: "20px" }} />
            </ListItemIcon>
            <ListItemText primary='youremail@gmail.com' />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

SidebarComponent.displayName = "Sidebar";
