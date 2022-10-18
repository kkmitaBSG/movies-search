import renderer from "react-test-renderer";
import { MemoryRouter } from "react-router-dom";
import * as reactRedux from "react-redux";
import SearchBar, { SearchBarProps } from "../SearchBar";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
}));

const defaultProps: SearchBarProps = {
  onInputChange: () => null,
};

describe("SearchBar", () => {
  jest.spyOn(reactRedux, "useDispatch");

  test("render", () => {
    const component = renderer.create(
      <MemoryRouter>
        <SearchBar {...defaultProps} />
      </MemoryRouter>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
