﻿define(
     ({
        map: {
            error: "Kan kaart niet maken"
        },
        onlineStatus: {
            offline: "U werkt momenteel offline. Uw in te dienen formulieren worden lokaal opgeslagen totdat er een verbinding met de server kan worden gemaakt.",
            reconnecting: "Opnieuw verbinding maken&hellip;",
            pending: "${total} bewerking(en) in behandeling wordt/worden verzonden wanneer opnieuw een netwerkverbinding is ingesteld."
        },
        configure: {
            mapdlg: {
                items: {
                    organizationLabel: "Mijn Organisatie",
                    onlineLabel: "ArcGIS Online",
                    contentLabel: "Mijn Content",
                    favoritesLabel: "Mijn Favorieten"
                },
                title: "Webmap selecteren",
                searchTitle: "Zoeken",
                ok: "OK",
                cancel: "Annuleren",
                placeholder: "Zoekterm invoeren"
            },
            groupdlg: {
                items: {
                    organizationLabel: "Mijn Organisatie",
                    onlineLabel: "ArcGIS Online",
                    contentLabel: "Mijn Content",
                    favoritesLabel: "Mijn Favorieten"
                },
                title: "Groep selecteren",
                searchTitle: "Zoeken",
                ok: "OK",
                cancel: "Annuleren",
                placeholder: "Zoekterm invoeren"
            }
        },
        user: {
            mgrs: "MGRS",
            usng: "USNG",
            utm: "UTM",
            utm_northing: "Noordwaarde",
            utm_easting: "Oostwaarde",
            utm_zone_number: "Zonenummer",
            geoFormGeneralTabText: "1. Informatie invoeren",
            locationInformationText: "2. Locatie selecteren",
            submitInformationText: "3. Formulier invullen",
            submitInstructions: "Deze informatie toevoegen aan de kaart.",
            myLocationText: "Ĳ_Current Location_ä",
            locationDescription: "Ĳ_Specify the location for this entry by clicking/tapping the map or by using one of the following options._ä",
            addressText: "Zoeken",
            geographic: "Ĳ_Lat/Lon_ä",
            locationTabText: "Locatie",
            locationPopupTitle: "Ĳ_Location_ä",
            submitButtonText: "Ĳ_Submit Entry_ä",
            submitButtonTextLoading: "Verzenden&hellip;",
            formValidationMessageAlertText: "De volgende velden zijn vereist:",
            selectLocation: "Selecteer een ${openLink}locatie${closeLink} voor uw verzending.",
            emptylatitudeAlertMessage: "Voer een ${openLink}breedtegraad${closeLink}-coördinaat in.",
            emptylongitudeAlertMessage: "Voer een ${openLink}lengtegraad${closeLink}-coördinaat in.",
            shareUserTitleMessage: "Bedankt voor uw bijdrage!",
            entrySubmitted: "Ĳ_Your entry has been submitted to the map._ä",
            shareThisForm: "Ĳ_Share This Form_ä",
            shareUserTextMessage: "Ĳ_Tell others to contribute using the following options._ä",
            addAttachmentFailedMessage: "Kan bijlage niet toevoegen aan laag",
            addFeatureFailedMessage: "Kan kenmerk niet toevoegen aan laag",
            noLayerConfiguredMessage: "Oeps! Hier is niets te zien. Om formulierinzendingen te gaan verzamelen, configureert u dit geografisch formulier en selecteert u een bewerkbare featureservicelaag die u wilt gebruiken.",
            placeholderLatitude: "Breedte (Y)",
            placeholderLongitude: "Lengte (X)",
            latitude: "Breedtegraad",
            longitude: "Lengtegraad",
            findMyLocation: "Ĳ_Locate Me_ä",
            finding: "Zoeken&hellip;",
            backToTop: "Terug naar boven",
            addressSearchText: "Uw inzending wordt hier weergegeven. U kunt de speld slepen om de locatie te wijzigen.",
            shareModalFormText: "Link formulier",
            close: "Sluiten",
            locationNotFound: "Locatie is niet gevonden.",
            setLocation: "Ĳ_Set Location_ä",
            find: "Ĳ_Find address or place_ä",
            attachment: "Bijlage",
            toggleDropdown: "Vervolgkeuzelijst in- en uitschakelen",
            invalidLatLong: "Voer geldige ${latLink}breedtegraad${closeLink}- en ${lngLink}lengtegraad${closeLink}-coördinaten in.",
            invalidUTM: "Voer geldige ${openLink}UTM${closeLink}-coördinaten in.",
            invalidUSNG: "Voer geldige ${openLink}USNG${closeLink}-coördinaten in.",
            invalidMGRS: "Voer geldige ${openLink}MGRS${closeLink}-coördinaten in.",
            geoformTitleText: "Geografisch formulier",
            domainDefaultText: "Selecteren&hellip;",
            applyEditsFailedMessage: "Uw invoer kan niet worden verzonden. Probeer het opnieuw.",
            requiredFields: "Er zijn enkele fouten opgetreden. Corrigeer deze hieronder.",
            requiredField: "Ĳ_(required)_ä",
            error: "Fout",
            textRangeHintMessage: "Ĳ_${openStrong}Hint:${closeStrong} Minimum value ${minValue} and Maximum value ${maxValue}_ä",
            dateRangeHintMessage: "Ĳ_${openStrong}Hint:${closeStrong} Minimum Date ${minValue} and Maximum Date ${maxValue}_ä"
        },
        builder: {
            invalidUser: "Ĳ_Sorry, you dont have permission to view this item_ä",
            invalidWebmapSelectionAlert: "Ĳ_The selected webmap does not contain a valid layer to use. Please add an editable FeatureLayer into your webmap to continue._ä",
            invalidWebmapSelectionAlert2: "Ĳ_For More Information please refer to ${openLink}What is Feature Service?${closeLink}_ä",
            selectFieldsText: "Ĳ_Select Form Fields_ä",
            selectThemeText: "Ĳ_Select Form Theme_ä",
            webmapText: "Ĳ_Webmap_ä",
            layerText: "Ĳ_Layer_ä",
            detailsText: "Ĳ_Details_ä",
            fieldsText: "Ĳ_Fields_ä",
            styleText: "Ĳ_Style_ä",
            optionText: "Ĳ_Options_ä",
            previewText: "Ĳ_Preview_ä",
            publishText: "Ĳ_Publish_ä",
            optionsApplicationText: "Ĳ_Options_ä",
            titleText: "Ĳ_Builder_ä",
            descriptionText: "Ĳ_GeoForm is a configurable template for form-based data editing of a ${link1}Feature Service${closeLink}. This application allows users to enter data through a form instead of a map’s pop-up while leveraging the power of the ${link2}Web Map${closeLink} and editable Feature Services. Use the following steps to customize and deploy your GeoForm._ä",
            btnPreviousText: "Ĳ_Previous_ä",
            btnNextText: "Ĳ_Next_ä",
            webmapTabTitleText: "Ĳ_Select a Webmap_ä",
            viewWebmap: "Ĳ_View webmap_ä",
            btnSelectWebmapText: "Ĳ_Choose Webmap_ä",
            btnSelectWebmapTextLoading: "Ĳ_Loading&hellip;_ä",
            layerTabTitleText: "Ĳ_Select Editable Layer_ä",
            selectLayerLabelText: "Ĳ_Layer_ä",
            selectLayerDefaultOptionText: "Ĳ_Select Layer_ä",
            detailsTabTitleText: "Ĳ_Form Details_ä",
            detailTitleLabelText: "Ĳ_Title_ä",
            detailLogoLabelText: "Ĳ_Logo Image_ä",
            descriptionLabelText: "Ĳ_Help Text (optional)_ä",
            fieldTabFieldHeaderText: "Ĳ_Field_ä",
            fieldTabLabelHeaderText: "Ĳ_Label_ä",
            fieldTabDisplayTypeHeaderText: "Ĳ_Display As_ä",
            selectMenuOption: "Ĳ_Select Menu_ä",
            selectRadioOption: "Ĳ_Radio Button_ä",
            selectTextOption: "Ĳ_Text_ä",
            selectCheckboxOption: "Ĳ_Checkbox_ä",
            selectMailOption: "Ĳ_Email_ä",
            selectUrlOption: "Ĳ_URL_ä",
            selectTextAreaOption: "Ĳ_Textarea_ä",
            previewApplicationText: "Ĳ_Preview Application_ä",
            saveApplicationText: "Ĳ_Save Application_ä",
            saveText: "Ĳ_Save_ä",
            toggleNavigationText: "Ĳ_Toggle navigation_ä",
            formPlaceholderText: "Ĳ_My Form_ä",
            shareBuilderInProgressTitleMessage: "Ĳ_Publishing GeoForm_ä",
            shareBuilderProgressBarMessage: "Ĳ_Please Wait&hellip;_ä",
            shareBuilderTitleMessage: "Ĳ_Success! Item saved_ä",
            shareBuilderTextMessage: "Ĳ_You can start collecting information by sharing with others_ä",
            shareModalFormText: "Ĳ_Form Link_ä",
            shareBuilderSuccess: "Ĳ_Your GeoForm has been updated & published!_ä",
            geoformTitleText: "Ĳ_Geo Form_ä",
            layerTabText: "Ĳ_This is the layer that the GeoForm will be built from. The layer must be a feature service that is enabled for editing with sharing permissions appropriate for your audience._ä",
            detailsTabText: "Ĳ_Use the Form Detail boxes below to customize the Title, add a custom logo, and provide a short description for your GeoForm audience. In the description you can add links to other resources, contact information, and even point your audience to a web mapping application featuring all of the data collected with the GeoForm._ä",
            fieldsTabText: "Ĳ_Here you can select which fields will be visible to your GeoForm audience, edit the Labels they will see, and add a short Description to help with data entry._ä",
            styleTabText: "Ĳ_Style your GeoForm using the themes below based on your preference._ä",
            publishTabText: "Ĳ_If you are finished customizing your GeoForm, save the application and begin sharing with your audience. You can always return to this builder and continue customizing it based on feedback._ä",
            smallHeader: "Ĳ_Use Small Header_ä",
            pushpinText: "Ĳ_Push pin_ä",
            doneButtonText: "Ĳ_View Application Item_ä",
            fieldTabPlaceHolderHeaderText: "Ĳ_Hint (optional)_ä",
            attachmentLabelText: "Ĳ_Attchment Label_ä",
            attachmentLabelHint: "Ĳ_Tell users what type of file to attach._ä",
            attachmentDescription: "Ĳ_Attachment Description_ä",
            attachmentHint: "Ĳ_If necessary, you can provide additional attachment instructions here._ä",
            jumbotronDescription: "Ĳ_The Bootstrap Jumbotron makes it easy to define the purpose of your application. This can be disabled at any time._ä",
            shareGeoformText: "Ĳ_Share Geoform_ä",
            shareDescription: "Ĳ_The sharing panel makes it easy for your audience to share the GeoForm with other collaborators once they have made a submission - this can be disabled at any time._ä",
            defaultMapExtent: "Ĳ_Default Map Extent_ä",
            defaultMapExtentDescription: "Ĳ_The map will reset to the default extent in your web map after submission - this can be disabled at any time._ä",
            pushpinOptionsDescription: "Ĳ_Choose from a variety of colors for the map pushpin, it should be different from the map symbology to help the user put their submission on the map_ä",
            selectLocationText: "Ĳ_Select Location By_ä",
            myLocationText: "Ĳ_My Location_ä",
            searchText: "Ĳ_Search_ä",
            coordinatesText: "Ĳ_Latitude & Longitude Coordinates_ä",
            usng: "Ĳ_USNG Coordinates_ä",
            mgrs: "Ĳ_MGRS Coordinates_ä",
            utm: "Ĳ_UTM Coordinates_ä",
            selectLocationSDescription: "Ĳ_Allow users to select a location using these methods._ä"
        }
    })
);