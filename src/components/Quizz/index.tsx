import Button from "../Button";
import * as S from "./styles";

export type QuizzProps = {
  // children?: React.ReactNode;
  question?: string;
  answer_1?: string;
  answer_2?: string;
  answer_3?: string;
};

const Quizz = ({ question, answer_1, answer_2, answer_3 }: QuizzProps) => {
  return (
    <S.QuizzBackgroundWrapper>
      <S.QuizzTitleWrapper>{question}</S.QuizzTitleWrapper>
      <S.ButtonGroupWrapper>
        <Button color="default" answer={answer_1} />
        <Button color="wrong" answer={answer_2} />
        <Button color="correct" answer={answer_3} />
      </S.ButtonGroupWrapper>
    </S.QuizzBackgroundWrapper>
  );
};

export default Quizz;
