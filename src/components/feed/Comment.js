import { styled } from "styled-components";
import { FatText } from "../shared";
import PropTypes from "prop-types";
import sanitizeHtml from "sanitize-html";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import React from "react";

const CommentContainer = styled.div``;

const CommentCaption = styled.span`
  margin-left: 4px;
  a {
    background-color: inherit;
    color: ${(props) => props.theme.accent};
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Comment = ({ author, payload }) => {
  return (
    <CommentContainer>
      <FatText>{author}</FatText>
      <CommentCaption>
        {payload.split(" ").map((word, index) =>
          /#[\w]+/.test(word) ? (
            <React.Fragment key={index}>
              <Link key={index} to={`/hashtags/${word}`}>
                {word}
              </Link>{" "}
            </React.Fragment>
          ) : (
            <React.Fragment key={index}>{word} </React.Fragment>
          )
        )}
      </CommentCaption>
    </CommentContainer>
  );
};

Comment.propTypes = {
  author: PropTypes.string.isRequired,
  payload: PropTypes.string.isRequired,
};

export default Comment;
