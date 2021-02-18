import { Button } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";
import AddIcon from "@material-ui/icons/Add";
import InboxIcon from "@material-ui/icons/Inbox";
import SidebarOption from "./SidebarOption";
import StarIcon from "@material-ui/icons/Star";

function Sidebar() {
  return (
    <div className="sidebar">
      <Button
        startIcon={<AddIcon fontSize="Large" />}
        className="sidebar__compose"
      >
        COMPOSE
      </Button>
      <SidebarOption
        Icon={InboxIcon}
        title="Inbox"
        number={1892}
        selected={true}
      />
      <SidebarOption Icon={StarIcon} title="Starred" number={100} />
    </div>
  );
}

export default Sidebar;
