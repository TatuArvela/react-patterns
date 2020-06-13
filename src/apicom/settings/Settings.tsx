import React from 'react';
import styled from 'styled-components';

const SettingsButton = styled.button<{ showSettings: boolean }>`
  background-color: ${(p) =>
    p.showSettings ? 'var(--color-blue)' : 'var(--color-yellow)'};
  border-radius: var(--size-m);
  border: none;
  color: var(--color-black);
  cursor: pointer;
  display: block;
  font-size: var(--size-m);
  font-weight: bold;
  margin: var(--size-s) 0;
  padding: var(--size-m);
  text-align: center;
  text-transform: uppercase;
  transition: all 0.1s ease-in-out;
  width: 100%;

  &:active {
    transform: perspective(100vw) translateZ(calc(var(--size-m) * -1));
  }
`;

const SettingsContainer = styled.div<{ showSettings: boolean }>`
  border-radius: var(--size-m);
  border: var(--size-s) solid var(--color-yellow);
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${(p) => (p.showSettings ? 'var(--size-xl)' : '0')};
  margin: ${(p) =>
    p.showSettings ? 'var(--size-s) 0' : 'calc(var(--size-s) * -1.5) 0'};
  opacity: ${(p) => (p.showSettings ? '1' : '0')};
  overflow: hidden;
  padding: ${(p) => (p.showSettings ? 'var(--size-l)' : '0 var(--size-l)')};
  text-align: center;
  text-transform: uppercase;
  transition: all 0.3s ease-in-out;
`;

type SettingsProps = {
  showSettings: boolean;
  setShowSettings: (showSettings: boolean) => void;
};

const Settings: React.FunctionComponent<SettingsProps> = ({
  showSettings,
  setShowSettings,
}) => {
  return (
    <>
      <SettingsButton
        showSettings={showSettings}
        onClick={() => setShowSettings(!showSettings)}
      >
        Settings
      </SettingsButton>
      <SettingsContainer showSettings={showSettings}>
        Add settings here
      </SettingsContainer>
    </>
  );
};

export default Settings;
