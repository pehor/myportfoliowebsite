# My Portfolio website
This website was built with two purposes in mind: to serve as a personal website and as a developer's portfolio item.
The goal of the project was to create an easy to build and cheap to maintain site whilst being able to
demonstrate website building capabilities. (I.e. I wanted to avoid using WordPress and the like)
The site is built with React.js, and is statically rendered by Next.js. Styling is done with CSS modules using
SCSS and designed in a basic responsive way. The results are served from S3 through CloudFront.

Added security settings to Cloudfront based on a report from here: https://securityheaders.com

# Scripts

You need to run `npm install` before running any of the scripts below.

All scripts can be run by `npm run <script>`. Check package.json for all scripts. The main scripts for the workflow is:

- `build`: Runs linting, builds the projects into static assets, and copies them to he `out` directory
- `dev`: The quick way to see the changes during development, it starts the development server with reload on code changes.
- `test`: Runs unittests with jest
- `serve:static`: Serves the contents of the `out` directory locally for testing
- `deploy`: Syncs the contents of the `out` directory to an S3 bucket

# Tests

Unittests are run by Jest. Coverage is also available. You can run them like this:

```shell script
npm run test
npm run coverage
```

# License

This repository licensed under MIT license.
