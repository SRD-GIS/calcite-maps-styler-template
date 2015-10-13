﻿define(
	 ({
		viewer: {
			loading: {
				step1: "试_LOADING STORY_____验",
				step2: "正在加载数据",
				step3: "正在初始化浏览",
				loadBuilder: "切换到构建器模式",
				redirectSignIn: "重定向到登录页面",
				redirectSignIn2: "(登录后您将重定向到此处)",
				fail: "抱歉，地图浏览加载失败",
				failButton: "重试"
			},
			errors: {
				boxTitle: "发生错误",
				portalSelf: "严重错误: 获取门户配置失败",
				invalidConfig: "严重错误: 配置无效",
				invalidConfigOwner: "严重错误: 配置无效(需要授权的所有者)",
				invalidConfigNoWebmap: "严重错误: 无效配置(index.html 中未指定 web 地图或应用程序标识符)",
				createMap: "无法创建地图",
				invalidApp: "试_Fatal error: The story cannot be loaded_____________验",
				noLayer: "Web 地图不包含适用于地图浏览的有效数据图层。",
				noLayerMobile: "试_The Map Tour builder is not supported at this display size___________________验.",
				noLayerView: "试_Welcome to the Map Tour web application.<br />The story is not configured yet________________________验.",
				appSave: "试_Error saving the story________验",
				mapSave: "保存 web 地图时出错",
				featureServiceLoad: "加载要素服务时出错",
				notAuthorized: "试_You are not authorized to access this story______________验",
				oldBrowserTitle: "浏览器的部分功能不受支持",
				noBuilderIE8: "低于版本 9 的 Internet Explorer 不支持 Map Tour 构建器。",
				ie10Win7Explain: "当数据源是带有附件的要素服务时，Windows 7 上的 Internet Explorer 10 不支持地图浏览构建器。若要使用带有附件的要素服务，需要<a target='_blank' href='http://msdn.microsoft.com/en-us/library/ie/hh920756(v=vs.85).aspx'>手动使文档模式符合 Internet Explorer 9 标准</a>，<a target='_blank' href='http://news.softpedia.com/news/How-to-Remove-IE10-and-Get-Back-to-IE9-on-Windows-7-308998.shtml'>降级为 Internet Explorer 9</a> 或升级为 Windows 8。",
				oldBrowserExplain: "此浏览器不支持根据上传到地图浏览的图像自动生成缩略图。可使用此浏览器创建一个地图浏览，但需要为每个上传的图像分别提供缩略图。",
				oldBrowserExplain2: "要改善体验，请<a href='http://browsehappy.com/' target='_blank'>升级浏览器</a>或<a href='http://www.google.com/chromeframe/?redirect=true' target='_blank'>激活用于 Internet Explore 的 Google Chrome 浏览器内嵌框架</a>。",
				oldBrowserExplain3: "地图浏览构建器不适用于 Windows XP 上的 Internet Explorer 10。",
				oldBrowserClose: "关闭"
			},
			mobileHTML: {
				showIntro: "显示标题",
				hideIntro: "隐藏标题",
				navList: "列表",
				navMap: "地图",
				navInfo: "媒体",
				introStartBtn: "开始"
			},
			desktopHTML: {
				storymapsText: "故事地图",
				builderButton: "切换到构建器模式",
				facebookTooltip: "共享至 Facebook",
				twitterTooltip: "共享至 Twitter",
				bitlyTooltip: "获取短链接",
				bitlyStartIndex: "当前地点的链接"
			},
			builderHTML: {
				panelHeader: "试_STORY CONFIGURATION_______验",
				buttonSave: "保存",
				buttonSettings: "设置",
				buttonShare: "共享",
				buttonView: "视图模式",
				buttonItem: "打开 Web 应用程序项目",
				buttonHelp: "帮助",
				buttonOrganize: "组织",
				buttonAdd: "添加",
				buttonImport: "导入",
				buttonImportDisabled: "使用带有附件的要素服务时，导入不可用",
				dataEditionDisabled: "试_Editing data is disabled on this CSV data source_______________验",
				dataSourceWarning: "地图浏览数据图层已发生更改。如果要素 ID 不同，您必须通过<b>组织</b>重置顺序和隐藏点。如果字段名称不同，您必须在<b>设置中的数据选项卡</b>下重置字段设置。",
				organizeWarning: "隐藏交互式构建器外添加的一个或多个点。",
				dataPicError0a: "此浏览包括 <b>%NB%</b> 个不符合规范的图片 URL。",
				dataPicError0b: "此浏览可能包括 <b>%NB%</b> 个不符合规范的图片 URL。",
				dataPicError1: "地图浏览现在需要图片 URL 以下列任一扩展名为结尾: .jp(e)g、.png、.gif 或 .bmp。",
				dataPicError2: "该要求不会影响您现有的已发布地图浏览。但是，为了使用交互式构建器，您必须首先执行以下两种操作之一来解决 URL 问题:",
				dataPicError3: "编辑 URL",
				dataPicError4: "此操作将在不受支持的图片 URL 尾部添加 <i>#isImage</i>。大多数服务器都支持 URL 附加。但在执行此操作后，应通过在各站点间导航来确认更新的图片 URL 是否能够正常工作。如果各图片均可加载，则现在即可保存地图浏览。如果<b>图片已损坏，则不要保存地图浏览</b>。请重新加载构建器并执行第二个操作。",
				dataPicError5: "限制图片浏览",
				dataPicError6: "此选项导致所有 URL 都被视为影像，但您无法使用交互式构建器添加视频。如果您决定在以后添加视频，可以撤消此操作。",
				dataPicError7: "您的地图浏览已限制为图片，无法使用视频。如果选择移除该限制，请在保存地图浏览前检查您的图片加载是否仍正确。如有需要，您可以在稍后恢复该限制。",
				dataPicError8: "移除图片限制",
				dataPicError9: "如果这些 URL 指向视频，您可以忽略此警告，如果指向影像，则需要执行以下两种操作之一:",
				modalCancel: "取消",
				modalApply: "应用",
				organizeHeader: "组织浏览",
				organizeGeneralCaption: "使用拖放功能对浏览点排序",
				organizeDelete: "删除",
				organizeHide: "隐藏",
				organizeReset: "重置顺序和隐藏点",
				addMaxPointReached: "试_You have reached the maximum number of points authorized by the icons set and cannot add another tour point.<br /><br />Note that if you delete existing points, you will need to reload the story____________________________________________________________验.",
				addMaxPointReachedMobile: "抱歉，已达到授权点的最大数目，无法添加该图片。",
				addClose: "关闭",
				addHeader: "添加新浏览点",
				addTabPicture: "媒体",
				addTabInformation: "信息",
				addTabLocation: "位置",
				addSelectCaption: "选择或拖动图片",
				addNoteVideo: "有关使用视频的说明，请查看帮助",		
				addSelectCaptionNoFileReader: "选择图片",	
				addChangePhoto: "更改图片和缩略图",
				addPictureResolutionIntro: "图片分辨率高于所要求值:",
				addPictureResolutionOldBrowser: "图片分辨率高于所要求值。请指定一个低于 %RECOMMENDED_RES% 的分辨率，以便优化地图浏览体验。",
				addPictureResolutionResize: "将图片分辨率更改为 %RESOLUTION%",
				addPictureResolutionKeep: "保持原始分辨率 %RESOLUTION%",
				addSelectThumbnail: "选择缩略图",
				addNoThumbSelected: "未选择缩略图",
				addThumbSelected: "已选",
				addCameraSettingsHeader: "照相机设置",
				addThumbnailHeader: "缩略图",
				addLabelPicUrl: "图片",
				addLabelThumbUrl: "缩略图",
				addTextPlaceholderUrl: "输入图像 URL",
				addTextPlaceholderUrl2: "输入 YouTube 页面 URL",
				addTextPlaceholderUrl3: "输入 Vimeo 页面 URL",
				addTextPlaceholderUrl4: "输入视频嵌入 URL",
				addLabelVideo: "视频",
				addMediaVideoOther: "其他",
				addMediaVideoHelp: "检查 URL 并获取默认缩略图",
				addMediaVideoHelpTooltip1: "检查成功",
				addMediaVideoHelpTooltip2: "检查失败",
				addMediaVideoHelpTooltip4: "导航至嵌入视频选项并复制代码中出现的视频 URL",
				addLabelName: "名称",
				addLabelDescription: "说明文字",
				addTextPlaceholder: "输入内容",
				addLocatePlaceholder: "查找地址或地点",
				addPinColor: "颜色",
				addLatitude: "纬度",
				addLongitude: "经度",
				addLatitudePlaceholder: "例如 34.056",
				addLongitudePlaceholder: "例如 -117.195",
				addUploading: "上传浏览点",
				addSave: "添加浏览点",
				addMobileUploading: "正在上传图片",
				addMobileName: "输入名称",
				addMobileNameMandatory: "出错，请输入名称。",
				addMobileError: "抱歉，出现一些问题",
				settingsHeader: "试_Story settings_____验",
				settingsTabLayout: "布局",
				settingsTabColor: "颜色",
				settingsTabLogo: "标题",
				settingsTabFields: "数据",
				settingsTabExtent: "范围",
				settingsTabZoom: "缩放级别",
				settingsLayoutExplain: "试_Select the layout you want_________验.",
				settingsLayoutProfessional: "由三个面板构成的布局",
				settingsLayoutModern: "集成的布局",
				settingsLayoutSelected: "选中的布局",
				settingsLayoutSelect: "选择此布局",
				settingsLayoutNote: "请注意，在使用视频的位置，即使未选中该选项，标语牌也始终位于视频下方。",
				settingsLayoutLocBtn: "显示\“定位\”按钮",
				settingsLayoutLocBtnHelp: "大多数移动设备和桌面浏览器(Internet Explorer 9)均支持该功能。",
				settingsColorExplain: "通过选择预定义主题或创建自定义主题来更改外观。",
				settingsLabelColor: "页眉、内容和页脚颜色",
				settingsLogoExplain: "自定义页眉徽标(不超过 250 x 50px)。",
				settingsLogoEsri: "Esri 徽标",
				settingsLogoNone: "无徽标",
				settingsLogoCustom: "自定义徽标",
				settingsLogoCustomPlaceholder: "图像 URL",
				settingsLogoCustomTargetPlaceholder: "点击链接",
				settingsLogoSocialExplain: "自定义标题右上方的链接。",
				settingsLogoSocialText: "文本",
				settingsLogoSocialLink: "链接",
				settingsLogoSocialDisabled: "此功能已被管理员禁用",
				settingsDataFieldsExplain: "选择照片名称、说明文字和颜色字段。",
				settingsDataFieldsError: "应用程序无法确定相应的名称、说明文字或颜色数据。请选择要在此处使用的字段。这些设置稍后可进行更改。",
				settingsFieldsLabelName: "名称",
				settingsFieldsLabelDescription: "说明文字",
				settingsFieldsLabelColor: "颜色",
				settingsFieldsReset: "重置字段选择",
				settingsExtentExplain: "通过下面的交互式地图设置 Map Tour 初始范围。",
				settingsExtentExplainBottom: "您定义的范围将修改 web 地图初始范围。请注意，如果范围不包括第一个浏览点，则不使用此范围。这时将以第一个点为中心打开浏览。",
				settingsExtentDateLineError: "范围不可跨越 180° 经线",
				settingsExtentDateLineError2: "计算范围时出错",
				settingsExtentDrawBtn: "确定一个新范围",
				settingsExtentModifyBtn: "编辑范围",
				settingsExtentApplyBtn: "地图浏览预览",
				settingsExtentUseMainMap: "使用地图浏览范围",
				settingsZoomExplain: "根据介绍设置故事点的缩放(可选项)。",
				settingsLabelZoom: "比例/级别",
				settingsZoomFirstValue: "无",
				settingsFieldError: "请在每个列表中选择一个字段",
				dataTitle: "试_Create hosted Map Tour layer_________验",
				dataExplain: "试_A new Feature Layer will be created for your images and Tour points. The Tour layer won't be shared with anyone unless you share your Map Tour____________________________________________验.",
				dataExplainPortal: "试_This feature requires Portal for ArcGIS 10.4. If you are not successful in creating the Feature Layer please contact your ArcGIS administrator____________________________________________验.",
				dataNameLbl: "试_Layer name____验",
				dataFolderListLbl: "文件夹",
				dataFolderListFetching: "获取文件夹 ...",
				dataRootFolder: "根目录",
				dataNameError: "输入要素服务的名称",
				dataFolderError: "选择有效的文件夹",
				dataSrcContainsInvalidChar: "要素服务名称包含一个或多个无效字符(-、<、>、#、%、:、\"、?、&、+、/ 或 \)。",
				dataSrvAlreadyExistsError: "组织中已经存在该名称的服务。请选择其他名称。",
				dataBtnSave: "试_Create the layer______验",
				dataFooterProgress: "正在创建",
				dataFooterSucceed: "创建成功。正在加载",
				dataFooterError: "创建失败。请重试",
				tabError: "请检查所有选项卡中的错误",
				introRecordBtn: "入口",
				introRecordActivate: "将第一个点做为入手点 (不在转盘中显示)"
			},
			addPopupJS: {
				uploadingPicture: "正在上传图片",
				uploadSuccess: "上传成功",
				uploadError: "上传图片出错",
				uploadError2: "添加要素时出错(html 标签无效)",
				notJpg: "请选择 jpeg 格式的照片",
				errorNoPhoto: "选择要上传的图像",
				errorNoThumbnail: "选择要上传的缩略图",
				errorInvalidPicUrl: "输入有效图片(以 http(s):// 开头，以 jpg、png、gif 或 bmp 结尾)。可使用 \"#isImage\" 作为 URL 的结尾，以覆盖该规则。",
				errorInvalidThumbUrl: "输入有效缩略图 (以 http(s):// 开头，以 jpg、png、gif 或 bmp 结尾)。",
				errorInvalidVideoUrl: "输入有效视频 URL(以 http(s):// 开始)",
				errorNoName: "输入该浏览点的名称",
				errorNoDescription: "输入该浏览点的说明文字",
				errorNoLocation: "设置该浏览点的位置"
			},
			builderJS: {
				noPendingChange: "无未保存的更改",
				unSavedChangeSingular: "1 个未保存的更改",
				unSavedChangePlural: "未保存的更改",
				shareStatus1: "浏览未保存",
				shareStatus2: "浏览已公开共享",
				shareStatus3: "浏览已在组织内部共享",
				shareStatus4: "浏览未共享",
				popoverDiscard: "确定要放弃未保存的更改吗?",
				yes: "是",
				no: "否",
				popoverLoseSave: "打开查看器，您将丢失所有未保存的更改",
				ok: "确定",
				popoverSaveWhenDone: "完成后请不要忘记保存",
				closeWithPendingChange: "确定要执行此操作吗? 您的更改将丢失。",
				gotIt: "确定",
				savingApplication: "试_Saving story_____验",
				saveSuccess: "试_Story saved successfully________验",
				saveError: "保存失败，请重试",
				saveError2: "由于名称或描述中存在无效 html 标签，因此保存失败",
				saveError3: "标题不能为空",
				dragColorPicker: "随意移动<br />或更改颜色",
				dataWarningExtent: "部分数据位于 web 地图的范围之外。这些数据不用作浏览点，如果要使用它们，请更改地图范围。",
				dataWarningVisibi: "您的地图浏览图层在当前 web 地图范围内不可见。将地图扩大到 %MAPSIZE% 可保证地图浏览图层可见。",
				dataWarningEdit: "编辑 web 地图",
				dataWarningClose: "关闭",
				signIn: "请使用帐户登录",
				signInTwo: "试_to save the story______验.",
				switchBM: "更改底图"
			},
			organizePopupJS: {
				messageStart: "您已选择删除",
				messageSinglePoint: "一个浏览点",
				messageMultiPoint: "多个浏览点",
				messagePermantRemove: "此操作将从数据库中永久移除",
				messageRecord: "个记录",
				messageRecordPlural: "个记录",
				messageConfirm: "。是否要继续?",
				labelButtonShow: "显示",
				labelButtonHide: "隐藏"
			},
			picturePanelJS: {
				popoverDeleteWarningPicAndThumb: "这将永久删除图片和缩略图",
				popoverDeleteWarningThumb: "这将永久删除缩略图",
				popoverUploadingPhoto: "正在上传图片和缩略图",
				popoverUploadingThumbnail: "正在上传缩略图",
				popoverUploadSuccessful: "上传成功",
				popoverUploadError: "上传失败，请重试",
				changePicAndThumb: "更改图片",
				changeThumb: "更改缩略图",
				selectPic: "更改媒体",
				selectThumb: "更改缩略图",
				uploadPicAndThumb: "应用"
			},
			headerJS:{
				editMe: "编辑!",
				templateTitle: "设置模板标题",
				templateSubtitle: "设置模板子标题"
			},
			crossFaderJS:{
				setPicture: "设置图片标题",
				setCaption: "设置图片说明文字"
			},
			importPopup: {
				title: "导入",
				prevBtn: "上一步",
				nextBtn: "下一步"
			},
			importPopupHome: {
				header: "图片存储在哪里?"
			},
			onlinePhotoSharingCommon: {
				pictures: "图片",
				videos: "视频",
				disabled: "此功能已被管理员禁用",
				disabledPortal: "试_This feature require the Portal to have an ArcGIS Data Store configured as the managed Database. Please contact your Portal for ArcGIS Administrator______________________________________________验.",
				header1: "您的图片必须公开共享。",
				header2: "导入将限制为前 %NB1% 个 %MEDIA%。",
				emptyDataset: "发生错误，未找到图片",
				footerImport: "导入",
				selectAlbum: "选择公共图片集",
				selectAlbum2: "选择图片集",
				pleaseChoose: "请选择",
				userLookup: "查找",
				userLookingup: "正在查找",
				csv: "在 CSV 中引用",
				advanced: "高级选项",
				advancedScratchLbl: "启动新浏览",
				advancedScratchTip: "创建可使用向导进行手动填充的空浏览。",
				advancedCSVLbl: "从 CSV 文件导入浏览数据",
				advancedCSVTip: "从 CSV 文件导入浏览内容。",
				advancedCommonTip: "这需要图像和视频均已在线。",
				select: "做出选择",
				locUse: "使用图片地理位置",
				locExplain: "由于图片位置可能继承自图片集，导致所有照片都位于同一位置，因此您可能不想使用图片位置。",
				locExplain2: "由于视频位置可能继承自用户设置，导致所有视频均位于同一位置，因此您可能不想使用视频位置。"
			},
			viewFlickr: {
				title: "Flickr 导入",
				header: "输入 Flickr 用户名并选择要导入的照片集或标签。",
				userInputLbl: "输入用户名",
				signInMsg2: "未找到用户",
				selectSet: "选择照片集",
				selectTag: "或选择标签",
				footerImportTag: "导入所选标签",
				footerImportSet: "导入所选集"
			},
			viewFacebook: {
				title: "Facebook 导入",
				header: "使用 Facebook 用户帐户进行身份验证或使用公共页面。私人图片集可用于创建不需要 Facebook 用户身份验证的公共地图浏览，这样可以保持注释和偏好的私密性。",
				leftHeader: "Facebook 用户",
				rightHeader: "Facebook 页面",
				pageExplain: "Facebook 页面属于公共品牌/产品或像 <b>esrigis</b> 一样的名品。可以在页面 URL 的第一个\“/\”后面获得页面名称。",
				pageInputLbl: "输入页面名称",
				lookupMsgError: "未找到页面"
			},
			viewPicasa: {
				title: "Picasa/Google+ 导入",
				header: "输入您的电子邮件地址或 Picasa 或 Google+ 的帐户 ID。",
				userInputLbl: "输入电子邮件或 ID",
				signInMsg2: "未找到帐户",
				signInMsg3: "无公共图片集",
				howToFind: "如何查找 Picasa 或 Google+ 帐户 ID",
				howToFind2: "复制任何 Picasa 或 G+ 页面的第一个和第二个\“/\”之间的数字"
			},
			viewCSV: {
				title: "CSV 导入",
				uploadBtn: "选择或删除 CSV 文件",
				resultHeaderEmpty: "CSV 为空",
				resultHeaderSuccess: "已成功加载 %NB_POINTS% 个点",
				resultHasBeenLimited: "导入已限制为 %VAL2% 个点的前 %VAL1% 个点，以符合每次浏览 %VAL3% 个点的限制",
				browserSupport: "不支持您的浏览器，若要使用 CSV，必须<a href='http://browsehappy.com/' target='_blank'>升级浏览器</a>或使用 ArcGIS.com web 地图查看器 (请参阅\“帮助\”)。",
				errorLatLng: "未找到纬度和经度字段。可能的纬度值为: <i>%LAT%</i>，经度值为: <i>%LONG%</i>。",
				errorFieldsExplain: "未找到以下必填字段，所以加载失败",
				errorFieldsName: "<b>名称</b>可能值为: %VAL%",
				errorFieldsDesc: "<b>描述</b>可能值为: %VAL%",
				errorFieldsUrl: "<b>图片 URL</b> 可能值为: %VAL%",
				errorFieldsThumb: "<b>缩略图 URL</b> 可能值为: %VAL%",
				errorFields2Explain: "加载失败，因为 CSV 没有使用与以下图层属性相同的属性",
				errorFields2Name: "<b>名称</b>使用 %VAL1% 替代 %VAL2%",
				errorFields2Desc: "<b>描述</b>使用 %VAL1% 替代 %VAL2%",
				errorFields2Url: "<b>图片 URL</b> 使用 %VAL1% 替代 %VAL2%",
				errorFields2Thumb: "<b>缩略图 URL</b> 使用 %VAL1% 替代 %VAL2%",
				resultFieldsAll: "已导入所有属性",
				resultFieldsNotAll: "未导入以下属性，因为它们不存在于地图图层中",
				resultFieldsNotAll2: "未导入以下属性",
				footerNextBtnResult: "导入到 Web 地图",
				footerProgress: "正在导入",
				footerSucceed: "导入成功。正在加载"
			},
			viewYoutube: {
				title: "YouTube 导入",
				header: "输入 YouTube 用户名以查找公开共享的视频。",
				pageInputLbl: "输入 YouTube 用户名",
				lookupMsgError: "未找到用户",
				howToFind: "如何查找 YouTube 用户名",
				howToFind2: "用户名显示在视频下方",
				found: "已找到",
				noData: "未找到公开视频"
			},
			viewGeoTag: {
				title: "选择并定位您的图像/视频",
				header: "单击或点击想导入的图片，以将其定位。",
				headerMore: "为什么我的图像/视频没有地理定位?",
				headerExplain: "如果您的图片具有有效的地理位置，它们将自动在地图上定位并在第二个选项卡中列出。<br /><br />默认情况下，Picasa 和 Flickr 在您导入图片时不会存储地理位置 EXIF 元数据。请选中 Picasa/Flickr 隐私设置以启用图片地理位置导入并可供外部应用程序使用。可能需要针对要使用的 EXIF 地理位置将现有图片重新导入到 Flickr/Picasa。<br /><br />在 Facebook 中，需要选中每个图片，单击\“编辑\”并选择位置。",
				leftPanelTab1: "定位",
				leftPanelTab2: "已定位",
				clickOrTap: "单击或点击要定位的地图",
				clearLoc: "清除位置",
				clickDrop: "不要导入",
				footerImport: "导入",
				footerProgress: "正在导入",
				footerSucceed: "导入成功。正在加载...",
				loading: "正在加载",
				error: "图片地理位置导入失败，地理位置已被忽略。"
			},
			initPopup: {
				title: "欢迎使用地图浏览构建器",
				prevBtn: "上一步",
				nextBtn: "下一步"
			},
			initPopupHome: {
				header1: "图像或视频的位置在哪?",
				header2: "该助手将帮助您通过已在线存储的媒体来构建地图浏览，或者将媒体导入到您的 ArcGIS Online for Organizations 帐户。",
				title1: "媒体已在线",
				title2: "我需要上传我的图像",
				hostedFSTooltip: "试_Upload your images and store them with the Map Tour layer (doesn't support video)__________________________验.",
				hostedFsNA: "试_You must be a Publisher or in another role with the privilege to publish hosted Feature Layers. Please contact your ArcGIS administrator__________________________________________验.",
				hostedFsNA2: "试_Only available for ArcGIS Online for Organizations member, <a href='%LINK%'>Sign up for a free trial</a>________________________________验",
				footer1: "完成后，不要忘记通过应用程序项目页面与受众共享您的地图浏览。",
				footer3: "下载 CSV 模板",
				footer4: "如果不下载，则 \"另存为\"",
				footer4bis: "如果下载未开始，请右键单击并选择\“另存为\”",
				footer5: "了解详细信息",
				footerProgress: "正在创建",
				footerSucceed: "创建成功。正在加载..."
			},
			helpPopup: {
				title: "帮助",
				close: "关闭",
				tab1: {
					title: "简介",
					div1: "地图浏览模板旨在呈现地理信息，为您要讲述的故事提供吸引人的摄影或媒体元素。",
					div2: "试_The template produces an attractive, easy-to-use web application that lets you present a small set of places on a map in a numbered sequence through which users can browse. The template is designed to be used in any web browser on any device, including smartphones and tablets. <br /><br />________________________________________________________________________________________验",
					div42: "要查看其他用户创建的地图浏览示例，<a href='http://links.esri.com/storymaps/map_tour_gallery' target='_blank'>请访问<a href='http://storymaps.arcgis.com/' target='_blank'>故事地图网站</a>中的图库</a>。您也可以在 Twitter 上关注我们 :<a href='https://twitter.com/EsriStoryMaps' target='_blank'>@EsriStoryMaps</a>。",
					div5: "我们非常期待您的参与! 如果您有任何疑问、想要请求新特性或者发现漏洞，请访问<a href='http://links.esri.com/storymaps/forum' target='_blank'>故事地图用户论坛</a>。"
				},
				tab2: {
					title: "数据",
					div1: "构建地图浏览时要考虑的主要因素是选择在何处存储图片。地图浏览使用的图片可以存储在主要图片共享服务中、任何 web 服务器上或作为要素服务的附件。",
					div1a: "有关受支持的图片格式和视频的详细信息，请参阅此选项卡的最后一部分。",
					div2: "交互式构建器提供两个选项，用于处理您的地图浏览中的影像:",
					div3: "<ul><li>您可以使用<b>在线照片</b>，例如存储在 Flickr 等照片共享站点的影像或存储在您自己网站上的影像。通过影像的 URL 将其引用到您的地图浏览中。</li><li>还可以<b>通过计算机将照片</b>直接上传到您的地图浏览。该上传选项需要您拥有 ArcGIS for Organizations 帐户，并拥有发布者或管理员权限，因为系统将自动为您创建托管的要素服务，您可将照片作为附件存储在其中。</li></ul>",
					div4: "主要用例包括:",
					div4b: "<b>您的照片尚未托管</b>，且您拥有 ArcGIS for Organizations 帐户: 使用托管的要素服务是您的最佳选择。与公共照片共享服务一样，我们将优化您的图片以创建快速加载影像，您将可以访问 ArcGIS 平台的所有管理和数据管理功能。",
					div5: "<b>您不是组织成员</b>: 首先，您需要将图片上传到照片共享网站或您自己的 web 服务器上。借助构建器，您将使用这些继续托管在其原始位置的图片。",
					div6: "<b>您希望重复使用现有要素服务</b>将图片存储为附件或引用外部图片: 请参阅下面的详细描述部分。",
					div7: "<b>您是先前版本的用户</b>，即上一版地图浏览模板的用户，并且已经拥有引用图片和缩略图的 CSV: 您可以导入该 CSV 并优化数据。构建器仅支持使用纬度/经度字段的 CSV; 可以继续在您的 web 地图中使用基于地址的 CSV (请参阅以下部分)。",
					div8: "从在线照片共享服务中导入",
					div9: "导入操作通过在 web 地图要素集中存储图片的 URL 来引用已托管的图片。图片未存储在 ArcGIS Online 中。如果托管的图片无法访问，则图片在地图浏览中将不可用，您将看到\“图片不可用\”的图像。地图浏览可能不会导入图片的名称、描述和位置，这取决于照片服务的提供者。这些属性存储在 web 地图中，对在线服务进行的任何编辑都不会反映在地图浏览中。",
					div10: "在 web 服务器上存储图片",
					div11: "如果选择自己托管图片，则需要手动创建图片的缩略图。使用全分辨率的图片创建缩略图将导致性能下降。因此，强烈建议您使用在线照片共享服务或要素服务来进行此操作。",
					div12: "使用现有要素服务或 Shapefile",
					div13: "任何点要素服务或 shapefile 都可用作地图浏览数据源。只需通过 arcgis.com 地图查看器将其作为图层添加到 web 地图中。如果应用程序在您的图层中找到预期属性，则所有构建器功能都将可用。",
					div14: "字段名称的可能值包括 (不区分大小写):",
					div151: "名称",
					div152: "描述",
					div153: "图片",
					div154: "缩略图",
					div155: "颜色 ",
					div16: "如果在使用要素服务时，应用程序未找到匹配字段，则查看器无法使用，直到您通过构建器配置要使用的字段为止。添加到 web 地图的 CSV 和 shapefile 图层需要包含所有必填字段，否则构建器将无法工作。",
					div162: "使用将图片存储为附件的要素服务时，<b>只能使用带有两个附件的要素</b>。第一个附件定义主要图片，第二个附件定义缩略图。",
					div17: "对于不带附件的要素服务，图片和缩略图字段为必填字段；对于带附件的要素服务，图片和缩略图字段为可选字段 (但强烈建议填写)。如果您的服务已启用附件，构建器将让您以附件形式上传图片。如果没有启动，您只能编辑图片和缩略图 URL。",
					div172: "如果存在，则将始终使用图片和缩略图字段，且不会查询要素服务附件。",
					div173: "示例 CSV 和 shapefile 可从以下位置下载",
					div18: "通过 CSV 或 shapefile 创建托管的要素服务",
					div19: "通过 CSV 或 shapefile 创建托管的要素服务时，默认情况下不启用附件。要启用附件，请打开要素服务的详细信息页面，单击图层部分上的小箭头，您将看到该选项。地图浏览将继续使用通过属性引用的图片和缩略图。另外，如果想将图片作为要素服务附件上传，可以使用图片面板上的两个按钮(\“更改图片\”和\“更改缩略图\”)。",
					div20: "支持的图片格式和视频",
					div21: "支持的图片格式为: <b>.jpg、.jpeg、.png、.gif 和 .bmp</b>。如果您的媒体文件没有以此扩展名结尾，则地图浏览会将其视为视频，但使用要素服务时除外(请参阅下文)。",
					div22: "地图浏览模板不包括视频播放器，因此您必须使用喜欢的视频托管服务所提供的外部视频播放器 (找到嵌入视频并复制给定代码中的 URL 的选项)。如果您想要自己托管视频，则可以创建包含视频播放器 (例如 <a href='http://www.videojs.com/'>Video.js</a>) 的 HTML 页面。",
					div23: "使用带有附件的要素服务时，交互式构建器不提供可包含视频的对话框，但可以通过在交互式构建器外部编辑数据来实现该功能。在 arcgis.com 地图查看器中，如果将图片字段修改为指向外部视频，并在 URL 尾部添加特殊参数 (#isVideo)，则您的媒体将被视为视频。",
					div24: "请注意，您仍需要两个有效的图片附件，否则将不会使用此点。使用不含图片和缩略图字段的要素服务附件时，无法使用视频。"
				},
				tab3: {
					title: "自定义",
					div1: "构建器提供几个自定义选项，可以通过顶部面板中的\“设置\”按钮进行访问。如果没有找到所需的选项，我们还提供一个可下载版本，您可以在 web 服务器上进行部署，并可增强以符合您的需求。",
					div2: "建议您使用托管的版本，除非:",
					div3: "<li>它不提供您想要的 UI 自定义，例如使用标题背景图像。</li><li>您是开发者，并且希望增强应用程序。</li>",
					div4: "可通过 web 地图或 web 制图应用程序标识符配置可下载版本。主要用例有:",
					div41: "使用托管环境中的交互式构建器来构建地图浏览，并通过 web 制图应用程序标识符来配置模板。将应用通过交互式构建器定义的设置。",
					div42: "在交互式构建器外部构建您的 web 地图，并通过 web 地图标识符配置模板。您需要阅读文档以了解如何配置模板。",
					div43: "请注意，交互式构建器在可下载的版本中提供，但对于 Internet Explorer 10 版本之前的浏览器仍有技术限制。",
					div5: "要下载最新版本的模板并了解其使用方法，请访问 <a href='https://github.com/Esri/map-tour-storytelling-template-js' target='_blank'>GitHub 项目页面</a>。"
				},
				tab4: {
					title: "提示",
					div0: "支持的浏览器",
					div0a: "IE8+ 支持地图浏览查看器。IE9+ 支持交互式构建器。我们已经在所有主要浏览器中对其进行了测试，但如果您遇到了困难，则建议您使用 Chrome。",
					div0b: "如果您遇到任何困难，请与我们联系。此外，使用 CSV 模板来构建地图浏览将最大程度地减少您与构建器界面的交互。",
					div1: "图片",
					div2: "建议使用横向照片，而不要使用纵向照片。纵横比为 4:3 的照片最为合适。可以使用纵向影像，但在像 iPad 这样的小屏幕上，很多照片可能会被说明文字遮挡 (相对于宽幅区域，在长幅区域显示文本会占用更多的空间)。虽然在一个地图浏览中可以使用不同大小、形状和方向的影像，但建议对所有影像使用完全相同的大小和形状。这样，用户就不会在浏览时被不同大小的影像分散注意力。",
					div2a: "建议主要图片的最大图像大小为 1000 像素 (宽) x 750 像素 (高)，缩略图的最大图像大小为 140 像素 (宽) x 93 像素 (高)。",
					div3: "使用 HTML 标签格式化说明文字文本",
					div4: "页眉和图片标题/说明文字可以包含 HTML 标签，以定义格式和链接。例如，此代码将添加黄色链接:",
					div4a: "为浏览命名适当的子标题",
					div4b: "请花点时间为浏览命名一个引人注目的子标题。子标题是吸引人们关注您的浏览并简要介绍浏览内容的良好途径。它也是告知用户该浏览所定位的州或国家的好方法。例如，不要假设用户知道浏览中城市或城镇的位置。还可使用 HTML 标签来设置说明文字的格式，例如包括链接。但说明文字不要过长。在较小的浏览器窗口或 iPad 中，子标题可能并不完全适合，需要进行裁剪。如果您未想出合适的子标题，则将其留空。",
					div5: "支持图层",
					div6: "可添加其他支持的图层为地图浏览提供上下文。除地图浏览点之外，这些图层还可能包含您希望地图显示的其他地理要素，例如研究区域、链接到浏览点的步行或行驶路径等等。地图浏览模板通过在 web 地图中指定的符号系统来显示这些附加的支持图层，但弹出窗口不可用。",
					div7: "保持浏览简洁明了",
					div8: "每次浏览限制为 99 个点。大部分地图浏览肯定明显少于该限制。不要期望用户愿意逐个浏览过多的浏览点。您可能觉得自己的主题很吸引人，但不要以为其他人也这么想!",
					div10: "嵌入模式",
					div11: "如果想通过 iframe 将模板嵌入到其他网站，则在 URL 尾部添加可选参数 \"&embed\" 可移除标题。还可通过配置文件在可下载版本中设置该模式。",
					div12: "避免使用狭窄的 iFrame 宽度，因其可能导致地图浏览切换至相应的小屏幕触控式布局。要尽可能地方便使用，在嵌入地图浏览时，通常建议在所嵌入的浏览旁边提供一个链接，以便用户启动全屏浏览。" 
				},
				tab5: {
					title: "发布",
					div1: "完成操作后，不要忘记通过 ArcGIS Online 中的\“共享\”按钮或应用程序项目页面与用户共享您的地图浏览。",
					div2a: "通过构建器共享浏览",
					div2b: "通过\“共享\”按钮可更新应用程序和 web 地图项目。如果您的浏览数据存储在要素服务项目中，它也会进行更新。如果通过 ArcGIS.com 地图查看器添加了其他图层，则这些图层将不会进行更新。这可能导致浏览不会按预期进行共享。具有所需 (或更多) 权限的项目将不会进行更新。",
					div2c: "通过 ArcGIS Online 共享浏览",
					div2d: "通过 ArcGIS Online 共享应用程序时，系统将在必要时要求您更新以不同方式共享的所有相关资源(web 地图、要素服务和整饰图层)。如果地图浏览处于公共状态，且其中一个资源并没有共享给用户，则用户将被重定向至 ArcGIS Online 登录页面。",
					div3t: "要素服务安全性",
					div3a: "如果使用通过地图浏览构建器创建的托管要素服务，应用程序将为您管理服务安全性，即使公开共享服务，您也是唯一具有编辑权限的人员。",
					div3t2: "将浏览与用户共享之前",
					div3: "请确保在未使用 ArcGIS.com 帐户登录时，浏览也可正常工作。要使用的 URL 不应重定向至登录页面或构建器模式。",
					div4: "最好查看 iPad 上以横向保存的地图浏览的外观，以确保该浏览在这种常用设备上看起来美观。这有助于了解文字说明是否过多地覆盖了图片。还可以使您了解子标题是否合适，以及是否因过长而被裁剪。",
					div5a: "搜索建议",
					div5b: "要帮助用户在搜索 ArcGIS Online 时找到您的地图浏览，我们建议在您的地图浏览应用程序项目页面 (而并非 web 地图的项目页面) 中添加\“故事地图\”标签以及其他标签，例如该浏览所定位的州或省名称、美国以外的国家名称以及诸如\“公共艺术\”、\“游客指南\”或\“历史名胜\”的主题标签。这些标签还可以帮助我们在 Esri 中找到有趣的新浏览示例，我们可以在图库中展示这些示例，并在社交媒体上进行宣传。同时建议您在应用程序项目页面中上传美观的缩略图，例如浏览的小型屏幕截图或浏览图片之一。将地图浏览添加到 ArcGIS Online 图库后，该图片将自动应用。"
				}
			},
			share: {
				firstSaveTitle: "成功保存浏览内容",
				firstSaveHeader: "您的浏览现已保存在 ArcGIS Online 中。请阅读以下常见问题的解答。",
				firstSaveA1: "如果您不熟悉 ArcGIS Online，或需要访问创作界面的快捷方式，则可以保存以下链接: %LINK1%",
				firstSaveA1bis: "还可在您的 <a href='%LINK2%' target='_blank'>ArcGIS Online 内容文件夹</a>中找到该浏览。",
				firstSaveQ2: "我的浏览是否已共享?",
				firstSaveA2: "您的浏览当前并未共享。要将其共享，请使用\“共享\”按钮。",
				shareTitle: "共享您的浏览",
				sharePrivateHeader: "您的浏览尚未共享，是否要共享?",
				sharePrivateBtn1: "公开共享",
				sharePrivateBtn2: "与我的组织共享",
				sharePrivateProgress: "正在进行共享...",
				sharePrivateErr: "共享失败，请重试或",
				sharePrivateOk: "共享更新成功，正在加载...",
				sharePreviewAsUser: "预览",
				shareHeader1: "您的浏览<strong>可公开访问</strong>。",
				shareHeader2: "组织成员可以访问您的浏览(需要登录)。",
				shareLinkHeader: "与受众共享浏览",
				shareLinkOpen: "打开",
				shareQ1Opt1: "如何将浏览设置为私有?",
				shareQ1Opt2: "如何将浏览设置为私有或将其公开共享？",
				shareA1: "请使用<a href='%LINK1%' target='_blank'>应用程序项目页面</a>上的 %SHAREIMG%。如果还想要取消共享 web 地图，请使用 <a href='%LINK2%' target='_blank'>web 地图项目页面</a>。",
				shareA1bis: "如果还想要取消共享要素服务，请使用<a href='%LINK1%' target='_blank'>要素服务项目页面</a>。",
				shareQ2: "如何在稍后编辑浏览？",
				shareQ2bis: "如何返回制作界面？",
				shareA2div1: "保存并重新使用以下链接 %LINK1%，或使用<a href='%LINK2%' target='_blank'>应用程序项目页面</a>。",
				shareA2div2: "作为应用程序所有者，当您登录到 ArcGIS.com 后，可使用应用程序中的按钮来打开交互式构建器:",				
				shareQ3: "数据存储位置在哪?",
				shareA3: "浏览配置存储在<a href='%LINK1%' target='_blank'>此 web 地图项目</a>和<a href='%LINK2%' target='_blank'>此 web 应用程序项目</a>中。Flickr、Picasa 和 Facebook 图像以及 YouTube 视频仍可分别在其各自网站引用，并且不会复制到 ArcGIS Online。",
				shareWarning: "已禁止共享 %WITH%，因为您不是 <a href='%LINK%' target='_blank'>webmap</a> 的所有者。",
				shareWarningWith1: "公开",
				shareWarningWith2: "公开并在组织内共享"
			},
			locator: {
				error: "试_Location not available________验"
			}
        }
    })
);
