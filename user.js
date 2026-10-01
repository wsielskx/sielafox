//
/* You may copy+paste this file and use it as it is.
 *
 * If you make changes to your about:config while the program is running, the
 * changes will be overwritten by the user.js when the application restarts.
 *
 * To make lasting changes to preferences, you will have to edit the user.js.
 */

/****************************************************************************
 * Betterfox                                                                *
 * "Ad meliora"                                                             *
 * version: 154                                                             *
 * url: https://github.com/yokoffing/Betterfox                              *
****************************************************************************/

/****************************************************************************
 * SECTION: FASTFOX                                                         *
****************************************************************************/
/** GENERAL ***/
user_pref("gfx.content.skia-font-cache-size", 20);
user_pref("content.notify.interval", 100000);

/** GFX ***/
user_pref("gfx.canvas.accelerated.cache-size", 512);

/** MEDIA CACHE ***/
user_pref("media.cache_readahead_limit", 3600);
user_pref("media.cache_resume_threshold", 1800);

/** IMAGE CACHE ***/
user_pref("image.mem.decode_bytes_at_a_time", 32768);

/** NETWORKING ***/
user_pref("network.buffer.cache.size", 65535);
user_pref("network.buffer.cache.count", 48);
user_pref("network.http.max-connections", 1800);
user_pref("network.http.max-persistent-connections-per-server", 10);
user_pref("network.http.max-urgent-start-excessive-connections-per-host", 5);
user_pref("network.http.request.max-start-delay", 5);
user_pref("network.dnsCacheExpiration", 3600);

/****************************************************************************
 * SECTION: SECUREFOX                                                       *
****************************************************************************/
/** TRACKING PROTECTION ***/
user_pref("browser.contentblocking.category", "strict");
user_pref("browser.download.start_downloads_in_tmp_dir", true);
user_pref("browser.uitour.enabled", false);
user_pref("privacy.globalprivacycontrol.enabled", true);

/** OCSP & CERTS / HPKP ***/
user_pref("security.OCSP.enabled", 0);
user_pref("privacy.antitracking.isolateContentScriptResources", true);
user_pref("security.csp.reporting.enabled", false);

/** SSL / TLS ***/
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);
user_pref("browser.xul.error_pages.expert_bad_cert", true);
user_pref("security.tls.enable_0rtt_data", false);

/** DISK AVOIDANCE ***/
user_pref("browser.cache.disk.enable", false);
user_pref("browser.privatebrowsing.forceMediaMemoryCache", true);
user_pref("media.memory_cache_max_size", 65536);
user_pref("browser.sessionstore.interval", 60000);

/** SHUTDOWN & SANITIZING ***/
user_pref("privacy.history.custom", true);

/** SPECULATIVE LOADING ***/
user_pref("network.http.speculative-parallel-limit", 0);
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true);
user_pref("browser.urlbar.speculativeConnect.enabled", false);
user_pref("browser.places.speculativeConnect.enabled", false);
user_pref("network.prefetch-next", false);

/** SEARCH / URL BAR ***/
user_pref("browser.urlbar.trimHttps", true);
user_pref("browser.urlbar.untrimOnUserInteraction.featureGate", true);
user_pref("browser.search.separatePrivateDefault.ui.enabled", true);
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.urlbar.quicksuggest.enabled", false);
user_pref("browser.urlbar.groupLabels.enabled", false);
user_pref("browser.formfill.enable", false);
user_pref("network.IDN_show_punycode", true);

/** HTTPS-ONLY MODE ***/
user_pref("dom.security.https_only_mode", true);
user_pref("dom.security.https_only_mode_error_page_user_suggestions", true);

/** PASSWORDS ***/
user_pref("signon.formlessCapture.enabled", false);
user_pref("signon.privateBrowsingCapture.enabled", false);
user_pref("network.auth.subresource-http-auth-allow", 1);
user_pref("editor.truncate_user_pastes", false);

/** EXTENSIONS ***/
user_pref("extensions.enabledScopes", 5);

/** HEADERS / REFERERS ***/
user_pref("network.http.referer.XOriginTrimmingPolicy", 2);

/** VARIOUS ***/
user_pref("pdfjs.enableScripting", false);

/** SAFE BROWSING ***/
user_pref("browser.safebrowsing.downloads.remote.enabled", false);

/** MOZILLA ***/
user_pref("permissions.default.desktop-notification", 2);
user_pref("permissions.default.geo", 2);
user_pref("geo.provider.network.url", "https://beacondb.net/v1/geolocate");
user_pref("browser.search.update", false);
user_pref("permissions.manager.defaultsUrl", "");
user_pref("extensions.getAddons.cache.enabled", false);

/** TELEMETRY ***/
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.coverage.opt-out", true);
user_pref("toolkit.coverage.opt-out", true);
user_pref("toolkit.coverage.endpoint.base", "");
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("datareporting.usage.uploadEnabled", false);

