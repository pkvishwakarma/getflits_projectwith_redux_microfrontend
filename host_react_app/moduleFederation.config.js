const {dependencies}= require('./package.json');

module.exports={
    name:'hostreactapp',
    filename:'remoteEntry.js',
    exposes:{
        './useReducer_reduxComponent/store/features/userInfoSlicer/userinfoSlice':'./src/useReducer_reduxComponent/store/features/userInfoSlicer/userinfoSlice.js',
        './useReducer_reduxComponent/store/features/deliveryAddDataSlicer/deliveryAddSlice':'./src/useReducer_reduxComponent/store/features/deliveryAddDataSlicer/deliveryAddSlice.js',
    },
    remotes:{
        routenavigationapp:'routenavigationapp@http://localhost:3001/remoteEntry.js',
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