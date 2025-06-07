# dom-events-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?
  Logging things to the console allows us to see if something is working and it can provide more information
  about data.

- What is the purpose of events and event handling?
  User interactions

- Are all possible parameters required to use a JavaScript method or function?
  Yes

- What method of element objects lets you set up a function to be called when a specific type of event occurs?
  addEventListener

- What is a callback function?
  A function passed into another function as an argument.

- What object is passed into an event listener callback when the event fires?
  event

- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
  The `event.target` is the html element being fired.
  You can log `event.target` in the console.

- What is the difference between these two snippets of code?
  The first snippet of code reflects the 'click' upon clicking and the second snippet of code causes the 'click' to occur
  without needing to click the button, which defeats is purpose and appears like nothing is occurring.

  ```js
  element.addEventListener('click', handleClick);
  ```

  ```js
  element.addEventListener('click', handleClick());
  ```

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
