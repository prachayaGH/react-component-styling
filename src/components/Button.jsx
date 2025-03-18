// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Button({type,message}) {
    const primary = css`
        
        background-color: blue;
        color: white;
        border: none;
        padding: 10px 20px;
        cursor: pointer;
        border-radius: 5px;
        `;
        const secondary = css`
        background-color: white;
        color: blue;
        border: none;
        padding: 10px 20px;
        cursor: pointer;
        border-radius: 5px;
        `;
    return (
        <button css={type === "primary" ? primary : secondary}>{message}</button>
    );
}
export default Button;
