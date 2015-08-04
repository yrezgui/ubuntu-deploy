import * as config from './config';

export function render (content) {
  return `
    <html>
      <head>
        <meta charset="utf-8" />
        <title>${config.meta.title}</title>
        <link rel="stylesheet" href="main.css" />
        <meta name="author" content="${config.meta.author}" />
        <meta name="description" content="${config.meta.description}" />
        <meta name="keywords" content="${config.meta.keywords.join(', ')}" />
      </head>
      <body>
        <div id="content">${content}</div>
        <script type="text/javascript" src="main.js"></script>
      </body>
    </html>
  `;
}