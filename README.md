# TikTok Scraper & Downloader

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/b3ef17f5a8504600931abfa60ac01006)](https://app.codacy.com/manual/drawrowfly/tiktok-scraper?utm_source=github.com&utm_medium=referral&utm_content=drawrowfly/tiktok-scraper&utm_campaign=Badge_Grade_Dashboard)

Scrape and download useful information from TikTok.

## No login or password are required

This is not an official API support and etc. This is just a scraper that is using TikTok Web API to scrape media.

---

<a href="https://www.buymeacoffee.com/Usom2qC" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-blue.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>

---

## Features

-   Scrape video posts information from username, hashtag, trends, or music-id
-   Scrape user profile information **Following, Followers, Heart, Video count, Digg and Verified or Not**
-   Download and save media to a ZIP archive
-   **Save previous progress and download only new videos that weren't downloaded before**. This feature only works from the CLI and if only if download flag is on.
-   Create JSON/CSV files with a post information

## To Do

-   [x] CLI: save progress to avoid downloading same videos
-   [ ] **Rewrite everything in TypeScript**
-   [ ] Improve proxy support
-   [ ] Scrape users/hashtag
-   [ ] Download video without the watermak
-   [ ] Add tests
-   [ ] Web interface

**Note:**

-   **When scraping user profile information you can recieve a Rate Limit error, everything depends from the number of profiles that you scrape. It means that all user profile metrics will be 0 or false**

**Posts - JSON/CSV output:**

```
    id: 'VIDEO_ID',
    text: 'CAPTION',
    createTime: '1583870600',
    authorId: 'AUTHOR_ID',
    authorName: 'AUTHOR_USERNAME',
    authorFollowing: 208,
    authorFans: 2273771,
    authorHeart: 79791624,
    authorVideo: 1149,
    authorDigg: 8922,
    authorVerified: true,
    authorPrivate: false,
    authorSignature: 'AUTHOR_DESCRIPTION(BIO)',
    musicId: 'MUSIC_ID',
    musicName: 'AUTHOR_NICK',
    musicAuthor: 'AUTHOR_NAME',
    musicOriginal: '',
    imageUrl:'IMAGE_URL',
    videoUrl:'VIDEO_URL',
    diggCount: 2104,
    shareCount: 1,
    playCount: 9007,
    commentCount: 50,
    hashtags:
    [{ id: '69573911',
       name: 'PlayWithLife',
       title: 'HASHTAG_TITLE',
       cover: [Array]
    }...]
```

![Demo](https://i.imgur.com/6gIbBzo.png)

**Possible errors**

-   Unknown. Report them if you will receive any

## Installation

tiktok-scraper requires [Node.js](https://nodejs.org/) v10+ to run.

**Install from NPM**

```sh
npm i -g tiktok-scraper
```

**Install from YARN**

```sh
yarn global add tiktok-scraper
```

## USAGE

### In Terminal

```sh
$ tiktok-scraper --help

Usage: tiktok-scraper <command> [options]

Commands:
  tiktok-scraper user [id]     Scrape videos from username. Enter only username
  tiktok-scraper hashtag [id]  Scrape videos from hashtag. Enter hashtag without #
  tiktok-scraper trend         Scrape posts from current trends
  tiktok-scraper music [id]    Scrape posts from a music id number

Options:
  --help, -h              help                                         [boolean]
  --version               Show version number                          [boolean]
  --number, -n            Number of posts to scrape. If you will set 0 then all
                          posts will be scraped                    [default: 20]
  --proxy, -p             Set proxy                                [default: ""]
  --timeout               If you will receive 'rate limit' error , you can try
                          to set timeout. Timeout is in mls: 1000 mls = 1 second
                                                                    [default: 0]
  --download, -d          Download and archive all scraped videos to a ZIP file
                                                      [boolean] [default: false]
  --userdata, -u          Scrape user profile information Followers, Followings
                          and etc                     [boolean] [default: false]
  --filepath              Directory to save all output files.
                [default: "/Users/jackass/Documents/lang/NodeJs/tiktok-scraper"]
  --filetype, --type, -t  Type of output file where post information will be
                          saved. 'all' - save information about all posts to a
                          'json' and 'csv'
                                [choices: "csv", "json", "all"] [default: "csv"]
  --store, -s             Scraper will save the progress in the OS TMP folder
                          and in the future usage will only download new videos
                          avoiding duplicates         [boolean] [default: false]

Examples:
  tiktok-scraper user USERNAME -d -n 100
  tiktok-scraper hashtag HASHTAG_NAME -d -n 100
  tiktok-scraper trend -d -n 100
  tiktok-scraper music MUSICID -n 100
```

**Example 1:**
Scrape 300 video posts from user {USERNAME}. Save post info in to a CSV file (by default)

```sh
tiktok-scraper user USERNAME -n 300

Output:
CSV path: /{CURRENT_PATH}/user_1552945544582.csv
```

**Example 2:**
Scrape 100 posts from hashtag {HASHTAG_NAME}, download and save them to a ZIP archive. Save post info in to a JSON and CSV files (--filetype all)

```sh
tiktok-scraper hashtag HASHTAG_NAME -n 100 -d -t all

Output:
ZIP path: /{CURRENT_PATH}/hashtag_1552945659138.zip
JSON path: /{CURRENT_PATH}/hashtag_1552945659138.json
CSV path: /{CURRENT_PATH}/hashtag_1552945659138.csv
```

**Example 3:**
Scrape 50 posts from trends section, download them to a ZIP and save info to a csv file

```sh
tiktok-scraper trend -n 50 -d -t csv


Output:
ZIP path: /{CURRENT_PATH}/trend_1552945659138.zip
CSV path: /{CURRENT_PATH}/tend_1552945659138.csv
```

**Example 4:**
Scrape 100 posts from a particular music ID (numberical ID from TikTok URL)

```sh
tiktok-scraper music MUSICID -n 100

Output:
ZIP path: /{CURRENT_PATH}/music_1552945659138.zip
CSV path: /{CURRENT_PATH}/music_1552945659138.csv
```

**Example 5:**
Scrape 50 posts from trends section **with user profile information**

```sh
tiktok-scraper trend -n 50 -u


Output:
ZIP path: /{CURRENT_PATH}/trend_1552945659138.zip
CSV path: /{CURRENT_PATH}/tend_1552945659138.csv
```

**Example 6:**
Download 20 latest video post from the user {USERNAME} and save the progress to avoid downloading the same videos in the future

-   **NOTE** Progress can only be saved if **download** flag is on
-   When executing same command next time scraper will only download newly posted videos

```sh
tiktok-scraper user USERNAME -n 20 -d -store


Output:
ZIP path: /{CURRENT_PATH}/trend_1552945659138.zip
CSV path: /{CURRENT_PATH}/tend_1552945659138.csv
```

**To make it look better, when downloading posts the progress will be shown in terminal**

```sh
Downloading 6750670497744309509 [==============================] 100%
Downloading 6749962264020782342 [==============================] 100%
Downloading 6749433991113264390 [==============================] 100%
Downloading 6750671571968429318 [==============================] 100%
Downloading 6750668198011505926 [==============================] 100%
Downloading 6748611221903117574 [==============================] 100%
Downloading 6748606789551410438 [==============================] 100%
Downloading 6748139550251535621 [==============================] 100%
Downloading 6748616311166799110 [==============================] 100%
Downloading 6748048372625689861 [==============================] 100%
```

## Module

### Promise

```javascript
const TikTokScraper = require('tiktok-scraper');

// User feed by username
(async () => {
    try {
        const posts = await TikTokScraper.user('USERNAME', { number: 100 });
        console.log(posts);
    } catch (error) {
        console.log(error);
    }
})();

// User feed by user id
// Some TikTok user id's are larger then MAX_SAFE_INTEGER, you need to pass user id as a string
(async () => {
    try {
        const posts = await TikTokScraper.user(`USER_ID`, { number: 100, by_user_id: true });
        console.log(posts);
    } catch (error) {
        console.log(error);
    }
})();

// Trend
(async () => {
    try {
        const posts = await TikTokScraper.trend('', { number: 100 });
        console.log(posts);
    } catch (error) {
        console.log(error);
    }
})();

// Trends with the user profile information: Followers, Following, Hearts, Digg, Videos and Verified or not
(async () => {
    try {
        const posts = await TikTokScraper.trend('', { number: 100, user_data: true });
        console.log(posts);
    } catch (error) {
        console.log(error);
    }
})();

// Hashtag
(async () => {
    try {
        const posts = await TikTokScraper.hashtag('HASHTAG', { number: 100 });
        console.log(posts);
    } catch (error) {
        console.log(error);
    }
})();

// Get single user profile information: Number of followers and etc
// Method is accepting an object with only 2 properties:
// input - USERNAME
// proxy - in case you need to use proxy
(async () => {
    try {
        const user = await TikTokScraper.getUserProfileInfo({ input: 'USERNAME', proxy: '' });
        console.log(user);
    } catch (error) {
        console.log(error);
    }
})();

// Get single hashtag information: Number of views and etc
// Method is accepting an object with only 2 properties:
// input - HASHTAG NAME
// proxy - in case you need to use proxy
(async () => {
    try {
        const hashtag = await TikTokScraper.getHashtagInfo({ input: 'HASHTAG', proxy: '' });
        console.log(hashtag);
    } catch (error) {
        console.log(error);
    }
})();

// Sign tiktok Web Api URL
// Method is accepting an object with 4 properties:
// url - full url
// proxy - in case you need to use proxy
// referer - set referer value in the headers
// userAgent - set user-agent value in the headers
(async () => {
    try {
        const userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.122 Safari/537.36';
        const referer = 'https://google.com';
        const signature = await TikTokScraper.signUrl({
            url: 'https://www.tiktok.com/share/item/list?secUid=&id=&type=5&count=30&minCursor=0&maxCursor=1&shareUid=&lang=en',
            referer,
            userAgent,
        });
        const response = await rp({
            uri: `https://www.tiktok.com/share/item/list?secUid=&id=&type=5&count=30&minCursor=0&maxCursor=1&shareUid=&lang=en&_signature=${signature}`,
            headers: {
                'user-agent': userAgent,
                referer,
            },
            json: true,
        });
        console.log(response);
    } catch (error) {
        console.log(error);
    }
})();
```

**Promise will return current result**

```javascript
{
    collector:[ARRAY_OF_DATA]
    //If {filetype} and {download} options are enbabled then:
    zip: '/{CURRENT_PATH}/user_1552963581094.zip',
    json: '/{CURRENT_PATH}/user_1552963581094.json',
    csv: '/{CURRENT_PATH}/user_1552963581094.csv'
}
```

### Event

```javascript
const TikTokScraper = require('tiktok-scraper');

