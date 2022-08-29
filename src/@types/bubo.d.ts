export interface Feeds {
	[key: string]: FeedItem[];
}
export interface FeedItem {
	[key: string]: string | number | Date | object | FeedItem[];
	isoDate: string | number | Date;
	pubDate: string | number | Date;
	items: FeedItem[];
}

//NEW WAY
export type JSONValue =
	| string
	| number
	| boolean
	| { [x: string]: JSONValue }
	| Array<JSONValue>;
