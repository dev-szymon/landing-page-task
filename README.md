
## Getting started

You need to have `yarn@4.1.0` package manager installed on your machine.
Second, went through all packages and check for specific installation stuff - like creating .env file in web package
Run `yarn install` to install required dependencies.

## Available scripts

- `build:remix` - builds remix app
- `build:css` - builds tailwind styles
- `build` - builds remix and tailwind styles in parallel
- `clean:build` - cleans build directory
- `clean:modules` - cleans `node_modules` directory
- `dev:remix` - starts remix server
- `dev:css` - builds tailwind in watch mode
- `dev` - starts remix server and builds tailwind in watch mode in parallel
- `lint` - lints project files 
- `start` - starts remix server in production mode
- `test` - runs jest tests
- `typecheck` - typechecks typescript files

## Starting project locally
Run `yarn install` in root directory and then run `yarn dev`. 

## Technologies used

- `remix` - Remix is currently my prefrred choice to spin up a web project. It provides all the handy tools and I consider it simpler and more reliable compared to for example Nextjs.
- `tailwindcss` - Provides very productive way of writing styles. It requires less context switching because you are able to write styles together with markup. I consider not having to come up with names for classes or styled components a huge factor to productivity. `prettier-plugin-tailwindcss` package keeps utility classes organised in predicted order.
- `clsx` - A tiny library that makes extending classes easy.

## Notable assumptions

For the hero section video player I decided to keep it simple and handle custom controls using React Context. I've turned of some eslint accessibility rules to narrow the scope. Going further it might be worth to introduce keyboard events into custom controls.