/** EXPERIMENTS ***/
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");
user_pref("nimbus.rollouts.enabled", false);

/** CRASH REPORTS ***/
user_pref("breakpad.reportURL", "");
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("browser.crashReports.unsubmittedCheck.enabled", false);

/****************************************************************************
 * SECTION: PESKYFOX                                                        *
****************************************************************************/
/** MOZILLA UI ***/
user_pref("extensions.getAddons.showPane", false);
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
user_pref("browser.discovery.enabled", false);
user_pref("browser.shell.checkDefaultBrowser", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);
user_pref("browser.preferences.moreFromMozilla", false);
user_pref("browser.aboutConfig.showWarning", false);
user_pref("browser.startup.homepage_override.mstone", "ignore");
user_pref("browser.aboutwelcome.enabled", false);
user_pref("browser.profiles.enabled", true);

/** THEME ADJUSTMENTS ***/
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
user_pref("browser.compactmode.show", true);
user_pref("browser.privateWindowSeparation.enabled", false); // WINDOWS

/** AI ***/
user_pref("browser.ai.control.default", "blocked");
user_pref("browser.ml.enable", false);
user_pref("browser.ml.chat.enabled", false);
user_pref("browser.ml.chat.menu", false);
user_pref("browser.tabs.groups.smart.enabled", false);
user_pref("browser.ml.linkPreview.enabled", false);

/** FULLSCREEN NOTICE ***/
user_pref("full-screen-api.transition-duration.enter", "0 0");
user_pref("full-screen-api.transition-duration.leave", "0 0");
user_pref("full-screen-api.warning.timeout", 0);

/** URL BAR ***/
user_pref("browser.urlbar.trending.featureGate", false);

/** NEW TAB PAGE ***/
user_pref("browser.newtabpage.activity-stream.default.sites", "");
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredCheckboxes", false);

/** DOWNLOADS ***/
user_pref("browser.download.manager.addToRecentDocs", false);

/** PDF ***/
user_pref("browser.download.open_pdf_attachments_inline", true);

/** TAB BEHAVIOR ***/
user_pref("browser.bookmarks.openInTabClosesMenu", false);
user_pref("findbar.highlightAll", true);

/****************************************************************************
 * SECTION: SMOOTHFOX                                                       *
****************************************************************************/
// visit https://github.com/yokoffing/Betterfox/blob/main/Smoothfox.js
// Enter your scrolling overrides below this line:


/****************************************************************************
 * START: MY OVERRIDES                                                      *
****************************************************************************/
// visit https://github.com/yokoffing/Betterfox/wiki/Common-Overrides
// visit https://github.com/yokoffing/Betterfox/wiki/Optional-Hardening
// Enter your personal overrides below this line:


/****************************************************************************
 * END: BETTERFOX                                                           *
****************************************************************************/

/****************************************************************************
 * START: SIELAFOX OVERRIDES                                                *
 * Everything below is ours. The part above is upstream Betterfox, verbatim; *
 * refresh it with scripts/update-betterfox.sh and never edit it by hand.    *
 ****************************************************************************/

/** BROWSER BEHAVIOUR ***/
user_pref("browser.startup.homepage", "about:blank");
user_pref("browser.tabs.warnOnClose", false);
user_pref("extensions.formautofill.addresses.enabled", true);
user_pref("browser.urlbar.trimURLs", true);

/** PASSWORDS: Bitwarden / Proton Pass, not Firefox ***/
user_pref("signon.rememberSignons", false);
user_pref("signon.autofillForms", false);

/** CONTAINERS (Sidebery) ***/
user_pref("privacy.userContext.ui.enabled", true);

/** USERCHROME / SHYFOX ***/
user_pref("svg.context-properties.content.enabled", true);
user_pref("browser.uidensity", 1);
user_pref("widget.macos.titlebar-blend-mode.behind-window", true);
user_pref("browser.tabs.allow_transparent_browser", false);
user_pref("sidebar.revamp", false);
user_pref("sidebar.verticalTabs", false);
user_pref("uc.tweak.sidebar.wide", true);
user_pref("uc.tweak.borderless", true);
user_pref("uc.tweak.borderless.no-round", true);
user_pref("uc.tweak.theme.sidebery", true);
user_pref("uc.tweak.urlbar.not-floating", true);

/** DEVTOOLS: Browser Toolbox for userChrome work ***/
user_pref("devtools.chrome.enabled", true);
user_pref("devtools.debugger.remote-enabled", true);
user_pref("devtools.browserconsole.contentMessages", true);

