import React, { useState, useEffect } from "react";
import styled from 'styled-components'


const PictureModal = (props) => (
  <>
    { props.show ? 
        <Modal>
          Hello Modal
          <button onClick={props.clickMe}>
            exit
          </button>
        </Modal>
      : <OffModal>Hello</OffModal>
    }
  </>
)

export default PictureModal



const Modal = styled.div `

  width: 500px;
  background: white;
  border: 1px solid #ccc;
  transition: 1.1s ease-out;
  box-shadow: 
  -2rem 2rem 2rem rgba(black, 0.2);
  filter: blur(0);
  transform: scale(1);  
  opacity: 1;
  visibility: visible;
`
  
const OffModal = styled.div`
    opacity: 0;
    visibility: hidden;
    filter: blur(8px);
    transform: scale(0.33);
    box-shadow: 1rem 0 0 rgba(black, 0.2);
  

`
  // h2 {
  //   border-bottom: 1px solid #ccc;
  //   padding: 1rem;
  //   margin: 0;
  // }
  // .content {
  //   padding: 1rem;
  //       }
  //       .actions {
  //         border-top: 1px solid #ccc;
  //         background: #eee;
  //         padding: 0.5rem 1rem;
  //         button {
  //           border: 0;
  //           background: #78f89f;
  //           border-radius: 5px;
  //           padding: 0.5rem 1rem;
  //           font-size: 0.8rem;
  //           line-height: 1;
  //         }
  //       }
  //     }
      
  //     #centered-toggle-button {
  //       position: absolute;
  //     }
      
  //     `




