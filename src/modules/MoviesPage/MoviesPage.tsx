import { useCallback, useEffect, useState } from "react";
import messages from "../../constants/messages";
import Item from "../../components/Item/Item";
import { useDispatch, useSelector } from "react-redux";
import { MoviesActionType } from "../../store/types";
import { getMoviesResults } from "../../store/selectors";
import SearchBar from "../../components/SearchBar/SearchBar";
import { handleScroll as fetchNextPage } from "./helpers";
import * as S from "./styles";

const MoviesPage = () => {
  const dispatch = useDispatch();
  const [isScrollTop, setIsScrollTop] = useState<boolean>(true);

  const results = useSelector(getMoviesResults);

  useEffect(() => {
    dispatch({ type: MoviesActionType.getMovies });
    window.scrollTo(0, 0);
  }, [dispatch]);

  useEffect(() => {
    const scrollHandler = () => {
      setIsScrollTop(window.scrollY < 20);
      fetchNextPage(dispatch);
    };

    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [dispatch]);

  const onInputChange = useCallback(
    (searchPhrase: string) => {
      dispatch({ type: MoviesActionType.getSearchMovies, searchPhrase });
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
