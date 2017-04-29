
/*
Create icon list
 */

var faicons=jQuery('<li type="fa" data-value="fa-glass"  class="fa fa-glass"> </li>\
<li type="fa" data-value="fa-music"  class="fa fa-music"> </li>\
<li type="fa" data-value="fa-search"  class="fa fa-search"> </li>\
<li type="fa" data-value="fa-envelope-o"  class="fa fa-envelope-o"> </li>\
<li type="fa" data-value="fa-heart"  class="fa fa-heart"> </li>\
<li type="fa" data-value="fa-star"  class="fa fa-star"> </li>\
<li type="fa" data-value="fa-star-o"  class="fa fa-star-o"> </li>\
<li type="fa" data-value="fa-user"  class="fa fa-user"> </li>\
<li type="fa" data-value="fa-film"  class="fa fa-film"> </li>\
<li type="fa" data-value="fa-th-large"  class="fa fa-th-large"> </li>\
<li type="fa" data-value="fa-th"  class="fa fa-th"> </li>\
<li type="fa" data-value="fa-th-list"  class="fa fa-th-list"> </li>\
<li type="fa" data-value="fa-check"  class="fa fa-check"> </li>\
<li type="fa" data-value="fa-times"  class="fa fa-times"> </li>\
<li type="fa" data-value="fa-search-plus"  class="fa fa-search-plus"> </li>\
<li type="fa" data-value="fa-search-minus"  class="fa fa-search-minus"> </li>\
<li type="fa" data-value="fa-power-off"  class="fa fa-power-off"> </li>\
<li type="fa" data-value="fa-signal"  class="fa fa-signal"> </li>\
<li type="fa" data-value="fa-gear"  class="fa fa-gear"> </li>\
<li type="fa" data-value="fa-cog"  class="fa fa-cog"> </li>\
<li type="fa" data-value="fa-trash-o"  class="fa fa-trash-o"> </li>\
<li type="fa" data-value="fa-home"  class="fa fa-home"> </li>\
<li type="fa" data-value="fa-file-o"  class="fa fa-file-o"> </li>\
<li type="fa" data-value="fa-clock-o"  class="fa fa-clock-o"> </li>\
<li type="fa" data-value="fa-road"  class="fa fa-road"> </li>\
<li type="fa" data-value="fa-download"  class="fa fa-download"> </li>\
<li type="fa" data-value="fa-arrow-circle-o-down"  class="fa fa-arrow-circle-o-down"> </li>\
<li type="fa" data-value="fa-arrow-circle-o-up"  class="fa fa-arrow-circle-o-up"> </li>\
<li type="fa" data-value="fa-inbox"  class="fa fa-inbox"> </li>\
<li type="fa" data-value="fa-play-circle-o"  class="fa fa-play-circle-o"> </li>\
<li type="fa" data-value="fa-rotate-right"  class="fa fa-rotate-right"> </li>\
<li type="fa" data-value="fa-repeat"  class="fa fa-repeat"> </li>\
<li type="fa" data-value="fa-refresh"  class="fa fa-refresh"> </li>\
<li type="fa" data-value="fa-list-alt"  class="fa fa-list-alt"> </li>\
<li type="fa" data-value="fa-lock"  class="fa fa-lock"> </li>\
<li type="fa" data-value="fa-flag"  class="fa fa-flag"> </li>\
<li type="fa" data-value="fa-headphones"  class="fa fa-headphones"> </li>\
<li type="fa" data-value="fa-volume-off"  class="fa fa-volume-off"> </li>\
<li type="fa" data-value="fa-volume-down"  class="fa fa-volume-down"> </li>\
<li type="fa" data-value="fa-volume-up"  class="fa fa-volume-up"> </li>\
<li type="fa" data-value="fa-qrcode"  class="fa fa-qrcode"> </li>\
<li type="fa" data-value="fa-barcode"  class="fa fa-barcode"> </li>\
<li type="fa" data-value="fa-tag"  class="fa fa-tag"> </li>\
<li type="fa" data-value="fa-tags"  class="fa fa-tags"> </li>\
<li type="fa" data-value="fa-book"  class="fa fa-book"> </li>\
<li type="fa" data-value="fa-bookmark"  class="fa fa-bookmark"> </li>\
<li type="fa" data-value="fa-print"  class="fa fa-print"> </li>\
<li type="fa" data-value="fa-camera"  class="fa fa-camera"> </li>\
<li type="fa" data-value="fa-font"  class="fa fa-font"> </li>\
<li type="fa" data-value="fa-bold"  class="fa fa-bold"> </li>\
<li type="fa" data-value="fa-italic"  class="fa fa-italic"> </li>\
<li type="fa" data-value="fa-text-height"  class="fa fa-text-height"> </li>\
<li type="fa" data-value="fa-text-width"  class="fa fa-text-width"> </li>\
<li type="fa" data-value="fa-align-left"  class="fa fa-align-left"> </li>\
<li type="fa" data-value="fa-align-center"  class="fa fa-align-center"> </li>\
<li type="fa" data-value="fa-align-right"  class="fa fa-align-right"> </li>\
<li type="fa" data-value="fa-align-justify"  class="fa fa-align-justify"> </li>\
<li type="fa" data-value="fa-list"  class="fa fa-list"> </li>\
<li type="fa" data-value="fa-dedent"  class="fa fa-dedent"> </li>\
<li type="fa" data-value="fa-outdent"  class="fa fa-outdent"> </li>\
<li type="fa" data-value="fa-indent"  class="fa fa-indent"> </li>\
<li type="fa" data-value="fa-video-camera"  class="fa fa-video-camera"> </li>\
<li type="fa" data-value="fa-photo"  class="fa fa-photo"> </li>\
<li type="fa" data-value="fa-image"  class="fa fa-image"> </li>\
<li type="fa" data-value="fa-picture-o"  class="fa fa-picture-o"> </li>\
<li type="fa" data-value="fa-pencil"  class="fa fa-pencil"> </li>\
<li type="fa" data-value="fa-map-marker"  class="fa fa-map-marker"> </li>\
<li type="fa" data-value="fa-adjust"  class="fa fa-adjust"> </li>\
<li type="fa" data-value="fa-tint"  class="fa fa-tint"> </li>\
<li type="fa" data-value="fa-edit"  class="fa fa-edit"> </li>\
<li type="fa" data-value="fa-pencil-square-o"  class="fa fa-pencil-square-o"> </li>\
<li type="fa" data-value="fa-share-square-o"  class="fa fa-share-square-o"> </li>\
<li type="fa" data-value="fa-check-square-o"  class="fa fa-check-square-o"> </li>\
<li type="fa" data-value="fa-arrows"  class="fa fa-arrows"> </li>\
<li type="fa" data-value="fa-step-backward"  class="fa fa-step-backward"> </li>\
<li type="fa" data-value="fa-fast-backward"  class="fa fa-fast-backward"> </li>\
<li type="fa" data-value="fa-backward"  class="fa fa-backward"> </li>\
<li type="fa" data-value="fa-play"  class="fa fa-play"> </li>\
<li type="fa" data-value="fa-pause"  class="fa fa-pause"> </li>\
<li type="fa" data-value="fa-stop"  class="fa fa-stop"> </li>\
<li type="fa" data-value="fa-forward"  class="fa fa-forward"> </li>\
<li type="fa" data-value="fa-fast-forward"  class="fa fa-fast-forward"> </li>\
<li type="fa" data-value="fa-step-forward"  class="fa fa-step-forward"> </li>\
<li type="fa" data-value="fa-eject"  class="fa fa-eject"> </li>\
<li type="fa" data-value="fa-chevron-left"  class="fa fa-chevron-left"> </li>\
<li type="fa" data-value="fa-chevron-right"  class="fa fa-chevron-right"> </li>\
<li type="fa" data-value="fa-plus-circle"  class="fa fa-plus-circle"> </li>\
<li type="fa" data-value="fa-minus-circle"  class="fa fa-minus-circle"> </li>\
<li type="fa" data-value="fa-times-circle"  class="fa fa-times-circle"> </li>\
<li type="fa" data-value="fa-check-circle"  class="fa fa-check-circle"> </li>\
<li type="fa" data-value="fa-question-circle"  class="fa fa-question-circle"> </li>\
<li type="fa" data-value="fa-info-circle"  class="fa fa-info-circle"> </li>\
<li type="fa" data-value="fa-crosshairs"  class="fa fa-crosshairs"> </li>\
<li type="fa" data-value="fa-times-circle-o"  class="fa fa-times-circle-o"> </li>\
<li type="fa" data-value="fa-check-circle-o"  class="fa fa-check-circle-o"> </li>\
<li type="fa" data-value="fa-ban"  class="fa fa-ban"> </li>\
<li type="fa" data-value="fa-arrow-left"  class="fa fa-arrow-left"> </li>\
<li type="fa" data-value="fa-arrow-right"  class="fa fa-arrow-right"> </li>\
<li type="fa" data-value="fa-arrow-up"  class="fa fa-arrow-up"> </li>\
<li type="fa" data-value="fa-arrow-down"  class="fa fa-arrow-down"> </li>\
<li type="fa" data-value="fa-mail-forward"  class="fa fa-mail-forward"> </li>\
<li type="fa" data-value="fa-share"  class="fa fa-share"> </li>\
<li type="fa" data-value="fa-expand"  class="fa fa-expand"> </li>\
<li type="fa" data-value="fa-compress"  class="fa fa-compress"> </li>\
<li type="fa" data-value="fa-plus"  class="fa fa-plus"> </li>\
<li type="fa" data-value="fa-minus"  class="fa fa-minus"> </li>\
<li type="fa" data-value="fa-asterisk"  class="fa fa-asterisk"> </li>\
<li type="fa" data-value="fa-exclamation-circle"  class="fa fa-exclamation-circle"> </li>\
<li type="fa" data-value="fa-gift"  class="fa fa-gift"> </li>\
<li type="fa" data-value="fa-leaf"  class="fa fa-leaf"> </li>\
<li type="fa" data-value="fa-fire"  class="fa fa-fire"> </li>\
<li type="fa" data-value="fa-eye"  class="fa fa-eye"> </li>\
<li type="fa" data-value="fa-eye-slash"  class="fa fa-eye-slash"> </li>\
<li type="fa" data-value="fa-warning"  class="fa fa-warning"> </li>\
<li type="fa" data-value="fa-exclamation-triangle"  class="fa fa-exclamation-triangle"> </li>\
<li type="fa" data-value="fa-plane"  class="fa fa-plane"> </li>\
<li type="fa" data-value="fa-calendar"  class="fa fa-calendar"> </li>\
<li type="fa" data-value="fa-random"  class="fa fa-random"> </li>\
<li type="fa" data-value="fa-comment"  class="fa fa-comment"> </li>\
<li type="fa" data-value="fa-magnet"  class="fa fa-magnet"> </li>\
<li type="fa" data-value="fa-chevron-up"  class="fa fa-chevron-up"> </li>\
<li type="fa" data-value="fa-chevron-down"  class="fa fa-chevron-down"> </li>\
<li type="fa" data-value="fa-retweet"  class="fa fa-retweet"> </li>\
<li type="fa" data-value="fa-shopping-cart"  class="fa fa-shopping-cart"> </li>\
<li type="fa" data-value="fa-folder"  class="fa fa-folder"> </li>\
<li type="fa" data-value="fa-folder-open"  class="fa fa-folder-open"> </li>\
<li type="fa" data-value="fa-arrows-v"  class="fa fa-arrows-v"> </li>\
<li type="fa" data-value="fa-arrows-h"  class="fa fa-arrows-h"> </li>\
<li type="fa" data-value="fa-bar-chart-o"  class="fa fa-bar-chart-o"> </li>\
<li type="fa" data-value="fa-bar-chart"  class="fa fa-bar-chart"> </li>\
<li type="fa" data-value="fa-twitter-square"  class="fa fa-twitter-square"> </li>\
<li type="fa" data-value="fa-facebook-square"  class="fa fa-facebook-square"> </li>\
<li type="fa" data-value="fa-camera-retro"  class="fa fa-camera-retro"> </li>\
<li type="fa" data-value="fa-key"  class="fa fa-key"> </li>\
<li type="fa" data-value="fa-gears"  class="fa fa-gears"> </li>\
<li type="fa" data-value="fa-cogs"  class="fa fa-cogs"> </li>\
<li type="fa" data-value="fa-comments"  class="fa fa-comments"> </li>\
<li type="fa" data-value="fa-thumbs-o-up"  class="fa fa-thumbs-o-up"> </li>\
<li type="fa" data-value="fa-thumbs-o-down"  class="fa fa-thumbs-o-down"> </li>\
<li type="fa" data-value="fa-star-half"  class="fa fa-star-half"> </li>\
<li type="fa" data-value="fa-heart-o"  class="fa fa-heart-o"> </li>\
<li type="fa" data-value="fa-sign-out"  class="fa fa-sign-out"> </li>\
<li type="fa" data-value="fa-linkedin-square"  class="fa fa-linkedin-square"> </li>\
<li type="fa" data-value="fa-thumb-tack"  class="fa fa-thumb-tack"> </li>\
<li type="fa" data-value="fa-external-link"  class="fa fa-external-link"> </li>\
<li type="fa" data-value="fa-sign-in"  class="fa fa-sign-in"> </li>\
<li type="fa" data-value="fa-trophy"  class="fa fa-trophy"> </li>\
<li type="fa" data-value="fa-github-square"  class="fa fa-github-square"> </li>\
<li type="fa" data-value="fa-upload"  class="fa fa-upload"> </li>\
<li type="fa" data-value="fa-lemon-o"  class="fa fa-lemon-o"> </li>\
<li type="fa" data-value="fa-phone"  class="fa fa-phone"> </li>\
<li type="fa" data-value="fa-square-o"  class="fa fa-square-o"> </li>\
<li type="fa" data-value="fa-bookmark-o"  class="fa fa-bookmark-o"> </li>\
<li type="fa" data-value="fa-phone-square"  class="fa fa-phone-square"> </li>\
<li type="fa" data-value="fa-twitter"  class="fa fa-twitter"> </li>\
<li type="fa" data-value="fa-facebook"  class="fa fa-facebook"> </li>\
<li type="fa" data-value="fa-github"  class="fa fa-github"> </li>\
<li type="fa" data-value="fa-unlock"  class="fa fa-unlock"> </li>\
<li type="fa" data-value="fa-credit-card"  class="fa fa-credit-card"> </li>\
<li type="fa" data-value="fa-rss"  class="fa fa-rss"> </li>\
<li type="fa" data-value="fa-hdd-o"  class="fa fa-hdd-o"> </li>\
<li type="fa" data-value="fa-bullhorn"  class="fa fa-bullhorn"> </li>\
<li type="fa" data-value="fa-bell"  class="fa fa-bell"> </li>\
<li type="fa" data-value="fa-certificate"  class="fa fa-certificate"> </li>\
<li type="fa" data-value="fa-hand-o-right"  class="fa fa-hand-o-right"> </li>\
<li type="fa" data-value="fa-hand-o-left"  class="fa fa-hand-o-left"> </li>\
<li type="fa" data-value="fa-hand-o-up"  class="fa fa-hand-o-up"> </li>\
<li type="fa" data-value="fa-hand-o-down"  class="fa fa-hand-o-down"> </li>\
<li type="fa" data-value="fa-arrow-circle-left"  class="fa fa-arrow-circle-left"> </li>\
<li type="fa" data-value="fa-arrow-circle-right"  class="fa fa-arrow-circle-right"> </li>\
<li type="fa" data-value="fa-arrow-circle-up"  class="fa fa-arrow-circle-up"> </li>\
<li type="fa" data-value="fa-arrow-circle-down"  class="fa fa-arrow-circle-down"> </li>\
<li type="fa" data-value="fa-globe"  class="fa fa-globe"> </li>\
<li type="fa" data-value="fa-wrench"  class="fa fa-wrench"> </li>\
<li type="fa" data-value="fa-tasks"  class="fa fa-tasks"> </li>\
<li type="fa" data-value="fa-filter"  class="fa fa-filter"> </li>\
<li type="fa" data-value="fa-briefcase"  class="fa fa-briefcase"> </li>\
<li type="fa" data-value="fa-arrows-alt"  class="fa fa-arrows-alt"> </li>\
<li type="fa" data-value="fa-group"  class="fa fa-group"> </li>\
<li type="fa" data-value="fa-users"  class="fa fa-users"> </li>\
<li type="fa" data-value="fa-chain"  class="fa fa-chain"> </li>\
<li type="fa" data-value="fa-link"  class="fa fa-link"> </li>\
<li type="fa" data-value="fa-cloud"  class="fa fa-cloud"> </li>\
<li type="fa" data-value="fa-flask"  class="fa fa-flask"> </li>\
<li type="fa" data-value="fa-cut"  class="fa fa-cut"> </li>\
<li type="fa" data-value="fa-scissors"  class="fa fa-scissors"> </li>\
<li type="fa" data-value="fa-copy"  class="fa fa-copy"> </li>\
<li type="fa" data-value="fa-files-o"  class="fa fa-files-o"> </li>\
<li type="fa" data-value="fa-paperclip"  class="fa fa-paperclip"> </li>\
<li type="fa" data-value="fa-save"  class="fa fa-save"> </li>\
<li type="fa" data-value="fa-floppy-o"  class="fa fa-floppy-o"> </li>\
<li type="fa" data-value="fa-square"  class="fa fa-square"> </li>\
<li type="fa" data-value="fa-navicon"  class="fa fa-navicon"> </li>\
<li type="fa" data-value="fa-reorder"  class="fa fa-reorder"> </li>\
<li type="fa" data-value="fa-bars"  class="fa fa-bars"> </li>\
<li type="fa" data-value="fa-list-ul"  class="fa fa-list-ul"> </li>\
<li type="fa" data-value="fa-list-ol"  class="fa fa-list-ol"> </li>\
<li type="fa" data-value="fa-strikethrough"  class="fa fa-strikethrough"> </li>\
<li type="fa" data-value="fa-underline"  class="fa fa-underline"> </li>\
<li type="fa" data-value="fa-table"  class="fa fa-table"> </li>\
<li type="fa" data-value="fa-magic"  class="fa fa-magic"> </li>\
<li type="fa" data-value="fa-truck"  class="fa fa-truck"> </li>\
<li type="fa" data-value="fa-pinterest"  class="fa fa-pinterest"> </li>\
<li type="fa" data-value="fa-pinterest-square"  class="fa fa-pinterest-square"> </li>\
<li type="fa" data-value="fa-google-plus-square"  class="fa fa-google-plus-square"> </li>\
<li type="fa" data-value="fa-google-plus"  class="fa fa-google-plus"> </li>\
<li type="fa" data-value="fa-money"  class="fa fa-money"> </li>\
<li type="fa" data-value="fa-caret-down"  class="fa fa-caret-down"> </li>\
<li type="fa" data-value="fa-caret-up"  class="fa fa-caret-up"> </li>\
<li type="fa" data-value="fa-caret-left"  class="fa fa-caret-left"> </li>\
<li type="fa" data-value="fa-caret-right"  class="fa fa-caret-right"> </li>\
<li type="fa" data-value="fa-columns"  class="fa fa-columns"> </li>\
<li type="fa" data-value="fa-unsorted"  class="fa fa-unsorted"> </li>\
<li type="fa" data-value="fa-sort"  class="fa fa-sort"> </li>\
<li type="fa" data-value="fa-sort-down"  class="fa fa-sort-down"> </li>\
<li type="fa" data-value="fa-sort-desc"  class="fa fa-sort-desc"> </li>\
<li type="fa" data-value="fa-sort-up"  class="fa fa-sort-up"> </li>\
<li type="fa" data-value="fa-sort-asc"  class="fa fa-sort-asc"> </li>\
<li type="fa" data-value="fa-envelope"  class="fa fa-envelope"> </li>\
<li type="fa" data-value="fa-linkedin"  class="fa fa-linkedin"> </li>\
<li type="fa" data-value="fa-rotate-left"  class="fa fa-rotate-left"> </li>\
<li type="fa" data-value="fa-undo"  class="fa fa-undo"> </li>\
<li type="fa" data-value="fa-legal"  class="fa fa-legal"> </li>\
<li type="fa" data-value="fa-gavel"  class="fa fa-gavel"> </li>\
<li type="fa" data-value="fa-dashboard"  class="fa fa-dashboard"> </li>\
<li type="fa" data-value="fa-tachometer"  class="fa fa-tachometer"> </li>\
<li type="fa" data-value="fa-comment-o"  class="fa fa-comment-o"> </li>\
<li type="fa" data-value="fa-comments-o"  class="fa fa-comments-o"> </li>\
<li type="fa" data-value="fa-flash"  class="fa fa-flash"> </li>\
<li type="fa" data-value="fa-bolt"  class="fa fa-bolt"> </li>\
<li type="fa" data-value="fa-sitemap"  class="fa fa-sitemap"> </li>\
<li type="fa" data-value="fa-umbrella"  class="fa fa-umbrella"> </li>\
<li type="fa" data-value="fa-paste"  class="fa fa-paste"> </li>\
<li type="fa" data-value="fa-clipboard"  class="fa fa-clipboard"> </li>\
<li type="fa" data-value="fa-lightbulb-o"  class="fa fa-lightbulb-o"> </li>\
<li type="fa" data-value="fa-exchange"  class="fa fa-exchange"> </li>\
<li type="fa" data-value="fa-cloud-download"  class="fa fa-cloud-download"> </li>\
<li type="fa" data-value="fa-cloud-upload"  class="fa fa-cloud-upload"> </li>\
<li type="fa" data-value="fa-user-md"  class="fa fa-user-md"> </li>\
<li type="fa" data-value="fa-stethoscope"  class="fa fa-stethoscope"> </li>\
<li type="fa" data-value="fa-suitcase"  class="fa fa-suitcase"> </li>\
<li type="fa" data-value="fa-bell-o"  class="fa fa-bell-o"> </li>\
<li type="fa" data-value="fa-coffee"  class="fa fa-coffee"> </li>\
<li type="fa" data-value="fa-cutlery"  class="fa fa-cutlery"> </li>\
<li type="fa" data-value="fa-file-text-o"  class="fa fa-file-text-o"> </li>\
<li type="fa" data-value="fa-building-o"  class="fa fa-building-o"> </li>\
<li type="fa" data-value="fa-hospital-o"  class="fa fa-hospital-o"> </li>\
<li type="fa" data-value="fa-ambulance"  class="fa fa-ambulance"> </li>\
<li type="fa" data-value="fa-medkit"  class="fa fa-medkit"> </li>\
<li type="fa" data-value="fa-fighter-jet"  class="fa fa-fighter-jet"> </li>\
<li type="fa" data-value="fa-beer"  class="fa fa-beer"> </li>\
<li type="fa" data-value="fa-h-square"  class="fa fa-h-square"> </li>\
<li type="fa" data-value="fa-plus-square"  class="fa fa-plus-square"> </li>\
<li type="fa" data-value="fa-angle-double-left"  class="fa fa-angle-double-left"> </li>\
<li type="fa" data-value="fa-angle-double-right"  class="fa fa-angle-double-right"> </li>\
<li type="fa" data-value="fa-angle-double-up"  class="fa fa-angle-double-up"> </li>\
<li type="fa" data-value="fa-angle-double-down"  class="fa fa-angle-double-down"> </li>\
<li type="fa" data-value="fa-angle-left"  class="fa fa-angle-left"> </li>\
<li type="fa" data-value="fa-angle-right"  class="fa fa-angle-right"> </li>\
<li type="fa" data-value="fa-angle-up"  class="fa fa-angle-up"> </li>\
<li type="fa" data-value="fa-angle-down"  class="fa fa-angle-down"> </li>\
<li type="fa" data-value="fa-desktop"  class="fa fa-desktop"> </li>\
<li type="fa" data-value="fa-laptop"  class="fa fa-laptop"> </li>\
<li type="fa" data-value="fa-tablet"  class="fa fa-tablet"> </li>\
<li type="fa" data-value="fa-mobile-phone"  class="fa fa-mobile-phone"> </li>\
<li type="fa" data-value="fa-mobile"  class="fa fa-mobile"> </li>\
<li type="fa" data-value="fa-circle-o"  class="fa fa-circle-o"> </li>\
<li type="fa" data-value="fa-quote-left"  class="fa fa-quote-left"> </li>\
<li type="fa" data-value="fa-quote-right"  class="fa fa-quote-right"> </li>\
<li type="fa" data-value="fa-spinner"  class="fa fa-spinner"> </li>\
<li type="fa" data-value="fa-circle"  class="fa fa-circle"> </li>\
<li type="fa" data-value="fa-mail-reply"  class="fa fa-mail-reply"> </li>\
<li type="fa" data-value="fa-reply"  class="fa fa-reply"> </li>\
<li type="fa" data-value="fa-github-alt"  class="fa fa-github-alt"> </li>\
<li type="fa" data-value="fa-folder-o"  class="fa fa-folder-o"> </li>\
<li type="fa" data-value="fa-folder-open-o"  class="fa fa-folder-open-o"> </li>\
<li type="fa" data-value="fa-smile-o"  class="fa fa-smile-o"> </li>\
<li type="fa" data-value="fa-frown-o"  class="fa fa-frown-o"> </li>\
<li type="fa" data-value="fa-meh-o"  class="fa fa-meh-o"> </li>\
<li type="fa" data-value="fa-gamepad"  class="fa fa-gamepad"> </li>\
<li type="fa" data-value="fa-keyboard-o"  class="fa fa-keyboard-o"> </li>\
<li type="fa" data-value="fa-flag-o"  class="fa fa-flag-o"> </li>\
<li type="fa" data-value="fa-flag-checkered"  class="fa fa-flag-checkered"> </li>\
<li type="fa" data-value="fa-terminal"  class="fa fa-terminal"> </li>\
<li type="fa" data-value="fa-code"  class="fa fa-code"> </li>\
<li type="fa" data-value="fa-mail-reply-all"  class="fa fa-mail-reply-all"> </li>\
<li type="fa" data-value="fa-reply-all"  class="fa fa-reply-all"> </li>\
<li type="fa" data-value="fa-star-half-empty"  class="fa fa-star-half-empty"> </li>\
<li type="fa" data-value="fa-star-half-full"  class="fa fa-star-half-full"> </li>\
<li type="fa" data-value="fa-star-half-o"  class="fa fa-star-half-o"> </li>\
<li type="fa" data-value="fa-location-arrow"  class="fa fa-location-arrow"> </li>\
<li type="fa" data-value="fa-crop"  class="fa fa-crop"> </li>\
<li type="fa" data-value="fa-code-fork"  class="fa fa-code-fork"> </li>\
<li type="fa" data-value="fa-unlink"  class="fa fa-unlink"> </li>\
<li type="fa" data-value="fa-chain-broken"  class="fa fa-chain-broken"> </li>\
<li type="fa" data-value="fa-question"  class="fa fa-question"> </li>\
<li type="fa" data-value="fa-info"  class="fa fa-info"> </li>\
<li type="fa" data-value="fa-exclamation"  class="fa fa-exclamation"> </li>\
<li type="fa" data-value="fa-superscript"  class="fa fa-superscript"> </li>\
<li type="fa" data-value="fa-subscript"  class="fa fa-subscript"> </li>\
<li type="fa" data-value="fa-eraser"  class="fa fa-eraser"> </li>\
<li type="fa" data-value="fa-puzzle-piece"  class="fa fa-puzzle-piece"> </li>\
<li type="fa" data-value="fa-microphone"  class="fa fa-microphone"> </li>\
<li type="fa" data-value="fa-microphone-slash"  class="fa fa-microphone-slash"> </li>\
<li type="fa" data-value="fa-shield"  class="fa fa-shield"> </li>\
<li type="fa" data-value="fa-calendar-o"  class="fa fa-calendar-o"> </li>\
<li type="fa" data-value="fa-fire-extinguisher"  class="fa fa-fire-extinguisher"> </li>\
<li type="fa" data-value="fa-rocket"  class="fa fa-rocket"> </li>\
<li type="fa" data-value="fa-maxcdn"  class="fa fa-maxcdn"> </li>\
<li type="fa" data-value="fa-chevron-circle-left"  class="fa fa-chevron-circle-left"> </li>\
<li type="fa" data-value="fa-chevron-circle-right"  class="fa fa-chevron-circle-right"> </li>\
<li type="fa" data-value="fa-chevron-circle-up"  class="fa fa-chevron-circle-up"> </li>\
<li type="fa" data-value="fa-chevron-circle-down"  class="fa fa-chevron-circle-down"> </li>\
<li type="fa" data-value="fa-anchor"  class="fa fa-anchor"> </li>\
<li type="fa" data-value="fa-unlock-alt"  class="fa fa-unlock-alt"> </li>\
<li type="fa" data-value="fa-bullseye"  class="fa fa-bullseye"> </li>\
<li type="fa" data-value="fa-ellipsis-h"  class="fa fa-ellipsis-h"> </li>\
<li type="fa" data-value="fa-ellipsis-v"  class="fa fa-ellipsis-v"> </li>\
<li type="fa" data-value="fa-rss-square"  class="fa fa-rss-square"> </li>\
<li type="fa" data-value="fa-play-circle"  class="fa fa-play-circle"> </li>\
<li type="fa" data-value="fa-ticket"  class="fa fa-ticket"> </li>\
<li type="fa" data-value="fa-minus-square"  class="fa fa-minus-square"> </li>\
<li type="fa" data-value="fa-minus-square-o"  class="fa fa-minus-square-o"> </li>\
<li type="fa" data-value="fa-level-up"  class="fa fa-level-up"> </li>\
<li type="fa" data-value="fa-level-down"  class="fa fa-level-down"> </li>\
<li type="fa" data-value="fa-check-square"  class="fa fa-check-square"> </li>\
<li type="fa" data-value="fa-pencil-square"  class="fa fa-pencil-square"> </li>\
<li type="fa" data-value="fa-external-link-square"  class="fa fa-external-link-square"> </li>\
<li type="fa" data-value="fa-share-square"  class="fa fa-share-square"> </li>\
<li type="fa" data-value="fa-compass"  class="fa fa-compass"> </li>\
<li type="fa" data-value="fa-toggle-down"  class="fa fa-toggle-down"> </li>\
<li type="fa" data-value="fa-caret-square-o-down"  class="fa fa-caret-square-o-down"> </li>\
<li type="fa" data-value="fa-toggle-up"  class="fa fa-toggle-up"> </li>\
<li type="fa" data-value="fa-caret-square-o-up"  class="fa fa-caret-square-o-up"> </li>\
<li type="fa" data-value="fa-toggle-right"  class="fa fa-toggle-right"> </li>\
<li type="fa" data-value="fa-caret-square-o-right"  class="fa fa-caret-square-o-right"> </li>\
<li type="fa" data-value="fa-euro"  class="fa fa-euro"> </li>\
<li type="fa" data-value="fa-eur"  class="fa fa-eur"> </li>\
<li type="fa" data-value="fa-gbp"  class="fa fa-gbp"> </li>\
<li type="fa" data-value="fa-dollar"  class="fa fa-dollar"> </li>\
<li type="fa" data-value="fa-usd"  class="fa fa-usd"> </li>\
<li type="fa" data-value="fa-rupee"  class="fa fa-rupee"> </li>\
<li type="fa" data-value="fa-inr"  class="fa fa-inr"> </li>\
<li type="fa" data-value="fa-cny"  class="fa fa-cny"> </li>\
<li type="fa" data-value="fa-rmb"  class="fa fa-rmb"> </li>\
<li type="fa" data-value="fa-yen"  class="fa fa-yen"> </li>\
<li type="fa" data-value="fa-jpy"  class="fa fa-jpy"> </li>\
<li type="fa" data-value="fa-ruble"  class="fa fa-ruble"> </li>\
<li type="fa" data-value="fa-rouble"  class="fa fa-rouble"> </li>\
<li type="fa" data-value="fa-rub"  class="fa fa-rub"> </li>\
<li type="fa" data-value="fa-won"  class="fa fa-won"> </li>\
<li type="fa" data-value="fa-krw"  class="fa fa-krw"> </li>\
<li type="fa" data-value="fa-bitcoin"  class="fa fa-bitcoin"> </li>\
<li type="fa" data-value="fa-btc"  class="fa fa-btc"> </li>\
<li type="fa" data-value="fa-file"  class="fa fa-file"> </li>\
<li type="fa" data-value="fa-file-text"  class="fa fa-file-text"> </li>\
<li type="fa" data-value="fa-sort-alpha-asc"  class="fa fa-sort-alpha-asc"> </li>\
<li type="fa" data-value="fa-sort-alpha-desc"  class="fa fa-sort-alpha-desc"> </li>\
<li type="fa" data-value="fa-sort-amount-asc"  class="fa fa-sort-amount-asc"> </li>\
<li type="fa" data-value="fa-sort-amount-desc"  class="fa fa-sort-amount-desc"> </li>\
<li type="fa" data-value="fa-sort-numeric-asc"  class="fa fa-sort-numeric-asc"> </li>\
<li type="fa" data-value="fa-sort-numeric-desc"  class="fa fa-sort-numeric-desc"> </li>\
<li type="fa" data-value="fa-thumbs-up"  class="fa fa-thumbs-up"> </li>\
<li type="fa" data-value="fa-thumbs-down"  class="fa fa-thumbs-down"> </li>\
<li type="fa" data-value="fa-youtube-square"  class="fa fa-youtube-square"> </li>\
<li type="fa" data-value="fa-youtube"  class="fa fa-youtube"> </li>\
<li type="fa" data-value="fa-xing"  class="fa fa-xing"> </li>\
<li type="fa" data-value="fa-xing-square"  class="fa fa-xing-square"> </li>\
<li type="fa" data-value="fa-youtube-play"  class="fa fa-youtube-play"> </li>\
<li type="fa" data-value="fa-dropbox"  class="fa fa-dropbox"> </li>\
<li type="fa" data-value="fa-stack-overflow"  class="fa fa-stack-overflow"> </li>\
<li type="fa" data-value="fa-instagram"  class="fa fa-instagram"> </li>\
<li type="fa" data-value="fa-flickr"  class="fa fa-flickr"> </li>\
<li type="fa" data-value="fa-adn"  class="fa fa-adn"> </li>\
<li type="fa" data-value="fa-bitbucket"  class="fa fa-bitbucket"> </li>\
<li type="fa" data-value="fa-bitbucket-square"  class="fa fa-bitbucket-square"> </li>\
<li type="fa" data-value="fa-tumblr"  class="fa fa-tumblr"> </li>\
<li type="fa" data-value="fa-tumblr-square"  class="fa fa-tumblr-square"> </li>\
<li type="fa" data-value="fa-long-arrow-down"  class="fa fa-long-arrow-down"> </li>\
<li type="fa" data-value="fa-long-arrow-up"  class="fa fa-long-arrow-up"> </li>\
<li type="fa" data-value="fa-long-arrow-left"  class="fa fa-long-arrow-left"> </li>\
<li type="fa" data-value="fa-long-arrow-right"  class="fa fa-long-arrow-right"> </li>\
<li type="fa" data-value="fa-apple"  class="fa fa-apple"> </li>\
<li type="fa" data-value="fa-windows"  class="fa fa-windows"> </li>\
<li type="fa" data-value="fa-android"  class="fa fa-android"> </li>\
<li type="fa" data-value="fa-linux"  class="fa fa-linux"> </li>\
<li type="fa" data-value="fa-dribbble"  class="fa fa-dribbble"> </li>\
<li type="fa" data-value="fa-skype"  class="fa fa-skype"> </li>\
<li type="fa" data-value="fa-foursquare"  class="fa fa-foursquare"> </li>\
<li type="fa" data-value="fa-trello"  class="fa fa-trello"> </li>\
<li type="fa" data-value="fa-female"  class="fa fa-female"> </li>\
<li type="fa" data-value="fa-male"  class="fa fa-male"> </li>\
<li type="fa" data-value="fa-gittip"  class="fa fa-gittip"> </li>\
<li type="fa" data-value="fa-sun-o"  class="fa fa-sun-o"> </li>\
<li type="fa" data-value="fa-moon-o"  class="fa fa-moon-o"> </li>\
<li type="fa" data-value="fa-archive"  class="fa fa-archive"> </li>\
<li type="fa" data-value="fa-bug"  class="fa fa-bug"> </li>\
<li type="fa" data-value="fa-vk"  class="fa fa-vk"> </li>\
<li type="fa" data-value="fa-weibo"  class="fa fa-weibo"> </li>\
<li type="fa" data-value="fa-renren"  class="fa fa-renren"> </li>\
<li type="fa" data-value="fa-pagelines"  class="fa fa-pagelines"> </li>\
<li type="fa" data-value="fa-stack-exchange"  class="fa fa-stack-exchange"> </li>\
<li type="fa" data-value="fa-arrow-circle-o-right"  class="fa fa-arrow-circle-o-right"> </li>\
<li type="fa" data-value="fa-arrow-circle-o-left"  class="fa fa-arrow-circle-o-left"> </li>\
<li type="fa" data-value="fa-toggle-left"  class="fa fa-toggle-left"> </li>\
<li type="fa" data-value="fa-caret-square-o-left"  class="fa fa-caret-square-o-left"> </li>\
<li type="fa" data-value="fa-dot-circle-o"  class="fa fa-dot-circle-o"> </li>\
<li type="fa" data-value="fa-wheelchair"  class="fa fa-wheelchair"> </li>\
<li type="fa" data-value="fa-vimeo-square"  class="fa fa-vimeo-square"> </li>\
<li type="fa" data-value="fa-turkish-lira"  class="fa fa-turkish-lira"> </li>\
<li type="fa" data-value="fa-try"  class="fa fa-try"> </li>\
<li type="fa" data-value="fa-plus-square-o"  class="fa fa-plus-square-o"> </li>\
<li type="fa" data-value="fa-space-shuttle"  class="fa fa-space-shuttle"> </li>\
<li type="fa" data-value="fa-slack"  class="fa fa-slack"> </li>\
<li type="fa" data-value="fa-envelope-square"  class="fa fa-envelope-square"> </li>\
<li type="fa" data-value="fa-wordpress"  class="fa fa-wordpress"> </li>\
<li type="fa" data-value="fa-openid"  class="fa fa-openid"> </li>\
<li type="fa" data-value="fa-institution"  class="fa fa-institution"> </li>\
<li type="fa" data-value="fa-bank"  class="fa fa-bank"> </li>\
<li type="fa" data-value="fa-university"  class="fa fa-university"> </li>\
<li type="fa" data-value="fa-mortar-board"  class="fa fa-mortar-board"> </li>\
<li type="fa" data-value="fa-graduation-cap"  class="fa fa-graduation-cap"> </li>\
<li type="fa" data-value="fa-yahoo"  class="fa fa-yahoo"> </li>\
<li type="fa" data-value="fa-google"  class="fa fa-google"> </li>\
<li type="fa" data-value="fa-reddit"  class="fa fa-reddit"> </li>\
<li type="fa" data-value="fa-reddit-square"  class="fa fa-reddit-square"> </li>\
<li type="fa" data-value="fa-stumbleupon-circle"  class="fa fa-stumbleupon-circle"> </li>\
<li type="fa" data-value="fa-stumbleupon"  class="fa fa-stumbleupon"> </li>\
<li type="fa" data-value="fa-delicious"  class="fa fa-delicious"> </li>\
<li type="fa" data-value="fa-digg"  class="fa fa-digg"> </li>\
<li type="fa" data-value="fa-pied-piper"  class="fa fa-pied-piper"> </li>\
<li type="fa" data-value="fa-pied-piper-alt"  class="fa fa-pied-piper-alt"> </li>\
<li type="fa" data-value="fa-drupal"  class="fa fa-drupal"> </li>\
<li type="fa" data-value="fa-joomla"  class="fa fa-joomla"> </li>\
<li type="fa" data-value="fa-language"  class="fa fa-language"> </li>\
<li type="fa" data-value="fa-fax"  class="fa fa-fax"> </li>\
<li type="fa" data-value="fa-building"  class="fa fa-building"> </li>\
<li type="fa" data-value="fa-child"  class="fa fa-child"> </li>\
<li type="fa" data-value="fa-paw"  class="fa fa-paw"> </li>\
<li type="fa" data-value="fa-spoon"  class="fa fa-spoon"> </li>\
<li type="fa" data-value="fa-cube"  class="fa fa-cube"> </li>\
<li type="fa" data-value="fa-cubes"  class="fa fa-cubes"> </li>\
<li type="fa" data-value="fa-behance"  class="fa fa-behance"> </li>\
<li type="fa" data-value="fa-behance-square"  class="fa fa-behance-square"> </li>\
<li type="fa" data-value="fa-steam"  class="fa fa-steam"> </li>\
<li type="fa" data-value="fa-steam-square"  class="fa fa-steam-square"> </li>\
<li type="fa" data-value="fa-recycle"  class="fa fa-recycle"> </li>\
<li type="fa" data-value="fa-automobile"  class="fa fa-automobile"> </li>\
<li type="fa" data-value="fa-car"  class="fa fa-car"> </li>\
<li type="fa" data-value="fa-cab"  class="fa fa-cab"> </li>\
<li type="fa" data-value="fa-taxi"  class="fa fa-taxi"> </li>\
<li type="fa" data-value="fa-tree"  class="fa fa-tree"> </li>\
<li type="fa" data-value="fa-spotify"  class="fa fa-spotify"> </li>\
<li type="fa" data-value="fa-deviantart"  class="fa fa-deviantart"> </li>\
<li type="fa" data-value="fa-soundcloud"  class="fa fa-soundcloud"> </li>\
<li type="fa" data-value="fa-database"  class="fa fa-database"> </li>\
<li type="fa" data-value="fa-file-pdf-o"  class="fa fa-file-pdf-o"> </li>\
<li type="fa" data-value="fa-file-word-o"  class="fa fa-file-word-o"> </li>\
<li type="fa" data-value="fa-file-excel-o"  class="fa fa-file-excel-o"> </li>\
<li type="fa" data-value="fa-file-powerpoint-o"  class="fa fa-file-powerpoint-o"> </li>\
<li type="fa" data-value="fa-file-photo-o"  class="fa fa-file-photo-o"> </li>\
<li type="fa" data-value="fa-file-picture-o"  class="fa fa-file-picture-o"> </li>\
<li type="fa" data-value="fa-file-image-o"  class="fa fa-file-image-o"> </li>\
<li type="fa" data-value="fa-file-zip-o"  class="fa fa-file-zip-o"> </li>\
<li type="fa" data-value="fa-file-archive-o"  class="fa fa-file-archive-o"> </li>\
<li type="fa" data-value="fa-file-sound-o"  class="fa fa-file-sound-o"> </li>\
<li type="fa" data-value="fa-file-audio-o"  class="fa fa-file-audio-o"> </li>\
<li type="fa" data-value="fa-file-movie-o"  class="fa fa-file-movie-o"> </li>\
<li type="fa" data-value="fa-file-video-o"  class="fa fa-file-video-o"> </li>\
<li type="fa" data-value="fa-file-code-o"  class="fa fa-file-code-o"> </li>\
<li type="fa" data-value="fa-vine"  class="fa fa-vine"> </li>\
<li type="fa" data-value="fa-codepen"  class="fa fa-codepen"> </li>\
<li type="fa" data-value="fa-jsfiddle"  class="fa fa-jsfiddle"> </li>\
<li type="fa" data-value="fa-life-bouy"  class="fa fa-life-bouy"> </li>\
<li type="fa" data-value="fa-life-buoy"  class="fa fa-life-buoy"> </li>\
<li type="fa" data-value="fa-life-saver"  class="fa fa-life-saver"> </li>\
<li type="fa" data-value="fa-support"  class="fa fa-support"> </li>\
<li type="fa" data-value="fa-life-ring"  class="fa fa-life-ring"> </li>\
<li type="fa" data-value="fa-circle-o-notch"  class="fa fa-circle-o-notch"> </li>\
<li type="fa" data-value="fa-ra"  class="fa fa-ra"> </li>\
<li type="fa" data-value="fa-rebel"  class="fa fa-rebel"> </li>\
<li type="fa" data-value="fa-ge"  class="fa fa-ge"> </li>\
<li type="fa" data-value="fa-empire"  class="fa fa-empire"> </li>\
<li type="fa" data-value="fa-git-square"  class="fa fa-git-square"> </li>\
<li type="fa" data-value="fa-git"  class="fa fa-git"> </li>\
<li type="fa" data-value="fa-hacker-news"  class="fa fa-hacker-news"> </li>\
<li type="fa" data-value="fa-tencent-weibo"  class="fa fa-tencent-weibo"> </li>\
<li type="fa" data-value="fa-qq"  class="fa fa-qq"> </li>\
<li type="fa" data-value="fa-wechat"  class="fa fa-wechat"> </li>\
<li type="fa" data-value="fa-weixin"  class="fa fa-weixin"> </li>\
<li type="fa" data-value="fa-send"  class="fa fa-send"> </li>\
<li type="fa" data-value="fa-paper-plane"  class="fa fa-paper-plane"> </li>\
<li type="fa" data-value="fa-send-o"  class="fa fa-send-o"> </li>\
<li type="fa" data-value="fa-paper-plane-o"  class="fa fa-paper-plane-o"> </li>\
<li type="fa" data-value="fa-history"  class="fa fa-history"> </li>\
<li type="fa" data-value="fa-circle-thin"  class="fa fa-circle-thin"> </li>\
<li type="fa" data-value="fa-header"  class="fa fa-header"> </li>\
<li type="fa" data-value="fa-paragraph"  class="fa fa-paragraph"> </li>\
<li type="fa" data-value="fa-sliders"  class="fa fa-sliders"> </li>\
<li type="fa" data-value="fa-share-alt"  class="fa fa-share-alt"> </li>\
<li type="fa" data-value="fa-share-alt-square"  class="fa fa-share-alt-square"> </li>\
<li type="fa" data-value="fa-bomb"  class="fa fa-bomb"> </li>\
<li type="fa" data-value="fa-soccer-ball-o"  class="fa fa-soccer-ball-o"> </li>\
<li type="fa" data-value="fa-futbol-o"  class="fa fa-futbol-o"> </li>\
<li type="fa" data-value="fa-tty"  class="fa fa-tty"> </li>\
<li type="fa" data-value="fa-binoculars"  class="fa fa-binoculars"> </li>\
<li type="fa" data-value="fa-plug"  class="fa fa-plug"> </li>\
<li type="fa" data-value="fa-slideshare"  class="fa fa-slideshare"> </li>\
<li type="fa" data-value="fa-twitch"  class="fa fa-twitch"> </li>\
<li type="fa" data-value="fa-yelp"  class="fa fa-yelp"> </li>\
<li type="fa" data-value="fa-newspaper-o"  class="fa fa-newspaper-o"> </li>\
<li type="fa" data-value="fa-wifi"  class="fa fa-wifi"> </li>\
<li type="fa" data-value="fa-calculator"  class="fa fa-calculator"> </li>\
<li type="fa" data-value="fa-paypal"  class="fa fa-paypal"> </li>\
<li type="fa" data-value="fa-google-wallet"  class="fa fa-google-wallet"> </li>\
<li type="fa" data-value="fa-cc-visa"  class="fa fa-cc-visa"> </li>\
<li type="fa" data-value="fa-cc-mastercard"  class="fa fa-cc-mastercard"> </li>\
<li type="fa" data-value="fa-cc-discover"  class="fa fa-cc-discover"> </li>\
<li type="fa" data-value="fa-cc-amex"  class="fa fa-cc-amex"> </li>\
<li type="fa" data-value="fa-cc-paypal"  class="fa fa-cc-paypal"> </li>\
<li type="fa" data-value="fa-cc-stripe"  class="fa fa-cc-stripe"> </li>\
<li type="fa" data-value="fa-bell-slash"  class="fa fa-bell-slash"> </li>\
<li type="fa" data-value="fa-bell-slash-o"  class="fa fa-bell-slash-o"> </li>\
<li type="fa" data-value="fa-trash"  class="fa fa-trash"> </li>\
<li type="fa" data-value="fa-copyright"  class="fa fa-copyright"> </li>\
<li type="fa" data-value="fa-at"  class="fa fa-at"> </li>\
<li type="fa" data-value="fa-eyedropper"  class="fa fa-eyedropper"> </li>\
<li type="fa" data-value="fa-paint-brush"  class="fa fa-paint-brush"> </li>\
<li type="fa" data-value="fa-birthday-cake"  class="fa fa-birthday-cake"> </li>\
<li type="fa" data-value="fa-area-chart"  class="fa fa-area-chart"> </li>\
<li type="fa" data-value="fa-pie-chart"  class="fa fa-pie-chart"> </li>\
<li type="fa" data-value="fa-line-chart"  class="fa fa-line-chart"> </li>\
<li type="fa" data-value="fa-lastfm"  class="fa fa-lastfm"> </li>\
<li type="fa" data-value="fa-lastfm-square"  class="fa fa-lastfm-square"> </li>\
<li type="fa" data-value="fa-toggle-off"  class="fa fa-toggle-off"> </li>\
<li type="fa" data-value="fa-toggle-on"  class="fa fa-toggle-on"> </li>\
<li type="fa" data-value="fa-bicycle"  class="fa fa-bicycle"> </li>\
<li type="fa" data-value="fa-bus"  class="fa fa-bus"> </li>\
<li type="fa" data-value="fa-ioxhost"  class="fa fa-ioxhost"> </li>\
<li type="fa" data-value="fa-angellist"  class="fa fa-angellist"> </li>\
<li type="fa" data-value="fa-cc"  class="fa fa-cc"> </li>\
<li type="fa" data-value="fa-shekel"  class="fa fa-shekel"> </li>\
<li type="fa" data-value="fa-ils"  class="fa fa-ils"> </li>\
<li type="fa" data-value="fa-meanpath"  class="fa fa-meanpath"> </li>');
var ebsfaicons='';
jQuery(faicons).each(function(ind,val){
    ebsfaicons+=val.outerHTML;
});

