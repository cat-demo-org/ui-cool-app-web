#!/bin.bash

# Clone Dependencies
cd .. \
&& (git clone git@github.com:cat-demo-org/ui-cool-app-shared.git || echo 'already exists  -- skipping \n') \
&& (git clone git@github.com:cat-demo-org/demo-api-sdk.git || echo 'already exists  -- skipping\n') \
&& (git clone git@github.com:cat-demo-org/ui-web-components.git || echo 'already exists  -- skipping\n') \
&& (git clone git@github.com:cat-demo-org/shared-types.git || echo 'already exists -- skipping\n') \
# Link Dependencies
cd ui-cool-app-web \
&& echo "Link ui-web-components" \
&& pnpm link ../ui-web-components && \
# -
echo "Link ui-cool-app-shared" \
&& pnpm link ../ui-cool-app-shared && \
# -
echo "Link ui-web-shared dependencies" \
&& cd ../ui-cool-app-shared && pnpm link-deps && \
# -
echo "Link demo-api-sdk dependencies" \
&& cd ../demo-api-sdk && ls && pnpm link-deps
