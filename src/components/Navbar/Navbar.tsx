import { Stack } from "@mui/material";
import Logo from "./Logo";
import MenuButton from "./MenuButton";
import LoginButton from "./LoginButton";
import ResponsiveMenu from "./ResponsiveMenu";

const styles = {
  root: {
    padding: {
      lg: 3,
      md: 3,
      sm: 1,
      xs: 1,
    },
  },
};
const Navbar = () => {
  return (
    <Stack
      sx={styles.root}
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Logo />
      <MenuButton />
      <LoginButton />
      <ResponsiveMenu />
    </Stack>
  );
};

export default Navbar;
