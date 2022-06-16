//const VERSION = 'e37e-f55a-c87d';
//
//const OUTER_EXCLUDED_URLS: any[] = [];
//const OUTER_IGNORED_HOSTS: any[] = [];
//
//const OUTER_RUNTIME_IGNORED_HOSTS = ['localhost'];
//const OUTER_PRE_CACHE_URLS = ["/images/illustrations/algorithmic_amplifier.svg",//"/images/illustrations/box_borders.svg","/images/illustrations/box_boxes.svg",//"/images/illustrations/box_branding.svg","/images/illustrations/box_composition.svg",//"/images/illustrations/box_invert.svg","/images/illustrations/box_nested_boxes.svg",//"/images/illustrations/box_padding_margin.svg","/images/illustrations/boxes_100pc.svg",//"/images/illustrations/boxes_auto.svg","/images/illustrations/boxes_border_box.svg",//"/images/illustrations/boxes_box-model.svg","/images/illustrations/boxes_derived_dimensions.svg",//"/images/illustrations/boxes_icon-right.svg","/images/illustrations/boxes_icon-wrong.svg",//"/images/illustrations/boxes_inline_and_block.svg",//"/images/illustrations/boxes_inline_and_inline-block.svg","/images/illustrations/boxes_n_2n.svg",//"/images/illustrations/boxes_writing-modes.svg","/images/illustrations/center_auto.svg",//"/images/illustrations/center_content-box.svg","/images/illustrations/center_intrinsic.svg",//"/images/illustrations/center_margin_plus_padding.svg","/images/illustrations/center_override.svg",//"/images/illustrations/cluster_bad_wrapping.svg",//"/images/illustrations/cluster_edge_separation.svg","/images/illustrations/cluster_logo_links.svg",//"/images/illustrations/cluster_margin_padding.svg",//"/images/illustrations/cluster_negative_margins.svg",//"/images/illustrations/cluster_partial_fix.svg","/images/illustrations/composition_dialog.svg",//"/images/illustrations/composition_dialog_primitives.svg",//"/images/illustrations/composition_form.svg","/images/illustrations/composition_slide.svg",//"/images/illustrations/cover_auto_margins.svg","/images/illustrations/cover_configurations.svg",//"/images/illustrations/cover_fixed_height.svg","/images/illustrations/cover_min_height.svg",//"/images/illustrations/cover_min_space.svg","/images/illustrations/cover_transform_problem.svg",//"/images/illustrations/feature_book.svg","/images/illustrations/feature_components.svg",//"/images/illustrations/feature_more.svg","/images/illustrations/feature_site.svg",//"/images/illustrations/frame_aspect_ratio.svg","/images/illustrations/frame_flexbox.svg",//"/images/illustrations/frame_generative.svg","/images/illustrations/frame_image_in_frame.svg",//"/images/illustrations/frame_padding.svg","/images/illustrations/frame_positioning.svg",//"/images/illustrations/global_layers.svg","/images/illustrations/global_layout_recursive.svg",//"/images/illustrations/global_layout_star.svg","/images/illustrations/global_shadow.svg",//"/images/illustrations/grid_flex_versus.svg","/images/illustrations/grid_for_of.svg",//"/images/illustrations/grid_max-width.svg","/images/illustrations/grid_overflow.svg",//"/images/illustrations/grid_positioned.svg","/images/illustrations/grid_solution.svg",//"/images/illustrations/harmonies.svg","/images/illustrations/icon_align.svg",//"/images/illustrations/icon_align_length.svg","/images/illustrations/icon_coords_and_styles.svg",//"/images/illustrations/icon_different_fonts.svg","/images/illustrations/icon_dir.svg",//"/images/illustrations/icon_ends.svg","/images/illustrations/icon_inline-flex.svg",//"/images/illustrations/imposter_calc.svg","/images/illustrations/imposter_grid1.svg",//"/images/illustrations/imposter_grid2.svg","/images/illustrations/imposter_negative_margins.svg",//"/images/illustrations/imposter_overlap.svg",//"/images/illustrations/imposter_positioning_container.svg",//"/images/illustrations/imposter_positioning_container_pre.svg",//"/images/illustrations/imposter_shadow.svg","/images/illustrations/imposter_shrink_wrap.svg",//"/images/illustrations/layout-icon_box.svg","/images/illustrations/layout-icon_center.svg",//"/images/illustrations/layout-icon_cluster.svg","/images/illustrations/layout-icon_cover.svg",//"/images/illustrations/layout-icon_frame.svg","/images/illustrations/layout-icon_grid.svg",//"/images/illustrations/layout-icon_icon.svg","/images/illustrations/layout-icon_imposter.svg",//"/images/illustrations/layout-icon_reel.svg","/images/illustrations/layout-icon_sidebar.svg",//"/images/illustrations/layout-icon_stack.svg","/images/illustrations/layout-icon_switcher.svg",//"/images/illustrations/measure_different_sizes.svg",//"/images/illustrations/measure_global_inherited_props_classes.svg",//"/images/illustrations/measure_inverted_triangle.svg",//"/images/illustrations/measure_inverted_triangle_utilities.svg",//"/images/illustrations/measure_print_layout.svg","/images/illustrations/measure_px.svg",//"/images/illustrations/measure_scroll.svg","/images/illustrations/modular_scale_harmonies.svg",//"/images/illustrations/modular_scale_incline.svg","/images/illustrations/multicol_rows.svg",//"/images/illustrations/multicol_spanning.svg","/images/illustrations/multicol_split_list.svg",//"/images/illustrations/multicol_up_down.svg","/images/illustrations/reel_bidirectional.svg",//"/images/illustrations/reel_gradient.svg","/images/illustrations/reel_obscured.svg",//"/images/illustrations/reel_overflow_auto.svg","/images/illustrations/reel_padding_issue.svg",//"/images/illustrations/reel_pseudo_content.svg","/images/illustrations/reel_sequencer.svg",//"/images/illustrations/reel_vertical_overflow.svg","/images/illustrations/sidebar_50_50.svg",//"/images/illustrations/sidebar_available.svg","/images/illustrations/sidebar_fixed.svg",//"/images/illustrations/sidebar_gaps.svg","/images/illustrations/sidebar_intrinsic.svg",//"/images/illustrations/sidebar_quantum.svg","/images/illustrations/sidebar_stretch_start.svg",//"/images/illustrations/sidebar_viewport_constant.svg","/images/illustrations/sidebar_wrapping.svg",//"/images/illustrations/spread_float_wrap.svg","/images/illustrations/spread_floats.svg",//"/images/illustrations/spread_floats_2.svg","/images/illustrations/spread_margin_issues.svg",//"/images/illustrations/spread_negative_margins.svg",//"/images/illustrations/spread_vertical_align.svg","/images/illustrations/stack_form.svg",//"/images/illustrations/stack_grid.svg","/images/illustrations/stack_multiple_exponent.svg",//"/images/illustrations/stack_nesting.svg","/images/illustrations/stack_padding_issue.svg",//"/images/illustrations/switcher_100pc.svg","/images/illustrations/switcher_asymmetric.svg",//"/images/illustrations/switcher_bypass.svg","/images/illustrations/switcher_flex-basis_calc.svg",//"/images/illustrations/switcher_flex_2.svg","/images/illustrations/switcher_margin_stretch.svg",//"/images/illustrations/switcher_quantities.svg","/images/illustrations/switcher_steps.svg",//"/images/illustrations/units_ch-ex.svg","/images/illustrations/units_ems.svg",//"/images/illustrations/units_metrics.svg","/images/illustrations/units_pixel-pixel.svg",//"/images/illustrations/units_subpixels.svg","/images/illustrations/units_width-jump.svg",//"/images/illustrations/venn.svg"];
//
//const CACHE_KEYS = {
//  PRE_CACHE: `precache-${VERSION}`,
//  RUNTIME: `runtime-${VERSION}`,
//  PREMIUM: `premium`,
//};
//
//// Define URLS that we don’t want to end up in the cache, This could have been set
//// from outside too, so merge that if set
//const EXCLUDED_URLS = [...(typeof OUTER_EXCLUDED_URLS !== 'undefined' ? OUTER_EXCLUDED_URLS : []), //...['http://localhost:8080/browser-sync/socket.io/']];
//
//// Define URLS that we want to be cached when the worker is installed. This could have been set
//// from outside too, so merge that if set
//const PRE_CACHE_URLS = [...(typeof OUTER_PRE_CACHE_URLS !== 'undefined' ? OUTER_PRE_CACHE_URLS : [])//, ...['/css/lib/fonts/barlowcondensed-bold.woff2']];
//
//// Define some ignored hosts. This could have been set
//// from outside too, so merge that if set
//const IGNORED_HOSTS = [...(typeof OUTER_IGNORED_HOSTS !== 'undefined' ? OUTER_IGNORED_HOSTS : []), //...['api.every-layout.dev']];
//
//// Define some hosts to ignore for runtime caching. This could have been set
//// from outside too, so merge that if set
//const RUNTIME_IGNORED_HOSTS = [...(typeof OUTER_RUNTIME_IGNORED_HOSTS !== 'undefined' ? //OUTER_RUNTIME_IGNORED_HOSTS : []), ...[]];
//
///**
// * Takes an array of strings and puts them in a named cache store
// *
// * @param {String} cacheName
// * @param {Array} items=[]
// */
//const addItemsToCache = function (cacheName: string, items: any[] = []) {
//  caches.open(cacheName).then((cache) => cache.addAll(items));
//};
//if (window && window.Worker) {
//  let self = new window.Worker("/service-worker.js");
//  self.
//  self.addEventListener('install', (evt) => {
//    self.skipWaiting();
//  
//    addItemsToCache(CACHE_KEYS.PRE_CACHE, PRE_CACHE_URLS);
//}
//
//});
//
//self.addEventListener('activate', (evt) => {
//  // Look for any old caches that don't match our set and clear them out
//  evt.waitUntil(
//    caches
//      .keys()
//      .then((cacheNames) => {
//        return cacheNames.filter((item) => !Object.values(CACHE_KEYS).includes(item));
//      })
//      .then((itemsToDelete) => {
//        return Promise.all(
//          itemsToDelete.map((item) => {
//            return caches.delete(item);
//          })
//        );
//      })
//      .then(() => self.clients.claim())
//  );
//});
//
//self.addEventListener('fetch', (evt) => {
//  const {hostname} = new URL(evt.request.url);
//
//  // Check we don't want to ignore this host
//  if (IGNORED_HOSTS.indexOf(hostname) >= 0) {
//    return;
//  }
//
//  // Check we don't want to ignore this URL
//  if (EXCLUDED_URLS.some((page) => evt.request.url.indexOf(page) > -1)) {
//    return;
//  }
//
//  // No posts, ta
//  if (evt.request.method === 'POST') {
//    return;
//  }
//
//  evt.respondWith(
//    caches.match(evt.request).then((cachedResponse) => {
//      // Item found in cache so return
//      if (cachedResponse) {
//        return cachedResponse;
//      }
//
//      // Nothing found so load up the request from the network
//      return caches.open(CACHE_KEYS.RUNTIME).then((cache) => {
//        return fetch(evt.request)
//          .then((response) => {
//            // If we're ignoring runtime caching on this host,
//            // we only want to return the response
//            if (RUNTIME_IGNORED_HOSTS.indexOf(hostname) > -1) {
//              return response;
//            }
//
//            // If this is a course page, we don’t want to cache it because the premium
//            // content loader does that from the front-end for us
//            if (evt.request.url.indexOf('/layouts/') > 0) {
//              return response;
//            }
//
//            // Else, put the new response in cache and return it
//            return cache.put(evt.request, response.clone()).then(() => {
//              return response;
//            });
//          })
//          .catch((ex) => {
//            return caches
//              .open(CACHE_KEYS.PREMIUM)
//              .then((cache) => cache.match('/offline'))
//              .then((cachedResponse) => {
//                if (cachedResponse) {
//                  return cachedResponse;
//                }
//
//                return;
//              });
//          });
//      });
//    })
//  );
//});

export {};