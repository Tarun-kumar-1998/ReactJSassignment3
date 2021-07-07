function Button(props) {
  const { text, color } = props;
  return (
    <button style=`background-color:${color};` class="btn">{text}</button>
  );
}

const element = (
    <div class="bg">
        <h1 class="hd">Social Buttons</h1>
        <div class="bg2">
    <Button text="Like" color="yellow" />
    <Button text="Comment" color="white" />
    <Button text="Share" color="blue" />
  </div>
    </div>
)

ReactDOM.render(element, document.getElementById('root'))
