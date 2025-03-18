// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

function Alert({type,text}) {
    const  defaultStyle = css` 
        background-color: #f8d7da; 
        color: #721c24; 
        padding: 10px; 
        margin: 10px 0;`
    const error = css`
        background-color: #DE5753;
        color: black`
    const warning = css`
        background-color:rgb(222, 146, 83);
        color: black`
    const info = css`
        background-color: rgb(222, 201, 83);
        color: black`
    const success = css`
        background-color: #26B795;
        color: black`
    return (
        <div css={[defaultStyle,type === 'error' ? error : type === 'warning' ? warning : type === 'info' ? info : success]}>{text}</div>
    )
}

export default Alert;

