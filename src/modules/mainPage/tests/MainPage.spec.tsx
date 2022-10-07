import renderer from "react-test-renderer";
import MainPage from "../MainPage";

jest.mock("../itemList/ItemList");

describe("Mainpage", () => {
  test("proper render", () => {
    const component = renderer.create(<MainPage />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
