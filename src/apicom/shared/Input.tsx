import React from 'react';
import styled from 'styled-components';

const InputWrapper = styled.label<{ color: string }>`
  align-items: center;
  border-radius: var(--size-m);
  border: var(--size-s) solid ${(p) => p.color};
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  height: var(--size-xl);
  margin: var(--size-s) 0;
  width: 100%;
  overflow: hidden;
`;

const LabelText = styled.span<{ color: string }>`
  background-color: ${(p) => p.color};
  color: var(--color-black);
  font-weight: bold;
  padding: var(--size-m) var(--size-xl);
  text-align: center;
`;

const InputElement = styled.input<{ color: string }>`
  background-color: transparent;
  border-radius: var(--size-m);
  border: var(--size-s) solid ${(p) => p.color};
  color: var(--color-white);
  flex-grow: 1;
  font-size: var(--size-m);
  font-family: var(--font-data);
  height: calc(100%);
  margin: calc(var(--size-s) * -1);
  padding: var(--size-s);
  &:focus {
    outline: none;
  }
`;

type InputProps = {
  color: string;
  id: string;
  labelText: string;
};

const Input: React.FunctionComponent<InputProps> = ({
  color,
  id,
  labelText,
}) => {
  return (
    <InputWrapper color={color}>
      <LabelText color={color}>{labelText}</LabelText>
      <InputElement id={id} color={color} />
    </InputWrapper>
  );
};

export default Input;
