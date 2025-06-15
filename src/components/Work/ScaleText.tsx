import { Stack, Typography } from "@mui/material";

const styles = {
  percentage: {
    fontSize: 70,
    fontWeight: "bolder",
  },
  details: {
    textAlign: "center",
    color: "#58595D",
  },
};
type ScaleTextProps = {
  percentage: string;
  details: string;
};
const ScaleText: React.FC<ScaleTextProps> = ({ percentage, details }) => {
  return (
    <Stack alignItems={"center"}>
      <Typography sx={styles.percentage}>{percentage}</Typography>
      <Typography sx={styles.details}>{details}</Typography>
    </Stack>
  );
};

export default ScaleText;
