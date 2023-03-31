import {
  type Dispatch,
  type FC,
  type ReactElement,
  type SetStateAction,
} from 'react';
import { FaBars } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { Button } from '../Button/Button';
import { Logo } from '../Images';
import * as Styles from './styles/Header.styles';

interface IHeaderProps {
  show: Dispatch<SetStateAction<boolean>>;
  visible?: boolean;
  navVisible: boolean;
}

export const Header: FC<IHeaderProps> = ({ show, visible }): ReactElement => {
  return (
    <Styles.StyledHeaderContainer>
      <Styles.StyledHeaderWrapper>
        <>
          <img src={Logo} alt="" />
          <Styles.StyledHeaderNav>
            <NavLink to="/">
              <li>Home</li>
            </NavLink>
            <NavLink to="/">
              <li>Membership</li>
            </NavLink>
            <NavLink to="/">
              <li>Our Story</li>
            </NavLink>
          </Styles.StyledHeaderNav>
          <Styles.StyledHeaderButton>
            <Button
              width="248px"
              height="57px"
              background="#1c4edf"
              color="#fff"
              border="none"
              borderRadius="10px"
              fontSize="16px"
            >
              Join our Waitlist
            </Button>
          </Styles.StyledHeaderButton>
          <Styles.StyledHeaderButtonBars
            onClick={() => {
              show(!visible);
            }}
          >
            <FaBars size={24} />
          </Styles.StyledHeaderButtonBars>
        </>
      </Styles.StyledHeaderWrapper>
    </Styles.StyledHeaderContainer>
  );
};
