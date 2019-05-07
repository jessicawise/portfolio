<template>
  <div id="streetsmarts">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6 col-md-offset-3 align-left">
          <h2><strong>Automated Messaging Organization Exploration</strong></h2>

          <div id='ss-m-head' class="opac-0" :class="{ 'animated fadeInUp': scrollY > 495 || isApplied('ss-m-head') }">

            <div class="row">
              <div class='col-md-7'>
                <img class="image-size" src="/img/streetsmarts/automatedmessaging/Default.png" />
                <img class="image-size" src="/img/streetsmarts/automatedmessaging/Default_Message_Enabled.png" />

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
                <br />
                <br />
                
              </div>
              <div class='row'>
                <div class='col-md-12'>
                  <h3><strong>The Overview</strong></h3>
                <p>After the Fleet Tracker project the problem was that the foundation of the platform was not enitrely
                  sturdy. A lot of the platform was created without a UX Designer involved and so it was weighed down
                  by things essentially stacked on top of each other. For users who used the platform since the beginning,
                  this was no problem. However, new users were joining and quitting very shortly thereafter because they
                  could not grasp how to work in the platform.
                </p>
                <p>Rather than continue to stack features on this foundation, it was decided that I should start exploring
                    ways to "clean up" some of the already existing features and make them more new user friendly. With the
                    exploration, there are not many iterations of designs because I was only taking what was there and shifting
                    it around or trying out new ways of displaying information. Many of the things explored would not be
                    tested until there was time to implement them or until they would be rolled out.
                </p>
                <p>For one exploration I was asked to try my hand at the Automated Messaging system. The system gave users
                  a way to set up messages that would automatically be sent to their renters after something happened. Some examples
                  would be a confirmation message after a car was rented or a thank you message after the rental was returned.
                </p>
                </div>
                </div>
            </div>
          </div>

          <div id='ss-m-1' class="opac-0" :class="{ 'animated fadeInUp': scrollY > 1358 || isApplied('ss-m-1') }">

            <div class="row">
              <div class='col-md-5'>
                <h3><strong>How It Started..</strong></h3>
                <p>The current layout for the automated messages seemed okay at first glance. However, it quickly became
                  clear that was not the case. Immidiately, the problem is that a user could see that the messages were
                  not enabled by the red message strike out icon. However, there is no clear way to see how to enable
                  the message. Clicking on the icon would be the first presumption of doing that but that functionality
                  was not there. The user would have to open the message which would display ALL options for any message
                  to be created. This would lead to the next problem: too many options that did not have anything to do
                  with simple messages. After looking at all of the options then the user could enable the message at the
                  bottom of the template.
                </p>
                
              </div>
              <div class='col-md-7'>
                <img class="image-size" src="/img/streetsmarts/automatedmessaging/Automated_Messaging_Step_3.png" />
                <img class="image-size" src="/img/streetsmarts/automatedmessaging/Automated_Messaging_Step_3.png" />
              </div>
              <div class='row'>
                <div class='col-md-12'>
                  <p>Creating a new message would display the same template as above but none of the fields would be filled
                  in. This was actually where StreetSmarts would lose most of its new users. Automated Messaging is a huge
                  time saver for users who had a lot of cars that they managed. However, the time savings is very small when
                  they have to go in and try to set up the messaging in the system above. Many decided to use other products
                  or just continuing to copy and paste messages from a word document.
                </p>
                </div>
                </div>
            </div>
          </div>

          <div id='ss-m-sug' class="opac-0" :class="{ 'animated fadeInUp': scrollY > 2003 || isApplied('ss-m-sug') }">

            <div class="row">
              <div class='col-md-7'>
                <img class="image-size" src="/img/streetsmarts/automatedmessaging/Default.png" />
                <img class="image-size" src="/img/streetsmarts/automatedmessaging/Default_Message_Enabled.png" />
                <img class="image-size" src="/img/streetsmarts/automatedmessaging/Default_Template_Select.png" />
                <img class="image-size" src="/img/streetsmarts/automatedmessaging/Message_Template_Confirmation.png" />
              </div>
              <div class='col-md-5'>
                <h3><strong>Suggested Changes</strong></h3>
                <p>When exploring a new way to lay out the Automated Messaging page, my suggestion was to keep it simple.
                  Give the users a way to enable their messages without having to open them first. I also suggested a change
                  in icon to something users are more used to seeing when it comes to messaging.
                </p>
                <p>I also opted to move creating a new message to the top of the page rather than the bottom. This would allow
                  users to easily access the ability to create a new message. With that I suggested adding in templates rather than
                  making users set up messages by themselves. This would help new users who didn't know what type of messages they
                  needed as well as help veteran users add new messages more quickly. Finally, I explored and suggested removing any
                  fields from templates that were not realative to their respective template. This would limit the scrolling
                  of the page when the message was being worked on as well as eliminate confusion on what fields should be filled
                  in over other fields.
                </p>
              </div>
            </div>
          </div>

          <div id='ss-m-final' class="opac-0" :class="{ 'animated fadeInUp': scrollY > 2715 || isApplied('ss-m-final') }">

            <h3><strong>What I Would Change</strong></h3>
            <p>
            <ul>
              <li>
                Change the add a template button. In the exploration wireframes it does represent itself as a dropdown
                but would possibly be better as just a button. The idea would then be to take the user through a
                step by step process of creating a new message. This would need to be tested heavily first to see if
                a step by step process would be more confusing or troublesome to users.
              </li>
              <li>Offer prefilled templates. This would allow even more time savings for users. However, would adding
                prefilled templates be a different dropdown or button than the one in the wireframes? An arguement
                can also be made to just have the templates already prefilled and allow users to just change them.
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
      name: "street_smarts_automated",
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