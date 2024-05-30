const {dependencies}= require('./package.json');

module.exports={
    name:'myprofileapp',
    filename:'remoteEntry.js',
    exposes:{
        './nav_Components/pages/myprofile/myprofile':'./src/nav_Components/pages/myprofile/myprofile.jsx',
    },
    remotes:{
        hostreactapp:'hostreactapp@http://localhost:3000/remoteEntry.js',
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