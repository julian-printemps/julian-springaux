<?php
remove_action('wp_head','wp_generator');
remove_action('wp_head', 'rsd_link');
remove_action('wp_head', 'wlwmanifest_link');
foreach ( array( 'rss2_head', 'commentsrss2_head', 'rss_head', 'rdf_header',
	'atom_head', 'comments_atom_head', 'opml_head', 'app_head' ) as $action ) {
	if ( has_action( $action, 'the_generator' ) )
		remove_action( $action, 'the_generator' );
}


if (!is_admin()) add_action("wp_enqueue_scripts", "my_jquery_enqueue", 11);
function my_jquery_enqueue() {
   	wp_deregister_script('jquery');
  	wp_deregister_script( 'wp-embed' );
    wp_register_script('jquery', get_template_directory_uri()."/bower_components/jquery/dist/jquery.min.js", false, null);
    wp_enqueue_script('jquery');
}
remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
remove_action( 'wp_print_styles', 'print_emoji_styles' );
remove_action( 'admin_print_styles', 'print_emoji_styles' );



function get_ID_by_slug($page_slug) {
  $page = get_page_by_path($page_slug);
  if ($page) {
      return $page->ID;
  } else {
      return null;
  }
}



/*
 * Lang menu
 */
add_action('init', 'julian_add_menu');
function julian_add_menu()
{
    register_nav_menu('lang_menu', 'Lang');
}


function julian_theme_setup() {
	add_theme_support( 'widgets' );
}
add_action( 'after_setup_theme', 'julian_theme_setup' );

function remove_posts_menu() {
		remove_menu_page('edit.php');
}
add_action('admin_init', 'remove_posts_menu');


/*
 * Get assets
 */
 function julian_getCssAssets() {
	 	 $filepath = glob("wp-content/themes/julian-web/css/app-v*.css");
		 $filename = basename($filepath[count($filepath) - 1]).PHP_EOL;
	 	 echo $filename;

 }

 function julian_getJsAssets() {
		$filepath = glob("wp-content/themes/julian-web/js/min/app-v*.js");
		$filename = basename($filepath[count($filepath) - 1]).PHP_EOL;
		echo $filename;
 }



/*
 * Define custom post types
 */
add_action( 'init', 'create_post_type' );
function create_post_type() {

	// Experience
  register_post_type( 'julian_experience',
    array(
      'labels' => array(
        'name' => __( 'Experience' ),
        'singular_name' => __( 'Experience' )
      ),
      'public' => true,
      'has_archive' => true,
    )
  );

	// Education
	register_post_type( 'julian_education',
		array(
			'labels' => array(
				'name' => __( 'Education' ),
				'singular_name' => __( 'Education' )
			),
			'public' => true,
			'has_archive' => true,
		)
	);

	// Skills
	register_post_type( 'julian_skills',
    array(
      'labels' => array(
        'name' => __( 'Skills' ),
        'singular_name' => __( 'Skills' ),
				'taxonomies' => array('category')
      ),
      'public' => true,
      'has_archive' => true,
    )
  );
	// Add skills category
	register_taxonomy(
		'skills-cat',
		'julian_skills',
		array(
			'hierarchical' => true,
			'update_count_callback' => '_update_post_term_count',
			'label' => 'Skills category',
			'singular_label' => 'Skills category',
			'public' => true,
			'show_ui' => true,
		)
	);

	// Interest
	register_post_type( 'julian_interest',
    array(
      'labels' => array(
        'name' => __( 'Interests' ),
        'singular_name' => __( 'Interest' )
      ),
      'public' => true,
      'has_archive' => true,
    )
  );
	// Add interest category
	register_taxonomy(
		'interest-cat',
		'julian_interest',
		array(
			'hierarchical' => true,
			'update_count_callback' => '_update_post_term_count',
			'label' => 'Interests category',
			'singular_label' => 'Interest category',
			'public' => true,
			'show_ui' => true,
		)
	);

	// Portfolio
	register_post_type( 'portfolio',
    array(
      'labels' => array(
        'name' => __( 'Portfolio' ),
        'singular_name' => __( 'Portfolio' )
      ),
      'public' => true,
      'has_archive' => true,
    )
  );
	// Add Portfolio category
	register_taxonomy(
		'portfolio-cat',
		'portfolio',
		array(
			'hierarchical' => true,
			'update_count_callback' => '_update_post_term_count',
			'label' => 'Portfolio category',
			'singular_label' => 'Portfolio category',
			'public' => true,
			'show_ui' => true,
		)
	);
}
