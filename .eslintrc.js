module.exports = {
  env: {
    browser: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    'react',
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.jsx',
        ],
      },
    },
  },
  rules: {
    // require parens around arrow function arguments, ex: `(a) => a;`
    'arrow-parens': ['error', 'always'],

    // don't require class methods to call 'this'
    'class-methods-use-this': 0,

    // indent 2 spaces
    indent: ['error', 2],

    // require unix-style line breaks in the file
    'linebreak-style': ['error', 'unix'],

    // warn about using console statements
    'no-console': ['warn'],

    // strings should use single quotes instead of double
    quotes: ['error', 'single'],

    // always require semi-colons
    semi: ['error', 'always'],

    // require curly braces at all times
    curly: 2,

    // must call `super()` before using this in a class constructor when the
    // class extends another
    'no-this-before-super': 2,

    // require spaces around arrow when making arrow function
    'arrow-spacing': 2,

    // prefer spread instead of using fn.apply, ex: `Math.max(...[1,2,3])`;
    'prefer-spread': 2,

    // allow useless escape
    'no-useless-escape': 0,

    // don't require spaces around curly braces `{foo}`, not `{ foo }`
    'object-curly-spacing': [2, 'never'],

    // warning (1) when throwing literal string
    'no-throw-literal': 1,

    // don't allow using functions before them being defined (don't rely on hoisting).
    'no-use-before-define': 0,

    // don't worry about arrow body style for functions.
    'arrow-body-style': 0,

    // 2 rules that have no definition?
    'no-global-assign': 0,
    'no-unsafe-negation': 0,

    // functions/objects being `new`ed need to be uppercase, ex: `let f = new Thing()`
    'new-cap': [
      2,
      {newIsCap: true, capIsNew: false},
    ],

    // don't allow unused variables/params unless they are prefixed with 2 underscores
    'no-unused-vars': [
      2,
      {args: 'all', argsIgnorePattern: '^__', varsIgnorePattern: '^__'},
    ],

    // don't require lines between class properties
    'lines-between-class-members': 'off',

    // allow arrow functions with ternary operator
    'no-confusing-arrow': 'off',

    // allow sparse arrays (useful for styled-system values)
    'no-sparse-arrays': 'off',

    // resolve eslint error if storybook is in the project's devDependencies
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: [
        '**/.storybook/**',
        '**/stories/**',
        '**/test/**',
      ]
    }],

    // don't require href attribute since it's added by next.js router on rendering
    'jsx-a11y/anchor-is-valid': 'off',

    // force double quotes in jsx attributes
    'jsx-quotes': ['error', 'prefer-double'],

    // 120 is totally fine in 2020
    'max-len': ['error', {
      code: 120,
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],

    // don't require destructing of props and state
    'react/destructuring-assignment': 'off',

    // forcing to set displayName components property
    'react/display-name': 'error',

    // inline functions can break shouldComponentUpdate optimization
    // and harm the performance.
    'react/jsx-no-bind': ['error', {
      ignoreRefs: false,
      allowArrowFunctions: true,
      allowFunctions: false,
      allowBind: false,
      ignoreDOMComponents: true,
    }],

    // don't forbid stuff like <tag>content</tag> on a single line
    'react/jsx-one-expression-per-line': 'off',

    // yeah, spreading props is bad, but it's very useful for styled-components
    'react/jsx-props-no-spreading': 'off',

    // required using default props in alphabetical order
    'react/jsx-sort-default-props': ['error', {
      ignoreCase: true,
    }],

    // required using props in alphabetical order
    'react/jsx-sort-props': ['error', {
      ignoreCase: true,
      reservedFirst: true,
    }],

    // don't force to escape single quotes
    // (unfortunately this rule doesn't have exceptions option)
    'react/no-unescaped-entities': 'off',

    // don't allow using of undeclared props
    'react/prop-types': ['error', {
      ignore: [
        'children',
        'className',
        'theme', // styled-components
        'variant', // styled-system
      ],
    }],

    // required using prop types in alphabetical order
    'react/sort-prop-types': ['error', {
      ignoreCase: true,
      requiredFirst: true,
      sortShapeProp: true,
    }],

    // event airbnb thinks it's better, they're just limited by their own babel preset:
    // https://github.com/airbnb/javascript/commit/089022aeff7b4d753c9f419c5b4e3a26cdf625b8
    'react/static-property-placement': ['error', 'static public field'],

    // https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb/rules/react.js#L484
    'react/state-in-constructor': ['error', 'never'],
  },
};
