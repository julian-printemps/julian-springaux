<?php
$args = array(
  'post_type' => 'julian_education',
  'post_status' => 'publish',
  'orderby' => 'date',
  'posts_per_page' => -1,
);
$education_query = new WP_Query( $args );
?>
<h2 class="section--title">
  <span class="section--title-content">Education</span>
</h2>

<div class="section--container row">
  <div class="columns">

    <ul class="section--list row">

      <!-- the loop -->
      <?php
      $i = 0;
      while ( $education_query->have_posts() ) : $education_query->the_post();
        $edu_school = get_field('edu_school', get_the_id());
        $edu_country = get_field('edu_country', get_the_id());
        $edu_start_date = date('Y', strtotime(get_field('edu_start_date', get_the_id())));
        $edu_current = get_field('edu_current', get_the_id());
        $edu_end_date = get_field('edu_end_date', get_the_id());

        if( $edu_current != true ){
          $edu_end_date = date('Y', strtotime(get_field('edu_end_date', get_the_id())));
        }
        else { $edu_end_date = 'Present'; }
      ?>
        <li class="section--listitem item_<?php echo $i; ?> columns small-12 medium-6" itemscope itemtype="http://schema.org/CollegeOrUniversity">
          <h3 class="section--content--title">
            <span itemprop="name"><?php the_title(); ?></span></span></h3>

          <h4 class="section--content--subtitle">
            <span class="section--content--info-degree"><?php echo $edu_school; ?></span>
            <span class="section--content--info-location" itemprop="location"><?php echo $edu_country; ?></span>
          </h4>

          <p class="section--content--info-holder section--content--info-date" itemscope itemtype="http://schema.org/Date">
            <time itemprop="startDate" datetime="2012-09-03"><?php echo $edu_start_date; ?></time> -
            <time itemprop="endDate" datetime="2012-08-01"><?php echo $edu_end_date; ?></time>
          </p>
        </li>
      <?php $i++; endwhile; ?>
      <!-- end of the loop -->

    </ul>
  </div>
</div>
