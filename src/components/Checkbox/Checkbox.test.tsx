import { cleanup, fireEvent, render } from "@testing-library/react";
import { Checkbox } from ".";

// 💡 Cleanup is done automatically in "@testing-library/react" v9 or higher.
// ❌ So, we don't have to do it in this version.
afterEach(cleanup);

it("Checkbox changes text after each click", () => {
  const { queryByLabelText, getByLabelText } = render(
    <Checkbox labelWhenOn="On" labelWhenOff="Off" />
  );

  // Check if element with label "off" exists or not.
  // /off/i means it matches in a case-insensitive way i.e. off, OFF, Off, etc. all matches
  expect(queryByLabelText(/off/i)).toBeTruthy();

  // Fire a click event
  fireEvent.click(getByLabelText(/off/i));

  // Check if element with label "on" exists or not.
  expect(queryByLabelText(/on/i)).toBeTruthy();
});
