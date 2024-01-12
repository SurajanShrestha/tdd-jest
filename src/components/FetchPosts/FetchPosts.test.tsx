import { render, screen, waitFor } from "@testing-library/react";
import { FetchPosts } from ".";

test("should fetch posts", async () => {
  render(<FetchPosts />);

  // Note 💡: Debugs "FetchPosts". Prints out JSX inside FetchPosts.
  // screen.debug();

  // Check for loading text.
  const loadingText = screen.getByText(/loading/i);
  expect(loadingText).toBeTruthy();

  // Check for a string in the pile of data.
  // Note 💡: If condition is not met, "waitFor" will retry again at 50ms interval (by default).
  await waitFor(() => {
    // Problem 😢: This declaration 👇 fails ❌ because it runs immediately.
    // Solution 💡:We need to put it inside "expect()" to wait for it.
    // const testString = screen.getByText(/sunt aut/i);

    expect(screen.getByText(/ea molestias/i)).toBeTruthy();
  });
});
