# My Portfolio website
This website was built with two purposes in mind: to serve as a personal website and as a developer's portfolio item.
The goal of the project was to create an easy to build and cheap to maintain site whilst being able to
demonstrate website building capabilities. (I.e. I wanted to avoid using WordPress and the like)
The site is built with React.js, and is statically rendered by Next.js. Styling is done with CSS modules using
SCSS and designed in a basic responsive way. The results are served from S3 through CloudFront.


# Deployment
Scripts are included to deploy the results to AWS S3.

## Setup to support deployment to AWS S3
- set up an AWS S3 bucket at https://s3.console.aws.amazon.com/

You need to create an S3 bucket. It needs to be set up for static website hosting. Blocking public access should be turned off.
You need to add a bucket policy that allows reading from it. It should look like this:
```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::<your-bucket-name>/*"
        }
    ]
}
```

You need to create an IAM user with S3 read/write access.
You need to create "programmatic" access credentials i.e. API keys.

 - Add your keys and other configs to your development machine (or CI)

You need to have a file in your home directory called `.ssg-config.sh`
and you need to export the following AWS config environment variables:
```shell script
export S3_BUCKET=[your bucket]
export AWS_ACCESS_KEY_ID=[your aws key id]
export AWS_SECRET_ACCESS_KEY=[your aws secret]
export AWS_DEFAULT_REGION=[your aws region]
```

More info can be found [in the AWS docs](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-envvars.html).

To deploy the site, run `npm run deploy`. (See the Scripts section for required preparations and other scripts)

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

# Web crawlers

A robots.txt file is included to disallow all indexing. Change this according to your needs.

# License

This repository licensed under MIT license.
