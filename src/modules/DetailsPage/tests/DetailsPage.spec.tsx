import * as reactRedux from "react-redux";
import renderer from "react-test-renderer";
import { MemoryRouter } from "react-router-dom";
import DetailsPage from "../DetailsPage";
import { MovieDetails } from "../../../store/types";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
}));

const mockData: MovieDetails = {
  title: "title",
  backdrop: "backdrop",
  overview: "overview",
  production_countries: [{ name: "US" }],
  release_date: "2015",
  genres: [{ name: "commedy" }],
};

describe("DetailsPage", () => {
  const useSelectorMock = jest.spyOn(reactRedux, "useSelector");
  jest.spyOn(reactRedux, "useDispatch");

  test("render with movie details", () => {
    useSelectorMock.mockReturnValue(mockData);

    const component = renderer.create(
      <MemoryRouter>
        <DetailsPage />
      </MemoryRouter>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
