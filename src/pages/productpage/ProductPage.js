import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Box, Button } from '@material-ui/core'
import ProductImage from './ProductImage';
import AboutProduct from './AboutProduct';
import ForTab from './ForTab';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Api from '../../serializer/api';
import CircularProgress from '@material-ui/core/CircularProgress';
import SimpleTabs from './SimpleTabs';
import Loader from '../../components/Loader';

const useStyles = makeStyles((theme) => ({
    main: {
        justifyContent: "center",
        zIndex: "1",
        marginTop: "60px",
        minHeight: "80vh",
    },
    outTitle: {
        backgroundColor: "#fbfbfb",
        color: "#4f4f4f",
        marginBottom: "30px",
        display: "flex",
    },
    title: {
        fontSize: "30px",
        fontWeight: "500",
        margin: '0 auto',
        padding: "48px 15px",
    },
    container: {
        margin: '0 auto',
    },
    inCont: {
        marginBottom: "70px",
    },
}))

const ProductPage = () => {

    const classes = useStyles()
    const [data, setData] = useState('')
    const [loading, setIsLoading] = useState(false)
    const {id} = useParams()
    
    useEffect(() => {
        setIsLoading(true)
        Api.getProductItem(id)
            .then(res => setData(res))
            .catch(err => {console.log(err)})
            .finally(() => {
                setIsLoading(false)
            })
    }, []);

    return (
        <Box component="main" className={classes.main}>
            <Box className={classes.outTitle}>
                <Box className={classes.title}>Product page</Box>
            </Box>
            <Loader loading={loading}>
                <Box >
                    <Grid sm={9} xs={9} className={classes.container}>
                        <Box className={classes.inCont} component="section">
                            <Grid container spacing={5}>
                                <ProductImage data={data} />
                                <AboutProduct data={data} />
                            </Grid>
                        </Box>
                        <ForTab data={data}/>
                    </Grid>
                </Box>
            </Loader>
        </Box>
    );
};

export default ProductPage;