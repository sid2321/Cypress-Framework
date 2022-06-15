const environment = process.env.APPLITOOLS_ENV_NAME;
const branchId = process.env.APPLITOOLS_BRANCH_NAME ? process.env.APPLITOOLS_BRANCH_NAME : `InBetween local (${environment})`;
const branchParent = process.env.APPLITOOLS_PARENT_BRANCH_NAME ? process.env.APPLITOOLS_PARENT_BRANCH_NAME : environment;

module.exports = {
  appName: `InBetween-${environment}`,
  showLogs: true,
  batchName: `InBetween-${environment} ${new Date().toDateString()} ${new Date().toTimeString()}`,
  branchName: branchId,
  parentBranchName: branchParent,
  concurrency: 1,
  eyesTimeout: 900000,
  apiKey: process.env.APPLITOOLS_KEY,
  serverUrl: 'https://eyes.applitools.com/',
  browser: [
    { width: 1440, height: 768, name: 'chrome' },
  ],
};
