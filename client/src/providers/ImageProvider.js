import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ImageContext = React.createContext();

export const ImageConsumer = ImageContext.Consumer;

export const ImageProvider = (props) => {
  const [imageId, setImageId] = useState();
  const [user, setUser] = useState("");
  const [userImage, setUserImage] = useState();
  const [ pictureJunctions, setPictureJunctions ] = useState(null);
  const [ userCollections, setUserCollections ] = useState([{title: 'there are none'}])

  
  const fetchUser = (userId) => {
    return new Promise((resolve, reject) => {
      axios.get(`/api/users/${userId}`)
        .then( res => { 
            resolve(res)
          }) 
        .catch((err) => {
          console.log(err);
          reject(err);
        })
    })
  }

  const fetchComments = (id) => {
    return new Promise((resolve, reject) => {
      axios.get(`/api/pictures/${id}/picture_comments`)
      .then( res => {
        resolve(res)
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      })
    })
  }

  const fetchImage = (id) => {
    return new Promise((resolve, reject) => {
      axios.get(`/api/pictures/${id}`)
      .then( res => {
        updateViews(res.data)
        resolve(res)
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      })
    })
  }

  const updateViews = (image) => {
    axios.patch(`/api/pictures/${image.id}`, {views: image.views+1, url: image.url, title: image.title, description: image.description, user_id: image.user_id, category_id: image.category_id})
  }
  const fetchCategory = (catId) => {
    return new Promise((resolve, reject) => {
      axios.get(`/api/categories/${catId}`)
      .then( res => {
        resolve(res)
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      })
    })
  }
  const fetchJunction = (id) => {
      axios.get(`/api/pictures/${id}/collection_pictures`)
      .then( res => {
        setPictureJunctions(res.data)
      })
      .catch(console.log)
  }

  const fetchCollection = (collectionId, userId) => {
    return new Promise((resolve, reject) => {
      axios.get(`/api/collections/${collectionId}`)     
        .then( res => {
        resolve(res)
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      })
    })  
  }

  const removeImageFromCollection = (junctionId) => {
    axios.delete(`/api/collection_pictures/${junctionId}`)
      .then( res => {
        setPictureJunctions(pictureJunctions.filter(a => a.id !== junctionId))
      })
      .catch(console.log)
  }

  const addImageToCollection = (junctionId) => {
    console.log("imageId:", imageId)
    console.log('junctionId', junctionId)
    axios.post(`/api/collection_pictures`, {picture_id: imageId, collection_id: junctionId})
      .then( res => {
        setPictureJunctions(pictureJunctions.concat(res.data)) //add to top of list at some point?
      })
      .catch(console.log)
  }

  const fetchCollections = (userId) => {
    axios.get(`/api/users/${userId}/collections`)
    .then(res => (setUserCollections(res.data)))
    .catch(console.log)
  }

  return(
    <ImageContext.Provider value={{
      fetchUser,
      user,
      userImage,
      fetchComments,
      fetchImage,
      fetchCategory,
      fetchJunction,
      fetchCollection,
      imageId,
      setImageId,
      pictureJunctions,
      removeImageFromCollection,
      addImageToCollection,
      fetchCollections,
      userCollections,
      
    }}> 
      { props.children }
    </ImageContext.Provider>     
  )
}

export default ImageProvider;