﻿define(
	 ({
		viewer: {
			loading: {
				step1: "Đ_LOADING STORY_____ớ",
				step2: "ĐANG TẢI DỮ LIỆU",
				step3: "ĐANG KHỞI TẠO",
				fail: "Xin lỗi, tải chức năng Trượt nhanh thất bại",
				loadBuilder: "ĐANG CHUYỂN SANG CHẾ ĐỘ THIẾT LẬP",
				redirectSignIn: "ĐANG CHUYỂN HƯỚNG ĐẾN TRANG ĐĂNG NHẬP",
				redirectSignIn2: "(bạn sẽ được chuyển hướng ở đây sau khi đăng nhập)",
				failButton: "Thử lại"
			},
			errors: {
				boxTitle: "Đã xảy ra lỗi",
				portalSelf: "Lỗi nghiêm trọng: Không thể tải cấu hình cổng thông tin",
				invalidConfig: "Lỗi nghiêm trọng: Cấu hình không hợp lệ",
				invalidConfigNoWebmap: "Lỗi nghiêm trọng: Cấu hình không hợp lệ (không xác định bản đồ web)",
				createMap: "Không thể tạo bản đồ",
				invalidApp: "Đ_Fatal error: The story cannot be loaded_____________ớ",
				initMobile: "Chào mừng bạn đến với ứng dụng web trượt nhanh. Ứng dụng này không được cấu hình. Bộ thiết lập tương tác không được hỗ trợ trên các thiết bị di động.",
				initMobile2: "Đ_The Swipe builder is not supported at this display size__________________ớ.",
				noBuilderIE8: "Bộ thiết lập tương tác chức năng trượt nhanh không được hỗ trợ trên trình duyệt Internet Explorer trước phiên bản 9.",
				noLayerView: "Chào mừng bạn đến ứng dụng web Trượt nhanh.<br />Ứng dụng này vẫn chưa được cấu hình.",
				appSave: "Đ_Error saving the web story_________ớ",
				mapSave: "Lỗi khi lưu bản đồ web",
				notAuthorized: "Đ_You are not authorized to access this story______________ớ",
				conflictingProjectionsTitle: "Xung đột Phép chiếu",
				conflictingProjections: "Chức năng Trượt nhanh không hỗ trợ sử dụng hai bản đồ web với các phép chiếu khác nhau. Vui lòng vào phần thiết lập và sử dụng một bản đồ web có sử dụng cùng một phép chiếu với bản đồ web đầu tiên.",
				cpButton: "Đóng",
				unspecifiedConfigOwner: "Đ_Authorized owner hasn't been configured_____________ớ.",
				invalidConfigOwner: "Đ_Story owner is not authorized__________ớ."
			},
			mobileView: {
				hideIntro: "ẨN GIỚI THIỆU",
				navLeft: "Chú giải",
				navMap: "Bản đồ",
				navRight: "Dữ liệu"
			},
			desktopView: {
				storymapsText: "Story map",
				builderButton: "Chuyển sang chế độ thiết lập",
				facebookTooltip: "Chia sẻ trên Facebook",
				twitterTooltip: "Chia sẻ trên Twitter",
				bitlyTooltip: "Tải liên kết ngắn"
			}
		},
		builder: {
			builder: {
				panelHeader: "Đ_STORY CONFIGURATION_______ớ",
				buttonSave: "LƯU",
				buttonHelp: "Trợ giúp",
				buttonShare: "Chia sẻ",
				buttonDiscard: "HỦY",
				buttonSettings: "Thiết lập",
				buttonView: "Chế độ xem",
				buttonItem: "Mở mục Ứng dụng Web",
				noPendingChange: "Không có thay đổi chờ xử lý",
				unSavedChangeSingular: "1 thay đổi chưa được lưu",
				unSavedChangePlural: "thay đổi chưa được lưu",
				popoverDiscard: "Bạn có chắc chắn muốn hủy mọi thay đổi chưa được lưu không?",
				yes: "Có",
				no: "Không",
				popoverOpenViewExplain: "Bằng cách mở trình xem, bạn sẽ mất mọi thay đổi chưa được lưu",
				popoverOpenViewOk: "Ok",
				popoverOpenViewCancel: "Hủy",
				popoverSaveWhenDone: "Đừng quên lưu khi bạn hoàn tất",
				closeWithPendingChange: "Bạn có chắc chắn muốn xác nhận hành động này không? Các thay đổi của bạn sẽ bị mất.",
				gotIt: "Ok",
				savingApplication: "Đ_Saving story_____ớ",
				saveSuccess: "Đ_Story saved successfully________ớ",
				saveError: "Lưu thất bại, vui lòng thử lại",
				saveError2: "Lưu thất bại do thẻ html trong tên hoặc mô tả không hợp lệ",
				saveError3: "Không được để trống tiêu đề",
				signIn: "Vui lòng đăng nhập bằng một tài khoản vào",
				signInTwo: "Đ_to save the story______ớ."
			},
			header:{
				editMe: "Chỉnh sửa tôi!",
				templateTitle: "Thiết lập tiêu đề mẫu",
				templateSubtitle: "Thiết lập phụ đề mẫu"
			},
			settings: {
				settingsHeader: "Đ_Story settings_____ớ",
				modalCancel: "Hủy",
				modalApply: "Áp dụng"
			},
			settingsColors: {
				settingsTabColor: "Chủ đề",
				settingsColorExplain: "Chọn chủ đề ứng dụng hoặc xác định màu sắc riêng của bạn.",
				settingsLabelColor: "Màu nền đầu mục và bảng điều khiển bên"
			},
			settingsHeader: {
				settingsTabLogo: "Đầu mục",
				settingsLogoExplain: "Tùy chỉnh logo đầu mục (tối đa là 250 x 50px).",
				settingsLogoEsri: "Logo Esri",
				settingsLogoNone: "Không có logo",
				settingsLogoCustom: "Logo tùy chỉnh",
				settingsLogoCustomPlaceholder: "URL Hình ảnh",
				settingsLogoCustomTargetPlaceholder: "Bấm vào liên kết",
				settingsLogoSocialExplain: "Tùy chỉnh liên kết trên cùng bên phải đầu mục.",
				settingsLogoSocialText: "Văn bản",
				settingsLogoSocialLink: "Liên kết",
				settingsLogoSocialDisabled: "Người quản trị đã vô hiệu hóa tính năng này"
			},
			settingsExtent: {
				settingsTabExtent: "Phạm vi",
				settingsExtentExplain: "Thiết lập phạm vi ban đầu thông qua bản đồ tương tác dưới đây.",
				settingsExtentExplainBottom: "Phạm vi bạn xác định sẽ thay đổi phạm vi bản đồ web ban đầu của bạn. Lưu ý rằng nếu bạn đang thực hiện một loạt trượt nhanh, phạm vi đó sẽ không được sử dụng.",
				settingsExtentDateLineError: "Phạm vi không thể vượt qua kinh tuyến 180ï¿½",
				settingsExtentDateLineError2: "Lỗi khi tính toán phạm vi",
				settingsExtentDrawBtn: "Vẽ một phạm vi mới",
				settingsExtentModifyBtn: "Chỉnh sửa phạm vi hiện tại",
				settingsExtentApplyBtn: "Áp dụng trên bản đồ chính",
				settingsExtentUseMainMap: "Sử dụng phạm vi bản đồ chính"
			}
        },
		swipe: {
			mobileData: {
				noData: "Không có dữ liệu để hiển thị!",
				noDataExplain: "Chạm vào bản đồ để chọn một đối tượng và trở lại đây",
				noDataMap: "Không có dữ liệu cho bản đồ này",
				noPopup: "Không tìm thấy cửa sổ pop-up cho tính năng này"
			},
			mobileLegend: {
				noLegend: "Không có chú giải để hiển thị."
			},
			swipeSidePanel: {
				editTooltip: "Đặt mô tả bảng điều khiển bên",
				editMe: "Chỉnh sửa tôi!",
				legendTitle: "Chú giải"
			},
			infoWindow: {
				noFeature: "Không có dữ liệu để hiển thị",
				noFeatureExplain: "Chạm vào bản đồ để chọn một đối tượng"
			},
			settingsLayout: {
				settingsTabLayout: "Kiểu Trượt nhanh",
				settingsLayoutExplain: "Chọn một kiểu cho công cụ trượt nhanh.",
				settingsLayoutSwipe: "Thanh dọc",
				settingsLayoutSpyGlass: "Kính thiên văn nhỏ",
				settingsLayoutSelected: "Bố cục được chọn",
				settingsLayoutSelect: "Chọn bố cục này",
				settingsSaveConfirm: "Đ_Some of your changes require that you save and reload the story____________________ớ"
			},
			settingsDataModel: {
				settingsTabDataModel: "Loại Trượt nhanh",
				settingsDataModelExplainSwipe: "Bạn muốn người dùng trượt nhanh gì?",
				settingsDataModelExplainSwipe2: "",
				settingsDataModelExplainSpyGlass: "Chọn lớp hoặc bản đồ web xuất hiện trong kính thiên văn nhỏ.",
				settingsDataModelOneMap: "Một lớp trong bản đồ web",
				settingsDataModel1Explain: "Chọn lớp bạn muốn trượt nhanh",
				settingsDataModel1Warning: "Nếu lớp bị ẩn bởi các lớp trên, trượt nhanh sẽ không có hiệu lực.",
				settingsDataModel1SpyGlassExplain: "Chọn lớp xuất hiện trong phạm vi kính thiên văn nhỏ.",
				settingsDataModelTwoMaps: "Hai bản đồ web",
				settingsDataModelLayerIds: "Các ID Lớp bản đồ Web",
				settingsDataModelSelected: "Loại đã chọn",
				settingsDataModelWebmapSwipeId1: "ID bản đồ Web phải",
				settingsDataModelWebmapSwipeId2: "ID bản đồ Web trái",
				settingsDataModelWebmapGlassId1: "ID bản đồ Web chính",
				settingsDataModelWebmapGlassId2: "ID bản đồ Web kính thiên văn nhỏ",
				settingsDataModelSelect: "Chọn loại này",
				settingsDataModel2Explain: "Trượt nhanh bằng một bản đồ web khác.",
				settingsDataModel2SpyGlassExplain: "Hiển thị một bản đồ web khác.",
				settingsDataModel2HelpTitle: "Làm cách nào để tìm một ID bản đồ web?",
				settingsDataModel2HelpContent: "Sao chép và dán chữ số sau dấu '=' trong URL bản đồ web",
				switchMaps: "Chuyển đổi các bản đồ",
				browseWebMaps: "Duyệt các bản đồ web"
			},
			settingsLegend: {
				settingsTabLegend: "Bố cục Ứng dụng",
				settingsLegendExplain: "Đ_Select the layout settings_________ớ.",
				settingsLegendEnable: "Bật Chú giải",
				settingsDescriptionEnable: "Bật Mô tả",
				settingsBookmarksEnable: "Bật chuỗi Trượt nhanh",
				settingsPopupDisable: "Bật cửa sổ pop-up",
				settingsLocationSearchEnable: "Bật tìm kiếm định vị",
				settingsGeolocatorEnable: "Bật bộ định vị địa lý",
				settingsLegendHelpContent: "Để lọc các nội dung chú giải, sử dụng mục lục trình xem bản đồ web ArcGIS.com (Ẩn trong Chú giải)",
				settingsSeriesHelpContent: "Chuỗi trượt nhanh là một lựa chọn điều hướng theo thẻ sẽ đưa trình xem đến một phạm vi cụ thể và hiển thị tiêu đề và văn bản mô tả trong bảng điều khiển bên. Trong thời gian kích hoạt ban đầu, các đánh dấu từ (các) bản đồ web sẽ được nhập vào và sử dụng để tự động điền trước vào thanh chuỗi. Việc vô hiệu hóa tùy chọn chuỗi sẽ làm tắt thanh chuỗi, nhưng cấu hình chuỗi được lưu trữ để sử dụng trong tương lai.",
				settingsSeriesHelpContent2: "Chuỗi Trượt nhanh cho phép bạn tạo và sửa một loạt các địa điểm cùng với tiêu đề và văn bản. Nếu bản đồ web của bạn có đánh dấu, chúng sẽ được hiển thị. Bạn có thể tắt thanh chuỗi, nhưng cấu hình chuỗi được lưu giữ để sử dụng trong tương lai.",
				settingsSeriesHelpLink: "Xem ví dụ về một ứng dụng có chuỗi trượt nhanh tại đây",
				preview: "Xem trước giao diện người dùng",
				settingsLocateButtonExplain: "Chức năng này được hỗ trợ trên hầu hết các thiết bị di động và trình duyệt máy tính để bàn (bao gồm cả Internet Explorer 9 +).",
				settingsLocateButton: "Bật nút 'Định vị' trên các trình duyệt hỗ trợ",
				settingsAddressSearch: "Bật công cụ tìm kiếm địa chỉ"
			},
			settingsSwipePopup: {
				settingsSwipePopup: "Cửa sổ pop-up",
				settingsSwipePopupExplain: "Tùy chỉnh hình dạng tiêu đề cửa sổ pop-up để giúp người dùng liên kết cửa sổ pop-up với lớp bản đồ.",
				settingsSwipePopupSwipe1: "Bản đồ trái",
				settingsSwipePopupSwipe2: "Bản đồ phải",
				settingsSwipePopupGlass1: "Bản đồ chính",
				settingsSwipePopupGlass2: "Bản đồ Kính thiên văn nhỏ",
				settingsSwipePopupTitle: "Tiêu đề Đầu mục",
				settingsSwipePopupColor: "Màu sắc Đầu mục"
			},
			initPopup: {
				initHeader: "Chào mừng bạn đến với Bộ thiết lập Trượt nhanh/Kính thiên văn nhỏ",
				modalNext: "Tiếp theo",
				modalPrev: "Trước",
				modalApply: "Mở ứng dụng"
			},
			seriesPanel: {
				title: "Tiêu đề",
				descr: "Mô tả",
				discard: "Hủy Đánh dấu",
				saveExtent: "Thiết lập Phạm vi Đánh dấu",
				discardDisabled: "Bạn không thể xóa đánh dấu. Chuỗi Trượt nhanh có thể bị tắt trong Thiết lập."
			},
			helpPopup: {
				title: "Trợ giúp",
				close: "Đóng",
				tab1: {
					div1: "Mẫu Trượt nhanh/Kính thiên văn nhỏ được thiết kế để so sánh hai bản đồ web riêng biệt hoặc hai lớp bản đồ web duy nhất trong một ứng dụng web dễ sử dụng và đầy hấp dẫn có thể được sử dụng trong bất kỳ trình duyệt web nào trên bất kỳ thiết bị nào, bao gồm cả điện thoại thông minh và máy tính bảng.",
					div2: "Để biết thêm thông tin về mẫu Trượt nhanh/Kính thiên văn nhỏ, bao gồm các mẫu do người dùng tạo, <a href='http://storymaps.arcgis.com/en/app-list/swipe/' target='_blank'> truy cập trang web Story Maps</a>. Bạn cũng có thể theo dõi chúng tôi trên Twitter tại <a href='https://twitter.com/EsriStoryMaps' target='_blank'>@EsriStoryMaps</a>.",
					div3: "Chúng tôi muốn nhận phản hồi từ bạn! Cho dù bạn có một câu hỏi, muốn yêu cầu một tính năng mới hoặc cho rằng bạn đã tìm thấy một lỗi, vui lòng truy cập <a href='http://links.esri.com/storymaps/forum' target='_blank'>Diễn đàn Người dùng Story Maps</a>."
				}
			},
			share: {
				firstSaveTitle: "Đ_Story successfully saved________ớ",
				firstSaveHeader: "Đ_Your story is now saved in ArcGIS Online. Please read the following answers to frequent questions______________________________ớ.",
				firstSaveA1: "Nếu bạn không quen với ArcGIS Online hoặc muốn có một phím tắt để truy cập vào giao diện tác nghiệp, bạn có thể lưu liên kết sau đây:%LINK1%",
				firstSaveA1bis: "Đ_The story can also be found in your <a href='%LINK2%' target='_blank'>ArcGIS Online content folder</a>________________________________ớ.",
				firstSaveQ2: "Đ_Is my story shared_______ớ?",
				firstSaveA2: "Đ_Currently your story is not shared. To share it, use the SHARE button______________________ớ.",
				shareTitle: "Đ_Share your story______ớ",
				sharePrivateHeader: "Đ_Your story is not shared, would you like to share it_________________ớ?",
				sharePrivateBtn1: "Chia sẻ công khai",
				sharePrivateBtn2: "Chia sẻ với Tổ chức của tôi",
				sharePrivateProgress: "Đang tiến hành chia sẻ...",
				sharePrivateErr: "Chia sẻ thất bại, thử lại hoặc",
				sharePrivateOk: "Chia sẽ cập nhật thành công, đang tải...",
				shareStatus1: "Đ_Story is not saved______ớ",
				shareStatus2: "Đ_Story is shared publicly________ớ",
				shareStatus3: "Đ_Story is shared within the organization_____________ớ",
				shareStatus4: "Đ_Story is not shared_______ớ",
				sharePreviewAsUser: "Xem trước",
				shareHeader1: "Đ_Your story is <strong>publicly accessible</strong>________________ớ.",
				shareHeader2: "Đ_Your story is accessible by your organization members (login is required)_______________________ớ.",
				shareLinkHeader: "Đ_Share the story with your audience___________ớ",
				shareLinkOpen: "MỞ",
				learnMore: "Tìm hiểu thêm",
				shareQ1Opt1: "Đ_How do I keep the story private___________ớ?",
				shareQ1Opt2: "Đ_How do I keep the story private or share it publicly_________________ớ?",
				shareA1: "Sử dụng %SHAREIMG% trên <a href='%LINK1%' target='_blank'>trang mục ứng dụng</a>. Nếu bạn cũng muốn hủy chia sẻ bản đồ web, sử dụng <a href='%LINK2%' target='_blank'>trang mục bản đồ web</a>.",
				shareA1bis: "Nếu bạn cũng muốn hủy chia sẻ Dịch vụ Đối tượng, sử dụng <a href='%LINK1%' target='_blank'>trang mục Dịch vụ Đối tượng</a>.",
				shareQ2: "Đ_How do I edit the story later__________ớ?",
				shareQ2bis: "Làm cách nào để quay lại giao diện tác nghiệp?",
				shareA2div1: "Đ_Save and reuse the following link %LINK1% or use <a href='%LINK2%' target='_blank'>the story item page</a>_________________________________ớ.",
				shareA2div2: "Đ_As the owner of the story, when you are signed in on ArcGIS.com, the story includes a button to open the interactive builder_______________________________________ớ:",
				shareQ3: "Dữ liệu được lưu trữ ở đâu?",
				shareA3: "Đ_The story configuration is stored in this web application item</a>_____________________ớ.",
				shareWarning: "Chia sẻ %WITH% đã bị vô hiệu hóa vì bạn không phải là chủ sở hữu <a href='%LINK%' target='_blank'>bản đồ web</a>.",
 				shareWarningWith1: "công khai",
 				shareWarningWith2: "công khai và với Tổ chức"
			},
			directCreation: {
				header: "Chào mừng bạn đến với Bộ thiết lập Trượt nhanh/Kính thiên văn nhỏ",
				mapPickHeader: "Để bắt đầu, vui lòng nhập vào một id bản đồ web hợp lệ hoặc sử dụng nút tìm kiếm để duyệt bản đồ web.",
				launchBuilder: "Khởi chạy Bộ thiết lập",
				chooseWebmapLbl: "Chọn bản đồ web...",
				explain2: "Để tạo một story map Trượt nhanh hoặc Kính thiên văn nhỏ, sử dụng nút dưới đây để chọn bản đồ web ArcGIS Online hiện tại mà bạn muốn sử dụng. Ngoài ra, bạn có thể dán các ID của bản đồ web vào trường bên dưới.",
				explain3: "Nếu bạn muốn sử dụng hai bản đồ web trong story map của bạn, bạn sẽ được nhắc nhở cho bản đồ web thứ hai sau khi bạn chọn tùy chọn đó.",
				webmapPlaceholder: "Nhập id bản đồ web..."
			}
		},
		configure: {
			mapdlg:{
				items:{
					organizationLabel: "Tổ chức của tôi",
					onlineLabel: "ArcGIS Online",
					contentLabel: "Nội dung của tôi",
					favoritesLabel: "Yêu thích của tôi"
				},
				title: "Chọn Bản đồ Web",
				searchTitle: "Tìm kiếm",
				ok: "Ok",
				cancel: "Hủy",
				placeholder: "Nhập cụm từ tìm kiếm"
			}
		}
    })
);
