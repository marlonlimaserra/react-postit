# react-postit
[View the Demo](https://strml.github.io/)

A simple postit that can be resized via one or more handles.
You can also change the color, change the position.

## License

MIT


## Usage
```js

<ReactPostit
  onEvent={function}         // optional  -> false.  Set to true to begin recording
  show={boolean}            // defaults -> true.  Ocultar todos os postits.
  opacityNotHover={number} // defaults -> 1.  Decreases the opacity of the postit without having a mouse over it.
  data={array object} // Array with all posts, see how to configure below.
/>

```

Modelo padrão da prop data `data`:
```
[{
	id:'1', // required  -> Type string. Each postit must have a unique id.
	value:"<p>My postit</p>", // required  -> Type string. By default, you can format the html.
	backgroundColor:'#f0ec78', // required  -> Type string. Postit Background color.
	position:{x:500,y:35}, // required  -> Type object. Object informing x and y position. (x,y type number)
	size:{width:206,heigth:203}, // required  -> Type string. Object informing width and heigth position (width,heigth type number)
	radius:true, // optional -> Leaves the postit with the rounded border.
	shadow:true // optional -> Leaves the postit with a slight shadow.
}]
```
