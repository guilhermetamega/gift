import Title from "../../components/Title";
import PageTitle from "../../components/PageTitle";
import Quizz from "../../components/QuizzBar";

import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Quiz() {
  return (
    <>
      <PageTitle title="Quiz" />
      <Title src="/home.png" href="/">
        <FontAwesomeIcon icon={faQuestionCircle} />
      </Title>
      <Quizz
        title="Quem é mais bagunceiro?"
        answer_1="Ele"
        answer_2="Ambos"
        answer_3="Ela"
        correct={1}
      />
      <Quizz
        title="Quem é mais carinhoso?"
        answer_1="Ele"
        answer_2="Ambos"
        answer_3="Ela"
        correct={2}
      />
      <Quizz
        title="Quem é mais engraçado?"
        answer_1="Ele"
        answer_2="Ambos"
        answer_3="Ela"
        correct={1}
      />
      <Quizz
        title="Quem se irrita mais?"
        answer_1="Ele"
        answer_2="Ambos"
        answer_3="Ela"
        correct={3}
      />
      <Quizz
        title="Qual foi o filme que nunca terminaram de assistir?"
        answer_1="Jogos Vorazes"
        answer_2="Trolls 2"
        answer_3="Jogos Vorazes 2"
        correct={3}
      />
      <Quizz
        title="Quem é o mais chato?"
        answer_1="Ele"
        answer_2="Ambos"
        answer_3="Ela"
        correct={1}
      />
      <Quizz
        title="Qual a primeira coisa que comeram juntos quando saíram a 2ª vez?"
        answer_1="Hambúrger"
        answer_2="Açaí"
        answer_3="Pizza"
        correct={2}
      />
      <Quizz
        title="O quanto o Guilherme te ama?"
        answer_1="100"
        answer_2="100000"
        answer_3="10000000000000000000000000000000000"
        correct={3}
      />
      <Quizz
        title="Aceita ser a mulher da minha vida?"
        answer_1="Sim"
        answer_2="CLARO QUE SIM"
        answer_3="SIM"
        correct={2}
      />
      <Quizz
        title="Que venham mais 10000000 datas como essa para comemorarmos"
        answer_1="YEAH"
        answer_2="SIMMM"
        answer_3="VÃO VIR"
        correct={1}
      />
    </>
  );
}
