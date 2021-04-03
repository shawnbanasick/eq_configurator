import appState from "../../GlobalState/appState";

const addFirebaseInfoToEqmobileHtml = () => {
  const firebaseInfo = appState.firebaseInfo;
  const configTitle = appState.configTitle;

  let data = `
  <!DOCTYPE html>
  <html
    xmlns:ng="http://angularjs.org"
    id="ng-app"
    ng-app="app"
    ng-keyup="$broadcast('my:keyup', $event)"
  >
    <head>
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="apple-mobile-web-app-title" content="EQ Mobile" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
      <!-- <meta
        name="viewport"
        content="viewport-fit=cover, user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1"
      /> -->
      <meta
        name="viewport"
        content="viewport-fit=cover, width=device-width, user-scalable=no, initial-scale=1"
      />
      <!--  <meta http-equiv="expires" content="0" />
      <meta http-equiv="pragma" content="no-cache" />
      <meta
        http-equiv="Cache-Control"
        content="no-cache, no-store, must-revalidate"
      />
      <meta http-equiv="Pragma" content="no-cache" />
      <meta http-equiv="Expires" content="0" /> -->
      <title>${configTitle}</title>
  
      <script src="src/jquery.min.js" type="text/javascript"></script>
      <script src="src/jquery-ui.min.js" type="text/javascript"></script>
      <script
        src="src/jquery.ui.touch-punch.min.js"
        type="text/javascript"
      ></script>
      <script src="src/jquery-dateFormat.min.js" type="text/javascript"></script>
      <script src="src/bootstrap.min.js" type="text/javascript"></script>
      <script src="src/angular.min.js" type="text/javascript"></script>
      <script src="src/angular-ui-router.min.js" type="text/javascript"></script>
      <script
        src="src/ui-bootstrap-custom-tpls.min.js"
        type="text/javascript"
      ></script>
      <script src="src/xml2json.min.js" type="text/javascript"></script>
      <script src="src/jsonpath.js" type="text/javascript"></script>
      <script src="src/underscore-min.js" type="text/javascript"></script>
  
      <!-- The core Firebase JS SDK is always required and must be listed first -->
      <script src="https://www.gstatic.com/firebasejs/8.2.6/firebase-app.js"></script>
      <script src="https://www.gstatic.com/firebasejs/8.2.6/firebase-database.js"></script>
      <script src="https://www.gstatic.com/firebasejs/8.2.6/firebase-auth.js"></script>  

      ${firebaseInfo}

      <script src="src/htmlq.js" type="text/javascript"></script>
  
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
        integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=="
        crossorigin="anonymous"
      />
      <link rel="stylesheet" href="stylesheets/bootstrap.min.css" />
      <link rel="stylesheet" href="stylesheets/htmlq.css" />
      <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico?" />
  
      <link rel="apple-touch-icon" sizes="152x152" href="touch-icon-ipad.png" />
      <link
        rel="apple-touch-icon"
        sizes="167x167"
        href="touch-icon-ipad-retina.png"
      />
  
      <!-- iPad Pro 12.9" (2048px x 2732px) -->
      <link
        rel="apple-touch-startup-image"
        media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)"
        href="/apple-launch-2048x2732.png"
      />
      <!-- iPad Pro 11” (1668px x 2388px) -->
      <link
        rel="apple-touch-startup-image"
        media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)"
        href="/apple-launch-1668x2388.png"
      />
      <!-- iPad Pro 10.5" (1668px x 2224px) -->
      <link
        rel="apple-touch-startup-image"
        media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)"
        href="/apple-launch-1668x2224.png"
      />
      <link rel="manifest" href="eq-mobile.webmanifest" />
      <script>
        if ("serviceWorker" in navigator) {
          window.addEventListener("load", function () {
            navigator.serviceWorker.register("/sw.js").then(
              function (registration) {
                // Registration was successful
                console.log(
                  "ServiceWorker registration successful with scope: ",
                  registration.scope
                );
              },
              function (err) {
                // registration failed :(
                console.log("ServiceWorker registration failed: ", err);
              }
            );
          });
        }
      </script>
    </head>
  
    <body>
      <div ui-view></div>
    </body>
  </html>
`;

  return data;
};

export default addFirebaseInfoToEqmobileHtml;
