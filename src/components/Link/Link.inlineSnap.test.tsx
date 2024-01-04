import renderer from "react-test-renderer";
import { Link } from ".";

// They behave exactly like external snapshots (".snap" file)
// Only difference 💡: Using inline matchers, a new ".snap" file will not be created.
test("renders correctly using inline snapshots", () => {
  const component = renderer.create(
    <Link page="http://www.linkedin.com">LinkedIn</Link>
  );
  let tree = component.toJSON() as renderer.ReactTestRendererJSON;
  // Snapshots will be written inside "()" of "toMatchInlineSnapshot()" 👇
  expect(tree).toMatchInlineSnapshot(`
<a
  className="normal"
  href="http://www.linkedin.com"
  onMouseEnter={[Function]}
  onMouseLeave={[Function]}
>
  LinkedIn
</a>
`);

  // Trigger "onMouseEnter" callback
  renderer.act(() => {
    tree?.props?.onMouseEnter();
  });

  // Re-rendering
  tree = component.toJSON() as renderer.ReactTestRendererJSON;
  // Snapshots will be written inside "()" of "toMatchInlineSnapshot()" 👇
  expect(tree).toMatchInlineSnapshot(`
<a
  className="hovered"
  href="http://www.linkedin.com"
  onMouseEnter={[Function]}
  onMouseLeave={[Function]}
>
  LinkedIn
</a>
`);
});
