export default ({markup, css}) => {
    return `<!doctype html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <title>Professional Services</title>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100,300,400">
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
          <style>
              a{
                text-decoration: none
              }
              #customers {
                font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
                border-collapse: collapse;
                width: 100%;
              }
              
              #customers td, #customers th {
                border: 1px solid #ddd;
                padding: 8px;
              }
              
              #customers tr:nth-child(even){background-color: #f2f2f2;}
              
              #customers tr:hover {background-color: #ddd;}
              
              #customers th {
                padding-top: 12px;
                padding-bottom: 12px;
                text-align: left;
                color: white;
              }
          </style>
        </head>
        <body style="margin:0">
          <div id="root">${markup}</div>
          <style id="jss-server-side">${css}</style>
          <script id="stripe-js" src="https://js.stripe.com/v3/" async></script>
          <script type="text/javascript" src="/dist/bundle.js"></script>
          <script src="https://npmcdn.com/react@0.14.2/dist/react.min.js"></script>
          <script src="https://npmcdn.com/react-dom@0.14.2/dist/react-dom.min.js"></script>
          <script src="https://npmcdn.com/google-map-react@1.0.1/dist/GoogleMapReact.js"></script>
          
        </body>
      </html>`
}
