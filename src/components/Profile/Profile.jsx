import React from 'react';
import styles from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {

    return (
        <div className={styles.profile}>

            <ProfileInfo profileInfoData={props.profilePage.profileInfoData}/>

            <MyPosts posts={props.profilePage.posts}
                     addPostData={props.profilePage.addPostData}
                     addPost={props.addPost}
                     updateNewPostText={props.updateNewPostText}

            />
        </div>
    )
}


export default Profile;