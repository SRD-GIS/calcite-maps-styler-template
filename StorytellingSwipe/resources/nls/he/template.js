﻿define(
	({
		viewer: {
			loading: {
				step1: "טעינת אפליקציה",
				step2: "טעינת מידע",
				step3: "מתחיל",
				fail: "סליחה, אך טעינת כלי ה- swipe נכשלה",
				loadBuilder: "החלפה למצב בניה",
				failButton: "נסה שוב"
			},
			errors: {
				boxTitle: "אירעה שגיאה",
				portalSelf: "כן_Fatal error: Failed to get portal configuration_ש",
				invalidConfig: "שגיאה קריטית: קביעת תצורה לא תקינה",
				invalidConfigNoWebmap: "שגיאה קריטית: קביעת תצורה לא תקינה (לא הוגדר web map)",
				createMap: "לא ניתן ליצור מפה",
				invalidApp: "שגיאה קריטית: לא ניתן לטעון את האפליקציה",
				initMobile: "ברוכים הבאים לאפליקצית ה- web של כלי ה- swipe. עדיין לא הוגדרה תצורה לאפליקציה. הבונה האינטראקטיבי לא נמתך במכשירים ניידים.",
				noBuilderIE8: "הבונה האינטראקטיבי של ה- Swipe לא נתמך באינטרנט אקספלורר לפני גרסה 9.",
				noLayerView: "ברוכים הבאים לאפליקצית ה- web של כלי ה- swipe. <br />עדיין לא הוגדרה תצורה לאפליקציה.",
				appSave: "שגיאה בשמירת אפליקצית ה- web",
				mapSave: "שגיאה בשמירת ה- web map",
				notAuthorized: "כן_You are not authorized to access this application_ש",
				conflictingProjectionsTitle: "היטלים סותרים",
				conflictingProjections: "כלי ה- Swipe לא ישים כאשר ישנם היטלים שונים לשני webmaps. אנא פתח את ההגדרות והשתמש ב- webmap שמשתמשת באותו היטל של ה- webmap הראשון.",
				cpButton: "סגור"
			},
			mobileView: {
				hideIntro: "הסתר הקדמה",
				navLeft: "מקרא",
				navMap: "מפה",
				navRight: "מידע"
			},
			desktopView: {
				storymapsText: "מפת סיפור",
				builderButton: "עבור למצב בנייה",
				bitlyTooltip: "כן_Get a short link to the application_ש"
			}
		},
		builder: {
			builder: {
				panelHeader: "קביעת תצורת אפליקציה",
				buttonSave: "שמירה",
				buttonDiscard: "ביטול",
				buttonSettings: "הגדרות",
				buttonView: "מצב צפיה",
				buttonItem: "כן_Open the Web Application item_ש",
				noPendingChange: "אין שינוי לביצוע",
				unSavedChangeSingular: "שינוי אחד שלא נשמר",
				unSavedChangePlural: "שינויים שלא נשמרו",
				popoverDiscard: "האם אתה בטוח שברצונך להיפטר מכל השינויים שלא נשמרו?",
				yes: "כן",
				no: "לא",
				popoverOpenViewExplain: "על ידי פתיחת החלון, תאבד את כל השינויים שלא נשמרו",
				popoverOpenViewOk: "אישור",
				popoverOpenViewCancel: "ביטול",
				popoverSaveWhenDone: "אל תשכח לשמור ברגע שתסיים",
				closeWithPendingChange: "האם הינך בטוח שברצונך לאשר פעולה זו? אתה עלול לאבד את השינויים שביצעת",
				gotIt: "אישור",
				savingApplication: "שמירת אפליקציה",
				saveSuccess: "שמירת אפליקציה בוצעה בהצלחה",
				saveError: "שמירה נכשלה, יש לנסות שוב",
				signIn: "אנא התחבר עם חשבון ב",
				signInTwo: "כדי לשמור את האפליקציה."
			},
			header:{
				editMe: "ערוך אותי !",
				templateTitle: "קבע כותרת תבנית",
				templateSubtitle: "קבע כותרת משנה לתבנית"
			},
			settings: {
				settingsHeader: "הגדרות אפליקציה",
				modalCancel: "ביטול",
				modalApply: "החל"
			},
			settingsColors: {
				settingsTabColor: "נושא",
				settingsColorExplain: "בחר את נושא האפליקציה או הגדר את הצבעים שלך.",
				settingsLabelColor: "צבעי כותרת עליונה ורקע הפאנל הצידי"
			},
			settingsHeader: {
				settingsTabLogo: "כותרת עליונה",
				settingsLogoExplain: "התאם את הלוגו של הכותרת העליונה (המקסימום הוא 250 x 50 פיקסלים)",
				settingsLogoEsri: "לוגו של Esri",
				settingsLogoNone: "אין לוגו",
				settingsLogoCustom: "לוגו מותאם",
				settingsLogoCustomPlaceholder: "URL של תמונה",
				settingsLogoCustomTargetPlaceholder: "קישור זמין",
				settingsLogoSocialExplain: "התאם הלינק בצד ימין עליון של הכותרת העליונה",
				settingsLogoSocialText: "טקסט",
				settingsLogoSocialLink: "קישור",
				settingsLogoSocialDisabled: "כן_This feature has been disabled by the Administrator_ש"
			},
			settingsExtent: {
				settingsTabExtent: "תיחום",
				settingsExtentExplain: "בחר את התיחום ההתחלתי באמצעות המפה האינטראקטיבית שלהלן.",
				settingsExtentExplainBottom: "כן_The extent you define will modify your web map initial extent. Note that if you are doing a swipe series that extent won't be used._ש",
				settingsExtentDateLineError: "כן_The extent cannot be across the meridian of 180° longitude_ש",
				settingsExtentDateLineError2: "כן_Error computing the extent_ש",
				settingsExtentDrawBtn: "שרטט תיחום חדש",
				settingsExtentModifyBtn: "ערוך את התיחום הנוכחי",
				settingsExtentApplyBtn: "יישם על המפה המרכזית",
				settingsExtentUseMainMap: "כן_Use main map extent_ש"
			}
        },
		swipe: {
			mobileData: {
				noData: "אין נתונים לתצוגה!",
				noDataExplain: "לחץ על המפה בכדי לבחור את הישות וחזור לכאן",
				noDataMap: "אין נתונים עבור מפה זו",
				noPopup: "לא נמצאה חלונית קופצת עבור ישות זו"
			},
			mobileLegend: {
				noLegend: "אין מקרא לתצוגה"
			},
			swipeSidePanel: {
				editTooltip: "קבע את תיאור הפאנל הצידי",
				editMe: "ערוך אותי !",
				legendTitle: "מקרא"
			},
			infoWindow: {
				noFeature: "אין נתונים לתצוגה",
				noFeatureExplain: "לחץ על המפה בכדי לבחור ישות"
			},
			settingsLayout: {
				settingsTabLayout: "סגנון Swipe",
				settingsLayoutExplain: "בחר את הסגנון לכלי ה- swipe",
				settingsLayoutSwipe: "בר אנכי",
				settingsLayoutSpyGlass: "Spyglass",
				settingsLayoutSelected: "תצוגה נבחרת",
				settingsLayoutSelect: "בחר תצוגה זו",
				settingsSaveConfirm: "חלק מהשינויים שלך דורשים שמירה וטעינה מחדש של האפליקציה"
			},
			settingsDataModel: {
				settingsTabDataModel: "שכבת Swipe",
				settingsDataModelExplainSwipe: "בחר את השכבה או את ה- web map שתופיע ותיעלם כאשר יבוצע swipe.",
				settingsDataModelExplainSwipe2: "",
				settingsDataModelExplainSpyGlass: "בחר את השכבה או את ה- web map שתופיע במשקפת.",
				settingsDataModelOneMap: "web map אחד, שכבה אחת",
				settingsDataModel1Explain: "בחר שכבה שתנוהל על ידי כלי ה- swipe.",
				settingsDataModel1Warning: "כן_If the layer is hidden by upper layers, swipe won't have any effect._ש",
				settingsDataModel1SpyGlassExplain: "בחר את השכבה שתופיע בתוך ה- spyglass.",
				settingsDataModelTwoMaps: "שני web maps",
				settingsDataModelLayerIds: "ה-  IDs של שכבת ה- Web map",
				settingsDataModelSelected: "הסוג הנבחר",
				settingsDataModelWebmapSwipeId1: "ה- ID של ה- Web map הימני",
				settingsDataModelWebmapSwipeId2: "ה- ID של ה- Web map השמאלי",
				settingsDataModelWebmapGlassId1: "ה- ID של ה- Web map המרכזי",
				settingsDataModelWebmapGlassId2: "ה- ID של ה- Spyglass Web map",
				settingsDataModelSelect: "בחר את הסוג הזה",
				settingsDataModel2Explain: "בצע Swipe באמצעות web map נוסף.",
				settingsDataModel2SpyGlassExplain: "חשוף web map נוסף.",
				settingsDataModel2HelpTitle: "כיצד למצוא את ה- ID של ה- web map",
				settingsDataModel2HelpContent: "העתק והדבק תווים אחרי סימן ה =בכתובת ה- URL של ה- web map"
			},
			settingsLegend: {
				settingsTabLegend: "אפליקצית תצוגה",
				settingsLegendExplain: "בחר את הגדרות תצוגת האפליקציה.",
				settingsLegendEnable: "הדלק מקרא",
				settingsDescriptionEnable: "הדלק תיאור",
				settingsBookmarksEnable: "הדלק סדרת Swipe",
				settingsPopupDisable: "כן_Enable popup_ש",
				settingsLegendHelpContent: "כן_To refine the legend content, use ArcGIS.com web map viewer table of contents (Hide in Legend)_ש",
				settingsSeriesHelpContent: "כן_On first activation, your web map(s) bookmarks will be used to pre-populate the series bar. If you disable the series option later, your series configuration won't be discarded and will be available if you decide to enable the series again._ש",
				preview: "תצוגה מקדימה של UI"
			},
			settingsSwipePopup: {
				settingsSwipePopup: "חלונית קופצת",
				settingsSwipePopupExplain: "התאם את הניראות של כותרת החלוניות הקופצות בכדי לסייע למשתמש המקשר בין חלוניות קופצות לשכבות מפות.",
				settingsSwipePopupSwipe1: "מפה שמאלית",
				settingsSwipePopupSwipe2: "מפה ימנית",
				settingsSwipePopupGlass1: "מפה מרכזית",
				settingsSwipePopupGlass2: "מפת Spyglass",
				settingsSwipePopupTitle: "תואר כותרת עליונה",
				settingsSwipePopupColor: "צבע כותרת עליונה"
			},
			initPopup: {
				initHeader: "ברוכים הבאים לבונה ה- Swipe",
				modalNext: "הבא",
				modalApply: "פתח את האפליקציה"
			},
			seriesPanel: {
				title: "כן_Title_ש",
				descr: "כן_Description_ש",
				discard: "כן_Discard Bookmark_ש",
				saveExtent: "כן_Set Bookmark Extent_ש",
				discardDisabled: "כן_You can't remove that bookmark. Swipe series can be disabled in the Settings._ש"
			}
		}
    })
);