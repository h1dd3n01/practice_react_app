import React, {Fragment} from 'react';
import Exercises from './Components/exercises/'
import Header from "./Components/layouts/Header";
import Footer from "./Components/layouts/Footer";
import {muscles, exercises} from "./store";

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            exerciseList: exercises,
            exercise: {},
        };
    }

    onSelect = category => {
      this.setState({
          // console.log(category);
          category
      })
    };

    handleExerciseSelected = id => {
        // Async setState
        this.setState(({exerciseList}) => ({
            exercise : exerciseList.find(ex => ex.id === id)
        }))
    };

    handleExerciseCreate = exercise => {
        this.setState(({ exercise }) => ({
            exerciseList: [
                ...exercises,
                exercise
            ]
        }))
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
            { category, exercise } = this.state;
        return (
            <Fragment>
                <Header
                    onExerciseCreate={this.handleExerciseCreate}
                    muscles={muscles}/>
                <Exercises
                    exercise={exercise}
                    exercises={exercises}
                    category={category}
                    onSelect={this.handleExerciseSelected}
                />
                <Footer
                    category={category}
                    muscles={muscles}
                    onSelect={this.onSelect}
                />

            </Fragment>


        );
    }
}

// export default App