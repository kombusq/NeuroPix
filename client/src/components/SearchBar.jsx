import { SearchOutlined } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

const SearchBarContainer = styled.div`
  max-width: 550px;
  display: flex;
  width: 100%;
  background: ${({ theme }) => theme.card_light};
  border: 1px solid ${({ theme }) => theme.card_border};
  border-radius: 12px;
  cursor: pointer;
  padding: 12px 16px;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.text_secondary};
  transition: all 0.25s ease;

  &:focus-within {
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 0 4px ${({ theme }) => theme.glow};
  }
`;

const SearchBar = ({ search, handleChange }) => {
  return (
    <SearchBarContainer>
      <SearchOutlined sx={{ color: "inherit" }} />
      <input
        type="text"
        placeholder="Search with prompt or name. . ."
        style={{
          border: "none",
          outline: "none",
          width: "100%",
          background: "inherit",
          color: "inherit",
          fontFamily: "inherit",
          fontSize: "14px",
        }}
        value={search}
        onChange={(e) => handleChange(e)}
      />
    </SearchBarContainer>
  );
};

export default SearchBar;
