/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Button({ style }) {
  const primary = css`
    background-color:rgb(0, 48, 204);
    color: white;
    padding: 10px 20px;
    rounded: 5px;
  `;
  const secondary = css`
    background-color: rgb(49, 130, 197);
    color: white;
    padding: 10px 20px;
    rounded: 5px;
  `;

  return (
    <button css={style === 'primary' ? primary : secondary}>
      {style === 'primary' ? 'Primary' : 'Secondary'}
    </button>
  );
}

export default Button;