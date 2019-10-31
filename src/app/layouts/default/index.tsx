import React from 'react';

import { Container, Grid, Header, List, Segment } from 'semantic-ui-react';

import ResponsiveContainer from './responsiveContainer';

import layoutStyles from './assets/styles.less';

function Layout(props) {
    return (
        <ResponsiveContainer>
            {props.children}
        </ResponsiveContainer>
    );
}

export {
    Layout as default,
};
