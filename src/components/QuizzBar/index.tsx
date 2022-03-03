import { useState } from "react";
import Button from "../Button";
import * as S from "./styles";

export type QuizzProps = {
  title?: string;
  answer_1?: string;
  answer_2?: string;
  answer_3?: string;
  correct?: number;
};

const QuizzBar = ({
  title,
  answer_1,
  answer_2,
  answer_3,
  correct,
}: QuizzProps) => {
  const [response, setResponse] = useState(0);
  return (
    <S.QuizzBackgroundWrapper>
      <S.QuizzTitleWrapper>{title}</S.QuizzTitleWrapper>
      <S.ButtonGroupWrapper>
        <Button
          color={
            response === 0 ? "default" : response === 1 ? "correct" : "wrong"
          }
          answer={answer_1}
          onClick={() => setResponse(correct)}
        />
        <Button
          color={
            response === 0 ? "default" : response === 2 ? "correct" : "wrong"
          }
          answer={answer_2}
          onClick={() => setResponse(correct)}
        />
        <Button
          color={
            response === 0 ? "default" : response === 3 ? "correct" : "wrong"
          }
          answer={answer_3}
          onClick={() => setResponse(correct)}
        />
      </S.ButtonGroupWrapper>
    </S.QuizzBackgroundWrapper>
  );
};

export default QuizzBar;
