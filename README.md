# 🙋‍♂️ A Personal Website

This website was generated using [Gatsby](https://www.gatsbyjs.org).

## 🏗️ Development

### Dependencies

1. Node.js (I suggest using [NVM](https://github.com/nvm-sh/nvm) to manage your Node.js versions)
2. [Yarn](https://yarnpkg.com/getting-started/install)
3. [Gatsby CLI](https://www.gatsbyjs.com/docs/quick-start/#install-the-gatsby-cli)
4. [Firebase CLI](https://firebase.google.com/docs/cli#mac-linux-npm)

Once you have Node.js installed you can install all of the global dependencies with the following command:

```shell
npm install -g yarn gatsby-cli firebase-tools
```

### Getting Started

Navigate into your new site’s directory and start it up.

```shell
yarn develop
```

## 🚀 Deployment

This project is hosted using Firebase.

### Auto-deployments

Auto-deployments are triggered when a push occurs on the `main` branch. This is managed by GitHub Action workflows found in `.github/workflows` directory.

### Manual deployments

```shell
yarn build && yarn deploy
```
