<?php get_header();

  $about_title = get_field('about_title', get_the_id());
  $about_description = get_field('about_description', get_the_id());
  $contact_title = get_field('contact_title', get_the_id());
  $contact_phone = get_field('contact_phone', get_the_id());
  $contact_twitter = get_field('contact_twitter', get_the_id());
  $contact_linkedin = get_field('contact_linkedin', get_the_id());
  $contact_facebook = get_field('contact_facebook', get_the_id());
  $contact_google = get_field('contact_google', get_the_id());
  $contact_mail = get_field('contact_mail', get_the_id());

// $detect = new Mobile_Detect;
// $deviceType = ($detect->isMobile() ? ($detect->isTablet() ? 'tablet' : 'mobile') : 'computer');
?>
<div class="main">

<!-- aboutme section -->
  <div id="aboutme" class="largeHeader section aboutme <?php if($deviceType!='mobile'){ echo 'mobile';}?>">
    <?php
      if ( $deviceType == 'mobile' ) {
    ?>
    <?php } ?>

    <canvas id="demo-canvas" width="1810" height="905"></canvas>

    <div class="section--holder row">
      <div class="section--intro-holder">
        <h2 class="section--title"><?php echo $about_title; ?></h2>

        <div class="section--intro">
          <p><?php echo $about_description; ?></p>

          <div id="contact--holder" class="contact--holder">
            <p><?php echo $contact_title; ?></p>
            <ul class="contact--list">

              <?php if ($contact_mail) { ?>
                <li class="mail contact--listitem">
                  <a class="contact--link" href="#" title="mail" data-content="<?php echo $contact_mail; ?>">
                    <span class="contact--link-text seo">Mail address</span>
                    <i class="contact--link-icon icon-mail"></i>
                  </a>
                </li>
              <?php } ?>

              <?php if ($contact_phone) { ?>
                <li class="phone contact--listitem">
                  <a class="contact--link" href="#" id="phone" title="phone" data-content="<?php echo $contact_phone; ?>">
                    <span class="contact--link-text seo">Phone</span>
                    <i class="contact--link-icon icon-phone"></i>
                  </a>
                </li>
              <?php } ?>

              <?php if ($contact_twitter) { ?>
                <li class="twitter contact--listitem">
                  <a class="contact--link" href="<?php echo $contact_twitter; ?>" title="Twitter">
                    <span class="contact--link-text seo">Twitter</span>
                    <i class="contact--link-icon icon-twitter"></i>
                  </a>
                </li>
              <?php } ?>

              <?php if ($contact_linkedin) { ?>
                <li class="linkedin contact--listitem">
                  <a class="contact--link" href="<?php echo $contact_linkedin; ?>" title="Linkedin">
                    <span class="contact--link-text seo">Linkedin</span>
                    <i class="contact--link-icon icon-linkedin"></i>
                  </a>
                </li>
              <?php } ?>
            </ul>
          </div>

        </div>
      </div>
    </div>
  </div>
<!-- End of aboutme section -->



<!-- experience section -->
  <section id="experience" class="section experience">
    <?php get_template_part( 'includes/experience', 'content' ); ?>
  </section>
<!-- End of experience section -->



<!-- skills section -->
  <section id="skills" class="sectionBlock skills">
    <?php get_template_part( 'includes/skills', 'content' ); ?>
  </section>
<!-- End of skills section -->



<!-- education section -->
  <section id="education" class="sectionBlock education">
    <?php get_template_part( 'includes/education', 'content' ); ?>
  </section>
<!-- End of education section -->



<!-- hobbies section -->
  <section id="hobbies" class="sectionBlock hobbies">
    <?php get_template_part( 'includes/hobbies', 'content' ); ?>
  </section>
<!-- End of hobbies section -->



</div>

<?php
get_footer();