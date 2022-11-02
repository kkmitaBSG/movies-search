import throttle from "lodash.throttle";
import { AnyAction, Dispatch } from "redux";
import { MoviesActionType } from "../../store/types";

export const handleScroll = throttle((dispatch: Dispatch<AnyAction>) => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 400) {
    dispatch({ type: MoviesActionType.getMoviesNextPage });
  }
}, 300);
