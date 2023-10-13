import React from 'react'

import historyImg from '../assets/images/01history.png';
import thumb1 from '../assets/images/thumb1.png';
import thumb2 from '../assets/images/thumb2.png';

const History = () => {
  return (
    <section id="history-section" className="section-2">
        <div className="history-text-section container-sm">
            <div className="history">
                <img src={historyImg} alt="" className="numbers" />
            </div>
            <div className="history-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore sint consequatur ducimus. Quis quasi, illum
            tempore aliquam blanditiis neque praesentium non! Modi dolor in non. Consectetur, vel laboriosam quod ipsam
            perspiciatis delectus nam adipisci eum accusantium suscipit dolores numquam animi necessitatibus molestias
            sequi similique blanditiis rem.
            </div>
        </div>

        <div className="carousel-bg center">
            <div className="thumb-container center">
                <div>
                    {/* <!-- Carousel items --> */}
                    <div className="row blog">
                        <div className="col-md-12">
                            <div id="blogCarousel" className="carousel slide" data-ride="carousel">
                                <ol className="carousel-indicators" >
                                    <li data-target="#blogCarousel" data-slide-to="0" className="active"></li>
                                    <li data-target="#blogCarousel" data-slide-to="1"></li>
                                    <li data-target="#blogCarousel" data-slide-to="2"></li>
                                </ol>

                                {/* <!-- Carousel items --> */}
                                <div className="carousel-inner" >
                                    <div className="carousel-item active">
                                        <div className="row">
                                        <div className="col-md-3">
                                            <a href="#">
                                            <img src={thumb1} alt="Image" className='w-full'/>
                                            </a>
                                        </div>
                                        <div className="col-md-3">
                                            <a href="#">
                                            <img src={thumb2} alt="Image" className='w-full' />
                                            </a>
                                        </div>
                                        <div className="col-md-3">
                                            <a href="#">
                                            <img src={thumb1} alt="Image" className='w-full' />
                                            </a>
                                        </div>
                                        <div className="col-md-3">
                                            <a href="#">
                                            <img src={thumb2} alt="Image" className='w-full' />
                                            </a>
                                        </div>
                                        </div>
                                        {/* <!--.row--> */}
                                    </div>

                                    {/* <!--.item--> */}
                                    <div className="carousel-item">
                                        <div className="row">
                                            <div className="col-md-3">
                                                <a href="#">
                                                <img src={thumb1} alt="Image" className='w-full' />
                                                </a>
                                            </div>
                                            <div className="col-md-3">
                                                <a href="#">
                                                <img src={thumb2} alt="Image" className='w-full' />
                                                </a>
                                            </div>
                                            <div className="col-md-3">
                                                <a href="#">
                                                <img src={thumb1} alt="Image" className='w-full' />
                                                </a>
                                            </div>

                                            <div className="col-md-3">
                                                <a href="#">
                                                <img src={thumb2} alt="Image" className='w-full' />
                                                </a>
                                            </div>
                                        </div>

                                        {/* <!--.row--> */}
                                    </div>
                                    <div className="carousel-item">
                                        <div className="row flex">
                                            <div className="col-md-3">
                                                <a href="#">
                                                <img src={thumb1} alt="Image" className='w-full' />
                                                </a>
                                            </div>
                                            <div className="col-md-3">
                                                <a href="#">
                                                <img src={thumb2} alt="Image" className='w-full' />
                                                </a>
                                            </div>
                                            <div className="col-md-3">
                                                <a href="#">
                                                <img src={thumb1} alt="Image" className='w-full' />
                                                </a>
                                            </div>
                                            <div className="col-md-3">
                                                <a href="#">
                                                <img src={thumb2} alt="Image"className='w-full' />
                                                </a>
                                            </div>
                                        </div>
                                        {/* <!--.row--> */}
                                    </div>
                                    {/* <!--.item--> */}
                                </div>
                                {/* <!--.carousel-inner--> */}
                            </div>
                        {/* <!--.Carousel--> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default History