import { render, waitFor } from "@testing-library/react";
import { LoginForm } from ".";
import userEvent from "@testing-library/user-event";

test("testing a basic Formik form", async () => {
  const handleSubmit = jest.fn();
  const { getByRole } = render(<LoginForm onSubmit={handleSubmit} />);

  // Test if heading text matches or not.
  expect(getByRole("heading", { level: 3 })).toHaveTextContent(/Testing Form/i);

  const user = userEvent.setup();

  // Note 💡: We could've also used "screen.getByRole" instead of destructuring "getByRole" from "render".
  // We would have imported "screen" from "@testing-library/react".
  await user.type(getByRole("textbox", { name: /first name/i }), "Alan");
  await user.type(getByRole("textbox", { name: /last name/i }), "Turing");

  await user.click(getByRole("button", { name: /submit/i }));
  // Note 💡: This also works 👇, but "user.click" simulates a real user's click interaction as closely as possible than "fireEvent.click".
  // fireEvent.click(getByRole("button", { name: /submit/i }));
  // Differences 🤯: "user.click" Simulates full user clicks, triggering events and browser-specific behaviors, whereas "fireClick.click" only triggers click event.

  await waitFor(() =>
    expect(handleSubmit).toHaveBeenCalledWith({
      firstName: "Alan",
      lastName: "Turing",
    })
  );
});
