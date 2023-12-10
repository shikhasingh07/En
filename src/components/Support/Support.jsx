import { Button, Grid, Typography, Box, IconButton } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ReactWhatsapp from "react-whatsapp";
import whatsapp from "../../assets/whatsapp.png";
import "../Headers/Header.scss";
const Support = () => {
  return (
    <Grid
      container
      display="flex"
      alignItems="center"
      justifyItems="center"
      flexDirection="column"
      className="support-box"
    >
      <Typography
        sx={{
          textAlign: "center",
          color: "#15999e",
          fontSize: "42px",
          letterSpacing: "4px",
          fontWeight: "600",
        }}
      >
        Frequently Asked
      </Typography>
      <Typography
        sx={{
          color: "#15999e",
          fontSize: "36px",
          letterSpacing: "4px",
          fontWeight: "600",
        }}
      >
        Questions
      </Typography>
      <Typography
        sx={{
          mt: "1rem",
          color: "#15999e",
          width: "325px",
          textAlign: "center",
          fontSize: "12px",
          letterSpacing: "4px",
          fontWeight: "600",
        }}
      >
        Do you need some help or do you have questions about our product
      </Typography>
      <Grid
        item
        mt="2rem"
        width="55%"
        display="flex"
        flexDirection="column"
        justifyItems="center"
      >
        {[
          {
            header: "Product will avilable in stores",
            summary:
              " Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
          {
            header: "Product will avilable in stores",
            summary:
              " Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
          ,
          {
            header: "Product will avilable in stores",
            summary:
              " Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
        ].map((acc, idx) => {
          return (
            <Accordion
              key={idx}
              sx={{ m: "0 !important", color: "#000", background: "#15999e" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>{acc.header}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{acc.summary}</Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </Grid>
      <Typography
        sx={{
          mt: "1.5rem",
          color: "#15999e",
          width: "325px",
          textAlign: "center",
          fontSize: "21px",
          letterSpacing: "4px",
          fontWeight: "700",
        }}
      >
        Have any other question ?
      </Typography>
      <Typography
        sx={{
          mt: "1.5rem",
          color: "#15999e",
          width: "325px",
          textAlign: "center",
          fontSize: "16px",
          letterSpacing: "4px",
          fontWeight: "700",
        }}
      >
        Send us email / what's app
      </Typography>
      <Box
        className="contant-box"
        sx={{
          color: "#000",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: "2px",
          mt: "1rem",
          width: "375px",
          backgroundColor: "#15999e",
        }}
      >
        <Typography>satyampd5340@gmail.com</Typography>
        <IconButton
          onClick={() =>
            navigator.clipboard.writeText("satyampd5340@gmail.com")
          }
        >
          <Typography sx={{ fontSize: "12px" }}>Copy</Typography>
          <ContentCopyIcon />
        </IconButton>
        <span>/</span>
        <ReactWhatsapp
          style={{
            border: "none",
            background: "none",
            display: "flex",
            alignItems: "center",
          }}
          number="7979087315"
          message="Hello! Query about drones!"
        >
          <Typography sx={{ fontSize: "12px" }}>Click</Typography>
          <img style={{ height: "32px", width: "32px" }} src={whatsapp} />
        </ReactWhatsapp>
      </Box>
    </Grid>
  );
};

export default Support;
