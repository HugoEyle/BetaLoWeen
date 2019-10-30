import React, { Component } from 'react'
import { Layout, Header, Navigation, Drawer, Content, Textfield } from 'react-mdl';
import BackGroundHome from './BackGroundHome';

export default class NavHeader extends Component {
    render() {
        return (
                //<div style={{height: '300px', position: 'relative'}}>
                <div>
                    {/* <Layout style={{background: 'url(https://cdn.pixabay.com/photo/2017/10/13/14/15/fantasy-2847724__340.jpg) center / cover'}}> */}
                    <Layout>
                        <Header transparent title="BetaLoWeen" style={{color: 'red', backgroundColor: 'black', fontWeight: 'bold'}}>
                            <Navigation>
                                <a href="#">Home</a>
                                <a href="#">Movies</a>
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
