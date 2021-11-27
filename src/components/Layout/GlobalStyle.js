import { createGlobalStyle } from 'styled-components';
import { palette } from 'styled-tools';
import fonts from '../../fonts/fonts';


export const GlobalStyle = createGlobalStyle`
    ${fonts}

    html {
        position:relative;
        overflow-x: hidden;
    }

    body {
        color: ${palette('black')};
        position:relative;
        overflow-x: hidden;
        line-height: 1;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-size: 16px;
    }

    ul {
        list-style: none;
    }

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }

    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }

    ol, ul {
        list-style: none;
    }

    blockquote, q {
        quotes: none;
    }

    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    a,
    a:visited,
    a:focus,
    a:hover {
        text-decoration: none;
        color: inherit;
    }
`;
