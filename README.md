# Web/Mobile Web Application

## Developing and Running Locally

When developing Cool App, all of it's internal org dependencies should be pulled as well to allow seamless development as needed. Follow the steps below to work on this application:

Open 4 terminal widnows

- Git clone internal dependencies [ui-cool-app-shared](https://github.com/cat-demo-org/ui-cool-app-shared) and it's sub-dependency [demo-api-sdk](https://github.com/cat-demo-org/demo-api-sdk) as well as [ui-web-components](https://github.com/cat-demo-org/ui-web-components)
- You should have a terminal open in each of these repository directories and they should be in the same overarching directory
- Run `pnpm link-deps` inside `ui-cool-app-shared` to link local sub-dependency of `demo-api-sdk`
- Run `pnpm link-deps` inside `ui-cool-app-web` to link local dependencies for the web application
- In the `demo-api-sdk` terminal -- Run `pnpm dev`
- In the `ui-cool-app-shared` terminal -- Run `pnpm dev`
- In the `ui-cool-app-web` terminal -- Run `pnpm dev`

You should now have 3 terminals running the required development code.

If you are editing material ui components for use in this application, make changes to the them in `ui-web-components` as necessary -- The development ladle server for these components can be ran inside the `ui-web-components` repo with `pnpm dev` as well. 

All internal org dependencies should now be linked locally and can be worked on seamlessly while maintaining sepration of concern. 

**Remember to pull code from respective repositories as needed when updates are made from other team members**
