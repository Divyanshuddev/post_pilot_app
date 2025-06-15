import { Box, Button, Stack, Typography } from "@mui/material";
import image1 from "../../assets/Profit/image1.svg";
import image2 from "../../assets/Profit/image2.svg";
import image3 from "../../assets/Profit/image3.svg";
import image4 from "../../assets/Profit/image4.svg";
import image5 from "../../assets/Profit/image5.svg";

const styles = {
  root: {
    width: "100%",
    minHeight: "100vh",
    maxHeight: "auto",
    backgroundColor: "#EEECFF",
    boxSizing: "border-box",
    padding: 6,
  },
  image: {
    width: {
      lg:600,
      md:600,
      sm:300,
      xs:300
    },
    height: {
      lg:600,
      md:600,
      sm:300,
      xs:300
    },
  },
  textStyles: {
    fontSize:{
      lg:70,
      md:70,
      sm:35,
      xs:35
    },
    fontWeight: "bolder",
  },
  subTitle: {
    color: "#58595D",
  },
  percentage: {
    fontSize: 50,
    fontWeight: "bold",
  },
  title: {
    fontFamily: "Inter",
    color: "#58595D",
  },
  button: {
    backgroundColor: "white",
    borderRadius: 5,
    color: "black",
    fontSize: {
      lg:20,
      md:20,
      sm:15,
      xs:15
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
};
const percentage = [
  {
    percentage: "1468%",
    title: "ROI",
  },
  {
    percentage: "8.59%",
    title: "Conversion Rate",
  },
  {
    percentage: "$73,457",
    title: "Sales Generated",
  },
];
const images=[
  image2,
  image3,
  image4,
  image5,
]
const Profit = () => {
  return (
    <Stack sx={styles.root} direction={{lg:"row",md:"row",sm:"column",xs:"column"}} alignItems={"center"}>
      <Stack width={{lg:"50%",md:"50%",sm:"100%",xs:"100%"}} justifyContent={"center"} alignItems={"center"}>
        <Box component={"img"} src={image1} sx={styles.image} />
      </Stack>
      <Stack width={{lg:"50%",md:"50%",sm:"100%",xs:"100%"}}>
        <Stack width={"80%"} spacing={3} alignItems={{lg:"",md:"",sm:"center",xs:"center"}}>
          <Typography sx={styles.textStyles}>
            How Obvi Drives Profits with Hands-Off Postcard Campaigns
          </Typography>
          <Typography sx={styles.subTitle}>
            The 🚀 supplements brand wanted to offset high ad costs and reach
            dormant customers. They scored 1000%+ ROIs.
          </Typography>
          <Stack
            direction={{lg:"row",md:"row",sm:"column",xs:"column"}}
            alignItems={"center"}
            justifyContent={"space-between"}
            spacing={{lg:8,md:8,sm:3,xs:3}}
          >
            {percentage.map((value, index) => {
              return (
                <Stack key={index} spacing={-2} alignItems={{lg:"flex-start",md:"flex-start",sm:"center",xs:"center"}}>
                  <Typography sx={styles.percentage}>
                    {value.percentage}
                  </Typography>
                  <Typography sx={styles.title}>{value.title}</Typography>
                </Stack>
              );
            })}
          </Stack>
          <Button variant="contained" sx={styles.button}>Read Case study</Button>
          <Stack direction={{lg:"row",md:"row",sm:"column",xs:"column"}} alignItems={'center'} justifyContent={'space-evenly'} spacing={{lg:5,md:5,sm:3,xs:3}}>
            {
              images.map((value,index)=>{
                return(
                  <Box component={'img'} src={value} key={index} />
                )
              })
            }
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Profit;
