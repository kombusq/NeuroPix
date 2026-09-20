import { CircularProgress } from "@mui/material";
import { ImageOutlined } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  padding: 16px;
  background: ${({ theme }) => theme.card_light};
  border: 2px dashed ${({ theme }) => theme.card_border};
  color: ${({ theme }) => theme.text_secondary};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  font-size: 14px;
  transition: all 0.25s ease;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.black + 50};
  border-radius: 18px;
  object-fit: cover;
`;

const GeneratedImageCard = ({ src, loading }) => {
  return (
    <Container>
      {loading ? (
        <>
          <CircularProgress
            sx={{ color: "inherit", width: "28px", height: "28px" }}
          />
          Generating Your Image . . .
        </>
      ) : src ? (
        <Image src={src} />
      ) : (
        <>
          <ImageOutlined style={{ fontSize: "40px", opacity: 0.6 }} />
          Write a prompt to generate image
        </>
      )}
    </Container>
  );
};

export default GeneratedImageCard;
