import React from "react";
import { Modal, Backdrop, Fade, Grid } from "@material-ui/core";
import {
  StyledGridCard,
  StyleFirstTitle,
  StyledGridStu,
  StyledTitleTag,
  StyledTitleDesc,
} from "../../StyledComponent";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { img_500, unavailable } from "../../Config/Config";

const ContentModal = ({ children, media_type, id }) => {
  const [open, setOpen] = React.useState(false);
  const [content, setContent] = useState();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const fetchData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setContent(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Grid container>
      <Grid onClick={handleOpen}>{children}</Grid>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <StyledGridCard>
          <Fade in={open}>
            {content && (
              <StyledGridStu>
                <img
                  alt={content.name || content.title}
                  src={
                    content.poster_path
                      ? `${img_500}/${content.poster_path}`
                      : unavailable
                  }
                />

                <Grid>
                  <StyleFirstTitle>
                    {content.name || content.title} (
                    {(
                      content.first_air_date ||
                      content.release_date ||
                      "-----"
                    ).substring(0, 4)}
                    )
                  </StyleFirstTitle>

                  {content.tagline && (
                    <StyledTitleTag>{content.tagline}</StyledTitleTag>
                  )}

                  <StyledTitleDesc>{content.overview}</StyledTitleDesc>
                </Grid>
              </StyledGridStu>
            )}
          </Fade>
        </StyledGridCard>
      </Modal>
    </Grid>
  );
};

export default ContentModal;
