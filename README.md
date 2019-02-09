# React Media View

A simple media view component for React.

## Installation

The package can be installed via NPM:

```
npm install --save react-media-view
```

## Examples

* [Basic Example](https://codesandbox.io/s/1zqxypm8v7)
* [Event Handler Example](https://codesandbox.io/s/n7jjp7n3qp)
* [Overlay Example](https://codesandbox.io/s/5zr5zpm95l)
* [Custom Image Example](https://codesandbox.io/s/jz4m6w4qvv)
* [Multi Select Example](https://codesandbox.io/s/m79mlo6n0j)
* [Instagram Example](https://codesandbox.io/s/wwwvkrxkq8)

## Basic Usage

You can basically use the library with an array of objects which have objects with `src` property.

```javascript
import React, {Component} from 'react';
import ReactMediaView from "react-media-view";

class ReactMediaViewExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      media: [
        {
          src: "https://images.unsplash.com/photo-1531386450450-969f935bd522?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b0e6037f0a7cd63b48cc1562e348eb3a&auto=format&fit=crop&w=750&q=80"
        },
        {
          src: "https://images.unsplash.com/photo-1518128958364-65859d70aa41?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=df90aec8aaec700a402790e4799d226e&auto=format&fit=crop&w=774&q=80"
        },
        {
          src: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d4147a2e4e3f79299e2f0c92b13db9ee&auto=format&fit=crop&w=668&q=80"
        },
        {
          src: "https://images.unsplash.com/photo-1510797215324-95aa89f43c33?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f8dee688d0e8cbb8c6c99de58f22a7dc&auto=format&fit=crop&w=750&q=80"
        },
        {
          src: "https://images.unsplash.com/photo-1504511045-dc6e5c9bea25?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a88ada821297d024419edbf111a244e7&auto=format&fit=crop&w=800&q=80"
        },
        {
          src: "https://images.unsplash.com/photo-1502083728181-687546e77613?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e11ef2edff62a7a7701cfbe89d020b19&auto=format&fit=crop&w=1650&q=80"
        },
        {
          src: "https://images.unsplash.com/photo-1489619243109-4e0ea59cfe10?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=974d4283fca93c49c75f8b19a4b6abbf&auto=format&fit=crop&w=1650&q=80"
        },
        {
          src: "https://images.unsplash.com/photo-1487622750296-6360190669a1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0966f85ba805ff53ab5c270e14548d6b&auto=format&fit=crop&w=800&q=80"
        }
      ]
    };
  }

  render() {
    return (
      <ReactMediaView media={this.state.media}/>
    );
  }
}

export default ReactMediaViewExample;
```

## Property List

| Name | Description | Is Required | Type | Default Value | Expected Values |
| --- | --- | :---: | :---: | :---: | :---: |
| `media` | Array of media objects that you want to display | `true` | `array` | `empty` | Any array of objects (objects must require a `src` property) |
| `className` | Custom class name that you want to describe for your media view component | `false` | `string` | `empty` | Any CSS class name |
| `columnCount` | Column count | `false` | `number` | `3` | Any integer value |
| `rowHeight` | Row height | `false` | `number` | `200` | Any integer value (in pixels) |
| `gap` | Gap size between items | `false` | `number` | `1` | Any integer value (in pixels) |
| `emptyState` | Custom node that you want to show when there is no media element | `false` | `node` | `There is no media to show :(` | Any html value |
| `stretchLastItem` | Boolean prop to define stretching the last item or not | `false` | `bool` | `false` | `true` or `false` |
| `overlayTrigger` | Enum prop to define overlay showing trigger | `false` | `string` | `empty` | `mount`, `hover`, `click` or `toggle` |
| `overlay` | Function to define overlay node | `false` | `function` | `empty` | Any javascript function that returns html |
| `image` | Function to define custom image node | `false` | `function` | `empty` | Any javascript function that returns html |
| `onMouseEnter` | Function that you want to run when mouse entered on an element | `false` | `function` | `empty` | Any javascript function |
| `onMouseLeave` | Function that you want to run when mouse leaved from an element | `false` | `function` | `empty` | Any javascript function |
| `onClick` | Function that you want to run when clicked on an element | `false` | `function` | `empty` | Any javascript function |

## Lıcence

MIT ©

## Support

[Support me on Patreon](https://www.patreon.com/bedirhankaradogan)
