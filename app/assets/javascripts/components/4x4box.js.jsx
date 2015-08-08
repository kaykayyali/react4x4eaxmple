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
    return (
      <div className="rssBox container-fluid">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6">
            Content
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6">
            Content
          </div>
        </div>
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6">
            Content
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6">
            Content
          </div>
        </div>
      </div>
    );
  }
});
