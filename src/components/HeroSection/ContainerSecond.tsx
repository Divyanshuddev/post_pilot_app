import { Stack } from "@mui/material"
import cookies from '../../assets/HeroSection/Cookies.svg'
import ProfileCard from "./ProfileCard"
import Chart from "./Chart"
const styles={
    root:{
        width:{
            lg:"40%",
            md:"40%",
            sm:"100%",
            xs:"100%"
        }
    },
    container:{
        backgroundImage:`url(${cookies})`,
        backgroundPosition:"center",
        backgroundSize:"contain",
        backgroundRepeat:"no-repeat",
        width:"100%",
        height:{
            lg:900,
            md:900,
            sm:600,
            xs:600
        },

    }
}
const ContainerSecond = () => {
  return (
    <Stack sx={styles.root}>
        <Stack sx={styles.container}>
            <Stack justifyContent={'center'} alignItems={{lg:"flex-start",md:"flex-start",sm:"center",xs:"center"}} height={900}>
            <ProfileCard />
            </Stack>
            <Stack  alignItems={'center'} >
                <Chart />
            </Stack>
        </Stack>
    </Stack>
  )
}

export default ContainerSecond