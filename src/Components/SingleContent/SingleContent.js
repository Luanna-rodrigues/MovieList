import { img_300 } from "../../Config/Config";
import { unavailable } from "../../Config/Config";
import ContentModal from "../ContentModal/ContentModal";
import StyledCard from "../../StyledComponent/StyledCard/StyledCard";
import StyledGrid from "../../StyledComponent/StyledGrid/StyledGrid";
import StyledBadge from "../../StyledComponent/StyledBadge/StyledBadge";
import StyleTitle from "../../StyledComponent/StyledTitle/StyledTitle";
import StyleSubTitle from "../../StyledComponent/StyledTitle/StyledSubTitle";
const SingleContent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
}) => {
  return (
    <StyledGrid>
      <ContentModal item media_type={media_type} id={id}>
        <StyledBadge
          badgeContent={vote_average}
          color={vote_average > 6 ? "primary" : "secondary"}
        />
        <StyledCard>
          <img
            className="poster"
            src={poster ? `${img_300}/${poster}` : unavailable}
            alt={title}
          />
          <StyleTitle>{title}</StyleTitle>
          <StyleSubTitle>
            {media_type === "tv" ? "Tv Serie" : "Movie"}
          </StyleSubTitle>
          <StyleSubTitle>{date}</StyleSubTitle>
        </StyledCard>
      </ContentModal>
    </StyledGrid>
  );
};

export default SingleContent;
