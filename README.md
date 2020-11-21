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
	id:'xa2',
	value:"<p>My 2</p>",
	backgroundColor:'#f0ec78',
	teste:'',
	position:{x:500,y:35},
	size:{width:206,heigth:203},
	radius:true,
	shadow:true
}]

```
