import { Grid, Stack, Typography } from "@mui/material";
import ScaleText from "./ScaleText";
import Chart from "./Chart";

const styles = {
  root: {
    width: "100%",
    minHeight: "70vh",
    maxHeight: "auto",
    backgroundColor: "#E0F8F2",
  },
  textStyle: {
    width: {
      lg: "35%",
      md: "35%",
      sm: "100%",
      xs: "100%",
    },
    fontSize: {
      lg: 60,
      md: 60,
      sm: 40,
      xs: 40,
    },
    fontWeight: "bolder",
    textAlign: "center",
  },
  work: {
    fontFamily: "Covered By Your Grace",
    color: "#009387",
  },
};
const Work = () => {
  return (
    <Stack
      sx={styles.root}
      justifyContent={"center"}
      alignItems={"center"}
      spacing={5}
    >
      <Typography sx={styles.textStyle}>
        Why use direct mail? It <b style={styles.work}>works</b> like crazy.
      </Typography>
      <Grid container spacing={{ lg: 20, md: 20, sm: 10, xs: 10 }}>
        <Grid size={{ lg: 4, md: 4, sm: 12, xs: 12 }}>
          <ScaleText
            percentage="28X"
            details="Higher response rate than email & digital"
          />
        </Grid>
        <Grid size={{ lg: 4, md: 4, sm: 12, xs: 12 }}>
          <Chart />
        </Grid>
        <Grid size={{ lg: 4, md: 4, sm: 12, xs: 12 }}>
          <ScaleText
            percentage="17Days"
            details="Lifespan of a postcard vs. seconds for email or SMS"
          />
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Work;
