import React, { useState, useEffect } from "react";
import axios from "axios";
import { Avatar, Menu, MenuItem, ListItemIcon, Divider } from "@mui/material";
import { Logout, Person } from "@mui/icons-material";

function Profile() {
  const [user, setUser] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  useEffect(() => {
    const fetchUserProfile = async () => {
      // 1. Get the token from localStorage
      const token = localStorage.getItem("token");
      if (!token) {
        // Handle case where user is not logged in
        console.error("No token found, user is not authenticated.");
        // Optional: redirect to login
        // window.location.href = "http://localhost:3000/login";
        return;
      }

      try {
        // 2. Make the API call with the token in the header
        const res = await axios.get("http://localhost:3002/api/profile", {
          headers: {
            "x-auth-token": token,
          },
        });
        setUser(res.data); // 3. Set the user data in state
      } catch (err) {
        console.error("Failed to fetch profile:", err);
        // If token is invalid, clear it and redirect to login
        if (err.response && err.response.status === 401) {
          localStorage.removeItem("token");
          window.location.href = "http://localhost:3000/login";
        }
      }
    };

    fetchUserProfile();
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    // Clear the token and redirect to the login page
    localStorage.removeItem("token");
    window.location.href = "http://localhost:3000/login";
  };

  // Function to get initials from a full name
  const getInitials = (name) => {
    if (!name) return "";
    const nameParts = name.split(" ");
    if (nameParts.length > 1) {
      return `${nameParts[0][0]}${nameParts[nameParts.length - 1][0]}`.toUpperCase();
    }
    return `${nameParts[0][0]}`.toUpperCase();
  };
  
  if (!user) {
    // You can show a loading spinner here if you like
    return <div>Loading...</div>;
  }

  return (
    <>
      <div onClick={handleClick} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
        <Avatar sx={{ width: 32, height: 32, bgcolor: '#387ed1' }}>
          {getInitials(user.fullName)}
        </Avatar>
        <span style={{ marginLeft: '8px', color: '#666' }}>{user.email.split('@')[0]}</span>
      </div>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
          <ListItemIcon>
            <Person fontSize="small" />
          </ListItemIcon>
          {user.fullName}
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
}

export default Profile;
