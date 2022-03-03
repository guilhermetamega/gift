import { useState } from "react";
import Button from "../Button";
import * as S from "./styles";

export type QuizzProps = {
  // children?: React.ReactNode;
  question?: string;
  text_1?: string;
  text_2?: string;
  text_3?: string;
  correct?: number;
};

const QuizzBar = ({
  question,
  text_1,
  text_2,
  text_3,
  correct,
}: QuizzProps) => {
  const [response, setResponse] = useState(0);
  return (
    <S.QuizzBackgroundWrapper>
      <S.QuizzTitleWrapper>{question}</S.QuizzTitleWrapper>
      <S.ButtonGroupWrapper>
        <Button
          color={
            response === 0 ? "default" : response === 1 ? "correct" : "wrong"
          }
          text={text_1}
          onClick={() => setResponse(correct)}
        />
        <Button
          color={
            response === 0 ? "default" : response === 2 ? "correct" : "wrong"
          }
          text={text_2}
          onClick={() => setResponse(correct)}
        />
        <Button
          color={
            response === 0 ? "default" : response === 3 ? "correct" : "wrong"
          }
          text={text_3}
          onClick={() => setResponse(correct)}
        />
      </S.ButtonGroupWrapper>
    </S.QuizzBackgroundWrapper>
  );
};

export default QuizzBar;
