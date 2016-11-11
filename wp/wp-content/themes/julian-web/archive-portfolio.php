<?php
get_header();
?>
<?php get_template_part( 'includes/default-header' ); ?>
<div class="wrapper">

  <main role="main" id="main">
    <!-- portfolio section -->
      <section id="portfolio" class="section section--portfolio">
        <div class="row">
          <div class="columns small-12 medium-10 medium-offset-1 large-8 large-offset-2">
            <ul class="portfolio--list row">
            <?php
              if ( $wp_query->have_posts() ) {
                while ( $wp_query->have_posts() ) {
                  the_post(); ?>
                  <li class="portfolio--list--item columns small-12">
                    <?php get_template_part( 'includes/panel', 'portfolio' ); ?>
                  </li>
                <?php } // end while
              } // end if ?>
            </ul>

            <div class="pagination--holder">
              <?php wp_pagenavi(); ?>
            </div>
          </div>
        </div>
      </section>
  </main>

</div>

<?php get_footer(); ?>
