# [TOPIC 1.2] SERVERLESS CLOUD DEPLOYMENT WALKTHROUGHS

## [A] INFORMATION & DOCUMENTATION

**SERVERLESS / STATIC HOST:** GitHub Pages - https://pages.github.com/:

- GitHub pages is a little different to our other options, as it deploys from the Repo itself

- For vanilla HTML/CSS sites, its a fairly easy process.  However, for framework applications, like Vite + React.js, GitHub needs to somehow build the application in the Repo:

    - **PREVIOUSLY:** You had to install npm packages to have the application build itself ready for GitHub & ship the `build`/`dist` file to GitHub = VERY clunky

    - **NEW:** GitHub has now created software in the application which sets up a "workflow" to build the application in the repo

**DOCUMENTATION:**

- Instructions for vanilla HTML/CSS: https://pages.github.com/

- Video guide on Vite + Github Actions: https://youtu.be/MKw-IriprJY

- Instructions for Vite GitHub Pages setup: https://vitejs.dev/guide/static-deploy.html#github-pages

&nbsp;

## [B] BASIC STEPS

**1. Create new Local Repo & Publish to GitHub**

  - Using GitHub Desktop, Add or Create New **LOCAL** Repo from your existing portfolio project

  - One Git setup, publish the repo to GitHub **AND** ensure it is **PUBLIC** (*you need to PAY if you want to publish a private repo to GitHub Pages*)
  
  - **NOTE:** The name of the repo will also be the **name of your github.io subdomain name**

&nbsp;

**2. Review GitHub Actions Hub & Change Permissions**

  - This workflow build order requires both read & write permissions to fully create our `dist` file

  - In your repo, go to: `Settings` (*on the top menu*) -> `Actions` (*on the left menu*) -> `General` (*sub-menu*)

  - Scroll down to bottom heading: `Workflow permissions` & change to `Read & write permissions` + hit `Save`

&nbsp;

**3. Configure your base URL for hosting on a GitHub pages sub-domain:**

  - With GitHub pages, your domain will effectively be your GitHub profile + your repo name

    - EXAMPLE SUB-DOMAIN: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME`

  - **AS A RESULT** - You need to tell your Vite application that the BASE url starts from this repo:

    - (a) Set the react-router-dom base to the subdomain subdomain in `main.jsx`: `<BrowserRouter basename="/SUBDOMAIN-PATH">` (e.g. `basename="/githubport"`)  

    - (b) Set the `base` to the subdomain in the `vite.config.ts` file: `base: "/<SUBDOMAIN>/"` (e.g. `base: "/githubport"`)

&nbsp;

**4. Configure the GitHub workflow `.yml` file to build the application on GitHub:**

  - Create the following directory path: `/.github` -> `/workflows` -> `deploy.yml`

  - Copy the template workflow build in the [Vite docs](https://vitejs.dev/guide/static-deploy.html#github-pages) into `deploy.yml`

  - Using GitHub desktop, commit & push the change to GitHub

  - **NOTE:** Using CLI commands, the same process would be:

    - Add all files to local git: `git add -a`

    - Commit to local main: `git commit -m "add deploy workflow"`

    - Push to GitHub: `git push`

&nbsp;

**5. Oversee worflow build action & check deployment**

  - Go back to your GitHub repo & you should see a little yellow lightbulb next to the commit - **click this!** (if not, just click the `Actions` tab)

  - 

&nbsp;

4. We setup our file to deploy to build, using a package called "gh-pages"

    - In our local project, install the package as a dev dependency: `npm i -D gh-pages`

    - Add two scripts which sync with gh-pages: 
      - `"predeploy": "npm run build",`
      - `"deploy": "gh-pages -d build",`

    - Then run the deploy which will build the production files & deploy to github pages: `npm run deploy`

&nbsp;

5. Check the domain which is setup in your package.json: `"https://YOUR-USERNAME.github.io/YOUR-REPO-NAME",`

  "homepage": "https://kuuzon.github.io/",

&nbsp;

### ISSUE: GITHUB PAGES CAN ONLY RENDER A SINGLE REACT PAGE APPLICATION
There are proposed workarounds, but it does involve a bit of tinkering with your React.js project
- Question the utility when we compare against ease of other hosts!

- Proposed solution for relative links: https://maximorlov.com/deploying-to-github-pages-dont-forget-to-fix-your-links/
    - Incorporate a prop/attribute into the BrowserRouter: `<Router basename="/abdemo">`

    - We will test this in class to see if the workaround works (check `App.js` - we have changed the `<Router>`)