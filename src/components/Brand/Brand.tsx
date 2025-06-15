import { Box, Grid, Stack, Typography } from "@mui/material";
import image1 from "../../assets/Brand/image1.svg";
import image2 from "../../assets/Brand/image2.svg";
import image3 from "../../assets/Brand/image3.svg";
import image4 from "../../assets/Brand/imag4.svg";
import text1 from "../../assets/Brand/text1.svg";
import text2 from "../../assets/Brand/text2.svg";
import text3 from "../../assets/Brand/text3.svg";
import text4 from "../../assets/Brand/text4.svg";

const styles = {
  root: {
    width: "100%",
    minHeight: "70vh",
    maxHeight: "auto",
  },
  textStyles: {
    fontSize:{
      lg:70,
      md:70,
      sm:45,
      xs:45
    },
    fontWeight: "900",
    color: "#2E2F35",
    width: {
      lg:"45%",
      md:"45%",
      sm:"80%",
      xs:"80%"
    },
    textAlign: "center",
  },
  brand: {
    fontFamily: "Covered By Your Grace",
    color: "#009387",
  },
  image: {
    width: 300,
    height: 200,
  },
  text: {
    width: 150,
    height: 100,
  },
};
const cards = [
  {
    image: image1,
    text: text1,
  },
  {
    image: image2,
    text: text2,
  },
  {
    image: image3,
    text: text3,
  },
  {
    image: image4,
    text: text4,
  },
];
const Brand = () => {
  return (
    <Stack sx={styles.root} justifyContent={"center"} alignItems={"center"}>
      <Typography sx={styles.textStyles}>
        Trusted by thousands of top DTC <b style={styles.brand}>brands.</b>
      </Typography>
      <Grid container spacing={10}>
        {cards.map((value, index) => {
          return (
            <Grid key={index} size={{lg:3,md:3,sm:12,xs:12}}>
              <Stack alignItems={"center"}>
                <Box component={"img"} src={value.image} sx={styles.image} />
                <Box component={"img"} src={value.text} sx={styles.text} />
              </Stack>
            </Grid>
          );
        })}
      </Grid>
    </Stack>
  );
};

export default Brand;
