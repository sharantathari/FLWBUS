export const loadExternalScript = (src: any) => {
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    document.body.appendChild(script);
  }
  
  export const loadSiteJS = () => {
    loadExternalScript(
        "https://cdn.global.noobsverse.com/cc.flowbus/new/assets/js/vendors/jquery.min.js"
      );
      loadExternalScript(
        "https://cdn.global.noobsverse.com/cc.flowbus/new/assets/js/vendors/bootstrap.min.js"
      );
      loadExternalScript(
        "https://cdn.global.noobsverse.com/cc.flowbus/new/assets/js/vendors/enquire.min.js"
      );
      loadExternalScript(
        "https://cdn.global.noobsverse.com/cc.flowbus/new/assets/js/vendors/jquery.form-validator.min.js"
      );
      loadExternalScript(
        "https://cdn.global.noobsverse.com/cc.flowbus/new/assets/js/vendors/jquery.touchSwipe.min.js"
      );
      loadExternalScript(
        "https://cdn.global.noobsverse.com/cc.flowbus/new/assets/js/vendors/jquery.magnific-popup.min.js"
      );
      loadExternalScript(
        "https://cdn.global.noobsverse.com/cc.flowbus/new/assets/js/vendors/pace.min.js"
      );
      loadExternalScript(
        "https://cdn.global.noobsverse.com/cc.flowbus/new/assets/js/vendors/slick.min.js"
      );
      loadExternalScript(
        "https://cdn.global.noobsverse.com/cc.flowbus/new/assets/js/vendors/wow.min.js"
      );
      loadExternalScript(
        "https://cdn.global.noobsverse.com/cc.flowbus/new/assets/js/vendors/jquery.navScroll.min.js"
      );
      loadExternalScript(
        "https://cdn.global.noobsverse.com/cc.flowbus/new/assets/js/vendors/modernizr-2.8.3-respond-1.4.2.min.js"
      );
      loadExternalScript(
        "https://cdn.global.noobsverse.com/cc.flowbus/new/assets/js/vendors/materialize.js"
      );
      loadExternalScript(
        "https://cdn.global.noobsverse.com/cc.flowbus/new/assets/js/scripts.js"
      );
  }