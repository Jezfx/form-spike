import React from "react";
import {
  wait,
  fireEvent,
  cleanup,
  render,
  screen,
} from "@testing-library/react";
import { Button } from "@material-ui/core";

import ControlledForm from "./ControlledForm";
import { withForm } from "../../test-utils";
import { defaultFields, followUpFields } from "./mocks";

describe("Controlled Form", () => {
  afterEach(cleanup);

  const props = {
    buttons: () => <Button type="submit">Submit</Button>,
    onSubmit: jest.fn(),
  };

  const CompWithForm = withForm(ControlledForm);
  it("matches snapshot", () => {
    const { asFragment } = render(
      <CompWithForm fields={defaultFields} {...props} />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("calls on submit", async () => {
    render(<CompWithForm fields={defaultFields} {...props} />);

    const button = screen.getByText("Submit");
    fireEvent.click(button);

    await wait(() => {
      expect(props.onSubmit).toHaveBeenCalled();
    });
  });

  it("renders followups when condition is true", async () => {
    render(<CompWithForm fields={followUpFields} {...props} />);

    const followUp = screen.getByLabelText("Follow up");

    expect(followUp).toBeInTheDocument();
  });
});
