import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material'
import memories from './images/memories.png'
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import useStyles from './styles';

const App = () => {
    const classes = useStyles();
    return (
        <Container maxWidth="lg">
            <AppBar 
                sx={{ 
                    borderRadius: 15,
                    margin: '30px 0',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                }} 
                position="static" color="inherit">
                
                <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
                <img className={classes.image} src={memories} alt="icon" height="60" width="60" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form  />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )

}

export default App;