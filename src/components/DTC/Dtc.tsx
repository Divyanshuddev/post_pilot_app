import { Avatar, Stack, Typography } from "@mui/material";
import TwitterIcon from '@mui/icons-material/Twitter';
const styles = {
  root: {
    width: "100%",
    minHeight: "70vh",
    maxHeight: "auto",
    boxSizing:"border-box",
    padding:4
  },
  textStyles: {
    fontSize: {
        lg:60,
        md:60,
        sm:30,
        xs:30,
    },
    fontWeight: "bolder",
  },
  dtc: {
    fontFamily: "Covered By Your Grace",
    color: "#009387",
  },
  cards: {
    border: "3px solid black",
    padding: 3,
    borderRadius: 4,
    width: {
        lg:"40%",
        md:"40%",
        sm:"80%",
        xs:"80%"
    },
  },
  avatar: {
    width: 60,
    height: 60,
  },
};
const cardsData = [
  {
    avatar:
      "https://th.bing.com/th/id/OIP.lOPW1Ey_-pL55MeYTS06MAHaNK?rs=1&pid=ImgDetMain",
    name: "Watson",
    hashtag: "@Watson",
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    avatar:
      "https://i.pinimg.com/originals/3a/25/d4/3a25d4c633cf0b4b8bb3af3adb91d9a4.jpg",
    name: "Morris",
    hashtag: "@Morris",
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    avatar:
      "https://external-preview.redd.it/shubhna-agarwal-v0-YzFrbnRreWhudjhjMXEc8ZkO_nzCp8m4wzk5moxJ3UAWTDzMJ4jc5gKeP9k-.png?format=pjpg&auto=webp&s=aa6d3785d847b38d8582d961d27244fc7e6af39e",
    name: "Chavez",
    hashtag: "@Chavez",
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    avatar:
      "https://th.bing.com/th/id/OIP.v0NtC7E8VTu45Occ8YtKLgHaJv?rs=1&pid=ImgDetMain",
    name: "Dustin",
    hashtag: "@Dustin",
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    avatar:
      "https://th.bing.com/th/id/OIP.r0wPjILKHsq99Rn9BHKL5QHaHa?rs=1&pid=ImgDetMain",
    name: "Nancy",
    hashtag: "@Nancy",
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];
const Dtc = () => {
  return (
    <Stack sx={styles.root} justifyContent={"center"} alignItems={"center"} spacing={10}>
      <Typography sx={styles.textStyles}>
        PostPilot is 🔥 for <b style={styles.dtc}>DTC</b>
      </Typography>
      <Stack direction={{lg:"row",md:"row",sm:"column",xs:"column"}} alignItems={"center"} spacing={5} width={"90%"} >
        {cardsData.map((value, index) => {
          return (
            <Stack sx={styles.cards} key={index} spacing={2}>
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Stack direction={"row"} alignItems={"center"} spacing={3}>
                  <Avatar src={value.avatar} sx={styles.avatar} />
                  <Stack>
                    <Typography>{value.name}</Typography>
                    <Typography>{value.hashtag}</Typography>
                  </Stack>
                </Stack>
                <TwitterIcon />
              </Stack>
              <Typography>{value.details}</Typography>
            </Stack>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default Dtc;
