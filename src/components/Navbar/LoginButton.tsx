import { Button, Stack } from "@mui/material"

const styles={
    root:{
        display:{
            lg:"flex",
            md:"flex",
            sm:"none",
            xs:"none"
        }
    },
    loginButton:{
        backgroundColor:"white",
        borderRadius:5,
        color:"black",
        fontSize:20,
        padding:"10px 25px 10px 25px",
        border:"3px solid black",
        fontFamily:"Inter",
        textTransform:"capitalize",
        boxShadow:"10px 10px 1px black",
        "&:hover":{
            boxShadow:"10px 10px 1px black",
        }
    },
    createAccountButton:{
       backgroundColor:"#FF6D2C",
        borderRadius:5,
        color:"white",
        fontSize:20,
        padding:"10px 25px 10px 25px",
        border:"3px solid black",
        fontFamily:"Inter",
        textTransform:"capitalize",
        boxShadow:"10px 10px 1px black" ,
        "&:hover":{
            boxShadow:"10px 10px 1px black",
        }
    }
}
const LoginButton = () => {
  return (
    <Stack direction={'row'} alignItems={'center'} spacing={4} sx={styles.root} >
        <Button variant="contained" sx={styles.loginButton}>Login</Button>
        <Button variant="contained" sx={styles.createAccountButton}>Create Your Account</Button>
    </Stack>
  )
}

export default LoginButton