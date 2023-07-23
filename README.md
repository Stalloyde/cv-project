Generate a CV by simply filling in relevant information in the form provided.
Originally written in React, and migrated to TypeScript with mobile responsiveness.

_To use this repo:_

1. Clone repo to your local machine.
2. Install dependencies by running:

npm install -D babel-loader @babel/core @babel/preset-env webpack webpack webpack-cli --save-dev --save lodash --save-dev style-loader css-loader --save-dev csv-loader xml-loader toml yamljs json5 --save-dev --save-dev html-webpack-plugin --save-dev html-loader --save-dev jest --save typescript @types/node @types/react @types/react-dom @types/jest

_To open the app in your local browser:_

1. Compile .tsx files by going into the directory of the file and running:
   npx tsc -jsx react 'file-name'.tsx

This will update the corresponding .js file.

2. run npm start

_To stage, commit or any changes:_

1. Compile .tsx files by going into the directory of the file and running:
   npx tsc -jsx react 'file-name'.tsx

This will update the corresponding .js file.

2. Run the usual git add/commit
