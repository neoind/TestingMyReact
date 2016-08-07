
 // var ExampleApplication = require('MyComp.jsx');
 // import ExampleApplication from 'MyComp.jsx';

var start = new Date().getTime();
      setInterval(function() {
        ReactDOM.render(
          <ExampleApplication elapsed={new Date().getTime() - start} />,
          document.getElementById('container')
        );
      }, 50);