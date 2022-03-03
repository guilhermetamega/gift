import Title from "../../components/Title";
import PageTitle from "../../components/PageTitle";
import Quizz from "../../components/QuizzBar";

import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Quiz() {
  return (
    <>
      <PageTitle />
      <Title src="/home.png" href="/">
        <FontAwesomeIcon icon={faQuestionCircle} />
      </Title>
      <Quizz
        title="What's the formal form?"
        answer_1="Hi"
        answer_2="Hello"
        answer_3="Hey"
        correct={1}
      />
      <Quizz
        title="Oie"
        answer_1="Hi"
        answer_2="Hello"
        answer_3="Hey"
        correct={2}
      />
    </>
  );
}
