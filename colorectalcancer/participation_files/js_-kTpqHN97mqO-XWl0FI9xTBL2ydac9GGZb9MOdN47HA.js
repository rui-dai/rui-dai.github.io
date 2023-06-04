// Fixes tab behavior after using the skip link in IE or Chrome
Drupal.behaviors.osBase_skipLinkFocus = {
	attach : function(ctx) {
		var $ = jQuery, $skip = $('#skip-link a', ctx);

		$skip.click(function(e) {
			var target = $skip[0].hash.replace('#', '');

			setTimeout(function() {
				$('a[name="' + target + '"]').attr('tabindex', -1).focus();
			}, 100);
		});
	}
};

jQuery(document).ready(function() {
	jQuery(".cal-export").click(function() {
		jQuery(".attachment.attachment-before ul").slideToggle();
		jQuery(".os_events_export_links .last").slideToggle();

	});
	
	jQuery(".block-boxes-os_search_solr_search_box").addClass("block-os-search-solr");

    jQuery("figure img").each(function() {
        var imgwidth = jQuery(this).attr('width');
        jQuery(this).parent().find('figcaption').css({
            "width" : + imgwidth
        });
    });


});


(function ($) {

Drupal.behaviors.osCpLayout = {
    attach: function (ctx) {
        $('[id^="os-importer-content-"]').click(function(){
            var cp_ctrl_id = $(this).attr('id').replace(/-/g, '_');
            $('#' + cp_ctrl_id).click();
        });

        $("div.ctools-dropdown-container span").hover(
            function() { $(this).addClass('ctools-dropdown-hover'); },
            function() { $(this).removeClass('ctools-dropdown-hover'); }
        );
    }
};

    Drupal.behaviors.osKeepAspectImageMediaResponsive = {
        attach: function (context) {
            calculateMediaImageHeight();
            $( window ).resize(function() {
                calculateMediaImageHeight();
            });
            function calculateMediaImageHeight() {
                $('img.media-element.file-default', context).each(function () {
                    var image_width = $(this).width();
                    var height = getOriginalHeightValue($(this));
                    var width = getOriginalWidthValue($(this));
                    var image_parent_width = $(this).parent().width();
                    if (width !== '' && height !== '') {
                        var ratio = width / height;
                        if (ratio) {
                            $(this).height($(this).width() / ratio);
                        }
                    }
                });
            }
            // Get original height value.
            function getOriginalHeightValue(element) {
                var stored_height = element.attr('data-original_height');
                if (stored_height) {
                    return stored_height;
                }
                if (element[0] === null) {
                    return '';
                }
                var height = element[0].style.height.replace('px', '');
                if (!height) {
                    // fallback to height attribute.
                    height = element.attr('height');
                    if (!height) {
                        return '';
                    }
                }
                // Unable to write non-exists data attr with .data().
                element.attr('data-original_height', height);
                return height;
            }
            // Get original width value.
            function getOriginalWidthValue(element) {
                var stored_width = element.attr('data-original_width');
                if (stored_width) {
                    return stored_width;
                }
                if (element[0] === null) {
                    return '';
                }
                var width = element[0].style.width.replace('px', '');
                if (!width) {
                    // fallback to width attribute.
                    width = element.attr('width');
                    if (!width) {
                        return '';
                    }
                }
                // Unable to write non-exists data attr with .data().
                element.attr('data-original_width', width);
                return width;
            }
        }
    };

})(jQuery);;
/*
CSS Browser Selector v0.4.0 (Nov 02, 2010)
Rafael Lima (http://rafael.adm.br)
http://rafael.adm.br/css_browser_selector
License: http://creativecommons.org/licenses/by/2.5/
Contributors: http://rafael.adm.br/css_browser_selector#contributors
*/
function css_browser_selector(u){var ua=u.toLowerCase(),is=function(t){return ua.indexOf(t)>-1},g='gecko',w='webkit',s='safari',o='opera',m='mobile',h=document.documentElement,b=[(!(/opera|webtv/i.test(ua))&&/msie\s(\d)/.test(ua))?('ie ie'+RegExp.$1):is('firefox/2')?g+' ff2':is('firefox/3.5')?g+' ff3 ff3_5':is('firefox/3.6')?g+' ff3 ff3_6':is('firefox/3')?g+' ff3':is('gecko/')?g:is('opera')?o+(/version\/(\d+)/.test(ua)?' '+o+RegExp.$1:(/opera(\s|\/)(\d+)/.test(ua)?' '+o+RegExp.$2:'')):is('konqueror')?'konqueror':is('blackberry')?m+' blackberry':is('android')?m+' android':is('chrome')?w+' chrome':is('iron')?w+' iron':is('applewebkit/')?w+' '+s+(/version\/(\d+)/.test(ua)?' '+s+RegExp.$1:''):is('mozilla/')?g:'',is('j2me')?m+' j2me':is('iphone')?m+' iphone':is('ipod')?m+' ipod':is('ipad')?m+' ipad':is('mac')?'mac':is('darwin')?'mac':is('webtv')?'webtv':is('win')?'win'+(is('windows nt 6.0')?' vista':''):is('freebsd')?'freebsd':(is('x11')||is('linux'))?'linux':'','js']; c = b.join(' '); h.className += ' '+c; return c;}; css_browser_selector(navigator.userAgent);
;
jQuery(document).ready(function($) {
  //number of pixels before modifying styles
	var $menuBar = jQuery('#menu-bar');
	if ($menuBar.length) {
		var num = $menuBar.offset().top;

		// Size of the un-fixed menu.
		var menu_size = $menuBar.height();

		jQuery(window).bind('scroll', function () {
			if (jQuery(window).scrollTop() > num) {
				jQuery('#page-wrapper').css('marginTop', menu_size + 'px');
				$menuBar.addClass('fixed');
			} else {
				$menuBar.removeClass('fixed');
				jQuery('#page-wrapper').css('marginTop', '0px');
			}
		});

		jQuery('.front .block-boxes-os_sv_list_box').each(function () {
			var $this = $(this);
			var count = jQuery('.node', $this).length;

			jQuery($this).addClass('lopz-' + count);
		});
	}
});
;
