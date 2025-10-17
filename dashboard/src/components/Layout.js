import React from "react";
import { Outlet } from "react-router-dom"; // Outlet is a placeholder for the current page
import Menu from "./Menu";
import TopBar from "./TopBar";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";

function Layout() {
  return (
    <div className="app-layout">
      <Menu />
      <div className="main-content">
        <GeneralContextProvider>
          <TopBar />
          <div className="dashboard-container">
            <div className="content-area">
              <Outlet /> {/* The current route's component will be rendered here */}
            </div>
            <WatchList />
          </div>
        </GeneralContextProvider>
      </div>
    </div>
  );
}

export default Layout;
