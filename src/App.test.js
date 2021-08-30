import { render as rtlRender, screen, cleanup } from "@testing-library/react";
import { Provider } from "react-redux";
import Store from "./state/store";

import CalcTop from "./components/CalcTop";

const render = (component, store) => {
  return (
    <Provider store={store}>
      { component }
    </Provider>
  );
}

test("Should render CalcTop component", () => {
  render(<CalcTop />, Store);
  const calcTopElement = screen.getByTestId("calcTop");
  expect(calcTopElement).toBeInTheDocument();
});

// test("Should render CalcTop component", () => {
//   render(<CalcTop />);
//   const calcTopElement = screen.getByTestId("calcTop");
//   expect(calcTopElement).toBeInTheDocument();
// });