import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { MoviesActionType } from "../../store/types";
import * as S from "./styles";

export interface SearchBarProps {
  onInputChange: (searchPhrase: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onInputChange }) => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState<string>();

  useEffect(() => {
    setValue(searchParams.get("search") || "");
  }, [searchParams]);

  const changeInput = useCallback(
    (ev: React.FormEvent<HTMLInputElement>) => {
      const target = ev.target as HTMLInputElement;
      if (target.value === "") {
        searchParams.delete("search");
        setSearchParams(searchParams);
        dispatch({ type: MoviesActionType.getMovies });

        return;
      }

      setSearchParams({ search: target.value });
      onInputChange(target.value);
    },
    [dispatch, onInputChange, searchParams, setSearchParams]
  );

  return (
    <S.Input
      value={value}
      placeholder={"Search a movie..."}
      minLength={1}
      debounceTimeout={500}
      onChange={changeInput}
    />
  );
};

export default SearchBar;
