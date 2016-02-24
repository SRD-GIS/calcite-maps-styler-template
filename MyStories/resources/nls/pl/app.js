﻿define(
	 ({
		header: {
			start: "uruchom",
			searchStories: "Przeszukaj swoje narracje...",
			filter: "Filtruj",
			sort: "Sortuj",
			sortColon: "Sortuj:",
			numResults: "Wyniki: {{NUM_RESULTS}}",
			sortBy: "Sortuj według",
			dateModified: "Ostatnia modyfikacja",
			title: "Tytuł",
			type: "Typ",
			views: "Liczba wyświetleń",
			errors: "Błędy",
			filterBy: "Filtruj według",
			filterItems: "Filtruj elementy",
			apps: "Aplikacje",
			sharing: "Udostępnianie",
			clearAll: "Wyczyść wszystko",
			clearSearch: "Czyści wyszukiwanie",
			logOut: "Wyloguj",
			mainQuote: "Tworzenie ciekawych narracji to najbardziej efektywny sposób przekazywania swoich pomysłów w dzisiejszym świecie.",
			quoteSource: "Robert McKee",
			checkYourStories: "Sprawdź narracje",
			createStory: "Utwórz narrację",
			totalStories: "Całkowita liczba narracji: {{NUM_STORIES}}",
			noIssues: "Wszystko dobrze",
			userStories: "Narracje użytkownika {{USER_NAME}}",
			headerDisabledTooltip: "Poczekaj na efekt naszych sztuczek magicznych...",
			notOnTouch: "Niedostępne na urządzeniach dotykowych",
		},
		deleteModal: {
			title: "Potwierdź usunięcie",
			warningText: "Na pewno usunąć tę narrację? Nie będzie można jej odzyskać.",
			deleteText: "Usuń",
			cancel: "Anuluj"
		},
		loading: {
			loadingText: "Wczytywanie narracji..."
		},
		cantFindStories: {
			whereAreStories: "Nie widzisz narracji?",
			notSeeExplanation: "Karta Moje narracje będzie zawierać tylko mapy narracyjne hostowane na platformie ArcGIS, utworzone za pomocą aplikacji {{STORY_MAP_TOUR}}, {{JOURNAL}}, {{MAP_SERIES}} i {{SWIPE_SPYGLASS}}. Więcej informacji — {{FAQ}}.",
			faq: "FAQ",
			followingStoriesToUpdate: "Następujące narracje utworzone przy użyciu wcześniejszych wersji naszych aplikacji należy zaktualizować, aby wyświetlać je na karcie Moje narracje:",
			gettingStories: "Wyszukiwanie narracji utworzonych przy użyciu wcześniejszych wersji naszych aplikacji, które należy zaktualizować...",
			title: "Tytuł",
			typeOfStoryMap: "Typ",
			lastModified: "Ostatnia modyfikacja",
			allUpToDate: "Nie znaleziono narracji utworzonych przy użyciu wcześniejszych wersji naszych aplikacji, które należy zaktualizować.",
			updateAll: "Zaktualizuj wszystkie",
			errorScanningForStories: "Wystąpił błąd podczas wyszukiwania narracji.",
			close: "Zamknij",
			updates: "Aktualizacje",
			updatingNumberOfNumber: "Aktualizowanie {{CURRENT_NUMBER}} z {{TOTAL}}",
			updatingNumberOfNumberAlt: "Aktualizowanie {{CURRENT_NUMBER}} / {{TOTAL}}",
			updateSucceeded: "Aktualizacja zakończona sukcesem!",
			reloadingStories: "Ponowne wczytywanie narracji...",
			errorUpdatingStories: "Wystąpił błąd podczas aktualizowania narracji.",
			partialUpdateMessage: "Liczba zaktualizowanych narracji: {{NUM_UPDATED}}"
		},
		signIn: {
			signInTitle: "Zaloguj się do Story Maps",
			signInTo: "Zaloguj się za pomocą konta usługi ArcGIS Online aby:",
			explanationOne: "tworzyć interesujące mapy narracyjne i opowiadać swoje narracje;",
			explanationTwo: "korzystać z map i danych zgromadzonych w usłudze ArcGIS Online podczas tworzenia swoich map narracyjnych;",
			explanationThree: "zarządzać mapami narracyjnymi i sprawdzać status ich zawartości.",
			dontHaveAccount: "Nie masz jeszcze konta w usłudze ArcGIS Online? Zarejestruj się:",
			publicAccount: "Bezpłatne konto publiczne do użytku niekomercyjnego",
			orgAccount: "Bezpłatna wersja próbna subskrypcji ArcGIS",
			timeExpired: "Sesja wygasła. Zaloguj się ponownie, aby kontynuować.",
			apiDidntLoad: "Wystąpił problem z wczytaniem zawartości. Spróbuj odświeżyć stronę.",
			needAccount: "Potrzebujesz konta?",
			letsGo: "Zaczynamy!"
		},
		sharingLevel: {
			publicMessage: "Publiczny",
			privateMessage: "Prywatny",
			organization: "Instytucja",
			changedSharing: "Zmieniono poziom udostępniania.",
			unableToChange: "Nie można zmienić poziomu udostępniania.",
			partOfMap: "Ten element znajduje się na mapie. Aby zmienić jego poziom udostępniania, należy najpierw zmienić poziom udostępniania mapy.",
			storyPublicContentOrg: "Twoja narracja jest publiczna, dlatego dostępność jej zawartości nie może być ograniczona tylko do Twojej instytucji.",
			storyPublicContentPrivate: "Twoja narracja jest publiczna, dlatego jej zawartość nie może być prywatna.",
			mapOrg: "Udostępnienie mapy w ramach Twojej instytucji rozbije narrację",
			layerOrg: "Udostępnienie warstwy w ramach Twojej instytucji rozbije narrację",
			mapPrivate: "Zmiana statusu mapy na prywatny rozbije narrację.",
			layerPrivate: "Zmiana statusu warstwy na prywatny rozbije narrację."
		},
		collectionList: {
			advocacy: "Wspieranie i popularyzacja",
			architecture: "Architektura i projektowanie",
			conservation: "Ochrona i zrównoważony rozwój",
			culture: "Kultura",
			destinations: "Cele podróży i turystyka",
			disasters: "Katastrofy i odbudowa",
			economy: "Gospodarka i rozwój",
			entertainment: "Rozrywka",
			history: "Historia",
			infrastructure: "Infrastruktura",
			marketing: "Marketing",
			nature: "Natura i środowisko",
			news: "Wiadomości i wydarzenia",
			oceans: "Oceany",
			parks: "Parki i rekreacja",
			people: "Ludzie i społeczeństwo",
			planning: "Planowanie i analiza",
			publicArt: "Sztuka publiczna",
			science: "Nauka i technologia",
			sport: "Sport",
			travelogues: "Program podróżniczy"
		},
		types: {
			custom: "Niestandardowy",
			notSpecified: "Typ nie został określony"
		},
		storyMap: {
			shared: "Udostępnione",
			saveFailed: "Błąd zapisywania",
			numViews: "Liczba wyświetleń: {{NUM_VIEWS}}",
			editStory: "Edytuj narrację",
			viewLive: "Wyświetl narrację",
			preview: "Zobacz podgląd",
			deleteButton: "Usuń",
			modified: "Zmodyfikowano {{DATE}}",
			summary: "Podsumowanie",
			loading: "Wczytywanie...",
			collapse: "zwiń",
			close: "zamknij",
			hide: "ukryj",
			notAvailableWhenBroken: "Wystąpiły problemy z tą narracją",
			cantBeDeleted: "Ta narracja jest chroniona przed usunięciem. Aby wyłączyć tę opcję, przejdź do strony tego elementu na platformie ArcGIS.",
			shareDialog: {
				title: "Udostępnij swoją narrację całemu światu!",
				notPublicWarning: "Twoja narracja została udostępniona w ramach Twojej instytucji. Tylko członkowie Twojej instytucji będą mogli ją wyświetlać.",
				embedStory: "Osadź narrację",
				shortLink: "Krótkie łącze",
				hideHeaderBar: "Ukryj pasek nagłówka",
				copied: "Skopiowane",
				small: "mały",
				medium: "średni",
				large: "duży",
				custom: "niestandardowy",
				widthAbbreviation: "W",
				heightAbbreviation: "h",
				emptyDimension: "Wprowadź rozmiar.",
				seeExample: "Zobacz podgląd osadzenia",
				removeHeader: "Ukryj nagłówek aplikacji"
			},
			maps: {
				unableRetrieveTitle: "Nie można pobrać map",
				unableRetrieveDescription: "Nie można pobrać map dla tej mapy narracyjnej."
			},
			images: {
				unableRetrieveTitle: "Nie można pobrać obrazów",
				unableRetrieveDescription: "Nie można pobrać obrazów dla tej mapy narracyjnej."
			},
			tags: {
				tags: "Znaczniki",
				collectionTags: "Temat",
				selectASubject: "Wybierz temat",
				save: "Zapisz",
				saved: "Zapisano",
				errorSaving: "Błąd zapisywania",
				tagTip: "Wskazówka: znaczniki pomagają użytkownikom znaleźć Twoją narrację. Im lepiej dobrane znaczniki, tym lepsza widoczność Twojej pracy."
			},
			submitToGallery: {
				gallerySubmission: "Story Maps — Galeria",
				canSubmitIf: "Narrację można nominować do galerii, jeśli spełnia ona następujące warunki:",
				hasOwnImage: "Niestandardowe miniatury",
				chosenSubject: "Temat i niektóre znaczniki",
				chosenSubjectAlt: "{{SUBJECT}} i niektóre znaczniki",
				storyMapTopicSubject: "temat",
				sharedPublicly: "Udostępniony publicznie",
				noBrokenContent: "Brak problemów",
				nominateToGallery: "Nominuj do Galerii",
				comingSoon: "Już wkrótce!",
				submitted: "Przesłane",
				errorSubmitting: "Wystąpił błąd podczas przesyłania",
				ourGallery: "Story Maps — Galeria",
				galleryTip: "{{THE_GALLERY}} to zestaw najlepszych przykładowych map narracyjnych. Jeśli Twoja narracja zostanie wybrana, zostanie dodana do zestawu w ciągu 10 dni od przesłania. Z powodu dużej liczby nominacji nie możemy zagwarantować, że Twoja narracja zostanie wybrana."
			},
			placeholders: {
				noSummary: "Brak podsumowania. Kliknij, aby dodać."
			},
			errors: {
				cantDeleteStory: "Nie można usunąć narracji.",
				unableToFind: "Nie można znaleźć zawartości",
				unableToRetrieve: "Nie można znaleźć zawartości dla tej mapy narracyjnej."
			},
			socialSharing: {
				availableWhenPublic: "Ta opcja będzie dostępna, gdy Twoja narracja będzie publiczna"
			},
			dialog: {
				back: "Powrót",
				close: "Zamknij",
				cancel: "Anuluj"
			},
			imagePicker: {
				changeDefault: "Zmień obraz domyślny",
				changeImage: "Zmień miniaturę",
				uploadImage: "Prześlij miniaturę",
				chooseImage: "Wybierz miniaturę",
				chooseAnImage: "Wybierz obraz",
				notInIEVersion: "Ta opcja nie jest dostępna w przeglądarce Internet Explorer {{VERSION_NUMBER}}.",
				or: "Or",
				uploadAnImage: "Prześlij obraz",
				supportedFileTypes: "Obsługiwane formaty: .png, .jpg, .gif",
				imageSizeMessage: "Obraz musi mieć co najmniej 286 pikseli szerokości i 190 pikseli wysokości.",
				minimumDimensions: "Minimum: 286 x 190 pikseli",
				imagesLoading: "Wczytywanie obrazów...",
				noImages: "Ta narracja nie zawiera obrazów",
				errorLoading: "Nie można pobrać obrazów w tej narracji",
				clickBelowTip: "Kliknij poniższy przycisk, aby przesłać obraz.",
				dragAndDrop: "Przeciągnij i upuść",
				cropImage: "Przytnij obraz",
				saveImage: "Zapisz obraz",
				save: "Zapisz",
				savingImage: "Zapisywanie obrazu...",
				saved: "Zapisano!",
				errorSaving: "Nie można zapisać obrazu.",
				skipAndCrop: "Pomiń i przytnij dla mnie",
				wrongFormat: "Ten typ pliku nie jest obsługiwany.",
				noCropWarning: "Nie można przyciąć tego obrazu, ale można go zapisać jako miniaturę narracji przy zachowaniu oryginalnych wymiarów ({{WIDTH_PIXELS}} x {{HEIGHT_PIXELS}} pikseli)."
			}
		},
		content: {
			media: {
				maps: "Mapy",
				images: "Obrazy",
				videos: "Wideo",
				webpages: "Witryny internetowe",
				tags: "Znaczniki",
				gallery: "Galeria"
			},
			headers: {
				status: "Status",
				source: "Źródło",
				name: "Nazwa",
				shared: "Udostępnione"
			},
			component: {
				mapTour: "Liczba punktów",
				bullet: "Wyróżniki",
				tab: "Karta:",
				accordion: "Sekcja",
				mapJournal: "Sekcja"
			},
			titleType: {
				mapTour: "Podpis",
				mapJournal: "Adres URL",
				mapSeries: "Adres URL"
			},
			actions: {
				viewMap: "Wyświetl mapę",
				editMap: "Edytuj mapę",
				fix: "Napraw",
				viewLayer: "Wyświetl warstwę"
			},
			contentType: {
				mainStage: "działanie w obszarze głównym",
				sidePanel: "opis"
			},
			notification: {
				refreshExplanation: "Ponownie sprawdź narrację",
				checking: "Trwa sprawdzanie...",
				foundSomeIssues: "Wystąpiły problemy",
				noIssuesFound: "Nie znaleziono problemów",
				storyPublic: "Twoja narracja jest teraz publiczna",
				storyOrg: "Twoja narracja jest teraz udostępniona Twojej instytucji",
				storyPrivate: "Twoja narracja jest teraz prywatna",
				mapPublic: "Twoja mapa jest teraz publiczna",
				mapOrg: "Twoja mapa jest teraz udostępniona Twojej instytucji",
				mapPrivate: "Twoja mapa jest teraz prywatna",
				layerPublic: "Twoja warstwa jest teraz publiczna",
				layerOrg: "Twoja warstwa jest teraz udostępniona Twojej instytucji",
				layerPrivate: "Twoja warstwa jest teraz prywatna",
				contentPublic: "Twoja zawartość jest teraz publiczna",
				contentOrg: "Twoja zawartość jest teraz udostępniona Twojej instytucji",
				contentPrivate: "Twoja zawartość jest teraz prywatna",
				storyAndContentPublic: "Twoja narracja i jej zawartość są teraz publiczne",
				storyAndContentOrg: "Twoja narracja i jej zawartość są teraz udostępnione Twojej instytucji",
				storyAndContentPrivate: "Twoja narracja i jej zawartość są teraz prywatne",
				shareBulkPrompt: "Czy udostępnić zawartość Twojej narracji?",
				layersPublic: "Niektóre warstwy zostały również publicznie udostępnione",
				layersOrg: "Niektóre warstwy zostały również udostępnione Twojej instytucji",
				layersPrivate: "Niektóre warstwy zostały również określone jako prywatne",
				mapsPublic: "Niektóre mapy zostały również publicznie udostępnione",
				mapsOrg: "Niektóre mapy zostały również udostępnione Twojej instytucji",
				mapsPrivate: "Niektóre mapy zostały również określone jako prywatne",
				layersAndMapsPublic: "Niektóre mapy i warstwy zostały również publicznie udostępnione",
				layersAndMapsOrg: "Niektóre mapy i warstwy zostały również udostępnione Twojej instytucji",
				layersAndMapsPrivate: "Niektóre mapy i warstwy zostały również określone jako prywatne",
				yes: "Tak",
				no: "Nie",
				premiumPublicSuccess: "Twoje zasoby premium są teraz publicznie dostępne",
				subscriptionPublicSuccess: "Twoja subskrybowana zawartość jest teraz publicznie dostępna"
			},
			errors: {
				publicDisabled: "Opcja publicznego udostępniania została wyłączona przez Administratora",
				orgDisabled: "Opcja udostępniania w instytucji została wyłączona przez Administratora",
				noMapName: "Nie można pobrać nazwy mapy",
				notPublic: "NIEPUBLICZNE",
				inaccessible: "NIEDOSTĘPNE",
				deleted: "USUNIĘTO",
				cantAccessVideo: "Nie można uzyskać dostępu do filmu video",
				noStoriesFound: "Nie znaleziono żadnej mapy narracyjnej w Twoich zasobach.",
				cantShowStories: "Nie można wyświetlić map narracyjnych. Spróbuj ponownie później.",
				consolationSearch: "Nie znaleziono żadnych narracji.",
				notCompatibleWithBrowser : "Karta Moje narracje nie jest obsługiwana przez przeglądarkę Internet Explorer w wersji starszej niż {{VERSION_NUMBER}}.",
				pleaseUpdateBrowser: "Prosimy o zaktualizowanie przeglądarki.",
				searchTip: "Spróbuj ją trochę uprościć.",
				consolationNoStories: "Witamy na karcie Moje narracje!",
				noStoriesTip: "Aby utworzyć pierwszą mapę narracyjną, przejdź do strony z aplikacjami.",
				letsGo: "Zaczynamy",
				cantChangeSharingLevel: "Nie można zmienić poziomu udostępniania",
				cantChangeSharingLevels: "Nie można zmienić poziomów udostępniania",
				errorUpdatingTitle: "Błąd aktualizacji tytułu",
				errorUpdatingSummary: "Błąd aktualizacji podsumowania",
				noEmptyTitle: "Pole Tytuł nie może być puste",
				cantUpdatePremiumContent: "Nie można zaktualizować zasobów premium",
				cantUpdateSubscriptionContent: "Nie można zaktualizować zawartości subskrypcji",
				createFirstStory: "Utwórz moją pierwszą narrację"
			},
			tooltipErrors: {
				mapHasBeenDeleted: "Mapa została usunięta",
				layerHasBeenDeleted: "Warstwa została usunięta",
				mapIsInaccessible: "Mapa jest niedostępna",
				layerIsInaccessible: "Warstwa jest niedostępna",
				mapNotYoursNotAccessible: "Właścicielem mapy jest inny użytkownik i jest ona niedostępna",
				layerServiceOkItemNot: "Warstwa została dodana jako element, który został usunięty lub jest niedostępny",
				layerNotYoursNotAccessible: "Właścicielem warstwy jest inny użytkownik i jest ona niedostępna",
				mapOthersSharedBelowLevel: "Mapa nie należy do Ciebie i nie jest publiczna",
				layerOthersSharedBelowLevel: "Warstwa nie należy do Ciebie i nie jest publiczna",
				noMapNoDetails: "Bez szczegółów na temat mapy nie można nic powiedzieć o warstwach",
				mapIsPrivate: "Mapa jest prywatna",
				mapIsOrg: "Mapa jest udostępniona tylko w Twojej instytucji",
				layerIsPrivate: "Warstwa jest prywatna",
				layerIsOrg: "Warstwa jest udostępniona tylko w Twojej instytucji",
				imageInaccessible: "Ten obraz jest niedostępny",
				videoInaccessible: "Ten film wideo jest niedostępny",
				webpageInaccessible: "Ta strona internetowa jest niedostępna",
				layerSecureService: "Warstwa to usługa zabezpieczona",
				mapSecureService: "Mapa to usługa zabezpieczona",
				layerConsumesCredits: "Warstwa należy do zasobów premium i wymaga kredytów",
				layerSubscriptionContent: "Warstwa to zawartość subskrybowana",
				mapConsumesCredits: "Mapa należy do zasobów premium i wymaga kredytów",
				mapSubscriptionContent: "Mapa to zawartość subskrybowana"
			},
			tooltipWarnings: {
				cantScanThisTypeAlt: "Nie można sprawdzić warstwy tego typu",
				cantScanThisType: "Warstwy tego typu nie można sprawdzić",
				webpageNotScanned: "Strony internetowe nie zostały sprawdzone pod kątem problemów",
				ignoredIssue: "Zignorowano błąd na tej warstwie. Odśwież stronę i ponownie sprawdź tę narrację, aby poprawić błąd",
				ignoredIssueBuilder: "Zignorowano błąd na tej warstwie. Ponownie uruchom kreator, aby ponownie sprawdzić ten błąd"
			},
			scanningErrors: {
				deletedMap: "Zawartość usunięta",
				inaccessibleMap: "Zawartość mapy niedostępna",
				notYoursNotAccessible: "Zawartość nie należy do Ciebie i nie jest publiczna",
				serviceOkItemNot: "Warstwy działają, ale elementy są niedostępne",
				someContentNotPublic: "Zawartość nie jest udostępniana publicznie",
				someContentPrivate: "Zasoby prywatne",
				othersSharedBelowLevel: "Zawartość nie należy do Ciebie i nie jest publiczna",
				premiumContent: "Zasoby premium",
				subscriptionContent: "Zawartość subskrybowana",
				secureService: "Usługi zabezpieczone",
				inaccessibleImage: "Obrazy niedostępne",
				inaccessibleVideo: "Filmy wideo niedostępne",
				inaccessibleWebpage: "Strony internetowe niedostępne"
			},
			scanningErrorTips: {
				deletedMapTip: "Wskazówka: otwórz mapę internetową do edycji i usuń uszkodzoną zawartość lub usuń mapę internetową z narracji.",
				inaccessibleMapTip: "Wskazówka: otwórz mapę internetową do edycji i usuń uszkodzoną zawartość lub usuń mapę internetową z narracji.",
				notYoursNotAccessibleTip: "Wskazówka: otwórz mapę internetową do edycji i usuń warstwę lub usuń mapę internetową z narracji.",
				serviceOkItemNotTip: "Warstwy zostały dodane jako elementy, które są niedostępne lub zostały usunięte. Warstwy działają prawidłowo, ale może mieć to wpływ na mapy (okna podręczne, symbole)",
				ignore: "Ignore",
				fix: "Napraw",
				clickToShareOrg: "Kliknij przycisk, aby udostępnić całą zawartość swojej instytucji, lub ręcznie udostępniaj pojedyncze elementy, klikając ich przyciski udostępniania.",
				clickToSharePublic: "Kliknij przycisk, aby publicznie udostępnić całą zawartość, lub ręcznie udostępniaj pojedyncze elementy, klikając ich przyciski udostępniania.",
				shareOrg: "Udostępnij swojej instytucji",
				sharePublicly: "Udostępnij publicznie",
				othersSharedBelowLevelTip: "Wskazówka: część zawartości Twojej narracji należy do użytkownika {{USER_NAME}}, dlatego może ona nie być widoczna dla innych wyświetlających ją użytkowników.",
				secureServiceTip: "Wskazówka: usuń bezpieczną usługę z narracji lub postępuj zgodnie z procedurą opisaną {{HERE}}.",
				blogArticle: "tutaj",
				premiumContentTip: "Twoja narracja zawiera zasoby premium, które po publicznym udostępnieniu zużyją {{CREDITS}} kredyty(-ów). Udostępnij narrację publicznie i kontynuuj lub usuń warstwy z narracji.",
				premiumContentPublicTip: "Twoja narracja zawiera zasoby premium, które zużyją {{CREDITS}} kredyty(-ów), gdy będzie ona publicznie dostępna. Potwierdź, aby udostępnić te warstwy publicznie lub usuń warstwy z narracji.",
				subscriptionContentTip: "Twoja narracja zawiera zawartość subskrybowaną, która domyślnie nie jest publicznie dostępna. Potwierdź, aby udostępnić te warstwy (nie zostaną zużyte żadne kredyty), lub usuń warstwy z narracji.",
				credits: "kredyty",
				makePublic: "Udostępnij publicznie",
				confirm: "Potwierdź",
				inaccessibleImageTip: "Wskazówka: dodaj brakujący obraz lub usuń odnośnik do tego obrazu.",
				inaccessibleVideoTip: "Wskazówka: dodaj brakujący film wideo lub usuń odnośnik do tego filmu.",
				inaccessibleWebpageTip: "Wskazówka: dodaj brakującą stronę internetową lub usuń odnośnik do tej strony."
			},
			removeLayer: {
				title: "Rozwiąż problemy z warstwą",
				layersWithIssue: "Liczba warstw z problemami: {{NUM_WITH_ISSUE}}",
				issueExplanation: "Warstwa {{LAYER_NAME}} została dodana jako element, który jest niedostępny lub został usunięty. Warstwa działa prawidłowo, ale może mieć to wpływ na mapy (okna podręczne, symbole). Nie możemy określić, czy ten element był ważny w Twojej narracji.",
				issueSolution: "Aby rozwiązać problem, edytuj mapę, usuń warstwę i ponownie dodaj warstwę do mapy przy użyciu adresu URL:",
				editMap: "Edytuj mapę",
				clickBelowWhenDone: "Po zakończeniu edycji kliknij przycisk:",
				rescanAndClose: "Skanuj ponownie i zamknij"
			},
			info: {
				ownedBy: "Właścicielem tego elementu jest {{USER_NAME}}",
				unknownUser: "ktoś inny",
				untitledSection: "(sekcja bez tytułu)",
				introRecord: "Wprowadzenie"
			},
			layers: {
				layersHeader: "Warstwy",
				noLayers: "(brak warstw)",
				basemapParens: "(mapa bazowa)"
			},
			images: {
				thumbnails: "Miniatury",
				thumbnail: "Miniatura",
				thumbnailParens: "(miniatura)"
			},
			general: {
				noTitle: "(brak tytułu)",
				loading: "Wczytywanie..."
			}
		},
		infographics: {
			mapJournal: {
				firstTitle: "sekcje",
				secondTitle: "nadaj styl",
				secondValueA: "panel boczny",
				secondValueB: "panel przestawny",
				thirdTitle: "mapy"
			},
			mapTour: {
				firstTitle: "punktów wycieczki",
				secondTitle: "nadaj styl",
				secondValueA: "zintegrowane",
				secondValueB: "panel trzyczęściowy",
				thirdTitle: "mapa bazowa",
				thirdValueLoading: "Wczytywanie...",
				thirdValueUnknown: "nieznany"
			},
			mapSeries: {
				firstTitleA: "punktory",
				firstTitleB: "sekcje",
				firstTitleC: "kart(-y)",
				secondTitle: "nadaj styl",
				secondValueA: "z punktorami",
				secondValueB: "narzędzie typu accordion",
				secondValueC: "przy użyciu kart",
				thirdTitle: "mapy"
			},
			swipeSpyglass: {
				firstTitle: "punkty zainteresowania (POI)",
				secondTitle: "nadaj styl",
				secondValueA: "zwijaj",
				secondValueB: "lupa",
				thirdTitle: "mapy"
			},
			crowdsource: {
				firstTitle: "udostępnianie zasobów",
				secondTitle: "styl",
				secondValueA: "panel boczny",
				secondValueB: "piętrowo",
				thirdTitle: "mapa bazowa",
				thirdValueLoading: "Wczytywanie...",
				thirdValueUnknown: "nieznany"
			}
		},
		progress: {
			checkingStories: "Sprawdzanie narracji pod kątem problemów...",
			stop: "Zatrzymaj",
			exit: "Zakończ",
			dismiss: "Odrzuć",
			done: "Gotowe.",
			noStoriesWithIssuesLower: "Nie znaleziono problemów!",
			storiesErrorFree: "Twoje narracje nie zawierają błędów",
			scanAllError: "Nie można skanować — nie można pobrać co najmniej jednej narracji",
			scanProgress: "{{NUM_SCANNED}} z {{NUM_TOTAL}}",
			scanStopped: "Liczba przeskanowanych narracji: {{NUM_SCANNED}}; liczba narracji z problemami: {{ISSUE_STORIES}}",
			storiesWithIssues: "Liczba narracji z problemami: {{NUM_STORIES}}"
		},
		newStories: {
			newStoriesFound: "Wygląda na to, że utworzono nową narrację.",
			includeStories: "Odśwież narracje",
			notWhileScanning: "Ta będzie dostępna po ukończeniu sprawdzania"
		}
    })
);
