import { useState } from "react";

type Props = {
  page?: string;
  children?: string;
};

const STATUS = {
  HOVERED: "hovered",
  NORMAL: "normal",
};

export const Link = ({ page, children }: Props) => {
  const [status, setStatus] = useState(STATUS.NORMAL);

  const onMouseEnter = () => {
    setStatus(STATUS.HOVERED);
  };

  const onMouseLeave = () => {
    setStatus(STATUS.NORMAL);
  };
  return (
    <a
      className={status}
      href={page || "#"}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </a>
  );
};
