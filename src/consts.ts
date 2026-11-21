// サイト全体の設定。SNSやドメインが決まったらここを書き換えるだけで全ページに反映される。

export const SITE_URL = 'https://kanazawa-local.com';
export const SITE_TITLE = 'Kanazawa Local';
export const SITE_TAGLINE = 'Kanazawa, explained by a local English coach: what to eat, where to go at night, and the Japanese you actually need.';
export const SITE_DESCRIPTION =
	'A local guide to Kanazawa for travelers: food, nightlife, seasons, getting around and simple Japanese, from an English coach who lives here.';
export const AUTHOR = 'ZUMA';
export const CONTACT_EMAIL = 'info.zuma.owners@gmail.com';
export const AUTHOR_FULL = 'Kazumasa Matsuda (ZUMA)';
export const SCHOOL = { name: 'Regrandir English', url: 'https://regrandir.com/', link: 'https://regrandir.com/?from=kl' };

export type Category = { slug: string; name: string; blurb: string };
// 記事のジャンル。frontmatter の category にこの slug を書く。/topics/<slug>/ に一覧ページができる。
export const CATEGORIES: Category[] = [
	{ slug: 'plan', name: 'Plan Your Trip', blurb: 'Getting here, getting around, how many days, and what to know before you arrive.' },
	{ slug: 'eat-drink', name: 'Eat & Drink', blurb: 'Seafood, oden, sake, cafés and how ordering actually works.' },
	{ slug: 'nightlife', name: 'Nightlife', blurb: 'Bars, izakaya and the districts where Kanazawa goes out.' },
	{ slug: 'things-to-do', name: 'Things to Do', blurb: 'Gardens, old streets, museums and day trips, with local timing tips.' },
	{ slug: 'seasons', name: 'Seasons & Events', blurb: 'Crab season, snow, cherry blossoms and what is on this month.' },
	{ slug: 'japanese', name: 'Useful Japanese', blurb: 'Short phrases that make restaurants, shops and taxis easier.' },
];
export const categoryBySlug = (slug?: string) => CATEGORIES.find((c) => c.slug === slug);

// SNS が決まったら url を入れる（例: 'https://www.instagram.com/xxxx/'）。null のあいだはフォロー導線は SNS リンクなしで表示される。
export const SOCIAL: { label: string; url: string | null } = {
	label: 'Instagram',
	url: null,
};

// Guide ページの「最終更新日」。毎月最初の実行時に更新する。
export const GUIDE_UPDATED = '2026-11-13';

export type Area = { slug: string; name: string; ja: string; blurb: string };

// エリア一覧。記事の frontmatter の area にはこの slug を書く。
export const AREAS: Area[] = [
	{ slug: 'katamachi', name: 'Katamachi', ja: '片町', blurb: 'The busiest nightlife district in Kanazawa.' },
	{ slug: 'kiguramachi', name: 'Kiguramachi', ja: '木倉町', blurb: 'A narrow street of small restaurants and bars next to Katamachi.' },
	{ slug: 'kakinokibatake', name: 'Kakinokibatake', ja: '柿木畠', blurb: 'A small neighborhood of cafés and restaurants right next to Korinbo.' },
	{ slug: 'korinbo', name: 'Korinbo', ja: '香林坊', blurb: 'Downtown Kanazawa, a short walk from Katamachi.' },
	{ slug: 'kanazawa-station', name: 'Kanazawa Station', ja: '金沢駅周辺', blurb: 'Handy if you are arriving late or leaving early.' },
	{ slug: 'other', name: 'Other areas', ja: 'その他', blurb: 'Good nights outside the main districts.' },
];

export const areaBySlug = (slug?: string) => AREAS.find((a) => a.slug === slug);

// 交流イベント（/events/ と記事の最後の案内に出る）。date を過ぎたものは次のビルドで自動的に消える。
// date が null のものは「日程は近日公開」として出す。新しいイベントが決まったらここに足す。
export const MEETUP_INSTAGRAM = 'https://www.instagram.com/regrandir_english_kanazawa/';
export type Meetup = { date: string | null; title: string; when: string; where: string; fee: string; note: string };
export const MEETUPS: Meetup[] = [
	{
		date: '2026-11-28',
		title: 'Autumn Leaves English Picnic',
		when: 'Sat, Nov 28, 2026 / 2:00–5:00 PM',
		where: 'Okuutatsuyama Kenmin Park, Kanazawa (indoors with board games if it rains)',
		fee: '2,000 yen',
		note: 'Bring a picnic mat, a drink and something warm. Food is not provided. Please sign up by Wed, Nov 25.',
	},
	{
		date: null,
		title: 'Christmas Party',
		when: 'Late December 2026 (date and details coming soon)',
		where: 'Kanazawa / Nonoichi area',
		fee: 'TBA',
		note: 'Message us if you would like to hear when the details are out.',
	},
];
export const upcomingMeetups = (today = new Date()) => {
	const d = today.toISOString().slice(0, 10);
	return MEETUPS.filter((m) => m.date === null || m.date >= d);
};
