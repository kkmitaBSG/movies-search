import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import messages from "../../constants/messages";
import { MoviesActionType } from "../../store/types";
import { getMovieDetails } from "../../store/selectors";
import * as S from "./styles";

const DetailsPage = () => {
  const dispatch = useDispatch();
  const { id: movieId } = useParams();
  const details = useSelector(getMovieDetails(movieId!));

  useEffect(() => {
    dispatch({
      type: MoviesActionType.getMovieDetails,
      movieId,
    });
  }, [dispatch, movieId]);

  if (!details) {
    // TODO: skeleton loader
    return null;
  }

  const {
    title,
    backdrop,
    overview,
    production_countries,
    release_date,
    genres,
  } = details;

  return (
    <>
      <S.Poster src={backdrop}></S.Poster>
      <S.InfoWrapper>
        <S.LeftSide>
          <S.Title>{title}</S.Title>
          <S.Description>{overview}</S.Description>
        </S.LeftSide>

        <S.RightSide>
          <S.AdditionalInfo>
            <S.Name>{messages.AdditionalInfoProductionCountries}</S.Name>
            {production_countries?.[0]?.name}
          </S.AdditionalInfo>
          <S.AdditionalInfo>
            <S.Name>{messages.AdditionalInfoReleaseDate}</S.Name>
            {new Date(release_date!).getFullYear()}
          </S.AdditionalInfo>
          <S.AdditionalInfo>
            <S.Name>{messages.AdditionalInfoGenres}</S.Name>
            {genres?.map((genre) => genre.name).join(", ")}
          </S.AdditionalInfo>
        </S.RightSide>
      </S.InfoWrapper>
    </>
  );
};

export default DetailsPage;