/** SMOOTHFOX (scrolling) ***/
// visit https://github.com/yokoffing/Betterfox/blob/main/Smoothfox.js
user_pref("apz.overscroll.enabled", true); // DEFAULT NON-LINUX
user_pref("general.smoothScroll", true); // DEFAULT
user_pref("general.smoothScroll.msdPhysics.continuousMotionMaxDeltaMS", 12);
user_pref("general.smoothScroll.msdPhysics.enabled", true);
user_pref("general.smoothScroll.msdPhysics.motionBeginSpringConstant", 600);
user_pref("general.smoothScroll.msdPhysics.regularSpringConstant", 650);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaMS", 25);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaRatio", "2");
user_pref("general.smoothScroll.msdPhysics.slowdownSpringConstant", 250);
user_pref("general.smoothScroll.currentVelocityWeighting", "1");
user_pref("general.smoothScroll.stopDecelerationWeighting", "1");
user_pref("mousewheel.default.delta_multiplier_y", 300);

/** NETWORK / TLS (carried over from the old Fastfox+Securefox extras) ***/
user_pref("network.http.http3.max_concurrent_streams", 1000);
user_pref("network.http.connection-retry-timeout", 0);
user_pref("browser.cache.memory.capacity", 65536);
user_pref("network.http.connection-timeout", 90);
user_pref("network.http.keep-alive.timeout", 90);
user_pref("security.OCSP.timeoutMilliseconds.request", 5000);
user_pref("security.ssl.enable_ocsp_stapling", true);
user_pref("security.tls.version.min", 3); // 3 = TLS 1.2
user_pref("network.early-hints.enabled", true);
user_pref("nglayout.initialpaint.delay", 0);
user_pref("network.http.throttle.enable", true);
user_pref("network.http.throttle.suspend-for", 200);
user_pref("privacy.partition.network_state", true);
user_pref("security.ssl.require_safe_negotiation", true);
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);

/** RESET: undo leftovers of the old Selenium-era prefs ***/
// Removing a pref from user.js does NOT reset it: Firefox keeps the old value
// in prefs.js as "user set". These lines pin the Firefox defaults explicitly.
user_pref("app.update.auto", true);
user_pref("app.update.enabled", true);
user_pref("extensions.update.enabled", true);
user_pref("extensions.update.notifyUser", false);
user_pref("extensions.update.autoUpdateDefault", true);
user_pref("extensions.blocklist.enabled", true);
user_pref("browser.safebrowsing.enabled", true);
user_pref("browser.safebrowsing.malware.enabled", true);
user_pref("browser.safebrowsing.phishing.enabled", true);
user_pref("dom.disable_open_during_load", true);
user_pref("security.fileuri.strict_origin_policy", true);
user_pref("security.fileuri.origin_policy", 0);
user_pref("devtools.debugger.prompt-connection", true);
user_pref("prompts.tab_modal.enabled", true);
user_pref("browser.link.open_newwindow", 3);
user_pref("browser.link.open_external", 3);
user_pref("network.manage-offline-status", true);
user_pref("browser.EULA.override", false);
user_pref("browser.offline", false);
user_pref("extensions.autoDisableScopes", 15);
user_pref("network.http.phishy-userpass-length", 1);
user_pref("offline-apps.allow_by_default", false);
user_pref("security.warn_entering_secure", false);
user_pref("security.warn_entering_weak", true);
user_pref("security.warn_leaving_secure", false);
user_pref("security.warn_submit_insecure", true);
user_pref("security.warn_viewing_mixed", true);
user_pref("webdriver_accept_untrusted_certs", false);
user_pref("webdriver_assume_untrusted_issuer", false);
user_pref("webdriver_enable_native_events", false);
user_pref("xpinstall.signatures.required", true);
user_pref("toolkit.networkmanager.disable", false);
user_pref("browser.dom.window.dump.enabled", false);
user_pref("extensions.logging.enabled", false);
user_pref("browser.sessionstore.resume_from_crash", true);
user_pref("browser.tabs.warnOnOpen", true);
user_pref("javascript.options.showInConsole", true);
user_pref("dom.max_script_run_time", 10);
user_pref("extensions.checkCompatibility.nightly", true);
user_pref("extensions.installDistroAddons", true);
user_pref("urlclassifier.updateinterval", 1800);
user_pref("browser.safebrowsing.provider.0.gethashURL", "");
user_pref("browser.safebrowsing.provider.0.keyURL", "");
user_pref("browser.safebrowsing.provider.0.updateURL", "");
user_pref("browser.selfsupport.url", "");
user_pref("browser.reader.detectedFirstArticle", false);
user_pref("startup.homepage_welcome_url", "");
user_pref("startup.homepage_welcome_url.additional", "");
user_pref("datareporting.policy.firstRunURL", "");
user_pref("toolkit.telemetry.prompted", 2);
user_pref("toolkit.telemetry.rejected", true);
user_pref("widget.gtk.rounded-bottom-corners.enabled", false);
user_pref("widget.gtk.ignore-bogus-leave-notify", 0);
user_pref("layout.css.has-selector.enabled", true);
user_pref("network.tcp.tcp_fastopen_enable", false);
user_pref("browser.download.manager.showWhenStarting", false);
user_pref("browser.startup.page", 1);

/****************************************************************************
 * END: SIELAFOX OVERRIDES                                                  *
 ****************************************************************************/
