### Page Path Depends on External Data
- In the previous lesson, we covered the case where the page content depends on external data. We used getStaticProps to fetch required data to render the index page.

- In this lesson, we’ll talk about the case where each page path depends on external data. Next.js allows you to statically generate pages with paths that depend on external data. This enables dynamic URLs in Next.js.



- How to Statically Generate Pages with Dynamic Routes
In our case, we want to create dynamic routes for blog posts:

- We want each post to have the path /posts/<id>, where <id> is the name of the markdown file under the top-level posts directory.
- Since we have ssg-ssr.md and pre-rendering.md, we’d like the paths to be /posts/ssg-ssr and /posts/pre-rendering.

###  Implement getStaticPaths
First, let’s set up the files:

Create a file called [id].js inside the pages/posts directory.
Also, remove first-post.js inside the pages/posts directory — we’ll no longer use this.
Then, open pages/posts/[id].js in your editor and paste the following code.
- Important: The returned list is not just an array of strings — it must be an array of objects that look like the comment above. Each object must have the params key and contain an object with the id key (because we’re using [id] in the file name). Otherwise, getStaticPaths will fail.

- Finally, we'll import the getAllPostIds function and use it inside getStaticPaths. Open pages/posts/[id].js and copy the following code above the exported Post component.

### Download Starter Code (Optional)
If you’re NOT continuing from the previous lesson, you can download, install, and run the starter code for this lesson below. This sets up a nextjs-blog directory such that it’s identical to the result of the previous lesson.

Again, this is NOT necessary if you’ve just finished the previous lesson.

```
npx create-next-app nextjs-blog --use-npm --example "https://github.com/vercel/next-learn-starter/tree/master/basics-final"
``` 



#### Push to GitHub
Before we deploy, let’s push our Next.js app to GitHub if you haven’t done so already. This will make deployment easier.

On your personal GitHub account, create a new repository called nextjs-blog.
The repository can be public or private. You do not need to initialize it with a README or other files.
If you need help setting up your repo, take a look at this guide on GitHub.
Then:

If you haven’t initialized the git repository locally for your Next.js app, do so now.
Push the Next.js app to your GitHub repository.
To push to GitHub, you can run the following commands (replace <username> with your GitHub username):

### Next.js and Vercel
- Vercel is made by the creators of Next.js and has first-class support for Next.js. When you deploy your Next.js app to Vercel, the following happens by default:

- Pages that use Static Generation and assets (JS, CSS, images, fonts, etc) will automatically be served from the Vercel Edge Network, which is blazingly fast.
- Pages that use Server-Side Rendering and API routes will automatically become isolated Serverless Functions. This allows page rendering and API requests to scale infinitely.


Vercel has many more features, such as:
#### Custom Domains: Once deployed on Vercel, you can assign a custom domain to your Next.js app. Take a look at our documentation here.
#### Environment Variables: You can also set environment variables on Vercel. Take a look at our documentation here. You can then use those environment variables in your Next.js app.
#### Automatic HTTPS: HTTPS is enabled by default (including custom domains) and doesn't require extra configuration. We auto-renew SSL certificates.



##### Resources:

- [Next.js - Deployment](https://nextjs.org/learn/basics/deploying-nextjs-app)





***Done by Omar-zoubi***
- [GitHub Link](https://github.com/Omar-zoubi)
- [Linkedin Link](https://www.linkedin.com/in/omar-alzoubi-54034bb4/)