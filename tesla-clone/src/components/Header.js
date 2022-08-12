import React, {useState} from 'react'
import styled from 'styled-components'
import CloseIcon from '@mui/icons-material/Close';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars)

  return (
    <Container>
      <a>
        <img src="/images/tesla-logo.png" alt="Tesla Logo"/>
      </a>

      <Menu>
        {cars && cars.map((car, index)=>(
          <a key={index} href="#">{car}</a>
        ))}
      </Menu>

      <RightMenu>
        <a href='#'>Shop</a>
        <a href='#'>Tesla Account</a>
        <a href='#' onClick={() => setBurgerStatus(true)}>Menu</a>
      </RightMenu>

      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CloseWrapper>
        {cars && cars.map((car, index)=>(
          <li><a key={index} href="#">{car}</a></li>
        ))}
        <li><a href='#'>Existing inventory</a></li>
        <li><a href='#'>Used inventory</a></li>
        <li><a href='#'>Trade-in</a></li>
        <li><a href='#'>Test Drive</a></li>
      </BurgerNav>
        
    </Container>
  )
}

export default Header

/* top, left, right: 0; --> This will set the width of the container to the extreme left, right and top. Since we are using flex, we need to specify the below to make the container take the rest of the row's width. */
const Container = styled.div`
min-height: 60px;
position: fixed;
display: flex;
align-items: center;
padding: 0 50px;
top: 0;
left: 0;
right: 0;
justify-content: space-between;
z-index: 1;
 a {
  img {
    width: 250px;
    height: 12px;
    padding-right: 150px;
  }
 }
`
/* flex: 1; --> This increase the width of the menu to full-width i.e. occupy the rest of the row. */
const Menu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
  
  a {
    font-size: 14px;
    font-weight: 500;
    flex-wrap: nowrap;
    padding: 4px 15px;
    line-height: 20px;

    :hover {
      border-radius: 12px;
      background-color: hsla(0,0%,0%,.05);
      transition: background-color 0.5s;
    }
  }

  @media(max-width: 768px) {
    display: none;
  }
`
const RightMenu = styled.div`
  display: flex;
  align-items: center;

  a {
    padding: 4px 15px;
    font-weight: 500;
    font-size: 14px;
    flex-wrap: nowrap;
    line-height: 20px;

    :hover {
      border-radius: 12px;
      background-color: hsla(0,0%,0%,.05);
      transition: background-color 0.5s;
    }
  }
`

/* transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'}; --> An if else statement is being performed here, '?' means if the condition is true, ':' means else */
/* translateX(0) and translateX(100) is used to move BurgerNav to the right by 100%(BurgerNav's width), and on a click, bring it back to its original position so that it is visible. */
const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 10;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => props.show ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.2s;

  li {
    padding: 15px 15px;
    border-bottom: 1px solid rgba(0, 0, 0, .2);

    a {
      font-size: 14px;
      font-weight: 500;
    }
  }
`
/* BurgerNav close icon is installed from material UI. */
const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`
/* justify-content: flex-end; --> This will justify the contents from the right. i.e. contents will be aligned from right to left. */
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

`