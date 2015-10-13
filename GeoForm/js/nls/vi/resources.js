﻿define(
   ({
    map: {
      error: "Không thể tạo bản đồ"
    },
    onlineStatus: {
      offline: "Bạn hiện đang làm việc ngoại tuyến. Biểu mẫu đã đệ trình sẽ được lưu cục bộ cho đến khi có kết nối tới máy chủ.",
      reconnecting: "Đang kết nối lại&hellip;",
      pending: "${total} bản chỉnh sửa đang chờ xử lý sẽ được gửi khi kết nối mạng được thiết lập lại."
    },
    configure: {
      mapdlg: {
        items: {
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
      },
      groupdlg: {
        items: {
          organizationLabel: "Tổ chức của tôi",
          onlineLabel: "ArcGIS Online",
          contentLabel: "Nội dung của tôi",
          favoritesLabel: "Yêu thích của tôi"
        },
        title: "Chọn Nhóm",
        searchTitle: "Tìm kiếm",
        ok: "Ok",
        cancel: "Hủy",
        placeholder: "Nhập cụm từ tìm kiếm"
      },
      sharedlg: {
        items: {},
        mailtoLinkDescription: "Dưới đây là liên kết đến GeoForm"
      }
    },
    user: {
      all: "Tất cả",
      mgrs: "MGRS",
      usng: "USNG",
      utm: "UTM",
      utm_northing: "Hướng bắc",
      utm_easting: "Hướng đông",
      utm_zone_number: "Số khu vực",
      selectLayerTabText: "${formSection} Chọn Biểu mẫu",
      geoFormGeneralTabText: "${formSection} Nhập Thông tin",
      locationInformationText: "${formSection} Chọn Địa điểm",
      submitInformationText: "${formSection} Hoàn tất Biểu mẫu",
      submitInstructions: "Thêm thông tin này vào bản đồ.",
      myLocationText: "Vị trí hiện tại",
      locationDescriptionForMoreThanOneOption: "Chỉ định vị trí cho mục nhập này bằng cách bấm/chạm vào bản đồ hoặc bằng cách sử dụng một trong các tùy chọn sau.",
      locationDescriptionForOneOption: "Chỉ định vị trí cho mục nhập này bằng cách bấm/chạm vào bản đồ hoặc bằng cách sử dụng tùy chọn sau.",
      locationDescriptionForNoOption: "Chỉ định vị trí cho mục nhập này bằng cách bấm/chạm vào bản đồ.",
      addressText: "Tìm kiếm",
      geographic: "Vĩ độ/Kinh độ",
      locationTabText: "Vị trí",
      locationPopupTitle: "Vị trí",
      submitButtonText: "Gửi Mục nhập",
      submitButtonTextLoading: "Đang gửi&hellip;",
      formValidationMessageAlertText: "Các trường sau là bắt buộc:",
      selectLocation: "Vui lòng chọn một vị trí để gửi.",
      emptylatitudeAlertMessage: "Vui lòng nhập tọa độ ${openLink}vĩ độ${closeLink}.",
      emptylongitudeAlertMessage: "Vui lòng nhập tọa độ ${openLink}kinh độ${closeLink}.",
      shareUserTitleMessage: "Cảm ơn sự đóng góp của bạn!",
      entrySubmitted: "Mục nhập của bạn đã được gửi lên bản đồ.",
      shareThisForm: "Chia sẻ biểu mẫu này",
      shareUserTextMessage: "Thông báo cho người khác đóng góp bằng cách sử dụng các tùy chọn sau.",
      addAttachmentFailedMessage: "Không thể thêm tệp đính kèm vào lớp",
      addFeatureFailedMessage: "Không thể thêm đối tượng vào lớp",
      noLayerConfiguredMessage: "Đã xảy ra lỗi khi tải hoặc tìm lớp đối tượng có thể chỉnh sửa. Để hiển thị biểu mẫu và bắt đầu thu thập nội dung gửi, thêm Lớp Đối tượng có thể chỉnh sửa vào Bản đồ web.",
      placeholderLatitude: "Vĩ độ (Y)",
      placeholderLongitude: "Kinh độ (X)",
      latitude: "Vĩ độ",
      longitude: "Kinh độ",
      findMyLocation: "Định vị tôi",
      finding: "Đang định vị&hellip;",
      backToTop: "Quay lại đầu trang",
      addressSearchText: "Thông tin đã đệ trình của bạn sẽ xuất hiện ở đây. Bạn có thể kéo ghim để chỉnh sửa vị trí.",
      shareModalFormText: "Liên kết Biểu mẫu",
      close: "Đóng",
      locationNotFound: "Không thể tìm thấy vị trí.",
      setLocation: "Thiết lập Vị trí",
      find: "Tìm địa chỉ hoặc địa điểm",
      attachment: "Phần đính kèm",
      toggleDropdown: "Chuyển đổi Danh sách xổ xuống",
      invalidString: "Vui lòng nhập một giá trị hợp lệ.",
      invalidSmallNumber: "Vui lòng nhập một giá trị ${openStrong}số nguyên${closeStrong} hợp lệ trong khoảng từ -32768 đến 32767.",
      invalidNumber: "Vui lòng nhập giá trị ${openStrong}số nguyên${closeStrong} hợp lệ trong khoảng từ -2147483648 đến 2147483647.",
      invalidFloat: "Vui lòng nhập giá trị ${openStrong}điểm dạng float${closeStrong} hợp lệ.",
      invalidDouble: "Vui lòng nhập giá trị ${openStrong}double${closeStrong} hợp lệ.",
      invalidLatLong: "Vui lòng nhập tọa độ vĩ độ và kinh độ hợp lệ.",
      invalidUTM: "Vui lòng nhập tọa độ UTM hợp lệ.",
      invalidUSNG: "Vui lòng nhập tọa độ USNG hợp lệ.",
      invalidMGRS: "Vui lòng nhập tọa độ MGRS hợp lệ.",
      geoformTitleText: "GeoForm",
      domainDefaultText: "Chọn&hellip;",
      applyEditsFailedMessage: "Rất tiếc, mục nhập của bạn không thể gửi được. Vui lòng thử lại.",
      requiredFields: "Yêu cầu trường sau đây. Vui lòng cung cấp một giá trị nhập hợp lệ.",
      requiredField: "(bắt buộc)",
      error: "Lỗi",
      textRangeHintMessage: "${openStrong}Gợi ý:${closeStrong} Giá trị tối thiểu ${minValue} và Giá trị tối đa ${maxValue}",
      dateRangeHintMessage: "${openStrong}Gợi ý:${closeStrong} Ngày tối thiểu ${minValue} và Ngày tối đa ${maxValue}",
      remainingCharactersHintMessage: "Còn ${value} ký tự",
      mapFullScreen: "Toàn Màn hình",
      mapRestore: "Khôi phục",
      filterSelectEmptyText: "Chọn",
      invalidLayerMessage: "Lớp biểu mẫu không tồn tại. Vui lòng cấu hình ứng dụng và thiết lập lớp.",
      selectedLayerText: "Tất cả",
      fileUploadStatus: "Trạng thái Tải Tệp Lên",
      uploadingBadge: "&nbsp;Đang tải lên&hellip;",
      successBadge: "&nbsp;Đã tải lên",
      retryBadge: "Thử lại",
      errorBadge: "Lỗi khi tải lên&nbsp;&nbsp;&nbsp;",
      fileTooLargeError: "Tệp quá lớn để đính kèm",
      exceededFileCountError: "Vượt quá số lượng tệp đính kèm tối đa được phép",
      selectFileTitle: "Chọn một tệp",
      btnSelectFileText: "Chọn Tệp",
      btnViewSubmissions: "Xem Các đệ trình"
    },
    builder: {
      gettingStarted: "Bắt đầu",
      dateSettings: "Thiết lập Ngày",
      hiddenDateField: "Ẩn trường ngày này",
      preventPastDates: "Chặn ngày quá khứ",
      preventFutureDates: "Chặn ngày tương lai",
      useCurrentDate: "Thiết lập trường này bằng ngày và giờ hiện tại",
      configure: "Cấu hình",
      configureField: "Cấu hình Trường \'${fieldName}\'",
      invalidUser: "Rất tiếc, bạn không có quyền xem mục này",
      invalidWebmapSelectionAlert: "Bản đồ web đã chọn không chứa lớp hợp lệ để sử dụng. Vui lòng thêm Lớp Đối tượng có thể chỉnh sửa vào trang web của bạn để tiếp tục.",
      invalidWebmapSelectionAlert2: "Để biết thêm thông tin, vui lòng tham khảo ${openLink}Dịch vụ Đối tượng là gì?${closeLink}",
      selectFieldsText: "Chọn các Trường Biểu mẫu",
      selectThemeText: "Chọn Chủ đề Biểu mẫu",
      setViewerText: "Cấu hình Trình xem",
      introText: "Bắt đầu",
      webmapText: "Bản đồ web",
      layerText: "Lớp",
      detailsText: "Chi tiết",
      fieldsText: "Trường",
      styleText: "Kiểu",
      viewerText: "Người xem",
      optionText: "Tùy chọn",
      previewText: "Xem trước",
      publishText: "Xuất bản",
      optionsApplicationText: "Tùy chọn",
      titleText: "Bộ thiết lập",
      descriptionText: "GeoForm là một mẫu có thể cấu hình để chỉnh sửa dữ liệu trên biểu mẫu của ${link1}Dịch vụ Đối tượng${closeLink}. Ứng dụng này cho phép người dùng nhập dữ liệu thông qua một biểu mẫu thay vì cửa sổ pop-up của bản đồ khi tận dụng sức mạnh của ${link2}Bản đồ Web${closeLink} và Dịch vụ Đối tượng có thể chỉnh sửa. Sử dụng các bước sau để tùy chỉnh và triển khai GeoForm của bạn.",
      btnPreviousText: "Trước",
      btnNextText: "Tiếp theo",
      webmapTabTitleText: "Chọn một Bản đồ web",
      viewWebmap: "Xem bản đồ web",
      webmapDetailsText: "Bản đồ web được chọn là ${webMapTitleLink}${webMapTitle}${closeLink}. Để chọn một bản đồ web khác, vui lòng bấm vào nút 'Chọn Bản đồ web'",
      btnSelectWebmapText: "Chọn Bản đồ web",
      btnSelectWebmapTextLoading: "Đang tải&hellip;",
      layerTabTitleText: "Chọn (các) Lớp có thể chỉnh sửa được",
      selectLayerLabelText: "Lớp",
      selectLayerDefaultOptionText: "Chọn Lớp",
      enableBasemapToggle: "Hiện Chuyển đổi Bản đồ nền",
      enableBasemapToggleDescription: "Bạn có thể cấu hình GeoForm để Hiện/Ẩn Chuyển đổi Bản đồ nền",
      defaultBasemap: "Chuyển đổi bản đồ nền",
      secondaryBasemap: "Bản đồ nền mặc định",
      detailsTabTitleText: "Chi tiết Biểu mẫu",
      detailTitleLabelText: "Tiêu đề",
      detailLogoLabelText: "Hình ảnh Logo",
      descriptionLabelText: "Chi tiết và Hướng dẫn về Biểu mẫu",
      fieldDescriptionLabelText: "Văn bản Trợ giúp (tùy chọn)",
      fieldDescriptionHelpText: "Vui lòng cung cấp một mô tả ngắn gọn hoặc các hướng dẫn cho trường này.",
      fieldHintHelpText: "Văn bản giữ chỗ cho trường.",
      fieldTabFieldHeaderText: "Trường",
      fieldTabLabelHeaderText: "Nhãn",
      fieldTabDisplayTypeHeaderText: "Hiển thị là",
      fieldTabOrderColumnText: "Thứ tự",
      fieldTabVisibleColumnText: "Kích hoạt",
      displayFieldText: "Hiển thị Trường",
      selectMenuOption: "Chọn Menu",
      selectRadioOption: "Nút chọn",
      selectTextOption: "Văn bản",
      selectDateOption: "Trình chọn Ngày",
      selectRangeOption: "Touch-Spinner",
      selectCheckboxOption: "Ô đánh dấu",
      selectMailOption: "Email",
      selectUrlOption: "URL",
      selectTextAreaOption: "Vùng Văn bản",
      previewApplicationText: "Xem trước ứng dụng",
      saveApplicationText: "Lưu ứng dụng",
      saveText: "Lưu",
      toggleNavigationText: "Chuyển đổi điều hướng",
      formPlaceholderText: "Biểu mẫu của tôi",
      shareBuilderInProgressTitleMessage: "Xuất bản GeoForm",
      shareBuilderProgressBarMessage: "Vui lòng đợi&hellip;",
      shareBuilderTitleMessage: "Thành công! Đã lưu mục",
      shareBuilderTextMessage: "Bạn có thể bắt đầu thu thập thông tin bằng cách chia sẻ với những người khác",
      shareModalFormText: "Liên kết Biểu mẫu",
      shareBuilderSuccess: "GeoForm của bạn đã được cập nhật & xuất bản!",
      geoformTitleText: "Biểu mẫu Geo",
      layerTabText: "GeoForm sẽ được xây dựng từ (các) lớp này. Lớp này phải là một dịch vụ đối tượng hỗ trợ cho việc chỉnh sửa cùng với quyền chia sẻ phù hợp với khán giả của bạn. Nếu chọn tất cả các lớp, mẫu sẽ cho phép người dùng chọn lớp mẫu để gửi.",
      detailsTabText: "Sử dụng các hộp Chi tiết Mẫu bên dưới để tùy chỉnh Tiêu đề, thêm logo tùy chỉnh và cung cấp mô tả ngắn cho đối tượng GeoForm của bạn. Trong mô tả bạn có thể thêm liên kết tới các tài nguyên khác, thông tin liên hệ và thậm chí hướng đối tượng của bạn đến ứng dụng lập bản đồ web có tất cả dữ liệu đã thu thập bằng GeoForm.",
      fieldsTabText: "Tại đây, bạn có thể chọn những trường nào sẽ hiển thị cho người xem GeoForm của mình, chỉnh sửa Nhãn mà họ sẽ nhìn thấy và thêm một Mô tả ngắn để giúp nhập dữ liệu.",
      styleTabText: "Tạo kiểu cho GeoForm của bạn bằng cách sử dụng các chủ đề dưới đây dựa trên tùy chọn của bạn.",
      viewerTabText: "Thiết lập các tùy chọn để xem nội dung gửi từ GeoForm.",
      publishTabText: "Nếu bạn kết thúc tùy chỉnh GeoForm của bạn, hãy lưu ứng dụng và bắt đầu chia sẻ với người xem của bạn. Bạn luôn có thể quay lại bộ thiết lập này và tiếp tục tùy chỉnh dựa trên ý kiến phản hồi.",
      headerSizeLabel: "Kích thước Đầu trang",
      smallHeader: "Sử dụng Đầu trang Nhỏ",
      bigHeader: "Sử dụng Đầu trang Lớn",
      pushpinText: "Đinh ghim",
      doneButtonText: "Lưu và Thoát",
      fieldTabPlaceHolderHeaderText: "Gợi ý (tùy chọn)",
      enableAttachmentLabelText: "${openStrong}Bật Phần đính kèm${closeStrong}",
      enableAttachmentLabelHint: "Bạn có thể bật/tắt phần đính kèm tại đây",
      attachmentIsRequiredLabelText: "${openStrong}Yêu cầu Phần đính kèm${closeStrong}",
      attachmentIsRequiredLabelHint: "Nếu cần, người dùng có thể cần phải nhập phần đính kèm.",
      attachmentLabelText: "Nhãn nút đính kèm",
      attachmentLabelHint: "Văn bản này sẽ xuất hiện bên cạnh Nút đính kèm. Bạn có thể sử dụng không gian này để mô tả nội dung mà bạn muốn khán giả của mình đính kèm (ảnh, video, tài liệu, v.v.), định dạng tệp mà bạn yêu cầu (.jpeg, .png, .docx, .pdf, v.v.) và bất kỳ hướng dẫn bổ sung nào",
      attachmentDescription: "Mô tả Phần đính kèm",
      attachmentHint: "Nếu cần, bạn có thể cung cấp hướng dẫn bổ sung về phần đính kèm tại đây.",
      jumbotronDescription: "Sử dụng đầu đề lớn hoặc nhỏ cho biểu mẫu của bạn. Đầu trang lớn có thể giúp xác định mục đích của ứng dụng của bạn nhưng sẽ chiếm nhiều không gian trên màn hình của bạn",
      shareGeoformText: "Nút chia sẻ trên mạng xã hội",
      shareDescription: "Nút mạng xã hội cho phép người xem của bạn dễ dàng chia sẻ GeoForm sau khi họ đã gửi",
      defaultMapExtent: "Phạm vi Bản đồ mặc định",
      defaultMapExtentDescription: "Bản đồ sẽ đặt lại phạm vi mặc định trong bản đồ web của bạn sau khi gửi - có thể tắt tùy chọn này bất kỳ lúc nào.",
      pushpinOptionsDescription: "Chọn từ nhiều màu cho đinh ghim bản đồ. Đinh ghim phải khác với biểu tượng bản đồ để giúp người dùng đặt nội dung gửi của họ lên bản đồ",
      selectLocationText: "Chọn vị trí theo",
      myLocationText: "Vị trí của tôi",
      searchText: "Tìm kiếm",
      coordinatesText: "Tọa độ Vĩ độ và Kinh độ",
      usng: "Tọa độ USNG",
      mgrs: "Tọa độ MGRS",
      utm: "Tọa độ UTM",
      selectLocationSDescription: "Cho phép người dùng chọn vị trí bằng cách sử dụng những phương pháp này.",
      dragTooltipText: "Kéo trường tới nơi mà bạn muốn nó xuất hiện",
      showHideLayerText: "Hiện Lớp",
      showHideLayerHelpText: "Bạn có thể cấu hình GeoForm để Hiện/Ẩn Lớp. Tùy chọn này chỉ áp dụng đối với thiết lập một lớp.",
      labelHelpMessage: "Nhãn",
      placeHolderHintMessage: "Văn bản Gợi ý",
      placeHolderHelpMessage: "Văn bản Trợ giúp",
      selectTextOptionValue: "Lựa chọn Bộ lọc",
      disableLogo: "Tắt Logo",
      disableLogoDescription: "Bạn có thể cấu hình GeoForm để Hiện/Ẩn Logo ở phần đầu trang biểu mẫu",
      locateOnLoadText: "Định vị Trong khi Tải",
      locateOnLoadDescription: "Bạn có thể cấu hình GeoForm để sử dụng địa điểm hiện tại trong khi tải trang",
      selectLayerFieldTabText: "Chọn Lớp",
      allLayerSelectOptionText: "Tất cả các Lớp",
      disableViewer: "Tắt Trình xem",
      disableViewerDescription: "Bạn có thể cấu hình GeoForm để tắt/bật trình xem",
      displayFieldHintText: "Trường hiển thị đã chọn sẽ được hiển thị trên trình xem dưới dạng tiêu đề"
    },
    viewer: {
      geocoderCancelText: "Hủy",
      viewMapTabText: "Bản đồ",
      sortHeaderText: "Sắp xếp theo:",
      geocoderPlaceholderText: "Mã Zip, thành phố, v.v.",
      noSearchResult: "Không tìm thấy kết quả",
      recordsTabTooltip: "Xem Các đệ trình",
      legendTabTooltip: "Chú giải",
      aboutUsTabTooltip: "Giới thiệu về Chúng tôi",
      mapTabTooltip: "Bản đồ",
      btnDescendingText: "Desc",
      btnAscendingText: "Asc",
      geometryUnavailableErrorMessage: "Đ_Error finding the geometry of the feature_____________ớ",
      infoPopupOffErrorMessage: "Không có thông tin để hiển thị",
      btnLoadMoreText: "Tải Thêm",
      unavailableTitleText: "Chưa có tiêu đề",
      unavailableConfigMessage: "Không thể tải cấu hình",
      share: "Chia sẻ",
      viewReportsTabText: "Báo cáo",
      viewLegendTabText: "Chú giải",
      viewAboutusTabText: "Về",
      btnSubmitReportText: "Đệ trình Báo cáo",
      appLoadingFailedMessage: "Đã xảy ra lỗi khi tải trình xem"
    }
  })
);