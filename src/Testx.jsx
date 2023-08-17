import React from 'react'
import styled from "styled-components";
import { FaStar, FaStarHalfAlt} from 'react-icons/fa';
import { NavLink } from "react-router-dom";
// import {far fa-star} from "";

const Testx = () => {
  return (
    <Wrapper>

    <div className="testiomon">

    <div className="inner">

        <h1>Testimonials</h1>

        <div className="border"></div>

        <div className="row">
            <div className="cols">
                <div className="testimonial">
                    {/* /peinding adding testimonials person */}
                    <img src="./images/tesst1.png" alt="tes" />
                    <div className="namee">Ritik Roy</div>
                    <FaStar className="icons" />
                    <FaStar className="icons" />
                    <FaStar className="icons" />
                    <FaStar className="icons" />
                    <FaStarHalfAlt className="icon" />
                    <p>
                    so here is a review section for the review now
                    </p>
                </div>
                
            </div>


            <div className="cols">
                <div className="testimonial">
                    {/* /peinding adding testimonials person */}
                    <img src="./images/tesst1.png" alt="tes" />
                    <div className="namee">Ritik Roy</div>
                    <FaStar className="icons" />
                    <FaStar className="icons" />
                    <FaStar className="icons" />
                    <FaStar className="icons" />
                    <FaStarHalfAlt className="icon" />
                   <p>
                    so here is a review section for the review now
                   </p> 
                </div>
                
            </div>


            <div className="cols">
                <div className="testimonial">
                    {/* /peinding adding testimonials person */}
                    <img src="./images/tesst1.png" alt="tes" />
                    <div className="namee">Ritik Roy</div>
                    <FaStar className="icons" />
                    <FaStar className="icons" />
                    <FaStar className="icons" />
                    <FaStar className="icons" />
                    <FaStarHalfAlt className="icon" />
                    <p>
                    so here is a review section for the review now
                    </p>
                </div>
                
            </div>







        </div>



    </div>






    </div>







    </Wrapper>
  );
};

//css section

const Wrapper = styled.section`


*{
    // background-color: red; //change this
    margin:0;
    padding:0;
}

.icons{
    color: green;
    margin-bottom: 20px;
}

.testiomon{
    padding:40px 0;
    // background: yellow; //change this to #f1f1f1
    background: #f1f1f1;
    color: #434343;
    text-align: center;
}

.inner{
    max-width: 1200px;
    margin: auto;
    overflow: hidden;
    padding: 0 20px;

}

.border{
    width: 160px;
    height: 5px;
    background: #8ab04c; // might take #6ab04c
    margin: 26px auto;
}

.row{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.cols{
    flex:33.33%; //99.9% x3 done
    max-width: 33.33%;
    box-sizing: box-model;
    padding:15px;
}


.testimonial{
    background: #fff;
    padding: 30px;
}

.testimonial img{
    width:100px;
    height: 100px;
    border-radius: 50%;
}

.namee{
    font-size: 20px;
    text-transform: uppercase;
    margin: 20px 0; 
}

// media_responsive section for the testimonials for mobile and tablet

// @media screen and (max-width:960px){
//     .col{
//         flex:100%;
//         max-width: 100%; 
//     }
// }

@media (max-width: ${({ theme }) => theme.media.tab}) {
    // .grid-three-column {
    //   grid-template-columns: 1fr 1fr;
    // }
    col{
        flex:100%;
        max-width: 100%; 
      }
  }

@media (max-width: ${({ theme }) => theme.media.mobile}) {
    // .grid-two-column,
    // .grid-three-column {
    //   grid-template-columns: 1fr;
      
    // }
    .col{
        flex:100%;
        max-width: 100%; 
    }
  }


`;

export default Testx