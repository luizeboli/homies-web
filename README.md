# Homies Chat

This is the frontend part of Homies Chat application. [Here's](https://github.com/luizeboli/homies-api) the backend.


## Technologies

This project is primarily built using Next.js, even though it may not have been the best choice, I know. However, I wanted to test Next's new features, such as the `app`  directory.

In the case of Homies, SSR is totally needless for several reasons:

- All the application is behind an authentication screen, which means Google won't index it;
- We don't have a landing page;
- We don't need to worry about SEO;
- Since Homies is a chat app, a lot of dynamic content is needed which can be difficult to handle server-client state;

Actually it's been pretty tough to manage state from server to client, as the data is continuously updated through websockets connection.

The CSS is handled by Tailwind. This is my first experience with this library. It's been easy and fun to build components using Tailwind. You have a design system from the beginning. However, CSS newcomers should pay attention to the fact that you should learn CSS first so you know whats behind Tailwind. It's like learning React before Javascript.

## Getting Started

First, install all dependencies:

```bash
yarn
# or
npm install
```

Then, run the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
