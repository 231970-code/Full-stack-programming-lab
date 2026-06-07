self.__BUILD_MANIFEST = {
  "polyfillFiles": [
    "static/chunks/polyfills.js"
  ],
  "devFiles": [
    "static/chunks/react-refresh.js"
  ],
  "ampDevFiles": [],
  "lowPriorityFiles": [],
  "rootMainFiles": [],
  "pages": {
    "/_app": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/_app.js"
    ],
    "/_error": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/_error.js"
    ],
    "/dashboard/chatbot": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/dashboard/chatbot.js"
    ],
    "/dashboard/invoices": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/dashboard/invoices.js"
    ],
    "/dashboard/invoices/create": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/dashboard/invoices/create.js"
    ]
  },
  "ampFirstPages": []
};
self.__BUILD_MANIFEST.lowPriorityFiles = [
"/static/" + process.env.__NEXT_BUILD_ID + "/_buildManifest.js",
,"/static/" + process.env.__NEXT_BUILD_ID + "/_ssgManifest.js",

];