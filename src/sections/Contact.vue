<template>
  <div class="section">
    <div class="contact_section">
      <section id="contact" class="grid-container">
        <h2 class="section--title"><strong>{{title}}</strong></h2>

        <div class="grid-x align-center align-middle">
          <div class="contact_section--inner cell small-12 medium-10 large-9">

            <transition name="fade">
              <form v-if="!messageSending && !messageSent" class="text_form" v-on:submit="sendMail" method="post">
                <p class="text_form--headline">Leave me a message if you want to talk about a new project, or if you just want to say "hi".</p>
                <div class="quote--holder grid-x grid-padding-x align-center">
                  <div class="cell small-12">
                    Hi, <span class="no_break">my name is <input type="text" name="name" id="name" v-model="messageInfo.name" value="" required></span>
                      <span> and I'd like to talk to you </span><span class="no_break">about <select id="subject" name="subject" v-model="messageInfo.subject">
          						<option value="1" selected="">Anything</option>
          						<option value="2">Working together</option>
          						<option value="3">French food</option>
          					</select></span>
                  </div>
                  <div class="cell small-12">
                    <span>You can contact me at this </span><span class="no_break">address
                    <input type="email" name="email" id="email" value="" placeholder="" v-model="messageInfo.email" required></span>
                    <span> or eventually at this </span><span class="no_break">number
                    <input type="tel" name="phone" id="phone" value="" v-model="messageInfo.phone" placeholder=""></span>
                  </div>
                  <div class="cell small-12 medium-12">
                    <textarea name="message" id="message" rows="5" cols="50" required v-model="messageInfo.message" placeholder="Message">{{messageInfo.message}}</textarea>
                  </div>
                  <div class="robotic" id="pot">
                    <label>If you're human leave this blank:</label>
                    <input v-model="messageInfo.robotest" name="robotest" type="text" id="robotest" class="robotest" />
                  </div>

                  <i class="quote left"><svg class="icon icon-quotes-left"><use xlink:href="#icon-quotes-left"></use></svg></i>
                  <i class="quote right"><svg class="icon icon-quotes-right"><use xlink:href="#icon-quotes-right"></use></svg></i>
                </div>
                <div class="button_submit--holder">
                  <button type="submit" name="button" class="button_submit">Email me<svg class="icon icon-telegram"><use xlink:href="#icon-telegram"></use></svg></button>
                </div>
              </form>
            </transition>

            <transition name="fade">
              <div v-if="messageSending && !messageSent" class="spinner--holder">
                <div class="spinner">
                  <i class="icon"></i>
                  <i class="icon_small"></i>
                  <i class="icon_2"></i>
                </div>
              </div>
            </transition>

            <transition name="fade">
              <section v-if="!messageSending && messageSent" class="form_validation grid-x grid-padding-x align-center">
                <h3 class="form_validation--title cell small-12">Thank you !</h3>
                <p class="form_validation--message">Your message has been sent, I'll answer you shortly.</p>
              </section>
            </transition>
          </div>
        </div>
      </section>
    </div>

    <div class="sns_section grid-container">
      <section class="grid-x grid-padding-x align-center">
        <h3 class="sns_section--title cell small-12 medium-10"><strong>Follow me</strong></h3>
        <div class="cell small-12 medium-10">
          <ul class="sns_section--holder grid-x grid-padding-x align-left ">
            <li class="cell shrink">
              <a href="https://github.com/julian-printemps" class="sns_section--link" target="_blank" title="Github"><svg class="icon icon-github"><use xlink:href="#icon-github"></use></svg></a>
            </li>
            <li class="cell shrink">
              <a href="https://stackoverflow.com/users/6208659/j-printemps" class="sns_section--link" target="_blank" title="Stackoverflow"><svg class="icon icon-stackoverflow"><use xlink:href="#icon-stackoverflow"></use></svg></a>
            </li>
            <li class="cell shrink">
              <a href="https://twitter.com/Julian_Sama" class="sns_section--link" target="_blank" title="Twitter"><svg class="icon icon-twitter"><use xlink:href="#icon-twitter"></use></svg></a>
            </li>
            <li class="cell shrink">
              <a href="https://www.linkedin.com/in/julianspringaux/" class="sns_section--link" target="_blank" title="Linkedin"><svg class="icon icon-linkedin2"><use xlink:href="#icon-linkedin2"></use></svg></a>
            </li>
          </ul>
        </div>
        <div class="cell small-10">
          <div class="contact_info">
            <p><a href="mailto:julian.springaux@gmail.com" title="email"><svg class="icon icon-telegram"><use xlink:href="#icon-telegram"></use></svg>julian.springaux@gmail.com</a></p>
            <p><a href="tel:+8190-9834-3779" title="Phone number"><svg class="icon icon-phone"><use xlink:href="#icon-phone"></use></svg>+8190-9834-3779</a></p>
            <p><svg class="icon icon-location2"><use xlink:href="#icon-location2"></use></svg>Setagaya, Tokyo</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'contact-section',
  props: {
  },
  data () {
    return {
      title: 'Feel free to say hi',
      messageSending: false,
      messageSent: false,
      messageInfo: {
        robotest: '',
        message: '',
        name: '',
        email: '',
        subject: '',
        phone: ''
      }
    }
  },
  methods: {
    removeSpinner: function () {
      this.messageSending = false
      this.messageSent = true
    },
    sendMail: function (event) {
      event.preventDefault()
      this.messageSending = true

      let robotest = this.messageInfo.robotest
      let message = this.messageInfo.message
      let name = this.messageInfo.name
      let email = this.messageInfo.email
      let subject = this.messageInfo.subject
      let phone = this.messageInfo.phone

      let body = ''
      let subjectMessage = ''

      if (robotest === '') {
        subject = parseInt(subject)
        if (subject === 2) {
          subjectMessage = 'A new project'
        } else if (subject === 3) {
          subjectMessage = 'French food'
        } else {
          subjectMessage = 'Anything'
        }

        if (message !== '' && name !== '' && email !== '') {
          body = `Hi,\nMy name is ` + name + ` and I'd like to talk to you about ` + subjectMessage + `.\rYou can contact me at this address ` + email
          if (phone !== '') { body += ` or at this number ` + phone } body += '\r\r' + message
        }

        axios.post('https://murmuring-river-72491.herokuapp.com/api/email', {
          name: name,
          email: email,
          subject: subjectMessage,
          message: body
        })
        .then(response => {
          if (response.data === true) {
            window.setTimeout(this.removeSpinner, 250)
          }
        })
        .catch(e => {
          this.errors.push(e)
        })
      } else {
        console.log('Robot spotted!')
      }
    }
  }
}
</script>
