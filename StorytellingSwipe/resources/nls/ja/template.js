﻿define(
	({
		viewer: {
			loading: {
				step1: "アプリケーションを読み込んでいます",
				step2: "データを読み込んでいます",
				step3: "初期化",
				fail: "スワイプの読み込みに失敗しました",
				loadBuilder: "ビルダ モードへの切り替え",
				failButton: "再試行"
			},
			errors: {
				boxTitle: "エラーが発生しました",
				portalSelf: "致命的なエラー: ポータルの構成情報を取得できませんでした",
				invalidConfig: "致命的なエラー: 無効な構成",
				invalidConfigNoWebmap: "致命的なエラー: 無効な構成 (Web マップが指定されていません)",
				createMap: "マップを作成できません",
				invalidApp: "致命的なエラー: アプリケーションを読み込めません",
				initMobile: "スワイプ Web アプリケーションへようこそ。アプリケーションは構成されていません。 モバイル デバイスでは、対話型ビルダはサポートされていません。",
				noBuilderIE8: "バージョン 9 よりも前の Internet Explorer では、スワイプ対話型ビルダはサポートされていません。",
				noLayerView: "スワイプ Web アプリケーションへようこそ。<br />アプリケーションは、まだ構成されていません。",
				appSave: "Web アプリケーションの保存中にエラーが発生しました",
				mapSave: "Web マップの保存中にエラーが発生しました",
				notAuthorized: "このアプリケーションにアクセスする権限がありません",
				conflictingProjectionsTitle: "投影法の競合",
				conflictingProjections: "スワイプでは、投影法の異なる 2 つの Web マップを使用できません。設定を開き、最初の Web マップと投影法が同じである Web マップを使用してください。",
				cpButton: "閉じる"
			},
			mobileView: {
				hideIntro: "概要を非表示",
				navLeft: "凡例",
				navMap: "マップ",
				navRight: "データ"
			},
			desktopView: {
				storymapsText: "ストーリー マップ",
				builderButton: "ビルダ モードに切り替え",
				bitlyTooltip: "アプリケーションへのショート リンクを取得"
			}
		},
		builder: {
			builder: {
				panelHeader: "アプリケーション構成",
				buttonSave: "保存",
				buttonDiscard: "キャンセル",
				buttonSettings: "設定",
				buttonView: "ビュー モード",
				buttonItem: "Web アプリケーション アイテムを開く",
				noPendingChange: "保留中の変更はありません",
				unSavedChangeSingular: "1 つの保存されていない変更",
				unSavedChangePlural: "複数の保存されていない変更",
				popoverDiscard: "保存されていない変更を破棄しますか？",
				yes: "はい",
				no: "いいえ",
				popoverOpenViewExplain: "ビューアを開くと、保存されていない変更は失われます",
				popoverOpenViewOk: "OK",
				popoverOpenViewCancel: "キャンセル",
				popoverSaveWhenDone: "完了したら必ず保存してください",
				closeWithPendingChange: "アクションを確認しますか？変更内容は失われます。",
				gotIt: "OK",
				savingApplication: "アプリケーションを保存しています",
				saveSuccess: "アプリケーションは正常に保存されました",
				saveError: "保存に失敗しました。もう一度やり直してください。",
				signIn: "アカウントでサイン インして",
				signInTwo: "アプリケーションを保存してください。"
			},
			header:{
				editMe: "編集",
				templateTitle: "テンプレートのタイトルの設定",
				templateSubtitle: "テンプレートのサブタイトルの設定"
			},
			settings: {
				settingsHeader: "アプリケーション設定",
				modalCancel: "キャンセル",
				modalApply: "適用"
			},
			settingsColors: {
				settingsTabColor: "主題",
				settingsColorExplain: "アプリケーションの主題を選択したり、独自の色を定義したりします。",
				settingsLabelColor: "ヘッダーとサイド パネルの背景色"
			},
			settingsHeader: {
				settingsTabLogo: "ヘッダー",
				settingsLogoExplain: "ヘッダー ロゴをカスタマイズします (最大 250 x 50 ピクセル)。",
				settingsLogoEsri: "Esri ロゴ",
				settingsLogoNone: "ロゴなし",
				settingsLogoCustom: "カスタム ロゴ",
				settingsLogoCustomPlaceholder: "画像の URL",
				settingsLogoCustomTargetPlaceholder: "クリックスルー リンク",
				settingsLogoSocialExplain: "ヘッダー右上にあるリンクのカスタマイズ",
				settingsLogoSocialText: "テキスト",
				settingsLogoSocialLink: "リンク",
				settingsLogoSocialDisabled: "この機能は、管理者によって無効にされています"
			},
			settingsExtent: {
				settingsTabExtent: "範囲",
				settingsExtentExplain: "以下の対話型マップを使用して初期範囲を設定します。",
				settingsExtentExplainBottom: "定義した範囲によって、Web マップの初期範囲が変更されます。スワイプ操作を実行する場合、その範囲は使用されないことに注意してください。",
				settingsExtentDateLineError: "この範囲は、経度 180° の子午線を超えることはできません。",
				settingsExtentDateLineError2: "範囲を計算中にエラーが発生しました",
				settingsExtentDrawBtn: "新しい範囲の描画",
				settingsExtentModifyBtn: "現在の範囲の編集",
				settingsExtentApplyBtn: "メイン マップに適用",
				settingsExtentUseMainMap: "メイン マップ範囲の使用"
			}
        },
		swipe: {
			mobileData: {
				noData: "表示するデータがありません",
				noDataExplain: "マップをタップしてフィーチャを選択してから、ここに戻ってください",
				noDataMap: "このマップ用のデータがありません",
				noPopup: "このフィーチャにはポップアップがありません"
			},
			mobileLegend: {
				noLegend: "表示する凡例がありません。"
			},
			swipeSidePanel: {
				editTooltip: "サイド パネルの説明を設定",
				editMe: "編集",
				legendTitle: "凡例"
			},
			infoWindow: {
				noFeature: "表示するデータがありません",
				noFeatureExplain: "マップをタップしてフィーチャを選択します"
			},
			settingsLayout: {
				settingsTabLayout: "スワイプのスタイル",
				settingsLayoutExplain: "スワイプ ツールのスタイルを選択します。",
				settingsLayoutSwipe: "垂直バー",
				settingsLayoutSpyGlass: "スパイグラス (のぞき窓)",
				settingsLayoutSelected: "選択したレイアウト",
				settingsLayoutSelect: "このレイアウトを選択",
				settingsSaveConfirm: "一部の変更は、保存してアプリケーションを再読み込みする必要があります"
			},
			settingsDataModel: {
				settingsTabDataModel: "須_Swipe Type_鷗",
				settingsDataModelExplainSwipe: "須_What do you want users to swipe?_鷗",
				settingsDataModelExplainSwipe2: "",
				settingsDataModelExplainSpyGlass: "スパイグラスに表示するレイヤまたは Web マップを選択します。",
				settingsDataModelOneMap: "須_A layer in a web map_鷗",
				settingsDataModel1Explain: "須_Select the layer you want to be swiped_鷗",
				settingsDataModel1Warning: "レイヤが上に重なっているレイヤによって隠れている場合、スワイプは機能しません。",
				settingsDataModel1SpyGlassExplain: "スパイグラス内に表示するレイヤを選択します。",
				settingsDataModelTwoMaps: "2 つの Web マップ",
				settingsDataModelLayerIds: "Web マップ レイヤ ID",
				settingsDataModelSelected: "選択されたタイプ",
				settingsDataModelWebmapSwipeId1: "右の Web マップ ID",
				settingsDataModelWebmapSwipeId2: "左の Web マップ ID",
				settingsDataModelWebmapGlassId1: "メイン Web マップ ID",
				settingsDataModelWebmapGlassId2: "スパイグラス Web マップ ID",
				settingsDataModelSelect: "このタイプを選択",
				settingsDataModel2Explain: "別の Web マップでスワイプします。",
				settingsDataModel2SpyGlassExplain: "別の Web マップを公開します。",
				settingsDataModel2HelpTitle: "須_How do I find a web map's ID?_鷗",
				settingsDataModel2HelpContent: "Web マップの URL 内の「=」記号から後ろの数字をコピーして貼り付けます。"
			},
			settingsLegend: {
				settingsTabLegend: "アプリケーションのレイアウト",
				settingsLegendExplain: "アプリケーションのレイアウト設定を選択します。",
				settingsLegendEnable: "凡例を有効化",
				settingsDescriptionEnable: "説明を有効化",
				settingsBookmarksEnable: "一連のスワイプを有効化",
				settingsPopupDisable: "ポップアップの有効化",
				settingsLocationSearchEnable: "須_Enable locator search_鷗",
				settingsGeolocatorEnable: "須_Enable geolocator_鷗",
				settingsLegendHelpContent: "凡例のコンテンツを更新するには、ArcGIS.com Web マップ ビューアのコンテンツ ウィンドウを使用します (凡例では非表示)",
				settingsSeriesHelpContent: "須_Swipe series is a tabbed navigation option that will guide the viewer to a particular extent and display a title and description text in the side panel.  During initial activation, the bookmarks from the web map(s) will be imported and used to pre-populate the series bar.  Disabling the series option turns off the series bar, but the series configuration is preserved for future use._鷗", 
				preview: "UI のプレビュー",
				settingsLocateButtonExplain: "須_This functionality if supported on most mobile devices and desktop browsers (including Internet Explorer 9+)._鷗",
				settingsLocateButton: "須_Enable a 'Locate' button supported browsers_鷗",
				settingsAddressSearch: "須_Enable an address search tool_鷗"
			},
			settingsSwipePopup: {
				settingsSwipePopup: "ポップアップ",
				settingsSwipePopupExplain: "簡単にポップアップをマップ レイヤに関連付けできるよう、ポップアップ ヘッダーの外観をカスタマイズします。",
				settingsSwipePopupSwipe1: "左マップ",
				settingsSwipePopupSwipe2: "右マップ",
				settingsSwipePopupGlass1: "メイン マップ",
				settingsSwipePopupGlass2: "スパイグラス マップ",
				settingsSwipePopupTitle: "ヘッダーのタイトル",
				settingsSwipePopupColor: "ヘッダーの色"
			},
			initPopup: {
				initHeader: "スワイプ ビルダへようこそ",
				modalNext: "次へ",
				modalPrev: "須_Previous_鷗",
				modalApply: "アプリケーションを開く"
			},
			seriesPanel: {
				title: "タイトル",
				descr: "説明",
				discard: "ブックマークの破棄",
				saveExtent: "ブックマークの範囲の設定",
				discardDisabled: "そのブックマークを削除することができません。[設定] で、スワイプが無効化されている可能性があります。"
			}
		}
    })
);