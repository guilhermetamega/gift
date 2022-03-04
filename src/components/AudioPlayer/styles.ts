import styled from "styled-components";
import theme from "styles/theme";

export const AudioContainerWrapper = styled.div`
  background-color: ${theme.colors.yellow};
  padding: 10px;
  margin: 10px 50px;
  border-radius: 2.3rem;
  text-align: center;

  audio {
    width: 100%;
  }
  audio::-webkit-media-controls-enclosure {
    background-color: ${theme.colors.yellow};
  }
  audio::-webkit-media-controls-mute-button,
  audio::-webkit-media-controls-play-button {
    border-radius: 1rem;
    background-color: ${theme.colors.green};
  }

  audio::-webkit-media-controls-mute-button:hover,
  audio::-webkit-media-controls-play-button:hover {
    border-radius: 1rem;
    background-color: ${theme.colors.red};
  }

  audio::-webkit-media-controls-current-time-display,
  audio::-webkit-media-controls-time-remaining-display {
    color: ${theme.colors.darkGray};
    font-family: "Poppins", sans-serif;
    font-size: 20px;
  }
`;

export const AudioWrapper = styled.audio`
  background-color: ${theme.colors.yellow};
`;
