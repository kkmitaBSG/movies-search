import messages from "../../constants/messages";
import ItemList from "./ItemList/ItemList";
import * as S from "./styles";

const MainPage = () => (
  <S.Container>
    <S.Title>{messages.pageContentTitle}</S.Title>
    <ItemList />
  </S.Container>
);

export default MainPage;
