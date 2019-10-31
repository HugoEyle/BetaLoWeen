import React, { Component } from 'react'
import { Layout, Header, Navigation, Drawer, Content, Textfield } from 'react-mdl';
import BackGroundHome from './BackGroundHome';

export default class NavHeader extends Component {
    render() {
        return (
                <div>
                    <Layout>
                        <Header transparent title="BetaLoWeen" style={{color: 'red', backgroundColor: 'black', fontWeight: 'bold'}}>
                            <Navigation>
                                <a href="#">Home</a>
                                <a href="#">Movies</a>
                                <a href="https://giphy.com/gifs/black-and-white-killer-jeff-D3FHwEx3Ea3AI/fullscreen">Ma sélec'</a>
                                <Textfield
                                    onChange={() => {}}
                                    label="Expandable Input"
                                    expandable
                                    expandableIcon="search"
                                />
                            </Navigation>
                        </Header>
                        <Drawer title="Title">
                            <Navigation>
                                <a href="#">Home</a>
                                <a href="#">Movies</a>
                                <a href="https://giphy.com/gifs/black-and-white-killer-jeff-D3FHwEx3Ea3AI/fullscreen">Ma sélec'</a>
                                <Textfield
                                    onChange={() => {}}
                                    label="Expandable Input"
                                    expandable
                                    expandableIcon="search"
                                />
                            </Navigation>
                        </Drawer>
                        <Content />
                    </Layout>
                    <BackGroundHome />
                </div>
        )
    }
}
