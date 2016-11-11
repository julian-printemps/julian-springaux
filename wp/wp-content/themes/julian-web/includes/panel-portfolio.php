<?php
$tags = wp_get_post_terms( get_the_ID(), 'portfolio-cat' );
?>

<article class="portfolio">
  <div class="row align-top">
    <div class="portfolio--image--holder columns small-12 medium-6 large-5">
      <a href="<?php echo get_field('portfolio_url'); ?>" class="portfolio--image--link" title="<?php the_title(); ?>" target="_blank">
        <figure class="portfolio--figure">
          <img
            class="portfolio--image"
            src="<?php echo get_field('portfolio_image')['sizes']['large']; ?>"
            alt="<?php echo get_the_title(); ?>">
        </figure>
      </a>
    </div>

    <div class="portfolio--image--holder columns small-12 medium-6 large-7">
      <div class="row">
        <ul class="portfolio--tag--list">
          <?php foreach ($tags as $tag) { ?>
              <li class="portfolio--tag">
                <?php echo $tag->name; ?>
              </li>
          <?php } ?>
        </ul>

        <a href="<?php echo get_field('portfolio_url'); ?>" class="portfolio--link" title="<?php the_title(); ?>" target="_blank">
          <h2 class="portfolio--title columns small-12"><?php the_title(); ?></h2>
        </a>

        <div class="portfolio--main columns small-12">
          <div class="portfolio--description">
            <?php the_content(); ?>
          </div>
          <div class="button--holder center mobile_only">
            <a href="<?php echo get_field('portfolio_url'); ?>" class="button button_portfolio" title="<?php the_title(); ?>" target="_blank"><i class="fa fa-desktop" aria-hidden="true"></i> Website</a>
          </div>
        </div>
      </div>

    </div>
  </div>
</article>
