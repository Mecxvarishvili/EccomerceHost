import React, { useState } from 'react';
import { Box, Button, Grid } from '@material-ui/core';
import Customizer from './Customizer';
import Cards from './Cards';

const RightResult = () => {
    return (
        <Grid xs={12} sm={8} item >
            <Customizer/>
            <Cards/>
            <Customizer />
        </Grid>
    );
};

export default RightResult;