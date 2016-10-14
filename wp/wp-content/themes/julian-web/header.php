<!doctype html>
<html class="no-js" lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Julian Springaux | Web engineer</title>
    <!--
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/<?php echo julian_getCssAssets(); ?>">
    -->
    <link rel="stylesheet" href="http://localhost:8888/Julian-code/julian-web/src/css/app.css">

    <link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Open+Sans:400,400italic,600,600italic">

    <?php wp_head(); ?>
  </head>
  <body>

    <?php //include_once('svg-sprites.php'); ?>

    <div class="header--holder">
      <header role="header" class="header row align-bottom">

        <div class="columns shrink">
          <h1 class="site_title" itemscope itemtype="http://schema.org/Person">
            <a href="http://julian-web.com" title="Home" class="site_title--link">
              <strong class="site_title--name" itemprop="name">Julian Springaux</strong>
              <span class="site_title--jobtitle" itemprop="site_title--jobtitle">Web engineer</span>
            </a>
          </h1>
          <a href="http://julian-web.com" title="Home" class="logo-link"><div class="logo"></div></a>
        </div>

        <div class="columns">
          <div class="navigation--holder">
            <nav class="navigation">
              <ul class="navigation--list clearfix">
                <li class="navigation--listitem">
                  <a href="#hobbies" class="navigation--link">
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
                    <i class="fa fa-cog fa-spin fa-fw"></i>
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

          <div id="navigation--button" class="navigation--button-holder">
            <i class="navigation--menu-icon icon-menu"></i>
          </div>
        </div>
      </header>
    </div>
