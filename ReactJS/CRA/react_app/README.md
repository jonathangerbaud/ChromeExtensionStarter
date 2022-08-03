In your new Create React App project, make sure to install **react-scripts** (`npm install react-scripts`) for the build command to work.

In the manifest, the build command `react-scripts build` has been replaced with `bash build.sh`.

This script will run `react-scripts build` and then move around some files so that you have a valid and complete Chrome Extension folder in `../chrome_ext_build`.

It is this folder that you must load in Chrome's extension manager page, and also this folder that you must zip and upload if you want to publish it on the Chrome Web Store.

Before trying to run `npm run start` or `npm run build`, don't forget to run `npm install` first.