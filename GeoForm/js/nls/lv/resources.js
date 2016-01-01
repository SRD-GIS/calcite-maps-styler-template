﻿define(
   ({
    map: {
      error: "Nevar izveidot karti"
    },
    onlineStatus: {
      offline: "Jūs pašreiz strādājat bezsaistē. Iesniegtās formas tiks saglabātas lokāli, līdz būs iespējams izveidot savienojumu ar serveri.",
      reconnecting: "No jauna izveido savienojumu&hellip;",
      pending: "Kad savienojums ar tīklu būs atjaunots, tiks iesniegts ${total} gaidošs(-i) rediģējums(-i)."
    },
    configure: {
      mapdlg: {
        items: {
          organizationLabel: "Organizācija",
          onlineLabel: "ArcGIS Online",
          contentLabel: "Mans saturs",
          favoritesLabel: "Mani favorīti"
        },
        title: "Izvēlieties tīmekļa karti",
        searchTitle: "Meklēt",
        ok: "Labi",
        cancel: "Atcelt",
        placeholder: "Ievadiet meklēšanas terminu"
      },
      groupdlg: {
        items: {
          organizationLabel: "Organizācija",
          onlineLabel: "ArcGIS Online",
          contentLabel: "Mans saturs",
          favoritesLabel: "Mani favorīti"
        },
        title: "Izvēlēties grupu",
        searchTitle: "Meklēt",
        ok: "Labi",
        cancel: "Atcelt",
        placeholder: "Ievadiet meklēšanas terminu"
      },
      sharedlg: {
        items: {},
        mailtoLinkDescription: "Šeit ir saite uz GeoForm"
      }
    },
    user: {
      all: "Visi",
      mgrs: "MGRS",
      usng: "USNG",
      utm: "UTM",
      utm_northing: "Uz ziemeļiem",
      utm_easting: "Uz austrumiem",
      utm_zone_number: "Zonas numurs",
      selectLayerTabText: "${formSection} Izvēlēties formu",
      geoFormGeneralTabText: "${formSection} Ievadīt informāciju",
      locationInformationText: "${formSection} Izvēlēties izvietojumu",
      submitInformationText: "${formSection} Aizpildīt formu",
      submitInstructions: "Pievienot šo informāciju kartei.",
      myLocationText: "Pašreizējais izvietojums",
      locationDescriptionForMoreThanOneOption: "Norādiet šī ieraksta izvietojumu, noklikšķinot/pieskaroties kartei vai izmantojot kādu no tālāk norādītajām opcijām.",
      locationDescriptionForOneOption: "Norādiet šī ieraksta izvietojumu, noklikšķinot/pieskaroties kartei, vai izmantojot tālāk norādīto opciju.",
      locationDescriptionForNoOption: "Norādiet šī ieraksta izvietojumu, noklikšķinot/pieskaroties kartei.",
      addressText: "Meklēt",
      geographic: "Plat./gar.",
      locationTabText: "Izvietojums",
      locationPopupTitle: "Izvietojums",
      submitButtonText: "Iesniegt ierakstu",
      submitButtonTextLoading: "Iesniedz&hellip;",
      formValidationMessageAlertText: "Ir nepieciešami šādi lauki:",
      selectLocation: "Lūdzu, izvēlieties iesnieguma izvietojumu.",
      emptylatitudeAlertMessage: "Lūdzu, ievadiet ${openLink}platuma${closeLink} koordinātu.",
      emptylongitudeAlertMessage: "Lūdzu, ievadiet ${openLink}garuma${closeLink} koordinātu.",
      shareUserTitleMessage: "Pateicamies par ieguldījumu!",
      entrySubmitted: "Jūsu ieraksts ir iesniegts kartē.",
      shareThisForm: "Kopīgot šo formu",
      shareUserTextMessage: "Pastāstiet citiem lai veicinātu, izmantojot tālāk norādītās opcijas.",
      addAttachmentFailedMessage: "Slānim nevar pievienot pielikumu",
      addFeatureFailedMessage: "Slānim nevar pievienot elementu",
      noLayerConfiguredMessage: "Ielādējot vai atrodot rediģējamu elementu slāni, radās kļūda. Lai parādītu formu un sāktu apkopot iesniegumus, tīmekļa kartē pievienojiet rediģējamu elementu slāni.",
      placeholderLatitude: "Platums (Y)",
      placeholderLongitude: "Garums (X)",
      latitude: "Platums",
      longitude: "Garums",
      findMyLocation: "Noteikt manu atrašanās vietu",
      finding: "Nosaka atrašanās vietu&hellip;",
      backToTop: "Atpakaļ uz sākumu",
      addressSearchText: "Jūsu iesniegtā informācija būs redzama šeit. Varat vilkt spraudīti, lai koriģētu atrašanās vietu.",
      shareModalFormText: "Veidlapas saite",
      close: "Aizvērt",
      locationNotFound: "Izvietojumu nevarēja atrast.",
      setLocation: "Iestatīt izvietojumu",
      find: "Atrast adresi vai vietu",
      attachment: "Piesaiste",
      toggleDropdown: "Pārslēgt nolaišanu",
      invalidString: "Lūdzu, ievadiet derīgu vērtību.",
      invalidSmallNumber: "Lūdzu, ievadiet derīgu ${openStrong}vesela skaitļa${closeStrong} vērtību starp -32768 un 32767.",
      invalidNumber: "Lūdzu, ievadiet derīgu ${openStrong}vesela skaitļa${closeStrong} vērtību diapazonā no -2147483648 līdz 2147483647.",
      invalidFloat: "Lūdzu, ievadiet derīgu ${openStrong}daļskaitļa${closeStrong} vērtību.",
      invalidDouble: "Lūdzu, ievadiet derīgu ${openStrong}dubulto${closeStrong} vērtību.",
      invalidLatLong: "Lūdzu, ievadiet derīgas platuma un garuma koordinātas.",
      invalidUTM: "Lūdzu, ievadiet derīgas UTM koordinātas.",
      invalidUSNG: "Lūdzu, ievadiet derīgas USNG koordinātas.",
      invalidMGRS: "Lūdzu, ievadiet derīgas MGRS koordinātas.",
      geoformTitleText: "GeoForm",
      domainDefaultText: "Izvēlēties&hellip;",
      applyEditsFailedMessage: "Diemžēl jūsu ierakstu nevar iesniegt. Lūdzu, mēģiniet vēlreiz.",
      requiredFields: "Tālāk norādītais lauks ir obligāts. Lūdzu nodrošiniet derīgu ievadni.",
      requiredField: "(nepieciešams)",
      error: "Kļūda",
      textRangeHintMessage: "${openStrong}Norāde:${closeStrong} minimālā vērtība ${minValue} un maksimālā vērtība ${maxValue}",
      dateRangeHintMessage: "${openStrong}Norāde:${closeStrong} minimālais datums ${minValue} un maksimālais datums ${maxValue}",
      remainingCharactersHintMessage: "Atlikušas ${value} rakstzīmes",
      mapFullScreen: "Pilnekrāna režīms",
      mapRestore: "Atjaunot",
      filterSelectEmptyText: "Izvēlēties",
      invalidLayerMessage: "Formas slānis neeksistē. Lūdzu, konfigurējiet lietotni un iestatiet slāni.",
      selectedLayerText: "VISS",
      fileUploadStatus: "Faila augšupielādes statuss",
      uploadingBadge: "&nbsp;Augšupielādē&hellip;",
      successBadge: "&nbsp;Augšupielādēts",
      retryBadge: "Atkārtot",
      errorBadge: "Augšupielādes kļūda&nbsp;&nbsp;&nbsp;",
      fileTooLargeError: "Pārāk liels pievienojamais fails",
      exceededFileCountError: "Pārsniegts maksimāli atļautais pielikumu skaits",
      selectFileTitle: "Izvēlieties failu",
      btnSelectFileText: "Atlasīt failu",
      btnViewSubmissions: "Skatīt iesniegumus"
    },
    builder: {
      gettingStarted: "Darba sākšana",
      dateSettings: "Datuma iestatījumi",
      hiddenDateField: "Paslēpt šo datuma lauku",
      preventPastDates: "Novērst pagājušos datumus",
      preventFutureDates: "Novērst turpmākos datumus",
      useCurrentDate: "Iestatiet šo lauku ar pašreizējo datumu un laiku",
      configure: "Konfigurēt",
      configureField: "Konfigurējiet lauku \'${fieldName}\'",
      invalidUser: "Atvainojiet, jums nav atļaujas skatīt šo vienību",
      invalidWebmapSelectionAlert: "Izvēlētā tīmekļa karte nesatur lietošanai derīgu slāni. Lai turpinātu, pievienojiet rediģējamu FeatureLayer savā tīmekļa kartē.",
      invalidWebmapSelectionAlert2: "Papildinformāciju skatiet sadaļā ${openLink}Kas ir elementa serviss?${closeLink}",
      selectFieldsText: "Atlasīt veidlapas laukus",
      selectThemeText: "Atlasīt formas dizainu",
      setViewerText: "Konfigurēt skatītāju",
      introText: "Sākums",
      webmapText: "Web karte",
      layerText: "Slānis",
      detailsText: "Detaļas",
      fieldsText: "Lauki",
      styleText: "Stils",
      viewerText: "Skatītājs",
      optionText: "Opcijas",
      previewText: "Priekšskatījums",
      publishText: "Publicēt",
      optionsApplicationText: "Opcijas",
      titleText: "Veidotājs",
      descriptionText: "GeoForm ir konfigurējama sagatave ${link1}elementa servisa${closeLink} datu rediģēšanai uz formu bāzes. Šī lietotne ļauj lietotājiem ievadīt datus, izmantojot formu, nevis kartes uznirstošo elementu, līdzsvarojot ${link2}tīmekļa karti${closeLink} un rediģējamos elementa servisus. Lai pielāgotu un izvietotu savu GeoForm, veiciet tālāk norādītās darbības.",
      btnPreviousText: "Atpakaļ",
      btnNextText: "Tālāk",
      webmapTabTitleText: "Izvēlieties tīmekļa karti",
      viewWebmap: "Skatīt web karti",
      webmapDetailsText: "Izvēlētā tīmekļa karte ir ${webMapTitleLink}${webMapTitle}${closeLink}. Lai izvēlētos citu tīmekļa karti, noklikšķiniet uz pogas Izvēlēties tīmekļa karti",
      btnSelectWebmapText: "Tīmekļa kartes izvēle",
      btnSelectWebmapTextLoading: "Notiek ielāde&hellip;",
      layerTabTitleText: "Atlasiet rediģējamu(-s) slāņu(-s)",
      selectLayerLabelText: "Slānis",
      selectLayerDefaultOptionText: "Atlasīt slāni",
      enableBasemapToggle: "Rādīt pamatkartes pārslēgšanu",
      enableBasemapToggleDescription: "Varat konfigurēt GeoForm, lai rādītu/paslēptu pamatkartes pārslēgšanu",
      defaultBasemap: "Pamatkartes pārslēgšana",
      secondaryBasemap: "Noklusējuma pamatkarte",
      detailsTabTitleText: "Formas detaļas",
      detailTitleLabelText: "Nosaukums",
      detailLogoLabelText: "Logotipa attēls",
      descriptionLabelText: "Formas instrukcijas un detaļas",
      fieldDescriptionLabelText: "Palīdzības teksts (neobligāts)",
      fieldDescriptionHelpText: "Nodrošiniet īsu aprakstu vai norādes šim laukam.",
      fieldHintHelpText: "Lauka viettura teksts.",
      fieldTabFieldHeaderText: "Lauks",
      fieldTabLabelHeaderText: "Kartes teksts",
      fieldTabDisplayTypeHeaderText: "Parādīt kā",
      fieldTabOrderColumnText: "Secība",
      fieldTabVisibleColumnText: "Aktivizēts",
      displayFieldText: "Rādīt lauku",
      selectMenuOption: "Izvēlēties izvēlni",
      selectRadioOption: "Radiopoga",
      selectTextOption: "Teksts",
      selectDateOption: "Datumu izvēle",
      selectRangeOption: "Skāriena skaitītājpoga",
      selectCheckboxOption: "Izvēlnes rūtiņa",
      selectMailOption: "E-pasts",
      selectUrlOption: "URL",
      selectTextAreaOption: "Teksta zona",
      previewApplicationText: "Priekšskatīt lietojumprogrammu",
      saveApplicationText: "Saglabāt lietojumprogrammu",
      saveText: "Saglabāt",
      toggleNavigationText: "Pārslēgt navigāciju",
      formPlaceholderText: "Mana veidlapa",
      shareBuilderInProgressTitleMessage: "GeoForm publicēšana",
      shareBuilderProgressBarMessage: "Lūdzu, uzgaidiet&hellip;",
      shareBuilderTitleMessage: "Vienums sekmīgi saglabāts",
      shareBuilderTextMessage: "Varat sākt apkopot infomāciju, kopīgojot ar citiem.",
      shareModalFormText: "Veidlapas saite",
      shareBuilderSuccess: "Jūsu GeoForm ir atjaunināta un publicēta.",
      geoformTitleText: "Geo Form",
      layerTabText: "Šis(šie) ir slānis(-ņi), no kura(-iem) tiks izveidots GeoForm. Šim slānim jābūt elementa servisam, kas ir iespējots rediģēšanai ar kopīgošanas atļaujām atbilstoši jūsu auditorijai. Ja atlasīti visi slāņi, šī forma ļauj lietotājam izvēlēties, kuru formas slāni iesniegt.",
      detailsTabText: "Izmantojiet tālāk esošos veidlapas informācijas lodziņus, lai pielāgotu virsrakstu un pievienotu pielāgotu logotipu, kā arī sniedziet īsu aprakstu, kas paredzēts jūsu GeoForm auditorijai. Aprakstā varat pievienot saites uz citiem resursiem, kontaktinformāciju, kā arī novirzīt savu auditoriju uz web kartēšanas aplikāciju, kurā ir pieejami visi dati, kas apkopoti, izmantojot GeoForm.",
      fieldsTabText: "Šeit varat atlasīt, kuri lauki būs redzami jūsu GeoForm auditorijai, rediģēt apzīmējumus, kurus viņi redzēs, un pievienot īsu aprakstu, lai atvieglotu datu ievadi.",
      styleTabText: "Veidojiet savas GeoForm stilu, atbilstoši savām vēlmēm izmantojot tālāk esošos motīvus.",
      viewerTabText: "Iestatiet opcijas,kā skatīt iesniegumus, kas ievākti no GeoForm.",
      publishTabText: "Ja esat pabeidzis GeoForm pielāgošanu, saglabājiet lietotni un sāciet kopīgot ar savu auditoriju. Jebkurā laikā varat atgriezties šajā veidotājā un turpināt pielāgošanu atbilstoši atsauksmēm.",
      headerSizeLabel: "Galvenes lielums",
      smallHeader: "Izmantot mazu galveni",
      bigHeader: "Lietot lielu galveni",
      pushpinText: "Spraudīte",
      doneButtonText: "Saglabāt un aizvērt",
      fieldTabPlaceHolderHeaderText: "Norāde (neobligāti)",
      enableAttachmentLabelText: "${openStrong}Aktivizēt pielikumus${closeStrong}",
      enableAttachmentLabelHint: "Pielikumus var aktivizēt/deaktivizēt šeit",
      attachmentIsRequiredLabelText: "${openStrong}Nepieciešams pielikums${closeStrong}",
      attachmentIsRequiredLabelHint: "Ja nepieciešams, lietotājiem var tikt pieprasīts ievadīt pielikumu.",
      attachmentLabelText: "Pielikuma pogas etiķete",
      attachmentLabelHint: "Šis teksts tiks parādīts blakus pielikuma pogai. Šo vietu varat izmantot, lai aprakstītu vēlamos pielikumus, kādus auditorija var pievienot (foto, video, dokumentus utt.), prasīto failu formātu (.jpeg, .png, .docx, .pdf utt.) un jebkādas papildu instrukcijas",
      attachmentDescription: "Pielikuma apraksts",
      attachmentHint: "Ja nepieciešams, šeit varat sniegt papildu instrukcijas par pielikumiem.",
      jumbotronDescription: "Savai formai izmantojiet lielu vai mazu galveni. Liela galvene var palīdzēt labāk definēt lietotnes mērķi, bet tā aizņem vairāk vietas ekrānā",
      shareGeoformText: "Sociālās multivides kopīgošanas pogas",
      shareDescription: "Sociālās multivides pogas ļauj jūsu auditorijai vienkārši kopīgot jūsu GeoForm, kad tas izveidots.",
      defaultMapExtent: "Kartes noklusējuma pārklājums",
      defaultMapExtentDescription: "Pēc iesniegšanas jūsu web kartē tiks atiestatīts noklusējuma pārklājums (to var atspējot jebkurā laikā).",
      pushpinOptionsDescription: "Kartes spraudītei varat izvēlēties kādu no vairākām krāsām — spraudītei ir jāatšķiras no kartes simboliem, lai lietotājiem būtu ērtāk kartē atzīmēt savu informāciju",
      selectLocationText: "Atlasīt izvietojumu pēc",
      myLocationText: "Mans izvietojums",
      searchText: "Meklēt",
      coordinatesText: "Platuma un garuma koordinātas",
      usng: "USNG koordinātas",
      mgrs: "MGRS koordinātas",
      utm: "UTM koordinātas",
      selectLocationSDescription: "Atļaut lietotājiem atlasīt izvietojumu, izmantojot šīs metodes.",
      dragTooltipText: "Velciet lauku uz vietu, kur vēlaties to parādīt",
      showHideLayerText: "Rādīt slāni",
      showHideLayerHelpText: "Varat konfigurēt GeoForm, lai rādītu/paslēptu slāni. Šī opcija attiecas tikai uz viena slāņa iestatījumu.",
      enableOfflineSupport: "ķ_Enable offline support________ū",
      enableOfflineSupportHelpText: "ķ_Store submissions when there is no network connection and submit them when a connection is restored_______________________________ū.",
      labelHelpMessage: "Kartes teksts",
      placeHolderHintMessage: "Norādes teksts",
      placeHolderHelpMessage: "Palīdzības teksts",
      selectTextOptionValue: "Filtra izvēle",
      disableLogo: "Deaktivizēt logotipu",
      disableLogoDescription: "Varat konfigurēt GeoForm, lai rādītu/slēptu logotipu formas galvenē",
      locateOnLoadText: "Atrast ielādes laikā",
      locateOnLoadDescription: "GeoForm varat konfigurēt pašreizējā izvietojuma lietošanai lapas ielādes laikā",
      selectLayerFieldTabText: "Atlasīt slāni",
      allLayerSelectOptionText: "Visi slāņi",
      disableViewer: "Deaktivizēt skatītāju",
      disableViewerDescription: "Varat konfigurēt GeoForm, lai atspējotu/iespējotu skatītāju",
      displayFieldHintText: "Atlasītais displeja lauks tiks rādīts skatītājā kā nosaukums"
    },
    viewer: {
      geocoderCancelText: "Atcelt",
      viewMapTabText: "Karte",
      sortHeaderText: "Kārtot pēc:",
      geocoderPlaceholderText: "Pasta indekss, pilsēta utt.",
      noSearchResult: "Nav atrasts neviens rezultāts",
      recordsTabTooltip: "Skatīt iesniegumus",
      legendTabTooltip: "Apzīmējumi",
      aboutUsTabTooltip: "Par Mums",
      mapTabTooltip: "Karte",
      btnDescendingText: "Dilst.",
      btnAscendingText: "Aug.",
      geometryUnavailableErrorMessage: "Meklējot elementa ģeometriju, radās kļūda",
      infoPopupOffErrorMessage: "Nav informācijas ko parādīt",
      btnLoadMoreText: "Ielādēt vēl",
      unavailableTitleText: "Bez virsraksta",
      unavailableConfigMessage: "Nevar ielādēt konfigurāciju",
      share: "Kopīgot",
      viewReportsTabText: "Pārskati",
      viewLegendTabText: "Apzīmējumi",
      viewAboutusTabText: "Par",
      btnSubmitReportText: "Iesniegt pārskatu",
      appLoadingFailedMessage: "Ielādējot skatītāju radās kļūda"
    }
  })
);