import styled from "styled-components";
import { Flex } from "../Box";

const StyledBottomNav = styled(Flex)`
  position: fixed;
  bottom: 0px;
  width: 100%;
  padding: 5px 8px;
  background: ${({ theme }) => theme.colors.backgroundAlt};
  border-top: 1px solid ${({ theme }) => theme.colors.cardBorder};
  padding-bottom: env(safe-area-inset-bottom);
  html[data-useragent*="TokenPocket_iOS"] & {
    padding-bottom: 45px;
  }
  z-index: 20;
  background: rgba(255,255,255,0.03);
  box-shadow: inset 0px 0px 22.0779px rgb(255 255 255 / 5%), inset 0px 1.2987px 1.2987px rgb(255 255 255 / 15%);
  backdrop-filter: blur(27.9221px);
`;

export default StyledBottomNav;
