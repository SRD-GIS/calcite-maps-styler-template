﻿define(
	 ({
		header: {
			start: "start",
			searchStories: "Prohledávejte své příběhy...",
			filter: "Filtr",
			sort: "Seřadit (Sort)",
			sortColon: "Seřadit:",
			numResults: "Výsledků: {{NUM_RESULTS}}",
			sortBy: "Seřadit podle",
			dateModified: "Datum změny",
			title: "Nadpis",
			type: "Typ",
			views: "Zobrazení",
			errors: "Chyby",
			filterBy: "Filtrovat podle",
			filterItems: "Filtrovat položky",
			apps: "Aplikace",
			sharing: "Sdílení",
			clearAll: "Vymazat vše",
			clearSearch: "Vymaže vyhledávání",
			logOut: "Odhlásit",
			mainQuote: "Příběhy jsou nejmocnějším způsobem, jakým lze v dnešní době vypustit do světa nápady.",
			quoteSource: "Robert McKee",
			checkYourStories: "Podívat se na příběhy",
			createStory: "Vytvořit příběh",
			totalStories: "Celkem příběhů: {{NUM_STORIES}}",
			noIssues: "Všechno v pořádku",
			userStories: "Příběhy uživatele {{USER_NAME}}",
			headerDisabledTooltip: "Čekejte prosím, zkusíme něco vykouzlit...",
			notOnTouch: "Nedostupné na dotykových zařízeních",
		},
		deleteModal: {
			title: "Potvrzení odstranění",
			warningText: "Opravdu chcete smazat tento příběh? Nebude možné ho obnovit.",
			deleteText: "Smazat",
			cancel: "Storno"
		},
		loading: {
			loadingText: "Nahrávají se vaše příběhy..."
		},
		cantFindStories: {
			whereAreStories: "Nevidíte svůj příběh?",
			notSeeExplanation: "Sekce Moje příběhy zobrazuje pouze mapy s příběhem hostované v systému ArcGIS a vytvořené pomocí aplikací {{STORY_MAP_TOUR}}, {{JOURNAL}}, {{MAP_SERIES}} nebo {{SWIPE_SPYGLASS}}. Pro další informace viz {{FAQ}}.",
			faq: "Často kladené dotazy",
			followingStoriesToUpdate: "Následující příběhy vytvořené dřívějšími verzemi našich aplikací je třeba aktualizovat, aby byly uvedeny v sekci Moje příběhy:",
			gettingStories: "Probíhá vyhledávání příběhů vytvořených dřívějšími verzemi našich aplikací, které je třeba aktualizovat...",
			title: "Nadpis",
			typeOfStoryMap: "Typ",
			lastModified: "Naposledy upraveno",
			allUpToDate: "Není třeba aktualizovat žádné příběhy vytvořené dřívějšími verzemi našich aplikací.",
			updateAll: "Aktualizovat vše",
			errorScanningForStories: "Při prohledávání vašich příběhů došlo k chybě.",
			close: "Zavřít",
			updates: "Aktualizace",
			updatingNumberOfNumber: "Aktualizuje se {{CURRENT_NUMBER}} z {{TOTAL}}",
			updatingNumberOfNumberAlt: "Aktualizuje se {{CURRENT_NUMBER}} / {{TOTAL}}",
			updateSucceeded: "Aktualizace byla úspěšná!",
			reloadingStories: "Znovu se nahrávají vaše příběhy...",
			errorUpdatingStories: "Při aktualizaci vašich příběhů došlo k chybě.",
			partialUpdateMessage: "Úspěšně aktualizovaných příběhů: {{NUM_UPDATED}}"
		},
		signIn: {
			signInTitle: "Přihlásit se do map s příběhem",
			signInTo: "Přihlaste se pomocí svého účtu ArcGIS Online, abyste mohli:",
			explanationOne: "Vytvářejte pro vyprávění svých příběhů poutavé příběhové mapy.",
			explanationTwo: "Používejte své mapy a data z ArcGIS Online ve svých mapách s příběhem.",
			explanationThree: "Spravujte své mapy s příběhem a kontrolujte stav jejich obsahu.",
			dontHaveAccount: "Nemáte účet ArcGIS Online? Zaregistrujte se na:",
			publicAccount: "Bezplatný nekomerční veřejný účet",
			orgAccount: "bezplatnou zkušební verzi předplatného ArcGIS",
			timeExpired: "Vaše přihlášení vypršelo. Pro pokračování tam, kde jste skončili, se znovu přihlaste.",
			apiDidntLoad: "Něco se nenačítá správně. Zkuste znovu načíst stránku.",
			needAccount: "Potřebujete účet?",
			letsGo: "Pojďme!"
		},
		sharingLevel: {
			publicMessage: "Veřejné",
			privateMessage: "Soukromý",
			organization: "Organizace",
			changedSharing: "Úroveň sdílení změněna.",
			unableToChange: "Sdílení se nepodařilo změnit.",
			partOfMap: "Tato položka se nachází v mapě. Pro změnu její úrovně sdílení musíte změnit úroveň sdílení mapy.",
			storyPublicContentOrg: "Váš příběh je veřejný, takže jeho obsah nelze sdílet pouze s vaší organizací",
			storyPublicContentPrivate: "Váš příběh je veřejný, takže jeho obsah nemůže být soukromý",
			mapOrg: "Sdílení vaší mapy ve vaší organizaci by rozbilo příběh",
			layerOrg: "Sdílení vaší vrstvy ve vaší organizaci by rozbilo příběh",
			mapPrivate: "Nastavení vaší mapy na soukromou by rozbilo příběh",
			layerPrivate: "Nastavení vaší vrstvy na soukromou by rozbilo příběh"
		},
		collectionList: {
			advocacy: "Obhajoba a osvěta",
			architecture: "Architektura a design",
			conservation: "Ochrana přírody a udržitelnost",
			culture: "Kultura",
			destinations: "Destinace a turismus",
			disasters: "Katastrofy a obnova",
			economy: "Ekonomika a rozvoj",
			entertainment: "Zábava",
			history: "Historie",
			infrastructure: "Infrastruktura",
			marketing: "Marketing",
			nature: "Příroda a životní prostředí",
			news: "Zprávy a události",
			oceans: "Oceány",
			parks: "Parky a rekreační prostory",
			people: "Lidé a společnost",
			planning: "Plánování a analýza",
			publicArt: "Veřejné umění",
			science: "Věda a technologie",
			sport: "Sport",
			travelogues: "Cestopisy"
		},
		types: {
			custom: "Vlastní",
			notSpecified: "Nespecifikovaný typ"
		},
		storyMap: {
			shared: "Sdíleno",
			saveFailed: "Chyba při ukládání",
			numViews: "Zobrazení: {{NUM_VIEWS}}",
			editStory: "Upravit příběh",
			viewLive: "Zobrazit příběh",
			preview: "Náhled",
			deleteButton: "Smazat",
			modified: "Změněno dne {{DATE}}",
			summary: "Souhrn",
			loading: "Nahrávání…",
			collapse: "sbalit",
			close: "zavřít",
			hide: "skrýt",
			notAvailableWhenBroken: "Váš příběh má níže uvedené problémy",
			cantBeDeleted: "Tento příběh je chráněn proti smazání, pro deaktivaci zámku jděte na stránku položky v systému ArcGIS.",
			shareDialog: {
				title: "Sdílejte svůj příběh se světem!",
				notPublicWarning: "Váš příběh je sdílen s vaší organizací. Mohou ho zobrazit pouze členové vaší organizace.",
				embedStory: "Vložit váš příběh",
				shortLink: "Krátký odkaz",
				hideHeaderBar: "Skrýt lištu záhlaví",
				copied: "Zkopírováno",
				small: "malé",
				medium: "střední",
				large: "velké",
				custom: "vlastní",
				widthAbbreviation: "z",
				heightAbbreviation: "v",
				emptyDimension: "Zadejte rozměr.",
				seeExample: "Náhled vašeho vložení",
				removeHeader: "Skrýt záhlaví aplikace"
			},
			maps: {
				unableRetrieveTitle: "Nepodařilo se získat mapy",
				unableRetrieveDescription: "Nepodařilo se nám získat mapy pro tuto mapu s příběhem."
			},
			images: {
				unableRetrieveTitle: "Nepodařilo se získat obrázky",
				unableRetrieveDescription: "Nepodařilo se nám získat obrázky pro tuto mapu s příběhem."
			},
			tags: {
				tags: "Klíčová slova",
				collectionTags: "Předmět",
				selectASubject: "Vybrat předmět",
				save: "Uložit",
				saved: "Uloženo",
				errorSaving: "Chyba při ukládání",
				tagTip: "Tip: Klíčová slova pomáhají lidem najít váš příběh v ArcGIS Online. Čím jsou klíčová slova relevantnější, tím bude mít váš výtvor vyšší viditelnost."
			},
			submitToGallery: {
				gallerySubmission: "Galerie map s příběhem",
				canSubmitIf: "Můžete svůj příběh nominovat do galerie, pokud obsahuje následující:",
				hasOwnImage: "Vlastní miniaturu",
				chosenSubject: "Předmět a klíčová slova",
				chosenSubjectAlt: "{{SUBJECT}} a klíčová slova",
				storyMapTopicSubject: "předmět",
				sharedPublicly: "Sdílen veřejně",
				noBrokenContent: "Žádné problémy",
				nominateToGallery: "Nominovat do galerie",
				comingSoon: "Již brzy!",
				submitted: "Odesláno",
				errorSubmitting: "Chyba při odesílání",
				ourGallery: "Galerie Map s příběhem",
				galleryTip: "{{THE_GALLERY}} je uspořádaná skupina map s příběhem, která obsahuje některé nejlepší příklady. Pokud bude váš příběh zvolen, bude přidán do 10 dní od vašeho odeslání. Kvůli množství nominací nemůžeme zaručit, že bude váš příběh přidán."
			},
			placeholders: {
				noSummary: "Žádné shrnutí, kliknutím jej přidejte."
			},
			errors: {
				cantDeleteStory: "Nepodařilo se odstranit příběh.",
				unableToFind: "Nepodařilo se najít obsah",
				unableToRetrieve: "Nepodařilo se nám získat obsah pro tuto mapu s příběhem."
			},
			socialSharing: {
				availableWhenPublic: "Tato možnost bude k dispozici, když bude váš příběh veřejný"
			},
			dialog: {
				back: "Zpět",
				close: "Zavřít",
				cancel: "Storno"
			},
			imagePicker: {
				changeDefault: "Změnit výchozí obrázek",
				changeImage: "Změnit miniaturu",
				uploadImage: "Nahrát miniaturu",
				chooseImage: "Zvolit miniaturu",
				chooseAnImage: "Vybrat obrázek",
				notInIEVersion: "Tato funkce není k dispozici v prohlížeči Internet Explorer {{VERSION_NUMBER}}.",
				or: "Nebo",
				uploadAnImage: "Nahrát obrázek",
				supportedFileTypes: "Podporuje .png, .jpg, .gif",
				imageSizeMessage: "Váš obrázek musí být aspoň 286 px široký a 190 px vysoký.",
				minimumDimensions: "Minimum: 286 x 190px",
				imagesLoading: "Načítání obrázků...",
				noImages: "Tento příběh neobsahuje obrázky",
				errorLoading: "Nepodařilo se nám získat obrázky pro tento příběh",
				clickBelowTip: "Kliknutím na tlačítko níže nahrajete obrázek.",
				dragAndDrop: "Přetažení",
				cropImage: "Oříznout obrázek",
				saveImage: "Uložit obrázek",
				save: "Uložit",
				savingImage: "Ukládání vašeho obrázku...",
				saved: "Uloženo!",
				errorSaving: "Nepodařilo se uložit váš obrázek.",
				skipAndCrop: "Přeskočit a oříznout pro mě",
				wrongFormat: "Tento typ souboru není podporován.",
				noCropWarning: "Tento obrázek nelze oříznout, ale přesto ho můžete uložit jako miniaturu vašeho příběhu s původními rozměry ({{WIDTH_PIXELS}} x {{HEIGHT_PIXELS}} px)."
			}
		},
		content: {
			media: {
				maps: "Mapy",
				images: "Snímky",
				videos: "Videa",
				webpages: "Webové stránky",
				tags: "Klíčová slova",
				gallery: "Galerie"
			},
			headers: {
				status: "Stav",
				source: "Zdroj",
				name: "Název",
				shared: "Sdíleno"
			},
			component: {
				mapTour: "Desetinné číslo",
				bullet: "Odrážka",
				tab: "Záložka",
				accordion: "Část",
				mapJournal: "Část"
			},
			titleType: {
				mapTour: "Popis",
				mapJournal: "Adresa URL",
				mapSeries: "Adresa URL"
			},
			actions: {
				viewMap: "Prohlížet mapu",
				editMap: "Upravit mapu",
				fix: "Opravit",
				viewLayer: "Zobrazit vrstvu"
			},
			contentType: {
				mainStage: "akce hlavní úrovně",
				sidePanel: "popis"
			},
			notification: {
				refreshExplanation: "Znovu zkontrolujte svůj příběh",
				checking: "Probíhá kontrola…",
				foundSomeIssues: "Našli jsme několik problémů",
				noIssuesFound: "Nebyly nalezeny žádné problémy",
				storyPublic: "Váš příběh je nyní veřejný",
				storyOrg: "Váš příběh je nyní sdílen ve vaší organizaci",
				storyPrivate: "Váš příběh je nyní soukromý",
				mapPublic: "Vaše mapa je nyní veřejná",
				mapOrg: "Vaše mapa je nyní sdílena ve vaší organizaci",
				mapPrivate: "Vaše mapa je nyní soukromá",
				layerPublic: "Vaše vrstva je nyní veřejná",
				layerOrg: "Vaše vrstva je nyní sdílena ve vaší organizaci",
				layerPrivate: "Vaše vrstva je nyní soukromá",
				contentPublic: "Váš obsah je nyní veřejný",
				contentOrg: "Váš obsah je nyní sdílen ve vaší organizaci",
				contentPrivate: "Váš obsah je nyní soukromý",
				storyAndContentPublic: "Váš příběh a jeho obsah jsou nyní veřejné",
				storyAndContentOrg: "Váš příběh a jeho obsah jsou nyní sdíleny s vaší organizací",
				storyAndContentPrivate: "Váš příběh a jeho obsah jsou nyní soukromé",
				shareBulkPrompt: "Chcete sdílet obsah vašeho příběhu stejným způsobem?",
				layersPublic: "Některé vrstvy byly také sdíleny veřejně",
				layersOrg: "Některé vrstvy byly také sdíleny s vaší organizací",
				layersPrivate: "Některé vrstvy byly také nastaveny jako soukromé",
				mapsPublic: "Některé mapy byly také sdíleny veřejně",
				mapsOrg: "Některé mapy byly také sdíleny s vaší organizací",
				mapsPrivate: "Některé mapy byly také nastaveny jako soukromé",
				layersAndMapsPublic: "Některé mapy a vrstvy byly také sdíleny veřejně",
				layersAndMapsOrg: "Některé mapy a vrstvy byly také sdíleny s vaší organizací",
				layersAndMapsPrivate: "Některé mapy a vrstvy byly také nastaveny jako soukromé",
				yes: "Ano",
				no: "Ne",
				premiumPublicSuccess: "Váš prémiový obsah je nyní veřejně přístupný",
				subscriptionPublicSuccess: "Váš předplacený obsah je nyní veřejně přístupný"
			},
			errors: {
				publicDisabled: "Veřejné sdílení bylo zakázáno administrátorem",
				orgDisabled: "Sdílení s vaší organizací bylo zakázáno administrátorem",
				noMapName: "Nepodařilo se získat název mapy",
				notPublic: "NEVEŘEJNÉ",
				inaccessible: "NEPŘÍSTUPNÉ",
				deleted: "ODSTRANĚNO",
				cantAccessVideo: "Nepodařilo se získat přístup k videu",
				noStoriesFound: "Nenašli jsme ve vašem obsahu žádné mapy s příběhem.",
				cantShowStories: "Nepodařilo se zobrazit vaše mapy s příběhem. Zkuste to znovu později.",
				consolationSearch: "Nenašli jsme žádné příběhy.",
				notCompatibleWithBrowser : "Mé příběhy nejsou podporovány v prohlížeči Internet Explorer ve verzi nižší než {{VERSION_NUMBER}}.",
				pleaseUpdateBrowser: "Proveďte prosím aktualizaci prohlížeče.",
				searchTip: "Zkuste provést trochu zjednodušení.",
				consolationNoStories: "Vítejte v sekci Mé příběhy!",
				noStoriesTip: "Pro vytvoření vaší první mapy s příběhem přejděte na stránku Aplikace.",
				letsGo: "Pojďme na to",
				cantChangeSharingLevel: "Nelze změnit úroveň sdílení",
				cantChangeSharingLevels: "Nelze změnit úrovně sdílení",
				errorUpdatingTitle: "Při aktualizaci názvu došlo k chybě",
				errorUpdatingSummary: "Při aktualizaci shrnutí došlo k chybě",
				noEmptyTitle: "Název nesmí být prázdný",
				cantUpdatePremiumContent: "Nelze aktualizovat prémiový obsah",
				cantUpdateSubscriptionContent: "Nelze aktualizovat předplacený obsah",
				createFirstStory: "Vytvořit můj první příběh"
			},
			tooltipErrors: {
				mapHasBeenDeleted: "Mapa byla odstraněna",
				layerHasBeenDeleted: "Vrstva byla odstraněna",
				mapIsInaccessible: "Mapa je nepřístupná",
				layerIsInaccessible: "Vrstva je nepřístupná",
				mapNotYoursNotAccessible: "Mapu vlastní někdo jiný a není přístupná",
				layerServiceOkItemNot: "Vrstva byla přidána jako položka, která je odstraněna nebo nepřístupná",
				layerNotYoursNotAccessible: "Vrstvu vlastní někdo jiný a není přístupná",
				mapOthersSharedBelowLevel: "Nejste vlastníkem mapy a není veřejná",
				layerOthersSharedBelowLevel: "Nejste vlastníkem vrstvy a není veřejná",
				noMapNoDetails: "Bez podrobností o mapě vám nemůžeme říct nic o vrstvách",
				mapIsPrivate: "Mapa je soukromá",
				mapIsOrg: "Mapa je sdílena pouze ve vaší organizaci",
				layerIsPrivate: "Vrstva je soukromá",
				layerIsOrg: "Vrstva je sdílena pouze ve vaší organizaci",
				imageInaccessible: "Tento obrázek je nepřístupný",
				videoInaccessible: "Toto video je nepřístupné",
				webpageInaccessible: "Tato webová stránka je nepřístupná",
				layerSecureService: "Vrstva je zabezpečená služba",
				mapSecureService: "Mapa je zabezpečená služba",
				layerConsumesCredits: "Vrstva je prémiový obsah a spotřebovává kredity",
				layerSubscriptionContent: "Vrstva je předplacený obsah",
				mapConsumesCredits: "Mapa je prémiový obsah a spotřebovává kredity",
				mapSubscriptionContent: "Mapa je předplacený obsah"
			},
			tooltipWarnings: {
				cantScanThisTypeAlt: "Nejsme schopni zkontrolovat tento typ vrstvy",
				cantScanThisType: "Vrstva není typ, který dokážeme zkontrolovat",
				webpageNotScanned: "Webové stránky nejsou zkontrolovány",
				ignoredIssue: "Ignorovali jste chybu na této vrstvě. Obnovte stránku, zkontrolujte příběh znovu a přezkoumejte tuto chybu.",
				ignoredIssueBuilder: "Ignorovali jste chybu na této vrstvě. Obnovte nástroj pro tvorbu a přezkoumejte tuto chybu."
			},
			scanningErrors: {
				deletedMap: "Smazaný obsah",
				inaccessibleMap: "Nepřístupný obsah mapy",
				notYoursNotAccessible: "Nejste vlastníkem obsahu a není veřejný",
				serviceOkItemNot: "Vrstvy fungují, ale položky jsou nepřístupné",
				someContentNotPublic: "Obsah není sdílen veřejně",
				someContentPrivate: "Soukromý obsah",
				othersSharedBelowLevel: "Nejste vlastníkem obsahu a není veřejný",
				premiumContent: "Prémiový obsah",
				subscriptionContent: "Předplacený obsah",
				secureService: "Zabezpečené služby",
				inaccessibleImage: "Nepřístupné obrázky",
				inaccessibleVideo: "Nepřístupná videa",
				inaccessibleWebpage: "Nepřístupné webové stránky"
			},
			scanningErrorTips: {
				deletedMapTip: "Tip: Upravte svou webovou mapu a odstraňte rozbitý obsah nebo webovou mapu odstraňte ze svého příběhu.",
				inaccessibleMapTip: "Tip: Upravte svou webovou mapu a odstraňte rozbitý obsah nebo webovou mapu odstraňte ze svého příběhu.",
				notYoursNotAccessibleTip: "Tip: Upravte svou webovou mapu a odstraňte vrstvu nebo webovou mapu odstraňte ze svého příběhu.",
				serviceOkItemNotTip: "Vrstvy byly přidány jako položky, které jsou nepřístupné nebo odstraněné. Vrstvy fungují, ale vaše mapa může být ovlivněna (vyskakovací okna, symboly).",
				ignore: "Ignorovat",
				fix: "Opravit",
				clickToShareOrg: "Kliknutím na toto tlačítko můžete sdílet všechen tento obsah s vaší organizací nebo ručně změnit každou položku kliknutím na její tlačítka sdílení.",
				clickToSharePublic: "Kliknutím na toto tlačítko můžete sdílet všechen tento obsah veřejně nebo ručně změnit každou položku kliknutím na její tlačítka sdílení.",
				shareOrg: "Sdílet s vaší organizací",
				sharePublicly: "Sdílet veřejně",
				othersSharedBelowLevelTip: "Tip: Některý obsah vašeho příběhu vlastní uživatel {{USER_NAME}} a lidem prohlížejícím váš příběh se nemusí zobrazit.",
				secureServiceTip: "Tip: Odstraňte zabezpečenou službu z vašeho příběhu nebo následujte postup popsaný {{HERE}}.",
				blogArticle: "zde",
				premiumContentTip: "Váš příběh obsahuje prémiový obsah, který po zveřejnění spotřebovává {{CREDITS}}. Zveřejněte svůj příběh a pokračujte, nebo odstraňte příslušné vrstvy z vašeho příběhu.",
				premiumContentPublicTip: "Váš příběh obsahuje prémiový obsah, který po zveřejnění spotřebovává {{CREDITS}}. Potvrzením tyto vrstvy zveřejněte nebo je odstraňte z vašeho příběhu.",
				subscriptionContentTip: "Váš příběh obsahuje předplacený obsah, který není veřejně přístupný. Potvrďte, že chcete tyto vrstvy zpřístupnit (nebudou spotřebovány žádné kredity) nebo vrstvy odstraňte z vašeho příběhu.",
				credits: "kredity",
				makePublic: "Zveřejnit",
				confirm: "Potvrdit",
				inaccessibleImageTip: "Tip: Doplňte chybějící obrázek nebo odstraňte jeho odkaz.",
				inaccessibleVideoTip: "Tip: Doplňte chybějící video nebo odstraňte jeho odkaz.",
				inaccessibleWebpageTip: "Tip: Doplňte chybějící webovou stránku nebo odstraňte její odkaz."
			},
			removeLayer: {
				title: "Spravit problém s vrstvou",
				layersWithIssue: "Vrstev s tímto problémem: {{NUM_WITH_ISSUE}}",
				issueExplanation: "Vrstva {{LAYER_NAME}} byla přidána jako položka, která je nepřístupná nebo odstraněná. Vrstva funguje, ale vaše mapa může být ovlivněna (vyskakovací okna, symboly). Nejsme schopni určit, zda je položka důležitá pro váš příběh.",
				issueSolution: "Problém můžete napravit upravením své mapy, odstraněním vrstvy a přidáním vrstvy zpět do mapy pomocí následující adresy URL:",
				editMap: "Upravit vaši mapu",
				clickBelowWhenDone: "Když jste dokončili úpravy, klikněte na níže uvedené tlačítko:",
				rescanAndClose: "Znovu prohlédnout a zavřít"
			},
			info: {
				ownedBy: "Tuto položku vlastní uživatel {{USER_NAME}}",
				unknownUser: "někdo jiný",
				untitledSection: "(Sekce bez názvu)",
				introRecord: "Úvod"
			},
			layers: {
				layersHeader: "Vrstvy",
				noLayers: "(Žádné vrstvy)",
				basemapParens: "(podkladová mapa)"
			},
			images: {
				thumbnails: "Miniatury",
				thumbnail: "Miniatura",
				thumbnailParens: "(miniatura)"
			},
			general: {
				noTitle: "(bez názvu)",
				loading: "Nahrávání…"
			}
		},
		infographics: {
			mapJournal: {
				firstTitle: "sekce",
				secondTitle: "style",
				secondValueA: "postranní panel",
				secondValueB: "plovoucí panel",
				thirdTitle: "mapy"
			},
			mapTour: {
				firstTitle: "body prohlídky",
				secondTitle: "style",
				secondValueA: "integrované",
				secondValueB: "tři panely",
				thirdTitle: "podkladová mapa",
				thirdValueLoading: "Nahrávání…",
				thirdValueUnknown: "neznámý"
			},
			mapSeries: {
				firstTitleA: "odrážky",
				firstTitleB: "sekce",
				firstTitleC: "záložky",
				secondTitle: "style",
				secondValueA: "s odrážkami",
				secondValueB: "postranní rozbalovací panel",
				secondValueC: "se záložkami",
				thirdTitle: "mapy"
			},
			swipeSpyglass: {
				firstTitle: "body zájmu",
				secondTitle: "style",
				secondValueA: "překrývání",
				secondValueB: "lupa",
				thirdTitle: "mapy"
			},
			crowdsource: {
				firstTitle: "příspěvky",
				secondTitle: "style",
				secondValueA: "postranní panel",
				secondValueB: "skládané",
				thirdTitle: "podkladová mapa",
				thirdValueLoading: "Načítání…...",
				thirdValueUnknown: "neznámý"
			}
		},
		progress: {
			checkingStories: "Probíhá kontrola případných problémů s vašimi příběhy...",
			stop: "Ukončit iteraci (Stop)",
			exit: "Konec",
			dismiss: "Zrušit",
			done: "Hotovo.",
			noStoriesWithIssuesLower: "Nebyly nalezeny žádné problémy!",
			storiesErrorFree: "Zdá se, že vaše příběhy neobsahují žádné chyby",
			scanAllError: "Nelze zkontrolovat – nepodařilo se nám získat jeden nebo více vašich příběhů",
			scanProgress: "{{NUM_SCANNED}} z {{NUM_TOTAL}}",
			scanStopped: "Zkontrolovaných příběhů: {{NUM_SCANNED}}, příběhů s problémy: {{ISSUE_STORIES}}",
			storiesWithIssues: "Příběhů s problémy: {{NUM_STORIES}}"
		},
		newStories: {
			newStoriesFound: "Zdá se, že jste vytvořili nový příběh.",
			includeStories: "Obnovit příběhy",
			notWhileScanning: "Bude k dispozici po dokončení kontroly."
		}
    })
);
