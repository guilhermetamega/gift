import styled from "styled-components";

export const AudioContainerWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.yellow};
  padding: 20px;
  border-radius: 2rem;
  text-align: center;

  audio::-webkit-media-controls-enclosure {
    background-color: ${(props) => props.theme.colors.yellow};
  }
  audio::-webkit-media-controls-mute-button {
    background-color: ${(props) => props.theme.colors.green};
  }
`;

export const AudioWrapper = styled.audio`
  background-color: ${(props) => props.theme.colors.yellow};
  border-radius: 2rem;
  text-align: center;
`;
