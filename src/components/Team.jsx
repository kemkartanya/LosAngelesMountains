import React from 'react'
import climbImg from '../assets/images/02climb.png'
import schedule from '../assets/images/schedule-content.png'
import footerLogo from '../assets/images/footerLogo.png'
import copyright from '../assets/images/copy.png'

const Team = () => {
  return (
    <section id="climb-section" className="section-3">
        <div className="climb-text-container">
            <div className="climb-text-section container-sm">
                <div className="climb">
                    <img src={climbImg} alt="" className="numbers" />
                </div>
                <div className="climb-text center">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, libero quod illum eius porro ullam. Debitis
                quisquam incidunt autem rerum enim quia blanditiis delectus? Fuga.
                </div>
            </div>
        </div>

        <div className="tab-container">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                <button className="nav-link active" id="mountain1-tab" data-bs-toggle="tab" data-bs-target="#mountain1"
                    type="button" role="tab" aria-controls="mountain1" aria-selected="true">Mountain 1</button>
                </li>
                <li className="nav-item" role="presentation">
                <button className="nav-link" id="mountain2-tab" data-bs-toggle="tab" data-bs-target="#mountain2" type="button"
                    role="tab" aria-controls="mountain2" aria-selected="false">Mountain 2</button>
                </li>
            </ul>
        </div>

        <div className="tab-content tab-bg1" id="myTabContent">
            <div className="tab-pane fade show active" id="mountain1" role="tabpanel" aria-labelledby="mountain1-tab">
                <div className="schedule-container">
                <img src={schedule} alt="" className="schedule" />
                </div>
            </div>
            <div className="tab-pane fade tab-bg2" id="mountain2" role="tabpanel" aria-labelledby="mountain2-tab">

                <div className="schedule-container">
                <img src={schedule} alt="" className="schedule" />
                </div>

            </div>
        </div>

        <div className="accordion" id="accordionPanelsStayOpenExample">
            <div className="accordion-item accordion-bg1">
                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseOne">
                    Mountain 1
                </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show"
                aria-labelledby="panelsStayOpen-headingOne">
                <div className="accordion-body center">
                    <div className="schedule-container-accord">
                    <img src="/images/schedule-content.png" alt="" className="schedule" />
                    </div>
                </div>
                </div>
            </div>
            <div className="accordion-item accordion-bg2">
                <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseTwo">
                        Mountain 2
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingTwo">
                    <div className="accordion-body">
                        <div className="schedule-container-accord">
                            <img src={schedule} alt="" className="schedule" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <footer className="footer">
            <img className='footer-logo'
            src={footerLogo} alt='' />
            <img className='copy'
            src={copyright} alt='' />
        </footer>
    </section>
  )
}

export default Team