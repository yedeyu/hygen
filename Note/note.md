# Key functions

------

# runner

```ts
const runner = async (
  argv: string[],
  config: RunnerConfig,
): Promise<RunnerResult>
```

- argv

```js
argv = [
  "mygen",
  "cmd3",
  "--name",
  "peter",
  "--message",
  "This is a short message.",
  "--longwords",
  "A long words",
]

argv = [
  generatorName, 
  actionName, 
  [nameValue], // or "--name", "nameValue"
  --key1, value1, --key2, value2, ...]
```


```ts
export interface RunnerConfig {
  exec?: (sh: string, body: string) => void
  templates?: string
  cwd?: string
  logger?: Logger
  debug?: boolean
  helpers?: any
  localsDefaults?: any
  createPrompter?: <Q, T>() => Prompter<Q, T>
}
```



## Initial

- Entry
  - Resolve config
    - Result data
      - resolvedConfig
    - Note
      - Find the path of the local `_templates` directory
  - `engine(argv, resolvedConfig)`



------

# Fn: `engine(argv, resolvedConfig)`

```ts
args = 
{
  // path to the _templates directory
  templates: "/private/tmp/hygen/_templates",
  // path to the _templates/action
  actionfolder: "/private/tmp/hygen/_templates/mygen/cmd3",
  // generator name
  generator: "mygen",
  // action name
  action: "cmd3",
  subaction: undefined,
  _: [
    "mygen",
    "cmd3",
  ],
  ts: 1659592883643,
  // special variable `name`
  name: "peter",
  // custom variable
  message: "This is a short message.",
  longwords: "A long words",
  // current working directory
  cwd: "/private/tmp/hygen",
  
  // dry mode
  dry: true,
}
```


## Initial: Check help flag

- Entry
  - Create `args` object
  - Does `argv` start with the help flag
    - StartWithHelpFlag?
- Input
  - StartWithHelpFlag -> Display help information
- Transition
  - StartWithHelpFlag -> End
  - Check generator and action

## Check generator and action

- Entry
  - Display dry mode if applicable
  - Check generator and action
    - NoGenerator?
    - NoAction?
- Input
  - NoGenerator -> Display no generator error
  - NoAction -> Display no action error
- Transition
  - NoGenerator || NoAction -> End
  - Load Templates

## Load Templates

- Entry
  - Display Load Templates Info
  - Does the action folder exist
    - NoActionFolder?
- Input
  - NoActionFolder -> Display no action folder error and tips
  - !NoActionFolder -> Actions
    - Load the `execute` and `render` modules
    - Run `render`
    - Run `execute`
- Transition
  - End


## Final: End

------------
# Fn: `ender(args, config)`

## Initial

- Entry
  - Get all templates from `args.actionfolder`
    - NoError?
- Input
  - NoError -> Sort the templates
    - NoError?
  - NoError -> Filter out the ignored files
    - NoError?
    - Note
      - `index.js`
      - `prompt.js`
  - NoError -> handle subactions
    - NoError?
  - NoError -> Read the template files
    - NoError?
    - Note
      - Store the file content along with the file name in an object, put all the objects in an array
      - [{file, text}, ...]
  - NoError -> Pre-formatting files
    - NoError?
    - Note
      - Parse the attributes and the body of a template file
  - NoError -> Render the template
    - Render Attributes
    - Render body
  - Return the result


-------

# Fn: execute






