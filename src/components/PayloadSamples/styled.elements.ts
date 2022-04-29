import { transparentize } from 'polished';
import styled from '../../styled-components';
import { StyledDropdown } from '../../common-elements';

export const MimeLabel = styled.div`
  padding: 12px 220px 12px 16px;
  margin: 0 0 10px 0;
  display: block;
  font-family: ${({ theme }) => theme.typography.headings.fontFamily};
  font-size: 14px;
  line-height: 1.5em;
  color: #fff;
  font-weight: 600;
  word-break: break-word;
`;

export const DropdownLabel = styled.span`
  font-family: ${({ theme }) => theme.typography.headings.fontFamily};
  font-size: 12px;
  position: absolute;
  z-index: 1;
  top: -11px;
  left: 12px;
  font-weight: ${({ theme }) => theme.typography.fontWeightBold};
  color: ${({ theme }) => transparentize(0.3, theme.rightPanel.textColor)};
`;

export const DropdownWrapper = styled.div`
  position: relative;
  background: #3E2593;
  margin: -20px -20px 0;
  border-radius: 6px 6px 0 0;
`;

export const InvertedSimpleDropdown = styled(StyledDropdown)`
  && {
    margin-left: 10px;
    text-transform: none;
    font-size: 0.929em;
    margin: 0 0 10px 0;
    display: block;
    background-color: ${({ theme }) => transparentize(0.6, theme.rightPanel.backgroundColor)};
    font-size: 1em;
    border: none;
    padding: 0.9em 1.6em 0.9em 0.9em;
    box-shadow: none;
    &:hover,
    &:focus-within {
      border: none;
      box-shadow: none;
    }
    &:focus-within {
      background-color: ${({ theme }) => transparentize(0.3, theme.rightPanel.backgroundColor)};
    }

    .dropdown-arrow {
      border-top-color: ${({ theme }) => theme.rightPanel.textColor};
    }
    .dropdown-selector-value {
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      color: ${({ theme }) => theme.rightPanel.textColor};
    }

    .dropdown-selector-content {
      margin: 0;
      margin-top: 2px;
      .dropdown-option {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
    }
  }
`;

export const NoSampleLabel = styled.div`
  font-family: ${props => props.theme.typography.code.fontFamily};
  font-size: 12px;
  color: #ee807f;
`;
