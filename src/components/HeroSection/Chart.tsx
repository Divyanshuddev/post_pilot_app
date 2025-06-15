import { Stack, Typography } from "@mui/material";

const styles = {
  root: {
    width: "40%",
    padding: 2,
    border: "3px solid black",
    borderRadius: 6,
    backgroundColor: "whitesmoke",
  },
  returnStyles: {
    color: "gray",
    fontWeight: "bolder",
    fontSize: {
      lg:18,
      md:18,
      sm:14,
      xs:14
    },
  },
  percentage: {
    fontSize: {
      lg:50,
      md:50,
      sm:30,
      xs:30
    },
    fontWeight: "bolder",
    color: "black",
  },
  bar: {
    border: "4px solid #2E2F35",
    width: "10%",
    borderRadius: 4,
    backgroundColor: "#E0F8F2",
  },
  innerBar: {
    width: "100%",
    borderRadius: 3,
    margin: 0,
    padding: 0,
    backgroundColor: "#009387",
  },
};
const percentageData = [
  {
    bar: 120,
    innerBar: 100,
  },
  {
    bar: 70,
    innerBar: 50,
  },
  {
    bar: 80,
    innerBar: 60,
  },
  {
    bar: 100,
    innerBar: 70,
  },
  {
    bar: 120,
    innerBar: 50,
  },
];
const Chart = () => {
  return (
    <Stack sx={styles.root}>
      <Typography sx={styles.returnStyles}>RETURN ON INVEST</Typography>
      <Typography sx={styles.percentage}>2345.97%</Typography>
      <Stack direction={'row'} alignItems={'flex-end'} justifyContent={'space-between'} spacing={2}>
      {percentageData.map((value,index) => {
        return (
          <Stack sx={styles.bar} justifyContent={"flex-end"} height={value.bar} key={index}>
            <Stack sx={styles.innerBar} height={value.innerBar} />
          </Stack>
        );
      })}
      </Stack>
    </Stack>
  );
};

export default Chart;
