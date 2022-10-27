import throttle from "lodash.throttle";
import { AnyAction, Dispatch } from "redux";
import { MoviesActionType } from "../../store/types";

export const handleScroll = throttle(
  (searchParams: URLSearchParams, dispatch: Dispatch<AnyAction>) => {
    const searchPhrase = searchParams.get("search");
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 400
    ) {
      dispatch({ type: MoviesActionType.getMoviesNextPage, searchPhrase });
    }
  },
  300
);
