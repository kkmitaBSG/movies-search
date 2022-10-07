import Item from "../Item";
import renderer from "react-test-renderer";
import { Items } from "../../../../api/useFetch";

const defaultProps: Items = {
  id: "1",
  title: "item1Name",
  overview: "overview1",
  original_language: "en",
};

describe("Item", () => {
  test("with full filled props", () => {
    const component = renderer.create(<Item {...defaultProps} />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  test("with only required props", () => {
    const props = {
      id: "1",
      title: "item1Name",
    };

    const component = renderer.create(<Item {...props} />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
