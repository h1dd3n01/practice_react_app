import React, {Fragment} from 'react';
import Exercises from './Components/exercises/'
import Header from "./Components/layouts/Header";
import Footer from "./Components/layouts/Footer";
import {muscles, exercises} from "./store";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            exerciseList: exercises,
            category: ''
        }
    }

    handleTabs = category => {
      this.setState({
          category
      })
    };

    getExercisesByMuscles() {
        return Object.entries(this.state.exerciseList.reduce((exercises, exercise) => {
            const {muscle} = exercise;
            exercises[muscle] = exercises[muscle] ?
                [...exercises[muscle], exercise] : [exercise];
            return exercises
        }, {}))
    }

    render() {
        const exercises = this.getExercisesByMuscles(),
            { category } = this.state;
        return (
            <Fragment>
                <Header/>
                <Exercises exercises={exercises}/>
                <Footer
                    category={category}
                    muscles={muscles}
                    onChange={this.handleTabs}
                />

            </Fragment>


        );
    }
}

export default App