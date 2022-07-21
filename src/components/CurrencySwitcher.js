import React from "react";

class CurrencySwitcher extends React.Component {
    state = {value: "JPY"}

    handleChange = (event) => {
        this.setState({value: event.target.value})
    }
  render() {
    return (
      <form >
        <label>
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="JPY">JPY</option>
          </select>
        </label>
        <input type="submit" value="Change currency" />
      </form>
    );
  }
}

export default CurrencySwitcher;