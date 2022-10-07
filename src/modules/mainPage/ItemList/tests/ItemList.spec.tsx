import renderer from "react-test-renderer";
import { MemoryRouter } from "react-router-dom";
import ItemList from "../ItemList";
import useFetch, { Items, LoadingStatus } from "../../../../api/useFetch";

jest.mock("../../item/Item");
jest.mock("../../../../api/useFetch");

const mockData: Items[] = [
  {
    id: "1",
    title: "item1Name",
  },
  {
    id: "2",
    title: "item2Name",
  },
  {
    id: "3",
    title: "item3Name",
  },
];

describe("ItemList", () => {
  test("when data is not fetched yet", () => {
    (useFetch as jest.Mock).mockReturnValue({
      status: LoadingStatus.Fetching,
      data: [],
    });

    const component = renderer.create(
      <MemoryRouter initialEntries={["/"]}>
        <ItemList />
      </MemoryRouter>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  test("when data is empty", () => {
    (useFetch as jest.Mock).mockReturnValue({
      status: LoadingStatus.Fetched,
      data: [],
    });

    const component = renderer.create(
      <MemoryRouter initialEntries={["/"]}>
        <ItemList />
      </MemoryRouter>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  test("when data is filled", () => {
    (useFetch as jest.Mock).mockReturnValue({
      status: LoadingStatus.Fetched,
      data: mockData,
    });

    const component = renderer.create(
      <MemoryRouter initialEntries={["/"]}>
        <ItemList />
      </MemoryRouter>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
