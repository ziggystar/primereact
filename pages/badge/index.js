import React, { Component } from 'react';
import { Button } from '../../components/lib/button/Button';
import { Badge } from '../../components/lib/badge/Badge';
import { BadgeDoc } from '../../components/doc/badge';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';

export default class BadgeDemo extends Component {
    render() {
        return (
            <div>
                <Head>
                    <title>React Badge Component</title>
                    <meta name="description" content="Badge is a small status indicator for another element." />
                </Head>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Badge</h1>
                        <p>Badge is a small status indicator for another element.</p>
                    </div>
                    <DocActions github="badge/index.js" />
                </div>

                <div className="content-section implementation">
                    <div className="card">
                        <h5>Numbers</h5>
                        <Badge value="2" className="p-mr-2"></Badge>
                        <Badge value="8" severity="success" className="p-mr-2"></Badge>
                        <Badge value="4" severity="info" className="p-mr-2"></Badge >
                        <Badge value="12" severity="warning" className="p-mr-2"></Badge>
                        <Badge value="3" severity="danger"></Badge>

                        <h5 className="p-mb-4">Positioned Badge</h5>
                        <i className="pi pi-bell p-mr-4 p-text-secondary p-overlay-badge" style={{ fontSize: '2rem' }}><Badge value="2" ></Badge></i>
                        <i className="pi pi-calendar p-mr-4 p-text-secondary p-overlay-badge" style={{ fontSize: '2rem' }}><Badge value="10+" severity="danger" ></Badge></i>
                        <i className="pi pi-envelope p-text-secondary p-overlay-badge" style={{ fontSize: '2rem' }}><Badge severity="danger"></Badge></i>

                        <h5>Button Badge</h5>
                        <Button type="button" label="Emails" className="p-mr-2"><Badge value="8" ></Badge></Button>
                        <Button type="button" label="Messages" icon="pi pi-users" className="p-button-warning"><Badge value="8" severity="danger" ></Badge></Button>

                        <h5>Sizes</h5>
                        <Badge value="2" className="p-mr-2"></Badge>
                        <Badge value="4" className="p-mr-2" size="large" severity="warning"></Badge>
                        <Badge value="6" size="xlarge" severity="success"></Badge>
                    </div>
                </div >

                <BadgeDoc />
            </div >
        );
    }
}
