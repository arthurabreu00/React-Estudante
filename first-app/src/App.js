import React from 'react';
import { 
  Card, 
  Name, 
  Price, 
  Description, 
  Button 
} from './Style';

// JSX
const App = ()=> {
  return(
    <Card>
      <Name> Curso de React </Name>
      <Price>$25</Price>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor, tellus eget ultrices porta, ligula metus molestie mi, sed lobortis est tellus ac arcu.
      </Description>
      <Button primary={true}>Buy</Button>
    </Card>
  );
}

export default App;