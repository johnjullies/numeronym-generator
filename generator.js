'use strict';

const e = React.createElement;

class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <form>
        <label>
          Input:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <p>{this.state.value}</p>
      </form>
    );
  }
}

const domContainer = document.querySelector('#input-box');
const root = ReactDOM.createRoot(domContainer);
root.render(e(InputForm));