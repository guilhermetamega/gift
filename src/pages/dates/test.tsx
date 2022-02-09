import Title from "../../components/Title";
import PageTitle from "../../components/PageTitle";
import TextBox from "../../components/TextBox";
import P from "../../components/Paragraph";
import AudioPlayer from "../../components/AudioPlayer";

export default function Home() {
  return (
    <>
      <PageTitle />
      <Title>★04/01/20★</Title>
      <TextBox>
        <P>Primeiro encontro</P>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus autem
        optio dicta, libero aliquid laboriosam corporis, minus provident quam
        quisquam eaque excepturi, sint voluptatem iusto ad quis quasi at ex!
      </TextBox>
      <AudioPlayer src="/audioOgg.ogg" />
    </>
  );
}
