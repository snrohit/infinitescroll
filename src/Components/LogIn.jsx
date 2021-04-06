import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import { TextField } from '@material-ui/core/';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { logIn } from '../Action/index';
const useStyles = makeStyles((theme) => ({
    root: {
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {

            borderColor: "black"
        },
        "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "purple"
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "purple"
        }
    },
    input: {
        color: '#49274a'
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
        color: "#49274a",
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function LogIn() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const history = useHistory();


    function handleLogIn() {
        if (userName === 'foo' && password === 'bar') {
            localStorage.setItem('user',userName);
            localStorage.setItem('password',password);
            dispatch(logIn(userName));
            history.push('/Home');
        }
        else {
            setError('Username or password incorrect');
        }
    }


    return (
        <div className='Login'>
            <Container component="main" maxWidth="xs" className='border'>
                <CssBaseline />
                <div className={classes.paper}>
                    <Typography component="h1" variant="h5" style={{ fontWeight: 'bold' }}>
                        Log In
                </Typography>
                    <form className={classes.form} noValidate >
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    type='text'
                                    label="User Name"
                                    onChange={(e) => setUserName(e.target.value)}
                                    InputLabelProps={{
                                        style: { color: '#49274a' },
                                    }}
                                    inputProps={{
                                        style: { color: '#49274a' }
                                    }}
                                    className={classes.root}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    label="Password"
                                    type="password"
                                    className={classes.root}
                                    InputLabelProps={{
                                        className: classes.input
                                    }}
                                    inputProps={{
                                        style: { color: '#49274a' }
                                    }}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </Grid>
                        </Grid>
                    </form>
                    <br />
                    <Button variant="contained" color="primary" onClick={handleLogIn}>
                        Log In
                </Button>
                    <span className='error'>{error}</span>
                </div>
                <br /><br /><br /><br />
            </Container>
        </div>
    )
}