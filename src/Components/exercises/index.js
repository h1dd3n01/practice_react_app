import React, {Fragment} from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const styles = {
    paper: {
        padding: 20,
        marginTop: 10,
        marginBottom: 10,
        height: 500,
        overflowY: 'auto'
    }
};

export default ({
                    exercises,
                    category,
                    onSelect,
                    exercise: {
                        id,
                        title = 'Welcome!',
                        description = 'Please select an exercise from the list on left.'
                    }
                }) => {
    return (
        <Grid container>
            <Grid item xs>
                <Paper style={styles.paper}>
                    {exercises.map(([group, exercises]) =>
                        !category || category === group ?
                            <Fragment>
                                <Typography
                                    key={group}
                                    variant='headline'
                                    style={{textTransform: 'capitalize'}}
                                >
                                    {group}<br/>
                                </Typography>
                                <List component="ul">
                                    {exercises.map(({id, title}) =>
                                        <ListItem
                                            key={id}
                                            onClick={() => onSelect(id)}
                                            button>
                                            <ListItemText primary={title}/>
                                        </ListItem>
                                    )}
                                </List>
                            </Fragment> : null
                    )}
                </Paper>
            </Grid>
            <Grid item xs>
                <Paper style={styles.paper}>
                    <Typography
                        variant='h3'
                    >
                        {title}
                    </Typography>
                    <Typography
                        variant='subtitle1'
                        style={{marginTop: 30}}
                    >
                        {description}
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    )
}