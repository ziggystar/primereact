import React, { Component } from 'react';
import { Splitter, SplitterPanel } from '../../components/lib/splitter/Splitter';
import { SplitterDoc } from '../../components/doc/splitter';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';

export default class SplitterDemo extends Component {

    render() {
        return (
            <div>
                <Head>
                    <title>React Splitter Component</title>
                    <meta name="description" content="Splitter is utilized to separate and resize panels." />
                </Head>
                <div className="content-section introduction">
                    <div>
                        <h1>Splitter</h1>
                        <p>Splitter is utilized to separate and resize panels.</p>
                    </div>
                    <DocActions github="splitter/index.js" />
                </div>

                <div className="content-section implementation">
                    <div className="card">
                        <h5>Horizontal</h5>
                        <Splitter style={{height: '300px'}} className="p-mb-5">
                            <SplitterPanel className="p-d-flex p-ai-center p-jc-center">
                                Panel 1
                            </SplitterPanel>
                            <SplitterPanel className="p-d-flex p-ai-center p-jc-center">
                                Panel 2
                            </SplitterPanel>
                        </Splitter>
                    </div>

                    <div className="card">
                        <h5>Vertical</h5>
                        <Splitter style={{height: '300px'}} layout="vertical">
                            <SplitterPanel className="p-d-flex p-ai-center p-jc-center">
                                Panel 1
                            </SplitterPanel>
                            <SplitterPanel className="p-d-flex p-ai-center p-jc-center">
                                Panel 2
                            </SplitterPanel>
                        </Splitter>
                    </div>

                    <div className="card">
                        <h5>Nested</h5>
                        <Splitter style={{height: '300px'}}>
                            <SplitterPanel className="p-d-flex p-ai-center p-jc-center" size={20} minSize={10}>
                                Panel 1
                            </SplitterPanel>
                            <SplitterPanel size={80}>
                                <Splitter layout="vertical">
                                    <SplitterPanel className="p-d-flex p-ai-center p-jc-center" size={15}>
                                        Panel 2
                                    </SplitterPanel>
                                    <SplitterPanel size={85}>
                                        <Splitter>
                                            <SplitterPanel className="p-d-flex p-ai-center p-jc-center" size={20}>
                                                Panel 3
                                            </SplitterPanel>
                                            <SplitterPanel className="p-d-flex p-ai-center p-jc-center" size={80}>
                                                Panel 4
                                            </SplitterPanel>
                                        </Splitter>
                                    </SplitterPanel>
                                </Splitter>
                            </SplitterPanel>
                        </Splitter>
                    </div>
                </div>

                <SplitterDoc />
            </div>
        )
    }
}
