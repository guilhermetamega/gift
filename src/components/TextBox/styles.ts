import styled from "styled-components";

export const TextWrapper = styled.h3`
  color: ${(props) => props.theme.colors.darkGray};
  font-weight: 200;
  font-size: 40px;
  padding: 10px;
  text-align: center;
  animation: typing 3.5s steps(80, end);

  @keyframes typing {
    from {
      color: ${(props) => props.theme.colors.yellow};
      width: 0;
    }
    to {
      color: ${(props) => props.theme.colors.darkGray};
      width: 100%;
    }
  }
`;
export const TextBoxWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.yellow};
  box-shadow: 0px 0px 20px black;
  margin: 25px;
  border-radius: 2.3rem;
  border-style: solid;
  border-color: ${(props) => props.theme.colors.yellow};
  border-width: 5px;
`;
