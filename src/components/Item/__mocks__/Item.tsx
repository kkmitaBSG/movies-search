import React, { ReactElement } from "react";
import { Movie } from "../../../store/types";

const MockedComponent = (movie: Movie): ReactElement => (
  <React.Fragment key={movie.id}>ItemMockedComponent</React.Fragment>
);

export default MockedComponent;
