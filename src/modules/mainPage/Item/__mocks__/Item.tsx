import React, { ReactElement } from "react";
import { Items } from "../../../../api/useFetch";

const MockedComponent = (item: Items): ReactElement => (
  <React.Fragment key={item.id}>ItemMockedComponent</React.Fragment>
);

export default MockedComponent;
