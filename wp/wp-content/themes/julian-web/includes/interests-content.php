<?php
$taxonomy = 'interest-cat';
$post_type = 'julian_interest';
?>

<h2 class="section--title">
	<span class="section--title-content">Interests</span>
</h2>
<div class="section--container row">
	<div class="columns">

		<?php
			$args = array(
				'post_type' => 'julian_interest',
				'post_status' => 'publish',
				'orderby' => 'menu_order',
				'posts_per_page' => -1
			);
			$interests_query = new WP_Query( $args );
		?>
		<div class="row">
			<?php while ( $interests_query->have_posts() ) : $interests_query->the_post(); ?>
				<?php
				switch ($post->post_name) {
					case 'travel':
						$icon_slug = 'plane';
						break;
					case 'litterature':
						$icon_slug = 'book';
						break;
					case 'interest':
						$icon_slug = 'cubes';
						break;
				}
				?>
				<a title="<?php echo the_title(); ?>" class="cell flip--holder columns small-12 medium-4">
					<div class="flip--container">
					  <div class="flip">
					    <div class="front flip--face">
								<div class="flip--icon--holder">
									<i class="flip--icon fa fa-<?php echo $icon_slug; ?>" aria-hidden="true"></i>
								</div>
							</div>
					    <div class="back flip--face">
								<h3 class="flip--title"><?php echo the_title(); ?></h3>
								<ul class="flip--list">
									<?php if( have_rows('interest_list') ):
					          while ( have_rows('interest_list') ) : the_row(); ?>
					            <li class="flip--list--item"><?php echo get_sub_field('interest_title'); ?></li>
					        <?php endwhile;
					        endif; ?>
								</ul>
							</div>
						</div>
					</div>
				</a>
			<?php endwhile; ?>
		</div>
</div>
