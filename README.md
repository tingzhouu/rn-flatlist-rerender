# RN-FlatListReRender

This is to document a simple but costly mistake I experienced when using [FlatList](https://facebook.github.io/react-native/docs/flatlist). In this example, we have a FlatList of 4 items. Suppose we want to change the colour of the currently selected item, and the ID of the currently selected item will be stored in the component's state. In that case, we can use `setState` to change the the currently selected item when the item is pressed.

However, it is commonly forgotten that `FlatList` is a `PureComponent`, as highlighted [here](https://stackoverflow.com/questions/43397803/how-to-re-render-flatlist).

To fix this, all we need to do is pass in the `extraData` to let `FlatList` know that it needs to re-render when that prop changes.

```
<FlatList
  data={data}
  renderItem={this.renderItem}
  extraData={this.state.selectedItemId}
/>
```

### Demo
1. Demonstration without `extraData`
<a href="https://drive.google.com/open?id=1Vw36U8_Mw7QwOPpfEtnjMKqfArQd014x">
  <img src="https://drive.google.com/uc?export=view&id=1BUjGDqSF2LDHSgmKSfiTfgHZPV6BQ3Co">
</a>


2. Demonstration with `extraData`
<a href="https://drive.google.com/open?id=1jsJjfPt95bqGxiBcYGrPkC1NokU2PN4X">
  <img src="https://drive.google.com/uc?export=view&id=19fEMbim8Bul7j8weZQq6yymMs8Eh6Lnt">
</a>