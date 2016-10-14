<?php
$args = array(
  'post_type' => 'julian_experience',
  'post_status' => 'publish',
  'orderby' => 'date',
  'posts_per_page' => -1,
);
$experience_query = new WP_Query( $args );
?>

<h2 class="section--title">
  <span class="section--title-content">Experience</span>
</h2>

<div class="section--container row">
  <div class="columns">
    <ul class="section--list">

      <!-- the loop -->
      <?php while ( $experience_query->have_posts() ) : $experience_query->the_post();
        $exp_company = get_field('exp_company', get_the_id());
        $exp_start_date = date('M Y', strtotime(get_field('exp_start_date', get_the_id())));
        $exp_current_position = get_field('exp_current_position', get_the_id());
        $exp_address = get_field('exp_address', get_the_id());

        if( $exp_current_position != true ){
          $exp_end_date = date('M Y', strtotime(get_field('exp_end_date', get_the_id())));
        }
        else { $exp_end_date = 'Present'; }
      ?>
        <li class="section--listitem" itemscope itemtype="http://schema.org/Corporation">
          <h3 class="section--content--title"><?php echo the_title(); ?></h3>
          <h4 class="section--content--subtitle" itemprop="name"><?php echo $exp_company; ?></h4>

          <p class="section--content--info-holder">
            <span class="section--content--info-date" itemscope itemtype="http://schema.org/Date">
              <time itemprop="startDate" datetime="2012-09-03"><?php echo $exp_start_date; ?></time> -
              <time itemprop="endDate" datetime="2015"><?php echo $exp_end_date; ?></time>
            </span>
            <span class="section--content--info-location" itemprop="location"><?php echo $exp_address; ?></span>
          </p>

          <p class="section--content--description" >
            <?php echo the_content(); ?>
          </p>
        </li>
      <?php endwhile; ?>
      <!-- end of the loop -->

    </ul>
  </div>
</div>
