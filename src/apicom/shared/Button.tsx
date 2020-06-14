import styled from 'styled-components';

const Button = styled.button<{ color: string }>`
  background-color: ${(p) => p.color};
  border-radius: var(--size-m);
  border: none;
  color: var(--color-black);
  cursor: pointer;
  display: block;
  font-family: inherit;
  font-size: var(--size-m);
  font-weight: bold;
  height: var(--size-xl);
  margin: var(--size-s) 0;
  padding: var(--size-m) var(--size-xl);
  text-align: left;
  text-transform: uppercase;
  transition: all 0.1s ease-in-out;
  width: 100%;

  &:active {
    transform: perspective(100vw) translateZ(calc(var(--size-m) * -1));
  }
`;

export default Button;
