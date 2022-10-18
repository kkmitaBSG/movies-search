import * as reactRedux from "react-redux";
import renderer from "react-test-renderer";
import { MemoryRouter } from "react-router-dom";
import MoviesPage from "../MoviesPage";
import { Movies } from "../../../store/types";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
}));

jest.mock("../../../components/Item/Item");

const mockData: Movies = {
  results: [
    {
      id: "1",
      title: "item1Name",
      overview: "overview1",
    },
    {
      id: "2",
      title: "item2Name",
      overview: "overview2",
    },
    {
      id: "3",
      title: "item3Name",
      overview: "overview3",
    },
  ],
  page: 1,
};

describe("MoviesPage", () => {
  const useSelectorMock = jest.spyOn(reactRedux, "useSelector");
  const useDispatchMock = jest.spyOn(reactRedux, "useDispatch");

  beforeEach(() => {
    useSelectorMock.mockClear();
    useDispatchMock.mockClear();
  });

  test("render with movies", () => {
    useSelectorMock.mockReturnValue(mockData);

    const component = renderer.create(
      <MemoryRouter>
        <MoviesPage />
      </MemoryRouter>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
