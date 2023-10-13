import React from 'react'
import climbImg from '../assets/images/02climb.png'
import schedule from '../assets/images/schedule-content.png'

const Team = () => {
  return (
    <div>
        {/* Section 3 */}
      <section id="climb-section" className="section-3">
      <div class="climb-text-container">
        <div class="climb-text-section container-sm">
          <div class="climb">
            <img src={climbImg} alt="" class="numbers" />
          </div>
          <div class="climb-text center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, libero quod illum eius porro ullam. Debitis
            quisquam incidunt autem rerum enim quia blanditiis delectus? Fuga.
          </div>
        </div>
      </div>

      <div class="tab-container">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="mountain1-tab" data-bs-toggle="tab" data-bs-target="#mountain1"
              type="button" role="tab" aria-controls="mountain1" aria-selected="true">Mountain 1</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="mountain2-tab" data-bs-toggle="tab" data-bs-target="#mountain2" type="button"
              role="tab" aria-controls="mountain2" aria-selected="false">Mountain 2</button>
          </li>
        </ul>
      </div>

      <div class="tab-content tab-bg1" id="myTabContent">
        <div class="tab-pane fade show active" id="mountain1" role="tabpanel" aria-labelledby="mountain1-tab">
          <div class="schedule-container">
            <img src={schedule} alt="" class="schedule" />
          </div>
        </div>
        <div class="tab-pane fade tab-bg2" id="mountain2" role="tabpanel" aria-labelledby="mountain2-tab">

          <div class="schedule-container">
            <img src={schedule} alt="" class="schedule" />
          </div>

        </div>

      </div>

      <div class="accordion" id="accordionPanelsStayOpenExample">
        <div class="accordion-item accordion-bg1">
          <h2 class="accordion-header" id="panelsStayOpen-headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne">
              Mountain 1
            </button>
          </h2>
          <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show"
            aria-labelledby="panelsStayOpen-headingOne">
            <div class="accordion-body center">
              <div class="schedule-container-accord">
                <img src="/images/schedule-content.png" alt="" class="schedule" />
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item accordion-bg2">
          <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo">
              Mountain 2
            </button>
          </h2>
          <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingTwo">
            <div class="accordion-body">
              <div class="schedule-container-accord">
                <img src={schedule} alt="" class="schedule" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer class="footer">
      </footer>
      </section>
      {/* End of Section 3 */}
    </div>
  )
}

export default Team