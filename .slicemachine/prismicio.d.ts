// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for ContactPage documents */
interface ContactpageDocumentData {
    /**
     * Title field in *ContactPage*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: contactpage.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * Slice Zone field in *ContactPage*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: contactpage.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<ContactpageDocumentDataSlicesSlice>;
}
/**
 * Slice for *ContactPage → Slice Zone*
 *
 */
type ContactpageDocumentDataSlicesSlice = never;
/**
 * ContactPage document from Prismic
 *
 * - **API ID**: `contactpage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ContactpageDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<ContactpageDocumentData>, "contactpage", Lang>;
/** Content for homePage documents */
interface HomepageDocumentData {
    /**
     * Title field in *homePage*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * Slice Zone field in *homePage*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<HomepageDocumentDataSlicesSlice>;
}
/**
 * Slice for *homePage → Slice Zone*
 *
 */
type HomepageDocumentDataSlicesSlice = HeroSliceSlice | MainNavSliceSlice;
/**
 * homePage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<HomepageDocumentData>, "homepage", Lang>;
/** Content for NavBar documents */
interface NavbarDocumentData {
    /**
     * Title field in *NavBar*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: navbar.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * Slice Zone field in *NavBar*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: navbar.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<NavbarDocumentDataSlicesSlice>;
}
/**
 * Slice for *NavBar → Slice Zone*
 *
 */
type NavbarDocumentDataSlicesSlice = NavSliceSlice;
/**
 * NavBar document from Prismic
 *
 * - **API ID**: `navbar`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NavbarDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<NavbarDocumentData>, "navbar", Lang>;
export type AllDocumentTypes = ContactpageDocument | HomepageDocument | NavbarDocument;
/**
 * Primary content in Contact → Primary
 *
 */
interface ContactSliceDefaultPrimary {
    /**
     * Title field in *Contact → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: contact.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Description field in *Contact → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: contact.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
    /**
     * ContactImage field in *Contact → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: contact.primary.contactimage
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    contactimage: prismicT.ImageField<never>;
}
/**
 * Default variation for Contact Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Contact`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ContactSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<ContactSliceDefaultPrimary>, never>;
/**
 * Slice variation for *Contact*
 *
 */
type ContactSliceVariation = ContactSliceDefault;
/**
 * Contact Shared Slice
 *
 * - **API ID**: `contact`
 * - **Description**: `Contact`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ContactSlice = prismicT.SharedSlice<"contact", ContactSliceVariation>;
/**
 * Primary content in HeroSlice → Primary
 *
 */
interface HeroSliceSliceDefaultPrimary {
    /**
     * Title field in *HeroSlice → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: hero_slice.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.RichTextField;
    /**
     * Description field in *HeroSlice → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: hero_slice.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
    /**
     * HeroImage field in *HeroSlice → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: hero_slice.primary.heroimage
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    heroimage: prismicT.ImageField<never>;
    /**
     * TitleMain field in *HeroSlice → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: hero_slice.primary.titleMain
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    titleMain: prismicT.TitleField;
    /**
     * TitleSecond field in *HeroSlice → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: hero_slice.primary.titlesecond
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    titlesecond: prismicT.TitleField;
    /**
     * HeroSubText field in *HeroSlice → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: hero_slice.primary.herosubtext
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    herosubtext: prismicT.RichTextField;
}
/**
 * Item in HeroSlice → Items
 *
 */
export interface HeroSliceSliceDefaultItem {
    /**
     * CTA Link field in *HeroSlice → Items*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: hero_slice.items[].cta_link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    cta_link: prismicT.LinkField;
    /**
     * CTA Text field in *HeroSlice → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: hero_slice.items[].cta_text
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    cta_text: prismicT.KeyTextField;
}
/**
 * Default variation for HeroSlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: `HeroSlice`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeroSliceSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<HeroSliceSliceDefaultPrimary>, Simplify<HeroSliceSliceDefaultItem>>;
/**
 * Slice variation for *HeroSlice*
 *
 */
type HeroSliceSliceVariation = HeroSliceSliceDefault;
/**
 * HeroSlice Shared Slice
 *
 * - **API ID**: `hero_slice`
 * - **Description**: `HeroSlice`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeroSliceSlice = prismicT.SharedSlice<"hero_slice", HeroSliceSliceVariation>;
/**
 * Primary content in MainNavSlice → Primary
 *
 */
interface MainNavSliceSliceDefaultPrimary {
    /**
     * Title field in *MainNavSlice → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: main_nav_slice.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Description field in *MainNavSlice → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: main_nav_slice.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
    /**
     * MainNavImage field in *MainNavSlice → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: main_nav_slice.primary.mainnavimage
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    mainnavimage: prismicT.ImageField<never>;
}
/**
 * Item in MainNavSlice → Items
 *
 */
export interface MainNavSliceSliceDefaultItem {
    /**
     * mainNavLinkText field in *MainNavSlice → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: main_nav_slice.items[].mainnavlinktext
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    mainnavlinktext: prismicT.RichTextField;
    /**
     * mainnavlink field in *MainNavSlice → Items*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: main_nav_slice.items[].mainnavlink
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    mainnavlink: prismicT.LinkField;
}
/**
 * Default variation for MainNavSlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: `MainNavSlice`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type MainNavSliceSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<MainNavSliceSliceDefaultPrimary>, Simplify<MainNavSliceSliceDefaultItem>>;
/**
 * Slice variation for *MainNavSlice*
 *
 */
type MainNavSliceSliceVariation = MainNavSliceSliceDefault;
/**
 * MainNavSlice Shared Slice
 *
 * - **API ID**: `main_nav_slice`
 * - **Description**: `MainNavSlice`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type MainNavSliceSlice = prismicT.SharedSlice<"main_nav_slice", MainNavSliceSliceVariation>;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { ContactpageDocumentData, ContactpageDocumentDataSlicesSlice, ContactpageDocument, HomepageDocumentData, HomepageDocumentDataSlicesSlice, HomepageDocument, NavbarDocumentData, NavbarDocumentDataSlicesSlice, NavbarDocument, AllDocumentTypes, ContactSliceDefaultPrimary, ContactSliceDefault, ContactSliceVariation, ContactSlice, HeroSliceSliceDefaultPrimary, HeroSliceSliceDefaultItem, HeroSliceSliceDefault, HeroSliceSliceVariation, HeroSliceSlice, MainNavSliceSliceDefaultPrimary, MainNavSliceSliceDefaultItem, MainNavSliceSliceDefault, MainNavSliceSliceVariation, MainNavSliceSlice };
    }
}