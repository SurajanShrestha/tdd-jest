import { fireEvent, render } from "@testing-library/react";
import { Counter } from ".";

it("increment counter", () => {
  // Note 💡: Acc to testing-library/react, it is recommended to use "getByTestId" only after the other queries don't work for your use case.
  // Reason 💡: Because, your actual code now has an additional "data-testid" attribute, whose purpose is only to be used in tests and does not play any role in the component's logic.
  const { getByTestId } = render(<Counter />);

  fireEvent.click(getByTestId("count-up"));
  fireEvent.click(getByTestId("count-up"));

  expect(getByTestId("counter")).toHaveTextContent("2");
});

it("decrement counter", () => {
  const { getByTestId } = render(<Counter />);

  fireEvent.click(getByTestId("count-down"));

  expect(getByTestId("counter")).toHaveTextContent("0");
});
