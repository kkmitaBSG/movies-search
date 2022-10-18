import { useCallback, useEffect } from "react";
import throttle from "lodash.throttle";
import messages from "../../constants/messages";
import Item from "../../components/Item/Item";
import { useDispatch, useSelector } from "react-redux";
import { MoviesActionType } from "../../store/types";
import { getMovies } from "../../store/selectors";
import { useSearchParams } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";
import * as S from "./styles";

const MoviesPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const { results } = useSelector(getMovies);

  useEffect(() => {
    const searchPhrase = searchParams.get("search");
    dispatch({
      type: MoviesActionType.getMovies,
      searchPhrase,
    });
  }, [dispatch, searchParams]);

  const handleScroll = throttle(() => {
    const searchPhrase = searchParams.get("search");
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 20
    ) {
      dispatch({ type: MoviesActionType.getMoviesNextPage, searchPhrase });
    }
  }, 300);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [dispatch, handleScroll]);

  const onInputChange = useCallback((searchPhrase: string) => {
    dispatch({ type: MoviesActionType.getMovies, searchPhrase });
  }, [dispatch]);

  const items = results?.map((item) => <Item key={item.id} {...item} />);

  return (
    <S.Container>
      <S.Title to="/">{messages.moviesTitle}</S.Title>
      <SearchBar onInputChange={onInputChange} />

      <S.Wrapper>{items}</S.Wrapper>
    </S.Container>
  );
};

export default MoviesPage;
