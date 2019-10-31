import React, { useState } from 'react';
import { Grid, GridColumn } from 'semantic-ui-react';

import NewsList from '../../components/NewsList';
import CategoryMenu from '../../components/CategoryMenu';

function Home() {
    const [category, setCategory] = useState();

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
                    <GridColumn width={3}>
                        <p>Popüler Haberler</p>
                        <ul>
                            <li>Şahika Ercümen dünya rekoru kırdı asker selamını çaktı - Internet Haber</li>
                            <li>Böylesini evinize sakın sokmayın! Balıkta inanılmaz hile... - Hürriyet</li>
                            <li>Ekonomik krizdeki Arjantin'de sandıktan sol çıktı - Gazete Duvar</li>
                        </ul>
                    </GridColumn>
                </Grid.Row>
            </Grid>
        </div >
    );
}

export {
    Home as default,
};
