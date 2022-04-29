import styled, { css, extensionsHook } from '../styled-components';

const headerFontSize = {
  1: '24px',
  2: '20px',
  3: '1.27em',
};

const headerFontWeight = {
  1: '600',
  2: '500',
  3: '500'
}

export const headerCommonMixin = level => css`
  font-family: ${({ theme }) => theme.typography.headings.fontFamily};
  font-weight: ${headerFontWeight[level]};
  font-size: ${headerFontSize[level]};
  line-height: ${({ theme }) => theme.typography.headings.lineHeight};
`;

export const H1 = styled.h1`
  ${headerCommonMixin(1)};
  color: ${({ theme }) => theme.colors.text.primary};

  ${extensionsHook('H1')};
`;

export const H2 = styled.h2`
  ${headerCommonMixin(2)};
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0 0 20px;

  ${extensionsHook('H2')};
`;

export const H3 = styled.h2`
  ${headerCommonMixin(3)};
  color: ${({ theme }) => theme.colors.text.primary};

  ${extensionsHook('H3')};
`;

export const RightPanelHeader = styled.h3`
  color: ${({ theme }) => theme.rightPanel.textColor};

  ${extensionsHook('RightPanelHeader')};

  font-size: 14px;
  margin-top: 24px;
  margin-bottom: 16px;
}
`;

export const UnderlinedHeader = styled.h5`
  margin: 1em 0 1em 0;
  color: #A5A6A8;
  font-weight: 500;
  text-transform: uppercase;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;

  &:after {
    content: '';
    display: block;
    flex: 1;
    height: 1px;
    background: #D7DBDF;
    margin: 0 8px;
  }

  ${extensionsHook('UnderlinedHeader')};
`;
