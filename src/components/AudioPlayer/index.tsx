import * as S from "./styles";

export type AudioPlayerProps = {
  src?: string;
};

const AudioPlayer = ({ src }: AudioPlayerProps) => {
  return (
    <S.AudioContainerWrapper>
      <S.AudioWrapper src={src} controls />
    </S.AudioContainerWrapper>
  );
};

export default AudioPlayer;
