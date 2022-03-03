import Title from "../../components/Title";
import PageTitle from "../../components/PageTitle";
import TextBox from "../../components/TextBox";
import P from "../../components/Paragraph";
import AudioPlayer from "../../components/AudioPlayer";
import Quizz from "../../components/QuizzBar";
import CardGroup from "components/CardGroup";
import Card from "components/Card";
import CardTitle from "components/CardTitle";
import CardSubtitle from "components/CardSubtitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAudio } from "@fortawesome/free-solid-svg-icons";

export default function Audios() {
  return (
    <>
      <PageTitle />
      <Title src="/home.png" href="/">
        <FontAwesomeIcon icon={faFileAudio} />
      </Title>

      <CardGroup>
        <Card color="green">
          <CardTitle>Som 1</CardTitle>
          <AudioPlayer src="/audios/audioOgg.ogg" />
          <AudioPlayer src="/audios/audioOgg.ogg" />
          <AudioPlayer src="/audios/audioOgg.ogg" />
          <CardSubtitle>Os áudios da propaganda enganosa -_-</CardSubtitle>
        </Card>
      </CardGroup>

      <CardGroup>
        <Card color="red">
          <CardTitle>Som 2</CardTitle>
          <AudioPlayer src="/audios/audioOgg.ogg" />
          <AudioPlayer src="/audios/audioOgg.ogg" />
          <CardSubtitle>Os áudios da propaganda enganosa -_-</CardSubtitle>
        </Card>
      </CardGroup>
    </>
  );
}
