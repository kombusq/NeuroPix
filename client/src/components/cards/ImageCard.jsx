import React from "react";
import styled from "styled-components";
import FileSaver from "file-saver";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Avatar } from "@mui/material";
import { DownloadRounded } from "@mui/icons-material";

const Card = styled.div`
  position: relative;
  display: flex;
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.card_border};
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 24px ${({ theme }) => theme.shadow};
  gap: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 32px ${({ theme }) => theme.shadow};
    border-color: ${({ theme }) => theme.primary + 60};
  }
  &:nth-child(7n + 1) {
    grid-column: auto/span 2;
    grid-row: auto/span 2;
  }
`;

const HoverOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: start;
  gap: 2px;
  justify-content: end;
  flex-direction: column;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 40%,
    rgba(0, 0, 0, 0.75) 100%
  );
  border-radius: 16px;
  opacity: 0;
  padding: 16px;
  transition: opacity 0.3s ease;
  color: ${({ theme }) => theme.white};

  ${Card}:hover & {
    opacity: 1;
  }
`;

const Prompt = styled.div`
  font-weight: 400;
  font-size: 15px;
  color: ${({ theme }) => theme.white};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
const Author = styled.div`
  font-weight: 600;
  font-size: 14px;
  display: flex;
  gap: 8px;
  align-items: center;
  color: ${({ theme }) => theme.white};
`;

const DownloadButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(6px);
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.gradient};
  }
`;

const ImageCard = ({ item, heights }) => {
  const downloadImage = async () => {
    try {
      if (!item?.photo) {
        throw new Error("Image URL is missing");
      }

      const response = await fetch(item.photo);
      if (!response.ok) {
        throw new Error("Unable to download image");
      }

      const imageBlob = await response.blob();
      FileSaver.saveAs(imageBlob, "download.png");
    } catch (error) {
      console.error("Image download failed:", error);
    }
  };

  return (
    <Card>
      <LazyLoadImage
        alt={item?.prompt}
        width="100%"
        src={item?.photo}
        style={{ objectFit: "cover" }}
      />
      <HoverOverlay>
        <Prompt>• {item?.prompt}</Prompt>
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Author>
            <Avatar
              sx={{
                background: "linear-gradient(135deg, #7C5CFC, #00D2FF)",
                width: "32px",
                height: "32px",
                fontSize: "14px",
              }}
            >
              {item?.name[0]}
            </Avatar>{" "}
            {item?.name}
          </Author>
          <DownloadButton onClick={downloadImage}>
            <DownloadRounded style={{ fontSize: "18px" }} />
          </DownloadButton>
        </div>
      </HoverOverlay>
    </Card>
  );
};

export default ImageCard;
