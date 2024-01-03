import renderer from "react-test-renderer";
import { Link } from ".";

// Or you could use it() instead of test()
// it() is an alias of test()
test("link renders correctly", () => {
  const tree = renderer
    .create(<Link page="http://www.instagram.com">Instagram</Link>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
