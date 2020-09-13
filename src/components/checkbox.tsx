import React from "react";

import { Label, Checkbox as CheckboxComponent } from "theme-ui";

export interface CheckboxProps {
  checked: boolean;
  onChange: () => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange }) => {
  return (
    <Label>
      <CheckboxComponent checked={checked} onChange={onChange} />
    </Label>
  );
};

export default Checkbox;
