﻿define(
	 ({
		commonWebmap: {
			selector: {
				lblWebMap: "Ж_Map__Я",
				lblLocation: "Местоположение",
				lblContent: "Содержание",
				lblPopup: "Всплывающее окно",
				lblControls: "Дополнения",
				lblOverview: "Обзорная карта",
				lblLegend: "Легенда",
				loadingTitle: "Название загрузки",
				entry: "Элемент",
				entries: "Элементы",
				section: "Раздел",
				sections: "Разделы",
				and: "и",
				action: "Действие в разделе",
				actions: "Действие в разделах",
				originalWebmap: "Ж_Map used to publish the %TPL_NAME%___________Я",
				browseMaps: "Ж_Select a map_____Я",
				createMap: "Ж_Create a map_____Я",
				current: "Ж_Current map____Я",
				select: "Ж_Select or create a map________Я",
				newMap: "Ж_Newly selected map______Я",
				newCreatedMap: "Ж_Newly created map______Я",
				webmapDefault: "Ж_Map default____Я",
				customCfg: "Пользовательская конфигурация",
				tooltipLocation: "Определите местоположение, отображаемое на этой карте.",
				tooltipContent: "Определите видимые слои.",
				tooltipPopup: "Выберите всплывающее окно, которое будет открываться при отображении этой карты.",
				tooltipOverview: "Отобразите маленькую обзорную карту вместе с основной картой.",
				tooltipLegend: "Отобразите легенду карты на самой карте, что пригодится, если на карте много слоев и символов.",
				mapCfgInvite: "Используйте эти элементы управления для настройки вашей карты",
				lblLocationAlt: "Наследуется из первой карты",
				tooltipLocationAlt: "Местоположение этой карты синхронизируется с первой картой в серии. Чтобы изменить это поведение в вашей серии, перейдите в Настройки > Опции карты."
			},
			configure: {
				btnReset: "Сбросить",
				btnCancel: "Отмена",
				tocTitle: "Содержание карты",
				tocExplain: "Выберите, какие слои будут отображаться.",
				tocNoData: "Отсутствуют слои, которые можно настраивать.",
				tocSave: "Сохранить содержание карты",
				extentTitle: "Местоположение карты",
				extentExplain: "Переместите и измените масштаб карты, чтобы просмотреть, как она будет выглядеть для читателей.",
				extentSave: "Сохранение местоположение на карте",
				popupTitle: "Всплывающее окно карты",
				popupExplain: "Щелкните объект, чтобы открыть всплывающее окно, которое вы хотите отобразить",
				popupSave: "Сохраните конфигурацию всплывающего окна",
				hintNavigation: "Навигация по карте отключена."
			},
			editor: {
				loading: "Ж_Please wait while the map editor is loading______________Я",
				newTitle: "Ж_Create new map_____Я",
				editTitle: "Ж_Edit map___Я",
				titleLbl: "Ж_Title___Я",
				titlePh: "Ж_Map title_____Я...",
				folderLbl: "Ж_The map will be created in the same folder as the story__________________Я.",
				creating: "Ж_Creating the map______Я",
				saving: "Ж_Saving the map_____Я",
				success: "Ж_Map saved____Я",
				successCreate: "Ж_Map created____Я",
				cancelTitle: "Ж_Discard any unsaved changes_________Я?",
				errorDuplicate: "Ж_You already have a map with that title____________Я",
				errorCreate: "Ж_Unable to create map. Please try again_____________Я.",
				errorSave: "Ж_Unable to save map. Please try again____________Я.",
				notavailable1: "Ж_Sorry, creating or editing a map is not supported in Firefox due to a technical limitation. You may want to build your story using a different web browser or use the following workaround_________________________________________________________Я.",
				notavailable2: "Ж_Sorry, creating or editing a map is not supported since the story map application is not hosted in %PRODUCT%. Please contact your ArcGIS administrator for more information_____________________________________________________Я.",
				notavailable3: "Ж_Sorry, creating or editing a map is not supported on this version of Portal for ArcGIS (requires 10.4 or later). Please contact your ArcGIS administrator for more information______________________________________________________Я.",
				notavailable4: "Ж_You can create a map using %MV%, then come back here to add it to your story________________________Я.",
				notavailable5: "Ж_You can edit the map using %MV%, then come back here and %apply% to see your changes___________________________Я.",
				notavailable6: "Ж_map viewer____Я",
				notavailable7: "Ж_reload the map_____Я"
			}
		},
		configure: {
			mapdlg:{
				items:{
					organizationLabel: "Моя организация",
					onlineLabel: "ArcGIS Online",
					contentLabel: "Мои ресурсы",
					favoritesLabel: "Мое избранное"
				},
				title: "Ж_Select a map_____Я",
				searchTitle: "Поиск",
				ok: "Ok",
				cancel: "Отмена",
				placeholder: "Ж_Enter search term or web map ID___________Я..."
			}
		}
	})
);
