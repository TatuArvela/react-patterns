import React from 'react';
import styled from 'styled-components';

import Button from '../shared/Button';

const SettingsContainer = styled.div<{ showSettings: boolean }>`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${(p) => (p.showSettings ? 'var(--size-xl)' : '0')};
  margin: ${(p) => (p.showSettings ? 'var(--size-s) 0' : '0')};
  opacity: ${(p) => (p.showSettings ? '1' : '0')};
  overflow: hidden;
  padding: ${(p) => (p.showSettings ? 'var(--size-l)' : '0 var(--size-l)')};
  text-align: center;
  font-family: var(--font-data);
  transition: opacity 0.1s, height 0.1s, padding 0.1s;
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
      <Button
        color="var(--color-orange)"
        onClick={() => setShowSettings(!showSettings)}
      >
        {showSettings ? 'Hide settings' : 'Show settings'}
      </Button>
      <SettingsContainer showSettings={showSettings}>
        Add settings here
      </SettingsContainer>
    </>
  );
};

export default Settings;
