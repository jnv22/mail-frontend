import React from 'react';

import { Label, Checkbox as CheckboxComponent } from 'theme-ui'


export interface CheckboxProps {
  value: string | number;
  checked: boolean;
  onChange: () => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ value, checked, onChange }) => {
  return (
    <Label>
      <CheckboxComponent
        defaultChecked={true}
      />
    </Label>
  )
}

export default Checkbox;