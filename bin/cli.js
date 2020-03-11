#!/usr/bin/env node

/* eslint-disable no-unused-expressions */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-param-reassign */

const TikTokScraper = require('../lib/instance');
const CONST = require('../lib/constant');

const startScraper = async argv => {
    try {
        argv.type = argv._[0];
        argv.cli = false;
        argv.input = argv.id;
        argv.user_data = argv.userdata;

        const scraper = await TikTokScraper(argv).scrape();
        console.log(scraper);
        return scraper;
    } catch (error) {
        console.log(error);
    }
};

require('yargs')
    .usage('Usage: $0 <command> [options]')
    .example(`$0 user USERNAME -d -n 100`)
    .example(`$0 trend -d -n 100`)
    .example(`$0 hashtag HASHTAG_NAME -d -n 100`)
    .command('user [id]', 'Scrape videos from username. Enter only username', {}, argv => {
        startScraper(argv);
    })
    .command('hashtag [id]', 'Scrape videos from hashtag. Enter hashtag without #', {}, argv => {
        startScraper(argv);
    })
    .command('trend', 'Scrape posts from current trends', {}, argv => {
        startScraper(argv);
    })
    .command('music [id]', 'Scrape videos from music id. Enter only music id', {}, argv => {
        startScraper(argv);
    })
    .options({
        help: {
            alias: 'h',
            describe: 'help',
        },
        number: {
            alias: 'n',
            default: 20,
            describe: 'Number of posts to scrape. If you will set 0 then all posts will be scraped',
        },
        proxy: {
            alias: 'p',
            default: '',
            describe: 'Set proxy',
        },
        timeout: {
            default: 0,
            describe: "If you will receive 'rate limit' error , you can try to set timeout. Timeout is in mls: 1000 mls = 1 second",
        },
        download: {
            alias: 'd',
            boolean: true,
            default: false,
            describe: 'Download and archive all scraped videos to a ZIP file',
        },
        userdata: {
            alias: 'u',
            boolean: true,
            default: false,
            describe: 'Scrape user profile information Followers, Followings and etc',
        },
        filepath: {
            default: process.cwd(),
            describe: 'Directory to save all output files.',
        },
        filetype: {
            alias: ['type', 't'],
            default: 'csv',
            choices: ['csv', 'json', 'all'],
            describe: "Type of output file where post information will be saved. 'all' - save information about all posts to a 'json' and 'csv' ",
        },
        store: {
            alias: ['s'],
            boolean: true,
            default: false,
            describe: 'Scraper will save the progress in the OS TMP folder and in the future usage will only download new videos avoiding duplicates',
        },
        signature: {
            alias: ['i'],
            default: '',
            describe: 'Signature',
        },
    })
    .check(argv => {
        if (CONST.scrape.indexOf(argv._[0]) === -1) {
            throw new Error('Wrong command');
        }

        if (argv.store) {
            if (!argv.download) {
                throw new Error('--store, -s flag only works in combination with the download flag. Add -d to your command');
            }
        }
        return true;
    })
    .demandCommand().argv;
