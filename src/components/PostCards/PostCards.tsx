import { Button, Stack, Typography } from "@mui/material";
import Card from "./Card";
import company1 from "../../assets/PostCards/company1.svg";
import company2 from "../../assets/PostCards/company2.svg";
import company3 from "../../assets/PostCards/company3.svg";
import parse from "html-react-parser";
const styles = {
  root: {
    width: "100%",
    minHeight: "100vh",
    maxHeight: "auto",
    backgroundColor: "#FDF3EA",
    boxSizing: "border-box",
    paddingTop: 10,
    paddingLeft: {
      lg: 10,
      md: 10,
      sm: 5,
      xs: 5,
    },
    paddingRight: {
      lg: 10,
      md: 10,
      sm: 5,
      xs: 5,
    },
    paddingBottom: 10,
  },
  cinch: {
    fontFamily: "Covered By Your Grace",
    color: "#009387",
  },
  textStyles: {
    fontSize: {
      lg: 60,
      md: 60,
      sm: 40,
      xs: 40,
    },
    fontWeight: "bolder",
    width: {
      lg: "55%",
      md: "55%",
      sm: "100%",
      xs: "100%",
    },
  },
  button: {
    backgroundColor: "#FF6D2C",
    borderRadius: 5,
    color: "white",
    fontSize: 20,
    padding: "15px 55px 15px 55px",
    border: "3px solid black",
    fontFamily: "Inter",
    textTransform: "capitalize",
    boxShadow: "10px 10px 1px black",
    "&:hover": {
      boxShadow: "10px 10px 1px black",
    },
    width: "fit-content",
  },
};
const powerful =
  '<p><b style="color:#009387;font-family: Covered By Your Grace;font-size:5rem">Powerful</b> acquisition & retention</p>';
const fight =
  '<p><b style="color:#009387;font-family: Covered By Your Grace;font-size:4.5rem">Fight back</b> against iOS updates, jacked-up CPCs & spam folders</p>';
const you =
  '<p>Done for <b style="color:#009387;font-family: Covered By Your Grace;font-size:4rem">you</b></p>';
const cardsData = [
  {
    id: 1,
    title: parse(powerful),
    desc: "Send one-off or triggered campaigns to customers & prospects. Target email leads with MailMatch™.",
    boxDesc:
      "It’s like Klaviyo for direct mail. The results are absolutely insane.",
    author: "Ash Melwani, CMO",
    companyLogo: company1,
    textWeight: "50%",
  },
  {
    id: 2,
    title: parse(fight),
    desc: "Deliver your message to all of your customers — for less than the cost of a click.",
    boxDesc:
      "PostPilot is our new weapon against sinking email engagement and rising PPC costs. The results and ROI have been outstanding. It’s now one of our core marketing channels to increase acquisition & LTV.",
    author: "Leah Keith, GM",
    companyLogo: company2,
    textWeight: "70%",
  },
  {
    id: 3,
    title: parse(you),
    desc: "From design & strategy to stamp-licking, our ecom experts help you every step of the way.",
    boxDesc:
      "The team is so knowledgeable and beyond helpful. I’m blown away by their communication, detail, and attentiveness and always feel like they have our best interest in mind. Definitely worth a try.",
    author: "Holly Davies, Marketing Director",
    companyLogo: company3,
    textWeight: "55%",
  },
];
const PostCards = () => {
  return (
    <Stack sx={styles.root} alignItems={"center"} spacing={10}>
      <Typography sx={styles.textStyles}>
        PostPilot makes it a <b style={styles.cinch}>cinch</b> to send
        personalized, profit-generating postcards.
      </Typography>
      <Stack width={"100%"} spacing={10}>
        {cardsData.map((value, index) => {
          return (
            <div key={index}>
              <Card
                id={value.id}
                title={value.title as string}
                desc={value.desc}
                boxDesc={value.boxDesc}
                author={value.author}
                companyLogo={value.companyLogo}
                textWidth={value.textWeight}
              />
            </div>
          );
        })}
      </Stack>
      <Button sx={styles.button}>Try it RISK-free</Button>
    </Stack>
  );
};

export default PostCards;
