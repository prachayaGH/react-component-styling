// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';


function Button({type,text}) {
    const defaultStyle = css`
        background-color: black; 
        color: white; 
        padding: 15px 50px; 
        margin: 10px; `
    const primary = css`
        background-color: #074EE8;`
    const secondary = css`
        background-color: #07A4E8;`
    return (
        <button css={[defaultStyle,type === 'primary' ? primary : secondary]}>{text}</button>
    )
}

export default Button;
