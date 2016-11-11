<div class="header--holder">
  <header role="header" class="header row align-bottom">

    <div class="columns shrink">
      <h1 class="site_title" itemscope itemtype="http://schema.org/Person">
        <a href="<?php echo home_url(); ?>" title="<?php bloginfo('title'); ?>" class="site_title--link">
          <strong class="site_title--name" itemprop="name">Julian Springaux</strong>
          <span class="site_title--jobtitle" itemprop="site_title--jobtitle">Web engineer</span>
        </a>
      </h1>
      <a href="<?php echo home_url(); ?>" title="<?php bloginfo('title'); ?>" class="logo-link">
        <div class="logo">
        <img src="<?php echo get_template_directory_uri(); ?>/images/logo.svg" alt="" /></div>
      </a>
    </div>

    <div class="columns">
      <div class="navigation--holder">
        <nav id="navigation" class="navigation">
          <ul class="navigation--list clearfix">
            <li class="navigation--listitem menu_lang">
              <?php wp_nav_menu(array('theme_location' => 'lang_menu')); ?>
            </li>
            <li class="navigation--listitem">
              <a href="<?php echo get_post_type_archive_link('portfolio'); ?>" class="navigation--link" title="Portfolio">
                <i class="navigation--icon fa fa-desktop" aria-hidden="true"></i>
                <span class="navigation--title">Portfolio</span>
              </a>
            </li>
            <li class="navigation--listitem">
              <a href="#interests" class="navigation--link">
                <i class="navigation--icon fa fa-cube" aria-hidden="true"></i>
                <span class="navigation--title">Interest</span>
              </a>
            </li>
            <li class="navigation--listitem">
              <a href="#education" class="navigation--link">
                <i class="navigation--icon fa fa-graduation-cap" aria-hidden="true"></i>
                <span class="navigation--title">Education</span>
              </a>
            </li>
            <li class="navigation--listitem">
              <a href="#skills" class="navigation--link">
                <i class="fa fa-cog"></i>
                <span class="navigation--title">Skills</span>
              </a>
            </li>
            <li class="navigation--listitem">
              <a href="#experience" class="navigation--link">
                <i class="navigation--icon fa fa-folder" aria-hidden="true"></i>
                <span class="navigation--title">Experience</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div class="navigation--button-holder" data-responsive-toggle="navigation" data-hide-for="large">
        <button id="navigation--button" type="button" name="button" data-toggle>
          <i class="navigation--menu-icon fa fa-bars"></i>
        </button>
      </div>
    </div>
  </header>
</div>
