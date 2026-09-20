import React from "react";
import styled from "styled-components";
import Button from "./buttons/button";
import { useLocation, useNavigate } from "react-router";
import { AddRounded, AutoAwesome, WebRounded } from "@mui/icons-material";

const Container = styled.div`
  background: ${({ theme }) => theme.navbar};
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid ${({ theme }) => theme.navbar_border};
  color: ${({ theme }) => theme.menu_primary_text};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 50px;
  z-index: 10;
  @media only screen and (max-width: 600px) {
    padding: 12px 16px;
  }
`;

const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 800;
  font-size: 22px;
  letter-spacing: 0.5px;
  cursor: pointer;

  @media only screen and (max-width: 600px) {
    font-size: 18px;
  }
`;

const BrandIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 10px;
  background: ${({ theme }) => theme.gradient};
  color: ${({ theme }) => theme.white};
  box-shadow: 0 4px 16px ${({ theme }) => theme.glow};
`;

const BrandText = styled.span`
  background: ${({ theme }) => theme.gradient};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  let path = location.pathname.split("/");

  const gotoCreatePost = () => {
    navigate("/post");
  };
  const gottoHome = () => {
    navigate("/");
  };
  return (
    <Container>
      <Brand onClick={gottoHome}>
        <BrandIcon>
          <AutoAwesome style={{ fontSize: "18px" }} />
        </BrandIcon>
        <BrandText>NEURO PIX</BrandText>
      </Brand>
      {path[1] === "post" ? (
        <Button
          text="Explore Posts"
          leftIcon={<WebRounded style={{ fontSize: "18px" }} />}
          onClick={gottoHome}
          type="secondary"
        />
      ) : (
        <Button
          text="Create new post"
          leftIcon={<AddRounded style={{ fontSize: "18px" }} />}
          onClick={gotoCreatePost}
        />
      )}
    </Container>
  );
};

export default Navbar;
