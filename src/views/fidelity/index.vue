<template>
  <div id="fidelity">
    <div class="container-fluid" v-if='authenticated'>
      <div class="row">
        <div class="col-md-6 col-md-offset-3">
          <router-link class='logo-icon' to='/works/fidelity'><img class="border-radius" src="/img/FidelityLogo.svg" width="100%"/></router-link>
        </div>
      </div>
      <div class="row"  style='margin-top: 15px;'>
        <div class="col-md-6 col-md-offset-1 project-row">
          <div class='project'>
            <router-link to='/works/fidelity/redesign' class='project-box' style="background-image: url('/img/FidelityProject1.svg')"></router-link>
            <div>Compliance ReDesign</div>
          </div>

          <div class='project'>
            <router-link to='/works/fidelity/17a6' class='project-box' style="background-image: url('/img/FidelityProject2.svg')"></router-link>
            <div>17a6 Account Review</div>
          </div>
        </div>
        <div class="col-md-4 col-xs-10 col-xs-offset-1 col-md-offset-0" style="text-align:left; padding: 0px 0 20px;">
          I started at Fidelity in 2017 and worked on a wide variety of projects ranging from internal compliance applications to external client facing financial applications. My roles also varied widely from UX Designer to Design Lead. I did exploration, concepting, wireframing, prototyping and usability testing.
        </div>
      </div>
      <hr />
      <router-view />
    </div>
    <div v-else>
      <img class="border-radius" src="/img/FidelityIcon.svg" width="200px"/>
      <h3>This page is locked behind a password.</h3>
      <div>
        If you have the password to this page please enter it below. <br />
        <p>
          <small>You will only need to enter in the password once.</small>
        </p>
        <form style='width: 300px; display: inline-block;'>
          <div class="form-group">
            <div style='display: inline-block; text-align: left;'>
              <input type="password" class="form-control pw-form" v-model='passwordInput' />
              <small v-if='incorrectPw' id="emailHelp" class="form-text text-muted">Incorrect password.</small>
            </div>
            <button style='vertical-align: top;' class="btn btn-primary" v-on:click="submitPassword">Submit</button>
          </div>
        </form>

        <hr />

        if you would like to get the password, please contact me at: <br />
        <div class='contact-icons'>
          <a href="mailto:jessica.lee.wise@gmail.com"><span class="glyphicon glyphicon-envelope" aria-hidden="true"></span></a>
          <a href="tel:1-413-727-5977"><span class="glyphicon glyphicon-earphone" aria-hidden="true"></span></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    const HASH_CODE = 'ea2a4c7d6108caf08a820260ebbcc07a30260a2aeb80aad3e0bbaf1bfad352ef'

    import CryptoJS from 'crypto-js'
    import sha256 from 'crypto-js/sha256';
    import ScrollToNav from "@/mixins/ScrollToNav.vue"
    export default {
        name: "fidelity",
        mixins: [
            ScrollToNav
        ],
        created() {
          const storedToken = localStorage.getItem('token')
          if (storedToken) {
            const decrypted = CryptoJS.AES.decrypt(storedToken, HASH_CODE).toString();
            if (decrypted === HASH_CODE) {
              this.authenticated = true
            }
          }
        },
        data() {
          return {
            authenticated: false,
            passwordInput: null,
            incorrectPw: false
          }
        },
        methods: {
          submitPassword() {
            const encryptedPw = sha256(this.passwordInput)

            if (encryptedPw.toString() == HASH_CODE) {
              this.authenticated = true
              localStorage.setItem('token', CryptoJS.AES.encrypt(encryptedPw, HASH_CODE))
            } else {
              this.incorrectPw = true
            }
          }
        }
    }
</script>

<style lang="scss" scoped>
  #fidelity {
    .logo-icon {
      display: inline-block;
      max-width: 300px;
    }

    .pw-form {
      width: 200px;
      margin-right: 10px;
    }

    .project {
      display: inline-block;
    }

    .project-row {
      text-align: right;
      div {
        text-align: center;
      }
    }

    @media (max-width: 992px) {
      .project-row {
        text-align: center;
        padding-bottom: 10px;
        div {
          text-align: center;
        }
      }
    }

    .project-box {
      display: block;
      width: 150px;
      border: 3px solid transparent;
      height: 150px;
      margin: 0 10px 0 0;
      box-sizing: border-box;
      background-repeat: no-repeat;
      background-size: cover;

      -webkit-box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.4);
      -moz-box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.4);
      box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.4);

      &.router-link-active {
        border: 3px solid rgba(97, 26, 82, .5);
      }

      &:hover {
        border: 3px solid rgba(97, 26, 82, .5);
      }
    }
  }
</style>
