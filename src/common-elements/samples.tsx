import styled from '../styled-components';
import { PrismDiv } from './PrismDiv';

export const SampleControls = styled.div`
  position: absolute;
  top: 10px;
  right: 16px;

  text-align: right;
  &:focus-within {
    opacity: 1;
  }
  > button {
    opacity: 0.7;
    background-color: transparent;
    border: 0;
    color: #fff;
    padding: 2px 10px;
    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-size: 14px;
    line-height: ${({ theme }) => theme.typography.lineHeight};
    font-weight: 600;
    cursor: pointer;
    outline: 0;

    :hover,
    :focus {
      background: rgba(255, 255, 255, 0.1);
    }
  }

  > button.copy-button {
    background-color: #FF5913;
    opacity: 1;
    border-radius: 4px;

    :hover,
    :focus {
      background: #FF7B43;
    }
  }
`;

export const SampleControlsWrap = styled.div`
  &:hover ${SampleControls} {
    opacity: 1;
  }
`;

export const StyledPre = styled(PrismDiv.withComponent('pre'))`
  font-family: ${props => props.theme.typography.code.fontFamily};
  font-size: ${props => props.theme.typography.code.fontSize};
  overflow-x: auto;
  margin: 0;

  white-space: ${({ theme }) => (theme.typography.code.wrap ? 'pre-wrap' : 'pre')};
`;
