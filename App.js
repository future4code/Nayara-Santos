import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/id/1/200/300'}
          fotoPost={'https://picsum.photos/200/150'}
        />

        <Post
        nomeUsuario={'João'}
        fotoUsuario={'https://picsum.photos/200'}
        fotoPost={'https://picsum.photos/200/300'}
        />

        <Post
        nomeUsuario={'Julia'}
        fotoUsuario={'https://picsum.photos/200/300'}
        fotoPost={'https://picsum.photos/200'}
        />
      </MainContainer>
    );
  }
}

export default App;