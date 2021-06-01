### Bird's Eye View:
#### The Blueprint:
1 - Exploratory Analysis: First, "get to know" the data. This step should be quick, efficient, and decisive.
2 - Data Cleaning: Then, clean your data to avoid many common pitfalls. Better data beats fancier 
3 - Feature Engineering: Next, help your algorithms "focus" on what's important by creating new features.
4 - Algorithm Selection: Choose the best, most appropriate algorithms without wasting your time.
5 - Model Training: Finally, train your models. This step is pretty formulaic once you've done the first 4.
#### there are other situational steps as well:
1 - Project Scoping: Sometimes, you'll need to roadmap the project and anticipate data needs.
2 - Data Wrangling: You may also need to restructure your dataset into a format that algorithms can handle.
3 - Preprocessing: Often, transforming your features first can further improve performance.
4 - Ensembling: You can squeeze out even more performance by combining multiple models.

### Exploratory Analysis:
#### Plot Categorical Distributions:
- Categorical features cannot be visualized through histograms. Instead, you can use bar plots.
- In particular, you'll want to look out for sparse classes, which are classes that have a very small number of observations.
- By the way, a "class" is simply a unique value for a categorical feature.
![](https://elitedatascience.com/wp-content/uploads/2017/06/grouping-sparse-classes-before.png)

#### Plot Segmentations:
- The median transaction price (middle vertical bar in the box) for Single-Family homes was much higher than that for Apartments / Condos / Townhomes.
- The min and max transaction prices are comparable between the two classes.
- In fact, the round-number min ($200k) and max ($800k) suggest possible data truncation...
...which is very important to remember when assessing the generalizability of your models later!
![](https://elitedatascience.com/wp-content/uploads/2017/06/boxplot-segmentation-example.png)

### Feature Engineering:
- You can isolate and highlight key information, which helps your - algorithms "focus" on what’s important.
- You can bring in your own domain expertise.
- Most importantly, once you understand the "vocabulary" of feature engineering, you can bring in other people’s domain expertise!

## Data Wrangling:
#### Data Wrangling steps:
- Set up your environment.
- Import libraries and dataset.
- Understand the data.
- Filter unwanted observations.
- Pivot the dataset.
- Shift the pivoted dataset.
- Melt the shifted dataset.
- Reduce-merge the melted data.

##### Resources:

- [Data Science ](https://elitedatascience.com/primer)





***Done by Omar-zoubi***
- [GitHub Link](https://github.com/Omar-zoubi)
- [Linkedin Link](https://www.linkedin.com/in/omar-alzoubi-54034bb4/)