import { Button } from "@mui/material";

export const ProfileButtom = ({ user, handleClick }) => {
  return (
    <div>
      <Button sx={{ color: "primary.second" }} onClick={() => handleClick()}>
        {user?.userData.displayName || user?.displayName} borrar
      </Button>
    </div>
  );
};
