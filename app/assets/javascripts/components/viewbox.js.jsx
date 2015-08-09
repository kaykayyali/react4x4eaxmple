var ViewBox = React.createClass({
  getInitialState: function() {
   return {liked: false};
 },
  handleClick: function(event) {
   console.log("Clicked")
 },
  render: function() {
    var styles = {
      backgroundImage: 'url(' + this.props.image + ')',
      backgroundSize: "cover",
      position: "relative"
    }
    var style_panel = {
      position: "absolute",
      bottom: "0",
      left: "0%",
      backgroundColor: "rgba(0,0,0,.3)",
      border: "none"
    }
    return (
    <a href={this.props.url}>
      <div onClick={this.handleClick} className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6 viewBox" style={styles}>
        <div className="overlay"/>
          <div className="panel panel-default" style={style_panel}>
            <div className='panel-body' style={{backgroundColor: "rgba(0,0,0,.3)", border: "none"}}>
              <h4>{this.props.title}</h4>
            </div>
          </div>
      </div>
    </a>
    );
  }
});
