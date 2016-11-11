<!doctype html>
<html class="no-js" lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php bloginfo('title'); ?></title>

    <link rel="apple-touch-icon" sizes="57x57" href="<?php echo get_template_directory_uri(); ?>/images/favicon/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="<?php echo get_template_directory_uri(); ?>/images/favicon/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="<?php echo get_template_directory_uri(); ?>/images/favicon/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="<?php echo get_template_directory_uri(); ?>/images/favicon/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="<?php echo get_template_directory_uri(); ?>/images/favicon/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="<?php echo get_template_directory_uri(); ?>/images/favicon/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="<?php echo get_template_directory_uri(); ?>/images/favicon/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="<?php echo get_template_directory_uri(); ?>/images/favicon/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="<?php echo get_template_directory_uri(); ?>/images/favicon/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192"  href="<?php echo get_template_directory_uri(); ?>/images/favicon/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="<?php echo get_template_directory_uri(); ?>/images/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="<?php echo get_template_directory_uri(); ?>/images/favicon/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="<?php echo get_template_directory_uri(); ?>/images/favicon/favicon-16x16.png">
    <link rel="manifest" href="<?php echo get_template_directory_uri(); ?>/images/favicon/manifest.json">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="<?php echo get_template_directory_uri(); ?>/images/favicon/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">

    <!--
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/<?php echo julian_getCssAssets(); ?>">
    -->
    <link rel="stylesheet" href="http://localhost:8888/Julian-code/julian-printemps/src/css/app.css">

    <link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Open+Sans:400,400italic,600,600italic">

    <?php wp_head(); ?>
  </head>
  <body>

    <?php //include_once('svg-sprites.php'); ?>

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
        </div>
      </header>
    </div>