function tx_font_awesome_include($class){
    var icons='';
    icons+='<ul name="oscitas-heading-icon_data" class="'+$class+'">'+ebsfaicons+'</ul>';
    return icons;
}

/*
Add Color picker
 */

function tx_color_picker($ele){
    jQuery($ele).wpColorPicker({
        clear: function(){
            jQuery(this).parents('.wp-picker-container').find('.wp-color-result').addClass('ebs-picked-cleared');
        },
        change: function(){
            jQuery(this).parents('.wp-picker-container').find('.wp-color-result').removeClass('ebs-picked-cleared');
        }
    }).each(function(){
            if(jQuery(this).wpColorPicker('color') == '')
                jQuery(this).parents('.wp-picker-container').find('.wp-color-result').addClass('ebs-picked-cleared');
        });
}

function tx_footer_include(){	
	var tx_footer=jQuery('<div class="tx-bottom-promo"><span class="tx-outer-footer"><a href="http://www.templatesnext.org/icreate/?page_id=541" target="_blank">Demo and Documentation</a> | <a href="http://templatesnext.org/ispirit/landing/" target="_blank">i-spirit, more flexibilty, more power</a></span></div>').html();
	//tx_footer=tx_footer.outerHTML;
    return tx_footer;
}


function tx_slider_cat(){	
	var tx_slider_cat_list = tx_t1;
	return tx_slider_cat_list;
}	

/*
//Insert tx shortcode media button
window.addEventListener("load", function(){
    document.getElementById("insert-tx-button").onclick = function(){	
		var $form = jQuery("#txshortcodes-form");
		jQuery.colorbox({inline:true, href:"#tx-shortcode-form"});
	}
});
*/





