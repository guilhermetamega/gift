import Title from "../../components/Title";
import PageTitle from "../../components/PageTitle";
import TextBox from "../../components/TextBox";
import P from "../../components/Paragraph";
import Quizz from "../../components/QuizzBar";

export default function quiz() {
  return (
    <>
      <PageTitle />
      <Title src="/home.png" href="/">
        ★04/01/20★
      </Title>
      text
      <Quizz
        question="What's the formal form?"
        text_1="Hi"
        text_2="Hello"
        text_3="Hey"
        correct={1}
      />
      <Quizz
        question="Oie"
        text_1="Hi"
        text_2="Hello"
        text_3="Hey"
        correct={2}
      />
    </>
  );
}
