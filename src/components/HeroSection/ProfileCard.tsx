import { Avatar, Stack, Typography } from "@mui/material"
import personImage from '../../assets/image.png'
const styles={
    root:{
        borderRadius:{
            lg:6,
            md:6,
            sm:3,
            xs:3
        },
        padding:{
            lg:2,
            md:2,
            sm:1,
            xs:1
        },
        border:"3px solid black",
        backgroundColor:"whitesmoke",
        width:"fit-content"
    },
    avatar:{
        width:{
            lg:60,
            md:60,
            sm:50,
            xs:50
        },
        height:{
            lg:60,
            md:60,
            sm:50,
            xs:50
        }
    },
    textStyles:{
        fontWeight:"bolder",
        fontSize:{
            lg:20,
            md:20,
            sm:15,
            xs:15
        }
    }
}
const ProfileCard = () => {
  return (
    <Stack sx={styles.root} direction={'row'} alignItems={'center'} spacing={2} >
        <Avatar  src={personImage} sx={styles.avatar} />
        <Stack>
            <Typography sx={styles.textStyles}>180 day</Typography>
            <Typography sx={styles.textStyles}>win-back</Typography>
        </Stack>
    </Stack>
  )
}

export default ProfileCard