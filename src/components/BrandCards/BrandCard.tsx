import { Box, Grid, Stack, Typography } from "@mui/material";
import img1 from "../../assets/BrandCard/img1.svg";
import img2 from "../../assets/BrandCard/img2.svg";
import img3 from "../../assets/BrandCard/img3.svg";
import img4 from "../../assets/BrandCard/img4.svg";
import img5 from "../../assets/BrandCard/img5.svg";
import img6 from "../../assets/BrandCard/img6.svg";

const styles = {
  root: {
    width: "100%",
    minHeight: "100vh",
    maxHeight: "auto",
    boxSizing:"border-box",
    padding:5,
  },
  unforgettable: {
    fontFamily: "Covered By Your Grace",
    color: "#009387",
    fontSize: 50,
  },
  textStyles: {
    fontSize: 50,
    fontWeight: "bolder",
  },
  card:{
    minHeight:450,
    maxHeight:"auto",
    width:"100%",
    borderRadius:4,
    padding:3,
    boxSizing:"border-box"
  },
  image:{
    width:200,
    height:200
  },
  title:{
    fontSize:30,
    fontWeight:"bolder",
    textAlign:"center"
  },
  details:{
    color:"#58595D",
    fontFamily:"Inter",
    width:{
        lg:"70%",
        md:"70%",
        sm:"100%",
        xs:"100%"
    },
    textAlign:"center"
  }
};
const cardsData = [
  {
    image: img1,
    bg: "#FDF3EA",
    title: "Plug-and-play with your stack",
    details:
      "Native integrations provide seamless segmentation, automation & tracking. No clunky spreadsheets.",
  },
  {
    image: img2,
    bg: "#E0F8F2",
    title: "Run campaigns on autopilot",
    details: "Ink profits while you sleep: Just set it and forget it.",
  },
  {
    image: img3,
    bg: "#EEECFF",
    title: "Real-time ROI dashboard",
    details:
      "Track performance of every postcard by customer or discount code. Your CFO will love it.",
  },
  {
    image: img4,
    bg: "#D9F2F7",
    title: "Deliver WOW with *real* handwritten cards",
    details:
      "Our proprietary robots use real pens and ink for an unforgettable VIP touch.",
  },
  {
    image: img5,
    bg: "#FAEDED",
    title: "Predictable pricing",
    details:
      "Unlike CPCs, postage rates don’t change based on competition or who you’re targeting.",
  },
  {
    image: img6,
    bg: "#F1F1F1",
    title: "Complimentary concierge service",
    details:
      "DTC is in our DNA. Our pros will build your strategy and custom designs using battle-tested best practices.",
  },
];
const BrandCard = () => {
  return (
    <Stack sx={styles.root} justifyContent={"center"} alignItems={"center"} spacing={3}>
      <Typography sx={styles.textStyles}>
        Everything your brand needs to
      </Typography>
      <Typography sx={styles.unforgettable}>
        make your brand unforgettable
      </Typography>
      <Grid container width={'80%'} spacing={7}>
        {cardsData.map((value,index) => {
          return (
          <Grid size={{lg:4,md:4,sm:12,xs:12}} key={index}>
            <Stack sx={styles.card} style={{backgroundColor:value.bg}} alignItems={'center'}>
                <Box component={'img'} src={value.image} sx={styles.image} />
                <Typography sx={styles.title}>{value.title}</Typography>
                <Typography sx={styles.details}>{value.details}</Typography>
            </Stack>
          </Grid>
        )})}
      </Grid>
    </Stack>
  );
};

export default BrandCard;
