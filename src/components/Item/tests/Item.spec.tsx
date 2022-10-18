import Item from "../Item";
import renderer from "react-test-renderer";
import { Movie } from "../../../store/types";
import { MemoryRouter } from "react-router-dom";

const defaultProps: Movie = {
  id: "1",
  title: "item1Name",
  overview: "overview1",
  poster: "xyz.eu",
};

describe("Item", () => {
  test("with full filled props", () => {
    const component = renderer.create(
      <MemoryRouter>
        <Item {...defaultProps} />
      </MemoryRouter>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
