# jira-stories App
This is an Angular app using jira API and its `search` endpoint.</br>
More information about this API on [jira api documentation](https://developer.atlassian.com/static/rest/jira/6.1.html#d2e4071).</br>
`storyPrinter.js` runs the app and exposes an API proxy (`/getStories` endpoint) to query jira 

## Prerequisites
- must have node, npm installed
- register for the jira api to get your keys to use the jira API
  - create `./config.js` file exposing the following keys: `username`, `password`, `url`.
  - Server-side keys (`storyPrinter.js`) are used by the `api/getStories` proxy from client-side.</br>

```
module.exports = {
  username: "<YOUR_JIRA_USERNAME>",
  password: "<YOUR_JIRA_PASSWORD>",
  url: "https://<YOUR_JIRA_DOMAIN>.atlassian.net/rest/api/latest/search?"
}
```
<b>**IMPORTANT**</b></br>
Please remember not to expose `config.js` file anywhere as it will contain your jira credentials.


## Install
1. Clone repository
2. `npm i` to install dependencies
3. Start the server 'node storyPrinter.js'
4. App opens up on port `:3000`

## Improvements
- Unit tests
- More styling for search queries
- Error management (client & server-side)
