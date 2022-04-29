import styled, { extensionsHook, media } from '../styled-components';
import { deprecatedCss } from './mixins';

export const PropertiesTableCaption = styled.caption`
  text-align: right;
  font-size: 0.9em;
  font-weight: normal;
  color: ${props => props.theme.colors.text.secondary};
`;

export const PropertyCell = styled.td<{ kind?: string }>`
  border-left: 1px solid #D7DBDF;
  box-sizing: border-box;
  position: relative;
  padding: 10px 10px 10px 0;

  ${media.lessThan('small')`
    display: block;
    overflow: hidden;
  `}

  tr:first-of-type > &,
  tr.last > & {
    border-left-width: 0;
    background-position: top left;
    background-repeat: no-repeat;
    background-size: 1px 100%;
  }

  tr:first-of-type > & {
    background-image: linear-gradient(
      to bottom,
      transparent 0%,
      transparent 27px,
      #D7DBDF 10px,
      #D7DBDF 100%
    );
  }

  tr.last > & {
    background-image: linear-gradient(
      to bottom,
      #D7DBDF 0%,
      #D7DBDF 15px,
      transparent 10px,
      transparent 100%
    );
  }

  tr.last + tr > & {
    border-left-color: transparent;
  }

  tr.last:first-child > & {
    background: none;
    border-left-color: transparent;
  }
`;

export const PropertyCellWithInner = styled(PropertyCell)`
  padding: 0;
`;

export const PropertyNameCell = styled(PropertyCell)`
  vertical-align: top;
  border-bottom: 1px dashed #D6D7D8;
  line-height: 20px;
  white-space: nowrap;
  font-size: 14px;
  font-family: ${props => props.theme.typography.code.fontFamily};

  &.deprecated {
    ${deprecatedCss};
  }

  &:after {
    content: '';
    position: absolute;
    display: block;
    width: 27px;
    height: 3px;
    background: #fff;
    bottom: -2px;
    left: 0;
    z-index: 2;
  }

  tr.expanded &,
  tr.last & {
    border-bottom: none;
  }

  tr.first &:after {
    left: 1px;
  }

  ${media.lessThan('small')`
    border-bottom: none;
  `}

  ${({ kind }) => (kind !== 'field' ? 'font-style: italic' : '')};

  ${extensionsHook('PropertyNameCell')};
`;

export const PropertyDetailsCell = styled.td`
  border-bottom: 1px dashed #D6D7D8;
  padding: 7px 0 10px;
  width: ${props => props.theme.schema.defaultDetailsWidth};
  box-sizing: border-box;

  tr.expanded &,
  tr.last & {
    border-bottom: none;
  }

  ${media.lessThan('small')`
    padding: 0 20px;
    border-bottom: none;
    border-left: 1px solid #D7DBDF;

    tr.last > & {
      border-left: none;
    }
  `}

  ${extensionsHook('PropertyDetailsCell')};
`;

export const PropertyBullet = styled.span`
  color: #D7DBDF;
  font-family: ${props => props.theme.typography.code.fontFamily};
  margin-right: 10px;

  &::before {
    content: '';
    display: inline-block;
    position: relative;
    top: 3px;
    vertical-align: middle;
    width: 8px;
    height: 6px;
    border-top: 1px solid #D7DBDF;
  }

  &::after {
    content: '';
    display: inline-block;
    position: relative;
    top: 3px;
    vertical-align: middle;
    width: 8px;
    border-top: 1px solid #D7DBDF;
    height: 6px;
  }

  tr.last:not(.first) & {
    &::before {
      border-top: 0;
      top: -3px;
      border-bottom: 1px solid #D7DBDF;
      border-left: 1px solid #D7DBDF;
      border-bottom-left-radius: 6px;
    }

    &::after {
      border-top: 0;
      top: -3px;
      border-bottom: 1px solid #D7DBDF;
    }
  }

  tr.first:not(.last) & {
    &::before {
      border-top: 1px solid #D7DBDF;
      border-left: 1px solid #D7DBDF;
      border-top-left-radius: 6px;
    }

    &::after {
      border-top: 1px solid #D7DBDF;
    }
  }
`;

export const InnerPropertiesWrap = styled.div`
  padding: ${({ theme }) => theme.schema.nestingSpacing};
`;

export const PropertiesTable = styled.table`
  border-collapse: separate;
  border-radius: 3px;
  font-size: 14px;
  color: #56535F;

  border-spacing: 0;
  width: 100%;

  > tr {
    vertical-align: middle;
  }

  ${media.lessThan('small')`
    display: block;
    > tr, > tbody > tr {
      display: block;
    }
  `}

  ${media.lessThan('small', false, ' and (-ms-high-contrast:none)')`
    td {
      float: left;
      width: 100%;
    }
  `}

  &
    ${InnerPropertiesWrap},
    &
    ${InnerPropertiesWrap}
    ${InnerPropertiesWrap}
    ${InnerPropertiesWrap},
    &
    ${InnerPropertiesWrap}
    ${InnerPropertiesWrap}
    ${InnerPropertiesWrap}
    ${InnerPropertiesWrap}
    ${InnerPropertiesWrap} {
    margin: ${({ theme }) => theme.schema.nestingSpacing};
    margin-right: 0;
    background: ${({ theme }) => theme.schema.nestedBackground};
  }

  &
    ${InnerPropertiesWrap}
    ${InnerPropertiesWrap},
    &
    ${InnerPropertiesWrap}
    ${InnerPropertiesWrap}
    ${InnerPropertiesWrap}
    ${InnerPropertiesWrap},
    &
    ${InnerPropertiesWrap}
    ${InnerPropertiesWrap}
    ${InnerPropertiesWrap}
    ${InnerPropertiesWrap}
    ${InnerPropertiesWrap}
    ${InnerPropertiesWrap} {
    background: #ffffff;
  }
`;
