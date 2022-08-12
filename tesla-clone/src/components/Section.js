import React from 'react'
import styled from "styled-components"
import Fade from 'react-reveal/Fade'; /* React reveal library is installed and used here to animate the fade left and bottom of ItemText and ButtonGroup. */


/* props is nothing but the passing of parameters. The props are passed as objects with 'key:value' pairs and can be accessed using the '.' operator. */ 
/* The below function can also be written as,
   function Section({ title, description, leftBtnText, rightBtnText }) --> and the parameters can be called inside the tags as <h1>{ title }</h1> , <p>{ description }</p> , etc..
   This method is called unpacking of props/objects */
/* { props.rightBtnText && 
                    <RightButton>
                        { props.rightBtnText }
                    </RightButton>
                }
    The above code says that, if the right button is present, then include it, otherwise just include the left button (so that the left button will be centered by default instead of allotting space for the right button) */
function Section(props) {
  return (
    <Wrap bgImage = { props.backgroundImg }>
        <Fade bottom>
            <ItemText>
                <h1>{ props.title }</h1>
                <p>{ props.description }</p>
            </ItemText>
        </Fade>
        <Buttons>
            <Fade bottom>
                <ButtonGroup>
                    <LeftButton>
                        { props.leftBtnText }
                    </LeftButton>
        
                    { props.rightBtnText && 
                        <RightButton>
                            { props.rightBtnText }
                        </RightButton>
                    }                
                </ButtonGroup>
            </Fade>
            <DownArrow src="./images/down-arrow.svg" />
        </Buttons>

    </Wrap>
  )
}

export default Section

/* styled-components library is being used here to style the tags/components directly in the js file instead of using a css file with class names. */
/* Name --> (Wrap) does not matter. You can name whatever you want. Example: Container1,Container2,X,Y,Z.... */

/* display: flex; --> This will make the contents of the container to occupy only the necessary width and put them together in a single row if there is any extra space/width available next to the previous content,  
   justify-content: center; --> This will center-align the content horizontally,
   align-items: center; --> This will center-align the items/content vertically */

/* Since the flex-direction was changed to column, it will interchange the working of justify-content and align-items */

/* justify-content: space-between; --> This will space the contents equally */

/* Passing the props through an empty function to call the images of different sections */
const Wrap = styled.div`                    
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: ${(props) => `url("./images/${props.bgImage}")` };
`
const ItemText = styled.div`
    color: rgb(23, 26, 32);
    padding-top: 15vh;
    text-align: center;

    h1 {
        font-weight: 500;
        font-size: 40px;
    }

    p {
        padding-top: 6px;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
    }
`
const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`
/* display: flex; --> This will make the contents of the container to occupy only the necessary width and put them together in a single row if there is any extra space/width available next to the previous content,  
   justify-content: center; --> This will center-align the content horizontally,
   align-items: center; --> This will center-align the items/content vertically,
   cursor: pointer; --> This will make the cursor into a finger pointer when you move the cursor over the buttons */ 
const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center; 
    align-items: center;
    border-radius: 100px;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
    font-weight: bold;
    :hover {
        outline: 3px solid rgba(23, 26, 32, 0.8);
        border: 2px solid white;
    }
`
/* styled(LeftButton) --> It will create a RightButton div inheriting the styling from LeftButton div mentioned above. */
const RightButton = styled(LeftButton)`
    background-color: rgba(244, 244, 244, 0.65);
    color: rgba(23, 26, 32, 0.8);
    :hover {
        outline: 3px solid rgba(244, 244, 244, 0.65);
        border: 2px solid rgba(23, 26, 32, 0.8);
    }
`
const DownArrow = styled.img`
    height: 40px;
    animation: animateDown infinite 1.5s;
`
const Buttons = styled.div`
`