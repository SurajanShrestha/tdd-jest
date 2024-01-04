import renderer from "react-test-renderer";
import { Link } from ".";

// Or you could use it() instead of test()
// it() is an alias of test()
test("link renders correctly", () => {
  const component = renderer.create(
    <Link page="http://www.instagram.com">Instagram</Link>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it("link changes when hovered", () => {
  const component = renderer.create(
    <Link page="http://www.facebook.com">Facebook</Link>
  );
  let tree = component.toJSON() as renderer.ReactTestRendererJSON;
  expect(tree).toMatchSnapshot();

  // Manually trigger "onMouseEnter" callback
  renderer.act(() => {
    tree?.props?.onMouseEnter();
  });

  // Re-rendering
  // In snapshot: "className" of <a> will be "hovered"
  tree = component.toJSON() as renderer.ReactTestRendererJSON;
  expect(tree).toMatchSnapshot();

  // Manually trigger "onMouseLeave" callback
  renderer.act(() => {
    tree?.props?.onMouseLeave();
  });

  // Re-rendering
  // In snapshot: "className" of <a> will be "normal"
  tree = component.toJSON() as renderer.ReactTestRendererJSON;
  expect(tree).toMatchSnapshot();
});
