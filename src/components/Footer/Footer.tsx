import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import image from "../../assets/Footer/image.svg";
import EmailIcon from "@mui/icons-material/Email";
const styles = {
  root: {
    width: "100%",
    minHeight: "50vh",
    maxHeight: "auto",
    boxSizing: "border-box",
    padding: 10,
  },
  image: {
    width: 150,
    height: 150,
  },
  description: {
    color: "#58595D",
    width: "50%",
  },
  title: {
    fontWeight: "bolder",
  },
};
const companyMenu = [
  "About us",
  "Partner program",
  "Career",
  "Contact us",
  "Privacy Policy",
  "Pricing",
  "Reviews",
  "Direct Mail Academy",
  "Success stories",
  "Terms & conditions",
];
const Footer = () => {
  return (
    <Grid sx={styles.root} container justifyContent={"center"}>
      <Grid size={{lg:3,md:3,sm:12,xs:12}} >
        <Stack spacing={3}>
          <Box component={"img"} src={image} sx={styles.image} />
          <Typography sx={styles.description}>
            Our paper is sourced from FSC-certified mills. We plant enough trees
            to more than double our paper usage.
          </Typography>
        </Stack>
      </Grid>
      <Grid size={{lg:6,md:6,sm:12,xs:12}}>
        <Stack spacing={5}>
          <Typography sx={styles.title}>COMPANY</Typography>
          <Grid container spacing={2}>
            {companyMenu.map((value, index) => {
              return (
                <Grid size={{lg:6,md:6,sm:12,xs:12}} key={index}>
                  <Typography>{value}</Typography>
                </Grid>
              );
            })}
          </Grid>
        </Stack>
      </Grid>
      <Grid size={{lg:3,md:3,sm:12,xs:12}}>
        <Stack spacing={5}>
          <Typography sx={styles.title}>CONTACT</Typography>
          <Stack spacing={2}>
            <Stack direction={"row"} alignItems={"center"} spacing={1}>
              <EmailIcon />
              <Typography>support@postpilot.com</Typography>
            </Stack>
            <Typography>
              Printed with ❤️️️ at our facility in South Carolina.
            </Typography>
          </Stack>
        </Stack>
      </Grid>
      <Divider />
    </Grid>
  );
};

export default Footer;
