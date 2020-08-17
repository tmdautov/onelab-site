import React, { useRef, useState } from 'react';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import Skeleton from 'react-loading-skeleton';

const SkeletonForm = () => {
  return (
    <div className="questions-form">
      <style jsx>
        {`  

                    .form {
                        display: flex;
                        flex-direction: column;
                    }

                    input {
                        margin-bottom: 4.244031830238727vh;
                        padding: 3% 2%;
                        width: 100%:
                        transition: border 0.5s ease;
                    }

                    .email-phone-holder {
                        display: flex;
                    }

                    .email-phone-holder input {
                        width: 60%;
                    }

                    textarea {
                        resize: none;
                        height: 21.4989vh;
                        padding: 2.5%;
                        font-size: 16px;
                        margin-bottom: 2.75vw;
                    }
                    
                    .button {
                        width: 50%;
                    }
                    @media (max-width: 1024px) {
                        .questions-form {
                            width: 100%;
                        }

                        button {
                            margin: auto;
                        }
                    }

                    .error-input:focus {
                        outline: none!important;
                    }
                    
                    .phone-message {
                        transform: translate(103%, -130%);
                    }

                    .question-message {
                        position: relative;
                    }
                `}
      </style>
      <div className="form">
        <Skeleton  height={'4.5vh'}
            style={{
                marginBottom: "5%",
            }}
        />
        <Skeleton  height={'4.5vh'} 
            style={{
                marginBottom: "5%",
            }}
        />
        <Skeleton
          height={'14.5vh'}
          style={{
            marginBottom: '8%',
          }}
        />
        <Skeleton width={"50%"} height={'4.5vh'} />
      </div>
    </div>
  );
};

export default SkeletonForm;
