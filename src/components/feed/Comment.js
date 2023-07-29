import { styled } from "styled-components";
import { FatText } from "../shared";
import PropTypes from "prop-types";

const CommentContainer = styled.div``;

const CommentCaption = styled.span`
  margin-left: 4px;
`;

const Comment = ({ author, payload }) => {
  return (
    <CommentContainer>
      <FatText>{author}</FatText>
      <CommentCaption>{payload}</CommentCaption>
    </CommentContainer>
  );
};

Comment.propTypes = {
  author: PropTypes.string.isRequired,
  payload: PropTypes.string.isRequired,
};

export default Comment;
