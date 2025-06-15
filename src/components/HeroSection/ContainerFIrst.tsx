import { Button, Rating, Stack, Typography } from "@mui/material"

const styles={
    root:{
        width:{
            lg:"60%",
            md:"60%",
            sm:"100%",
            xs:"100%"
        },
    },
    textStyles:{
        fontSize:{
            lg:80,
            md:80,
            sm:35,
            xs:35
        },
        fontWeight:"900",
        color:"#2E2F35"
    },
    favorite:{
        fontFamily:"Covered By Your Grace",
        color:"#009387"
    },
    remarkStyles:{
        color:"#58595D",
        fontFamily:"Inter",
        width:"70%",
        fontSize:{
            lg:18,
            md:18,
            sm:20,
            xs:20
        }
    },
    button:{
        backgroundColor:"#FF6D2C",
        borderRadius:5,
        color:"white",
        fontSize:20,
        padding:"15px 55px 15px 55px",
        border:"3px solid black",
        fontFamily:"Inter",
        textTransform:"capitalize",
        boxShadow:"10px 10px 1px black" ,
        "&:hover":{
            boxShadow:"10px 10px 1px black",
        },
        width:"fit-content"
    },
    ratingText:{
        color:"#2E2F35",
        fontFamily:"Inter"
    }
}
const ContainerFIrst = () => {
  return (
    <Stack sx={styles.root} justifyContent={'center'} alignItems={'center'}>
        <Stack spacing={4} >
        <Stack alignItems={{lg:"flex-start",md:"flex-start",sm:"center",xs:"center"}}>
        <Typography sx={styles.textStyles}>Meet your</Typography>
        <Typography sx={styles.textStyles}><b style={styles.favorite}>favorite</b> new (old)</Typography>
        <Typography sx={styles.textStyles}>marketing channel.</Typography>
        </Stack>
        <Stack alignItems={{lg:"flex-start",md:"flex-start",sm:"center",xs:"center"}}>
            <Typography sx={styles.remarkStyles}>Remarkable results. Easier than email. Postcard marketing reinvented for modern e-commerce.</Typography>
        </Stack>
        <Stack direction={{lg:"row",md:"row",sm:"column",xs:"column"}}  alignItems={'center'} spacing={5}>
            <Button variant="contained" sx={styles.button}>Try it Risk-free</Button>
            <Stack>
            <Rating name="half-rating-read" defaultValue={5} precision={5} readOnly size="large" />
            <Typography>5.0 Shopify Rating</Typography>
            </Stack>
        </Stack>
        </Stack>
    </Stack>
  )
}

export default ContainerFIrst