'use strict';

const e = React.createElement;

class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      result: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
      result: this.handleInput(event.target.value)
    });
  }

  handleInput(inputStr) {
    if (inputStr.length < 3) {
      return inputStr;
    }
    else {
      return `${inputStr.charAt(0)}${inputStr.length-2}${inputStr.charAt(inputStr.length-1)}`;
    }
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Input:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <p>{this.state.result}</p>
      </form>
    );
  }
}

const domContainer = document.getElementById('input-box');
const root = ReactDOM.createRoot(domContainer);
root.render(<InputForm />);