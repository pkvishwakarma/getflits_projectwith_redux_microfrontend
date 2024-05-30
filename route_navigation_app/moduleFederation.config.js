const {dependencies}= require('./package.json');

module.exports={
    name:'routenavigationapp',
    filename:'remoteEntry.js',
    exposes:{
        './flitsHomePage':'./src/flitsHomePage.jsx'
    },
    remotes:{
        hostreactapp:'hostreactapp@http://localhost:3000/remoteEntry.js',
        myprofileapp:'myprofileapp@http://localhost:3002/remoteEntry.js',
        deliveryaddressapp:'deliveryaddressapp@http://localhost:3003/remoteEntry.js',
    },
    shared:{
        ...dependencies,
        react:{
            singleton:true,
            import:'react',
            shareScope:'default',
            requiredVersion:dependencies['react'],
        },
        'react-dom':{
            singleton:true,
            requiredVersion:dependencies['react-dom'],
        },
    }, 
};