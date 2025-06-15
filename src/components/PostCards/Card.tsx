import { Box, Stack, Typography } from "@mui/material";
import comma from "../../assets/PostCards/comma.svg";
const styles = {
  root: {
    width: {
      lg: "50%",
      md: "50%",
      sm: "100%",
      xs: "100%",
    },
  },
  box: {
    border: "1px solid gray",
    borderRadius: 3,
    width: {
      lg: "70%",
      md: "70%",
      sm: "100%",
      xs: "100%",
    },
  },
  comma: {
    width: 30,
    height: 30,
  },
  commaBox: {
    width: 50,
    height: 50,
    borderRadius: "50%",
    backgroundColor: "#FDF3EA",
    marginTop: "-24px",
    marginLeft: "30px",
  },
  companyLogo: {
    width: 90,
    height: 90,
  },
  headingText: {
    fontSize: {
      lg: 50,
      md: 50,
      sm: 25,
      xs: 25,
    },
    fontWeight: "bolder",
  },
  detail: {
    color: "#58595D",
    width: {
      lg: "50%",
      md: "50%",
      sm: "100%",
      xs: "100%",
    },
  },
  boxDetails: {
    color: "#58595D",
  },
  author: {
    color: "#A89B90",
  },
};
type CardProps = {
  id: number;
  title: string;
  desc: string;
  boxDesc: string;
  author: string;
  companyLogo: string;
  textWidth: string;
};
const Card: React.FC<CardProps> = ({
  id,
  title,
  desc,
  boxDesc,
  author,
  companyLogo,
  textWidth,
}) => {
  return (
    <Stack
      sx={styles.root}
      justifySelf={{
        lg: id % 2 == 1 ? "flex-start" : "flex-end",
        md: id % 2 == 1 ? "flex-start" : "flex-end",
        sm: "flex-start",
        xs: "flex-start",
      }}
      alignItems={{
        lg: id % 2 == 0 ? "flex-end" : "none",
        md: id % 2 == 0 ? "flex-end" : "none",
        sm: "flex-start",
        xs: "flex-start",
      }}
      spacing={2}
    >
      <Typography
        sx={styles.headingText}
        width={textWidth}
        textAlign={{
          lg: id % 2 == 0 ? "right" : "-moz-initial",
          md: id % 2 == 0 ? "right" : "-moz-initial",
          sm: "center",
          xs: "center",
        }}
      >
        {title}
      </Typography>
      <Typography sx={styles.detail}>{desc}</Typography>
      <Stack sx={styles.box}>
        <Stack
          sx={styles.commaBox}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Box component={"img"} src={comma} sx={styles.comma} />
        </Stack>
        <Stack padding={3} spacing={3}>
          <Typography sx={styles.boxDetails}>
            <i>{boxDesc}</i>
          </Typography>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography sx={styles.author}>{author}</Typography>
            <Box component={"img"} src={companyLogo} sx={styles.companyLogo} />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Card;
