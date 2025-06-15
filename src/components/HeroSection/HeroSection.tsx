import { Stack } from "@mui/material"
import ContainerFIrst from "./ContainerFIrst"
import ContainerSecond from "./ContainerSecond"

const styles={
    root:{
        width:"100%",
        minHeight:"100vh",
        maxHeight:"auto",
        backgroundColor:"#E0F8F2",
        boxSizing:"border-box",
    }
}
const HeroSection = () => {
  return (
    <Stack sx={styles.root} direction={{lg:"row",md:"row",sm:"column",xs:"column"}} >
        <ContainerFIrst />
        <ContainerSecond />
    </Stack>
  )
}

export default HeroSection