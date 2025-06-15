import { Box } from "@mui/material"
import logo from '../../assets/Navbar/logo.svg'
const styles={
    root:{
        width:150,
        height:30,
        objectFit:"contain",
        
    }
}
const Logo = () => {
  return (
    <Box component={'img'} src={logo} sx={styles.root} />
  )
}

export default Logo