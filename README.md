# A template Projekt for

- Laravel
- Vue2 + Vuetify
- JS + TS
- ESLint + Prettier

## Current problem:

### Initial
ESLint does use the `@typescript-eslint` parser for all files:

```
WARNING in
C:\fakepath\ts-test\resources\js\components\testjs.vue
  29:3  warning  Missing return type on function  @typescript-eslint/explicit-module-boundary-types

C:\fakepath\ts-test\resources\js\views\App.vue
  41:9  warning  Missing return type on function  @typescript-eslint/explicit-module-boundary-types
  49:5  warning  Missing return type on function  @typescript-eslint/explicit-module-boundary-types

✖ 3 problems (0 errors, 3 warnings)


webpack compiled with 1 warning
ERROR in resources/js/views/App.vue:62:12
TS2339: Property '$vuetify' does not exist on type '{ changeTheme(): void; }'.
    60 |       // });
    61 |
  > 62 |       this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
       |            ^^^^^^^^
    63 |     },
    64 |   },
    65 |   computed: {},

ERROR in resources/js/views/App.vue:62:40
TS2339: Property '$vuetify' does not exist on type '{ changeTheme(): void; }'.
    60 |       // });
    61 |
  > 62 |       this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
       |                                        ^^^^^^^^
    63 |     },
    64 |   },
    65 |   computed: {},
```

In `testjs.vue` the `espree` parser should be used and not `@typescript-eslint`.

### Update
It seems like using `@typescript-eslint` for all files is intended, to be able to do type linting, which is what I want. 

See:
 - https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/TYPED_LINTING.md
 - https://github.com/vuejs/vue-eslint-parser/issues/104
