import React, { Component } from 'react';
import { PhotoService } from '../../service/PhotoService';
import { Galleria } from '../../components/lib/galleria/Galleria';
import { TabView, TabPanel } from '../../components/lib/tabview/TabView';
import { CodeHighlight } from '../../components/doc/common/codehighlight';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';
import getConfig from 'next/config';

export default class GalleriaCaptionDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            images: null
        };

        this.galleriaService = new PhotoService();
        this.itemTemplate = this.itemTemplate.bind(this);
        this.thumbnailTemplate = this.thumbnailTemplate.bind(this);
        this.caption = this.caption.bind(this);
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

    itemTemplate(item) {
        return <img src={`${this.contextPath}/${item.itemImageSrc}`} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    }

    thumbnailTemplate(item) {
        return <img src={`${this.contextPath}/${item.thumbnailImageSrc}`} alt={item.alt} style={{ display: 'block' }} />;
    }

    caption(item) {
        return (
            <React.Fragment>
                <h4 className="p-mb-2">{item.title}</h4>
                <p>{item.alt}</p>
            </React.Fragment>
        );
    }

    render() {
        return (
            <div>
                <Head>
                    <title>React Gallery Component - Caption</title>
                    <meta name="description" content="Caption displays a description for an item." />
                </Head>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Galleria <span>Caption</span></h1>
                        <p>Caption displays a description for an item.</p>
                    </div>

                    <DocActions github="galleria/caption.js" />
                </div>

                <div className="content-section implementation">
                    <div className="card">
                        <Galleria value={this.state.images} responsiveOptions={this.responsiveOptions} numVisible={5}
                            item={this.itemTemplate} thumbnail={this.thumbnailTemplate}
                            caption={this.caption} style={{ maxWidth: '640px' }} />
                    </div>
                </div>

                <GalleriaCaptionDemoDoc></GalleriaCaptionDemoDoc>
            </div>
        );
    }
}

export class GalleriaCaptionDemoDoc extends Component {

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

export class GalleriaCaptionDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            images: null
        };

        this.galleriaService = new PhotoService();
        this.itemTemplate = this.itemTemplate.bind(this);
        this.thumbnailTemplate = this.thumbnailTemplate.bind(this);
        this.caption = this.caption.bind(this);

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

    itemTemplate(item) {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    }

    thumbnailTemplate(item) {
        return <img src={item.thumbnailImageSrc} alt={item.alt} style={{ display: 'block' }} />;
    }

    caption(item) {
        return (
            <React.Fragment>
                <h4 className="p-mb-2">{item.title}</h4>
                <p>{item.alt}</p>
            </React.Fragment>
        );
    }

    render() {
        return (
            <div>
                <div className="card">
                    <Galleria value={this.state.images} responsiveOptions={this.responsiveOptions} numVisible={5}
                        item={this.itemTemplate} thumbnail={this.thumbnailTemplate}
                        caption={this.caption} style={{ maxWidth: '640px' }} />
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
