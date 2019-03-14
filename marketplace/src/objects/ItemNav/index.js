import React from 'react';

import { Item } from './style';

import { FlexEnd } from '../../utils/Flex'
import IconStore from '../IconsStore'

const ItemNav = ()=>
    
        <FlexEnd>
            <div>
                <Item href="#">
                    HOME
                </Item>

                <Item href="#">
                    ABOUT
                </Item>

                <Item href="#">
                    CONTACT
                </Item>

            </div>

                <IconStore />

        </FlexEnd>
    
export default ItemNav;