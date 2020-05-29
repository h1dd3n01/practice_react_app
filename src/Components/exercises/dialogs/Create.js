import React, {Fragment} from 'react'
import Dialog from "@material-ui/core/Dialog/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText/DialogContentText";
import TextField from "@material-ui/core/TextField/TextField";
import DialogActions from "@material-ui/core/DialogActions/DialogActions";
import Button from "@material-ui/core/Button/Button";
import AddIcon from '@material-ui/icons/Add';
import MenuItem from "@material-ui/core/es/MenuItem/MenuItem";
import FormControl from "@material-ui/core/es/FormControl/FormControl";
import InputLabel from "@material-ui/core/es/InputLabel/InputLabel";
import Select from "@material-ui/core/es/Select/Select";

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            exercise: {
                title: '',
                description: '',
                muscles: ''
            }
        }
    }

    openDialog = () => {
        this.setState({
            open: !this.state.open
        })
    };


    handleChange = name => ({target: {value}}) => {
        this.setState({
            exercise: {
                ...this.state.exercise,
                [name]: value
            }
        })
    };

    onCreateSelect = () => {
        const { exercise } = this.state;

        this.props.onCreate(exercise)
    };


    render() {

        const {open, exercise: {title, description, muscles}} = this.state,
            // Complains about recurison error
            {muscles : categories} = this.props;
        // alert(categories);
        return (

            <Fragment>

                <Button variant='fab' size='mini' onClick={this.openDialog}>
                    <AddIcon/>
                </Button>
                <Dialog open={open}
                        onClose={this.openDialog}>
                    <DialogTitle id="form-dialog-title">Create new exercise</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Please fill out form below
                        </DialogContentText>
                        <form>
                            <TextField
                                autoFocus
                                margin="dense"
                                label="Enter title"
                                value={title}
                                fullWidth
                                onChange={this.handleChange('title')}
                            />
                            {/*<form>*/}
                                <FormControl>
                                    {/*<InputLabel htmlFor="muscles">*/}
                                        {/*muscles*/}
                                    {/*</InputLabel>*/}
                                <Select
                                    value={muscles}
                                    onChange={this.handleChange('muscles')}
                                >

                                    {categories.map(category =>
                                        <MenuItem value={category}>{category}</MenuItem>
                                    )}
                                </Select>
                                </FormControl>
                            {/*</form>*/}
                            <TextField
                                multiline
                                rows="4"
                                margin="dense"
                                label="Description"
                                value={description}
                                onChange={this.handleChange('description')}
                                fullWidth
                            />
                        </form>
                    </DialogContent>
                    <DialogActions>
                        {/*<Button/>*/}
                        <Button
                            onClick={this.onCreateSelect}
                            color="primary">
                            Create
                        </Button>
                    </DialogActions>
                </Dialog>
            </Fragment>
    )
    }
    }

