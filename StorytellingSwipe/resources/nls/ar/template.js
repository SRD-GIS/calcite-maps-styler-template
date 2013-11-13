﻿define(
	({
		viewer: {
			loading: {
				step1: "تحميل التطبيق",
				step2: "تحميل البيانات",
				step3: "تهيئة",
				fail: "للأسف، فشل تحميل السحب",
				loadBuilder: "التبديل إلى وضع المُنشيء",
				failButton: "إعادة المحاولة"
			},
			errors: {
				boxTitle: "حدث خطأ",
				portalSelf: "خطأ فادح: فشل في الحصول على تكوين المدخل",
				invalidConfig: "خطأ فادح: تكوين غير صحيح",
				invalidConfigNoWebmap: "خطأ فادح: تكوين غير صحيح (لا توجد خرائط ويب محددة)",
				createMap: "تعذر إنشاء الخريطة",
				invalidApp: "خطأ فادح: لا يمكن تحميل التطبيق",
				initMobile: "مرحبًا بك في تطبيق خريطة السحب. تعذر تكوين التطبيق. المنشئ التفاعلي غير مدعوم على أجهزة الجوال.",
				noBuilderIE8: "منشئ السحب التفاعلي غير مدعوم على Internet Explorer فيما قبل الإصدار 9.",
				noLayerView: "مرحبًا في تطبيق السحب على الويب. <br /> لم يتم تكوين التطبيق بعد.",
				appSave: "خطأ اثناء حفظ تطبيق الويب",
				mapSave: "خطأ أثناء حفظ خريطة الويب",
				notAuthorized: "لست مخولاً لتكوين التطبيق للوصول إلى هذا التطبيق",
				conflictingProjectionsTitle: "تعارض الإسقاطات",
				conflictingProjections: "لا يدعم السحب استخدام اثنان من خرائط الويب ذات إسقاطات مختلفة. الرجاء فتح الإعدادات واستخدم خريطة الويب التي تستخدم نفس الإسقاط لخريطة الويب الأولى.",
				cpButton: "إغلاق"
			},
			mobileView: {
				hideIntro: "إخفاء المقدمة",
				navLeft: "مفتاح الخريطة",
				navMap: "خريطة",
				navRight: "البيانات"
			},
			desktopView: {
				storymapsText: "قصة داخل خريطة",
				builderButton: "الانتقال إلى وضع المنشئ",
				bitlyTooltip: "الحصول على رابط قصير إلى التطبيق"
			}
		},
		builder: {
			builder: {
				panelHeader: "تكوين التطبيق",
				buttonSave: "حفظ",
				buttonDiscard: "إلغاء الأمر",
				buttonSettings: "الإعدادات",
				buttonView: "عرض الوضع",
				buttonItem: "فتح عنصر تطبيق الويب",
				noPendingChange: "لا يوجد تغيير معلق",
				unSavedChangeSingular: "1 تغيير غير محفوظ",
				unSavedChangePlural: "تغييرات غير محفوظة",
				popoverDiscard: "هل تريد تجاهل أية تغييرات غير محفوظة؟",
				yes: "نعم",
				no: "لا",
				popoverOpenViewExplain: "عند فتح العارض، سوف تخسر أية تغييرات غير محفوظة",
				popoverOpenViewOk: "موافق",
				popoverOpenViewCancel: "إلغاء الأمر",
				popoverSaveWhenDone: "لا تنسى الحفظ بعد الانتهاء",
				closeWithPendingChange: "هل تريد تأكيد الإجراء؟ سوف تخسر جميع التغييرات.",
				gotIt: "موافق",
				savingApplication: "حفظ التطبيق",
				saveSuccess: "تم حفظ التطبيق بنجاح",
				saveError: "حدث فشل أثناء الحفظ، يرجى المحاولة مرة أخرى",
				signIn: "يرجى تسجيل الدخول بحساب داخل",
				signInTwo: "لحفظ التطبيق"
			},
			header:{
				editMe: "حررني !",
				templateTitle: "تحديد عنوان القالب",
				templateSubtitle: "تحديد العنوان الفرعي للقالب"
			},
			settings: {
				settingsHeader: "إعدادات التطبيق",
				modalCancel: "إلغاء الأمر",
				modalApply: "تطبيق"
			},
			settingsColors: {
				settingsTabColor: "سمة",
				settingsColorExplain: "اختر سمة التطبيق أو قم بتعريف الألوان الخاصة بك.",
				settingsLabelColor: "ألوان خلفية اللوحة الجانبية والعنوان"
			},
			settingsHeader: {
				settingsTabLogo: "رأس الصفحة",
				settingsLogoExplain: "تخصيص شعار (الحد الأقصى 250 x 50 px).",
				settingsLogoEsri: "شعار Esri",
				settingsLogoNone: "لا يوجد شعار",
				settingsLogoCustom: "تخصيص الشعار",
				settingsLogoCustomPlaceholder: "عنوان URL للصورة",
				settingsLogoCustomTargetPlaceholder: "انقر فوق الرابط",
				settingsLogoSocialExplain: "تخصيص عنوان الرابط الموجود أعلى اليمين.",
				settingsLogoSocialText: "النص",
				settingsLogoSocialLink: "رابط",
				settingsLogoSocialDisabled: "لقد تم تعطيل هذا المعلم بواسطة المدير"
			},
			settingsExtent: {
				settingsTabExtent: "المدى",
				settingsExtentExplain: "تعيين النطاق الأولي خلال الخريطة التفاعلية الموضحة أدناه.",
				settingsExtentExplainBottom: "سيقوم النطاق الذي تم تعريفه بتعديل النطاق الأولي لخريطة الويب. لاحظ أنه إذا كنت تقوم بعمل سلسلة من السحب، فلن يتم استخدام هذا النطاق.",
				settingsExtentDateLineError: "لا يجب أن يتجاوز النطاق خط الطول 180 درجة",
				settingsExtentDateLineError2: "حدث خطأ أثناء حساب النطاق",
				settingsExtentDrawBtn: "ارسم النطاق الجديد",
				settingsExtentModifyBtn: "تحرير النطاق الحالي",
				settingsExtentApplyBtn: "التطبيق على الخريطة الرئيسية",
				settingsExtentUseMainMap: "استخدام نطاق الخريطة الأساسي"
			}
        },
		swipe: {
			mobileData: {
				noData: "لا توجد بيانات للعرض!",
				noDataExplain: "اضغط على الخريطة لتحديد المعالم والرجوع إلى هنا مرة أخرى",
				noDataMap: "لا يوجد بيانات لهذه الخريطة",
				noPopup: "لا توجد أي عناصر منبثقة لهذه المعالم"
			},
			mobileLegend: {
				noLegend: "لا يوجد أي وسائل إيضاح لعرضها"
			},
			swipeSidePanel: {
				editTooltip: "تعيين وصف اللوحة الجانبية",
				editMe: "حررني !",
				legendTitle: "مفتاح الخريطة"
			},
			infoWindow: {
				noFeature: "لا توجد بيانات لعرضها",
				noFeatureExplain: "اضغط فوق الخريطة لتحديد المعالم"
			},
			settingsLayout: {
				settingsTabLayout: "نمط السحب",
				settingsLayoutExplain: "اختر النمط لأداة السحب.",
				settingsLayoutSwipe: "الشريط العمودي",
				settingsLayoutSpyGlass: "منظار",
				settingsLayoutSelected: "مخطط محدد",
				settingsLayoutSelect: "حدد هذا المخطط",
				settingsSaveConfirm: "تتطلب بعض من التغيرات حفظ التطبيق وإعادة تحميله مرة أخرى"
			},
			settingsDataModel: {
				settingsTabDataModel: "طبقة السحب",
				settingsDataModelExplainSwipe: "اختر الطبقة أو خريطة الويب التي ستظهر وتختفي أثناء السحب.",
				settingsDataModelExplainSwipe2: "",
				settingsDataModelExplainSpyGlass: "اختر الطبقة أو خريطة الويب التي ستظهر في المنظار.",
				settingsDataModelOneMap: "خريطة ويب واحدة وطبقة فردية",
				settingsDataModel1Explain: "حدد الطبقة ليتم التحكم فيها من قبل أداة السحب.",
				settingsDataModel1Warning: "إذا كانت الطبقة مختفية من قبل الطبقات العلوية، لن يكون السحب ذو تأثير يذكر.",
				settingsDataModel1SpyGlassExplain: "حدد الطبقة لتظهر داخل المنظار.",
				settingsDataModelTwoMaps: "اثنان من خرائط الويب",
				settingsDataModelLayerIds: "معرفات طبقة خريطة الويب",
				settingsDataModelSelected: "النوع المحدد",
				settingsDataModelWebmapSwipeId1: "معرف خريطة الويب الأيمن",
				settingsDataModelWebmapSwipeId2: "معرف خريطة الويب الأيسر",
				settingsDataModelWebmapGlassId1: "معرف خريطة الويب الرئيسي",
				settingsDataModelWebmapGlassId2: "معرف خريطة ويب المنظار",
				settingsDataModelSelect: "حدد هذا النوع",
				settingsDataModel2Explain: "اسحب مع خريطة ويب أخرى",
				settingsDataModel2SpyGlassExplain: "كشف خريطة ويب أخرى.",
				settingsDataModel2HelpTitle: "كيفية إيجاد معرف خريطة الويب",
				settingsDataModel2HelpContent: "انسخ والصق الأرقام بعد علامة "=" داخل عنوان URL لخريطة الويب"
			},
			settingsLegend: {
				settingsTabLegend: "التخطيط الطباعي للتطبيق",
				settingsLegendExplain: "حدد إعدادات التخطيط الطباعي للتطبيق.",
				settingsLegendEnable: "تمكين وسيلة الإيضاح",
				settingsDescriptionEnable: "تمكين الوصف",
				settingsBookmarksEnable: "تمكين سلاسل السحب",
				settingsPopupDisable: "بيت_Enable popup_لاحقة",
				settingsLegendHelpContent: "لتحسين محتوى مفتاح الخريطة، استخدم جدول محتويات عارض خريطة الويب ArcGIS.com (مخفي في وسيلة الإيضاح)",
				settingsSeriesHelpContent: "بيت_On first activation, your web map(s) bookmarks will be used to pre-populate the series bar. If you disable the series option later, your series configuration won't be discarded and will be available if you decide to enable the series again._لاحقة",
				preview: "معاينة واجهة المستخدم"
			},
			settingsSwipePopup: {
				settingsSwipePopup: "العنصر المنبثق",
				settingsSwipePopupExplain: "تخصيص مظهر العنوان المنبثق لمساعدة المستخدمين في مشاركة العناصر المنبثقة مع طبقات الخريطة.",
				settingsSwipePopupSwipe1: "الخريطة اليسرى",
				settingsSwipePopupSwipe2: "الخريطة اليمنى",
				settingsSwipePopupGlass1: "الخريطة الأساسية",
				settingsSwipePopupGlass2: "خريطة المنظار",
				settingsSwipePopupTitle: "عنوان رأس الصفحة",
				settingsSwipePopupColor: "لون رأس الصفحة"
			},
			initPopup: {
				initHeader: "مرحبًا بك في منشئ السحب",
				modalNext: "التالي",
				modalApply: "فتح التطبيق"
			},
			seriesPanel: {
				title: "العنوان",
				descr: "الوصف",
				discard: "تجاهل العلامة المرجعية",
				saveExtent: "تعيين نطاق العلامة المرجعية",
				discardDisabled: "بيت_You can't remove that bookmark. Swipe series can be disabled in the Settings._لاحقة"
			}
		}
    })
);