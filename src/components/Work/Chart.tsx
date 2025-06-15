import { Box, Stack, Typography } from "@mui/material"
import chart from '../../assets/Work/chart.svg'
const styles={
    bar:{
        
    },
    text:{
        color:"#58595D",
        fontSize:18
    }
}
const Chart = () => {
  return (
    <Stack alignItems={'center'}>
        <Box component={'img'} src={chart} />
        <Typography sx={styles.text}>Your messages get read</Typography>
    </Stack>
  )
}

export default Chart