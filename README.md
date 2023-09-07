# Web/Mobile Web Application

## Developing and Running Locally

When developing Cool App, all of it's internal org dependencies should be pulled as well to allow seamless development as needed. Follow the steps below to work on this application:


- Run `git clone git@github.com:cat-demo-org/ui-cool-app-web.git` then cd into the newly cloned repo
- Run `pnpm i` to install package dependencies
- Run `pnpm clone-deps` to clone additional local dependencies
- Run `pnpm link-deps` to link all necessary local dependencies
### Separate Runtime
- You should now open a terminal in each of the newly cloned repository directories
- In the `demo-api-sdk` terminal -- Run `pnpm dev`
- In the `ui-cool-app-shared` terminal -- Run `pnpm dev`
- In the `ui-cool-app-web` terminal -- Run `pnpm dev`

You should now have 3 terminals running the required development code.

### Combined Runtime

- You can alternatively run `pnpm dev-all` to start all dev envs in one terminal, however the output can become garbled

If you are editing material ui components for use in this application, make changes to the them in `ui-web-components` as necessary -- The development ladle server for these components can be ran inside the `ui-web-components` repo with `pnpm dev` as well. 

All internalal org dependencies should now be linked locally and can be worked on seamlessly while maintaining sepration of concern. 



**Remember to pull code from respective repositories as needed when updates are made from other team members**
