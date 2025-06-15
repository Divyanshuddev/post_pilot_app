import { Box, Grid, Stack, Typography } from "@mui/material";
import img1 from "../../assets/Trends/img1.svg";
import img2 from "../../assets/Trends/img2.svg";
import img3 from "../../assets/Trends/img3.svg";

const styles = {
  root: {
    width: "100%",
    minHeight: "60vh",
    maxHeight: "auto",
    backgroundColor: "#F3FAFA",
    boxSizing: "border-box",
    padding: 5,
  },
  insights: {
    fontFamily: "Covered By Your Grace",
    color: "#009387",
  },
  textStyles: {
    fontSize: {
      lg: 70,
      md: 70,
      sm: 40,
      xs: 40,
    },
  },
  image: {
    width: 400,
    height: 400,
  },
  title:{
    fontSize:24,
    fontWeight:"bolder",
    width:{
        lg:"60%",
        md:"60%",
        sm:"90%",
        xs:"90%"
    }
  }
};

const Data = [
  {
    image: img1,
    title: "3 Low-Cost Campaigns You Must Run to Win BFCM",
  },
  {
    image: img2,
    title: "Postcard Marketing: The Definitive Guide to High ROI [2022]",
  },
  {
    image: img3,
    title: "The Ultimate Guide to Thank You Notes for Ecommerce",
  },
];
const Trends = () => {
  return (
    <Stack sx={styles.root} justifyContent={"center"} alignItems={"center"}>
      <Typography sx={styles.textStyles}>
        Latest trends & <b style={styles.insights}>insights</b>
      </Typography>
      <Grid container spacing={2}>
        {Data.map((value, index) => {
          return (
            <Grid key={index} size={{lg:4,md:4,sm:12,xs:12}}>
              <Stack spacing={1} alignItems={'center'}>
                <Box component={"img"} src={value.image} sx={styles.image} />
                <Typography sx={styles.title}>{value.title}</Typography>
              </Stack>
            </Grid>
          );
        })}
      </Grid>
    </Stack>
  );
};

export default Trends;
