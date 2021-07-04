### Download Starter Code:
```
npx create-next-app nextjs-blog --use-npm --example "https://github.com/vercel/next-learn-starter/tree/master/assets-metadata-css-starter"
```
### Image Component and Image Optimization:
- next/image is an extension of the HTML <img> element, evolved for the modern web.

- Next.js also has support for Image Optimization by default. This allows for resizing, optimizing, and serving images in modern formats like WebP when the browser supports it. This avoids shipping large images to devices with a smaller viewport. It also allows Next.js to automatically adopt future image formats and serve them to browsers that support those formats.

- Automatic Image Optimization works with any image source. Even if the image is hosted by an external data source, like a CMS, it can still be optimized.



### Using the Image Component
- Instead of optimizing images at build time, Next.js optimizes images on-demand, as users request them. Unlike static site generators and static-only solutions, your build times aren't increased, whether shipping 10 images or 10 million images.

- Images are lazy loaded by default. That means your page speed isn't penalized for images outside the viewport. Images load as they are scrolled into viewport.

- Images are always rendered in such a way as to avoid Cumulative Layout Shift, a Core Web Vital that Google is going to use in search ranking.

- Here's an example using next/image to display our profile picture. The height and width props should be the desired rendering size, with an aspect ratio identical to the source image.

```
<style jsx>{`
  …
`}</style>
```
- This page is using a library called styled-jsx. It’s a “CSS-in-JS” library — it lets you write CSS within a React component, and the CSS styles will be scoped (other components won’t be affected).

Next.js has built-in support for styled-jsx, but you can also use other popular CSS-in-JS libraries such as styled-components or emotion.

### Writing and Importing CSS:
- Next.js has built-in support for CSS and Sass which allows you to import .css and .scss files.

- Using popular CSS libraries like Tailwind CSS is also supported.

- In this lesson, we’ll talk about how to write and import CSS files in Next.js. We’ll also talk about Next.js’s built-in support for CSS Modules and Sass. Let’s dive in!


##### Resources:

- [React](https://nextjs.org/learn/basics/assets-metadata-css/css-styling)





***Done by Omar-zoubi***
- [GitHub Link](https://github.com/Omar-zoubi)
- [Linkedin Link](https://www.linkedin.com/in/omar-alzoubi-54034bb4/)
