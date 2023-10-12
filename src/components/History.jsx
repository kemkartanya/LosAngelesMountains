import React from 'react'

const History = () => {
  return (
    <div>
        {/* Section 2 */}
      <section id="history-section" className="section-2">
        <div class="history-text-section container-sm">
          <div class="history">
            <img src={historyImg} alt="" class="numbers" />
          </div>
          <div class="history-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore sint consequatur ducimus. Quis quasi, illum
            tempore aliquam blanditiis neque praesentium non! Modi dolor in non. Consectetur, vel laboriosam quod ipsam
            perspiciatis delectus nam adipisci eum accusantium suscipit dolores numquam animi necessitatibus molestias
            sequi similique blanditiis rem.
          </div>
        </div>

        <div class="carousel-bg center">
        <div class="thumb-container center">
          <div>

            {/* <!-- Carousel items --> */}
            <div class="row blog">
              <div class="col-md-12">
                <div id="blogCarousel" class="carousel slide" data-ride="carousel">
                  <ol class="carousel-indicators" className='flex'>
                    <li data-target="#blogCarousel" data-slide-to="0" class="active"></li>
                    <li data-target="#blogCarousel" data-slide-to="1"></li>
                    <li data-target="#blogCarousel" data-slide-to="2"></li>
                  </ol>

                  {/* <!-- Carousel items --> */}
                  <div class="carousel-inner" >
                    <div class="carousel-item active">
                      <div class="row flex">
                        <div class="col-md-3">
                          <a href="#">
                            <img src={thumb1} alt="Image" className='w-full'/>
                          </a>
                        </div>
                        <div class="col-md-3">
                          <a href="#">
                            <img src={thumb2} alt="Image" className='w-full' />
                          </a>
                        </div>
                        <div class="col-md-3">
                          <a href="#">
                            <img src={thumb1} alt="Image" className='w-full' />
                          </a>
                        </div>
                        <div class="col-md-3">
                          <a href="#">
                            <img src={thumb2} alt="Image" className='w-full' />
                          </a>
                        </div>
                      </div>
                      {/* <!--.row--> */}
                    </div>

                    {/* <!--.item--> */}
                    <div class="carousel-item">
                      <div class="row flex">
                        <div class="col-md-3">
                          <a href="#">
                            <img src={thumb1} alt="Image" className='w-full' />
                          </a>
                        </div>
                        <div class="col-md-3">
                          <a href="#">
                            <img src={thumb2} alt="Image" className='w-full' />
                          </a>
                        </div>
                        <div class="col-md-3">
                          <a href="#">
                            <img src={thumb1} alt="Image" className='w-full' />
                          </a>
                        </div>

                        <div class="col-md-3">
                          <a href="#">
                            <img src={thumb2} alt="Image" className='w-full' />
                          </a>
                        </div>
                      </div>

                      {/* <!--.row--> */}
                    </div>
                    <div class="carousel-item">
                      <div class="row flex">
                        <div class="col-md-3">
                          <a href="#">
                            <img src={thumb1} alt="Image" className='w-full' />
                          </a>
                        </div>
                        <div class="col-md-3">
                          <a href="#">
                            <img src={thumb2} alt="Image" className='w-full' />
                          </a>
                        </div>
                        <div class="col-md-3">
                          <a href="#">
                            <img src={thumb1} alt="Image" className='w-full' />
                          </a>
                        </div>
                        <div class="col-md-3">
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
      {/* End of Section 2 */}
    </div>
  )
}

export default History