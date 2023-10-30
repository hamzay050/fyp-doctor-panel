import * as React from 'react';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

const SmallAvatar = styled(Avatar)(({ theme }) => ({
    width: 30,
    height: 30,
    border: `2px solid ${theme.palette.background.paper}`,
  }));

  export default function BadgeAvatars() {
    return (
        <Stack direction="row" spacing={2}>

<Badge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        badgeContent={
          <SmallAvatar alt="Remy Sharp" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Flat_cross_icon.svg/1200px-Flat_cross_icon.svg.png" />
        }
      >
        <Avatar alt="Travis Howard" src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg" sx={{width:"60px", height:"60px"}}/>
      </Badge>
        </Stack>

        
    )

  }