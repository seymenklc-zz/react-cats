import React from 'react';

import { Grid, Card, CardActionArea, CardMedia, CircularProgress, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    media: {
        height: 300,
    },
    content: {
        paddingTop: '20px',
        overflowY: 'auto',
        height: '100vh',
        marginBottom: '50px',
    }
}));

const SingleCat = ({ image, loading, setPageNumber, error }) => {
    const classes = useStyles();

    const handleScroll = (e) => {
        const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;

        if (scrollHeight - scrollTop === clientHeight) setPageNumber(prev => prev + 1);
    };

    return (
        <Container>
            <Container maxWidth='lg' onScroll={handleScroll} className={classes.content}>
                <Grid container spacing={3}>
                    {loading || error ? <CircularProgress style={{ marginLeft: '50%' }} thickness={4} color='secondary' />
                        :
                        image.map((images) => (
                            <Grid key={images.id} item xs={12} sm={6} md={4}>
                                <a href={images.url}>
                                    <Card elevation={6}>
                                        <CardActionArea>
                                            <CardMedia className={classes.media} image={images.url} />
                                        </CardActionArea>
                                    </Card>
                                </a>
                            </Grid>
                        ))}
                </Grid>
            </Container >
        </Container>
    );
};

export default SingleCat;
