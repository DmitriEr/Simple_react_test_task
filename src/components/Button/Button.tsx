import React, { memo } from "react";

interface IButtonProps {
  onClick: () => void;
}

const Button = memo(({ onClick }: IButtonProps) => (
  <button onClick={onClick}>get random user</button>
));

export { Button };
