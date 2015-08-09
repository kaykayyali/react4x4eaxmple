var RSSBox = React.createClass({

  loadEntries: function() {

    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
      console.log(data)
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    this.loadEntries();
    pollInterval = setInterval(this.loadEntries, this.props.pollInterval);
  },
  componentWillUnmount: function() {
    window.clearInterval(pollInterval);
  },
  render: function() {
    boxesArray = []
    this.state.data.forEach(function(object){
      newBox = {
        title: object.title,
        imageurl: object.image,
        url: object.url
      }
      boxesArray.push(newBox)
    })
    return (
      <div className="rssBox center-block">
        <div className="container-fluid">
          <div className="row">
              {boxesArray.map(function(box, i){
                  return <ViewBox image={box.imageurl} title={box.title} url={box.url} key={i}/>;
                })}
          </div>
        </div>
      </div>
    );
  }
});
