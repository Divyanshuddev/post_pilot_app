import { Button, Stack, Typography } from "@mui/material"
import { useState } from "react"

const styles={
    root:{
        width:"100%",
        minHeight:"80vh",
        maxHeight:"auto",
        backgroundColor:"#E3F8F8",
        boxSizing:"border-box",
        padding:10,
    },
    textStyles:{
        fontSize:60,
        fontWeight:"bolder", 
    },
    here:{
        fontFamily:"Covered By Your Grace",
        color:"#009387",
        fontSize:60,
    },
    number:{
        fontFamily:"Covered By Your Grace",
        color:"#009387",
        fontSize:50,
    },
    title:{
        width:"fit-content",
        fontSize:30,
        textTransform:"capitalize",
        color:"#bbbcc4",
        fontWeight:"bolder"
    },
    details:{
        width:{
            lg:"50%",
            md:"50%",
            sm:"100%",
            xs:"100%"
        }
    }
}
const data=[
    {
        number:"01",
        title:"Segment",
        details:"One-off announcements or automatically triggered flows. Customers receive their personalized cards within a week."
    },
    {
        number:"02",
        title:"Design",
        details:"One-off announcements or automatica    lly triggered flows. Customers receive their personalized cards within a week."
    },
    {
        number:"03",
        title:"Send",
        details:"One-off announcements or automatically triggered flows. Customers receive their personalized cards within a week."
    },
    {
        number:"04",
        title:"Convert",
        details:"One-off announcements or automatically triggered flows. Customers receive their personalized cards within a week."
    },
]
const Result = () => {
    const [open,setOpen]=useState<string>('');
    const [openStatus,setOpenStatus]=useState<boolean>(false)
    const handleOpen=(data:string,status:boolean)=>{
        setOpen(data);
        setOpenStatus(status)
    }
  return (
    <Stack sx={styles.root} justifyContent={'center'} alignItems={'center'}>
        <Typography sx={styles.textStyles}>Fast launch. Fast results.</Typography>
        <Typography sx={styles.here}>Here's how.</Typography>
        <Stack alignSelf={'flex-start'}>
            {
                data.map((value,index)=>{
                    return(
                        <Stack direction={'row'} alignItems={'flex-start'} key={index}  spacing={10}>
                            <Typography sx={styles.number}>{value.number}</Typography>
                            <Stack alignItems={'flex-start'} width={'90%'}>
                                <Button variant="text" sx={styles.title} onClick={()=>handleOpen(value.title,!openStatus)}>{value.title}</Button>
                                <Stack display={open===value.title&&openStatus===true?"flex":"none"}>
                                <Typography sx={styles.details} >{value.details}</Typography>
                                </Stack>
                            </Stack>
                        </Stack>
                    )
                })
            }
        </Stack>
    </Stack>
  )
}

export default Result