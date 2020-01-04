import { Paper, TextField } from "@material-ui/core";

import React from 'react';

interface Props {
  onFormSubmit?: (event: string) => {},
}

interface State {
  searchTerm: string
}

class SearchBar extends React.Component<Props, State> {

  handleSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    const { searchTerm } = this.state;
    const { onFormSubmit } = this.props;

    onFormSubmit && onFormSubmit(searchTerm);
    event.preventDefault();
  }

  handleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  render() {
    return(
      <Paper elevation={6} style={{ padding: '25px' }}>
        <form onSubmit={this.handleSubmit}>
          <TextField fullWidth
            label="Search..."
            onChange={this.handleChange}
          />
        </form>
      </Paper>
    )
  }
}

export default SearchBar;