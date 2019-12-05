<template>
  <div class="section">
    <div class="contact_section">
      <section id="contact" class="grid-container">
        <h2 class="section--title">
          <strong>{{ title }}</strong>
        </h2>

        <div class="grid-x align-center align-middle">
          <div
            class="contact_section--inner cell small-12 medium-10 large-9"
          >
            <transition name="fade">
              <form
                v-if="!messageSending && !messageSent"
                class="text_form"
                method="post"
                @submit="sendMail"
              >
                <p class="text_form--headline">
                  Leave me a message if you want to talk about
                  a new project, or if you just want to say
                  "hi".
                </p>
                <div
                  class="quote--holder grid-x grid-padding-x align-center"
                >
                  <div class="cell small-12">
                    Hi,
                    <span class="no_break">
                      my name is
                      <input
                        id="name"
                        v-model="messageInfo.name"
                        type="text"
                        name="name"
                        value=""
                        required
                      ></span>

                    <span>
                      and I'd like to talk to you </span>
                    <span class="no_break">
                      about
                      <select
                        id="subject"
                        v-model="messageInfo.subject"
                        name="subject"
                      >
                        <option
                          value="1"
                          selected=""
                        >Anything</option>
                        <option
                          value="2"
                        >Working together</option>
                        <option
                          value="3"
                        >French food</option>
                      </select></span>
                  </div>
                  <div class="cell small-12">
                    <span>You can contact me at this </span><span
                      class="no_break"
                    >address
                      <input
                        id="email"
                        v-model="messageInfo.email"
                        type="email"
                        name="email"
                        value=""
                        placeholder=""
                        required
                      ></span>

                    <span> or eventually at this </span><span
                      class="no_break"
                    >number
                      <input
                        id="phone"
                        v-model="messageInfo.phone"
                        type="tel"
                        name="phone"
                        value=""
                        placeholder=""
                      ></span>
                  </div>
                  <div class="cell small-12 medium-12">
                    <textarea
                      id="message"
                      v-model="messageInfo.message"
                      name="message"
                      rows="5"
                      cols="50"
                      required
                      placeholder="Message"
                    />
                  </div>
                  <div id="pot" class="robotic">
                    <label>If you're human leave this
                      blank:</label>
                    <input
                      id="robotest"
                      v-model="messageInfo.robotest"
                      name="robotest"
                      type="text"
                      class="robotest"
                    >
                  </div>

                  <i
                    class="quote left"
                  ><svg class="icon icon-quotes-left">
                    <use
                      xlink:href="#icon-quotes-left"
                    /></svg></i>
                  <i
                    class="quote right"
                  ><svg class="icon icon-quotes-right">
                    <use
                      xlink:href="#icon-quotes-right"
                    /></svg></i>
                </div>
                <div class="button_submit--holder">
                  <button
                    type="submit"
                    name="button"
                    class="button_submit"
                  >
                    Email me<svg class="icon icon-telegram">
                      <use xlink:href="#icon-telegram" />
                    </svg>
                  </button>
                </div>
              </form>
            </transition>

            <transition name="fade">
              <div
                v-if="messageSending && !messageSent"
                class="spinner--holder"
              >
                <div class="spinner">
                  <i class="icon" />
                  <i class="icon_small" />
                  <i class="icon_2" />
                </div>
              </div>
            </transition>

            <transition name="fade">
              <section
                v-if="!messageSending && messageSent"
                class="form_validation grid-x grid-padding-x align-center"
              >
                <h3
                  class="form_validation--title cell small-12"
                >
                  Thank you !
                </h3>
                <p class="form_validation--message">
                  Your message has been sent, I'll answer you
                  shortly.
                </p>
              </section>
            </transition>
          </div>
        </div>
      </section>
    </div>

    <div class="sns_section grid-container">
      <section class="grid-x grid-padding-x align-center">
        <h3 class="sns_section--title cell small-12 medium-10">
          <strong>Follow me</strong>
        </h3>
        <div class="cell small-12 medium-10">
          <ul
            class="sns_section--holder grid-x grid-padding-x align-left "
          >
            <li class="cell shrink">
              <a
                href="https://github.com/julian-printemps"
                class="sns_section--link"
                target="_blank"
                title="Github"
              ><svg class="icon icon-github">
                <use xlink:href="#icon-github" /></svg></a>
            </li>
            <li class="cell shrink">
              <a
                href="https://stackoverflow.com/users/6208659/j-printemps"
                class="sns_section--link"
                target="_blank"
                title="Stackoverflow"
              ><svg class="icon icon-stackoverflow">
                <use
                  xlink:href="#icon-stackoverflow"
                /></svg></a>
            </li>
            <li class="cell shrink">
              <a
                href="https://twitter.com/Julian_Sama"
                class="sns_section--link"
                target="_blank"
                title="Twitter"
              ><svg class="icon icon-twitter">
                <use xlink:href="#icon-twitter" /></svg></a>
            </li>
            <li class="cell shrink">
              <a
                href="https://www.linkedin.com/in/julianspringaux/"
                class="sns_section--link"
                target="_blank"
                title="Linkedin"
              ><svg class="icon icon-linkedin2">
                <use xlink:href="#icon-linkedin2" /></svg></a>
            </li>
          </ul>
        </div>
        <div class="cell small-10">
          <div class="contact_info">
            <p>
              <a
                href="mailto:julian.springaux@gmail.com"
                title="email"
              ><svg class="icon icon-telegram">
                <use xlink:href="#icon-telegram" /></svg>julian.springaux@gmail.com</a>
            </p>
            <p>
              <a
                href="tel:+8190-9834-3779"
                title="Phone number"
              ><svg class="icon icon-phone">
                <use xlink:href="#icon-phone" /></svg>+8190-9834-3779</a>
            </p>
            <p>
              <svg class="icon icon-location2">
                <use xlink:href="#icon-location2" /></svg>Setagaya, Tokyo
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Contact extends Vue {
    title: string = 'Feel free to say hi';
    messageSending: boolean = false;
    messageSent: boolean = false;
    messageInfo: any = {
      robotest: '',
      message: '',
      name: '',
      email: '',
      subject: '',
      phone: ''
    };

    removeSpinner () {
      this.messageSending = false
      this.messageSent = true
    }

    sendMail (event: any) {
      event.preventDefault()
      this.messageSending = true

      const robotest = this.messageInfo.robotest
      const message = this.messageInfo.message
      const name = this.messageInfo.name
      const email = this.messageInfo.email
      let subject = this.messageInfo.subject
      const phone = this.messageInfo.phone

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
          body =
                    `Hi,<br><br>My name is ` +
                    name +
                    ` and I'd like to talk to you about ` +
                    subjectMessage +
                    `.\rYou can contact me at this address <a href="mailto:` +
                    email +
                    `">` +
                    email +
                    `</a>`
          if (phone !== '') {
            body +=
                        ` or at this number <a href="tel:` +
                        phone +
                        `">` +
                        phone +
                        `</a>`
          }
          body += '<br><br>' + message
        }

        this.$axios
          .$post('https://hidden-basin-66222.herokuapp.com/api/email', {
            name,
            email,
            subject: subjectMessage,
            message: body
          })
          .then((res: any) => {
            if (res.data === true) {
              window.setTimeout(this.removeSpinner, 250)
            }
          })
          .catch((e: any) => {
            console.error(e)
          })
      } else {
        console.error('Robot spotted!')
      }
    }
}
</script>
