import styled from "styled-components";

export const AudioContainerWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.yellow};
  padding: 10px;
  margin: 30px;
  border-radius: 2.3rem;
  text-align: center;

  audio::-webkit-media-controls-enclosure {
    background-color: ${(props) => props.theme.colors.yellow};
  }
  audio::-webkit-media-controls-mute-button,
  audio::-webkit-media-controls-play-button {
    border-radius: 1rem;
    background-color: ${(props) => props.theme.colors.green};
  }

  audio::-webkit-media-controls-mute-button:hover,
  audio::-webkit-media-controls-play-button:hover {
    border-radius: 1rem;
    background-color: ${(props) => props.theme.colors.red};
  }

  audio::-webkit-media-controls-current-time-display,
  audio::-webkit-media-controls-time-remaining-display {
    color: ${(props) => props.theme.colors.darkGray};
    font-family: "Poppins", sans-serif;
  }
`;

export const AudioWrapper = styled.audio`
  background-color: ${(props) => props.theme.colors.yellow};
`;
