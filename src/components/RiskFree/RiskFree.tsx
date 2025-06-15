import { Box, Button, Rating, Stack, Typography } from "@mui/material";
import image from '../../assets/RiskFree/image.svg'
const styles = {
  root: {
    width: "100%",
    minHeight: "70vh",
    maxHeight: "auto",
    backgroundColor: "#FF6D2C",
  },
  textStyles: {
    color: "white",
    fontSize: 60,
    fontWeight: "bolder",
  },
  subTitle: {
    color: "white",
    fontSize: 22,
  },
  button: {
    backgroundColor: "white",
    borderRadius: 5,
    color: "black",
    fontSize: {
      lg: 20,
      md: 20,
      sm: 15,
      xs: 15,
    },
    padding: "15px 55px 15px 55px",
    border: "3px solid black",
    fontFamily: "Inter",
    boxShadow: "10px 5px 1px black",
    "&:hover": {
      boxShadow: "10px 10px 1px black",
    },
    width: "fit-content",
  },
  ratingText:{
    color:"white"
  }
};
const RiskFree = () => {
  return (
    <Stack sx={styles.root} direction={{lg:"row",md:"row",sm:"column",xs:"column"}} alignItems={'center'}>
      <Stack
        width={"50%"}
        justifyContent={"center"}
        alignItems={"center"}
        minHeight={"70vh"}
        maxHeight={"auto"}
        spacing={10}
      >
        <Stack >
          <Typography sx={styles.textStyles}>
            Try PostPilot Risk-Free
          </Typography>
          <Typography sx={styles.subTitle}>
            No contracts. No commitments. Guaranteed results.*
          </Typography>
        </Stack>
        <Stack direction={{lg:"row",md:"row",sm:"column",xs:"column"}} alignItems={"center"} justifyContent={'space-between'} width={'70%'}>
          <Button variant="contained" sx={styles.button}>GET STARTED</Button>
          <Stack alignItems={'center'}>
            <Rating name="half-rating-read" defaultValue={5} precision={5} readOnly size="large" />
            <Typography sx={styles.ratingText}>5.0 Shopify Rating</Typography>
          </Stack>
        </Stack>
          <Typography sx={styles.ratingText}>* for qualified brands with over $1m annual Shopify revenue.</Typography>
      </Stack>
      <Stack width={'50%'}>
        <Box component={'img'} src={image}  />
      </Stack>
    </Stack>
  );
};

export default RiskFree;
