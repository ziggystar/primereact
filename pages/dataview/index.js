import React, { Component } from 'react';
import { DataView, DataViewLayoutOptions } from '../../components/lib/dataview/DataView';
import { Button } from '../../components/lib/button/Button';
import { Dropdown } from '../../components/lib/dropdown/Dropdown';
import { ProductService } from '../../service/ProductService';
import { Rating } from '../../components/lib/rating/Rating';
import { DataViewDoc } from '../../components/doc/dataview';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';
import getConfig from 'next/config';

export default class DataViewDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: null,
            layout: 'grid',
            sortKey: null,
            sortOrder: null,
            sortField: null
        };

        this.sortOptions = [
            {label: 'Price High to Low', value: '!price'},
            {label: 'Price Low to High', value: 'price'},
        ];

        this.productService = new ProductService();
        this.itemTemplate = this.itemTemplate.bind(this);
        this.onSortChange = this.onSortChange.bind(this);
        this.contextPath = getConfig().publicRuntimeConfig.contextPath;
    }

    componentDidMount() {
        this.productService.getProducts().then(data => this.setState({ products: data }));
    }

    onSortChange(event) {
        const value = event.value;

        if (value.indexOf('!') === 0) {
            this.setState({
                sortOrder: -1,
                sortField: value.substring(1, value.length),
                sortKey: value
            });
        }
        else {
            this.setState({
                sortOrder: 1,
                sortField: value,
                sortKey: value
            });
        }
    }

    renderListItem(data) {
        return (
            <div className="p-col-12">
                <div className="product-list-item">
                    <img src={`${this.contextPath}/images/product/${data.image}`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={data.name} />
                    <div className="product-list-detail">
                        <div className="product-name">{data.name}</div>
                        <div className="product-description">{data.description}</div>
                        <Rating value={data.rating} readOnly cancel={false}></Rating>
                        <i className="pi pi-tag product-category-icon"></i><span className="product-category">{data.category}</span>
                    </div>
                    <div className="product-list-action">
                        <span className="product-price">${data.price}</span>
                        <Button icon="pi pi-shopping-cart" label="Add to Cart" disabled={data.inventoryStatus === 'OUTOFSTOCK'}></Button>
                        <span className={`product-badge status-${data.inventoryStatus.toLowerCase()}`}>{data.inventoryStatus}</span>
                    </div>
                </div>
            </div>
        );
    }

    renderGridItem(data) {
        return (
            <div className="p-col-12 p-md-4">
                <div className="product-grid-item card">
                    <div className="product-grid-item-top">
                        <div>
                            <i className="pi pi-tag product-category-icon"></i>
                            <span className="product-category">{data.category}</span>
                        </div>
                        <span className={`product-badge status-${data.inventoryStatus.toLowerCase()}`}>{data.inventoryStatus}</span>
                    </div>
                    <div className="product-grid-item-content">
                    <img src={`${this.contextPath}/images/product/${data.image}`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={data.name} />
                        <div className="product-name">{data.name}</div>
                        <div className="product-description">{data.description}</div>
                        <Rating value={data.rating} readOnly cancel={false}></Rating>
                    </div>
                    <div className="product-grid-item-bottom">
                        <span className="product-price">${data.price}</span>
                        <Button icon="pi pi-shopping-cart" label="Add to Cart" disabled={data.inventoryStatus === 'OUTOFSTOCK'}></Button>
                    </div>
                </div>
            </div>
        );
    }

    itemTemplate(product, layout) {
        if (!product) {
            return;
        }

        if (layout === 'list')
            return this.renderListItem(product);
        else if (layout === 'grid')
            return this.renderGridItem(product);
    }

    renderHeader() {
        return (
            <div className="p-grid p-nogutter">
                <div className="p-col-6" style={{textAlign: 'left'}}>
                    <Dropdown options={this.sortOptions} value={this.state.sortKey} optionLabel="label" placeholder="Sort By Price" onChange={this.onSortChange}/>
                </div>
                <div className="p-col-6" style={{textAlign: 'right'}}>
                    <DataViewLayoutOptions layout={this.state.layout} onChange={(e) => this.setState({ layout: e.value })} />
                </div>
            </div>
        );
    }

    render() {
        const header = this.renderHeader();

        return (
            <div>
                <Head>
                    <title>React DataView Component</title>
                    <meta name="description" content="DataView displays data in grid or list layout with pagination and sorting features." />
                </Head>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>DataView</h1>
                        <p>DataView displays data in grid or list layout with pagination and sorting features.</p>
                    </div>

                    <DocActions github="dataview/index.js" />
                </div>

                <div className="content-section implementation dataview-demo">
                    <div className="card">
                        <DataView value={this.state.products} layout={this.state.layout} header={header}
                                itemTemplate={this.itemTemplate} paginator rows={9}
                                sortOrder={this.state.sortOrder} sortField={this.state.sortField} />
                    </div>
                </div>

                <DataViewDoc />
            </div>
        );
    }
}
