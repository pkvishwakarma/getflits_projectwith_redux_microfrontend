import React, { useEffect } from 'react';
import './navbar.css';
import { Routes, Route,BrowserRouter } from 'react-router-dom';
import Navbar from './navbar';
import MyProfile from 'myprofileapp/nav_Components/pages/myprofile/myprofile';
import DeliveryAdd from 'deliveryaddressapp/nav_Components/pages/delivery_address/deliveryAdd';
import userData from './constentData/loginUserData.json';
import { useDispatch } from 'react-redux';
import {userinfo} from 'hostreactapp/useReducer_reduxComponent/store/features/userInfoSlicer/userinfoSlice';

export default function FlitsHomePage() {
    var dispatch=useDispatch();
    //Handling Initial UserData mount on Page Load..
    useEffect(()=>{
        localStorage.setItem('userdata',JSON.stringify(userData?.users[0]));
        dispatch(userinfo(JSON.parse(localStorage?.getItem('userdata'))));
    },[])
    return (
        <>
            <div className='homepageHeading'>Welcome to our store</div>
            <div className='headerContainer'>
                <div className='headerTitle'>flits-support-workplace-15</div>
                <div className='optionContainer'>
                    <span className='home'>Home</span><span className='catelog'>Catelog</span><span className='contact'>Contact</span>
                </div>
                <div className='iconsContainer'>
                    <span className='searchIcon'>Search</span><span className='userIcon'>User</span><span className='cartIcon'>Cart</span>
                </div>
            </div>
            <BrowserRouter>
            <Routes>
                <Route path='/' element={<Navbar />}>
                    <Route path='/' element={<MyProfile />} />
                    <Route path='/myprofile' element={<MyProfile />} />
                    <Route path='/delivery' element={<DeliveryAdd />} />
                    {/* <Route path='/myorder' element={<MyOrder />} />
                    <Route path='/toporderedproduct' element={<TopOrderedProduct />} />
                    <Route path='/mywishlist' element={<MyWishlist />} />
                    <Route path='/mycredit' element={<MyCredit />} />
                    <Route path='/managecredit' element={<HowToManageCredit />} />
                    <Route path='/changepassword' element={<ChangePassword />} /> */}
                </Route>

            </Routes>
            </BrowserRouter>
        </>
    )
}

// initStore().then((store)=>{
//     <Provider store={store} >
//         <FlitsHomePage />
//     </Provider>
// });