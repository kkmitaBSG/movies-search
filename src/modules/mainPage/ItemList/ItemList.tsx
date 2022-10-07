import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import useFetch, { LoadingStatus } from "../../../api/useFetch";
import Item from "../Item/Item";
import messages from "../../../constants/messages";
import * as S from "./styles";

const defaultValue = "Rick";

const ItemList = () => {
  const [searchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState(
    searchParams.get("searchParam") || defaultValue
  );

  const { status, results } = useFetch(searchValue);

  const items = results?.map((item) => <Item key={item.id} {...item} />);

  const changeInput = (ev: any) => {
    // there can not be empty value in req parameter
    if (ev.target.value === "") {
      return setSearchValue(defaultValue);
    }
    setSearchValue(ev.target.value);
  };

  return (
    <>
      <S.InputText>{messages.searchValue} </S.InputText>

      <S.Input
        placeholder={searchValue}
        minLength={1}
        debounceTimeout={500}
        onChange={changeInput}
      />

      <S.Wrapper>
        {status === LoadingStatus.Fetching ? (
          <S.Loader>
            Loading...
          </S.Loader>
        ) : (
          items
        )}
      </S.Wrapper>
    </>
  );
};

export default ItemList;
