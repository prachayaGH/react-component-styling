/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Alert({ style, icon, message }) {
  const error = css`
    background-color: rgb(222, 149, 149);
    color: black;
    padding: 10px 100px 10px 20px;
    border-radius: 5px;
    text-align: left;
  `;
  const warning = css`
    background-color: rgb(239, 194, 157);
    color: black;
    padding: 10px 100px 10px 20px;
    border-radius: 5px;
    text-align: left;
  `;
  const info = css`
    background-color: rgb(220, 216, 140);
    color: black;
    padding: 10px 100px 10px 20px;
    border-radius: 5px;
    text-align: left;
  `;
  const success = css`
    background-color: rgb(168, 233, 172);
    color: black;
    padding: 10px 100px 10px 20px;
    border-radius: 5px;
    text-align: left;
  `;

  return (
    <div
      css={
        style === "error"
          ? error
          : style === "warning"
          ? warning
          : style === "info"
          ? info
          : success
      }
    >
      <img src={icon} alt="icon" />
      <span> {message}</span>
    </div>
  );
}

export default Alert;
