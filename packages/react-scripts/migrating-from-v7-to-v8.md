# Migrating from v7 to v8

Inside any created `backpack-react-scripts` project that has not been ejected, run:

```
npm install --save backpack-react-scripts@^8.0.0
```

## Breaking Changes

Like any major release, `backpack-react-scripts@8` contains a few breaking changes. At least one of them will affect every user, so please scan over these sections to see what is relevant to you.

###  Upgrade to Jest 24+

With this version brings the use of Jest `24.9.0`. Major Jest changes in [Jest v24](https://github.com/facebook/jest/blob/master/CHANGELOG.md#2400) 

You maybe required to upgrade to Jest 24 due to some incompatibilies with using mixed versions in BRS and your app, please ensure you check if you need to upgrade.

If you encounter this error during build time then you will be required to make the move to Jest `24`.

```sh
There might be a problem with the project dependency tree.
It is likely not a bug in Create React App, but something you need to fix locally.

The backpack-react-scripts package provided by Create React App requires a dependency:

  "babel-jest": "^24.9.0"
```

### Templating

With this version brings in a feature of create-react-app which is called `templates` this allows you to specify a custom template that will be used for the base of the webapp on generation in which we have created a standard template here under [cra-template-backpack](https://github.com/Skyscanner/cra-template-backpack/) - this repo contains the base standard Backpackified template as in BRS 7 just now separated.

As templates are the default method when creating react apps our command for running now looks like the following:

```sh
npx create-react-app my-app --scripts-version=backpack-react-scripts --template @skyscanner/cra-template-backpack --use-npm
```

Where `@skyscanner/cra-template-backpack` is published to the NPM repository
