﻿define(
	 ({
		viewer: {
			loading: {
				step1: "כן_LOADING STORY_____ש",
				step2: "טעינת מידע",
				step3: "מתחיל",
				fail: "סליחה, אך טעינת כלי ה- swipe נכשלה",
				loadBuilder: "מעבר למצב בניה",
				redirectSignIn: "הפניה לדף ההתחברות",
				redirectSignIn2: "(תופנה מחדש לאחר ההתחברות)",
				failButton: "נסה שוב"
			},
			errors: {
				boxTitle: "אירעה שגיאה",
				portalSelf: "שגיאה חמורה: נכשל ניסיון לקבל תצורת פורטל",
				invalidConfig: "שגיאה קריטית: קביעת תצורה לא תקינה",
				invalidConfigNoWebmap: "שגיאה קריטית: קביעת תצורה לא תקינה (לא הוגדר web map)",
				createMap: "לא ניתן ליצור מפה",
				invalidApp: "כן_Fatal error: The story cannot be loaded_____________ש",
				initMobile: "ברוכים הבאים לאפליקצית ה- web של כלי ה- swipe. עדיין לא הוגדרה תצורה לאפליקציה. אשף הבנייה האינטראקטיבי לא נתמך במכשירים ניידים.",
				initMobile2: "כן_The Swipe builder is not supported at this display size__________________ש.",
				noBuilderIE8: "הבנאי האינטראקטיבי של ה- Swipe לא נתמך באינטרנט אקספלורר לפני גרסה 9.",
				noLayerView: "ברוכים הבאים לאפליקצית ה- web של כלי ה- swipe. <br />עדיין לא הוגדרה תצורה לאפליקציה.",
				appSave: "כן_Error saving the web story_________ש",
				mapSave: "שגיאה בשמירת ה- web map",
				notAuthorized: "כן_You are not authorized to access this story______________ש",
				conflictingProjectionsTitle: "היטלים סותרים",
				conflictingProjections: "כלי ה- Swipe לא ישים כאשר ישנם היטלים שונים לשני webmaps. אנא פתח את ההגדרות והשתמש ב- webmap שמשתמשת באותו היטל של ה- webmap הראשון.",
				cpButton: "סגור",
				unspecifiedConfigOwner: "כן_Authorized owner hasn't been configured_____________ש.",
				invalidConfigOwner: "כן_Story owner is not authorized__________ש."
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
				facebookTooltip: "שתף בפייסבוק",
				twitterTooltip: "שתף בטוויטר",
				bitlyTooltip: "קבל קישור קצר"
			}
		},
		builder: {
			builder: {
				panelHeader: "כן_STORY CONFIGURATION_______ש",
				buttonSave: "שמירה",
				buttonHelp: "עזרה",
				buttonShare: "שיתוף",
				buttonDiscard: "ביטול",
				buttonSettings: "הגדרות",
				buttonView: "מצב צפיה",
				buttonItem: "פתח פריט של אפליקצית web",
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
				savingApplication: "כן_Saving story_____ש",
				saveSuccess: "כן_Story saved successfully________ש",
				saveError: "שמירה נכשלה, יש לנסות שוב",
				saveError2: "השמירה נכשלה בשל תג HTML לא חוקי בשם או בתיאור",
				saveError3: "הכותרת לא יכולה להיות ריקה",
				signIn: "אנא התחבר עם חשבון ב",
				signInTwo: "כן_to save the story______ש."
			},
			header:{
				editMe: "ערוך אותי!",
				templateTitle: "קבע כותרת תבנית",
				templateSubtitle: "קבע כותרת משנה לתבנית"
			},
			settings: {
				settingsHeader: "כן_Story settings_____ש",
				modalCancel: "ביטול",
				modalApply: "בצע"
			},
			settingsColors: {
				settingsTabColor: "נושא",
				settingsColorExplain: "בחר את נושא האפליקציה או הגדר את הצבעים שלך.",
				settingsLabelColor: "צבעי כותרת עליונה ורקע הפנל הצידי"
			},
			settingsHeader: {
				settingsTabLogo: "כותרת עליונה",
				settingsLogoExplain: "התאם את הלוגו של הכותרת העליונה (המקסימום הוא 250 x‏ 50 פיקסלים)",
				settingsLogoEsri: "לוגו של Esri",
				settingsLogoNone: "אין לוגו",
				settingsLogoCustom: "לוגו מותאם",
				settingsLogoCustomPlaceholder: "URL של תמונה",
				settingsLogoCustomTargetPlaceholder: "קישור זמין",
				settingsLogoSocialExplain: "התאם הלינק בצד ימין עליון של הכותרת העליונה",
				settingsLogoSocialText: "טקסט",
				settingsLogoSocialLink: "קישור",
				settingsLogoSocialDisabled: "תכונה זו הוגדרה כלא זמינה על ידי המנהל"
			},
			settingsExtent: {
				settingsTabExtent: "תיחום",
				settingsExtentExplain: "בחר את התיחום ההתחלתי באמצעות המפה האינטראקטיבית שלהלן.",
				settingsExtentExplainBottom: "התיחום אותו הגדרת ישנה את התיחום ההתחלתי של ה- web map שלך. שים לב שאם אתה עושה סדרות swipe תיחום זה לא יהיה בשימוש.",
				settingsExtentDateLineError: "התיחום לא יכול להיות על המרידיאן של קו אורך 180ï¿½",
				settingsExtentDateLineError2: "שגיאה בחישוב התיחום",
				settingsExtentDrawBtn: "שרטט תיחום חדש",
				settingsExtentModifyBtn: "ערוך את התיחום הנוכחי",
				settingsExtentApplyBtn: "יישם על המפה המרכזית",
				settingsExtentUseMainMap: "השתמש בתיחום של המפה הראשית"
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
				editTooltip: "קבע את תיאור הפנל הצידי",
				editMe: "ערוך אותי!",
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
				settingsSaveConfirm: "כן_Some of your changes require that you save and reload the story____________________ש"
			},
			settingsDataModel: {
				settingsTabDataModel: "סוג Swipe",
				settingsDataModelExplainSwipe: "למה אתה רוצה שמשתמשים יבצעו swipe?",
				settingsDataModelExplainSwipe2: "",
				settingsDataModelExplainSpyGlass: "בחר את השכבה או את ה- web map שיופיע ב spyglass.",
				settingsDataModelOneMap: "שכבה ב- web map",
				settingsDataModel1Explain: "בחר שכבה שתנוהל על ידי כלי ה- swipe.",
				settingsDataModel1Warning: "אם השכבה מוסתרת על ידי שכבות עליונות יותר, לכלי ה- swipe לא תהיה השפעה.",
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
				settingsDataModel2HelpContent: "העתק והדבק תווים אחרי סימן ה =בכתובת ה- URL של ה- web map",
				switchMaps: "החלף מפות",
				browseWebMaps: "עיין ב web maps"
			},
			settingsLegend: {
				settingsTabLegend: "אפליקצית תצוגה",
				settingsLegendExplain: "כן_Select the layout settings_________ש.",
				settingsLegendEnable: "הדלק מקרא",
				settingsDescriptionEnable: "הדלק תיאור",
				settingsBookmarksEnable: "הדלק סדרת Swipe",
				settingsPopupDisable: "אפשר חלון קופץ",
				settingsLocationSearchEnable: "הפעל חיפוש עיגון כתובות",
				settingsGeolocatorEnable: "הפעל חיפוש מרחבי",
				settingsLegendHelpContent: "כדי לעדן את תוכן המקרא, השתמש בתוכן העניינים של צפיין ה- ArcGIS.com web map (הסתר במקרא)",
				settingsSeriesHelpContent: "Swipe לסדרות היא אפשרות ניווט באמצעות כרטיסיות שתדריך את הצופה לתיחום מסוים ותציג כותרת וטקסט תיאור בפנל צדדי. במהלך הפעלה ראשונית, סימניות מה- web map ייובואו וישמשו לאכלוס מראש של בר הסדרה. כיבוי אפשרות הסדרה מכבה את בר הסדרה, אבל תצורת הסדרות נשמרת לשימוש עתידי.",
				settingsSeriesHelpContent2: "סדרת ה-Swipe מאפשרת לך ליצור ולערוך מבחר מיקומים מלווים בכיתוביות כותרות וטקסט. אם ל- web map יש סימניות, הן יוצגו. אתה יכול לבטל את הסדרה, אך ההגדרות תישמרנה לשימוש עתידי.",
				settingsSeriesHelpLink: "ראה כאן דוגמא לאלפליקציה עם סדרת ה-Swipe",
				preview: "תצוגה מקדימה של UI",
				settingsLocateButtonExplain: "פונקציונליות זו נתמכת ברוב המכשירים הניידים ובדפדפנים השולחניים (Internet Explorer 9).",
				settingsLocateButton: "הפוך לפעיל את כפתור \'איתור\' לדפדפנים נתמכים",
				settingsAddressSearch: "הפוך לפעיל כלי חיפוש כתובת"
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
				initHeader: "ברוך הבא ל Swipe/Spyglass Builder",
				modalNext: "הבא",
				modalPrev: "קודם",
				modalApply: "פתח את האפליקציה"
			},
			seriesPanel: {
				title: "כותרת",
				descr: "תיאור",
				discard: "אל תשמור סימניות",
				saveExtent: "הגדר תיחום סימניות",
				discardDisabled: "אינך יכול להסיר סימניה זו. ניתן להפוך סדרות swipe ללא פעילות בהגדרות."
			},
			helpPopup: {
				title: "עזרה",
				close: "סגור",
				tab1: {
					div1: "תבנית ה Swipe/Spyglass  להשוואה בין שני web maps או בין שתי שכבות של web map בודד באופן, באפליקצית web קלה לשימוש בה ניתן להשתמש מכל דפדפן על כל מכשיר, כולל טלפונים חכמים וטאבלטים.",
					div2: "למידע נוסף אודות תבנית Swipe/Spyglass כולל דוגמאות שנוצרו על ידי משתמשים, <a href='http://storymaps.arcgis.com/en/app-list/swipe/' target='_blank'> בקר באתר מפות הסיפור</a>. ניתן לעקוב גם  בטוויטר דרך <a href='https://twitter.com/EsriStoryMaps' target='_blank'>@EsriStoryMaps</a>.",
					div3: "נשמח לשמוע ממך! בין אם יש לך שאלה, רוצה לבקש יכולת חדשה, או חושב שמצאת באג, אנא בקר ב- <a href='http://links.esri.com/storymaps/forum' target='_blank'>פורום המשתמשים של מפות סיפור</a>."
				}
			},
			share: {
				firstSaveTitle: "כן_Story successfully saved________ש",
				firstSaveHeader: "כן_Your story is now saved in ArcGIS Online. Please read the following answers to frequent questions______________________________ש.",
				firstSaveA1: "אם אינך מכיר את ArcGIS Online או שאתה מעוניין בקיצור דרך לממשק העריכה, אתה יכול לשמור את הלינק הבא: %LINK1%",
				firstSaveA1bis: "כן_The story can also be found in your <a href='%LINK2%' target='_blank'>ArcGIS Online content folder</a>________________________________ש.",
				firstSaveQ2: "כן_Is my story shared_______ש?",
				firstSaveA2: "כן_Currently your story is not shared. To share it, use the SHARE button______________________ש.",
				shareTitle: "כן_Share your story______ש",
				sharePrivateHeader: "כן_Your story is not shared, would you like to share it_________________ש?",
				sharePrivateBtn1: "שתף באופן ציבורי",
				sharePrivateBtn2: "שתף עם הארגון שלי",
				sharePrivateProgress: "שיתוף בתהליך...",
				sharePrivateErr: "השיתוף נכשל, נסה שנית או",
				sharePrivateOk: "עדכון השיתוף הצליח, טוען...",
				shareStatus1: "כן_Story is not saved______ש",
				shareStatus2: "כן_Story is shared publicly________ש",
				shareStatus3: "כן_Story is shared within the organization_____________ש",
				shareStatus4: "כן_Story is not shared_______ש",
				sharePreviewAsUser: "תצוגה מקדימה",
				shareHeader1: "כן_Your story is <strong>publicly accessible</strong>________________ש.",
				shareHeader2: "כן_Your story is accessible by your organization members (login is required)_______________________ש.",
				shareLinkHeader: "כן_Share the story with your audience___________ש",
				shareLinkOpen: "פתח",
				learnMore: "מידע נוסף",
				shareQ1Opt1: "כן_How do I keep the story private___________ש?",
				shareQ1Opt2: "כן_How do I keep the story private or share it publicly_________________ש?",
				shareA1: "השתמש ב- %SHAREIMG% ב- <a href='%LINK1%' target='_blank'>דף פריט האפליקציה</a>. אם אתה רוצה גם לבטל את שיתוף של ה- web map, השתמש ב- <a href='%LINK2%' target='_blank'>דף פריט web map</a>.",
				shareA1bis: "אם אתה רוצה לבטל גם את השיתוף לשירות הישויות, השתמש <a href='%LINK1%' target='_blank'>דף פריט שירות הישויות</a>.",
				shareQ2: "כן_How do I edit the story later__________ש?",
				shareQ2bis: "כיצד אני יכול לחזור לממשק הפרסום?",
				shareA2div1: "כן_Save and reuse the following link %LINK1% or use <a href='%LINK2%' target='_blank'>the story item page</a>_________________________________ש.",
				shareA2div2: "כן_As the owner of the story, when you are signed in on ArcGIS.com, the story includes a button to open the interactive builder_______________________________________ש:",
				shareQ3: "היכן מאוחסן המידע?",
				shareA3: "כן_The story configuration is stored in this web application item</a>_____________________ש.",
				shareWarning: "שיתוף עם %WITH% לא מתאפשר מכיוון שאינך הבעלים של <a href='%LINK%' target='_blank'>webmap</a>.",
 				shareWarningWith1: "ציבורי",
 				shareWarningWith2: "ציבורי וגם עם הארגון"
			},
			directCreation: {
				header: "ברוך הבא ל Swipe/Spyglass Builder",
				mapPickHeader: "כדי להתחיל, אנא בחר מזהה web map תקין, או השתמש בכפתור החיפוש כדי למצא web maps.",
				launchBuilder: "התחל Builder",
				chooseWebmapLbl: "בחר web map...",
				explain2: "ליצירת מפת סיפור מסוג Swipe או Spyglass, השתמש בכפתור למטה לבחירת  ArcGIS Online web map קיימת בה תרצה להשתמש. לחילופין ניתן להדביק ID של  web map לתוך השדה למטה.",
				explain3: "אם ברצונך להשתמש בשתי  web maps במפת הסיפור שלך, תתבקש לבחור את ה-web map השנייה כאשר תבחר באפשרות הזו.",
				webmapPlaceholder: "הכנס id של web map..."
			}
		},
		configure: {
			mapdlg:{
				items:{
					organizationLabel: "הארגון שלי",
					onlineLabel: "ArcGIS Online",
					contentLabel: "התוכן שלי",
					favoritesLabel: "המועדפים שלי"
				},
				title: "בחר Web Map",
				searchTitle: "חפש",
				ok: "אישור",
				cancel: "ביטול",
				placeholder: "הכנס מונח לחיפוש"
			}
		}
    })
);
