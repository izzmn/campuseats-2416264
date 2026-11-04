# Week 1 reflection
1. What is the difference between building a UI imperatively (plain DOM code) and declaratively (React)?
//UI imperatively: everything has to be manually code, have to create all element and update them one by one
//declaratively: React can adapt to current state changes, its more efficient to update the DOM

2. Why must a component name start with a capital letter? 
//easier to see, in jsx, react uses capitalization rule to tell the difference between custom components and html tags

3. What does a fragment <>...</> do, and why not just use a <div>?
//<>...</> is a fragment that allows grouping multiple jsx elements together
//not using <div> because <div> is a wrapping element that create extra html element in dom, this can break css layouts

4. Name one benefit of splitting the UI into small components. 
//bug are easier to manage, can reuse it many times, easier to work on collaborations with other people