import React from "react";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 22,
  height: 22,
}));

export default function AvatarBox({ mwidth, mheight,image }) {
  return (
    <Box sx={{ margin: "0 0 0 0.5rem" }}>
      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        variant="dot"
        // badgeContent={0}
      >
        {/* <Avatar alt="Remy Sharp" src="/Assests/Tick.svg" /> */}
        <Avatar
          alt="Remy Sharp"
          src={image?process.env.NEXT_PUBLIC_BASE_URL+image:'/Assests/hero1.png'}
          sx={{ width: mwidth, height: mheight }}
        />
      </StyledBadge>
    </Box>
  );
}
