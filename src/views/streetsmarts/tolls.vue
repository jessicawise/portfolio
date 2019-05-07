<template>
  <div id="streetsmarts">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6 col-md-offset-3 align-left">
          <h2><strong>Toll Page Redesign Exploration</strong></h2>

          <div id='ss-t-head' class="opac-0" :class="{ 'animated fadeInUp': scrollY > 420 || isApplied('ss-t-head') }">

            <div class="row">
              <div class='col-md-7'>
                <img class="image-size" src="/img/streetsmarts/Tolls/quick-deploy.png" />
                <img class="image-size" src="/img/streetsmarts/Tolls/PendingTolls_ExecuteCancel.png" />
                <img class="image-size" src="/img/streetsmarts/Tolls/UnassignedTolls_Assignable.png" />
              </div>
              <div class='col-md-5'>
                <h3><strong>The Basics</strong></h3>
                <strong>Role</strong>
                <br />
                UX Designer
                <br />
                <br />
                <strong>Tools</strong>
                <br />
                Sketch
                <h3><strong>The Overview</strong></h3>
                <p>After the Fleet Tracker project the problem was that the foundation of the platform was not enitrely
                  sturdy. A lot of the platform was created without a UX Designer involved and so it was weighed down
                  by things essentially stacked on top of each other. For users who used the platform since the beginning,
                  this was no problem. However, new users were joining and quitting very shortly thereafter because they
                  could not grasp how to work in the platform.
                </p>

              </div>

              <div class='row'>
                <div class='col-md-12'>
                  <p>Rather than continue to stack features on this foundation, it was decided that I should start exploring
                    ways to "clean up" some of the already existing features and make them more new user friendly. With the
                    exploration, there are not many iterations of designs because I was only taking what was there and shifting
                    it around or trying out new ways of displaying information. Many of the things explored would not be
                    tested until there was time to implement them or until they would be rolled out.
                  </p>
                <p>Along with exploring some organization changes with Automated Messaging I was asked to try my hand at redesigning
                    the tolls page. The redesign would be coming with a new tolls incentive that would allow new users to use
                    StreetSmarts for tolls only. This would give some hesitant users a peek into what StreetSmarts could do
                    without fully committing to it right away. Originally, the tolls page was just a list of tolls that renters
                    would go through and then the user would either pay themselves or add to the bill of the renter. The list
                    didn't say if the toll had been processed or if it couldn't be matched to a reservation or anything.
                  </p>
                  <p>We wanted to automatically assign
                    tolls to a reservation but we also wanted to allow users to cancel that toll if they didn't want to pass it on
                    to their renter. Overall, the categorization was the most important for this exploration.
                  </p>
                </div>
              </div>
              
            </div>

          </div>

          <div id='ss-t-sug' class="opac-0" :class="{ 'animated fadeInUp': scrollY > 1395 || isApplied('ss-t-sug') }">

            <div class="row">
              <div class='col-md-5'>
                <h3><strong>Suggested Changes</strong></h3>

                <p>The major categories a toll could fall under would be Processed, Pending and Unassigned. In each
                  category a user would be able to search the list for the name of a car, the reservation or the amount.
                  This would allow the user the ability to quickly look at any of the tolls in that category and then move on.
                </p>
                <p>The Processed category would have no additional functionality other than to look at a toll and see if
                  it was processed. The assumption was that once a toll was processed there was nothing left to do on it.
                </p>
                <p>The Pending category was for tolls that had just come in and had not yet been charged to the renter. StreetSmarts
                  would get the toll and automatically assign it to the correct reservation. From there the user could decide if they
                  wanted to execute the toll, which would pass the charge onto the renter, or cancel the toll, which would allow them
                  to pay the toll themselves. Once either option was selected it would move to Processed.
                </p>

              </div>
              <div class='col-md-7'>
                <img class="image-size" src="/img/streetsmarts/Tolls/quick-deploy.png" />
                <img class="image-size" src="/img/streetsmarts/Tolls/PendingTolls_ExecuteCancel.png" />
                <img class="image-size" src="/img/streetsmarts/Tolls/UnassignedTolls_Assignable.png" />
              </div>
              
            </div>

            <div class='row'>
              <div class='col-md-12'>
                <p>The Unassigned category was for the off chances that the platform could not match the toll to a reservation. One
                  thing I learned while working with StreetSmarts is that their users know their reservations like the back of their
                  hands. They would probably not need a way to search all reservations for the correct one to place the toll on. However,
                  just to be on the cautious side I suggested keeping the car the toll was sent to as a column. This would help prevent some
                  user error. After that, the user would just need to enter the name of the renter or the reservation number that the toll
                  needed to be assigned to. Once assigned this toll would be moved to the Pending category where the user would need to decide
                  if they wanted to execute it or cancel it.
                </p>
                <p>The Toll Automated Message and Preferences would be sections that came later. The idea for those was that a user could change
                  their automated messages for tolls in this section without having to go back to the Automated Messaging section. Users who
                  had Toll accounts only would be prompted to upgrade to a full StreetSmarts account to access Automated Messaging. Preferences
                  would be where options for tolls would go. At the time, those preferences were still being determined.
                </p>
              </div>
            </div>

          </div>

          <div id='ss-t-final' class="opac-0" :class="{ 'animated fadeInUp': scrollY > 2296 || isApplied('ss-t-final') }">
            <h3><strong>What I Would Change</strong></h3>
            <p>
            <ul>
              <li>Add a way to tell if a toll was Executed or Canceled on the Processed category. Currently in the
                wireframes there is no way to tell what was done to a toll. This would mean the user wouldn't know if they
                had passed on the charge to the user unless they looked at the reservation history.
              </li>
              <li>Allowing execution or cancelation on the Unassigned category. Logic should be added to say that if a user
                puts in a reservation name or number into the text area that the toll is classed as Executed. This should then
                add the toll to the Processed category as Executed. If the user didn't want to pass on the toll and just
                handle it themselves then they should just be allowed to cancel the unassigned toll. The assumption here is
                a canceled toll doesn't really need the reservation information. This would need to be confirmed with users, however,
                because it is also possible that the reservation information is needed for bookkeeping purposes.
              </li>
              <li>Testing. Exploration is nice but it can't be implemented without some user testing first. Unfortunately,
                testing could not be done as the user base was not receptive to the fact that design was working on other
                things while features they were requesting weren't done yet.
              </li>
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
      name: "street_smarts_tolls",
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
