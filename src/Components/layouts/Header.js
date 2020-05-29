import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CreateDialog from '../exercises/dialogs/Create'

export default function Header({muscles, onExerciseCreate}) {
    return (
        <div>
            <AppBar position='static'>
                <Toolbar>
                    <Typography variant='headline' color='inherit' style={{flex:1}}>
                        Exercise Database
                    </Typography>
                    <CreateDialog
                        onCreate={onExerciseCreate}
                        muscles={muscles}/>
                </Toolbar>
            </AppBar>
        </div>
    )
}





























