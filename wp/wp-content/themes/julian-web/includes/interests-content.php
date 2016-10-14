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
			$tax_terms = get_terms($taxonomy);
			$i=0;
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
				$interests_query = new WP_Query( $args );
			?>
			<?php if($i == 0){ ?>
				<div class="row-hob clearfix">
			<?php }
			else if($i%2 == 0){ ?>
				</div>
				<div class="row-hob clearfix">
			<?php } ?>

				<a title="<?php echo $tax_term->name; ?>" id="<?php echo $tax_term->slug; ?>" class="cell <?php echo $tax_term->slug; ?>">
					<div class="flip-container">
					  <div class="flip-card">
					    <div class="front face"><span class="interestsIcon icon-<?php echo $tax_term->slug; ?>"></span></div>
					    <div class="back face">
								<h3><?php echo $tax_term->name; ?></h3>
								<ul class="interests-list">
									<!-- the loop -->
									<?php while ( $interests_query->have_posts() ) : $interests_query->the_post(); ?>
										<li class="interests-listItem"><?php echo the_title(); ?></li>
									<?php endwhile; ?>
									<!-- end of the loop -->
								</ul>
							</div>
						</div>
					</div>
				</a>
				<?php $i++; ?>
		<?php } ?>
			</div>
		</div>
</div>
