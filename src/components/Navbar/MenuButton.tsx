import { Button, Stack } from "@mui/material"

const menuButtons=[
    "Resources",
    "Success stories",
    "Company",
    "Pricing"
];
const styles={
    root:{
        display:{
            lg:"flex",
            md:"flex",
            sm:"none",
            xs:"none"
        }
    },
    button:{
        fontFamily:"Inter",
        fontSize:20,
        textTransform:"capitalize",
        color:"black",
        
        "&:hover ":{
            backgroundColor:"white"
        }
    }
}
const MenuButton = () => {
  return (
    <Stack direction={'row'} alignItems={'center'} spacing={5} sx={styles.root}>
        {
            menuButtons.map((value,index)=>{
                return(
                    <Button key={index} disableElevation disableFocusRipple disableRipple disableTouchRipple variant="text" sx={styles.button}>{value}</Button>
                )
            })
        }
    </Stack>
  )
}

export default MenuButton