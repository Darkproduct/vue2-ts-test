# A template Projekt for

- Laravel
- Vue2 + Vuetify
- JS + TS
- ESLint + Prettier

## Current problem:

ESLint doesn't work.

```
$ npm run hot

> hot
> mix watch --hot


× Mix
  Compiled with some errors in 7.42s

ERROR in parent.eval is not a function
Occurred while linting C:\fakepath\ts-test\resources\js\app.ts:7

webpack compiled with 1 error
No issues found.

* Mix █████████████████████████ end (99%)
 closing watch compilation
```

ESLint directly has the same error:

```
\$ eslint --config resources/js/.eslintrc.js resources/js/\*

Oops! Something went wrong! :(

ESLint: 7.32.0

TypeError: parent.eval is not a function
Occurred while linting C:\fakepath\ts-test\resources\js\app.ts:7
at importFresh (C:\fakepath\ts-test\node_modules\prettier\third-party.js:94:68)
at loadJs (C:\fakepath\ts-test\node_modules\prettier\third-party.js:10997:20)
at ExplorerSync.loadFileContentSync (C:\fakepath\ts-test\node_modules\prettier\third-party.js:11652:28)
at ExplorerSync.createCosmiconfigResultSync (C:\fakepath\ts-test\node_modules\prettier\third-party.js:11657:32)
at ExplorerSync.loadSearchPlaceSync (C:\fakepath\ts-test\node_modules\prettier\third-party.js:11638:27)
at ExplorerSync.searchDirectorySync (C:\fakepath\ts-test\node_modules\prettier\third-party.js:11623:34)
at run (C:\fakepath\ts-test\node_modules\prettier\third-party.js:11603:29)
at cacheWrapperSync (C:\fakepath\ts-test\node_modules\prettier\third-party.js:11312:20)
at ExplorerSync.searchFromDirectorySync (C:\fakepath\ts-test\node_modules\prettier\third-party.js:11615:52)
at ExplorerSync.searchSync (C:\fakepath\ts-test\node_modules\prettier\third-party.js:11595:27)

```

- [StackOverflow](https://stackoverflow.com/questions/48410203/webpack-gives-eslint-errors-while-using-npm-link)
