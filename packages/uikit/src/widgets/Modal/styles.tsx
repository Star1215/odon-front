import React from "react";
import styled from "styled-components";
import Flex from "../../components/Box/Flex";
import { MotionBox } from "../../components/Box";
import { ArrowBackIcon, CloseIcon } from "../../components/Svg";
import { IconButton } from "../../components/Button";
import { ModalProps } from "./types";

export const mobileFooterHeight = 73;

export const ModalHeader = styled.div<{ background?: string }>`
  align-items: center;
  background: transparent;
  border-bottom: 1px solid ${({ theme }) => theme.colors.cardBorder};
  display: flex;
  padding: 12px 24px;

  // ${({ theme }) => theme.mediaQueries.md} {
  //   background: ${({ background }) => background || "transparent"};
  // }
  background: rgba(255, 255, 255, 0.03);
  box-shadow: inset 0px 0px 22.0779px rgba(255, 255, 255, 0.05), inset 0px 1.2987px 1.2987px rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(13.961px);
`;

export const ModalTitle = styled(Flex)`
  align-items: center;
  flex: 1;

`;

export const ModalBody = styled(Flex)`
  flex-direction: column;
  overflow-y: auto;
  max-height: calc(90vh - ${mobileFooterHeight}px);
  ${({ theme }) => theme.mediaQueries.md} {
    display: flex;
    max-height: 90vh;
  }
`;

export const ModalCloseButton: React.FC<React.PropsWithChildren<{ onDismiss: ModalProps["onDismiss"] }>> = ({
  onDismiss,
}) => {
  return (
    <IconButton variant="text" onClick={onDismiss} aria-label="Close the dialog">
      <CloseIcon color="primary" />
    </IconButton>
  );
};

export const ModalBackButton: React.FC<React.PropsWithChildren<{ onBack: ModalProps["onBack"] }>> = ({ onBack }) => {
  return (
    <IconButton variant="text" onClick={onBack} area-label="go back" mr="8px">
      <ArrowBackIcon color="primary" />
    </IconButton>
  );
};

export const ModalContainer = styled(MotionBox)<{ $minWidth: string }>`
  overflow: hidden;
  background: ${({ theme }) => theme.modal.background};
  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-radius: 32px 32px 0px 0px;
  width: 100%;
  max-height: calc(var(--vh, 1vh) * 100);
  z-index: ${({ theme }) => theme.zIndices.modal};
  position: absolute;
  min-width: ${({ $minWidth }) => $minWidth};
  bottom: 0;
  max-width: none !important;
  min-height: 300px;

  background: rgba(255, 255, 255, 0.03);
  box-shadow: inset 0px 0px 22.0779px rgba(255, 255, 255, 0.05), inset 0px 1.2987px 1.2987px rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(13.961px);
  background-image: url('/images/bg-dark.png');

  ${({ theme }) => theme.mediaQueries.md} {
    width: auto;
    position: auto;
    bottom: auto;
    border-radius: 32px;
    max-width: 100%;
    max-height: 100vh;
  }
`;
