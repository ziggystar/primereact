const TabViewProps = [
    {
        name: 'id',
        type: 'string',
        default: 'null',
        description: 'Unique identifier of the element.'
    },
    {
        name: 'activeIndex',
        type: 'number',
        default: 'null',
        description: 'Active index of the TabView.'
    },
    {
        name: 'style',
        type: 'object',
        default: 'null',
        description: 'Inline style of the tabview.'
    },
    {
        name: 'className',
        type: 'string',
        default: 'null',
        description: 'Style class of the tabview.'
    },
    {
        name: 'renderActiveOnly',
        type: 'boolean',
        default: 'true',
        description: 'Whether to render the contents of the selected tab or all tabs.'
    }
];

const TabViewEvents = [
    {
        name: 'onTabChange',
        description: 'Callback to invoke when an active tab is changed.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            },
            {
                name: 'event.index',
                type: 'number',
                description: 'Index of the selected tab'
            }
        ]
    }
];

const TabViewStyles = [
    { name: 'p-tabview', description: 'Container element.' },
    { name: 'p-tabview-nav', description: 'Container of headers.' },
    { name: 'p-tabview-selected', description: 'Selected tab header.' },
    { name: 'p-tabview-panels', description: 'Container panels.' },
    { name: 'p-tabview-panel', description: 'Content of a tab.' }
];

module.exports = {
    tabview: {
        name: 'TabView',
        description: 'TODO',
        docUrl: 'https://primefaces.org/primereact/showcase/#/tabview',
        props: TabViewProps,
        events: TabViewEvents,
        styles: TabViewStyles
    }
};