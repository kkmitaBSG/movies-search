import React from "react";
import { Movie } from "../../store/types";
import * as S from "./styles";

const Item = React.memo(({ id, title, overview, poster }: Movie) => (
  <S.Item to={`details/${id}`} poster={poster}>
    <S.AdditionalInfo>
      <S.Name>{title}</S.Name>
      <S.SubElem>{overview}</S.SubElem>
    </S.AdditionalInfo>
  </S.Item>
));

export default Item;
