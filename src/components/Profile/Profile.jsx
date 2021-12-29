import React from 'react';
import styles from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {

    return (
        <div className={styles.profile}>

            <ProfileInfo profileInfoData={props.state.profileInfoData}/>

            <MyPosts posts={props.state.posts}/>
        </div>
    )
}


export default Profile;