let posts = TikTokScraper.user({ USERNAME }, { event: true, number: 30 });

posts.on('data', json => {
    //data in JSON format
});

posts.on('done', () => {
    //completed
});
posts.on('error', error => {
    //error message
});
posts.scrape();
```

### Methods

```javascript
.user(id, options) //Scrape posts from a specific user
.hashtag(id, options) //Scrape posts from hashtag section
.trend('', options) // Scrape posts from a trends section
.music(id, options) // Scrape posts by music id

.getUserProfileInfo({ input: 'USERNAME', proxy: '' }) // Get user profile information
.getHashtagInfo({ input: 'HASHTAG_NAME', proxy: '' }) // Get hashtag information
.signUrl({ url: 'tiktok request url', proxy: '', referer: 'set referer in the headers', userAgent: 'set user-agent in the headers' }) // Get signature for the request
```

### Options

```javascript
let options = {
    // Number of posts to scrape: {int default: 20}
    number: 50,

    // Set proxy, example: 127.0.0.1:8080: {string default: ''}
    proxy: '',

    // Enable or Disable event emitter. If true then you can accept data through events: {boolean default: false}
    event: false,

    // Timeout between requests. If 'rate limit' error received then this option can be useful: {int default: 0}
    timeout: 0,

    // Set to {true} to search by user id: {boolean default: false}
    by_user_id: false,

    // Download posts or not. If true ZIP archive in {filepath} will be created: {boolean default: false}
    download: false,

    // How many post should be downloaded asynchronously. Only if {download:true}: {int default: 5}
    asyncDownload: 5,

    // File path where all files will be saved: {string default: 'CURRENT_DIR'}
    filepath: `CURRENT_DIR`,

    // Scrape user profile information: {boolean default: false}
    // Is very usefull when scraping posts from a thrends
    // If you will make to many requests you can receive Rate Limit
    user_data: false,

    // Output with information can be saved to a CSV or JSON files: {string default: 'na'}
    // 'csv' to save in csv
    // 'json' to save in json
    // 'all' to save in json and csv
    // 'na' to skip this step
    filetype: `na`,
};
```

<a href="https://www.buymeacoffee.com/Usom2qC" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-blue.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>

---

License

---

**MIT**

**Free Software**
