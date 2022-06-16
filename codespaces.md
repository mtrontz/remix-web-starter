How to import github repo via url to online codespaces:

Stackblitz:
https://developer.stackblitz.com/docs/platform/importing-projects/
Import from Github#
You can run any public repo on Github by providing the username and repo name in the URL like so:

stackblitz.com/github/{GH_USERNAME}/{REPO_NAME}

And you can also optionally specify a branch, tag, or commit:

.../github/{GH_USERNAME}/{REPO_NAME}/tree/{TAG|BRANCH|COMMIT}

Whenever you push commits to Github, the corresponding StackBlitz project automatically updates with the latest changes — ensuring your Github repo remains the code’s source of truth.

The GitHub importer imports any projects with a package.json, but note that unsupported technologies will not run. Check out our [Supported Frameworks](https://developer.stackblitz.com/docs/platform/supported-frameworks) for updates on support for new technologies!

Defining a command to launch on the project load.#
Oftentimes the first thing you do when opening a project is to launch a command e.g. to run a development server. Usually, these kinds of commands exist in the scripts section of your project's package.json file and you would manually type npm run dev to execute them.

You can provide an npm script to run automatically when the editor opens by providing the terminal query parameter:

stackblitz.com/fork/github/{GH_USERNAME}/{REPO_NAME}?terminal={NPM_SCRIPT_NAME}

EXAMPLE
The following URL will open the vitesse repository of the antfu user, install the NPM dependencies, and run npm run dev command in the terminal:

stackblitz.com/github/antfu/vitesse?terminal=dev

Setting up the imported project's title#
By default, the GitHub importer will set the project's title based on the GitHub project owner's name and repository name.

To customize the title of the imported project, add the title query parameter to the import URL like so:

stackblitz.com/fork/github/{GH_USERNAME}/{REPO_NAME}?title={CUSTOM_TITLE}

Importing Private Projects#
NOTE
Importing private GitHub repos is a feature available with our memberships. If you're interested in being a member, check details on our StackBlitz Cloud page.

1. Go to your dashboard and open a new JavaScript blank project Dashboard for JavaScript Blank Project

2. Click on 'Connect repository' on the top left 3. Click on the 'importing from an existing repository' link Connect and import GitHub repo

3. Paste your full GitHub repo URL Paste GitHub repo URL to import

The video below outlines a workaround to edit collaboratively in a private repo:

StackBlitz API#
You can create new StackBlitz projects programmatically from any data source using our POST API or the openProject & embedProject methods in our JavaScript SDK.

Previous
« Getting Started
