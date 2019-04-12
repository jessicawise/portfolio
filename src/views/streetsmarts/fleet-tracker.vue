<template>
    <div id="streetsmarts">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-6 col-md-offset-3 align-left">
                    <h2><strong>Fleet Tracker Feature</strong></h2>

                    <h3><strong>My Role</strong></h3>

                    <p><a href="https://www.streetsmarts.life/">StreetSmarts</a> is a web-based application which aids management of business
                    operations for people who rent their cars through online platforms like <a href="https://turo.com/">Turo</a>.</p>

                    <p>I was brought onto the StreetSmarts team to aid in the effort of designing future features and the redesigning of the
                      current platform. My first task as the UX Researcher and UX Designer for StreetSmarts was to design a Fleet Tracker. The
                      base idea was that the tracker would allow users an easy way to see all of their cars and if they were available</p>

                    <p>The StreetSmarts platform uses Material UI as their component library and as such, my designs needed to utilize the
                      components of Material UI as well.</p>

                    <h3><strong>Time Constraint</strong></h3>

                    <p>As this feature was heavily requested by the user base, my time constraint to complete the entire design process was
                        <strong>2 weeks</strong>.</p>

                    <h3><strong>User Research</strong></h3>

                    <p>For user research, I interviewed a super user of the platform as well as a mid level user. Since two interviews would not
                      be quite enough, I also pulled some feedback from the StreetSmarts Facebook group that was provided when the user base was
                      asked which feature they'd like to see implemented first.</p>

                    <p>The interviews uncovered a bit more wants for the Fleet Tracker feature than originally estimated. Not only did users
                      want to be able to see cars that were available, they also wanted to be able to see accurate information about those rentals.
                       Upon looking at Turo, their tracker was based on a single car and you'd have to go into another car to see when that car was
                        available. The Turo platform only had dates and did not provide the users with information on times the car was available
                        booked. It seemed that had to be guessed and as such the user base wanted to be able to see the times their cars were
                        available as well.</p>

                    <p>The users wanted to stick with the idea of a calendar for the tracker but were not particular if it was a month calendar
                      view or a week view. In the same line of thought, the users were not particular to wether the calendar was text based or
                      more visual.</p>

                    <p>The last big thing that came up during the interviews was that the users were having problems where they would be on the
                      phone with a renter and the renter would book the wrong car. Since the interaction was being handled over the phone, the
                      user would not be able to direct the renter to the correct car in Turo and as such the renter would usually book the wrong
                      vehicle. Because of this, the user base needed a way to share the vehicle booking with their renter after the call or during
                      the call.</p>

                    <h3><strong>Initial Wireframes</strong></h3>

                    <p>Based on the user interviews; these were the inital wireframes. Since the users had no preference to a month calendar or a
                      week calendar, I designed both to see how they'd look.</p>

                    <img class="image-size" src="/img/streetsmarts/Fleet_Tracker_v1_Month.png" />
                    <img class="image-size" src="/img/streetsmarts/Fleet_Tracker_v1_Week.png" />

                    <h3><strong>Round 2 Wireframes</strong></h3>

                    <p>I conducted some breif usability tests on the inital wireframes with the users I interviewed and found that they wanted
                      to be able to see their booked cars in some cases as well. They also had no preference to either calendar view either and
                      so I decided to keep both as there was positive feedback for both. With those thoughts in mind I designed the second
                      version of the wireframes.</p>

                    <img class="image-size" src="/img/streetsmarts/Fleet Tracker_v2_Month.png" />
                    <img class="image-size" src="/img/streetsmarts/Fleet_Tracker_v2_Week.png" />

                    <h3><strong>Usability Testing</strong></h3>

                    <p>After presenting the wireframes to the executives, we decided that the second design was exactly what we were looking for.
                      Rather than conduct a short usability testing session, we took to the Facebook group to get their feedback.</p>

                    <p>It came out that there was a pocket of users whose issues we were not addressing. The design was easy to use but the
                      users didn't want to see available OR booked cars. They wanted the option to see avaialble AND booked cars. With that want
                       came the need to be able to tell the difference between the two.</p>

                    <p>This posed the issue that the month view was not going to look great with the possibility of 100+ cars being shown at
                      once, in the case of a super user. The decision was made to drop the month view and revisit it at a later date.</p>

                    <h3><strong>Final Wireframes</strong></h3>

                    <p>After the decision was made to drop month view, I created the final wireframes for the desktop application and the mobile
                       application.</p>
                    <img class="image-size" src="/img/streetsmarts/Fleet_Tracker_v3_Week.png" />
                    <img class="mobile-size" src="/img/streetsmarts/Mobile.png" />
                    <img class="mobile-size" src="/img/streetsmarts/Mobile_Menu.png" />

                    <h3><strong>Future Changes</strong></h3>

                    <p>In the future I plan to revisit the Fleet Tracker and design the month view in a way that will allow the user to decide
                      if they want to follow the original idea and be able to switch between the two views. This will require another set of
                      User Interviews to decide what information is the most important for such a calendar view so that we can cut down on
                      information not needed. Doing this would help declutter the month view and make it a stronger design.</p>

                    <p>Within the more options ellipses in the filters, the user is able to make a group and reogranize their filters. This is a
                      bit of a round about way to force groups to be available and as such will need to be redesigned once grouping is implemented
                       into the platform.</p>

                    <br />
                    <h4>Other Works</h4>
                    <router-link to='/works/venture'>
                        <img class="border-radius project-view" src="/img/ventureng.png" />
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ScrollToNav from "@/mixins/ScrollToNav.vue"
    export default {
        name: "street_smarts",
        mixins: [
            ScrollToNav
        ]
    }
</script>