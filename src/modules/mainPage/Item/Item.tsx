import React from "react";
import { Items } from "../../../api/useFetch";
import messages from "../../../constants/messages";
import * as S from "./styles";

const Item = React.memo(({ title, overview, original_language }: Items) => (
    <S.Item>
      <S.Name>{title}</S.Name>
      {overview && (
        <S.SubElem>
          <S.Desc>{messages.overviewDesc}</S.Desc> {overview}
        </S.SubElem>
      )}
      {original_language && (
        <S.SubElem>
          <S.Desc>{messages.originalLanguageDesc}</S.Desc> {original_language}
        </S.SubElem>
      )}
    </S.Item>
  )
);

export default Item;
