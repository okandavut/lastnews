import React, { useState } from 'react';
import { Grid, GridColumn } from 'semantic-ui-react';

import NewsList from '../../components/NewsList';
import CategoryMenu from '../../components/CategoryMenu';

function Home() {
    const [category, setCategory] = useState();
    const [country, setCountry] = useState("");

    return (
        <div style={{ padding: "3%" }}>
            <Grid columns={3} divided>
                <Grid.Row>
                    <GridColumn width={2}>
                        <CategoryMenu setCategory={setCategory} />
                    </GridColumn>
                    <GridColumn width={11}>
                        <NewsList category={category} />
                    </GridColumn>
                    {/* TODO- NEWS BY COUNTRY */}
                    <GridColumn width={3}>
                        <p>Ülkeler</p>
                        <ul>
                            <li onClick={() => { setCountry("tr") }}>Türkiye</li>
                            <li onClick={() => { setCountry("abd") }}>Amerika</li>
                            <li onClick={() => { setCountry("uk") }}>İngiltere</li>
                            <li onClick={() => { setCountry("de") }}>Almanya</li>
                        </ul>
                    </GridColumn>
                </Grid.Row>
                <GridRow>
                    <GridColumn width={3}>
                         <a href="https://newsapi.org/" target="_blank">Api from newsapi.org</a>
                    </GridColumn>
                </GridRow>
            </Grid>
        </div >
    );
}

export {
    Home as default,
};
