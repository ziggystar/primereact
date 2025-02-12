import React, { Component } from 'react';
import { PhotoService } from '../../service/PhotoService';
import { Galleria } from '../../components/lib/galleria/Galleria';
import { TabView, TabPanel } from '../../components/lib/tabview/TabView';
import { CodeHighlight } from '../../components/doc/common/codehighlight';
import { Button } from '../../components/lib/button/Button';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';
import getConfig from 'next/config';

export default class GalleriaProgrammaticDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            images: null,
            activeIndex: 2
        };

        this.galleriaService = new PhotoService();
        this.itemTemplate = this.itemTemplate.bind(this);
        this.thumbnailTemplate = this.thumbnailTemplate.bind(this);
        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
        this.contextPath = getConfig().publicRuntimeConfig.contextPath;

        this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 5
            },
            {
                breakpoint: '768px',
                numVisible: 3
            },
            {
                breakpoint: '560px',
                numVisible: 1
            }
        ];
    }

    componentDidMount() {
        this.galleriaService.getImages().then(data => this.setState({ images: data }));
    }

    next() {
        this.setState((prevState) => ({
            activeIndex: (prevState.activeIndex === this.state.images.length - 1) ? 0 : prevState.activeIndex + 1
        }));
    }

    prev() {
        this.setState((prevState) => ({
            activeIndex: (prevState.activeIndex === 0) ? this.state.images.length - 1 : prevState.activeIndex - 1
        }));
    }

    itemTemplate(item) {
        return <img src={`${this.contextPath}/${item.itemImageSrc}`} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    }

    thumbnailTemplate(item) {
        return <img src={`${this.contextPath}/${item.thumbnailImageSrc}`} alt={item.alt} style={{ display: 'block' }} />;
    }

    render() {
        return (
            <div>
                <Head>
                    <title>React Gallery Component - Programmatic</title>
                    <meta name="description" content="Galleria can be controlled programmatically using the activeIndex property." />
                </Head>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Galleria <span>Programmatic</span></h1>
                        <p>Galleria can be controlled programmatically using the <b>activeIndex</b> property.</p>
                    </div>

                    <DocActions github="galleria/programmatic.js" />
                </div>

                <div className="content-section implementation">
                    <div className="card">
                        <div className="p-py-2">
                            <Button icon="pi pi-minus" onClick={this.prev} className="p-button-secondary" />
                            <Button icon="pi pi-plus" onClick={this.next} className="p-button-secondary p-ml-2" />
                        </div>

                        <Galleria value={this.state.images} activeIndex={this.state.activeIndex} onItemChange={(e) => this.setState({ activeIndex: e.index })} responsiveOptions={this.responsiveOptions} numVisible={5}
                            item={this.itemTemplate} thumbnail={this.thumbnailTemplate} style={{ maxWidth: '640px' }} />
                    </div>
                </div>

                <GalleriaProgrammaticDemoDoc />
            </div>
        );
    }
}

export class GalleriaProgrammaticDemoDoc extends Component {

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div className="content-section documentation" id="app-doc">
                <TabView>
                    <TabPanel header="Source">
<CodeHighlight lang="js">
{`
import React, { Component } from 'react';
import { PhotoService } from '../service/PhotoService';
import { Galleria } from 'primereact/galleria';
import { Button } from 'primereact/button';

export class GalleriaProgrammaticDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            images: null,
            activeIndex: 2
        };

        this.galleriaService = new PhotoService();
        this.itemTemplate = this.itemTemplate.bind(this);
        this.thumbnailTemplate = this.thumbnailTemplate.bind(this);
        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);

        this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 5
            },
            {
                breakpoint: '768px',
                numVisible: 3
            },
            {
                breakpoint: '560px',
                numVisible: 1
            }
        ];
    }

    componentDidMount() {
        this.galleriaService.getImages().then(data => this.setState({ images: data }));
    }

    next() {
        this.setState((prevState) => ({
            activeIndex: (prevState.activeIndex === this.state.images.length - 1) ? 0 : prevState.activeIndex + 1
        }));
    }

    prev() {
        this.setState((prevState) => ({
            activeIndex: (prevState.activeIndex === 0) ? this.state.images.length - 1 : prevState.activeIndex - 1
        }));
    }

    itemTemplate(item) {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    }

    thumbnailTemplate(item) {
        return <img src={item.thumbnailImageSrc} alt={item.alt} style={{ display: 'block' }} />;
    }

    render() {
        return (
            <div>
                <div className="card">
                    <div className="p-py-2">
                        <Button icon="pi pi-minus" onClick={this.prev} className="p-button-secondary" />
                        <Button icon="pi pi-plus" onClick={this.next} className="p-button-secondary p-ml-2" />
                    </div>

                    <Galleria value={this.state.images} activeIndex={this.state.activeIndex} onItemChange={(e) => this.setState({ activeIndex: e.index })} responsiveOptions={this.responsiveOptions} numVisible={5}
                        item={this.itemTemplate} thumbnail={this.thumbnailTemplate} style={{ maxWidth: '640px' }} />
                </div>
            </div>
        );
    }
}
`}
</CodeHighlight>
                    </TabPanel>
                </TabView>
            </div>
        )
    }
}
