# Firstly

This is the Web invitation I used for my wedding celemony.

All items related to personal information are recorded in `.env` and not committed.

Feel free to reference it.

## Architecture

React + TypeScript + Vite + Firebase

Firebase Blaze Plan

- Hosting
- Firestore Database
- Authentication
- Storage
- Functions

## Extentions

[Resize Images](https://extensions.dev/extensions/firebase/storage-resize-images) for resize images when user uploads them

[EmailJS](https://www.emailjs.com/) for sending email

## init

```
$ firebase init

{setting by yourself}

$ npm run deploy
```

## public

```
countdown.jpg
favicon.jpg
home-after.jpg
home-before.jpg
loading.gif
message.png
rsvp.png
top.png
washi.jpg
wi.png
```

## .env

```
# google map
VITE_APP_GOOGLE_MAPS_API_KEY
VITE_APP_GOOGLE_MAPS_WEDDING_PLACE_LAT
VITE_APP_GOOGLE_MAPS_WEDDING_PLACE_LNG
VITE_APP_GOOGLE_MAPS_NEAREST_STATION_PLACE_LAT
VITE_APP_GOOGLE_MAPS_NEAREST_STATION_PLACE_LNG
VITE_APP_GOOGLE_MAPS_LEFT_END_LAT
VITE_APP_GOOGLE_MAPS_LEFT_END_LNG
VITE_APP_GOOGLE_MAPS_LINK

# emailjs
VITE_APP_EMAILJS_USER_ID
VITE_APP_EMAILJS_SERVICE_ID
VITE_APP_EMAILJS_TEMPLATE_ID

# firebase
VITE_APP_FIREBASE_API_KEY
VITE_APP_FIREBASE_AUTH_DOMEIN
VITE_APP_FIREBASE_PROJECT_ID
VITE_APP_FIREBASE_STORAGE_BUCKET
VITE_APP_FIREBASE_MESSAGING_SENDER_ID
VITE_APP_FIREBASE_APP_ID
VITE_APP_FIREBASE_MEASUREMENT_ID

# privacy
VITE_APP_WEDDING_DATE
VITE_APP_WEDDING_PLACE
VITE_APP_WEDDING_DATETIME
VITE_APP_WEDDING_CLERK_TIME
VITE_APP_WEDDING_CEREMONY_TIME
VITE_APP_WEDDING_RECEPTION_TIME
```
