<template>
  <div id="fidelity">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-6 col-lg-offset-3 align-left">
          <h2><strong>Compliance Website Redesign - Admin View</strong></h2>
          <div id='fi-r-head' class="opac-0 m-b-25" :class="{ 'animated fadeInUp': scrollY > 495 || isApplied('fi-r-head') }">

            <div class="row">
              <div class='col-md-7'>
                <img class="image-size" src="/img/FidelityStuff/Redesign/ReDesign2.png"/>
                <img class="image-size" src="/img/FidelityStuff/Redesign/ReDesign2_Sidebar2.png"/>
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
                <h3><strong>The Overview</strong></h3>
                <p>The compliance website is an internal website for Fidelity employees to disclose different types of information to ensure they are compliant with various laws. These disclosures range from if an employee worked another job at another company and what that work entailed to what an employee donated to a political campaign.</p>
                <p>All disclosures were sent to the employee's manager for a preliminary approval and then sent further to the compliance admin office. The job of the admins was to see who the employee was and wether their disclosure was okay or not. The entire process was originally completed with paper forms. The compliance website was created first to get rid of the forms and then second to make the process easier for both the employees and the admins.</p>
                <p>For this project, I started with the political contribution flow. Out of all of the disclosures, it was the most complicated workflow for the admins. It was also the disclosure that was the most "done". The definition of done was that it was live for both employees and admins but only checked off the barest minimum of requirements.</p>

              </div>
              <div class='row'>
                <div class='col-md-12'>
                    </div>
                </div>
            </div>
          </div>

          <div id='fi-r-in-begin' class="opac-0 m-b-25" :class="{ 'animated fadeInUp': scrollY > 1355 || isApplied('fi-r-in-begin') }">
            <div class="row">
              <div class='col-md-5'>
                <h3><strong>In the Beginning...</strong></h3>
                <br />

                <p>However, only the first part was done well. The employee side was great and everyone was happy they didn't have to try to fill out forms and keep track of them as they moved through the system.</p>
                <p>Admins were not feeling the same. Digitizing forms for employees was the easiest step. Displaying the employee input in an organized fashion for admins was not. The forms, even when digitized, could potentially contain up to hundreds of input points that an admin had to review. Depending on the disclosure, the admin then had to complete other steps like complete a checklist or check an employee's previous disclosures.</p>

              </div>
              <div class='col-md-7'>
                <img class="image-size" src="/img/FidelityStuff/Redesign/DNA_PCA_New_1stPL_P2P_EX.png" />
              </div>
              <div class='row'>
                <div class='col-md-12'>
                    <p>The main problem with making this process easier was because compliance is such a robust topic, legal teams and business teams were driving what the design should look like. At the same time there was little to no user testing done. With that said, the business team was hearing the complaints from the admins and it was decided that we needed to change the current design. However, it was also decided that the development team wanted to avoid a redesign as much as possible.</p>
                </div>
                </div>
            </div>
          </div>

          <div id='fi-r-rehash' class="opac-0 m-b-25" :class="{ 'animated fadeInUp': scrollY > 2015 || isApplied('fi-r-rehash') }">
            <div class="row">
              <div class='col-md-7'>
                <img class="image-size" src="/img/FidelityStuff/Redesign/ReHash1.png" />
                <img class="image-size" src="/img/FidelityStuff/Redesign/ReHash2.png" />
              </div>
            <br />
            <br />
              <div class='col-md-5'>
                <h3><strong>The Rehash Route</strong></h3>
                <br />

                <p>So the first step was a rehash of the current design. Could the information be laid out in a way in the current design that would help the admins out more? I also had other requirements from the business to follow as well: limit page scrolling and don't cut out any data points.</p>
                <p>The rehashed designs didn't go over well when presented to the admins. They had wanted something different than what they had now. Sure, the organization was better but the workflow was still a mess and that, at the core, was the real problem.</p>
              </div>
            </div>

          </div>

          <div id='fi-r-section-1' class="opac-0 m-b-25" :class="{ 'animated fadeInUp': scrollY > 2977 || isApplied('fi-r-section-1') }">

            <div class="row">
              <div class='col-md-5'>
                <h3><strong>Redesign Round 1</strong></h3>
                <br />
                <p>With the first round of designs I tried a couple different things:
                <ul>
                  <li>Keep some elements as they were in the previous design but make them more organized. Similar to the rehash but I put things that weren't previously together in the same spots if they seemed to be part of the same information block.</li>
                  <li>Use scrolling but use it in a way that it didn't seem tedious. This is what brought about the jump links in the first design.</li>
                  <li>Moving unimportant information to a side panel. This would clean up much needed space for other more important components.</li>
                  <li>Unhiding steps of the userflow that were previously only accessable behind links or would open up in other windows. The idea was that if the admin needed to perform this step then we shouldn't make it hard on them.</li>
                </ul>
                </p>
                <p>Users liked the second design with the full page side bar. They agreed that putting unimportant information in the side bar would be great. If they ended up needing it then they knew where to get it and how to get rid of it.</p>
                <p>Pulling out the hidden user flow steps was a big hit as well. However, there were things I thought unimportant and had shoved in the side bar that the admins would need access to. Those would need to be pulled out and added to the main view but at the same time this would use up space that just wasn't there.</p>

              </div>
              <div class='col-md-7'>
                <img class="image-size" src="/img/FidelityStuff/Redesign/ReDesign1.png" />
                <img class="image-size" src="/img/FidelityStuff/Redesign/ReDesign1.2.png" />
              </div>
            </div>

          </div>


          <div id='fi-r-section-2' class="opac-0 m-b-25" :class="{ 'animated fadeInUp': scrollY > 4418 || isApplied('fi-r-section-2') }">

            <div class="row">
              <div class='col-md-7'>
                <img class="image-size" src="/img/FidelityStuff/Redesign/ReDesign2Version1.png" />
                <img class="image-size" src="/img/FidelityStuff/Redesign/ReDesign2_CandidateNewCandidate.png" />
              </div>
              <div class='col-md-5'>
                <h3><strong>Redesign Round 2</strong></h3>
                <p>It turned out there was a bit more space I was able to eek out after scrunching some data together. There were some issues with the old styling of buttons that caused them to bump up against other data points because they just weren't meant to be used in smaller spaces.</p>
                <p>The other issue was adding a candidate. Normally, that process was done in a separate window and I was now trying to add it in the same view. The admins wanted to limit having multiple tabs or windows open if possible. I took a shot at it and I don't think it looked great. Not only that but development let me know there was no way they'd be able to program a card that looked like a square stacked on a rectangle without it being obvious that it was exactly that.</p>
              </div>
            </div>

          </div>

          <div id='fi-r-final' class="opac-0 m-b-25" :class="{ 'animated fadeInUp': scrollY > 5566 || isApplied('fi-r-final') }">

            <div class="row">
              <div class='col-md-5'>
                <h3><strong>Final Designs</strong></h3>
                <br />
                <p>Not a whole lot changed at this point. There was some tightening up of colors as the bright green didn't mesh well with the white text. The button issue was solved mostly by switching to ghost button styling.</p>
                <p>A lot of getting to the final designs was working with the development team and making sure they could make the side panel and the card as they were designed. We came to the agreement that we could do inline editing to prevent having to make oddly shaped cards or opening the flow in another window. We did learn that the adding of a candidate would never happen from this admin screen and were able to remove that functionality.</p>
                <p>The last thing that changed was that we made it so the admin could make their disposition decision at any point during scrolling by using a sticky footer. This wasn't something that cmae up in our user feedback but it was something they ended up liking more than we expected.</p>

              </div>
              <div class='col-md-7'>
                <img class="image-size" src="/img/FidelityStuff/Redesign/ReDesign2.png" />
                <img class="image-size" src="/img/FidelityStuff/Redesign/ReDesign2_Sidebar2.png" />
              </div>
            </div>
             <div class='row'>
                <div class='col-md-12'>
                    <h3><strong>What I Learned</strong></h3>
                    <p>
                    <ul>
                    <li>Always get users invovled. Before I joined, the project was run on assumptions and what the developers and business thought was most important.</li>
                    <li>Work with the development team. There was a lot of "no you can't do that" or "we don't have the technology for that" at the start but it was possible to make compromises when I was able to help find alternative solutions.</li>
                    <li>Compliance disclosures are not just a straight happy path. As much as I charted out the happy path, there would just be too many instances where the happy path would never be achieveable.</li>
                    </ul>
                    </p>
                    <h3><strong>What I Would Change</strong></h3>
                    <p>
                    <ul>
                    <li>A longer time frame in which to complete the redesign. I was able to get out a MVP in the two weeks but there were many points of the flow that we were missing and still needed to work out.</li>
                    <li>User feedback sooner. A lot of time could've been saved in the process if we had done user research earlier.</li>
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
  name: "fidelity_project_1",
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
