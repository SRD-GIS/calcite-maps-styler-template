﻿define(
   ({
		builder: {
			layouts: {
				tabTitle: "באמצעות לשוניות",
				tabDescr: "הצג מפות ותוכן נוסף באמצעות לשוניות עם חלונית אופציונלית לטקסט תיאורי.",
				tabItem: "לשונית",
				tabItems: "לשוניות",
				sideTitle: "אקורדיון צדדי",
				sideDescr: "הצג מפות ותוכן נוסף באמצעות פקד מתרחב הכולל טקסט תיאורי.",
				sideItem: "ערך",
				sideItems: "ערכים",
				bulletTitle: "תבליטים",
				bulletDescr: "הצג מפות ותוכן נוסף באמצעות תבליטים עם חלונית אופציונלית לטקסט תיאורי.",
				bulletItem: "תבליט",
				bulletItems: "תבליטים"
			},
			common: {
				lblStatus1: "פורסם",
				lblStatus3: "מוסתר"
			},
			settingsLayoutOptions: {
				title: "אפשרויות תצוגה",
				lblDescription: "תיאור",
				lblLegend: "מיקום מקרא",
				tooltipLegend: "בחר היכן ברצונך להציג את מקרא המפה. ניתן להפעיל את המקרא עבור כל מפה כשאתה מוסיף או מגדיר אותה.",
				lblDropdown: "תפריט נפתח",
				lblBelowDesc: "מתחת לתיאור",
				lblOnPanel: "כחלונית",
				lblPanelDescAndLegend: "תיאור וחלונית מקרא",
				lblPanelDescAndOrLegend: "תיאור ו/או חלונית מקרא",
				lblPanelDesc: "חלונית תיאור",
				lblPanelLegend: "חלונית מקרא",
				lblPanelAccordion: "חלונית אקורדיון",
				cfgLeft: "שמאל",
				cfgRight: "ימין",
				cfgSmall: "קטן",
				cfgMedium: "בינוני",
				cfgLarge: "גדול",
				lblNumbering: "הצג מספרים",
				lblReverse: "הפוך סדר מספור",
				canOverlapMap: "יכול לחפוף למיקום במפה"
			},
			settingsMapOptions: {
				title: "אפשרויות מפה",
				lblOverview: "מפת התמצאות",
				tooltipOverview: "הצג מפת התמצאות קטנה יחד עם המפה הראשית.",
				lblLocate: "לחצן איתור",
				tooltipLocate: "פונקציונליות זו נתמכת ברוב הדפדפנים במכשירים ניידים ובמחשבים שולחניים (Internet Explorer 9).",
				lblGeocoder: "מאתר כתובות או מקומות",
				tooltipGeocoder: "אפשר למשתמשים למצוא כתובות ומקומות במפות שלך.",
				lblSync: "סנכרן מיקומים במפה",
				tooltipSync: "כשאפשרות זו פועלת, המיקום ההתחלתי של המפה הראשונה בסדרה יחול על כל המפות, וניווט של משתמשים במפה כלשהי ישתקף בכל המפות. השבת אפשרות זו כדי שהמיקום בכל מפה יישאר עצמאי."
			},
			initPopup: {
				title: "ברוך הבא אל"
			},
			addEditPopup: {
				lblAdd: "הוסף",
				lblEdit: "ערוך",
				disabled: "ההוספה מושבתת מכיוון שהגעת למספר המרבי המותר של %LBL_LAYOUT%.",
				titleAdd: "הוסף",
				titleEdit: "ערוך",
				stepMainStageNextTooltip: "הזן את הכותרת והתוכן של %LBL_LAYOUT%",
				titlePlaceholder: "כותרת %LBL_LAYOUT%..."
			},
			textEditor: {
				placeholder1: "הוסף כאן טקסט, קישורים וגרפיקה קטנה.",
				placeholder2: "אם החלונית תישאר ריקה היא תוסתר."
			},
			organizePopup: {
				title: "ארגן",
				lblHeader: "כן_Drag and drop %LBL_LAYOUT% to organize your story________________ש.",
				lblColTitle: "כותרת",
				lblColStatus: "סטטוס",
				btnApplyWarning: "אשר מחיקת %NB%‏ %LBL_LAYOUT%",
				deleteTooltip: "מחק",
				firstSectionExplain: "(לא ניתן להזיז את מקטע הבית)"
			},
			help: {
				lblHelp: "עזרה",
				lblAdd: "הוסף",
				lblSettings: "הגדרות",
				lblOrga: "ארגן",
				lblEdit: "שינויי עריכה",
				lblPublish: "שתף",
				lblTips: "טיפים",
				lblMore: "רוצה עוד?",
				lblLink: "בקר באתר מפות סיפור של Esri.",
				content1Div1: "כדי ליצור את %TPL_NAME%, השתמש בלחצן \'הוסף\' כדי להוסיף לתצוגה כל מפה או תוכן אחר. התוכן האחר יכול לכלול תמונות, סרטונים, דפי אינטרנט מוטמעים או קוד. לדוגמה, ייתכן שתרצה להראות לקוראים שלך תמונה או סרטון מקדימים כשהם יפעילו לראשונה את %TPL_NAME%, לפני שימשיכו לחקור את המפות שלך.",
				content1Div2: "כשתלחץ על לחצן 'הוסף', תופיע תיבת דו-שיח שתאפשר לך לבחור ולהגדיר את המפה או התוכן האחר שאתה רוצה להוסיף. לדוגמה, תוכל לציין את המיקום שבו המפה תוצג, להפעיל את המקרא וכו'.",
				content2Div1: "תיבת הדו-שיח \'הגדרות\' היא המקום שבו ניתן לשנות את מראה %TPL_NAME%. באפשרותך לשנות את התצוגה, לבחור ערכת צבעים שונה, לבחור היכן יופיע מקרא המפה וכו\'.",
				content2Div2: "באפשרותך גם להחליף את הלוגו של Esri בכותרת %TPL_NAME% בלוגו שלך, כדי לשקף את המותג שלך. ניתן גם לציין את אתר האינטרנט שיופעל אם הקוראים ילחצו על הלוגו, כדי שיוכלו לקבל מידע נוסף.",
				content3Div1: "תיבת הדו-שיח \'ארגן\' מאפשרת לך לנהל את %TPL_NAME%. בתיבת דו-שיח זו תוכל לשנות את סדר הסדרות על-ידי גרירה ושחרור.",
				content3Div2: "תוכל גם למחוק תוכן או להסתיר אותו. ההסתרה שימושית אם אתה מכין תוכן חדש שעדיין אינו מוכן להופעה במפת הסיפור שלך.",
				content4Div1: "גילית טעות או שאתה רוצה לשנות את החומר שלך? אין בעיה. חפש את סמל העריכה בכל חלקי האפליקציה כדי לבצע שינויים בתוכן. תשתמש בפונקציות העריכה פעמים רבות במהלך פיתוח %TPL_NAME%!",
				content5Div1: "כשאתה שומר את %TPL_NAME% שלך, הוא מוגדר באופן התחלתי כפרטי. השתמש בלחצן \'שתף\' כדי לשתף אותו עם אחרים. אתה יכול לשתף את %TPL_NAME% באופן ציבורי כדי שכל אחד יוכל לגשת אליו.",
				content5Div2: "בהתאם לחשבון שלך, ייתכן שתהיה לך גם אפשרות לשתף את %TPL_NAME% רק עם אנשים בארגון שלך, כך שאחרים לא יוכלו לגשת אליו.",
				content6Div1: "כברירת מחדל, המפות בסדרה מסתנכרנות כדי להציג את אותו מיקום. המשמעות היא שהמיקום שמוצג במפה הראשונה יחול באופן אוטומטי על כל המפות האחרות, ואם קורא יבצע התמקדות או תצוגה פנורמית של מיקום אחר במפה שבה הוא צופה כעת, פעולה זו תחול גם על המפות האחרות.",
				content6Div2: "לדוגמה, אם הסדרה שלך מציגה נתונים נושאיים שונים עבור עיר, הקורא יכול להתמקד בשכונה שלו ולאחר מכן פשוט לעבור בין הלשוניות כדי לראות מפות של האזור.",
				content6Div3: "כדי להשבית סינכרון מיקומים, עבור לתיבת הדו-שיח \'הגדרות\' ובטל את הסימון של הגדרה זו בלשונית \'אפשרויות מפה\'.",
				content6AltDiv1: "כברירת מחדל, מיקומי המפות מסונכרנים. השבתת הסינכרון מאפשרת לכל מפה להציג מיקום שונה.",
				content6AltDiv2: "הסינכרון פועל",
				content6AltDiv3: "הסינכרון כבוי",
				content6AltDiv4: "כדי להשבית את הסינכרון, עבור אל \'הגדרות\' > \'אפשרויות מפה\' ובטל את סימון האפשרות \'סנכרן מיקומי מפה\'."
			},
			landing: {
				lblAdd: "איך אתה רוצה לקרוא לסדרת המפות של %LAYOUT_TITLE%?",
				phAdd: "הזן את הכותרת שלך...",
				lblOR: "או",
				lblHelp: "צא לסיור"
			}
        }
    })
);
