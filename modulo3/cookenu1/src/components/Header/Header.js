import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import {StyledToolbar} from './styled';
import Button from '@material-ui/core/Button';

const Header = () => {
    return (
      <AppBar position="static">
        <StyledToolbar>
          <Button color="inherit">Cookenu</Button>
          <Button color="inherit">Login</Button>
        </StyledToolbar>
      </AppBar>
  );
}

export default Header