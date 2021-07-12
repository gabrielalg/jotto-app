import { mount } from "enzyme";
import { findByTestAttr } from "../test/testUtils";
import App from "./App";

/**
 * Setup function for App component
 * @returns {Wrapper}
 */
const setup = () => {
  // use mount, because useEffect not called on `shallow`
  // https://github.com/airbnb/enzyme/issues/2086
  return mount(<App />);
};

test("renders without error", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-app");
  expect(appComponent).toHaveLength(1);
});
