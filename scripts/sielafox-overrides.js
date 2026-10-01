
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
