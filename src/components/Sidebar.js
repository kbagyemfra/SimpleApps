import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../context/context";
import sublinks from "../data/data";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext;
  return (
    <div>
      <aside className="sidebar">
        <button className="close-btn">
          <FaTimes />
        </button>
        <div className="sidebar-links"></div>
      </aside>
    </div>
  );
};

export default Sidebar;
