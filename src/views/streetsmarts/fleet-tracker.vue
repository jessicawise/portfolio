<template>
  <div id="streetsmarts">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6 col-md-offset-3 align-left">
          <h2><strong>Fleet Tracker Feature</strong></h2>

          <div id='ss-ft-head' class="opac-0" :class="{ 'animated fadeInUp': scrollY > 495 || isApplied('ss-ft-head') }">

            <div class="row">
              <div class='col-md-7'>
                <img class="image-size" src="/img/streetsmarts/Fleet_Tracker_v3_Week.png" />
              </div>
              <div class='col-md-5'>
                <h3><strong>The Basics</strong></h3>
                <strong>Role</strong>
                <br />
                Researcher and UX Designer
                <br />
                <br />
                <strong>Tools</strong>
                <br />
                Sketch and Invision
                <br />
                <br />
                <strong>Time Constraint</strong>
                <br />
                2 weeks
                

              </div>
              <div class='row'>
                <div class='col-md-12'>
              <h3><strong>The Overview</strong></h3>
                <p><a href="https://www.streetsmarts.life/">StreetSmarts</a> is a web-based application which aids management of business
                  operations for people who rent their cars through online platforms like <a href="https://turo.com/">Turo</a>.
                </p>
                <p>The Fleet Tracker would allow users an easy way to see all of their cars and if they were available</p>
                <p>The StreetSmarts platform uses Material UI as their component library and as such, my designs needed to utilize the
                  components of Material UI as well.
                </p>
                </div>
                </div>
            </div>

          </div>
          <div id='ss-ft-research' class="opac-0" :class="{ 'animated fadeInUp': scrollY > 1020 || isApplied('ss-ft-research') }">

            <h3><strong>User Research</strong></h3>
            <p>For user research, I interviewed a super user of the platform as well as a mid level user. Since two interviews would not
              be quite enough, I also pulled some feedback from the StreetSmarts Facebook group that was provided when the user base was
              asked which feature they'd like to see implemented first.
            </p>
            <p>The interviews uncovered a bit more wants for the Fleet Tracker feature than originally estimated. Not only did users
              want to be able to see cars that were available, they also wanted to be able to see accurate information about those rentals.
              Upon looking at Turo, their tracker was based on a single car and you'd have to go into another car to see when that car was
              available. The Turo platform only had dates and did not provide the users with information on times the car was available
              booked. It seemed that had to be guessed and as such the user base wanted to be able to see the times their cars were
              available as well.
            </p>
            <p>The users wanted to stick with the idea of a calendar for the tracker but were not particular if it was a month calendar
              view or a week view. In the same line of thought, the users were not particular to wether the calendar was text based or
              more visual.
            </p>
            <p>The last big thing that came up during the interviews was that the users were having problems where they would be on the
              phone with a renter and the renter would book the wrong car. Since the interaction was being handled over the phone, the
              user would not be able to direct the renter to the correct car in Turo and as such the renter would usually book the wrong
              vehicle. Because of this, the user base needed a way to share the vehicle booking with their renter after the call or during
              the call.
            </p>
          </div>

          <div id='ss-ft-1' class="opac-0" :class="{ 'animated fadeInUp': scrollY > 1458 || isApplied('ss-ft-1') }">

            <div class="row">
              <div class='col-md-7'>
                <img class="image-size" src="/img/streetsmarts/Fleet_Tracker_v1_Month.png" />
                <img class="image-size" src="/img/streetsmarts/Fleet_Tracker_v1_Week.png" />
              </div>
              <div class='col-md-5'>
                <h3><strong>Initial Wireframes</strong></h3>
                <p>Based on the user interviews; these were the inital wireframes. Since the users had no preference to a month calendar or a
                  week calendar, I designed both to see how they'd look.
                </p>
              </div>
            </div>
          </div>

          <div id='ss-ft-2' class="opac-0" :class="{ 'animated fadeInUp': scrollY > 2148 || isApplied('ss-ft-2') }">

            <div class="row">
              <div class='col-md-5'>
                <h3><strong>Round 2 Wireframes</strong></h3>

                <p>I conducted some breif usability tests on the inital wireframes with the users I interviewed and found that they wanted
                  to be able to see their booked cars in some cases as well. They also had no preference to either calendar view either and
                  so I decided to keep both as there was positive feedback for both. With those thoughts in mind I designed the second
                  version of the wireframes.
                </p>
              </div>
              <div class='col-md-7'>
                <img class="image-size" src="/img/streetsmarts/Fleet Tracker_v2_Month.png" />
                <img class="image-size" src="/img/streetsmarts/Fleet_Tracker_v2_Week.png" />
              </div>
            </div>
          </div>

          <div id='ss-ft-test' class="opac-0" :class="{ 'animated fadeInUp': scrollY > 2817 || isApplied('ss-ft-test') }">

            <h3><strong>Usability Testing</strong></h3>
            <p>After presenting the wireframes to the executives, we decided that the second design was exactly what we were looking for.
              Rather than conduct a short usability testing session, we took to the Facebook group to get their feedback.
            </p>
            <p>It came out that there was a pocket of users whose issues we were not addressing. The design was easy to use but the
              users didn't want to see available OR booked cars. They wanted the option to see avaialble AND booked cars. With that want
              came the need to be able to tell the difference between the two.
            </p>
            <p>This posed the issue that the month view was not going to look great with the possibility of 100+ cars being shown at
              once, in the case of a super user. The decision was made to drop the month view and revisit it at a later date.
            </p>
          </div>
          <div id='ss-ft-final' class="opac-0" :class="{ 'animated fadeInUp': scrollY > 3090 || isApplied('ss-ft-final') }">

            <div class="row">
              <div class='col-md-5'>
                <h3><strong>Final Wireframes</strong></h3>
                <p>After the decision was made to drop month view, I created the final wireframes for the desktop application and the mobile
                  application.
                </p>
              </div>
              <div class='col-md-7'>
                <img class="image-size" src="/img/streetsmarts/Fleet_Tracker_v3_Week.png" />
                <img class="mobile-size" src="/img/streetsmarts/Mobile.png" />
                <img class="mobile-size" src="/img/streetsmarts/Mobile_Menu.png" />
              </div>
            </div>
            <h3><strong>What I Would Change</strong></h3>
            <p>
            <ul>
              <li>Design the month view in a way that will allow the user to decide
                if they want to follow the original idea and be able to switch between the two views. This would require another set of
                User Interviews to decide what information is the most important for such a calendar view so that we can cut down on
                information not needed. Doing this would help declutter the month view and make it a stronger design.
              </li>
              <li>Redeisgn the way filters work in the tracker once grouping as a whole is implemented into the platform. The currently designed way is a round about way to force groups to be available.</li>
            </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import TrackScroll from '@/mixins/TrackScroll.vue'
  import ScrollToNav from "@/mixins/ScrollToNav.vue"
  export default {
      name: "street_smarts",
      mixins: [
          ScrollToNav,
          TrackScroll
      ],
      methods: {
      isApplied(id) {
          const el = document.getElementById(id)
          if (!el) return;
          if (el.classList.contains('animated')) {
              return true;
          }
      }
  }
  }
</script>

<style lang="scss">
    #streetsmarts {

        .opac-0 {
            opacity: 0;

            &.animated {
                opacity: 1;
                transition: opacity .5s;
            }
        }
    }
</style>
