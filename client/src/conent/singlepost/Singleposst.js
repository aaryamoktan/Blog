import React from 'react'
import Siderbar from '../sidebar/Siderbar'
const img = require("../../images/env.jpg")

const Singleposst = () => {
    return (
        <>
            <div className='singleContainer'>
                <Siderbar />
                <div className='singlepost'>
                    <span className='my'>Content</span>
                    <div className='singleCard'>
                        <div className='singleImg'>
                            <img src={img} alt="/" />
                        </div>
                        <div className='singleCont'><div className='singleTitle'>
                            Auther :<i>Aarya Moktan</i>
                        </div>
                            <div className='singletype'>nature
                            </div>

                            <div className='singleTime'>
                                <div className='edit'>
                                    <div className='edit1'><i class="fa-solid fa-pen-to-square" style={{ "color": "#015cf9" }}></i></div>
                                    <div class="delete"><i class="fa-solid fa-trash" style={{ "color": "#ff052b" }}></i></div>
                                </div>
                                1hrs ago
                            </div>

                        </div>

                        <div className='singleDesc'>
                            <p>I’m a big fan of short sentences. I love them because people can understand them easily. There's great value in short sentences that are readable, digestible, and punchy.
                                Writers often get   </p>
                        </div>
                    </div>
                    <div className='singleCard'>
                        <div className='singleImg'>
                            <img src={img} alt="/" />
                        </div>
                        <div className='singleCont'><div className='singleTitle'>
                          Auther :<i>Aarya Moktan</i>
                        </div>
                        <div className='singletype'>nature
                        </div>
                        
                        <div className='singleTime'>
                        <div className='edit'>
                            <div className='edit1'><i class="fa-solid fa-pen-to-square" style={{"color": "#015cf9"}}></i></div>
                            <div class="delete"><i class="fa-solid fa-trash" style={{"color": "#ff052b"}}></i></div>
                        </div>
                            1hrs ago
                        </div>

                        </div>
                       
                        <div className='singleDesc'>
                            <p>I’m a big fan of short sentences. I love them because people can understand them easily. There's great value in short sentences that are readable, digestible, and punchy.
                                Writers often get   </p>
                        </div>
                    </div>
                    <div className='singleCard'>
                        <div className='singleImg'>
                            <img src={img} alt="/" />
                        </div>
                        <div className='singleCont'><div className='singleTitle'>
                          Auther :<i>Aarya Moktan</i>
                        </div>
                        <div className='singletype'>nature
                        </div>
                        
                        <div className='singleTime'>
                        <div className='edit'>
                            <div className='edit1'><i class="fa-solid fa-pen-to-square" style={{"color": "#015cf9"}}></i></div>
                            <div class="delete"><i class="fa-solid fa-trash" style={{"color": "#ff052b"}}></i></div>
                        </div>
                            1hrs ago
                        </div>

                        </div>
                       
                        <div className='singleDesc'>
                            <p>I’m a big fan of short sentences. I love them because people can understand them easily. There's great value in short sentences that are readable, digestible, and punchy.
                                Writers often get   </p>
                        </div>
                    </div>
                    <div className='singleCard'>
                        <div className='singleImg'>
                            <img src={img} alt="/" />
                        </div>
                        <div className='singleCont'><div className='singleTitle'>
                          Auther :<i>Aarya Moktan</i>
                        </div>
                        <div className='singletype'>nature
                        </div>
                        
                        <div className='singleTime'>
                        <div className='edit'>
                            <div className='edit1'><i class="fa-solid fa-pen-to-square" style={{"color": "#015cf9"}}></i></div>
                            <div class="delete"><i class="fa-solid fa-trash" style={{"color": "#ff052b"}}></i></div>
                        </div>
                            1hrs ago
                        </div>

                        </div>
                       
                        <div className='singleDesc'>
                            <p>I’m a big fan of short sentences. I love them because people can understand them easily. There's great value in short sentences that are readable, digestible, and punchy.
                            
                                Writers often get   </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Singleposst