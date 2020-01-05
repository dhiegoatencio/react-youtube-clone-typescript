import { Paper, TextField } from "@material-ui/core";

import React from 'react';
import { jsx } from '@emotion/core'; /** @jsx jsx */

interface Props {
  onFormSubmit?(event: string): void,
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
      <Paper elevation={6} css={{ padding: '25px' }}>
        <form onSubmit={this.handleSubmit}>
          <TextField fullWidth
            autoFocus
            label="Search..."
            onChange={this.handleChange}
          />
        </form>
      </Paper>
    )
  }
}

export default SearchBar;