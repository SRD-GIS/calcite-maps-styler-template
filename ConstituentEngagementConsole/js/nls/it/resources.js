﻿/*global define */
/*
 | Copyright 2014 Esri
 |
 | Licensed under the Apache License, Version 2.0 (the "License");
 | you may not use this file except in compliance with the License.
 | You may obtain a copy of the License at
 |
 |    http://www.apache.org/licenses/LICENSE-2.0
 |
 | Unless required by applicable law or agreed to in writing, software
 | distributed under the License is distributed on an "AS IS" BASIS,
 | WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 | See the License for the specific language governing permissions and
 | limitations under the License.
 */
define(
     ({
        map: {
            error: "é_Unable to create map_______È" // Shown when error occurs while creation of map
        },
        main: {
            noGroup: "é_No group configured_______È" // Appears when no group is configured
        },
        webMapList: {
            owner: "é_Owner___È", // Appears in web-map list description panel when it is set to true
            created: "é_Date created_____È", // Appears in web-map list description panel when it is set to true
            modified: "é_Date modified_____È", // Appears in web-map list description panel when it is set to true
            description: "é_Description____È", // Appears in web-map list description panel when it is set to true
            snippet: "é_Summary___È", // Appears in web-map list description panel when it is set to true
            licenseInfo: "é_Access and use constraints_________È", // Appears in web-map list description panel when it is set to true
            accessInformation: "é_Credits___È", // Appears in web-map list description panel when it is set to true
            tags: "é_Tags__È", // Appears in web-map list description panel when it is set to true
            numViews: "é_Number of views______È", // Appears in web-map list description panel when it is set to true
            avgRating: "é_Rating___È", // Appears in web-map list description panel when it is set to true
            noWebMapInGroup: "é_Configured group is invalid or no items have been shared with this group yet________________________È", // Appears when invalid group in configured or no web-map is available in that group
            infoBtnToolTip: "é_Map information______È" // Display tool-tip on command button to display description of web-map
        },
        applicationHeader: {
            signOutOption: "é_Sign Out___È", // Command button to sign-out from the application
            pleaseSignInText: "é_Please sign in_____È", // Appears when user needs to sign-in into the application
            showSelectedOption: "é_Show Selected_____È", // Command button to show selected records in data-viewer
            showAllOption: "é_Show All___È", // Command button to show all the records in data-viewer
            clearSelectionOption: "é_Clear Selection______È", // Command button to clear selected records in data-viewer
            zoomToSelectedOption: "é_Zoom to Selected______È", // Command button to zoom map to selected records
            gridViewOption: "é_List View____È", // Command button to display list view
            mapViewOption: "é_Map View___È", // Command button to display map view
            gridMapViewOption: "é_Split View____È", // Command button to display split view
            settingsBtnToolTip: "é_Selection options______È", // Display tool-tip on command button to open a list of settings options
            viewModeBtnToolTip: "é_Display options______È", // Display tool-tip on command button to open a list of view options
            searchModeBtnToolTip: "é_Search this layer______È", // Display tool-tip on command button to open a dialog box for finding a feature
            manualRefreshBtnToolTip: "é_Refresh___È", // Display tool-tip on command button to manually refresh the selected operational layer
            confirmManualRefeshText: "é_All selections and unsaved changes will be discarded_________________È", // Appears when user wants to do manual refresh
            signInOption: "é_Sign In___È" // Appears when user has not signed in
        },
        dataviewer: {
            noIssuesReported: "é_No reports available_______È", // Appears when no issues are available in current extent
            photoAttachmentHeader: "é_Attachments____È", // Appears when attachments are available for display in details tab
            invalidSmallNumber: "é_Please enter an integer________È ", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -32768 and 32767)
            invalidNumber: "é_Please enter an integer________È", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -2147483648 and 2147483647)
            invalidFloat: "é_Please enter a number_______È", // Shown when invalid floating value is entered while editing in data-viewer (floating point value between -3.4E38 and 1.2E38)
            invalidDouble: "é_Please enter a number_______È", // Shown when invalid double value is entered while editing in data-viewer (double value between -2.2E308 and 1.8E308)
            invalidString: "é_Please enter a value_______È", // Shown when user enters invalid string value
            invalidDate: "é_Please enter a valid date_________È", // Shown when user enters invalid date value
            invalidNumericRange: "é_Please enter a value between ${minValue} and ${maxValue}__________________È", // Shown when user enters value which is out of range
            moreInfolink: "é_Link__È", // Shown when value in field contains only URL.
            commentsText: "é_Comments___È", // Appears when comments are available for display in details tab
            noCommentsAvailable: "é_No comments available_______È", // Appears when no comments are available
            noFeatureGeometry: "é_Feature cannot be displayed_________È" // Appears when user selects/activates a feature and geometry is available for that
        },
        config: {
            configNotDefined: "é_No configuration defined________È" // Shown when there is an issue with config file
        },
        searchPanel: {
            noResultsFound: "é_No results found______È" // Appears when user search for features and no feature is found
        },
        mapViewer: {
            detailsBtnToolTip: "é_View more details for the active feature_____________È", // Display tool-tip on command button to view details of selected feature
            locationBtnToolTip: "é_View map___È", // Display tool-tip on command button to view map panel
            zoomInToolTip: "é_Zoom in___È", // Display tool-tip on command button to zoom in map
            zoomOutToolTip: "é_Zoom out___È" // Display tool-tip on command button to zoom out map
        },
        signOutPage: {
            signOutMessage: "é_You've been successfully signed out____________È", // Appears when user is successfully signed-out from application
            reSignInMessage: "é_Click here to sign in_______È" // Appears when user is signed-out from application and wants to sign-in again
        },
        preview: {
            section1: "é_Crowdsource Manager, a companion group template to <a href='http://solutions.arcgis.com/local-government/help/crowdsource-reporter/' target='_blank'>Crowdsource Reporter</a>, is a responsive group application template (desktop and tablet devices) that allows users within an organization to review problems/observations submitted through the Manager app___________________________________________________________________________________________________________È.", // Appears when preview page is loaded
            section2: "é_The app presents one or more maps for users to review a problem or observation. Users can look for patterns and clusters, review problem details, update status, and assign responsibility_________________________________________________________È.", // Appears when preview page is loaded
            section3: "é_The application source code can be downloaded for further configuration. This additional configuration of the application can be applied back to an ArcGIS Online configurable web application item or hosted on your own web server.<br /> For more information on configuring this app, see the <a href='http://solutions.arcgis.com/local-government/help/crowdsource-manager/' target='_blank'>Crowdsource Manager</a> documentation_________________________________________________________________________________________________________________________________È." // Appears when preview page is loaded
        }
    })
);