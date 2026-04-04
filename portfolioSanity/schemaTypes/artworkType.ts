import { defineField, defineType } from "sanity";

export const artworkType = defineType({
	name: "artwork",
	title: "Artwork",
	type: "document",
	fields: [
		defineField({
			name: "title",
			type: "string",
		}),
		defineField({
			name: "date",
			type: "date",
		}),
		defineField({
			name: "image",
			type: "image",
		}),
		defineField({
			name: "description",
			type: "text",
		}),
		defineField({
			name: "topPage",
			type: "boolean",
			initialValue: false,
		}),
	],
});
