import renderer from "react-test-renderer";
import App from "../App";
import { MemoryRouter } from "react-router-dom";

jest.mock("../modules/mainPage/itemList/ItemList");

describe("App", () => {
  test("proper render", () => {
    const component = renderer.create(
      <MemoryRouter initialEntries={["/"]}>
        <App />{" "}
      </MemoryRouter>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
