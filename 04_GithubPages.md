# [TOPIC 1.2] SERVERLESS CLOUD DEPLOYMENT WALKTHROUGHS

## [A] INFORMATION & DOCUMENTATION

**SERVERLESS / STATIC HOST:** GitHub Pages - https://pages.github.com/:

- Instructions for vanilla HTML/CSS: https://pages.github.com/

- Video guide (*missing some steps*) for React.js: https://youtu.be/2hM5viLMJpA

- Instructions for Vite GitHub Pages setup: https://vitejs.dev/guide/static-deploy.html#github-pages

&nbsp;

For React.js, we need something a little more tailored, as we need to transform it to production mode

- IMPORTANT: We will be mainly using CLI to init git, setup remote, commit to master & push to the remote git

&nbsp;

## [B] BASIC STEPS

**1. Create new Repo on GitHub for the Project**

    - Name of the repo will also be the name of your github.io subdomain name

&nbsp;

**2. Open your local project in VSCode:**

    - Install modules: `npm i`
      
    - Setup git: `git init`

    - Setup remote git: `git remote add origin https://github.com/kuuzon/YOUR-REPO-NAME.git`

    - Add all files to local git: `git add -A`

    - Commit to local main: `git commit -m "Initial commit"`

    - Push to GitHub: `git branch -M main` -> `git push -u origin main`

&nbsp;

3. Now we should set our GitHub repo filled with our project.  We now want to begin linking the repo project to our GitHub pages domain

    - In package.json, add at the start: `"homepage": "https://YOUR-USERNAME.github.io/YOUR-REPO-NAME",`

&nbsp;

4. We setup our file to deploy to build, using a package called "gh-pages"

    - In our local project, install the package as a dev dependency: `npm i -D gh-pages`

    - Add two scripts which sync with gh-pages: 
      - `"predeploy": "npm run build",`
      - `"deploy": "gh-pages -d build",`

    - Then run the deploy which will build the production files & deploy to github pages: `npm run deploy`

&nbsp;

5. Check the domain which is setup in your package.json: `"https://YOUR-USERNAME.github.io/YOUR-REPO-NAME",`

&nbsp;

### ISSUE: GITHUB PAGES CAN ONLY RENDER A SINGLE REACT PAGE APPLICATION
There are proposed workarounds, but it does involve a bit of tinkering with your React.js project
- Question the utility when we compare against ease of other hosts!

- Proposed solution for relative links: https://maximorlov.com/deploying-to-github-pages-dont-forget-to-fix-your-links/
    - Incorporate a prop/attribute into the BrowserRouter: `<Router basename="/abdemo">`

    - We will test this in class to see if the workaround works (check `App.js` - we have changed the `<Router>`)