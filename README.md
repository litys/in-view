# In-view

Micro library for detecting if elements are in viewport

## How to use

Download the `inview.min.js` file and include it in your project. Next, initialize the library by calling the `inview()` function.

To ensure proper functionality, it is recommended to invoke the `inview()` function before the closing `</body>` tag. Additionally, it is possible to define custom parameters to configure the behavior of the library according to your specific requirements.

```js
inview({
  triggerElement: ".target", // Selecting elements with 'target' class name
  setClass: "inview", // The 'inview' class is set on the element if it is in the user's viewport.
  once: false, // Define whether the library should remove the set class after the element is hidden again in the user viewport.
});
```
