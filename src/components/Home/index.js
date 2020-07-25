import React from  "react";
import styled from "styled-components";

import Card from "../Card";
import CodingSvg from "../../static/coding.svg";
import PencilSvg from "../../static/pencil.svg";
import HumanResourcesSvg from "../../static/human-resources.svg";


/**
 * Setup for the styled components to be strictly used by the HomePage
 */
const offsetMargin = { paddingTop: "100px" };

const CenteredText = styled.div`
  text-align: center;
`

const StyledHeader = styled.h1`
  font-weight: 700;
  letter-spacing: .5em;
  margin-top: 3%;
  margin-bottom: -3px;
`

const Description = styled.p`
  margin-top: -5px;
  font-weight: 400;
  font-size: 1.3em;
`

const Container = styled.div`
  margin: 4% 15%;
  display: flex;
  justify-content: space-evenly;
`

const Separator = styled.hr`
  border-top: 2px solid orange;
  width: 35%;
`


/**
 * HomePage functional component. Combines several styled components to generate the
 * home page.
 */
function HomePage() {
  const cards = [
    {svg: CodingSvg, text: "Build."},
    {svg: PencilSvg, text: "Think."},
    {svg: HumanResourcesSvg, text: "Pay Me."}
  ].map(c => <Card svg={c.svg} text={c.text} /> );

  return (
    <div style={offsetMargin}>
      <CenteredText>
        <StyledHeader>Darian Nwankwo</StyledHeader>
        <Separator />
        <Description>
          forgive my tactlessness, i'm much better at maths. <br />
          pending: phd student @CornellCS 🙇🏾‍♂️
        </Description>
      </CenteredText>
      <Container>
        { cards }
      </Container>
    </div>
  )
}


export default HomePage;