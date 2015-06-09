define(
	 ({
		builder: {
			layouts: {
				tabTitle: "Tabbed",
				tabDescr: "Present maps and other content using tabs with an optional panel for descriptive text.",
				tabItem: "Tab",
				tabItems: "Tabs",
				sideTitle: "Side Accordion",
				sideDescr: "Present maps and other content using an expandable control that includes descriptive text.",
				sideItem: "Entry",
				sideItems: "Entries",
				bulletTitle: "Bulleted",
				bulletDescr: "Present maps and other content using bullets with an optional panel for descriptive text.",
				bulletItem: "Bullet",
				bulletItems: "Bullets"
			},
			common: {
				lblStatus1: "Published",
				lblStatus3: "Hidden"
			},
			settingsLayoutOptions: {
				title: "Layout options",
				lblDescription: "Description",
				lblLegend: "Legend placement",
				tooltipLegend: "Choose where you want the map legend to be displayed. You can turn the legend on for any map when you add or configure it.",
				lblDropdown: "Dropdown",
				lblBelowDesc: "Below the description",
				lblOnPanel: "As a panel",
				lblPanelDescAndLegend: "Description and legend panel",
				lblPanelDescAndOrLegend: "Description and/or legend panel",
				lblPanelDesc: "Description panel",
				lblPanelLegend: "Legend panel",
				lblPanelAccordion: "Accordion panel",
				cfgLeft: "Left",
				cfgRight: "Right",
				cfgSmall: "Small",
				cfgMedium: "Medium",
				cfgLarge: "Large",
				lblNumbering: "Display numbers",
				lblReverse: "Reverse numbering",
				canOverlapMap: "can overlap map location"
			},
			settingsMapOptions: {
				title: "Map options",
				lblOverview: "Overview Map",
				tooltipOverview: "Display a small overview map along with the main map.",
				lblLocate: "Locate button",
				tooltipLocate: "This functionality is supported on most mobile device and desktop browsers (Internet Explorer 9).",
				lblGeocoder: "Address or Place Finder",
				tooltipGeocoder: "Allow your users to find addresses and places on your maps.",
				lblSync: "Synchronize map locations",
				tooltipSync: "When enabled, the initial location of the first map in your series will be applied to all the maps, and navigation by users in any map will be reflected in all maps. Disable for each map's location to remain independent."
			},
			initPopup: {
				title: "Welcome to"
			},
			addEditPopup: {
				lblAdd: "Add",
				lblEdit: "Edit",
				disabled: "Add is disabled because the maximum number of allowed %LBL_LAYOUT% has been reached.",
				titleAdd: "Add",
				titleEdit: "Edit",
				stepMainStageNextTooltip: "Enter the %LBL_LAYOUT% title and content",
				titlePlaceholder: "%LBL_LAYOUT% title..."
			},
			textEditor: {
				placeholder1: "Add text, links, and small graphics here.",
				placeholder2: "If left blank the panel will be hidden."
			},
			organizePopup: {
				title: "Organize",
				lblHeader: "Drag and drop %LBL_LAYOUT% to organize your series.",
				lblColTitle: "Title",
				lblColStatus: "Status",
				btnApplyWarning: "Confirm deletion of %NB% %LBL_LAYOUT%",
				deleteTooltip: "Delete",
				firstSectionExplain: "(The home section cannot be moved)"
			},
			help: {
				lblHelp: "Help",
				lblAdd: "Add",
				lblSettings: "Settings",
				lblOrga: "Organize",
				lblEdit: "Edits",
				lblPublish: "Share",
				lblTips: "Tips",
				lblMore: "Want more?",
				lblLink: "Visit the Esri Story Maps website.",
				content1Div1: "To create your %TPL_NAME%, use the Add button to add each map or other content into the layout. The other content can include images, videos or embedded web pages or code. For example you might want your readers to see an introductory image or video when they first launch your  %TPL_NAME%, before they move on to explore your maps.",
				content1Div2: "When you click the Add button a dialog will appear that lets you choose and configure the map or other content you want to add. For example you can specify the location you want the map to show, enable its legend, etc.",
				content2Div1: "The Settings dialog is where you can change the appearance of your %TPL_NAME%. You change the layout, choose a different color scheme, choose where the map legend will appear, etc.",
				content2Div2: "You can also replace the Esri logo in the header of your %TPL_NAME% with your own logo to reflect your brand. You can also specify the website that will be launched if readers click your logo, so they can get more information.",
				content3Div1: "The Organize dialog lets you manage your %TPL_NAME%. In this dialog you can change the order of the series by dragging and dropping.",
				content3Div2: "You can also delete content or hide it. Hiding is useful if you are preparing new content that isn't ready to be included in your story map yet.",
				content4Div1: "Found a mistake or want to change your material? No worries. Look for the edit icon throughout the app to make changes to your content. You’ll use the edit functions many times as you develop your %TPL_NAME%!",
				content5Div1: "When you save your %TPL_NAME% it is private initially. Use the Share button to share it with others. You can share your %TPL_NAME% publicly so anyone can access it.",
				content5Div2: "Depending on your account, you may also have the option to share your %TPL_NAME% just to people within your organization, so others can't access it.",
				content6Div1: "By default the maps in a series are synchronized to show the same location. This means that the location shown in the first map will be automatically applied to all the other maps, and that if a reader zooms or pans to a different location in the map they are currently looking at, this will also be applied to the other maps.",
				content6Div2: "For example if your series shows different thematic data for a city, a reader can zoom to their neighborhood and then simply switch between the tabs to see the maps for that area.",
				content6Div3: "To disable location synchronization, go to the Settings dialog and uncheck that setting in the Map Options tab.",
				content6AltDiv1: "By default the maps location are synchronized. Disabling synchronization allows each map to display a different location.",
				content6AltDiv2: "Synchronization ON",
				content6AltDiv3: "Synchronization OFF",
				content6AltDiv4: "To disable synchronization, go to Settings > Map Options and uncheck \"Synchronize map locations\"."
			},
			landing: {
				lblAdd: "What do you want to call your %LAYOUT_TITLE% Map Series?",
				phAdd: "Enter your title...",
				lblOR: "Or",
				lblHelp: "Take a Tour"
			}
        }
    })
);
