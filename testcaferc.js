let os = require("os"); // Import any Node.js module you want.

module.exports = { // Settings go inside the module.exports statement.
    src: "/tests/", // Tests
    browsers: ["firefox"], // Browsers
    baseUrl: "https://devexpress.github.io/testcafe/example/", // URL
    skipJsErrors: true, // Ignores JavaScript errors
    screenshots: {
        path: "./screenshots/",
        takeOnFails: true,
        pathPattern: "${DATE}_${TIME}/test-${TEST_INDEX}/${USERAGENT}/${FILE_INDEX}.png",
        fullPage: true,
        thumbnails: false
    }
}