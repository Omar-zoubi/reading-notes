## Chart.js
#### Installation:
#### You can download the latest version of Chart.js from the [GitHub releases](https://github.com/chartjs/Chart.js/releases/tag/v2.9.4)or use a [Chart.js CDN.](https://www.jsdelivr.com/package/npm/chart.js) Detailed installation instructions can be found on the [installation](https://www.chartjs.org/docs/latest/getting-started/installation.html) page.
 
#### Creating a Chart:
#### It's easy to get started with Chart.js. All that's required is the script included in your page along with a single `canvas` node to render the chart.
 ![](https://www.developerdrive.com/wp-content/uploads/2019/07/chartjs-pie-chart-js.jpg)

#### The `canvas` element:

#### At first sight a `canvas` looks like the `img` element, with the only clear difference being that it doesn't have the src and alt attributes. Indeed, the `canvas` element has only two attributes, width and height. These are both optional and can also be set using DOM properties. When no width and height attributes are specified, the canvas will initially be 300 pixels wide and 150 pixels high. The element can be sized arbitrarily by CSS, but during rendering the image is scaled to fit its layout size: if the CSS sizing doesn't respect the ratio of the initial canvas, it will appear distorted.

#### Fallback content:
#### The `canvas` element differs from an `img` tag in that, like for `video`, `audio`, or `picture` elements, it is easy to define some fallback content, to be displayed in older browsers not supporting it, like versions of Internet Explorer earlier than version 9 or textual browsers. You should always provide fallback content to be displayed by those browsers. Providing fallback content is very straightforward: just insert the alternate content inside the `canvas` element. Browsers that don't support `canvas` will ignore the container and render the fallback content inside it. Browsers that do support `canvas` will ignore the content inside the container, and just render the canvas normally.

#### Drawing rectangles:
#### Unlike SVG, `canvas` only supports two primitive shapes: rectangles and paths (lists of points connected by lines). All other shapes must be created by combining one or more paths. Luckily, we have an assortment of path drawing functions which make it possible to compose very complex shapes.

#### First let's look at the rectangle. There are three functions that draw rectangles on the canvas:

#### fillRect(x, y, width, height)
#### Draws a filled rectangle.
#### strokeRect(x, y, width, height)
#### Draws a rectangular outline.
### clearRect(x, y, width, height)
#### Clears the specified rectangular area, making it fully transparent.
#### Each of these three functions takes the same parameters. x and y specify the position on the canvas (relative to the origin) of the top-left corner of the rectangle. width and height provide the rectangle's size.

### Drawing paths:
#### Now let's look at paths. A path is a list of points, connected by segments of lines that can be of different shapes, curved or not, of different width and of different color. A path, or even a subpath, can be closed. To make shapes using paths, we take some extra steps:
#### 1.First, you create the path.
#### 2.Then you use drawing commands to draw into the path.
#### 3.Once the path has been created, you can stroke or fill the path to render it.

#### beginPath()
#### Creates a new path. Once created, future drawing commands are directed into the path and used to build the path up.
#### Path methods
#### Methods to set different paths for objects.
#### closePath()
#### Adds a straight line to the path, going to the start of the current sub-path.
#### stroke()
#### Draws the shape by stroking its outline.
#### fill()
#### Draws a solid shape by filling the path's content area.

## Advanced text measurements:
#### In the case you need to obtain more details about the text, the following method allows you to measure it.
#### measureText()
#### Returns a TextMetrics object containing the width, in pixels, that the specified text will be when drawn in the current text style.
#### The following code snippet shows how you can measure a text and get its width.

#### function draw() {
####   var ctx = document.getElementById('canvas').getContext('2d');
####   var text = ctx.measureText('foo'); // TextMetrics object
####   text.width; // 16;
#### }

***Done by Omar-zoubi***
[GitHub](https://github.com/Omar-zoubi)