#RANGE BUTTON REACT COMPONENT

The following example was created to work as a react component with ES6, pay atention in that, is important
---
##Needed packages to work:
 
 * React, of course
 * Babelify or another transpiler from ES6 to ES5 
 * JSX
 
## HOW IT WORKS?
We just need to copy our component file in our project location, after that import using ES6 sentence:

```javascript
import RangeButton from '<YOUR PATH>';
```
After that, we need to create the component:

The component need  3 to 8 props to work:

"elements":

The elements prop is the MOST important prop to make work that. It is an array of 1 or more elements formed by objects with the next structure:
```javascript
[
    {label: 'My test', value: 'test'}
]
```

"defaultValue":

The default value is the VALUE to be selected by default by our component, for example and following the past example reference:

>defaultValue: 'test'

>"customClass":

The custom class allows you to customize the ugly default range button style. Pass the className and it will be putted on top of DOM component structure:

To modify for example our left button:

On our component we set the next prop 
>customClass: 'range-button-language'

Then we modify our left button css:
```css
.range-button.range-button-language .right-button {
    float: left;
    background-color: red;
    padding: 5px;
}
```

As you can see wee put .range-button.range-button-language to tell ONLY to our range-button-language what style should take.


##HOW CAN I SET WHAT SUCCEDED WHEN I CLICK TO MY BUTTONS?

Off course, our component can get callbacks and execute them when a click occurs passing 3 different types of callbacks.

"callbackGlobal": Mandatory, if this is passed the button callbacks will not be executed, is called in every button click, no mather what side you use.
"callbackLeft": Called when you click left button.
"callbackRight": Called when you click right button.

>IMPORTANT, IF WE USE ONE SIDE CALLBACK WE NEED TO PASS THE ANOTHER SIDE CALLBACK ALWAYS

"context"
We can, also pass the context of actuation of our callbacks using the context prop

___

##FULL RANGEBUTTON CREATION CODE:
```jsx
<RangeButton defaultValue="pt"
                  elements={[
                              {label: 'Español', value: 'es'},
                              {label: 'Ingles', value: 'en'},
                              {label: 'Portugues', value: 'pt'}
                             ];}
                  callbackGlobal={function(value){
                  console.log(value);
                  }}
                  context={this}
                  customClass={'language-btn'}
     />
```