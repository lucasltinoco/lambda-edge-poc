# Lambda@Edge POC

Sample project to experiment running two apps on the same domain with AWS Lambda@Edge, CloudFront and S3. One powered by AngularJS, and the other by ReactJS.

To run locally, you only need to run `yarn start` inside both projects (`/angularjs-edge-poc-bucket/` and `/reactjs-edge-poc-bucket/`).

Disclaimer: the AngularJS app runs on Node 10 and the ReactJS runs at least on Node 14.