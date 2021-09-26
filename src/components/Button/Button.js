import React from "react";

export const Button = (props: Props) => {
  const mode = props.primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  return (
    <div>
      <button
        type="button"
        className={[
          "storybook-button",
          `storybook-button--${props.size}`,
          mode,
        ].join(" ")}
        style={props.backgroundColor ? props.backgroundColor : null}
        {...props}
      >
        {props.label}
      </button>
    </div>
  );
};

type Props = {
  primary: boolean,
  backgroundColor?: string,
  size?: string,
  label: string,
  onClick?: any,
};
