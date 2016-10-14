<?php
$taxonomy = 'skills-cat';
$post_type = 'julian_skills';
?>
<h2 class="section--title">
  <span class="section--title-content">Skills</span>
</h2>

<div class="skill section--container row">
  <div class="columns">
    <div class="skills--container">

      <?php
        $tax_terms = get_terms($taxonomy);
        foreach ($tax_terms as $tax_term) {
          $post_term = get_terms( $taxonomy, 'slug='.$tax_term->slug);
          $post_term_id = $post_term[0]->term_id;
          $args = array(
            'post_type' => $post_type,
            'tax_query' => array(
              array(
                'taxonomy' => $taxonomy,
                'field' => 'term_id',
                'terms' => $post_term_id,
              )
            ),
            'post_status' => 'publish',
            'orderby' => 'menu_order',
            'posts_per_page' => -1
          );
          $skills_query = new WP_Query( $args );
        ?>

        <div class="section--category">
          <h3 class="section--content--title"><?php echo $tax_term->name; ?></h3>
          <ul class="skills--list row">
            <!-- the loop -->
            <?php while ( $skills_query->have_posts() ) : $skills_query->the_post();
              $skill_level = get_field('skill_level', get_the_id());
            ?>
              <li class="perspective columns shrink lvl_<?php echo $skill_level; ?>"><span class="skill_button"><?php echo the_title(); ?></span></li>
            <?php endwhile; ?>
            <!-- end of the loop -->
          </ul>
        </div>
      <?php } ?>
    </div>

  </div>
</div>
