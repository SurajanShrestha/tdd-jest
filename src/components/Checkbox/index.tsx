import { useState } from "react";

type Props = {
  labelWhenOn: string;
  labelWhenOff: string;
};

export const Checkbox = ({ labelWhenOn, labelWhenOff }: Props) => {
  const [isChecked, setIsChecked] = useState(false);

  const onChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label>
      <input type="checkbox" checked={isChecked} onChange={onChange} />
      {isChecked ? labelWhenOn : labelWhenOff}
    </label>
  );
};
