<template>
  <div id="reemploy">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6 col-md-offset-3 align-left">
          <h3><strong>What is ReEmploy?</strong></h3>

          <p>ReEmploy a work in progress web application to help structure the day of unemployed persons to keep them active and working towards 
          new opportunities.</p>

          <p>The application will help them maintain their unemployment by giving them daily jobs to apply for. It will also help them keep to a 
          schedule and keep track of interviews or other unemployment related activities that they have going on each day. The application will 
          also have an activity tracker to help keep track of jobs applied for, interviews attended or workshops attended to assist with tracking 
          information necessary to request unemployment each week.</p>

          <h3><strong>My Role</strong></h3>

          <p>For ReEmploy, I am the User Researcher, UX Designer, and UX Developer. I conducted basic research to figure out who our audience would be and
          grabbed statistics based on Massachusetts unemployement rates to start. For designing I use Sketch, InvisionApp and resources for Material
          UI. The development is being done with Bootstrap, Material UI, Vuetify and VueJS.</p>

          <h3><strong>User Research</strong></h3>

          <p>During research, we were looking for treads on the percentage of people unemployed and the length of time (in weeks) that they’re 
          unemployed for.</p>

          <p>We found that as of Februrary 2018, 4.1% of adult Americans are on unemployment. That equates to approximiately 10 million people who 
          are claiming unemployment. The average amount of time (in weeks) a person claims unemployment as of Februrary 2018 is 22.9 weeks. The 
          median amount of time is 9.3 weeks. We are focused on the median of weeks claiming unemployment because we are interested in the quantity
           of people unemployed. We also suspect that the values between the third quartile and the maximum are heavily skewing the average.</p>

          <p>For the start of the application, we chose to focus primarily on the state of Massachusetts as it is where we are located. There are plans 
          further down the road to support the application nationwide. With that said, we found that in Massachusetts there are 127,600 unemployed 
          adults. This equates to a 3.5% unemployment rate for the state for Februrary 2018. We were unable to locate information for the state to say 
          how long (time in weeks) an individual claimed unemployment.</p>

          <p>What we realize is that the unemployment rate has dropped nationwide since 2013. This isn’t a bad thing for us as the point of the 
          application is not to keep people unemployed. We are looking to help continue to drive down the unemployment rate by catching users who 
          are having trouble finding jobs but are qualified for them. This will overall assist states with the cost of unemployment.</p>

          <h4><strong>Sources</strong></h4>
          <a href="http://worldpopulationreview.com/countries/united-states-population/" target="_blank">United States Population</a>
          <br />
          <a href="http://www.ncsl.org/research/labor-and-employment/national-employment-monthly-update.aspx" target="_blank">National Employment Monthly Update</a>
          <br />
          <a href="https://www.deptofnumbers.com/unemployment/duration/" target="_blank">Unemployment Duration</a>
          <br />
          <a href="https://www.bls.gov/eag/eag.ma.htm" target="_blank">Economy at a Glance - Massachusetts</a>

          <h3><strong>User Flow Version 1</strong></h3>
          
         <img class="image-size" src="/img/reemploy/ReEmplow Flow V1.png" />

        <h3><strong>First Iteration Wireframes</strong></h3>

          <img class="image-size" src="/img/reemploy/HighExample/Opportunities Page.png"/>
          <img class="image-size" src="/img/reemploy/HighExample/Opportunities Page High.png" />

          <h3><strong>Next steps</strong></h3>

          <p>Usability testing! With no eyes on the wireframes yet, I would be getting way ahead of myself if I kept designing the whole application
            without taking some time to make sure what I have so far actually works.
          </p>

          <p>Implementing Material UI and Vuetify into the wireframes. This will help give the application a sense of brand, which it is sorely
            lacking in the black and white wireframes</p>

          <p>Iterate. Iterate. Iterate. My favorite step, believe it or not! I love getting feedback from usability tests and seeing how the product
            morphs based on user feedback.</p>

          <h3><strong>Git Hub Repo</strong></h3>

          <p>While I continue to design ReEmploy, you can check out my design progress in the <a href="https://github.com/jessicawise/reemploy">Github Repo!</a>
          There are a ton of goodies there as well, like technical documentation for myself and my engineer! The documentation was
          created in the effort to bridge the gap between design and engineering and make actually coding out the application easier.

          Another repo to check out is the actual <a href="https://github.com/cjennison/re-employ">ReEmploy client</a>. You'll be able to see the
          progress I'm making on learning VueJS with my engineer!</p>
          <br />

          <h4>Other Works</h4>
          <router-link to='/works/streetsmarts'>
        <img class="border-radius project-view" src="/img/StreetSmarts.png" />
      </router-link>
      <router-link to='/works/venture'>
        <img class="border-radius project-view" src="/img/ventureng.png" />
      </router-link>
          </div>
        </div>
    </div>
  </div>
</template>
