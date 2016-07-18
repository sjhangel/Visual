require.config({
    paths: {
        'geoJson': 'echarts/geoData/geoJson',
        'theme': 'echarts/theme',
        'data': 'echarts/data',
        'map': 'echarts/map',
        'extension': 'echarts/extension'
    },
    packages: [
        {
            main: 'echarts',
            location: 'echarts/',
            name: 'echarts'
        },
        {
            main: 'zrender',
            location: './zrender/src',
            name: 'zrender'
        }
    ]
    // urlArgs: '_v_=' + +new Date()
});