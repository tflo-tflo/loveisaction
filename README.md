# loveisaction

1. Install NPM
2. Install JS packages: `npm install`
3. Install hugo using brew: ```brew update && brew install hugo```
4. Start up Gulp by `gulp`
5. Start up your server by `hugo server -v`

# Deployment (WIP)

1. `now` (the deployment tool we're using) should already be installed from your `npm install`; you can double-check that it's available by typing `npm ls now`, which should show you something like:
  ```
  
  lisa@1.0.0 /your/projects/path/loveisaction
  └── now@1.0.0
  
  ```
1. If you've never deployed before, run `npm run login`
  * When asked for your email, provide `services@substantial.com`
  * Open a browser, log into the services@substantial.com gmail account (available through LastPass; if not, talk to Jen), and click the link from now@zeit.co
1. Deploy: `npm run deploy`

<br>
The script should automagically:
  * Deploy the contents of `public` to Zeit's hosting
  * Alias the site using the loveisaction.us domain
