import { Button } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";
import AddIcon from "@material-ui/icons/Add";
import InboxIcon from "@material-ui/icons/Inbox";
import SidebarOption from "./SidebarOption";
import StarIcon from "@material-ui/icons/Star";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import NearMeIcon from "@material-ui/icons/NearMe";
import NoteIcon from "@material-ui/icons/Note";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

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
      <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number={100} />
      <SidebarOption Icon={LabelImportantIcon} title="Important" number={100} />
      <SidebarOption Icon={NearMeIcon} title="Sent" number={100} />
      <SidebarOption Icon={NoteIcon} title="Drafts" number={100} />
      <SidebarOption Icon={ExpandMoreIcon} title="More" number={100} />
    </div>
  );
}

export default Sidebar;
