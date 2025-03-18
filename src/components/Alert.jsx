// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";


function Alert({type,text}) {
    const defaultStyle = css`
        background-color: #f8d7da;
        color:black;
        padding: 10px;
        border-radius: 5px;
        margin: 10px 0;
        text-align: stat;
    `;
    const primaryStyle = css`
        background-color:rgb(226, 162, 120);
        color:black;
    `;
    const secondaryStyle = css`
        background-color:rgb(233, 242, 128);
        color:black;
    `;
    const successStyle = css`
        background-color:rgb(139, 234, 161);
        color:black;
    `;
    const errorStyle = css`
        background-color:rgb(245, 113, 124);
        color:black;
    `;
    return (
        <div css={[defaultStyle, type === "primary" ? primaryStyle : type === "secondary" ? secondaryStyle : type === "success" ? successStyle : errorStyle]}>{text}</div>
    );
}

export default Alert;