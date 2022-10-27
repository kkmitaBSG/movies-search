import { useCallback, useEffect, useState } from "react";
import messages from "../../constants/messages";
import Item from "../../components/Item/Item";
import { useDispatch, useSelector } from "react-redux";
import { MoviesActionType } from "../../store/types";
import { getMovies, getSearchMovies } from "../../store/selectors";
import { useSearchParams } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";
import { handleScroll as fetchNextPage } from "./helpers";
import * as S from "./styles";

const MoviesPage = () => {
  const dispatch = useDispatch();
  const [isScrollTop, setIsScrollTop] = useState<boolean>(true);
  const [searchParams] = useSearchParams();

  const searchPhrase = searchParams.get("search");

  const { results } = useSelector(searchPhrase ? getSearchMovies : getMovies);

  useEffect(() => {
    dispatch({
      type: MoviesActionType.getMovies,
      searchPhrase,
    });
  }, [dispatch, searchParams, searchPhrase]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsScrollTop(window.scrollY < 20);
      fetchNextPage(searchParams, dispatch);
    });

    return () => {
      window.removeEventListener("scroll", () => {
        setIsScrollTop(window.scrollY < 20);
        fetchNextPage(searchParams, dispatch);
      });
    };
  }, [dispatch, searchParams]);

  const onInputChange = useCallback(
    (searchPhrase: string) => {
      dispatch({ type: MoviesActionType.getMovies, searchPhrase });
    },
    [dispatch]
  );

  const onJumpTopClick = useCallback(() => {
    window.scrollTo(0, 0);
  }, []);

  const items = results?.map((item) => <Item key={item.id} {...item} />);

  return (
    <S.Container>
      <S.Header isScrollTop={isScrollTop}>
        <S.TitleWrapper>
          <S.BiCameraMovie />
          <S.Title to="/">{messages.moviesTitle}</S.Title>
        </S.TitleWrapper>
        <SearchBar onInputChange={onInputChange} />
      </S.Header>

      <S.Wrapper>{items}</S.Wrapper>

      {!isScrollTop && (
        <S.JumpTop onClick={onJumpTopClick}>
          <S.BiArrowToTop />
        </S.JumpTop>
      )}
    </S.Container>
  );
};

export default MoviesPage;
