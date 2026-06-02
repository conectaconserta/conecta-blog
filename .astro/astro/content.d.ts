declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"blog": {
"alto-falante-iphone-com-defeito.md": {
	id: "alto-falante-iphone-com-defeito.md";
  slug: "alto-falante-iphone-com-defeito";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"atalhos-samsung.md": {
	id: "atalhos-samsung.md";
  slug: "atalhos-samsung";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"bateria-iphone-inchada.md": {
	id: "bateria-iphone-inchada.md";
  slug: "bateria-iphone-inchada";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"bateria-iphone.md": {
	id: "bateria-iphone.md";
  slug: "bateria-iphone";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"bateria-macbook-durando-pouco.md": {
	id: "bateria-macbook-durando-pouco.md";
  slug: "bateria-macbook-durando-pouco";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"camera-iphone-com-defeito.md": {
	id: "camera-iphone-com-defeito.md";
  slug: "camera-iphone-com-defeito";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"conector-iphone-com-defeito.md": {
	id: "conector-iphone-com-defeito.md";
  slug: "conector-iphone-com-defeito";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"consertar-ou-comprar-iphone.md": {
	id: "consertar-ou-comprar-iphone.md";
  slug: "consertar-ou-comprar-iphone";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"conserto-iphone-recife.md": {
	id: "conserto-iphone-recife.md";
  slug: "conserto-iphone-recife";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"dicas-produtividade-ipad.md": {
	id: "dicas-produtividade-ipad.md";
  slug: "dicas-produtividade-ipad";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"iphone-desligando-sozinho.md": {
	id: "iphone-desligando-sozinho.md";
  slug: "iphone-desligando-sozinho";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"iphone-molhado.md": {
	id: "iphone-molhado.md";
  slug: "iphone-molhado";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"iphone-nao-carrega.md": {
	id: "iphone-nao-carrega.md";
  slug: "iphone-nao-carrega";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"iphone-tela-preta-mas-ligado.md": {
	id: "iphone-tela-preta-mas-ligado.md";
  slug: "iphone-tela-preta-mas-ligado";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"iphone-travando-e-esquentando.md": {
	id: "iphone-travando-e-esquentando.md";
  slug: "iphone-travando-e-esquentando";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"macbook-nao-liga.md": {
	id: "macbook-nao-liga.md";
  slug: "macbook-nao-liga";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"tela-apple-watch-trincada.md": {
	id: "tela-apple-watch-trincada.md";
  slug: "tela-apple-watch-trincada";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"tela-iphone-trincou.md": {
	id: "tela-iphone-trincou.md";
  slug: "tela-iphone-trincou";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"touch-id-face-id-parou-de-funcionar.md": {
	id: "touch-id-face-id-parou-de-funcionar.md";
  slug: "touch-id-face-id-parou-de-funcionar";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"troca-tela-iphone.md": {
	id: "troca-tela-iphone.md";
  slug: "troca-tela-iphone";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
};
"conserto": {
"apple-watch-nike.md": {
	id: "apple-watch-nike.md";
  slug: "apple-watch-nike";
  body: string;
  collection: "conserto";
  data: InferEntrySchema<"conserto">
} & { render(): Render[".md"] };
"apple-watch-se.md": {
	id: "apple-watch-se.md";
  slug: "apple-watch-se";
  body: string;
  collection: "conserto";
  data: InferEntrySchema<"conserto">
} & { render(): Render[".md"] };
"apple-watch-series.md": {
	id: "apple-watch-series.md";
  slug: "apple-watch-series";
  body: string;
  collection: "conserto";
  data: InferEntrySchema<"conserto">
} & { render(): Render[".md"] };
"ipad-air.md": {
	id: "ipad-air.md";
  slug: "ipad-air";
  body: string;
  collection: "conserto";
  data: InferEntrySchema<"conserto">
} & { render(): Render[".md"] };
"ipad-mini.md": {
	id: "ipad-mini.md";
  slug: "ipad-mini";
  body: string;
  collection: "conserto";
  data: InferEntrySchema<"conserto">
} & { render(): Render[".md"] };
"ipad-pro.md": {
	id: "ipad-pro.md";
  slug: "ipad-pro";
  body: string;
  collection: "conserto";
  data: InferEntrySchema<"conserto">
} & { render(): Render[".md"] };
"ipad.md": {
	id: "ipad.md";
  slug: "ipad";
  body: string;
  collection: "conserto";
  data: InferEntrySchema<"conserto">
} & { render(): Render[".md"] };
"iphone-11.md": {
	id: "iphone-11.md";
  slug: "iphone-11";
  body: string;
  collection: "conserto";
  data: InferEntrySchema<"conserto">
} & { render(): Render[".md"] };
"iphone-12.md": {
	id: "iphone-12.md";
  slug: "iphone-12";
  body: string;
  collection: "conserto";
  data: InferEntrySchema<"conserto">
} & { render(): Render[".md"] };
"iphone-13.md": {
	id: "iphone-13.md";
  slug: "iphone-13";
  body: string;
  collection: "conserto";
  data: InferEntrySchema<"conserto">
} & { render(): Render[".md"] };
"iphone-14.md": {
	id: "iphone-14.md";
  slug: "iphone-14";
  body: string;
  collection: "conserto";
  data: InferEntrySchema<"conserto">
} & { render(): Render[".md"] };
"iphone-15.md": {
	id: "iphone-15.md";
  slug: "iphone-15";
  body: string;
  collection: "conserto";
  data: InferEntrySchema<"conserto">
} & { render(): Render[".md"] };
"iphone-16.md": {
	id: "iphone-16.md";
  slug: "iphone-16";
  body: string;
  collection: "conserto";
  data: InferEntrySchema<"conserto">
} & { render(): Render[".md"] };
"iphone-17.md": {
	id: "iphone-17.md";
  slug: "iphone-17";
  body: string;
  collection: "conserto";
  data: InferEntrySchema<"conserto">
} & { render(): Render[".md"] };
"iphone-7.md": {
	id: "iphone-7.md";
  slug: "iphone-7";
  body: string;
  collection: "conserto";
  data: InferEntrySchema<"conserto">
} & { render(): Render[".md"] };
"iphone-8.md": {
	id: "iphone-8.md";
  slug: "iphone-8";
  body: string;
  collection: "conserto";
  data: InferEntrySchema<"conserto">
} & { render(): Render[".md"] };
"iphone-se.md": {
	id: "iphone-se.md";
  slug: "iphone-se";
  body: string;
  collection: "conserto";
  data: InferEntrySchema<"conserto">
} & { render(): Render[".md"] };
"iphone-x.md": {
	id: "iphone-x.md";
  slug: "iphone-x";
  body: string;
  collection: "conserto";
  data: InferEntrySchema<"conserto">
} & { render(): Render[".md"] };
"macbook-air.md": {
	id: "macbook-air.md";
  slug: "macbook-air";
  body: string;
  collection: "conserto";
  data: InferEntrySchema<"conserto">
} & { render(): Render[".md"] };
"macbook-pro.md": {
	id: "macbook-pro.md";
  slug: "macbook-pro";
  body: string;
  collection: "conserto";
  data: InferEntrySchema<"conserto">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("./../../src/content/config.js");
}
