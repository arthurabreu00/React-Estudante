import React, {Component,Fragment} from 'react';

import CardCollab from './components/CardCollab'

// Transformação para Stateful (Tem um estado).
class App extends Component {

    state = {
        courses: [
            {
                name: 'Curso React',
                price: 180,
                description: "Curso Básico de React utilizando styled-components ao vivo"
            },
            {
                name: 'Curso VueJS',
                price: 340,
                description: "Curso de VueJS o cara que passou o React em estrelas no GitHub"
            }, 
            {
                name: 'Curso Ember',
                price: 280,
                description: "Framework que ninguem conhece mas que o Edu Matos gosta muito e o Linkedin."
            }
        ]
    };

    render(){
        return(
        <Fragment>
            {this.state.courses.map(course=>
                <CardCollab 
                    {...course}
                />
            )}
        </Fragment>
        );
    }
   
   

}
export default App;