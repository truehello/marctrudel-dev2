---
title: Tailwind Group Utility for Hover effects
description: Tip about Gatsby Image CSS
featuredImgURL: https://source.unsplash.com/featured/?space,saturn
featuredImgAlt: tailwind group utility
slug: tailwind-group
keywords: Tailwind CSS
--- 
## Tailwind Group Hover

What do you do if you want to add a more complex nested hover effect on an element while using tailwindcss? Though tailwind makes it super simple to add hover effects to each element of the DOM, sometimes, you want to update styles for multiple children elements when hovering over a parent. The group-hover class in Tailwind lets you do just that in a very elegant way!

Tailwind offers a group hover utility class for this scenario. To acheive this, the parent element is given the class of group. Then, each child element that needs to react to the parent hover state gets a group-hover prefix class.

ex:

```
<div class="group p4 inline-block bg-gray-300 hover:bg-gray:800" >
    <h2 class="mb-1 text-gray-900 group-hover:text-gray-100" >Headline Text</h2>
    <p class= text-gray-900 group-hover:text-gray-100" >This is a paragraph. Avert your eyes, there is nothing to see here</p>
</div>


```

Note: Not all pseudo-class variants are enabled for all utilities by default due to file-size considerations. Group hover is considered a psudo-class. So if an effect is not working for a particular property, you may need to enable the utility in the variant section of the project's tailwind.config.js file:

```
// tailwind.config.js
module.exports = {
  // ...
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
  },
}

```

Bonus: Group works for :focus as it does with :hover. So if you are working with the focus styling, you can also apply group to the parent and the group-focus prefix to the children nodes. 


