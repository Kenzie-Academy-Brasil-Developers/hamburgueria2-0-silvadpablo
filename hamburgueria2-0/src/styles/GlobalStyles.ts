import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
    */

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
    body {
        line-height: 1;
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

@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600&family=Inter:wght@400;500;600;700&family=Nunito:wght@700&family=Open+Sans:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap');

:root {
    --primary: #27ae60;
    --primary50: #93d7af;
    --secondary: #eb5757;
    --grey6: #333333;
    --grey5: #999999;
    --grey3: #828282;
    --grey1: #e0e0e0;
    --grey0: #F5f5f5;
    --white: #fff;
    --backdrop: rgba(51, 51, 51, 0.5);
    --negative: #e60000;
    --warning: #ffcd07;
    --success: #168821;
    --information: #155bcb;

    --family: 'Inter', sans-serif;
    --heading1: 1.625rem;
    --heading2: 1.375rem;
    --heading3: 1.125rem;
    --headline: 1rem;
    --body: 0.875rem;
    --caption: 0.75rem;

    --bold: 700;
    --semibold: 600;
    --medium: 500;
    --regular: 400;
    --italic: italic;

    --radius: 8px;
    --card-radius: 5px;
    --box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
}

.flex {
    display: flex;
}
  
.items-center {
  align-items: center;
}

.items-start {
  align-items: flex-start;
}

.items-end {
  align-items: flex-end;
}

.justify-center {
  justify-content: center;
}

.justify-between {
  justify-content: space-between;
}

.justify-around {
  justify-content: space-around;
}

.justify-end {
  justify-content: flex-end;
}

.justify-start {
  justify-content: flex-start;
}

.flex-col {
  flex-direction: column;
}

.wrap {
  flex-wrap: wrap;
}
`

export default GlobalStyle