var React = require('react');
var {Link} = require('react-router');

// var About = React.createClass({
//   render: function () {
//     return (
//       <h3>About Component</h3>
//     );
//   }
// });

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>This is weather application build on React.</p>
      <p>Here are some of tools and libraries I used:</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">ReactJS</a>
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - Provided weather API used in app.
          </li>
        <li>
          <a href="https://foundation.zurb.com">Foundation 6</a> - Provided simple styling (CSS).
          </li>
        </ul>
        <br/>
        <br/>
        <footer>
          <h4>Created by Maksymilian Prylinski</h4>
        </footer>
  </div>
  );
};

module.exports = About;
