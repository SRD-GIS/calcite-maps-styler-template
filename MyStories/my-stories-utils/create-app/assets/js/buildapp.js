function getCookie(c_name)
{
  var c_value = document.cookie;
  var c_start = c_value.indexOf(" " + c_name + "=");

  if (c_start == -1) {
    c_start = c_value.indexOf(c_name + "=");
  }

  if (c_start == -1) {
    c_value = null;
  }
  else {
    c_start = c_value.indexOf("=", c_start) + 1;
    var c_end = c_value.indexOf(";", c_start);
    if (c_end == -1) {
      c_end = c_value.length;
    }
    c_value = decodeURIComponent(c_value.substring(c_start, c_end));
  }
  return c_value;
}

function loadBuilder(app, layout) {
  var baseURL = document.location.protocol + "//" + "www.arcgis.com/",
    layoutOpt = layout ? "&layout=" + layout : "",
    cookie = JSON.parse(getCookie('esri_auth'));
  
  if(cookie.portalApp) {
    baseURL = window.location.protocol + '//' + window.location.hostname + '/';
  }
  // if it's an organization
  else if(cookie.urlKey && cookie.customBaseUrl) {
    baseURL = document.location.protocol + "//" + (cookie.urlKey + "." + cookie.customBaseUrl).toLowerCase() + "/";
  }

  window.open(baseURL + "apps/" + app + "/?fromScratch" + layoutOpt, "_blank");
}

function buildApp(app, layout)
{
  var signedIn = window.signInManager.checkIfSignedIn();

    if(signedIn) {
      loadBuilder(app, layout);
    }
    else {
      window.signInManager.showBuildSignInDialog(function() {
       showContinueBuildDialog(app, layout);     
      }, app, layout);
    }
}

/**
@summary Shows the dialog that allows the user to continue on to the app builder when signed in. 
        This is necessary because browsers won't carry out a window.open that is not the direct result of user input.
        Since the user had to sign in in between clicking the "build app" button and getting to the app builder, it is a delayed event.
        By clicking "continue to (appname) builder" in this dialog, they can continue through.
*/
function showContinueBuildDialog(app, layout) {
   var baseURL = document.location.protocol + '//' + 'www.arcgis.com/',
      layoutOpt = layout ? '&layout=' + layout : '',
      cookie = JSON.parse(getCookie('esri_auth')),
      appName = '',
      url = '';      

    if(cookie.portalApp) {
      baseURL = window.location.protocol + '//' + window.location.hostname + '/';
    }
    // if it's an organization
    else if(cookie.urlKey && cookie.customBaseUrl) {
      baseURL = document.location.protocol + '//' + (cookie.urlKey + '.' + cookie.customBaseUrl).toLowerCase() + '/';
    }

  url = baseURL + 'apps/' + app + '/?fromScratch' + layoutOpt;


  var modalString = '<div id="continue-build-container" class="custom-modal-container">' +
        '<div id="continue-build-wrapper" class="custom-modal-wrapper">' +
          '<div class="dialog-header">' +
            '<a id="continue-build-close" class="icon-close cancel-button" href="#"></a>' +
          '</div>' +
          '<div class="dialog-body">' +
            '<h4 id="build-app-confirm-name">Welcome!</h4>' +
            '<button id="build-app-confirmation" class="btn modal-dismiss">Continue to builder</button>' +
          '</div>' +
        '</div>' +
      '</div>';

  $('body').append(modalString);

  $('#continue-build-container').css('display', 'block');
  $('#continue-build-wrapper').css('display', 'block');

  $('body').addClass('no-scroll');


  if(app) {

    switch(app) {
      case 'MapJournal':
        appName = 'Map Journal';
        break;
      case 'MapTour':
        appName = 'Map Tour';
        break;
      case 'MapSeries':
        appName = 'Map Series';
        break;
      case 'StorytellingSwipe':
        appName = 'Swipe/Spyglass';
        break;

      default:
        break;
    }

    $('#build-app-confirmation').html('Continue to ' + appName + ' builder');
  }  

  addContinueBuildEvents(url);
}

/**
@summary Adds the events needed when we show the "continue to (appname) builder" dialog
*/
function addContinueBuildEvents(url) {
  $('#build-app-confirmation').off('click').on('click', function() {

    window.open(url, "_blank");

    hideContinueBuildDialog();
  });

  $('#continue-build-container').off('click').on('click', function(e) {
    // if the element that triggered this is the container (and not one of its children), dismiss the dialog.
    if(e.target === e.currentTarget) {
      hideContinueBuildDialog();
    }
  });

  $('#continue-build-close').off('click').on('click', function() {
    hideContinueBuildDialog();
  });
}

function hideContinueBuildDialog() {
  var frame = $('#continue-build-wrapper'),
    container = $('#continue-build-container'),
    frameFade = 100,
    containerFade = 500;

  frame.fadeOut(frameFade);
  container.fadeOut(containerFade, function() {
    $('body').removeClass('no-scroll');
  });
}

function buildSwipe(layout)
{
  buildApp("StorytellingSwipe", layout);
}

function buildTour()
{
  buildApp("MapTour");
}

function buildJournal()
{
  buildApp("MapJournal");
}

function buildSeries(layout)
{
  buildApp("MapSeries", layout);
}