import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Label = styled.label`
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  padding: 0px 4px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const OutlinedInput = styled.div`
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.card_border};
  background-color: ${({ theme }) => theme.card_light};
  color: ${({ theme }) => theme.text_secondary};
  outline: none;
  padding: 14px;
  display: flex;
  align-items: center;
  gap: 12px;
  transition: all 0.25s ease;
  &:focus-within {
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 0 4px ${({ theme }) => theme.glow};
  }
`;

const Input = styled.input`
  width: 100%;
  font-size: 14px;
  font-family: inherit;
  outline: none;
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.text_primary};
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${({ theme }) => theme.text_secondary};
  }
`;

const TextInput = ({
  label,
  placeholder,
  name,
  value,
  handelChange,
  textArea,
  rows,
  columns,
}) => {
  return (
    <Container>
      <Label>{label}</Label>
      <OutlinedInput>
        <Input
          as={textArea ? "textarea" : "input"}
          name={name}
          rows={rows}
          columns={columns}
          placeholder={placeholder}
          value={value}
          onChange={(e) => handelChange(e)}
        />
      </OutlinedInput>
    </Container>
  );
};

export default TextInput;
