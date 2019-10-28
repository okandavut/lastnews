import React from 'react';

import { Container, Grid, Header, List, Segment } from 'semantic-ui-react';

import ResponsiveContainer from './responsiveContainer';

import layoutStyles from './assets/styles.less';

function Layout(props) {
    // the JSX syntax is quite intuitive but check out
    // https://facebook.github.io/react/docs/jsx-in-depth.html
    // if you need additional help

    return (
        <ResponsiveContainer>
            {props.children}
        </ResponsiveContainer>
    );
}

export {
    Layout as default,
};
