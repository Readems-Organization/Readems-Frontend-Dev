import React, { FC, ReactElement, ReactNode } from 'react';
import styled from 'styled-components';

interface IColor {
  color: string;
}

type BoxShadow = {
  outerShadow0: `3px 3px 3px #363636, -2px -3px 3px ${IColor['color']}`;
  outerShadow1: `0 0 0 #363636, 0 0 0 ${IColor['color']}`;
  innerShadow0: `inset 3px 3px 3px #363636, inset -3px -3px 3px${IColor['color']}`;
  innerShadow1: `inset 0px 0px 0px #363636, inset 0px 0px 0px ${IColor['color']}`;
};
export interface BaseButtonProps {
  children: ReactNode;
  height?: string;
  width?: string;
  borderRadius?: string;
  color?: string;
  background?: string;
  fontSize?: string;
  withIcon?: boolean;
  icon?: string;
  iconGap?: string;
  padding?: string;
  inverse?: boolean;
  disabled?: boolean;
  hoverColor?: string;
  hoverBackground?: string;
  textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase' | 'full-width' | 'full-size-kana';
  visibility?: 'visible' | 'hidden';
  border?: string;
  marginTop?: string;
  margin?: string;
  borderWidth?: string;
  hasIcon?: boolean;
  disabledColor?: string;
  boxShadow?: BoxShadow;
}

export const StyledButtonContainer = styled.div<BaseButtonProps>`
  .outerShadow {
    box-shadow: 3px 3px 3px ${(props) => props.background}, -2px -3px 3px ${(props) => props.background};
    /* box-shadow: -1px -1px 3px, -2px -3px 3px; */
  }
  .innerShadow {
    box-shadow: inset 3px 3px 3px ${(props) => props.background}, inset -3px -3px 3px ${(props) => props.background};
  }
  .hoverInShadow {
    position: relative;
    z-index: 1;
  }
  .hoverInShadow:hover {
    box-shadow: 0 0 0 ${(props) => props.background}, 0 0 0 ${(props) => props.background};
  }
  .hoverInShadow:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transition: all 0.3s ease;
    z-index: -1;
  }
  .hoverInShadow:hover:after {
    /* box-shadow: inset 3px 3px 3px ${(props) => props.background}, inset -3px -3px 3px ${(props) =>
      props.background}; */
    /* box-shadow: 0px -1px 0px inset, -2px -2px 2px inset; */
    box-shadow: inset 1px 1px 1px, inset -1px -1px 1px;
    border-radius: 15px;
  }
`;

export const StyledButton = styled.button<BaseButtonProps>`
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};
  font-size: ${(props) => props.fontSize};
  padding: ${(props) => props.padding};
  text-transform: ${(props) => props.textTransform};
  box-shadow: ${(props) => props.boxShadow?.outerShadow0};
  line-height: 1.1875rem;
  font-weight: bold;
  :hover {
    color: ${({ hoverColor }) => hoverColor};
    background: ${({ hoverBackground }) => hoverBackground};
  }
`;

export const Button: FC<BaseButtonProps> = ({
  children,
  background,
  color,
  border,
  borderRadius,
  borderWidth,
  visibility,
  margin,
  hoverColor,
  hoverBackground,
  width,
  withIcon,
  height,
  textTransform,
  padding,
  icon,
  fontSize,
  boxShadow,
}): ReactElement => {
  return (
    <StyledButtonContainer>
      <StyledButton
        background={background}
        color={color}
        height={height}
        width={width}
        hoverBackground={hoverBackground}
        hoverColor={hoverColor}
        border={border}
        borderRadius={borderRadius}
        textTransform={textTransform}
        fontSize={fontSize}
        padding={padding}
        margin={margin}
        boxShadow={boxShadow}
        className="hoverInShadow outerShadow"
      >
        <span>
          {icon} {children}
        </span>
      </StyledButton>
    </StyledButtonContainer>
  );
};

// Button.defaultProps = {
//   background: '#18C1E0',
//   color: '#fff',
// };
