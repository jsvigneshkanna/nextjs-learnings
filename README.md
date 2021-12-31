# NextJS-Learnings

Learning Nextjs from different resources and making an sample website. Come lets all learn together 🤑

# What is Next JS

- Next JS is frontend React framework built top on react by vercel
- This is popularly used in frontend frameworks over plain react
- Main reason for such popularity is **server-side rendering** and **static page generation**
- Next JS gives better developer experience in form [pit of success](https://blog.codinghorror.com/falling-into-the-pit-of-success/)

**Server-side Rendering :**

- Unlike traditional react app rendering in client-side, next app renders in server-side to improve **SEO** and **Performance**
- In normal react you might want to statically pre-render some pages for performance and SEO
- This means First page loads renders through server

**Features :**

1. SPA aplicable
2. Easy and dynamic [routings](https://nextjs.org/docs/api-routes/introduction) through page folder
3. API routes (for dynamic pages like _/post/1_)
4. static site generation
5. built-in CSS and Sass support
6. easy deployment through github/ bitbucket

# Building Next JS App

> We are going to build next-class simple 😂 blog and the link is [click me witness blog](#building-next-js-app)

Through this learnings we will be using NPM instead of Yarn

## Coding

### Setup

1. NodeJS (latest version don't scold me later 😅)
2. create a next-app boiler code folders using cmd `npx create-next-app app-name --use-npm`

To test the app creation use below cmds

```
$ cd app-name
$ npm run dev
```

### Page creation/ Routings

[routes official docs](https://nextjs.org/docs/routing/introduction)

> So far, we have created only one page app. Now we will try to create many pages and start navigating through them.

- NextJS uses file system based routing, any .js files placed in `pages` folder acts as each webpage
- By default `index.js` file as root page

> pages/index.js → /
>
> pages/blog/first-post.js → /blog/first-post (nested pages)
>
> pages/blog/[slug].js → /blog/:slug (/blog/hello-world)

- Add `anyPageName.js` file in pages folder and access it via [http://localhost:3000/anyPageName](http://localhost:3000/anyPageName)

**Page Linkings**

- In NextJS we use `Link` component from `next/link`

```
    <Link href="/firstPost">
        <a>First Page</a>
    </Link>
```

# References

1. [Traversy Media 1hr YT crashcourse](https://www.youtube.com/watch?v=mTz0GXj8NN0&t=1637s)
2. [Official Learning docs](https://nextjs.org/learn/basics/create-nextjs-app)

```

```
