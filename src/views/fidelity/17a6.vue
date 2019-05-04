<template>
  <div id="fidelity">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6 col-md-offset-3 align-left">
          <h2><strong>17a6 Project - Admin Account Review</strong></h2>

          <div id='fi-17-head' class="opac-0" :class="{ 'animated fadeInUp': scrollY > 495 || isApplied('fi-17-head') }">

            <div class="row">
              <div class='col-md-7'>
                <img class="image-size" src="/img/FidelityStuff/HoldingPage/HoldingPageEditedReviewed.png" />
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
                Sketch and Invision
                <br />
                <br />
                <strong>Time Constraint</strong>
                <br />
                2 weeks
                <h3><strong>The Overview</strong></h3>
                <p>The 17a6 project addresses the need for checks and balances in regards to investments. Admins would compare previous investment statements to current investment statements to ensure an employee is not involved in insider trading. A more detailed description of 17a6 can be found here https://www.sec.gov/rules/final/ic-25888.htm</p>
                <p>17a6 invovles various types of admins who have certain levels of access and slightly different workflows. For the purpose of this case study I will be showing the normal admin account review.</p>
              </div>
            </div>

          </div>

          <div id='fi-17-flow' class="opac-0" :class="{ 'animated fadeInUp': scrollY > 1075 || isApplied('fi-17-flow') }">

            <div class="row">
              <div class='col-md-5'>
                <h3><strong>Basic User Flow</strong></h3>
                <p>I was originally provided an excel spreadsheet that detailed two different types of admins and the various tasks they could perform and where. There was a lot of extra information not needed and was too busy to try and reference back to easily. I created this quick diagram to compare with the development and business teams to make sure we were tackling the core needs and not getting stuck in the weeds.</p>
                <p>This flow only looked at the experience as a whole. It was later decided that a lot of the functionality requested would not be able to be done for a MVP release. Some functionality was also later decided not to be needed on certain pages and a lot of stuff ended up being moved around.</p>
              </div>
              <div class='col-md-7'>
                [Basic User Flow Diagram]
              </div>
            </div>
          </div>

          <div id='fi-17-1' class="opac-0" :class="{ 'animated fadeInUp': scrollY > 1461 || isApplied('fi-17-1') }">
            <div class="row">
              <div class='col-md-7'>
                <img class="image-size" src="/img/FidelityStuff/HoldingPage/HoldingPage1.png" />
                <img class="image-size" src="/img/FidelityStuff/HoldingPage/HoldingPage2.png" />
                <img class="image-size" src="/img/FidelityStuff/HoldingPage/HoldingPage3.png" />
              </div>
              <div class='col-md-5'>
                <h3><strong>Round 1 Designs</strong></h3>
                <p>The 17a6 project kicked off in the middle of the redesign project so there was a huge push to use the new components created in the redesign. The idea here was similar to the redesign in that the business wanted to avoid scrolling but they wanted to see nearly all data points needed for an account. At this point, those data points weren't completely decided as of yet so I had to wing it on figuring out what information was most important.</p>
                <p>The users wanted to stray away from the use of tables as the current tables they had were old technology and could not function in the way they wanted. However, the development team stated that they could not use any of the designs with card components due to technology limitations. In the end the users agreed to the use of a table if and only if it could be designed and developed as close to their needs as possible.</p>
              </div>
            </div>
          </div>

          <div id='fi-17-2' class="opac-0" :class="{ 'animated fadeInUp': scrollY > 2201 || isApplied('fi-17-2') }">

            <div class="row">
              <div class='col-md-5'>
                <h3><strong>Round 2 Designs</strong></h3>
                <p>Those needs weren't entirely easy to make. The requirements changed almost every meeting. One of the core requirements were that the users needed a way to indicate that they had "okay'd" a line item in an account. The reason for this was because sometimes an account could have hundreds upon hundreds of line items and because of that a user may not finish reviewing an account that day. When they came back to the account they needed to know that they were already party way done and didn't have to start over.</p>
                <p>With these designs I provided a couple different ways to use the statusing in order to find accounts that hadn't been reviewed yet. A search for the table was introduced so that any accounts outside of the search parameters would not be shown on the table. Another way to allow the user to check over statuses quickly was allowing the ability to click on the headers and change the ordering of the table. This way, say for example, the user wanted to only have their not completed accounts at the top, they could click the header and change the ordering.</p>
                <p>The only other two core requirements were the ability to comment on a line item and the ability to edit a line item in line. A lot of 17a6 was manual work and the users had to correct line items if they did not match up to the statements that were provided. At this point the requirement of editing inline had not been completely solidified. It still needed to be decided if the user could edit the whole line item or just part of it.</p>
                <p>Users prefered the third design. The only issue with it was that there were a lot of icons at the end of a row. We needed to determine a way to keep the functionality of the icons but remove them from the end of the row.</p>
              </div>
              <div class='col-md-7'>
                <img class="image-size" src="/img/FidelityStuff/HoldingPage/HoldingPageExample1.png" />
                <img class="image-size" src="/img/FidelityStuff/HoldingPage/HoldingPageExample2.png" />
                [Add missing third design version]
              </div>
            </div>
          </div>

          <div id='fi-17-final' class="opac-0" :class="{ 'animated fadeInUp': scrollY > 3079 || isApplied('fi-17-final') }">

            <div class="row">
              <div class='col-md-7'>
                <img class="image-size" src="/img/FidelityStuff/HoldingPage/HoldingPageEditedReviewed.png" />
                [Add inline editing wireframe]
              </div>
              <div class='col-md-5'>
                <h3><strong>Final Designs</strong></h3>
                <p>An additional requirement was added on at this point. The business stated that there needed to be an action/audit history showing what steps someone had taken on an account. I added it in but then it was being reconsidered if it was as important as the business thought.</p>
                <p>I worked with the development team to add in functionality without the need for icons. We were able to decide that the editing of a line item could be done by double clicking on one of the columns within the line item. This would allow the user to edit the information they had the permissions to change.</p>
                <p>At the end of the two weeks, unfortunately, the project had to be put on hold because requirements were changing too often. The users were happy with the idea of the look and feel of how they would go about their work using the redesign components and the table for confirming line items in an account. The issue ended up being that there were so many situational things that could happen that the users wouldn't remember functionality they needed until they came across it again.</p>
                <h3><strong>What I Learned</strong></h3>
                <p>
                <ul>
                  <li>Technology restrictions need to be confrimed early. I thought the development team was using a more recent version of Angular when in reality they were several version behind. A lot of the components I was trying to introduce was from the recent Angular libraries but couldn't be coded in the older versions.</li>
                  <li>Make sure to be included in conversations with the users and the business. There was a lot of he said she said and I'd more often than not get all of the information needed. As such I had to speculate on some requirements and make multiple versions of designs to account for if I wasn't right.</li>
                </ul>
                </p>
                <h3><strong>What I Would Change</strong></h3>
                <p>
                  <ul>
                    <li>Not starting with the big picture. MVP requirements should've been determined shortly after the big picture was decided. This would've prevented requirement changes every meeting.</li>
                    <li>More frequent check-ins. We were not meeting for days at a time and in those days the users were finding out more things they needed. This would mean the designs I would show would already been incorrect and that was time wasted in the long run.</li>
                    <li>An alternative to more frequent check-ins would be a recording of the day to day of the user over the span of a couple days. This would've helped address most if not all edge cases of reviewing an account. This would've helped with both the MVP requirements and the ever changing list of things that needed to be added in.</li>
                  </ul>
                </p>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import TrackScroll from '@/mixins/TrackScroll.vue'
  import ScrollToNav from "@/mixins/ScrollToNav.vue";
  export default {
    name: "fidelity_project_2",
    mixins: [ScrollToNav, TrackScroll],
    methods: {
      isApplied(id) {
          const el = document.getElementById(id)
          if (!el) return;
          if (el.classList.contains('animated')) {
              return true;
          }
      }
    }
  };
</script>


<style lang="scss">
    #fidelity {

        .opac-0 {
            opacity: 0;

            &.animated {
                opacity: 1;
                transition: opacity .5s;
            }
        }
    }
</style>
