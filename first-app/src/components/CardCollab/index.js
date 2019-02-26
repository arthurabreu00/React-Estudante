import React from 'react';

import Name from '../../objects/Name';
import Price from '../../objects/Price';
import Description from '../../objects/Description';


import Button from '../Button'

import Card from './styles'

const CardCollab = ()=>{
    return(
        <Card>
        <Name> Curso de React </Name>
        <Price>$25</Price>
        <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor, tellus eget ultrices porta, ligula metus molestie mi, sed lobortis est tellus ac arcu.
        </Description>
        <Button primary>Buy</Button>
    </Card>
    );

}

export default CardCollab;

