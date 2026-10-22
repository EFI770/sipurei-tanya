# העלאת סיפורי תניא ל-App Store ו-Google Play

האפליקציה מוכנה לעטיפה עם Capacitor.

## דרישות מקדימות

1. **חשבון Apple Developer** (99$ לשנה) – [developer.apple.com](https://developer.apple.com)
2. **Mac** עם Xcode (או שירות CI כמו Codemagic)
3. Node.js מותקן

## שלבי התקנה (פעם אחת)

```bash
# בתיקיית הריפו
npm install

# הוספת פלטפורמות
npx cap add ios
npx cap add android

# סנכרון הקבצים
npx cap sync
```

## פתיחה ב-Xcode (iOS)

```bash
npx cap open ios
```

ב-Xcode:
- בחר Team (חשבון ה-Developer שלך)
- שנה Bundle Identifier אם צריך
- הוסף אייקונים (App Icon)
- Archive → Distribute App → App Store Connect

## אייקונים

צור אייקון 1024x1024 והשתמש בכלי:
```bash
npm install -D @capacitor/assets
npx capacitor-assets generate
```

או העלה ידנית ל-App Store Connect.

## שם האפליקציה

- שם: **סיפורי תניא**
- Bundle ID: `il.efi770.sipureitanya`
- אפשר לשנות ב-`capacitor.config.ts`

## הערות

- האפליקציה היא Static HTML – אין צורך ב-build נוסף.
- `webDir` מוגדר ל-`.` (שורש הריפו).
- לאחר שינויים ב-index.html הרץ `npx cap sync`.

## שירותי CI מומלצים (בלי Mac)

- [Codemagic](https://codemagic.io) – תומך ב-Capacitor מצוין
- [Bitrise](https://bitrise.io)

---
*הכנה אוטומטית עבור EFI770/sipurei-tanya*
